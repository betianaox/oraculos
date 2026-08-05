import { View } from 'react-native';

// Calido, combina con el gris/tierra de Buzios.
const ORO = '#D8B48A';
const PLACA = '#17120D';

/**
 * Representa un odu como una grilla de 16 puntos: los primeros `numero` van
 * "abiertos" (rellenos, dorados) y el resto "cerrados" (contorno tenue). Asi el
 * dibujo muestra de un vistazo cuantos cauries lo invocan.
 */
export function CartaOdu({
  numero,
  width,
  height,
}: {
  numero: number;
  width: number;
  height: number;
}) {
  const inner = Math.min(width, height) * 0.72;
  const cell = inner / 4;
  const d = Math.round(cell * 0.56);

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: PLACA,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(216,180,138,0.28)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ width: inner, height: inner, flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from({ length: 16 }, (_, i) => i < numero).map((abierto, i) => (
          <View key={i} style={{ width: cell, height: cell, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: d,
                height: d,
                borderRadius: d / 2,
                backgroundColor: abierto ? ORO : 'transparent',
                borderWidth: abierto ? 0 : 1.5,
                borderColor: 'rgba(216,180,138,0.4)',
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
