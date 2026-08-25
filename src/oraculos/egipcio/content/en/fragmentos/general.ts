import type { FragmentosDeTema } from '../../fragmentos';

// English 'general' fragments for the 22 Major Arcana of the Egyptian Tarot.
// This is the fallback rung: if a card has no love/work/money fragment, the
// reading uses these.
//
// Register (see en/bancos.ts): plain before elevated, quiet mysticism. Everyday
// words; no optimise, manage, process, structure, potential, resources. At most
// one image per clause.
export const FRAGMENTOS_GENERAL_EN: FragmentosDeTema = {
  // 1 · The Magician
  1: {
    normal: [
      'having what it takes and knowing how to use it',
      'the steady hand of someone who knows what they are doing',
      'putting to work something you had only been keeping',
    ],
    invertida: [
      'knowing how and not daring to start',
      'a skill used for the wrong side',
      'circling without deciding, with everything within reach',
    ],
  },
  // 2 · The High Priestess
  2: {
    normal: [
      'a calm that sees further than it says',
      'knowing something inside before you can explain it',
      'the patience of someone who has seen this before',
    ],
    invertida: [
      'staying on the surface of something that asks for depth',
      'a pride that confuses what looks like with what is',
      'thinking you understood without having looked properly',
    ],
  },
  // 3 · The Empress
  3: {
    normal: [
      'something that bears fruit and it shows',
      'fertile ground, where what you plant grows',
      'being able to look after what is yours and make it grow',
    ],
    invertida: [
      'something that will not set no matter how you water it',
      'the urge to make something with nowhere to put it',
      'a neglect that lets what was alive wither',
    ],
  },
  // 4 · The Emperor
  4: {
    normal: [
      'firm ground to lean on',
      'setting things in order and keeping them there',
      'someone who orders and protects, or the part of you that does',
    ],
    invertida: [
      'a firmness that turned into rigidity',
      'depending on someone else for what you could hold up yourself',
      'an authority coming apart at the seams',
    ],
  },
  // 5 · The Hierophant
  5: {
    normal: [
      'leaning on the usual, which works for a reason',
      'advice from someone with more road behind them',
      'the caution of not stepping outside the mould yet',
    ],
    invertida: [
      'breaking the mould and doing it your way',
      'the discomfort of not fitting where you should',
      'losing your footing when the usual stops working',
    ],
  },
  // 6 · Indecision
  6: {
    normal: [
      'a choice of the heart that cannot be handed to anyone else',
      'a sincere affection, the kind that asks you to step up',
      'being between what lifts you and what ties you down',
    ],
    invertida: [
      'a whim dressed up as love',
      'someone from outside who got in the middle',
      'deciding on a whim what called for judgement',
    ],
  },
  // 7 · The Chariot
  7: {
    normal: [
      'gaining ground after a long push',
      'getting through something that looked jammed',
      'a run that opens the way',
    ],
    invertida: [
      'a push that crashes into its own limit',
      'something long chased that did not come off',
      'lurching along from wanting to get there first',
    ],
  },
  // 8 · Justice
  8: {
    normal: [
      'getting what is due, no more and no less',
      'something finally settling on the fair side',
      'the scale righting itself',
    ],
    invertida: [
      'a share-out that was not even',
      'paying more than was yours to pay',
      'a hard judgement, from others or your own, that weighs too much',
    ],
  },
  // 9 · The Hermit
  9: {
    normal: [
      'stepping aside a little to see better',
      'a small light, enough for the next step',
      'advice from someone who does not talk for the sake of it',
    ],
    invertida: [
      'a shutting-in that confuses instead of clearing',
      'a rushed piece of advice that cost dearly',
      'being alone in something that is not solved alone',
    ],
  },
  // 10 · The Wheel of Fortune
  10: {
    normal: [
      'a turn that arrives without being chased',
      'a run that changes for the better',
      'the wheel turning just when you had stopped expecting it',
    ],
    invertida: [
      'a run that has turned over',
      'a setback that did not depend on you',
      'the same days repeating with nothing changing',
    ],
  },
  // 11 · Strength
  11: {
    normal: [
      'holding your ground without losing the calm',
      'a conviction that is not up for negotiation',
      'the steadiness that masters what looked stronger',
    ],
    invertida: [
      'using strength to impose rather than to hold',
      'the energy going out just at the test',
      'giving way on something you knew not to give way on',
    ],
  },
  // 12 · The Apostolate
  12: {
    normal: [
      'letting something go today to gain clarity later',
      'a forced pause that is useful anyway',
      'staying still while what is inside settles',
    ],
    invertida: [
      'not wanting to let go of anything, not even what already weighs',
      'staying with the comfortable so as not to pay the price',
      'a promise made so nothing has to move',
    ],
  },
  // 13 · Death
  13: {
    normal: [
      'an ending that hurts and makes way',
      'something ending at the root, like it or not',
      'leaving behind what has served its time',
    ],
    invertida: [
      'clinging to something already over',
      'a change that has been delayed too long',
      'the stillness of staying where nothing happens',
    ],
  },
  // 14 · Temperance
  14: {
    normal: [
      'going slowly and arriving whole',
      'putting together two things that seemed not to fit',
      'a calm that sets everything else in order',
    ],
    invertida: [
      'the rush that breaks what was going well',
      'two parts that never quite understand each other',
      'losing patience just before the time',
    ],
  },
  // 15 · Evil
  15: {
    normal: [
      'a tie you partly chose',
      'something that has hold of you and is hard to name',
      'a guilt that collects on its own',
    ],
    invertida: [
      'loosening a chain that looked impossible',
      'getting out of something that had you trapped',
      'the truce after a long shutting-in',
    ],
  },
  // 16 · Fragility
  16: {
    normal: [
      'a collapse all at once, no warning',
      'something firm that turned out not to be',
      'a shake-up that breaks and leaves the ground clean',
    ],
    invertida: [
      'a collapse that keeps being delayed',
      'a tension that stretches and never quite bursts',
      'the routine pressing down slowly',
    ],
  },
  // 17 · Hope
  17: {
    normal: [
      'a small light, enough to keep going',
      'the appetite coming back after a long stretch',
      'trusting again that this can turn out well',
    ],
    invertida: [
      'the light that went out when you stopped believing',
      'a wait that became too long',
      'hoping for little so it does not hurt',
    ],
  },
  // 18 · The Moon
  18: {
    normal: [
      'something not fully in view that is worth a second look',
      'a hunch it would not do to ignore',
      'a promise that sounds better than it is',
    ],
    invertida: [
      'the fog beginning to lift',
      'bringing down to earth something you had been imagining bigger',
      'a small deception coming to light',
    ],
  },
  // 19 · The Sun
  19: {
    normal: [
      'good days, the kind you enjoy without guilt',
      'something that goes well and is shared on top of it',
      'the clarity of being in the right place',
    ],
    invertida: [
      'a gladness left dull for no clear reason',
      'a plan that fell through and left the day grey',
      'being surrounded and still feeling alone',
    ],
  },
  // 20 · The Last Judgement
  20: {
    normal: [
      'reckoning with what you have lived and coming out at peace',
      'something that finally gets recognised',
      'a waking up, the kind that changes how you see it all',
    ],
    invertida: [
      'fear of closing a chapter that is already closed',
      'an unfinished account that is hard to accept',
      'delaying an ending so you do not have to say goodbye',
    ],
  },
  // 21 · Transmutation
  21: {
    normal: [
      'the reward for something that took years',
      'a circle that finally closes',
      'arriving and being able to stay put',
    ],
    invertida: [
      'not being able to close what you had been building',
      'staying one step short, with the work half done',
      'the fear right before the last step',
    ],
  },
  // 22 · The Fool
  22: {
    normal: [
      'the urge to set off without having it all worked out',
      'a big decision taken with the body',
      'the first step of something just beginning',
    ],
    invertida: [
      'jumping without looking where you land',
      'not daring to take the step you already know is due',
      'spreading the appetite over so many things that none of it is enough',
    ],
  },
};
