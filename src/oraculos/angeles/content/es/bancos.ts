import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Ángeles para la cruz de 5 (español NEUTRO). Mismo esqueleto
// que el de Tarot, pero con voz propia (mensajeros, guardianes, luz), para que
// los dos oráculos no suenen iguales. El español es neutro a propósito (nada de
// voseo) para que la app sirva a todo el mercado hispanohablante.
//
// Acá NO se nombran los ángeles. La persona ve las cartas; lo que espera leer es
// qué dicen sobre lo que preguntó, no la ficha de cada uno.
//
// ── CÓMO SE ESCRIBE ACÁ ──────────────────────────────────────────────────
// Las mismas dos reglas que en el banco de Tarot (ver el comentario largo en
// tarot/content/es/bancos.ts) y que en el prompt del servidor:
//
// 1. CLARO ANTES QUE ELEVADO. Palabras de la vida diaria. Prohibidas las de
//    informe: optimizar, gestionar, proceso, estructura, dinámica, potencial,
//    recursos, consolidar, plano (como en "el plano afectivo").
// 2. MÍSTICO SOBRIO. Este oráculo es el que más tira a lo celestial y por eso
//    es el que más fácil se vuelve pomposo. Un solo toque por oración —una luz,
//    un guardián, una señal— y el resto en palabras llanas. Nada de arcaísmos
//    ni de "el coro celestial dispone los designios".
export const BANCOS_ANGELES_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, esto es lo que traen los ángeles.',
        'Miremos tu pregunta {tema}. El mensaje se ordena así.',
        'Esto es lo que hay para mostrarte {tema}.',
        'Vamos con lo que preguntas {tema}, de a poco.',
      ],
      preocupacion: [
        'Aquieta el corazón: no estás en esto a solas {tema}.',
        'Hay quien te cuida en esto. Mira con calma lo que se revela {tema}.',
        'Sé que pesa {tema}. Vamos despacio con lo que aparece.',
      ],
      impulso: [
        'Antes de lanzarte, escucha lo que traen los mensajeros {tema}.',
        'Tus ganas tienen alas; deja que el mensaje las oriente {tema}.',
        'Con ese empuje {tema}, conviene primero ver el conjunto.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres entender {tema}, se abre este espejo.',
        'Hay cinco luces encendidas para mirar {tema}.',
        'Vamos a mirar {tema} con calma.',
        'Esto es lo que se ilumina cuando preguntas {tema}.',
      ],
      preocupacion: [
        'Respira hondo. Esto es una guía {tema}, no una sentencia.',
        'Sin apuro: lo que hoy te pesa {tema} queda acomodado para que puedas verlo.',
        'Bajemos un cambio {tema}. Lo que inquieta se mira mejor de a poco.',
      ],
      impulso: [
        'Frena el vuelo un momento; hay algo para pensar {tema}.',
        'Tanta fuerza merece una pausa: mira lo que se ilumina {tema}.',
        'Antes de moverte {tema}, deja que el mensaje se acomode.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes', 'sobre esa persona'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre eso que te ocupa en el trabajo'],
    dinero: ['sobre el dinero', 'sobre lo que te preocupa de las cuentas', 'sobre lo material'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  // Retoman de qué trata la pregunta, con la voz del oráculo. Ninguna afirma ni
  // niega lo consultado: reformulan y mueven la mirada a lo que el mensaje sí
  // puede mostrar. Los ángeles acompañan, no sentencian.
  aperturasIntencion: {
    retorno: [
      'Preguntas si vuelve. Nadie firma un regreso, pero sí se ve qué quedó abierto entre ustedes.',
      'Quieres saber si va a volver. Eso no está en manos de nadie más que de ustedes dos; lo que sí aparece es cómo está el vínculo.',
      'La pregunta es por un regreso. Escucha primero qué sostiene hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y su corazón es suyo. Acá se habla de lo que pasa entre ustedes.',
      'Quieres saber si te quiere. Nadie contesta por otro, pero el mensaje muestra el lazo tal como está.',
      'La pregunta apunta al sentir del otro. Lo que se alumbra es el vínculo, no su decisión.',
    ],
    ruptura: [
      'Estás pensando en cortar, y eso lo eliges tú. Acá aparece lo que pesa de cada lado.',
      'Preguntas si dejarlo. Antes de decidir, escucha qué se está sosteniendo.',
      'La pregunta es si irte. Aparece lo que te retiene y lo que te empuja.',
    ],
    decision: [
      'Preguntas qué te conviene. Nadie elige por ti, pero queda ordenado lo que está en juego.',
      'Estás entre dos caminos. Mira lo que se enciende de cada lado.',
      'La pregunta es qué hacer. Esto es lo que los mensajeros ponen a la vista.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. El mensaje muestra con qué arranca.',
      'Quieres saber si sale bien. Aparece la tierra donde se planta.',
      'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
    ],
    espera: [
      'Preguntas cuándo. Las fechas no se anuncian, pero sí qué falta para que eso madure.',
      'Quieres saber cuánto falta. Nadie marca el día; sí se ve qué se está cocinando.',
      'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
    ],
  },
  // OJO al escribir estas plantillas: los fragmentos vienen en dos formas
  // distintas —sintagma nominal ("desengaño con un colega") e infinitivo
  // ("plantarse por lo que sientes")—, así que el hueco tiene que aceptar las
  // dos. Funcionan: después de dos puntos o coma, tras "es", "se apoya en",
  // "pasa por". NO funciona detrás de un verbo que pida objeto directo.
  situacion: {
    dos: [
      'De fondo se mueve algo: {frag1}. Y en el centro, {frag2}.',
      'Alrededor de la escena: {frag1}. Sosteniéndolo todo, {frag2}.',
      'Primero se anuncia esto: {frag1}. Pero la luz principal es otra: {frag2}.',
      'Lo que rodea el mensaje es {frag1}, y en su centro arde {frag2}.',
      'A un costado aparece {frag1}, y bien en el medio, {frag2}.',
      'Lo que se ve de entrada: {frag1}. Lo que manda de verdad: {frag2}.',
    ],
    una: [
      'En el centro de todo hay algo claro: {frag}.',
      'Lo que sostiene la escena es {frag}.',
      'Bien en el medio arde esto: {frag}.',
      'Si hay que quedarse con una sola señal, es esta: {frag}.',
    ],
  },
  // OJO con los sujetos: acá no se nombran los ángeles, así que "uno" u "otro"
  // no se refieren a nada. Todo se apoya en el fragmento mismo.
  tension: {
    tres: [
      'Por un lado tira {frag1}; por el otro, {frag3}. Y en el medio guía {frag2}: ahí está el nudo.',
      'Entre {frag1} y {frag3} se juega el equilibrio, pero lo que inclina la balanza es {frag2}.',
      'Lo que asoma como {frag1} gira alrededor de {frag2}, y el brillo final lo pone {frag3}.',
      'Hay algo que prepara el terreno, {frag1}, y algo que lo agita, {frag3}; en el medio queda {frag2}.',
      'Se cruzan dos cosas, {frag1} y {frag2}, y por encima de las dos se extiende {frag3}.',
      'Una parte tuya se apoya en {frag1} y otra empuja hacia {frag3}; en el medio, {frag2} es lo que decide.',
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
    'En tu pensamiento pesa {frag}.',
    'Lo que hoy te ocupa la mente es {frag}.',
    'Arriba, en lo que das vueltas —tuyo o de aquella persona—, aparece {frag}.',
    'Lo que se piensa, aunque no se diga, es {frag}.',
    'Lo que no te deja dormir tiene que ver con {frag}.',
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
    'El camino que se abre desde acá va hacia {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con esto a la vista, decide sin apurar el final.',
        'Deja que el mensaje se acomode antes de tu próximo paso.',
        'Ya tienes con qué decidir. Tómate el tiempo.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: hay quien camina a tu lado.',
        'Lo que temes no está sellado. Confía y suelta un poco.',
        'Con un paso a la vez alcanza. Hoy no hace falta más.',
      ],
      impulso: [
        'Buena fuerza; mide el salto con lo que mostró el centro.',
        'Avanza, pero sin saltarte lo que se te pide ver.',
        'Las ganas alcanzan para arrancar; para sostener, mira lo de arriba.',
      ],
    },
    abierta: {
      neutro: [
        'Quédate con la señal que más te resonó y déjala trabajar unos días.',
        'No hace falta resolver todo hoy; alcanza con ver con más luz.',
        'Deja que esto decante. Lo importante vuelve solo.',
      ],
      preocupacion: [
        'Sé amable contigo: escuchar ya es empezar a sanar.',
        'Date permiso para no tener todas las respuestas todavía.',
        'Lo que duele también se va acomodando, aunque hoy no se note.',
      ],
      impulso: [
        'Antes de actuar, deja que el mensaje decante.',
        'Tu empuje es un don; oriéntalo con lo que acabas de ver.',
        'Guarda algo de ese fuego para después. Va a hacer falta.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, esa persona pesa más de lo que parece.',
    'El vínculo con quien nombras tiñe cada rincón del mensaje.',
    'Ese alguien también forma parte del cuadro.',
    'Lo que hace el otro también está tirando de este hilo.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que aún no cerró.',
      'Hay un antes que todavía respira en la escena.',
      'Algo de lo viejo todavía tiene raíz acá.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y la respuesta va en esa dirección.',
      'Todo se inclina hacia lo que aún no llega.',
      'La mirada está puesta más allá, y ahí es donde apunta lo que viene.',
    ],
  },
};
