import type { BancosCruz } from '@/flujo/motorCruz';

// English connective bank for the five-card cross. This is the weave between
// the cards: openings, situation, tension, mind, next step and closing advice.
//
// Cards are NOT named here. The person has them in front of them; what they
// expect to read is what those cards say about their question, not a definition
// of each one.
//
// ── HOW THIS IS WRITTEN ──────────────────────────────────────────────────
// Two rules, taken from the Spanish bank (es/bancos.ts) where they were fixed
// after testing the app with real people. They are content rules, not style:
//
// 1. PLAIN BEFORE ELEVATED. Someone asking whether their contract gets renewed
//    has to recognise their own question in the answer. Everyday words, short
//    sentences, concrete subjects. Banned: report language — optimise, manage,
//    process, structure, dynamic, potential, resources, consolidate, "the
//    emotional/professional sphere". If a line could appear in a work
//    presentation, rewrite it.
// 2. QUIET MYSTICISM. Image before concept: fire, water, door, road, shadow,
//    thread, seed, root. ONE image per sentence and never two in a row; too
//    much turns the text pompous, which is the other way of not being
//    understood. No archaisms, no "the stars decree".
//
// The same rules live in the server prompt (imagostack/lib/oraculo/prompt.ts)
// so the AI reading and this one speak alike.
export const BANCOS_TAROT_EN: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        "For what you're asking {tema}, here is what shows up.",
        "Let's take your question {tema}. The cards lay it out like this.",
        "Here's what there is to show you {tema}.",
        "Let's go through what you're asking {tema}, piece by piece.",
      ],
      preocupacion: [
        'I understand the worry {tema}. Look calmly at what settles here.',
        "You're not in the dark {tema}: there are signs, and they fall like this.",
        'I know this weighs on you {tema}. Let\'s go slowly with what comes up.',
      ],
      impulso: [
        'With that eagerness to move {tema}, it helps to see the whole picture first.',
        'Before you jump, look at what is on the table {tema}.',
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
        "Breathe. None of this is written {tema}: it's a way of looking at what keeps you up.",
        'No rush. What weighs on you {tema} is laid out here so you can see it.',
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
  // These pick up WHAT the question is about, not just its topic. Telling
  // someone "you're asking whether they come back" is speaking about their
  // life; "for what you ask about love" is speaking about the oracle.
  //
  // None of them confirms or denies what is asked: they reframe the question
  // and move the gaze to what the spread can actually show.
  aperturasIntencion: {
    retorno: [
      "You're asking whether they come back. A card doesn't decide that, but you can see the ground that return would land on.",
      "You want to know if they'll come back. Nobody signs that answer; what you can see is what was left open between you.",
      'The question is whether they return. Look first at what is holding the distance today.',
    ],
    sentimiento: [
      "You're asking what that person feels, and only they know. What shows here is the bond as it stands.",
      "You want to know if they love you. No one can answer for another, but what is at play between you does come up.",
      "The question points at someone else's heart. The cards speak of what moves between you.",
    ],
    ruptura: [
      "You're thinking of cutting things off, and that's yours to decide. Here is what weighs on each side today.",
      "You're asking whether to leave. Before deciding, look at what is being held up.",
      'The question is whether to go. This shows what holds you and what pushes you.',
    ],
    decision: [
      "You're asking what suits you. Nobody chooses for you, but what is at stake gets laid out here.",
      "You're between two roads. Look at what falls on each side before deciding.",
      'The question is what to do. This is what is on the table.',
    ],
    comienzo: [
      "You're asking whether this beginning will prosper. Here you can see what it starts with.",
      'You want to know if it goes well. What shows up is the soil it is planted in.',
      'The question looks at what is about to start. This is what it brings.',
    ],
    espera: [
      "You're asking when. Dates are not read in cards, but what is still missing for that to ripen is.",
      'You want to know how long. Nobody marks the day; what is cooking does show.',
      'The question is about timing. Look at what still has to fall into place.',
    ],
  },
  // CAREFUL when writing these templates: fragments arrive in two shapes — noun
  // phrases ("a decision you keep avoiding") and gerunds ("looking again at
  // what you expect") — so the slot has to take both. What works: after a colon
  // or comma, after "is", "rests on", "comes down to".
  situacion: {
    dos: [
      'Something moves underneath: {frag1}. And at the centre, {frag2}.',
      'Around the scene: {frag1}. Holding it all up, {frag2}.',
      'This shows up first: {frag1}. But the real axis is another: {frag2}.',
      'What surrounds the matter is {frag1}, and at its centre beats {frag2}.',
      'Off to one side there is {frag1}, and right in the middle, {frag2}.',
      'What you see straight away: {frag1}. What really runs things: {frag2}.',
    ],
    // When the other card has nothing new to say, only one is planted.
    una: [
      'At the centre of it all there is something clear: {frag}.',
      'What holds the scene up is {frag}.',
      'Right in the middle, this is what beats: {frag}.',
      'If there is one thing to take from this, it is {frag}.',
    ],
  },
  // CAREFUL with subjects: no cards are named here, so "one", "the other" or
  // "the first" refer to nothing. Everything has to lean on the fragment
  // itself, never on a piece the text never mentions.
  tension: {
    tres: [
      'One side pulls toward {frag1}; the other, {frag3}. And in the middle {frag2} rules: that is the knot.',
      'The balance plays out between {frag1} and {frag3}, but what decides is {frag2}.',
      'What surfaces as {frag1} arranges itself around {frag2}, and the final colour comes from {frag3}.',
      'Something prepares the ground, {frag1}, and something unsettles it, {frag3}; in between sits {frag2}.',
      'Two things cross, {frag1} and {frag2}, and above both weighs {frag3}.',
      'Part of you leans on {frag1} and part pushes toward {frag3}; in the middle, {frag2} is what tips the scale.',
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
    'What keeps going round your head is this: {frag}.',
    'What occupies your mind today is {frag}.',
    'Above everything weighs {frag}.',
    'What is being thought — by you or by the person you ask about — is {frag}.',
    'What keeps you awake has to do with {frag}.',
  ],
  // The only card read looking forward. A hint of anticipation, but always as a
  // tendency: "takes shape", "everything points to". Never a done deal and
  // never a promise, which is where an oracle turns irresponsible.
  paso: [
    'And looking ahead, this takes shape: {frag}.',
    'What is coming points in this direction: {frag}.',
    'If nothing is forced, what follows hints at this: {frag}.',
    'On the near horizon there is already a sign of {frag}.',
    'Everything suggests that what comes next brings {frag}.',
    'The road that opens from here runs toward {frag}.',
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
        'What you fear is not written. Use this look to let go a little.',
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
        'Be kind to yourself: understanding is already the start of healing.',
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
