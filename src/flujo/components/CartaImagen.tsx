import { Image, StyleSheet, Text, View } from 'react-native';
import type { Pieza, Posicion } from '../pieza';

// Relacion alto/ancho por defecto (cartas: tarot 480x860, angeles 500x900 ~1.8).
export const RATIO_PIEZA = 1.8;

interface Props {
  pieza: Pieza;
  width: number;
  radio?: number;
  posicion?: Posicion;
}

/**
 * Arte de una pieza. Para la posicion invertida usa la imagen "-r" propia si
 * existe (runas), o rota 180 la normal (cartas). Placeholder con el numeral si
 * todavia no esta dibujada.
 */
export function CartaImagen({ pieza, width, radio = 8, posicion = 'normal' }: Props) {
  const height = width * (pieza.ratio ?? RATIO_PIEZA);
  const dimensiones = { width, height, borderRadius: radio };

  // La invertida se muestra rotando 180 la imagen (como las cartas).
  const rotar = posicion === 'invertida';

  // Dibujo propio (I Ching: las lineas del hexagrama) tiene prioridad.
  if (pieza.dibujo) {
    return <View style={dimensiones}>{pieza.dibujo({ width, height })}</View>;
  }

  if (pieza.imagen != null) {
    return (
      <Image
        source={pieza.imagen}
        style={rotar ? [dimensiones, estilos.rotada] : dimensiones}
        resizeMode="cover"
      />
    );
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
  rotada: {
    transform: [{ rotate: '180deg' }],
  },
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
