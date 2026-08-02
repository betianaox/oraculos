import { ORACULOS } from '@/oraculos/registry';

/**
 * Loop infinito del carrusel. Repetimos la lista de oraculos varias veces y
 * arrancamos en la copia del medio; al llegar a un extremo se salta (sin
 * animacion) a la copia equivalente del medio. Como es el mismo oraculo en la
 * misma posicion, el salto es invisible.
 */
export const N = ORACULOS.length;

/** Cuantas veces se repite la lista. 3 = una copia de buffer a cada lado. */
export const COPIAS = 3;

/** Indice (en la lista repetida) donde arranca: primer oraculo de la copia del medio (Tarot). */
export const INICIO = N;

/** Lista repetida que consume el FlatList y el Fondo. */
export const LISTA_LOOP = Array.from({ length: COPIAS }, () => ORACULOS).flat();

/** Indice logico (0..N-1) a partir de un indice de la lista repetida. */
export function aLogico(indiceLoop: number): number {
  return ((indiceLoop % N) + N) % N;
}

/**
 * Dado el indice al que se solto el carrusel, devuelve el indice equivalente en
 * la copia del medio (o el mismo si ya esta ahi). Sirve para recentrar y que el
 * buffer nunca se agote.
 */
export function recentrar(indiceLoop: number): number {
  const logico = aLogico(indiceLoop);
  return INICIO + logico;
}
