import type { Tiempo } from '../types';

// "Echo" line: a short, self-contained sentence acknowledging an element
// detected in the question (a person mentioned, or a temporal orientation).
// At most one per reading; a third party takes priority over a time cue.
// Full sentences so they sit cleanly before the rune sentence.

export const ecoTercero: string[] = [
  'There is another person at play in this question.',
  'The presence of someone else weighs on what you are asking.',
  'There is a bond with another person at the center of this.',
];

export const ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]> = {
  pasado: [
    'A good part of this still looks backward.',
    'Something of what already happened is still present in the question.',
    'What you left behind still carries weight here.',
  ],
  futuro: [
    'The focus is on what has not arrived yet.',
    'This projects toward what is coming.',
    'The question points to what lies ahead.',
  ],
};
