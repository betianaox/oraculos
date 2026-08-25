import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';
import { hexAlfa } from '@/shell/color';
import { BotonVoz } from '@/flujo/components/BotonVoz';
import { SelectorFlujo } from '@/flujo/components/SelectorFlujo';
import { RUTAS_LECTURA } from '@/flujo/voz';
import { guardarCaida } from '@/flujo/caida';
import { useCompartirLectura } from '@/flujo/components/useCompartirLectura';
import { tirarBuzios } from '../tirada';
import {
  BASE_BUZIOS,
  CANT,
  TableroBuzios,
  caraCauri,
  medidasBuzios,
  repartirPosiciones,
  ubicarCauri,
} from '../tablero';
import { lecturaBuzios } from '../lectura';
import { paqueteBuzios } from '../content/paquete';

const COSTO = 1;
const STAGGER_MS = 55; // desfase entre una caida y la siguiente
const CAIDA_MS = 430; // duracion de la caida de cada cauri
const PAUSA_MS = 1900; // pausa entre la primera y la segunda tirada

type Props = NativeStackScreenProps<RootStackParamList, 'TiradaBuzios'>;

type Fase = 'una' | 'entreacto' | 'dos' | 'listo';

export function TiradaBuziosScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta, tema, analisis } = route.params;
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const insets = useSafeAreaInsets();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const gastarGemas = useApp((s) => s.gastarGemas);
  const registrarPregunta = useApp((s) => s.registrarPregunta);

  const caida = useMemo(() => tirarBuzios(), []);
  const parrafos = useMemo(
    () => lecturaBuzios(caida, tema, analisis, idioma),
    [caida, tema, analisis, idioma],
  );
  const pos1 = useMemo(() => repartirPosiciones(), []);
  const pos2 = useMemo(() => repartirPosiciones(), []);

  const anims = useRef(Array.from({ length: CANT }, () => new Animated.Value(0))).current;
  const [area, setArea] = useState<{ w: number; h: number } | null>(null);
  const [fase, setFase] = useState<Fase>('una');
  const [mostrando, setMostrando] = useState<1 | 2>(1);
  const iniciado = useRef(false);

  const listo = fase === 'listo';
  const S = area ? Math.floor(Math.min(area.w - 8, area.h - 44)) : 0;

  useEffect(() => {
    gastarGemas(COSTO);
    // Una tirada ES una pregunta. Este contador solo sube y no lo mira nadie
    // mas que la valoracion (ver `shell/review.ts`).
    registrarPregunta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // La caida que se comparte es la SEGUNDA, que es la que queda a la vista: la
  // primera ya fue reemplazada en pantalla cuando se puede compartir.
  useEffect(() => {
    guardarCaida(oraculoId, pregunta, ({ ancho, alto }) => (
      <TableroBuzios S={Math.floor(Math.min(ancho, alto))} pos={pos2} caras={caida.caras2} />
    ));
  }, [oraculoId, pregunta, pos2, caida.caras2]);

  const compartir = useCompartirLectura({ oraculo, pregunta, parrafos, disabled: !listo });

  // Arranca la doble caida recien cuando ya se midio el area.
  useEffect(() => {
    if (S <= 0 || iniciado.current) return;
    iniciado.current = true;
    let cancel = false;
    let pausa: ReturnType<typeof setTimeout> | undefined;

    const correr = (onDone: () => void) => {
      anims.forEach((a) => a.setValue(0));
      Animated.stagger(
        STAGGER_MS,
        anims.map((v) =>
          Animated.timing(v, {
            toValue: 1,
            duration: CAIDA_MS,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          })
        )
      ).start(({ finished }) => {
        if (finished && !cancel) onDone();
      });
    };

    // 1ra tirada (el odu) -> pausa -> 2da tirada (la orientacion).
    correr(() => {
      setFase('entreacto');
      pausa = setTimeout(() => {
        if (cancel) return;
        setMostrando(2);
        setFase('dos');
        correr(() => setFase('listo'));
      }, PAUSA_MS);
    });

    return () => {
      cancel = true;
      if (pausa) clearTimeout(pausa);
      anims.forEach((a) => a.stopAnimation());
    };
  }, [S, anims]);

  const { cauriW, cauriH } = medidasBuzios(S);

  const pos = mostrando === 1 ? pos1 : pos2;
  const caras = mostrando === 1 ? caida.caras1 : caida.caras2;

  const { odus, textos: textosBuzios } = paqueteBuzios(idioma);
  const oduNombre = odus[caida.odu].nombre;
  const rotulo =
    fase === 'una'
      ? textosBuzios.primeraTirada
      : fase === 'entreacto'
        ? `${caida.abiertos1} abiertos · ${oduNombre}`
        : fase === 'dos'
          ? textosBuzios.segundaTirada
          : `${oduNombre} · ${
              caida.orientacion === 'favorable' ? t('buzios.aFavor') : t('buzios.desafio')
            }`;

  const onArea = (e: LayoutChangeEvent) => {
    const { width: w, height: h } = e.nativeEvent.layout;
    setArea((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
  };

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.3), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header
        accion="cerrar"
        onAccion={() => navigation.popTo('Oraculo', { oraculoId, seccion: 'pregunta' })}
        titulo={nombre}
      />

      <View style={estilos.cuerpo} onLayout={onArea}>
        {S > 0 && (
          <View style={{ width: S, height: S }}>
            <Image source={BASE_BUZIOS} style={{ width: S, height: S }} resizeMode="contain" />
            {pos.map((p, i) => {
              return (
                <Animated.Image
                  key={`${mostrando}-${i}`}
                  source={caraCauri(caras[i])}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    ...ubicarCauri(p, S),
                    opacity: anims[i].interpolate({ inputRange: [0, 0.3, 1], outputRange: [0, 1, 1] }),
                    transform: [
                      { translateY: anims[i].interpolate({ inputRange: [0, 1], outputRange: [-S * 0.45, 0] }) },
                      { rotate: `${p.rot}deg` },
                    ],
                  }}
                />
              );
            })}
          </View>
        )}

        <Text style={estilos.rotulo}>{rotulo}</Text>
      </View>

      <View style={[estilos.pie, { paddingBottom: insets.bottom + 14 }]}>
        <SelectorFlujo
          actual="tirada"
          onTirada={() => {}}
          onLectura={() => navigation.navigate('Lectura', { oraculoId, pregunta, parrafos })}
          lecturaDisabled={!listo}
        />
        <BotonVoz texto={parrafos.join('\n\n')} rutas={RUTAS_LECTURA} disabled={!listo} />
        {compartir.boton}
      </View>

      {compartir.tarjeta}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  cuerpo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: espaciado.sm,
  },
  rotulo: {
    color: 'rgba(230,232,239,0.75)',
    fontSize: 15,
    fontFamily: fuente('ui'),
    textAlign: 'center',
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
});
