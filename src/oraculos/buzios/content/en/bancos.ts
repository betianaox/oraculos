// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { Intencion, Modo, Tema, Tono } from '@/pregunta/tipos';
import type { Orientacion } from '../types';

// ─────────────────────────────────────────────────────────────────────────
// Tejido de la consulta de odus (español NEUTRO).
//
// PRUDENCIA, que acá importa más que en ningún otro oráculo: esto es una
// consulta SIMBÓLICA de los significados de los odus, no el jogo de buzios,
// que es un ritual sagrado que realizan personas iniciadas. Este banco NO
// interpreta, no invoca, no pide y no habla en nombre de nadie: solo presenta
// lo que ya está escrito y lo conecta con la pregunta.
//
// El significado del odu y el matiz de la orientación son contenido canónico y
// no se tocan desde acá.
//
// El nombre del odu se conserva —es la identidad de la respuesta— pero se evita
// el formato de ficha ("Cayeron 5 cauríes abiertos: habla el odu X").
// ─────────────────────────────────────────────────────────────────────────

export interface BancoBuzios {
  /** Presenta el odu. Admite {tema}, {odu} (nombre) y {num} (abiertos). */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  /**
   * Aperturas que retoman DE QUÉ trata la pregunta. Admiten {odu} y {num}.
   * Si no se reconoció intención, se usa la común.
   */
  aperturasIntencion?: Partial<Record<Intencion, string[]>>;
  /** Eco opcional: una sola frase, cuando se menciona a otra persona. */
  ecoTercero: string[];
  /** Eco opcional por marca temporal fuerte. */
  ecoTiempo: Record<'pasado' | 'futuro', string[]>;
  temas: Record<Tema, string[]>;
  /** Introduce el matiz de la segunda tirada. Admite {abiertos}. */
  orientaciones: Record<Orientacion, string[]>;
  /** Cierre según cómo se formuló la pregunta. */
  cierres: Record<Modo, Record<Tono, string[]>>;
}

export const BANCO_BUZIOS_EN: BancoBuzios = {
  aperturas: {
    cerrada: {
      neutro: [
        'Regarding your question about {tema}, with {num} cowries open, {odu} speaks.',
        'For your inquiry {tema}, the {num} open cowries bring {odu}.',
        'The answer to {tema} comes through {odu} ({num} open).',
      ],
      preocupacion: [
        'I understand your concern {tema}. With {num} cowries open, {odu} speaks, and it is worth reflecting on.',
        'For what worries you regarding {tema}, the {num} open cowries bring {odu}.',
      ],
      impulso: [
        'With your desire to move forward {tema}, the {num} open cowries suggest pausing with {odu}.',
        'Before taking the next step {tema}, with {num} cowries open, {odu} speaks.',
      ],
    },
    abierta: {
      neutro: [
        'For what you wish to understand {tema}, with {num} cowries open, {odu} speaks.',
        'What unfolds regarding your question {tema} arrives with {odu} ({num} open).',
      ],
      preocupacion: [
        'Take your time: for what weighs on you {tema}, the {num} open cowries bring {odu}.',
        'Breathe. With {num} open cowries, {odu} speaks.',
      ],
      impulso: [
        'Pause your impulse for a moment: the {num} open ones bring {odu}.',
        'Such energy deserves a break. With {num} open cowries, {odu} speaks.',
      ],
    },
  },
  // Retoman de qué trata la pregunta. Ninguna afirma ni niega lo consultado:
  // reformulan y mueven la mirada a lo que el odu sí puede mostrar. Esta es una
  // consulta simbólica, no una adivinación: nada acá promete un desenlace.
  aperturasIntencion: {
    retorno: [
      'You ask if they will return. The cowries don\'t decide returns; with {num} open, {odu} speaks, showing what remains unresolved.',
      'You want to know if they will come back. With {num} open, {odu} replies: look at what sustains the distance today.',
    ],
    sentimiento: [
      'You ask what that person feels, and only they know that. With {num} open, {odu} speaks of the bond as it stands.',
      'You want to know if they love you. No one answers for another; with {num} open, {odu} shows what flows between you both.',
    ],
    ruptura: [
      'You are thinking of breaking up, and that decision is yours. With {num} open, {odu} speaks of the weight on each side.',
      'You ask if you should leave it. With {num} open, {odu} replies: look at what is being held onto.',
    ],
    decision: [
      'You ask what is best for you. With {num} open, {odu} speaks, organizing what is at stake.',
      'You are at a crossroads. With {num} open, {odu} replies.',
    ],
    comienzo: [
      'You ask if this new beginning will thrive. With {num} open, {odu} speaks of the soil where it is planted.',
      'You want to know if it will turn out well. With {num} open, {odu} responds.',
    ],
    espera: [
      'You ask when. Cowries do not mark dates; with {num} open, {odu} shows what is needed for it to ripen.',
      'You want to know how much time is left. With {num} open, {odu} speaks of what is currently gestating.',
    ],
  },
  // Una sola frase de eco, para que la lectura reconozca lo que la persona
  // contó. Antes se descartaban `mencionaTercero` y `tiempo`, que ya venían
  // detectados y no se usaban en ningún lado.
  ecoTercero: [
    'In all of this, that person carries more weight than it seems.',
    'The bond with the one you mention runs through the entire reading.',
    'That someone is also part of the bigger picture.',
  ],
  ecoTiempo: {
    pasado: [
      'Part of this looks back, at something that hasn\'t closed yet.',
      'There is a past that continues to influence the scene.',
    ],
    futuro: [
      'The question pushes forward, and that is where the answer lies.',
      'All of this leans toward what has yet to happen.',
    ],
  },
  temas: {
    amor: ['about love', 'about that bond', 'about what you feel'],
    trabajo: ['about work', 'about your career path', 'about your professional concerns'],
    dinero: ['about money', 'about material matters', 'about your finances'],
    general: ['about your current moment', 'about what you are experiencing', 'about what you are carrying'],
  },
  orientaciones: {
    favorable: [
      'The second fall ({abiertos} open) tips the matter in your favor, what is known as ire:',
      'With {abiertos} open, the second draw is supportive: the nuance is one of ire, in your favor.',
      'The guidance from the second cast ({abiertos} abiertos) is favorable, ire:',
    ],
    desafio: [
      'The second cast ({abiertos} abiertos) presents this as a challenge, known as osogbo:',
      'With {abiertos} abiertos, the second draw warns: the tone is osogbo, a challenge.',
      'The guidance from the second cast ({abiertos} abiertos) is one of challenge, osogbo:',
    ],
  },
  cierres: {
    cerrada: {
      neutro: [
        'With that in mind, decide without rushing the outcome.',
        'Let this reading settle into your next choice.',
      ],
      preocupacion: [
        'Don\'t carry the end before it arrives: one step at a time is enough.',
        'What you fear is not set in stone; use this perspective to let go a little.',
      ],
      impulso: [
        'Good energy, but measure your leap against what you have just read.',
        'Move forward, yes, but without skipping what the odu asks you to see.',
      ],
    },
    abierta: {
      neutro: [
        'Hold onto what resonated most and let it work within you for a few days.',
        'There is no need to solve everything today; seeing with more clarity is enough.',
      ],
      preocupacion: [
        'Be kind to yourself: understanding is the first step toward clarity.',
        'Give yourself permission not to have all the answers just yet.',
      ],
      impulso: [
        'Before you act, let this reflection settle within you.',
        'Your drive is valuable; guide it with what you have just seen.',
      ],
    },
  },
};
