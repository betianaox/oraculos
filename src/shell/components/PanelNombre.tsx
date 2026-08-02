import { LinearGradient } from 'expo-linear-gradient';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { fuente } from '../theme/fuentes';

/**
 * Panel del nombre del oraculo: chapa metalica azulada (semitransparente) con
 * borde celeste, dos lineas de brillo apoyadas sobre el borde y el nombre en
 * Cinzel dorado. Adaptado del diseno de Betiana; los glows radiales del CSS se
 * simplifican (RN no tiene radial-gradient) a un glow exterior con sombra.
 *
 * El relleno dorado en degrade del texto quedo como color solido: en Android el
 * MaskedView no recortaba y dejaba ver el rectangulo del degrade.
 */

const METAL = ['#53627e', '#46536e', '#566989'] as const;
const METAL_POS = [0, 0.45, 1] as const;
const BRILLO = [
  'transparent',
  'rgba(180,240,255,0.8)',
  'rgba(255,255,255,0.95)',
  'rgba(180,240,255,0.8)',
  'transparent',
] as const;

function LineaBrillo({ estilo }: { estilo: StyleProp<ViewStyle> }) {
  return (
    <LinearGradient
      colors={BRILLO}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[estilos.linea, estilo]}
    />
  );
}

export function PanelNombre({ nombre }: { nombre: string }) {
  return (
    <View style={estilos.sombra}>
      <View style={estilos.panel}>
        <LinearGradient
          colors={[...METAL]}
          locations={[...METAL_POS]}
          style={[StyleSheet.absoluteFill, estilos.fondoMetal]}
        />

        <Text style={estilos.titulo} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
          {nombre}
        </Text>
      </View>

      {/* Destellos: van fuera de la caja recortada, apoyados sobre el borde. */}
      <LineaBrillo estilo={estilos.lineaArriba} />
      <LineaBrillo estilo={estilos.lineaAbajo} />
    </View>
  );
}

const estilos = StyleSheet.create({
  sombra: {
    alignSelf: 'center',
    marginBottom: 14,
    borderRadius: 16,
    // Glow exterior azul (solo iOS lee el color). En Android no ponemos
    // elevation: sobre la caja semitransparente dibujaba un borde tenue de mas.
    shadowColor: 'rgba(120,180,255,0.6)',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  fondoMetal: {
    opacity: 0.6,
  },
  panel: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(175,210,255,0.65)',
    paddingHorizontal: 28,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  linea: {
    position: 'absolute',
    left: '8%',
    right: '8%',
    height: 2,
    borderRadius: 999,
  },
  lineaArriba: {
    top: 0,
  },
  lineaAbajo: {
    bottom: 0,
  },
  titulo: {
    fontFamily: fuente('tituloBold'),
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#e9c46a',
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
