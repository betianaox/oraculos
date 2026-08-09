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
import { tirarBuzios } from '../tirada';
import { lecturaBuzios } from '../lectura';
import { ODUS_ES } from '../content/es/odus';

const BASE = require('../../../../assets/oraculos/buzios/caracoles/base.webp');
const ABIERTO = require('../../../../assets/oraculos/buzios/caracoles/abierto.webp');
const CERRADO = require('../../../../assets/oraculos/buzios/caracoles/cerrado.webp');

const COSTO = 1;
const CANT = 16; // dieciseis cauries
const RATIO_CAURI = 444 / 317; // alto/ancho del arte del cauri
const STAGGER_MS = 55; // desfase entre una caida y la siguiente
const CAIDA_MS = 430; // duracion de la caida de cada cauri
const PAUSA_MS = 1900; // pausa entre la primera y la segunda tirada

const RADIO_FRAC = 0.4; // radio del circulo util dentro de la base (fraccion de S)
const CAURI_W_FRAC = 0.11; // ancho del cauri (fraccion de S)
const COLL_FRAC = 0.55; // radio de colision del cauri (fraccion de su ancho)
const MAX_OVERLAP = 0.08; // superposicion maxima tolerada entre cauries (8%)

type Props = NativeStackScreenProps<RootStackParamList, 'TiradaBuzios'>;

type Pos = { x: number; y: number; rot: number; esc: number };
type Fase = 'una' | 'entreacto' | 'dos' | 'listo';

/**
 * Reparte los 16 cauries dentro del circulo evitando que se pisen (trabaja en
 * unidades normalizadas, el radio del circulo = 1). Devuelve solo posiciones y
 * rotacion; la cara (abierto/cerrado) la define la tirada.
 */
function repartirPosiciones(): Pos[] {
  const rNorm = (COLL_FRAC * CAURI_W_FRAC) / RADIO_FRAC;
  const usable = 1 - rNorm;
  const minDist = 2 * rNorm * (1 - MAX_OVERLAP);
  const puestos: Pos[] = [];

  for (let i = 0; i < CANT; i++) {
    let elegido: { x: number; y: number } | null = null;
    let mejorDist = -1;

    for (let intento = 0; intento < 50; intento++) {
      const r = usable * Math.sqrt(Math.random());
      const a = Math.random() * Math.PI * 2;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;

      let cercano = Infinity;
      for (const q of puestos) {
        const d = Math.hypot(px - q.x, py - q.y);
        if (d < cercano) cercano = d;
      }
      if (cercano >= minDist) {
        elegido = { x: px, y: py };
        break;
      }
      if (cercano > mejorDist) {
        mejorDist = cercano;
        elegido = { x: px, y: py };
      }
    }

    puestos.push({
      x: elegido!.x,
      y: elegido!.y,
      rot: Math.floor(Math.random() * 360),
      // Escala minima al azar (±8%) para que no se vean todos identicos.
      esc: 0.92 + Math.random() * 0.16,
    });
  }
  return puestos;
}

export function TiradaBuziosScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta, tema, analisis } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const gastarGemas = useApp((s) => s.gastarGemas);

  const caida = useMemo(() => tirarBuzios(), []);
  const parrafos = useMemo(
    () => lecturaBuzios(caida, tema, analisis),
    [caida, tema, analisis],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const radioColoca = S * RADIO_FRAC;
  const cauriW = Math.max(16, Math.round(S * CAURI_W_FRAC));
  const cauriH = cauriW * RATIO_CAURI;

  const pos = mostrando === 1 ? pos1 : pos2;
  const caras = mostrando === 1 ? caida.caras1 : caida.caras2;

  const oduNombre = ODUS_ES[caida.odu].nombre;
  const rotulo =
    fase === 'una'
      ? 'Primera tirada…'
      : fase === 'entreacto'
        ? `${caida.abiertos1} abiertos · ${oduNombre}`
        : fase === 'dos'
          ? 'Segunda tirada…'
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
            <Image source={BASE} style={{ width: S, height: S }} resizeMode="contain" />
            {pos.map((p, i) => {
              const w = cauriW * p.esc;
              const h = cauriH * p.esc;
              return (
                <Animated.Image
                  key={`${mostrando}-${i}`}
                  source={caras[i] ? ABIERTO : CERRADO}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    left: S / 2 + p.x * radioColoca - w / 2,
                    top: S / 2 + p.y * radioColoca - h / 2,
                    width: w,
                    height: h,
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
      </View>
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
    gap: 18,
  },
});
