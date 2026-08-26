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

/**
 * Cuantas veces se repite la lista. 4 = una copia de buffer a cada lado, ADEMAS
 * de la del medio y su vecina.
 *
 * Eran 3, y con 3 la unica zona segura es la copia del medio: cruzar la costura
 * te saca de ella SIEMPRE, asi que habia un salto por cada cruce. Yendo y
 * viniendo entre el ultimo y el primero eso es un salto por swipe, y el salto le
 * cae encima al gesto siguiente — el carrusel repetia el domo y no pasaba limpio
 * al que seguia. Yendo para un solo lado no se notaba, porque cada salto te deja
 * bien parada para el swipe que viene.
 *
 * Con 4 el arranque queda en 2n y la zona segura va de n a 3n: seis swipes de
 * colchon para cada lado, y TODAS las costuras caen adentro. Ir y venir sobre
 * una costura ya no obliga a saltar nunca; el salto queda para cuando de verdad
 * te alejas, que es el caso que siempre funciono bien.
 *
 * Y no mas que 4, porque cada copia son N domos y N capas de fondo dibujandose.
 * Se probo con 5 y se notaba: la escala del domo, que la maneja el driver
 * nativo y no cambia, se veia escalonada porque se perdian cuadros. Copias de
 * mas no son gratis.
 */
export const COPIAS = 4;

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
   * Dado el indice al que se solto el carrusel, devuelve adonde conviene estar.
   *
   * Devuelve EL MISMO indice mientras quede colchon, que es casi siempre. Solo
   * cuando se llego a una de las copias de los extremos manda de vuelta a la
   * central: como es el mismo oraculo en la misma posicion, el salto no se ve, y
   * despues quedan otra vez dos copias enteras a cada lado.
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
    recentrar: (indiceLoop: number) =>
      indiceLoop < n || indiceLoop >= (COPIAS - 1) * n ? inicio + aLogico(indiceLoop) : indiceLoop,
  };
}

/** El carrusel del idioma activo. */
export function useCarrusel(): Carrusel {
  const idioma = useApp((s) => s.idioma);
  return useMemo(() => crearCarrusel(oraculosDe(idioma)), [idioma]);
}
