import type { Tema, Tono } from '../types';

// English opening line, before the combined three-rune sentence. It is the
// bridge between the question and the reading.
//
// ── HOW THIS IS WRITTEN ──────────────────────────────────────────────────
// Testers flagged two problems in the Spanish pack, and this one was a straight
// translation of it, so it had both. The rules below are the fix, and they are
// about content, not style:
//
// 1. TALK TO THE PERSON, don't describe the spread. The subject of the sentence
//    is them and their situation, never "this reading" or "these runes". Plain
//    everyday words. Banned: report language — "aspect", "tendency", "factors",
//    "the emotional/professional/financial side", "current state", "process".
//    "This combination offers a look at the professional side of things" is a
//    data sheet; someone asking whether their contract gets renewed does not
//    recognise themselves in it.
// 2. QUIET MYSTICISM. At most one image per line — stone, fire, road, thread —
//    and never two in a row. No archaisms, no solemnity.
//
// The same rules live in the Spanish pack (es/aperturas.ts), in the Tarot,
// Angels and Egyptian banks, and in the server prompt, so the AI reading and
// this one speak alike.
//
// "Open" names the area (love/work/money) because the question was reflective;
// "closed" doesn't need to, so that pool is topic-agnostic. Each pool is split
// by TONE (worry/drive/neutral); 'neutro' is the fallback.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      "Here's what there is to show you about love.",
      "Let's take a calm look at how things stand with what you feel.",
      'The stones settle on what weighs most in love right now.',
      "Let's look at what is really going on with that bond.",
      "About what you're asking of the heart, this is what shows up.",
      'Something about love is easier to see today than on other days.',
      "This is what comes up when you ask about that person.",
      'What you feel has a shape too, and today it looks like this.',
    ],
    preocupacion: [
      "Let's look calmly at what is unsettling you in love.",
      "I know matters of the heart have been weighing on you. Let's go slowly.",
      'What worries you about that bond is easier to see without rushing.',
      'These stones take careful hold of the doubt you carry in love.',
    ],
    impulso: [
      'You come with real eagerness, and in love that shows too.',
      "Let's go with that drive you bring to matters of the heart.",
      'With all that enthusiasm, there is something worth seeing first.',
      'The energy you bring to love says something of its own.',
    ],
  },
  trabajo: {
    neutro: [
      "Here's what there is to show you about work.",
      "Let's take a calm look at how work is going.",
      'The stones settle on what weighs most at your job right now.',
      "Let's look at what is really going on with this work matter.",
      "About the path you're asking about, this is what shows up.",
      'Something about work is easier to see today than on other days.',
      'This is what comes up when you ask about your job.',
      'What you carry from work has a shape too, and today it looks like this.',
    ],
    preocupacion: [
      "Let's look calmly at what is unsettling you about work.",
      "I know work has been weighing on you. Let's go slowly.",
      'What worries you about your job is easier to see without rushing.',
      'These stones take careful hold of the tension you bring from work.',
    ],
    impulso: [
      'You come with real eagerness, and at work that shows too.',
      "Let's go with that drive you bring to your job.",
      'With all that enthusiasm for what is coming, there is something to see first.',
      'The energy you bring to work says something of its own.',
    ],
  },
  dinero: {
    neutro: [
      "Here's what there is to show you about money.",
      "Let's take a calm look at how the accounts are doing.",
      'The stones settle on what weighs most about money right now.',
      "Let's look at what is really going on with this money matter.",
      "About what you're asking on the material side, this is what shows up.",
      'Something about money is easier to see today than on other days.',
      'This is what comes up when you ask about the money side.',
      'What you carry about the bills has a shape too, and today it looks like this.',
    ],
    preocupacion: [
      "Let's look calmly at what is unsettling you about money.",
      "I know the bills have been weighing on you. Let's go slowly.",
      'What worries you about money is easier to see without rushing.',
      'These stones take careful hold of the tension money brings you.',
    ],
    impulso: [
      'You come with real eagerness, and with money that shows too.',
      "Let's go with that drive you bring to the money side.",
      'With all that enthusiasm for what you are planning, there is something to see first.',
      'The energy you bring to your accounts says something of its own.',
    ],
  },
  general: {
    neutro: [
      "Here's what there is to show you about this moment.",
      "Let's take a calm look at what you are going through.",
      'The stones settle on what weighs most right now.',
      "Let's look at what is really going on with what you bring.",
      'About what you are asking, this is what shows up.',
      'Something about your moment is easier to see today than on other days.',
      'This is what comes up when you ask about where you stand.',
      'What you are going through has a shape too, and today it looks like this.',
    ],
    preocupacion: [
      "Let's look calmly at what is unsettling you.",
      "I know this has been weighing on you. Let's go slowly.",
      'What worries you is easier to see without rushing.',
      'These stones take careful hold of the doubt you carry.',
    ],
    impulso: [
      'You come with real eagerness, and that shows too.',
      "Let's go with that drive you bring.",
      'With all that enthusiasm, there is something worth seeing first.',
      'The energy you bring to what is coming says something of its own.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    'This is what the runes answer to what you asked.',
    "Let's take your question. This is what shows up.",
    "For what you're asking, here is what there is.",
    'The stones answer, and this is how they answer.',
    'This is what comes up for your question.',
    "Let's look at your question with what came out.",
    'What you asked has this answer.',
    'Here is what the runes bring for what you want to know.',
    'This is what settles around your question.',
    'For what you want to know, this is what lights up.',
  ],
  preocupacion: [
    'This is what the runes answer, and they say it without drama.',
    'The stones answer your question calmly.',
    'They answer what you asked without overstating it.',
    'This is what comes up, read with a steady eye.',
  ],
  impulso: [
    'The runes answered, and there is reason to feel encouraged.',
    'This is what they bring for what you asked.',
    'They answer your question with good energy.',
    'This is what the stones return to what you want to know.',
  ],
};
