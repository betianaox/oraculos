import { Image, StyleSheet, Text, View } from 'react-native';
import type { Pieza } from '../pieza';

// Relacion alto/ancho del arte (tarot 480x860, angeles 500x900: ~1.8).
export const RATIO_PIEZA = 1.8;

interface Props {
  pieza: Pieza;
  width: number;
  radio?: number;
}

/** Arte de una pieza, o un placeholder con el numeral si no esta dibujada. */
export function CartaImagen({ pieza, width, radio = 8 }: Props) {
  const height = width * RATIO_PIEZA;
  const dimensiones = { width, height, borderRadius: radio };

  if (pieza.imagen != null) {
    return <Image source={pieza.imagen} style={dimensiones} resizeMode="cover" />;
  }

  return (
    <View style={[estilos.placeholder, dimensiones]}>
      <View style={[estilos.marco, { borderRadius: radio - 3 }]}>
        <Text style={estilos.numero}>{pieza.numero}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  placeholder: {
    backgroundColor: '#1A1C24',
    borderWidth: 1.5,
    borderColor: 'rgba(175,210,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  marco: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'rgba(175,210,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    color: 'rgba(230,232,239,0.65)',
    fontSize: 22,
    fontWeight: '700',
  },
});
