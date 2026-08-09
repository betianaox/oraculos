import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Tarot para la cruz de 5 (español NEUTRO). Es el "tejido"
// entre las cartas: aperturas, situación, tensión, cabeza, paso y consejos.
// Voz reflexiva y didáctica, nunca adivinatoria: acompaña, no dicta. El español
// es neutro a propósito (nada de voseo) para que la app sirva a todo el mercado
// hispanohablante. Otros idiomas caen a español hasta traducirse.
//
// Acá NO se nombran cartas. La persona las tiene delante; lo que espera leer es
// qué dicen sobre lo que preguntó, no una definición de cada una.
export const BANCOS_TAROT_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, el panorama se ordena así.',
        'Ante tu pregunta {tema}, se dibuja este recorrido.',
        'Esto es lo que hay para mostrarte {tema}.',
      ],
      preocupacion: [
        'Entiendo la inquietud {tema}; mira con calma lo que se acomoda.',
        'No estás sin señales {tema}: las piezas se ordenan de este modo.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, conviene primero ver el conjunto.',
        'Antes de lanzarte, esto es lo que queda sobre la mesa {tema}.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres ver {tema}, se abre este espejo.',
        'Aquí hay cinco caras para mirar {tema}.',
      ],
      preocupacion: [
        'Respira: nada de esto dicta un destino {tema}, es una mirada para tu desasosiego.',
        'Sin prisa: queda acomodado, para verlo mejor, eso que hoy te pesa {tema}.',
      ],
      impulso: [
        'Frena un momento el impulso; hay una reflexión para hacer {tema}.',
        'Tanta energía merece una pausa: mira lo que se ilumina {tema}.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre lo que te ocupa en lo laboral'],
    dinero: ['sobre el dinero', 'sobre lo material', 'sobre tus cuentas'],
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
      'Preguntas si vuelve, y eso no se decide en una carta: lo que sí se ve es el terreno donde caería esa vuelta.',
      'Quieres saber si va a volver. La tirada no firma esa respuesta, pero muestra qué quedó abierto entre ustedes.',
      'La pregunta es si regresa. Mira primero lo que sostiene hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y eso solo lo sabe ella. Lo que la tirada muestra es el vínculo tal como está.',
      'Quieres saber si te quiere. Nadie puede responder por otro, pero acá aparece qué se juega entre los dos.',
      'La pregunta apunta al corazón del otro. La cruz habla de lo que circula entre ustedes.',
    ],
    ruptura: [
      'Estás pensando en cortar, y esa decisión es tuya. La tirada te acerca lo que hoy pesa de cada lado.',
      'Preguntas si dejarlo. Antes de decidir, mira qué muestra la cruz sobre lo que se está sosteniendo.',
      'La pregunta es si irte. Acá aparece lo que te retiene y lo que te empuja.',
    ],
    decision: [
      'Preguntas qué te conviene. La tirada no elige por ti, pero ordena lo que está en juego.',
      'Estás entre dos caminos. Mira lo que la cruz pone de cada lado antes de decidir.',
      'La pregunta es qué hacer. Esto es lo que hay sobre la mesa.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. La cruz muestra con qué arranca.',
      'Quieres saber si sale bien. Lo que aparece es el terreno donde se planta.',
      'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
    ],
    espera: [
      'Preguntas cuándo. Los tiempos no se leen en las cartas, pero sí qué falta para que eso madure.',
      'Quieres saber cuánto falta. La tirada no marca fechas; muestra qué se está cocinando.',
      'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
    ],
  },
  // OJO al escribir estas plantillas: los fragmentos vienen en dos formas
  // distintas —sintagma nominal ("una decisión que evitas") e infinitivo
  // ("revisar lo que esperas")—, así que el hueco tiene que aceptar las dos.
  // Funcionan: después de dos puntos o coma, tras "es", "se apoya en",
  // "pasa por". NO funciona meterlo detrás de un verbo que pida objeto
  // directo ("se abre {frag}" se rompe con los infinitivos).
  situacion: [
    'De fondo se mueve algo: {frag1}. Y en el centro, {frag2}.',
    'Alrededor de la escena: {frag1}. Sosteniéndolo todo, {frag2}.',
    'Primero asoma esto: {frag1}. Pero el eje verdadero es otro: {frag2}.',
    'Lo que rodea el asunto es {frag1}, y en su centro late {frag2}.',
  ],
  // OJO con los sujetos: acá no se nombran cartas, así que "uno", "otro" o
  // "el primero" no se refieren a nada. Todo lo que se diga tiene que apoyarse
  // en el fragmento mismo, no en una pieza que el texto nunca menciona.
  tension: [
    'Por un lado tira {frag1}; por el otro, {frag3}. Y en el medio manda {frag2}: ahí está el nudo de todo.',
    'Entre {frag1} y {frag3} se juega el equilibrio, pero lo que decide es {frag2}.',
    'Lo que asoma como {frag1} se ordena en torno a {frag2}, y el color final lo pone {frag3}.',
    'Hay algo que prepara el terreno, {frag1}, y algo que lo desordena, {frag3}; en el medio queda {frag2}.',
    'Se cruzan dos cosas, {frag1} y {frag2}, y por encima de ambas pesa {frag3}.',
  ],
  cabeza: [
    'En la cabeza te da vueltas esto: {frag}.',
    'Lo que hoy te ocupa la mente es {frag}.',
    'Arriba de todo pesa {frag}.',
    'En el plano de lo que se piensa —tuyo o de la persona por la que preguntas— aparece {frag}.',
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
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con eso a la vista, decide sin apurar el resultado.',
        'Deja que estas señales acomoden tu próxima elección.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: un paso a la vez alcanza.',
        'Lo que temes no está escrito; usa esta mirada para soltar un poco.',
      ],
      impulso: [
        'Buena energía, pero mide el salto con lo que mostró el centro.',
        'Avanza, sí, pero sin saltarte lo que se te pide mirar.',
      ],
    },
    abierta: {
      neutro: [
        'Quédate con lo que más te resonó y déjalo trabajar unos días.',
        'No hace falta resolver todo hoy; alcanza con ver más claro.',
      ],
      preocupacion: [
        'Sé amable contigo: entender ya es empezar a sanar.',
        'Date permiso para no tener todas las respuestas todavía.',
      ],
      impulso: [
        'Antes de actuar, deja que esta reflexión decante.',
        'Tu empuje es valioso; oriéntalo con lo que acabas de ver.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, la otra persona pesa más de lo que parece.',
    'El vínculo con quien mencionas tiñe cada rincón de la lectura.',
    'Esa persona también forma parte del cuadro.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que todavía no cerró.',
      'Hay un antes que sigue operando en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y la respuesta va en esa dirección.',
      'Todo esto se inclina hacia lo que aún no pasó.',
    ],
  },
};
