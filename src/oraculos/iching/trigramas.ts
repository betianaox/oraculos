import type { LineasHexagrama, TrigramaId } from './content/types';

// Los 8 trigramas se derivan del patron de 3 lineas (abajo->arriba), asi el
// dato del hexagrama nunca puede contradecirse consigo mismo.
const PATRONES: Record<string, TrigramaId> = {
  '111': 'cielo',
  '000': 'tierra',
  '100': 'trueno', // yang abajo
  '010': 'agua',
  '001': 'montana', // yang arriba
  '011': 'viento',
  '101': 'fuego',
  '110': 'lago',
};

const clave = (a: number, b: number, c: number) => `${a}${b}${c}`;

/** Trigrama inferior: lineas[0..2] (las de abajo). */
export function trigramaInferior(l: LineasHexagrama): TrigramaId {
  return PATRONES[clave(l[0], l[1], l[2])];
}

/** Trigrama superior: lineas[3..5] (las de arriba). */
export function trigramaSuperior(l: LineasHexagrama): TrigramaId {
  return PATRONES[clave(l[3], l[4], l[5])];
}

export const NOMBRE_TRIGRAMA: Record<TrigramaId, string> = {
  cielo: 'Cielo',
  tierra: 'Tierra',
  trueno: 'Trueno',
  agua: 'Agua',
  montana: 'Montaña',
  viento: 'Viento',
  fuego: 'Fuego',
  lago: 'Lago',
};
