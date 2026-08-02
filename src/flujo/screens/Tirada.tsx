import { useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { tirarCruz, type PiezaTirada } from '../pieza';
import { TEXTO_DEMO } from '../demo';
import { RATIO_PIEZA, CartaImagen } from '../components/CartaImagen';
import { CartaAmpliable } from '../components/CartaAmpliable';
import { BotonIcono } from '../components/BotonIcono';
import { BotonVoz } from '../components/BotonVoz';
import { RUTAS_LECTURA } from '../voz';

type Props = NativeStackScreenProps<RootStackParamList, 'Tirada'>;

const AIRE = 16;
const RESPIRO = 14;
const PASO_MS = 170;
const COSTO = 1;

/**
 * Tirada COMPARTIDA (la cruz de 5 piezas). Usa el mazo del oraculo activo; la
 * animacion, el tamano responsive y los botones son iguales para todos.
 */
export function TiradaScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const [tirada] = useState<PiezaTirada[]>(() => tirarCruz(oraculo?.mazo ?? []));
  const [area, setArea] = useState<{ w: number; h: number } | null>(null);
  const gastarGemas = useApp((s) => s.gastarGemas);

  useEffect(() => {
    gastarGemas(COSTO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const anims = useRef([0, 1, 2, 3, 4].map(() => new Animated.Value(0))).current;
  useEffect(() => {
    anims.forEach((a) => a.setValue(0));
    Animated.stagger(
      PASO_MS,
      anims.map((a) => Animated.timing(a, { toValue: 1, duration: 300, useNativeDriver: true }))
    ).start();
  }, [tirada, anims]);

  const gap = Math.round(width * 0.022);
  let cartaW = 0;
  if (area) {
    const anchoDisp = area.w - AIRE * 2;
    const altoDisp = area.h - RESPIRO * 2;
    const porAncho = (anchoDisp - gap * 2) / 3;
    const porAlto = (altoDisp - gap * 2) / (3 * RATIO_PIEZA);
    cartaW = Math.floor(Math.min(porAncho, porAlto));
  }
  const cartaH = cartaW * RATIO_PIEZA;

  const onArea = (e: LayoutChangeEvent) => {
    const { width: w, height: h } = e.nativeEvent.layout;
    setArea((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
  };

  const renderCarta = (slot: number) => {
    const { pieza, posicion } = tirada[slot];
    const anim = anims[slot];
    return (
      <Animated.View
        style={{
          opacity: anim,
          transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) }],
        }}
      >
        <CartaAmpliable pieza={pieza} posicion={posicion}>
          <View style={posicion === 'invertida' ? estilos.invertida : undefined}>
            <CartaImagen pieza={pieza} width={cartaW} radio={6} />
          </View>
        </CartaAmpliable>
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

      <Header accion="cerrar" onAccion={() => navigation.popToTop()} titulo={nombre} />

      <View style={estilos.area} onLayout={onArea}>
        {area && cartaW > 0 && (
          <View style={{ width: cartaW * 3 + gap * 2 }}>
            <View style={[estilos.filaCentrada, filaAltura]}>{renderCarta(3)}</View>
            <View style={[estilos.filaRenglon, filaAltura, { gap }]}>
              {renderCarta(0)}
              {renderCarta(1)}
              {renderCarta(2)}
            </View>
            <View style={[estilos.filaCentrada, { height: cartaH }]}>{renderCarta(4)}</View>
          </View>
        )}
      </View>

      <View style={[estilos.pie, { paddingBottom: insets.bottom + RESPIRO }]}>
        <BotonIcono
          accessibilityLabel={t('flujo.verLectura')}
          onPress={() => navigation.navigate('Lectura', { oraculoId, tirada, pregunta })}
        >
          <MaterialCommunityIcons name="script-text-outline" size={26} color={colores.texto} />
        </BotonIcono>
        <BotonVoz texto={TEXTO_DEMO} rutas={RUTAS_LECTURA} />
        <BotonIcono
          accessibilityLabel={t('flujo.nuevaPregunta')}
          onPress={() => navigation.navigate('Oraculo', { oraculoId, seccion: 'pregunta' })}
        >
          <MaterialCommunityIcons name="crystal-ball" size={26} color={colores.texto} />
        </BotonIcono>
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
  filaCentrada: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filaRenglon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  invertida: {
    transform: [{ rotate: '180deg' }],
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
});
