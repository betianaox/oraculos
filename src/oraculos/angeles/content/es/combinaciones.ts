// Combinaciones del mazo de Ángeles: pares de cartas que, al salir juntas en la
// tirada, agregan un matiz propio a la lectura (la gracia distintiva de este
// oráculo frente al Tarot). Se detectan por número de carta, sin importar la
// posición. Solo las que el mazo declara de forma clara.
//
// Las notas NO nombran las cartas, igual que el resto de la lectura: la persona
// las tiene delante y lo que espera leer es qué dicen sobre su caso. Se redactan
// para engancharse después de "Una señal especial: ", así que empiezan en
// minúscula y no repiten esa idea.
export interface Combinacion {
  a: number;
  b: number;
  nota: string;
}

export const COMBINACIONES_ANGELES: Combinacion[] = [
  {
    a: 3,
    b: 56,
    nota: 'el encuentro de dos de estas cartas augura un buen futuro, y a veces anuncia la llegada de un embarazo.',
  },
  {
    a: 3,
    b: 57,
    nota: 'el encuentro de dos de estas cartas augura un buen futuro, y a veces anuncia la llegada de un embarazo.',
  },
  {
    a: 20,
    b: 67,
    nota: 'dos de estas cartas se cruzan en un aviso suave: conviene prestar atención a la salud.',
  },
  {
    a: 20,
    b: 76,
    nota: 'dos de estas cartas se cruzan en un aviso suave: conviene prestar atención a la salud.',
  },
  {
    a: 31,
    b: 67,
    nota: 'hay un cruce que habla de una pasión intensa; que perdure dependerá de cómo siga el conjunto.',
  },
  {
    a: 31,
    b: 49,
    nota: 'este cruce anuncia prosperidad y amistades importantes.',
  },
  {
    a: 38,
    b: 67,
    nota: 'dos de estas cartas tocan juntas el terreno de la intimidad: algo pide cuidado en ese plano.',
  },
  {
    a: 38,
    b: 68,
    nota: 'este cruce apunta a un tema de salud que merece atención.',
  },
  {
    a: 38,
    b: 70,
    nota: 'dos de estas cartas encienden juntas una señal de hechicería: lee el conjunto con cuidado.',
  },
  {
    a: 38,
    b: 73,
    nota: 'este cruce señala una situación que se paraliza y se demora.',
  },
  {
    a: 67,
    b: 60,
    nota: 'dos de estas cartas hablan juntas de hijos nacidos fuera del matrimonio.',
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
