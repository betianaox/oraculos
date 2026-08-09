import { Animated, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCarrusel } from '../carrusel';
import { colores } from '../theme/tokens';
import { hexAlfa } from '../color';

interface Props {
  /** Desplazamiento horizontal del carrusel. */
  scrollX: Animated.Value;
  /** Paso entre domos (mismo valor que usa el carrusel). */
  stride: number;
}

/**
 * Fondo de la pantalla de inicio. Apila una capa por oraculo y hace cross-fade
 * entre ellas segun el desplazamiento del carrusel, para que el usuario sepa en
 * que seccion esta. Si un oraculo todavia no tiene imagen de fondo, se dibuja un
 * degrade neutro derivado de su color de acento.
 */
export function Fondo({ scrollX, stride }: Props) {
  const { listaLoop } = useCarrusel();

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* Base oscura constante, debajo de todo. */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: colores.fondo }]} />

      {listaLoop.map((oraculo, i) => {
        const opacidad = scrollX.interpolate({
          inputRange: [(i - 1) * stride, i * stride, (i + 1) * stride],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View key={`${oraculo.id}-${i}`} style={[StyleSheet.absoluteFill, { opacity: opacidad }]}>
            {oraculo.fondo ? (
              <Image source={oraculo.fondo} style={estilos.imagen} resizeMode="cover" />
            ) : (
              <LinearGradient
                colors={[hexAlfa(oraculo.acento, 0.32), colores.fondo]}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
            )}
          </Animated.View>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  imagen: {
    width: '100%',
    height: '100%',
  },
});
