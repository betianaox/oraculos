// Traducido al inglés desde el original en español con scripts/traducir.js.
// Wiki del oraculo de Angeles (español). Base de conocimiento reescrita con voz
// propia a partir del mazo de referencia: registro MISTICO (a diferencia del
// tono didactico del Tarot), para que los dos oraculos suenen distintos ahora
// que conviven en el quiosco.
//
// Por numero de carta (1..78, mismo orden que el mazo y las imagenes). Cada
// ficha completa lo que el angel trae; los campos que el mazo no da (signo,
// regente, combinaciones, incluso el reverso en las que "no tienen") se omiten:
// no se inventan atribuciones.

export interface FichaAngel {
  nombre: string;
  /** Coro / familia a la que pertenece la carta. Ej: 'Serafines · Primer Coro'. */
  grupo: string;
  /** Signo zodiacal, solo si el mazo lo asigna. */
  signo?: string;
  /** Astro regente, solo si el mazo lo asigna. */
  regente?: string;
  /** Palabras clave, para leer la carta de un vistazo. */
  claves: {
    derecho: string[];
    /** Algunas cartas 'no tienen' revés: se omite. */
    invertido?: string[];
  };
  /** Quien es el angel: su naturaleza y el mensaje que porta (registro mistico). */
  presencia: string;
  /** Significado cuando la carta cae derecha. */
  derecho: string;
  /** Significado invertido, solo si la carta lo tiene. */
  invertido?: string;
  /** Lecturas que solo aparecen junto a otras cartas, solo si el mazo las da. */
  encuentros?: string;
}

// Secciones de la grilla Aprender: agrupan las 78 cartas por familia, como el
// Tarot las agrupa por Mayores y palos. Cada sección toma un rango contiguo de
// números de carta.
//
// Son POCAS y GRANDES a proposito: cada seccion se desbloquea con un video, asi
// que los nueve Coros (de 3 cartas cada uno) van juntos en un solo bloque. El
// coro al que pertenece cada angel igual se lee en su ficha ("Coro").
export const SECCIONES_ANGELES_EN: { id: string; titulo: string; desde: number; hasta: number }[] = [
  { id: 'coros', titulo: 'The nine Choirs', desde: 1, hasta: 27 },
  { id: 'arcangeles', titulo: 'Archangels', desde: 28, hasta: 37 },
  { id: 'representativos', titulo: 'Representative Angels', desde: 38, hasta: 66 },
  { id: 'negativos', titulo: 'Negative Angels', desde: 67, hasta: 78 },
];

// Rotulos de la ficha en español. El resto de los idiomas cae a español hasta
// que se traduzcan (mismo criterio que Runas).
export const ETIQUETAS_ANGELES_EN = {
  coro: 'Choir',
  signo: 'Sign',
  regente: 'Ruler',
  claves: 'Keywords',
  presencia: 'Their presence',
  derecho: 'Upright',
  invertido: 'Reversed',
  encuentros: 'Combined with other cards',
};

export const WIKI_ANGELES_EN: Record<number, FichaAngel> = {
  // ── Serafines · Primer Coro ──────────────────────────────────────────────
  1: {
    nombre: 'Seraph of Pure Love',
    grupo: 'Seraphim · First Choir',
    claves: {
      derecho: ['unconditional love', 'surrender', 'kindness', 'family'],
      invertido: ['disappointment', 'closed heart', 'fear of feeling'],
    },
    presencia:
      'The Seraphim burn in the circle closest to the divine: they are the fire ' +
      'that surrounds the source and never fades. The Seraph of Pure Love brings ' +
      'that flame to the realm of affection. It is not the love that asks, but ' +
      'the one that gives; the one that sustains its own and pours out, without ' +
      'live. When it appears, something in your life is being touched by that love which ' +
      'expects nothing in return.',
    derecho:
      'Upright, the card speaks of a pure and elevated affection: love for ' +
      'family and humanity, feelings that seek no personal gain. ' +
      'It announces—or describes—someone with a generous heart, who does good for ' +
      'the simple joy of it. It is a sign of healthy bonds, sincere devotion, ' +
      'and a kindness that shelters those who receive it.',
    invertido:
      'Reversed, the flame turns inward. It may point to a ' +
      'disappointment that has chilled the heart, or the fear of showing one\'s feelings: ' +
      'a true love that dares not speak its name and is kept hidden until it hurts. The ' +
      'card invites you to lower your guard before silence turns into ' +
      'distance.',
  },
  2: {
    nombre: 'Healing Seraph',
    grupo: 'Seraphim · First Choir',
    claves: {
      derecho: ['healing', 'effective treatment', 'relief', 'medicine'],
      invertido: ['ineffective remedy', 'delay in healing'],
    },
    presencia:
      'From the same divine hearth descends the Healing Seraph, bringing its ' +
      'fire to the wound to close it. It is the hand that heals and the science that ' +
      'succeeds: the figure of the doctor, the right remedy, the return of health.',
    derecho:
      'Upright, it promises an effective solution to an ailment: the treatment ' +
      'works, the body responds, improvement arrives. It often points to the person ' +
      'the healer—the doctor, the therapist—or the right path to recover ' +
      'your health.',
    invertido:
      'Reversed, it warns that the chosen remedy is not bearing fruit. The ' +
      'treatment is insufficient or not the right one: it is time to rethink your path and ' +
      'seek another hand.',
  },
  3: {
    nombre: 'Seraphim Cantor',
    grupo: 'Seraphim · First Choir',
    claves: {
      derecho: ['art', 'creativity', 'inspiration', 'gift'],
      invertido: ['sadness', 'creative drought', 'discouragement'],
    },
    presencia:
      'The Seraphim Cantor is the voice of the celestial choir: the one who turns ' +
      'fire into music. It embodies the artist, the soul gifted with a creative ' +
      'talent that needs to express itself to find peace.',
    derecho:
      'Upright, it reveals a highly creative person with talent and sensitivity ' +
      'for art. It heralds inspiration and fruitful results from what is created.',
    invertido:
      'Reversed, it describes a state of sadness and dimmed inspiration: the ' +
      'fountain has run dry for a while, and it is hard to find your song again.',
    encuentros:
      'Together with the Angel of Love, it promises a bright future and may ' +
      'announce the arrival of a pregnancy.',
  },
  // ── Querubines · Segundo Coro ────────────────────────────────────────────
  4: {
    nombre: 'Cherub Kerub, Angel of Mediation',
    grupo: 'Cherubim · Second Choir',
    claves: {
      derecho: ['advice', 'mediation', 'agreement', 'wisdom'],
      invertido: ['lack of support', 'helplessness'],
    },
    presencia:
      'The Cherubim guard knowledge and the gateway to the sacred. Kerub, ' +
      'the Mediator, builds bridges: it is the calm voice that offers counsel and reconciles ' +
      'opposing parties.',
    derecho:
      'Upright, it points to a counseling and conciliatory person, one who helps ' +
      'find common ground and resolve conflict with fair words.',
    invertido:
      'Reversed, it speaks of a lack of support just when it is needed most: a ' +
      'delicate situation faced in solitude.',
  },
  5: {
    nombre: 'Cherub Karibu, Guardian Angel',
    grupo: 'Cherubim · Second Choir',
    claves: {
      derecho: ['protection', 'principles', 'justice', 'firmness'],
      invertido: ['intolerance', 'rigidity'],
    },
    presencia:
      'Karibu is the sentinel who guards what matters. It embodies a person ' +
      'of firm principles, bound to the law and fairness, who protects those ' +
      'under their care with authority.',
    derecho:
      'Upright, it represents someone of influence—often with judicial or ' +
      'commanding, protective and upright, holding firm to values without wavering.',
    invertido:
      'Reversed, that firmness hardens too much: conservatism, rigidity, ' +
      'intolerance toward those who think differently.',
  },
  6: {
    nombre: 'Long-lived Cherub, Guardian of the Tree of Life',
    grupo: 'Cherubim · Second Choir',
    signo: 'Virgo',
    claves: {
      derecho: ['experience', 'wisdom', 'maturity', 'counsel'],
      invertido: ['misguided ideas', 'unreliability'],
    },
    presencia:
      'The Guardian of the Tree of Life watches over the roots of existence. It ' +
      'is the figure of the wise elder: a life well-lived, much learned, a ' +
      'knowledge that only years can bestow.',
    derecho:
      'Upright, it represents a person of great experience and depth, whose ' +
      'advice is valuable because it is born of the journey. Associated with Virgo.',
    invertido:
      'Reversed, that wisdom twists: misguided ideas, unreliable judgment, ' +
      'someone upon whom it is not wise to lean.',
  },
  // ── Tronos · Tercer Coro ─────────────────────────────────────────────────
  7: {
    nombre: 'Masculine and Feminine Throne',
    grupo: 'Thrones · Third Choir',
    claves: {
      derecho: ['firm ideas', 'composure', 'mastery of passions'],
      invertido: ['projects that do not take root', 'misconceptions'],
    },
    presencia:
      'The Thrones uphold the divine will as a seat of stability. ' +
      'This card embodies a mind of fixed ideas, the person who does not let ' +
      'themselves be swayed by impulse and stays their course.',
    derecho:
      'Upright, it describes someone who thinks firmly and, in love, does not ' +
      'get carried away by passion: reason prevails over impulse.',
    invertido:
      'Reversed, that rigidity hinders: difficulties in completing projects, ' +
      'misguided ideas. It may signal a false pregnancy.',
  },
  8: {
    nombre: 'Creative Thrones',
    grupo: 'Thrones · Third Choir',
    signo: 'Gemini',
    claves: {
      derecho: ['creativity', 'big ideas', 'innovation'],
      invertido: ['blockage', 'stalled projects'],
    },
    presencia:
      'The Creative Thrones are the seat where great ideas are born: the ' +
      'mind that invents and renews, always one step ahead of the known.',
    derecho:
      'Upright, it represents the creative and innovative person, with a fertile ' +
      'mind and a unique vision. It corresponds to the sign of Gemini.',
    invertido:
      'Reversed, the source runs dry: lack of creativity, projects that ' +
      'stagnate and fail to take off.',
  },
  9: {
    nombre: 'Thrones, the Foreigners',
    grupo: 'Thrones · Third Choir',
    signo: 'Aquarius',
    claves: {
      derecho: ['changes', 'new ideas', 'mental strength'],
      invertido: ['confused mind', 'escapism'],
    },
    presencia:
      'They come from afar, bringing something new. The Strangers embody change, ' +
      'the ideas that break the status quo, and the power of the mind to ' +
      'transform reality.',
    derecho:
      'Upright, it announces changes, fresh ideas, and the strength of thought. ' +
      'It may point to someone arriving from afar to settle here. ' +
      'Corresponds to the sign of Aquarius.',
    invertido:
      'Reversed, that mental strength becomes clouded: confusion, and the risk of ' +
      'seeking in escapism—even drugs—what cannot be found.',
  },
  // ── Dominaciones · Cuarto Coro ───────────────────────────────────────────
  10: {
    nombre: 'Dominion Yahriel, the Ruling Angel',
    grupo: 'Dominions · Fourth Choir',
    claves: {
      derecho: ['leadership', 'command', 'authority'],
      invertido: ['tyranny', 'abuse of power'],
    },
    presencia:
      'The Dominions oversee the government of heaven. Yahriel is the guiding hand: ' +
      'the ability to lead and bring order to what one directs.',
    derecho:
      'Upright, it represents someone capable of leading—a situation, a ' +
      'company, a country—with natural command and a sense of direction.',
    invertido:
      'Reversed, command becomes corrupted: tyranny, power exercised over others ' +
      'without measure.',
  },
  11: {
    nombre: 'Dominion Chasmal, the one who speaks with passion',
    grupo: 'Dominions · Fourth Choir',
    claves: {
      derecho: ['passion', 'impetus', 'enthusiasm'],
      invertido: ['exaltation', 'excessive reaction'],
    },
    presencia:
      'Chasmal speaks with fire in his voice. He embodies the passionate and ' +
      'impulsive person, who gives themselves to what they feel with their whole being.',
    derecho:
      'Upright, it describes a fiery and spontaneous temperament, capable of ' +
      'spreading their enthusiasm.',
    invertido:
      'Reversed, passion overflows: exalted reactions, a character that ' +
      'loses their temper easily.',
  },
  12: {
    nombre: 'Dominion Zadkiel, the Merciful Angel',
    grupo: 'Dominions · Fourth Choir',
    claves: {
      derecho: ['sensitivity', 'nobility', 'willpower'],
      invertido: ['selfishness', 'deception', 'disloyalty'],
    },
    presencia:
      'Zadkiel pours out mercy. He is the sensitive and strong-willed soul, of ' +
      'noble feelings, who accompanies without asking for anything in return.',
    derecho:
      'Upright, it represents a person with a good heart and firm will, good ' +
      'a companion on the path.',
    invertido:
      'Reversed, it becomes its opposite: selfishness, deceit, poor company ' +
      'that cannot be trusted.',
  },
  // ── Virtudes · Quinto Coro ───────────────────────────────────────────────
  13: {
    nombre: 'Virtue Michael, the Resplendent Angel',
    grupo: 'Virtues · Fifth Choir',
    claves: {
      derecho: ['nobility', 'altruism', 'extraordinary help'],
    },
    presencia:
      'Virtues perform miracles and sustain the spirit. Michael the Resplendent ' +
      'shines as the noble and altruistic soul: help that arrives when ' +
      'it seemed impossible.',
    derecho:
      'Upright, it represents a big-hearted, generous person who appears ' +
      'as an extraordinary aid. It is one of the brightest cards in the ' +
      'deck: it has no reversed meaning, for its goodness cannot be inverted.',
  },
  14: {
    nombre: 'Virtue Tarshsis, the Angel who guarded Christ',
    grupo: 'Virtues · Fifth Choir',
    claves: {
      derecho: ['family protection', 'shelter', 'care'],
    },
    presencia:
      'Tarshsis is the guardian who watched over the most sacred. It embodies ' +
      'the protection of the family: the one who cares for their own and keeps ' +
      'them safe.',
    derecho:
      'Upright, it speaks of shelter and care in the home, of someone who watches ' +
      'over their loved ones. Like Michael, it has no reversed meaning: its ' +
      'protection does not turn away.',
  },
  15: {
    nombre: 'Virtue Bariel, the one who instills courage',
    grupo: 'Virtues · Fifth Choir',
    claves: {
      derecho: ['courage', 'bravery', 'decisiveness'],
      invertido: ['indecision', 'fear'],
    },
    presencia:
      'Bariel lends his fire to those who doubt. It is the courage needed to ' +
      'make difficult decisions, the resolve in the face of what scares us.',
    derecho:
      'Upright, it represents courage: the person who dares to decide even ' +
      'when the path feels frightening.',
    invertido:
      'Reversed, that courage is missing: indecision, paralysis before what ' +
      'needs to be resolved.',
  },
  // ── Potestades · Sexto Coro ──────────────────────────────────────────────
  16: {
    nombre: 'Power Camael, the Angel of Duality',
    grupo: 'Powers · Sixth Choir',
    regente: 'Uranus',
    claves: {
      derecho: ['balance', 'reconciliation', 'ambiguity'],
      invertido: ['dishonesty', 'duplicity'],
    },
    presencia:
      'The Powers contain the forces of chaos. Camael holds the ' +
      'balance between opposites: it is equilibrium and reconciliation, but ' +
      'also the ambiguity of those who use any means to reach their end. ' +
      'Ruled by Uranus.',
    derecho:
      'Upright, it represents the search for balance and reconciliation between ' +
      'parties; its shadow side is ambiguity, the end that justifies the ' +
      'means.',
    invertido:
      'Reversed, that murky side takes over: a dishonest person, full of deceit.',
  },
  17: {
    nombre: 'Power Kemuel, mediator between good and evil',
    grupo: 'Powers · Sixth Choir',
    claves: {
      derecho: ['moral balance', 'help', 'discernment'],
      invertido: ['pride', 'refusing advice'],
    },
    presencia:
      'Kemuel stands on the border between right and wrong, seeking ' +
      'the perfect middle ground. He embodies those who try to help others without losing ' +
      'the moral compass.',
    derecho:
      'Upright, it represents someone seeking balance between good and ' +
      'evil, offering their help to others.',
    invertido:
      'Reversed, they believe they are above all judgment and ignore ' +
      'advice: falling into arrogance.',
  },
  18: {
    nombre: 'Potestad Sensiner',
    grupo: 'Powers · Sixth Choir',
    regente: 'Saturn',
    claves: {
      derecho: ['dejection', 'bad habits', 'mistakes'],
      invertido: ['moral losses', 'material losses'],
    },
    presencia:
      'Sensiner is the power of the inner shadow. It embodies a person ' +
      'who is dejected, trapped by bad habits, and prone to mistakes. Ruled by Saturn.',
    derecho:
      'Upright, it describes a depressive mood and a tendency for error that ' +
      'stems from harmful habits.',
    invertido:
      'Reversed, everything worsens: both moral and material losses.',
  },
  // ── Principados · Séptimo Coro ───────────────────────────────────────────
  19: {
    nombre: 'Principality Anael, of Creation and Sensuality',
    grupo: 'Principalities · Seventh Choir',
    signo: 'Capricorn',
    regente: 'Saturn',
    claves: {
      derecho: ['power', 'beauty', 'leadership', 'seduction'],
      invertido: ['arrogance', 'selfishness', 'risk of illness'],
    },
    presencia:
      'Principalities guide nations and those in command. Anael gathers ' +
      'power, beauty, and magnetism: the leadership that attracts and success with the ' +
      'opposite sex. Ruled by Saturn; corresponds to Capricorn.',
    derecho:
      'Upright, it speaks of personal power, physical beauty, and the ability to lead ' +
      'and seduce. Everything that shines and stands out.',
    invertido:
      'Reversed, that shine becomes vanity: selfishness, arrogance, and a risk of ' +
      'illness that should be attended to.',
  },
  20: {
    nombre: 'Principality Hamiel, who transported Enoch to Heaven',
    grupo: 'Principalities · Seventh Choir',
    signo: 'Virgo',
    claves: {
      derecho: ['spiritual guide', 'intelligence', 'wisdom'],
      invertido: ['confusion', 'spiritual abandonment'],
    },
    presencia:
      'Hamiel led Enoch to heaven: he is the guide who elevates. He embodies the ' +
      'spiritual counselor, intelligence united with wisdom. He corresponds ' +
      'to the sign of Virgo.',
    derecho:
      'Upright, he represents the teacher or counselor of the soul, the lucid mind that ' +
      'guides with depth.',
    invertido:
      'Reversed, that light is missing: confusion and a lack of spiritual guidance.',
    encuentros:
      'Next to Lucifer or Rimmon, he may warn of the possibility of a ' +
      'serious illness.',
  },
  21: {
    nombre: 'Principality Cervill, who helped David against Goliath',
    grupo: 'Principalities · Seventh Choir',
    claves: {
      derecho: ['friendship', 'support', 'understanding'],
      invertido: ['loneliness', 'feeling alone'],
    },
    presencia:
      'Cervill gave strength to the small against the giant. He is the friend who ' +
      'appears in the difficult hour: help and understanding when the battle ' +
      'seems lost.',
    derecho:
      'Upright, it represents true friendship, support, and understanding in ' +
      'difficult times.',
    invertido:
      'Reversed, that support is absent: a deep feeling of loneliness.',
  },
  // ── Mensajeros · Octavo Coro ─────────────────────────────────────────────
  22: {
    nombre: 'Dobiel, messenger of divine decrees',
    grupo: 'Messengers · Eighth Choir',
    claves: {
      derecho: ['communication', 'message', 'understanding'],
      invertido: ['crisis', 'confusion of feelings'],
    },
    presencia:
      'Messengers carry the word from heaven to earth. Dobiel brings divine ' +
      'decrees: it is the understanding person who conveys everything ' +
      'through language.',
    derecho:
      'Upright, it announces a message with interesting news and someone who ' +
      'knows how to put it into words and be understood.',
    invertido:
      'Reversed, the message gets tangled: crisis and confusion in feelings.',
  },
  23: {
    nombre: 'Angel Renueco, Messenger',
    grupo: 'Messengers · Eighth Choir',
    claves: {
      derecho: ['legacy', 'end of a stage', 'new beginning'],
    },
    presencia:
      'Renueco announces the changing of the guard. It is the messenger of cycles: ' +
      'what ends so that something new may begin, the legacy received when ' +
      'closing a door.',
    derecho:
      'Upright, it represents a legacy and the end of a stage that gives way to another. ' +
      'It has no reversed reading: the cycle continues its course regardless.',
  },
  24: {
    nombre: 'Angel Sariel, Messenger',
    grupo: 'Messengers · Eighth Choir',
    claves: {
      derecho: ['revelation', 'new ideals', 'heritage'],
      invertido: ['lack of communication', 'silence'],
    },
    presencia:
      'Sariel the Messenger draws back the veils. He brings the discovery of new ' +
      'ideals and the revelation of what was hidden.',
    derecho:
      'Upright, it announces the finding of a new path or the solving of an ' +
      'enigma; it may point to an inheritance.',
    invertido:
      'Reversed, the thread is cut: lack of communication, messages that do ' +
      'not arrive.',
  },
  // ── Noveno Coro ──────────────────────────────────────────────────────────
  25: {
    nombre: 'Physician Zagzagel, the Healing Angel',
    grupo: 'Ninth Choir',
    claves: {
      derecho: ['healing', 'successful treatment', 'health'],
      invertido: ['relapse', 'failed treatment'],
    },
    presencia:
      'Zagzagel is the wisdom that heals. He embodies recovery and the success of ' +
      'a treatment: health restored when the guidance is right.',
    derecho:
      'Upright, it is a favorable sign: healing arrives and the treatment ' +
      'yields results.',
    invertido:
      'Reversed, the opposite: the remedy fails to work and health does not respond.',
  },
  26: {
    nombre: 'Uriel, keeper of the keys',
    grupo: 'Ninth Choir',
    claves: {
      derecho: ['repentance', 'lesson learned', 'learning'],
    },
    presencia:
      'Uriel holds the keys and is both seraph and cherub. He is the Angel ' +
      'of Repentance: the one who shows the price of mistakes and the ' +
      'effort it takes to make amends.',
    derecho:
      'He symbolizes the lessons learned from our actions and the hardships ' +
      'we must endure to move forward. It is not a punishment, but a ' +
      'lesson: the door opens only after you have learned.',
  },
  27: {
    nombre: 'Guardian of the Cities',
    grupo: 'Ninth Choir',
    claves: {
      derecho: ['protection', 'care', 'shelter'],
      invertido: ['vulnerability', 'exposure'],
    },
    presencia:
      'He watches over the city gates: he is the guardian of thresholds, the ' +
      'one who protects what lies within its walls.',
    derecho:
      'Upright, it speaks of protection and care: someone or something is ' +
      'safeguarding your situation.',
    invertido:
      'Reversed, those walls fall: being left without any protection, ' +
      'exposed to the elements.',
  },
  // ── Los Arcángeles ───────────────────────────────────────────────────────
  28: {
    nombre: 'Archangel Michael',
    grupo: 'Archangels',
    claves: {
      derecho: ['justice', 'major changes', 'truth'],
      invertido: ['injustice', 'delays'],
    },
    presencia:
      'Michael, \'he who is like God,\' is the prince of the heavenly hosts, ' +
      'the one who wields the sword of justice. His card marks the great ' +
      'turning points in life, those that set things right.',
    derecho:
      'Upright, it represents justice being served and the major changes ' +
      'that arrive to put everything in its place.',
    invertido:
      'Reversed, the scales tip: injustices and delays in reaching ' +
      'what you seek.',
  },
  29: {
    nombre: 'Archangel Gabriel',
    grupo: 'Archangels',
    regente: 'Neptune',
    claves: {
      derecho: ['subconscious', 'intuition', 'travel', 'discretion'],
      invertido: ['distrust', 'confusion'],
    },
    presencia:
      'Gabriel, the great announcer, governs the world of the hidden and the ' +
      'subconscious. He inhabits the duality of good and evil, the visible and the ' +
      'secret. Ruled by Neptune.',
    derecho:
      'Upright, it speaks of the inner world and dreams, a love for ' +
      'travel and a sharp memory. Delicate situations resolved ' +
      'with discretion; everything linked to mystery.',
    invertido:
      'Reversed, the ground is missing: mistrust, loss of hope, and ' +
      'confusion when it comes to making decisions.',
  },
  30: {
    nombre: 'Archangel Haniel',
    grupo: 'Archangels',
    signo: 'Libra',
    claves: {
      derecho: ['love', 'harmony', 'abundance', 'fertility'],
      invertido: ['frivolity', 'apathy', 'sterility'],
    },
    presencia:
      'Haniel gathers all the beauty of life. It is the grace of Venus made ' +
      'archangel: love, harmony, success, fertility, abundance, and creativity. ' +
      'Corresponds to the sign of Libra.',
    derecho:
      'Upright, it promises goodness on all levels: fulfilling affections, ' +
      'prosperity, and fertile creation.',
    invertido:
      'Reversed, everything becomes superficial: frivolity, apathy toward things, ' +
      'sterility.',
  },
  31: {
    nombre: 'Archangel Raphael',
    grupo: 'Archangels',
    signo: 'Leo',
    regente: 'Sun',
    claves: {
      derecho: ['strength', 'radiance', 'leadership', 'nobility'],
      invertido: ['egocentrism', 'romantic disillusionment'],
    },
    presencia:
      'Raphael, \'God\'s medicine,\' radiates strength and personal brilliance. It is the noble ' +
      'soul born to stand out and be admired, guided by the heart. It is ' +
      'associated with Leo and ruled by the Sun.',
    derecho:
      'Upright, it represents a noble and luminous person, with a gift for command and a desire ' +
      'to shine.',
    invertido:
      'Reversed, that brilliance turns into ego: an egocentric person who always ' +
      'wants their own way, and disillusionment in love.',
    encuentros:
      'Next to Lucifer, both upright, it announces a full and happy sexuality; ' +
      'if either appears reversed, it will not last. Next to the Angel of Judgment, wealth ' +
      'and important friendships.',
  },
  32: {
    nombre: 'Archangel Sariel',
    grupo: 'Archangels',
    signo: 'Pisces',
    claves: {
      derecho: ['mandate', 'guidance', 'fair message', 'healing'],
    },
    presencia:
      'Sariel carries out God\'s command and oversees the fate of the angels who break the law. ' +
      'Also known as a healer, he is a guide and a guardian. ' +
      'of order. It represents the sign of Pisces.',
    derecho:
      'It represents someone who holds control over the lives of others—a priest, a ' +
      'leader—, and also a message that arrives at just the right time. Depending on the ' +
      'cards that accompany it, it heralds the healing of the soul or of ' +
      'emotions.',
  },
  33: {
    nombre: 'Archangel Raguel',
    grupo: 'Archangels',
    claves: {
      derecho: ['advice', 'balance', 'high moral standards', 'celestial guidance'],
      invertido: ['lack of ethics', 'emotional imbalance'],
    },
    presencia:
      'Raguel, angel of the Earth and guardian of the second heaven, is the ' +
      '"friend of God," who led Enoch to the heights. He embodies the ' +
      'balanced person of high moral standing, always ready to help.',
    derecho:
      'Upright, he represents those who advise and support others, as well as ' +
      'the guidance that comes from the stars.',
    invertido:
      'Reversed, one loses their center: a lack of ethics and emotional ' +
      'imbalance.',
  },
  34: {
    nombre: 'Archangel Remiel',
    grupo: 'Archangels',
    claves: {
      derecho: ['mastery', 'triumph', 'revelation'],
      invertido: ['stumbling blocks', 'uncertain future'],
    },
    presencia:
      'Remiel is "the mercy of God," the one who leads souls to the ' +
      'Final Judgment. He embodies self-mastery and a triumphant spirit.',
    derecho:
      'Upright, it speaks of mastery and victory, and may bring the revelation of ' +
      'something hidden or an important message.',
    invertido:
      'Reversed, the path is blocked: stumbling blocks and an uncertain future.',
  },
  35: {
    nombre: 'Archangel Raziel',
    grupo: 'Archangels',
    claves: {
      derecho: ['mysteries', 'spiritual elevation', 'knowledge'],
      invertido: ['danger', 'betrayal', 'distrust'],
    },
    presencia:
      'Raziel guards the supreme secrets: he is the angel of hidden ' +
      'realms and head of the Thrones, who taught Adam earthly and ' +
      'celestial knowledge.',
    derecho:
      'Upright, it signifies spiritual elevation and harmony with the cosmos: being ' +
      'in alignment with a greater order.',
    invertido:
      'Reversed, the shadow opens: danger, betrayal, lack of trust.',
  },
  36: {
    nombre: 'Archangel Metatron',
    grupo: 'Archangels',
    claves: {
      derecho: ['connection with the divine', 'greatness', 'writing', 'genius'],
      invertido: ['abuse of power', 'egocentrism'],
    },
    presencia:
      'Metatron, "the celestial scribe," is the direct link between God and ' +
      'humanity. He embodies strength and greatness, and the word that remains ' +
      'written.',
    derecho:
      'Upright, it announces the appearance of an important writing and the moment ' +
      'when the genius within us awakens; it may point to a writer.',
    invertido:
      'Reversed, greatness is perverted: abuse of power, egocentrism.',
  },
  37: {
    nombre: 'Archangel Amiel',
    grupo: 'Archangels',
    signo: 'Taurus',
    claves: {
      derecho: ['the new', 'changes', 'travels'],
      invertido: ['fear of the unknown', 'withdrawal'],
    },
    presencia:
      'Amiel opens the doors to the unexplored. He embodies the new, changes ' +
      'toward the little-known, and travels. He represents the sign of Taurus.',
    derecho:
      'Upright, it invites you to cross the threshold: changes, discoveries, paths ' +
      'that open up.',
    invertido:
      'Reversed, fear takes over: fear of the unknown, withdrawal in the face of ' +
      'new.',
  },
  // ── Ángeles representativos ──────────────────────────────────────────────
  38: {
    nombre: 'Angels of Death',
    grupo: 'Representative angels',
    signo: 'Scorpio',
    claves: {
      derecho: ['abrupt change', 'breakup', 'transformation'],
      invertido: ['loss', 'failure'],
    },
    presencia:
      'They speak not so much of an end as of a threshold: the Angels of Death mark ' +
      'an abrupt change, what is cut at the root so that something else may be born. ' +
      'They represent the sign of Scorpio.',
    derecho:
      'Upright, it announces a radical change; in a relationship, a breakup. It can ' +
      'also signal a surgical procedure. Rarely is it literal: it is almost ' +
      'always a necessary transformation.',
    invertido:
      'Reversed, loss and failure weigh heavy; depending on the accompanying card, ' +
      'it may point to a physical death.',
    encuentros:
      'With Mastema and Carniveau, black magic. With Abaddon, sexual or cancerous ' +
      'diseases. With Kemuel, the stagnation of a situation, unexpected events, ' +
      'and losses.',
  },
  39: {
    nombre: 'Angels of Battle',
    grupo: 'Representative angels',
    regente: 'Mars',
    claves: {
      derecho: ['conflict', 'betrayal', 'enemies'],
    },
    presencia:
      'They bring the roar of Mars. The Angels of Battle represent misfortune and ' +
      'conflict: enemies, betrayals, and contested ground.',
    derecho:
      'They represent fights, betrayals, and adversaries crossing your path. ' +
      'They have no reversed meaning: a battle is a battle.',
  },
  40: {
    nombre: 'Fairy of Love',
    grupo: 'Representative Angels',
    regente: 'Venus',
    claves: {
      derecho: ['arrival of love', 'stable relationship', 'security'],
      invertido: ['frustration', 'loneliness', 'separation'],
    },
    presencia:
      'With her wand, the Fairy of Love blesses our bonds. It is the promise of ' +
      'Venus: love arriving or security, if it has already arrived.',
    derecho:
      'Upright, it announces the arrival of love and a happy, stable relationship.',
    invertido:
      'Reversed, the spell is broken: frustration in love, loneliness, ' +
      'separation.',
  },
  41: {
    nombre: 'Fairy of Abundance',
    grupo: 'Representative Angels',
    regente: 'Sun',
    claves: {
      derecho: ['prosperity', 'material luck', 'ease'],
      invertido: ['achievement through effort', 'uphill battle'],
    },
    presencia:
      'The Fairy of Abundance sheds the Sun\'s light upon the material realm. ' +
      'It embodies financial stability and good fortune in material goods.',
    derecho:
      'Upright, it represents ease and prosperity: things are fruitful and ' +
      'sufficient.',
    invertido:
      'Reversed, what you desire still arrives, but only through hard work: nothing falls ' +
      'from the sky.',
  },
  42: {
    nombre: 'Fairy of Birth',
    grupo: 'Representative angels',
    regente: 'Moon',
    claves: {
      derecho: ['birth', 'good omen', 'new life'],
      invertido: ['problems', 'interruption'],
    },
    presencia:
      'Under the influence of the Moon, the Fairy of Birth announces the arrival of ' +
      'a child and touches them with her wand to ensure all goes well.',
    derecho:
      'Upright, it foretells the birth of a child and a protected path toward that ' +
      'arrival.',
    invertido:
      'Reversed, problems arise: complications or an interruption in the ' +
      'process.',
  },
  43: {
    nombre: 'Gnome of Work',
    grupo: 'Representative angels',
    signo: 'Taurus',
    claves: {
      derecho: ['reward', 'new job', 'promotion'],
      invertido: ['work problems', 'obstacles'],
    },
    presencia:
      'The Work Gnome rewards the effort made with your own hands. ' +
      'It represents the good results that arrive when you have worked ' +
      'steadily. It is associated with Taurus.',
    derecho:
      'Upright, it announces the fruits of your labor: a new job or a ' +
      'salary increase.',
    invertido:
      'Reversed, it points to problems at work.',
  },
  44: {
    nombre: 'Mischievous Gnome',
    grupo: 'Representative angels',
    signo: 'Sagittarius',
    claves: {
      derecho: ['fun', 'hobbies', 'mischief'],
    },
    presencia:
      'The Mischievous Gnome is the playful spirit of Sagittarius. Depending ' +
      'on where it lands, it represents fun and hobbies... or the trouble ' +
      'the seeker gets into.',
    derecho:
      'It speaks of hobbies and entertainment, or the entanglements one ' +
      'brings upon oneself. It is read by the house where it appears.',
  },
  45: {
    nombre: 'Little Ghost of Jealousy',
    grupo: 'Representative angels',
    signo: 'Gemini',
    claves: {
      derecho: ['jealousy', 'insecurity', 'anguish'],
      invertido: ['well-founded suspicion'],
    },
    presencia:
      'The Little Ghost of Jealousy haunts the insecure heart. It embodies jealousy ' +
      'and the anguish it can lead to. It corresponds to Gemini.',
    derecho:
      'Upright, it points to jealousy and insecurities that gnaw away and steal your peace.',
    invertido:
      'Reversed, those suspicions may have a real foundation: something of what ' +
      'you fear is true.',
  },
  46: {
    nombre: 'Angel Cupid',
    grupo: 'Representative angels',
    signo: 'Gemini',
    claves: {
      derecho: ['love', 'passion', 'union', 'marriage'],
      invertido: ['separation', 'infidelity'],
    },
    presencia:
      'Cupid draws the bow of desire. It is love on the physical plane, the ' +
      'passionate balance between two: the card of union and marriage.',
    derecho:
      'Upright, it represents requited love, passion, and a union ' +
      'that is sealed.',
    invertido:
      'Reversed, it breaks: separation, romantic frustration, infidelity.',
  },
  47: {
    nombre: 'Ancient of Days',
    grupo: 'Representative angels',
    signo: 'Virgo',
    claves: {
      derecho: ['common sense', 'serenity', 'foresight'],
      invertido: ['misconceptions', 'confusion'],
    },
    presencia:
      'The Ancient of Days is the voice of prudence. It embodies the common ' +
      'sense and serenity needed to resolve matters well. It corresponds to Virgo.',
    derecho:
      'Upright, it advises calm and foresight before deciding; in health, it ' +
      'indicates that the solution to the problem is within reach.',
    invertido:
      'Reversed, that light is missing: misconceptions, misunderstanding, darkness.',
  },
  48: {
    nombre: 'Paradise',
    grupo: 'Representative angels',
    claves: {
      derecho: ['peace', 'joy', 'fulfillment', 'good health'],
      invertido: ['cancelled plans', 'loneliness', 'failure'],
    },
    presencia:
      'Paradise is the garden of the calm soul. It represents peace of ' +
      'spirit, joy, and good omens.',
    derecho:
      'Upright, it promises happy relationships, fulfillment, altruism, and good ' +
      'health; for an artist, achievement in their craft.',
    invertido:
      'Reversed, the garden closes: cancelled plans, a bleak future, ' +
      'solitude, setbacks.',
  },
  49: {
    nombre: 'Angel of Judgment',
    grupo: 'Representative angels',
    signo: 'Scorpio',
    regente: 'Pluto',
    claves: {
      derecho: ['consciousness', 'new stage', 'stability'],
      invertido: ['misguided judgments', 'blindness'],
    },
    presencia:
      'The Angel of Judgment awakens cosmic consciousness. It marks the beginning ' +
      'of a new stage on the mental plane, like someone gathering and organizing all ' +
      'they have learned. It is ruled by Pluto; it represents Scorpio.',
    derecho:
      'Upright, it speaks of gathering and understanding, of stability in both ' +
      'the good and the bad: seeing the whole picture with clarity.',
    invertido:
      'Reversed, it is impossible to read the facts: misguided judgments, ' +
      'erroneous conclusions.',
  },
  50: {
    nombre: 'Solar Angel',
    grupo: 'Representative angels',
    signo: 'Leo',
    claves: {
      derecho: ['success', 'light', 'health', 'beauty'],
      invertido: ['solitude', 'cancelled plans'],
    },
    presencia:
      'The Solar Angel is the fullness of light. It represents peace of spirit, ' +
      'success, and clarity. It corresponds to the sign of Leo.',
    derecho:
      'Upright, it promises happy relationships, sincerity, deep feelings, ' +
      'excellent health, and physical beauty.',
    invertido:
      'Reversed, the sun dims: loneliness, cancelled plans, a bleak future.',
  },
  51: {
    nombre: 'Lunar Angel',
    grupo: 'Representative Angels',
    signo: 'Cancer',
    claves: {
      derecho: ['imagination', 'inspiration', 'nervous sensitivity'],
      invertido: ['mirages', 'passivity', 'doubts'],
    },
    presencia:
      'The Lunar Angel dwells in the tide of imagination. It inspires, but also ' +
      'confuses; it illuminates the soul and stirs the nerves. It represents Cancer.',
    derecho:
      'Upright, it is a spirit inspired in the mental realm; in work, it warns of ' +
      'bad influences and illusions; in health, nervous system disorders.',
    invertido:
      'Reversed, the fog takes over: mirages, passivity, doubts.',
  },
  52: {
    nombre: 'Angel of Illness',
    grupo: 'Representative Angels',
    regente: 'Saturn',
    claves: {
      derecho: ['low spirits', 'poor health', 'effort to heal'],
      invertido: ['apathy', 'lack of motivation'],
    },
    presencia:
      'The Angel of Illness brings the weight of Saturn upon the body and the ' +
      'spirit. It speaks of decline, but also that with willpower it can be overcome.',
    derecho:
      'Upright, it points to depression, low energy, and fragile health, which with effort ' +
      'and a positive mindset can be turned around.',
    invertido:
      'Reversed, the strength to move forward is missing: apathy and a lack of motivation ' +
      'to overcome this rough patch.',
  },
  53: {
    nombre: 'Angel of Justice',
    grupo: 'Representative angels',
    signo: 'Libra',
    claves: {
      derecho: ['balance', 'sound advice', 'balance'],
      invertido: ['indecision', 'loss', 'disorder'],
    },
    presencia:
      'The Angel of Justice holds the scales of Libra. It represents the ' +
      'Balance in life and advice that hits the mark.',
    derecho:
      'Upright, it speaks of balance and sound judgment; in relationships, it ' +
      'may signal a divorce settled with justice; in health, a state of ' +
      'balanced.',
    invertido:
      'Reversed, the scales tip: indecision, disorder, loss, and the ' +
      'risk of falling prey to someone cunning.',
  },
  54: {
    nombre: 'The Ogim of the Waters',
    grupo: 'Representative angels',
    signo: 'Scorpio',
    claves: {
      derecho: ['sensitivity', 'spiritual protection', 'friendship'],
      invertido: ['depression', 'withdrawing protection'],
    },
    presencia:
      'The Ogim of the Waters is the spirit of a woman with a water sign: ' +
      'balanced, sensitive, and understanding. She offers friendship and spiritual shelter. ' +
      'Corresponds to Scorpio.',
    derecho:
      'Upright, she represents that protective and understanding presence, a friendship ' +
      'that cares for the soul.',
    invertido:
      'Reversed, protection withdraws and depression emerges.',
  },
  55: {
    nombre: 'Angel Star',
    grupo: 'Representative angels',
    signo: 'Aquarius',
    claves: {
      derecho: ['hope', 'inspiration', 'harmony'],
      invertido: ['frustrated illusions', 'disappointment'],
    },
    presencia:
      'The Angel Star is the guiding star. She embodies a spirit full of ' +
      'hope and the inspiration that shows the way. She represents Aquarius.',
    derecho:
      'Upright, she speaks of hope, balance, order, and harmony in action, and ' +
      'inspiration in art.',
    invertido:
      'Reversed, The Star is clouded: unmet hopes, disappointment, ' +
      'opportunities that do not arrive.',
  },
  56: {
    nombre: 'Angel of Masculine Love',
    grupo: 'Representative angels',
    signo: 'Scorpio',
    claves: {
      derecho: ['love that arrives', 'suitor', 'proposal'],
      invertido: ['disappointment', 'ended love'],
    },
    presencia:
      'The Angel of Masculine Love announces the one who arrives: the suitor, the ' +
      'marriage proposal. Represents the sign of Scorpio.',
    derecho:
      'Upright, it is love that approaches and declares itself; it may bring a ' +
      'formal proposal.',
    invertido:
      'Reversed, disappointment: a finished love, a disillusioned man.',
  },
  57: {
    nombre: 'Angel of Feminine Love',
    grupo: 'Representative angels',
    signo: 'Pisces',
    claves: {
      derecho: ['woman in love', 'beginning of a relationship', 'marriage'],
      invertido: ['unrequited love', 'disappointment'],
    },
    presencia:
      'The Angel of Feminine Love is the woman in love, the beginning of a ' +
      'connection to the future. Represents Pisces.',
    derecho:
      'Upright, it heralds the start of a relationship and the possibility of ' +
      'marriage.',
    invertido:
      'Reversed, love finds no echo: disappointment, unrequited ' +
      'feelings.',
  },
  58: {
    nombre: 'Angel of Envy',
    grupo: 'Representative angels',
    signo: 'Aquarius',
    claves: {
      derecho: ['envy', 'jealousy', 'spite'],
      invertido: ['heightened envy'],
    },
    presencia:
      'The Angel of Envy thickens the air around you. It embodies a malicious ' +
      'person, driven by jealousy and spite. Represents Aquarius.',
    derecho:
      'Upright, it points to envy and jealousy that sicken the spirit: depression and ' +
      'resentment.',
    invertido:
      'Reversed, everything worsens: those traits become even more pronounced.',
  },
  59: {
    nombre: 'Angel of Sacrifice',
    grupo: 'Representative angels',
    regente: 'Neptune',
    claves: {
      derecho: ['renunciation', 'transition', 'emotional indecision'],
      invertido: ['uneven success', 'achievement without satisfaction'],
    },
    presencia:
      'The Angel of Sacrifice asks you to let go in order to move forward. Under the influence of ' +
      'Neptune, it marks a time of renunciation and transition, especially in ' +
      'your emotional life.',
    derecho:
      'Upright, it speaks of hesitation and indecision in your feelings, stalled ' +
      'projects, and neglect; in health, possible circulatory issues. It is ' +
      'a pause before moving on.',
    invertido:
      'Reversed, there is a possibility of success, though uneven: it arrives, ' +
      'but does not bring the expected satisfaction, even less so in romance.',
  },
  60: {
    nombre: 'Angel of Children',
    grupo: 'Representative Angels',
    signo: 'Cancer',
    claves: {
      derecho: ['children', 'good health', 'offspring'],
      invertido: ['consult a doctor', 'attention'],
    },
    presencia:
      'The Angel of Children speaks of the querent\'s offspring: the ' +
      'children who are already here or those who may arrive. Represents Cancer.',
    derecho:
      'Upright, it alludes to children in good health; read according to the cards ' +
      'that accompany it and the house where it falls.',
    invertido:
      'Reversed, it is advisable to pay attention to health and consult a doctor.',
  },
  61: {
    nombre: 'Angel of Ascension',
    grupo: 'Representative angels',
    claves: {
      derecho: ['spiritual elevation', 'wisdom', 'evolution'],
      invertido: ['spiritual deafness', 'negativity'],
    },
    presencia:
      'The Angel of Ascension urges you upward. It embodies the desire to ' +
      'rise, wisdom, and the evolution of the soul.',
    derecho:
      'Upright, it speaks of spiritual growth, positive feelings, and a ' +
      'path of evolution.',
    invertido:
      'Reversed, that call is ignored: negative feelings, refusing to ' +
      'ascend.',
  },
  62: {
    nombre: 'Angel of the Masculine Throne',
    grupo: 'Representative angels',
    regente: 'Venus',
    claves: {
      derecho: ['common sense', 'hope', 'balance', 'beauty'],
      invertido: ['entanglements', 'conflicts', 'delays'],
    },
    presencia:
      'The Angel of the Masculine Throne represents a woman of practical ' +
      'knowledge, with common sense to solve issues. It is a card of hope and ' +
      'balance; it often points to a married woman. Ruled by Venus.',
    derecho:
      'Upright, it speaks of good judgment, physical beauty, and stability: ' +
      'someone firm and balanced to lean on.',
    invertido:
      'Reversed, entanglements and conflicts appear, along with delays in ' +
      'challenges.',
  },
  63: {
    nombre: 'Angel of the Feminine Throne',
    grupo: 'Representative angels',
    signo: 'Aries',
    claves: {
      derecho: ['intelligence', 'peace', 'material power', 'authority'],
      invertido: ['disorder', 'loss of authority'],
    },
    presencia:
      'The Angel of the Feminine Throne leads with the mind. It represents ' +
      'spiritual control through intelligence and balance, as well as ' +
      'material power and authority. It corresponds to Aries.',
    derecho:
      'Upright, it speaks of peace, harmony, assets, and calm leadership; ' +
      'in health, balance.',
    invertido:
      'Reversed, the opposite: disorder and crumbling authority.',
  },
  64: {
    nombre: 'Sexual Grigori',
    grupo: 'Representative angels',
    signo: 'Taurus',
    claves: {
      derecho: ['desire', 'passion', 'adventure', 'attraction'],
      invertido: ['emptiness', 'loneliness after the impulse'],
    },
    presencia:
      'The Grigori are the watchers who gazed too long at the earth. The ' +
      'Sexual Grigori embodies success achieved through physical beauty: ' +
      'desire, passion, and fleeting adventure. It corresponds to Taurus.',
    derecho:
      'Upright, it represents the magnetism and passion that open doors, the ' +
      'adventure that ignites.',
    invertido:
      'Reversed, letting yourself be swept away by those passions leaves ' +
      'emptiness and loneliness when the fire fades.',
  },
  65: {
    nombre: 'Grigori of Material Power',
    grupo: 'Representative angels',
    signo: 'Aries',
    claves: {
      derecho: ['ambition', 'material luck', 'cunning'],
      invertido: ['poor management', 'losses'],
    },
    presencia:
      'The Grigori of Material Power embodies the ambitious and calculating ' +
      'person who seeks to profit from every situation. It corresponds to ' +
      'Aries.',
    derecho:
      'Upright, it speaks of material luck achieved through cunning and drive.',
    invertido:
      'Reversed, greed turns against you: material problems due to ' +
      'mismanagement.',
  },
  66: {
    nombre: 'Grigori of Power and Strength',
    grupo: 'Representative angels',
    signo: 'Leo',
    claves: {
      derecho: ['success', 'tenacity', 'business', 'energy'],
      invertido: ['apathy', 'passivity'],
    },
    presencia:
      'The Grigori of Power and Strength achieves through drive and tenacity. It radiates ' +
      'activity and never stops. Corresponds to Leo.',
    derecho:
      'Upright, it announces successes achieved with strength and consistency, favorable ' +
      'business, and good health; in feelings, more effusive than affectionate.',
    invertido:
      'Reversed, the engine stalls: apathy, lack of activity, passivity.',
  },
  // ── Ángeles negativos, al mando de Lucifer ───────────────────────────────
  67: {
    nombre: 'Lucifer',
    grupo: 'Negative Angels · under the command of Lucifer',
    signo: 'Capricorn',
    claves: {
      derecho: ['illicit power', 'lust', 'selfishness'],
      invertido: ['everything aggravated', 'contempt for others'],
    },
    presencia:
      'Lucifer, the fallen one, leads the negative angels. He represents the ' +
      'power of the material and successes achieved illegally and of short ' +
      'duration. Corresponds to Capricorn.',
    derecho:
      'Upright, it speaks of lust, selfishness, purely sexual desire, and ' +
      'achievements that shine but do not last; it may point to children born ' +
      'out of wedlock.',
    invertido:
      'Reversed, everything worsens, as the foundation is already flawed: someone who does not ' +
      'respect others, disobedience, excess.',
    encuentros:
      'Next to the Angel of Death, impotence or sexual issues. Next to the ' +
      'Angel of Children, that they are illegitimate.',
  },
  68: {
    nombre: 'Abaddon, the Prince of the Locusts',
    grupo: 'Negative angels · under Lucifer\'s command',
    signo: 'Sagittarius',
    claves: {
      derecho: ['letting yourself go', 'insecurity', 'obstacles'],
      invertido: ['attempt at self-improvement'],
    },
    presencia:
      'Abaddon, lord of the abyss, embodies the person who lets themselves be ' +
      'carried by the current. Corresponds to Sagittarius.',
    derecho:
      'Upright, it speaks of difficulties in resolving matters, of insecurity, and of letting ' +
      'things happen without taking the reins.',
    invertido:
      'Reversed, an attempt at self-improvement appears: the will to bounce back.',
  },
  69: {
    nombre: 'Samael, the Angel of Temptation',
    grupo: 'Negative angels · under Lucifer\'s command',
    signo: 'Aries',
    claves: {
      derecho: ['vices', 'temptation', 'night'],
      invertido: ['turning away from temptation'],
    },
    presencia:
      'Samael whispers in your ear what is best left unheard. He embodies the person of ' +
      'many vices, drawn to the night and to passions that are hard to ' +
      'resist. Corresponds to Aries.',
    derecho:
      'Upright, it speaks of temptations and excesses, of nights out and the ' +
      'desire that pulls you in.',
    invertido:
      'Reversed, the effort to distance yourself from those temptations.',
  },
  70: {
    nombre: 'Mastema, the Sorcerer Angel',
    grupo: 'Negative Angels · under Lucifer\'s command',
    signo: 'Virgo',
    claves: {
      derecho: ['hostility', 'adversity', 'spell'],
      invertido: ['black magic', 'madness'],
    },
    presencia:
      'Mastema is the one who works magic. It is best to read this card by looking at what ' +
      'appears to its right and left, as its meaning depends on that. ' +
      'Corresponds to Virgo.',
    derecho:
      'Alone, it represents hostility and adversity: an atmosphere against you.',
    invertido:
      'Reversed, it darkens completely: black magic, misuse of mental ' +
      'powers, madness.',
  },
  71: {
    nombre: 'Carniveau, the Prince of Wolves',
    grupo: 'Negative Angels · under Lucifer\'s command',
    signo: 'Cancer',
    claves: {
      derecho: ['black magic', 'hatred', 'instability'],
      invertido: ['fleeting achievements', 'deterioration of health'],
    },
    presencia:
      'Carniveau leads the pack. It represents dark magic and a person ' +
      'of unstable character, marked by hatred and promiscuity. ' +
      'Corresponds to Cancer.',
    derecho:
      'Upright, it speaks of deep hostility, instability, and ' +
      'disordered bonds.',
    invertido:
      'Reversed, material achievements that are short-lived; in health, ' +
      'deterioration and infections.',
  },
  72: {
    nombre: 'Mammon, the Angel of Avarice and Greed',
    grupo: 'Negative Angels · under Lucifer\'s command',
    claves: {
      derecho: ['avarice', 'greed', 'scam'],
      invertido: ['results that do not arrive', 'victim of oneself'],
    },
    presencia:
      'Mammon is the hunger that is never satisfied. It embodies avarice and greed, ' +
      'the temptation of money and material value.',
    derecho:
      'Upright, it points to greed and the swindler, who measures everything ' +
      'in terms of profit.',
    invertido:
      'Reversed, that avidity bears no fruit: they do not get what they seek, ' +
      'a victim of their own temptations.',
  },
  73: {
    nombre: 'Kemuel, the one who prevented the delivery of the Torah to Moses',
    grupo: 'Negative Angels · under Lucifer\'s command',
    regente: 'Mars',
    claves: {
      derecho: ['adversity', 'delays', 'ill intentions'],
      invertido: ['it will be achieved, but later'],
    },
    presencia:
      'Kemuel is the one who blocks the path. It represents adversity, delays, and ' +
      'the conditions that stand in the way, sometimes due to the ill intentions of ' +
      'others toward the querent. It is ruled by Mars.',
    derecho:
      'Upright, it speaks of unexpected events that delay goals and, in ' +
      'health, of stagnation.',
    invertido:
      'Reversed, everything will still be achieved, even if it takes longer than ' +
      'desired.',
  },
  74: {
    nombre: 'Adramelech, the Angel King of Fire',
    grupo: 'Negative Angels · under Lucifer\'s command',
    claves: {
      derecho: ['anxiety', 'anguish', 'delicate health'],
      invertido: ['extreme anguish', 'mental illness'],
    },
    presencia:
      'Adramelech reigns over the fire that consumes from within. It embodies ' +
      'anxiety, anguish, and mood disturbances.',
    derecho:
      'Upright, it speaks of restlessness and unease; in health, a delicate ' +
      'state that involves suffering.',
    invertido:
      'Reversed, everything intensifies, bordering on mental illness.',
  },
  75: {
    nombre: 'Dubbiel, the Angel of Pride',
    grupo: 'Negative Angels · under Lucifer\'s command',
    claves: {
      derecho: ['pride', 'arrogance', 'wounded self-love'],
      invertido: ['overcoming pride'],
    },
    presencia:
      'Dubbiel hardens the heart with pride. It embodies a self-love so ' +
      'pronounced that it blocks the expression of noble feelings.',
    derecho:
      'Upright, it speaks of arrogance and pride that isolate; in health, poor ' +
      'circulation and hardening of the arteries.',
    invertido:
      'Reversed, the sign is good: you are capable of overcoming those ' +
      'negative feelings.',
  },
  76: {
    nombre: 'Rimmon, the Angel of Lightning and Storms',
    grupo: 'Negative Angels · under Lucifer\'s command',
    signo: 'Libra',
    claves: {
      derecho: ['breakup', 'fights', 'accidents'],
      invertido: ['temporary breakups', 'minor accidents'],
    },
    presencia:
      'Rimmon unleashes the lightning. It represents breakups, fights, and ' +
      'frustrations in love or among friends, and accidents. It corresponds to ' +
      'Libra.',
    derecho:
      'Upright, it announces fractures, clashes, and blows of fortune.',
    invertido:
      'Reversed, the storm subsides: temporary breakups, minor accidents.',
  },
  77: {
    nombre: 'Moloch, the one who sacrifices children in the bonfire',
    grupo: 'Negative Angels · under Lucifer\'s command',
    signo: 'Sagittarius',
    claves: {
      derecho: ['lies', 'mistreatment', 'corruption'],
    },
    presencia:
      'Moloch is unscrupulous cruelty. It represents lies, mistreatment, and ' +
      'cunning used to cause harm. It corresponds to ' +
      'Sagittarius.',
    derecho:
      'It speaks of deception, abuse, corruption, and an unscrupulous person; ' +
      'it may refer to an abortion. It has no reversed reading: its shadow is absolute.',
  },
  78: {
    nombre: 'Malchi Dael',
    grupo: 'Negative angels · under Lucifer\'s command',
    signo: 'Aries',
    regente: 'Mars',
    claves: {
      derecho: ['manipulation', 'unscrupulous seduction', 'spell'],
      invertido: ['failed goals', 'depression'],
    },
    presencia:
      'Malchi Dael stops at nothing to gain love or favors from the opposite ' +
      'sex, even resorting to black magic. It corresponds to Aries and ' +
      'is ruled by Mars.',
    derecho:
      'Upright, it speaks of stratagems and manipulation to get what you ' +
      'desire from another.',
    invertido:
      'Reversed, those schemes fail and do not reach their goal, leaving ' +
      'depression in their wake.',
  },
};
