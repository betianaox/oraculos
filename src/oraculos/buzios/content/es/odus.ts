import type { Odu, BaseOdus } from '../types';

// BORRADOR para revisar. Consulta simbolica de los 16 odus del dilogun, en
// redaccion propia y tono reflexivo (como el I Ching). NO es el jogo de buzios.
// El contenido lo revisa y corrige quien tiene el saber de la casa.
// Español neutro, sin voseo. El numero es la cantidad de cauries abiertos.

const odu1: Odu = {
  numero: 1,
  nombre: 'Okana',
  palabrasClave: ['comienzos', 'individualidad', 'impulso', 'cambios'],
  significado: {
    general:
      'Algo empieza. Es el uno, el punto de partida, y trae la energía de lo nuevo ' +
      'y de la propia fuerza. Pero también advierte sobre el exceso de orgullo, la ' +
      'impaciencia y los choques: lo que arranca con soberbia o a los golpes, se ' +
      'tuerce. Da el primer paso con firmeza, pero sin atropellar.',
    amor:
      'Un comienzo o un cambio en el vínculo. Cuidado con el egoísmo y las ' +
      'discusiones por imponerse: el "yo" de más aleja. La firmeza serena acerca; la ' +
      'soberbia rompe.',
    trabajo:
      'Momento de iniciar algo por cuenta propia. La determinación ayuda, pero evita ' +
      'los enfrentamientos innecesarios y el querer hacerlo todo solo. Empezar bien ' +
      'es empezar sin arrogancia.',
    dinero:
      'Un nuevo movimiento económico se abre. Conviene la iniciativa medida, no el ' +
      'arrebato. Lo que se empieza con cabeza fría prospera; lo impulsivo se pierde.',
  },
  orientacion: {
    favorable:
      'Con humildad y firmeza, este comienzo abre camino: es tiempo de dar el primer ' +
      'paso.',
    desafio:
      'El riesgo es la soberbia y el choque. Baja el ego y cuida las formas para que ' +
      'el comienzo no se trabe.',
  },
};

const odu2: Odu = {
  numero: 2,
  nombre: 'Eji Oko',
  palabrasClave: ['dualidad', 'dilema', 'dos caminos', 'tensión'],
  significado: {
    general:
      'Hablan el dos y la dualidad: hay dos caminos, dos fuerzas o dos personas en ' +
      'tensión. Es momento de elegir con claridad y de no quedar atrapado entre dos ' +
      'aguas. Los conflictos entre pares —hermanos, socios, iguales— piden mesura. ' +
      'Define de qué lado estás, sin traicionarte.',
    amor:
      'Una situación de a dos que pide definición: quizá una duda entre dos, o una ' +
      'tensión con la pareja. Evita quedar en el medio; la claridad y la sinceridad ' +
      'destraban.',
    trabajo:
      'Un dilema entre dos opciones o una tensión con un par. Elige con criterio y no ' +
      'alimentes rivalidades. La indecisión cuesta más que equivocarse.',
    dinero:
      'Dos caminos o dos gastos que compiten. Conviene priorizar y no dividir ' +
      'fuerzas. Decidir a tiempo evita perder por ambos lados.',
  },
  orientacion: {
    favorable:
      'Si eliges con claridad y sostienes tu decisión, la dualidad se resuelve a ' +
      'favor.',
    desafio: 'El riesgo es la indecisión y el conflicto entre iguales. No te quedes en el medio.',
  },
};

const odu3: Odu = {
  numero: 3,
  nombre: 'Ogunda',
  palabrasClave: ['trabajo', 'esfuerzo', 'cortar', 'conflicto'],
  significado: {
    general:
      'Habla la fuerza del hierro y del trabajo: energía para abrirse paso, pero ' +
      'también riesgo de conflictos, cortes y decisiones drásticas. Es momento de ' +
      'esforzarse y de cortar por lo sano con lo que no sirve, evitando la violencia ' +
      'y la impulsividad. Lo que se logra, se logra a pulso.',
    amor:
      'Un vínculo con tensión o que pide una decisión firme, quizá cortar con lo que ' +
      'hace daño. La honestidad directa resuelve; la agresividad destruye.',
    trabajo:
      'Tiempo de esfuerzo duro y de trabajo que rinde a pulso. Puede haber roces o ' +
      'una decisión drástica que tomar. Corta lo que no funciona, pero sin pelear de ' +
      'más.',
    dinero:
      'Se gana con esfuerzo y trabajo, no de arriba. Puede haber que cortar un gasto ' +
      'o una sociedad que traba. La decisión firme protege.',
  },
  orientacion: {
    favorable:
      'El esfuerzo firme abre camino: es momento de trabajar duro y cortar lo que ' +
      'sobra.',
    desafio: 'El riesgo es el conflicto y la impulsividad. Canaliza la fuerza en el trabajo, no en la pelea.',
  },
};

const odu4: Odu = {
  numero: 4,
  nombre: 'Irosun',
  palabrasClave: ['fundamentos', 'profundidad', 'paciencia', 'lo oculto'],
  significado: {
    general:
      'Nadie sabe lo que hay en el fondo del mar: hablan las cosas profundas, los ' +
      'cimientos y lo que todavía no se ve. Es tiempo de paciencia y de construir ' +
      'base, sin desesperar por lo que aún no se muestra. También pide atención a lo ' +
      'que se esconde bajo la superficie.',
    amor:
      'Hay algo profundo en juego, quizá sentimientos o asuntos que no están del todo ' +
      'a la vista. Paciencia y sinceridad para llegar al fondo; no todo se resuelve ' +
      'rápido.',
    trabajo:
      'Momento de sentar bases sólidas más que de resultados inmediatos. Lo que se ' +
      'cimienta con paciencia perdura. Atención a lo que no se ve del todo en el ' +
      'entorno.',
    dinero:
      'Tiempo de construir base y de paciencia: los frutos son de fondo, no ' +
      'inmediatos. Cuidado con lo que no está claro en un trato.',
  },
  orientacion: {
    favorable: 'La paciencia y los cimientos firmes dan fruto: lo profundo juega a tu favor.',
    desafio: 'El riesgo es la desesperación por lo que no se ve. Confía en el proceso y cuida lo oculto.',
  },
};

const odu5: Odu = {
  numero: 5,
  nombre: 'Oshe',
  palabrasClave: ['amor', 'prosperidad', 'dulzura', 'salud'],
  significado: {
    general:
      'Hablan el río, el amor y la abundancia: dulzura, afecto y prosperidad. Es un ' +
      'signo cálido y fértil, pero también pide cuidar la salud y las emociones —lo ' +
      'vital—. Disfruta lo bueno sin descuidar el cuerpo ni el corazón.',
    amor:
      'Signo de amor, dulzura y buenos momentos afectivos. Es tiempo de disfrutar y ' +
      'nutrir el vínculo. Cuida que la intensidad emocional no desborde.',
    trabajo:
      'Momento próspero y de buen fluir, con reconocimiento posible. Cuida el ' +
      'desgaste emocional en el camino.',
    dinero:
      'Buena energía para la prosperidad y el dinero que fluye. Administra con ' +
      'criterio y sin excesos.',
  },
  orientacion: {
    favorable: 'El amor y la abundancia fluyen: es tiempo de disfrutar y cosechar.',
    desafio: 'El riesgo está en la salud y las emociones desbordadas. Cuida el cuerpo y el corazón.',
  },
};

const odu6: Odu = {
  numero: 6,
  nombre: 'Obara',
  palabrasClave: ['la palabra', 'fortuna inesperada', 'prudencia al hablar'],
  significado: {
    general:
      'Habla la boca y el poder de la palabra: de la nada puede surgir la fortuna, ' +
      'pero una palabra de más puede arruinarlo todo. Es tiempo de cuidar lo que se ' +
      'dice, no mentir ni chismear, y estar atento a una oportunidad que llega por ' +
      'sorpresa. El rey no dice mentiras.',
    amor:
      'Cuida las palabras en el vínculo: lo que se dice pesa, para bien o para mal. La ' +
      'sinceridad construye; el chisme o la mentira destruyen.',
    trabajo:
      'Una oportunidad puede surgir de donde no se espera. Cuida lo que dices y las ' +
      'promesas que haces: tu palabra es tu valor.',
    dinero:
      'Puede llegar una fortuna inesperada, incluso de la nada. Pero cuidado con los ' +
      'tratos de palabra: que quede todo claro.',
  },
  orientacion: {
    favorable: 'Una oportunidad inesperada se abre: la palabra justa, en el momento justo, trae fortuna.',
    desafio: 'El riesgo está en la lengua: una mentira o un chisme puede arruinarlo. Mide lo que dices.',
  },
};

const odu7: Odu = {
  numero: 7,
  nombre: 'Odi',
  palabrasClave: ['hogar', 'intimidad', 'cimientos', 'confianza'],
  significado: {
    general:
      'Habla el origen y la intimidad: los asuntos del hogar, de la familia y de lo ' +
      'más privado. Es tiempo de cuidar los cimientos afectivos y de ser prudente con ' +
      'las confidencias. Lo que se cava hondo puede ser refugio o trampa.',
    amor:
      'Asuntos íntimos y de fondo en el vínculo o el hogar. Cuida la confianza y la ' +
      'privacidad; las traiciones y los chismes hacen mucho daño aquí.',
    trabajo:
      'Momento de cuidar la base y el entorno cercano de trabajo. Atención a las ' +
      'confidencias mal ubicadas y a la deslealtad.',
    dinero:
      'Tiempo de asegurar los cimientos económicos, el hogar, lo básico. Cuidado con ' +
      'confiar dinero o secretos a quien no corresponde.',
  },
  orientacion: {
    favorable: 'Los cimientos del hogar y la intimidad se afirman: es tiempo de construir refugio.',
    desafio: 'El riesgo es la traición y la indiscreción. Cuida en quién confías lo íntimo.',
  },
};

const odu8: Odu = {
  numero: 8,
  nombre: 'Eji Ogbe',
  palabrasClave: ['claridad', 'cabeza', 'liderazgo', 'humildad'],
  significado: {
    general:
      'Habla la cabeza: la claridad, la sabiduría y el liderazgo. Es un signo ' +
      'luminoso, de quien gobierna su vida con la mente en alto y fría. Pero advierte ' +
      'contra el orgullo y el creerse más: la cabeza que se ensoberbece, cae. Piensa ' +
      'con claridad y mantén la humildad.',
    amor:
      'Momento de claridad en el vínculo: pensar con la cabeza fría ayuda. Cuida el ' +
      'orgullo, que en el amor enfría.',
    trabajo:
      'Buen momento para liderar y decidir con lucidez. El único cuidado es la ' +
      'soberbia: dirige sin creerte por encima de todos.',
    dinero:
      'Claridad para ordenar y decidir bien las finanzas. La mente fría rinde; la ' +
      'soberbia hace perder.',
  },
  orientacion: {
    favorable: 'La claridad y el buen juicio te ubican arriba: es tiempo de liderar con lucidez.',
    desafio: 'El riesgo es la soberbia. Baja el orgullo para no perder la cabeza.',
  },
};

const odu9: Odu = {
  numero: 9,
  nombre: 'Osa',
  palabrasClave: ['cambios bruscos', 'viento', 'inestabilidad', 'amistades'],
  significado: {
    general:
      'Habla el viento y el cambio repentino: giros bruscos e inestabilidad. Es un ' +
      'tiempo movido, donde lo de hoy cambia mañana. Advierte sobre las amistades —el ' +
      'mejor amigo puede volverse el peor— y sobre la impulsividad. Mantén el centro ' +
      'en medio del vendaval.',
    amor:
      'Momento inestable o de cambios bruscos en el vínculo. Cuida las reacciones ' +
      'impulsivas y las malas influencias de afuera. La calma sostiene lo que el ' +
      'viento sacude.',
    trabajo:
      'Cambios repentinos o un entorno movedizo. Atención a las falsas amistades y a ' +
      'los giros inesperados. Mantén la cabeza fría y no reacciones en caliente.',
    dinero:
      'Época de inestabilidad económica o cambios súbitos. No es momento de arriesgar ' +
      'de más; cuida lo que tienes ante los vaivenes.',
  },
  orientacion: {
    favorable: 'El cambio, bien encauzado, renueva: el viento puede llevarte a mejor puerto.',
    desafio: 'El riesgo es la inestabilidad y la traición cercana. Cuida tus amistades y tu centro.',
  },
};

const odu10: Odu = {
  numero: 10,
  nombre: 'Ofun',
  palabrasClave: ['lo espiritual', 'lo delicado', 'respeto a los mayores', 'cuidado'],
  significado: {
    general:
      'Habla un signo delicado y espiritual, ligado a lo antiguo y a lo sagrado. Pide ' +
      'respeto por los mayores, cuidado con la salud y prudencia con las palabras y ' +
      'los actos. Es tiempo de humildad y reverencia, no de soberbia.',
    amor:
      'Momento delicado que pide cuidado y respeto en el vínculo. Evita las malas ' +
      'palabras y los gestos hirientes; el respeto sostiene.',
    trabajo:
      'Tiempo de prudencia y respeto, sobre todo hacia los mayores o los que saben ' +
      'más. No es momento de soberbia ni de atajos.',
    dinero:
      'Momento delicado en lo económico: cuidado, prudencia y nada de derroches. ' +
      'Respetar lo que se tiene y no tentar la suerte.',
  },
  orientacion: {
    favorable: 'La humildad y el respeto abren protección: lo espiritual acompaña.',
    desafio: 'El riesgo es la soberbia y el descuido, en la salud y en el trato. Cuídate y respeta.',
  },
};

const odu11: Odu = {
  numero: 11,
  nombre: 'Owani',
  palabrasClave: ['esfuerzo perdido', 'no desperdiciar', 'salir de la escasez'],
  significado: {
    general:
      'Sacar agua con canasta: habla el esfuerzo que se pierde y la energía mal ' +
      'invertida. Advierte sobre la desesperación, el derroche y las decisiones ' +
      'tomadas desde la carencia. Es tiempo de no malgastar —recursos, fuerzas, ' +
      'oportunidades— y de buscar salidas con cabeza, no con angustia.',
    amor:
      'Cuidado con esforzarse en un vínculo que no devuelve, o con actuar desde la ' +
      'necesidad. No malgastes cariño donde no hay reciprocidad.',
    trabajo:
      'Atención a poner esfuerzo donde no rinde. Revisa dónde se te va la energía y no ' +
      'trabajes en vano. Salir de la escasez pide estrategia, no desesperación.',
    dinero:
      'Cuidado con el derroche y con las decisiones tomadas desde la carencia. No ' +
      'tires recursos en un pozo sin fondo; administra con cabeza.',
  },
  orientacion: {
    favorable: 'Reencauzar el esfuerzo saca del pozo: bien dirigida, la energía rinde.',
    desafio: 'El riesgo es el desgaste inútil y la desesperación. No malgastes ni decidas desde el miedo.',
  },
};

const odu12: Odu = {
  numero: 12,
  nombre: 'Ejila Shebora',
  palabrasClave: ['fuego', 'justicia', 'fuerza', 'rectitud'],
  significado: {
    general:
      'Habla el fuego y la justicia: fuerza, coraje y la energía de quien lucha por ' +
      'lo correcto. Es un signo de victoria, pero sólo cuando la causa es justa y no ' +
      'se abusa del poder. Es tiempo de firmeza y de defender lo propio con rectitud, ' +
      'sin dejarse llevar por la ira.',
    amor:
      'Momento de pasión e intensidad, pero también de posibles enfrentamientos. La ' +
      'firmeza justa acerca; la explosión de ira aleja. Defiende el vínculo sin ' +
      'quemarlo.',
    trabajo:
      'Fuerza y coraje para avanzar y hacer valer lo justo. Buen momento para ' +
      'plantarse con rectitud, sin abusar del poder ni pelear de más.',
    dinero:
      'Energía para defender y hacer crecer lo propio con firmeza. La rectitud en los ' +
      'tratos trae victoria; el abuso, caída.',
  },
  orientacion: {
    favorable: 'Con rectitud y coraje, la victoria es tuya: es tiempo de plantarte firme.',
    desafio: 'El riesgo es la ira y el abuso de fuerza. Que el fuego caliente, no queme.',
  },
};

const odu13: Odu = {
  numero: 13,
  nombre: 'Metanla',
  palabrasClave: ['salud', 'cuidado', 'purificación', 'prudencia'],
  significado: {
    general:
      'Signo delicado que habla de la salud y de la necesidad de cuidado y ' +
      'purificación. Es un momento serio, que pide prudencia, atención al cuerpo y ' +
      'humildad. No es tiempo de excesos ni de descuidos: es tiempo de cuidarse, ' +
      'sanar y pedir guía.',
    amor:
      'Momento delicado que pide cuidar el vínculo con suavidad y sin excesos. La ' +
      'salud y el bienestar, propios y del otro, van primero.',
    trabajo:
      'Tiempo de prudencia y de no forzar. Cuida tu salud y tu energía por encima de ' +
      'la exigencia laboral.',
    dinero:
      'No es momento de riesgos ni excesos. Cuidar lo básico, la salud y la ' +
      'estabilidad está primero que cualquier ganancia.',
  },
  orientacion: {
    favorable: 'El cuidado y la purificación traen alivio: atender la salud abre el camino.',
    desafio: 'El riesgo está en la salud y el descuido. Es un signo serio: cuídate y busca guía.',
  },
};

const odu14: Odu = {
  numero: 14,
  nombre: 'Merinla',
  palabrasClave: ['cautela', 'engaño', 'discernir', 'prudencia'],
  significado: {
    general:
      'Signo que advierte sobre el engaño y la dificultad de distinguir al amigo del ' +
      'enemigo. Es tiempo de cautela, de no confiar a ciegas y de observar bien antes ' +
      'de entregarse. No todo lo que se muestra amable lo es; la prudencia protege.',
    amor:
      'Cuidado con las apariencias y las falsas intenciones. Observa bien antes de ' +
      'confiar del todo el corazón.',
    trabajo:
      'Atención a las falsas alianzas y a quien se muestra amigo por interés. ' +
      'Discierne bien con quién te asocias.',
    dinero:
      'Cuidado con los engaños y las promesas fáciles. No confíes recursos sin ' +
      'verificar; la cautela evita pérdidas.',
  },
  orientacion: {
    favorable: 'La cautela y el buen ojo protegen: discernir bien te pone a salvo.',
    desafio: 'El riesgo es el engaño de quien parece amigo. No confíes a ciegas.',
  },
};

const odu15: Odu = {
  numero: 15,
  nombre: 'Marunla',
  palabrasClave: ['momento serio', 'humildad', 'buscar guía', 'prudencia'],
  significado: {
    general:
      'Signo serio y de peso, que pide humildad, prudencia y buscar la sabiduría y la ' +
      'guía de quien sabe más. No es momento de soberbia ni de decisiones ' +
      'apresuradas, sino de recogerse, cuidar y pedir consejo. Lo grande se atraviesa ' +
      'con humildad.',
    amor:
      'Momento que pide seriedad y cuidado en el vínculo, sin livianidad. La humildad ' +
      'y la búsqueda de entendimiento sostienen.',
    trabajo:
      'Tiempo de prudencia y de no sobreexponerse. Busca el consejo de quien tiene ' +
      'más experiencia antes de decisiones grandes.',
    dinero:
      'No es momento de grandes movimientos ni de soberbia. Prudencia, humildad y ' +
      'consejo antes de arriesgar.',
  },
  orientacion: {
    favorable: 'La humildad y el buen consejo abren camino en lo serio.',
    desafio: 'El riesgo es la soberbia y el apuro. Recógete, cuida y pide guía.',
  },
};

const odu16: Odu = {
  numero: 16,
  nombre: 'Merindilogun',
  palabrasClave: ['plenitud', 'exceso', 'abundancia', 'mesura'],
  significado: {
    general:
      'Todos los cauríes hablan: es el signo de la plenitud y de la abundancia total, ' +
      'pero también del exceso —de todo demasiado—. Trae la sabiduría completa del ' +
      'caracol y, a la vez, advierte que el exceso desborda. Es tiempo de mesura en ' +
      'medio de la abundancia y de humildad ante lo que se recibe.',
    amor:
      'Momento intenso y pleno, con riesgo de exceso o desborde. La mesura y la ' +
      'humildad sostienen lo que la intensidad podría quebrar.',
    trabajo:
      'Abundancia de oportunidades o de trabajo, quizá demasiado. Prioriza y no ' +
      'abarques de más: el exceso desborda.',
    dinero:
      'Momento de abundancia, pero con riesgo de exceso y derroche. La mesura ' +
      'convierte la abundancia en algo que dura.',
  },
  orientacion: {
    favorable: 'La abundancia plena favorece, si se recibe con mesura y humildad.',
    desafio: 'El riesgo es el exceso: demasiado de todo desborda. Modera y agradece.',
  },
};

export const ODUS_ES: BaseOdus = {
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
