import type { Pieza, Posicion } from './pieza';

// Contenido de un oraculo para las secciones Aprender (biblioteca de piezas) y
// Consejo del dia. Cada oraculo lo arma en el idioma activo; las pantallas son
// genericas y solo renderizan lo que el contenido les da (ya rotulado), asi que
// no conocen la estructura interna de cada oraculo.

export interface Chip {
  etiqueta: string;
  valor: string;
}

export interface Bloque {
  titulo: string;
  texto?: string;
  chips?: Chip[];
}

export interface Ficha {
  datos: Chip[]; // fila de datos (numero, elemento, palo...)
  bloques: Bloque[]; // secciones de significado (palabras clave, derecho...)
  voz: string; // texto para el TTS ('' = sin voz)
}

export interface SeccionCartas {
  id: string;
  titulo: string;
  piezas: Pieza[];
  /**
   * Familia a la que pertenece la seccion, cuando varias secciones seguidas son
   * partes de lo mismo (los menores del Egipcio, partidos en series). Se escribe
   * UNA sola vez arriba del grupo; el titulo de cada seccion queda como subtitulo.
   */
  grupo?: string;
}

export interface ContenidoOraculo {
  /** Dorso de la pieza (para el Consejo del dia). */
  reverso: number;
  /** Nota breve opcional arriba de la grilla de Aprender (ej: encuadre simbolico). */
  intro?: string;
  /** Agrupacion de las piezas para la grilla de Aprender. */
  secciones: SeccionCartas[];
  /** Nombre visible de una pieza. */
  nombre: (pieza: Pieza) => string;
  /** Ficha de detalle, o null/undefined si todavia no hay contenido escrito. */
  ficha?: (pieza: Pieza) => Ficha | null;
  /** Consejo del dia para una pieza (la posicion importa en runas). */
  consejo: (pieza: Pieza, posicion: Posicion) => string;
  /** Rotulo para cuando falta la ficha ("Contenido proximamente"). */
  proximamente: string;
  /**
   * UX del consejo: 'elegir' = elegir 1 de 3 dadas vuelta y voltear (tarot);
   * 'directo' = mostrar directamente la pieza del dia (runas). Default 'elegir'.
   */
  consejoModo?: 'elegir' | 'directo';
  /** Si las piezas pueden salir invertidas (runas). Default false. */
  invierte?: boolean;
}
