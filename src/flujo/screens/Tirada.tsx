import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
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
import { colores } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { tirarCruz, type EspecieTirada, type Pieza, type PiezaTirada } from '../pieza';
import { useLectura } from '../useLectura';
import { RATIO_PIEZA, CartaImagen } from '../components/CartaImagen';
import { TableroTirada } from '../components/TableroTirada';
import { medirTablero } from '../tablero';
import { guardarCaida } from '../caida';
import { useCompartirLectura } from '../components/useCompartirLectura';
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

// Cuanto se le da a la IA para redactar, contado desde que se abre la pantalla.
// Los botones esperan a que conteste, asi que este numero ES lo que la persona
// puede llegar a esperar de mas: por eso 3 segundos y no mas. Parte de esos 3
// se los come la animacion de entrada, que corre igual, asi que la espera real
// que se percibe es menor.
const VENTANA_IA_MS = 3000;

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
  const registrarPregunta = useApp((s) => s.registrarPregunta);
  const idioma = useApp((s) => s.idioma);

  const ratio = tirada[0]?.pieza.ratio ?? RATIO_PIEZA;
  const enFila = spec.disposicion === 'fila';
  const conSorteo = !!spec.sorteo;

  // Cuanto dura la animacion de entrada, que es cuando se habilitan los botones.
  const duracionEntrada = conSorteo
    ? demoraRevelado(tirada.length - 1) + 500
    : PASO_MS * (tirada.length - 1) + 350;

  // Los parrafos de la lectura se arman aca (una vez), asi la voz suena igual
  // en Tirada y en Lectura (que los recibe por parametro de navegacion).
  const { parrafos, fuente, pendiente } = useLectura({
    oraculo,
    tirada,
    tema,
    analisis,
    idioma,
    pregunta,
    ventanaMs: VENTANA_IA_MS,
  });
  const textoVoz = parrafos.join('\n\n');

  // Los botones de Lectura y voz esperan dos cosas: que termine la animacion de
  // entrada (si no, el texto queda disponible antes y se ve raro) y que la IA
  // haya contestado o se le haya acabado el tiempo. Lo segundo importa porque
  // los parrafos viajan a Lectura POR VALOR: si se navega antes, la respuesta
  // de la IA llega tarde y se pierde, aunque fuera buena.
  const [animacionLista, setAnimacionLista] = useState(false);
  const listo = animacionLista && !pendiente;

  const compartir = useCompartirLectura({ oraculo, pregunta, parrafos, disabled: !listo });

  // Estado del sorteo (titileo + revelado uno por uno).
  const [revelado, setRevelado] = useState<boolean[]>(() => tirada.map(() => !conSorteo));
  const [vista, setVista] = useState<Pieza[]>(() => tirada.map((p) => p.pieza));

  useEffect(() => {
    gastarGemas(COSTO);
    // Una tirada ES una pregunta. Este contador solo sube y no lo mira nadie
    // mas que la valoracion (ver `shell/review.ts`).
    registrarPregunta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // La caida queda registrada para poder compartirla, desde aca y desde la
  // lectura (ver `flujo/caida.ts`). `tirada` sale de un useState inicializado
  // una sola vez, asi que esto corre una vez y no cambia.
  useEffect(() => {
    guardarCaida(oraculoId, pregunta, ({ ancho, alto }) => (
      <TableroTirada tirada={tirada} disposicion={spec.disposicion} ancho={ancho} alto={alto} />
    ));
  }, [oraculoId, pregunta, tirada, spec.disposicion]);

  // Habilita los botones cuando la entrada (sorteo o escalonado) termino.
  useEffect(() => {
    const to = setTimeout(() => setAnimacionLista(true), duracionEntrada);
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

  // Tamano de pieza segun disposicion y area medida (la misma cuenta que usa
  // la tarjeta que se comparte: ver `flujo/tablero.ts`).
  const { cartaW, cartaH, gap } = area
    ? medirTablero({
        disposicion: spec.disposicion,
        n: tirada.length,
        ratio,
        ancho: area.w,
        alto: area.h,
        aire: AIRE,
        respiro: RESPIRO,
        // El gap de la fila sale del ancho de la VENTANA y no del area: asi las
        // runas se ven igual de separadas sin importar cuanto alto le quede
        // libre a la tirada.
        gapFila: Math.round(width * 0.03),
      })
    : { cartaW: 0, cartaH: 0, gap: 0 };

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
        {/* Solo en desarrollo: que motor redacto lo que se esta leyendo. Sirve
            para comparar la voz de la IA con la de las plantillas. */}
        {__DEV__ && <Text style={estilos.sello}>motor: {fuente}</Text>}
        <SelectorFlujo
          actual="tirada"
          onTirada={() => {}}
          onLectura={() => navigation.navigate('Lectura', { oraculoId, pregunta, parrafos })}
          lecturaDisabled={!listo}
          interpretando={animacionLista && pendiente}
        />
        <BotonVoz texto={textoVoz} rutas={RUTAS_LECTURA} disabled={!listo} />
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
    gap: 12,
  },
  // Absoluto a proposito: el sello de desarrollo no debe correr ni un pixel
  // los botones reales, para que lo que se ve en dev sea lo que se ve en prod.
  sello: {
    position: 'absolute',
    top: -16,
    left: 14,
    fontSize: 10,
    letterSpacing: 0.5,
    color: colores.cromo,
    opacity: 0.6,
  },
});
