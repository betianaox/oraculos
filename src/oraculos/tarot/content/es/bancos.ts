import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Tarot para la cruz de 5 (español NEUTRO). Es el "tejido"
// entre las cartas: aperturas, situación, tensión, cabeza, paso y consejos.
// El español es neutro a propósito (nada de voseo) para que la app sirva a todo
// el mercado hispanohablante. Otros idiomas caen a español hasta traducirse.
//
// Acá NO se nombran cartas. La persona las tiene delante; lo que espera leer es
// qué dicen sobre lo que preguntó, no una definición de cada una.
//
// ── CÓMO SE ESCRIBE ACÁ ──────────────────────────────────────────────────
// Se probó la app con gente y volvieron dos quejas. Las dos se arreglan en el
// lenguaje, así que estas reglas no son de estilo, son de contenido:
//
// 1. CLARO ANTES QUE ELEVADO. La persona pregunta "¿me renuevan el contrato?"
//    y tiene que reconocer su pregunta en la respuesta. Palabras de la vida
//    diaria, frases cortas, sujeto concreto. Están PROHIBIDAS las palabras de
//    informe: optimizar, gestionar, proceso, estructura, dinámica, potencial,
//    recursos, consolidar, reconfigurar, plano (como en "el plano afectivo").
//    Si una frase podría estar en una presentación de trabajo, se reescribe.
//
// 2. MÍSTICO SOBRIO. La imagen antes que el concepto: fuego, agua, puerta,
//    camino, sombra, hilo, semilla, raíz. UNA imagen por oración y nunca dos
//    seguidas; el exceso vuelve el texto pomposo, que es la otra forma de no
//    entenderse. Nada de arcaísmos ni de "los astros designan".
//
// Estas mismas dos reglas están escritas en el prompt del servidor
// (imagostack/lib/oraculo/prompt.ts) para que la lectura de la IA y esta hablen
// igual.
export const BANCOS_TAROT_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, esto es lo que se ve.',
        'Miremos tu pregunta {tema}. Las cartas la ordenan así.',
        'Esto es lo que hay para mostrarte {tema}.',
        'Vamos con lo que preguntas {tema}, por partes.',
      ],
      preocupacion: [
        'Entiendo la inquietud {tema}. Mira con calma lo que se acomoda.',
        'No estás a ciegas {tema}: hay señales, y se ordenan así.',
        'Sé que pesa {tema}. Vamos despacio con lo que aparece.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, primero conviene ver el conjunto.',
        'Antes de lanzarte, mira lo que queda sobre la mesa {tema}.',
        'Las ganas están bien puestas {tema}, pero hay algo que ver antes.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres entender {tema}, se abre este espejo.',
        'Hay cinco caras para mirar {tema}, y cada una dice lo suyo.',
        'Vamos a mirar {tema} con calma.',
        'Esto es lo que se enciende cuando preguntas {tema}.',
      ],
      preocupacion: [
        'Respira. Nada de esto está escrito {tema}: es una mirada para lo que te desvela.',
        'Sin apuro. Queda acomodado, para que puedas verlo, eso que hoy te pesa {tema}.',
        'Bajemos un cambio {tema}. Lo que inquieta se mira mejor de a poco.',
      ],
      impulso: [
        'Frena un momento las ganas; hay algo para pensar {tema}.',
        'Tanta energía merece una pausa: mira lo que se enciende {tema}.',
        'Antes de moverte {tema}, deja que esto se acomode.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes', 'sobre esa persona'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre eso que te ocupa en el trabajo'],
    dinero: ['sobre el dinero', 'sobre lo que te preocupa de las cuentas', 'sobre lo material'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  // Retoman de qué trata la pregunta. Cuando se reconoce, se usan en lugar de
  // la apertura común: decirle a alguien "preguntas si va a volver" es hablarle
  // de lo suyo; "para lo que preguntas sobre el amor" es hablarle del oráculo.
  //
  // Ninguna afirma ni niega lo que se pregunta: reformulan la pregunta y
  // mueven la mirada hacia lo que la tirada sí puede mostrar.
  aperturasIntencion: {
    retorno: [
      'Preguntas si vuelve. Eso no lo decide una carta, pero sí se ve el terreno donde caería esa vuelta.',
      'Quieres saber si va a volver. Nadie firma esa respuesta; lo que sí se ve es qué quedó abierto entre ustedes.',
      'La pregunta es si regresa. Mira primero qué está sosteniendo hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y eso solo lo sabe ella. Lo que se ve acá es el vínculo tal como está.',
      'Quieres saber si te quiere. Nadie puede contestar por otro, pero sí aparece qué se juega entre los dos.',
      'La pregunta apunta al corazón del otro. Las cartas hablan de lo que pasa entre ustedes.',
    ],
    ruptura: [
      'Estás pensando en cortar, y eso lo decides tú. Acá aparece lo que hoy pesa de cada lado.',
      'Preguntas si dejarlo. Antes de decidir, mira qué se está sosteniendo.',
      'La pregunta es si irte. Esto muestra lo que te retiene y lo que te empuja.',
    ],
    decision: [
      'Preguntas qué te conviene. Nadie elige por ti, pero acá queda ordenado lo que está en juego.',
      'Estás entre dos caminos. Mira lo que aparece de cada lado antes de decidir.',
      'La pregunta es qué hacer. Esto es lo que hay sobre la mesa.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. Acá se ve con qué arranca.',
      'Quieres saber si sale bien. Lo que aparece es la tierra donde se planta.',
      'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
    ],
    espera: [
      'Preguntas cuándo. Las fechas no se leen en las cartas, pero sí qué falta para que eso madure.',
      'Quieres saber cuánto falta. Nadie marca el día; sí se ve qué se está cocinando.',
      'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
    ],
  },
  // OJO al escribir estas plantillas: los fragmentos vienen en dos formas
  // distintas —sintagma nominal ("una decisión que evitas") e infinitivo
  // ("revisar lo que esperas")—, así que el hueco tiene que aceptar las dos.
  // Funcionan: después de dos puntos o coma, tras "es", "se apoya en",
  // "pasa por". NO funciona meterlo detrás de un verbo que pida objeto
  // directo ("se abre {frag}" se rompe con los infinitivos).
  situacion: {
    dos: [
      'De fondo se mueve algo: {frag1}. Y en el centro, {frag2}.',
      'Alrededor de la escena: {frag1}. Sosteniéndolo todo, {frag2}.',
      'Primero asoma esto: {frag1}. Pero el eje verdadero es otro: {frag2}.',
      'Lo que rodea el asunto es {frag1}, y en su centro late {frag2}.',
      'A un costado aparece {frag1}, y bien en el medio, {frag2}.',
      'Lo que se ve de entrada: {frag1}. Lo que manda de verdad: {frag2}.',
    ],
    // Cuando la otra pieza no tiene nada nuevo que decir, se planta una sola.
    una: [
      'En el centro de todo hay algo claro: {frag}.',
      'Lo que sostiene la escena es {frag}.',
      'Bien en el medio late esto: {frag}.',
      'Si hay que quedarse con una sola cosa, es esta: {frag}.',
    ],
  },
  // OJO con los sujetos: acá no se nombran cartas, así que "uno", "otro" o
  // "el primero" no se refieren a nada. Todo lo que se diga tiene que apoyarse
  // en el fragmento mismo, no en una pieza que el texto nunca menciona.
  tension: {
    tres: [
      'Por un lado tira {frag1}; por el otro, {frag3}. Y en el medio manda {frag2}: ahí está el nudo.',
      'Entre {frag1} y {frag3} se juega el equilibrio, pero lo que decide es {frag2}.',
      'Lo que asoma como {frag1} se ordena alrededor de {frag2}, y el color final lo pone {frag3}.',
      'Hay algo que prepara el terreno, {frag1}, y algo que lo desordena, {frag3}; en el medio queda {frag2}.',
      'Se cruzan dos cosas, {frag1} y {frag2}, y por encima de las dos pesa {frag3}.',
      'Una parte tuya se apoya en {frag1} y otra empuja hacia {frag3}; en el medio, {frag2} es lo que inclina la balanza.',
    ],
    dos: [
      'Debajo hay un tira y afloje: por un lado {fragA}, por el otro {frag3}.',
      'Lo que se mueve por debajo tiene dos caras: {fragA} y, del otro lado, {frag3}.',
      'Ahí se cruzan dos fuerzas, {fragA} y {frag3}, y ninguna cede del todo.',
      'Algo empuja desde {fragA} mientras otra cosa tira hacia {frag3}.',
    ],
    una: [
      'Y hay algo más, que no se ve de entrada: {frag3}.',
      'Debajo de todo eso se mueve otra cosa: {frag3}.',
      'Lo que no está a la vista es esto: {frag3}.',
      'En la sombra del asunto queda {frag3}.',
    ],
  },
  cabeza: [
    'En la cabeza te da vueltas esto: {frag}.',
    'Lo que hoy te ocupa la mente es {frag}.',
    'Arriba de todo pesa {frag}.',
    'Lo que se piensa —tuyo o de la persona por la que preguntas— es {frag}.',
    'Lo que no te deja dormir tiene que ver con {frag}.',
  ],
  // La única pieza que se lee mirando hacia adelante. Matiz anticipatorio, pero
  // siempre en clave de tendencia: "se perfila", "todo apunta a". Nunca un
  // hecho consumado ni una promesa, que es donde un oráculo se vuelve
  // irresponsable.
  paso: [
    'Y hacia adelante se perfila esto: {frag}.',
    'Lo que viene apunta en esta dirección: {frag}.',
    'Si nada se fuerza, lo próximo se insinúa así: {frag}.',
    'En el horizonte cercano ya se asoma {frag}.',
    'Todo apunta a que lo siguiente traiga {frag}.',
    'El camino que se abre desde acá va hacia {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con eso a la vista, decide sin apurar el final.',
        'Deja que esto se acomode antes de tu próxima elección.',
        'Ya tienes con qué decidir. Tómate el tiempo.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: con un paso a la vez alcanza.',
        'Lo que temes no está escrito. Usa esta mirada para soltar un poco.',
        'Hoy parece que cargas esto en soledad, y no es del todo así. Un día a la vez.',
      ],
      impulso: [
        'Buena energía, pero mide el salto con lo que mostró el centro.',
        'Avanza, sí, pero sin saltarte lo que se te pide mirar.',
        'Las ganas alcanzan para arrancar; para sostener, mira lo de arriba.',
      ],
    },
    abierta: {
      neutro: [
        'Quédate con lo que más te resonó y déjalo trabajar unos días.',
        'No hace falta resolver todo hoy; alcanza con ver más claro.',
        'Deja que esto decante. Lo importante vuelve solo.',
      ],
      preocupacion: [
        'Sé amable contigo: entender ya es empezar a sanar.',
        'Date permiso para no tener todas las respuestas todavía.',
        'Lo que duele también se va acomodando, aunque hoy no se note.',
      ],
      impulso: [
        'Antes de actuar, deja que esto decante.',
        'Tu empuje vale mucho; oriéntalo con lo que acabas de ver.',
        'Guarda algo de ese fuego para después. Va a hacer falta.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, la otra persona pesa más de lo que parece.',
    'El vínculo con quien mencionas tiñe cada rincón de la lectura.',
    'Esa persona también forma parte del cuadro.',
    'Lo que hace el otro también está tirando de este hilo.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que todavía no cerró.',
      'Hay un antes que sigue metido en la escena.',
      'Algo de lo viejo todavía tiene raíz acá.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y la respuesta va en esa dirección.',
      'Todo esto se inclina hacia lo que aún no pasó.',
      'La mirada está puesta más allá, y ahí es donde apunta lo que viene.',
    ],
  },
};
