// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Mayores en español. El Loco fijó el tono — reflexivo y
// didáctico (enseña a leer la imagen), nunca adivinatorio, en línea con el
// disclaimer de la app. El resto sigue ese molde.
export const WIKI_MAYORES_EN: WikiPorCarta = {
  'mayor-00': {
    nombre: 'The Fool',
    palabrasClave: {
      normal: ['beginnings', 'freedom', 'spontaneity', 'faith', 'adventure'],
      invertida: ['recklessness', 'fear of change', 'scattered energy', 'naivety'],
    },
    significado: {
      normal:
        'The Fool marks the moment before the first step: a beginning that ' +
        'takes heart without guarantees, with more trust than certainty. It invites ' +
        'you to drop old baggage and walk with curiosity, accepting that you cannot ' +
        'see the entire path before you start.',
      invertida:
        'Reversed, The Fool speaks of the leap taken without looking—or the leap ' +
        'you don\'t dare to take. It may signal scattered energy, enthusiasm that ' +
        'doesn\'t land, or fear disguised as caution to avoid taking any risks.',
    },
    simbolismo:
      'Look at the cliff at his feet: he doesn\'t see it, or he doesn\'t care. The ' +
      'white rose in his hand is the purity of intention; the dog jumping by his ' +
      'side, the instinct that accompanies and warns him. The sun in the background ' +
      'lights up a journey that is just beginning.',
  },
  'mayor-01': {
    nombre: 'The Magician',
    palabrasClave: {
      normal: ['willpower', 'personal power', 'resources', 'initiative', 'focus'],
      invertida: ['manipulation', 'wasted talent', 'deception', 'insecurity'],
    },
    significado: {
      normal:
        'The Magician is the certainty that you have what it takes to begin. He gathers ' +
        'willpower and resources, focusing them on a single purpose: ' +
        'turning an idea into action. It speaks of the moment you decide to use what ' +
        'you know instead of just holding onto it.',
      invertida:
        'Reversed, that force twists or scatters: talent that goes ' +
        'unused, words that promise more than they deliver, or using ' +
        'skill to manipulate. It can also be the doubt that paralyzes you ' +
        'even when everything is at hand.',
    },
    simbolismo:
      'One hand points to the sky and the other to the earth: channeling what is above ' +
      'down below. On his table are the four suits—cup, sword, pentacle, and ' +
      'wand—all the tools available. The lemniscate above his ' +
      'head is endless potential.',
  },
  'mayor-02': {
    nombre: 'The High Priestess',
    palabrasClave: {
      normal: ['intuition', 'mystery', 'inner knowing', 'silence', 'the hidden'],
      invertida: ['secrets', 'disconnection', 'ignoring intuition', 'confusion'],
    },
    significado: {
      normal:
        'The High Priestess guards what remains unspoken. She invites you to ' +
        'be still and listen within: the answer is already there, but it reveals ' +
        'itself in silence, not in haste. It is the knowing that arrives through ' +
        'intuition, before reason takes hold.',
      invertida:
        'Reversed, something is hidden from you—or perhaps from yourself. It may ' +
        'suggest you are ignoring your inner voice, drowning it out with noise, ' +
        'or that a secret is operating beneath the surface.',
    },
    simbolismo:
      'She sits between two pillars, one light and one dark: the threshold ' +
      'between the conscious and the unconscious. A veil of pomegranates covers ' +
      'what lies behind. The moon at her feet and the scroll in her lap speak ' +
      'of a knowledge that is not fully revealed.',
  },
  'mayor-03': {
    nombre: 'The Empress',
    palabrasClave: {
      normal: ['abundance', 'fertility', 'nurturing', 'creation', 'nature'],
      invertida: ['creative block', 'neglect', 'dependency', 'stagnation'],
    },
    significado: {
      normal:
        'The Empress is life overflowing and bearing fruit. She speaks of creating, ' +
        'nurture and let ripen: a project, a bond, a body. It invites you to ' +
        'tend to what is growing with patience and enjoy the sensory without ' +
        'guilt.',
      invertida:
        'Reversed, the source is blocked: creativity that won\'t flow, care ' +
        'that becomes stifling, or conversely, neglecting your own needs. ' +
        'It may point to giving so much to others that you forget yourself.',
    },
    simbolismo:
      'She reclines on a throne among cushions, surrounded by a field of ripe ' +
      'wheat and a lush forest: everything around her bears fruit. The crown of ' +
      'twelve stars and the scepter speak of a power that creates rather than imposes.',
  },
  'mayor-04': {
    nombre: 'The Emperor',
    palabrasClave: {
      normal: ['structure', 'authority', 'stability', 'boundaries', 'order'],
      invertida: ['rigidity', 'excessive control', 'stubbornness', 'authoritarianism'],
    },
    significado: {
      normal:
        'The Emperor is the order that sustains. It speaks of setting structure, ' +
        'taking command of your own life, and building on firm foundations. Where ' +
        'The Empress creates, he protects and organizes what is created with clear rules.',
      invertida:
        'Reversed, firmness hardens: control that suffocates, rigidity that ' +
        'admits no nuance, stubbornness. It can also be a lack of structure ' +
        '—everything loose, without direction— or authority exercised poorly.',
    },
    simbolismo:
      'He sits on a stone throne carved with ram heads, a symbol of Aries and willpower. Behind him, arid mountains: what endures ' +
      'through time and remains standing. ' +
      'by itself. The armor beneath their robe is a reminder that their calm is ' +
      'always ready to defend.',
  },
  'mayor-05': {
    nombre: 'The Hierophant',
    palabrasClave: {
      normal: ['tradition', 'teaching', 'beliefs', 'belonging', 'guidance'],
      invertida: ['dogma', 'rebellion', 'hollow convention', 'finding your own path'],
    },
    significado: {
      normal:
        'The Hierophant is the bridge to what we learn from others: tradition, ' +
        'institutions, and the teacher who passes on proven knowledge. It speaks of ' +
        'seeking guidance in the established, belonging to something greater, and ' +
        'honoring shared rules.',
      invertida:
        'Reversed, tradition can feel heavy: dogma that stifles thought, ' +
        'conventions that no longer hold meaning. It is also a healthy sign to ' +
        'break the mold and seek your own truth outside the beaten path.',
    },
    simbolismo:
      'He blesses from a throne between two pillars, with two figures at his feet: ' +
      'teaching flows from one to many. The crossed keys unlock the sacred; ' +
      'the triple crown and scepter mark an authority derived from the ' +
      'institution, not from within himself.',
  },
  'mayor-06': {
    nombre: 'The Lovers',
    palabrasClave: {
      normal: ['union', 'choice', 'values', 'harmony', 'bond'],
      invertida: ['imbalance', 'doubt', 'conflicting values', 'breakup'],
    },
    significado: {
      normal:
        'The Lovers speak of union, but above all, of choice. It is the ' +
        'moment to decide based on what you truly value: a bond, a ' +
        'path, a commitment. When you choose in alignment with your heart, something ' +
        'integrates and becomes harmonious.',
      invertida:
        'Reversed, the scales tip: a decision you are avoiding, values ' +
        'that clash, a bond out of balance. It may signal temptation, doubts, ' +
        'or choosing out of fear or pressure instead of conviction.',
    },
    simbolismo:
      'An angel blesses two figures from above: the choice is made under ' +
      'a higher gaze. Behind her, the tree of knowledge; behind ' +
      'him, the tree of the flames of desire. Between both, one must choose with ' +
      'the head and the heart at once.',
  },
  'mayor-07': {
    nombre: 'The Chariot',
    palabrasClave: {
      normal: ['willpower', 'triumph', 'control', 'direction', 'drive'],
      invertida: ['lack of control', 'scattered focus', 'obstacles', 'aggression'],
    },
    significado: {
      normal:
        'The Chariot represents progress earned through willpower. It speaks of taking ' +
        'the reins, aligning opposing forces toward a single goal, and staying the ' +
        'course with discipline. Victory comes not by luck, but through drive ' +
        'and focus.',
      invertida:
        'Reversed, the reins are let go: forces pulling in different directions, ' +
        'impulse without direction, obstacles that hold you back. It may mean ' +
        'forcing progress where you need to yield or rethink your approach.',
    },
    simbolismo:
      'A charioteer stands driving a chariot pulled by two sphinxes, one white and ' +
      'one black: opposites advance only if he masters them with his mind, ' +
      'as he holds no reins. The starry canopy and armor speak of a ' +
      'protected will in motion.',
  },
  'mayor-08': {
    nombre: 'Strength',
    palabrasClave: {
      normal: ['serene courage', 'patience', 'inner mastery', 'compassion', 'composure'],
      invertida: ['doubt', 'impulse', 'hardness', 'misused strength'],
    },
    significado: {
      normal:
        'Strength is not about muscle, but the gentleness that tames. ' +
        'It speaks of handling the untamed—fear, anger, desire—with ' +
        'patience and tenderness rather than violence. True temper holds ' +
        'without gripping.',
      invertida:
        'Reversed, that serenity is missing: strength turns into hardness or, ' +
        'instead, giving in to impulse. It may point to doubting one\'s own ' +
        'capacity, or trying to force what can only be achieved with ' +
        'calm.',
    },
    simbolismo:
      'A woman gently closes a lion\'s jaws, without fear or violence. The ' +
      'lemniscate above her head, like in The Magician, is infinite power; ' +
      'here that power is internal. The flowers at her waist remind us ' +
      'that firmness can be gentle.',
  },
  'mayor-09': {
    nombre: 'The Hermit',
    palabrasClave: {
      normal: ['introspection', 'seeking', 'chosen solitude', 'wisdom', 'inner guidance'],
      invertida: ['isolation', 'withdrawal', 'unwanted loneliness', 'rejecting advice'],
    },
    significado: {
      normal:
        'The Hermit steps back to see clearly. It speaks of retreating for a ' +
        'A time of noise to find answers within, and the wisdom that comes from having walked in silence. ' +
        'The light you seek is already carried within you. ' +
        'the same.',
      invertida:
        'Reversed, retreat turns into confinement: an isolation that pulls you away from everything, ' +
        'evasion disguised as a search, or a solitude that no longer nourishes. It ' +
        'could also be refusing to ask for or receive the guidance you need.',
    },
    simbolismo:
      'Alone on a mountain peak, holding a lantern with a star inside. ' +
      'within: the light of wisdom that barely illuminates the next step. The staff ' +
      'supports him on the climb; the grey cloak makes him almost invisible, ' +
      'withdrawn from the world by choice.',
  },
  'mayor-10': {
    nombre: 'Wheel of Fortune',
    palabrasClave: {
      normal: ['cycles', 'change', 'destiny', 'turn', 'opportunity'],
      invertida: ['rough patch', 'resistance to change', 'feeling at the mercy of', 'stuck'],
    },
    significado: {
      normal:
        'The Wheel turns and everything changes: what was below rises, what was ' +
        'above falls. It speaks of a twist of fate, of cycles completing and ' +
        'of accepting that greater forces are at play. When luck turns in your ' +
        'favor, it is best to embrace it.',
      invertida:
        'Reversed, the wheel seems to turn against you: a rough patch, cycles that ' +
        'they repeat, the feeling of being at the mercy of what happens. It can ' +
        'also be resisting an inevitable change instead of flowing with it.',
    },
    simbolismo:
      'A great wheel turns in the sky, surrounded by creatures rising and falling ' +
      'with it. In the corners, four winged figures read: what changes is ' +
      'better understood from what remains. The letters in the center remind ' +
      'us that the turning obeys a law.',
  },
  'mayor-11': {
    nombre: 'Justice',
    palabrasClave: {
      normal: ['fairness', 'truth', 'cause and effect', 'responsibility', 'clarity'],
      invertida: ['injustice', 'avoiding blame', 'imbalance', 'dishonesty'],
    },
    significado: {
      normal:
        'Justice weighs the facts without passion. It speaks of truth, of ' +
        'consequences that match one\'s actions, and of owning your part ' +
        'with honesty. It is time to decide with clarity and for everything ' +
        'to receive its due.',
      invertida:
        'Reversed, the scales tilt: injustice, biased decisions, or ' +
        'dodging responsibility for what one caused. It may point to ' +
        'deceiving yourself about your actions or carrying others\' burdens.',
    },
    simbolismo:
      'Seated between two pillars, she holds an upright sword in one hand and ' +
      'scales in the other: the reason that cuts and the balance that measures. A ' +
      'Unlike other figures, it looks straight ahead, with eyes wide open: ' +
      'it judges what it sees, not what it imagines.',
  },
  'mayor-12': {
    nombre: 'The Hanged Man',
    palabrasClave: {
      normal: ['pause', 'surrender', 'a new perspective', 'sacrifice', 'suspension'],
      invertida: ['stagnation', 'resistance', 'useless sacrifice', 'delay'],
    },
    significado: {
      normal:
        'The Hanged Man halts action to shift perspective. It speaks of letting go of ' +
        'control, accepting a pause, and seeing the situation from the opposite ' +
        'angle. Sometimes, moving forward means staying still for a while.',
      invertida:
        'Reversed, the pause becomes a deadlock: resisting letting go, waiting without ' +
        'anything moving, or making sacrifices that lead nowhere. It may ' +
        'point to clinging to a stance when it is time to surrender and see differently.',
    },
    simbolismo:
      'He hangs upside down from a living tree, tied by one foot, with hands ' +
      'hidden and the other foot free: he chose to be this way. His face is calm and ' +
      'a halo illuminates him: the suspension is not a punishment, it is a revelation. The world ' +
      'looks different when turned upside down.',
  },
  'mayor-13': {
    nombre: 'Death',
    palabrasClave: {
      normal: ['ending', 'transformation', 'closure', 'renewal', 'letting go'],
      invertida: ['resistance to change', 'stagnation', 'clinging', 'fear of endings'],
    },
    significado: {
      normal:
        'Death is rarely literal: it is the ending that makes way for the new. ' +
        'It speaks of closing a chapter, letting go of what has served its purpose, and ' +
        'allowing something different to be born. Letting go hurts, but without that closure, there ' +
        'is no renewal.',
      invertida:
        'Reversed, the process stalls: clinging to what has ended, fearing ' +
        'change so much that the agony is prolonged. It may point to a ' +
        'a transformation seeking its way, one you are resisting with all your ' +
        'strength.',
    },
    simbolismo:
      'A skeleton in armor rides a white horse, carrying a ' +
      'A flag with a rose: what sweeps away also heralds new beauty. Before ' +
      'it, kings and children fall alike. In the distance, the sun rises between two ' +
      'pillars: every ending is also a new dawn.',
  },
  'mayor-14': {
    nombre: 'Temperance',
    palabrasClave: {
      normal: ['balance', 'moderation', 'synthesis', 'patience', 'harmony'],
      invertida: ['excess', 'impatience', 'imbalance', 'disharmony'],
    },
    significado: {
      normal:
        'Temperance blends in just the right measure. It speaks of finding the ' +
        'middle ground, combining what seemed incompatible, and moving forward with patience and ' +
        'moderation. It is the calm that comes from neither doing too much nor too little.',
      invertida:
        'Reversed, the measure is lost: excess in some area, impatience ' +
        'that ruins the process, or elements that fail to integrate. It may ' +
        'point to a life without balance, pulled between extremes.',
    },
    simbolismo:
      'An angel pours water between two cups without spilling a drop: the constant ' +
      'flow that blends without loss. One foot is on land and the other in ' +
      'water—the material and the emotional—and a path leads into the distance toward a ' +
      'light: balance is also a journey.',
  },
  'mayor-15': {
    nombre: 'The Devil',
    palabrasClave: {
      normal: ['attachment', 'desire', 'bondage', 'shadow', 'materialism'],
      invertida: ['liberation', 'breaking chains', 'regaining control', 'becoming aware'],
    },
    significado: {
      normal:
        'The Devil shows the chains we place upon ourselves: attachments, habits, ' +
        'desires that enslave. It speaks of what binds you even if you think you chose it, of ' +
        'the shadow we prefer not to look at. Recognizing the bond is the first ' +
        'step toward letting it go.',
      invertida:
        'Reversed, the chain loosens: becoming aware of what enslaves you ' +
        'and starting to break free, regaining control over a desire or a ' +
        'bond. It is the way out of the pit, even if the first pull is difficult.',
    },
    simbolismo:
      'A demonic figure dominates two beings chained to its pedestal. But ' +
      'look at the chains: they are loose, they could lift them over their ' +
      'heads. The bond is more chosen than imposed. The inverted torch ' +
      'lights downward, toward the material.',
  },
  'mayor-16': {
    nombre: 'The Tower',
    palabrasClave: {
      normal: ['sudden rupture', 'revelation', 'collapse', 'liberation', 'truth'],
      invertida: ['crisis averted', 'fear of change', 'postponed collapse', 'resistance'],
    },
    significado: {
      normal:
        'The Tower represents the sudden collapse of what was poorly built. ' +
        'It speaks of a truth that erupts, of false structures falling all at ' +
        'once. It is painful, yet liberating: what falls could not hold, and on ' +
        'the cleared ground, you can build something better.',
      invertida:
        'Reversed, the collapse is resisted or postponed: a crisis that is seen ' +
        'it arrives and is avoided, a necessary change one clings to. It may be ' +
        'an inner tremor that has not yet erupted outward.',
    },
    simbolismo:
      'A lightning bolt strikes a tower atop a cliff, tearing the crown from its ' +
      'summit; two figures fall into the void. The fire and flames escaping from ' +
      'the windows are the truth that can no longer be contained. The false burns ' +
      'away so that only the rock remains.',
  },
  'mayor-17': {
    nombre: 'The Star',
    palabrasClave: {
      normal: ['hope', 'faith', 'inspiration', 'serenity', 'renewal'],
      invertida: ['discouragement', 'lost faith', 'disconnection', 'pessimism'],
    },
    significado: {
      normal:
        'The Star arrives after the storm of The Tower, like a luminous ' +
        'calm. It speaks of renewed hope, of faith that things can ' +
        'heal, and of a gentle guide showing the way. It is a time to heal and ' +
        'learn to trust again.',
      invertida:
        'Reversed, the light dims: discouragement, lost faith, the feeling that ' +
        'it is not worth trusting. It may signal a disconnection from what ' +
        'inspired you or a pessimism that clouds the good signs.',
    },
    simbolismo:
      'Naked by a pond, a woman pours water onto the earth and into the ' +
      'water: she shows herself defenseless, at peace. Above her shines a great ' +
      'a star surrounded by seven smaller ones. The bird in the tree and the stillness ' +
      'of the landscape speak of a recovered serenity.',
  },
  'mayor-18': {
    nombre: 'The Moon',
    palabrasClave: {
      normal: ['illusion', 'fears', 'intuition', 'uncertainty', 'dreams'],
      invertida: ['returning clarity', 'fears dissipating', 'revealed truth', 'confusion yielding'],
    },
    significado: {
      normal:
        'The Moon illuminates an uncertain landscape, where things are not what ' +
        'they seem. It speaks of fears, illusions, and mixed signals, but also ' +
        'of the intuition that knows how to navigate the shadows. This is not a ' +
        'time for certainty: it is a time to walk slowly and trust your gut.',
      invertida:
        'Reversed, the fog begins to lift: fears dissipate, a deception clears, ' +
        'and the truth emerges from the confusion. It can also represent the ' +
        'peak of bewilderment, just before the ' +
        'gain clarity.',
    },
    simbolismo:
      'The Moon pours droplets onto a path that fades between two towers. A ' +
      'dog and a wolf howl at it—the tamed and the wild sides of fear—, and a ' +
      'crayfish emerges from the water, from the unconscious. The path exists, but it ' +
      'is walked almost blindly.',
  },
  'mayor-19': {
    nombre: 'The Sun',
    palabrasClave: {
      normal: ['joy', 'clarity', 'success', 'vitality', 'truth'],
      invertida: ['clouded optimism', 'dimmed enthusiasm', 'delayed radiance', 'fleeting discouragement'],
    },
    significado: {
      normal:
        'The Sun illuminates everything without shadows: it is the card of clear joy and ' +
        'vitality. It speaks of success, of truth revealed in full light, and ' +
        'of simple, straightforward happiness. After the Moon, things are finally ' +
        'seen with sharpness.',
      invertida:
        'Reversed, the sun does not go out, but it clouds over: enthusiasm that ' +
        'is hard to ignite, joy that is postponed, optimism that needs to be ' +
        'reclaimed. It is usually fleeting: the light is still there, just hidden for a while.',
    },
    simbolismo:
      'A huge sun, with a serene face, radiates over a naked child riding ' +
      'a white horse: innocence that is not afraid to show itself. The sunflowers ' +
      'on the wall turn toward the light. Everything is open, warm, and without secrets.',
  },
  'mayor-20': {
    nombre: 'Judgement',
    palabrasClave: {
      normal: ['awakening', 'calling', 'rebirth', 'balance', 'forgiveness'],
      invertida: ['harsh self-criticism', 'ignored calling', 'doubt', 'dwelling in the past'],
    },
    significado: {
      normal:
        'Judgment is an awakening: a call to view your life with ' +
        'perspective and respond to something greater. It speaks of rebirth after an honest ' +
        'assessment, of forgiving yourself and others, and stepping into a version ' +
        'more fulfilled within yourself.',
      invertida:
        'Reversed, the call is ignored or turns inward: self-criticism that ' +
        'shows no mercy, hesitation to move forward, or being trapped in a past ' +
        'that needs closure. It may signal that you are avoiding a decision you ' +
        'already know the answer to.',
    },
    simbolismo:
      'An angel sounds a trumpet from the clouds and, below, figures rise from ' +
      'their graves with open arms: they answer the call without fear. The ' +
      'waters and the mountains in the background speak of a cycle ending; what is reborn ' +
      'does so already renewed.',
  },
  'mayor-21': {
    nombre: 'The World',
    palabrasClave: {
      normal: ['fulfillment', 'achievement', 'integration', 'happy ending', 'wholeness'],
      invertida: ['pending closure', 'halfway goal', 'delay', 'lack of integration'],
    },
    significado: {
      normal:
        'The World completes the journey of the Arcana with fulfillment. It speaks of a cycle ' +
        'concluded, a goal reached, and the feeling of being whole and ' +
        'in harmony with your surroundings. It is the reward for the path traveled and, ' +
        'at the same time, the threshold to a new one.',
      invertida:
        'Reversed, the closure is near but incomplete: a goal that is missing ' +
        'a step, a cycle you haven\'t fully integrated, a delay at the ' +
        'finish line. It invites you to tie up the final loose end before celebrating.',
    },
    simbolismo:
      'A figure dances within a laurel wreath, holding two wands and ' +
      'surrounded, in the corners, by the same four creatures from the ' +
      'Wheel: the whole closes in on itself. The oval garland is a ' +
      'portal: to finish is also to begin again.',
  },
};
