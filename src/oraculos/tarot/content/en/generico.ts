import type { Posicion } from '../types';

// Last rung of the English fallback: safe text for a card that has nothing
// written yet. It never leaves the spread with nothing to say.
//
// With the bank complete (78 cards × 4 topics) this should never fire. It is
// kept so that adding a new card cannot break a reading.
export const GENERICO_EN: Record<Posicion, string> = {
  normal: 'something that asks you to stop and look calmly at what it is showing you.',
  invertida: 'a shade of something that asks for a careful look before drawing conclusions.',
};
