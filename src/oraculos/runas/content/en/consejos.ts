import type { Modo, Tema, Tono } from '../types';

// Closing advice, combined (not per rune). Split by mode (open/closed) and,
// within each, by TONE. 'neutro' is the fallback. Tone matters most here: a
// worried querent is best settled, an eager one, guided without being stopped.
// Neutral English, no gendered wording.
export const consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>> = {
  amor: {
    abierta: {
      neutro: [
        'The advice is simple: pay attention to what you already know but have not dared to say.',
        'Letting go helps more than trying to manage everything: let this find its own pace.',
        'The balance between giving and receiving matters, whether or not there is a relationship yet.',
        'Before acting, take a moment to listen to what you truly feel.',
      ],
      preocupacion: [
        'You do not have to solve it all today, it is enough not to lose yourself in the process.',
        'Treat this with the same patience you would give someone you care about.',
        'Ease up on yourself: feeling doubt is not doing something wrong.',
      ],
      impulso: [
        'Make room for that enthusiasm, but let the other person set their pace too.',
        'The eagerness is fine, hold on to it without rushing the steps.',
        'Use that momentum to get closer, not to force a definition.',
      ],
    },
    cerrada: {
      neutro: [
        'It is worth taking a concrete step instead of turning it over in your head.',
        'Talk about what keeps getting postponed — it will not sort itself out.',
        'Choose carefully where to place your time and energy.',
        'Showing what you feel, without so much filter, may be exactly what is needed now.',
      ],
      preocupacion: [
        'A small, firm step calms you more than turning over what you fear.',
        'Before deciding, ease the worry: the answer looks clearer in calm.',
        'You do not need to have it all resolved to take the first step.',
      ],
      impulso: [
        'If the momentum is genuine, a concrete step now makes sense.',
        'Use the eagerness to act, not just to imagine.',
        'Move with that eagerness, while leaving room for the other person to respond.',
      ],
    },
  },
  trabajo: {
    abierta: {
      neutro: [
        'The advice is simple: pay attention to what you already know but have not taken on.',
        'Letting go helps more than trying to manage everything: let the process keep its pace.',
        'The balance between effort and rest matters, even if pressure says otherwise.',
        'Before acting, take a moment to think about what you truly need from work.',
      ],
      preocupacion: [
        'Do not carry it all at once, one thing at a time is progress too.',
        'Ease the pressure a notch: you think more clearly from there.',
        'What weighs on you today sorts out better in parts than all at once.',
      ],
      impulso: [
        'Channel that momentum into a first concrete, sustainable step.',
        'Eagerness helps, do not let it make you skip the steps in between.',
        'Use the energy to sort out the plan, not just to get started.',
      ],
    },
    cerrada: {
      neutro: [
        'It is worth taking a concrete step instead of turning it over in your head.',
        'Talk about what keeps getting postponed with whoever it concerns — it will not sort itself out.',
        'Choose carefully where to place your time and work energy.',
        'Showing what you need, without so much filter, may be exactly what is needed now.',
      ],
      preocupacion: [
        'Before deciding, sort out the facts: the choice weighs less with a cool head.',
        'A measured step calms more than rushing an exit out of fear.',
        'Do not decide out of exhaustion, give yourself a moment before resolving.',
      ],
      impulso: [
        'If the opportunity is real, take the step instead of only feeling excited.',
        'Turn the eagerness into a concrete, verifiable step.',
        'A good moment to move forward, always with a plan behind it.',
      ],
    },
  },
  dinero: {
    abierta: {
      neutro: [
        'The advice is simple: pay attention to what you already know but have not resolved.',
        'Letting go helps more than trying to manage everything: let the plan keep its pace.',
        'The balance between saving and enjoying matters, even if worry says otherwise.',
        'Before acting, take a moment to think about what you truly need to resolve.',
      ],
      preocupacion: [
        'A clear number is less frightening than an account you would rather not look at.',
        'Sort out the urgent from the important: not everything weighs the same today.',
        'Step by step: money settles down when you look at it up close.',
      ],
      impulso: [
        'A good moment to move something, as long as you keep a margin of safety.',
        'Do not let excitement eat the planning: get excited with a plan.',
        'Use the eagerness to sort out and project, not just to spend.',
      ],
    },
    cerrada: {
      neutro: [
        'It is worth taking a concrete step instead of turning it over in your head.',
        'Talk about the money matter that keeps getting postponed — it will not sort itself out.',
        'Choose carefully where to place your resources now.',
        'Showing your real situation, without so much filter, may be exactly what is needed now.',
      ],
      preocupacion: [
        'Before deciding, look at the real number: it almost always frightens less up close.',
        'A small, safe step sorts things out more than a rushed move.',
        'Do not resolve money matters out of fright, the facts come first.',
      ],
      impulso: [
        'If the numbers add up, move forward, if not, wait without losing the momentum.',
        'Use the eagerness to get organized, not just to spend.',
        'Move with that momentum, while keeping a margin just in case.',
      ],
    },
  },
  general: {
    abierta: {
      neutro: [
        'The advice is simple: pay attention to what you already know but have not taken on.',
        'Letting go helps more than trying to manage everything: let this find its own pace.',
        'Balance matters more than pressure, even when it is hard to remember.',
        'Before acting, take a moment to listen to what you truly need.',
      ],
      preocupacion: [
        'You do not have to solve it all today, it is enough to take one step at a time.',
        'Treat yourself with a little of the patience you would give someone else.',
        'What weighs on you today eases when you stop demanding it be resolved.',
      ],
      impulso: [
        'Make room for that momentum, but rest it on a first concrete step.',
        'Eagerness is a good sign, hold on to it without rushing the process.',
        'Use the energy to start with something small and real.',
      ],
    },
    cerrada: {
      neutro: [
        'It is worth taking a concrete step instead of turning it over in your head.',
        'Talk about what keeps getting postponed — it will not sort itself out.',
        'Choose carefully where to place your time and energy.',
        'Showing what you feel, without so much filter, may be exactly what is needed now.',
      ],
      preocupacion: [
        'A small, firm step calms more than turning over what you fear.',
        'Before deciding, take it down a notch: things look clearer in calm.',
        'You do not need full certainty to take the first step.',
      ],
      impulso: [
        'If the momentum is genuine, a concrete step now makes sense.',
        'Use the eagerness to act, not just to imagine.',
        'A good moment to move, with a minimal plan behind it.',
      ],
    },
  },
};
