import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
