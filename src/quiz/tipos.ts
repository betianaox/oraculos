import type { Pieza } from '@/flujo/pieza';

// ─────────────────────────────────────────────────────────────────────────
// EL RETO
// ─────────────────────────────────────────────────────────────────────────
// Las preguntas NO se escriben: se derivan de la wiki que cada oraculo ya
// tiene. Por eso funciona en los seis oraculos y en los cinco idiomas sin
// agregar una linea de contenido, y se mantiene siempre coherente con lo que
// la persona puede estudiar.
//
// Pregunta sobre TODO el mazo, incluido lo que la wiki todavia tiene
// bloqueado: quien quiera acertar mas, que vaya a desbloquear y aprender. Esa
// es la gracia del circuito.
// ─────────────────────────────────────────────────────────────────────────

/**
 * Que se muestra como enunciado.
 *
 * La pieza se ilustra siempre que se pueda: el arte es lo mejor que tiene la
 * app y un nombre suelto en texto lo desaprovecha. La excepcion es
 * `claveANombre`, donde la pieza ES la respuesta: ahi mostrarla la regalaria.
 */
export type Molde =
  /** Se ve la pieza y hay que reconocerla por su nombre. */
  | 'imagenANombre'
  /** Se ven la pieza y su nombre, y hay que elegir sus palabras clave. */
  | 'nombreAClave'
  /** Se ve una palabra clave y hay que elegir de que pieza es. Sin imagen. */
  | 'claveANombre';

export interface Opcion {
  /** Texto que se muestra en el boton. */
  texto: string;
  correcta: boolean;
}

export interface Pregunta {
  molde: Molde;
  /** La pieza correcta. Sirve para ilustrar el enunciado y para la devolucion. */
  pieza: Pieza;
  /** Enunciado ya armado, en el idioma activo. */
  enunciado: string;
  /** Lo que se muestra bajo el enunciado cuando el molde es de texto. */
  destacado?: string;
  /** Si el enunciado se ilustra con la imagen de la pieza. */
  conImagen: boolean;
  opciones: Opcion[];
}
