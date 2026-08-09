// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { Intencion } from '@/pregunta/tipos';

// Aperturas que retoman DE QUÉ trata la pregunta, en el registro de Runas:
// más seco y terrenal que el de Tarot, sin florituras.
//
// Ninguna afirma ni niega lo consultado. Reformulan la pregunta y mueven la
// mirada hacia lo que la tirada sí puede mostrar: si "¿vuelve?" se contestara
// con un sí, la app estaría prometiendo algo que no puede saber.
export const aperturasIntencion: Partial<Record<Intencion, string[]>> = {
  retorno: [
    'You ask if they will return. The runes don\'t decide that, but they show what remains open.',
    'You want to know if they will come back. First, look at what maintains the distance today.',
    'The question is about a return. This is what lies on the ground.',
  ],
  sentimiento: [
    'You ask what that person feels, and only they know that. The runes speak of the bond as it stands.',
    'You want to know if they love you. No one can speak for another; here is what is at play between you both.',
    'The question points to the other\'s feelings. What is read is the bond, not their decision.',
  ],
  ruptura: [
    'You are thinking of ending it, and that decision is yours. The runes bring closer what weighs on each side.',
    'You ask if you should leave. Before deciding, look at what is being held onto.',
    'The question is whether to go. What holds you back and what pushes you forward appears here.',
  ],
  decision: [
    'You ask what is best for you. The runes don\'t choose for you, but they clarify what is at stake.',
    'You are between two paths. This is what falls on each side.',
    'The question is what to do. Look at what remains in plain sight.',
  ],
  comienzo: [
    'You ask if this new beginning will flourish. The runes show what it starts with.',
    'You want to know if it will turn out well. This reveals the soil where it is planted.',
    'The question looks toward what is about to begin. This is what it brings.',
  ],
  espera: [
    'You ask when. Time is not read here, but rather what is needed for it to ripen.',
    'You want to know how much longer. There are no dates in the runes; only what is gestating.',
    'The question is about the timing. Look at what still needs to fall into place.',
  ],
};
