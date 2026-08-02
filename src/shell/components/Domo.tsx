import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { OraculoModulo } from '@/oraculos/tipos';
import { useT } from '@/i18n';
import { colores, espaciado, radios } from '../theme/tokens';
import { fuente } from '../theme/fuentes';
import { hexAlfa } from '../color';

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
    outputRange: [0.9, 1, 0.9],
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
      <View style={[estilos.etiqueta, { borderColor: hexAlfa(oraculo.acento, 0.6) }]}>
        <Text style={estilos.nombre} numberOfLines={1}>
          {t(oraculo.nombreKey)}
        </Text>
      </View>

      {/* Domo enmarcado */}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          estilos.marco,
          { borderColor: hexAlfa(oraculo.acento, 0.55) },
          pressed && { transform: [{ scale: 0.98 }] },
        ]}
        accessibilityRole="button"
        accessibilityLabel={t(oraculo.nombreKey)}
      >
        {oraculo.domo ? (
          <Image source={oraculo.domo} style={estilos.imagen} resizeMode="cover" />
        ) : (
          <View style={[estilos.placeholder, { backgroundColor: hexAlfa(oraculo.acento, 0.14) }]}>
            <View style={[estilos.placeholderAnillo, { borderColor: hexAlfa(oraculo.acento, 0.5) }]} />
          </View>
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
  etiqueta: {
    alignSelf: 'center',
    paddingHorizontal: espaciado.xl,
    paddingVertical: espaciado.sm,
    marginBottom: espaciado.md,
    borderRadius: radios.md,
    borderWidth: 1,
    backgroundColor: colores.superficie,
  },
  nombre: {
    color: colores.texto,
    fontSize: 26,
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: fuente('tituloBold'),
    fontWeight: '700',
  },
  marco: {
    aspectRatio: 0.82,
    borderRadius: radios.lg,
    borderWidth: 1.5,
    backgroundColor: colores.superficie,
    overflow: 'hidden',
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
    marginTop: espaciado.md,
    color: colores.textoSuave,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: fuente('subtitulo'),
  },
});
