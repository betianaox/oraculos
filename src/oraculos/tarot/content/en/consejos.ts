import type { CartaId } from '../types';

// Daily advice per card (English), all 78.
//
// WHY IT WAS HALF-DONE: for a long time only two cards were written — The Fool
// and The Sun — and the other 76 fell back to the generic line. Which meant that
// 97% of days the app said "take a moment to look at this card calmly",
// whichever card you picked. The same gap existed in all three languages.
//
// ── HOW AN ADVICE LINE IS WRITTEN ────────────────────────────────────────
// The usual two rules (see en/bancos.ts) — plain before elevated, quiet
// mysticism — plus the one specific to this file:
//
//   ADVICE TELLS THE PERSON WHAT TO DO TODAY. Not what the card means. If the
//   line reads fine with nobody on the other side, it is badly written.
//
// Second person, they open by talking about today, and they fit in two lines.
export const CONSEJOS_EN: Partial<Record<CartaId, string>> = {
  // ── Major Arcana ─────────────────────────────────────────────────────────
  'mayor-00': 'Take that first step today that you keep putting off. You do not need to see the whole road.',
  'mayor-01': 'Use what you know how to do today instead of just having it. Start with the smallest piece.',
  'mayor-02': 'Listen inward today before asking around. You know more than you think.',
  'mayor-03': 'Look after something that is growing today. A little attention beats a big shove.',
  'mayor-04': 'Put one thing in order today. Pick the one that unsettles everything else.',
  'mayor-05': 'Ask someone today who has already been through this. Not everything has to be learned alone.',
  'mayor-06': 'Actually choose today. Staying in the middle is also a decision, and the worst one.',
  'mayor-07': 'Push in one direction today. Force spread thin moves nothing.',
  'mayor-08': 'Settle calmly today what you are tempted to settle by shouting.',
  'mayor-09': 'Step away from the noise for a while today. The answer turns up when you lower the volume.',
  'mayor-10': 'Take what turns up today without over-analysing it. The wheel does not wait.',
  'mayor-11': 'Own your part today. No more and no less than yours.',
  'mayor-12': 'Do not force it today. Standing still is also progress when waiting is what is called for.',
  'mayor-13': 'Give something an ending today. Naming it is enough.',
  'mayor-14': 'Look for the middle point today. Not too much, not too little, in whatever it is.',
  'mayor-15': 'Look head on today at what has you hooked. Just looking already loosens it.',
  'mayor-16': 'If something falls today, do not rush to prop it up. Check first whether it was worth it.',
  'mayor-17': 'Trust a little more than comes naturally today. One day.',
  'mayor-18': 'Do not decide today on what you are imagining. Wait until you have the fact.',
  'mayor-19': 'Enjoy the simple things today, out loud. It is a day to celebrate without rushing.',
  'mayor-20': 'Reckon with what you have lived today and forgive yourself one thing. The heaviest one.',
  'mayor-21': 'Call something finished today. It already is, even if you never celebrated it.',
  // ── Wands ────────────────────────────────────────────────────────────────
  'bastos-as': 'Light the thing you feel like doing today. One match is enough.',
  'bastos-dos': 'Look a little further today before you move. Decide the course, not the step.',
  'bastos-tres': 'Wait confidently today for what you planted. It is already on its way.',
  'bastos-cuatro': 'Celebrate something with your people today. It does not have to be big.',
  'bastos-cinco': 'If there is a racket today, bring order instead of adding noise.',
  'bastos-seis': 'Show today what you achieved. Keeping it hidden does not make it bigger.',
  'bastos-siete': 'Hold your position today. You do not have to convince everyone, only stand your ground.',
  'bastos-ocho': 'Send that message today that you keep delaying. Things speed up on their own after that.',
  'bastos-nueve': 'Hold on a little longer today. You are closer to the end than it feels.',
  'bastos-diez': 'Put down a load today that was never yours. Start with the obvious one.',
  'bastos-sota': 'Try something new today without committing. Just to see what happens.',
  'bastos-caballo': 'Throw yourself in today, but look where you land. Both at once.',
  'bastos-reina': 'Hold what is yours today with warmth and a firm hand. You can be both.',
  'bastos-rey': 'Lead by example today. Someone is watching how you do it.',
  // ── Cups ─────────────────────────────────────────────────────────────────
  'copas-as': 'Open your heart a little today. It does not have to be all the way.',
  'copas-dos': 'Meet someone properly today. No screen in between.',
  'copas-tres': 'Raise a glass with your people today for something. Even something small.',
  'copas-cuatro': 'Lift your eyes today. You are walking past something you already have.',
  'copas-cinco': 'Look at what is still standing today, not only at what fell.',
  'copas-seis': 'Call someone from before today. Old tenderness works too.',
  'copas-siete': 'Discard two of the options going round your head today. Keep one.',
  'copas-ocho': 'Follow today what feels like it is calling you, even if you cannot explain it.',
  'copas-nueve': 'Treat yourself today to something you already earned. Without justifying it.',
  'copas-diez': 'Tell your people today what they are worth. In those words.',
  'copas-sota': 'Listen to that new feeling today. You do not have to understand it yet.',
  'copas-caballo': 'Propose today the thing you have been imagining. The worst ending is a no.',
  'copas-reina': 'Listen to someone today without trying to fix anything for them.',
  'copas-rey': 'Feel everything you have to feel today, and still decide with your head.',
  // ── Swords ───────────────────────────────────────────────────────────────
  'espadas-as': 'Tell the truth today and be done. It cuts faster than it hurts.',
  'espadas-dos': 'Take the blindfold off today. Choosing blind is not choosing.',
  'espadas-tres': 'Let what hurts hurt today. Covering it makes it last longer.',
  'espadas-cuatro': 'Stop today. Really: do nothing that can wait until tomorrow.',
  'espadas-cinco': 'Do not try to win the argument today. Look at what winning it costs.',
  'espadas-seis': 'Step back a little today from what is wearing you down. No explanation needed.',
  'espadas-siete': 'Do it head on today, even if the shortcut is more comfortable.',
  'espadas-ocho': 'Check today which limit you set yourself. There is usually an open door.',
  'espadas-nueve': 'If the fear presses today, write it down. On paper it is always smaller.',
  'espadas-diez': 'Accept today that you hit bottom. From there the only way is up.',
  'espadas-sota': 'Ask today instead of assuming. One question saves you a week.',
  'espadas-caballo': 'Go straight at it today, but count to three before speaking.',
  'espadas-reina': 'Be clear today without being sharp. Everything can be said without cutting anyone.',
  'espadas-rey': 'Decide today by the rule, not by the mood of the day.',
  // ── Pentacles ────────────────────────────────────────────────────────────
  'oros-as': 'Take the first concrete step of that idea today. Just one, but real.',
  'oros-dos': 'Drop one of the things you are juggling today. They do not all fit.',
  'oros-tres': 'Ask for help today or give it. This is not a one-person job.',
  'oros-cuatro': 'Look after what you have today, but do not grip it so hard.',
  'oros-cinco': 'If something is missing today, ask. There is more help nearby than you can see.',
  'oros-seis': 'Check today whether you are giving and receiving evenly. Adjust whichever side is off.',
  'oros-siete': 'Be patient today with what you planted. It is still ripening.',
  'oros-ocho': 'Do it well today, not fast. Practising today shows in a month.',
  'oros-nueve': 'Enjoy today what you got on your own. You earned it.',
  'oros-diez': 'Think long today. What you decide now is going to outlast today.',
  'oros-sota': 'Learn something new today, even for ten minutes.',
  'oros-caballo': 'Move one step today, even a boring one. The boring ones are the ones that arrive.',
  'oros-reina': 'Look after what is yours today with both feet on the ground. And look after yourself too.',
  'oros-rey': 'Share something today that you have to spare. You have more than you think.',
};

// Last resort, for a card that still has no advice written. With all 78 done it
// should never fire.
export const CONSEJO_GENERICO_EN =
  'Take a moment to look at this card calmly and ask yourself what it is showing you today.';
