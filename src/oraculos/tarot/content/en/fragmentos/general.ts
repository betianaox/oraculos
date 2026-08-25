import type { FragmentosDeTema } from '../../types';

// English 'general' fragments for the 22 Major Arcana. This is the fallback
// rung: if a card has no love/work/money fragment, the reading uses these.
//
// Register (see en/bancos.ts): plain before elevated, quiet mysticism. Everyday
// words; no optimise, manage, process, structure, potential, resources. At most
// one image per clause.
//
// Shape: short clauses that fit INSIDE a sentence ("Something moves underneath:
// {frag}"), never definitions of the card. Three variants per position.
export const FRAGMENTOS_GENERAL_EN: FragmentosDeTema = {
  'mayor-00': {
    normal: [
      'a beginning that asks for trust more than certainty',
      'the push to take the first step without seeing the whole road',
      'a blank page where you can choose without dragging the old along',
    ],
    invertida: [
      'staring at the drop so long that you never start',
      'a leap taken without looking, worth going over again',
      'not wanting to risk anything, dressed up as caution',
    ],
  },
  'mayor-01': {
    normal: [
      'the will and the right tools to turn the idea into something real',
      'the power of using what you know instead of only having it',
      'a focus able to pull everything into one purpose',
    ],
    invertida: [
      'talent going to waste, or a word that promises more than it keeps',
      'skill put to manipulating instead of making',
      'the doubt that freezes you with everything within reach',
    ],
  },
  'mayor-02': {
    normal: [
      'something you know by instinct before you know it by reason',
      'the answer that turns up in the quiet, not in the hurry',
      'a mystery that asks you to listen inward',
    ],
    invertida: [
      'an inner voice you are talking over',
      'a secret working away under the surface',
      'instinct buried under the noise',
    ],
  },
  'mayor-03': {
    normal: [
      'life spilling over and bearing fruit',
      'care that makes whatever it touches grow',
      'plenty you can enjoy without guilt',
    ],
    invertida: [
      'a way of making things that has stopped flowing',
      'care that turns smothering, or your own left untended',
      'giving so much that you forget yourself',
    ],
  },
  'mayor-04': {
    normal: [
      'the order that holds it all up and a steady hand in charge',
      'firm ground to build on',
      'the walls that protect what you already built',
    ],
    invertida: [
      'a grip that suffocates and a firmness with no give',
      'stubbornness that admits no other view',
      'everything loose and adrift, with nothing holding it',
    ],
  },
  'mayor-05': {
    normal: [
      'the guidance of what has been learned and tested',
      'the worth of belonging to something larger',
      'shared rules that give you something to lean on',
    ],
    invertida: [
      'a doctrine that leaves no room to think',
      'customs that no longer mean anything',
      'the healthy urge to find your own truth outside the mould',
    ],
  },
  'mayor-06': {
    normal: [
      'a choice made from what you truly value',
      'a bond that turns harmonious once you choose with the heart',
      'something that brings together what seemed apart',
    ],
    invertida: [
      'a decision you keep avoiding',
      'values pulling against each other inside you',
      'choosing out of fear or pressure instead of conviction',
    ],
  },
  'mayor-07': {
    normal: [
      'ground gained through will and focus',
      'opposing forces lined up toward the same goal',
      'the reins taken with discipline',
    ],
    invertida: [
      'forces pulling in different directions',
      'drive with no direction that gets nowhere',
      'trying to force your way through where giving way is called for',
    ],
  },
  'mayor-08': {
    normal: [
      'the gentleness that tames what will not be tamed',
      'the steadiness that holds without squeezing',
      'calm courage in front of what frightens you',
    ],
    invertida: [
      'strength turned into hardness',
      'giving in to the impulse instead of the steadiness',
      'doubting your own ability to hold on',
    ],
  },
  'mayor-09': {
    normal: [
      'stepping back to find clarity inside',
      'the wisdom of having walked a long way quietly',
      'a light you carry yourself for the next step',
    ],
    invertida: [
      'a retreat that has turned into hiding',
      'avoidance dressed up as searching',
      'refusing the guidance you need',
    ],
  },
  'mayor-10': {
    normal: [
      'a turn of fate that changes the usual',
      'cycles closing and asking you to go with them',
      'an opening worth taking while it lasts',
    ],
    invertida: [
      'a run that seems to be turning against you',
      'resisting a change that is coming anyway',
      'the feeling of being at the mercy of what happens',
    ],
  },
  'mayor-11': {
    normal: [
      'the truth weighed without heat',
      'consequences that match what was done',
      'a decision made with clarity and honesty',
    ],
    invertida: [
      'a scale tipping toward the unfair',
      'dodging responsibility for what you set off',
      "carrying blame that is someone else's",
    ],
  },
  'mayor-12': {
    normal: [
      'a pause that changes the whole view',
      'letting go of control to see differently',
      'a surrender that, standing still, still moves things along',
    ],
    invertida: [
      'a wait that has turned into a jam',
      'refusing to let go of what has to be let go',
      'sacrifices that lead nowhere',
    ],
  },
  'mayor-13': {
    normal: [
      'an ending that makes way for something new',
      'letting what has run its course die',
      'the renewal that only comes after the close',
    ],
    invertida: [
      'holding on to what is already over',
      'fearing the change so much that you drag out the ache',
      'a transformation asking to pass and meeting resistance',
    ],
  },
  'mayor-14': {
    normal: [
      'the middle point that mixes things in the right measure',
      'patiently combining what seemed not to fit',
      'the calm of going neither too far nor too short',
    ],
    invertida: [
      'the measure lost, too much of something somewhere',
      'the impatience that ruins what was going well',
      'parts of you that do not quite get along',
    ],
  },
  'mayor-15': {
    normal: [
      'the chains you put on yourself',
      'an attachment or a craving that binds even though it felt chosen',
      'the shadow we would rather not look at',
    ],
    invertida: [
      'seeing what binds you and starting to loosen it',
      'easing a tie you thought impossible to undo',
      'taking back the reins over a bond or a habit',
    ],
  },
  'mayor-16': {
    normal: [
      'the sudden collapse of what was badly built',
      'a truth that bursts out and frees',
      'what was held together with pins falls and leaves solid ground',
    ],
    invertida: [
      'a crisis you can see coming and keep dodging',
      'clinging to what no longer holds',
      'an inner shake that has not broken out yet',
    ],
  },
  'mayor-17': {
    normal: [
      'a hope that comes back after the storm',
      'the faith that things can heal',
      'a soft guidance that steadies and points the way',
    ],
    invertida: [
      'the light that went out for a while',
      'faith lost and the heart gone flat',
      'losing touch with what used to lift you',
    ],
  },
  'mayor-18': {
    normal: [
      'uncertain ground where things are not what they seem',
      'fears and daydreams tangled up with instinct',
      'walking slowly, trusting the gut',
    ],
    invertida: [
      'the fog beginning to lift',
      'a deception clearing up',
      'the confusion at its thickest, right before it clears',
    ],
  },
  'mayor-19': {
    normal: [
      'the clear gladness that lights things with no shadow',
      'success and truth in broad daylight',
      'a simple happiness with nothing hidden in it',
    ],
    invertida: [
      'an enthusiasm that is hard to light',
      'a gladness put off that is still there, covered for a while',
      'an outlook worth getting back',
    ],
  },
  'mayor-20': {
    normal: [
      'a waking up that calls you to look at your own life',
      'starting over after an honest reckoning',
      'forgiving yourself and stepping toward something fuller',
    ],
    invertida: [
      'a self-criticism that forgives nothing',
      'a call you keep ignoring',
      'staying caught in a past that is asking to close',
    ],
  },
  'mayor-21': {
    normal: [
      'a cycle completing itself in full',
      'the feeling of being whole and in tune',
      'the reward of the road and the doorway to a new one',
    ],
    invertida: [
      'a close within reach but still unfinished',
      'a goal missing one last step',
      'something you have not quite digested yet',
    ],
  },
};
