// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { RunaId } from '../types';

// Contenido de la Wiki: una ficha de aprendizaje por runa (palabras clave,
// significado derecho/invertido y simbolismo tradicional). A diferencia de
// los fragmentos de lectura (content/es/fragmentos/), esto no varía por tema
// ni se combina en frases — es la explicación de referencia que se lee en la
// pantalla de detalle. Solo existe en español por ahora (igual que el resto
// del contenido de idioma secundario, cae a español hasta que se traduzca).
export interface FichaWikiRuna {
  palabrasClave: {
    normal: string[];
    invertida: string[];
  };
  significado: {
    normal: string;
    invertida: string;
  };
  simbolismo: string;
}

export const WIKI_RUNAS_EN: Record<RunaId, FichaWikiRuna> = {
  fehu: {
    palabrasClave: {
      normal: ['prosperity', 'resources', 'solid foundation', 'abundance'],
      invertida: ['scarcity', 'attachment', 'material insecurity'],
    },
    significado: {
      normal:
        'Fehu speaks of the resources you already possess, even if you don\'t always value them fully. ' +
        'It is the prosperity that arrives when you nurture and set in motion what is already ' +
        'underway: a solid foundation built with what is available, not what is missing.',
      invertida:
        'Reversed, Fehu is the fear of lack, regardless of whether anything is truly missing. ' +
        'The need to hold on arises, along with the difficulty of sharing for fear of being left empty-handed. ' +
        'empty, or the insecurity of not knowing if what is given ever returns.',
    },
    simbolismo:
      'Its name means "cattle": in ancient Germanic cultures, cattle were the most direct ' +
      'and portable form of wealth. That is why Fehu opens the runic alphabet as a symbol ' +
      'of resources, prosperity, and the movement of goods.',
  },
  uruz: {
    palabrasClave: {
      normal: ['strength', 'vitality', 'drive', 'courage'],
      invertida: ['imposition', 'harshness', 'exhaustion'],
    },
    significado: {
      normal:
        'Uruz is the inner strength you have more present than you think: the necessary drive ' +
        'to encourage you to do something you\'ve been putting off, the vitality to face what lies ahead ' +
        'with more energy and without asking for permission.',
      invertida:
        'Reversed, Uruz can signal an energy that imposes itself instead of accompanying, or the ' +
        'weariness of carrying something alone, without asking for help. Also the hardness that appears when ' +
        'in reality, tenderness is what is needed.',
    },
    simbolismo:
      'It represents the aurochs, an extinct wild bovine, a symbol of raw strength and endurance. To ' +
      'Unlike Fehu (domesticated cattle), Uruz speaks of an untamed strength, one that is your own, not ' +
      'managed by anyone else.',
  },
  thurisaz: {
    palabrasClave: {
      normal: ['boundary', 'protection', 'defense', 'pause'],
      invertida: ['impulsiveness', 'avoided conflict', 'wall'],
    },
    significado: {
      normal:
        'Thurisaz marks a boundary that is best set before a situation overflows. It is the ' +
        'necessary pause before reacting to something that bothered you, and the strength to defend ' +
        'what truly matters.',
      invertida:
        'In reverse, it speaks of an impulsive reaction that may hurt more than it protects, of a ' +
        'conflict avoided instead of addressed, or of a wall that ends up distancing rather than ' +
        'protecting.',
    },
    simbolismo:
      'Its name refers to the thorn or the giant (thurs): a defensive, sharp force that can ' +
      'protect or wound depending on how it is used. Its shape—a protruding point—evokes exactly ' +
      'that: a sharp boundary.',
  },
  ansuz: {
    palabrasClave: {
      normal: ['communication', 'truth', 'listening', 'clarity'],
      invertida: ['misunderstanding', 'silence', 'hurtful words'],
    },
    significado: {
      normal:
        'Ansuz brings an honest conversation that has been put off: the clarity to say what ' +
        'you really think, and the genuine listening to what another needs to say.',
      invertida:
        'Reversed, it points to a misunderstanding growing from not clearing it up in time, words spoken without ' +
        'thinking that leave a mark, or a silence that replaces something that should be said.',
    },
    simbolismo:
      'It is associated with the mouth of a god—traditionally Odin—and by extension to speech, the message ' +
      'and divine or inspired communication. It is the rune of the word that transforms when spoken ' +
      'at the right time.',
  },
  raidho: {
    palabrasClave: {
      normal: ['advance', 'movement', 'path', 'progress'],
      invertida: ['stagnation', 'lost direction', 'weariness'],
    },
    significado: {
      normal:
        'Raidho is the advance toward a new stage, even if it is little by little: the willingness to move ' +
        'even if the path changes along the way, a journey that begins to take shape.',
      invertida:
        'Reversed, it appears as the feeling of being stuck while everything else seems to move forward, a direction ' +
        'that was lost in the daily grind, or the weariness of heading in a direction that no longer ' +
        'convinces.',
    },
    simbolismo:
      'It means "chariot" or "procession": the physical journey as a metaphor for the life journey. It speaks of ' +
      'the right, orderly movement toward a destination, rather than haste or escape.',
  },
  kaunaz: {
    palabrasClave: {
      normal: ['inspiration', 'clarity', 'spark', 'desire'],
      invertida: ['blackout', 'apathy', 'routine'],
    },
    significado: {
      normal:
        'Kenaz is a spark of clarity or inspiration that deserves attention: a different way of ' +
        'looking at something that felt stuck, the desire that reignites with something simple.',
      invertida:
        'Reversed, it is motivation fading into routine, an interest cooling down without you ' +
        'fully noticing, the lack of desire to try something different for now.',
    },
    simbolismo:
      'Its name translates to "torch" or "sore": the controlled light that illuminates and warms, ' +
      'as opposed to wild fire. It represents knowledge and creativity handled with ' +
      'intention.',
  },
  gebo: {
    palabrasClave: {
      normal: ['exchange', 'generosity', 'balance', 'gratitude'],
      invertida: ['imbalance', 'weariness', 'expectation'],
    },
    significado: {
      normal:
        'Gebo is an equal exchange between what is given and what is received: the generosity that ' +
        'sustains something important, a gesture appreciated without expecting anything in return.',
      invertida:
        'Reversed, it points to a scale that always tips to one side, the exhaustion of giving ' +
        'more than you receive, or something that secretly expects a return.',
    },
    simbolismo:
      'It means "gift". Its shape—an X—represents two forces meeting on equal ' +
      'terms: an exchange without hierarchy, the foundation of any healthy bond.',
  },
  wunju: {
    palabrasClave: {
      normal: ['joy', 'well-being', 'harmony', 'lightness'],
      invertida: ['forced happiness', 'apparent calm', 'pretending'],
    },
    significado: {
      normal:
        'Wunjo brings a simple joy that needs no grand reason: a moment of well-being ' +
        'after a difficult phase, the lightness of enjoying something without overthinking it.',
      invertida:
        'Reversed, it can be a forced happiness to avoid making others uncomfortable, the apparent calm that ' +
        'masks something pending, or the effort of pretending that everything is fine.',
    },
    simbolismo:
      'Its name is related to "wish" and the joy of a desire fulfilled. ' +
      'Traditionally it represents community harmony and shared joy, not just individual.',
  },
  hagalaz: {
    palabrasClave: {
      normal: ['abrupt change', 'necessary break', 'shake-up', 'order'],
      invertida: ['sudden break', 'disorder', 'difficulty accepting'],
    },
    significado: {
      normal:
        'Hagalaz is a sudden change that, while uncomfortable, makes room for something new: a break ' +
        'necessary to let go of what no longer served, a jolt that reorders your priorities.',
      invertida:
        'Reversed, it is a rupture that arrives without much warning, the disorder left by a change ' +
        'unexpected, the difficulty of accepting something that ended abruptly.',
    },
    simbolismo:
      'It means "hail": an uncontrollable natural force that strikes and then melts without leaving a trace. ' +
      'It symbolizes disruption that, despite its violence, is fleeting and ends up clearing the ' +
      'grounding.',
  },
  naudiz: {
    palabrasClave: {
      normal: ['patience', 'perseverance', 'necessity', 'effort'],
      invertida: ['endurance born of fear', 'misunderstood need', 'resistance'],
    },
    significado: {
      normal:
        'Nauthiz speaks of the patience required during times of scarcity: the effort that is ' +
        'sustained even when resources are lacking, the perseverance in the face of a concrete obstacle.',
      invertida:
        'Reversed, it may be something held onto out of fear rather than conviction, a need that ' +
        'is confused with something else, or enduring a situation that could already be resolved.',
    },
    simbolismo:
      'Its name means "necessity" or "constraint." It represents the limitations that, when ' +
      'handled well, temper the character: the rune of learning to make do with what you have.',
  },
  isa: {
    palabrasClave: {
      normal: ['pause', 'calm', 'wait', 'stillness'],
      invertida: ['distance born of fear', 'indecision', 'stagnation'],
    },
    significado: {
      normal:
        'Isa is a useful pause to think with a cool head: the time just before taking an important ' +
        'step, the calm of waiting for the right moment.',
      invertida:
        'Reversed, it is a distance installed by fear of moving forward, the indecision that freezes ' +
        'something pending, the stagnation of not yet daring to move.',
    },
    simbolismo:
      'It means "ice": a single straight line, total stillness. It represents immobility as a ' +
      'state—neither good nor bad in itself—that can be restorative rest or paralysis, depending on the ' +
      'context.',
  },
  jera: {
    palabrasClave: {
      normal: ['harvest', 'reward', 'cycle', 'consistency'],
      invertida: ['impatience', 'frustration', 'interrupted process'],
    },
    significado: {
      normal:
        'Jera brings the fruits of sustained effort: a reward that arrives when ' +
        'the time is right, the result of having been consistent with something.',
      invertida:
        'Reversed, it points to the impatience of wanting results too soon, the frustration of not ' +
        'seeing what was sown yet, a process cut short before bearing fruit.',
    },
    simbolismo:
      'It means "year" or "harvest": the complete agricultural cycle, from sowing to reaping. ' +
      'Remember that natural processes have their own timing, which cannot be rushed.',
  },
  eihwaz: {
    palabrasClave: {
      normal: ['resistance', 'strength', 'courage', 'stability'],
      invertida: ['rigidity', 'paralysis', 'resistance to change'],
    },
    significado: {
      normal:
        'Eihwaz provides more strength than you feel right now: a fortitude that appears ' +
        'just when it is needed most, the courage to go through something difficult.',
      invertida:
        'Reversed, it can be a rigidity that leaves no room to yield, a fear that paralyzes instead ' +
        'of pushing forward, the resistance to changing something that no longer works.',
    },
    simbolismo:
      'Represents the yew, a long-lived tree with very hard wood, traditionally associated with ' +
      'death and the continuity of life at once. It symbolizes a strength that withstands the passage of ' +
      'time.',
  },
  perthu: {
    palabrasClave: {
      normal: ['mystery', 'trust', 'openness', 'destiny'],
      invertida: ['control', 'resistance to letting go', 'uncomfortable uncertainty'],
    },
    significado: {
      normal:
        'Perthro is an opening to the unexpected: the trust that things will fall into place, ' +
        'a mystery worth letting unfold.',
      invertida:
        'Reversed, it speaks of the need to control something beyond your reach, the resistance ' +
        'to letting go and allowing things to flow, the discomfort of not knowing what comes next.',
    },
    simbolismo:
      'Associated with a dice cup or a chalice of luck: what is hidden and revealed when ' +
      'cast. It is the rune of chance, destiny, and what cannot yet be fully seen.',
  },
  algiz: {
    palabrasClave: {
      normal: ['protection', 'instinct', 'intuition', 'healthy boundary'],
      invertida: ['guarded', 'mistrust', 'over-defensiveness'],
    },
    significado: {
      normal:
        'Algiz is an instinct that knows something before you fully reason it: a healthy care that ' +
        'protects without confining, an intuition that signals when to set a boundary.',
      invertida:
        'Reversed, it can be a guard kept too high, pushing away more than it protects, the fear of ' +
        'lowering your defenses even when needed, a distrust that weighs more than necessary.',
    },
    simbolismo:
      'It represents the elk or antlers raised in a stance of alert and defense. Its shape, with ' +
      'arms reaching upward, is a universal gesture of protection and connection to something greater.',
  },
  sowulo: {
    palabrasClave: {
      normal: ['clarity', 'success', 'vitality', 'trust'],
      invertida: ['forced optimism', 'uncomfortable truth', 'facade'],
    },
    significado: {
      normal:
        'Sowilo brings a clarity that returns after a confusing phase: the confidence of being on ' +
        'the right path, an achievement that feels shared after sustained effort.',
      invertida:
        'Reversed, it can be a forced optimism that masks something unresolved, the difficulty of ' +
        'accepting an uncomfortable truth, showing enthusiasm outwardly while something internal ' +
        'doesn\'t quite click.',
    },
    simbolismo:
      'It means "sun". The only rune that is never considered entirely negative even when reversed, ' +
      'because the sun always rises again: it represents vitality, success, and the life force that ' +
      'never fades.',
  },
  teiwaz: {
    palabrasClave: {
      normal: ['courage', 'justice', 'honesty', 'commitment'],
      invertida: ['imbalance', 'weariness', 'uneven effort'],
    },
    significado: {
      normal:
        'Tiwaz brings the courage to hold onto something even when it is difficult: honesty even when it ' +
        'is hard to speak, a commitment defended with conviction.',
      invertida:
        'Reversed, it points to an effort made by only one of the parties involved, the silent ' +
        'tally of who gives more, the weariness of insisting on something that is no longer balanced.',
    },
    simbolismo:
      'It bears the name of the god Tyr, associated with justice and sacrifice (according to myth, he lost ' +
      'a hand to keep his word). It represents the honesty that costs something, but is worth ' +
      'upholding.',
  },
  berkana: {
    palabrasClave: {
      normal: ['beginning', 'growth', 'renewal', 'care'],
      invertida: ['fear of the new', 'procrastination', 'stunted growth'],
    },
    significado: {
      normal:
        'Berkano is a fresh start, however small: growth that becomes visible after a ' +
        'period of change, something ready to take the next step.',
      invertida:
        'Reversed, it can be growth held back by fear of the new, the desire to start ' +
        'anew without yet daring to, a beginning that is postponed time and again.',
    },
    simbolismo:
      'It represents the birch, one of the first trees to grow on devastated land. It symbolizes ' +
      'renewal, motherhood, and the care that makes a beginning possible.',
  },
  ehwaz: {
    palabrasClave: {
      normal: ['cooperation', 'mutual trust', 'moving forward together', 'movement'],
      invertida: ['misalignment', 'trust to be repaired', 'uneven burden'],
    },
    significado: {
      normal:
        'Ehwaz speaks of what flows better when done as a pair: a mutual trust that sustains ' +
        'important decisions, the journey toward a shared goal.',
      invertida:
        'In reverse, it points to one person carrying what should be shared, a trust ' +
        'that needs mending after a specific event, the misalignment between what each expects ' +
        'from the other.',
    },
    simbolismo:
      'Represents the horse, a symbol of the cooperative bond between animal and rider: two ' +
      'distinct wills moving as one when they trust each other.',
  },
  mannaz: {
    palabrasClave: {
      normal: ['community', 'support', 'cooperation', 'connection'],
      invertida: ['isolation', 'difficulty asking for help', 'confinement'],
    },
    significado: {
      normal:
        'Mannaz is the support of those close to you: a real connection based on ' +
        'cooperation, the foundation of a community, even if it is small.',
      invertida:
        'Reversed, it can be the isolation of solving everything without asking for help, the difficulty of ' +
        'relying on others when needed, a tendency to close yourself off.',
    },
    simbolismo:
      'It means "human being". It represents the person in their social dimension: no one stands ' +
      'alone, and this rune reminds us of the value of community and interdependence.',
  },
  laguz: {
    palabrasClave: {
      normal: ['intuition', 'emotion', 'fluidity', 'inner wisdom'],
      invertida: ['emotional overflow', 'confusion', 'intensity without clarity'],
    },
    significado: {
      normal:
        'Laguz is an intuition that knows more than reason admits: an emotion worth ' +
        'following closely, the wisdom of trusting what your instinct says.',
      invertida:
        'Reversed, it can be an intense emotion that clouds clarity, the overflow of feeling everything at ' +
        'once, confusing intensity with certainty.',
    },
    simbolismo:
      'It means "water": the element that flows, adapts, and cannot be held in your hands. ' +
      'It represents the emotional and intuitive world, as real as the rational, though less tangible.',
  },
  ingwaz: {
    palabrasClave: {
      normal: ['potential', 'gestation', 'maturation', 'patience'],
      invertida: ['impatience', 'forcing the process', 'anxiety'],
    },
    significado: {
      normal:
        'Ingwaz is something currently gestating that still needs its time: a potential that is best ' +
        'let things ripen before acting; a seed has been planted and will soon bear fruit.',
      invertida:
        'Reversed, it points to the impatience of forcing something not yet ready, the urge to ' +
        'accelerate a process that requires calm, the anxiety of not knowing how to wait for the right moment.',
    },
    simbolismo:
      'It bears the name of the god Ing, associated with fertility and the earth. Its closed shape, like a ' +
      'seed, represents the potential contained within that has yet to be released.',
  },
  dagaz: {
    palabrasClave: {
      normal: ['turning point', 'clarity', 'transformation', 'awakening'],
      invertida: ['resistance to change', 'clinging to the past', 'denial'],
    },
    significado: {
      normal:
        'Dagaz is a turning point that shifts your perspective: a clarity that arrives ' +
        'after a confusing phase, a beginning that feels almost overnight.',
      invertida:
        'Reversed, it may be the resistance to letting go of how things used to be, the difficulty of ' +
        'accepting that something has changed, clinging to a version of something no longer there.',
    },
    simbolismo:
      'It means "day" or "dawn": the exact moment darkness turns into light. It represents ' +
      'a total and positive transformation, a clear before and after.',
  },
  othala: {
    palabrasClave: {
      normal: ['heritage', 'values', 'roots', 'belonging'],
      invertida: ['inherited patterns', 'external expectations', 'attachment to the past'],
    },
    significado: {
      normal:
        'Othala speaks of the values that ground your important decisions: a root that gives ' +
        'meaning to what lies ahead, honoring where you come from.',
      invertida:
        'Reversed, it may point to patterns repeating unconsciously, an inherited expectation ' +
        'that weighs more than necessary, the difficulty of letting go of old ways.',
    },
    simbolismo:
      'It means "ancestral home" or "heritage." It closes the runic alphabet as a symbol of what is ' +
      'inherited—assets, values, identity—and how that continues to shape the present.',
  },
};
