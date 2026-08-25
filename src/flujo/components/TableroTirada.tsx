import { StyleSheet, View } from 'react-native';
import type { PiezaTirada } from '../pieza';
import { medirTablero } from '../tablero';
import { RATIO_PIEZA, CartaImagen } from './CartaImagen';

interface Props {
  tirada: PiezaTirada[];
  disposicion: 'cruz' | 'fila';
  ancho: number;
  alto: number;
}

/**
 * La tirada quieta: las piezas donde cayeron, sin animación, sin sorteo y sin
 * poder tocarlas. Es lo que va en la tarjeta que se comparte.
 *
 * La pantalla de Tirada no usa este componente y dibuja lo suyo, porque cada
 * pieza va envuelta en su propia animación de entrada. Lo que sí comparten es
 * `medirTablero`, que es donde está la cuenta que importa: las dos ubican las
 * piezas igual aunque las dibujen distinto.
 */
export function TableroTirada({ tirada, disposicion, ancho, alto }: Props) {
  const ratio = tirada[0]?.pieza.ratio ?? RATIO_PIEZA;
  const enFila = disposicion === 'fila';
  const { cartaW, cartaH, gap } = medirTablero({
    disposicion,
    n: tirada.length,
    ratio,
    ancho,
    alto,
    // La tarjeta ya trae su propio margen: acá el área es toda para la tirada.
    aire: 0,
    respiro: 0,
    gapFila: Math.round(ancho * 0.03),
  });

  if (cartaW === 0 || tirada.length === 0) return null;

  const pieza = (i: number) => {
    const p = tirada[i];
    if (!p) return null;
    return (
      <CartaImagen
        key={i}
        pieza={p.pieza}
        width={cartaW}
        radio={enFila ? 12 : 6}
        posicion={p.posicion}
      />
    );
  };

  if (enFila) {
    return <View style={[estilos.fila, { gap }]}>{tirada.map((_, i) => pieza(i))}</View>;
  }

  const filaAltura = { height: cartaH, marginBottom: gap };
  return (
    <View style={{ width: cartaW * 3 + gap * 2 }}>
      <View style={[estilos.centrada, filaAltura]}>{pieza(3)}</View>
      <View style={[estilos.renglon, filaAltura, { gap }]}>
        {pieza(0)}
        {pieza(1)}
        {pieza(2)}
      </View>
      <View style={[estilos.centrada, { height: cartaH }]}>{pieza(4)}</View>
    </View>
  );
}

const estilos = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centrada: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  renglon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
