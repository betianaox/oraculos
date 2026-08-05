import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
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
import { CartaAmpliable } from '@/flujo/components/CartaAmpliable';
import type { Pieza } from '@/flujo/pieza';
import { RUTAS_LECTURA } from '@/flujo/voz';
import { tirarHexagrama, type CaraMoneda } from '../tirada';
import type { Linea } from '../content/types';
import { lecturaIching } from '../lectura';
import { numeroDeLineas } from '../secuencia';
import { CartaHexagrama } from '../components/HexagramaLineas';
import { HEXAGRAMAS_ES } from '../content/es/hexagramas';

const CARA = require('../../../../assets/oraculos/iching/monedas/cara.webp');
const CRUZ = require('../../../../assets/oraculos/iching/monedas/cruz.webp');

const COSTO = 1;
const ORO = '#E7C89A';
const GROSOR = 12; // alto de cada linea del hexagrama
const SEP_LINEAS = 14; // separacion entre lineas (aireada, como al agrandar)
const SWAP_MS = 70; // cada cuanto cambia la cara mientras la moneda esta en el aire
const TOSS_MS = 520; // duracion del salto de cada tirada
const GAP_MS = 950; // pausa (monedas quietas) para apreciar la linea antes de la proxima

type Props = NativeStackScreenProps<RootStackParamList, 'TiradaIching'>;

const monedaAlAzar = (): CaraMoneda => (Math.random() < 0.5 ? 'cara' : 'cruz');

export function TiradaIchingScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta, tema } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const gastarGemas = useApp((s) => s.gastarGemas);

  const tirada = useMemo(() => tirarHexagrama(), []);
  const parrafos = useMemo(() => lecturaIching(tirada, tema), [tirada, tema]);
  const textoVoz = parrafos.join('\n\n');

  const [reveladas, setReveladas] = useState(0); // lineas reveladas (0..6, de abajo)
  const [caras, setCaras] = useState<CaraMoneda[]>(['cara', 'cruz', 'cara']);
  const listo = reveladas >= 6;

  // Un solo valor 0->1 por tirada: la moneda gira en el lugar (sin saltar).
  const salto = useRef(new Animated.Value(0)).current;
  const rotaciones = useMemo(
    () =>
      // Gira sobre el eje vertical. Termina en multiplo de 360 para quedar de cara.
      [0, 1, 2].map((j) =>
        salto.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', `${360 * (j + 1)}deg`],
        })
      ),
    [salto]
  );

  useEffect(() => {
    gastarGemas(COSTO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tira las 6 lineas de abajo hacia arriba: por cada una, las monedas saltan y
  // giran (cambiando de cara en el aire) y al aterrizar muestran lo que cayo y se
  // dibuja la linea.
  useEffect(() => {
    let cancelado = false;
    let flick: ReturnType<typeof setInterval> | undefined;
    let pausa: ReturnType<typeof setTimeout> | undefined;

    const lanzar = (i: number) => {
      salto.setValue(0);
      flick = setInterval(() => {
        setCaras([monedaAlAzar(), monedaAlAzar(), monedaAlAzar()]);
      }, SWAP_MS);
      Animated.timing(salto, {
        toValue: 1,
        duration: TOSS_MS,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (flick) clearInterval(flick);
        if (cancelado || !finished) return;
        setCaras(tirada.detalle[i].monedas);
        setReveladas(i + 1);
        if (i < tirada.detalle.length - 1) {
          pausa = setTimeout(() => lanzar(i + 1), GAP_MS);
        }
      });
    };
    lanzar(0);

    return () => {
      cancelado = true;
      if (flick) clearInterval(flick);
      if (pausa) clearTimeout(pausa);
      salto.stopAnimation();
    };
  }, [tirada, salto]);

  const numPrim = numeroDeLineas(tirada.lineas);
  const hexPrim = HEXAGRAMAS_ES[numPrim];
  const monedaW = Math.min(88, Math.round(width * 0.22));
  const anchoLinea = Math.min(220, Math.round(width * 0.55));

  // Pieza del hexagrama para la lupa (agrandar), igual que en la wiki y el consejo.
  const piezaHex: Pieza = useMemo(
    () => ({
      id: `hex${numPrim}`,
      numero: numPrim,
      imagen: null,
      ratio: 1,
      dibujo: ({ width: w, height: h }) => (
        <CartaHexagrama lineas={tirada.lineas} width={w} height={h} />
      ),
    }),
    [numPrim, tirada.lineas]
  );

  const figura = (
    <View style={estilos.hex}>
      {[5, 4, 3, 2, 1, 0].map((idx) => {
        const d = tirada.detalle[idx];
        return (
          <LineaRow
            key={idx}
            visible={reveladas > idx}
            valor={d.valor}
            cambiante={d.cambiante}
            width={anchoLinea}
          />
        );
      })}
    </View>
  );

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

      <View style={estilos.cuerpo}>
        <View style={estilos.monedas}>
          {caras.map((c, j) => (
            <Animated.View
              key={j}
              style={{
                transform: [{ perspective: 700 }, { rotateY: rotaciones[j] }],
              }}
            >
              <Image
                source={c === 'cara' ? CARA : CRUZ}
                style={{ width: monedaW, height: monedaW }}
                resizeMode="contain"
              />
            </Animated.View>
          ))}
        </View>

        {listo ? <CartaAmpliable pieza={piezaHex}>{figura}</CartaAmpliable> : figura}

        <View style={estilos.rotulo}>
          {listo ? (
            <>
              <Text style={estilos.nombreHex}>
                {hexPrim ? `${hexPrim.numero}. ${hexPrim.nombre}` : `Hexagrama ${numPrim}`}
              </Text>
              {tirada.resultante ? (
                <Text style={estilos.subrotulo}>con líneas cambiantes</Text>
              ) : (
                <Text style={estilos.subrotulo}>sin líneas cambiantes</Text>
              )}
            </>
          ) : (
            <Text style={estilos.subrotulo}>Lanzando las monedas…</Text>
          )}
        </View>
      </View>

      <View style={[estilos.pie, { paddingBottom: insets.bottom + 14 }]}>
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

function LineaRow({
  visible,
  valor,
  cambiante,
  width,
}: {
  visible: boolean;
  valor: Linea;
  cambiante: boolean;
  width: number;
}) {
  const hueco = Math.round(width * 0.16);
  const barra = { flex: 1, height: GROSOR, backgroundColor: ORO, borderRadius: GROSOR / 2 };

  // El recuadro ocupa solo el ancho de las lineas (por eso queda centrado). La
  // marca ○/× va con posicion absoluta, colgando afuera a la derecha, para no
  // desplazar el hexagrama.
  return (
    <View style={{ width, height: GROSOR, flexDirection: 'row' }}>
      {!visible ? (
        <View
          style={{
            flex: 1,
            height: GROSOR,
            borderRadius: GROSOR / 2,
            backgroundColor: 'rgba(231,200,154,0.12)',
          }}
        />
      ) : valor === 1 ? (
        <View style={barra} />
      ) : (
        <>
          <View style={barra} />
          <View style={{ width: hueco }} />
          <View style={barra} />
        </>
      )}
      {visible && cambiante ? (
        <Text style={estilos.marca}>{valor === 1 ? '○' : '×'}</Text>
      ) : null}
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
    gap: espaciado.xxl,
  },
  monedas: {
    flexDirection: 'row',
    gap: espaciado.lg,
  },
  hex: {
    gap: SEP_LINEAS,
    alignItems: 'center',
  },
  marca: {
    position: 'absolute',
    right: -24,
    top: -3,
    width: 18,
    color: ORO,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },
  rotulo: {
    alignItems: 'center',
    gap: 4,
    minHeight: 54,
    paddingHorizontal: espaciado.xl,
  },
  nombreHex: {
    color: colores.texto,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: fuente('tituloBold'),
  },
  subrotulo: {
    color: 'rgba(230,232,239,0.6)',
    fontSize: 14,
    fontStyle: 'italic',
    fontFamily: fuente('ui'),
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
});
