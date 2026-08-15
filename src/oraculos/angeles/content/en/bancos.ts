import type { BancosCruz } from '@/flujo/motorCruz';

// English connective bank for the Angels five-card cross. Same skeleton as the
// Tarot one, but with its own voice (messengers, guardians, light), so the two
// oracles do not sound alike.
//
// Angels are NOT named here. The person can see the cards; what they expect to
// read is what those cards say about their question, not each one's entry.
//
// ── HOW THIS IS WRITTEN ──────────────────────────────────────────────────
// The same two rules as the Tarot bank (see tarot/content/en/bancos.ts) and the
// server prompt:
//
// 1. PLAIN BEFORE ELEVATED. Everyday words. Banned: report language — optimise,
//    manage, process, structure, dynamic, potential, resources, consolidate,
//    "the emotional sphere".
// 2. QUIET MYSTICISM. This is the oracle that leans hardest toward the
//    celestial, so it is the one that turns pompous most easily. One touch per
//    sentence — a light, a guardian, a sign — and the rest in plain words. No
//    archaisms, no "the celestial choir ordains".
export const BANCOS_ANGELES_EN: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        "For what you're asking {tema}, this is what the angels bring.",
        "Let's take your question {tema}. The message settles like this.",
        "Here's what there is to show you {tema}.",
        "Let's go through what you're asking {tema}, slowly.",
      ],
      preocupacion: [
        'Let your heart settle: you are not in this on your own {tema}.',
        'Someone is looking out for you here. Look calmly at what shows {tema}.',
        "I know this weighs on you {tema}. Let's go slowly with what comes up.",
      ],
      impulso: [
        'Before you jump, listen to what the messengers bring {tema}.',
        'Your eagerness has wings; let the message aim it {tema}.',
        'With that much drive {tema}, it helps to see the whole picture first.',
      ],
    },
    abierta: {
      neutro: [
        'For what you want to understand {tema}, this mirror opens.',
        'There are five lights lit to look at {tema}.',
        "Let's look at this calmly {tema}.",
        "Here's what lights up when you ask {tema}.",
      ],
      preocupacion: [
        'Breathe deep. This is guidance {tema}, not a sentence.',
        'No rush: what weighs on you {tema} is laid out here so you can see it.',
        "Let's take it down a notch {tema}. What unsettles you is easier to see slowly.",
      ],
      impulso: [
        'Hold the flight a moment; there is something to think about {tema}.',
        'That much strength deserves a pause: look at what lights up {tema}.',
        'Before you move {tema}, let the message settle.',
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
  // what the message can actually show. Angels accompany, they do not sentence.
  aperturasIntencion: {
    retorno: [
      "You're asking whether they come back. Nobody signs a return, but what was left open between you does show.",
      "You want to know if they'll come back. That rests with no one but the two of you; what does appear is how the bond stands.",
      'The question is about a return. Listen first to what is holding the distance today.',
    ],
    sentimiento: [
      "You're asking what that person feels, and their heart is theirs. What is spoken of here is what moves between you.",
      "You want to know if they love you. Nobody answers for another, but the message shows the tie as it stands.",
      "The question points at someone else's feeling. What is lit here is the bond, not their decision.",
    ],
    ruptura: [
      "You're thinking of cutting things off, and that is yours to choose. Here is what weighs on each side.",
      "You're asking whether to leave. Before deciding, listen to what is being held up.",
      'The question is whether to go. What holds you and what pushes you both come up.',
    ],
    decision: [
      "You're asking what suits you. Nobody chooses for you, but what is at stake gets laid out.",
      "You're between two roads. Look at what lights up on each side.",
      'The question is what to do. This is what the messengers put in plain view.',
    ],
    comienzo: [
      "You're asking whether this beginning will prosper. The message shows what it starts with.",
      'You want to know if it goes well. The soil it is planted in shows up.',
      'The question looks at what is about to start. This is what it brings.',
    ],
    espera: [
      "You're asking when. Dates are not announced, but what is still missing for that to ripen is.",
      'You want to know how long. Nobody marks the day; what is cooking does show.',
      'The question is about timing. Look at what still has to fall into place.',
    ],
  },
  // CAREFUL when writing these templates: fragments arrive in two shapes — noun
  // phrases ("a falling-out with a colleague") and gerunds ("standing your
  // ground for what you feel") — so the slot has to take both.
  situacion: {
    dos: [
      'Something moves underneath: {frag1}. And at the centre, {frag2}.',
      'Around the scene: {frag1}. Holding it all up, {frag2}.',
      'This is announced first: {frag1}. But the main light is another: {frag2}.',
      'What surrounds the message is {frag1}, and at its centre burns {frag2}.',
      'Off to one side there is {frag1}, and right in the middle, {frag2}.',
      'What you see straight away: {frag1}. What really runs things: {frag2}.',
    ],
    una: [
      'At the centre of it all there is something clear: {frag}.',
      'What holds the scene up is {frag}.',
      'Right in the middle, this is what burns: {frag}.',
      'If there is one sign to take from this, it is {frag}.',
    ],
  },
  // CAREFUL with subjects: no angels are named here, so "one" or "the other"
  // refer to nothing. Everything leans on the fragment itself.
  tension: {
    tres: [
      'One side pulls toward {frag1}; the other, {frag3}. And in the middle {frag2} guides: that is the knot.',
      'The balance plays out between {frag1} and {frag3}, but what tips it is {frag2}.',
      'What surfaces as {frag1} turns around {frag2}, and the final glow comes from {frag3}.',
      'Something prepares the ground, {frag1}, and something stirs it, {frag3}; in between sits {frag2}.',
      'Two things cross, {frag1} and {frag2}, and above both stretches {frag3}.',
      'Part of you leans on {frag1} and part pushes toward {frag3}; in the middle, {frag2} is what decides.',
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
      'In the shadow of the matter sits {frag3}.',
    ],
  },
  cabeza: [
    'In your thinking weighs {frag}.',
    'What occupies your mind today is {frag}.',
    'Above, in what you keep turning over — yours or that person’s — appears {frag}.',
    'What is being thought, even if unsaid, is {frag}.',
    'What keeps you awake has to do with {frag}.',
  ],
  // The only card read looking forward. A hint of anticipation, always as a
  // tendency. Never a promise: the messengers announce a road, not an ending.
  paso: [
    'And looking ahead, this takes shape: {frag}.',
    'What is coming is announced in this direction: {frag}.',
    'If nothing is forced, what follows hints at this: {frag}.',
    'On the near horizon there is already a sign of {frag}.',
    'Everything suggests that what comes next brings {frag}.',
    'The road that opens from here runs toward {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'With this in view, decide without rushing the ending.',
        'Let the message settle before your next step.',
        'You have enough to decide with. Take your time.',
      ],
      preocupacion: [
        "Don't carry the ending before its time: someone walks beside you.",
        'What you fear is not sealed. Trust, and let go a little.',
        'One step at a time is enough. Today no more is needed.',
      ],
      impulso: [
        'Good strength; measure the jump against what the centre showed.',
        'Go ahead, but without skipping what you are being asked to see.',
        'Eagerness is enough to start; to keep going, look at what sits above.',
      ],
    },
    abierta: {
      neutro: [
        'Keep whichever sign rang truest and let it work for a few days.',
        'You do not have to solve it all today; seeing with more light is enough.',
        'Let this settle. What matters comes back on its own.',
      ],
      preocupacion: [
        'Be kind to yourself: listening is already the start of healing.',
        'Allow yourself not to have all the answers yet.',
        'What hurts also finds its place, even if it does not show today.',
      ],
      impulso: [
        'Before acting, let the message settle.',
        'Your drive is a gift; aim it with what you have just seen.',
        'Keep some of that fire for later. You are going to need it.',
      ],
    },
  },
  ecoTercero: [
    'In all this, that person weighs more than it seems.',
    'The bond with the one you name colours every corner of the message.',
    'That someone is part of the picture too.',
    'What the other one does is pulling on this thread as well.',
  ],
  ecoTiempo: {
    pasado: [
      'Part of this looks backward, at something that has not closed yet.',
      'There is a before still breathing in the scene.',
      'Something old still has a root here.',
    ],
    futuro: [
      'The question pushes forward, and the answer goes that way.',
      'Everything leans toward what has not arrived yet.',
      'The gaze is set further out, and that is where what comes is pointing.',
    ],
  },
};
