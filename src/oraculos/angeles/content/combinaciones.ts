// Combinaciones del mazo de Ángeles: pares de cartas que, al salir juntas en la
// tirada, agregan un matiz propio a la lectura (la gracia distintiva de este
// oráculo frente al Tarot). Se detectan por número de carta, sin importar la
// posición. Están redactadas con prudencia (nunca sentencian): son señales.
// Solo las que el mazo declara de forma clara.

export interface Combinacion {
  a: number;
  b: number;
  nota: string;
}

export const COMBINACIONES_ANGELES: Combinacion[] = [
  {
    a: 3,
    b: 56,
    nota: 'El Serafín Cantor junto al Ángel del Amor augura un buen futuro, y a veces anuncia la llegada de un embarazo.',
  },
  {
    a: 3,
    b: 57,
    nota: 'El Serafín Cantor junto al Ángel del Amor augura un buen futuro, y a veces anuncia la llegada de un embarazo.',
  },
  {
    a: 20,
    b: 67,
    nota: 'Hamiel junto a Lucifer es un aviso suave: conviene prestar atención a la salud.',
  },
  {
    a: 20,
    b: 76,
    nota: 'Hamiel junto a Rimmon es un aviso suave: conviene prestar atención a la salud.',
  },
  {
    a: 31,
    b: 67,
    nota: 'Rafael junto a Lucifer habla de una pasión intensa; que perdure dependerá de cómo caigan las cartas.',
  },
  {
    a: 31,
    b: 49,
    nota: 'Rafael junto al Ángel del Juicio anuncia prosperidad y amistades importantes.',
  },
  {
    a: 38,
    b: 67,
    nota: 'El Ángel de la Muerte junto a Lucifer toca el terreno de la intimidad: algo pide cuidado en ese plano.',
  },
  {
    a: 38,
    b: 68,
    nota: 'El Ángel de la Muerte junto a Abadón apunta a un tema de salud que merece atención.',
  },
  {
    a: 38,
    b: 70,
    nota: 'El Ángel de la Muerte junto a Mastema enciende una señal de hechicería: leé el conjunto con cuidado.',
  },
  {
    a: 38,
    b: 73,
    nota: 'El Ángel de la Muerte junto a Kemuel señala una situación que se paraliza y se demora.',
  },
  {
    a: 67,
    b: 60,
    nota: 'Lucifer junto al Ángel de los Hijos habla de hijos nacidos fuera del matrimonio.',
  },
];

/**
 * Devuelve la nota de la primera combinación presente entre los números
 * tirados, o '' si no hay ninguna. Se limita a una para no recargar la lectura.
 */
export function combinacionPresente(numeros: number[]): string {
  const set = new Set(numeros);
  for (const c of COMBINACIONES_ANGELES) {
    if (set.has(c.a) && set.has(c.b)) return c.nota;
  }
  return '';
}
