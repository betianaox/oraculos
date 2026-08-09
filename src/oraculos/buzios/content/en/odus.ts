// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { Odu, BaseOdus } from '../types';

// Consulta SIMBOLICA de los 16 odus del dilogun, en redaccion propia y tono
// reflexivo (como el I Ching). El numero es la cantidad de cauries abiertos.
//
// QUE ES Y QUE NO ES: esto NO reproduce el jogo de buzios, que es un ritual
// sagrado del Candomble que realizan personas iniciadas. Es una lectura propia
// de los significados que circulan publicamente, escrita SIN la formacion de
// alguien de la casa. Por eso el tono acompaña y no dicta, no invoca a nadie,
// no prescribe ofrendas ni rituales, y no habla en nombre de ninguna tradicion.

const odu1: Odu = {
  numero: 1,
  nombre: 'Okana',
  palabrasClave: ['beginnings', 'individuality', 'impulse', 'changes'],
  significado: {
    general:
      'Something is beginning. It is the one, the starting point, carrying the energy of the new ' +
      'and of your own inner strength. Yet, it warns against excessive pride, ' +
      'impatience, and conflict: what starts with arrogance or force often goes astray. ' +
      'Take the first step firmly, but without rushing ahead.',
    amor:
      'A beginning or a change in the relationship. Beware of selfishness and ' +
      'arguments over control: an oversized "ego" creates distance. Calm firmness ' +
      'brings people closer; arrogance breaks bonds.',
    trabajo:
      'A time to start something on your own. Determination helps, but avoid ' +
      'unnecessary confrontations and the desire to do everything alone. To start well ' +
      'is to start without arrogance.',
    dinero:
      'A new financial movement is beginning. Measured initiative is advised, not ' +
      'impulsiveness. What starts with a cool head prospers; what is impulsive is lost.',
  },
  orientacion: {
    favorable:
      'With humility and firmness, this beginning clears the path: it is time to take ' +
      'the first step.',
    desafio:
      'The risk is pride and conflict. Lower your ego and mind your manners so that ' +
      'the beginning does not stall.',
  },
};

const odu2: Odu = {
  numero: 2,
  nombre: 'Eji Oko',
  palabrasClave: ['duality', 'dilemma', 'two paths', 'tension'],
  significado: {
    general:
      'The two and duality speak: there are two paths, two forces, or two people in ' +
      'tension. It is time to choose with clarity and avoid being caught between two ' +
      'worlds. Conflicts between peers—siblings, partners, equals—call for restraint. ' +
      'Define where you stand, without betraying yourself.',
    amor:
      'A situation involving two that requires definition: perhaps a doubt between two, or a ' +
      'tension with your partner. Avoid staying in the middle; clarity and sincerity ' +
      'will unlock the situation.',
    trabajo:
      'A dilemma between two options or a tension with a peer. Choose wisely and do not ' +
      'fuel rivalries. Indecision costs more than making a mistake.',
    dinero:
      'Two paths or two expenses competing. It is best to prioritize and not divide ' +
      'your strength. Deciding in time prevents losing on both sides.',
  },
  orientacion: {
    favorable:
      'If you choose with clarity and stand by your decision, the duality resolves in ' +
      'your favor.',
    desafio: 'The risk is indecision and conflict between equals. Do not stay in the middle.',
  },
};

const odu3: Odu = {
  numero: 3,
  nombre: 'Ogunda',
  palabrasClave: ['work', 'effort', 'cut', 'conflict'],
  significado: {
    general:
      'The strength of iron and work speaks: energy to forge a path, but also the ' +
      'risk of conflict, cuts, and drastic decisions. It is time to put in the ' +
      'effort and cut away what no longer serves, avoiding violence and impulsivity. ' +
      'What is achieved is earned through hard work.',
    amor:
      'A bond with tension or one that requires a firm decision, perhaps cutting ties with what ' +
      'It hurts. Direct honesty resolves; aggression destroys.',
    trabajo:
      'A time for hard effort and work that pays off through persistence. There may be friction or ' +
      'a drastic decision to make. Cut away what isn\'t working, but without fighting ' +
      'more than necessary.',
    dinero:
      'Success comes through effort and work, not by chance. You may need to cut an expense ' +
      'or a partnership that holds you back. A firm decision protects you.',
  },
  orientacion: {
    favorable:
      'Firm effort clears the path: it is time to work hard and cut away what ' +
      'is unnecessary.',
    desafio: 'The risk is conflict and impulsivity. Channel your strength into work, not into fighting.',
  },
};

const odu4: Odu = {
  numero: 4,
  nombre: 'Irosun',
  palabrasClave: ['foundations', 'depth', 'patience', 'the hidden'],
  significado: {
    general:
      'No one knows what lies at the bottom of the sea: deep matters speak, the ' +
      'foundations and what is not yet seen. It is a time for patience and building ' +
      'a base, without despairing over what hasn\'t appeared yet. It also asks for attention to ' +
      'what is hidden beneath the surface.',
    amor:
      'There is something deep at stake, perhaps feelings or matters not entirely ' +
      'in plain sight. Patience and sincerity are needed to reach the bottom; not everything is solved ' +
      'quickly.',
    trabajo:
      'A moment to lay solid foundations rather than seeking immediate results. What is ' +
      'built with patience endures. Pay attention to what is not fully visible in your ' +
      'environment.',
    dinero:
      'A time to build a base and practice patience: the fruits are deep-rooted, not ' +
      'immediate. Be careful with what remains unclear in a deal.',
  },
  orientacion: {
    favorable: 'Patience and solid foundations bear fruit: what is deep works in your favor.',
    desafio: 'The risk is despair over what cannot be seen. Trust the process and tend to what is hidden.',
  },
};

const odu5: Odu = {
  numero: 5,
  nombre: 'Oshe',
  palabrasClave: ['love', 'prosperity', 'sweetness', 'health'],
  significado: {
    general:
      'The river, love, and abundance speak: sweetness, affection, and prosperity. It is a ' +
      'warm and fertile sign, but it also asks you to care for your health and emotions—the ' +
      'vital aspects. Enjoy the good without neglecting your body or your heart.',
    amor:
      'A sign of love, sweetness, and good moments in relationships. It is time to enjoy and ' +
      'nurture the bond. Be careful that emotional intensity does not overflow.',
    trabajo:
      'A prosperous moment with good flow and potential recognition. Watch out for ' +
      'emotional burnout along the way.',
    dinero:
      'Good energy for prosperity and flowing finances. Manage with ' +
      'discretion and without excess.',
  },
  orientacion: {
    favorable: 'Love and abundance are flowing: it is time to enjoy and harvest.',
    desafio: 'The risk lies in health and overflowing emotions. Take care of your body and heart.',
  },
};

const odu6: Odu = {
  numero: 6,
  nombre: 'Obara',
  palabrasClave: ['the word', 'unexpected fortune', 'prudence in speech'],
  significado: {
    general:
      'The mouth and the power of the word speak: fortune can arise from nothing, ' +
      'but one word too many can ruin everything. It is time to watch what you ' +
      'it says, do not lie or gossip, and be alert for an opportunity that arrives by ' +
      'surprise. The King does not tell lies.',
    amor:
      'Watch your words in the relationship: what is said carries weight, for better or worse. ' +
      'Sincerity builds; gossip or lies destroy.',
    trabajo:
      'An opportunity may arise from where you least expect it. Watch what you say and the ' +
      'promises you make: your word is your value.',
    dinero:
      'An unexpected fortune may arrive, even from nothing. But be careful with verbal ' +
      'agreements: make sure everything is clear.',
  },
  orientacion: {
    favorable: 'An unexpected opportunity opens up: the right word, at the right time, brings fortune.',
    desafio: 'The risk lies in the tongue: a lie or gossip can ruin it. Measure what you say.',
  },
};

const odu7: Odu = {
  numero: 7,
  nombre: 'Odi',
  palabrasClave: ['home', 'intimacy', 'foundations', 'trust'],
  significado: {
    general:
      'It speaks of origin and intimacy: matters of the home, family, and what is ' +
      'most private. It is time to nurture emotional foundations and be prudent with ' +
      'confidences. What is dug deep can be a refuge or a trap.',
    amor:
      'Intimate and deep matters in the relationship or home. Protect trust and ' +
      'privacy; betrayals and gossip cause great harm here.',
    trabajo:
      'A time to care for your base and immediate work environment. Beware of ' +
      'misplaced confidences and disloyalty.',
    dinero:
      'Time to secure economic foundations, the home, the basics. Be careful about ' +
      'entrusting money or secrets to the wrong people.',
  },
  orientacion: {
    favorable: 'The foundations of the home and intimacy are strengthened: it is time to build a refuge.',
    desafio: 'The risk here is betrayal and indiscretion. Be mindful of who you share your secrets with.',
  },
};

const odu8: Odu = {
  numero: 8,
  nombre: 'Eji Ogbe',
  palabrasClave: ['clarity', 'head', 'leadership', 'humility'],
  significado: {
    general:
      'The head speaks: clarity, wisdom, and leadership. It is a luminous sign, ' +
      'representing those who govern their lives with a cool, elevated mind. Yet it warns ' +
      'against pride and arrogance: the head that swells with ego will fall. Think ' +
      'with clarity and remain humble.',
    amor:
      'A moment of clarity in your relationship: thinking with a cool head helps. Watch ' +
      'out for pride, as it cools the warmth of love.',
    trabajo:
      'A good time to lead and make lucid decisions. The only caution is arrogance: ' +
      'lead without feeling superior to others.',
    dinero:
      'Clarity to organize and make sound financial decisions. A cool head pays off; ' +
      'arrogance leads to loss.',
  },
  orientacion: {
    favorable: 'Clarity and good judgment place you in a position of strength: it is time to lead with lucidity.',
    desafio: 'The risk is arrogance. Lower your pride so you don\'t lose your way.',
  },
};

const odu9: Odu = {
  numero: 9,
  nombre: 'Osa',
  palabrasClave: ['sudden changes', 'wind', 'instability', 'friendships'],
  significado: {
    general:
      'The wind speaks of sudden change: sharp turns and instability. It is a ' +
      'turbulent time, where what is true today may shift tomorrow. It warns about friendships—the ' +
      'a best friend can become your worst—beware of impulsivity. Stay centered ' +
      'in the midst of the storm.',
    amor:
      'A time of instability or sudden shifts in your bond. Watch out for ' +
      'impulsive reactions and outside influences. Calmness sustains what the ' +
      'The wind stirs.',
    trabajo:
      'Sudden changes or a shifting environment. Be mindful of false friends and ' +
      'unexpected turns. Keep a cool head and avoid reacting in the heat of the moment.',
    dinero:
      'A time of economic instability or sudden shifts. Now is not the time to take ' +
      'unnecessary risks; protect what you have amidst the fluctuations.',
  },
  orientacion: {
    favorable: 'Change, when well-channeled, brings renewal: the wind can carry you to a better shore.',
    desafio: 'The risk lies in instability and nearby betrayal. Guard your friendships and your center.',
  },
};

const odu10: Odu = {
  numero: 10,
  nombre: 'Ofun',
  palabrasClave: ['the spiritual', 'the delicate', 'respect for elders', 'care'],
  significado: {
    general:
      'This speaks of a delicate and spiritual sign, linked to the ancient and the sacred. It asks for ' +
      'respect for elders, care for your health, and prudence in your words and ' +
      'your actions. It is a time for humility and reverence, not arrogance.',
    amor:
      'A delicate moment that calls for care and respect in your bond. Avoid harsh ' +
      'words and hurtful gestures; respect is what sustains you.',
    trabajo:
      'A time for prudence and respect, especially toward elders or those with wisdom ' +
      'more. This is not a time for arrogance or shortcuts.',
    dinero:
      'A delicate moment for your finances: be careful, stay prudent, and avoid any waste. ' +
      'Respect what you have and do not tempt fate.',
  },
  orientacion: {
    favorable: 'Humility and respect invite protection: the spiritual realm is with you.',
    desafio: 'The risk lies in arrogance and neglect, both in your health and your relationships. Take care and be respectful.',
  },
};

const odu11: Odu = {
  numero: 11,
  nombre: 'Owani',
  palabrasClave: ['wasted effort', 'do not squander', 'overcoming scarcity'],
  significado: {
    general:
      'Drawing water with a basket: speaks of effort lost and energy poorly ' +
      'invested. It warns against desperation, waste, and decisions ' +
      'made from a place of lack. It is time to stop squandering—resources, strength, ' +
      'opportunities—and to seek solutions with a clear head, not with anxiety.',
    amor:
      'Be careful about investing effort in a bond that gives nothing back, or acting out of ' +
      'need. Do not waste your affection where there is no reciprocity.',
    trabajo:
      'Pay attention to where your efforts are not yielding results. Review where your energy ' +
      'is going and stop working in vain. Overcoming scarcity requires strategy, not desperation.',
    dinero:
      'Beware of waste and decisions made from a place of lack. Do not ' +
      'throw resources into a bottomless pit; manage them wisely.',
  },
  orientacion: {
    favorable: 'Redirecting your effort pulls you out of the hole: when well-directed, energy yields results.',
    desafio: 'The risk is useless burnout and desperation. Do not squander or decide out of fear.',
  },
};

const odu12: Odu = {
  numero: 12,
  nombre: 'Ejila Shebora',
  palabrasClave: ['fire', 'justice', 'strength', 'rectitude'],
  significado: {
    general:
      'Speaks of fire and justice: strength, courage, and the energy of those who fight for ' +
      'what is right. It is a sign of victory, but only when the cause is just and not ' +
      'Power is being abused. It is time for firmness and to defend what is yours with integrity, ' +
      'without letting yourself be carried away by anger.',
    amor:
      'A moment of passion and intensity, but also of potential conflict. Just firmness brings ' +
      'people closer; an explosion of anger drives them away. Defend the bond without ' +
      'burn it.',
    trabajo:
      'Strength and courage to move forward and stand up for what is fair. A good time to ' +
      'stand your ground with integrity, without abusing power or fighting unnecessarily.',
    dinero:
      'Energy to defend and nurture what is yours with resolve. Integrity in your ' +
      'dealings brings victory; abuse leads to a fall.',
  },
  orientacion: {
    favorable: 'With integrity and courage, victory is yours: it is time to stand your ground.',
    desafio: 'The risk is anger and the misuse of power. Let the fire warm, not burn.',
  },
};

const odu13: Odu = {
  numero: 13,
  nombre: 'Metanla',
  palabrasClave: ['health', 'care', 'purification', 'prudence'],
  significado: {
    general:
      'A delicate sign that speaks of health and the need for care and ' +
      'purification. It is a serious moment, calling for prudence, attention to the body and ' +
      'humility. This is not a time for excess or neglect: it is a time to take care of yourself, ' +
      'Healing and seeking guidance.',
    amor:
      'A delicate moment that calls for nurturing the bond with gentleness and moderation. ' +
      'Health and well-being, both yours and theirs, come first.',
    trabajo:
      'A time for prudence and avoiding force. Prioritize your health and energy over ' +
      'work demands.',
    dinero:
      'This is not a time for risks or excess. Focus on the basics, your health, and ' +
      'Stability comes before any gain.',
  },
  orientacion: {
    favorable: 'Care and purification bring relief: tending to your health clears the path.',
    desafio: 'The risk lies in health and neglect. This is a serious sign: take care and seek guidance.',
  },
};

const odu14: Odu = {
  numero: 14,
  nombre: 'Merinla',
  palabrasClave: ['caution', 'deception', 'discernment', 'prudence'],
  significado: {
    general:
      'A sign that warns of deception and the difficulty of distinguishing friend from ' +
      'foe. It is a time for caution, not trusting blindly, and observing well before ' +
      'committing. Not everything that seems kind is so; prudence protects.',
    amor:
      'Beware of appearances and false intentions. Observe closely before ' +
      'trusting with all your heart.',
    trabajo:
      'Pay attention to false alliances and those who act as friends out of interest. ' +
      'Discern well who you associate with.',
    dinero:
      'Beware of deceptions and easy promises. Do not entrust resources without ' +
      'verifying; caution prevents losses.',
  },
  orientacion: {
    favorable: 'Caution and a keen eye protect: discerning well keeps you safe.',
    desafio: 'The risk is the deception of those who seem like friends. Do not trust blindly.',
  },
};

const odu15: Odu = {
  numero: 15,
  nombre: 'Marunla',
  palabrasClave: ['serious moment', 'humility', 'seek guidance', 'prudence'],
  significado: {
    general:
      'A serious and weighty sign that calls for humility, prudence, and seeking wisdom and ' +
      'guidance from those with more experience. This is not a time for arrogance or hasty decisions, but for reflection, self-care, and seeking advice. ' +
      'Great things are coming your way, but they require patience and steady steps. ' +
      'with humility.',
    amor:
      'A moment that calls for seriousness and care in the bond, without taking things lightly. Humility ' +
      'and the pursuit of understanding sustain you.',
    trabajo:
      'A time for prudence and avoiding overexposure. Seek the advice of those with ' +
      'more experience before making major decisions.',
    dinero:
      'This is not a time for grand gestures or arrogance. Practice prudence, humility, and ' +
      'seek counsel before taking risks.',
  },
  orientacion: {
    favorable: 'Humility and sound advice pave the way in serious matters.',
    desafio: 'The real risk lies in pride and haste. Retreat, nurture yourself, and seek guidance.',
  },
};

const odu16: Odu = {
  numero: 16,
  nombre: 'Merindilogun',
  palabrasClave: ['fullness', 'excess', 'abundance', 'moderation'],
  significado: {
    general:
      'All the cowries speak: it is the sign of fulfillment and total abundance, ' +
      'but also of excess—too much of everything. It brings the complete wisdom of ' +
      'the shell and, at the same time, warns that excess overflows. It is a time for moderation ' +
      'amidst abundance and humility before what is received.',
    amor:
      'An intense and full moment, with a risk of excess or overflow. Moderation and ' +
      'humility sustain what intensity might otherwise break.',
    trabajo:
      'An abundance of opportunities or work, perhaps too much. Prioritize and do ' +
      'not take on more than you can handle: excess overflows.',
    dinero:
      'A moment of abundance, but with a risk of excess and waste. Moderation ' +
      'Turn abundance into something that lasts.',
  },
  orientacion: {
    favorable: 'True abundance favors those who receive it with moderation and humility.',
    desafio: 'The risk is excess: too much of anything overflows. Moderate and be grateful.',
  },
};

export const ODUS_EN: BaseOdus = {
  1: odu1,
  2: odu2,
  3: odu3,
  4: odu4,
  5: odu5,
  6: odu6,
  7: odu7,
  8: odu8,
  9: odu9,
  10: odu10,
  11: odu11,
  12: odu12,
  13: odu13,
  14: odu14,
  15: odu15,
  16: odu16,
};
