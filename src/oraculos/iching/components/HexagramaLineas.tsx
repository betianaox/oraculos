import { View } from 'react-native';
import type { LineasHexagrama } from '../content/types';

// Marfil calido: contrasta sobre placa oscura sin encandilar (tema tierra).
const ORO = '#E7C89A';
const PLACA = '#17120D';

/**
 * Traza las 6 lineas de un hexagrama. En el dato van de abajo hacia arriba
 * ([0] = inferior), y se dibujan de arriba hacia abajo (por eso el reverse).
 * Yang = linea entera; yin = linea partida con un hueco al centro.
 */
export function HexagramaLineas({
  lineas,
  width,
  height,
  color = ORO,
}: {
  lineas: LineasHexagrama;
  width: number;
  height: number;
  color?: string;
}) {
  const filas = [...lineas].reverse(); // filas[0] = linea superior (indice 5)
  const grosor = Math.max(3, Math.round(height * 0.08));
  const hueco = Math.round(width * 0.16);
  const barra = { flex: 1, backgroundColor: color, borderRadius: grosor / 2 };

  return (
    <View style={{ width, height, justifyContent: 'space-evenly', alignItems: 'center' }}>
      {filas.map((v, i) => (
        <View key={i} style={{ flexDirection: 'row', width, height: grosor }}>
          {v === 1 ? (
            <View style={barra} />
          ) : (
            <>
              <View style={barra} />
              <View style={{ width: hueco }} />
              <View style={barra} />
            </>
          )}
        </View>
      ))}
    </View>
  );
}

/** El hexagrama sobre una placa oscura, para la wiki y el detalle. */
export function CartaHexagrama({
  lineas,
  width,
  height,
}: {
  lineas: LineasHexagrama;
  width: number;
  height: number;
}) {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: PLACA,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(231,200,154,0.28)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HexagramaLineas lineas={lineas} width={width * 0.62} height={height * 0.6} />
    </View>
  );
}
