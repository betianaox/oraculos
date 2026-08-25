import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo del Tarot Egipcio para la cruz de 5 (español NEUTRO). Mismo
// esqueleto que Tarot y Ángeles, pero con voz propia —arena, piedra, el río—
// para que los tres oráculos no suenen iguales.
//
// Acá NO se nombran cartas: la persona las tiene delante.
//
// ── CÓMO SE ESCRIBE ACÁ ──────────────────────────────────────────────────
// Las mismas dos reglas que en el banco de Tarot (ver el comentario largo en
// tarot/content/es/bancos.ts) y que en el prompt del servidor:
//
// 1. CLARO ANTES QUE ELEVADO. Palabras de la vida diaria. Prohibidas las de
//    informe: optimizar, gestionar, proceso, estructura, dinámica, potencial,
//    recursos, consolidar, plano (como en "el plano afectivo").
// 2. MÍSTICO SOBRIO. Una imagen por oración —arena, piedra, río, camino— y el
//    resto en palabras llanas. El decorado egipcio se usa con cuentagotas: si
//    cada frase nombra el Nilo, deja de significar algo.
//
// ⚠️ PARTICULARIDAD DE ESTE BANCO: los fragmentos de Egipcio pueden venir en
// TRES formas, no dos. Además de sintagmas nominales ("intuición y atracción")
// llegan CLÁUSULAS CON VERBO, porque los significados invertidos se recortan de
// un texto largo ("el poder no encuentra cauce"). Por eso casi todas las
// plantillas de acá usan dos puntos o coma: es lo único que acepta las tres
// formas sin romperse. NO escribas "se apoya en {frag}" ni "es {frag}".
export const BANCOS_EGIPCIO_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, esto es lo que se despliega.',
        'Miremos tu pregunta {tema}. Las cartas la ordenan así.',
        'Esto es lo que hay para mostrarte {tema}.',
        'Vamos con lo que preguntas {tema}, por partes.',
      ],
      preocupacion: [
        'Respira hondo: acá nadie sentencia {tema}, solo se alumbra.',
        'Hay inquietud en lo que preguntas {tema}. Mira con calma lo que la arena acomoda.',
        'Sé que pesa {tema}. Vamos despacio con lo que aparece.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, primero conviene mirar el conjunto.',
        'Antes de dar el paso, esto es lo que queda a la vista {tema}.',
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
        'Sin apuro: queda acomodado, para que puedas verlo, eso que hoy te pesa {tema}.',
        'Nada de esto está grabado en piedra {tema}: es una mirada para lo que te desvela.',
        'Bajemos un cambio {tema}. Lo que inquieta se mira mejor de a poco.',
      ],
      impulso: [
        'Detén un momento las ganas; hay algo para pensar {tema}.',
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
  // Retoman de qué trata la pregunta, con la voz del oráculo. Ninguna afirma ni
  // niega lo consultado: reformulan y mueven la mirada a lo que las cartas sí
  // pueden mostrar.
  aperturasIntencion: {
    retorno: [
      'Preguntas si vuelve. Eso no lo decide una carta, pero sí se ve qué quedó abierto entre ustedes.',
      'Quieres saber si va a volver. Nadie promete eso; lo que sí aparece es cómo está el vínculo.',
      'La pregunta es por un regreso. Mira primero qué sostiene hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y eso solo lo sabe ella. Acá se habla del vínculo tal como está.',
      'Quieres saber si te quiere. Nadie contesta por otro, pero sí aparece qué se juega entre los dos.',
      'La pregunta apunta al corazón del otro. Lo que se despliega es el lazo, no su decisión.',
    ],
    ruptura: [
      'Estás pensando en cortar, y eso lo decides tú. Acá aparece lo que pesa de cada lado.',
      'Preguntas si dejarlo. Antes de decidir, mira qué se está sosteniendo.',
      'La pregunta es si irte. Aparece lo que te retiene y lo que te empuja.',
    ],
    decision: [
      'Preguntas qué te conviene. Nadie elige por ti, pero queda ordenado lo que está en juego.',
      'Estás entre dos caminos. Mira lo que aparece de cada lado antes de decidir.',
      'La pregunta es qué hacer. Esto es lo que queda a la vista.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. Lo que se despliega muestra con qué arranca.',
      'Quieres saber si sale bien. Aparece la tierra donde se planta.',
      'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
    ],
    espera: [
      'Preguntas cuándo. Las fechas no se leen en la piedra, pero sí qué falta para que eso madure.',
      'Quieres saber cuánto falta. Nadie marca el día; sí se ve qué se está cocinando.',
      'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
    ],
  },
  situacion: {
    dos: [
      'Alrededor del asunto: {frag1}. Y en el centro: {frag2}.',
      'La arena muestra primero esto: {frag1}. Y en el eje: {frag2}.',
      'Rodeando la escena: {frag1}. Sosteniéndolo todo: {frag2}.',
      'Lo que asoma al borde: {frag1}. Lo que late en el medio: {frag2}.',
      'A un costado aparece esto: {frag1}. Y bien en el medio: {frag2}.',
      'Lo que se ve de entrada: {frag1}. Lo que manda de verdad: {frag2}.',
    ],
    una: [
      'En el centro de todo hay algo claro: {frag}.',
      'Lo que sostiene la escena: {frag}.',
      'Bien en el medio late esto: {frag}.',
      'Si hay que quedarse con una sola cosa, es esta: {frag}.',
    ],
  },
  // Menos dos puntos que antes: cuatro seguidos en un párrafo se leen como una
  // lista, no como una lectura. Se mantienen solo donde hacen falta para que
  // entre un fragmento con verbo.
  tension: {
    tres: [
      'Por un lado tira {frag1}, y por el otro {frag3}; en el medio manda {frag2}.',
      'A un costado se ve {frag1}, al otro {frag3}. Pero el eje es otro: {frag2}.',
      'Los extremos hablan de {frag1} y de {frag3}. El centro, en cambio, pesa más: {frag2}.',
      'Hay algo que abre el camino, {frag1}, y algo que lo estrecha, {frag3}; entre los dos se impone {frag2}.',
      'Una parte se apoya en {frag1} y otra empuja hacia {frag3}; en el medio queda {frag2}.',
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
      'En la sombra del asunto queda esto: {frag3}.',
    ],
  },
  cabeza: [
    'En lo alto, lo que te ocupa la mente: {frag}.',
    'Arriba de todo pesa esto: {frag}.',
    'Lo que se piensa, aunque no se diga: {frag}.',
    'Lo que das vueltas en la cabeza: {frag}.',
    'Lo que no te deja dormir tiene que ver con esto: {frag}.',
  ],
  // La única pieza que se lee mirando hacia adelante. Matiz anticipatorio, pero
  // siempre en clave de tendencia, nunca como un hecho consumado.
  paso: [
    'Y en la base, lo que se perfila: {frag}.',
    'Lo que viene se anuncia en esta dirección: {frag}.',
    'Si nada se fuerza, lo próximo se insinúa así: {frag}.',
    'En el horizonte cercano ya se asoma esto: {frag}.',
    'Todo apunta a que lo siguiente traiga esto: {frag}.',
    'El camino que se abre desde acá va hacia esto: {frag}.',
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
        'Lo que temes no está grabado en piedra. Usa esta mirada para soltar un poco.',
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
        'Sé amable contigo: entender ya es empezar a ordenar.',
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
      'Todo esto se inclina hacia lo que aún no ocurre.',
      'La mirada está puesta más allá, y ahí es donde apunta lo que viene.',
    ],
  },
};
