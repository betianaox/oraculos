// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { CartaId } from '../types';

// Consejo del día por carta (español). Parcial: se completa carta por carta,
// como las fichas de la Wiki. Las que falten caen al genérico (ver más abajo),
// así la pantalla nunca queda sin nada que decir.
//
// Tono: un consejo breve, cálido y accionable para hoy — habla de tú en español
// NEUTRO (nada de voseo), reflexivo, nunca adivinatorio.
export const CONSEJOS_EN: Partial<Record<CartaId, string>> = {
  'mayor-00': 'Dare to take that first step you\'ve been putting off. You don\'t need to see the whole path: it\'s enough to start with curiosity and trust.',
  'mayor-19': 'Let things reveal themselves in the light. Today is a good day to celebrate the simple things and share your energy without rushing.',
};

// Último recurso, para una carta que todavía no tiene su consejo escrito.
export const CONSEJO_GENERICO_EN =
  'Take a moment to look at this card calmly and ask yourself what it is showing you today.';
