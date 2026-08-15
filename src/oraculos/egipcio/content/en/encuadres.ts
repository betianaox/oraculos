import type { Tema } from '@/pregunta/tipos';

// English framing tails for the Egyptian fragments.
//
// These only fire on the last rung of the fallback, when a card has no written
// fragment for any topic and the reading has to fall back to the keywords on
// its wiki entry. With the bank complete (78 cards × 4 topics) that should
// never happen; they are kept as the safety net, and because two bare words
// ("wisdom and foresight") say nothing to someone asking whether their contract
// gets renewed.
//
// `''` = no framing, the fragment goes on its own. It is in every pool on
// purpose: if all five cards dragged their tail along, the paragraph would turn
// into a jingle. One in three is enough to place it.
export const ENCUADRES_EN: Record<Tema, string[]> = {
  amor: ['', '', 'in that bond', 'in what you feel', 'between the two of you'],
  trabajo: ['', '', 'in what you are doing', 'at work', 'in your working days'],
  dinero: ['', '', 'with the money', 'in the accounts', 'in what you have to sort out'],
  general: ['', '', 'in this stretch of yours', 'in what you are going through', 'in what you bring'],
};
