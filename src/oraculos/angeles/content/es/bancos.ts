import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Ángeles para la cruz de 5 (español NEUTRO). Mismo esqueleto
// que el de Tarot, pero registro MÍSTICO (coro celestial, mensajeros,
// guardianes), para que los dos oráculos suenen distintos. Acompaña, no dicta.
// El español es neutro a propósito (nada de voseo) para que la app sirva a todo
// el mercado hispanohablante. Otros idiomas caen a español hasta traducirse.
//
// Acá NO se nombran los ángeles. La persona ve las cartas; lo que espera leer es
// qué dicen sobre lo que preguntó, no la ficha de cada uno.
export const BANCOS_ANGELES_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Los ángeles ordenan así la respuesta a tu pregunta {tema}.',
        'El coro celestial dispone las señales de este modo {tema}.',
        'Ante tu consulta {tema}, los mensajeros se abren así.',
      ],
      preocupacion: [
        'Aquieta el corazón: los ángeles no abandonan a quien pregunta {tema}.',
        'Hay guardianes en esto; mira lo que se revela {tema}.',
      ],
      impulso: [
        'Antes de lanzarte, escucha lo que los mensajeros traen {tema}.',
        'Tu ímpetu tiene alas; deja que el mensaje lo oriente {tema}.',
      ],
    },
    abierta: {
      neutro: [
        'Los ángeles abren este espejo del alma {tema}.',
        'Los mensajeros abren cinco luces para lo que preguntas {tema}.',
      ],
      preocupacion: [
        'Respira hondo: esto es una guía {tema}, no una sentencia.',
        'Los ángeles acompañan con esta mirada tu desasosiego {tema}.',
      ],
      impulso: [
        'Frena el vuelo un instante; el coro propone esta reflexión {tema}.',
        'Tanta fuerza merece una pausa: mira lo que se ilumina {tema}.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre lo que te ocupa en lo laboral'],
    dinero: ['sobre el dinero', 'sobre lo material', 'sobre tus cuentas'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  // Retoman de qué trata la pregunta, en registro místico. Ninguna afirma ni
  // niega lo consultado: reformulan y mueven la mirada a lo que el mensaje sí
  // puede mostrar. Los ángeles acompañan, no sentencian.
  aperturasIntencion: {
    retorno: [
      'Preguntas si vuelve. Los mensajeros no firman regresos, pero muestran qué quedó abierto.',
      'Quieres saber si va a volver. Eso no está en manos del coro; lo que sí traen es el estado del vínculo.',
      'La pregunta es por un regreso. Escucha primero qué sostiene hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y su corazón es suyo. Los ángeles hablan de lo que circula entre ustedes.',
      'Quieres saber si te quiere. Nadie responde por otro, pero el mensaje muestra el lazo tal como está.',
      'La pregunta apunta al sentir del otro. El coro alumbra el vínculo, no su decisión.',
    ],
    ruptura: [
      'Estás pensando en cortar, y esa elección es tuya. Los mensajeros acercan lo que pesa de cada lado.',
      'Preguntas si dejarlo. Antes de decidir, escucha qué se está sosteniendo.',
      'La pregunta es si irte. Aparece lo que te retiene y lo que te empuja.',
    ],
    decision: [
      'Preguntas qué te conviene. Los ángeles no eligen por ti, pero ordenan lo que está en juego.',
      'Estás entre dos caminos. Mira lo que el coro pone de cada lado.',
      'La pregunta es qué hacer. Esto es lo que los mensajeros ponen a la vista.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. El mensaje muestra con qué arranca.',
      'Quieres saber si sale bien. Aparece el terreno donde se planta.',
      'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
    ],
    espera: [
      'Preguntas cuándo. Los tiempos no se anuncian, pero sí qué falta para que eso madure.',
      'Quieres saber cuánto falta. El coro no marca fechas; muestra qué se está gestando.',
      'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
    ],
  },
  // OJO al escribir estas plantillas: los fragmentos vienen en dos formas
  // distintas —sintagma nominal ("desengaño con un colega") e infinitivo
  // ("plantarse por lo que sientes")—, así que el hueco tiene que aceptar las
  // dos. Funcionan: después de dos puntos o coma, tras "es", "se apoya en",
  // "pasa por". NO funciona detrás de un verbo que pida objeto directo.
  situacion: [
    'De fondo se mueve algo: {frag1}. Y en el centro, {frag2}.',
    'Alrededor de la escena: {frag1}. Sosteniéndolo todo, {frag2}.',
    'Primero se anuncia esto: {frag1}. Pero la llama principal es otra: {frag2}.',
    'Lo que rodea el mensaje es {frag1}, y en su centro arde {frag2}.',
  ],
  // OJO con los sujetos: acá no se nombran los ángeles, así que "uno" u "otro"
  // no se refieren a nada. Todo se apoya en el fragmento mismo.
  tension: [
    'Por un lado tira {frag1}; por el otro, {frag3}. Y en el medio guía {frag2}: ahí habla el mensaje principal.',
    'Entre {frag1} y {frag3} se juega el equilibrio, pero lo que inclina la balanza celeste es {frag2}.',
    'Lo que asoma como {frag1} gira en torno a {frag2}, y el resplandor final lo pone {frag3}.',
    'Hay algo que prepara el terreno, {frag1}, y algo que lo agita, {frag3}; en el medio queda {frag2}.',
    'Se cruzan dos cosas, {frag1} y {frag2}, y por encima de ambas se extiende {frag3}.',
  ],
  cabeza: [
    'En tu pensamiento pesa {frag}.',
    'Lo que ocupa tu mente es {frag}.',
    'Arriba, en lo que das vueltas —tuyo o de aquella persona—, aparece esto: {frag}.',
    'En el plano de lo que se piensa se anuncia {frag}.',
  ],
  // La única pieza que se lee mirando hacia adelante. Matiz anticipatorio, pero
  // siempre en clave de tendencia. Nunca una promesa: los mensajeros anuncian
  // un camino, no un desenlace.
  paso: [
    'Y hacia adelante se perfila esto: {frag}.',
    'Lo que viene se anuncia en esta dirección: {frag}.',
    'Si nada se fuerza, lo próximo se insinúa así: {frag}.',
    'En el horizonte cercano ya se asoma {frag}.',
    'Todo apunta a que lo siguiente traiga {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con esta guía, decide sin apurar al cielo.',
        'Deja que los mensajeros acomoden tu próximo paso.',
      ],
      preocupacion: [
        'No cargues el desenlace: los ángeles caminan a tu lado.',
        'Lo que temes no está sellado; confía y suelta un poco.',
      ],
      impulso: [
        'Buena fuerza; mide el salto con lo que mostró el centro.',
        'Avanza, pero sin saltar lo que se te pide ver.',
      ],
    },
    abierta: {
      neutro: [
        'Quédate con la señal que más te resonó y déjala trabajar.',
        'No hace falta resolver hoy; alcanza con ver con más luz.',
      ],
      preocupacion: [
        'Sé amable contigo: escuchar ya es empezar a sanar.',
        'Permítete no tener todas las respuestas todavía.',
      ],
      impulso: [
        'Antes de actuar, deja que el mensaje decante.',
        'Tu empuje es un don; oriéntalo con lo que viste.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, esa persona pesa más de lo que parece.',
    'El vínculo con quien nombras tiñe cada rincón del mensaje.',
    'Ese alguien también forma parte del mensaje.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que aún no cerró.',
      'Hay un antes que todavía respira en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y el coro responde en esa dirección.',
      'Todo se inclina hacia lo que aún no llega.',
    ],
  },
};
