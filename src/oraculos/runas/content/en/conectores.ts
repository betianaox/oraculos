// The weave between the runes and the person.
//
// Runes are NOT named here: the person can see them on screen, and what they
// expect to read is what those runes say about their question, not a
// definition of each one.
//
// Placeholders: {frag1} {frag2} {frag3} = fragments from fragmentos/<tema>.ts
//
// NOTE: fragments are short clauses of varying shape. These templates lean on
// colons and commas so any of them fits without breaking the sentence.

/** Closes the first paragraph: the situation, from the first two runes. */
export const situacion: string[] = [
  'Something is moving underneath: {frag1}. And alongside it, {frag2}.',
  'What surrounds the matter: {frag1}. Holding it up, {frag2}.',
  'This shows up first: {frag1}. And behind it, {frag2}.',
  'Two things are at play: {frag1}, and also {frag2}.',
  'What shows on the surface: {frag1}. What beats underneath: {frag2}.',
];

/**
 * Second paragraph: the third rune, the only one that looks ahead. A hint of
 * anticipation, always as a tendency, never as something already settled.
 */
export const cierre: string[] = [
  'And looking ahead, this takes shape: {frag3}.',
  'What is coming points in this direction: {frag3}.',
  'If nothing is forced, what follows hints at this: {frag3}.',
  'On the near horizon there is already a sign of {frag3}.',
  'Everything suggests that what comes next brings {frag3}.',
];
