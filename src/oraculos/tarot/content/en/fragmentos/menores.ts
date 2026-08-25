import type { FragmentosDeTema } from '../../types';

// English 'general' fragments for the 56 Minor Arcana. They are merged with the
// Majors into the 'general' map (see en/index.ts). This is the fallback rung:
// if a card has no love/work/money fragment, the spread uses these.
//
// Register (see en/bancos.ts): plain before elevated, quiet mysticism. Short
// clauses that fit inside a sentence, never definitions of the card.
export const FRAGMENTOS_GENERAL_MENORES_EN: FragmentosDeTema = {
  // ── Wands ────────────────────────────────────────────────────────────────
  'bastos-as': {
    normal: [
      'a spark that lights the urge to do something',
      'the raw push of something new asking to be born',
      'the first shove toward an idea with fire in it',
    ],
    invertida: [
      'a spark that never quite catches',
      'enthusiasm going cold before it starts',
      'a plan slow to get off the ground',
    ],
  },
  'bastos-dos': {
    normal: [
      'the moment to plan and look far ahead',
      'settling the course before you throw yourself in',
      'a win that opens the question of where to grow next',
    ],
    invertida: [
      'fear of stepping outside what you know',
      'plans that never take shape',
      'staying with the safe thing out of fear of the big one',
    ],
  },
  'bastos-tres': {
    normal: [
      'something already under way starting to pay off',
      'something growing, and the confidence of having started it right',
      'watching the horizon for what you planted',
    ],
    invertida: [
      'what you expected taking its time to come back',
      'plans that do not return the way you thought',
      'expectations worth going over again',
    ],
  },
  'bastos-cuatro': {
    normal: [
      'a win that gets shared and celebrated',
      'the gladness of home and a steady base',
      'a doorway with the doors open to good things',
    ],
    invertida: [
      'a celebration that cools off or gets put back',
      'a harmony still fragile',
      'a crossing between one stage and the next',
    ],
  },
  'bastos-cinco': {
    normal: [
      'the friction of many pushing at once',
      'rivalry and small clashes of ego',
      'a racket that is asking for order',
    ],
    invertida: [
      'a clash avoided in time',
      'the tension dropping or finding an agreement',
      'sidestepping a fight, for better or worse',
    ],
  },
  'bastos-seis': {
    normal: [
      'a win that is recognised and applauded',
      'success shown and celebrated',
      'the confidence of having pulled it off',
    ],
    invertida: [
      'a win nobody sees',
      'the fall of a favour you had earned',
      'an ego mistaking applause for worth',
    ],
  },
  'bastos-siete': {
    normal: [
      'standing your ground and defending what is yours',
      'the nerve to hold the position',
      'the edge conviction gives you against the opposition',
    ],
    invertida: [
      'the tiredness of defending so much',
      'the urge to give ground',
      'feeling outmatched',
    ],
  },
  'bastos-ocho': {
    normal: [
      'things picking up speed all at once',
      'news or a message on its way',
      'energy in full flight toward where it is going',
    ],
    invertida: [
      'a push that hits the brakes',
      'messages that never arrive',
      'going too fast and losing the grip',
    ],
  },
  'bastos-nueve': {
    normal: [
      'still standing after many rounds',
      'the last reserve of strength',
      'keeping at it when you have nearly made it',
    ],
    invertida: [
      'the tiredness winning out',
      'a wariness that has turned into suspicion of everyone',
      'defending out of habit what no longer needs it',
    ],
  },
  'bastos-diez': {
    normal: [
      'the weight of everything you took on',
      'a load that has grown too heavy',
      'a win that is hard to carry alone',
    ],
    invertida: [
      'learning to let go and hand things over',
      'the collapse of someone who did not let go in time',
      'putting down what was never yours to carry',
    ],
  },
  'bastos-sota': {
    normal: [
      'the explorer in you just getting started',
      'curiosity and the urge to try',
      'news that lights a plan',
    ],
    invertida: [
      'enthusiasm scattering with no focus',
      'promises that do not hold up',
      'news that is late or disappoints',
    ],
  },
  'bastos-caballo': {
    normal: [
      'energy thrown into action',
      'adventure and the nerve to jump',
      'the urge to take something on with passion',
    ],
    invertida: [
      'a push that gets out of hand',
      'decisions made in a rush',
      'a plan that lost its fire',
    ],
  },
  'bastos-reina': {
    normal: [
      'a confidence and warmth that draw people in',
      'a charm that lights others up',
      'holding your plans up with passion and a firm hand',
    ],
    invertida: [
      'insecurity covered over with demands',
      'jealousy clouding things',
      'an energy that has gone out',
    ],
  },
  'bastos-rey': {
    normal: [
      'the leader with vision who inspires',
      'leading with drive and conviction',
      'passion turned into direction',
    ],
    invertida: [
      'a command that turns heavy-handed',
      'impatience with whoever cannot keep the pace',
      'decisions made in the heat of the moment',
    ],
  },
  // ── Cups ─────────────────────────────────────────────────────────────────
  'copas-as': {
    normal: [
      'the heart opening up',
      'the start of a love or of a full chapter',
      'a feeling that brims over and wants to be given',
    ],
    invertida: [
      'feelings held back',
      'a heart closing out of fear',
      'an empty place inside that is hard to fill',
    ],
  },
  'copas-dos': {
    normal: [
      'two people meeting and choosing each other',
      'mutual attraction, both ways',
      'a bond where both give and both receive',
    ],
    invertida: [
      'a bond tipping out of balance',
      'tension between two',
      'a union going cold',
    ],
  },
  'copas-tres': {
    normal: [
      'a toast among friends',
      'company and shared gladness',
      'the backing of your people',
    ],
    invertida: [
      'a party that goes too far',
      'gossip that clouds things',
      'needing to step away from the noise',
    ],
  },
  'copas-cuatro': {
    normal: [
      'the jaded look that misses what it already has',
      'no interest in what is being offered',
      'being so caught up in yourself that you miss a chance',
    ],
    invertida: [
      'the eyes lifting again',
      'accepting what is offered',
      'coming out of the fog',
    ],
  },
  'copas-cinco': {
    normal: [
      'grieving what was spilled',
      'eyes fixed on what was lost',
      'a sadness that forgets what is still there',
    ],
    invertida: [
      'the gaze turning toward what is left',
      'acceptance and forgiveness',
      'picking up what did not break and going on',
    ],
  },
  'copas-seis': {
    normal: [
      'the sweetness of a memory',
      'the tenderness of the simple and familiar',
      'a reunion, or the innocence of before',
    ],
    invertida: [
      'living anchored in the past',
      'idealising what is no longer there',
      'not being able to let go of what ended',
    ],
  },
  'copas-siete': {
    normal: [
      'a cloud of imagined possibilities',
      'plenty of tempting options',
      'telling the real one from the one that only shines',
    ],
    invertida: [
      'the fog clearing',
      'clarity to choose',
      'discarding what was only a mirage',
    ],
  },
  'copas-ocho': {
    normal: [
      'deciding to leave in search of something deeper',
      'leaving behind what no longer fills you',
      'following an inner call',
    ],
    invertida: [
      'fear of letting go and leaving',
      'staying out of habit',
      'the doubt between going and turning back',
    ],
  },
  'copas-nueve': {
    normal: [
      'the wish granted',
      'satisfaction and well-being',
      'the pleasure of enjoying what you got',
    ],
    invertida: [
      'an empty kind of contentment',
      'looking for in excess what will not fill you',
      'a wish that, once granted, does not satisfy',
    ],
  },
  'copas-diez': {
    normal: [
      'the fullness of the heart, shared',
      'family gladness and bonds in tune',
      'a home at peace',
    ],
    invertida: [
      'a harmony starting to crack',
      'tension in the family',
      'the distance between what you pictured and what is',
    ],
  },
  'copas-sota': {
    normal: [
      'a tender message',
      'a new sensitivity waking up',
      'news that moves you',
    ],
    invertida: [
      'feelings raw at the surface',
      'not yet grown up about feelings',
      'news from the heart that disappoints',
    ],
  },
  'copas-caballo': {
    normal: [
      'an offer from the heart',
      'romance and idealism',
      'an invitation of the heart on its way',
    ],
    invertida: [
      'promises that go unkept',
      'hopes with nothing under them',
      'a charm that is only surface',
    ],
  },
  'copas-reina': {
    normal: [
      'an empathy that holds other people',
      'deep instinct and feeling',
      'being there for someone without losing yourself',
    ],
    invertida: [
      'leaning on someone else to feel whole',
      "carrying other people's feelings",
      'giving so much that you empty out',
    ],
  },
  'copas-rey': {
    normal: [
      'feeling deeply without drowning in it',
      'calm and tact',
      'advising with the heart and the head at once',
    ],
    invertida: [
      'feelings pressed down that keep pushing',
      'using affection to get your way',
      'a coolness that denies what is felt',
    ],
  },
  // ── Swords ───────────────────────────────────────────────────────────────
  'espadas-as': {
    normal: [
      'the clean cut of clarity',
      'a truth seen all at once',
      'a sharp idea that puts the mess in order',
    ],
    invertida: [
      'confusion that will not let you see',
      'the truth used to wound',
      'thinking clouded over',
    ],
  },
  'espadas-dos': {
    normal: [
      'a decision you keep dodging',
      'a tense balance that cannot last',
      'not wanting to look so you do not have to choose',
    ],
    invertida: [
      'the blindfold finally coming off',
      'facing the situation head on',
      'the decision you put off, finally made',
    ],
  },
  'espadas-tres': {
    normal: [
      'the wound to the heart, plainly',
      'pain, a break, disappointment',
      'a truth that hurts and still clears things up',
    ],
    invertida: [
      'the wound starting to close',
      'the forgiveness that comes',
      'letting go of a grief you were carrying',
    ],
  },
  'espadas-cuatro': {
    normal: [
      'the truce you needed',
      'resting and getting your strength back',
      'a breather after the storm',
    ],
    invertida: [
      'a rest that never comes',
      'going back in before you are ready',
      'a restlessness that will not let you stop',
    ],
  },
  'espadas-cinco': {
    normal: [
      'a win with a bitter taste',
      'winning at any cost',
      'a wounded pride that was not worth the price',
    ],
    invertida: [
      'letting the pride go',
      'reaching for peace',
      'leaving behind a fight that already did its damage',
    ],
  },
  'espadas-seis': {
    normal: [
      'the crossing toward calmer water',
      'moving away from the hard thing in order to heal',
      'a move or a journey that settles you',
    ],
    invertida: [
      'finding it hard to leave what stayed behind',
      'carrying the weight of the past',
      'a crossing that never quite happens',
    ],
  },
  'espadas-siete': {
    normal: [
      'a quiet manoeuvre',
      'calculation and cunning',
      'getting something by going around the side',
    ],
    invertida: [
      'a deception coming to light',
      'a confession',
      'giving back what was taken by shortcut',
    ],
  },
  'espadas-ocho': {
    normal: [
      'feeling trapped, largely by your own fears',
      'limits you set on yourself',
      'a paralysis that actually has a way out',
    ],
    invertida: [
      'seeing that the way out was there all along',
      'shaking off the belief that froze you',
      'taking your own power back',
    ],
  },
  'espadas-nueve': {
    normal: [
      'the dread that comes at four in the morning',
      'worries that grow in the dark',
      'a fear bigger than the thing itself',
    ],
    invertida: [
      'the night starting to give way',
      'daring to ask for help',
      'seeing that the fear was out of proportion',
    ],
  },
  'espadas-diez': {
    normal: [
      'an ending that hits bottom',
      'a painful close, almost a defeat',
      'the lowest point, the one you climb back up from',
    ],
    invertida: [
      'the recovery beginning',
      'the worst of it already behind',
      'resisting an ending that has already come',
    ],
  },
  'espadas-sota': {
    normal: [
      'a mind awake and curious',
      'fresh ideas and a quick tongue',
      'someone watchful and sharp',
    ],
    invertida: [
      'words that cut',
      'gossip and suspicion',
      'a mind that analyses and does not feel',
    ],
  },
  'espadas-caballo': {
    normal: [
      'charging ahead on the strength of an idea',
      'going straight at it and saying things plainly',
      'a quick mind thrown into action',
    ],
    invertida: [
      'impulsiveness that runs people over',
      'sharpness that turns into aggression',
      'deciding without weighing what follows',
    ],
  },
  'espadas-reina': {
    normal: [
      'thinking clearly and speaking the truth',
      'independence and a sharp eye',
      'not letting yourself be fooled',
    ],
    invertida: [
      'a clarity that has gone cold',
      'criticism that wounds',
      'a sharp mind shut off from feeling',
    ],
  },
  'espadas-rey': {
    normal: [
      'governing by reason and by rule',
      'clear and fair judgement',
      'cutting exactly what is needed, without whim',
    ],
    invertida: [
      'reason turned cold or unfair',
      'power misused',
      'arguments that manipulate instead of clarifying',
    ],
  },
  // ── Pentacles ────────────────────────────────────────────────────────────
  'oros-as': {
    normal: [
      'the seed of good fortune',
      'a concrete, fertile opening',
      'a material beginning with roots',
    ],
    invertida: [
      'an opening let slip by',
      'feeling unsteady about money',
      'plans that promised and never set',
    ],
  },
  'oros-dos': {
    normal: [
      'the art of juggling',
      'balancing several things with some give',
      'holding it all up while you keep moving',
    ],
    invertida: [
      'the juggling coming down',
      'too much at once, and disorder',
      'not getting to everything and losing the rhythm',
    ],
  },
  'oros-tres': {
    normal: [
      'craft and working as a team',
      'collaboration that adds up talents',
      'bringing what you know to something built together',
    ],
    invertida: [
      'nobody pulling the same way',
      'disagreements that jam things up',
      'work left half done',
    ],
  },
  'oros-cuatro': {
    normal: [
      'holding on to what is yours with a firm hand',
      'security and savings',
      'being careful with what you have',
    ],
    invertida: [
      'a grasping that suffocates',
      'learning to loosen up and share',
      'hands too full from holding on',
    ],
  },
  'oros-cinco': {
    normal: [
      'the cold of going without',
      'feeling shut out or in a tight spot',
      'a shelter nearby that you cannot see',
    ],
    invertida: [
      'the run of luck turning',
      'the help that shows up',
      'coming out of the cold and back into the warm',
    ],
  },
  'oros-seis': {
    normal: [
      'the fair flow of giving and receiving',
      'generosity, and help that arrives',
      'the balance between the one who has and the one who needs',
    ],
    invertida: [
      'help with strings attached',
      'debts that tie you down',
      'a give and take that is not even',
    ],
  },
  'oros-siete': {
    normal: [
      'the pause to weigh what you planted',
      'patience while the harvest ripens',
      'work that is starting to pay',
    ],
    invertida: [
      'impatience for results',
      'effort poured where it does not pay',
      'a harvest thinner than you hoped',
    ],
  },
  'oros-ocho': {
    normal: [
      'the pleasure of a job done with care',
      'getting better by sheer practice',
      'sharpening what you know how to do',
    ],
    invertida: [
      'work done by rote, with nothing in it',
      'a perfectionism that freezes you',
      'doing things any old way',
    ],
  },
  'oros-nueve': {
    normal: [
      'enjoying what you earned yourself',
      'standing on your own feet',
      'the pleasure of being well and alone',
    ],
    invertida: [
      'depending on other people',
      'a solitude that weighs',
      'a win that cost everything else',
    ],
  },
  'oros-diez': {
    normal: [
      'good fortune putting down roots',
      'steady means, family and something left behind',
      'the security you build over time',
    ],
    invertida: [
      'conflicts over money or inheritance',
      'nothing steady underfoot',
      'clinging to what has piled up until it tangles the bonds',
    ],
  },
  'oros-sota': {
    normal: [
      'the willing student of life',
      'a real chance to learn',
      'the first serious step toward something lasting',
    ],
    invertida: [
      'the focus slipping away',
      'plans that never leave the page',
      'a chance let slip by',
    ],
  },
  'oros-caballo': {
    normal: [
      'the steadiest and most reliable of them',
      'moving one step at a time, no rush',
      'finishing what you start',
    ],
    invertida: [
      'steadiness turned into going through the motions',
      'the same thing month after month with nothing rising',
      'stubbornness with a method that no longer works',
    ],
  },
  'oros-reina': {
    normal: [
      'looking after the practical side with both feet on the ground',
      'a home that does well and feeds everyone in it',
      'good sense to run things and to care at the same time',
    ],
    invertida: [
      'worn out from tending to everything',
      'neglecting yourself to hold up everyone else',
      'a hunger for things that comes out of feeling unsafe',
    ],
  },
  'oros-rey': {
    normal: [
      'mastery of the practical side',
      'a success that is settled and safe',
      'the generosity of someone who no longer fears for what is theirs',
    ],
    invertida: [
      'good fortune souring into greed',
      'attachment to status and control',
      'measuring everything in money',
    ],
  },
};
