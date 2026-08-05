import angeles from './angeles/modulo';
import buzios from './buzios/modulo';
import egipcio from './egipcio/modulo';
import iching from './iching/modulo';
import runas from './runas/modulo';
import tarot from './tarot/modulo';
import type { OraculoModulo } from './tipos';

/**
 * REGISTRO CENTRAL de oraculos.
 *
 * El orden de esta lista es el orden del carrusel en la pantalla de inicio.
 * Toda la carcaza (carrusel, fondos, navegacion) itera sobre esto: para sumar
 * un oraculo nuevo, crea src/oraculos/<nuevo>/modulo.ts y agregalo aca.
 */
export const ORACULOS: readonly OraculoModulo[] = [
  tarot,
  angeles,
  egipcio,
  runas,
  buzios,
  iching,
];

export function oraculoPorId(id: string): OraculoModulo | undefined {
  return ORACULOS.find((o) => o.id === id);
}
