import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Image,
  PixelRatio,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { RATIO_PIEZA, CartaImagen } from '../components/CartaImagen';
import { CartaAmpliable } from '../components/CartaAmpliable';
import { tresAlAzar, type Pieza, type Posicion } from '../pieza';
import { consejoDeHoy, guardarConsejo } from '../consejo';

type Props = NativeStackScreenProps<RootStackParamList, 'ConsejoDelDia'>;

interface Elegida {
  pieza: Pieza;
  posicion: Posicion;
}

export function ConsejoDelDiaScreen({ navigation, route }: Props) {
  const { oraculoId } = route.params;
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombreOraculo = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const contenido = useMemo(() => oraculo?.contenido?.(idioma), [oraculo, idioma]);
  const mazo = oraculo?.mazo ?? [];
  const modo = contenido?.consejoModo ?? 'elegir';
  const invierte = !!contenido?.invierte;

  const [cargando, setCargando] = useState(true);
  const [ofrecidas, setOfrecidas] = useState<Pieza[]>([]);
  const [elegida, setElegida] = useState<Elegida | null>(null);

  const flip = useRef(new Animated.Value(0)).current; // 0 = dorso, 1 = frente
  const opacidadConsejo = useRef(new Animated.Value(0)).current;

  const posicionDe = (pieza: Pieza): Posicion =>
    invierte && !pieza.simetrica && Math.random() < 0.5 ? 'invertida' : 'normal';

  useEffect(() => {
    consejoDeHoy(oraculoId).then((guardado) => {
      if (guardado) {
        const pieza = mazo.find((p) => p.id === guardado.piezaId);
        if (pieza) setElegida({ pieza, posicion: guardado.posicion });
        flip.setValue(1);
        opacidadConsejo.setValue(1);
      } else if (modo === 'directo') {
        const pieza = mazo[Math.floor(Math.random() * mazo.length)];
        const posicion = posicionDe(pieza);
        setElegida({ pieza, posicion });
        guardarConsejo(oraculoId, pieza.id, posicion);
        flip.setValue(1);
        opacidadConsejo.setValue(1);
      } else {
        setOfrecidas(tresAlAzar(mazo));
      }
      setCargando(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elegir = (pieza: Pieza) => {
    const posicion = posicionDe(pieza);
    setElegida({ pieza, posicion });
    guardarConsejo(oraculoId, pieza.id, posicion);
    flip.setValue(0);
    opacidadConsejo.setValue(0);
    Animated.sequence([
      Animated.timing(flip, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(opacidadConsejo, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  };

  const anchoCarta = Math.min(width * 0.5, 480 / PixelRatio.get());
  const altoCarta = anchoCarta * (elegida?.pieza.ratio ?? RATIO_PIEZA);
  const anchoBack = Math.floor((width - espaciado.lg * 2 - 24) / 3);
  const altoBack = anchoBack * (mazo[0]?.ratio ?? RATIO_PIEZA);

  const rotDorso = flip.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const rotFrente = flip.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  const reverso = contenido?.reverso;

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombreOraculo} />

      <View style={estilos.cuerpo}>
        <Text style={estilos.titulo}>{t('consejo.titulo')}</Text>

        {!cargando && modo === 'elegir' && !elegida && (
          <View style={estilos.centro}>
            <Text style={estilos.prompt}>{t('consejo.elegir')}</Text>
            <View style={estilos.filaBacks}>
              {ofrecidas.map((pieza) => (
                <Pressable key={pieza.id} onPress={() => elegir(pieza)}>
                  {(pieza.dorso ?? reverso) != null ? (
                    <Image
                      source={pieza.dorso ?? reverso}
                      style={{ width: anchoBack, height: altoBack, borderRadius: 8 }}
                      resizeMode="cover"
                    />
                  ) : null}
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {!cargando && elegida && (
          <ScrollView contentContainerStyle={estilos.resultado} showsVerticalScrollIndicator={false}>
            {modo === 'directo' ? (
              <CartaAmpliable pieza={elegida.pieza} posicion={elegida.posicion}>
                <CartaImagen pieza={elegida.pieza} width={anchoCarta} radio={10} posicion={elegida.posicion} />
              </CartaAmpliable>
            ) : (
              <View style={{ width: anchoCarta, height: altoCarta }}>
                <Animated.View
                  style={[estilos.cara, { transform: [{ perspective: 900 }, { rotateY: rotDorso }] }]}
                >
                  {(elegida.pieza.dorso ?? reverso) != null ? (
                    <Image
                      source={elegida.pieza.dorso ?? reverso}
                      style={{ width: anchoCarta, height: altoCarta, borderRadius: 10 }}
                      resizeMode="cover"
                    />
                  ) : null}
                </Animated.View>
                <Animated.View
                  style={[estilos.cara, { transform: [{ perspective: 900 }, { rotateY: rotFrente }] }]}
                >
                  <CartaImagen pieza={elegida.pieza} width={anchoCarta} radio={10} posicion={elegida.posicion} />
                </Animated.View>
              </View>
            )}

            <Animated.View style={[estilos.bloqueConsejo, { opacity: opacidadConsejo }]}>
              <Text style={estilos.nombre}>{contenido?.nombre(elegida.pieza)}</Text>
              <Text style={estilos.consejo}>{contenido?.consejo(elegida.pieza, elegida.posicion)}</Text>
              <Text style={estilos.vuelveManana}>{t('consejo.vuelveManana')}</Text>
            </Animated.View>
          </ScrollView>
        )}
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
    paddingHorizontal: espaciado.lg,
  },
  titulo: {
    color: colores.texto,
    fontSize: 24,
    textAlign: 'center',
    marginTop: espaciado.sm,
    fontFamily: fuente('subtituloMedium'),
  },
  centro: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: espaciado.xxl,
    paddingTop: espaciado.xxxl,
  },
  prompt: {
    color: 'rgba(230,232,239,0.85)',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
    fontFamily: fuente('subtitulo'),
  },
  filaBacks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: espaciado.md,
  },
  resultado: {
    alignItems: 'center',
    paddingTop: espaciado.xl,
    paddingBottom: espaciado.sm,
    gap: espaciado.xl,
  },
  cara: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  bloqueConsejo: {
    alignItems: 'center',
    gap: espaciado.md,
  },
  nombre: {
    color: colores.texto,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fuente('tituloBold'),
  },
  consejo: {
    color: 'rgba(230,232,239,0.9)',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },
  vuelveManana: {
    color: 'rgba(230,232,239,0.5)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: espaciado.xs,
    fontFamily: fuente('ui'),
  },
});
