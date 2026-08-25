// Combinaciones del mazo de Ángeles: pares de cartas que, al salir juntas en la
// tirada, agregan un matiz propio a la lectura (la gracia distintiva de este
// oráculo frente al Tarot). Se detectan por número de carta, sin importar la
// posición. Solo las que el mazo declara de forma clara.
//
// El PAR es el mismo en todos los idiomas; lo que cambia es la nota. Por eso
// los pares viven acá y los textos en content/<idioma>/combinaciones.ts.
//
// Antes las notas estaban cableadas en español y se pegaban al final de la
// lectura sin mirar el idioma: alguien con la app en inglés leía sus tres
// párrafos en inglés y después "Una señal especial: hay un cruce que…".
export interface Combinacion {
  a: number;
  b: number;
}

/** Los pares declarados por el mazo, en el orden en que se buscan. */
export const PARES_ANGELES: Combinacion[] = [
  { a: 3, b: 56 },
  { a: 3, b: 57 },
  { a: 20, b: 67 },
  { a: 20, b: 76 },
  { a: 31, b: 67 },
  { a: 31, b: 49 },
  { a: 38, b: 67 },
  { a: 38, b: 68 },
  { a: 38, b: 70 },
  { a: 38, b: 73 },
];

/** Clave de una combinación, para buscar su nota en el paquete del idioma. */
export function claveCombinacion(c: Combinacion): string {
  return `${c.a}-${c.b}`;
}

/**
 * Devuelve la clave de la primera combinación presente entre los números
 * tirados, o '' si no hay ninguna. Se limita a una para no recargar la lectura.
 */
export function combinacionPresente(numeros: number[]): string {
  const set = new Set(numeros);
  for (const c of PARES_ANGELES) {
    if (set.has(c.a) && set.has(c.b)) return claveCombinacion(c);
  }
  return '';
}
