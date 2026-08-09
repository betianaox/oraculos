import angeles from './angeles/modulo';
import buzios from './buzios/modulo';
import egipcio from './egipcio/modulo';
import iching from './iching/modulo';
import runas from './runas/modulo';
import tarot from './tarot/modulo';
import type { CodigoIdioma } from '@/i18n/idiomas';
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

/**
 * Los oraculos que se OFRECEN en un idioma. El que declara `idiomas` solo
 * aparece en esos; el que no declara nada, en todos.
 *
 * El carrusel, el fondo y el footer iteran sobre esto, no sobre ORACULOS.
 */
export function oraculosDe(idioma: CodigoIdioma): readonly OraculoModulo[] {
  return ORACULOS.filter((o) => !o.idiomas || o.idiomas.includes(idioma));
}

/**
 * Busca en la lista COMPLETA, sin filtrar por idioma: si una pantalla ya esta
 * abierta o queda un id guardado de antes, tiene que seguir resolviendo aunque
 * el oraculo ya no se ofrezca en el idioma activo.
 */
export function oraculoPorId(id: string): OraculoModulo | undefined {
  return ORACULOS.find((o) => o.id === id);
}
