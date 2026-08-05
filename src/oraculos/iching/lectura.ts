import type { Tema } from '@/pregunta/tipos';
import { HEXAGRAMAS_ES } from './content/es/hexagramas';
import { numeroDeLineas } from './secuencia';
import type { TiradaIching } from './tirada';

/**
 * Arma los parrafos de la lectura a partir de la tirada. Es deterministica: sale
 * del contenido escrito, sin nada generado. Estructura tradicional:
 *   hexagrama principal -> lineas en movimiento -> hexagrama resultante.
 * Si el hexagrama todavia no tiene texto (33..64), cae a un fallback honesto.
 */
export function lecturaIching(tirada: TiradaIching, tema: Tema): string[] {
  const parrafos: string[] = [];

  const numPrim = numeroDeLineas(tirada.lineas);
  const hexPrim = HEXAGRAMAS_ES[numPrim];

  if (hexPrim) {
    parrafos.push(`Tu consulta responde con el hexagrama ${hexPrim.numero}, ${hexPrim.nombre}.`);
    parrafos.push(hexPrim.dictamen);
    parrafos.push(hexPrim.significado[tema]);
  } else {
    parrafos.push(
      `Tu consulta responde con el hexagrama ${numPrim}. El texto completo de este ` +
        `hexagrama todavía está en preparación.`
    );
  }

  const posicionesCambio = tirada.cambiantes
    .map((c, i) => (c ? i : -1))
    .filter((i) => i >= 0);

  if (hexPrim && posicionesCambio.length > 0) {
    parrafos.push('Hay líneas en movimiento, que señalan lo que está cambiando:');
    for (const i of posicionesCambio) {
      // i es 0-based abajo->arriba; lineasCambiantes está en orden de posición.
      const linea = hexPrim.lineasCambiantes[i];
      parrafos.push(`Línea ${i + 1}. ${linea.texto}`);
    }
  }

  if (tirada.resultante) {
    const numRes = numeroDeLineas(tirada.resultante);
    const hexRes = HEXAGRAMAS_ES[numRes];
    if (hexRes) {
      parrafos.push(`La situación evoluciona hacia el hexagrama ${hexRes.numero}, ${hexRes.nombre}.`);
      parrafos.push(hexRes.significado[tema]);
    } else {
      parrafos.push(
        `La situación evoluciona hacia el hexagrama ${numRes} (texto en preparación).`
      );
    }
  } else {
    parrafos.push(
      'No hay líneas en movimiento: la situación es estable por ahora, sin una ' +
        'transformación marcada a la vista.'
    );
  }

  return parrafos;
}
