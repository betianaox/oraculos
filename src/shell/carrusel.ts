import { useMemo } from 'react';
import { oraculosDe } from '@/oraculos/registry';
import type { OraculoModulo } from '@/oraculos/tipos';
import { useApp } from '@/store/useApp';

/**
 * Loop infinito del carrusel. Repetimos la lista de oraculos varias veces y
 * arrancamos en la copia del medio; al llegar a un extremo se salta (sin
 * animacion) a la copia equivalente del medio. Como es el mismo oraculo en la
 * misma posicion, el salto es invisible.
 *
 * Antes esto eran constantes de modulo, calculadas una sola vez. Dejo de serlo
 * porque la lista depende del idioma: el I Ching no se ofrece fuera del
 * espanol, asi que N cambia y con el cambian el indice de arranque y la lista
 * repetida. Se recalcula por idioma y queda memorizado.
 */

/** Cuantas veces se repite la lista. 3 = una copia de buffer a cada lado. */
export const COPIAS = 3;

export interface Carrusel {
  /** Cuantos oraculos hay en el idioma activo. */
  n: number;
  /** Lista repetida que consumen el FlatList, el Fondo y el Footer. */
  listaLoop: readonly OraculoModulo[];
  /** Indice (en la lista repetida) donde arranca el carrusel. */
  inicio: number;
  /** Indice logico (0..n-1) a partir de un indice de la lista repetida. */
  aLogico: (indiceLoop: number) => number;
  /**
   * Dado el indice al que se solto el carrusel, devuelve el equivalente en la
   * copia CENTRAL (o el mismo si ya esta ahi). Como es el mismo oraculo en la
   * misma posicion, el salto es invisible, y despues de cada scroll quedan las
   * dos copias de buffer a cada lado.
   */
  recentrar: (indiceLoop: number) => number;
}

export function crearCarrusel(oraculos: readonly OraculoModulo[]): Carrusel {
  const n = oraculos.length;
  const inicio = Math.floor(COPIAS / 2) * n;
  const aLogico = (indiceLoop: number) => ((indiceLoop % n) + n) % n;

  return {
    n,
    listaLoop: Array.from({ length: COPIAS }, () => oraculos).flat(),
    inicio,
    aLogico,
    recentrar: (indiceLoop: number) => inicio + aLogico(indiceLoop),
  };
}

/** El carrusel del idioma activo. */
export function useCarrusel(): Carrusel {
  const idioma = useApp((s) => s.idioma);
  return useMemo(() => crearCarrusel(oraculosDe(idioma)), [idioma]);
}
