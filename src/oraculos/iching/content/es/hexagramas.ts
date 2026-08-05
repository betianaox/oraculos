import type { Hexagrama, BaseHexagramas } from '../types';

// Contenido de los hexagramas en español. Todo es redacción propia: parafrasea
// el sentido tradicional (que es de dominio público como idea; el texto en sí
// es nuestro, seguro para Play). El texto que ve el usuario va con acentos.
//
// Español neutro, sin voseo, sin marcar género de quien consulta (igual que el
// resto del contenido de la app).
//
// Por ahora están los primeros 4 (para calibrar el tono antes de los 64).

const hex1: Hexagrama = {
  numero: 1,
  lineas: [1, 1, 1, 1, 1, 1], // seis yang: Cielo sobre Cielo
  nombre: 'Lo Creativo',
  nombreAlterno: 'Qián',
  palabrasClave: ['fuerza creadora', 'iniciativa', 'perseverancia', 'liderazgo'],

  dictamen:
    'La energía creadora está en su punto más alto: hay un impulso capaz de dar ' +
    'origen a algo grande. El éxito acompaña a quien sostiene esa fuerza con ' +
    'rectitud y constancia, sin dejarse arrastrar por el apuro ni por el deseo de ' +
    'resultados inmediatos.',

  imagen:
    'El cielo se mueve con fuerza incansable, día tras día, sin detenerse. Así ' +
    'también conviene volverse fuerte de manera sostenida: cultivar la propia ' +
    'energía en lugar de gastarla, y actuar cuando el momento lo pide en vez de ' +
    'forzar cada paso.',

  significado: {
    general:
      'Es un momento de gran potencial. Tienes la iniciativa y la claridad para ' +
      'empezar algo importante, pero la fuerza sola no alcanza: se trata de ' +
      'dirigirla con propósito y sostenerla en el tiempo. La verdadera potencia ' +
      'se muestra en saber cuándo avanzar y cuándo esperar.',
    amor:
      'Hay una energía fuerte y franca en juego. Es buen momento para tomar la ' +
      'iniciativa y mostrarte con claridad, siempre que acompañes el impulso con ' +
      'respeto por el tiempo del otro. El exceso de dominio enfría; la firmeza ' +
      'serena acerca.',
    trabajo:
      'Tienes el empuje para liderar o para poner en marcha un proyecto propio. ' +
      'Las condiciones favorecen a quien toma la delantera con visión, no a quien ' +
      'se impone por fuerza. Rodéate de gente capaz y sostén el rumbo.',
    dinero:
      'Momento de iniciativa y crecimiento posible, pero pide cabeza fría. ' +
      'Conviene invertir la energía en construir algo sólido y no en apuestas ' +
      'movidas por la euforia. La constancia rinde más que el golpe rápido.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Dragón oculto: todavía no es el momento de mostrarse. La fuerza existe, ' +
        'pero está en germen. Conviene prepararse en silencio y no forzar la salida.',
    },
    {
      posicion: 2,
      texto:
        'El dragón aparece en el campo. Tu talento empieza a hacerse visible; es ' +
        'buen momento para buscar guía o aliados que reconozcan tu valor.',
    },
    {
      posicion: 3,
      texto:
        'Actividad incesante de la mañana a la noche. Hay mucho por hacer y la ' +
        'exposición crece. Manteniendo la integridad aun bajo presión, el peligro ' +
        'se atraviesa sin daño.',
    },
    {
      posicion: 4,
      texto:
        'Vuelo dudoso sobre el abismo. Estás ante un salto: puedes avanzar o ' +
        'retirarte. Ninguna de las dos es un error si lo eliges con conciencia y ' +
        'no por impulso.',
    },
    {
      posicion: 5,
      texto:
        'Dragón que vuela en el cielo. Momento de plenitud y liderazgo: tu ' +
        'influencia es reconocida. Rodéate de personas capaces y el buen resultado ' +
        'se multiplica.',
    },
    {
      posicion: 6,
      texto:
        'Dragón arrogante. Se llegó tan alto que ya sólo queda descender. El ' +
        'exceso y la soberbia traen arrepentimiento: reconoce el límite antes de ' +
        'que te lo impongan.',
    },
  ],
};

const hex2: Hexagrama = {
  numero: 2,
  lineas: [0, 0, 0, 0, 0, 0], // seis yin: Tierra sobre Tierra
  nombre: 'Lo Receptivo',
  nombreAlterno: 'Kūn',
  palabrasClave: ['receptividad', 'entrega', 'paciencia', 'sostén'],

  dictamen:
    'La energía receptiva sostiene y da forma a lo que la energía creadora inicia. ' +
    'Su éxito no viene de imponerse, sino de acompañar con la constancia serena de ' +
    'quien sabe seguir el rumbo sin perderse. El que se adelanta se extravía; el ' +
    'que se deja guiar encuentra su lugar.',

  imagen:
    'La tierra, en su amplitud, sostiene todo lo que existe sin rechazar nada. Así ' +
    'conviene volverse amplio de carácter: cargar con lo que toca y dar lugar a los ' +
    'demás, en vez de competir por el primer puesto.',

  significado: {
    general:
      'Es momento de recibir, sostener y dejar madurar, más que de forzar. Tu ' +
      'fuerza hoy está en la paciencia, en la capacidad de acompañar un proceso y ' +
      'de servir a algo más grande. No es debilidad: es el poder de lo que da ' +
      'forma. Adelantarse con brusquedad desorienta; seguir con constancia ordena.',
    amor:
      'El vínculo pide receptividad y entrega, no conquista. Escuchar, sostener y ' +
      'dar espacio construye más que empujar. Si dejas que las cosas maduren a su ' +
      'tiempo, encuentran su forma; si fuerzas el ritmo, se tuercen.',
    trabajo:
      'Es tiempo de apoyar, ejecutar y sostener, en vez de liderar de frente. Tu ' +
      'aporte más valioso hoy es la constancia y la confiabilidad. Colaborar con ' +
      'quien marca el rumbo ubica mejor que disputar el mando.',
    dinero:
      'Momento de administrar, cuidar y dejar crecer lo que ya se tiene, no de ' +
      'jugadas arriesgadas. La prudencia y la paciencia protegen y hacen madurar. ' +
      'Conservar bien vale hoy más que arriesgar por ganar rápido.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Escarcha bajo los pies: el hielo firme no está lejos. Los primeros signos ' +
        'de algo anuncian su desarrollo. Presta atención temprano a lo que apenas ' +
        'empieza a insinuarse.',
    },
    {
      posicion: 2,
      texto:
        'Recto, amplio, natural. Cuando actúas con sencillez y sin cálculo forzado, ' +
        'las cosas salen bien por sí solas. No hace falta artificio: la rectitud ' +
        'alcanza.',
    },
    {
      posicion: 3,
      texto:
        'Cualidades escondidas. Puedes hacer un buen trabajo sin buscar el brillo. ' +
        'Servir en silencio, sin reclamar el crédito, es hoy el camino que da fruto.',
    },
    {
      posicion: 4,
      texto:
        'Saco atado. Momento de reserva y prudencia: guarda tus opiniones y no te ' +
        'expongas. No habrá gloria, pero tampoco error. La cautela protege.',
    },
    {
      posicion: 5,
      texto:
        'Discreción en el lugar justo. La influencia que no se muestra, la que actúa ' +
        'desde abajo con humildad y tacto, es la que trae el mejor resultado.',
    },
    {
      posicion: 6,
      texto:
        'Dragones que luchan en el campo. Cuando lo receptivo quiere disputar el ' +
        'mando de igual a igual, sobreviene el conflicto y ambos pierden. No fuerces ' +
        'un lugar que no te corresponde.',
    },
  ],
};

const hex3: Hexagrama = {
  numero: 3,
  lineas: [1, 0, 0, 0, 1, 0], // Agua sobre Trueno
  nombre: 'La Dificultad Inicial',
  nombreAlterno: 'Zhūn',
  palabrasClave: ['comienzo difícil', 'perseverancia', 'ayuda', 'orden'],

  dictamen:
    'Todo comienzo trae desorden, como el brote que empuja para atravesar la ' +
    'tierra. No es momento de lanzarse a lo grande, sino de perseverar con ' +
    'paciencia y buscar aliados. El caos inicial se ordena cuando no se pretende ' +
    'resolver todo de golpe.',

  imagen:
    'Nubes y trueno: la tormenta que todavía no descarga. Así, ante lo que recién ' +
    'empieza y aún está enredado, conviene poner orden hilo por hilo, sin pretender ' +
    'desatar el nudo entero de un tirón.',

  significado: {
    general:
      'Es un comienzo lleno de fricción: las cosas todavía no encajan y avanzar ' +
      'cuesta. Es normal y es pasajero. No es momento de decisiones grandes ni de ' +
      'forzar el rumbo, sino de perseverar, ordenar poco a poco y apoyarse en quien ' +
      'pueda ayudar. Lo que ahora parece caos se acomoda con paciencia.',
    amor:
      'Un vínculo que arranca con trabas o confusión. No es señal de que esté mal: ' +
      'los comienzos cuestan. Ir despacio, con paciencia y sin exigir claridad ' +
      'inmediata, ayuda a que tome forma. Buscar apoyo o consejo también ordena.',
    trabajo:
      'Un proyecto o una etapa que empieza entre obstáculos y desorden. No conviene ' +
      'lanzarse a lo grande todavía: consolidar lo básico, pedir ayuda y avanzar por ' +
      'partes. La perseverancia paciente es lo que saca esto adelante.',
    dinero:
      'Comienzo financiero trabado o incierto. Mejor evitar movimientos grandes ' +
      'hasta ordenar el panorama. Ir paso a paso, con prudencia y buen ' +
      'asesoramiento, transforma la dificultad inicial en una base firme.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Vacilación y estorbo al empezar. Conviene perseverar y buscar quien ayude. ' +
        'Aun detenido, si se mantiene la rectitud, se sienta la base correcta.',
    },
    {
      posicion: 2,
      texto:
        'Las dificultades se amontonan y parece que hay que retroceder. No aceptes ' +
        'ayuda que ata ni te apures a comprometerte. Con el tiempo, lo que hoy no ' +
        'puede ser encuentra su momento.',
    },
    {
      posicion: 3,
      texto:
        'Cazar sin guía en el bosque lleva a perderse. Meterse en algo sin conocer ' +
        'el terreno sólo termina en extravío. A veces lo sabio es soltar antes de ' +
        'hundirse más.',
    },
    {
      posicion: 4,
      texto:
        'Si te tienden una mano sincera, acéptala: buscar unión y ayuda ahora es un ' +
        'acierto. No hay vergüenza en no poder solo.',
    },
    {
      posicion: 5,
      texto:
        'Cuesta que la buena voluntad llegue a los demás. En lo chico, la constancia ' +
        'rinde; querer imponer la ayuda a lo grande y de golpe sale mal. Avanza poco ' +
        'a poco.',
    },
    {
      posicion: 6,
      texto:
        'Se llega a un punto sin salida y la angustia aprieta. Insistir por la ' +
        'fuerza no sirve: reconocer el límite y detenerse es lo único que alivia.',
    },
  ],
};

const hex4: Hexagrama = {
  numero: 4,
  lineas: [0, 1, 0, 0, 0, 1], // Montaña sobre Agua
  nombre: 'La Inexperiencia',
  nombreAlterno: 'Méng',
  palabrasClave: ['aprendizaje', 'guía', 'humildad', 'sinceridad'],

  dictamen:
    'La inexperiencia no es una falta si hay disposición a aprender. El que no sabe ' +
    'busca al maestro, no al revés; y pregunta con sinceridad, sin insistir por ' +
    'capricho hasta cansar la respuesta. La constancia en aprender es lo que trae ' +
    'el éxito.',

  imagen:
    'Al pie de la montaña brota un manantial que todavía no conoce su curso. Así, ' +
    'ante lo que recién se aprende, conviene cultivar el carácter con constancia y ' +
    'dejar que la experiencia le dé forma al camino.',

  significado: {
    general:
      'Hay algo que todavía no se domina, y está bien: es una etapa de aprendizaje. ' +
      'La clave es la actitud. Reconocer lo que no se sabe, buscar quien enseñe y ' +
      'preguntar con sinceridad abre el camino; la soberbia o la impaciencia lo ' +
      'cierran. Confía en el proceso y en quien tenga más recorrido.',
    amor:
      'Un vínculo con inexperiencia o ingenuidad de por medio. No es un problema, ' +
      'sino algo que madura aprendiendo. La sinceridad y la humildad para dejarse ' +
      'enseñar por la propia experiencia valen más que fingir que ya se sabe todo.',
    trabajo:
      'Es un terreno donde todavía falta oficio. Es momento de aprender, de pedir ' +
      'mentoría y de aceptar corrección sin orgullo herido. Preguntar con humildad ' +
      'hace crecer; simular una experiencia que no se tiene deja expuesto.',
    dinero:
      'Falta de experiencia o de información en lo financiero. Antes de decidir, ' +
      'conviene formarse y consultar a quien sepa. Reconocer lo que no se entiende ' +
      'protege; actuar con soberbia sobre lo que no se domina es lo que hace perder.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Para que el que no sabe aprenda, a veces hace falta un límite firme al ' +
        'principio. Pero abusar de la dureza humilla y traba. Poner el marco y ' +
        'después soltar.',
    },
    {
      posicion: 2,
      texto:
        'Tolerar con paciencia al inexperto trae buen resultado. Saber convivir con ' +
        'lo que aún no está maduro —en otros o en uno mismo— y sostener con ' +
        'amabilidad, ordena la casa.',
    },
    {
      posicion: 3,
      texto:
        'No te entregues a lo primero que deslumbra ni pierdas el eje ante quien ' +
        'tiene poder o brillo. Lo que se toma sin criterio no trae nada bueno. ' +
        'Conserva tu centro.',
    },
    {
      posicion: 4,
      texto:
        'Necedad enredada en sí misma. Encerrarse en lo imaginado, lejos de la ' +
        'realidad y de quien podría enseñar, sólo trae vergüenza. Salir de la ' +
        'fantasía y volver a lo concreto.',
    },
    {
      posicion: 5,
      texto:
        'La inexperiencia sincera, sin pretensiones, trae buena fortuna. Acercarse ' +
        'a aprender con actitud abierta y humilde, como quien de verdad quiere ' +
        'saber, abre todas las puertas.',
    },
    {
      posicion: 6,
      texto:
        'Frente a la necedad terca, el límite no debe ser venganza. Corregir para ' +
        'proteger, no para dañar. Cuidar de que el error no siga es lo único que ' +
        'sirve.',
    },
  ],
};

const hex5: Hexagrama = {
  numero: 5,
  lineas: [1, 1, 1, 0, 1, 0], // Agua sobre Cielo
  nombre: 'La Espera',
  nombreAlterno: 'Xū',
  palabrasClave: ['espera', 'paciencia', 'confianza', 'preparación'],

  dictamen:
    'Hay un momento en que lo único acertado es esperar. No una espera pasiva ni ' +
    'ansiosa, sino confiada: sabiendo que lo que tiene que llegar, llega a su ' +
    'tiempo. Con sinceridad y paciencia, la fuerza se acumula y el paso difícil se ' +
    'cruza sin daño.',

  imagen:
    'Nubes que suben hacia el cielo y todavía no descargan su lluvia. Así, mientras ' +
    'el momento madura, conviene nutrirse y descansar, reponer fuerzas en vez de ' +
    'forzar lo que aún no está listo.',

  significado: {
    general:
      'No todo se resuelve empujando. Es un tiempo en el que la mejor acción es ' +
      'esperar con confianza: preparar el terreno, cuidar las fuerzas y dejar que ' +
      'las condiciones maduren. La impaciencia sólo desgasta; la certeza serena de ' +
      'que las cosas llegan a su hora es lo que hoy sostiene.',
    amor:
      'El momento pide paciencia más que iniciativa. Forzar una definición ahora ' +
      'sólo tensa el vínculo. Si confías y das tiempo, lo que tenga que aclararse ' +
      'se aclara; mientras tanto, cuídate y mantente entero, sin quedar en suspenso ' +
      'a la espera del otro.',
    trabajo:
      'No es momento de precipitar decisiones ni de exigir resultados ya. Prepara ' +
      'bien el terreno y espera la oportunidad correcta: llega. Aprovecha la pausa ' +
      'para afianzar recursos y aliados, en lugar de gastarte empujando una puerta ' +
      'que todavía no se abre.',
    dinero:
      'Conviene esperar antes de mover. El apuro por actuar suele salir caro; la ' +
      'paciencia deja ver con claridad. Cuida lo que tienes, mantén reservas y ' +
      'actúa recién cuando el panorama se despeje.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Esperar en campo abierto, lejos aún del peligro. Todavía no hay nada que ' +
        'hacer: mantén la calma y la rutina, y no salgas a buscar el problema antes ' +
        'de tiempo.',
    },
    {
      posicion: 2,
      texto:
        'Esperar sobre la arena, ya más cerca del riesgo. Empiezan los roces y los ' +
        'comentarios. Mantén la serenidad y no respondas a cada provocación: el ' +
        'final es bueno.',
    },
    {
      posicion: 3,
      texto:
        'Esperar en el barro: demasiada exposición atrajo la dificultad. Si un ' +
        'descuido te metió en esto, extrema el cuidado ahora para que el daño no ' +
        'crezca.',
    },
    {
      posicion: 4,
      texto:
        'Esperar en medio del peligro real. No es momento de resistir de frente: ' +
        'mantén la sangre fría, cede terreno y sal del pozo. Salir de la situación ' +
        'ya es un logro.',
    },
    {
      posicion: 5,
      texto:
        'Un respiro en medio de la espera: comida y descanso. Aprovecha esta pausa ' +
        'para reponerte. La calma en el intervalo da la fuerza para lo que falta.',
    },
    {
      posicion: 6,
      texto:
        'Cuando ya parecía perdido, llega ayuda inesperada de donde no se buscaba. ' +
        'Recíbela con respeto aunque no la esperaras: lo que parecía el final se ' +
        'vuelve buena fortuna.',
    },
  ],
};

const hex6: Hexagrama = {
  numero: 6,
  lineas: [0, 1, 0, 1, 1, 1], // Cielo sobre Agua
  nombre: 'El Conflicto',
  nombreAlterno: 'Sòng',
  palabrasClave: ['conflicto', 'prudencia', 'mediación', 'ceder a tiempo'],

  dictamen:
    'Hay un choque de razones o de intereses. Aunque la razón esté de un lado, ' +
    'llevar el conflicto hasta el final rara vez trae algo bueno. Lo sabio es la ' +
    'mesura: buscar un acuerdo a mitad de camino, apoyarse en alguien imparcial y ' +
    'no empeñarse en ganar a toda costa.',

  imagen:
    'Cielo y agua que se mueven en direcciones opuestas. Así, cuando dos fuerzas ' +
    'empujan cada una para su lado, conviene pensar bien desde el principio cómo se ' +
    'ordenan los asuntos, para que el desencuentro no crezca.',

  significado: {
    general:
      'Es una tensión o una disputa. La pregunta no es quién tiene razón, sino cómo ' +
      'salir sin romper todo. Insistir en imponerse alarga el conflicto y desgasta ' +
      'a ambos. Ceder a tiempo, buscar un punto medio o pedir la mirada de un ' +
      'tercero neutral es lo que hoy conviene. No es momento de grandes movimientos.',
    amor:
      'Hay un desencuentro o una discusión de fondo. Tener razón no alcanza para ' +
      'resolverlo. Bajar el tono, escuchar la parte del otro y buscar un acuerdo ' +
      'vale más que ganar la pelea. Empeñarse en tener la última palabra sólo aleja.',
    trabajo:
      'Un conflicto de intereses o de criterios. Evita la confrontación frontal: ' +
      'rara vez sale bien. Busca mediación, deja constancia con calma de tu ' +
      'posición y apunta a un acuerdo razonable en lugar de a una victoria total.',
    dinero:
      'No es momento de disputas ni de apuestas fuertes en medio del roce. Un mal ' +
      'acuerdo temprano suele costar menos que un pleito ganado tarde. Sé prudente, ' +
      'deja todo documentado y busca resolver antes de que escale.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Si no insistes en llevar la disputa adelante, apenas habrá unos ' +
        'comentarios y todo termina bien. Soltar a tiempo, al principio, es lo más ' +
        'sabio.',
    },
    {
      posicion: 2,
      texto:
        'No se puede ganar este enfrentamiento: el otro es más fuerte. Retirarse y ' +
        'ceder no es cobardía sino cordura; así proteges a los tuyos y evitas un ' +
        'daño mayor.',
    },
    {
      posicion: 3,
      texto:
        'Mantente en lo que ya tienes y en tu propio mérito, sin buscar gloria en ' +
        'el conflicto. Aunque haya presión, si no entras en la disputa por vanidad, ' +
        'el final es bueno.',
    },
    {
      posicion: 4,
      texto:
        'No se puede forzar el resultado. En vez de pelear, cambia de actitud y ' +
        'acepta la situación: al soltar la exigencia, llega la paz y las cosas se ' +
        'acomodan.',
    },
    {
      posicion: 5,
      texto:
        'El conflicto llega ante alguien justo e imparcial, que da la razón a quien ' +
        'la tiene. Si tu causa es legítima, este es el momento de exponerla con ' +
        'confianza: será bien resuelta.',
    },
    {
      posicion: 6,
      texto:
        'Aun ganando la disputa por la fuerza, lo obtenido así no dura: será ' +
        'cuestionado una y otra vez. Una victoria impuesta no da paz; no vale lo que ' +
        'cuesta.',
    },
  ],
};

const hex7: Hexagrama = {
  numero: 7,
  lineas: [0, 1, 0, 0, 0, 0], // Tierra sobre Agua
  nombre: 'El Ejército',
  nombreAlterno: 'Shī',
  palabrasClave: ['organización', 'disciplina', 'liderazgo', 'causa justa'],

  dictamen:
    'Reunir y conducir muchas fuerzas hacia un objetivo pide orden, disciplina y ' +
    'un líder con autoridad reconocida. La empresa sale bien cuando la causa es ' +
    'justa y hay alguien capaz de sostener la conducción con firmeza y experiencia. ' +
    'Sin disciplina, hasta la fuerza mayor se dispersa.',

  imagen:
    'Agua acumulada bajo la tierra, oculta pero inmensa. Así, quien conduce reúne y ' +
    'cuida a los suyos, y es generoso con la gente para poder, cuando haga falta, ' +
    'contar con su esfuerzo.',

  significado: {
    general:
      'Hay algo entre manos que exige organización y disciplina, no impulso ' +
      'disperso. Es momento de ordenar fuerzas, definir un objetivo claro y ' +
      'conducir con firmeza y justicia. El éxito depende de que haya método y de ' +
      'que la causa sea legítima: la energía sin dirección se malgasta, la energía ' +
      'ordenada logra.',
    amor:
      'El vínculo o la situación pide estructura y compromiso claro, no ' +
      'improvisación. Conviene definir con firmeza qué se quiere y sostenerlo con ' +
      'constancia. La conducción justa y respetuosa —no el autoritarismo— es lo que ' +
      'ordena y da seguridad.',
    trabajo:
      'Un proyecto que necesita coordinación, mando claro y disciplina de equipo. ' +
      'Es momento de organizar, delegar bien y liderar con criterio. Si la meta es ' +
      'justa y la conducción firme, el esfuerzo colectivo rinde. La desorganización ' +
      'es el verdadero riesgo.',
    dinero:
      'Las finanzas piden un plan disciplinado y ejecutado con orden, no ' +
      'movimientos sueltos. Define objetivos, arma una estrategia y síguela con ' +
      'constancia. La gestión metódica es lo que hoy protege y hace crecer.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Todo emprendimiento debe partir con orden y reglas claras. Si arranca en ' +
        'desorden, aunque la intención sea buena, el resultado se tuerce. Todo ' +
        'depende de un comienzo bien organizado.',
    },
    {
      posicion: 2,
      texto:
        'Quien conduce está en medio de los suyos, compartiendo el esfuerzo, no ' +
        'dando órdenes desde lejos. Esa cercanía se reconoce y trae buena fortuna. ' +
        'Estar con la gente es la clave.',
    },
    {
      posicion: 3,
      texto:
        'Cuando el mando se reparte entre muchos o queda en manos incapaces, la ' +
        'empresa se llena de peso muerto y fracasa. Que dirija uno solo, competente, ' +
        'y no la confusión de varios.',
    },
    {
      posicion: 4,
      texto:
        'Retirarse a tiempo ante una fuerza superior no es derrota, es prudencia. ' +
        'Reconocer que no es el momento de avanzar y replegarse con orden evita un ' +
        'daño mayor. No hay falta en ello.',
    },
    {
      posicion: 5,
      texto:
        'Cuando aparece la ocasión justa, hay que actuar, pero con la conducción en ' +
        'manos experimentadas. Responde a lo que llega, no busques pelea; y que ' +
        'dirija quien tiene autoridad y criterio, no el impulsivo.',
    },
    {
      posicion: 6,
      texto:
        'Al terminar la empresa llega el momento de repartir reconocimientos con ' +
        'justicia. Da a cada uno según su mérito, pero no pongas en lugares de ' +
        'responsabilidad a quien no está a la altura: eso arruina lo logrado.',
    },
  ],
};

const hex8: Hexagrama = {
  numero: 8,
  lineas: [0, 0, 0, 0, 1, 0], // Agua sobre Tierra
  nombre: 'La Unión',
  nombreAlterno: 'Bǐ',
  palabrasClave: ['unión', 'vínculo', 'pertenencia', 'confianza mutua'],

  dictamen:
    'Unirse y sostener el lazo con otros trae fortuna, siempre que la unión se ' +
    'funde en sinceridad y en un centro firme. Los que dudan terminan sumándose si ' +
    'el vínculo es genuino; el que se demora demasiado queda afuera. Conviene ' +
    'definir a tiempo con quién y para qué unirse.',

  imagen:
    'Agua sobre la tierra, que se amolda a ella y la abraza sin dejar huecos. Así ' +
    'conviene cultivar los lazos y tratar a cada quien con cercanía, porque la ' +
    'fuerza nace de la unión bien fundada.',

  significado: {
    general:
      'Es un tiempo de unión, pertenencia y apoyo mutuo. En solitario se avanza ' +
      'poco; con otros, mucho. Conviene acercarse a las personas o al grupo ' +
      'correcto, con sinceridad y sin cálculo, y sostener esos lazos. Pero también ' +
      'decidir a tiempo: dudar demasiado o llegar tarde deja fuera de lo que se ' +
      'está formando.',
    amor:
      'Momento propicio para el vínculo y la cercanía. La unión sincera, basada en ' +
      'confianza y no en conveniencia, florece ahora. Vale acercarse con el corazón ' +
      'abierto y comprometerse; demorar demasiado la definición puede hacer perder ' +
      'la oportunidad.',
    trabajo:
      'Es tiempo de alianzas, equipo y pertenencia. Sumarse al grupo o a la causa ' +
      'adecuada, con lealtad y aporte genuino, multiplica lo que se logra en ' +
      'soledad. Elige bien con quién te unes y hazlo a tiempo: las buenas alianzas ' +
      'no esperan indefinidamente.',
    dinero:
      'Las asociaciones y los acuerdos compartidos favorecen, si se eligen con ' +
      'criterio y confianza mutua. Unir fuerzas o recursos con la gente correcta ' +
      'rinde más que ir en solitario. Define los términos con claridad desde el ' +
      'principio.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Acércate al vínculo con sinceridad plena, sin dobleces. Cuando la ' +
        'confianza es genuina y desbordante, atrae por sí sola cosas buenas que no ' +
        'se buscaban. La honestidad es el mejor cimiento.',
    },
    {
      posicion: 2,
      texto:
        'La unión que nace desde adentro, con dignidad y sin rebajarse a buscarla ' +
        'por interés, es la sólida. Vincúlate desde tu propio valor, no por ' +
        'necesidad: así el lazo es sano.',
    },
    {
      posicion: 3,
      texto:
        'Te estás uniendo a personas que no te corresponden o no te suman. Cuidado ' +
        'con los vínculos por costumbre o comodidad: no toda compañía es buena. ' +
        'Revisa con quién te mezclas.',
    },
    {
      posicion: 4,
      texto:
        'Es el momento de mostrar abiertamente la lealtad hacia quien la merece. Ya ' +
        'no hace falta disimular el vínculo: apóyalo con claridad y sin reservas. ' +
        'La adhesión franca trae buena fortuna.',
    },
    {
      posicion: 5,
      texto:
        'La unión sincera no se impone ni se fuerza: deja libertad. Quien conduce ' +
        'con nobleza acepta a los que se acercan por voluntad y no persigue a los ' +
        'que se van. Ese lazo elegido, y no obligado, es el más fuerte.',
    },
    {
      posicion: 6,
      texto:
        'Se llega al final sin haber sabido con qué ni con quién unirse, sin un ' +
        'centro ni un comienzo firme. Sin base, el vínculo no cuaja: cuando falta el ' +
        'primer paso sincero, lo demás no se sostiene.',
    },
  ],
};

const hex9: Hexagrama = {
  numero: 9,
  lineas: [1, 1, 1, 0, 1, 1], // Viento sobre Cielo
  nombre: 'El Poder de lo Pequeño',
  nombreAlterno: 'Xiǎo Chù',
  palabrasClave: ['influencia gradual', 'contención', 'paciencia', 'pequeños pasos'],

  dictamen:
    'Sólo es posible una influencia pequeña y gradual, no un cambio de fondo. Como ' +
    'nubes cargadas que aún no descargan su lluvia, la situación se prepara pero ' +
    'todavía no se resuelve. Es tiempo de contener, ajustar detalles y ejercer una ' +
    'influencia suave, sin pretender torcer las cosas de golpe.',

  imagen:
    'El viento recorre el cielo, empujando apenas las nubes sin llegar a soltar la ' +
    'lluvia. Así, cuando aún no se puede lograr lo grande, conviene refinar las ' +
    'formas, cuidar los detalles y cultivar la propia conducta.',

  significado: {
    general:
      'No es momento de grandes avances, sino de influir en lo pequeño. Las ' +
      'condiciones todavía no están maduras para un cambio de fondo; lo que sí ' +
      'puedes hacer es ajustar detalles, mejorar tu preparación y ejercer una ' +
      'influencia suave y constante. La paciencia con los pequeños pasos es la que, ' +
      'sin ruido, va acumulando resultado.',
    amor:
      'Todavía no es tiempo de definiciones grandes. Los gestos pequeños y ' +
      'sostenidos —atención, cuidado, delicadeza— hacen más ahora que cualquier ' +
      'movimiento decisivo. Acompaña con suavidad y deja que el vínculo se acomode ' +
      'poco a poco, sin forzar el desenlace.',
    trabajo:
      'El gran avance todavía no está a tu alcance, pero los detalles sí. Es ' +
      'momento de pulir, corregir y mejorar lo que ya tienes entre manos. La ' +
      'influencia paciente y los ajustes finos preparan el terreno para cuando ' +
      'llegue la oportunidad mayor.',
    dinero:
      'No es tiempo de operaciones grandes ni de esperar un salto. Cuida los ' +
      'detalles, ordena lo chico y sostén una gestión prolija. Los pequeños ajustes ' +
      'constantes valen hoy más que cualquier operación ambiciosa.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Volver al propio camino cuando algo te desvía apenas. Reconocer a tiempo ' +
        'que no es momento de avanzar y regresar a lo tuyo no tiene nada de malo: al ' +
        'contrario, trae fortuna.',
    },
    {
      posicion: 2,
      texto:
        'Dejarse llevar de vuelta al camino correcto, acompañado por otros que ' +
        'también se frenan. No insistir solo contra la corriente, sino sumarse a la ' +
        'prudencia común, es un acierto.',
    },
    {
      posicion: 3,
      texto:
        'Como una rueda que pierde los rayos, el avance se traba por querer ' +
        'forzarlo. Cuando dos tiran para lados distintos y ninguno cede, todo se ' +
        'detiene. No es momento de imponerse.',
    },
    {
      posicion: 4,
      texto:
        'Con sinceridad y calma, el peligro se disuelve y el miedo cede. ' +
        'Manteniéndote fiel a lo que crees, sin agredir, desactivas la tensión y ' +
        'sales sin daño.',
    },
    {
      posicion: 5,
      texto:
        'La confianza sincera une, y lo que se tiene se comparte con quienes están ' +
        'alrededor. No acaparar, sino sumar a otros a lo bueno, multiplica la fuerza ' +
        'de todos.',
    },
    {
      posicion: 6,
      texto:
        'Por fin llega la lluvia: el esfuerzo pequeño dio fruto y hay descanso. Pero ' +
        'cuidado con querer más justo al llegar al límite, como la luna casi llena. ' +
        'Insistir en avanzar ahora rompería lo logrado.',
    },
  ],
};

const hex10: Hexagrama = {
  numero: 10,
  lineas: [1, 1, 0, 1, 1, 1], // Cielo sobre Lago
  nombre: 'La Conducta',
  nombreAlterno: 'Lǚ',
  palabrasClave: ['conducta', 'tacto', 'cautela', 'firmeza cortés'],

  dictamen:
    'Avanzar por terreno peligroso, como quien pisa la cola de un tigre. Si se hace ' +
    'con tacto, respeto y buena conducta, el tigre no muerde y se llega bien. La ' +
    'clave no es la fuerza sino la forma: firmeza serena y cortesía abren paso donde ' +
    'la brusquedad traería el desastre.',

  imagen:
    'El cielo arriba y el lago abajo: cada cosa en su lugar, lo alto y lo bajo bien ' +
    'distinguidos. Así, quien actúa con conciencia respeta los límites y las ' +
    'distancias, y con eso ordena su conducta y afirma el ánimo de la gente.',

  significado: {
    general:
      'Te mueves en un terreno delicado donde un paso en falso tiene consecuencias. ' +
      'La salida no está en la fuerza ni en el enfrentamiento, sino en cómo te ' +
      'conduces: con tacto, respeto y una firmeza que no necesita gritar. La buena ' +
      'forma —tratar a cada quien y cada cosa en su lugar— es lo que hoy te protege ' +
      'y te abre camino.',
    amor:
      'Situación delicada que pide tacto y respeto más que arrebato. Tratar al otro ' +
      'y al vínculo con cuidado, sin pisar límites ni imponer, es lo que evita el ' +
      'conflicto. La cortesía sincera y la firmeza amable acercan; la brusquedad, ' +
      'aunque tengas razón, lastima.',
    trabajo:
      'Terreno resbaladizo, quizá con gente de más poder o situaciones sensibles. ' +
      'Avanza con corrección, respeto por las jerarquías y firmeza cortés. Saber ' +
      'comportarte en cada contexto vale más que la audacia: así se atraviesa el ' +
      'riesgo sin salir mordido.',
    dinero:
      'Momento que pide prudencia y buenas formas en los tratos. No es terreno para ' +
      'movimientos bruscos ni para tensar relaciones. La cautela, el cumplimiento y ' +
      'el trato correcto son lo que hoy sostiene y evita pérdidas.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Andar con sencillez, sin pretensiones ni ganas de figurar. Quien se ' +
        'mantiene modesto y fiel a lo suyo avanza sin tropiezos y sin culpa. La ' +
        'simpleza es hoy una ventaja.',
    },
    {
      posicion: 2,
      texto:
        'Un camino llano y tranquilo. Manteniéndote sereno, sin buscar lujos ni ' +
        'compañías ruidosas, avanzas en paz. La constancia discreta, lejos del ' +
        'bullicio, trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'Creerse más capaz de lo que se es y meterse en lo que supera las propias ' +
        'fuerzas, como quien pisa al tigre confiado: ahí el tigre muerde. Reconoce ' +
        'tus límites antes de avanzar.',
    },
    {
      posicion: 4,
      texto:
        'Se pisa la cola del tigre, pero con cautela extrema y el ánimo alerta. El ' +
        'peligro es real; atravesándolo con prudencia y sin temeridad, al final se ' +
        'llega bien.',
    },
    {
      posicion: 5,
      texto:
        'Actuar con decisión y firmeza, pero sin perder de vista el riesgo. La ' +
        'resolución es necesaria; la resolución ciega, no. Avanza decidido y a la ' +
        'vez consciente de dónde pisas.',
    },
    {
      posicion: 6,
      texto:
        'Mira hacia atrás el camino recorrido y evalúa cómo te condujiste. Si la ' +
        'conducta fue íntegra de principio a fin, el resultado corona el esfuerzo ' +
        'con la mejor fortuna.',
    },
  ],
};

const hex11: Hexagrama = {
  numero: 11,
  lineas: [1, 1, 1, 0, 0, 0], // Tierra sobre Cielo
  nombre: 'La Paz',
  nombreAlterno: 'Tài',
  palabrasClave: ['armonía', 'prosperidad', 'fluidez', 'buen momento'],

  dictamen:
    'El cielo y la tierra se comunican, y todo fluye en armonía. Lo pequeño y ' +
    'mezquino se retira, y lo grande y generoso avanza. Es un tiempo de prosperidad ' +
    'y entendimiento, en que las cosas progresan casi por sí solas. Conviene ' +
    'aprovecharlo cultivando lo bueno, sin olvidar que todo ciclo, tarde o ' +
    'temprano, cambia.',

  imagen:
    'El cielo abajo y la tierra arriba: sus energías se encuentran y se fecundan ' +
    'mutuamente. Así, quien acompaña el momento favorece los intercambios y ayuda a ' +
    'que cada cosa cumpla su curso y prospere.',

  significado: {
    general:
      'Es un momento de armonía y buen fluir. Las condiciones acompañan: lo que ' +
      'emprendes encuentra terreno fértil y las relaciones se dan con ' +
      'entendimiento. Aprovecha esta época para construir y cultivar lo valioso, ' +
      'sin dormirte: los buenos tiempos piden ser sostenidos con cuidado, porque ' +
      'son la base de lo que vendrá cuando el ciclo se ponga cuesta arriba.',
    amor:
      'Tiempo de entendimiento y cercanía. El vínculo fluye, la comunicación se da ' +
      'con naturalidad y hay armonía. Es un buen momento para afianzar, disfrutar y ' +
      'construir de a dos. Cuida esta bonanza con presencia y no la des por sentada.',
    trabajo:
      'Etapa favorable: los proyectos avanzan, la colaboración fluye y el esfuerzo ' +
      'rinde. Aprovecha el buen momento para consolidar, ampliar y sentar bases ' +
      'sólidas. La prosperidad presente es la oportunidad de preparar lo que ' +
      'sostendrá los tiempos más difíciles.',
    dinero:
      'Momento de bonanza y crecimiento. Las condiciones favorecen la iniciativa y ' +
      'el intercambio. Es buen tiempo para invertir con criterio y hacer crecer lo ' +
      'que tienes, sin caer en la euforia: la prudencia en la abundancia es lo que ' +
      'la vuelve duradera.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Como la hierba que al arrancarla trae otras raíces enredadas, lo bueno ' +
        'arrastra más bien. Cuando emprendes acompañado por gente afín, cada avance ' +
        'suma a otros. Es momento de actuar en conjunto.',
    },
    {
      posicion: 2,
      texto:
        'En el buen momento, no descuidar lo difícil ni lo lejano. Saber cargar con ' +
        'lo tosco, no abandonar a nadie y mantener el equilibrio, sin dejarse llevar ' +
        'por camarillas, sostiene la prosperidad.',
    },
    {
      posicion: 3,
      texto:
        'No hay llanura sin cuesta ni ida sin retorno: todo ciclo cambia. Aceptar ' +
        'que la bonanza no es eterna, sin quejarse, y disfrutar con rectitud lo que ' +
        'todavía se tiene, es lo sabio.',
    },
    {
      posicion: 4,
      texto:
        'Acercarse a otros sin alardear de lo que se tiene, con sinceridad y sin ' +
        'cálculo. En el buen momento, la humildad que tiende puentes hacia los que ' +
        'tienen menos une de verdad.',
    },
    {
      posicion: 5,
      texto:
        'Unir lo alto con lo bajo con sencillez, como quien deja de lado el rango ' +
        'para encontrarse de igual a igual. Esa humildad desde una posición elevada ' +
        'trae bendición y gran fortuna.',
    },
    {
      posicion: 6,
      texto:
        'El muro vuelve al foso: el buen tiempo llega a su fin y no se lo puede ' +
        'sostener por la fuerza. No es momento de grandes empresas, sino de aceptar ' +
        'el cambio de ciclo con calma y ordenar lo cercano.',
    },
  ],
};

const hex12: Hexagrama = {
  numero: 12,
  lineas: [0, 0, 0, 1, 1, 1], // Cielo sobre Tierra
  nombre: 'El Estancamiento',
  nombreAlterno: 'Pǐ',
  palabrasClave: ['estancamiento', 'bloqueo', 'reserva', 'mantener la integridad'],

  dictamen:
    'El cielo y la tierra dejan de comunicarse: nada fluye. Es un tiempo de ' +
    'estancamiento, en que lo mezquino avanza y lo noble se retira. No es momento ' +
    'de grandes empresas ni de mezclarse con lo que no corresponde. Conviene ' +
    'replegarse, conservar la integridad y esperar, porque también este ciclo, como ' +
    'todos, pasa.',

  imagen:
    'El cielo se aleja hacia arriba y la tierra hacia abajo: se separan y no se ' +
    'encuentran. Así, en tiempos cerrados, quien es íntegro se recoge, no exhibe sus ' +
    'valores ni se deja tentar por honores fáciles, y aguarda su momento.',

  significado: {
    general:
      'Es un tiempo trabado, en que las cosas no avanzan por más que empujes. ' +
      'Forzarlo sólo desgasta. La respuesta no es rendirse ni corromperse para ' +
      'encajar, sino replegarte con dignidad: cuidar tu integridad, no malgastar ' +
      'energía en lo que no fluye y esperar con paciencia. El estancamiento no es ' +
      'permanente; sostenerte firme y entero durante él es lo que te deja en buena ' +
      'posición cuando el ciclo gire.',
    amor:
      'Momento de distancia o bloqueo, donde la comunicación no fluye y forzar ' +
      'acerca menos aún. No es tiempo de grandes definiciones ni de insistir contra ' +
      'una pared. Conserva tu dignidad, no te rebajes por sostener algo trabado y da ' +
      'lugar al tiempo: lo que ahora está cerrado puede reabrirse más adelante.',
    trabajo:
      'Etapa estancada: los proyectos se traban y el esfuerzo no encuentra eco. No ' +
      'es momento de expandirse ni de forzar avances. Mantén el perfil bajo, cuida ' +
      'lo esencial y no te asocies por apuro con lo que no te conviene. La ' +
      'integridad y la paciencia son lo que te sostiene hasta que el clima cambie.',
    dinero:
      'Tiempo desfavorable para mover o arriesgar: nada rinde como debería. ' +
      'Conserva, protege lo que tienes y evita compromisos dudosos que aparezcan ' +
      'como salida fácil. La prudencia y la quietud valen ahora más que cualquier ' +
      'intento de forzar ganancias.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al comienzo del estancamiento, retirarse a tiempo, y hacerlo junto con los ' +
        'afines, es lo acertado. Reconocer temprano que no es momento de avanzar y ' +
        'replegarse con los tuyos trae fortuna.',
    },
    {
      posicion: 2,
      texto:
        'Los que buscan su conveniencia se acomodan; quien es íntegro soporta el ' +
        'mal tiempo sin venderse. Aguantar el estancamiento sin ceder los ' +
        'principios es lo que finalmente lleva al éxito.',
    },
    {
      posicion: 3,
      texto:
        'Los que se encumbraron sin merecerlo empiezan a sentir, por dentro, la ' +
        'vergüenza de su lugar. Es señal de que la situación torcida comienza a ' +
        'mostrar su falsedad y a resquebrajarse.',
    },
    {
      posicion: 4,
      texto:
        'Cuando el bloqueo empieza a ceder, actuar por un propósito justo y no por ' +
        'interés propio ordena a los demás y no acarrea culpa. Es momento de ' +
        'retomar, pero al servicio de algo mayor que uno mismo.',
    },
    {
      posicion: 5,
      texto:
        'El estancamiento empieza a ceder. Buen momento para quien mantuvo la ' +
        'firmeza, pero sin confiarse: recién ahora, pensando en lo que podría fallar ' +
        'y atando bien los cabos, se asegura lo ganado.',
    },
    {
      posicion: 6,
      texto:
        'El estancamiento termina. No cae solo: alguien firme lo vuelca. Primero el ' +
        'bloqueo, después la fortuna. Lo que parecía sin salida se abre para quien ' +
        'supo esperar sin quebrarse.',
    },
  ],
};

const hex13: Hexagrama = {
  numero: 13,
  lineas: [1, 0, 1, 1, 1, 1], // Cielo sobre Fuego
  nombre: 'La Comunidad',
  nombreAlterno: 'Tóng Rén',
  palabrasClave: ['comunidad', 'objetivos comunes', 'apertura', 'colaboración'],

  dictamen:
    'La unión verdadera de las personas se funda en metas comunes y en la ' +
    'apertura, no en el interés de un grupo cerrado. Cuando el vínculo es franco y a ' +
    'la luz del día, alcanza para superar grandes dificultades. Para que dure, tiene ' +
    'que apoyarse en algo que valga para todos, no en la conveniencia de unos pocos.',

  imagen:
    'El fuego se eleva hacia el cielo, tendiendo hacia lo alto. Así, quien reúne a ' +
    'la gente distingue con claridad las diferencias entre las cosas y las personas, ' +
    'y sobre esa comprensión ordena la convivencia.',

  significado: {
    general:
      'Es tiempo de unirte con otros en torno a algo que los trascienda: un ' +
      'objetivo, un valor, una causa común. La fuerza está en la apertura y la ' +
      'sinceridad, no en el círculo cerrado ni en las alianzas por conveniencia. ' +
      'Cuando el lazo es franco y compartido, hasta lo difícil se vuelve alcanzable. ' +
      'Cuida que lo que los une sea genuino y esté a la vista de todos.',
    amor:
      'Un vínculo que crece cuando se apoya en algo compartido —valores, proyectos, ' +
      'una mirada común del mundo—, más que en la sola atracción. La franqueza y la ' +
      'ausencia de secretos son su mejor cimiento. Lo que se construye a la luz, sin ' +
      'exclusiones ni juegos, es lo que perdura.',
    trabajo:
      'Momento propicio para el trabajo en equipo y las alianzas en torno a una ' +
      'meta clara. La colaboración abierta, donde cada uno aporta y el objetivo es ' +
      'común, rinde mucho. Evita los grupos cerrados y las agendas ocultas: la ' +
      'comunidad que suma es la transparente.',
    dinero:
      'Las sociedades y los emprendimientos compartidos favorecen, siempre que se ' +
      'funden en objetivos claros y reglas transparentes para todos. Unir esfuerzos ' +
      'con quienes comparten tu meta multiplica; los acuerdos turbios o desiguales, ' +
      'tarde o temprano, dividen.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'El vínculo apenas empieza, todavía a la puerta y a la vista de todos. ' +
        'Cuando la unión arranca abierta, sin secretos ni preferencias, no hay nada ' +
        'que reprochar: es un buen comienzo.',
    },
    {
      posicion: 2,
      texto:
        'Unirse sólo con los del propio bando, cerrándose a los demás. La comunidad ' +
        'reducida al clan, que excluye a quien no es de los suyos, termina en ' +
        'estrechez y vergüenza. Abre el círculo.',
    },
    {
      posicion: 3,
      texto:
        'Desconfianza que se arma en secreto: emboscar al otro, sospechar y ' +
        'prepararse para el choque. Así la unión se vuelve imposible y todo queda ' +
        'paralizado. La sospecha oculta no conduce a nada.',
    },
    {
      posicion: 4,
      texto:
        'Se llega al borde del conflicto, pero a último momento se comprende que no ' +
        'vale la pena atacar. Reconocer el propio error y volver atrás, en lugar de ' +
        'forzar la pelea, trae fortuna.',
    },
    {
      posicion: 5,
      texto:
        'Los que están destinados a unirse primero sufren la separación y los ' +
        'obstáculos, pero al fin se encuentran. Cuando el lazo es verdadero, ni la ' +
        'distancia ni las trabas lo impiden: tras la lucha, llega el reencuentro.',
    },
    {
      posicion: 6,
      texto:
        'Una unión serena, en campo abierto pero todavía sin haber alcanzado la ' +
        'plena intimidad. No hay de qué arrepentirse, aunque falte lo más hondo: es ' +
        'un vínculo honesto que aún no llegó a su cima.',
    },
  ],
};

const hex14: Hexagrama = {
  numero: 14,
  lineas: [1, 1, 1, 1, 0, 1], // Fuego sobre Cielo
  nombre: 'La Gran Abundancia',
  nombreAlterno: 'Dà Yǒu',
  palabrasClave: ['abundancia', 'plenitud', 'generosidad', 'responsabilidad'],

  dictamen:
    'Un tiempo de gran abundancia y recursos, sostenido por la claridad y la fuerza ' +
    'bien encaminadas. Poseer mucho trae éxito, pero también responsabilidad: lo que ' +
    'se tiene pide ser administrado con generosidad y mesura, no con soberbia. La ' +
    'riqueza que se comparte y se guía con rectitud florece; la que se acapara, se ' +
    'pudre.',

  imagen:
    'El fuego brilla en lo alto del cielo, iluminando a lo lejos. Así, quien tiene ' +
    'mucho refrena el mal, favorece el bien y se somete con humildad a lo que es ' +
    'justo, para que su abundancia sea digna.',

  significado: {
    general:
      'Estás en un momento de plenitud: tienes recursos, capacidad e influencia. Es ' +
      'una buena época, pero lo que define su rumbo es cómo administras esa ' +
      'abundancia. La clave es la generosidad sin ostentación y la claridad para ' +
      'dirigir lo que tienes hacia lo valioso. Compartir, guiar con rectitud y no ' +
      'dejarte marear por lo que posees es lo que la convierte en algo que perdura.',
    amor:
      'Momento rico y generoso en el vínculo: hay entrega, calidez y plenitud. Para ' +
      'que dure, conviene compartir esa abundancia sin egoísmo ni soberbia, poniendo ' +
      'lo mejor al servicio del otro. La generosidad sincera multiplica; el querer ' +
      'poseer o dominar empobrece lo que hay.',
    trabajo:
      'Etapa de recursos, reconocimiento y capacidad para lograr en grande. ' +
      'Aprovéchala con responsabilidad: dirige lo que tienes hacia objetivos ' +
      'valiosos, sé generoso con tu equipo y no te dejes llevar por la soberbia del ' +
      'buen momento. La abundancia bien administrada abre aún más puertas.',
    dinero:
      'Tiempo de holgura y buenos recursos. Es momento de administrar con criterio y ' +
      'generosidad, no de derrochar ni de acaparar. Invertir con claridad, compartir ' +
      'con quienes corresponde y manejar la abundancia con humildad es lo que la hace ' +
      'crecer y durar.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al comienzo de la abundancia, mantenerse lejos de lo dañino y no ' +
        'confiarse. Tener presente que las dificultades pueden volver, y por eso ' +
        'cuidar lo que se tiene, evita el error. La prudencia protege lo ganado.',
    },
    {
      posicion: 2,
      texto:
        'Se cuenta con medios sólidos y capaces, como un carro grande para cargar. ' +
        'Es momento de emprender: los recursos y la gente adecuada están. Con esa ' +
        'base firme, avanzar no trae culpa.',
    },
    {
      posicion: 3,
      texto:
        'Poner lo que se tiene al servicio de algo mayor, sin quedárselo para el ' +
        'provecho propio. La generosidad de quien comprende que su abundancia no es ' +
        'sólo suya honra; la mezquindad, en esta posición, no puede hacerlo.',
    },
    {
      posicion: 4,
      texto:
        'En medio de la abundancia, no compararse ni competir con quienes brillan ' +
        'alrededor. Saber mantener la propia medida, sin envidia ni ostentación, ' +
        'evita el conflicto y conserva lo bueno.',
    },
    {
      posicion: 5,
      texto:
        'Trato sincero y accesible, pero sin perder la dignidad ni dejarse ' +
        'avasallar. La confianza que se ofrece con calidez y a la vez con firmeza ' +
        'inspira respeto y trae fortuna. La amabilidad no está reñida con el carácter.',
    },
    {
      posicion: 6,
      texto:
        'La cima de la abundancia, sostenida por la humildad y la rectitud. Quien ' +
        'llega arriba sin soberbia, fiel a lo bueno, recibe una bendición que todo ' +
        'lo favorece. Modestia en la cumbre: la mejor de las fortunas.',
    },
  ],
};

const hex15: Hexagrama = {
  numero: 15,
  lineas: [0, 0, 1, 0, 0, 0], // Tierra sobre Montaña
  nombre: 'La Modestia',
  nombreAlterno: 'Qiān',
  palabrasClave: ['modestia', 'humildad', 'equilibrio', 'mesura'],

  dictamen:
    'La modestia lleva al éxito. Rebajar lo que está de más y elevar lo que falta, ' +
    'buscar el equilibrio sin exhibirse, abre el camino donde la soberbia lo cierra. ' +
    'Quien lleva las cosas a término con humildad, sin reclamar el crédito, cosecha ' +
    'lo que la ostentación jamás alcanza.',

  imagen:
    'La montaña, siendo enorme, se mantiene por debajo de la tierra. Así, quien es ' +
    'sabio disminuye lo que sobra y aumenta lo que escasea, sopesa las cosas y las ' +
    'iguala con justicia.',

  significado: {
    general:
      'Este es un tiempo en que la humildad es tu mayor fuerza. No se trata de ' +
      'empequeñecerte, sino de no exhibirte: hacer lo que hay que hacer sin reclamar ' +
      'reconocimiento, equilibrar en lugar de sobresalir, ceder donde otros ' +
      'pelearían por figurar. La modestia sincera desarma resistencias, gana ' +
      'confianza y lleva a buen término lo que emprendes. Es de los pocos signos ' +
      'enteramente favorables: apoyarse en ella no falla.',
    amor:
      'La humildad y la mesura acercan y sostienen el vínculo. Reconocer al otro, no ' +
      'imponer el propio lugar, ceder sin rebajarse y valorar sin alardear crea un ' +
      'terreno de confianza. La sencillez sincera vale aquí más que cualquier gesto ' +
      'grandilocuente.',
    trabajo:
      'Momento en que la discreción y la humildad rinden más que el protagonismo. ' +
      'Hacer bien el trabajo sin salir a lucirlo, dar crédito a los demás y no ' +
      'imponerte gana respeto y colaboración. La modestia genuina, lejos de ' +
      'restarte, te abre camino y te sostiene.',
    dinero:
      'Tiempo de mesura y prudencia. Ni ostentar ni excederse: mantener un perfil ' +
      'sobrio, ajustar lo que sobra y reforzar lo que falta equilibra las cuentas. ' +
      'La sencillez en el manejo, sin lujos innecesarios ni ambición desmedida, es ' +
      'lo que hoy protege y hace crecer.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Humilde incluso en su humildad, sin hacer de la modestia una pose. Quien ' +
        'se mantiene sencillo y sin pretensiones puede emprender hasta lo más ' +
        'difícil y salir bien. La modestia de base todo lo facilita.',
    },
    {
      posicion: 2,
      texto:
        'La modestia sincera se nota sin proponérselo: brota de adentro y se refleja ' +
        'en los gestos. Cuando la humildad es genuina y no calculada, se irradia ' +
        'sola y atrae fortuna. Constancia en ella.',
    },
    {
      posicion: 3,
      texto:
        'Mérito real acompañado de humildad: se hace mucho y no se reclama nada. ' +
        'Quien trabaja con constancia sin buscar el elogio lleva las cosas a buen ' +
        'término, y los demás lo reconocen por sí mismos.',
    },
    {
      posicion: 4,
      texto:
        'Modestia también en la acción, no sólo en la actitud. Actuar sin excederse, ' +
        'sin invadir el lugar de otros, favoreciendo el equilibrio en todo lo que se ' +
        'emprende. Todo se facilita cuando el movimiento es mesurado.',
    },
    {
      posicion: 5,
      texto:
        'Ni siquiera la modestia debe volverse debilidad: frente a quien abusa o no ' +
        'cede, cabe actuar con firmeza. Ser humilde no es dejar de poner límites; ' +
        'llegado el caso, la mesura sabe también sostenerse con energía.',
    },
    {
      posicion: 6,
      texto:
        'La modestia que ya maduró se vuelve capaz de poner orden, empezando por uno ' +
        'mismo. Antes de corregir lo de afuera, corregir lo propio y la propia casa. ' +
        'La humildad firme ordena sin necesidad de imponerse a los demás.',
    },
  ],
};

const hex16: Hexagrama = {
  numero: 16,
  lineas: [0, 0, 0, 1, 0, 0], // Trueno sobre Tierra
  nombre: 'El Entusiasmo',
  nombreAlterno: 'Yù',
  palabrasClave: ['entusiasmo', 'impulso colectivo', 'preparación', 'inspiración'],

  dictamen:
    'Cuando la acción va a favor del momento y despierta entusiasmo, la gente sigue ' +
    'con ganas y todo se pone en movimiento. Es tiempo de reunir voluntades en torno ' +
    'a un propósito y de organizar antes de actuar. El entusiasmo que nace de la ' +
    'armonía con las circunstancias arrastra; pero conviene no dormirse en él ni ' +
    'dejar que se vuelva mera comodidad.',

  imagen:
    'El trueno surge de la tierra con fuerza y resuena. Así, los antiguos hacían ' +
    'música y honraban lo que los inspiraba, para elevar el ánimo y unir a la gente ' +
    'en torno a lo que la mueve.',

  significado: {
    general:
      'Hay una energía que se contagia y pone las cosas en marcha. Es un buen ' +
      'momento para entusiasmar, inspirar y sumar a otros a un propósito común: ' +
      'cuando la acción está en sintonía con el momento, la gente acompaña casi ' +
      'sola. Aprovecha ese impulso preparando bien el terreno y organizando antes de ' +
      'lanzarte. El único cuidado: que el entusiasmo no te adormezca en la comodidad ' +
      'ni te haga perder de vista lo que hay que sostener.',
    amor:
      'Momento de entusiasmo y ganas compartidas: el vínculo se enciende y fluye con ' +
      'alegría. Disfrútalo y déjate llevar por esa corriente, sin perder el eje. El ' +
      'cuidado está en no dormirte en la comodidad ni dar todo por hecho: el ' +
      'entusiasmo se sostiene cuando se lo cultiva.',
    trabajo:
      'Buen momento para movilizar, inspirar y arrancar proyectos con la gente ' +
      'entusiasmada. Cuando la propuesta está en sintonía con lo que el equipo ' +
      'necesita, el impulso colectivo hace volar las cosas. Prepara y organiza antes ' +
      'de lanzarte, y no te confíes: el entusiasmo hay que encauzarlo, no sólo ' +
      'disfrutarlo.',
    dinero:
      'Etapa de impulso y oportunidades que dan ganas de avanzar. Aprovecha el ' +
      'empuje, pero sin dejar que el entusiasmo te lleve a decisiones apresuradas. ' +
      'Prepara bien cada paso y no te ilusiones de más: el optimismo rinde cuando va ' +
      'acompañado de organización y prudencia.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Alardear del propio entusiasmo o de una buena conexión para presumir. El ' +
        'entusiasmo vuelto vanidad, que se exhibe para figurar, se agota rápido y ' +
        'trae desgracia. La energía no es para lucirla.',
    },
    {
      posicion: 2,
      texto:
        'Firme como la roca: no dejarse arrastrar por la euforia ajena ni esperar a ' +
        'que todo se tuerza para reaccionar. Reconocer a tiempo los signos, con ' +
        'criterio propio y sin ilusionarse, trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'Mirar hacia arriba esperando que otros marquen el rumbo, sin decidir por ' +
        'uno mismo. La duda y la dependencia del entusiasmo ajeno terminan en ' +
        'arrepentimiento. Demorar la propia decisión también cuesta caro.',
    },
    {
      posicion: 4,
      texto:
        'Ser uno mismo la fuente del entusiasmo, con confianza y sin recelar de los ' +
        'demás. Quien inspira desde la seguridad reúne a la gente a su alrededor y ' +
        'logra cosas grandes. La confianza sincera convoca.',
    },
    {
      posicion: 5,
      texto:
        'Una presión o un obstáculo constante que, sin embargo, no termina de ' +
        'tumbar. Esa misma traba obliga a mantenerse alerta y despierto, impidiendo ' +
        'caer en la comodidad. A veces la dificultad que persiste es la que te ' +
        'mantiene vivo.',
    },
    {
      posicion: 6,
      texto:
        'Entusiasmo ciego que encandila y adormece en la ilusión. Aun así, si al ' +
        'darse cuenta uno rectifica a tiempo, no hay culpa. Nunca es tarde para ' +
        'despertar del encandilamiento y corregir el rumbo.',
    },
  ],
};

const hex17: Hexagrama = {
  numero: 17,
  lineas: [1, 0, 0, 1, 1, 0], // Lago sobre Trueno
  nombre: 'El Seguimiento',
  nombreAlterno: 'Suí',
  palabrasClave: ['adaptación', 'seguir lo correcto', 'flexibilidad', 'confianza'],

  dictamen:
    'Para que otros te sigan, primero hay que saber seguir: adaptarse al momento y ' +
    'a lo que es justo, en vez de imponerse. Quien se pone al servicio de lo ' +
    'correcto y sabe amoldarse gana la confianza y la adhesión de los demás. Hay un ' +
    'tiempo para conducir y un tiempo para acompañar; reconocerlo abre el éxito.',

  imagen:
    'El trueno se recoge dentro del lago y descansa al llegar la noche. Así, quien ' +
    'es sabio se retira a descansar y renovarse cuando llega el momento, siguiendo ' +
    'el ritmo natural en lugar de forzarlo.',

  significado: {
    general:
      'Es un tiempo de adaptarse y seguir el rumbo que las circunstancias piden, ' +
      'más que de imponer el propio. No es sumisión: es la inteligencia de ' +
      'amoldarse a lo que es justo y saber cuándo acompañar en vez de liderar. Para ' +
      'que otros confíen en ti y te sigan, primero muestras que sabes escuchar y ' +
      'adaptarte. Sigue lo que vale la pena y suelta la rigidez; lo flexible, aquí, ' +
      'es lo fuerte.',
    amor:
      'Momento de fluir con el otro y con lo que el vínculo pide, sin querer imponer ' +
      'tu ritmo. Adaptarse, ceder en lo que no es esencial y acompañar genera ' +
      'confianza y cercanía. Seguir juntos lo que a ambos hace bien vale más que ' +
      'tener razón por separado.',
    trabajo:
      'Tiempo de adaptarte a las circunstancias y de saber cuándo seguir antes que ' +
      'liderar. Escuchar, amoldarse a lo que el momento exige y sumarse a lo que ' +
      'funciona te gana aliados y autoridad genuina. La flexibilidad inteligente ' +
      'abre más puertas que la imposición.',
    dinero:
      'Conviene adaptarse a cómo se mueven las cosas en lugar de forzar un plan ' +
      'rígido. Seguir las señales del contexto, ajustar el rumbo y no aferrarse a ' +
      'una idea fija protege y aprovecha las oportunidades. Flexibilidad con ' +
      'criterio, no terquedad.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Algo cambia y con ello las referencias de siempre. Estar dispuesto a ' +
        'revisar la propia postura, y salir a relacionarse con gente distinta en vez ' +
        'de encerrarse, da buenos frutos. Abrirse al cambio, con rectitud, trae ' +
        'fortuna.',
    },
    {
      posicion: 2,
      texto:
        'No se puede seguir a todos a la vez: hay que elegir. Aferrarse a lo fácil o ' +
        'inmediato hace perder lo valioso y sólido. Define a qué o a quién sigues de ' +
        'verdad, sin quedarte con lo menor por comodidad.',
    },
    {
      posicion: 3,
      texto:
        'Al elegir lo valioso y firme, se deja atrás lo menor: toda decisión implica ' +
        'una renuncia. Quien se compromete con lo que de verdad importa encuentra lo ' +
        'que busca, pero debe sostener esa elección con constancia.',
    },
    {
      posicion: 4,
      texto:
        'Cuando tu mérito atrae seguidores, cuidado con dejar que eso te envanezca o ' +
        'te desvíe. Ganar adhesión puede ser peligroso si se busca para uno mismo. ' +
        'Mantente sincero y con un propósito claro, y el rumbo se aclara.',
    },
    {
      posicion: 5,
      texto:
        'Seguir con sinceridad lo que es bueno y valioso, sin cálculo ni doblez. ' +
        'Cuando te entregas de lleno a lo que realmente vale, con confianza plena, ' +
        'el resultado es la mejor fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Una adhesión tan firme y sincera que ya no se suelta, reconocida y honrada. ' +
        'La lealtad llevada hasta el fondo, a algo o alguien que lo merece, ' +
        'encuentra su lugar y su recompensa.',
    },
  ],
};

const hex18: Hexagrama = {
  numero: 18,
  lineas: [0, 1, 1, 0, 0, 1], // Montaña sobre Viento
  nombre: 'La Reparación',
  nombreAlterno: 'Gǔ',
  palabrasClave: ['reparar', 'sanear', 'corregir el descuido', 'renovación'],

  dictamen:
    'Algo se echó a perder por descuido o negligencia acumulada, y ahora pide ser ' +
    'reparado. La tarea de sanear lo dañado, hecha con coraje y cuidado, trae gran ' +
    'éxito: no es un final, es un nuevo comienzo. Conviene entender bien cómo se ' +
    'llegó hasta acá antes de actuar, y sostener el arreglo después, para que el mal ' +
    'no vuelva.',

  imagen:
    'El viento sopla al pie de la montaña y se detiene, dejando que las cosas se ' +
    'estanquen. Así, quien es sabio remueve a la gente y renueva su ánimo, ' +
    'sacudiendo lo que se había echado a perder por inercia.',

  significado: {
    general:
      'Hay una situación deteriorada —por descuido, por dejar pasar, por costumbres ' +
      'que se pudrieron con el tiempo— que ahora reclama ser reparada. No es momento ' +
      'de lamentarse ni de culpar, sino de arremangarse y sanear lo dañado con ' +
      'decisión y cuidado. Entender cómo se llegó hasta acá evita repetirlo. Es una ' +
      'tarea exigente, pero al fondo hay renovación: reparar bien abre un comienzo ' +
      'nuevo.',
    amor:
      'Un vínculo o una situación afectiva que se deterioró por desatención o ' +
      'problemas no resueltos. Es momento de encararlo de frente y repararlo, no de ' +
      'seguir mirando para otro lado. Con honestidad para ver cómo se llegó hasta ' +
      'acá y voluntad de sanearlo, lo dañado puede renovarse.',
    trabajo:
      'Algo que se descuidó o se dejó estancar pide corrección: procesos oxidados, ' +
      'problemas postergados, desorden acumulado. Es tiempo de sanear con decisión y ' +
      'método. Entender el origen del deterioro y arreglarlo de raíz —no con ' +
      'parches— convierte el problema en una renovación.',
    dinero:
      'Finanzas o asuntos materiales que se desordenaron por descuido y hay que ' +
      'poner en orden. Es momento de encarar lo postergado, sanear las cuentas y ' +
      'corregir los malos hábitos que llevaron al deterioro. El saneamiento hecho a ' +
      'fondo deja una base más firme.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Corregir un daño heredado, algo que viene de antes y se arrastra. Hacerse ' +
        'cargo de repararlo, con conciencia del riesgo, redime lo pasado. Al final ' +
        'hay fortuna, pero exige atención y firmeza.',
    },
    {
      posicion: 2,
      texto:
        'Reparar un deterioro más delicado, que pide tacto y no dureza. Hay cosas ' +
        'que se sanean con suavidad y paciencia, sin forzar ni imponer. Corregir sin ' +
        'herir, midiendo la mano, es lo acertado.',
    },
    {
      posicion: 3,
      texto:
        'Encarar la reparación con demasiado ímpetu, quizá excediéndose. Habrá algún ' +
        'tropiezo o arrepentimiento menor, pero pasarse de enérgico es una falta ' +
        'leve: mejor eso que la pasividad. No hay culpa grave.',
    },
    {
      posicion: 4,
      texto:
        'Tolerar el deterioro y dejarlo pasar por comodidad o miedo. Postergar la ' +
        'reparación sólo agranda el daño; seguir así lleva a la humillación. Lo que ' +
        'no se encara a tiempo se cobra caro después.',
    },
    {
      posicion: 5,
      texto:
        'Reparar lo dañado con la actitud y la ayuda justas, sin cargar todo solo. ' +
        'Encarar la tarea con criterio y apoyándose en quien corresponde da buen ' +
        'resultado y reconocimiento. El arreglo bien hecho se valora.',
    },
    {
      posicion: 6,
      texto:
        'Retirarse de la disputa y de los asuntos mundanos para dedicarse a algo más ' +
        'elevado. No siempre hay que meterse a reparar lo de todos; a veces lo ' +
        'valioso es apartarse y cultivar lo propio, sirviendo de otro modo.',
    },
  ],
};

const hex19: Hexagrama = {
  numero: 19,
  lineas: [1, 1, 0, 0, 0, 0], // Tierra sobre Lago
  nombre: 'El Acercamiento',
  nombreAlterno: 'Lín',
  palabrasClave: ['crecimiento', 'oportunidad', 'aproximación', 'buen momento'],

  dictamen:
    'Algo grande y favorable se aproxima; es un tiempo de crecimiento en que las ' +
    'cosas avanzan con fuerza. Conviene aprovecharlo con dedicación y rectitud ' +
    'mientras dura. Pero todo ascenso tiene su límite: recordar que el buen momento ' +
    'no es eterno, y prepararse para cuando el ciclo se dé vuelta, es lo que lo ' +
    'vuelve fecundo.',

  imagen:
    'La tierra se inclina sobre el lago, cercana y protectora. Así, quien es sabio ' +
    'enseña y cuida a la gente sin cansarse, y sostiene y protege a los demás sin ' +
    'poner límites a su cuidado.',

  significado: {
    general:
      'Se acerca un tiempo de crecimiento y oportunidades: las cosas se abren y el ' +
      'impulso está a favor. Es el momento de involucrarte de lleno, con dedicación ' +
      'y buena disposición, para aprovechar lo que está madurando. Pero hazlo con ' +
      'conciencia de que ninguna primavera dura para siempre: sembrar bien ahora, ' +
      'sin confiarte, es lo que deja fruto cuando el clima cambie.',
    amor:
      'El vínculo entra en una fase de acercamiento y crecimiento: hay apertura, ' +
      'calidez y ganas de avanzar. Es buen momento para involucrarse con dedicación ' +
      'y cuidar lo que florece. Disfrutar el presente sin dar todo por garantizado ' +
      'mantiene vivo lo que se está construyendo.',
    trabajo:
      'Se abre una etapa de progreso y oportunidades en aumento. Es momento de ' +
      'comprometerte, tomar iniciativa y aprovechar el impulso favorable. ' +
      'Involucrarte con dedicación ahora sienta las bases; hacerlo sin confiarte, ' +
      'sabiendo que el buen ciclo tiene fecha, te deja en mejor posición para lo que ' +
      'siga.',
    dinero:
      'Momento de crecimiento y de oportunidades que se acercan. Conviene aprovechar ' +
      'el buen viento con iniciativa y criterio, haciendo crecer lo que se puede. ' +
      'Pero sin euforia: reservar y prever para cuando la marea baje es lo que ' +
      'convierte la bonanza en algo sólido.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Acercarse en conjunto, sumándose a un buen impulso compartido. Cuando ' +
        'avanzas de la mano de otros hacia algo que crece, y lo haces con rectitud, ' +
        'el resultado es favorable. La constancia sostiene ese buen comienzo.',
    },
    {
      posicion: 2,
      texto:
        'Avanzar con confianza y buena disposición, sin dejarse frenar por el temor ' +
        'a que el buen momento termine. Comprometerse de lleno, con ánimo firme, ' +
        'hace que todo acompañe. El impulso favorable pide ser aprovechado.',
    },
    {
      posicion: 3,
      texto:
        'Avanzar de manera despreocupada o displicente, confiado en la facilidad del ' +
        'momento. Eso no lleva a nada bueno; pero si uno se da cuenta a tiempo y ' +
        'corrige la ligereza, se libra del error. La comodidad excesiva descuida.',
    },
    {
      posicion: 4,
      texto:
        'Acercarse del todo, con apertura plena y sin reservas, a lo que crece y a ' +
        'las personas capaces. La entrega franca y bien dirigida, sin cálculo ' +
        'mezquino, no tiene nada que reprochar y da buen fruto.',
    },
    {
      posicion: 5,
      texto:
        'Acercarse con sabiduría: saber elegir a la gente capaz, confiar en ella y ' +
        'dejarla actuar en lugar de querer controlarlo todo. La conducción ' +
        'inteligente, que delega y guía sin ahogar, trae fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Acercarse con generosidad y grandeza de ánimo, aun cuando ya no se ' +
        'necesitaría hacerlo. Volver a lo sencillo para ayudar y sostener a otros, ' +
        'desde un lugar de plenitud, es noble y trae fortuna.',
    },
  ],
};

const hex20: Hexagrama = {
  numero: 20,
  lineas: [0, 0, 0, 0, 1, 1], // Viento sobre Tierra
  nombre: 'La Contemplación',
  nombreAlterno: 'Guān',
  palabrasClave: ['observación', 'perspectiva', 'reflexión', 'ejemplo'],

  dictamen:
    'Es tiempo de contemplar antes de actuar: observar con atención, tomar ' +
    'distancia y comprender el sentido profundo de las cosas. Como quien se prepara ' +
    'con recogimiento para un rito, la actitud interior importa más que el gesto ' +
    'externo. Quien observa con claridad también se vuelve un ejemplo, y su sola ' +
    'presencia orienta a los demás sin necesidad de imponerse.',

  imagen:
    'El viento recorre la tierra, pasando sobre todas las cosas. Así, los antiguos ' +
    'reyes recorrían las regiones, observaban al pueblo y ofrecían enseñanza, ' +
    'mirando de cerca para poder guiar.',

  significado: {
    general:
      'Es un momento para observar y comprender más que para actuar. Tomar ' +
      'distancia, mirar la situación desde arriba y captar el sentido de fondo te da ' +
      'una claridad que la acción apurada no alcanza. También es tiempo de advertir ' +
      'que otros te observan: lo que muestras con tu ejemplo influye más que lo que ' +
      'dices. Contempla, entiende y deja que la comprensión —no la prisa— guíe el ' +
      'próximo paso.',
    amor:
      'Momento de observar y comprender el vínculo con perspectiva, antes de mover ' +
      'ninguna ficha. Mirar con honestidad qué está pasando de verdad, más allá de ' +
      'las reacciones inmediatas, aclara el panorama. Y recordar que el otro también ' +
      'te observa: tu actitud sincera dice más que cualquier palabra.',
    trabajo:
      'Tiempo de análisis y perspectiva más que de acción. Observar el panorama ' +
      'completo, entender las dinámicas de fondo y estudiar bien antes de decidir ' +
      'evita pasos en falso. Ten presente que tu conducta es observada: el ejemplo ' +
      'que das pesa más que las instrucciones que impartes.',
    dinero:
      'Momento de observar, estudiar y comprender antes de mover. Analizar el ' +
      'panorama con distancia, entender las tendencias y no dejarse llevar por el ' +
      'impulso inmediato es lo que hoy protege. La decisión, si hace falta, se toma ' +
      'después de mirar bien; ahora toca contemplar.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Mirar las cosas de manera superficial, como un niño que sólo ve lo ' +
        'aparente. En quien poco se le exige es disculpable; en quien debería ver ' +
        'más hondo, es una limitación. Este es el momento de mirar con más ' +
        'profundidad.',
    },
    {
      posicion: 2,
      texto:
        'Observar de a poco, por una rendija, con una mirada estrecha y encerrada en ' +
        'lo propio. Sirve apenas para lo cercano, pero es demasiado limitada para lo ' +
        'demás. Convendría abrir el ángulo y ver el conjunto.',
    },
    {
      posicion: 3,
      texto:
        'Mirarse a uno mismo con honestidad: observar la propia trayectoria y sus ' +
        'efectos para decidir si avanzar o retroceder. La autoobservación sincera, ' +
        'sin engañarse, es la brújula para el paso siguiente.',
    },
    {
      posicion: 4,
      texto:
        'Observar de cerca lo mejor de una situación o de un grupo, comprendiendo a ' +
        'fondo cómo funciona. Quien alcanza esa mirada amplia puede aportar y ' +
        'colaborar desde un lugar de influencia genuina. Ver bien habilita a servir ' +
        'bien.',
    },
    {
      posicion: 5,
      texto:
        'Examinarse a uno mismo mirando no ya la propia vida en abstracto, sino el ' +
        'efecto que se tiene sobre los demás. Quien se evalúa por cómo influye en su ' +
        'entorno, y ajusta en consecuencia, actúa sin culpa.',
    },
    {
      posicion: 6,
      texto:
        'La mirada más amplia y desprendida: observar el conjunto desde afuera, ya ' +
        'libre del interés personal. Contemplar la vida —la propia y la de todos— ' +
        'con esa distancia serena da una claridad que no se equivoca.',
    },
  ],
};

const hex21: Hexagrama = {
  numero: 21,
  lineas: [1, 0, 0, 1, 0, 1], // Fuego sobre Trueno
  nombre: 'La Mordedura Tajante',
  nombreAlterno: 'Shì Kè',
  palabrasClave: ['obstáculo', 'acción decisiva', 'justicia', 'firmeza'],

  dictamen:
    'Hay un obstáculo concreto que se interpone y no se disuelve solo: hay que ' +
    'morderlo y atravesarlo con decisión. Es momento de acción firme y, si hace ' +
    'falta, de aplicar justicia con claridad. Enfrentar el problema de frente, sin ' +
    'vacilar pero sin exceso, es lo que despeja el camino y trae éxito.',

  imagen:
    'El rayo y el trueno se unen con fuerza. Así, los antiguos afianzaban las leyes ' +
    'con claridad y aplicaban las penas con firmeza, para que quedara nítido lo que ' +
    'corresponde y lo que no.',

  significado: {
    general:
      'Algo se interpone entre ti y lo que buscas —un problema, una traba, quizá ' +
      'alguien— y no va a resolverse esperando. Es momento de acción decidida: ' +
      'enfrentar el obstáculo de frente y removerlo con firmeza. Si hay una ' +
      'injusticia o un desorden, corregirlo con claridad, sin tibieza pero también ' +
      'sin ensañamiento. La energía justa y directa, aplicada donde corresponde, es ' +
      'la que hoy despeja el camino.',
    amor:
      'Hay un obstáculo o un malentendido que traba el vínculo y hay que abordarlo ' +
      'de frente, no rodearlo. Es momento de poner las cosas claras, decir lo que ' +
      'hay que decir con firmeza y a la vez con justicia. Enfrentar el problema ' +
      'directamente —sin agredir— despeja lo que la evasión sólo enquista.',
    trabajo:
      'Un problema o una traba concreta exige acción decidida, no más rodeos. Es ' +
      'momento de encarar el asunto de frente, tomar la decisión difícil o poner el ' +
      'límite que hacía falta. La firmeza clara y justa, aplicada sin demora, ' +
      'remueve lo que estaba bloqueando el avance.',
    dinero:
      'Hay un problema material que pide resolución firme y directa: una deuda, un ' +
      'incumplimiento, un desorden que no se arregla solo. Es momento de encararlo ' +
      'con decisión y, si corresponde, hacer valer lo justo. Postergar sólo agranda ' +
      'la traba; la acción clara la remueve.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Un tropiezo al comienzo que trae una corrección temprana y pequeña. El ' +
        'freno leve, apenas se empieza a errar, evita el mal mayor. Es bueno que la ' +
        'falta se corrija cuando todavía es chica.',
    },
    {
      posicion: 2,
      texto:
        'Enfrentar el problema con fuerza y hasta con algo de enojo justificado. ' +
        'Actuar con energía contra una falta clara, aunque uno se pase un poco, no ' +
        'acarrea culpa: la firmeza está bien empleada.',
    },
    {
      posicion: 3,
      texto:
        'Al querer corregir algo viejo y endurecido, se topa con resistencia y con ' +
        'lo desagradable. Puede haber un mal trago o un roce, porque no se tiene ' +
        'toda la autoridad. Aun así, encarar lo que otros dejaron pudrir no es un ' +
        'error.',
    },
    {
      posicion: 4,
      texto:
        'Una tarea dura que exige a la vez firmeza y rectitud, como quien muerde ' +
        'carne con hueso. Mantenerse duro ante el obstáculo y a la vez recto, ' +
        'consciente de la dificultad, lleva al buen resultado. No aflojar ni ' +
        'desviarse.',
    },
    {
      posicion: 5,
      texto:
        'Aplicar justicia desde una posición de equilibrio y mesura, sin dureza ' +
        'excesiva. Ser firme pero justo, consciente del riesgo de pasarse, es lo ' +
        'correcto. La ecuanimidad al resolver evita el error.',
    },
    {
      posicion: 6,
      texto:
        'El que no escuchó ninguna corrección y persistió en el error hasta el ' +
        'final. Cuando la falta se endurece por no haber oído a tiempo, el castigo ' +
        'es grave. No taparse los oídos ante las advertencias.',
    },
  ],
};

const hex22: Hexagrama = {
  numero: 22,
  lineas: [1, 0, 1, 0, 0, 1], // Montaña sobre Fuego
  nombre: 'La Gracia',
  nombreAlterno: 'Bì',
  palabrasClave: ['forma', 'belleza', 'cuidar las formas', 'sustancia'],

  dictamen:
    'La belleza y las buenas formas dan brillo a las cosas y ayudan en lo pequeño, ' +
    'pero no reemplazan el fondo. El ornamento embellece lo que ya tiene sustancia; ' +
    'usado para tapar el vacío, engaña. Cuidar la forma sí, siempre que esté al ' +
    'servicio de algo verdadero y no en lugar de él.',

  imagen:
    'El fuego ilumina al pie de la montaña, realzando su forma con su luz. Así, ' +
    'quien es sabio ordena con claridad los asuntos cotidianos, pero no se atreve a ' +
    'decidir con esa sola luz las cuestiones de fondo.',

  significado: {
    general:
      'Es un momento en que la forma, la presentación y el cuidado de los detalles ' +
      'importan y suman: en lo pequeño, embellecer y dar buena forma ayuda. Pero ' +
      'cuidado con confundir el brillo con la sustancia: el ornamento realza lo que ' +
      'ya vale, no crea valor donde no lo hay. Cuida las formas sin descuidar el ' +
      'fondo; una apariencia cuidada sobre algo verdadero convence, sobre algo ' +
      'hueco, tarde o temprano se cae.',
    amor:
      'Los gestos, los detalles y el cuidado en las formas embellecen el vínculo y ' +
      'acercan. Están muy bien mientras acompañen algo genuino. El riesgo es ' +
      'quedarse en la superficie —en la apariencia, en el gesto vistoso— y descuidar ' +
      'la sustancia. La belleza sincera realza; la que sólo decora un vacío, no ' +
      'alcanza.',
    trabajo:
      'Momento propicio para cuidar la presentación, la imagen y las formas: en lo ' +
      'pequeño, eso ayuda y abre puertas. Pero sin perder de vista que la forma debe ' +
      'respaldar un contenido real. Presentar bien un buen trabajo suma; maquillar ' +
      'uno flojo, sólo posterga el problema.',
    dinero:
      'En lo chico, cuidar las formas y la buena presentación favorece los tratos. ' +
      'Pero no dejes que la apariencia guíe las decisiones de fondo: lo que reluce ' +
      'no siempre es sólido. Para lo importante, mira la sustancia y no el brillo. ' +
      'Las formas suman sólo sobre una base real.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Preferir el camino modesto y honesto antes que la comodidad que no se ' +
        'merece. Renunciar a un lujo o a un favor que no corresponde, y avanzar por ' +
        'el propio pie, es una elegancia auténtica. La dignidad vale más que la ' +
        'apariencia.',
    },
    {
      posicion: 2,
      texto:
        'El adorno que no tiene sustancia propia, que sólo acompaña a otra cosa, ' +
        'como la barba al mentón. Cuidar la forma está bien, pero si sólo sigue a lo ' +
        'externo sin contenido propio, es vacío. Que la forma tenga algo detrás.',
    },
    {
      posicion: 3,
      texto:
        'Un momento agradable, de brillo y encanto, en que todo se ve favorecido. ' +
        'Está bien disfrutarlo, pero sin ablandarse ni dormirse en la comodidad. ' +
        'Mantener la rectitud dentro del bienestar es lo que lo hace durar.',
    },
    {
      posicion: 4,
      texto:
        'Un momento de duda entre lo vistoso y lo sencillo. Cuando se despoja el ' +
        'adorno y se vuelve a lo simple y verdadero, lo bueno llega por sí solo. La ' +
        'sinceridad sin ornamento termina imponiéndose sobre la apariencia.',
    },
    {
      posicion: 5,
      texto:
        'Buscar lo simple y auténtico, retirándose de la pompa, aunque al principio ' +
        'parezca pobre o poca cosa. Lo que se ofrece con sencillez sincera, sin ' +
        'lujo, puede resultar humilde a la vista, pero al final es lo que trae ' +
        'verdadera fortuna.',
    },
    {
      posicion: 6,
      texto:
        'La belleza en su forma más alta: la sencillez pura, sin ningún adorno. ' +
        'Cuando la forma se despoja de todo lo superfluo y queda sólo lo esencial y ' +
        'verdadero, se alcanza la gracia más plena, la que no necesita nada más.',
    },
  ],
};

const hex23: Hexagrama = {
  numero: 23,
  lineas: [0, 0, 0, 0, 0, 1], // Montaña sobre Tierra
  nombre: 'El Desmoronamiento',
  nombreAlterno: 'Bō',
  palabrasClave: ['deterioro', 'declive', 'paciencia', 'resistir sin actuar'],

  dictamen:
    'Es un tiempo de desmoronamiento: lo sólido se erosiona desde abajo y lo endeble ' +
    'avanza. No conviene emprender nada ni oponerse de frente a la corriente, porque ' +
    'las fuerzas están en contra. La sabiduría está en aceptar el momento, ' +
    'replegarse, cuidar lo esencial y esperar. Todo declive toca fondo, y del fondo ' +
    'nace el regreso.',

  imagen:
    'La montaña descansa sobre la tierra, y cuando su base se erosiona, tiende a ' +
    'derrumbarse. Así, quien está arriba cuida y fortalece lo que tiene debajo —su ' +
    'base, su gente—, porque sólo asegurando los cimientos se sostiene lo alto.',

  significado: {
    general:
      'Es una etapa de deterioro o pérdida en que las cosas se van cayendo y las ' +
      'fuerzas juegan en contra. No es momento de emprender, luchar de frente ni ' +
      'forzar: eso sólo aceleraría el desgaste. Lo sabio ahora es replegarte, ' +
      'proteger lo esencial, mantenerte firme por dentro y dejar pasar la tormenta ' +
      'con paciencia. No es un final absoluto: todo declive llega a su punto más ' +
      'bajo, y justo ahí empieza a girar hacia el regreso.',
    amor:
      'El vínculo o la situación afectiva atraviesa un desgaste que no conviene ' +
      'forzar. Empujar o pelear ahora acelera la caída. Es momento de sostener con ' +
      'calma lo esencial, cuidarte y no tomar decisiones drásticas en medio del ' +
      'derrumbe. Lo que está tocando fondo puede, más adelante, empezar a rehacerse.',
    trabajo:
      'Etapa de declive o desgaste en lo laboral: los apoyos flaquean y el terreno ' +
      'se erosiona. No es momento de grandes movimientos ni de dar batallas de ' +
      'frente. Conserva lo esencial, mantén el perfil bajo, fortalece tus bases y ' +
      'espera. Resistir con paciencia hasta que el ciclo toque fondo es lo más ' +
      'inteligente.',
    dinero:
      'Tiempo de pérdidas o de terreno que se desmorona. Cualquier movimiento ' +
      'ambicioso ahora empeora las cosas. Protege lo básico, reduce la exposición, ' +
      'no arriesgues y aguanta. La prudencia y la paciencia en el declive son las ' +
      'que preservan lo que se puede salvar.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'El deterioro empieza por la base, silencioso, como la pata de la cama que ' +
        'se raja. Los primeros signos abajo todavía no encuentran freno; ignorarlos ' +
        'es peligroso. Atención a lo que se resquebraja en el fondo.',
    },
    {
      posicion: 2,
      texto:
        'El desgaste avanza y se acerca. Quien queda aislado, sin aliados ni apoyos, ' +
        'en medio de fuerzas que empujan en contra, está expuesto. No es momento de ' +
        'insistir solo: buscar resguardo y no quedar a la intemperie.',
    },
    {
      posicion: 3,
      texto:
        'En medio de la desintegración general, apartarse de los que arrastran hacia ' +
        'abajo y mantenerse fiel a lo bueno, aunque quede uno solo. Romper con la ' +
        'corriente que corroe, aun a costa de la compañía, no es una falta: es lo ' +
        'correcto.',
    },
    {
      posicion: 4,
      texto:
        'El deterioro llega ya a lo vivo, a la piel: el daño se volvió directo e ' +
        'inminente. Cuando la erosión alcanza este punto, no hay más margen; sólo ' +
        'queda afrontar el mal de frente y protegerse de lo peor.',
    },
    {
      posicion: 5,
      texto:
        'Un giro: lo que se caía empieza a ordenarse cuando se sabe conducir con ' +
        'mesura lo que antes empujaba en contra. Encabezar con calma a los que se ' +
        'desbandaban, ganándolos en vez de combatirlos, hace que todo vuelva a ' +
        'favorecer.',
    },
    {
      posicion: 6,
      texto:
        'En el fondo del deterioro queda un fruto intacto que guarda la semilla del ' +
        'futuro. Lo que parecía el final es en verdad un nuevo comienzo: quien se ' +
        'mantuvo íntegro es elevado, y lo que estaba podrido termina de caer por sí ' +
        'solo.',
    },
  ],
};

const hex24: Hexagrama = {
  numero: 24,
  lineas: [1, 0, 0, 0, 0, 0], // Tierra sobre Trueno
  nombre: 'El Retorno',
  nombreAlterno: 'Fù',
  palabrasClave: ['renovación', 'nuevo comienzo', 'regreso de la luz', 'lo que nace'],

  dictamen:
    'Después del punto más bajo, la luz regresa: el ciclo gira y algo nuevo empieza ' +
    'a brotar. Es un tiempo de renovación que sigue su curso natural, sin forzarse. ' +
    'Lo nuevo todavía es tierno y hay que cuidarlo, darle descanso y no exigirle de ' +
    'más. Con paciencia, lo que apenas retorna se afirma y crece por sí mismo.',

  imagen:
    'El trueno reposa en el seno de la tierra, juntando fuerzas en el solsticio. ' +
    'Así, los antiguos reyes cerraban los pasos en el tiempo del retorno, dejando ' +
    'descansar todo para que la fuerza nueva se recogiera antes de brotar.',

  significado: {
    general:
      'Algo cambia de signo: después de un tiempo difícil o de declive, se llega al ' +
      'punto de giro y la energía empieza a volver. Es un nuevo comienzo, un renacer ' +
      'que sigue su ritmo natural. La clave es acompañarlo sin apurarlo: lo que ' +
      'recién brota todavía es frágil y necesita cuidado, descanso y tiempo para ' +
      'afirmarse. No fuerces el crecimiento; protégelo. Este es de los momentos más ' +
      'esperanzadores: la rueda volvió a girar a tu favor.',
    amor:
      'Un punto de retorno en el vínculo: algo que se había enfriado o alejado ' +
      'empieza a renacer, o se abre la chance de un nuevo comienzo. Es un brote ' +
      'tierno todavía: conviene cuidarlo con suavidad, sin exigir de golpe todo lo ' +
      'que se perdió. Dándole tiempo y calidez, lo que vuelve puede afirmarse de ' +
      'nuevo.',
    trabajo:
      'Se abre un nuevo ciclo tras una etapa dura: vuelve la energía, aparece una ' +
      'oportunidad de recomenzar. Es momento de retomar con paciencia, cuidando los ' +
      'primeros pasos sin sobrecargarlos. Lo nuevo necesita tiempo para ' +
      'consolidarse; forzarlo lo debilita. Acompañar el renacer con constancia es lo ' +
      'que lo hace crecer.',
    dinero:
      'Un punto de inflexión favorable: lo que venía en baja empieza a recuperarse. ' +
      'Es momento de recomenzar con prudencia, reconstruyendo poco a poco y sin ' +
      'arriesgar lo que recién se afirma. La recuperación es real pero incipiente: ' +
      'cuidarla y darle tiempo es lo que la vuelve sólida.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Volver al buen camino apenas se advierte una pequeña desviación, sin ' +
        'haberse alejado demasiado. Corregir temprano, en cuanto uno nota que erró, ' +
        'evita el arrepentimiento y trae gran fortuna. El retorno pronto es el más ' +
        'fácil.',
    },
    {
      posicion: 2,
      texto:
        'Regresar al buen rumbo con serenidad, sabiendo apoyarse en quienes ya ' +
        'volvieron. Dejar el orgullo y sumarse con humildad a lo bueno, sin ' +
        'resistirse, hace del retorno algo tranquilo y afortunado.',
    },
    {
      posicion: 3,
      texto:
        'Ir y venir, volver al buen camino y volver a apartarse una y otra vez. No ' +
        'es lo ideal y tiene su riesgo, pero mientras haya voluntad sincera de ' +
        'rectificar cada vez, no hay culpa grave. Lo importante es no dejar de volver.',
    },
    {
      posicion: 4,
      texto:
        'En medio de un entorno que va para otro lado, decidir volver solo al camino ' +
        'correcto. Aunque implique separarse de la mayoría, seguir la propia ' +
        'conciencia y regresar a lo justo, aun en soledad, es lo acertado.',
    },
    {
      posicion: 5,
      texto:
        'Un retorno hecho con nobleza y honestidad: reconocer con franqueza lo que ' +
        'hubo que corregir, sin excusas ni medias tintas. Volver de corazón, ' +
        'asumiendo lo propio, no deja lugar al arrepentimiento.',
    },
    {
      posicion: 6,
      texto:
        'Dejar pasar el momento del retorno y perseverar en el error por terquedad. ' +
        'Cuando se desperdicia la oportunidad de rectificar y se insiste en el rumbo ' +
        'equivocado, el daño se vuelve grande y duradero. No hay que perder el punto ' +
        'de giro.',
    },
  ],
};

const hex25: Hexagrama = {
  numero: 25,
  lineas: [1, 0, 0, 1, 1, 1], // Cielo sobre Trueno
  nombre: 'La Inocencia',
  nombreAlterno: 'Wú Wàng',
  palabrasClave: ['sinceridad', 'naturalidad', 'actuar sin cálculo', 'lo inesperado'],

  dictamen:
    'Actuar desde la sinceridad natural, sin segundas intenciones ni cálculo, ' +
    'alinea con lo correcto y trae gran éxito. Cuando uno hace lo que debe por ' +
    'convicción y no por conveniencia, lo bueno llega solo. Pero si se tuerce esa ' +
    'rectitud, nada sale bien: lo inesperado se vuelve entonces contra quien perdió ' +
    'su naturalidad.',

  imagen:
    'El trueno recorre bajo el cielo, y todo recibe su impulso de vida natural. ' +
    'Así, los antiguos reyes, ricos en virtud y en sintonía con el tiempo, cuidaban ' +
    'y nutrían a todos los seres según su naturaleza.',

  significado: {
    general:
      'Es momento de actuar desde lo genuino: hacer lo correcto por convicción, sin ' +
      'cálculo ni doble intención. Cuando tu acción nace de la sinceridad y no de la ' +
      'conveniencia, estás alineado con el rumbo natural de las cosas y lo bueno se ' +
      'da por sí solo. También pide aceptar lo inesperado sin resistirte de más: no ' +
      'todo se puede controlar. Sé honesto, actúa limpio y no fuerces resultados; la ' +
      'naturalidad, aquí, es tu mayor fuerza.',
    amor:
      'El vínculo pide sinceridad espontánea, sin estrategias ni cálculos. ' +
      'Mostrarte tal cual eres, actuar de buena fe y no manipular es lo que hoy ' +
      'construye confianza. Lo que surge de manera natural y honesta prospera; lo ' +
      'forzado o interesado se tuerce. Acepta también lo que llegue de imprevisto, ' +
      'sin querer controlarlo todo.',
    trabajo:
      'Momento de actuar con honestidad y sin segundas intenciones. Hacer bien el ' +
      'trabajo por sí mismo, sin especular con el rédito, es lo que hoy da fruto. No ' +
      'fuerces jugadas ni maquines: lo genuino y bien hecho encuentra su recompensa. ' +
      'Y prepárate para lo inesperado, que puede aparecer y conviene tomar con ' +
      'naturalidad.',
    dinero:
      'Conviene obrar con transparencia y sin especulación torcida. Lo que se hace ' +
      'de buena fe y con criterio honesto rinde; lo que se busca con cálculo ' +
      'interesado suele salir mal. No fuerces resultados ni te metas en jugadas ' +
      'dudosas; y mantén margen para lo imprevisto, que en este terreno puede ' +
      'aparecer.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Actuar desde el impulso sincero y espontáneo del corazón, sin cálculo. ' +
        'Cuando uno se mueve por lo genuino y no por interés, avanza con acierto. ' +
        'Seguir esa naturalidad sincera trae fortuna.',
    },
    {
      posicion: 2,
      texto:
        'Hacer el trabajo por el trabajo mismo, sin obsesionarse con el resultado ni ' +
        'contar la ganancia por anticipado. Cuando la acción no está dominada por el ' +
        'afán del rédito, todo lo emprendido sale bien.',
    },
    {
      posicion: 3,
      texto:
        'Un contratiempo inmerecido, una pérdida que llega sin que uno tenga culpa. ' +
        'Es parte de lo inesperado: no todo lo que pasa es justo ni evitable. ' +
        'Aceptarlo sin amargarse, sabiendo que no fue error propio, es lo sano.',
    },
    {
      posicion: 4,
      texto:
        'Mantenerse fiel a lo que uno es, sin dejarse arrastrar ni buscar aprobación ' +
        'afuera. Conservar la propia rectitud, aunque nadie la vea, no acarrea ' +
        'culpa. La firmeza serena en lo genuino se sostiene sola.',
    },
    {
      posicion: 5,
      texto:
        'Ante un mal que llegó sin culpa propia, no agitarse ni forzar remedios. ' +
        'Algunas cosas se resuelven solas con el tiempo; intervenir de más las ' +
        'empeora. Dejar que lo pasajero pase, con calma, es lo acertado.',
    },
    {
      posicion: 6,
      texto:
        'Aun obrando con inocencia, hay momentos en que actuar no corresponde: el ' +
        'tiempo no acompaña. Insistir en avanzar sólo porque uno se siente en lo ' +
        'cierto puede salir mal. Saber quedarse quieto cuando no es la hora también ' +
        'es sabiduría.',
    },
  ],
};

const hex26: Hexagrama = {
  numero: 26,
  lineas: [1, 1, 1, 0, 0, 1], // Montaña sobre Cielo
  nombre: 'El Poder de lo Grande',
  nombreAlterno: 'Dà Chù',
  palabrasClave: ['acumular fuerza', 'contención', 'formación', 'gran potencial'],

  dictamen:
    'Una gran fuerza se acumula cuando se la sabe contener y encauzar en vez de ' +
    'gastarla de inmediato. Es tiempo de fortalecer el carácter, el saber y los ' +
    'recursos, reteniendo la energía para que crezca. Quien se cultiva con firmeza y ' +
    'se pone al servicio de algo mayor que su propia casa reúne el poder necesario ' +
    'para emprender hasta lo más difícil.',

  imagen:
    'El cielo contenido dentro de la montaña: una fuerza inmensa retenida y ' +
    'concentrada. Así, quien es sabio se nutre de las palabras y los hechos del ' +
    'pasado, acumulando conocimiento y virtud para robustecer su carácter.',

  significado: {
    general:
      'Es un momento de acumular fuerza antes de desplegarla: formarte, fortalecer ' +
      'tu carácter, juntar recursos y saber. La energía retenida hoy es la que te ' +
      'dará poder mañana, así que la contención no es freno sino inversión. ' +
      'Cultívate con firmeza, aprende de la experiencia —propia y ajena— y no ' +
      'malgastes el impulso en salidas prematuras. Con esa base sólida, cuando ' +
      'llegue el momento de emprender lo grande, vas a tener con qué.',
    amor:
      'Momento de construir sobre bases firmes, con paciencia y carácter, más que de ' +
      'arrebatos. La contención y el cultivo del vínculo —conocerse, madurar, ' +
      'fortalecer la confianza— acumulan una fuerza que después sostiene lo grande. ' +
      'Lo que se cimienta con solidez ahora aguanta cualquier cruce difícil más ' +
      'adelante.',
    trabajo:
      'Tiempo de formación y de acumulación de capacidad: prepararte, ' +
      'especializarte, robustecer tu experiencia y tus recursos. Conviene contener ' +
      'el impulso de lanzarte ya y usar esta etapa para volverte fuerte de verdad. ' +
      'Ponerte al servicio de algo grande, más allá del provecho inmediato, es lo ' +
      'que reúne el poder para logros mayores.',
    dinero:
      'Momento de acumular y fortalecer antes de expandir: juntar reservas, ' +
      'consolidar la base, formarte en el manejo. La contención disciplinada de hoy ' +
      'es lo que habilita las grandes jugadas de mañana. No dispares el capital ' +
      'antes de tiempo; concentrado y bien cuidado, es lo que después permite cruzar ' +
      'aguas grandes.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Ante un peligro o un obstáculo fuerte, lo sabio es detenerse y no forzar el ' +
        'avance. Reconocer que todavía no se tiene la fuerza suficiente, y esperar en ' +
        'lugar de embestir, evita el daño. Contenerse a tiempo es prudencia, no ' +
        'debilidad.',
    },
    {
      posicion: 2,
      texto:
        'Frenarse por decisión propia, como quien quita las ruedas al carro para no ' +
        'partir antes de tiempo. Cuando el avance sería peligroso, retenerse ' +
        'voluntariamente y no salir es lo correcto. La contención asumida evita el ' +
        'tropiezo.',
    },
    {
      posicion: 3,
      texto:
        'La fuerza empieza a poder desplegarse y avanzar junto a otros que van en la ' +
        'misma dirección. Pero conviene no confiarse: seguir entrenándose y ' +
        'atento al peligro. El impulso ya fluye, y encauzarlo con disciplina lo hace ' +
        'fecundo.',
    },
    {
      posicion: 4,
      texto:
        'Encauzar la fuerza desde el principio, cuando todavía es manejable, como se ' +
        'pone la tablilla al ternero antes de que le crezcan los cuernos. Prevenir y ' +
        'guiar temprano lo que podría desbordar, sin dureza, trae gran fortuna.',
    },
    {
      posicion: 5,
      texto:
        'Neutralizar un impulso peligroso en su raíz, sin combatirlo de frente, como ' +
        'se doma al jabalí quitándole el brío antes que el colmillo. Desactivar el ' +
        'problema en su origen, con inteligencia y no con fuerza bruta, resuelve sin ' +
        'daño.',
    },
    {
      posicion: 6,
      texto:
        'La fuerza largamente contenida se libera al fin y fluye sin traba, ' +
        'alcanzando lo más alto. Lo que se acumuló con paciencia encuentra su camino ' +
        'libre y despliega todo su poder. Llega el momento del gran logro.',
    },
  ],
};

const hex27: Hexagrama = {
  numero: 27,
  lineas: [1, 0, 0, 0, 0, 1], // Montaña sobre Trueno
  nombre: 'La Nutrición',
  nombreAlterno: 'Yí',
  palabrasClave: ['alimento', 'cuidado', 'lo que se consume', 'lo que se cultiva'],

  dictamen:
    'Presta atención a lo que te nutre y a lo que ofreces a los demás. Todo lo que ' +
    'uno consume —comida, ideas, compañías, palabras— forma lo que uno es; y todo lo ' +
    'que da sostiene o daña a otros. Cuidar la calidad de lo que entra y de lo que ' +
    'sale, en cuerpo y en espíritu, es la base de una vida sana. La rectitud en esto ' +
    'trae fortuna.',

  imagen:
    'Al pie de la montaña se agita el trueno: la imagen del alimento que da vida. ' +
    'Así, quien es sabio cuida sus palabras y es mesurado en el comer y el beber, ' +
    'atento tanto a lo que sale de su boca como a lo que entra en ella.',

  significado: {
    general:
      'Es un momento para cuidar aquello de lo que te alimentas, en el sentido más ' +
      'amplio: la comida, sí, pero también las ideas, los vínculos, los estímulos y ' +
      'las palabras que consumes y las que emites. Todo eso te forma. Fíjate qué ' +
      'estás dejando entrar y qué estás dando a los demás: nutrirte bien y nutrir ' +
      'bien a otros ordena todo lo demás. La templanza y la elección consciente de ' +
      'lo que sostiene, en lugar de lo que sólo llena, es lo que hoy te cuida.',
    amor:
      'Presta atención a con qué se alimenta el vínculo: los gestos, las palabras, ' +
      'el tiempo y el cuidado que se dan mutuamente son su verdadero alimento. ' +
      'Nutrir la relación con atención genuina la sostiene; descuidarla o llenarla ' +
      'de reproches la vacía. Cuida también lo que dices: la palabra alimenta o ' +
      'hiere.',
    trabajo:
      'Momento de cuidar de qué te nutres profesionalmente: qué aprendes, con quién ' +
      'te rodeas, qué hábitos y estímulos alimentan tu trabajo. Rodéate de lo que te ' +
      'hace crecer y suelta lo que sólo desgasta. Y atención a lo que ofreces: ' +
      'sostener y hacer crecer a otros, más que sólo tomar, construye tu lugar.',
    dinero:
      'Fíjate en qué inviertes tus recursos y tu energía: hay gastos y hábitos que ' +
      'nutren y otros que sólo vacían. Cuidar de qué te alimentas económicamente ' +
      '—en qué pones el dinero, qué consumes, qué sostienes— es lo que hoy ordena ' +
      'las cuentas. La mesura y la elección consciente valen más que la mera ' +
      'acumulación.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Envidiar lo que otros tienen y descuidar el propio sustento, dejando de ' +
        'lado los recursos genuinos que uno posee. Abandonar lo que a uno lo nutre ' +
        'de verdad para codiciar lo ajeno lleva a la desgracia. Valora lo propio.',
    },
    {
      posicion: 2,
      texto:
        'Buscar el sustento donde no corresponde, dependiendo de quien no debe o ' +
        'pidiendo a quien está por debajo. Alimentarse fuera del camino natural, por ' +
        'comodidad o desorden, termina mal. El sustento pide buscarse en el lugar ' +
        'justo.',
    },
    {
      posicion: 3,
      texto:
        'Alimentarse de lo que no nutre de verdad —placeres vacíos, excesos, ' +
        'estímulos que sólo llenan— y aferrarse a ello. Insistir en lo que satisface ' +
        'en apariencia pero deja vacío no lleva a nada bueno. Soltar lo que no ' +
        'alimenta, aunque cueste.',
    },
    {
      posicion: 4,
      texto:
        'Buscar arriba, en quien de verdad puede nutrir, el alimento que uno no ' +
        'tiene, y hacerlo con propósito y atención firme. Cuando es para dar y ' +
        'sostener a otros, apoyarse en quien sabe más, con dedicación intensa, no es ' +
        'falta: trae fortuna.',
    },
    {
      posicion: 5,
      texto:
        'Reconocer que uno todavía no puede nutrirse ni nutrir a otros por sí solo, ' +
        'y apoyarse con humildad en quien es capaz. Aceptar la propia limitación y ' +
        'dejarse guiar, sin lanzarse a lo grande todavía, es lo sabio y trae fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Volverse fuente de alimento para muchos: quien sostiene y nutre a otros ' +
        'carga una gran responsabilidad. Ejercerla con conciencia del peso y del ' +
        'riesgo trae fortuna, y desde ese lugar sí se puede emprender lo más grande.',
    },
  ],
};

const hex28: Hexagrama = {
  numero: 28,
  lineas: [0, 1, 1, 1, 1, 0], // Lago sobre Viento
  nombre: 'La Sobrecarga',
  nombreAlterno: 'Dà Guò',
  palabrasClave: ['exceso', 'situación crítica', 'transición', 'acción extraordinaria'],

  dictamen:
    'La carga es demasiada y la estructura amenaza con ceder, como una viga que se ' +
    'comba en el medio por el peso. Es una situación crítica y de transición que ' +
    'pide acción decidida, y a veces extraordinaria, para no quebrarse. Hay que ' +
    'moverse con resolución pero sin perder el equilibrio: reforzar lo débil, ' +
    'aligerar lo que sobra y encontrar hacia dónde ir.',

  imagen:
    'El lago desborda y cubre los árboles: un exceso que sumerge. Así, quien es ' +
    'sabio, si hace falta, se mantiene firme y solo sin miedo, y es capaz de ' +
    'apartarse del mundo sin desanimarse, sosteniendo su rumbo en tiempos ' +
    'extraordinarios.',

  significado: {
    general:
      'Estás en una situación de sobrecarga o crisis: hay demasiado peso en algún ' +
      'punto y la estructura —un proyecto, un vínculo, tú mismo— amenaza con ' +
      'quebrarse. Es un momento excepcional que pide acción a la altura: no la ' +
      'rutina, sino decisiones firmes y a veces poco convencionales. Aligera lo que ' +
      'sobra, refuerza lo que está débil y no te quedes paralizado. Actúa con ' +
      'resolución, pero cuidando el equilibrio: forzar de más quiebra, no hacer nada ' +
      'también. Es una transición dura, pero se atraviesa.',
    amor:
      'El vínculo está bajo una tensión extraordinaria, sobrecargado por algo que se ' +
      'volvió demasiado. No es momento de soluciones tibias ni de seguir como si ' +
      'nada: pide una acción sincera y a la altura de la crisis. Aliviar lo que pesa ' +
      'de más y reforzar lo que quedó frágil, con coraje y sin perder el equilibrio, ' +
      'es lo que puede evitar la ruptura.',
    trabajo:
      'Situación crítica y sobrecargada: demasiadas exigencias, una estructura que ' +
      'no da más, algo a punto de ceder. Pide medidas excepcionales, no la respuesta ' +
      'de siempre. Es momento de tomar decisiones firmes, aligerar lo insostenible y ' +
      'reforzar los puntos débiles. Actuar con resolución y criterio ahora evita el ' +
      'quiebre; dejarlo correr, no.',
    dinero:
      'Momento de sobrecarga o desequilibrio financiero: algo insostenible que ' +
      'amenaza con romperse. Pide acción decidida y quizá poco habitual: recortar el ' +
      'peso muerto, reforzar lo que quedó frágil, reordenar antes de que ceda. No es ' +
      'tiempo de seguir igual ni de forzar más carga; es tiempo de equilibrar con ' +
      'coraje y cabeza.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Emprender algo delicado con extrema precaución, poniendo una base blanda y ' +
        'cuidada debajo, como se protege lo frágil. En momentos críticos, el exceso ' +
        'de cuidado al comenzar no está de más: previene el error.',
    },
    {
      posicion: 2,
      texto:
        'En medio de lo extraordinario, una unión inesperada entre lo viejo y lo ' +
        'nuevo revive lo que parecía seco. Cuando lo consolidado se junta con savia ' +
        'fresca, brota vida donde no se esperaba. Todo favorece.',
    },
    {
      posicion: 3,
      texto:
        'Empeñarse en sostener solo y por la fuerza una carga excesiva, sin aceptar ' +
        'ayuda ni ceder. La terquedad de cargar más de lo que se aguanta hace que la ' +
        'viga se quiebre. No escuchar ni apoyarse, en la crisis, lleva al derrumbe.',
    },
    {
      posicion: 4,
      texto:
        'Reforzar el punto que amenaza ceder y sostener la estructura con firmeza y ' +
        'ayuda oportuna. Apuntalar lo débil trae fortuna; pero si se hace por interés ' +
        'propio y no por el bien de la situación, se malogra. El refuerzo debe ser ' +
        'sincero.',
    },
    {
      posicion: 5,
      texto:
        'Un remedio que da apenas un brillo pasajero, sin raíz ni futuro real, como ' +
        'un árbol seco que florece sin dar fruto. No hace daño, pero tampoco resuelve ' +
        'de fondo. Cuidado con las soluciones vistosas que no cambian lo esencial.',
    },
    {
      posicion: 6,
      texto:
        'Cuando el deber o la convicción exigen avanzar hacia algo que supera las ' +
        'propias fuerzas, y uno se hunde en el intento. Es una desgracia, pero no una ' +
        'culpa: hay momentos en que arriesgarse por lo justo, aun sabiendo el costo, ' +
        'es lo único digno.',
    },
  ],
};

const hex29: Hexagrama = {
  numero: 29,
  lineas: [0, 1, 0, 0, 1, 0], // Agua sobre Agua
  nombre: 'Lo Abismal',
  nombreAlterno: 'Kǎn',
  palabrasClave: ['peligro', 'constancia', 'sinceridad interior', 'fluir'],

  dictamen:
    'El peligro se repite, como abismo tras abismo. Para atravesarlo no sirve la ' +
    'fuerza ni el pánico, sino la sinceridad y la constancia del corazón. Como el ' +
    'agua, que fluye sin detenerse y llena cada hueco antes de seguir, hay que ' +
    'avanzar con firmeza interior, sin saltearse pasos ni perder la fe. Quien se ' +
    'mantiene verdadero en el peligro, lo cruza.',

  imagen:
    'El agua fluye sin interrupción y llega a su destino: la imagen del peligro que ' +
    'se repite. Así, quien es sabio sostiene la constancia en su conducta y sigue ' +
    'actuando de manera continua, sin dejarse quebrar por la dificultad.',

  significado: {
    general:
      'Estás atravesando un momento difícil, quizá peligro tras peligro, sin que ' +
      'termine de aflojar. No es tiempo de desesperar ni de movimientos bruscos. ' +
      'Como el agua, que sigue su curso sin trabarse, la salida está en avanzar con ' +
      'constancia y con el corazón sincero: fiel a lo que sabes correcto, sin perder ' +
      'el eje ni la fe. Enfrenta lo que hay paso a paso, sin saltearte nada, y no ' +
      'dejes que el miedo te paralice. Quien se mantiene verdadero y persistente en ' +
      'la adversidad termina saliendo a flote.',
    amor:
      'Un momento difícil o de riesgo en el vínculo, que se siente cuesta arriba. La ' +
      'salida no está en forzar ni en huir, sino en sostener con sinceridad y ' +
      'constancia lo que de verdad sientes. Mantener la calma, ser honesto y no ' +
      'perder el eje en medio de la turbulencia es lo que permite atravesar el mal ' +
      'paso sin hundirse.',
    trabajo:
      'Etapa complicada y con riesgos, quizá con problemas que se encadenan. No es ' +
      'momento de pánico ni de jugadas desesperadas. Avanza con constancia, ' +
      'resolviendo un obstáculo por vez, con método y sin perder la calma. La ' +
      'firmeza serena y sostenida, fiel a tu criterio, es lo que te saca del ' +
      'atolladero. El agua no se apura, pero llega.',
    dinero:
      'Momento financiero riesgoso o de aprietos que se repiten. La respuesta no es ' +
      'arriesgar más para salir rápido, sino sostener con prudencia y constancia. ' +
      'Cuida cada paso, no te saltees precauciones y mantén el rumbo con sangre ' +
      'fría. La perseverancia serena, y no la jugada desesperada, es la que te ' +
      'permite atravesar el bache.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Dejarse acostumbrar al peligro y hundirse aún más, perdiendo el rumbo ' +
        'dentro de la propia dificultad. Cuando uno se habitúa a lo malo y baja los ' +
        'brazos, cae todavía más hondo. No naturalizar la caída.',
    },
    {
      posicion: 2,
      texto:
        'En pleno peligro, no pretender salir de todo de un salto. Apuntar sólo a lo ' +
        'pequeño, a asegurar un paso firme por vez, es lo posible y lo sabio. Cuando ' +
        'el riesgo es grande, las metas modestas son las que sostienen.',
    },
    {
      posicion: 3,
      texto:
        'Rodeado de peligro por todos lados, cualquier movimiento apurado hunde más. ' +
        'Lo mejor es detenerse, no forzar la salida y esperar a que se despeje. ' +
        'Cuando no hay paso seguro, la quietud atenta es la mejor acción.',
    },
    {
      posicion: 4,
      texto:
        'En medio de la estrechez, la sinceridad sencilla y directa basta. Cuando el ' +
        'peligro aprieta, dejar de lado las formas y ofrecer lo esencial con ' +
        'honestidad, de corazón a corazón, es lo que salva. Lo simple y verdadero, ' +
        'aquí, alcanza.',
    },
    {
      posicion: 5,
      texto:
        'El peligro empieza a ceder: el agua ya no desborda, sólo llega al borde. No ' +
        'es momento de grandes hazañas, sino de hacer lo justo para nivelar y salir ' +
        'sin excederse. Apuntar a la medida exacta, ni de más ni de menos, evita el ' +
        'error.',
    },
    {
      posicion: 6,
      texto:
        'Quien persistió en el error dentro del peligro queda atrapado, como preso ' +
        'entre espinas, sin encontrar salida por mucho tiempo. Cuando uno se pierde ' +
        'del camino correcto en la adversidad, cuesta enormemente volver. Un llamado ' +
        'a no extraviarse.',
    },
  ],
};

const hex30: Hexagrama = {
  numero: 30,
  lineas: [1, 0, 1, 1, 0, 1], // Fuego sobre Fuego
  nombre: 'La Claridad',
  nombreAlterno: 'Lí',
  palabrasClave: ['claridad', 'luz', 'dependencia', 'mesura'],

  dictamen:
    'El fuego ilumina, pero sólo mientras se adhiere a algo que lo sostiene: no arde ' +
    'en el vacío. Así, la claridad y el brillo dependen de aquello a lo que se ' +
    'aferran. Es tiempo de cultivar la lucidez apoyándose en lo firme y en lo bueno, ' +
    'con docilidad y mesura, sin consumirse de golpe. La luz constante, alimentada ' +
    'con cuidado, alumbra mucho más que la llamarada.',

  imagen:
    'Dos fuegos, uno sobre otro, encendidos: la imagen de la claridad. Así, la ' +
    'persona sabia perpetúa esa luz iluminando en todas las direcciones, alumbrando ' +
    'el mundo con su comprensión.',

  significado: {
    general:
      'Es un tiempo de claridad y lucidez, en que puedes ver e iluminar las cosas ' +
      'con nitidez. Pero esa luz, como el fuego, necesita de qué sostenerse: no ' +
      'brilla sola. Reconocer de qué y de quién dependes, y aferrarte a lo firme y ' +
      'verdadero en lugar de a lo que te consume, es la clave. Cultiva tu claridad ' +
      'con mesura y docilidad, sin quemarte en arrebatos: la lucidez serena y ' +
      'sostenida ilumina más y dura más que el destello intenso que se apaga ' +
      'enseguida.',
    amor:
      'Momento de claridad y calidez en el vínculo, pero también de reconocer las ' +
      'dependencias mutuas. Aferrarse a lo bueno y verdadero del otro, con docilidad ' +
      'y sin querer arder de más, sostiene la llama. El fuego de la pasión ilumina; ' +
      'para que dure, hay que alimentarlo con cuidado y no dejar que consuma. La luz ' +
      'templada calienta sin quemar.',
    trabajo:
      'Etapa de lucidez para ver con claridad las situaciones y las soluciones. ' +
      'Aprovéchala, pero reconociendo aquello en lo que te apoyas: tu formación, tu ' +
      'equipo, tus bases. La claridad rinde cuando se sostiene en algo firme y se ' +
      'ejerce con mesura, no en destellos aislados. Ilumina con criterio y sin ' +
      'quemar etapas.',
    dinero:
      'Momento de ver con claridad el panorama financiero: aprovecha esa lucidez ' +
      'para decidir. Pero reconoce de qué depende lo que tienes y apóyate en bases ' +
      'sólidas, no en brillos pasajeros. La claridad sostenida y prudente, ' +
      'alimentada con cuidado, vale más que la jugada deslumbrante que se apaga ' +
      'rápido.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al comienzo del día, cuando todo es confuso y las impresiones se cruzan, ' +
        'conviene serenarse y ordenar la mente antes de actuar. Recogerse un ' +
        'momento, en vez de lanzarse al enredo, evita el error. La claridad empieza ' +
        'por aquietar el desorden inicial.',
    },
    {
      posicion: 2,
      texto:
        'La claridad en su punto justo: luz cálida y equilibrada, ni encandilante ni ' +
        'tenue. Cuando la lucidez se ejerce con mesura y en el lugar del medio, sin ' +
        'extremos, alcanza su forma más plena y afortunada.',
    },
    {
      posicion: 3,
      texto:
        'Ante el ocaso natural de las cosas —una etapa que termina, el paso del ' +
        'tiempo—, angustiarse o lamentarse de más. La luz de la tarde recuerda que ' +
        'todo tiene su ciclo; aceptarlo con serenidad, en lugar de aferrarse o ' +
        'desesperar, es lo sabio.',
    },
    {
      posicion: 4,
      texto:
        'El fuego que arde de golpe, brilla intensamente y se consume enseguida, sin ' +
        'dejar nada. El arrebato deslumbrante que no se sostiene se agota solo y ' +
        'termina descartado. Cuidado con la intensidad sin raíz: encandila un ' +
        'instante y se apaga.',
    },
    {
      posicion: 5,
      texto:
        'Una claridad que llega acompañada de dolor: ver con lucidez la propia ' +
        'situación conmueve hasta las lágrimas. Pero ese reconocimiento sincero, ' +
        'aunque duela, es el que abre el cambio. Del llanto honesto, que ve las ' +
        'cosas como son, nace la fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Usar la claridad para corregir con firmeza, yendo a la raíz del mal sin ' +
        'ensañarse con lo secundario. Apuntar a lo esencial del problema y ser ' +
        'indulgente con lo accesorio, con criterio y sin exceso, resuelve sin culpa.',
    },
  ],
};

const hex31: Hexagrama = {
  numero: 31,
  lineas: [0, 0, 1, 1, 1, 0], // Lago sobre Montaña
  nombre: 'La Influencia',
  nombreAlterno: 'Xián',
  palabrasClave: ['atracción', 'influencia mutua', 'apertura', 'receptividad'],

  dictamen:
    'La atracción y la influencia genuinas nacen del encuentro sincero entre dos, ' +
    'como el cortejo entre quienes se buscan. No se imponen: se despiertan ' +
    'manteniendo el corazón abierto y receptivo. Quien se deja conmover sin perder ' +
    'el eje, y a la vez conmueve al otro con autenticidad, logra una unión ' +
    'afortunada. La apertura constante, sin cálculo, es lo que de verdad influye.',

  imagen:
    'Sobre la montaña hay un lago, que la humedece y la penetra: la imagen de la ' +
    'influencia mutua. Así, quien es sabio mantiene su mente abierta y receptiva, ' +
    'acogiendo a los demás sin prejuicio para poder alcanzarlos de verdad.',

  significado: {
    general:
      'Es un momento de atracción e influencia mutua: algo o alguien te mueve, y tú ' +
      'puedes mover a otros. La clave está en la apertura sincera: dejarte afectar ' +
      'sin perder tu centro y llegar al otro con autenticidad, no con manipulación. ' +
      'La influencia genuina no se fuerza: se despierta desde la receptividad y el ' +
      'encuentro honesto. Mantén el corazón y la mente abiertos, sin cálculo, y lo ' +
      'que buscas atraer se acerca por sí solo.',
    amor:
      'Momento fuerte de atracción y encuentro: hay una química genuina y las cosas ' +
      'se mueven. Es un tiempo propicio para acercarse y cortejar, siempre desde la ' +
      'sinceridad y no desde la estrategia. Dejarse conmover por el otro y mostrarse ' +
      'auténtico, con el corazón abierto, es lo que crea una unión afortunada. La ' +
      'atracción sincera, no la seducción calculada, es la que une de verdad.',
    trabajo:
      'Buen momento para influir, persuadir y generar acuerdos, pero desde la ' +
      'autenticidad y la escucha, no desde la imposición. Mantener la mente abierta ' +
      'a los demás, dejarse afectar por sus razones y llegar con sinceridad genera ' +
      'una influencia real y duradera. Lo que se logra conmoviendo genuinamente pesa ' +
      'más que lo que se arranca a presión.',
    dinero:
      'Las oportunidades vienen del encuentro y la buena conexión con otros. Es ' +
      'momento de abrirte, escuchar y generar vínculos genuinos que atraen ' +
      'posibilidades. La influencia sincera y la receptividad —no la presión ni el ' +
      'cálculo frío— son las que hacen que las cosas confluyan a tu favor.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'La atracción apenas se insinúa, todavía en lo más pequeño y sin efecto ' +
        'real, como un cosquilleo en el dedo del pie. Es sólo un impulso incipiente: ' +
        'no basta para mover nada aún. No adelantarse a algo que recién asoma.',
    },
    {
      posicion: 2,
      texto:
        'Un impulso que empuja a moverse antes de tiempo, como el músculo que se ' +
        'adelanta solo. Dejarse llevar por ese primer arranque lleva a errar; ' +
        'quedarse quieto y esperar el momento justo, en cambio, trae fortuna. No ' +
        'apurar la atracción.',
    },
    {
      posicion: 3,
      texto:
        'Dejarse arrastrar sin criterio por cada impulso o por lo que otros hacen, ' +
        'sin voluntad propia. Seguir cualquier atracción de manera automática, sin ' +
        'discernir, rebaja. Conviene no correr detrás de todo lo que tira: elegir ' +
        'con cabeza.',
    },
    {
      posicion: 4,
      texto:
        'La influencia verdadera nace del corazón sereno y constante, no de la mente ' +
        'agitada que calcula a quién conquistar. Cuando uno se mantiene sincero y ' +
        'firme por dentro, atrae de manera natural; cuando anda de acá para allá ' +
        'manipulando, sólo alcanza a unos pocos. La autenticidad convoca más que la ' +
        'estrategia.',
    },
    {
      posicion: 5,
      texto:
        'Una firmeza serena que ya no se deja arrastrar por cada impulso ni conmover ' +
        'por lo superficial. Cuando la voluntad está afirmada y no oscila, no hay de ' +
        'qué arrepentirse, aunque la influencia sobre otros no sea grande. La ' +
        'constancia interior tiene su propio valor.',
    },
    {
      posicion: 6,
      texto:
        'Querer influir sólo con palabras, con labia y discurso, sin sustancia ' +
        'detrás. La influencia que se agota en la charla, sin corazón ni acción que ' +
        'la respalde, convence poco y dura menos. Lo que mueve de verdad no es lo ' +
        'que se dice, sino lo que se es.',
    },
  ],
};

const hex32: Hexagrama = {
  numero: 32,
  lineas: [0, 1, 1, 1, 0, 0], // Trueno sobre Viento
  nombre: 'La Duración',
  nombreAlterno: 'Héng',
  palabrasClave: ['constancia', 'perseverancia', 'permanencia', 'renovación'],

  dictamen:
    'Lo que perdura no es lo que se queda rígido, sino lo que se renueva sin cambiar ' +
    'su rumbo, como una unión que dura porque se sostiene en el tiempo. La ' +
    'constancia trae éxito: mantener una dirección firme, adaptando la forma pero no ' +
    'el sentido, y perseverar sin dispersarse. Quien sabe durar, avanzando siempre ' +
    'en la misma línea, llega lejos.',

  imagen:
    'El trueno y el viento, que siempre van juntos y se renuevan: la imagen de la ' +
    'duración. Así, quien es sabio se mantiene firme y no cambia su rumbo, ' +
    'sosteniendo su dirección a través del tiempo sin dejarse llevar por cada ' +
    'vaivén.',

  significado: {
    general:
      'Es un tiempo que premia la constancia y la permanencia: sostener el rumbo, ' +
      'perseverar en lo que vale y dejar que las cosas maduren con el tiempo. Durar ' +
      'no es aferrarse rígidamente a una forma fija, sino renovarse manteniendo la ' +
      'dirección: como un buen hábito o un vínculo largo, que siguen vivos porque se ' +
      'cuidan día a día sin perder el norte. No cambies de camino a cada rato ni te ' +
      'disperses; la fuerza está en persistir con coherencia. Lo que se sostiene con ' +
      'firmeza y se renueva sin traicionar su sentido, perdura.',
    amor:
      'Momento de consolidar y hacer durar el vínculo a través de la constancia. Lo ' +
      'que sostiene una relación en el tiempo no es la intensidad de un momento, ' +
      'sino la fidelidad al rumbo compartido, renovándolo día a día. Cuidar lo ' +
      'cotidiano, mantener el compromiso y no cambiar de rumbo a cada tropiezo es lo ' +
      'que hace que el amor perdure.',
    trabajo:
      'Tiempo de perseverancia y continuidad: sostener el rumbo, cumplir con ' +
      'constancia y dejar que el esfuerzo sostenido dé sus frutos. No es momento de ' +
      'cambiar de estrategia a cada rato ni de dispersarse en mil frentes. La ' +
      'coherencia y la firmeza en una dirección clara, renovando la forma pero no el ' +
      'objetivo, son las que construyen resultados duraderos.',
    dinero:
      'Momento de constancia y planes de largo plazo, no de golpes rápidos. Sostener ' +
      'una estrategia coherente, mantener los buenos hábitos financieros y ' +
      'perseverar sin cambiar de rumbo a cada vaivén es lo que da solidez. Lo que se ' +
      'construye con disciplina sostenida en el tiempo perdura; lo que salta de una ' +
      'cosa a otra se dispersa.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Exigir permanencia y profundidad desde el arranque, sin dar tiempo a que ' +
        'las cosas se asienten. Querer que algo dure para siempre cuando recién ' +
        'empieza, forzándolo, sale mal. La duración se construye poco a poco; ' +
        'apurarla la arruina.',
    },
    {
      posicion: 2,
      texto:
        'Mantenerse constante dentro de la propia medida, sin excederse ni forzar ' +
        'más de lo que se puede sostener. Cuando la perseverancia se ajusta a las ' +
        'propias fuerzas, sin arrebatos, se sostiene sola y el arrepentimiento se ' +
        'disuelve.',
    },
    {
      posicion: 3,
      texto:
        'Dejarse llevar por los estados de ánimo y las circunstancias externas, sin ' +
        'firmeza interior. Quien no le da constancia a su carácter y cambia con cada ' +
        'viento queda a merced de todo y termina expuesto. La falta de eje propio se ' +
        'paga.',
    },
    {
      posicion: 4,
      texto:
        'Buscar con constancia, sí, pero en el lugar equivocado. Persistir con tesón ' +
        'donde no hay nada que encontrar no da resultado, por más empeño que se ' +
        'ponga. La perseverancia sirve cuando apunta al lugar correcto; empecinarse ' +
        'en el sitio errado es esfuerzo perdido.',
    },
    {
      posicion: 5,
      texto:
        'Sostener con constancia y fidelidad una dirección ya trazada. Seguir con ' +
        'firmeza lo establecido es acertado cuando el momento pide adaptarse y ' +
        'acompañar; pero quien debe abrir camino y decidir no puede limitarse a ' +
        'repetir sin más. La constancia justa depende de la posición.',
    },
    {
      posicion: 6,
      texto:
        'Vivir en agitación permanente, en un movimiento constante que no asienta ' +
        'nada. Cuando la inquietud misma se vuelve el estado habitual, nada llega a ' +
        'madurar ni a durar. La duración pide un fondo de quietud; la dispersión ' +
        'perpetua sólo desgasta.',
    },
  ],
};

const hex33: Hexagrama = {
  numero: 33,
  lineas: [0, 0, 1, 1, 1, 1], // Cielo sobre Montaña
  nombre: 'La Retirada',
  nombreAlterno: 'Dùn',
  palabrasClave: ['retirarse a tiempo', 'distancia', 'estrategia', 'preservarse'],

  dictamen:
    'No toda retirada es derrota; a veces es la jugada más sabia. Cuando las ' +
    'fuerzas adversas crecen y el momento no acompaña, retirarse a tiempo y con ' +
    'orden preserva lo valioso y deja abierta la vuelta. No es huida ni renuncia: ' +
    'es apartarse con dignidad para no desgastarse en una batalla perdida.',

  imagen:
    'La montaña se alza, pero el cielo se aparta siempre más arriba, fuera de su ' +
    'alcance: la imagen de la retirada. Así, quien es sabio mantiene a distancia lo ' +
    'que lo perjudica, sin hostilidad pero con firmeza y reserva.',

  significado: {
    general:
      'Es momento de dar un paso al costado más que de avanzar. Las condiciones no ' +
      'favorecen y forzar sólo desgasta; retirarse a tiempo, con orden y sin ' +
      'dramatismo, protege lo que importa y conserva tus fuerzas para mejor ' +
      'ocasión. No es rendirse: es elegir la distancia justa y esperar que el clima ' +
      'cambie.',
    amor:
      'Puede ser tiempo de tomar distancia, no de insistir. Si el vínculo o la ' +
      'situación te desgasta, apartarte con serenidad —sin portazos— cuida tu ' +
      'equilibrio y evita males mayores. A veces el espacio aclara lo que la ' +
      'cercanía forzada enturbia.',
    trabajo:
      'No es momento de dar batalla ni de exponerte de más. Si el entorno se pone ' +
      'adverso, conviene replegarse con estrategia: bajar el perfil, cuidar tu ' +
      'posición y no gastar energía en peleas que hoy no se ganan. Retirarse ' +
      'ordenado no es perder.',
    dinero:
      'Prudencia y repliegue: no es tiempo de exponer capital ni de avanzar en ' +
      'terreno adverso. Proteger lo que tienes, reducir riesgos y esperar mejores ' +
      'condiciones es lo sensato. Conservar hoy vale más que arriesgar por ganar.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Quedar rezagado en la retirada, en la cola, es peligroso. Si el momento de ' +
        'apartarse llegó, no es hora de emprender nada nuevo: quedarse quieto y a ' +
        'resguardo evita el riesgo.',
    },
    {
      posicion: 2,
      texto:
        'Una determinación firme como cuero curtido: sostener lo correcto con ' +
        'voluntad inquebrantable. Cuando la decisión de mantener el rumbo es sólida, ' +
        'nada logra arrancarte de él.',
    },
    {
      posicion: 3,
      texto:
        'Una retirada trabada por apegos que retienen resulta tensa y riesgosa. Si ' +
        'no puedes soltar del todo, al menos rodéate de lo que te sostiene y ' +
        'cuídalo; en lo pequeño y cercano, hay fortuna.',
    },
    {
      posicion: 4,
      texto:
        'Retirarse por propia voluntad, sabiendo dejar a tiempo lo que hay que ' +
        'dejar, trae fortuna a quien tiene temple; a quien se aferra por debilidad, ' +
        'lo hunde. La diferencia está en poder soltar con serenidad.',
    },
    {
      posicion: 5,
      texto:
        'Una retirada amable y a tiempo, sin rispideces, en el momento justo. ' +
        'Apartarse con buenos modos y firmeza serena, sin dudar ni dramatizar, es la ' +
        'forma más afortunada de hacerlo.',
    },
    {
      posicion: 6,
      texto:
        'Una retirada libre y sin ataduras, con el ánimo liviano de quien no deja ' +
        'cuentas pendientes. Cuando te apartas sin dudas ni pesar, con claridad, ' +
        'todo se acomoda a favor.',
    },
  ],
};

const hex34: Hexagrama = {
  numero: 34,
  lineas: [1, 1, 1, 1, 0, 0], // Trueno sobre Cielo
  nombre: 'El Gran Poder',
  nombreAlterno: 'Dà Zhuàng',
  palabrasClave: ['fuerza', 'vigor', 'poder con rectitud', 'mesura'],

  dictamen:
    'Es un tiempo de gran fuerza y empuje, en que se puede lograr mucho. Pero la ' +
    'potencia sin dirección es peligrosa: el verdadero poder está en unir la fuerza ' +
    'a lo justo y saber contenerla. Avanzar con vigor, sí, pero con rectitud y sin ' +
    'embestir como el carnero contra el cerco.',

  imagen:
    'El trueno resuena en lo alto del cielo: la imagen del gran poder. Así, quien ' +
    'es sabio no da un paso que no esté de acuerdo con lo correcto, y mide su fuerza ' +
    'en vez de gastarla.',

  significado: {
    general:
      'Tienes fuerza y empuje de sobra en este momento; el desafío no es tener ' +
      'poder sino usarlo bien. La energía desbordada, aplicada sin criterio, choca y ' +
      'se lastima. Avanza con firmeza pero mantén el rumbo en lo justo, sin arrasar ' +
      'ni imponerte por imponerte. El poder que se sostiene es el que va de la mano ' +
      'de la mesura.',
    amor:
      'Hay mucha energía e intensidad en juego. Bien encauzada, impulsa; ' +
      'desbordada, avasalla. Cuida de no arrollar al otro con tu ímpetu: la fuerza ' +
      'que respeta y no atropella es la que construye. Firmeza sí, imposición no.',
    trabajo:
      'Momento de empuje y capacidad para avanzar en grande. Aprovéchalo, pero con ' +
      'estrategia y no a lo bruto: la fuerza ciega abre grietas, la fuerza dirigida ' +
      'abre caminos. Poner el vigor al servicio de un objetivo claro y correcto es ' +
      'lo que rinde.',
    dinero:
      'Buen momento de impulso, con recursos y energía para crecer. El riesgo es la ' +
      'temeridad: avanzar con exceso de confianza y sin medir. Usa la fuerza con ' +
      'cabeza, sin sobreexponerte; el vigor con prudencia es lo que consolida.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Fuerza que empuja desde abajo, desde los pies, con ganas de arrancar de ' +
        'golpe. Avanzar así, a lo bruto y sin posición todavía, lleva al tropiezo. ' +
        'No es momento de embestir.',
    },
    {
      posicion: 2,
      texto:
        'La fuerza empieza a encontrar su cauce y el avance se afirma. Manteniendo ' +
        'la constancia y sin excederse, el vigor rinde y el resultado acompaña. ' +
        'Firmeza serena, no arrebato.',
    },
    {
      posicion: 3,
      texto:
        'Empeñarse en avanzar por pura fuerza, como el carnero que embiste el cerco ' +
        'y queda con los cuernos trabados. Quien es sabio no hace alarde de su ' +
        'poder; el que sí, se enreda en su propio ímpetu.',
    },
    {
      posicion: 4,
      texto:
        'La constancia rinde y los obstáculos ceden: el cerco se abre y el paso ' +
        'queda libre. Cuando la fuerza se aplica con paciencia y en el momento ' +
        'justo, avanza sin trabarse. Persistir sin embestir.',
    },
    {
      posicion: 5,
      texto:
        'Soltar la terquedad y el ímpetu combativo con naturalidad, sin aferrarse a ' +
        'la pelea. Dejar ir la actitud de embestir, cuando ya no hace falta, no trae ' +
        'ningún pesar. La firmeza no necesita cuernos.',
    },
    {
      posicion: 6,
      texto:
        'Trabado como el carnero en el cerco: ni adelante ni atrás, atascado por ' +
        'haber forzado de más. Pero si reconoces la traba y dejas de empujar, la ' +
        'situación se destraba y vuelve la fortuna. Parar a tiempo salva.',
    },
  ],
};

const hex35: Hexagrama = {
  numero: 35,
  lineas: [0, 0, 0, 1, 0, 1], // Fuego sobre Tierra
  nombre: 'El Progreso',
  nombreAlterno: 'Jìn',
  palabrasClave: ['avance', 'reconocimiento', 'claridad', 'ascenso'],

  dictamen:
    'Como el sol que se eleva sobre la tierra, es un tiempo de progreso claro y ' +
    'fácil: las cosas avanzan, el mérito se reconoce y el camino se abre. Momento ' +
    'propicio para brillar y crecer, siempre desde la rectitud y la generosidad, ' +
    'sin ensoberbecerse con el favor que se recibe.',

  imagen:
    'El sol se eleva sobre la tierra y todo se ilumina: la imagen del progreso. ' +
    'Así, quien es sabio ilumina por sí mismo su propia virtud, haciéndola cada vez ' +
    'más clara y luminosa.',

  significado: {
    general:
      'Es una etapa de avance y reconocimiento: lo que hacías empieza a dar frutos ' +
      'y a ser visto. El camino se despeja y el impulso está a favor. Aprovéchalo ' +
      'para crecer y mostrarte, pero sin perder la humildad: el progreso genuino se ' +
      'apoya en el mérito y la buena fe, no en el arribismo. Brilla, y lleva a otros ' +
      'contigo.',
    amor:
      'Momento luminoso y de avance en el vínculo: hay acercamiento, claridad y ' +
      'buena energía. Es un buen tiempo para dar pasos, mostrarte y dejar que las ' +
      'cosas florezcan. La sinceridad y la calidez, más que la estrategia, son las ' +
      'que hacen crecer lo que se está dando.',
    trabajo:
      'Etapa de progreso, visibilidad y reconocimiento: tu trabajo se nota y hay ' +
      'chances de crecer o ascender. Aprovecha el impulso con iniciativa y sin miedo ' +
      'a mostrarte, pero manteniendo la integridad. Quien sube con mérito y sin ' +
      'pisar a nadie consolida su lugar.',
    dinero:
      'Buen momento de crecimiento y oportunidades claras. El terreno acompaña para ' +
      'avanzar y hacer prosperar lo que tienes. Aprovecha con criterio, sin marearte ' +
      'con la buena racha: el progreso sólido es el que se cuida y no se derrocha.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al empezar a avanzar, un rechazo o una traba inicial frena el impulso. No ' +
        'es para preocuparse: si mantienes la calma y la rectitud, aunque al ' +
        'principio no confíen en ti, el progreso llega igual.',
    },
    {
      posicion: 2,
      texto:
        'Un avance que se da entre cierta tristeza o soledad, sin el apoyo esperado. ' +
        'Mantén la firmeza y la rectitud sin forzar el favor de nadie: con el tiempo ' +
        'llega una ayuda o bendición que no buscabas.',
    },
    {
      posicion: 3,
      texto:
        'El avance se da acompañado, con el respaldo y la confianza de otros que van ' +
        'en la misma dirección. Cuando el progreso es compartido y hay acuerdo, se ' +
        'disuelven las dudas y el camino se allana.',
    },
    {
      posicion: 4,
      texto:
        'Avanzar acaparando, como el roedor que junta más de lo que necesita, con ' +
        'avidez y sin escrúpulos. Progresar así, por codicia o a costa de otros, es ' +
        'un camino peligroso que tarde o temprano se paga.',
    },
    {
      posicion: 5,
      texto:
        'Ya en una buena posición, soltar la ansiedad por las ganancias y las ' +
        'pérdidas. Cuando avanzas sin obsesionarte por el resultado, con confianza y ' +
        'desapego, todo lo que emprendes prospera.',
    },
    {
      posicion: 6,
      texto:
        'Usar la fuerza y la firmeza sólo para corregir lo propio, la propia casa, y ' +
        'no para avanzar sobre los demás. En ese límite, con conciencia del riesgo, ' +
        'hay fortuna; insistir con dureza más allá de eso trae vergüenza.',
    },
  ],
};

const hex36: Hexagrama = {
  numero: 36,
  lineas: [1, 0, 1, 0, 0, 0], // Tierra sobre Fuego
  nombre: 'El Oscurecimiento de la Luz',
  nombreAlterno: 'Míng Yí',
  palabrasClave: ['adversidad', 'discreción', 'luz interior', 'perseverar oculto'],

  dictamen:
    'La luz se ha hundido bajo la tierra: son tiempos oscuros, en que lo luminoso ' +
    'es herido y lo torcido domina. Frente a eso, la sabiduría no está en brillar de ' +
    'frente —eso sólo atrae el golpe— sino en velar la propia luz, mantenerla ' +
    'encendida por dentro y perseverar con discreción hasta que el día vuelva.',

  imagen:
    'El sol se ha hundido bajo la tierra: la imagen del oscurecimiento de la luz. ' +
    'Así, quien es sabio, al tratar con la multitud, vela su claridad y sin embargo ' +
    'sigue alumbrando: se muestra reservado, pero por dentro permanece lúcido.',

  significado: {
    general:
      'Estás en un tiempo adverso, quizá rodeado de un entorno hostil o poco claro, ' +
      'donde mostrarte tal cual eres podría exponerte. No es momento de brillar de ' +
      'frente ni de dar batalla abierta. Protege tu luz: guarda tus ideas y tus ' +
      'fuerzas, mantén la lucidez por dentro y avanza con discreción. La adversidad ' +
      'pasa; llegar entero al otro lado es la victoria de ahora.',
    amor:
      'Un momento difícil o poco propicio, donde conviene la reserva más que la ' +
      'exposición. Si el clima está enrarecido, protégete: no entregues todo ni te ' +
      'muestres vulnerable donde no hay cuidado. Guardar la ternura para donde sí la ' +
      'valoran, y esperar, es lo sabio.',
    trabajo:
      'Entorno adverso o poco confiable: no es momento de destacar ni de ' +
      'confrontar. Mantén el perfil bajo, guarda tus mejores cartas y no muestres ' +
      'todo lo que sabes o piensas. Perseverar con discreción, cuidándote, es lo que ' +
      'te permite atravesar la etapa sin salir herido.',
    dinero:
      'Tiempo desfavorable, para cuidar y no exponer. No es momento de mostrar ' +
      'recursos ni de arriesgar en terreno turbio. Protege lo que tienes, sé ' +
      'prudente y discreto, y espera a que el panorama se aclare. Preservar es la ' +
      'meta.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al primer signo de que el clima se vuelve oscuro, apartarse a tiempo, ' +
        'aunque cueste privaciones. Retirarse temprano, aun pasando estrecheces y ' +
        'sin que otros lo entiendan, es preferible a quedar atrapado.',
    },
    {
      posicion: 2,
      texto:
        'La adversidad alcanza y hiere, pero no en lo vital. Si, aun golpeado, ' +
        'ayudas pronto a los demás con toda tu fuerza y no te derrumbas, sales ' +
        'adelante. Reaccionar con entereza ante el daño trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'En medio de la oscuridad se da la oportunidad de derribar la raíz del mal. ' +
        'Pero aun logrando ese golpe, no conviene apurar los cambios: lo torcido de ' +
        'años no se corrige en un día.',
    },
    {
      posicion: 4,
      texto:
        'Llegar a ver, desde adentro, el corazón de la situación oscura, y ' +
        'comprender que no tiene arreglo. Cuando entiendes de raíz que el lugar está ' +
        'corrompido, lo sabio es salir a tiempo, antes de quedar enredado en él.',
    },
    {
      posicion: 5,
      texto:
        'Vivir la adversidad de cerca, sin poder alejarse, atrapado en un entorno ' +
        'oscuro. Ahí la salida es interior: mantener la propia integridad velada ' +
        'pero firme, sin traicionarse. La perseverancia discreta sostiene.',
    },
    {
      posicion: 6,
      texto:
        'La oscuridad llega a su extremo y, en ese punto, se agota a sí misma. Lo ' +
        'que se encumbró dañando y ofuscando termina cayendo por su propio peso. ' +
        'Cuando el mal toca su límite máximo, empieza a deshacerse solo.',
    },
  ],
};

const hex37: Hexagrama = {
  numero: 37,
  lineas: [1, 0, 1, 0, 1, 1], // Viento sobre Fuego
  nombre: 'La Familia',
  nombreAlterno: 'Jiā Rén',
  palabrasClave: ['hogar', 'roles', 'orden interno', 'pertenencia'],

  dictamen:
    'El orden del mundo empieza por el orden de la casa: cuando cada quien ocupa ' +
    'bien su lugar y cumple su parte con afecto y responsabilidad, la comunidad ' +
    'entera se sostiene. La fuerza no viene de la rigidez sino de los vínculos ' +
    'claros, la constancia y el cariño firme. Lo que se cultiva puertas adentro ' +
    'irradia hacia afuera.',

  imagen:
    'El viento surge del fuego: el calor que se expande desde el hogar hacia ' +
    'afuera. Así, quien es sabio cuida que sus palabras tengan sustancia y que sus ' +
    'actos tengan constancia, porque la influencia verdadera nace de la coherencia ' +
    'en lo cercano.',

  significado: {
    general:
      'El foco está en lo cercano: la familia, el hogar, el círculo íntimo, los ' +
      'roles y el orden dentro de él. Es momento de cuidar esos vínculos, cumplir tu ' +
      'parte y sostener el lugar que te toca con afecto y responsabilidad. Lo que se ' +
      'ordena y se nutre puertas adentro —la confianza, la coherencia, el cariño ' +
      'firme— es la base desde la que todo lo demás crece.',
    amor:
      'El vínculo pide construir un hogar en sentido amplio: roles claros, ' +
      'compromiso, cuidado cotidiano y coherencia. No es tiempo de grandes aventuras ' +
      'sino de afianzar la base compartida. El afecto que se sostiene con constancia ' +
      'y respeto por el lugar de cada uno es el que perdura.',
    trabajo:
      'Momento de ordenar el adentro: el equipo, los roles, las responsabilidades, ' +
      'el clima del grupo. Cuando cada quien sabe su lugar y hay coherencia entre lo ' +
      'que se dice y se hace, todo funciona mejor. Cuidar la base interna es lo que ' +
      'sostiene los resultados hacia afuera.',
    dinero:
      'Tiempo de orden doméstico y administración prolija: cuentas claras, roles ' +
      'definidos, gastos y ahorros bien organizados en el ámbito cercano. La solidez ' +
      'no viene de una gran jugada sino de la gestión ordenada y constante de lo ' +
      'propio. La casa en orden es la base.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Establecer desde el comienzo reglas y límites claros en la casa o el grupo. ' +
        'Poner orden temprano, antes de que aparezcan los problemas, evita después ' +
        'muchos pesares. La estructura firme al inicio es un cuidado, no una dureza.',
    },
    {
      posicion: 2,
      texto:
        'No dejarse llevar por el capricho ni el impulso propio, sino atender con ' +
        'constancia lo que sostiene a los demás en lo cotidiano. Cumplir con ' +
        'dedicación el rol de cuidar y nutrir, sin buscar protagonismo, trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'En la familia, el exceso de dureza trae arrepentimiento, pero es preferible ' +
        'a la falta total de límites. El punto justo está entre la firmeza y el ' +
        'afecto, sin caer ni en la tiranía ni en el desorden.',
    },
    {
      posicion: 4,
      texto:
        'Quien administra y sostiene el hogar con criterio, haciéndolo prosperar, es ' +
        'su verdadero tesoro. Cuando alguien cuida y enriquece lo común con ' +
        'dedicación y buen manejo, la casa entera florece. Gran fortuna.',
    },
    {
      posicion: 5,
      texto:
        'Conducir el hogar o el grupo desde el afecto y la confianza mutua, no desde ' +
        'el miedo ni la imposición. Cuando quien tiene autoridad se acerca con amor ' +
        'y los demás responden con confianza, no hay nada que temer y todo prospera.',
    },
    {
      posicion: 6,
      texto:
        'La autoridad que se gana no con gritos sino con el propio ejemplo y la ' +
        'constancia. Cuando uno es exigente primero consigo mismo y sostiene sus ' +
        'valores con coherencia, inspira respeto sincero, y al final llega la ' +
        'fortuna.',
    },
  ],
};

const hex38: Hexagrama = {
  numero: 38,
  lineas: [1, 1, 0, 1, 0, 1], // Fuego sobre Lago
  nombre: 'La Oposición',
  nombreAlterno: 'Kuí',
  palabrasClave: ['diferencia', 'malentendido', 'tensión', 'reconciliar en lo pequeño'],

  dictamen:
    'Las fuerzas tiran para lados distintos: hay oposición, desencuentro, quizá ' +
    'malentendidos que separan. En lo grande no es momento de forzar la unión, pero ' +
    'en lo pequeño sí se pueden tender puentes. La diferencia no siempre es un ' +
    'problema: bien entendida, lo diverso puede complementarse. La clave está en no ' +
    'agrandar la distancia y buscar los puntos de contacto.',

  imagen:
    'Arriba el fuego, que sube; abajo el lago, que baja: se apartan uno del otro. ' +
    'Así, quien es sabio, en medio de la comunión general, conserva también su ' +
    'singularidad: se mantiene unido a los demás sin dejar de ser quien es.',

  significado: {
    general:
      'Hay tensión, desencuentro o malentendidos: las cosas o las personas parecen ' +
      'tirar en direcciones opuestas. No es momento de grandes acuerdos ni de forzar ' +
      'la unión, pero tampoco de agrandar la grieta. En lo chico, con paciencia, se ' +
      'pueden tender puentes. A veces lo que parece oposición es sólo diferencia ' +
      'que, bien mirada, se complementa.',
    amor:
      'Momento de desencuentros, diferencias o malentendidos que distancian. Forzar ' +
      'la reconciliación de golpe no funciona; sí ayudan los gestos pequeños y la ' +
      'paciencia para volver a entenderse. Aceptar que el otro es distinto, sin ' +
      'querer que piense igual, suele destrabar más que discutir quién tiene razón.',
    trabajo:
      'Diferencias de criterio, tensiones o falta de entendimiento en el entorno. ' +
      'No es momento de imponer una postura ni de grandes acuerdos. Avanza en lo ' +
      'concreto y pequeño, buscando los puntos en común y sin agrandar los roces. La ' +
      'diversidad de miradas, bien manejada, puede sumar en vez de dividir.',
    dinero:
      'Contexto de desacuerdos o señales contradictorias: mejor no cerrar grandes ' +
      'tratos ni tomar decisiones de fondo en medio de la confusión. Avanza en lo ' +
      'pequeño y seguro, aclara los malentendidos antes de comprometerte, y no ' +
      'fuerces acuerdos que hoy no están maduros.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Cuando algo o alguien se aleja, no salir a perseguirlo con desesperación: ' +
        'lo que es tuyo vuelve solo. Y ante gente de mala intención, no confrontar ' +
        'sino cuidarse de no errar. En la distancia, la calma y la prudencia ' +
        'resuelven.',
    },
    {
      posicion: 2,
      texto:
        'Un encuentro casi inesperado, en un momento o lugar poco favorable, con ' +
        'quien podría entenderte. Aprovechar ese cruce fortuito para acercarse, aun ' +
        'sin las condiciones ideales, no es un error: los puentes se tienden por ' +
        'caminos laterales.',
    },
    {
      posicion: 3,
      texto:
        'Al principio, todo parece trabarse y salir mal: obstáculos, humillaciones, ' +
        'sensación de ir contra la corriente. Pero si perseveras a pesar del mal ' +
        'comienzo, el desenlace es bueno. Lo que arranca torcido puede terminar ' +
        'derecho.',
    },
    {
      posicion: 4,
      texto:
        'En medio del aislamiento y el desencuentro, encontrar a alguien afín con ' +
        'quien unirse de buena fe. Cuando te sientes solo por las diferencias, ' +
        'aparece un aliado sincero: apoyarse en él, aun con riesgo, disuelve la ' +
        'culpa y la soledad.',
    },
    {
      posicion: 5,
      texto:
        'El malentendido con alguien cercano empieza a despejarse y la confianza se ' +
        'reencuentra. Cuando el otro atraviesa las barreras y se acerca de verdad, ' +
        'ir a su encuentro no puede ser un error. La reconciliación sincera está al ' +
        'alcance.',
    },
    {
      posicion: 6,
      texto:
        'La desconfianza extrema hace ver enemigo donde hay un aliado: primero se ' +
        'apunta el arco, luego se comprende el error y se baja. Al soltar la ' +
        'sospecha y reconocer al otro, la tensión se descarga como lluvia que ' +
        'despeja el aire, y llega la fortuna.',
    },
  ],
};

const hex39: Hexagrama = {
  numero: 39,
  lineas: [0, 0, 1, 0, 1, 0], // Agua sobre Montaña
  nombre: 'El Impedimento',
  nombreAlterno: 'Jiǎn',
  palabrasClave: ['obstáculo', 'pausa', 'buscar ayuda', 'mirar hacia adentro'],

  dictamen:
    'Hay un obstáculo en el camino: adelante el peligro, atrás la montaña. No es ' +
    'momento de embestir de frente contra lo que traba, sino de detenerse, evaluar ' +
    'y buscar otra vía —y ayuda—. Frente al impedimento, el sabio no culpa afuera: ' +
    'se vuelve hacia adentro, corrige lo propio y espera el momento y los aliados ' +
    'para seguir.',

  imagen:
    'Sobre la montaña, el agua peligrosa: la imagen del impedimento. Así, quien es ' +
    'sabio, ante la traba externa, vuelve la mirada hacia sí mismo y trabaja en su ' +
    'propio carácter.',

  significado: {
    general:
      'Te encontraste con un obstáculo real que no cede a la fuerza. Empujar de ' +
      'frente sólo agota; lo sabio ahora es frenar, no insistir por el mismo lado y ' +
      'buscar un rodeo o pedir ayuda. Es también un momento para mirar hacia ' +
      'adentro: en vez de culpar a las circunstancias, ver qué puedes ajustar en ti. ' +
      'La traba es temporal; se atraviesa con paciencia, aliados y una vía distinta.',
    amor:
      'Un obstáculo o una traba en el vínculo que no se resuelve forzándola. Mejor ' +
      'detenerse, no insistir por donde no funciona y, si hace falta, buscar ayuda o ' +
      'consejo. Es buen momento para mirar la propia parte en el problema, con ' +
      'honestidad, en vez de sólo señalar al otro.',
    trabajo:
      'Un impedimento concreto frena el avance. No es momento de embestir ni de más ' +
      'de lo mismo: conviene parar, replantear el camino y apoyarse en quien pueda ' +
      'ayudar. Revisar tu propio enfoque, corregir lo que dependa de ti y buscar ' +
      'aliados es lo que destraba, no la fuerza.',
    dinero:
      'Aparece una traba u obstáculo que conviene no forzar. No es momento de ' +
      'insistir en el mismo movimiento ni de arriesgar para salir rápido. Detenerse, ' +
      'buscar asesoramiento y replantear la estrategia es lo prudente. La dificultad ' +
      'se sortea con cabeza y ayuda, no a los golpes.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Ante el obstáculo, avanzar de frente sólo trae más trabas; detenerse y ' +
        'esperar es lo acertado. Saber que este no es el momento de seguir, y ' +
        'aguardar, se valora. La pausa a tiempo evita el daño.',
    },
    {
      posicion: 2,
      texto:
        'Enfrentar dificultad tras dificultad no por interés propio sino por un ' +
        'deber o una causa mayor. Cuando los obstáculos se acumulan sin que sea tu ' +
        'culpa, persistir por lo correcto —aun sin recompensa a la vista— no acarrea ' +
        'reproche.',
    },
    {
      posicion: 3,
      texto:
        'Al ver que avanzar sólo lleva a más peligro, dar la vuelta y regresar a lo ' +
        'seguro. Volver sobre los pasos, hacia donde te esperan y te sostienen, es ' +
        'lo sabio cuando adelante no hay paso. Retroceder aquí es cuidarse.',
    },
    {
      posicion: 4,
      texto:
        'No lanzarse solo contra la dificultad, sino volver a reunir fuerzas y ' +
        'aliados antes de seguir. Cuando el obstáculo es grande, conviene no avanzar ' +
        'en soledad sino sumar a otros: la unión reunida antes de actuar es la que ' +
        'después atraviesa.',
    },
    {
      posicion: 5,
      texto:
        'En medio del obstáculo más grande, llega la ayuda de los que te acompañan. ' +
        'Cuando la dificultad es máxima, la firmeza propia atrae a los aliados que ' +
        'hacen falta. No estás solo: sostener el rumbo convoca apoyo.',
    },
    {
      posicion: 6,
      texto:
        'En lugar de huir de la dificultad hacia lo propio, volver a ella para ' +
        'ayudar a resolverla junto a otros trae gran fortuna. Quien, pudiendo ' +
        'apartarse, regresa a poner el hombro por el bien común, encuentra su mayor ' +
        'logro.',
    },
  ],
};

const hex40: Hexagrama = {
  numero: 40,
  lineas: [0, 1, 0, 1, 0, 0], // Trueno sobre Agua
  nombre: 'La Liberación',
  nombreAlterno: 'Xiè',
  palabrasClave: ['alivio', 'soltar', 'perdonar', 'volver a la normalidad'],

  dictamen:
    'Después de la tensión, el alivio: como la tormenta que estalla y despeja el ' +
    'aire, las trabas se disuelven y llega la liberación. Es tiempo de soltar lo ' +
    'que pesaba, perdonar viejas ofensas y volver a la normalidad sin remover el ' +
    'pasado. Lo que hay que resolver, resolverlo pronto; lo que ya pasó, dejarlo ir.',

  imagen:
    'El trueno y la lluvia se desatan y descargan la tensión: la imagen de la ' +
    'liberación. Así, quien es sabio perdona las faltas y trata con indulgencia los ' +
    'errores, dejando atrás lo que ya no tiene sentido cargar.',

  significado: {
    general:
      'Se destraba algo que venía tensionado: llega el alivio, la solución, el ' +
      'respiro después de la dificultad. Es momento de soltar la carga, perdonar y ' +
      'no seguir rumiando lo que ya pasó. Aprovecha la liberación para volver a la ' +
      'normalidad y ordenar lo pendiente, pero sin apurarte a grandes empresas: lo ' +
      'urgente, resolverlo ya; el resto, retomarlo con calma.',
    amor:
      'Se afloja una tensión o se supera un conflicto en el vínculo: llega el ' +
      'momento de reconciliar y soltar rencores. Perdonar lo que quedó atrás, sin ' +
      'volver una y otra vez sobre la herida, permite empezar de nuevo más livianos. ' +
      'Dejar ir lo viejo es lo que reabre el cariño.',
    trabajo:
      'Se resuelve o destraba una situación complicada: baja la presión y vuelve la ' +
      'fluidez. Aprovecha el alivio para ordenar lo pendiente y retomar el ritmo, ' +
      'resolviendo rápido lo que quedó colgado. No es momento de remover viejas ' +
      'peleas sino de pasar página y avanzar.',
    dinero:
      'Se supera una dificultad o una tensión financiera: llega un respiro. Es ' +
      'momento de regularizar lo pendiente, ordenar y volver a la normalidad, sin ' +
      'lanzarse enseguida a grandes movimientos. Resolver pronto lo urgente y soltar ' +
      'el estrés acumulado es lo que corresponde.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Pasada la dificultad, el momento pide quietud y recuperación, no acción. ' +
        'Después del esfuerzo, descansar y dejar que las cosas se asienten, sin ' +
        'forzar nada nuevo, es lo correcto. No hay culpa en detenerse a recuperar ' +
        'fuerzas.',
    },
    {
      posicion: 2,
      texto:
        'Liberarse de las influencias taimadas o los enredos que estorbaban, con ' +
        'firmeza y rectitud. Sacar del medio, sin ensañamiento pero con decisión, lo ' +
        'que corrompía la situación, y mantener el equilibrio, trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'Ostentar una posición o unos bienes que no corresponden a lo que uno es ' +
        'atrae problemas. Cuando se sale de la dificultad y se exhibe de más lo ' +
        'conseguido, se invita a la envidia y al despojo. Mejor la discreción que el ' +
        'alarde.',
    },
    {
      posicion: 4,
      texto:
        'Soltar los vínculos o apegos inferiores que te retienen y no te dejan ' +
        'avanzar. Al desprenderte de las malas compañías o las ataduras que no ' +
        'suman, se acerca el aliado verdadero, el de confianza. Hay que soltar para ' +
        'poder recibir lo bueno.',
    },
    {
      posicion: 5,
      texto:
        'Liberarse por dentro, con decisión firme, de aquello que estorba, y que eso ' +
        'se note en los hechos. Cuando de verdad te desprendes de lo que no va, las ' +
        'influencias negativas se retiran solas al ver tu resolución.',
    },
    {
      posicion: 6,
      texto:
        'Llegado el momento justo, eliminar de un solo acto certero el obstáculo ' +
        'mayor que impedía la liberación. Cuando has preparado y esperado, dar el ' +
        'golpe decisivo contra lo que trababa todo resuelve la situación de raíz.',
    },
  ],
};

const hex41: Hexagrama = {
  numero: 41,
  lineas: [1, 1, 0, 0, 0, 1], // Montaña sobre Lago
  nombre: 'La Merma',
  nombreAlterno: 'Sǔn',
  palabrasClave: ['reducir', 'simplificar', 'moderación', 'lo esencial'],

  dictamen:
    'Un tiempo de merma: hay que dar, ceder o reducir. Pero la disminución, cuando ' +
    'se hace con sinceridad y en el momento justo, no empobrece: simplifica y ' +
    'fortalece. Renunciar a lo superfluo, moderar los excesos, dominar el enojo y el ' +
    'deseo, deja lo esencial más firme. A veces se progresa quitando, no sumando.',

  imagen:
    'Al pie de la montaña, el lago se ahonda: cuanto más se profundiza abajo, más ' +
    'se realza lo alto. Así, quien es sabio domina su ira y refrena sus deseos, ' +
    'quitándose lo que sobra.',

  significado: {
    general:
      'Es un tiempo de reducir, ceder o soltar algo, aunque cueste. No es una ' +
      'pérdida sin sentido: bien vivida, la merma simplifica y fortalece. Suelta lo ' +
      'superfluo, modera los excesos y quédate con lo esencial. Dominar el impulso, ' +
      'el enojo o la ambición desmedida ahora rinde más que acumular. Menos, hecho ' +
      'con sinceridad, puede ser más.',
    amor:
      'Momento de ceder, moderar exigencias o simplificar el vínculo, dejando de ' +
      'lado lo que sobra. Bajar las demandas, controlar los arranques y quedarse con ' +
      'lo esencial del cariño fortalece más que reclamar. Un gesto sincero de dar o ' +
      'resignar algo, en el momento justo, acerca.',
    trabajo:
      'Tiempo de ajustar, recortar o simplificar: menos frentes, menos excesos, foco ' +
      'en lo esencial. No es retroceso; es concentrar fuerzas. Reducir lo superfluo ' +
      'y sostener lo importante con austeridad prepara un crecimiento más sólido ' +
      'después. La moderación rinde.',
    dinero:
      'Momento de austeridad y recorte: reducir gastos, simplificar y soltar lo que ' +
      'no es necesario. No es un mal signo; es ordenar y fortalecer la base. Vivir ' +
      'con menos y con criterio ahora deja el terreno más firme para lo que venga. ' +
      'Menos excesos, más solidez.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Terminada la propia tarea, acudir pronto a ayudar a otro está bien; pero ' +
        'midiendo hasta dónde restarse sin vaciarse. Dar y aligerar al otro es bueno ' +
        'si se hace con mesura, sin desatender lo propio ni excederse.',
    },
    {
      posicion: 2,
      texto:
        'Ayudar y aportar a otros conservando la propia dignidad, sin rebajarse. No ' +
        'hace falta empobrecerse ni ceder lo que uno es para enriquecer a los demás: ' +
        'se da desde la firmeza, no desde la sumisión.',
    },
    {
      posicion: 3,
      texto:
        'En los vínculos, la cuenta justa suele ser de a dos: donde hay tres, sobra ' +
        'uno y aparece la fricción; quien va solo, encuentra su compañía. Ordenar los ' +
        'lazos, dejando lo esencial, evita celos y estorbos.',
    },
    {
      posicion: 4,
      texto:
        'Reducir los propios defectos, aligerarse de lo que enferma o traba, atrae ' +
        'hacia uno lo bueno. Cuando trabajas en quitarte tus fallas, los demás se ' +
        'acercan con alegría. Corregirse es la mejor merma.',
    },
    {
      posicion: 5,
      texto:
        'Cuando uno actúa con sinceridad y bien, llega una ayuda o una fortuna tan ' +
        'grande que nada puede impedirla. La buena disposición se ve premiada de un ' +
        'modo que ni la duda puede frenar. Suprema fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Llegar a un punto en que se puede dar y beneficiar a muchos sin quitarle a ' +
        'nadie. Cuando el crecimiento propio se vuelve fuente de bien común, sin ' +
        'despojar a otros, se gana la adhesión de todos. Enriquecer sin restar es el ' +
        'ideal.',
    },
  ],
};

const hex42: Hexagrama = {
  numero: 42,
  lineas: [1, 0, 0, 0, 1, 1], // Viento sobre Trueno
  nombre: 'El Aumento',
  nombreAlterno: 'Yì',
  palabrasClave: ['crecimiento', 'generosidad', 'oportunidad', 'aprovechar el momento'],

  dictamen:
    'Tiempo de aumento y crecimiento, en que lo de arriba se vuelca hacia abajo y ' +
    'todo se ve favorecido. Es propicio para emprender en grande y cruzar aguas ' +
    'difíciles. La energía sopla a favor: conviene aprovecharla con generosidad y ' +
    'sin demora, imitando lo bueno y corrigiendo lo que esté mal. Los tiempos ' +
    'fértiles no duran para siempre; hay que sembrar mientras dura.',

  imagen:
    'El viento y el trueno se refuerzan mutuamente: la imagen del aumento. Así, ' +
    'quien es sabio, cuando ve el bien, lo imita; y cuando tiene faltas, las ' +
    'corrige.',

  significado: {
    general:
      'Es una etapa de crecimiento y oportunidad: la energía está a favor y se puede ' +
      'lograr mucho, incluso lo que parecía difícil. Momento de emprender, expandir ' +
      'y dar con generosidad, sin miedo pero con criterio. Aprovéchalo mientras ' +
      'dura: imita lo que ves de bueno, corrige tus fallas y no dejes pasar la buena ' +
      'racha. Lo que se siembra ahora, con generosidad, vuelve multiplicado.',
    amor:
      'Momento de crecimiento y generosidad en el vínculo: dar sin cálculo, abrirse ' +
      'y construir de a dos florece ahora. Es buen tiempo para dar pasos importantes ' +
      'y expandir lo que hay. La generosidad sincera, sin llevar la cuenta, es lo ' +
      'que multiplica el cariño en esta etapa fértil.',
    trabajo:
      'Etapa muy favorable para emprender, expandir y encarar proyectos grandes: el ' +
      'impulso acompaña. Aprovecha la buena racha con iniciativa y generosidad hacia ' +
      'tu equipo. Es momento de sembrar en grande, aprender de los mejores y corregir ' +
      'lo que traba. Lo que inviertes ahora rinde multiplicado.',
    dinero:
      'Buen momento de crecimiento y de oportunidades para invertir y expandir. El ' +
      'terreno favorece la iniciativa y la generosidad bien dirigida. Aprovecha con ' +
      'criterio mientras dura, sin caer en la imprudencia: sembrar con inteligencia ' +
      'en época fértil deja frutos duraderos.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Cuando llega el respaldo y la energía favorable, es momento de emprender ' +
        'algo grande. Aprovechar ese apoyo para una obra de fondo, y hacerla bien, ' +
        'trae la mejor fortuna. La ayuda que se recibe pide estar a su altura.',
    },
    {
      posicion: 2,
      texto:
        'Una fortuna o un beneficio tan grande que nada puede impedirlo, llegado a ' +
        'quien está bien dispuesto por dentro. Mantén la rectitud y la sinceridad: lo ' +
        'bueno se afirma solo y hasta lo más alto lo favorece.',
    },
    {
      posicion: 3,
      texto:
        'Hasta las circunstancias adversas pueden volverse ganancia si se las ' +
        'enfrenta con sinceridad y equilibrio. Cuando actúas de buena fe y con ' +
        'transparencia, incluso lo difícil termina aportando. La honestidad convierte ' +
        'el problema en aprendizaje.',
    },
    {
      posicion: 4,
      texto:
        'Actuar como puente, con equidad y buena fe, entre los de arriba y los de ' +
        'abajo, para el bien común. Cuando obras con criterio y honestidad, tu ' +
        'palabra pesa y se te confía lo importante. El bien de todos por encima del ' +
        'propio.',
    },
    {
      posicion: 5,
      texto:
        'La bondad sincera del corazón no necesita andar preguntando ni buscando ' +
        'recompensa: se reconoce sola. Cuando das y obras el bien de verdad, sin ' +
        'cálculo, eso mismo vuelve como fortuna. La generosidad genuina es su propio ' +
        'premio.',
    },
    {
      posicion: 6,
      texto:
        'Querer recibir sin dar nunca, buscar sólo el propio beneficio sin aportar a ' +
        'nadie. El egoísmo que no comparte termina aislado y hasta atacado. Cuando el ' +
        'corazón se vuelve inconstante y avaro, se pierde lo ganado.',
    },
  ],
};

const hex43: Hexagrama = {
  numero: 43,
  lineas: [1, 1, 1, 1, 1, 0], // Lago sobre Cielo
  nombre: 'La Resolución',
  nombreAlterno: 'Guài',
  palabrasClave: ['decisión', 'ruptura', 'denunciar lo torcido', 'firmeza sin violencia'],

  dictamen:
    'Llegó el momento de una resolución decidida: cortar con lo torcido, poner las ' +
    'cosas claras, sacar a la luz lo que estuvo mal. Pero la fuerza de la ' +
    'determinación no es la violencia: hay que actuar con firmeza y a la vez con ' +
    'verdad, sin dejarse arrastrar por la ira ni confiarse en la fuerza. Se resuelve ' +
    'exponiendo lo justo a la luz, no imponiéndolo a los golpes.',

  imagen:
    'El lago se ha elevado hasta el cielo y amenaza con desbordar: la imagen de la ' +
    'ruptura. Así, quien es sabio reparte lo que tiene hacia abajo y no se aferra a ' +
    'lo acumulado, sabiendo que retener de más termina rompiendo.',

  significado: {
    general:
      'Es momento de resolver de una vez algo que venía arrastrándose: tomar la ' +
      'decisión firme, cortar con lo que ya no va, poner el límite o decir la verdad ' +
      'que había que decir. La clave es la firmeza sin brutalidad: actúa con decisión ' +
      'y a cara descubierta, apoyándote en lo justo, no en la fuerza ni en el rencor. ' +
      'Y cuidado con confiarte: incluso una causa buena pide prudencia.',
    amor:
      'Momento de una definición o una ruptura necesaria: poner las cosas claras, ' +
      'cortar con lo que hace daño o decir lo que se venía callando. Hazlo con ' +
      'firmeza pero sin violencia ni reproches envenenados. La verdad dicha de ' +
      'frente, con respeto, resuelve; el ataque, aunque tengas razón, ensucia.',
    trabajo:
      'Es tiempo de una decisión firme: cortar con lo que no funciona, poner un ' +
      'límite claro o sacar a la luz un problema que se callaba. Actúa con ' +
      'determinación y transparencia, no con imposición ni malos modos. Resolver de ' +
      'frente y con la verdad de tu lado destraba; hacerlo con soberbia, se vuelve en ' +
      'contra.',
    dinero:
      'Momento de una decisión resuelta: cortar una pérdida, terminar con un gasto o ' +
      'un acuerdo que no cierra, poner orden de una vez. Hazlo con firmeza y ' +
      'claridad, sin arrebatos ni movimientos temerarios. Y no te confíes por tener ' +
      'razón: aun la resolución justa pide prudencia y buenas formas.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Lanzarse con ímpetu al primer paso, confiado en la propia fuerza sin medir ' +
        'si alcanza. Avanzar así, sin estar a la altura de lo que se enfrenta, lleva ' +
        'al error. La decisión pide preparación, no sólo arranque.',
    },
    {
      posicion: 2,
      texto:
        'Estar alerta y preparado, sin dejarse ganar por el miedo. Cuando se toma ' +
        'una decisión firme frente a lo torcido, conviene la precaución constante, ' +
        'pero sin pánico. Quien está prevenido y sereno no tiene nada que temer.',
    },
    {
      posicion: 3,
      texto:
        'A veces hay que sostener la propia decisión en soledad, incomprendido, ' +
        'incluso pareciendo ceder ante los demás. Aunque te empapes bajo la lluvia y ' +
        'te critiquen, mantener por dentro la resolución justa, sin alardear, al ' +
        'final no acarrea culpa.',
    },
    {
      posicion: 4,
      texto:
        'Avanzar a los tirones, terco y lastimado por la propia obstinación. Si se ' +
        'dejara guiar, aflojando la rigidez y aceptando el consejo, se ahorraría ' +
        'muchos males. Pero cuesta escuchar cuando uno está empecinado.',
    },
    {
      posicion: 5,
      texto:
        'Frente a lo torcido cercano y persistente, hace falta una resolución firme ' +
        'y sostenida, sin tibieza. Pero manteniéndose en el camino del medio, sin ' +
        'ensañarse. Cortar lo que daña con decisión y a la vez con mesura no deja ' +
        'culpa.',
    },
    {
      posicion: 6,
      texto:
        'Creer que ya está todo resuelto y bajar la guardia demasiado pronto. Cuando ' +
        'lo torcido parece vencido pero queda un resto, descuidarse deja la puerta ' +
        'abierta a que el mal vuelva. La resolución se sostiene hasta el final.',
    },
  ],
};

const hex44: Hexagrama = {
  numero: 44,
  lineas: [0, 1, 1, 1, 1, 1], // Cielo sobre Viento
  nombre: 'El Encuentro',
  nombreAlterno: 'Gòu',
  palabrasClave: ['tentación', 'influencia insidiosa', 'atención temprana', 'límites'],

  dictamen:
    'Algo se acerca al encuentro, y parece inofensivo o incluso atractivo, pero ' +
    'conviene mirarlo dos veces: una influencia pequeña que se deja entrar sin ' +
    'cuidado puede crecer y volverse difícil de manejar. No hay que rechazar todo ' +
    'por principio, pero sí estar atento y no cederle poder a lo que, con el tiempo, ' +
    'podría dominar. Frenar temprano lo que no conviene es más fácil que después.',

  imagen:
    'Bajo el cielo, el viento que sopla y llega a todas partes: la imagen del ir al ' +
    'encuentro. Así, quien conduce difunde sus mensajes y hace conocer sus ' +
    'disposiciones en todas direcciones.',

  significado: {
    general:
      'Aparece algo o alguien que se acerca de manera atractiva o aparentemente ' +
      'inofensiva, pero que conviene no tomar a la ligera. No todo lo que seduce ' +
      'suma: una influencia, un vínculo o un hábito que se deja crecer sin límites ' +
      'puede terminar dominándote. Mantente atento, pon el freno temprano si algo no ' +
      'te conviene, y no le des poder a lo que a la larga te complica.',
    amor:
      'Aparece una atracción o un encuentro tentador, quizá encantador a primera ' +
      'vista, pero que pide cautela. No todo lo que seduce conviene: mira con quién y ' +
      'en qué te estás metiendo antes de entregar poder. Si algo enciende una alarma, ' +
      'atiéndela temprano; lo que se deja crecer sin límites después cuesta soltarlo.',
    trabajo:
      'Aparece una oferta, una propuesta o una alianza tentadora que conviene ' +
      'examinar con lupa antes de aceptar. Lo que se ve fácil o brillante puede traer ' +
      'ataduras. No rechaces por rechazar, pero pon condiciones claras y no cedas ' +
      'control a lo que no terminas de ver. Mejor prevenir temprano que corregir ' +
      'tarde.',
    dinero:
      'Aparece una oportunidad tentadora que pide desconfianza sana: lo que parece ' +
      'ganancia fácil suele tener letra chica. No te dejes seducir por el brillo; ' +
      'revisa bien, pon límites y no comprometas más de lo que puedes controlar. ' +
      'Frenar a tiempo una mala entrada evita una gran pérdida.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Frenar desde el principio, con firmeza, lo que apenas se insinúa y podría ' +
        'crecer mal. Poner el freno temprano trae fortuna; dejar que la cosa siga su ' +
        'curso, aunque hoy parezca chica e inofensiva, termina en problema.',
    },
    {
      posicion: 2,
      texto:
        'Manejar con tacto y contención algo que podría ser problemático, ' +
        'manteniéndolo bajo control y sin exponerlo. Cuando tomas con cuidado una ' +
        'influencia delicada, sin darle rienda ni difundirla, evitas el daño.',
    },
    {
      posicion: 3,
      texto:
        'Sentirse inquieto y trabado, tentado a meterse en algo pero sin poder ' +
        'avanzar del todo. Si reconoces el riesgo y no te lanzas de cabeza, evitas el ' +
        'error mayor. La incomodidad misma es una advertencia: atenderla salva.',
    },
    {
      posicion: 4,
      texto:
        'Alejarse o despreciar a quienes deberían estar cerca, quedándose sin apoyos ' +
        'por soberbia o descuido. Cuando pierdes el vínculo con los tuyos, llega el ' +
        'problema. Mantener cerca lo que importa, con trato justo.',
    },
    {
      posicion: 5,
      texto:
        'Cubrir y proteger el propio valor con discreción, sin alardear, dejando que ' +
        'las cosas maduren a su tiempo. Cuando obras con nobleza escondida, sin ' +
        'forzar, lo bueno termina llegando como caído del cielo. La virtud paciente ' +
        'atrae su recompensa.',
    },
    {
      posicion: 6,
      texto:
        'Ponerse tan rígido y arisco que se rechaza hasta lo que podría acercarse de ' +
        'buena fe. Mantenerse a distancia con dureza, como quien recibe con los ' +
        'cuernos, deja a uno solo. Hay algo de humillación, pero no una falta grave.',
    },
  ],
};

const hex45: Hexagrama = {
  numero: 45,
  lineas: [0, 0, 0, 1, 1, 0], // Lago sobre Tierra
  nombre: 'La Reunión',
  nombreAlterno: 'Cuì',
  palabrasClave: ['congregarse', 'unión en torno a un centro', 'liderazgo', 'propósito común'],

  dictamen:
    'Tiempo de reunión: personas y fuerzas se congregan en torno a un centro. Para ' +
    'que la unión prospere hace falta un eje firme y un propósito compartido que le ' +
    'dé sentido; sin eso, la multitud se dispersa o choca. Reunir bien pide ' +
    'sinceridad, una figura que convoque y previsión, porque donde se junta mucha ' +
    'gente también pueden surgir roces. Lo que une con verdad, fortalece.',

  imagen:
    'El lago se eleva sobre la tierra y reúne las aguas: la imagen del congregarse. ' +
    'Así, quien es sabio se mantiene prevenido ante lo inesperado, porque toda ' +
    'reunión trae también sus riesgos.',

  significado: {
    general:
      'Es momento de reunir, congregar y unir fuerzas en torno a algo común: un ' +
      'grupo, un proyecto, una causa, una familia. La unión da poder, pero necesita ' +
      'un centro claro y un propósito genuino que la sostenga; si no, se dispersa. ' +
      'Acércate a lo que te convoca de verdad, aporta con sinceridad y, si te toca ' +
      'conducir, sé un eje firme. Donde hay mucha reunión, cuida también los roces.',
    amor:
      'Momento de unión y de afianzar la pertenencia: acercarse, comprometerse, ' +
      'formar algo común. El vínculo se fortalece cuando hay un propósito y un sentir ' +
      'compartido que lo centra. Es buen tiempo para reunir, oficializar o ' +
      'profundizar, siempre desde la sinceridad. Lo que se une con verdad echa raíces.',
    trabajo:
      'Tiempo de reunir el equipo, sumar alianzas y organizar en torno a un objetivo ' +
      'común. La fuerza colectiva multiplica, pero pide una conducción clara y una ' +
      'meta que todos compartan. Aporta y súmate con sinceridad; si te toca conducir, ' +
      'sé el centro firme que ordena. Prevé los roces que trae juntar mucha gente.',
    dinero:
      'Momento propicio para asociaciones, fondos comunes y proyectos que reúnen ' +
      'recursos o personas. La unión de fuerzas rinde, si hay reglas claras y un ' +
      'objetivo compartido. Elige bien con quién te juntas y con qué fin; y prevé los ' +
      'conflictos que puede traer administrar lo de muchos.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Una sinceridad que vacila, entre acercarse y dudar, genera confusión al ' +
        'reunirse. Si en medio de la indecisión pides ayuda con franqueza y tomas la ' +
        'mano que se te tiende, la duda se disuelve y vuelve la alegría.',
    },
    {
      posicion: 2,
      texto:
        'Dejarse atraer hacia la unión por una afinidad genuina, sin resistirse por ' +
        'orgullo. Cuando la reunión responde a un lazo verdadero, sumarse trae ' +
        'fortuna, y hasta el aporte más pequeño, hecho con sinceridad, vale.',
    },
    {
      posicion: 3,
      texto:
        'Querer sumarse a un grupo que no termina de recibirte, sintiéndote afuera. ' +
        'Es un momento algo frustrante; pero buscar la unión aunque cueste, o ' +
        'acercarte a quien sí te abre la puerta, no es un error.',
    },
    {
      posicion: 4,
      texto:
        'Reunir y unir a otros no para el provecho propio sino por el bien común, ' +
        'con desinterés. Cuando trabajas para congregar en beneficio de todos, sin ' +
        'buscar tu tajada, el resultado es afortunado y sin reproche.',
    },
    {
      posicion: 5,
      texto:
        'Ocupar un lugar de referencia en la unión, hacia el que otros gravitan. Si ' +
        'algunos todavía no se suman de corazón, no forzarlos: sostener con ' +
        'constancia y rectitud la propia posición termina ganándolos.',
    },
    {
      posicion: 6,
      texto:
        'Quedar afuera de la unión, dolido, sintiendo que no encuentras tu lugar. ' +
        'Ese pesar sincero, cuando se expresa con honestidad, ablanda las puertas: ' +
        'reconocer la propia necesidad de pertenecer, sin orgullo, abre el camino de ' +
        'vuelta.',
    },
  ],
};

const hex46: Hexagrama = {
  numero: 46,
  lineas: [0, 1, 1, 0, 0, 0], // Tierra sobre Viento
  nombre: 'El Ascenso',
  nombreAlterno: 'Shēng',
  palabrasClave: ['crecimiento gradual', 'esfuerzo constante', 'ascenso', 'paso a paso'],

  dictamen:
    'Un tiempo de ascenso, pero no de un salto: como el brote que empuja hacia ' +
    'arriba a través de la tierra, se crece de a poco, con esfuerzo constante y ' +
    'adaptándose a lo que se encuentra. La perseverancia paciente, sumada paso a ' +
    'paso, lleva lejos y alto. Es momento propicio para avanzar con decisión, buscar ' +
    'guía y no dejar que la duda frene el impulso.',

  imagen:
    'En medio de la tierra crece la madera, empujando hacia arriba: la imagen del ' +
    'ascenso. Así, quien es sabio, con carácter devoto, acumula lo pequeño hasta ' +
    'volverlo grande y elevado.',

  significado: {
    general:
      'Es una etapa de crecimiento y ascenso posible, pero que se logra empujando de ' +
      'a poco, no de golpe. Como una planta que crece, el progreso viene de la ' +
      'constancia, de adaptarse al terreno y de sumar pequeños esfuerzos que se ' +
      'acumulan. Es buen momento para avanzar con decisión y para apoyarte en quien ' +
      'tenga más recorrido. No te frene la duda: paso a paso, se llega alto.',
    amor:
      'El vínculo crece de manera gradual, sumando gestos y momentos que lo van ' +
      'afianzando. No esperes saltos ni definiciones de golpe: lo que se construye ' +
      'ladrillo a ladrillo, con constancia y adaptación, es lo que sube firme. ' +
      'Acompañar ese crecimiento paciente, sin forzar el ritmo, es lo que lleva la ' +
      'relación a buen lugar.',
    trabajo:
      'Momento de ascenso y crecimiento profesional, pero por acumulación de ' +
      'esfuerzo, no por golpe de suerte. Avanza con constancia, adaptándote a cada ' +
      'etapa y sumando logros pequeños que después pesan. Es buen tiempo para dar ' +
      'pasos, buscar mentoría y confiar en el proceso. La escalada paciente y ' +
      'sostenida es la que corona.',
    dinero:
      'Tiempo de crecimiento gradual y sostenido: la prosperidad llega sumando, no ' +
      'de un salto. Reinvertir con constancia, ir escalando de a poco y adaptar la ' +
      'estrategia al terreno hace crecer lo tuyo de forma firme. No busques el golpe ' +
      'de suerte; el ascenso paciente y bien cimentado es el que se sostiene.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Empezar a subir contando con la confianza de quienes están arriba, empujado ' +
        'por un impulso genuino. Cuando el ascenso arranca con el respaldo y la buena ' +
        'fe de los demás, y uno se lo merece, la fortuna acompaña desde el primer ' +
        'paso.',
    },
    {
      posicion: 2,
      texto:
        'Avanzar con sinceridad aunque se tenga poco que ofrecer: lo que importa es ' +
        'la verdad del gesto, no su tamaño. Cuando el corazón es genuino, hasta el ' +
        'aporte más modesto abre puertas hacia arriba.',
    },
    {
      posicion: 3,
      texto:
        'Un avance que por un momento no encuentra resistencia alguna, el camino ' +
        'totalmente despejado. Aprovechar ese impulso está bien, pero sin confiarse ' +
        'de más por la facilidad: que no haya obstáculos ahora no significa que no ' +
        'los haya después.',
    },
    {
      posicion: 4,
      texto:
        'Alcanzar un lugar de reconocimiento y ser aceptado por los de arriba gracias ' +
        'al mérito y la devoción sostenidos. Cuando el esfuerzo constante y honesto ' +
        'es reconocido y uno ocupa su sitio con humildad, hay fortuna y ninguna falta.',
    },
    {
      posicion: 5,
      texto:
        'Subir escalón por escalón, sin saltearse etapas ni apurar el camino. Cuando ' +
        'el ascenso se hace con orden y paciencia, afianzando cada paso antes del ' +
        'siguiente, se llega firme y sin caídas.',
    },
    {
      posicion: 6,
      texto:
        'Seguir empujando a ciegas hacia arriba, sin freno, sin advertir que ya se ' +
        'pasó el límite. La ambición desmedida de seguir subiendo se vuelve ' +
        'peligrosa: lo sabio es reorientar esa constancia hacia adentro, hacia ' +
        'corregirse, en vez de trepar sin fin.',
    },
  ],
};

const hex47: Hexagrama = {
  numero: 47,
  lineas: [0, 1, 0, 1, 1, 0], // Lago sobre Agua
  nombre: 'La Opresión',
  nombreAlterno: 'Kùn',
  palabrasClave: ['agotamiento', 'adversidad', 'límite', 'entereza interior'],

  dictamen:
    'Tiempo de opresión y agotamiento: los recursos escasean, las fuerzas están al ' +
    'límite y el entorno aprieta. Es una prueba dura. Frente a ella, lo que sostiene ' +
    'no es la queja ni la palabra —que ahora nadie escucha— sino la entereza ' +
    'interior: mantener la calma, la fe y la dignidad, y responder con hechos más ' +
    'que con reclamos. La adversidad no dura para siempre; atravesarla sin quebrarse ' +
    'por dentro es la victoria.',

  imagen:
    'El lago sin agua, seco, escurrido hacia el abismo: la imagen del agotamiento. ' +
    'Así, quien es sabio arriesga incluso su vida por seguir fiel a su voluntad, sin ' +
    'doblegarse ante la adversidad.',

  significado: {
    general:
      'Estás en un tiempo de opresión o agotamiento: cansancio, escasez, una ' +
      'situación que aprieta y limita. Es difícil, pero es una prueba, no un final. ' +
      'Ahora las palabras y las quejas no alcanzan: conviene actuar y sostenerse con ' +
      'hechos. Sobre todo, cuida tu interior: mantén la calma, la dignidad y la fe, ' +
      'sin dejar que la adversidad te amargue o te quiebre. Quien atraviesa esto ' +
      'entero, sale fortalecido.',
    amor:
      'Momento de desgaste o de sequía en el vínculo: cansancio, distancia o una ' +
      'etapa que aprieta. No es tiempo de grandes reclamos —hoy caen en saco roto— ' +
      'sino de sostener con hechos y paciencia. Cuida tu equilibrio interior y no ' +
      'dejes que la frustración te vuelva amargo. Lo que se sostiene con dignidad ' +
      'durante la sequía puede reverdecer.',
    trabajo:
      'Etapa de agotamiento o de límites duros: pocos recursos, trabas, mucho ' +
      'esfuerzo y poco resultado a la vista. No es momento de quejarse ni de esperar ' +
      'que las palabras convenzan; sí de sostenerse con hechos concretos y paciencia. ' +
      'Cuida tus fuerzas, no te desgastes en peleas inútiles y mantén la entereza. La ' +
      'estrechez pasa; aguantar bien es clave.',
    dinero:
      'Tiempo de escasez o aprieto financiero: los recursos no alcanzan y la presión ' +
      'se siente. Es momento de máxima prudencia: cuidar cada cosa, no arriesgar lo ' +
      'poco que hay y sostenerse con hechos, no con ilusiones. Mantén la calma y la ' +
      'dignidad; la estrechez es una etapa, no un destino.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Dejarse hundir por la adversidad, encerrarse en el desánimo y perder de ' +
        'vista la salida. Cuando uno se abandona a la sensación de opresión y se ' +
        'resigna a la oscuridad, la prueba se alarga. El primer riesgo es rendirse ' +
        'por dentro.',
    },
    {
      posicion: 2,
      texto:
        'Sentirse ahogado aun teniendo lo básico cubierto, en medio de una abundancia ' +
        'que no llena. No es momento de moverse ni de forzar cambios; sí de tener ' +
        'paciencia y confiar en que un apoyo o una oportunidad está por llegar.',
    },
    {
      posicion: 3,
      texto:
        'Empeñarse en forzar donde no hay paso, apoyarse en lo que lastima, buscar ' +
        'salida donde no la hay. Cuando uno se golpea contra lo imposible y descuida ' +
        'hasta lo propio, la opresión se vuelve desgracia. Reconocer el límite, en ' +
        'vez de insistir contra la piedra.',
    },
    {
      posicion: 4,
      texto:
        'Querer ayudar o acercarse a quien lo necesita, pero con lentitud y trabado ' +
        'por las propias comodidades o vacilaciones. Hay algo de vergüenza en esa ' +
        'demora; pero si se persevera con sinceridad, al final el vínculo o el ' +
        'objetivo se alcanza.',
    },
    {
      posicion: 5,
      texto:
        'Sentirse herido y estorbado por todos lados, incluso por quienes deberían ' +
        'ayudar, en plena prueba. Pero si se mantiene la rectitud y la calma, poco a ' +
        'poco el alivio llega. Sostener la dignidad en medio del golpe termina ' +
        'abriendo la salida.',
    },
    {
      posicion: 6,
      texto:
        'Quedar enredado en trabas que en gran parte son ya mentales: atado por ' +
        'vacilaciones y miedos más que por obstáculos reales. Si reconoces que buena ' +
        'parte del ahogo es la propia duda, y das el primer paso para soltarla, la ' +
        'opresión cede y vuelve la fortuna.',
    },
  ],
};

const hex48: Hexagrama = {
  numero: 48,
  lineas: [0, 1, 1, 0, 1, 0], // Agua sobre Viento
  nombre: 'El Pozo',
  nombreAlterno: 'Jǐng',
  palabrasClave: ['fuente', 'lo que sostiene', 'constancia', 'nutrir a todos'],

  dictamen:
    'El pozo no se mueve, pero todos vienen a él: es la imagen de aquello constante ' +
    'y profundo que sostiene y nutre a una comunidad. Las ciudades cambian, la gente ' +
    'va y viene, pero la fuente permanece. Su enseñanza: cuidar lo esencial que da ' +
    'de beber a todos, mantenerlo en buen estado y accesible. De nada sirve el pozo ' +
    'si la soga es corta o el cántaro se rompe justo antes de sacar el agua: hay que ' +
    'llegar hasta el fondo y terminar la tarea.',

  imagen:
    'Sobre la madera está el agua: la imagen del pozo. Así, quien es sabio alienta a ' +
    'la gente en su trabajo y la exhorta a ayudarse unos a otros.',

  significado: {
    general:
      'El tema es la fuente: eso profundo y constante que te nutre y sostiene —tus ' +
      'valores, tus vínculos verdaderos, aquello a lo que siempre puedes volver—. Es ' +
      'momento de cuidar y mantener esa fuente en buen estado, y de asegurarte de ' +
      'llegar de verdad hasta el fondo, sin quedarte a mitad de camino. Lo que nutre ' +
      'a todos, cuidado con constancia, no se agota. Y lo que empieces, termínalo: el ' +
      'pozo sin terminar no da agua.',
    amor:
      'El vínculo pide volver a la fuente: eso esencial y profundo que lo sostiene ' +
      'más allá de lo cotidiano. Cuidar ese fondo común —la confianza, los valores ' +
      'compartidos, el cariño de base— y nutrirlo con constancia es lo que mantiene ' +
      'la relación viva. No te quedes en la superficie: lo que de verdad alimenta ' +
      'está más hondo.',
    trabajo:
      'Momento de cuidar y sostener lo esencial que da valor a tu trabajo: la ' +
      'formación, los cimientos, aquello que nutre y que otros también aprovechan. No ' +
      'dejes las cosas a medio hacer —el pozo sin terminar no sirve—. La ' +
      'confiabilidad y la constancia en proveer bien, hasta el fondo, es lo que ' +
      'construye tu reputación y sostiene al conjunto.',
    dinero:
      'Tiempo de cuidar la fuente de tus recursos: eso estable que provee de forma ' +
      'constante, más que la ganancia de un golpe. Mantén en buen estado lo que te ' +
      'sostiene, no lo descuides ni lo agotes, y asegúrate de aprovecharlo del todo. ' +
      'Lo que da de forma confiable y sostenida, bien cuidado, no se seca.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Un pozo enfangado y abandonado, del que ya nadie bebe: la imagen de quien se ' +
        'deja estar y se vuelve inservible para los demás y para sí. Cuando uno se ' +
        'descuida y se hunde en lo bajo, pierde valor y hasta lo dejan de lado.',
    },
    {
      posicion: 2,
      texto:
        'Tener buenas cualidades o recursos pero desperdiciarlos, orientándolos a lo ' +
        'menor y dejando que se escapen. Como el pozo cuya agua se filtra por el ' +
        'cántaro roto: el potencial existe, pero mal usado y sin cuidado, no llega a ' +
        'nadie.',
    },
    {
      posicion: 3,
      texto:
        'Estar en condiciones de aportar mucho, ya limpio y disponible, pero que ' +
        'nadie lo aproveche todavía. Es una frustración: el valor está ahí, ' +
        'esperando ser reconocido. Paciencia: lo bueno termina siendo requerido.',
    },
    {
      posicion: 4,
      texto:
        'Tomarse un tiempo para reparar y ordenar la propia base, aunque durante ese ' +
        'trabajo no se produzca ni se dé a otros. No es tiempo perdido: consolidar ' +
        'los cimientos, aunque frene el rendimiento momentáneo, es necesario y no ' +
        'acarrea culpa.',
    },
    {
      posicion: 5,
      texto:
        'Una fuente limpia y fresca, plenamente disponible: la imagen de quien tiene ' +
        'valor real y lo pone a disposición. Pero no basta con que el agua sea buena; ' +
        'hay que beberla, ponerla en uso. El potencial cumplido es el que se ' +
        'aprovecha, no el que sólo existe.',
    },
    {
      posicion: 6,
      texto:
        'El pozo del que se saca agua libremente, sin trabas, fuente inagotable para ' +
        'todos. Cuando alguien se vuelve una fuente confiable y generosa, siempre ' +
        'disponible para los demás, alcanza la fortuna más alta. Dar sin agotarse es ' +
        'la cima.',
    },
  ],
};

const hex49: Hexagrama = {
  numero: 49,
  lineas: [1, 0, 1, 1, 1, 0], // Lago sobre Fuego
  nombre: 'La Revolución',
  nombreAlterno: 'Gé',
  palabrasClave: ['cambio profundo', 'renovación', 'momento justo', 'confianza'],

  dictamen:
    'Hay cosas que ya no dan más y piden un cambio de raíz, no un retoque. La ' +
    'revolución —dejar atrás lo viejo por algo nuevo— trae fortuna, pero sólo cuando ' +
    'el momento está verdaderamente maduro y la causa es justa y sincera. Cambiar ' +
    'por capricho o antes de tiempo genera rechazo; cambiar cuando hace falta, con ' +
    'claridad y ganándose la confianza de todos, renueva y libera.',

  imagen:
    'En el lago hay fuego: dos fuerzas que no pueden convivir sin transformarse. La ' +
    'imagen de la revolución. Así, quien es sabio ordena los tiempos y clarifica las ' +
    'etapas, para que cada cosa cambie en su momento justo.',

  significado: {
    general:
      'Algo pide un cambio profundo, no un ajuste: una etapa que se agotó, una forma ' +
      'vieja que ya no sirve. Es momento de renovar de raíz, pero con criterio: ' +
      'asegúrate de que el tiempo esté maduro y de que el cambio tenga un porqué ' +
      'claro y sincero, no un impulso pasajero. Cuando la transformación es necesaria ' +
      'y se explica bien, la gente la acompaña. Dejar atrás lo caduco, en el momento ' +
      'justo, libera.',
    amor:
      'El vínculo o la situación pide un cambio de fondo, no un parche: algo tiene ' +
      'que renovarse de verdad. Si algo se agotó, es momento de transformarlo con ' +
      'honestidad, hablándolo y no imponiéndolo. Los cambios profundos asustan, pero ' +
      'cuando son necesarios y se hacen con confianza mutua, renuevan la relación en ' +
      'vez de romperla.',
    trabajo:
      'Momento de un cambio profundo: reinventar una forma de trabajar, cambiar de ' +
      'rumbo, dejar atrás lo que ya no funciona. No es un retoque, es una renovación ' +
      'de raíz. Hazlo cuando el momento esté maduro y con un plan claro que genere ' +
      'confianza; los cambios bien fundados y explicados se acompañan. Renovar a ' +
      'tiempo evita el estancamiento.',
    dinero:
      'Tiempo de un cambio importante en el manejo del dinero: replantear una ' +
      'estrategia agotada, cambiar de enfoque, renovar de fondo. No un ajuste menor. ' +
      'Hazlo con el momento maduro y con fundamento, no por impulso. Un cambio bien ' +
      'pensado y oportuno destraba; uno apresurado o caprichoso, complica.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al principio, contenerse: todavía no es momento de cambiar nada, por más ' +
        'ganas que haya. Cuando aún no están dadas las condiciones ni la fuerza, ' +
        'atarse las manos y esperar es lo sabio. La revolución prematura fracasa.',
    },
    {
      posicion: 2,
      texto:
        'Cuando por fin llega el día maduro, después de haber esperado y preparado, ' +
        'entonces sí actuar y cambiar. Emprender la transformación en su momento ' +
        'justo, con todo listo, trae fortuna. El tiempo bien elegido lo es todo.',
    },
    {
      posicion: 3,
      texto:
        'Ni lanzarse a cambiar de golpe ni aferrarse tercamente a lo viejo: ambos ' +
        'extremos son peligrosos. Antes de una transformación grande, hay que ' +
        'sopesarla una y otra vez y lograr consenso. Cuando la necesidad del cambio ' +
        'quedó clara para todos, recién ahí se avanza con respaldo.',
    },
    {
      posicion: 4,
      texto:
        'El cambio se da apoyado en la sinceridad y en la confianza ganada, y por eso ' +
        'resulta. Cuando la transformación responde a una verdad interior y la gente ' +
        'cree en ella, se disuelven las dudas y llega la fortuna. La revolución ' +
        'honesta convence.',
    },
    {
      posicion: 5,
      texto:
        'Un cambio claro, poderoso y transparente, como el tigre cuyas rayas se ven ' +
        'nítidas. Cuando la transformación es tan evidente y bien fundada que casi no ' +
        'necesita justificarse, todos la reconocen y adhieren. La claridad del ' +
        'propósito basta.',
    },
    {
      posicion: 6,
      texto:
        'Hecho el gran cambio, viene el pulido de los detalles, más sutil. No hace ' +
        'falta que todos se transformen por dentro de golpe; alcanza con que ' +
        'acompañen los nuevos modos. Ya no es momento de seguir revolucionando, sino ' +
        'de asentar y consolidar lo logrado.',
    },
  ],
};

const hex50: Hexagrama = {
  numero: 50,
  lineas: [0, 1, 1, 1, 0, 1], // Fuego sobre Viento
  nombre: 'El Caldero',
  nombreAlterno: 'Dǐng',
  palabrasClave: ['nutrir', 'transformar', 'cultura', 'consolidar'],

  dictamen:
    'El caldero es el recipiente donde lo crudo se vuelve alimento: la imagen de ' +
    'transformar y nutrir, de refinar lo material en algo elevado. Es un tiempo ' +
    'propicio para consolidar, cultivar lo espiritual y lo culto, y sostener a las ' +
    'personas de valía. Lo que se cocina con paciencia en el caldero —el saber, el ' +
    'carácter, un proyecto— alimenta a muchos. Gran fortuna y éxito.',

  imagen:
    'Sobre la madera arde el fuego: la imagen del caldero. Así, quien es sabio ' +
    'consolida su destino afianzando una posición correcta y estable.',

  significado: {
    general:
      'Es un tiempo fértil para nutrir, refinar y consolidar: transformar lo que ' +
      'tienes en algo más elevado y darle forma estable. Como el caldero que cocina ' +
      'el alimento, es momento de cultivar lo mejor —tu saber, tu carácter, un ' +
      'proyecto que da fruto a otros— con paciencia. También de reconocer y sostener ' +
      'a la gente valiosa. Lo que se elabora con cuidado ahora se vuelve fuente de ' +
      'alimento y prestigio. Época de buena fortuna.',
    amor:
      'Momento de nutrir y refinar el vínculo: transformarlo en algo más maduro, ' +
      'cultivado y estable. No es tiempo de crudeza sino de cocinar a fuego lento lo ' +
      'mejor de la relación —el cuidado, la cultura compartida, los proyectos ' +
      'comunes—. Lo que se elabora con paciencia y buen gusto alimenta y consolida el ' +
      'amor.',
    trabajo:
      'Etapa muy favorable para consolidar y refinar: transformar el trabajo en algo ' +
      'de más valor, cultivar tu formación y dar fruto que nutra a otros. Es momento ' +
      'de afianzar una posición estable y de rodearte de gente capaz y sostenerla. Lo ' +
      'que se cocina con dedicación y calidad ahora rinde prestigio y solidez.',
    dinero:
      'Buen momento para consolidar y hacer madurar los recursos: transformar lo que ' +
      'tienes en algo más sólido y productivo, con paciencia y buen criterio. No es ' +
      'tiempo de crudo ni de apuro, sino de refinar la estrategia y afianzar una base ' +
      'estable. Lo que se cultiva con cuidado da frutos duraderos.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Dar vuelta el caldero para vaciar lo viejo y podrido antes de cocinar de ' +
        'nuevo. A veces hay que empezar limpiando, sacando lo estancado, aunque el ' +
        'método parezca poco ortodoxo. Lo importante es partir de algo limpio: eso no ' +
        'acarrea culpa.',
    },
    {
      posicion: 2,
      texto:
        'El caldero lleno de buen alimento: se tiene algo valioso y sustancioso para ' +
        'ofrecer. La envidia de otros no puede dañar a quien está bien provisto y se ' +
        'conduce con cuidado. Cuidar lo propio y no exponerlo de más mantiene la ' +
        'fortuna.',
    },
    {
      posicion: 3,
      texto:
        'Tener mucho para ofrecer pero, por un tiempo, no poder hacerlo llegar: el ' +
        'valor propio queda sin ser aprovechado. Es frustrante; pero si se persevera, ' +
        'el malentendido se disuelve como lluvia que despeja, y al final lo bueno ' +
        'encuentra su cauce.',
    },
    {
      posicion: 4,
      texto:
        'Cargar con una responsabilidad que supera las propias fuerzas, o confiar en ' +
        'quien no está a la altura: el caldero se quiebra y todo se arruina. Asumir ' +
        'más de lo que se puede sostener, o apoyarse en lo débil, lleva al desastre. ' +
        'Medir bien lo que uno puede cargar.',
    },
    {
      posicion: 5,
      texto:
        'El caldero con asas doradas: la actitud accesible y a la vez firme que ' +
        'permite recibir lo bueno. Mantenerse receptivo, humilde y bien dispuesto, ' +
        'sin perder solidez, hace que lo valioso y las buenas influencias lleguen. La ' +
        'apertura con criterio es fértil.',
    },
    {
      posicion: 6,
      texto:
        'El caldero coronado con asas de jade: la culminación del refinamiento, firme ' +
        'y suave a la vez. Cuando se alcanza esa combinación de fuerza y dulzura, de ' +
        'solidez y bondad, todo se ve favorecido. La sabiduría madura reparte su ' +
        'alimento sin obstáculos.',
    },
  ],
};

const hex51: Hexagrama = {
  numero: 51,
  lineas: [1, 0, 0, 1, 0, 0], // Trueno sobre Trueno
  nombre: 'La Conmoción',
  nombreAlterno: 'Zhèn',
  palabrasClave: ['sobresalto', 'sacudida', 'serenidad', 'despertar'],

  dictamen:
    'Un sobresalto sacude, como el trueno que estalla de golpe: al principio asusta, ' +
    'pero luego pasa y deja en su lugar un temor reverente que hace reflexionar. La ' +
    'conmoción no es sólo mala: despierta, sacude lo dormido, obliga a mirarse. ' +
    'Frente al susto, el sabio no pierde la compostura: mantiene la calma por dentro ' +
    'mientras todo tiembla afuera, y sale sereno.',

  imagen:
    'El trueno resuena una y otra vez: la imagen de la conmoción. Así, quien es ' +
    'sabio, con temor y respeto, examina su vida y se corrige.',

  significado: {
    general:
      'Algo sacude de repente: una noticia, un susto, un cambio brusco que altera ' +
      'todo. El primer impacto asusta, pero pasa. Lo importante es cómo lo ' +
      'atraviesas: no dejarte arrastrar por el pánico, mantener la calma por dentro ' +
      'mientras afuera tiembla, y usar la sacudida para despertar y revisar tu rumbo. ' +
      'La conmoción, bien encajada, ordena y hace crecer. Sostén la compostura y el ' +
      'susto se vuelve claridad.',
    amor:
      'Un sobresalto o una sacudida en el vínculo: una discusión fuerte, una ' +
      'sorpresa, algo que remueve. El primer golpe impacta, pero no todo lo que ' +
      'sacude es malo: puede despertar lo dormido y obligar a mirar de nuevo. Mantén ' +
      'la calma, no reacciones desde el pánico y usa el remezón para entender qué hay ' +
      'que revisar. La serenidad convierte el susto en aprendizaje.',
    trabajo:
      'Una sacudida repentina: un cambio brusco, una crisis, una noticia que ' +
      'descoloca. El impacto inicial genera nervios, pero pasa. Lo clave es no perder ' +
      'la cabeza: mantener la compostura mientras otros se alteran te da ventaja y ' +
      'claridad. Usa el remezón para revisar y reordenar. Quien conserva la calma en ' +
      'la conmoción, conduce.',
    dinero:
      'Un sobresalto financiero: un imprevisto, un movimiento brusco del contexto, un ' +
      'susto en las cuentas. No es momento de decisiones de pánico. Mantén la calma, ' +
      'no reacciones en caliente y evalúa con cabeza fría una vez pasado el primer ' +
      'impacto. La sacudida, bien manejada, es una oportunidad para revisar y ' +
      'reordenar.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'El susto llega y sacude, pero quien lo toma con la actitud justa aprende de ' +
        'él y después puede reírse aliviado. Cuando el sobresalto sirve para despertar ' +
        'y corregirse, lo que empezó con temor termina en fortuna.',
    },
    {
      posicion: 2,
      texto:
        'Una sacudida trae una pérdida grande y repentina. No salir a perseguir ' +
        'desesperadamente lo perdido: retirarse a lo seguro, dejar pasar el peligro, y ' +
        'con el tiempo lo que se fue vuelve por sí solo. Poner a salvo lo esencial ' +
        'vale más que correr tras lo perdido.',
    },
    {
      posicion: 3,
      texto:
        'El sobresalto desorienta y aturde. Pero si esa misma sacudida te espabila y ' +
        'te mueve a actuar y corregir, en vez de paralizarte, no hay desgracia. La ' +
        'conmoción es un llamado: responder con acción sensata evita el mal.',
    },
    {
      posicion: 4,
      texto:
        'Quedar hundido y paralizado por el susto, atascado sin poder reaccionar. ' +
        'Cuando la conmoción encuentra a uno sin firmeza interior ni apoyos, lo ' +
        'bloquea. Un llamado a no dejarse enterrar por el miedo: la parálisis es el ' +
        'verdadero riesgo.',
    },
    {
      posicion: 5,
      texto:
        'Los sobresaltos vienen de todos lados, uno tras otro, sin dar respiro. Aun ' +
        'en ese peligro constante, si mantienes el centro y no pierdes de vista lo ' +
        'esencial, no se pierde nada importante. Sostener el eje en medio del vaivén, ' +
        'y seguir haciendo lo que hay que hacer.',
    },
    {
      posicion: 6,
      texto:
        'La conmoción golpea al entorno y todo es desconcierto y miedo alrededor. No ' +
        'es momento de avanzar en medio del pánico general. Pero si aprendes del susto ' +
        'ajeno —del golpe que le tocó a otro— y te previenes a tiempo, te libras del ' +
        'daño. La prudencia ante el peligro que se acerca salva.',
    },
  ],
};

const hex52: Hexagrama = {
  numero: 52,
  lineas: [0, 0, 1, 0, 0, 1], // Montaña sobre Montaña
  nombre: 'El Aquietamiento',
  nombreAlterno: 'Gèn',
  palabrasClave: ['quietud', 'calma', 'detenerse', 'meditación'],

  dictamen:
    'Hay un tiempo para moverse y un tiempo para detenerse; este es de detenerse. ' +
    'Aquietar el cuerpo y sobre todo la mente, dejar de perseguir y de agitarse, ' +
    'encontrar la calma como la montaña que no se mueve. Cuando se logra estar quieto ' +
    'de verdad —presente en el aquí, sin que los pensamientos corran— la inquietud se ' +
    'disuelve y llega una paz firme. Saber parar a tiempo es tan sabio como saber ' +
    'avanzar.',

  imagen:
    'Montañas una junto a otra: la imagen del aquietamiento. Así, quien es sabio no ' +
    'deja que sus pensamientos vayan más allá de su situación presente.',

  significado: {
    general:
      'Es momento de frenar, no de avanzar: aquietarse, hacer una pausa, calmar la ' +
      'mente. Si vienes agitado, persiguiendo mil cosas o dándole vueltas a todo, ' +
      'este es el llamado a detenerte y encontrar quietud. La paz no llega corriendo ' +
      'detrás de ella, sino quedándote quieto en el presente, sin que los pensamientos ' +
      'te arrastren. Sé como la montaña: firme, sereno, sin moverte de donde estás. En ' +
      'la quietud se aclara todo.',
    amor:
      'Momento de calma y de bajar la ansiedad en el vínculo: no forzar, no ' +
      'perseguir, no agitar. Si vienes inquieto o queriendo controlar, este es el ' +
      'tiempo de aquietarte y dejar que las cosas reposen. La serenidad interior ' +
      '—estar en paz con ti mismo primero— es lo que ordena el vínculo. A veces lo ' +
      'mejor que se puede hacer es quedarse quieto y presente.',
    trabajo:
      'Tiempo de pausa y quietud más que de acción: frenar, ordenar la cabeza, no ' +
      'lanzarte a nuevos frentes. Si vienes sobrecargado o disperso, detenerte a ' +
      'respirar y a mirar con calma rinde más que seguir corriendo. La claridad para ' +
      'el próximo paso llega desde la quietud, no desde la agitación. Saber parar ' +
      'también es estrategia.',
    dinero:
      'Momento de quietud y prudencia: no mover, no perseguir oportunidades con ' +
      'ansiedad, no decidir en caliente. Es tiempo de detenerse, observar con calma y ' +
      'dejar que las aguas se aquieten antes de actuar. La serenidad evita los errores ' +
      'que trae el apuro. Quedarse quieto, por ahora, es la mejor jugada.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Detenerse justo al comienzo, antes de dar el paso en falso, cuando todavía ' +
        'no se avanzó nada. Frenar a tiempo, apenas empieza el impulso equivocado, ' +
        'evita el problema de raíz. Quietud temprana, sin culpa.',
    },
    {
      posicion: 2,
      texto:
        'Verse arrastrado por otro que no se detiene, sin poder frenarlo ni frenarse ' +
        'uno del todo. Cuando no está en tus manos parar el movimiento de quien va ' +
        'adelante, queda un sabor amargo. A veces sólo se puede aquietar lo propio, no ' +
        'lo ajeno.',
    },
    {
      posicion: 3,
      texto:
        'Forzar la quietud con rigidez, reprimir violentamente el movimiento en vez ' +
        'de calmarlo con naturalidad. Aquietarse a la fuerza, conteniendo todo con ' +
        'dureza, ahoga y es peligroso. La verdadera calma no es represión sino soltar, ' +
        'no apretar.',
    },
    {
      posicion: 4,
      texto:
        'Lograr aquietar el propio cuerpo y los impulsos, alcanzar la calma interior ' +
        'en uno mismo. Cuando uno consigue estar en paz consigo, sereno y presente, no ' +
        'hay culpa ni conflicto. Es un logro tranquilo: la quietud de quien se domina.',
    },
    {
      posicion: 5,
      texto:
        'Aquietar las palabras: hablar sólo lo necesario, con orden y en el momento ' +
        'justo, sin dispersarse en charla. Cuando uno cuida lo que dice y calla lo que ' +
        'sobra, se ahorra muchos arrepentimientos. El silencio medido es sabiduría.',
    },
    {
      posicion: 6,
      texto:
        'La quietud plena y madura, alcanzada con nobleza y sin esfuerzo: la calma que ' +
        'ya es parte de uno. Cuando la serenidad se vuelve firme y constante, ' +
        'coronando todo, trae fortuna. La paz interior consolidada es el mayor logro ' +
        'del aquietamiento.',
    },
  ],
};

const hex53: Hexagrama = {
  numero: 53,
  lineas: [0, 0, 1, 0, 1, 1], // Viento sobre Montaña
  nombre: 'El Desarrollo Gradual',
  nombreAlterno: 'Jiàn',
  palabrasClave: ['progreso paso a paso', 'paciencia', 'orden natural', 'constancia'],

  dictamen:
    'El desarrollo verdadero se da paso a paso, siguiendo su orden natural, como el ' +
    'árbol que crece lento en la montaña o el ave que avanza en su vuelo medido. No ' +
    'hay atajos: lo que se apura se malogra, lo que respeta sus etapas se afianza. Es ' +
    'tiempo de avanzar con paciencia y constancia, dejando que cada cosa madure a su ' +
    'tiempo. Lo que se construye así, gradual y firme, perdura.',

  imagen:
    'Sobre la montaña crece el árbol, lentamente: la imagen del desarrollo gradual. ' +
    'Así, quien es sabio cultiva su carácter y mejora las costumbres poco a poco, con ' +
    'constancia.',

  significado: {
    general:
      'Las cosas avanzan, pero de a poco y a su ritmo: no esperes saltos ni ' +
      'resultados de golpe. Es un tiempo de desarrollo gradual, donde lo importante ' +
      'es respetar las etapas y no querer saltearlas. La paciencia y la constancia son ' +
      'tu mayor fuerza: cada paso bien dado sostiene el siguiente. Lo que se construye ' +
      'lento y firme —un vínculo, un proyecto, ti mismo— echa raíces profundas. Confía ' +
      'en el proceso.',
    amor:
      'El vínculo crece de forma gradual y ordenada, siguiendo sus etapas naturales: ' +
      'conocerse, afianzarse, comprometerse, cada cosa a su tiempo. No lo apures ni ' +
      'quieras saltear pasos; lo que madura despacio es lo que se vuelve sólido. La ' +
      'paciencia y la constancia, aquí, construyen un amor que dura. Acompañar el ' +
      'ritmo natural es la clave.',
    trabajo:
      'Momento de progreso gradual y sostenido: los avances llegan paso a paso, ' +
      'respetando las etapas, no de un salto. Construye tu camino con paciencia, ' +
      'afianzando cada logro antes del siguiente, sin apurar ni saltear. El ' +
      'crecimiento lento y ordenado es el que se sostiene y te da autoridad genuina. ' +
      'Confía en el proceso y no fuerces los tiempos.',
    dinero:
      'Tiempo de crecimiento gradual y ordenado: la prosperidad llega por etapas, no ' +
      'de golpe. Avanza paso a paso, consolidando cada nivel antes de pasar al ' +
      'siguiente, con paciencia y método. Lo que se construye respetando los tiempos y ' +
      'sin atajos es lo que se vuelve estable. Nada de apuros: el desarrollo firme es ' +
      'lento.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Los primeros pasos de un camino nuevo, todavía solo y expuesto, con cierto ' +
        'riesgo y algún comentario en contra. Al comienzo del desarrollo, la cautela y ' +
        'la firmeza serena, sin apurarse, sortean la inseguridad inicial.',
    },
    {
      posicion: 2,
      texto:
        'Alcanzar un lugar seguro y de calma, donde compartir con otros en paz y ' +
        'armonía. Cuando el desarrollo llega a una etapa tranquila, disfrutarla en ' +
        'buena compañía, sin acaparar y compartiendo, trae fortuna. La bonanza que se ' +
        'comparte se afianza.',
    },
    {
      posicion: 3,
      texto:
        'Avanzar demasiado lejos y solo, más allá de la etapa que correspondía, ' +
        'exponiéndose sin resguardo. Salirse del ritmo natural por ambición o ' +
        'impaciencia lleva a la pérdida. Conviene volver a lo seguro, unirse a los ' +
        'propios y defender lo que se tiene en vez de aventurarse de más.',
    },
    {
      posicion: 4,
      texto:
        'Encontrarse en una posición incómoda o poco natural, pero saber adaptarse y ' +
        'buscar dónde apoyarse con flexibilidad. Cuando el lugar no es el ideal, la ' +
        'docilidad para acomodarse a las circunstancias, sin forzar, evita el daño.',
    },
    {
      posicion: 5,
      texto:
        'Un avance que por un tiempo queda incomprendido o aislado, sin dar el fruto ' +
        'esperado, quizá por malentendidos o distancias. Pero si se persevera con ' +
        'rectitud, al final nada puede impedir que las cosas se junten y florezcan. La ' +
        'constancia vence los obstáculos del camino.',
    },
    {
      posicion: 6,
      texto:
        'Llegar a la cima del desarrollo, a una serenidad elevada y ejemplar que ya no ' +
        'se enreda en lo mundano. Quien completa su camino con constancia alcanza un ' +
        'lugar luminoso, cuyo ejemplo sirve e inspira a otros. La madurez plena corona ' +
        'el proceso gradual.',
    },
  ],
};

const hex54: Hexagrama = {
  numero: 54,
  lineas: [1, 1, 0, 1, 0, 0], // Trueno sobre Lago
  nombre: 'La Muchacha que se Casa',
  nombreAlterno: 'Guī Mèi',
  palabrasClave: ['posición secundaria', 'vínculo delicado', 'tacto', 'discreción'],

  dictamen:
    'Es una situación en la que uno entra en un lugar secundario, dependiente o ' +
    'delicado, no como figura principal. No hay que forzar el protagonismo ni ' +
    'dejarse llevar por el impulso o el encandilamiento: eso trae problemas. La clave ' +
    'está en el tacto, la discreción y la conducta correcta, entendiendo el lugar que ' +
    'se ocupa y sus límites. Los vínculos armados por pura pasión ciega o ' +
    'conveniencia, sin bases, no terminan bien.',

  imagen:
    'Sobre el lago está el trueno: la imagen de la muchacha que se casa. Así, quien ' +
    'es sabio comprende lo transitorio a la luz de lo duradero, y cuida los finales ' +
    'tanto como los comienzos.',

  significado: {
    general:
      'Entras en una situación en la que no llevas la voz cantante: un lugar ' +
      'secundario, dependiente o delicado, donde tu margen es acotado. No fuerces el ' +
      'protagonismo ni te dejes arrastrar por el impulso o la ilusión del momento. Lo ' +
      'que rinde acá es el tacto, la discreción y conocer bien tu lugar y sus límites. ' +
      'Y mira el fondo, no sólo el brillo: lo que se arma sin bases sólidas, por más ' +
      'atractivo que parezca, no dura.',
    amor:
      'Un vínculo en posición delicada o desigual: quizá secundario, no oficial, o ' +
      'con uno más entregado que el otro. Cuidado con dejarte llevar sólo por la ' +
      'pasión o la ilusión, sin mirar las bases reales. El tacto, la dignidad y no ' +
      'forzar un lugar que no te dan son lo que te protege. Lo que se sostiene sólo en ' +
      'el encandilamiento, tarde o temprano se enfría.',
    trabajo:
      'Entras en una posición subordinada o poco definida, donde no tienes el control ' +
      'ni el protagonismo. No fuerces tu lugar ni te dejes seducir por promesas ' +
      'brillantes sin sustancia. Condúcete con tacto, discreción y corrección, ' +
      'cumpliendo bien tu rol acotado. Entender los límites de tu posición y actuar en ' +
      'consecuencia es lo que te cuida y te abre camino.',
    dinero:
      'Una situación o un acuerdo en el que estás en desventaja o en un rol ' +
      'secundario, con poco margen. No te dejes encandilar por lo que reluce sin mirar ' +
      'la letra chica y las bases reales. Actúa con prudencia, cuidando tu lugar y sin ' +
      'comprometerte de más en algo que no controlas. Lo que se arma sin fundamento ' +
      'sólido no termina bien.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Ocupar un lugar modesto o secundario, pero cumplirlo con dignidad y buena ' +
        'voluntad. Aun desde una posición limitada, quien actúa con lealtad y hace ' +
        'bien su parte encuentra su camino. Lo pequeño, bien vivido, también progresa.',
    },
    {
      posicion: 2,
      texto:
        'Verse en un vínculo o una situación que decepciona, que no es lo que se ' +
        'esperaba. Mantener la propia fidelidad y rectitud a pesar del desencanto, sin ' +
        'traicionarse, es lo sabio. Conservar la dignidad aunque el otro no esté a la ' +
        'altura.',
    },
    {
      posicion: 3,
      texto:
        'Querer entrar o avanzar de cualquier modo, aun rebajándose, por pura ansiedad ' +
        'de conseguir un lugar. Aceptar una posición indigna con tal de no quedar ' +
        'afuera no conviene: mejor esperar y volver con más criterio que forzar una ' +
        'entrada que humilla.',
    },
    {
      posicion: 4,
      texto:
        'Preferir esperar el momento y el vínculo correctos antes que apurarse por ' +
        'algo que no convence. Dejar pasar lo que no es, con paciencia y sin ansiedad, ' +
        'permite que a su tiempo llegue lo verdaderamente adecuado. La demora sabia es ' +
        'acierto.',
    },
    {
      posicion: 5,
      texto:
        'Ocupar un lugar de valor pero sin ostentación, con sencillez y humildad ' +
        'sinceras en vez de alarde. Cuando alguien que podría lucirse elige la ' +
        'modestia y la calidez, sin exhibir su rango, brilla más de verdad. La ' +
        'discreción noble trae fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Un compromiso vacío, sólo de apariencia, sin sustancia ni entrega real ' +
        'detrás. Cuando el vínculo o el pacto es pura forma —el cesto sin fruto, el ' +
        'gesto sin contenido— no lleva a nada. Sin verdad y dedicación auténticas, no ' +
        'hay unión que rinda.',
    },
  ],
};

const hex55: Hexagrama = {
  numero: 55,
  lineas: [1, 0, 1, 1, 0, 0], // Trueno sobre Fuego
  nombre: 'La Plenitud',
  nombreAlterno: 'Fēng',
  palabrasClave: ['abundancia', 'cúspide', 'aprovechar el momento', 'lo transitorio'],

  dictamen:
    'Un tiempo de abundancia y plenitud, de claridad y logro en su punto más alto. Es ' +
    'un momento luminoso, para disfrutar y actuar en grande. Pero toda cúspide es ' +
    'pasajera: como el sol al mediodía, que apenas llega a su punto más alto empieza a ' +
    'declinar. La sabiduría está en aprovechar la plenitud sin melancolía por su fin, ' +
    'haciendo lo mejor mientras dura y sin apegarse a que sea eterna.',

  imagen:
    'El trueno y el relámpago llegan juntos: la imagen de la plenitud. Así, quien es ' +
    'sabio decide y actúa con claridad, aprovechando el momento de máxima lucidez.',

  significado: {
    general:
      'Estás en —o cerca de— un punto de plenitud: abundancia, claridad, logro, un ' +
      'momento cumbre. Disfrútalo y aprovéchalo al máximo, actuando con decisión ' +
      'mientras la luz es plena. Pero sin ilusionarte con que dure para siempre: los ' +
      'picos, por naturaleza, no se sostienen indefinidamente. En vez de entristecerte ' +
      'por eso, haz que este momento valga: siembra y cosecha ahora lo que después te ' +
      'sostendrá cuando el ciclo baje. Plenitud lúcida, sin apego.',
    amor:
      'Momento de plenitud en el vínculo: intensidad, claridad, un punto alto de ' +
      'conexión. Vívelo y disfrútalo a fondo, con presencia. Pero sin angustiarte ' +
      'porque los picos no duran para siempre: en vez de aferrarte, aprovecha esta ' +
      'cumbre para afianzar lo que después sostenga la relación en los tiempos más ' +
      'comunes. La plenitud se honra viviéndola, no reteniéndola.',
    trabajo:
      'Etapa cumbre: logros, reconocimiento, las cosas en su mejor momento. ' +
      'Aprovéchala con decisión y claridad, tomando las oportunidades grandes mientras ' +
      'el impulso es pleno. Pero con los pies en la tierra: ningún auge dura para ' +
      'siempre. Usa esta plenitud para consolidar y prever, de modo que cuando el ' +
      'ciclo baje estés en buena posición. Actuar lúcido en la cima.',
    dinero:
      'Momento de abundancia y buenos resultados, quizá un pico. Aprovéchalo para ' +
      'actuar y consolidar, pero sin creer que la bonanza es permanente. Lo sabio en ' +
      'la cúspide es hacer reservas y prever el descenso natural del ciclo, disfrutando ' +
      'el buen momento sin derrocharlo. La plenitud bien administrada es la que deja ' +
      'frutos para después.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Al comienzo de la abundancia, encontrarse con alguien afín y complementario ' +
        'con quien unir fuerzas. Juntarse con quien te iguala y suma, en el momento ' +
        'propicio, potencia a ambos y no es exceso. Avanzar así, acompañado, encuentra ' +
        'reconocimiento.',
    },
    {
      posicion: 2,
      texto:
        'En pleno día se hace tan oscuro que se ven las estrellas: la claridad queda ' +
        'tapada por malentendidos o desconfianza. Forzar el reconocimiento no ' +
        'funciona; pero sostener la sinceridad y la verdad interior, con paciencia, ' +
        'termina disipando la sombra y trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'La luz queda tan tapada que uno se ve impotente para actuar, como con el ' +
        'brazo roto. Cuando las circunstancias o la gente equivocada bloquean por ' +
        'completo tu capacidad de obrar, no es tu culpa que no puedas avanzar. A veces ' +
        'sólo queda esperar a que la sombra pase.',
    },
    {
      posicion: 4,
      texto:
        'En medio de la oscuridad y la confusión, encontrar por fin a alguien lúcido y ' +
        'afín que ayuda a despejarla. Cuando en la penumbra aparece la persona ' +
        'indicada, con quien te entiendes, la claridad se recupera y llega la fortuna.',
    },
    {
      posicion: 5,
      texto:
        'Abrirse a recibir el aporte y el talento de otros, rodearse de gente valiosa ' +
        'y reconocer su valor. Cuando quien está en un buen momento tiene la humildad ' +
        'de sumar a los capaces y dejarse ayudar, llegan la bendición y el renombre. La ' +
        'plenitud compartida se multiplica.',
    },
    {
      posicion: 6,
      texto:
        'Encumbrarse tanto en la propia abundancia que uno se aísla, se encierra en su ' +
        'cima y se aleja de todos. Cuando el auge se vive con soberbia y distancia, uno ' +
        'queda solo en su gran casa vacía. El orgullo en la plenitud lleva al ' +
        'aislamiento y la caída.',
    },
  ],
};

const hex56: Hexagrama = {
  numero: 56,
  lineas: [0, 0, 1, 1, 0, 1], // Fuego sobre Montaña
  nombre: 'El Viajero',
  nombreAlterno: 'Lǚ',
  palabrasClave: ['tránsito', 'ser extranjero', 'prudencia', 'discreción'],

  dictamen:
    'El viajero es un extraño de paso, sin casa fija ni lugar propio: su suerte ' +
    'depende por completo de cómo se conduce. En tierra ajena hay que ser prudente, ' +
    'reservado y correcto, sin meterse en asuntos que no le competen ni pretender lo ' +
    'que no le corresponde. Con discreción y buenos modos, el que está de paso ' +
    'encuentra pequeños logros y hospitalidad; con soberbia o descuido, se gana ' +
    'problemas. Éxito modesto en la conducta cuidada.',

  imagen:
    'Sobre la montaña hay fuego, que no se detiene y sigue su camino: la imagen del ' +
    'viajero. Así, quien es sabio resuelve los asuntos con claridad y prudencia, sin ' +
    'arrastrar los pleitos: decide y sigue.',

  significado: {
    general:
      'Estás en una etapa de tránsito o de tierra ajena: algo pasajero, un lugar ' +
      'donde eres nuevo, una situación donde no tienes raíces ni el mando. Como el ' +
      'viajero, tu mejor herramienta es la conducta: prudencia, discreción, buenos ' +
      'modos y no meterte donde no te llaman. No pretendas lo que no te corresponde ni ' +
      'te expongas de más; pero tampoco te rebajes. Con dignidad y cautela, este paso ' +
      'trae pequeños logros y buenos encuentros. Es transitorio: atraviésalo con ' +
      'dignidad.',
    amor:
      'Una etapa de tránsito o de vínculos pasajeros, donde no hay —o todavía no— ' +
      'raíces firmes. Conviene moverse con tacto y sin apurar compromisos que el ' +
      'momento no sostiene. Sé cordial y digno, pero cuidadoso: no entregues todo ni ' +
      'te aferres a algo de paso. Vivir con ligereza y buenos modos esta etapa deja ' +
      'buenos recuerdos, no heridas.',
    trabajo:
      'Momento de tránsito laboral: un lugar nuevo, algo temporal, un terreno donde ' +
      'todavía eres el que llega. Muévete con prudencia y humildad, observando antes ' +
      'de opinar, sin meterte en peleas ajenas ni pretender un lugar que aún no te ' +
      'ganaste. La buena conducta y la discreción son las que, de a poco, te abren las ' +
      'puertas en terreno ajeno.',
    dinero:
      'Etapa de transición o de terreno desconocido en lo económico: mejor moverse ' +
      'con cautela, sin grandes compromisos ni apuestas en un contexto que no dominas. ' +
      'Sé prudente, conservador y discreto: no es momento de arraigar grandes ' +
      'inversiones sino de pasar la etapa cuidando lo que tienes. La prudencia del que ' +
      'está de paso protege.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'El que está de paso y se enreda en pequeñeces, chismes o asuntos mezquinos, ' +
        'se atrae problemas. En terreno ajeno, ocuparse de nimiedades y rebajarse a lo ' +
        'insignificante desgasta y expone. Mantener la dignidad y no perderse en lo ' +
        'trivial es lo sabio.',
    },
    {
      posicion: 2,
      texto:
        'El viajero que encuentra un buen lugar donde parar, conserva sus recursos y ' +
        'se gana la lealtad de alguien confiable. Cuando el que está de paso se ' +
        'conduce con corrección y modestia, halla refugio y apoyo. La buena conducta ' +
        'atrae hospitalidad y aliados.',
    },
    {
      posicion: 3,
      texto:
        'Meterse donde no corresponde o actuar con arrogancia en tierra ajena hace ' +
        'perder el refugio y la confianza que se tenían. Cuando el viajero se ' +
        'entromete o se sobrepasa, se queda sin apoyos y en peligro. En terreno ' +
        'prestado, la soberbia sale muy cara.',
    },
    {
      posicion: 4,
      texto:
        'Encontrar un resguardo y algún medio, pero todavía sin sentirse en casa ni ' +
        'del todo seguro. Aun logrando un lugar y recursos, el que está de paso ' +
        'permanece alerta y con cierta inquietud. La cautela no baja aunque las cosas ' +
        'mejoren un poco.',
    },
    {
      posicion: 5,
      texto:
        'Ganarse un lugar y el reconocimiento en tierra ajena mediante un aporte ' +
        'certero y valioso, hecho con corrección. Cuando el viajero demuestra su valía ' +
        'con un gesto justo y bien dirigido, termina obteniendo respeto y hasta una ' +
        'posición. El mérito bien mostrado abre puertas.',
    },
    {
      posicion: 6,
      texto:
        'Olvidar que uno está sólo de paso y confiarse o envanecerse, perdiendo por ' +
        'descuido lo que lo sostenía. Cuando el viajero se cree en su casa y baja la ' +
        'guardia, lo que empezó con risas termina en pérdida y lamento. En tierra ' +
        'ajena, nunca hay que olvidar la propia condición de pasajero.',
    },
  ],
};

const hex57: Hexagrama = {
  numero: 57,
  lineas: [0, 1, 1, 0, 1, 1], // Viento sobre Viento
  nombre: 'Lo Suave',
  nombreAlterno: 'Xùn',
  palabrasClave: ['influencia sutil', 'penetrar de a poco', 'flexibilidad', 'constancia'],

  dictamen:
    'Como el viento que se cuela por todas partes sin forzar, la influencia suave y ' +
    'persistente logra lo que la fuerza no puede. No es debilidad: es penetrar de a ' +
    'poco, con constancia y adaptándose, hasta transformar desde adentro. Para que ' +
    'rinda, esa suavidad necesita un propósito claro detrás; si no, se dispersa. ' +
    'Insistir con delicadeza y dirección, más que empujar, es la clave.',

  imagen:
    'Vientos que se siguen uno a otro: la imagen de lo suave y penetrante. Así, ' +
    'quien es sabio difunde sus disposiciones y lleva a cabo sus asuntos con ' +
    'influencia constante y sostenida.',

  significado: {
    general:
      'El camino ahora es la suavidad, no la fuerza: influir de a poco, con ' +
      'constancia y flexibilidad, en vez de imponer. Como el viento que penetra sin ' +
      'violencia, lo que se logra con insistencia delicada y paciente cala más hondo ' +
      'y dura más. Pero que esa suavidad no se vuelva dispersión: ten un objetivo ' +
      'claro y sostenlo con firmeza detrás de los modos amables. Adaptarse sin perder ' +
      'el rumbo es lo que hoy funciona.',
    amor:
      'Momento de influir con dulzura y paciencia, no con presión: los cambios en el ' +
      'vínculo se logran de a poco, con gestos constantes y suaves, no con ' +
      'exigencias. Adaptarse, insistir con delicadeza y dejar que las cosas penetren ' +
      'con el tiempo acerca más que imponer. La suavidad sincera, con un rumbo claro, ' +
      'es lo que transforma.',
    trabajo:
      'Es tiempo de lograr las cosas por influencia sutil y constancia, más que por ' +
      'imposición: convencer de a poco, adaptarse, insistir con buenos modos. Lo que ' +
      'se instala con paciencia y flexibilidad se sostiene mejor que lo impuesto. Pero ' +
      'mantén un objetivo claro detrás de la suavidad, para no dispersarte. La ' +
      'perseverancia amable rinde.',
    dinero:
      'Momento de avanzar con movimientos suaves y sostenidos más que con grandes ' +
      'golpes: ajustes graduales, constancia, adaptación al terreno. Lo pequeño y ' +
      'persistente, bien dirigido, va calando y sumando. Ten un plan claro detrás de ' +
      'esos pasos flexibles, para que la suavidad no se vuelva falta de rumbo. ' +
      'Paciencia con dirección.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Dudar sin fin, yendo y viniendo, sin resolverse a avanzar ni a retroceder. ' +
        'Cuando la suavidad se vuelve indecisión, hace falta un poco de firmeza y ' +
        'disciplina para elegir un rumbo. Sumar decisión a la flexibilidad destraba la ' +
        'vacilación.',
    },
    {
      posicion: 2,
      texto:
        'Buscar con paciencia y humildad las causas ocultas de una confusión o un ' +
        'problema, incluso las que se esconden abajo. Cuando uno indaga con constancia ' +
        'y sin soberbia, apoyándose en quien sabe, saca a la luz lo escondido y aclara ' +
        'la situación.',
    },
    {
      posicion: 3,
      texto:
        'Darle vueltas y vueltas a lo mismo, analizar en exceso sin decidirse nunca a ' +
        'actuar. Cuando la reflexión suave se vuelve rumiación estéril, cansa y ' +
        'humilla. Llega un punto en que hay que dejar de pensar y hacer: el exceso de ' +
        'deliberación paraliza.',
    },
    {
      posicion: 4,
      texto:
        'Combinar la modestia con la eficacia: actuar con humildad pero logrando ' +
        'resultados concretos y valiosos. Cuando la suavidad se une al mérito y da ' +
        'frutos claros, el arrepentimiento desaparece. Ser flexible y a la vez ' +
        'efectivo trae una recompensa plena.',
    },
    {
      posicion: 5,
      texto:
        'Un cambio o una mejora que, para salir bien, pide preparación cuidadosa ' +
        'antes y seguimiento después. Aunque el comienzo haya sido dudoso, si se ' +
        'corrige el rumbo con criterio y se acompaña el proceso, el final es ' +
        'afortunado. Importa cómo se maneja la transición.',
    },
    {
      posicion: 6,
      texto:
        'Excederse en la indagación o en la docilidad hasta perder la propia posición ' +
        'y firmeza. Cuando la búsqueda o la suavidad van demasiado lejos y uno se ' +
        'somete o se disuelve del todo, se pierde lo que se tenía. Hay un punto donde ' +
        'ceder de más es ruina.',
    },
  ],
};

const hex58: Hexagrama = {
  numero: 58,
  lineas: [1, 1, 0, 1, 1, 0], // Lago sobre Lago
  nombre: 'La Alegría',
  nombreAlterno: 'Duì',
  palabrasClave: ['alegría', 'disfrute compartido', 'estímulo', 'sinceridad'],

  dictamen:
    'La alegría verdadera trae éxito, pero la genuina nace de la firmeza interior ' +
    'expresada con dulzura hacia afuera: es sólida por dentro y amable por fuera. ' +
    'Compartida, anima y multiplica: el ánimo alegre estimula a la gente y aligera ' +
    'hasta lo difícil. Cuidado, eso sí, con la alegría falsa que sólo busca agradar o ' +
    'adular: esa no sostiene. Disfrutar y alentar desde la sinceridad es lo que ' +
    'fortalece.',

  imagen:
    'Lagos que descansan uno sobre otro: la imagen de la alegría. Así, quien es ' +
    'sabio se reúne con los amigos para conversar y ejercitarse, alegrándose y ' +
    'aprendiendo en compañía.',

  significado: {
    general:
      'Es un tiempo de alegría, disfrute y buen ánimo compartido. La alegría genuina ' +
      '—la que nace de estar bien plantado por dentro y se expresa con calidez— anima, ' +
      'contagia y hace más liviano el camino. Rodéate de gente con la que compartir y ' +
      'alentarte mutuamente. El único cuidado: que la alegría sea sincera y no una ' +
      'máscara para agradar o evitar lo que hay que decir. El buen ánimo verdadero es ' +
      'una fuerza; el fingido, un vacío.',
    amor:
      'Momento de alegría, disfrute y calidez compartida en el vínculo: buen tiempo ' +
      'para pasarla bien juntos, reírse y alentarse. La alegría sincera acerca y ' +
      'fortalece. Sólo cuida que sea genuina y no una forma de evitar los temas de ' +
      'fondo o de complacer por miedo: el disfrute verdadero se apoya en la ' +
      'honestidad, no la tapa.',
    trabajo:
      'Buen clima y ánimo en el trabajo: la alegría compartida y el estímulo mutuo ' +
      'hacen que hasta lo difícil se lleve mejor y el equipo rinda. Alentar y ' +
      'contagiar buena energía, desde la sinceridad, es una fuerza real. Cuida de no ' +
      'caer en el agradar por agradar ni en el optimismo vacío: el buen ánimo firme ' +
      'motiva, la adulación afloja.',
    dinero:
      'Momento de bonanza y buen ánimo también en lo material: se disfruta de lo ' +
      'logrado y las cosas fluyen con soltura. Está bien gozar del buen momento, ' +
      'siempre sin perder el piso ni dejarse llevar por un optimismo que descuida la ' +
      'prudencia. La alegría sostenida en lo sólido dura; la euforia vacía, se paga.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Una alegría serena y en paz, que no depende de agradar a nadie ni de nada ' +
        'externo. Cuando el buen ánimo brota de la armonía interior, sin buscar ' +
        'aprobación, es firme y afortunado. La alegría que no necesita público es la ' +
        'más sana.',
    },
    {
      posicion: 2,
      texto:
        'La alegría que nace de la sinceridad y la confianza en uno mismo, sin ' +
        'dejarse arrastrar por compañías o placeres dudosos. Cuando el disfrute se ' +
        'apoya en la verdad interior, no en la complacencia fácil, trae fortuna y ' +
        'disuelve el arrepentimiento.',
    },
    {
      posicion: 3,
      texto:
        'Buscar la alegría afuera, en distracciones y placeres externos, para llenar ' +
        'un vacío interior. Cuando uno depende de estímulos de afuera para estar bien, ' +
        'esa alegría prestada trae problemas. La verdadera satisfacción no se mendiga ' +
        'afuera.',
    },
    {
      posicion: 4,
      texto:
        'Dudar entre un disfrute superficial e inmediato y un bien más profundo y ' +
        'verdadero. Esa deliberación inquieta se resuelve al elegir lo genuino y ' +
        'soltar lo que sólo halaga: al descartar el placer vacío, llega la alegría ' +
        'auténtica. Elegir lo hondo sobre lo fácil libera.',
    },
    {
      posicion: 5,
      texto:
        'Confiar y abrirse a influencias que en el fondo corroen, dejándose seducir ' +
        'por lo que halaga pero desgasta. Es un peligro real: no toda sonrisa es ' +
        'amiga. Conviene reconocer qué o quién, bajo apariencia agradable, en verdad ' +
        'te disuelve, y tomar distancia.',
    },
    {
      posicion: 6,
      texto:
        'Dejarse llevar del todo por el placer y la búsqueda de agradar, sin freno ni ' +
        'rumbo interior. Cuando uno se entrega por completo a lo que seduce y ' +
        'complace, pierde el eje. Un llamado a no perderse en la alegría vana: el ' +
        'disfrute sin sustancia termina vaciando.',
    },
  ],
};

const hex59: Hexagrama = {
  numero: 59,
  lineas: [0, 1, 0, 0, 1, 1], // Viento sobre Agua
  nombre: 'La Disolución',
  nombreAlterno: 'Huàn',
  palabrasClave: ['disolver rigideces', 'reunir lo separado', 'soltar el ego', 'propósito común'],

  dictamen:
    'Es tiempo de disolver: la rigidez, los rencores, los malentendidos, el egoísmo ' +
    'que separa. Como el viento que sopla sobre el agua helada y la deshace, hay que ' +
    'ablandar lo endurecido y disipar lo que divide. La forma de reunir lo separado ' +
    'no es forzarlo, sino disolver las barreras: apelar a algo que trascienda las ' +
    'diferencias —un propósito, un sentir compartido— que vuelva a juntar los ' +
    'corazones. Ablandar lo rígido reconcilia.',

  imagen:
    'El viento sopla sobre el agua y la dispersa: la imagen de la disolución. Así, ' +
    'los antiguos reyes honraban lo sagrado y erigían templos, reuniendo a la gente ' +
    'en torno a algo que la trascendía.',

  significado: {
    general:
      'Es momento de disolver lo que separa o endurece: rencores, rigideces, ' +
      'malentendidos, distancias. Como el viento que ablanda el hielo, se trata de ' +
      'soltar el orgullo y las barreras que te aíslan y volver a tender puentes. La ' +
      'reconciliación no llega imponiéndose, sino apelando a algo más grande que las ' +
      'diferencias —un objetivo común, un afecto de fondo, un sentido compartido—. ' +
      'Ablanda lo tieso, disuelve el resentimiento, y lo que estaba dividido se reúne.',
    amor:
      'Momento de disolver distancias, rigideces o malentendidos que separaban. Es ' +
      'tiempo de bajar las defensas, soltar el orgullo y ablandar el corazón para ' +
      'volver a acercarse. La reconciliación se da cuando ambos miran algo más grande ' +
      'que la pelea —lo que los une de fondo—. Deshaz el hielo con un gesto sincero: ' +
      'lo endurecido puede volver a fluir.',
    trabajo:
      'Momento de disolver tensiones, divisiones o bloqueos en el equipo o el ' +
      'proyecto. Es tiempo de tender puentes, ablandar posturas rígidas y reunir lo ' +
      'que estaba fragmentado en torno a un objetivo común que dé sentido. Deja el ego ' +
      'de lado y apela a lo que suma a todos: cuando aparece un propósito compartido, ' +
      'las barreras internas se disuelven y la energía vuelve a fluir.',
    dinero:
      'Momento de disolver trabas o rigideces en el manejo: aflojar estructuras que ' +
      'ya no sirven, destrabar lo estancado, reorganizar lo que estaba bloqueado. ' +
      'También de reunir recursos dispersos en torno a un objetivo claro. Soltar lo ' +
      'rígido y reordenar con un propósito común hace que lo trabado vuelva a moverse. ' +
      'Flexibilizar destraba.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Actuar temprano, apenas empieza a insinuarse la división o el malentendido, ' +
        'para disolverlo antes de que crezca. Cuando se acude pronto y con energía a ' +
        'reconciliar, mientras la grieta es chica, se evita el quiebre. Atajar la ' +
        'separación a tiempo trae fortuna.',
    },
    {
      posicion: 2,
      texto:
        'En medio de la dispersión o el distanciamiento, correr hacia lo que te ' +
        'sostiene y te da apoyo verdadero. Cuando todo tiende a separarse, buscar ' +
        'refugio en el vínculo o el punto de apoyo genuino disuelve el aislamiento. ' +
        'Apoyarse en lo firme reconcilia.',
    },
    {
      posicion: 3,
      texto:
        'Soltar el propio ego y los intereses personales para poder servir a algo ' +
        'mayor. Cuando uno deja de lado el yo y se entrega a una causa o al bien ' +
        'común, se disuelve lo que lo separaba de los demás. Trascender el egoísmo no ' +
        'deja arrepentimiento.',
    },
    {
      posicion: 4,
      texto:
        'Disolver los grupos cerrados y las camarillas para poder unir a un conjunto ' +
        'más amplio. A veces hay que romper los lazos de facción, aunque cueste, para ' +
        'reunir a todos en algo mayor. Soltar lo pequeño y excluyente, para congregar ' +
        'lo grande, es una fortuna que pocos comprenden.',
    },
    {
      posicion: 5,
      texto:
        'Una idea, una palabra o un propósito claro y potente que, en medio de la ' +
        'dispersión, vuelve a reunir a todos. Cuando aparece una consigna que convoca ' +
        'y ordena, disuelve la confusión y congrega. Un centro claro, alrededor del ' +
        'cual reunirse, disipa el desconcierto.',
    },
    {
      posicion: 6,
      texto:
        'Alejarse a tiempo del peligro o del daño, disolviendo la amenaza al poner ' +
        'distancia. Cuando lo que se disuelve es el riesgo mismo —apartándose de lo ' +
        'que podría herir a uno o a los suyos— la retirada prudente no acarrea culpa. ' +
        'A veces disolver es saber irse.',
    },
  ],
};

const hex60: Hexagrama = {
  numero: 60,
  lineas: [1, 1, 0, 0, 1, 0], // Agua sobre Lago
  nombre: 'La Limitación',
  nombreAlterno: 'Jié',
  palabrasClave: ['límites', 'medida', 'disciplina', 'moderación'],

  dictamen:
    'El lago sólo puede contener cierta cantidad de agua: los límites, lejos de ' +
    'ahogar, dan forma y hacen posibles las cosas. Poner medida —en el gasto, en el ' +
    'esfuerzo, en el deseo— ordena y fortalece. Pero la limitación tiene que ser ' +
    'justa: si es excesiva o dura de más, se vuelve insoportable y no dura. La clave ' +
    'es la medida en todo, incluida la propia medida. Limitarse con criterio libera; ' +
    'limitarse con exceso, ahoga.',

  imagen:
    'Sobre el lago está el agua: cuando sobrepasa la medida, se derrama. La imagen de ' +
    'la limitación. Así, quien es sabio establece el número y la medida, y examina ' +
    'qué es virtud y qué es conducta correcta.',

  significado: {
    general:
      'Es tiempo de poner límites y medida: definir hasta dónde, establecer un marco, ' +
      'ordenar con disciplina. Lejos de ser una traba, el límite justo da estructura y ' +
      'hace posible lo que la dispersión impide. Pon freno a los excesos —de gasto, de ' +
      'esfuerzo, de exigencia— y trabaja dentro de un marco claro. Pero que la medida ' +
      'sea razonable: el límite demasiado severo se vuelve en contra. Moderación en ' +
      'todo, también en el rigor.',
    amor:
      'Momento de poner límites sanos y encontrar la medida justa en el vínculo: ' +
      'definir espacios, acuerdos y hasta dónde cada uno. Los límites claros, lejos de ' +
      'alejar, dan seguridad y ordenan la relación. Pero con equilibrio: la exigencia ' +
      'o el control excesivos ahogan. La medida justa —firmeza sin rigidez— es la que ' +
      'cuida el amor.',
    trabajo:
      'Tiempo de disciplina, orden y límites claros: definir prioridades, acotar los ' +
      'frentes, trabajar dentro de un marco. La estructura y la medida hacen rendir el ' +
      'esfuerzo que la dispersión desperdicia. Pon freno a lo que sobra y enfoca. Pero ' +
      'sin volverte rígido de más: los límites razonables potencian, los asfixiantes ' +
      'traban. Medida con criterio.',
    dinero:
      'Momento de austeridad y medida: poner límites al gasto, ordenar con disciplina, ' +
      'vivir dentro de un marco claro. La contención razonable es lo que da solidez y ' +
      'evita el descontrol. Define un presupuesto y respétalo. Pero sin caer en la ' +
      'tacañería extrema que también hace daño: la medida justa, ni derroche ni ahogo, ' +
      'es la que construye.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Saber cuándo contenerse y no avanzar, quedándose dentro de los propios ' +
        'límites en el momento en que corresponde. Cuando todavía no es tiempo de ' +
        'salir o actuar, respetar ese freno y quedarse quieto no es un error, sino ' +
        'prudencia.',
    },
    {
      posicion: 2,
      texto:
        'Contenerse cuando en realidad era el momento justo de actuar: pasarse de ' +
        'cauteloso y dejar escapar la oportunidad. El exceso de limitación también ' +
        'falla: hay un tiempo para el freno y un tiempo para salir, y confundirlos ' +
        'cuesta caro.',
    },
    {
      posicion: 3,
      texto:
        'No ponerse límites, entregarse al exceso y al derroche, y después lamentar ' +
        'las consecuencias. Cuando uno no supo moderarse a tiempo, el arrepentimiento ' +
        'es propio, no ajeno. Pero reconocerlo con honestidad, sin echar culpas, ya es ' +
        'el principio de la corrección.',
    },
    {
      posicion: 4,
      texto:
        'Aceptar y vivir los límites con naturalidad, sin resistirse, como algo que ' +
        'ordena la vida en vez de oprimirla. Cuando la moderación se asume de buena ' +
        'gana y sin esfuerzo, fluye y trae éxito. El límite que se acepta con serenidad ' +
        'libera en lugar de pesar.',
    },
    {
      posicion: 5,
      texto:
        'Aplicar la medida empezando por uno mismo, con una disciplina amable que no ' +
        'agobia. Cuando quien pone límites los cumple primero él, con dulzura y sin ' +
        'dureza, los demás lo siguen de buena gana. La moderación que da el ejemplo, ' +
        'sin imponerse, es la que rinde y se respeta.',
    },
    {
      posicion: 6,
      texto:
        'Un límite demasiado severo, rígido y penoso, imposible de sostener en el ' +
        'tiempo. Insistir en esa dureza extrema termina mal; pero aflojarla a tiempo, ' +
        'reconociendo que se pasó de la raya, disuelve el arrepentimiento. Hasta el ' +
        'rigor tiene su límite.',
    },
  ],
};

const hex61: Hexagrama = {
  numero: 61,
  lineas: [1, 1, 0, 0, 1, 1], // Viento sobre Lago
  nombre: 'La Verdad Interior',
  nombreAlterno: 'Zhōng Fú',
  palabrasClave: ['sinceridad', 'confianza', 'autenticidad', 'llegar al otro'],

  dictamen:
    'Hay una fuerza en la sinceridad profunda y verdadera: la que nace del corazón ' +
    'conmueve y transforma, incluso a lo más cerrado o esquivo. No es la palabra hábil ' +
    'ni la presión lo que llega al otro, sino la verdad interior sentida de veras. ' +
    'Para influir así hace falta estar vacío de prejuicios y abierto por dentro, ' +
    'comprendiendo al otro desde adentro. La autenticidad honesta abre puertas que la ' +
    'fuerza no puede.',

  imagen:
    'El viento sopla sobre el lago y agita su superficie: así lo interior actúa sobre ' +
    'lo exterior. La imagen de la verdad interior. Así, quien es sabio examina los ' +
    'asuntos con detenimiento y con clemencia, comprendiendo antes de juzgar.',

  significado: {
    general:
      'El tema es la sinceridad profunda: esa verdad interior, sentida de corazón, que ' +
      'conmueve y conecta más que cualquier argumento o estrategia. Es momento de ' +
      'actuar y vincularte desde lo genuino, sin máscaras ni cálculo. Para llegar de ' +
      'verdad al otro, primero hay que abrirse y comprenderlo desde adentro, libre de ' +
      'prejuicios. Cuando lo que haces nace de una convicción honesta, tiene una fuerza ' +
      'que la manipulación jamás alcanza. Sé auténtico: eso mueve montañas.',
    amor:
      'Momento de sinceridad profunda y confianza mutua: lo que sostiene y hace crecer ' +
      'el vínculo es la verdad del corazón, no las apariencias ni las estrategias. ' +
      'Mostrarte tal cual eres, comprender al otro desde adentro y hablar con ' +
      'honestidad genera una conexión real. La autenticidad sincera es lo que más ' +
      'acerca; la verdad sentida se transmite sola.',
    trabajo:
      'Momento de actuar desde la sinceridad y la convicción genuina: lo que convence ' +
      'y genera confianza no es la labia ni la presión, sino la verdad de fondo bien ' +
      'sostenida. Comprende a los demás desde su lugar, sé honesto y coherente, y tu ' +
      'palabra tendrá un peso que ninguna táctica logra. La autenticidad construye la ' +
      'confianza que todo lo demás necesita.',
    dinero:
      'Momento en que la confianza y la transparencia son la clave: en los acuerdos y ' +
      'decisiones, la sinceridad genuina abre más puertas que cualquier maniobra. Obra ' +
      'con honestidad, sé claro en tus tratos y genera confianza real. Lo que se ' +
      'construye sobre la verdad y la buena fe es sólido; lo que se apoya en la ' +
      'apariencia o el engaño, tarde o temprano se cae.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Empezar apoyándose en una sinceridad firme y clara, sin dobleces ni ' +
        'intenciones ocultas. Cuando el corazón está preparado y en paz, sin segundas ' +
        'agendas, se avanza con fortuna. Pero si por dentro se guardan cálculos ' +
        'secretos, la inquietud no deja estar tranquilo.',
    },
    {
      posicion: 2,
      texto:
        'La sinceridad profunda resuena y encuentra eco, aunque sea a la distancia y ' +
        'sin buscarlo. Cuando alguien es genuino de verdad, su verdad interior atrae y ' +
        'conmueve a los afines, que responden desde el corazón. Lo auténtico convoca a ' +
        'lo auténtico, sin necesidad de exhibirse.',
    },
    {
      posicion: 3,
      texto:
        'Poner la propia estabilidad emocional en manos de otro, oscilar entre la ' +
        'euforia y el llanto según lo que el otro haga. Cuando el ánimo depende por ' +
        'completo de un vínculo externo, uno queda a merced del vaivén. Un llamado a ' +
        'encontrar el centro adentro, no afuera.',
    },
    {
      posicion: 4,
      texto:
        'Alcanzar una plenitud serena que ya no necesita compararse ni competir con ' +
        'los pares. Cuando uno se orienta con sinceridad hacia lo más alto y suelta ' +
        'las rivalidades que distraen, sigue su camino limpio. Dejar atrás lo que ' +
        'compite, para servir a lo verdadero.',
    },
    {
      posicion: 5,
      texto:
        'Una sinceridad tan firme y confiable que une y sostiene a todos a su ' +
        'alrededor, como un centro que da cohesión. Cuando alguien encarna la verdad ' +
        'interior con constancia, se vuelve el vínculo que mantiene junto al conjunto. ' +
        'La autenticidad que congrega no tiene falta.',
    },
    {
      posicion: 6,
      texto:
        'Querer que las palabras lleguen más lejos que la verdad real que las ' +
        'sostiene, hacer ruido y prometer más allá de lo genuino. Cuando el sonido ' +
        'sube al cielo pero la sustancia no lo acompaña, insistir en eso lleva a la ' +
        'caída. Las palabras sin verdad detrás no se sostienen.',
    },
  ],
};

const hex62: Hexagrama = {
  numero: 62,
  lineas: [0, 0, 1, 1, 0, 0], // Trueno sobre Montaña
  nombre: 'La Preponderancia de lo Pequeño',
  nombreAlterno: 'Xiǎo Guò',
  palabrasClave: ['lo pequeño', 'detalle', 'modestia', 'no forzar lo grande'],

  dictamen:
    'Es un tiempo para lo pequeño, no para lo grande: para el cuidado del detalle, la ' +
    'modestia y las tareas humildes hechas a conciencia. No es momento de grandes ' +
    'empresas ni de volar alto; como el ave que hace bien en volar bajo y no contra el ' +
    'viento, conviene quedarse en lo modesto y cercano. El éxito ahora es chico pero ' +
    'real: se logra atendiendo lo pequeño con esmero y sin pretensiones. Mejor abajo y ' +
    'firme que arriba y expuesto.',

  imagen:
    'Sobre la montaña está el trueno, pero apagado y contenido: la imagen de la ' +
    'preponderancia de lo pequeño. Así, quien es sabio, en su conducta, da ' +
    'preponderancia al respeto; en el duelo, al dolor; en el gasto, a la economía.',

  significado: {
    general:
      'Es tiempo de lo pequeño y lo modesto, no de las grandes jugadas. Atiende el ' +
      'detalle, haz bien las tareas humildes, cuida lo cotidiano con esmero: ahí está ' +
      'hoy el logro posible. No es momento de ambiciones grandes ni de volar alto ' +
      '—eso ahora expone y falla—. Como el ave que vuela bajo, quédate en lo cercano y ' +
      'modesto, con extrema prudencia. Los pequeños pasos bien dados, y no los saltos, ' +
      'son los que hoy rinden.',
    amor:
      'Momento de cuidar los pequeños gestos más que de grandes definiciones: la ' +
      'atención al detalle, la ternura cotidiana, los actos humildes son los que ahora ' +
      'sostienen el vínculo. No es tiempo de pasos grandes ni de exigir demasiado; sí ' +
      'de estar presente en lo chico, con modestia y cuidado. Lo pequeño hecho con ' +
      'amor, hoy, vale más que cualquier gran promesa.',
    trabajo:
      'Tiempo de enfocarte en lo pequeño y el detalle, no en grandes proyectos ni ' +
      'riesgos ambiciosos. Haz prolijo y a conciencia lo cotidiano, cuida los detalles ' +
      'que otros descuidan y mantén el perfil bajo. No es momento de volar alto ni de ' +
      'forzar lo grande —eso hoy sale mal—. Los avances chicos, bien hechos y con ' +
      'humildad, son los que suman en esta etapa.',
    dinero:
      'Momento de moderación, prudencia y cuidado del detalle: economía en el gasto, ' +
      'atención a lo chico, nada de movimientos grandes ni ambiciosos. No es tiempo de ' +
      'apostar fuerte ni de expandir, sino de administrar con esmero lo cotidiano y ' +
      'ajustar de a poco. Los pequeños cuidados y la contención, hoy, protegen más que ' +
      'cualquier jugada grande.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Querer volar alto y lanzarse a lo grande justo cuando toca quedarse abajo y ' +
        'modesto. Como el ave que se eleva de más y se expone, forzar la ambición en ' +
        'tiempo de lo pequeño trae problemas. No es momento de despegar: quedarse en ' +
        'tierra es la prudencia.',
    },
    {
      posicion: 2,
      texto:
        'No aspirar más alto de lo que corresponde: contentarse con lo modesto y ' +
        'accesible, cumpliendo bien el propio rol sin pretender saltar etapas. Cuando ' +
        'uno se queda en su medida, alcanzando lo que sí está a su alcance, actúa sin ' +
        'culpa.',
    },
    {
      posicion: 3,
      texto:
        'Confiarse y descuidar la prudencia en un tiempo que exige extrema cautela. ' +
        'Cuando uno baja la guardia creyéndose seguro, justo en la etapa de lo ' +
        'pequeño, queda expuesto a un golpe inesperado. La atención constante al ' +
        'detalle y al riesgo es la que protege ahora.',
    },
    {
      posicion: 4,
      texto:
        'Contenerse y no avanzar, manteniéndose firme y en calma en vez de forzar la ' +
        'acción. En este momento, actuar de más es peligroso; quedarse quieto, alerta ' +
        'y perseverante, sin dejarse arrastrar por el impulso, es lo correcto. La ' +
        'quietud prudente evita el daño.',
    },
    {
      posicion: 5,
      texto:
        'Aun teniendo capacidad, no es momento de grandes logros: las condiciones no ' +
        'acompañan y el gran resultado no llega. Lo que sí se puede es alcanzar, con ' +
        'esfuerzo modesto y certero, algo puntual y valioso. Apuntar a lo posible y ' +
        'concreto, ya que lo grande hoy no se da.',
    },
    {
      posicion: 6,
      texto:
        'Excederse, ir demasiado lejos, pasarse de la medida y perder el sentido de ' +
        'los límites. Cuando en tiempo de lo pequeño uno insiste en volar alto y ' +
        'forzar más y más, se aleja de todo y cae. El exceso llevado al extremo, sin ' +
        'freno, termina en daño.',
    },
  ],
};

const hex63: Hexagrama = {
  numero: 63,
  lineas: [1, 0, 1, 0, 1, 0], // Agua sobre Fuego
  nombre: 'Después de la Consumación',
  nombreAlterno: 'Jì Jì',
  palabrasClave: ['orden logrado', 'equilibrio frágil', 'no descuidar', 'mantener'],

  dictamen:
    'Todo está en su lugar, la obra se completó, el orden se logró: es un momento de ' +
    'equilibrio y consumación. Pero justo ese punto de perfección es el más delicado, ' +
    'porque desde la cima sólo se puede descender. El éxito ya alcanzado no hay que ' +
    'darlo por sentado: el peligro ahora es relajarse y dejar que lo logrado se ' +
    'deteriore. Es tiempo de cuidar, mantener y estar atento, porque el buen comienzo ' +
    'puede terminar en desorden si se descuida.',

  imagen:
    'El agua está sobre el fuego: la imagen de la consumación. Así, quien es sabio ' +
    'reflexiona sobre la desgracia posible y se arma de antemano contra ella, cuidando ' +
    'lo logrado.',

  significado: {
    general:
      'Llegaste a un punto de orden y logro: las cosas encajaron, algo se completó, hay ' +
      'equilibrio. Disfrútalo, pero no te duermas: este es el momento más delicado, ' +
      'porque desde la cima el único camino es cuidar para no caer. El error sería ' +
      'relajarse y dar todo por hecho. Mantén la atención, cuida lo conseguido y prevé ' +
      'los detalles que podrían empezar a aflojarse. Consolidar y sostener lo logrado, ' +
      'más que buscar más, es la tarea de ahora.',
    amor:
      'El vínculo está en un buen momento de equilibrio y armonía: las cosas encajaron. ' +
      'Pero cuidado con darlo por sentado: es justo cuando todo está bien que hay que ' +
      'seguir cuidándolo, para que no se enfríe por descuido. Mantén la atención, los ' +
      'pequeños gestos y la presencia. Lo logrado se conserva atendiéndolo, no dándolo ' +
      'por hecho. No aflojes lo que costó construir.',
    trabajo:
      'Alcanzaste un punto de orden y logro: un proyecto cerrado, una meta cumplida, ' +
      'todo en su lugar. Es un buen momento, pero también el más delicado: el riesgo es ' +
      'relajarse y dejar que lo logrado se deteriore. Mantén la atención al detalle, ' +
      'consolida lo conseguido y prevé los problemas antes de que aparezcan. Sostener y ' +
      'cuidar el éxito, ahora, importa más que buscar el próximo.',
    dinero:
      'Momento de orden y equilibrio financiero: las cuentas cerradas, lo logrado en su ' +
      'lugar. Pero es el punto donde más hay que cuidarse de confiarse: desde arriba, ' +
      'lo que sigue es proteger para no descender. No te relajes ni te expongas creyendo ' +
      'que ya está todo hecho. Cuida lo conseguido, mantén la prudencia y prevé los ' +
      'riesgos. Conservar bien lo logrado es la clave ahora.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Frenar a tiempo, no lanzarse a más apenas alcanzado el éxito, conteniendo el ' +
        'impulso de seguir avanzando. Cuando uno modera el ímpetu justo al llegar a la ' +
        'meta, sin querer más de golpe, evita el tropiezo. La prudencia en la cima no ' +
        'acarrea culpa.',
    },
    {
      posicion: 2,
      texto:
        'Sufrir una pérdida o un desaire menor cuando las cosas ya estaban en orden. No ' +
        'salir a perseguir desesperadamente lo perdido ni forzar el reconocimiento: ' +
        'manteniendo la propia rectitud y esperando, lo que se fue vuelve a su tiempo.',
    },
    {
      posicion: 3,
      texto:
        'Emprender algo grande y arduo desde una posición ya consolidada exige un ' +
        'esfuerzo largo y agotador, y no conviene apoyarse en gente incapaz. Cuando se ' +
        'busca extender lo logrado hacia empresas difíciles, hay que medir el desgaste ' +
        'y rodearse sólo de los aptos.',
    },
    {
      posicion: 4,
      texto:
        'Incluso en pleno orden y bonanza, aparecen los primeros signos de deterioro, ' +
        'como la tela fina que empieza a deshilacharse. Cuando todo parece bien, es ' +
        'cuando más hay que estar alerta a las pequeñas fallas. La vigilancia constante, ' +
        'aun en el éxito, previene la decadencia.',
    },
    {
      posicion: 5,
      texto:
        'Vale más la sinceridad sencilla y oportuna que el gran gesto vacío y ' +
        'ostentoso. Cuando lo logrado se sostiene con humildad y verdad, aunque sea con ' +
        'poco, rinde más que la grandilocuencia sin corazón. La modestia sincera, en el ' +
        'momento justo, trae la verdadera fortuna.',
    },
    {
      posicion: 6,
      texto:
        'Confiarse del todo y no saber detenerse tras el éxito, avanzar de más hasta ' +
        'meter la cabeza en el agua. Cuando, ya consumada la obra, uno sigue empujando ' +
        'sin freno ni prudencia, se expone al peligro y puede perder lo ganado. Saber ' +
        'parar a tiempo, en la cima, es la última sabiduría.',
    },
  ],
};

const hex64: Hexagrama = {
  numero: 64,
  lineas: [0, 1, 0, 1, 0, 1], // Fuego sobre Agua
  nombre: 'Antes de la Consumación',
  nombreAlterno: 'Wèi Jì',
  palabrasClave: ['transición', 'casi logrado', 'cautela final', 'nuevo comienzo'],

  dictamen:
    'Todavía no está: las cosas aún no encajaron, el orden no se completó, se está en ' +
    'plena transición hacia la meta. El éxito es posible y está cerca, pero justo el ' +
    'tramo final es el más delicado y pide la mayor cautela. Como el zorro joven que ' +
    'cruza casi todo el río y se moja la cola al final, un descuido en el último paso ' +
    'arruina lo casi logrado. Avanzar con prudencia y sin relajarse en la recta final ' +
    'es lo que corona la obra.',

  imagen:
    'El fuego está sobre el agua: la imagen del estado anterior a la consumación. Así, ' +
    'quien es sabio distingue cuidadosamente las cosas, para que cada una llegue a ' +
    'ocupar su lugar.',

  significado: {
    general:
      'Estás cerca, pero todavía no: en plena transición, con las cosas aún no del todo ' +
      'en su lugar. La buena noticia es que el logro es posible y se acerca; la ' +
      'advertencia es que el tramo final es el más delicado. No es momento de relajarse ' +
      'ni de apurar el último paso: como el zorro que casi cruza el río, un descuido ' +
      'ahora echaría a perder todo lo avanzado. Ordena con cuidado cada cosa, mide bien ' +
      'el paso final y avanza con prudencia. Lo casi logrado se corona con atención, no ' +
      'con apuro. Y todo final abre un comienzo nuevo.',
    amor:
      'El vínculo está en transición, cerca de acomodarse pero todavía no del todo: ' +
      'falta el último tramo para que las cosas encajen. Es un momento esperanzador, ' +
      'pero delicado: no lo fuerces ni te relajes creyendo que ya está. Con paciencia, ' +
      'cuidado y sin apurar el paso decisivo, lo que está casi puede terminar de ' +
      'armarse. Cada cosa a su lugar, con calma: la recta final pide la mayor atención.',
    trabajo:
      'Estás en la recta final de algo, cerca de cerrarlo pero todavía no: falta ordenar ' +
      'los últimos detalles para que encaje. El logro está al alcance, pero el tramo ' +
      'final es el más delicado. No aflojes ni te apures justo ahora: un descuido en el ' +
      'último paso puede arruinar todo el trabajo previo. Ordena cada cosa con cuidado, ' +
      'revisa bien y da el paso decisivo con prudencia. La atención al final corona la ' +
      'obra.',
    dinero:
      'Momento de transición, cerca de ordenar las cosas pero todavía no del todo ' +
      'cerradas. El resultado favorable es posible, pero el último tramo pide la mayor ' +
      'cautela. No te confíes ni apures decisiones antes de que todo esté en su lugar. ' +
      'Revisa los detalles, mide bien el paso final y avanza con prudencia. Lo que está ' +
      'casi logrado se asegura cuidando el cierre, no precipitándolo.',
  },

  lineasCambiantes: [
    {
      posicion: 1,
      texto:
        'Lanzarse a avanzar antes de estar preparado, sin medir las propias fuerzas, y ' +
        'quedar en ridículo al primer paso. Cuando uno se apura a cruzar sin tener aún ' +
        'lo necesario, tropieza enseguida. Al comienzo de la transición, la prudencia y ' +
        'no el ímpetu es lo que corresponde.',
    },
    {
      posicion: 2,
      texto:
        'Contener el impulso y no lanzarse antes de tiempo, esperando con paciencia el ' +
        'momento justo para avanzar. Cuando uno frena las ganas de apurar y aguarda ' +
        'firme y sereno, prepara bien el paso. La contención paciente, en la ' +
        'transición, trae fortuna.',
    },
    {
      posicion: 3,
      texto:
        'Cerca de la meta pero todavía sin la fuerza suficiente, lanzarse a la acción ' +
        'decisiva sería un error. Y sin embargo, es momento de empezar a moverse hacia ' +
        'el objetivo, buscando los apoyos que hoy faltan. Preparar el gran paso y sumar ' +
        'ayuda, sí; forzarlo solo, todavía no.',
    },
    {
      posicion: 4,
      texto:
        'Llegado el momento de la acción decisiva, entregarse a ella con toda la ' +
        'energía y la firmeza, sacudiendo lo que traba. Cuando por fin es tiempo de dar ' +
        'la batalla final, la determinación sostenida y sin vacilar lleva al triunfo y ' +
        'su recompensa. El esfuerzo resuelto, en el momento justo, corona.',
    },
    {
      posicion: 5,
      texto:
        'Alcanzar el logro gracias a la sinceridad y la luz interior, que iluminan y ' +
        'convencen sin esfuerzo. Cuando la meta se corona con verdad y rectitud, sin ' +
        'sombras, el resultado es afortunado y sin arrepentimiento. La autenticidad que ' +
        'brilla es la que consuma la obra de la mejor manera.',
    },
    {
      posicion: 6,
      texto:
        'Alcanzada la meta, celebrar y disfrutar con confianza está bien y no trae ' +
        'culpa. Pero cuidado con pasarse: si en el festejo uno pierde la mesura y se ' +
        'moja la cabeza, malogra lo logrado. Disfrutar el éxito, sí; perder el eje en la ' +
        'celebración, no. Hasta la alegría del final pide medida.',
    },
  ],
};

// Los 64 hexagramas, completos.
export const HEXAGRAMAS_ES: BaseHexagramas = {
  1: hex1,
  2: hex2,
  3: hex3,
  4: hex4,
  5: hex5,
  6: hex6,
  7: hex7,
  8: hex8,
  9: hex9,
  10: hex10,
  11: hex11,
  12: hex12,
  13: hex13,
  14: hex14,
  15: hex15,
  16: hex16,
  17: hex17,
  18: hex18,
  19: hex19,
  20: hex20,
  21: hex21,
  22: hex22,
  23: hex23,
  24: hex24,
  25: hex25,
  26: hex26,
  27: hex27,
  28: hex28,
  29: hex29,
  30: hex30,
  31: hex31,
  32: hex32,
  33: hex33,
  34: hex34,
  35: hex35,
  36: hex36,
  37: hex37,
  38: hex38,
  39: hex39,
  40: hex40,
  41: hex41,
  42: hex42,
  43: hex43,
  44: hex44,
  45: hex45,
  46: hex46,
  47: hex47,
  48: hex48,
  49: hex49,
  50: hex50,
  51: hex51,
  52: hex52,
  53: hex53,
  54: hex54,
  55: hex55,
  56: hex56,
  57: hex57,
  58: hex58,
  59: hex59,
  60: hex60,
  61: hex61,
  62: hex62,
  63: hex63,
  64: hex64,
};
