import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Menores en español. Mismo tono que los Mayores: reflexivo
// y didáctico, enseña a leer la imagen, nunca adivinatorio. Cuatro palos de 14
// cartas: Bastos (fuego/acción), Copas (agua/emoción), Espadas (aire/mente) y
// Oros (tierra/materia).
export const WIKI_MENORES_ES: WikiPorCarta = {
  // ── Bastos · Fuego · acción, pasión, creatividad ─────────────────────────
  'bastos-as': {
    nombre: 'As de Bastos',
    palabrasClave: {
      normal: ['chispa', 'inspiración', 'impulso', 'comienzo creativo'],
      invertida: ['idea que no arranca', 'desánimo', 'demora', 'fuego apagado'],
    },
    significado: {
      normal:
        'El As de Bastos es la chispa inicial: una idea que enciende las ganas ' +
        'de hacer. Marca el impulso puro, el momento en que algo nuevo pide ' +
        'nacer y solo espera que le pongas el cuerpo.',
      invertida:
        'Del revés, la chispa no prende: entusiasmo que se enfría, un proyecto ' +
        'que se demora o cuesta empezar. Puede señalar dudar justo cuando hacía ' +
        'falta el primer empujón.',
    },
    simbolismo:
      'Una mano sale de una nube y sostiene un bastón que reverdece: la energía ' +
      'cruda ofrecida desde lo alto. Las hojas que brotan muestran que ese ' +
      'impulso ya trae vida propia.',
  },
  'bastos-dos': {
    nombre: 'Dos de Bastos',
    palabrasClave: {
      normal: ['planificación', 'decisión', 'horizonte', 'primer paso'],
      invertida: ['miedo a lo desconocido', 'indecisión', 'quedarse'],
    },
    significado: {
      normal:
        'El Dos de Bastos es el momento de planear y mirar lejos. Ya hay algo ' +
        'logrado, pero se abre la pregunta de hacia dónde crecer. Invita a ' +
        'decidir el rumbo antes de lanzarse.',
      invertida:
        'Del revés, el horizonte da vértigo: miedo a salir de lo conocido, ' +
        'planes que no se concretan, quedarse en lo seguro por temor a lo ' +
        'grande.',
    },
    simbolismo:
      'Una figura sostiene un globo terráqueo y mira el mar desde una muralla, ' +
      'entre dos bastones: ya conquistó algo y evalúa el mundo por venir. El ' +
      'paisaje abierto es la posibilidad; la muralla, lo seguro que habría que ' +
      'dejar.',
  },
  'bastos-tres': {
    nombre: 'Tres de Bastos',
    palabrasClave: {
      normal: ['expansión', 'visión', 'progreso', 'esperar frutos'],
      invertida: ['demoras', 'planes trabados', 'expectativa frustrada'],
    },
    significado: {
      normal:
        'El Tres de Bastos es el proyecto ya en marcha: lo que sembraste empieza ' +
        'a moverse y ahora se aguarda su regreso. Habla de expansión, de mirar a ' +
        'lo lejos con confianza en lo puesto en camino.',
      invertida:
        'Del revés, lo esperado tarda: retrasos, planes que no vuelven como se ' +
        'creía, la frustración de ver el horizonte vacío. Puede pedir revisar ' +
        'las expectativas.',
    },
    simbolismo:
      'De espaldas, una figura contempla el mar desde una altura, con tres ' +
      'bastones firmes a su lado: los barcos ya zarparon. Mira hacia lo lejos ' +
      'porque lo suyo ya está en movimiento y solo resta esperar el retorno.',
  },
  'bastos-cuatro': {
    nombre: 'Cuatro de Bastos',
    palabrasClave: {
      normal: ['celebración', 'hogar', 'estabilidad', 'logro compartido'],
      invertida: ['festejo postergado', 'armonía frágil', 'transición'],
    },
    significado: {
      normal:
        'El Cuatro de Bastos es el brindis por lo conseguido. Habla de un logro ' +
        'que se comparte, de la alegría del hogar y de una base estable desde la ' +
        'cual descansar antes de seguir.',
      invertida:
        'Del revés, la celebración se enfría o se posterga: una armonía todavía ' +
        'frágil, un festejo que no termina de darse, un tránsito entre una etapa ' +
        'y otra.',
    },
    simbolismo:
      'Cuatro bastones sostienen una guirnalda de flores, como un pórtico ' +
      'festivo; al fondo, dos figuras celebran ante un castillo. Todo habla de ' +
      'un umbral alegre, de puertas abiertas a lo bueno ya logrado.',
  },
  'bastos-cinco': {
    nombre: 'Cinco de Bastos',
    palabrasClave: {
      normal: ['conflicto', 'competencia', 'roces', 'desorden'],
      invertida: ['evitar el choque', 'tensión que baja', 'acuerdo'],
    },
    significado: {
      normal:
        'El Cinco de Bastos es la fricción de muchos empujando a la vez. Habla de ' +
        'competencia, discusiones y pequeños choques de egos más ruidosos que ' +
        'graves. Suele pedir orden en medio del barullo.',
      invertida:
        'Del revés, el conflicto afloja: se evita el choque, la tensión baja o ' +
        'se encuentra un acuerdo. También puede ser esquivar una pelea que ' +
        'convenía dar.',
    },
    simbolismo:
      'Cinco figuras agitan sus bastones en lo que parece más una riña ' +
      'desordenada que una batalla real. Nadie está herido: es el caos de las ' +
      'voluntades que no se coordinan.',
  },
  'bastos-seis': {
    nombre: 'Seis de Bastos',
    palabrasClave: {
      normal: ['victoria', 'reconocimiento', 'éxito', 'liderazgo'],
      invertida: ['reconocimiento que falta', 'caída del favor', 'ego'],
    },
    significado: {
      normal:
        'El Seis de Bastos es el triunfo reconocido. Habla de éxito público, de ' +
        'ser aplaudido por un logro y de la confianza que da haberlo conseguido. ' +
        'La victoria aquí se muestra y se celebra.',
      invertida:
        'Del revés, falta el reconocimiento: un logro que nadie ve, la caída ' +
        'del favor o el ego inflado que confunde aplausos con valor real.',
    },
    simbolismo:
      'Un jinete avanza coronado de laurel sobre un caballo blanco, con la ' +
      'multitud rodeándolo y bastones en alto: el desfile del vencedor. El ' +
      'laurel en su bastón corona lo alcanzado.',
  },
  'bastos-siete': {
    nombre: 'Siete de Bastos',
    palabrasClave: {
      normal: ['defensa', 'coraje', 'sostener la posición', 'convicción'],
      invertida: ['agotamiento', 'ceder terreno', 'sentirse superado'],
    },
    significado: {
      normal:
        'El Siete de Bastos es plantarse y defender lo propio. Habla del coraje ' +
        'de sostener una posición frente a la oposición, aun cuando todos ' +
        'parecen venir en contra. Tienes la ventaja de la altura: la convicción.',
      invertida:
        'Del revés, cuesta sostenerse: agotamiento de tanto defender, ganas de ' +
        'ceder terreno, la sensación de estar en desventaja. Puede pedir elegir ' +
        'mejor qué batallas dar.',
    },
    simbolismo:
      'Una figura en lo alto de una loma repele con su bastón a otros seis que ' +
      'suben desde abajo: pelea desde una posición ventajosa. Sus zapatos ' +
      'dispares delatan que se armó apurado, pero resiste.',
  },
  'bastos-ocho': {
    nombre: 'Ocho de Bastos',
    palabrasClave: {
      normal: ['rapidez', 'movimiento', 'noticias', 'avance veloz'],
      invertida: ['demoras', 'atascos', 'prisa mal manejada'],
    },
    significado: {
      normal:
        'El Ocho de Bastos es todo movimiento: cosas que se aceleran, noticias ' +
        'que llegan, un proceso que por fin se dispara. Habla de acontecimientos ' +
        'rápidos, a veces de un viaje o un mensaje en camino.',
      invertida:
        'Del revés, el impulso se frena: demoras, mensajes que no llegan, un ' +
        'apuro que se traba. También puede ser ir demasiado rápido y perder el ' +
        'control.',
    },
    simbolismo:
      'Ocho bastones vuelan en paralelo por el aire, ya de bajada, sobre un ' +
      'paisaje sereno. No hay figuras: la carta es pura trayectoria, energía en ' +
      'pleno vuelo hacia su destino.',
  },
  'bastos-nueve': {
    nombre: 'Nueve de Bastos',
    palabrasClave: {
      normal: ['resistencia', 'perseverancia', 'última defensa', 'temple'],
      invertida: ['agotamiento', 'paranoia', 'bajar la guardia demasiado tarde'],
    },
    significado: {
      normal:
        'El Nueve de Bastos es el que sigue en pie tras muchas batallas. Cansado ' +
        'pero firme, guarda la última reserva de fuerzas. Habla de perseverar ' +
        'cuando ya casi lo lograste, aunque duela.',
      invertida:
        'Del revés, el cansancio gana: agotamiento, desconfianza que se vuelve ' +
        'paranoia, defender por inercia una posición que ya no hace falta ' +
        'defender.',
    },
    simbolismo:
      'Una figura vendada se apoya en un bastón y vigila a los otros ocho, ' +
      'clavados detrás como una empalizada. Está herido y alerta: espera un ' +
      'último ataque que quizá no llegue.',
  },
  'bastos-diez': {
    nombre: 'Diez de Bastos',
    palabrasClave: {
      normal: ['carga', 'responsabilidad', 'esfuerzo', 'exceso'],
      invertida: ['soltar peso', 'delegar', 'colapso', 'liberación'],
    },
    significado: {
      normal:
        'El Diez de Bastos es el peso de todo lo asumido. Habla de una carga que ' +
        'se volvió excesiva, de responsabilidades que uno arrastra casi sin ver ' +
        'el camino. El logro está, pero cuesta cargarlo solo.',
      invertida:
        'Del revés, algo se suelta: aprender a delegar y dejar peso, o bien el ' +
        'colapso de quien no soltó a tiempo. En su mejor cara, es liberarse de ' +
        'lo que no te tocaba llevar.',
    },
    simbolismo:
      'Una figura avanza doblada bajo diez bastones que apenas puede abrazar, ' +
      'tapándole la vista, rumbo a un pueblo cercano. La meta está a la vista, ' +
      'pero el bulto le impide verla.',
  },
  'bastos-sota': {
    nombre: 'Sota de Bastos',
    palabrasClave: {
      normal: ['entusiasmo', 'exploración', 'curiosidad', 'noticia inspiradora'],
      invertida: ['inconstancia', 'entusiasmo sin rumbo', 'noticia demorada'],
    },
    significado: {
      normal:
        'La Sota de Bastos es el espíritu explorador que recién empieza. Trae ' +
        'entusiasmo, curiosidad y ganas de probar. Puede anunciar una noticia ' +
        'que enciende un proyecto o a alguien joven de energía contagiosa.',
      invertida:
        'Del revés, ese fuego se dispersa: entusiasmo sin foco, promesas que no ' +
        'se sostienen, una noticia que se demora o decepciona.',
    },
    simbolismo:
      'Un joven observa su bastón florecido como quien mira una idea recién ' +
      'nacida, en un desierto de dunas. Su ropa con salamandras —criatura del ' +
      'fuego— habla de una energía que quiere expresarse.',
  },
  'bastos-caballo': {
    nombre: 'Caballo de Bastos',
    palabrasClave: {
      normal: ['aventura', 'impulso', 'acción', 'pasión en marcha'],
      invertida: ['impulsividad', 'prisa', 'proyecto que se enfría'],
    },
    significado: {
      normal:
        'El Caballo de Bastos es la energía lanzada a la acción. Habla de ' +
        'aventura, cambio de escenario y coraje para lanzarse. Cuando aparece, ' +
        'hay ganas de moverse y de encarar algo con pasión.',
      invertida:
        'Del revés, el impulso se descontrola: prisa, decisiones apresuradas, ' +
        'arranques que no se sostienen. También un proyecto que perdió su fuego.',
    },
    simbolismo:
      'Un jinete de armadura sujeta un caballo encabritado, listo para partir, ' +
      'sobre un paisaje árido. El movimiento del animal es puro ímpetu; el ' +
      'bastón florecido, la causa que lo lanza.',
  },
  'bastos-reina': {
    nombre: 'Reina de Bastos',
    palabrasClave: {
      normal: ['carisma', 'confianza', 'calidez', 'determinación'],
      invertida: ['inseguridad', 'celos', 'apagarse', 'exigencia'],
    },
    significado: {
      normal:
        'La Reina de Bastos irradia seguridad y calor. Habla de alguien ' +
        'carismático y decidido, que atrae por su energía y sostiene sus ' +
        'proyectos con pasión y firmeza. Sabe encender a los demás sin perder su ' +
        'centro.',
      invertida:
        'Del revés, esa luz vacila: inseguridad tapada con exigencia, celos, o ' +
        'una energía que se apagó y ya no contagia.',
    },
    simbolismo:
      'Sentada en un trono con leones y girasoles, sostiene un bastón florecido ' +
      'y, a sus pies, un gato negro: mira de frente, dueña de su fuego y también ' +
      'de su instinto. Todo en ella habla de calidez con carácter.',
  },
  'bastos-rey': {
    nombre: 'Rey de Bastos',
    palabrasClave: {
      normal: ['liderazgo', 'visión', 'empuje maduro', 'carisma'],
      invertida: ['autoritarismo', 'impaciencia', 'impulsividad', 'tiranía'],
    },
    significado: {
      normal:
        'El Rey de Bastos es el líder visionario. Habla de conducir con empuje y ' +
        'convicción, de inspirar a otros hacia una meta grande y de la madurez ' +
        'que sabe transformar la pasión en dirección.',
      invertida:
        'Del revés, el mando se tuerce: autoritarismo, impaciencia con quien no ' +
        'sigue su ritmo, decisiones tomadas al calor del impulso.',
    },
    simbolismo:
      'Sentado en un trono con salamandras y leones, sostiene su bastón como un ' +
      'cetro vivo. Una pequeña salamandra a sus pies mira hacia él: el fuego ' +
      'domesticado y puesto al servicio de una visión.',
  },
  // ── Copas · Agua · emociones, vínculos, intuición ────────────────────────
  'copas-as': {
    nombre: 'As de Copas',
    palabrasClave: {
      normal: ['amor nuevo', 'apertura', 'plenitud emocional', 'compasión'],
      invertida: ['corazón cerrado', 'emoción reprimida', 'vacío afectivo'],
    },
    significado: {
      normal:
        'El As de Copas es el corazón que se abre. Habla del comienzo de un amor, ' +
        'una amistad o una etapa emocional plena, del sentir que rebalsa y ' +
        'quiere darse. Es la fuente de los afectos ofreciéndose entera.',
      invertida:
        'Del revés, la copa se vuelca o se tapa: emociones reprimidas, un ' +
        'corazón que se cierra por miedo, un vacío afectivo que cuesta llenar.',
    },
    simbolismo:
      'Una mano ofrece desde una nube una copa rebosante, de la que caen cinco ' +
      'chorros de agua; una paloma desciende con una hostia. Todo desborda: es ' +
      'el amor en su estado más puro y generoso.',
  },
  'copas-dos': {
    nombre: 'Dos de Copas',
    palabrasClave: {
      normal: ['unión', 'atracción', 'sociedad', 'reciprocidad'],
      invertida: ['desequilibrio', 'ruptura', 'tensión en el vínculo'],
    },
    significado: {
      normal:
        'El Dos de Copas es el encuentro de dos que se eligen. Habla de atracción ' +
        'mutua, sociedad y reciprocidad: un vínculo donde ambos dan y reciben en ' +
        'igual medida. Es el brindis de una conexión verdadera.',
      invertida:
        'Del revés, el equilibrio se pierde: un vínculo que se desnivela, ' +
        'tensión entre dos, o una unión que se enfría o se rompe.',
    },
    simbolismo:
      'Dos figuras intercambian sus copas frente a frente. Sobre ellas, el ' +
      'caduceo de dos serpientes y una cabeza de león alado: las pasiones ' +
      'elevadas y equilibradas por el encuentro.',
  },
  'copas-tres': {
    nombre: 'Tres de Copas',
    palabrasClave: {
      normal: ['celebración', 'amistad', 'comunidad', 'alegría compartida'],
      invertida: ['exceso', 'chismes', 'aislarse', 'tercero en discordia'],
    },
    significado: {
      normal:
        'El Tres de Copas es el brindis entre amigos. Habla de celebración, ' +
        'comunidad y alegría compartida, del apoyo de los tuyos y de los buenos ' +
        'momentos que se festejan en grupo.',
      invertida:
        'Del revés, la fiesta se pasa de rosca: excesos, chismes que enturbian, ' +
        'un grupo que ya no suma, o la necesidad de retirarse del bullicio.',
    },
    simbolismo:
      'Tres figuras alzan sus copas en un corro, entre frutos de la cosecha: la ' +
      'abundancia se disfruta acompañada. El círculo que forman habla de ' +
      'pertenencia y celebración.',
  },
  'copas-cuatro': {
    nombre: 'Cuatro de Copas',
    palabrasClave: {
      normal: ['apatía', 'desinterés', 'contemplación', 'insatisfacción'],
      invertida: ['despertar', 'aceptar la oportunidad', 'salir del letargo'],
    },
    significado: {
      normal:
        'El Cuatro de Copas es la mirada hastiada que no ve lo que tiene ' +
        'delante. Habla de apatía, de desinterés por lo que se ofrece, de estar ' +
        'tan metido en uno mismo que se pasa por alto una oportunidad.',
      invertida:
        'Del revés, algo despierta: se levanta la vista, se acepta lo que se ' +
        'ofrece, se sale del letargo emocional para volver a interesarse.',
    },
    simbolismo:
      'Una figura sentada bajo un árbol, de brazos cruzados, ignora una copa ' +
      'que una mano le tiende desde una nube; delante tiene otras tres. Tan ' +
      'ensimismada está que no ve el regalo a su alcance.',
  },
  'copas-cinco': {
    nombre: 'Cinco de Copas',
    palabrasClave: {
      normal: ['pérdida', 'duelo', 'arrepentimiento', 'tristeza'],
      invertida: ['aceptación', 'perdón', 'volver a mirar lo que queda'],
    },
    significado: {
      normal:
        'El Cinco de Copas es el duelo por lo que se derramó. Habla de pérdida, ' +
        'arrepentimiento y de la tristeza que fija la mirada en lo perdido. Pero ' +
        'recuerda que no todo se cayó: algo aún queda en pie detrás.',
      invertida:
        'Del revés, la mirada gira hacia lo que resta: aceptación, perdón, la ' +
        'decisión de recoger lo que no se rompió y seguir.',
    },
    simbolismo:
      'Una figura de manto negro contempla tres copas volcadas y no ve las dos ' +
      'que siguen en pie a su espalda. Al fondo, un puente cruza el río hacia un ' +
      'hogar: el duelo tiene salida.',
  },
  'copas-seis': {
    nombre: 'Seis de Copas',
    palabrasClave: {
      normal: ['nostalgia', 'recuerdos', 'inocencia', 'reencuentro'],
      invertida: ['vivir en el pasado', 'idealizar', 'no soltar'],
    },
    significado: {
      normal:
        'El Seis de Copas es la dulzura del recuerdo. Habla de nostalgia, de la ' +
        'inocencia de la infancia, de un reencuentro o de la ternura de lo ' +
        'simple y conocido. Trae calor de lo que fue bueno.',
      invertida:
        'Del revés, la nostalgia atrapa: vivir anclado en el pasado, idealizar ' +
        'lo que ya no está, no poder soltar lo que terminó.',
    },
    simbolismo:
      'En un patio, una figura mayor ofrece a una menor una copa llena de ' +
      'flores: el gesto amable de proteger y compartir. Las cinco copas ' +
      'floridas alrededor hablan de recuerdos que aún perfuman.',
  },
  'copas-siete': {
    nombre: 'Siete de Copas',
    palabrasClave: {
      normal: ['fantasía', 'opciones', 'ilusiones', 'imaginación'],
      invertida: ['claridad', 'elegir', 'aterrizar', 'descartar espejismos'],
    },
    significado: {
      normal:
        'El Siete de Copas es la nube de posibilidades imaginadas. Habla de ' +
        'muchas opciones seductoras, de fantasías y deseos que se mezclan hasta ' +
        'confundir. Pide distinguir lo que es real de lo que solo brilla.',
      invertida:
        'Del revés, la niebla se disipa: llega la claridad para elegir, se ' +
        'descartan los espejismos y se aterriza en lo concreto.',
    },
    simbolismo:
      'Una figura en sombra contempla siete copas flotando en una nube, cada ' +
      'una con algo distinto: un rostro, joyas, una corona, un dragón. No todo ' +
      'lo que ofrecen es un tesoro; alguna esconde una trampa.',
  },
  'copas-ocho': {
    nombre: 'Ocho de Copas',
    palabrasClave: {
      normal: ['retirada', 'dejar atrás', 'búsqueda de sentido', 'partir'],
      invertida: ['miedo a irse', 'quedarse por inercia', 'volver'],
    },
    significado: {
      normal:
        'El Ocho de Copas es la decisión de irse en busca de algo más hondo. ' +
        'Habla de dejar atrás lo que ya no llena, aunque cueste, para seguir un ' +
        'llamado interior. Es una partida madura, no una huida.',
      invertida:
        'Del revés, cuesta partir: miedo a soltar, quedarse por inercia en lo ' +
        'que no satisface, o la duda entre irse y volver.',
    },
    simbolismo:
      'Una figura se aleja de espaldas hacia las montañas, dejando ocho copas ' +
      'ordenadas atrás, bajo una luna eclipsada. Se va de noche, hacia lo ' +
      'incierto, siguiendo algo que solo ella oye.',
  },
  'copas-nueve': {
    nombre: 'Nueve de Copas',
    palabrasClave: {
      normal: ['satisfacción', 'deseo cumplido', 'bienestar', 'gratitud'],
      invertida: ['complacencia', 'exceso', 'deseo insatisfecho'],
    },
    significado: {
      normal:
        'El Nueve de Copas es la carta del deseo cumplido. Habla de ' +
        'satisfacción, bienestar y del gusto de disfrutar lo conseguido. Es ' +
        'sentirse contento y agradecido por lo que uno tiene.',
      invertida:
        'Del revés, el disfrute se tuerce: complacencia vacía, buscar en el ' +
        'exceso lo que no llena, o un deseo que, aun cumplido, no satisface.',
    },
    simbolismo:
      'Una figura satisfecha se sienta con los brazos cruzados frente a nueve ' +
      'copas alineadas sobre un estrado curvo: exhibe su bonanza con orgullo. ' +
      'Es la imagen del que consiguió lo que quería.',
  },
  'copas-diez': {
    nombre: 'Diez de Copas',
    palabrasClave: {
      normal: ['felicidad', 'familia', 'armonía', 'plenitud emocional'],
      invertida: ['armonía rota', 'tensión familiar', 'ideal que no se cumple'],
    },
    significado: {
      normal:
        'El Diez de Copas es la plenitud del corazón compartida. Habla de ' +
        'felicidad familiar, vínculos armónicos y la sensación de que lo ' +
        'emocional está completo. Es el hogar en paz y el afecto que colma.',
      invertida:
        'Del revés, esa armonía se resquebraja: tensiones en la familia, un ' +
        'ideal de felicidad que no se cumple, la distancia entre lo soñado y lo ' +
        'real.',
    },
    simbolismo:
      'Una pareja abraza y alza los brazos hacia un arcoíris de diez copas, ' +
      'mientras dos niños juegan al lado, ante una casa. Todo el cuadro respira ' +
      'un bienestar sereno y compartido.',
  },
  'copas-sota': {
    nombre: 'Sota de Copas',
    palabrasClave: {
      normal: ['ternura', 'mensaje afectivo', 'sensibilidad', 'creatividad'],
      invertida: ['inmadurez emocional', 'susceptibilidad', 'noticia decepcionante'],
    },
    significado: {
      normal:
        'La Sota de Copas es el corazón que se sorprende. Trae un mensaje ' +
        'afectivo, una propuesta creativa o el despertar de una sensibilidad ' +
        'nueva. Puede señalar a alguien tierno y soñador, o una noticia que ' +
        'emociona.',
      invertida:
        'Del revés, esa sensibilidad se traba: susceptibilidad, inmadurez ' +
        'emocional, o una noticia del corazón que decepciona.',
    },
    simbolismo:
      'Un joven sostiene una copa de la que asoma, insólito, un pez: la ' +
      'imaginación que emerge del inconsciente. Su gesto curioso habla de estar ' +
      'abierto a lo que el sentir traiga.',
  },
  'copas-caballo': {
    nombre: 'Caballo de Copas',
    palabrasClave: {
      normal: ['romance', 'propuesta', 'idealismo', 'seguir el corazón'],
      invertida: ['ilusión vana', 'inconstancia', 'promesa incumplida'],
    },
    significado: {
      normal:
        'El Caballo de Copas es el que llega con una propuesta del corazón. ' +
        'Habla de romance, de idealismo y de seguir el sentir con elegancia. ' +
        'Cuando aparece, hay una invitación afectiva en camino.',
      invertida:
        'Del revés, el romanticismo se desdibuja: promesas que no se cumplen, ' +
        'ilusiones sin sustento, un encanto que resulta ser solo apariencia.',
    },
    simbolismo:
      'Un jinete avanza sereno, ofreciendo su copa como quien ofrece un ' +
      'sentimiento; su caballo va al paso, sin prisa. Es el mensajero del amor, ' +
      'más soñador que guerrero.',
  },
  'copas-reina': {
    nombre: 'Reina de Copas',
    palabrasClave: {
      normal: ['empatía', 'intuición', 'contención', 'sensibilidad'],
      invertida: ['dependencia', 'desborde emocional', 'dar de más'],
    },
    significado: {
      normal:
        'La Reina de Copas siente hondo y contiene a los demás. Habla de ' +
        'empatía, intuición y de la capacidad de acompañar sin perderse. Es la ' +
        'madurez emocional que comprende sin juzgar.',
      invertida:
        'Del revés, el sentir se desborda: dependencia afectiva, cargar con las ' +
        'emociones ajenas, dar tanto que uno se vacía.',
    },
    simbolismo:
      'Sentada en un trono junto al mar, contempla absorta una copa cerrada y ' +
      'ornamentada, la única del mazo con tapa: guarda un mundo interior rico. ' +
      'El agua a sus pies es su elemento, el del sentir.',
  },
  'copas-rey': {
    nombre: 'Rey de Copas',
    palabrasClave: {
      normal: ['equilibrio emocional', 'serenidad', 'diplomacia', 'madurez'],
      invertida: ['emociones reprimidas', 'manipulación afectiva', 'frialdad'],
    },
    significado: {
      normal:
        'El Rey de Copas domina el mar del sentir sin ahogarse en él. Habla de ' +
        'equilibrio emocional, serenidad y diplomacia: sentir profundo pero ' +
        'mantener la calma. Es el que aconseja con el corazón y la cabeza a la ' +
        'vez.',
      invertida:
        'Del revés, ese equilibrio se pierde: emociones tapadas que presionan ' +
        'por dentro, manipulación afectiva, o una frialdad que niega el sentir.',
    },
    simbolismo:
      'Su trono flota sobre un mar agitado, pero él permanece sereno con su ' +
      'copa en la mano: contiene la marea sin dejarse arrastrar. Un pez y un ' +
      'barco alrededor recuerdan el elemento que gobierna.',
  },
  // ── Espadas · Aire · mente, verdad, conflicto ────────────────────────────
  'espadas-as': {
    nombre: 'As de Espadas',
    palabrasClave: {
      normal: ['claridad', 'verdad', 'idea', 'nuevo enfoque'],
      invertida: ['confusión', 'idea nublada', 'verdad usada para herir'],
    },
    significado: {
      normal:
        'El As de Espadas es el corte de la claridad. Habla de una verdad que se ' +
        've de golpe, una idea filosa que ordena el caos, un nuevo modo de ' +
        'pensar. Es el momento en que la mente atraviesa la niebla.',
      invertida:
        'Del revés, la hoja no corta limpio: confusión, ideas nubladas, o la ' +
        'verdad usada como arma para herir en vez de para aclarar.',
    },
    simbolismo:
      'Una mano surge de una nube empuñando una espada erguida, coronada de ' +
      'laurel: la victoria de la razón. Su filo único parte el aire; nada se ' +
      'interpone entre la mente y lo verdadero.',
  },
  'espadas-dos': {
    nombre: 'Dos de Espadas',
    palabrasClave: {
      normal: ['bloqueo', 'decisión evitada', 'equilibrio tenso', 'tregua'],
      invertida: ['salir del bloqueo', 'ver la verdad', 'decisión al fin'],
    },
    significado: {
      normal:
        'El Dos de Espadas es la decisión que se evita. Habla de un equilibrio ' +
        'tenso, de no querer mirar para no tener que elegir, de una tregua ' +
        'incómoda que no puede durar. Tarde o temprano hay que bajar la venda.',
      invertida:
        'Del revés, algo se destraba: se quita la venda, se ve la situación de ' +
        'frente y por fin se toma la decisión postergada.',
    },
    simbolismo:
      'Una figura con los ojos vendados cruza dos espadas sobre su pecho, ' +
      'sentada de espaldas al mar bajo la luna: no quiere ni ver ni decidir. El ' +
      'equilibrio de los brazos es tan firme como frágil.',
  },
  'espadas-tres': {
    nombre: 'Tres de Espadas',
    palabrasClave: {
      normal: ['dolor', 'ruptura', 'pena', 'desengaño'],
      invertida: ['sanar', 'perdonar', 'dolor que afloja', 'liberar la pena'],
    },
    significado: {
      normal:
        'El Tres de Espadas es la herida del corazón nombrada sin rodeos: dolor, ' +
        'ruptura, desengaño. Es la pena que atraviesa, pero también la verdad ' +
        'que, aunque duela, aclara lo que estaba pasando.',
      invertida:
        'Del revés, la herida empieza a cerrar: el dolor afloja, llega el ' +
        'perdón, se libera la pena que se venía cargando.',
    },
    simbolismo:
      'Tres espadas atraviesan un corazón rojo bajo un cielo de lluvia. La ' +
      'imagen es directa y sin adornos: el dolor no se disimula, se muestra tal ' +
      'como es para poder soltarlo.',
  },
  'espadas-cuatro': {
    nombre: 'Cuatro de Espadas',
    palabrasClave: {
      normal: ['descanso', 'recuperación', 'pausa', 'retiro'],
      invertida: ['agotamiento', 'reanudar antes de tiempo', 'inquietud'],
    },
    significado: {
      normal:
        'El Cuatro de Espadas es la tregua necesaria. Habla de descansar, ' +
        'recuperarse y darle a la mente un respiro tras la tormenta. No es ' +
        'rendirse: es reponer fuerzas antes de volver.',
      invertida:
        'Del revés, el descanso no llega o se interrumpe: agotamiento que se ' +
        'arrastra, volver a la carga antes de estar listo, una inquietud que no ' +
        'deja parar.',
    },
    simbolismo:
      'Una figura yace como en reposo sobre una tumba, con tres espadas ' +
      'colgadas en la pared y una cuarta bajo su cuerpo: se retira a sanar. La ' +
      'quietud es voluntaria, un alto para recobrar el aliento.',
  },
  'espadas-cinco': {
    nombre: 'Cinco de Espadas',
    palabrasClave: {
      normal: ['conflicto', 'derrota', 'ganar a cualquier costo', 'tensión'],
      invertida: ['reconciliación', 'soltar el orgullo', 'fin del conflicto'],
    },
    significado: {
      normal:
        'El Cinco de Espadas es la victoria que deja gusto amargo. Habla de un ' +
        'conflicto donde alguien gana a costa de todo, de orgullo herido y de ' +
        'batallas que no valían el precio. Pregunta si vale más tener razón o ' +
        'tener paz.',
      invertida:
        'Del revés, se busca reparar: soltar el orgullo, reconciliarse, dejar ' +
        'atrás una pelea que ya hizo bastante daño.',
    },
    simbolismo:
      'Una figura recoge las espadas con una sonrisa torva, mientras dos otras ' +
      'se alejan cabizbajas: ganó, pero quedó solo. El cielo revuelto delata ' +
      'que nadie salió entero de este choque.',
  },
  'espadas-seis': {
    nombre: 'Seis de Espadas',
    palabrasClave: {
      normal: ['transición', 'alejarse', 'viaje', 'aguas más calmas'],
      invertida: ['equipaje emocional', 'transición trabada', 'no poder soltar'],
    },
    significado: {
      normal:
        'El Seis de Espadas es el cruce hacia aguas más tranquilas. Habla de ' +
        'alejarse de una situación difícil, de una transición o un viaje que ' +
        'lleva de lo turbulento a lo sereno. No es huir: es dejar atrás para ' +
        'sanar.',
      invertida:
        'Del revés, la travesía se traba: cuesta soltar lo que quedó atrás, se ' +
        'carga el peso emocional del pasado, la transición no termina de darse.',
    },
    simbolismo:
      'Un barquero lleva a una figura y a un niño por un agua que está agitada ' +
      'de un lado y calma del otro; las espadas van clavadas en la barca, no se ' +
      'dejan del todo. Se avanza hacia la orilla mansa.',
  },
  'espadas-siete': {
    nombre: 'Siete de Espadas',
    palabrasClave: {
      normal: ['estrategia', 'sigilo', 'astucia', 'actuar solo'],
      invertida: ['engaño descubierto', 'confesión', 'devolver lo tomado'],
    },
    significado: {
      normal:
        'El Siete de Espadas es la jugada sigilosa. Habla de estrategia, astucia ' +
        'y de conseguir algo por vías indirectas; en su cara sombría, de engaño ' +
        'o de actuar a espaldas de otros. Pide honestidad sobre los propios ' +
        'métodos.',
      invertida:
        'Del revés, lo oculto sale a la luz: un engaño que se descubre, una ' +
        'confesión, la decisión de devolver lo que se tomó por atajo.',
    },
    simbolismo:
      'Una figura se escabulle de un campamento cargando cinco espadas y ' +
      'dejando dos atrás, mirando por encima del hombro: se lleva algo a ' +
      'hurtadillas. La sonrisa nerviosa delata la jugada.',
  },
  'espadas-ocho': {
    nombre: 'Ocho de Espadas',
    palabrasClave: {
      normal: ['sentirse atrapado', 'límites mentales', 'parálisis', 'victimismo'],
      invertida: ['liberarse', 'ver la salida', 'recuperar el poder'],
    },
    significado: {
      normal:
        'El Ocho de Espadas es la cárcel que en gran parte es mental. Habla de ' +
        'sentirse atrapado, limitado, sin salida, cuando muchas de esas rejas ' +
        'las pusieron los propios miedos. La venda se puede quitar.',
      invertida:
        'Del revés, se afloja la atadura: ver que la salida estaba ahí, ' +
        'liberarse de la creencia que paralizaba, recuperar el propio poder.',
    },
    simbolismo:
      'Una figura vendada y atada aparece rodeada de ocho espadas clavadas en ' +
      'la tierra, sobre un barro que aún deja pasar. Pero mira: las espadas no ' +
      'cierran el círculo; hay un camino libre hacia atrás.',
  },
  'espadas-nueve': {
    nombre: 'Nueve de Espadas',
    palabrasClave: {
      normal: ['angustia', 'insomnio', 'ansiedad', 'culpa'],
      invertida: ['salir de la angustia', 'pedir ayuda', 'miedo desproporcionado'],
    },
    significado: {
      normal:
        'El Nueve de Espadas es la angustia de la madrugada. Habla de ' +
        'preocupaciones que crecen en la oscuridad, insomnio, culpa y miedos que ' +
        'de noche se vuelven gigantes. Muchas veces el fantasma es más grande ' +
        'que el hecho.',
      invertida:
        'Del revés, la noche empieza a ceder: salir de la angustia, pedir ' +
        'ayuda, entender que el miedo era más grande que la realidad.',
    },
    simbolismo:
      'Una figura se incorpora en la cama y se cubre el rostro, con nueve ' +
      'espadas colgando en la pared oscura tras de sí. Es la desesperación ' +
      'nocturna; pero las espadas están en la pared, no clavadas en el cuerpo.',
  },
  'espadas-diez': {
    nombre: 'Diez de Espadas',
    palabrasClave: {
      normal: ['final doloroso', 'tocar fondo', 'cierre', 'traición'],
      invertida: ['recuperación', 'lo peor ya pasó', 'resistirse al final'],
    },
    significado: {
      normal:
        'El Diez de Espadas es el final que toca fondo. Habla de un cierre ' +
        'doloroso, a veces sentido como traición o derrota total. Pero es ' +
        'también el punto más bajo, desde el cual solo se puede subir: detrás ya ' +
        'amanece.',
      invertida:
        'Del revés, empieza la recuperación: lo peor ya pasó, se recoge lo que ' +
        'quedó y se recompone. También puede ser resistirse a aceptar un final ' +
        'que ya llegó.',
    },
    simbolismo:
      'Una figura yace boca abajo con diez espadas clavadas en la espalda, junto ' +
      'a un agua quieta. Pero en el horizonte despunta un sol dorado: por ' +
      'terrible que parezca, es el fondo, y desde el fondo se vuelve a subir.',
  },
  'espadas-sota': {
    nombre: 'Sota de Espadas',
    palabrasClave: {
      normal: ['curiosidad mental', 'vigilancia', 'ideas nuevas', 'palabra ágil'],
      invertida: ['palabra hiriente', 'chisme', 'suspicacia', 'todo mente'],
    },
    significado: {
      normal:
        'La Sota de Espadas es la mente despierta y curiosa. Trae ideas nuevas, ' +
        'ganas de entender y una palabra ágil. Puede señalar a alguien vigilante ' +
        'y perspicaz, o una noticia que hace pensar.',
      invertida:
        'Del revés, esa agudeza corta: palabras hirientes, chismes, suspicacia, ' +
        'una mente que analiza todo y no siente nada.',
    },
    simbolismo:
      'Un joven alza su espada en alto sobre un terreno ventoso, atento a todo ' +
      'lo que se mueve: pura alerta mental. El viento que agita su cabello es el ' +
      'elemento del aire, el del pensamiento.',
  },
  'espadas-caballo': {
    nombre: 'Caballo de Espadas',
    palabrasClave: {
      normal: ['ímpetu mental', 'ir de frente', 'determinación', 'prisa'],
      invertida: ['impulsividad', 'agresividad', 'atropello', 'ideas sin freno'],
    },
    significado: {
      normal:
        'El Caballo de Espadas carga hacia adelante con la fuerza de una idea. ' +
        'Habla de determinación, de ir de frente y decir las cosas sin rodeos, ' +
        'de una mente veloz lanzada a la acción. Corta rápido, para bien y para ' +
        'mal.',
      invertida:
        'Del revés, el ímpetu se vuelve atropello: impulsividad, agresividad en ' +
        'la palabra, decisiones tomadas sin pensar las consecuencias.',
    },
    simbolismo:
      'Un jinete galopa a toda furia con la espada en alto, en medio de un ' +
      'cielo tormentoso y árboles doblados por el viento. Es la carta de mayor ' +
      'velocidad del mazo: la idea que no espera a nadie.',
  },
  'espadas-reina': {
    nombre: 'Reina de Espadas',
    palabrasClave: {
      normal: ['claridad', 'independencia', 'honestidad', 'perspicacia'],
      invertida: ['frialdad', 'dureza', 'crítica hiriente', 'rencor'],
    },
    significado: {
      normal:
        'La Reina de Espadas piensa con lucidez y habla con la verdad. Habla de ' +
        'independencia, honestidad y perspicacia: alguien que no se deja engañar ' +
        'y dice las cosas claras, con la experiencia de quien ya vivió y aprendió.',
      invertida:
        'Del revés, esa claridad se enfría: dureza, crítica que hiere, rencor, ' +
        'una mente afilada que se cierra al sentir.',
    },
    simbolismo:
      'Sentada en su trono entre nubes, sostiene la espada erguida y extiende la ' +
      'otra mano como quien invita a decir la verdad. Su perfil severo mira al ' +
      'frente: no teme lo que pueda oír.',
  },
  'espadas-rey': {
    nombre: 'Rey de Espadas',
    palabrasClave: {
      normal: ['autoridad intelectual', 'juicio', 'ética', 'verdad'],
      invertida: ['frialdad', 'abuso de poder', 'dureza', 'manipulación'],
    },
    significado: {
      normal:
        'El Rey de Espadas gobierna con la razón y la ley. Habla de autoridad ' +
        'intelectual, de juicio claro y de decisiones tomadas con ética y ' +
        'objetividad. Es el que corta lo justo, sin dejarse llevar por el ' +
        'capricho.',
      invertida:
        'Del revés, la razón se vuelve fría o injusta: abuso de poder, dureza ' +
        'sin compasión, argumentos usados para manipular en lugar de esclarecer.',
    },
    simbolismo:
      'Sentado de frente en su trono, sostiene la espada recta, ligeramente ' +
      'inclinada: el equilibrio entre la firmeza y la duda justa. Las mariposas ' +
      'y ángeles tallados hablan de una mente que aspira a lo alto.',
  },
  // ── Oros · Tierra · trabajo, cuerpo, recursos ────────────────────────────
  'oros-as': {
    nombre: 'As de Oros',
    palabrasClave: {
      normal: ['oportunidad', 'prosperidad', 'semilla material', 'nuevo recurso'],
      invertida: ['oportunidad perdida', 'inseguridad material', 'mala inversión'],
    },
    significado: {
      normal:
        'El As de Oros es la semilla de la prosperidad. Habla del comienzo de ' +
        'algo concreto y fértil: un trabajo, un ingreso, un proyecto material ' +
        'con futuro. Es una oportunidad tangible que se ofrece para cultivar.',
      invertida:
        'Del revés, la semilla no prospera: una oportunidad que se deja pasar, ' +
        'inseguridad material, planes que prometían y no cuajan.',
    },
    simbolismo:
      'Una mano ofrece desde una nube una gran moneda dorada sobre un jardín ' +
      'florido, con un arco de flores que da a las montañas. Todo indica un ' +
      'comienzo abundante y con raíces en lo real.',
  },
  'oros-dos': {
    nombre: 'Dos de Oros',
    palabrasClave: {
      normal: ['equilibrio', 'malabares', 'adaptación', 'prioridades'],
      invertida: ['sobrecarga', 'desorden', 'perder el equilibrio'],
    },
    significado: {
      normal:
        'El Dos de Oros es el arte de hacer malabares. Habla de equilibrar ' +
        'varias cosas a la vez —tiempo, dinero, tareas— con flexibilidad y buen ' +
        'humor. Se puede sostener todo mientras uno se mantenga en movimiento.',
      invertida:
        'Del revés, los malabares se caen: sobrecarga, desorden, la sensación de ' +
        'no llegar a todo y perder el ritmo.',
    },
    simbolismo:
      'Una figura baila haciendo malabares con dos monedas unidas por un lazo ' +
      'en forma de infinito, mientras al fondo dos barcos suben y bajan por olas ' +
      'altas. El equilibrio es dinámico: se sostiene bailando.',
  },
  'oros-tres': {
    nombre: 'Tres de Oros',
    palabrasClave: {
      normal: ['oficio', 'trabajo en equipo', 'colaboración', 'competencia'],
      invertida: ['falta de coordinación', 'trabajo mediocre', 'desacuerdo'],
    },
    significado: {
      normal:
        'El Tres de Oros es el oficio reconocido y el trabajo bien hecho en ' +
        'equipo. Habla de colaboración, de sumar talentos distintos hacia una ' +
        'obra común y de la satisfacción de aportar lo que uno sabe hacer.',
      invertida:
        'Del revés, la colaboración falla: falta de coordinación, desacuerdos, ' +
        'trabajo hecho a medias o sin el compromiso de todos.',
    },
    simbolismo:
      'Un artesano trabaja en una catedral mientras dos figuras consultan sus ' +
      'planos: cada uno aporta lo suyo a una obra mayor. El diálogo entre manos ' +
      'y diseño levanta lo que ninguno haría solo.',
  },
  'oros-cuatro': {
    nombre: 'Cuatro de Oros',
    palabrasClave: {
      normal: ['seguridad', 'ahorro', 'control', 'conservar'],
      invertida: ['avaricia', 'soltar', 'apego excesivo', 'generosidad'],
    },
    significado: {
      normal:
        'El Cuatro de Oros es el que retiene lo suyo con firmeza. Habla de ' +
        'seguridad material, ahorro y control; en su justa medida, prudencia. ' +
        'Pero recuerda que aferrarse demasiado también deja las manos ocupadas.',
      invertida:
        'Del revés, el puño se abre o se cierra de más: o bien avaricia y apego ' +
        'que asfixian, o el aprendizaje de soltar y compartir.',
    },
    simbolismo:
      'Una figura sentada abraza una moneda contra el pecho, sostiene otra bajo ' +
      'la corona y pisa dos más: no suelta nada. La ciudad al fondo es lo que ' +
      'protege, pero también aquello de lo que se aísla.',
  },
  'oros-cinco': {
    nombre: 'Cinco de Oros',
    palabrasClave: {
      normal: ['carencia', 'dificultad material', 'exclusión', 'preocupación'],
      invertida: ['recuperación', 'pedir ayuda', 'fin de la mala racha'],
    },
    significado: {
      normal:
        'El Cinco de Oros es el frío de la carencia. Habla de dificultad ' +
        'material, de sentirse afuera, dejado de lado o en apuros. Pero también ' +
        'recuerda que a veces el refugio está cerca y no lo vemos.',
      invertida:
        'Del revés, la racha cambia: recuperación material, la ayuda que ' +
        'aparece, salir de la carencia y volver a entrar en calor.',
    },
    simbolismo:
      'Dos figuras pobres y ateridas caminan por la nieve frente a un vitral ' +
      'iluminado de una iglesia: el auxilio está a un paso, tras el muro, y no ' +
      'lo miran. La carencia también es no ver la puerta.',
  },
  'oros-seis': {
    nombre: 'Seis de Oros',
    palabrasClave: {
      normal: ['generosidad', 'dar y recibir', 'ayuda', 'equidad'],
      invertida: ['deuda', 'dádiva con condiciones', 'desequilibrio en el dar'],
    },
    significado: {
      normal:
        'El Seis de Oros es el flujo justo de dar y recibir. Habla de ' +
        'generosidad, de ayuda que llega o que se ofrece, del equilibrio entre ' +
        'quien tiene y quien necesita. Hoy das; mañana, quizá, recibes.',
      invertida:
        'Del revés, ese equilibrio se tuerce: ayuda con condiciones, deudas que ' +
        'atan, un dar y recibir que no está parejo o esconde poder.',
    },
    simbolismo:
      'Un mercader sostiene una balanza y reparte monedas a dos mendigos ' +
      'arrodillados: la equidad hecha gesto. La balanza recuerda que dar bien es ' +
      'también medir con justicia.',
  },
  'oros-siete': {
    nombre: 'Siete de Oros',
    palabrasClave: {
      normal: ['paciencia', 'evaluar', 'cosecha en camino', 'inversión'],
      invertida: ['impaciencia', 'esfuerzo mal invertido', 'resultados escasos'],
    },
    significado: {
      normal:
        'El Siete de Oros es la pausa para evaluar lo sembrado. Habla de ' +
        'paciencia, de mirar lo que crece y decidir si seguir cultivándolo. Los ' +
        'frutos aún no están maduros, pero el trabajo ya rinde.',
      invertida:
        'Del revés, la espera desespera: impaciencia por resultados, la sospecha ' +
        'de haber invertido esfuerzo donde no rinde, cosechas más pobres de lo ' +
        'esperado.',
    },
    simbolismo:
      'Una figura apoyada en su azada contempla un arbusto cargado de siete ' +
      'monedas: se detiene a medir su cosecha. No recoge todavía; evalúa si el ' +
      'esfuerzo va por buen camino.',
  },
  'oros-ocho': {
    nombre: 'Ocho de Oros',
    palabrasClave: {
      normal: ['dedicación', 'oficio', 'aprendizaje', 'esmero'],
      invertida: ['trabajo mecánico', 'perfeccionismo', 'desgano', 'chapucería'],
    },
    significado: {
      normal:
        'El Ocho de Oros es el placer del oficio hecho con esmero. Habla de ' +
        'dedicación, de mejorar a fuerza de práctica y de la satisfacción de ' +
        'perfeccionar lo que uno sabe hacer. El talento se afina repitiendo.',
      invertida:
        'Del revés, el oficio se enfría: trabajo mecánico y sin alma, ' +
        'perfeccionismo que paraliza, o desgano que lleva a hacer las cosas de ' +
        'cualquier modo.',
    },
    simbolismo:
      'Un artesano cincela con esmero una moneda tras otra, colgándolas ' +
      'terminadas a su lado, apartado del pueblo que se ve al fondo. Está ' +
      'absorto en su tarea: el mundo puede esperar, el oficio no.',
  },
  'oros-nueve': {
    nombre: 'Nueve de Oros',
    palabrasClave: {
      normal: ['independencia', 'autosuficiencia', 'disfrute logrado', 'refinamiento'],
      invertida: ['dependencia', 'soledad', 'gasto imprudente', 'logro a costa de todo'],
    },
    significado: {
      normal:
        'El Nueve de Oros es el disfrute sereno de lo conseguido por mérito ' +
        'propio. Habla de independencia, autosuficiencia y del gusto refinado de ' +
        'quien se hizo su propio jardín. Es estar bien, y a solas, sin que falte ' +
        'nada.',
      invertida:
        'Del revés, ese bienestar se resiente: dependencia de otros, soledad que ' +
        'pesa, gastos imprudentes, o un logro alcanzado a costa de todo lo demás.',
    },
    simbolismo:
      'Una figura elegante pasea por un viñedo cargado de monedas, con un halcón ' +
      'posado y sereno en su mano enguantada: dominio y disfrute a la vez. El ' +
      'jardín próspero es obra suya, y lo goza sola.',
  },
  'oros-diez': {
    nombre: 'Diez de Oros',
    palabrasClave: {
      normal: ['prosperidad', 'legado', 'familia', 'riqueza estable'],
      invertida: ['conflicto por dinero', 'inestabilidad', 'apego al patrimonio'],
    },
    significado: {
      normal:
        'El Diez de Oros es la prosperidad que echa raíces y se hereda. Habla de ' +
        'riqueza estable, familia, legado y de la seguridad que se construye a ' +
        'lo largo del tiempo. Es lo material en su forma más duradera y ' +
        'compartida.',
      invertida:
        'Del revés, esa base se sacude: conflictos por dinero o herencias, ' +
        'inestabilidad, apego al patrimonio que enreda los vínculos.',
    },
    simbolismo:
      'Bajo un arco, conviven tres generaciones —un anciano, una pareja, un ' +
      'niño— y dos perros, rodeados de diez monedas dispuestas como un árbol de ' +
      'la vida. La riqueza aquí es linaje y hogar, no solo oro.',
  },
  'oros-sota': {
    nombre: 'Sota de Oros',
    palabrasClave: {
      normal: ['estudio', 'plan concreto', 'nueva oportunidad', 'aplicación'],
      invertida: ['distracción', 'plan sin acción', 'oportunidad desperdiciada'],
    },
    significado: {
      normal:
        'La Sota de Oros es el estudiante aplicado de la vida. Trae una ' +
        'oportunidad concreta, ganas de aprender un oficio o de poner manos a un ' +
        'plan real. Es el primer paso serio hacia algo material y duradero.',
      invertida:
        'Del revés, ese foco se pierde: distracción, planes que no pasan del ' +
        'papel, una oportunidad concreta que se deja escapar por falta de ' +
        'compromiso.',
    },
    simbolismo:
      'Un joven contempla absorto una moneda que sostiene con ambas manos, de ' +
      'pie en un campo verde y arado: estudia con atención lo que tiene entre ' +
      'las manos. El terreno fértil promete frutos si lo cultiva.',
  },
  'oros-caballo': {
    nombre: 'Caballo de Oros',
    palabrasClave: {
      normal: ['constancia', 'método', 'fiabilidad', 'trabajo paciente'],
      invertida: ['estancamiento', 'monotonía', 'pereza', 'terquedad'],
    },
    significado: {
      normal:
        'El Caballo de Oros es el más metódico y confiable. Habla de constancia, ' +
        'de avanzar paso a paso sin apuro pero sin pausa, de la fiabilidad de ' +
        'quien termina lo que empieza. No brilla por veloz, sino por seguro.',
      invertida:
        'Del revés, la constancia se vuelve inercia: estancamiento, monotonía, ' +
        'pereza, o terquedad que insiste en un método que ya no sirve.',
    },
    simbolismo:
      'A diferencia de los otros caballos, este permanece quieto: el jinete ' +
      'sostiene su moneda y contempla el campo arado, sin prisa. La detención es ' +
      'la clave: el trabajo firme no necesita galopar.',
  },
  'oros-reina': {
    nombre: 'Reina de Oros',
    palabrasClave: {
      normal: ['abundancia práctica', 'cuidado', 'sensatez', 'nutrir'],
      invertida: ['agobio', 'descuido de sí', 'materialismo', 'inseguridad'],
    },
    significado: {
      normal:
        'La Reina de Oros cuida lo material y a los suyos con los pies en la ' +
        'tierra. Habla de abundancia práctica, de un hogar próspero y de la ' +
        'sensatez de quien sabe administrar y nutrir a la vez. Genera bienestar ' +
        'concreto alrededor.',
      invertida:
        'Del revés, ese cuidado se desequilibra: agobio por atender todo, ' +
        'descuidarse a una misma por sostener a los demás, o un materialismo que ' +
        'nace de la inseguridad.',
    },
    simbolismo:
      'Sentada en un trono florido, sostiene su moneda en el regazo como a algo ' +
      'vivo, rodeada de un jardín exuberante; un conejo asoma a sus pies, ' +
      'símbolo de fertilidad. Todo en ella nutre y da fruto.',
  },
  'oros-rey': {
    nombre: 'Rey de Oros',
    palabrasClave: {
      normal: ['éxito material', 'seguridad', 'maestría', 'generosidad próspera'],
      invertida: ['codicia', 'obstinación', 'apego al estatus', 'rigidez'],
    },
    significado: {
      normal:
        'El Rey de Oros es la maestría en lo material lograda con los años. ' +
        'Habla de éxito consolidado, seguridad, buen manejo de los recursos y de ' +
        'la generosidad de quien ya no teme por lo suyo. Es la abundancia estable ' +
        'y confiable.',
      invertida:
        'Del revés, la prosperidad se agría: codicia, obstinación, apego al ' +
        'estatus y a controlar, rigidez de quien mide todo en dinero.',
    },
    simbolismo:
      'Sentado en un trono tallado con toros, entre viñedos y con una moneda en ' +
      'la mano, su armadura asoma bajo el manto: prosperó y sabe defender lo ' +
      'logrado. El paisaje cargado de frutos es la prueba de su buen gobierno.',
  },
};
