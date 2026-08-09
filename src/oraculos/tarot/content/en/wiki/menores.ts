// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Menores en español. Mismo tono que los Mayores: reflexivo
// y didáctico, enseña a leer la imagen, nunca adivinatorio. Cuatro palos de 14
// cartas: Bastos (fuego/acción), Copas (agua/emoción), Espadas (aire/mente) y
// Oros (tierra/materia).
export const WIKI_MENORES_EN: WikiPorCarta = {
  // ── Bastos · Fuego · acción, pasión, creatividad ─────────────────────────
  'bastos-as': {
    nombre: 'Ace of Wands',
    palabrasClave: {
      normal: ['spark', 'inspiration', 'impulse', 'creative beginning'],
      invertida: ['stalled idea', 'discouragement', 'delay', 'fading fire'],
    },
    significado: {
      normal:
        'The Ace of Wands is the initial spark: an idea that ignites the desire ' +
        'to create. It marks pure impulse, the moment something new asks ' +
        'to be born and only waits for you to commit.',
      invertida:
        'Reversed, the spark fails to catch: enthusiasm cooling down, a project ' +
        'that is delayed or hard to start. It may signal doubt just when ' +
        'the first push was needed.',
    },
    simbolismo:
      'A hand emerges from a cloud holding a budding wand: raw energy ' +
      'offered from above. The sprouting leaves show that this ' +
      'impulse already carries its own life.',
  },
  'bastos-dos': {
    nombre: 'Two of Wands',
    palabrasClave: {
      normal: ['planning', 'decision', 'horizon', 'first step'],
      invertida: ['fear of the unknown', 'indecision', 'staying'],
    },
    significado: {
      normal:
        'The Two of Wands is a time for planning and looking ahead. Something ' +
        'has been achieved, but the question of where to grow next arises. It ' +
        'invites you to decide your path before taking the leap.',
      invertida:
        'Reversed, the horizon feels dizzying: fear of leaving the familiar, ' +
        'plans that don\'t materialize, staying in your comfort zone for fear of ' +
        'the unknown.',
    },
    simbolismo:
      'A figure holds a globe and looks out at the sea from a battlement, ' +
      'between two wands: they have conquered something and are assessing the ' +
      'future. The open landscape is possibility; the wall, the safety you ' +
      'might need to leave behind.',
  },
  'bastos-tres': {
    nombre: 'Three of Wands',
    palabrasClave: {
      normal: ['expansion', 'vision', 'progress', 'waiting for results'],
      invertida: ['delays', 'stalled plans', 'frustrated expectations'],
    },
    significado: {
      normal:
        'The Three of Wands is a project already underway: what you planted is ' +
        'beginning to move and now you await its return. It speaks of expansion, ' +
        'of looking far ahead with confidence in the path you have chosen.',
      invertida:
        'Reversed, what you expect is delayed: setbacks, plans that don\'t return ' +
        'as anticipated, the frustration of seeing an empty horizon. It may be ' +
        'time to reassess your expectations.',
    },
    simbolismo:
      'With their back turned, a figure gazes at the sea from above, with three ' +
      'sturdy wands by their side: the ships have already set sail. Look toward the horizon ' +
      'because what is yours is already in motion, and now only patience remains.',
  },
  'bastos-cuatro': {
    nombre: 'Four of Wands',
    palabrasClave: {
      normal: ['celebration', 'home', 'stability', 'shared achievement'],
      invertida: ['postponed celebration', 'fragile harmony', 'transition'],
    },
    significado: {
      normal:
        'The Four of Wands is a toast to what has been attained. It speaks of a ' +
        'shared achievement, the joy of home, and a stable foundation from which ' +
        'knowing when to rest before moving forward.',
      invertida:
        'Reversed, the celebration cools down or is postponed: a harmony that is still ' +
        'fragile, a festivity that hasn\'t quite arrived, a transition between one stage ' +
        'and another.',
    },
    simbolismo:
      'Four wands hold up a garland of flowers, like a festive archway; in the ' +
      'background, two figures celebrate before a castle. Everything speaks of ' +
      'a joyful threshold, of doors open to the good that has already been achieved.',
  },
  'bastos-cinco': {
    nombre: 'Five of Wands',
    palabrasClave: {
      normal: ['conflict', 'competition', 'friction', 'disorder'],
      invertida: ['avoiding the clash', 'tension subsiding', 'agreement'],
    },
    significado: {
      normal:
        'The Five of Wands is the friction of many pushing at once. It speaks of ' +
        'competition, arguments, and small ego clashes that are louder than ' +
        'they are serious. It often calls for order amidst the noise.',
      invertida:
        'Reversed, the conflict eases: the clash is avoided, tension subsides, or ' +
        'an agreement is reached. It can also mean dodging a fight that ' +
        'was worth having.',
    },
    simbolismo:
      'Five figures wave their wands in what looks more like a messy ' +
      'scuffle than a real battle. No one is hurt: it is the chaos of ' +
      'wills that are not coordinated.',
  },
  'bastos-seis': {
    nombre: 'Six of Wands',
    palabrasClave: {
      normal: ['victory', 'recognition', 'success', 'leadership'],
      invertida: ['lacking recognition', 'fall from grace', 'ego'],
    },
    significado: {
      normal:
        'The Six of Wands is recognized triumph. It speaks of public success, ' +
        'being applauded for an achievement, and the confidence that comes with it. ' +
        'Victory here is displayed and celebrated.',
      invertida:
        'Reversed, recognition is missing: an achievement no one sees, a ' +
        'fall from grace, or an inflated ego that confuses applause with true worth.',
    },
    simbolismo:
      'A rider advances crowned with laurel on a white horse, with the ' +
      'crowd surrounding him and staves held high: the victor\'s parade. The ' +
      'laurel on his staff crowns what has been achieved.',
  },
  'bastos-siete': {
    nombre: 'Seven of Wands',
    palabrasClave: {
      normal: ['defense', 'courage', 'holding your ground', 'conviction'],
      invertida: ['exhaustion', 'giving ground', 'feeling overwhelmed'],
    },
    significado: {
      normal:
        'The Seven of Wands is about standing tall and defending what is yours. ' +
        'It speaks to the courage of holding your position against opposition, ' +
        'even when everyone seems to be against you. You have the high ground: conviction.',
      invertida:
        'Reversed, it is hard to hold on: exhaustion from so much defending, the urge to ' +
        'give ground, the feeling of being at a disadvantage. It may be time to choose ' +
        'your battles more wisely.',
    },
    simbolismo:
      'A figure on a hilltop repels six others climbing from below with a staff: ' +
      'fighting from an advantageous position. Their mismatched shoes reveal they ' +
      'dressed in a hurry, yet they hold their ground.',
  },
  'bastos-ocho': {
    nombre: 'Eight of Wands',
    palabrasClave: {
      normal: ['speed', 'movement', 'news', 'rapid progress'],
      invertida: ['delays', 'stagnation', 'poorly managed haste'],
    },
    significado: {
      normal:
        'The Eight of Wands is all about movement: things accelerating, news ' +
        'arriving, a process finally taking off. It speaks of rapid events, ' +
        'sometimes a journey or a message on its way.',
      invertida:
        'Reversed, the momentum stalls: delays, messages that don\'t arrive, ' +
        'a rush that gets stuck. It can also mean moving too fast and losing ' +
        'control.',
    },
    simbolismo:
      'Eight wands fly in parallel through the air, descending over a ' +
      'serene landscape. There are no figures: the card is pure trajectory, ' +
      'energy in full flight toward its destination.',
  },
  'bastos-nueve': {
    nombre: 'Nine of Wands',
    palabrasClave: {
      normal: ['resilience', 'perseverance', 'last stand', 'fortitude'],
      invertida: ['exhaustion', 'paranoia', 'lowering your guard too late'],
    },
    significado: {
      normal:
        'The Nine of Wands is the one still standing after many battles. Tired ' +
        'but firm, it holds the last reserve of strength. It speaks of ' +
        'persevering when you\'ve almost made it, even if it hurts.',
      invertida:
        'Reversed, fatigue wins: exhaustion, distrust turning into ' +
        'paranoia, defending a position out of habit that is no longer needed. ' +
        'defend.',
    },
    simbolismo:
      'A bandaged figure leans on a staff, watching over the other eight ' +
      'stuck behind like a palisade. Wounded and alert: waiting for a ' +
      'final attack that may never come.',
  },
  'bastos-diez': {
    nombre: 'Ten of Wands',
    palabrasClave: {
      normal: ['burden', 'responsibility', 'effort', 'excess'],
      invertida: ['letting go', 'delegating', 'collapse', 'liberation'],
    },
    significado: {
      normal:
        'The Ten of Wands is the weight of all we have taken on. It speaks of a load ' +
        'that has become excessive, of responsibilities carried while barely seeing ' +
        'the path ahead. The achievement is there, but it is hard to carry alone.',
      invertida:
        'Reversed, something is released: learning to delegate and drop weight, or ' +
        'the collapse of those who did not let go in time. At its best, it is freeing ' +
        'yourself from what was never yours to carry.',
    },
    simbolismo:
      'A figure moves forward, bent under ten wands they can barely embrace, ' +
      'blocking their view, heading toward a nearby village. The goal is in sight, ' +
      'but the bundle prevents them from seeing it.',
  },
  'bastos-sota': {
    nombre: 'Page of Wands',
    palabrasClave: {
      normal: ['enthusiasm', 'exploration', 'curiosity', 'inspiring news'],
      invertida: ['inconsistency', 'aimless enthusiasm', 'delayed news'],
    },
    significado: {
      normal:
        'The Page of Wands is the explorer spirit just beginning. It brings ' +
        'enthusiasm, curiosity, and a desire to try. It may announce news ' +
        'that sparks a project or someone young with contagious energy.',
      invertida:
        'Reversed, that fire scatters: enthusiasm without focus, promises that ' +
        'do not hold up, or news that is delayed or disappointing.',
    },
    simbolismo:
      'A young person observes their blooming wand like someone looking at a ' +
      'newborn idea in a desert of dunes. Their clothes with salamanders—creatures of ' +
      'fire—speak of an energy that wants to express itself.',
  },
  'bastos-caballo': {
    nombre: 'Knight of Wands',
    palabrasClave: {
      normal: ['adventure', 'impulse', 'action', 'passion in motion'],
      invertida: ['impulsiveness', 'haste', 'a cooling project'],
    },
    significado: {
      normal:
        'The Knight of Wands is energy launched into action. It speaks of ' +
        'adventure, a change of scenery, and the courage to take a leap. When it appears, ' +
        'there is a desire to move and to face something with passion.',
      invertida:
        'Reversed, the impulse becomes uncontrolled: haste, rushed decisions, ' +
        'Starts that don\'t hold up. Also, a project that lost its spark.',
    },
    simbolismo:
      'An armored rider holds a rearing horse, ready to depart, ' +
      'over an arid landscape. The animal\'s movement is pure momentum; the ' +
      'flowering staff, the cause that drives it forward.',
  },
  'bastos-reina': {
    nombre: 'Queen of Wands',
    palabrasClave: {
      normal: ['charisma', 'confidence', 'warmth', 'determination'],
      invertida: ['insecurity', 'jealousy', 'fading out', 'demanding'],
    },
    significado: {
      normal:
        'The Queen of Wands radiates confidence and warmth. She speaks of someone ' +
        'charismatic and determined, who attracts others with their energy and sustains ' +
        'their projects with passion and firmness. She knows how to inspire others without losing her ' +
        'center.',
      invertida:
        'Reversed, that light flickers: insecurity masked by being demanding, jealousy, or ' +
        'an energy that has faded and no longer inspires.',
    },
    simbolismo:
      'Seated on a throne with lions and sunflowers, she holds a flowering staff ' +
      'and, at her feet, a black cat: she looks straight ahead, master of her fire and also ' +
      'of her instinct. Everything about her speaks of warmth with character.',
  },
  'bastos-rey': {
    nombre: 'King of Wands',
    palabrasClave: {
      normal: ['leadership', 'vision', 'mature drive', 'charisma'],
      invertida: ['authoritarianism', 'impatience', 'impulsiveness', 'tyranny'],
    },
    significado: {
      normal:
        'The King of Wands is the visionary leader. He speaks of leading with drive and ' +
        'conviction, of inspiring others toward a grand goal, and of the maturity ' +
        'that knows how to transform passion into direction.',
      invertida:
        'Reversed, leadership goes astray: authoritarianism, impatience with those who ' +
        'cannot keep up, and decisions made in the heat of the moment.',
    },
    simbolismo:
      'Seated on a throne adorned with salamanders and lions, he holds his wand like a ' +
      'living scepter. A small salamander at his feet looks up at him: fire ' +
      'tamed and placed at the service of a vision.',
  },
  // ── Copas · Agua · emociones, vínculos, intuición ────────────────────────
  'copas-as': {
    nombre: 'Ace of Cups',
    palabrasClave: {
      normal: ['new love', 'openness', 'emotional fulfillment', 'compassion'],
      invertida: ['closed heart', 'repressed emotion', 'emotional emptiness'],
    },
    significado: {
      normal:
        'The Ace of Cups is the heart opening up. It speaks of the beginning of a love, ' +
        'a friendship, or a fulfilling emotional stage, of feelings that overflow ' +
        'and want to be shared. It is the fountain of affection offering itself fully.',
      invertida:
        'Reversed, the cup tips over or is covered: repressed emotions, a ' +
        'heart closing out of fear, an emotional void that is hard to fill.',
    },
    simbolismo:
      'A hand offers a brimming cup from a cloud, from which five streams of ' +
      'water flow; a dove descends with a wafer. Everything overflows: it is ' +
      'love in its purest and most generous state.',
  },
  'copas-dos': {
    nombre: 'Two of Cups',
    palabrasClave: {
      normal: ['union', 'attraction', 'partnership', 'reciprocity'],
      invertida: ['imbalance', 'breakup', 'tension in the bond'],
    },
    significado: {
      normal:
        'The Two of Cups is the meeting of two who choose each other. It speaks of ' +
        'mutual attraction, partnership, and reciprocity: a bond where both give and ' +
        'receive in equal measure. It is the toast to a true connection.',
      invertida:
        'Reversed, the balance is lost: a bond that becomes uneven, ' +
        'tension between two, or a union that cools or breaks.',
    },
    simbolismo:
      'Two figures exchange their cups face to face. Above them, the ' +
      'caduceus of two snakes and a winged lion\'s head: passions ' +
      'elevated and balanced by the encounter.',
  },
  'copas-tres': {
    nombre: 'Three of Cups',
    palabrasClave: {
      normal: ['celebration', 'friendship', 'community', 'shared joy'],
      invertida: ['excess', 'gossip', 'isolating oneself', 'a third party'],
    },
    significado: {
      normal:
        'The Three of Cups is a toast among friends. It speaks of celebration, ' +
        'community and shared joy, the support of your loved ones and the good ' +
        'times celebrated in a group.',
      invertida:
        'Reversed, the party goes too far: excess, murky gossip, ' +
        'a group that no longer adds value, or the need to retreat from the noise.',
    },
    simbolismo:
      'Three figures raise their cups in a circle, amidst harvest fruits: ' +
      'abundance is enjoyed together. The circle they form speaks of ' +
      'belonging and celebration.',
  },
  'copas-cuatro': {
    nombre: 'Four of Cups',
    palabrasClave: {
      normal: ['apathy', 'disinterest', 'contemplation', 'dissatisfaction'],
      invertida: ['awakening', 'accepting the opportunity', 'breaking out of lethargy'],
    },
    significado: {
      normal:
        'The Four of Cups is the weary gaze that fails to see what is right ' +
        'in front of it. It speaks of apathy, of disinterest in what is offered, ' +
        'of being so caught up in oneself that an opportunity is overlooked.',
      invertida:
        'Reversed, something awakens: you look up, you accept what is ' +
        'reach out, break free from emotional lethargy and find interest once again.',
    },
    simbolismo:
      'A figure sits under a tree, arms crossed, ignoring a cup offered by a hand ' +
      'from a cloud; three others stand before them. So absorbed in thought, ' +
      'they fail to see the gift within reach.',
  },
  'copas-cinco': {
    nombre: 'Five of Cups',
    palabrasClave: {
      normal: ['loss', 'grief', 'regret', 'sadness'],
      invertida: ['acceptance', 'forgiveness', 'looking at what remains'],
    },
    significado: {
      normal:
        'The Five of Cups is the mourning of what was spilled. It speaks of loss, ' +
        'regret, and the sadness that fixes its gaze on what is gone. But ' +
        'remember that not everything fell: something still stands behind you.',
      invertida:
        'Reversed, the gaze turns toward what remains: acceptance, forgiveness, the ' +
        'decision to gather what did not break and move forward.',
    },
    simbolismo:
      'A cloaked figure contemplates three overturned cups, missing the two ' +
      'still standing behind them. In the distance, a bridge crosses the river to a ' +
      'home: there is a way out of grief.',
  },
  'copas-seis': {
    nombre: 'Six of Cups',
    palabrasClave: {
      normal: ['nostalgia', 'memories', 'innocence', 'reunion'],
      invertida: ['living in the past', 'idealizing', 'holding on'],
    },
    significado: {
      normal:
        'The Six of Cups is the sweetness of memory. It speaks of nostalgia, ' +
        'childhood innocence, a reunion, or the tenderness of the simple ' +
        'and familiar. It brings the warmth of what was once good.',
      invertida:
        'Reversed, nostalgia traps you: living anchored in the past, idealizing ' +
        'what is gone, and being unable to let go of what has ended.',
    },
    simbolismo:
      'In a courtyard, an older figure offers a younger one a cup filled with ' +
      'flowers: a kind gesture of protection and sharing. The five flowering ' +
      'cups around them speak of memories that still hold their scent.',
  },
  'copas-siete': {
    nombre: 'Seven of Cups',
    palabrasClave: {
      normal: ['fantasy', 'options', 'illusions', 'imagination'],
      invertida: ['clarity', 'choosing', 'grounding', 'discarding mirages'],
    },
    significado: {
      normal:
        'The Seven of Cups is a cloud of imagined possibilities. It speaks of ' +
        'many seductive options, fantasies, and desires that blur together. ' +
        'It asks you to distinguish what is real from what merely glitters.',
      invertida:
        'Reversed, the fog lifts: clarity arrives to help you choose, ' +
        'mirages are discarded, and you land on solid ground.',
    },
    simbolismo:
      'A shadowed figure gazes at seven cups floating in a cloud, each ' +
      'holding something different: a face, jewels, a crown, a dragon. Not all ' +
      'that they offer is a treasure; some hide a trap.',
  },
  'copas-ocho': {
    nombre: 'Eight of Cups',
    palabrasClave: {
      normal: ['withdrawal', 'leaving behind', 'searching for meaning', 'departing'],
      invertida: ['fear of leaving', 'staying out of inertia', 'returning'],
    },
    significado: {
      normal:
        'The Eight of Cups is the decision to leave in search of something deeper. ' +
        'It speaks of leaving behind what no longer fulfills you, even if it\'s hard, to follow an ' +
        'inner calling. It is a mature departure, not an escape.',
      invertida:
        'Reversed, it is hard to leave: fear of letting go, staying out of inertia in what ' +
        'does not satisfy, or the doubt between leaving and returning.',
    },
    simbolismo:
      'A figure walks away toward the mountains, leaving eight cups ' +
      'neatly behind under an eclipsed moon. They leave at night, toward the ' +
      'unknown, following something only they can hear.',
  },
  'copas-nueve': {
    nombre: 'Nine of Cups',
    palabrasClave: {
      normal: ['satisfaction', 'wish fulfilled', 'well-being', 'gratitude'],
      invertida: ['complacency', 'excess', 'unfulfilled desire'],
    },
    significado: {
      normal:
        'The Nine of Cups is the card of wishes granted. It speaks of ' +
        'satisfaction, well-being, and the joy of savoring what you have achieved. It ' +
        'is feeling content and grateful for what is yours.',
      invertida:
        'Reversed, that enjoyment turns sour: empty complacency, seeking in ' +
        'excess what does not fulfill, or a desire that, even when met, leaves you wanting.',
    },
    simbolismo:
      'A satisfied figure sits with arms crossed before nine ' +
      'cups lined up on a curved dais: displaying their bounty with pride. ' +
      'It is the image of one who has attained what they sought.',
  },
  'copas-diez': {
    nombre: 'Ten of Cups',
    palabrasClave: {
      normal: ['happiness', 'family', 'harmony', 'emotional fulfillment'],
      invertida: ['broken harmony', 'family tension', 'unmet ideal'],
    },
    significado: {
      normal:
        'The Ten of Cups is the fullness of the heart shared with others. It speaks of ' +
        'family happiness, harmonious bonds, and the sense that your ' +
        'emotional world is complete. It is a peaceful home and affection that overflows.',
      invertida:
        'Reversed, that harmony cracks: tensions within the family, an ' +
        'ideal of happiness that remains unmet, the distance between the dream and ' +
        'the reality.',
    },
    simbolismo:
      'A couple embraces and raises their arms toward a rainbow of ten cups, ' +
      'as two children play nearby, in front of a house. The whole scene breathes ' +
      'a serene and shared sense of well-being.',
  },
  'copas-sota': {
    nombre: 'Page of Cups',
    palabrasClave: {
      normal: ['tenderness', 'affectionate message', 'sensitivity', 'creativity'],
      invertida: ['emotional immaturity', 'susceptibility', 'disappointing news'],
    },
    significado: {
      normal:
        'The Page of Cups is the heart that finds wonder. It brings an ' +
        'affectionate message, a creative proposal, or the awakening of a new ' +
        'sensitivity. It may point to someone tender and dreamy, or news that ' +
        'stirs the emotions.',
      invertida:
        'Reversed, that sensitivity becomes blocked: susceptibility, emotional ' +
        'immaturity, or news of the heart that brings disappointment.',
    },
    simbolismo:
      'A young man holds a cup from which a fish emerges, unexpectedly: the ' +
      'imagination rising from the unconscious. His curious gesture speaks of ' +
      'being open to whatever feelings may bring.',
  },
  'copas-caballo': {
    nombre: 'Knight of Cups',
    palabrasClave: {
      normal: ['romance', 'proposal', 'idealism', 'following the heart'],
      invertida: ['vain illusion', 'inconstancy', 'broken promise'],
    },
    significado: {
      normal:
        'The Knight of Cups is the one who arrives with a proposal from the heart. ' +
        'It speaks of romance, idealism, and following your feelings with grace. ' +
        'When it appears, an affectionate invitation is on its way.',
      invertida:
        'Reversed, the romance blurs: promises that go unfulfilled, ' +
        'unfounded illusions, a charm that turns out to be mere appearance.',
    },
    simbolismo:
      'A rider advances serenely, offering his cup as one offers a ' +
      'feeling; his horse walks at a steady pace, unhurried. He is the messenger of love, ' +
      'more of a dreamer than a warrior.',
  },
  'copas-reina': {
    nombre: 'Queen of Cups',
    palabrasClave: {
      normal: ['empathy', 'intuition', 'containment', 'sensitivity'],
      invertida: ['dependency', 'emotional overflow', 'giving too much'],
    },
    significado: {
      normal:
        'The Queen of Cups feels deeply and holds space for others. It speaks of ' +
        'empathy, intuition, and the ability to support without losing oneself. It is ' +
        'emotional maturity that understands without judgment.',
      invertida:
        'Reversed, feelings overflow: emotional dependency, carrying the ' +
        'emotions of others, giving so much that you become drained.',
    },
    simbolismo:
      'Seated on a throne by the sea, she gazes intently at a closed and ' +
      'ornate cup, the only one in the deck with a lid: she guards a rich inner world. ' +
      'The water at his feet is his element, the realm of feeling.',
  },
  'copas-rey': {
    nombre: 'King of Cups',
    palabrasClave: {
      normal: ['emotional balance', 'serenity', 'diplomacy', 'maturity'],
      invertida: ['repressed emotions', 'emotional manipulation', 'coldness'],
    },
    significado: {
      normal:
        'The King of Cups masters the sea of feelings without drowning in it. It speaks of ' +
        'emotional balance, serenity, and diplomacy: feeling deeply while ' +
        'maintaining calm. He is the one who advises with both heart and head ' +
        'at once.',
      invertida:
        'Reversed, that balance is lost: bottled-up emotions pressing from ' +
        'within, emotional manipulation, or a coldness that denies feeling.',
    },
    simbolismo:
      'His throne floats on a restless sea, yet he remains serene with his ' +
      'cup in hand: he contains the tide without being swept away. A fish and a ' +
      'ship nearby remind us of the element he governs.',
  },
  // ── Espadas · Aire · mente, verdad, conflicto ────────────────────────────
  'espadas-as': {
    nombre: 'Ace of Swords',
    palabrasClave: {
      normal: ['clarity', 'truth', 'idea', 'new perspective'],
      invertida: ['confusion', 'clouded idea', 'truth used to wound'],
    },
    significado: {
      normal:
        'The Ace of Swords is the cut of clarity. It speaks of a truth seen all at ' +
        'once, a sharp idea that organizes chaos, a new way of thinking. It is the ' +
        'moment when the mind pierces through the fog.',
      invertida:
        'Reversed, the blade does not cut clean: confusion, clouded ideas, or the ' +
        'truth used as a weapon to wound rather than to clarify.',
    },
    simbolismo:
      'A hand emerges from a cloud holding an upright sword, crowned with ' +
      'laurel: the victory of reason. Its single edge parts the air; nothing ' +
      'stands between the mind and the truth.',
  },
  'espadas-dos': {
    nombre: 'Two of Swords',
    palabrasClave: {
      normal: ['blockage', 'avoided decision', 'tense balance', 'truce'],
      invertida: ['breaking the deadlock', 'seeing the truth', 'decision at last'],
    },
    significado: {
      normal:
        'The Two of Swords is the decision being avoided. It speaks of a tense ' +
        'balance, of not wanting to look so as not to have to choose, of an ' +
        'uncomfortable truce that cannot last. Sooner or later, the blindfold must come off.',
      invertida:
        'Reversed, something unlocks: the blindfold is removed, the situation is ' +
        'faced head-on, and the long-postponed decision is finally made.',
    },
    simbolismo:
      'A blindfolded figure crosses two swords over their chest, sitting with ' +
      'their back to the sea under the moon: they do not want to see or decide. ' +
      'The balance of the arms is as firm as it is fragile.',
  },
  'espadas-tres': {
    nombre: 'Three of Swords',
    palabrasClave: {
      normal: ['pain', 'breakup', 'sorrow', 'disappointment'],
      invertida: ['healing', 'forgiving', 'easing pain', 'releasing sorrow'],
    },
    significado: {
      normal:
        'The Three of Swords is a heart wound named plainly: pain, ' +
        'breakup, disappointment. It is the sorrow that pierces, but also the truth ' +
        'that, however painful, clarifies what was truly happening.',
      invertida:
        'Reversed, the wound begins to close: the pain eases, forgiveness arrives, ' +
        'and the sorrow you have been carrying is released.',
    },
    simbolismo:
      'Three swords pierce a red heart under a rainy sky. The ' +
      'image is direct and unadorned: pain is not hidden, it is shown as ' +
      'it is so that you may let it go.',
  },
  'espadas-cuatro': {
    nombre: 'Four of Swords',
    palabrasClave: {
      normal: ['rest', 'recovery', 'pause', 'retreat'],
      invertida: ['exhaustion', 'resuming too soon', 'restlessness'],
    },
    significado: {
      normal:
        'The Four of Swords is a necessary truce. It speaks of resting, ' +
        'recovering, and giving your mind a break after the storm. It is ' +
        'not giving up: it is gathering strength before returning.',
      invertida:
        'Reversed, rest does not come or is interrupted: lingering ' +
        'exhaustion, rushing back before you are ready, an restlessness that ' +
        'prevents you from stopping.',
    },
    simbolismo:
      'A figure lies as if at rest upon a tomb, with three swords ' +
      'hanging on the wall and a fourth beneath them: they withdraw to heal. The ' +
      'stillness is voluntary, a pause to catch your breath.',
  },
  'espadas-cinco': {
    nombre: 'Five of Swords',
    palabrasClave: {
      normal: ['conflict', 'defeat', 'winning at any cost', 'tension'],
      invertida: ['reconciliation', 'letting go of pride', 'end of conflict'],
    },
    significado: {
      normal:
        'The Five of Swords is a victory that leaves a bitter taste. It speaks of a ' +
        'conflict where someone wins at any cost, of wounded pride and ' +
        'battles that weren\'t worth the price. Ask yourself if it\'s better to be right or ' +
        'to have peace.',
      invertida:
        'Reversed, it seeks to mend: letting go of pride, reconciling, leaving ' +
        'behind a fight that has already caused enough harm.',
    },
    simbolismo:
      'A figure gathers the swords with a grim smile, while two others ' +
      'walk away with heads bowed: they won, but were left alone. The stormy sky reveals ' +
      'no one came out of this clash unscathed.',
  },
  'espadas-seis': {
    nombre: 'Six of Swords',
    palabrasClave: {
      normal: ['transition', 'moving away', 'journey', 'calmer waters'],
      invertida: ['emotional baggage', 'stalled transition', 'inability to let go'],
    },
    significado: {
      normal:
        'The Six of Swords is the crossing toward calmer waters. It speaks of ' +
        'moving away from a difficult situation, a transition or a journey that ' +
        'leads from the turbulent to the serene. It is not running away: it is leaving behind to ' +
        'heal.',
      invertida:
        'Reversed, the journey stalls: it is hard to let go of what was left behind, ' +
        'carrying the emotional weight of the past, the transition fails to complete.',
    },
    simbolismo:
      'A boatman carries a figure and a child through water that is agitated ' +
      'on one side and calm on the other; the swords are stuck in the boat, not ' +
      'fully left behind. You are moving toward the gentle shore.',
  },
  'espadas-siete': {
    nombre: 'Seven of Swords',
    palabrasClave: {
      normal: ['strategy', 'stealth', 'cunning', 'acting alone'],
      invertida: ['deception uncovered', 'confession', 'returning what was taken'],
    },
    significado: {
      normal:
        'The Seven of Swords is the stealthy move. It speaks of strategy, cunning, ' +
        'and achieving something through indirect means; in its shadow side, of deception ' +
        'or acting behind others\' backs. It asks for honesty regarding your own ' +
        'methods.',
      invertida:
        'Reversed, what was hidden comes to light: a deception uncovered, a ' +
        'confession, the decision to return what was taken by a shortcut.',
    },
    simbolismo:
      'A figure sneaks away from a camp carrying five swords and ' +
      'leaving two behind, looking over their shoulder: taking something ' +
      'surreptitiously. The nervous smile gives the move away.',
  },
  'espadas-ocho': {
    nombre: 'Eight of Swords',
    palabrasClave: {
      normal: ['feeling trapped', 'mental limits', 'paralysis', 'victimhood'],
      invertida: ['breaking free', 'seeing the way out', 'reclaiming your power'],
    },
    significado: {
      normal:
        'The Eight of Swords is a prison that is largely mental. It speaks of ' +
        'feeling trapped, limited, with no way out, when many of those bars ' +
        'were placed by your own fears. The blindfold can be removed.',
      invertida:
        'Reversed, the bonds loosen: seeing that the way out was there all along, ' +
        'freeing yourself from the belief that paralyzed you, reclaiming your power.',
    },
    simbolismo:
      'A blindfolded and bound figure appears surrounded by eight swords stuck in ' +
      'the ground, on mud that is still passable. But look: the swords do not ' +
      'the circle closes; there is a clear path back.',
  },
  'espadas-nueve': {
    nombre: 'Nine of Swords',
    palabrasClave: {
      normal: ['anguish', 'insomnia', 'anxiety', 'guilt'],
      invertida: ['overcoming anguish', 'asking for help', 'disproportionate fear'],
    },
    significado: {
      normal:
        'The Nine of Swords is the anguish of the early morning. It speaks of ' +
        'worries that grow in the dark, insomnia, guilt, and fears that ' +
        'become giants at night. Often, the ghost is larger ' +
        'than the reality.',
      invertida:
        'Reversed, the night begins to yield: moving past anguish, asking for ' +
        'help, understanding that the fear was greater than the reality.',
    },
    simbolismo:
      'A figure sits up in bed and covers their face, with nine ' +
      'swords hanging on the dark wall behind them. It is nocturnal ' +
      'despair; but the swords are on the wall, not piercing the body.',
  },
  'espadas-diez': {
    nombre: 'Ten of Swords',
    palabrasClave: {
      normal: ['painful ending', 'hitting rock bottom', 'closure', 'betrayal'],
      invertida: ['recovery', 'the worst is over', 'resisting the end'],
    },
    significado: {
      normal:
        'The Ten of Swords is the end that hits rock bottom. It speaks of a painful ' +
        'closure, sometimes felt as betrayal or total defeat. But it is also the ' +
        'lowest point, from which you can only rise: behind you lies ' +
        'Dawn breaks.',
      invertida:
        'Reversed, recovery begins: the worst is over, you gather what remains and rebuild. It may also signal a resistance to accepting an end. ' +
        'It can also mean resisting the acceptance of an end. ' +
        'it has already arrived.',
    },
    simbolismo:
      'A figure lies face down with ten swords in their back, beside ' +
      'still water. Yet a golden sun rises on the horizon: as ' +
      'terrible as it seems, this is rock bottom, and from here, you rise again.',
  },
  'espadas-sota': {
    nombre: 'Page of Swords',
    palabrasClave: {
      normal: ['mental curiosity', 'vigilance', 'fresh ideas', 'quick wit'],
      invertida: ['cutting words', 'gossip', 'suspicion', 'all mind'],
    },
    significado: {
      normal:
        'The Page of Swords is the alert and curious mind. It brings fresh ideas, ' +
        'a desire to understand, and a quick wit. It may point to someone vigilant ' +
        'and insightful, or news that makes you think.',
      invertida:
        'Reversed, that sharpness cuts: hurtful words, gossip, suspicion, ' +
        'a mind that analyzes everything and feels nothing.',
    },
    simbolismo:
      'A young man raises his sword high on a windy terrain, attentive to everything ' +
      'that moves: pure mental alertness. The wind stirring his hair is the ' +
      'element of air, that of thought.',
  },
  'espadas-caballo': {
    nombre: 'Knight of Swords',
    palabrasClave: {
      normal: ['mental momentum', 'moving forward', 'determination', 'haste'],
      invertida: ['impulsiveness', 'aggressiveness', 'recklessness', 'unbridled ideas'],
    },
    significado: {
      normal:
        'The Knight of Swords charges forward with the force of an idea. ' +
        'It speaks of determination, of being direct and speaking without beating ' +
        'around the bush, of a swift mind launched into action. It cuts quickly, for ' +
        'better or worse.',
      invertida:
        'Reversed, the momentum becomes recklessness: impulsiveness, aggression in ' +
        'speech, and decisions made without considering the consequences.',
    },
    simbolismo:
      'A rider gallops in a fury with his sword held high, amidst a ' +
      'stormy sky and trees bent by the wind. It is the fastest card in the ' +
      'deck: the idea that waits for no one.',
  },
  'espadas-reina': {
    nombre: 'Queen of Swords',
    palabrasClave: {
      normal: ['clarity', 'independence', 'honesty', 'insight'],
      invertida: ['coldness', 'harshness', 'stinging criticism', 'resentment'],
    },
    significado: {
      normal:
        'The Queen of Swords thinks with clarity and speaks the truth. She speaks of ' +
        'independence, honesty, and insight: someone who cannot be deceived ' +
        'and speaks plainly, with the experience of one who has lived and learned.',
      invertida:
        'Reversed, that clarity turns cold: harshness, stinging criticism, resentment, ' +
        'a sharp mind that closes itself off to feeling.',
    },
    simbolismo:
      'Seated on her throne amidst the clouds, she holds her sword upright and extends ' +
      'her other hand as if inviting the truth. Her stern profile looks ahead: ' +
      'she does not fear what she may hear.',
  },
  'espadas-rey': {
    nombre: 'King of Swords',
    palabrasClave: {
      normal: ['intellectual authority', 'judgment', 'ethics', 'truth'],
      invertida: ['coldness', 'abuse of power', 'harshness', 'manipulation'],
    },
    significado: {
      normal:
        'The King of Swords rules with reason and law. He speaks of intellectual ' +
        'authority, clear judgment, and decisions made with ethics and ' +
        'objectivity. He is the one who cuts what is fair, without being led by ' +
        'whim.',
      invertida:
        'Reversed, reason turns cold or unjust: abuse of power, harshness ' +
        'without compassion, arguments used to manipulate rather than clarify.',
    },
    simbolismo:
      'Sitting upright on his throne, he holds the sword straight, slightly ' +
      'tilted: the balance between firmness and healthy doubt. The carved ' +
      'butterflies and angels speak of a mind that aspires to higher things.',
  },
  // ── Oros · Tierra · trabajo, cuerpo, recursos ────────────────────────────
  'oros-as': {
    nombre: 'Ace of Pentacles',
    palabrasClave: {
      normal: ['opportunity', 'prosperity', 'material seed', 'new resource'],
      invertida: ['missed opportunity', 'material insecurity', 'poor investment'],
    },
    significado: {
      normal:
        'The Ace of Pentacles is the seed of prosperity. It speaks of the start ' +
        'of something concrete and fertile: a job, an income, a material project ' +
        'with a future. It is a tangible opportunity offered for you to cultivate.',
      invertida:
        'Reversed, the seed does not thrive: an opportunity let slip by, ' +
        'material insecurity, plans that showed promise but failed to take root.',
    },
    simbolismo:
      'A hand offers a large gold coin from a cloud over a blooming garden, ' +
      'with an arch of flowers leading to the mountains. Everything points to ' +
      'an abundant beginning with roots in the real world.',
  },
  'oros-dos': {
    nombre: 'Two of Pentacles',
    palabrasClave: {
      normal: ['balance', 'juggling', 'adaptation', 'priorities'],
      invertida: ['overload', 'disorder', 'losing balance'],
    },
    significado: {
      normal:
        'The Two of Pentacles is the art of juggling. It speaks of balancing ' +
        'several things at once—time, money, tasks—with flexibility and good ' +
        'humor. You can hold it all together as long as you keep moving.',
      invertida:
        'Reversed, the juggling act falls apart: overload, disorder, the feeling ' +
        'of not being able to keep up and losing your rhythm.',
    },
    simbolismo:
      'A figure dances while juggling two coins linked by an infinity sign, ' +
      'while in the background, two ships rise and fall on high waves. ' +
      'Balance is dynamic: it is maintained by dancing.',
  },
  'oros-tres': {
    nombre: 'Three of Pentacles',
    palabrasClave: {
      normal: ['craftsmanship', 'teamwork', 'collaboration', 'competition'],
      invertida: ['lack of coordination', 'mediocre work', 'disagreement'],
    },
    significado: {
      normal:
        'The Three of Pentacles is recognized craftsmanship and work well done in ' +
        'a team. It speaks of collaboration, combining different talents for a ' +
        'common goal, and the satisfaction of contributing what you do best.',
      invertida:
        'Reversed, the collaboration fails: lack of coordination, disagreements, ' +
        'work done halfway or without everyone\'s commitment.',
    },
    simbolismo:
      'An artisan works on a cathedral while two figures consult their ' +
      'blueprints: each contributes their part to a greater work. The dialogue between hands ' +
      'and design builds what neither could achieve alone.',
  },
  'oros-cuatro': {
    nombre: 'Four of Pentacles',
    palabrasClave: {
      normal: ['security', 'savings', 'control', 'preserving'],
      invertida: ['greed', 'letting go', 'excessive attachment', 'generosity'],
    },
    significado: {
      normal:
        'The Four of Pentacles is the one who holds onto their own firmly. It speaks of ' +
        'material security, savings, and control; in the right measure, prudence. ' +
        'But remember that holding on too tightly also keeps your hands occupied.',
      invertida:
        'Reversed, the fist opens or closes too much: either greed and attachment ' +
        'that suffocate, or the lesson of letting go and sharing.',
    },
    simbolismo:
      'A seated figure hugs a coin to their chest, holds another under ' +
      'their crown, and stands on two more: they let nothing go. The city in the background is what ' +
      'they protect, but also what they isolate themselves from.',
  },
  'oros-cinco': {
    nombre: 'Five of Pentacles',
    palabrasClave: {
      normal: ['lack', 'material hardship', 'exclusion', 'worry'],
      invertida: ['recovery', 'asking for help', 'end of a rough patch'],
    },
    significado: {
      normal:
        'The Five of Pentacles is the chill of scarcity. It speaks of ' +
        'material hardship, of feeling left out, cast aside, or in trouble. But it ' +
        'also reminds us that sometimes shelter is nearby and we fail to see it.',
      invertida:
        'Reversed, the tide turns: material recovery, help that ' +
        'appears, moving out of scarcity and back into the warmth.',
    },
    simbolismo:
      'Two poor, shivering figures walk through the snow past a lit ' +
      'church window: relief is just a step away, behind the wall, yet they ' +
      'do not look. Scarcity is also the inability to see the door.',
  },
  'oros-seis': {
    nombre: 'Six of Pentacles',
    palabrasClave: {
      normal: ['generosity', 'giving and receiving', 'help', 'fairness'],
      invertida: ['debt', 'strings-attached gifts', 'imbalance in giving'],
    },
    significado: {
      normal:
        'The Six of Pentacles is the fair flow of giving and receiving. It speaks of ' +
        'generosity, of help arriving or being offered, of the balance between ' +
        'those who have and those in need. Today you give; tomorrow, perhaps, you receive.',
      invertida:
        'Reversed, that balance shifts: help with conditions, debts that ' +
        'bind, a give-and-take that is uneven or masks a power play.',
    },
    simbolismo:
      'A merchant holds a scale, distributing coins to two kneeling beggars: equity turned into a gesture. ' +
      'The scale reminds us that giving well is ' +
      'and measure with fairness.',
  },
  'oros-siete': {
    nombre: 'Seven of Pentacles',
    palabrasClave: {
      normal: ['patience', 'evaluate', 'harvest on its way', 'investment'],
      invertida: ['impatience', 'misdirected effort', 'meager results'],
    },
    significado: {
      normal:
        'The Seven of Pentacles is a pause to evaluate what has been sown. It speaks of ' +
        'patience, of watching what grows and deciding whether to keep cultivating it. The ' +
        'The fruit isn\'t ripe yet, but your work is already paying off.',
      invertida:
        'Reversed, the wait feels endless: impatience for results, the suspicion ' +
        'of having invested effort where it doesn\'t count, or harvests smaller than ' +
        'expected.',
    },
    simbolismo:
      'A figure leans on a hoe, gazing at a shrub laden with seven ' +
      'pentacles: pausing to measure the harvest. Not gathering yet; evaluating ' +
      'if the effort is on the right track.',
  },
  'oros-ocho': {
    nombre: 'Eight of Pentacles',
    palabrasClave: {
      normal: ['dedication', 'craft', 'learning', 'diligence'],
      invertida: ['mechanical work', 'perfectionism', 'apathy', 'sloppiness'],
    },
    significado: {
      normal:
        'The Eight of Pentacles is the pleasure of a craft done with care. It speaks of ' +
        'dedication, improving through practice, and the satisfaction of ' +
        'perfecting what one knows how to do. Talent is honed through repetition.',
      invertida:
        'Reversed, the craft cools down: mechanical, soulless work, ' +
        'paralyzing perfectionism, or the apathy that leads to doing things ' +
        'in a sloppy way.',
    },
    simbolismo:
      'An artisan carefully chisels one coin after another, hanging the ' +
      'finished ones beside him, apart from the village in the distance. He is ' +
      'absorbed in his task: the world can wait, the craft cannot.',
  },
  'oros-nueve': {
    nombre: 'Nine of Pentacles',
    palabrasClave: {
      normal: ['independence', 'self-sufficiency', 'hard-earned enjoyment', 'refinement'],
      invertida: ['dependency', 'loneliness', 'reckless spending', 'achievement at any cost'],
    },
    significado: {
      normal:
        'The Nine of Pentacles is the serene enjoyment of what has been earned ' +
        'through one\'s own merit. It speaks of independence, self-sufficiency, and the refined taste ' +
        'of someone who has cultivated their own garden. It is being well, and alone, lacking nothing ' +
        'nothing.',
      invertida:
        'Reversed, this well-being falters: dependency on others, a heavy ' +
        'loneliness, reckless spending, or an achievement gained at too high a cost.',
    },
    simbolismo:
      'An elegant figure walks through a vineyard laden with coins, a falcon ' +
      'perched calmly on her gloved hand: mastery and enjoyment in one. The ' +
      'thriving garden is her own creation, and she enjoys it in solitude.',
  },
  'oros-diez': {
    nombre: 'Ten of Pentacles',
    palabrasClave: {
      normal: ['prosperity', 'legacy', 'family', 'stable wealth'],
      invertida: ['money conflict', 'instability', 'attachment to heritage'],
    },
    significado: {
      normal:
        'The Ten of Pentacles is prosperity that takes root and is passed down. It speaks of ' +
        'stable wealth, family, legacy, and the security built over ' +
        'time. It is the material in its most enduring and ' +
        'shared form.',
      invertida:
        'Reversed, that foundation is shaken: conflicts over money or inheritance, ' +
        'instability, attachment to heritage that tangles bonds.',
    },
    simbolismo:
      'Under an arch, three generations coexist—an elder, a couple, a ' +
      'child—and two dogs, surrounded by ten coins arranged like a tree of ' +
      'life. Wealth here is lineage and home, not just gold.',
  },
  'oros-sota': {
    nombre: 'Page of Pentacles',
    palabrasClave: {
      normal: ['study', 'concrete plan', 'new opportunity', 'application'],
      invertida: ['distraction', 'plan without action', 'wasted opportunity'],
    },
    significado: {
      normal:
        'The Page of Pentacles is life\'s diligent student. It brings a ' +
        'concrete opportunity, a desire to learn a craft, or to set hands to a ' +
        'real plan. It is the first serious step toward something lasting.',
      invertida:
        'Reversed, that focus is lost: distraction, plans that never leave the ' +
        'page, a concrete opportunity missed due to a lack of ' +
        'commitment.',
    },
    simbolismo:
      'A young person gazes intently at a coin held in both hands, standing ' +
      'in a green, plowed field: they study what they hold with care. The ' +
      'fertile ground promises fruit if they cultivate it.',
  },
  'oros-caballo': {
    nombre: 'Knight of Pentacles',
    palabrasClave: {
      normal: ['consistency', 'method', 'reliability', 'patient work'],
      invertida: ['stagnation', 'monotony', 'laziness', 'stubbornness'],
    },
    significado: {
      normal:
        'The Knight of Pentacles is the most methodical and reliable. It speaks of consistency, ' +
        'of moving forward step by step, without haste but without pause, of the reliability of ' +
        'someone who finishes what they start. It shines not for speed, but for certainty.',
      invertida:
        'Reversed, consistency turns into inertia: stagnation, monotony, ' +
        'laziness, or stubbornness that insists on a method that no longer works.',
    },
    simbolismo:
      'Unlike the other knights, this one remains still: the rider ' +
      'holds his coin and contemplates the plowed field, unhurried. Pausing is ' +
      'the key: steady work does not need to gallop.',
  },
  'oros-reina': {
    nombre: 'Queen of Pentacles',
    palabrasClave: {
      normal: ['practical abundance', 'care', 'good sense', 'nurturing'],
      invertida: ['overwhelm', 'self-neglect', 'materialism', 'insecurity'],
    },
    significado: {
      normal:
        'The Queen of Pentacles cares for the material world and her loved ones with her feet on the ' +
        'ground. She speaks of practical abundance, a prosperous home, and the ' +
        'good sense of one who knows how to manage and nurture at once. She creates ' +
        'tangible well-being all around.',
      invertida:
        'Reversed, that care becomes unbalanced: overwhelmed by attending to everything, ' +
        'neglecting oneself to support others, or a materialism that ' +
        'stems from insecurity.',
    },
    simbolismo:
      'Seated on a flowery throne, she holds her coin in her lap as if it were something ' +
      'alive, surrounded by a lush garden; a rabbit peeks out at her feet, ' +
      'a symbol of fertility. Everything within her nurtures and bears fruit.',
  },
  'oros-rey': {
    nombre: 'King of Pentacles',
    palabrasClave: {
      normal: ['material success', 'security', 'mastery', 'prosperous generosity'],
      invertida: ['greed', 'stubbornness', 'attachment to status', 'rigidity'],
    },
    significado: {
      normal:
        'The King of Pentacles represents material mastery achieved over time. ' +
        'It speaks of consolidated success, security, sound resource management, and ' +
        'the generosity of one who no longer fears for their own. It is stable ' +
        'and reliable abundance.',
      invertida:
        'Reversed, prosperity turns sour: greed, stubbornness, attachment to ' +
        'status and control, the rigidity of one who measures everything in money.',
    },
    simbolismo:
      'Seated on a throne carved with bulls, amidst vineyards and holding a coin, ' +
      'his armor peeks from beneath his robe: he has prospered and knows how to defend ' +
      'what he has earned. The fruit-laden landscape is proof of his good governance.',
  },
};
