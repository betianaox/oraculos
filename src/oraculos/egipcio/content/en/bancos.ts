import type { BancosCruz } from '@/flujo/motorCruz';

// English connective bank for the Egyptian Tarot five-card cross. Same skeleton
// as the Tarot and Angels ones, but with its own voice — sand, stone, the river
// — so the three oracles do not sound alike.
//
// Cards are NOT named here: the person has them in front of them.
//
// ── HOW THIS IS WRITTEN ──────────────────────────────────────────────────
// The same two rules as the Tarot bank (see tarot/content/en/bancos.ts) and the
// server prompt:
//
// 1. PLAIN BEFORE ELEVATED. Everyday words. Banned: report language — optimise,
//    manage, process, structure, dynamic, potential, resources, consolidate,
//    "the emotional sphere".
// 2. QUIET MYSTICISM. One image per sentence — sand, stone, river, road — and
//    the rest in plain words. The Egyptian dressing is used sparingly: if every
//    line names the Nile, it stops meaning anything.
//
// ⚠️ ONE THING ABOUT THIS BANK: Egyptian fragments can arrive in THREE shapes,
// not two. Besides noun phrases ("intuition and attraction") there are CLAUSES
// WITH A VERB, because the reversed meanings are trimmed from a longer text
// ("the power finds no channel"). That is why almost every template here uses a
// colon or a comma: it is the only thing that takes all three without breaking.
// Do NOT write "rests on {frag}" or "is {frag}".
export const BANCOS_EGIPCIO_EN: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        "For what you're asking {tema}, this is what unfolds.",
        "Let's take your question {tema}. The cards lay it out like this.",
        "Here's what there is to show you {tema}.",
        "Let's go through what you're asking {tema}, piece by piece.",
      ],
      preocupacion: [
        'Breathe deep: nobody passes sentence here {tema}, things are only brought to light.',
        'There is unease in what you ask {tema}. Look calmly at what the sand settles.',
        "I know this weighs on you {tema}. Let's go slowly with what comes up.",
      ],
      impulso: [
        'With that eagerness to move {tema}, it helps to look at the whole first.',
        'Before you take the step, here is what is in plain view {tema}.',
        'The drive is well placed {tema}, but there is something to see first.',
      ],
    },
    abierta: {
      neutro: [
        'For what you want to understand {tema}, this mirror opens.',
        'There are five faces to look at {tema}, and each says its own thing.',
        "Let's look at this calmly {tema}.",
        "Here's what lights up when you ask {tema}.",
      ],
      preocupacion: [
        'No rush: what weighs on you {tema} is laid out here so you can see it.',
        "None of this is carved in stone {tema}: it's a way of looking at what keeps you up.",
        "Let's take it down a notch {tema}. What unsettles you is easier to see slowly.",
      ],
      impulso: [
        'Hold the eagerness a moment; there is something to think about {tema}.',
        'That much energy deserves a pause: look at what lights up {tema}.',
        'Before you move {tema}, let this settle.',
      ],
    },
  },
  temas: {
    amor: ['about love', 'about that bond', 'about what you feel', 'about that person'],
    trabajo: ['about work', 'about your working life', 'about what is on your mind at work'],
    dinero: ['about money', 'about what worries you in the accounts', 'about the material side'],
    general: ['about where you are', 'about what you are going through', 'about what you bring'],
  },
  // These pick up WHAT the question is about, in the oracle's voice. None
  // confirms or denies what was asked: they reframe it and move the gaze to
  // what the cards can actually show.
  aperturasIntencion: {
    retorno: [
      "You're asking whether they come back. A card does not decide that, but what was left open between you does show.",
      "You want to know if they'll come back. Nobody promises that; what does appear is how the bond stands.",
      'The question is about a return. Look first at what is holding the distance today.',
    ],
    sentimiento: [
      "You're asking what that person feels, and only they know. What is spoken of here is the bond as it stands.",
      "You want to know if they love you. Nobody answers for another, but what is at play between you does come up.",
      "The question points at someone else's heart. What unfolds is the tie, not their decision.",
    ],
    ruptura: [
      "You're thinking of cutting things off, and that is yours to decide. Here is what weighs on each side.",
      "You're asking whether to leave. Before deciding, look at what is being held up.",
      'The question is whether to go. What holds you and what pushes you both come up.',
    ],
    decision: [
      "You're asking what suits you. Nobody chooses for you, but what is at stake gets laid out.",
      "You're between two roads. Look at what falls on each side before deciding.",
      'The question is what to do. This is what is left in plain view.',
    ],
    comienzo: [
      "You're asking whether this beginning will prosper. What unfolds shows what it starts with.",
      'You want to know if it goes well. The soil it is planted in shows up.',
      'The question looks at what is about to start. This is what it brings.',
    ],
    espera: [
      "You're asking when. Dates are not read in stone, but what is still missing for that to ripen is.",
      'You want to know how long. There are no dates here; what is cooking, there is.',
      'The question is about timing. Look at what still has to fall into place.',
    ],
  },
  situacion: {
    dos: [
      'Around the matter: {frag1}. And at the centre: {frag2}.',
      'The sand shows this first: {frag1}. And at the axis: {frag2}.',
      'Surrounding the scene: {frag1}. Holding it all up: {frag2}.',
      'What shows at the edge: {frag1}. What beats in the middle: {frag2}.',
      'Off to one side there is this: {frag1}. And right in the middle: {frag2}.',
      'What you see straight away: {frag1}. What really runs things: {frag2}.',
    ],
    una: [
      'At the centre of it all there is something clear: {frag}.',
      'What holds the scene up: {frag}.',
      'Right in the middle, this is what beats: {frag}.',
      'If there is one thing to take from this, it is {frag}.',
    ],
  },
  // Fewer colons than before: four in a row read as a list, not as a reading.
  // They are kept only where a fragment with a verb needs them.
  tension: {
    tres: [
      'One side pulls toward {frag1}, and the other {frag3}; in the middle {frag2} rules.',
      'On one side there is {frag1}, on the other {frag3}. But the axis is another: {frag2}.',
      'The edges speak of {frag1} and of {frag3}. The centre, though, weighs more: {frag2}.',
      'Something opens the way, {frag1}, and something narrows it, {frag3}; between the two {frag2} takes over.',
      'Part of you leans on {frag1} and part pushes toward {frag3}; in between sits {frag2}.',
    ],
    dos: [
      'Underneath there is a tug of war: on one side {fragA}, on the other {frag3}.',
      'What moves below has two faces: {fragA} and, on the other side, {frag3}.',
      'Two forces cross there, {fragA} and {frag3}, and neither fully gives way.',
      'Something pushes from {fragA} while something else pulls toward {frag3}.',
    ],
    una: [
      'And there is something more, not visible at first: {frag3}.',
      'Under all that, something else is moving: {frag3}.',
      'What is not in plain sight is this: {frag3}.',
      'In the shadow of the matter sits this: {frag3}.',
    ],
  },
  cabeza: [
    'Up above, what occupies your mind: {frag}.',
    'Above everything weighs this: {frag}.',
    'What is being thought, even if unsaid: {frag}.',
    'What you keep turning over in your head: {frag}.',
    'What keeps you awake has to do with this: {frag}.',
  ],
  // The only card read looking forward. A hint of anticipation, but always as a
  // tendency, never as a done deal.
  paso: [
    'And at the base, what takes shape: {frag}.',
    'What is coming is announced in this direction: {frag}.',
    'If nothing is forced, what follows hints at this: {frag}.',
    'On the near horizon there is already a sign of this: {frag}.',
    'Everything suggests that what comes next brings this: {frag}.',
    'The road that opens from here runs toward this: {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'With that in view, decide without rushing the ending.',
        'Let this settle before your next choice.',
        'You have enough to decide with. Take your time.',
      ],
      preocupacion: [
        "Don't carry the ending before its time: one step at a time is enough.",
        'What you fear is not carved in stone. Use this look to let go a little.',
        'Today it feels like you carry this alone, and it is not quite so. One day at a time.',
      ],
      impulso: [
        'Good energy, but measure the jump against what the centre showed.',
        'Go ahead, yes, but without skipping what you are being asked to look at.',
        'Eagerness is enough to start; to keep going, look at what sits above.',
      ],
    },
    abierta: {
      neutro: [
        'Keep whatever rang truest and let it work for a few days.',
        'You do not have to solve it all today; seeing more clearly is enough.',
        'Let this settle. What matters comes back on its own.',
      ],
      preocupacion: [
        'Be kind to yourself: understanding is already the start of putting things in order.',
        'Give yourself permission not to have all the answers yet.',
        'What hurts also finds its place, even if it does not show today.',
      ],
      impulso: [
        'Before acting, let this settle.',
        'Your drive is worth a lot; aim it with what you have just seen.',
        'Keep some of that fire for later. You are going to need it.',
      ],
    },
  },
  ecoTercero: [
    'In all this, the other person weighs more than it seems.',
    'The bond with the one you mention colours every corner of this reading.',
    'That person is part of the picture too.',
    'What the other one does is pulling on this thread as well.',
  ],
  ecoTiempo: {
    pasado: [
      'Part of this looks backward, at something that has not closed yet.',
      'There is a before still caught up in the scene.',
      'Something old still has a root here.',
    ],
    futuro: [
      'The question pushes forward, and the answer goes that way.',
      'All of this leans toward what has not happened yet.',
      'The gaze is set further out, and that is where what comes is pointing.',
    ],
  },
};
