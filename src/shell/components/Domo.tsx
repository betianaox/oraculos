import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { OraculoModulo } from '@/oraculos/tipos';
import { useT } from '@/i18n';
import { colores, espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';
import { hexAlfa } from '../color';
import { PanelNombre } from './PanelNombre';

interface Props {
  oraculo: OraculoModulo;
  index: number;
  scrollX: Animated.Value;
  stride: number;
  itemWidth: number;
  spacing: number;
  onPress: () => void;
}

/**
 * Un domo del carrusel: nombre (Cinzel) arriba, el "domo" enmarcado (imagen o
 * placeholder) y el subtitulo (Cormorant) abajo. Crece y se enfoca cuando queda
 * centrado; se achica y atenua cuando esta al costado.
 */
export function Domo({ oraculo, index, scrollX, stride, itemWidth, spacing, onPress }: Props) {
  const t = useT();

  const rango = [(index - 1) * stride, index * stride, (index + 1) * stride];
  const escala = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0.7, 1, 0.7],
    extrapolate: 'clamp',
  });
  const opacidad = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0.55, 1, 0.55],
    extrapolate: 'clamp',
  });

  // Foco: 1 cuando el domo esta centrado. Solo el activo brilla.
  const foco = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  // Barrido de luz en loop (movimiento de luz dentro del domo activo).
  const brillo = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(brillo, {
        toValue: 1,
        duration: 3200,
        delay: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    );
    anim.start();
    return () => anim.stop();
  }, [brillo]);

  const desliz = brillo.interpolate({
    inputRange: [0, 1],
    outputRange: [-itemWidth * 0.7, itemWidth * 1.3],
  });

  return (
    <Animated.View
      style={{
        width: itemWidth,
        marginHorizontal: spacing / 2,
        opacity: opacidad,
        transform: [{ scale: escala }],
      }}
    >
      {/* Nombre del oraculo */}
      <PanelNombre nombre={t(oraculo.nombreKey)} />

      {/* Domo enmarcado */}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [estilos.marco, pressed && estilos.marcoPress]}
        accessibilityRole="button"
        accessibilityLabel={t(oraculo.nombreKey)}
      >
        {({ pressed }) => (
          <>
            {/* Iluminacion sutil del color del oraculo al presionar */}
            {pressed && (
              <>
                <View style={[estilos.glow, { backgroundColor: hexAlfa(oraculo.acento, 0.2) }]} />
                <View style={[estilos.glowCentro, { backgroundColor: hexAlfa(oraculo.acento, 0.3) }]} />
              </>
            )}
            {oraculo.domo ? (
              <Image source={oraculo.domo} style={estilos.imagen} resizeMode="contain" />
            ) : (
              <View style={[estilos.placeholder, { backgroundColor: hexAlfa(oraculo.acento, 0.14) }]}>
                <View style={[estilos.placeholderAnillo, { borderColor: hexAlfa(oraculo.acento, 0.5) }]} />
              </View>
            )}

            {/* Barrido de luz (solo visible en el domo centrado) */}
            {oraculo.domo && (
              <Animated.View style={[estilos.shimmerWrap, { opacity: foco }]} pointerEvents="none">
                <Animated.View
                  style={[
                    estilos.shimmerBand,
                    { width: itemWidth * 0.45, transform: [{ translateX: desliz }, { rotate: '18deg' }] },
                  ]}
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(255,255,255,0.14)', 'transparent']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={StyleSheet.absoluteFill}
                  />
                </Animated.View>
              </Animated.View>
            )}
          </>
        )}
      </Pressable>

      {/* Subtitulo */}
      <Text style={estilos.subtitulo} numberOfLines={2}>
        {t(`oraculos.${oraculo.id}.subtitulo`)}
      </Text>
    </Animated.View>
  );
}

const estilos = StyleSheet.create({
  marco: {
    aspectRatio: 1,
    backgroundColor: 'transparent',
  },
  marcoPress: {
    transform: [{ scale: 1.02 }],
  },
  glow: {
    position: 'absolute',
    top: '12%',
    left: '12%',
    right: '12%',
    bottom: '12%',
    borderRadius: 999,
  },
  glowCentro: {
    position: 'absolute',
    top: '28%',
    left: '28%',
    right: '28%',
    bottom: '28%',
    borderRadius: 999,
  },
  shimmerWrap: {
    position: 'absolute',
    top: '6%',
    left: '6%',
    right: '6%',
    bottom: '6%',
    borderRadius: 24,
    overflow: 'hidden',
  },
  shimmerBand: {
    position: 'absolute',
    top: '-25%',
    height: '150%',
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderAnillo: {
    width: '55%',
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 1.5,
  },
  subtitulo: {
    marginTop: espaciado.lg,
    color: 'rgba(240,242,248,0.9)',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.3,
    fontFamily: fuente('subtitulo'),
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
});
