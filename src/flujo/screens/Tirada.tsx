import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { tirarCruz, type EspecieTirada, type Pieza, type PiezaTirada } from '../pieza';
import { PARRAFOS_DEMO } from '../demo';
import { RATIO_PIEZA, CartaImagen } from '../components/CartaImagen';
import { CartaAmpliable } from '../components/CartaAmpliable';
import { BotonVoz } from '../components/BotonVoz';
import { SelectorFlujo } from '../components/SelectorFlujo';
import { RUTAS_LECTURA } from '../voz';

type Props = NativeStackScreenProps<RootStackParamList, 'Tirada'>;

const AIRE = 16;
const RESPIRO = 14;
const PASO_MS = 170;
const COSTO = 1;

// Sorteo: cada cuanto titila, y cuando se revela cada pieza (una por una).
const INTERVALO_SORTEO_MS = 90;
const demoraRevelado = (i: number) => 1100 + i * 650;

const CRUZ_DEFECTO: EspecieTirada = { disposicion: 'cruz', tirar: tirarCruz };

export function TiradaScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta, tema, analisis } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const mazo = oraculo?.mazo ?? [];

  const spec = oraculo?.tirada ?? CRUZ_DEFECTO;
  const [tirada] = useState<PiezaTirada[]>(() => spec.tirar(mazo));
  const [area, setArea] = useState<{ w: number; h: number } | null>(null);
  const gastarGemas = useApp((s) => s.gastarGemas);
  const idioma = useApp((s) => s.idioma);

  // Los parrafos de la lectura se arman aca (una vez) con el motor del oraculo,
  // o el demo si no tiene. Asi la voz suena igual en Tirada y Lectura.
  const parrafos = useMemo(() => {
    const p = oraculo?.lectura?.(tirada, tema, analisis, idioma) ?? [];
    return p.length > 0 ? p : PARRAFOS_DEMO;
  }, [oraculo, tirada, tema, analisis, idioma]);
  const textoVoz = parrafos.join('\n\n');

  const ratio = tirada[0]?.pieza.ratio ?? RATIO_PIEZA;
  const enFila = spec.disposicion === 'fila';
  const conSorteo = !!spec.sorteo;

  // Los botones de Lectura y voz se habilitan recien cuando termina la
  // animacion de entrada (si no, el texto queda disponible antes y se ve raro).
  const [listo, setListo] = useState(false);

  // Estado del sorteo (titileo + revelado uno por uno).
  const [revelado, setRevelado] = useState<boolean[]>(() => tirada.map(() => !conSorteo));
  const [vista, setVista] = useState<Pieza[]>(() => tirada.map((p) => p.pieza));

  useEffect(() => {
    gastarGemas(COSTO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Habilita los botones cuando la entrada (sorteo o escalonado) termino.
  useEffect(() => {
    const dur = conSorteo
      ? demoraRevelado(tirada.length - 1) + 500
      : PASO_MS * (tirada.length - 1) + 350;
    const to = setTimeout(() => setListo(true), dur);
    return () => clearTimeout(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animacion de entrada por escalonado (cuando NO hay sorteo).
  const anims = useRef(tirada.map(() => new Animated.Value(0))).current;
  useEffect(() => {
    if (conSorteo) return;
    anims.forEach((a) => a.setValue(0));
    Animated.stagger(
      PASO_MS,
      anims.map((a) => Animated.timing(a, { toValue: 1, duration: 300, useNativeDriver: true }))
    ).start();
  }, [anims, conSorteo]);

  // Efecto de sorteo: titila caras al azar y revela cada pieza a su tiempo.
  useEffect(() => {
    if (!conSorteo || mazo.length === 0) return;
    const alAzar = () => mazo[Math.floor(Math.random() * mazo.length)];
    const intervalo = setInterval(() => {
      setVista(tirada.map(() => alAzar()));
    }, INTERVALO_SORTEO_MS);
    const timeouts = tirada.map((_, i) =>
      setTimeout(() => {
        setRevelado((actual) => {
          const sig = [...actual];
          sig[i] = true;
          return sig;
        });
        if (i === tirada.length - 1) clearInterval(intervalo);
      }, demoraRevelado(i))
    );
    return () => {
      clearInterval(intervalo);
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tamano de pieza segun disposicion y area medida.
  let cartaW = 0;
  let gap = 0;
  if (area) {
    const anchoDisp = area.w - AIRE * 2;
    const altoDisp = area.h - RESPIRO * 2;
    if (enFila) {
      const n = tirada.length;
      gap = Math.round(width * 0.03);
      const porAncho = (anchoDisp - gap * (n - 1)) / n;
      const porAlto = altoDisp / ratio;
      cartaW = Math.floor(Math.min(porAncho, porAlto));
    } else {
      gap = Math.round(area.w * 0.022);
      const porAncho = (anchoDisp - gap * 2) / 3;
      const porAlto = (altoDisp - gap * 2) / (3 * ratio);
      cartaW = Math.floor(Math.min(porAncho, porAlto));
    }
  }
  const cartaH = cartaW * ratio;

  const onArea = (e: LayoutChangeEvent) => {
    const { width: w, height: h } = e.nativeEvent.layout;
    setArea((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
  };

  const renderPieza = (i: number) => {
    const final = tirada[i];
    const enSorteo = conSorteo && !revelado[i];
    const pieza = enSorteo ? vista[i] : final.pieza;
    const posicion = enSorteo ? 'normal' : final.posicion;
    const img = (
      <CartaImagen pieza={pieza} width={cartaW} radio={enFila ? 12 : 6} posicion={posicion} />
    );
    const contenido = (
      <CartaAmpliable pieza={final.pieza} posicion={final.posicion}>
        {img}
      </CartaAmpliable>
    );

    if (conSorteo) {
      return <View key={i}>{contenido}</View>;
    }
    const anim = anims[i];
    return (
      <Animated.View
        key={final.pieza.id}
        style={{
          opacity: anim,
          transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) }],
        }}
      >
        {contenido}
      </Animated.View>
    );
  };

  const filaAltura = { height: cartaH, marginBottom: gap };

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header
        accion="cerrar"
        onAccion={() => navigation.popTo('Oraculo', { oraculoId, seccion: 'pregunta' })}
        titulo={nombre}
      />

      <View style={estilos.area} onLayout={onArea}>
        {area && cartaW > 0 &&
          (enFila ? (
            <View style={[estilos.fila, { gap }]}>{tirada.map((_, i) => renderPieza(i))}</View>
          ) : (
            <View style={{ width: cartaW * 3 + gap * 2 }}>
              <View style={[estilos.filaCentrada, filaAltura]}>{renderPieza(3)}</View>
              <View style={[estilos.filaRenglon, filaAltura, { gap }]}>
                {renderPieza(0)}
                {renderPieza(1)}
                {renderPieza(2)}
              </View>
              <View style={[estilos.filaCentrada, { height: cartaH }]}>{renderPieza(4)}</View>
            </View>
          ))}
      </View>

      <View style={[estilos.pie, { paddingBottom: insets.bottom + RESPIRO }]}>
        <SelectorFlujo
          actual="tirada"
          onTirada={() => {}}
          onLectura={() => navigation.navigate('Lectura', { oraculoId, pregunta, parrafos })}
          lecturaDisabled={!listo}
        />
        <BotonVoz texto={textoVoz} rutas={RUTAS_LECTURA} disabled={!listo} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filaCentrada: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filaRenglon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
});
