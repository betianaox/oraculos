// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { Carta, BaseCartas } from '../types';

// Significados en REDACCION PROPIA: parafrasean el sentido del folleto del Tarot
// Egipcio sin copiarlo literal. Español neutro, sin voseo.
// Por ahora: los 22 arcanos mayores (1..22). Los menores (23..78) se agregan luego.

const MAYORES: Carta[] = [
  {
    numero: 1,
    nombre: 'The Magician',
    arcano: 'mayor',
    esencia: 'The creative spirit.',
    claves: ['creative power', 'skill', 'willpower', 'confidence'],
    derecho:
      'The ability to direct one\'s power toward what is needed and achieve ' +
      'results. Skill, cunning, and firm willpower; self-confidence and a ' +
      'steady hand to bring things to fruition.',
    invertido:
      'Power without a channel: weak will, indecision, and insecurity. The ' +
      'same skill, used for misguided ends or wasted due to a lack of direction.',
    astro: 'Sun in Leo: creativity, spontaneity, and a calling to help.',
    hebrea: 'Aleph: the unfathomable principle of life and death.',
    numerologia: 1,
  },
  {
    numero: 2,
    nombre: 'The High Priestess',
    arcano: 'mayor',
    esencia: 'The mystery before the unknown.',
    claves: ['wisdom', 'intuition', 'serenity', 'foresight'],
    derecho:
      'Serene wisdom and common sense; keen intuition and the ability to see beyond ' +
      'the obvious. Experience and a deep understanding of things.',
    invertido:
      'Superficial knowledge, failing to reach the depths. Ignorance, selfishness, or ' +
      'false pride that confuses the apparent with the true.',
    astro: 'Moon in Cancer: sensitivity and the inner world.',
    hebrea: 'Beth: enlightenment.',
    numerologia: 2,
  },
  {
    numero: 3,
    nombre: 'The Empress',
    arcano: 'mayor',
    esencia: 'The fertile and intuitive spirit.',
    claves: ['fertility', 'abundance', 'progress', 'practical sense'],
    derecho:
      'Fertility and abundance: projects coming to fruition, progress, and material ' +
      'creation. The figure who nurtures and sustains, with intuition and practical ' +
      'sense to make decisions.',
    invertido:
      'Sterility and inactivity: things that do not take root, material losses, ' +
      'infidelity, or stagnation. Creative energy that fails to materialize.',
    astro: 'Jupiter in Sagittarius: optimism and expansion.',
    hebrea: 'Gimel: dynamism and movement.',
    numerologia: 3,
  },
  {
    numero: 4,
    nombre: 'The Emperor',
    arcano: 'mayor',
    esencia: 'The spirit of authority.',
    claves: ['authority', 'stability', 'control', 'strength'],
    derecho:
      'Authority and control with a firm foundation: capability, confidence, and ' +
      'stability to reach goals. The figure who organizes, protects, and sustains.',
    invertido:
      'Immaturity and dependency: lack of firmness, inability to master petty ' +
      'emotions, authority that crumbles or turns into rigidity.',
    astro: 'Uranus in Aquarius: independence and innovation.',
    hebrea: 'Daleth: power.',
    numerologia: 4,
  },
  {
    numero: 5,
    nombre: 'The Hierophant',
    arcano: 'mayor',
    esencia: 'The spirit of the conventional.',
    claves: ['tradition', 'inspiration', 'prudence', 'teaching'],
    derecho:
      'Adherence to established norms and tradition: ritual, order, kindness, and prudence. ' +
      'Inspiration and guidance within the known, sometimes with shyness or limited openness.',
    invertido:
      'Breaking from the conventional: originality and openness to the new. Also ' +
      'fragility, susceptibility, or difficulty in standing one\'s ground.',
    astro: 'Mercury in Virgo: analysis and discernment.',
    hebrea: 'He: universal life.',
    numerologia: 5,
  },
  {
    numero: 6,
    nombre: 'The Lovers',
    arcano: 'mayor',
    esencia: 'The spirit facing a choice of the heart.',
    claves: ['love', 'choice', 'beauty', 'longing'],
    derecho:
      'Responsible and sincere love, altruism, and beauty; perhaps a romance is beginning. ' +
      'The choice between love that elevates and love that binds, between what is within ' +
      'and what is without.',
    invertido:
      'Irresponsible love: caprice, infidelity, breakup, or interference from ' +
      'third parties. Imprudent plans driven by passion rather than judgment.',
    astro: 'Venus in Taurus: beauty and affection.',
    hebrea: 'Vau: natural law.',
    numerologia: 6,
  },
  {
    numero: 7,
    nombre: 'The Chariot',
    arcano: 'mayor',
    esencia: 'The victorious spirit.',
    claves: ['victory', 'triumph', 'overcoming', 'advancement'],
    derecho:
      'Victory and recognition: overcoming adversity, defeating those who opposed you, ' +
      'and breaking free from scarcity. A drive that moves forward and clears the path.',
    invertido:
      'Defeat or failure: unfulfilled desires, scarcity, and frustration. An impulse ' +
      'that loses control or crashes against its own limits.',
    astro: 'Neptune in Pisces: sensitivity and idealism.',
    hebrea: 'Zayin: the triumph that opens all possibilities.',
    numerologia: 7,
  },
  {
    numero: 8,
    nombre: 'Justice',
    arcano: 'mayor',
    esencia: 'The balanced spirit.',
    claves: ['fairness', 'harmony', 'honor', 'fair reward'],
    derecho:
      'Fair reward and balance: harmony, equity, and honor. Good intentions ' +
      'bearing fruit, and a favorable outcome in legal and financial matters.',
    invertido:
      'Injustice and imbalance: ingratitude, harsh judgment, or abuse. A skewed ' +
      'outcome, legal or financial, when the scales tip too far.',
    astro: 'Saturn in Capricorn: prudence and sacrifice.',
    hebrea: 'Jeth: understanding.',
    numerologia: 8,
  },
  {
    numero: 9,
    nombre: 'The Hermit',
    arcano: 'mayor',
    esencia: 'The guiding spirit.',
    claves: ['wisdom', 'prudence', 'introspection', 'counsel'],
    derecho:
      'Inner light and sound advice: prudence, wisdom, and caution. The figure who ' +
      'withdraws to understand and holds a knowledge that illuminates the path.',
    invertido:
      'Solitude and darkness: poor judgment, haste, reckless advice, or an ' +
      'isolation that traps rather than clarifies.',
    astro: 'Mars in Aries: impulse and struggle.',
    hebrea: 'Teth: the impenetrable.',
    numerologia: 9,
  },
  {
    numero: 10,
    nombre: 'The Wheel of Fortune',
    arcano: 'mayor',
    esencia: 'The spirit facing destiny.',
    claves: ['favorable turn', 'luck', 'change', 'cycle'],
    derecho:
      'A favorable turn of fate: success, unexpected luck, and happiness that arrives ' +
      'without being sought. Progress and opportunity opening up suddenly.',
    invertido:
      'The wheel descending: failure, ups and downs, monotony, or setbacks due to ' +
      'unforeseen causes. What goes awry when the cycle changes sign.',
    astro: 'Pluto in Scorpio: intense endings and beginnings.',
    hebrea: 'Iod: compensation, the law of return.',
    numerologia: 1,
  },
  {
    numero: 11,
    nombre: 'Strength',
    arcano: 'mayor',
    esencia: 'The spirit that masters and overcomes obstacles.',
    claves: ['moral strength', 'courage', 'determination', 'mastery'],
    derecho:
      'Self-mastery and moral strength: courage, conviction, energy, and ' +
      'determination to overcome obstacles. The ethical firmness that conquers without ' +
      'losing its composure.',
    invertido:
      'Moral weakness or abuse of power: pettiness, tyranny, lack of faith. Strength ' +
      'that turns against itself or fades when put to the test.',
    astro: 'Sun in Aries: strength still seeking its wisdom.',
    hebrea: 'Kaph: the firmness to face whatever comes.',
    numerologia: 2,
  },
  {
    numero: 12,
    nombre: 'The Apostolate',
    arcano: 'mayor',
    esencia: 'The spirit that sacrifices and renounces.',
    claves: ['sacrifice', 'renunciation', 'pause', 'readjustment'],
    derecho:
      'Renunciation and sacrifice: a life on hold, a pause to readjust and ' +
      'improve. Accepting to let go of something today to gain clarity and meaning later.',
    invertido:
      'Avoided or useless sacrifice: selfishness, arrogance, lack of commitment. Staying ' +
      'in comfort or false promises instead of releasing what is necessary.',
    astro: 'Moon in Taurus: tension between law and custom.',
    hebrea: 'Lamed: sacrifice and self-control.',
    numerologia: 3,
  },
  {
    numero: 13,
    nombre: 'Death',
    arcano: 'mayor',
    esencia: 'The spirit in renewal.',
    claves: ['transformation', 'ending', 'change', 'renewal'],
    derecho:
      'Profound transformation: the end of a stage that, though painful, makes way for ' +
      'something new. An inevitable change that renews from the roots.',
    invertido:
      'Stagnation: apathy, immobility, delayed changes. Holding on with ' +
      'rigid judgment to what has already completed its cycle.',
    astro: 'Mercury in Gemini: the water that heals and purifies.',
    numerologia: 4,
  },
  {
    numero: 14,
    nombre: 'Temperance',
    arcano: 'mayor',
    esencia: 'The spirit that moderates and adapts.',
    claves: ['moderation', 'patience', 'harmony', 'balance'],
    derecho:
      'Moderation and patience: inner peace, good management, and harmony. The ' +
      'ability to combine and adapt, with confidence and good omens.',
    invertido:
      'Discord and impatience: conflict, lack of adaptation, frustration. When ' +
      'the parts do not integrate and the balance is broken.',
    astro: 'Jupiter in Cancer: correspondence and protection.',
    hebrea: 'Nun: the universal condensed into the concrete.',
    numerologia: 5,
  },
  {
    numero: 15,
    nombre: 'The Devil',
    arcano: 'mayor',
    esencia: 'The chained spirit.',
    claves: ['bonds', 'material attachment', 'guilt', 'liberation'],
    derecho:
      'Bonds, sometimes sought: slavery to the material, guilt, violence, or ' +
      'self-punishment. A lack of direction that turns into self-destruction.',
    invertido:
      'Breaking free from chains: healing, moving from the purely physical to the spiritual, and ' +
      'overcoming obstacles that seemed impossible. The truce after confinement.',
    astro: 'Neptune in Leo: vibration and enchantment.',
    hebrea: 'Samekh: fertility in its hidden face.',
    numerologia: 6,
  },
  {
    numero: 16,
    nombre: 'Fragility',
    arcano: 'mayor',
    esencia: 'The spirit in the face of catastrophe.',
    claves: ['abrupt change', 'collapse', 'breakup', 'unexpected event'],
    derecho:
      'An abrupt and sudden change: collapse, rupture, unexpected events. The ' +
      'sudden loss of money, a bond, or a security that seemed firm.',
    invertido:
      'The latent collapse: a danger that is postponed, an oppression that lingers, ' +
      'the routine that imprisons instead of bursting.',
    astro: 'Mercury in Virgo: the mind put to the test.',
    hebrea: 'Ayin: vigilance and the transient.',
    numerologia: 7,
  },
  {
    numero: 17,
    nombre: 'Hope',
    arcano: 'mayor',
    esencia: 'The spirit full of hope.',
    claves: ['faith', 'hope', 'inspiration', 'optimism'],
    derecho:
      'Faith and hope: inspiration, good health, spiritual love, and idealism. ' +
      'Bright perspectives that renew your desire to keep going.',
    invertido:
      'Pessimism and doubt: stubbornness, unfulfilled hopes, disappointment. The light that ' +
      'fades when faith is lost.',
    astro: 'Saturn in Libra: faith put to the test.',
    numerologia: 8,
  },
  {
    numero: 18,
    nombre: 'The Moon',
    arcano: 'mayor',
    esencia: 'The imaginative and inspired spirit.',
    claves: ['imagination', 'intuition', 'caution', 'deception'],
    derecho:
      'Imagination, intuition, and inspiration; but also unseen dangers, ' +
      'deceptions, false promises, or slander. A time that calls for caution.',
    invertido:
      'Skepticism and a practical attitude: rejection of the intuitive, minor deceptions, ' +
      'small mistakes, or taking advantage of someone. The fog beginning to clear.',
    astro: 'Uranus in Scorpio: the totality and the hidden.',
    hebrea: 'Tzade: magnetism.',
    numerologia: 9,
  },
  {
    numero: 19,
    nombre: 'The Sun',
    arcano: 'mayor',
    esencia: 'The spirit at peace and happy.',
    claves: ['happiness', 'prosperity', 'success', 'joy'],
    derecho:
      'Peace and happiness: pure love, prosperity, success, and good relationships. Joy, ' +
      'Sincerity and achievements, especially in creative endeavors.',
    invertido:
      'A clouded light: unhappiness, loneliness, lack of friendship, plans that fall ' +
      'through, or a possible breakup. It shines less, but it does not go out.',
    astro: 'Pluto in Sagittarius: the universal generation.',
    hebrea: 'Qoph: the mysterious quest.',
    numerologia: 1,
  },
  {
    numero: 20,
    nombre: 'Judgement',
    arcano: 'mayor',
    esencia: 'The spirit with cosmic consciousness.',
    claves: ['recognition', 'awakening', 'balance', 'transcendence'],
    derecho:
      'An awakening of consciousness: recognition, faith in something beyond the ' +
      'visible, a desire to transcend. A favorable outcome after taking stock.',
    invertido:
      'Fear and delay: fear of endings, upsets, losses, lack of peace in the ' +
      'closing phase. A balance that is difficult to accept.',
    astro: 'Mars in Capricorn: mental capacity and drive.',
    hebrea: 'Resh: liberation.',
    numerologia: 2,
  },
  {
    numero: 21,
    nombre: 'Transmutation',
    arcano: 'mayor',
    esencia: 'The spirit leaving the material behind.',
    claves: ['fulfillment', 'realization', 'triumph', 'closure'],
    derecho:
      'Fulfillment and realization: triumph, inner peace, and success after effort. ' +
      'The reward that crowns a long and well-done job.',
    invertido:
      'The work that remains unfinished: failure, stagnation, insecurity, and fear. Being ' +
      'unable to fully complete what was being built.',
    astro: 'Neptune in Aquarius: what still needs to be understood.',
    hebrea: 'Shin: cosmic changes.',
    numerologia: 3,
  },
  {
    numero: 22,
    nombre: 'The Fool',
    arcano: 'mayor',
    esencia: 'The embodied spirit, ready to begin.',
    claves: ['impulse', 'enthusiasm', 'decision', 'risk'],
    derecho:
      'Impulse and enthusiasm for an important decision: passion, the desire to leap, ' +
      'though perhaps with some recklessness. The jump that starts a journey.',
    invertido:
      'The wrong choice: indecision, apathy, distraction. Jumping without looking, or ' +
      'not daring to take the necessary step.',
    astro: 'Venus in Pisces: reason and respect.',
    hebrea: 'Tau: understanding the whole.',
    numerologia: 4,
  },
];

const MENORES: Carta[] = [
  {
    numero: 23,
    nombre: 'The Farmer',
    arcano: 'menor',
    claves: ['work', 'intelligence', 'perseverance'],
    derecho:
      'Intelligence and experience applied to steady work: well-directed effort ' +
      'that yields concrete results.',
    invertido:
      'A passing setback: a brief stumble that slows progress, but is overcome.',
    astro: 'Mercury: intelligence in action.',
    numerologia: 5,
  },
  {
    numero: 24,
    nombre: 'Industriousness',
    arcano: 'menor',
    claves: ['diligence', 'order', 'duty'],
    derecho:
      'Diligence and order: steady work, well-managed finances, and ' +
      'fulfilling your responsibilities.',
    invertido:
      'Inner unease, a restless conscience: something left undone that keeps ' +
      'you from finding peace.',
    astro: 'Venus: dedication and joy.',
    numerologia: 6,
  },
  {
    numero: 25,
    nombre: 'The Traveler',
    arcano: 'menor',
    claves: ['journey', 'adventure', 'change'],
    derecho:
      'Courage to take on risky ventures and succeed; news arriving from ' +
      'afar or from foreign lands.',
    invertido:
      'Relocations, changes in work or residence, and some domestic friction ' +
      'due to so much movement.',
    astro: 'Neptune: a wandering and adventurous spirit.',
    numerologia: 7,
  },
  {
    numero: 26,
    nombre: 'Fortune',
    arcano: 'menor',
    claves: ['surprise', 'novelty', 'money'],
    derecho:
      'Pleasant surprises: fresh ideas, a new love or friendship, an ' +
      'unexpected gain.',
    invertido: 'A latent threat: something clouding your good streak that requires attention.',
    astro: 'Saturn: reward and the resolution of a problem.',
    numerologia: 8,
  },
  {
    numero: 27,
    nombre: 'The Unexpected',
    arcano: 'menor',
    claves: ['surprise', 'discovery', 'unforeseen'],
    derecho:
      'A nuanced triumph or a discovery that arrives late but arrives nonetheless: the surprise ' +
      'that changes your course.',
    invertido:
      'Betrayal or deceit: an unpleasant surprise, something that was not what it seemed.',
    astro: 'Mars: conflict.',
    numerologia: 9,
  },
  {
    numero: 28,
    nombre: 'Despair',
    arcano: 'menor',
    claves: ['mystery', 'search', 'adversity'],
    derecho:
      'A mystery to be solved, and the knowledge needed to achieve it is within your reach: ' +
      'the way out exists.',
    invertido:
      'Delays, problems, and adversity: the path becomes blocked and anguish tightens its grip.',
    astro: 'Pluto: letting go of the past.',
    numerologia: 1,
  },
  {
    numero: 29,
    nombre: 'Tranquility',
    arcano: 'menor',
    claves: ['calm', 'reward', 'joy'],
    derecho:
      'Joy and calm: an advantageous deal, hard work that is finally rewarded, ' +
      'without any setbacks.',
    invertido:
      'Remorse, indecision, and shyness; or an excess of comfort that leads to stagnation.',
    astro: 'Moon: passivity and reflection.',
    numerologia: 2,
  },
  {
    numero: 30,
    nombre: 'Commerce',
    arcano: 'menor',
    claves: ['exchange', 'dealings', 'negotiation'],
    derecho:
      'Matters of exchange and dealing with others; be careful of arguments that ' +
      'lead nowhere.',
    invertido:
      'Sensitivity in commercial ties: relationships and agreements take ' +
      'center stage.',
    astro: 'Jupiter: knowledge.',
    numerologia: 3,
  },
  {
    numero: 31,
    nombre: 'The Difficulties',
    arcano: 'menor',
    claves: ['expectation', 'promises', 'delay'],
    derecho:
      'Expectations and promises in the air: something promised that is yet ' +
      'to materialize.',
    invertido:
      'Problems and obstacles, sometimes from people of lesser influence; restrictions ' +
      'that cause delays.',
    astro: 'Uranus: setbacks.',
    numerologia: 4,
  },
  {
    numero: 32,
    nombre: 'Generosity',
    arcano: 'menor',
    claves: ['generosity', 'cooperation', 'altruism'],
    derecho:
      'Cooperation and altruism: giving and fulfilling obligations, sharing with ' +
      'intelligence.',
    invertido:
      'Selfishness leading to failure: pettiness, litigation, not fulfilling what is due.',
    astro: 'Mercury: sharing with intelligence.',
    numerologia: 5,
  },
  {
    numero: 33,
    nombre: 'The Agreements',
    arcano: 'menor',
    claves: ['alliance', 'prosperity', 'union'],
    derecho:
      'A lasting alliance that brings prosperity and progress: agreements that hold ' +
      'and unite.',
    invertido:
      'Financial losses or issues with documents; a bad investment or an agreement ' +
      'that comes at a high cost.',
    astro: 'Venus: marriage and union.',
    numerologia: 6,
  },
  {
    numero: 34,
    nombre: 'The Change',
    arcano: 'menor',
    claves: ['change', 'novelty', 'encounter'],
    derecho:
      'Fresh ideas and a new venture; a fortunate encounter that clears the path.',
    invertido: 'Fear of change and distracting temptations: the new feels daunting and stalls.',
    astro: 'Neptune: depth.',
    numerologia: 7,
  },
  {
    numero: 35,
    nombre: 'The Sadness',
    arcano: 'menor',
    claves: ['strength', 'unforeseen', 'melancholy'],
    derecho:
      'Strength of spirit in the face of the unforeseen: the resilience that sustains ' +
      'you in difficult moments.',
    invertido:
      'Sadness, melancholy, or discouragement: a sorrow that weighs on the spirit.',
    astro: 'Saturn: moral sorrow.',
    numerologia: 8,
  },
  {
    numero: 36,
    nombre: 'The War',
    arcano: 'menor',
    claves: ['beginning', 'fortune', 'conquest'],
    derecho:
      'A powerful beginning: something is born, fortune is near, and business ' +
      'prospers through conquest.',
    invertido: 'Decay: strength that fades, things beginning to decline.',
    astro: 'Mars: conflict and conquest.',
    numerologia: 9,
  },
  {
    numero: 37,
    nombre: 'Temperance',
    arcano: 'menor',
    claves: ['friendship', 'wit', 'recognition'],
    derecho:
      'Friendship, support, and recognition: wit and talent that open doors and ' +
      'bring allies together.',
    invertido:
      'Misused talent: bad reputation, perversion of the good, gifts used for harm.',
    astro: 'Sun: friendship and pleasure.',
    numerologia: 1,
  },
  {
    numero: 38,
    nombre: 'The Infidelity',
    arcano: 'menor',
    claves: ['honesty', 'virtue', 'trust'],
    derecho:
      'Decisive, wise, and honest people around: virtue and trust in bonds.',
    invertido:
      'Scandalous or corrupt people: deceit, infidelity, misplaced trust.',
    astro: 'Moon: infidelity and deceit.',
    numerologia: 2,
  },
  {
    numero: 39,
    nombre: 'The Inheritance',
    arcano: 'menor',
    claves: ['inheritance', 'celebration', 'truth'],
    derecho:
      'Inheritance or legacy, paperwork being resolved, celebrations: something good ' +
      'received.',
    invertido:
      'Disloyalty in relationships, adultery; an uncomfortable truth coming to light.',
    astro: 'Jupiter: the truth.',
    numerologia: 3,
  },
  {
    numero: 40,
    nombre: 'The Premonition',
    arcano: 'menor',
    claves: ['intuition', 'sympathy', 'attraction'],
    derecho:
      'Well-paid work and the favor of others: sympathy and the power to ' +
      'attract.',
    invertido: 'A dark premonition: risk of ruin or losing a loved one.',
    astro: 'Uranus: destruction.',
    numerologia: 4,
  },
  {
    numero: 41,
    nombre: 'The Anguish',
    arcano: 'menor',
    claves: ['family', 'affection', 'tension'],
    derecho:
      'Family life and deep-rooted affection: a youthful love, the bonds that stay.',
    invertido:
      'Indignation and contained violence: the anguish that erupts into anger.',
    astro: 'Mercury: remorse.',
    numerologia: 5,
  },
  {
    numero: 42,
    nombre: 'The Constancy',
    arcano: 'menor',
    claves: ['constancy', 'triumph', 'journey'],
    derecho:
      'Constancy that pays off: advantages, triumphs, even an unexpected affair or a ' +
      'A profitable business trip.',
    invertido:
      'Insistence that becomes stubborn or misguided: a presence that brings more ' +
      'discomfort than value.',
    astro: 'Venus: presence and insistence.',
    numerologia: 6,
  },
  {
    numero: 43,
    nombre: 'The Hallucination',
    arcano: 'menor',
    claves: ['joy', 'illusion', 'satisfaction'],
    derecho:
      'An unexpected joy and the satisfaction of achievement, experienced with modesty; ' +
      'a good deal.',
    invertido:
      'A shattered illusion: breakup, infidelity, a discouragement that clouds the spirit.',
    astro: 'Neptune: illness and depression.',
    numerologia: 7,
  },
  {
    numero: 44,
    nombre: 'The Thought',
    arcano: 'menor',
    claves: ['project', 'decision', 'plan'],
    derecho:
      'A project taking shape: intention turns into decision and a concrete plan.',
    invertido:
      'Achieving what you seek through someone else: the goal is reached, but not ' +
      'by your own hand.',
    astro: 'Saturn: problem solving.',
    numerologia: 8,
  },
  {
    numero: 45,
    nombre: 'The Regeneration',
    arcano: 'menor',
    claves: ['renewal', 'bonds', 'change'],
    derecho:
      'Family ties influence your emotions: relatives who weigh in on a matter. ' +
      'from the heart, to renew it.',
    invertido:
      'The end of a relationship or an abandonment: a drastic break that forces a ' +
      'fresh start.',
    astro: 'Mars: drastic change.',
    numerologia: 9,
  },
  {
    numero: 46,
    nombre: 'The Heritage',
    arcano: 'menor',
    claves: ['legacy', 'heritage', 'union'],
    derecho:
      'Legacy, donation, or a union that consolidates assets: you reap what you sow.',
    invertido:
      'A risk coming from someone else: be careful with those who could affect ' +
      'what is yours.',
    astro: 'Sun: reaping what is sown.',
    numerologia: 1,
  },
  {
    numero: 47,
    nombre: 'The Conjecture',
    arcano: 'menor',
    claves: ['hope', 'love', 'harmony'],
    derecho:
      'Joy is approaching: a pure and lasting love, understanding within the family. ' +
      'Good omens.',
    invertido: 'A sad omen: a misfortune nearby, afflictions of the soul.',
    astro: 'Moon: dreams.',
    numerologia: 2,
  },
  {
    numero: 48,
    nombre: 'The Achievement',
    arcano: 'menor',
    claves: ['victory', 'achievement', 'knowledge'],
    derecho:
      'Victory and fulfillment: what was sought is reached, with the knowledge that makes it ' +
      'possible.',
    invertido:
      'An impossible love or an elusive goal: what you desire remains out of reach.',
    astro: 'Jupiter: the power to achieve what you want.',
    numerologia: 3,
  },
  {
    numero: 49,
    nombre: 'Duplicity',
    arcano: 'menor',
    claves: ['change', 'friendships', 'fork in the road'],
    derecho:
      'A move and new friendships: paths opening in a different direction.',
    invertido:
      'Competition in love and ups and downs: two paths pulling at once and ' +
      'complicating things.',
    astro: 'Uranus: different paths.',
    numerologia: 4,
  },
  {
    numero: 50,
    nombre: 'Rapport',
    arcano: 'menor',
    claves: ['understanding', 'harmony', 'union'],
    derecho:
      'Deep understanding with another: harmony, complicity, and shared vision. Two ' +
      'who understand each other almost without words.',
    invertido:
      'Disagreement: harmony is lost, it is hard to agree, and the distance ' +
      'grows.',
    astro: 'Venus: understanding and union.',
    numerologia: 5,
  },
  {
    numero: 51,
    nombre: 'Counsel',
    arcano: 'menor',
    claves: ['advice', 'power', 'caution'],
    derecho:
      'Good advice and dealing with influential people: connection with key figures, success ' +
      'in positions of authority.',
    invertido:
      'Lawsuits and powerful enemies: bad advice or a harmful influence that ' +
      'complicates things.',
    astro: 'Venus: security.',
    numerologia: 6,
  },
  {
    numero: 52,
    nombre: 'Foresight',
    arcano: 'menor',
    claves: ['foresight', 'caution', 'defense'],
    derecho:
      'Anticipating and preparing for conflict: staying alert and defending what is ' +
      'yours in advance.',
    invertido:
      'Deceit in relationships and hidden grudges: behaviors that are not what ' +
      'they seem.',
    astro: 'Neptune: elegance.',
    numerologia: 7,
  },
  {
    numero: 53,
    nombre: 'Vengeance',
    arcano: 'menor',
    claves: ['caution', 'conflict', 'prudence'],
    derecho:
      'A call for caution: it is wise to be careful and avoid missteps in the face ' +
      'of a possible attack.',
    invertido:
      'Criticism, lies, and struggles: an inability to resolve issues that leads ' +
      'to resentment.',
    astro: 'Saturn: fear.',
    numerologia: 8,
  },
  {
    numero: 54,
    nombre: 'Study',
    arcano: 'menor',
    claves: ['study', 'analysis', 'investigation'],
    derecho:
      'A time to think, research, and analyze deeply: setting the mind to study ' +
      'before taking action.',
    invertido:
      'Betrayal and slander from unseen enemies: be careful of what is being plotted in ' +
      'the shadows.',
    astro: 'Mars: the soldier\'s observation.',
    numerologia: 9,
  },
  {
    numero: 55,
    nombre: 'The Repentance',
    arcano: 'menor',
    claves: ['withdrawal', 'shyness', 'reflection'],
    derecho:
      'Withdrawal and reserve: a phase of retreat, shyness, or chosen solitude to ' +
      'look within.',
    invertido:
      'Vague dangers and powerful enemies; also a call to spirituality in the face ' +
      'of threats.',
    astro: 'Pluto: challenge.',
    numerologia: 1,
  },
  {
    numero: 56,
    nombre: 'The Search',
    arcano: 'menor',
    claves: ['quest', 'ambition', 'sacrifice'],
    derecho:
      'What is sought is attained, but at a cost: wealth or goals that demand sacrifices, ' +
      'even moral ones.',
    invertido:
      'Lamentations: regret for the cost or for what was not achieved.',
    astro: 'Moon: detachment.',
    numerologia: 2,
  },
  {
    numero: 57,
    nombre: 'The Rivalry',
    arcano: 'menor',
    claves: ['rivalry', 'caution', 'opposition'],
    derecho:
      'Delicate matters that call for caution: there is competition or rivalry at play, better to ' +
      'tread carefully.',
    invertido:
      'Open opposition and criticism: rivals attacking, a destiny that seems to work ' +
      'against you.',
    astro: 'Jupiter: attacks from rivals.',
    numerologia: 3,
  },
  {
    numero: 58,
    nombre: 'Reconsideration',
    arcano: 'menor',
    claves: ['purpose', 'sacrifice', 'strategy'],
    derecho:
      'Firm desire to achieve something and willingness to sacrifice: reflect and map out ' +
      'your strategy.',
    invertido:
      'Unfulfilled dreams, warnings of danger, and accusations: plans going awry.',
    astro: 'Uranus: strategy.',
    numerologia: 4,
  },
  {
    numero: 59,
    nombre: 'The Discovery',
    arcano: 'menor',
    claves: ['news', 'travel', 'discovery'],
    derecho:
      'Permits, travel, and messages: something is unlocked and expected news or authorization ' +
      'arrives.',
    invertido:
      'Contradictions and obstacles; communications that are leaked or misinterpreted.',
    astro: 'Mercury: the discovery.',
    numerologia: 5,
  },
  {
    numero: 60,
    nombre: 'The Progress',
    arcano: 'menor',
    claves: ['progress', 'learning', 'evolution'],
    derecho:
      'Learning and evolving: genuine progress, the growth that comes from absorbing ' +
      'the experience.',
    invertido:
      'A stumble on the path: sad events, bad luck, risk of ' +
      'setbacks.',
    astro: 'Venus: improvement.',
    numerologia: 6,
  },
  {
    numero: 61,
    nombre: 'The Solitude',
    arcano: 'menor',
    claves: ['prudence', 'discretion', 'solitude'],
    derecho:
      'Prudence and discretion: behaving correctly, taking care of resources and your own ' +
      'space.',
    invertido: 'Isolation, sought or imposed: the solitude that separates from others.',
    astro: 'Neptune: withdrawal.',
    numerologia: 7,
  },
  {
    numero: 62,
    nombre: 'The Authority',
    arcano: 'menor',
    claves: ['mediation', 'authority', 'reconciliation'],
    derecho:
      'The authority that reconciles: a kind mediator who brings order and bridges ' +
      'the gaps.',
    invertido:
      'Breakups and separations: the authority that divides, the hatred that breaks bonds.',
    astro: 'Saturn: authority.',
    numerologia: 8,
  },
  {
    numero: 63,
    nombre: 'The Communion',
    arcano: 'menor',
    claves: ['affinity', 'union', 'affection'],
    derecho:
      'Communion and affinity: affection, warmth, and mutual support; people who share the ' +
      'same ideals.',
    invertido: 'Emotional coldness: a union that is cooling down, little commitment between the parties.',
    astro: 'Mars: union.',
    numerologia: 9,
  },
  {
    numero: 64,
    nombre: 'Condescension',
    arcano: 'menor',
    claves: ['understanding', 'effort', 'indulgence'],
    derecho:
      'Indulgence and understanding that smooth the path for a difficult endeavor; also a good ' +
      'moment for love.',
    invertido:
      'Condescension that turns into pressure or giving too much: anger, tension from forcing ' +
      'one\'s hand.',
    astro: 'Sun: condescension.',
    numerologia: 1,
  },
  {
    numero: 65,
    nombre: 'Learning',
    arcano: 'menor',
    claves: ['learning', 'protection', 'progress'],
    derecho:
      'Learning and progress under the shelter of someone with more experience or resources: ' +
      'advancing with guidance.',
    invertido:
      'A decline or a passing rough patch: luck withdraws for a time.',
    astro: 'Moon: the teachings.',
    numerologia: 2,
  },
  {
    numero: 66,
    nombre: 'Perplexity',
    arcano: 'menor',
    claves: ['support', 'doubt', 'indecision'],
    derecho:
      'An influential supporter opens the door to prosperity: someone with weight helps ' +
      'things flow.',
    invertido:
      'Doubt and paralysis: a matter that stalls and remains undecided, perplexity over ' +
      'the steps to take.',
    astro: 'Jupiter: surprises.',
    numerologia: 3,
  },
  {
    numero: 67,
    nombre: 'Friendship',
    arcano: 'menor',
    claves: ['friendship', 'affection', 'calm'],
    derecho:
      'Friendship and sincere affection: companionship, calm, and serenity in close bonds.',
    invertido: 'A slip or oversight that clouds a friendship and brings trouble.',
    astro: 'Uranus: spirituality.',
    numerologia: 4,
  },
  {
    numero: 68,
    nombre: 'Investment',
    arcano: 'menor',
    claves: ['prosperity', 'success', 'generosity'],
    derecho:
      'Well-managed material prosperity: success, intelligence, and generosity that ' +
      'multiply what you have.',
    invertido:
      'Losses and self-serving friendships: money slipping away, or those who draw near ' +
      'only out of interest.',
    astro: 'Mercury: prosperity.',
    numerologia: 5,
  },
  {
    numero: 69,
    nombre: 'Chance',
    arcano: 'menor',
    claves: ['luck', 'reward', 'opportunity'],
    derecho:
      'Fortune favors you: a reward, an improvement, a positive change, or a good ' +
      'investment.',
    invertido:
      'Good things take time: a profitable deal that is delayed, but not lost.',
    astro: 'Venus: serendipity.',
    numerologia: 6,
  },
  {
    numero: 70,
    nombre: 'The Help',
    arcano: 'menor',
    claves: ['help', 'affection', 'promise'],
    derecho:
      'Support and affection that empower: a promise kept that helps you move forward.',
    invertido:
      'Hopes that remain unfulfilled; or a gain that arrives through an unexpected or ' +
      'sad path.',
    astro: 'Neptune: depth.',
    numerologia: 7,
  },
  {
    numero: 71,
    nombre: 'Greed',
    arcano: 'menor',
    claves: ['greed', 'attachment', 'preserve'],
    derecho:
      'It is hard to maintain your position or job: attachment to material things tightens its grip and demands ' +
      'you protect what you have achieved.',
    invertido:
      'Avarice and regret: the risk of losing out due to greed, or a theft that ' +
      'is lurking.',
    astro: 'Saturn: conservatism.',
    numerologia: 8,
  },
  {
    numero: 72,
    nombre: 'Purification',
    arcano: 'menor',
    claves: ['cleansing', 'renewal', 'good news'],
    derecho:
      'Purification and renewal: a good acquisition, pleasant news, the ' +
      'clarity that comes after a cleansing.',
    invertido:
      'Sadness before the calm: luck arrives, but only after a great ' +
      'effort.',
    astro: 'Mars: beauty.',
    numerologia: 9,
  },
  {
    numero: 73,
    nombre: 'Love and Desire',
    arcano: 'menor',
    claves: ['love', 'passion', 'desire'],
    derecho:
      'Infatuation and passion: a burning desire and expected rewards arriving.',
    invertido:
      'False friends causing loss and chaos: passion misdirected that ' +
      'disrupts your life.',
    astro: 'Sun: infatuation.',
    numerologia: 1,
  },
  {
    numero: 74,
    nombre: 'The Offering',
    arcano: 'menor',
    claves: ['devotion', 'balance', 'love'],
    derecho:
      'Devotion and inspiration: balanced dedication and love offered with ' +
      'generosity.',
    invertido:
      'Enmity or indifference: passion fading, an offering that finds no ' +
      'response.',
    astro: 'Moon: beginning, birth.',
    numerologia: 2,
  },
  {
    numero: 75,
    nombre: 'The Distribution',
    arcano: 'menor',
    claves: ['distribution', 'advancement', 'abundance'],
    derecho:
      'A favorable distribution: advancement, inheritance, or wealth being shared and reaching ' +
      'your hands.',
    invertido:
      'What is divided becomes smaller: a lesser portion, something minor, or a distribution that ' +
      'does not satisfy.',
    astro: 'Jupiter: the distributor.',
    numerologia: 3,
  },
  {
    numero: 76,
    nombre: 'The Dispenser',
    arcano: 'menor',
    claves: ['abundance', 'recognition', 'fortune'],
    derecho:
      'Abundance overflowing: plenty of work, recognition, something being born and ' +
      'prosper.',
    invertido: 'An unstable mood: the shifting temper that scatters your good streak.',
    astro: 'Uranus: bringing luck.',
    numerologia: 4,
  },
  {
    numero: 77,
    nombre: 'The Bewilderment',
    arcano: 'menor',
    claves: ['good luck', 'confusion', 'unexpected event'],
    derecho:
      'Good omens: signs that luck is on your side, even if the outlook isn\'t ' +
      'entirely clear yet.',
    invertido:
      'Confusion and indecision: an unexpected problem that unsettles you and stalls ' +
      'your decisions.',
    astro: 'Mercury: indecision.',
    numerologia: 5,
  },
  {
    numero: 78,
    nombre: 'Rebirth',
    arcano: 'menor',
    claves: ['rebirth', 'fulfillment', 'satisfaction'],
    derecho:
      'Rebirth: pleasure, integrity, and fortune; the satisfaction of a stage reaching its peak. ' +
      'well.',
    invertido:
      'The goal is reached, but after much suffering: an achievement that comes with scars. ' +
      'scars.',
    astro: 'Venus: the reason for living.',
    numerologia: 6,
  },
];

export const CARTAS_EN: BaseCartas = Object.fromEntries(
  [...MAYORES, ...MENORES].map((c) => [c.numero, c])
);
