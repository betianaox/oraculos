// Consejo del día de Ángeles, en español: uno por carta.
//
// POR QUÉ EXISTE: hasta ahora este oráculo devolvía SIEMPRE el mismo texto
// genérico, sin mirar qué carta había salido. La persona elegía entre tres
// dorsos, veía la animación de vuelta… y leía lo mismo que ayer y que el mes
// pasado. La elección era puro teatro.
//
// ── CÓMO SE ESCRIBE UN CONSEJO ───────────────────────────────────────────
// Las dos reglas de siempre (ver es/bancos.ts) —claro antes que elevado,
// místico sobrio— más una tercera que es propia de acá:
//
//   UN CONSEJO LE DICE A LA PERSONA QUÉ HACER HOY. No qué significa la carta.
//   "El Serafín representa el amor incondicional" es una ficha; "hoy dale a
//   alguien algo que no te vayan a devolver" es un consejo. Si la frase se
//   puede leer sin que haya nadie del otro lado, está mal escrita.
//
// Español NEUTRO, sin voseo, igual que el resto del contenido de la app.
// Segunda persona, empiezan hablando del día, y caben en dos renglones. Las
// cartas duras del mazo —los ángeles negativos— no se suavizan, pero tampoco
// asustan: se convierten en algo que se puede hacer hoy.
export const CONSEJOS_ANGELES_ES: Record<number, string> = {
  1: 'Dale hoy a alguien algo que no te vayan a devolver. Un rato, una mano, una llamada.',
  2: 'Algo que vienes cargando puede empezar a cerrar hoy si dejas de tocarlo.',
  3: 'Haz hoy esa cosa que te sale bien y que hace rato no haces. Aunque no sirva para nada.',
  4: 'Hoy conviene hablar con quien tiene las dos partes de la historia, antes de decidir.',
  5: 'Pon hoy un límite que vienes postergando. No hace falta explicarlo tres veces.',
  6: 'Pregúntale hoy a alguien que ya pasó por esto. Te va a ahorrar meses.',
  7: 'Hoy no decidas en caliente. Lo que sientas a las once de la noche, míralo mañana.',
  8: 'Anota hoy esa idea que te da vueltas, aunque parezca demasiado grande. Solo anotarla.',
  9: 'Prueba hoy mirar el mismo asunto desde el lugar del otro. Cambia más de lo que parece.',
  10: 'Hoy hazte cargo de algo que vienes esperando que resuelva otro.',
  11: 'Usa hoy esas ganas para arrancar algo, no para contarlo.',
  12: 'Alguien cerca de ti necesita que le preguntes cómo está. Hazlo hoy.',
  13: 'Si hoy puedes ayudar a alguien sin que se entere, hazlo.',
  14: 'Llama hoy a alguien de tu familia. Aunque no haya motivo.',
  15: 'Hoy es un buen día para decir eso que vienes ensayando hace semanas.',
  16: 'Si hay algo a medias con alguien, hoy conviene destrabarlo aunque sea con un mensaje corto.',
  17: 'Antes de opinar hoy, escucha el doble de lo que hables.',
  18: 'Corta hoy una sola cosa de las que sabes que te hacen mal. Una.',
  19: 'Tu presencia hoy pesa más de lo que crees. Úsala para abrir una puerta, no para lucirte.',
  20: 'Hoy conviene consultar antes de resolver. Alguien ve algo que a ti se te escapa.',
  21: 'Escríbele hoy a ese amigo con el que no hablas hace rato. Sin agenda.',
  22: 'Di hoy lo que estuviste callando, pero de una manera que el otro pueda escuchar.',
  23: 'Hoy cierra algo. Un archivo, una conversación, una etapa. Lo que sigue necesita el lugar.',
  24: 'Algo que hoy parece un detalle va a explicarte varias cosas. Presta atención.',
  25: 'Hoy cuídate un poco más de lo que vienes haciendo. Dormir cuenta.',
  26: 'Si hoy te das cuenta de un error tuyo, no lo tapes. Repararlo temprano sale barato.',
  27: 'Hoy protege lo que ya construiste, aunque no sea el día más emocionante del año.',
  28: 'Pon hoy en su lugar algo que sabes que está torcido. Aunque sea incómodo.',
  29: 'Hoy hazle caso a la corazonada, sobre todo si te viene avisando hace días.',
  30: 'Disfruta hoy de lo que tienes sin buscarle el defecto. Es un día para eso.',
  31: 'Hoy pon tu fuerza al servicio de algo que no sea tu propio brillo.',
  32: 'Di hoy las cosas claras y de una vez. Los rodeos están costando más que la verdad.',
  33: 'Hoy haz lo que corresponde, no lo que conviene. Se nota la diferencia después.',
  34: 'Hoy retoma el control de algo que vienes dejando que te maneje.',
  35: 'Dedícale hoy un rato a entender algo que te intriga hace tiempo.',
  36: 'Escribe hoy lo que estás pensando. Va a quedar más claro afuera que adentro.',
  37: 'Cambia hoy una rutina, aunque sea chica. El camino a casa, el horario, el orden.',
  38: 'Si hoy algo se termina, déjalo terminar. Estirarlo no lo mejora.',
  39: 'Hoy no entres en una pelea que no elegiste. Puedes simplemente no ir.',
  40: 'Hoy abre una puerta que venías dejando cerrada por las dudas.',
  41: 'Aprovecha hoy la buena racha para ordenar, no solo para gastar.',
  42: 'Hoy empieza algo, aunque sea el primer paso más chiquito que se te ocurra.',
  43: 'Hoy pide lo que te corresponde. No va a llegar solo.',
  44: 'Date hoy un rato de algo que haces solo porque te gusta. Sin culpa.',
  45: 'Si hoy sientes celos, mira qué te falta a ti antes de mirar al otro.',
  46: 'Hoy dile a alguien lo que sientes, con las palabras simples.',
  47: 'Antes de moverte hoy, pregúntate qué pasa si sale mal. Después decide igual.',
  48: 'Hoy no busques nada. Quédate un rato con lo que ya está bien.',
  49: 'Haz hoy un balance honesto de dónde estás. Sin castigarte y sin maquillar.',
  50: 'Muestra hoy lo que hiciste. Guardarlo no lo hace mejor.',
  51: 'Hoy separa lo que imaginaste de lo que efectivamente pasó. Anota las dos columnas.',
  52: 'Hoy baja un cambio. Lo que no se haga hoy se hace mañana.',
  53: 'Hoy reparte parejo: tiempo, tarea, dinero, lo que sea que estés dividiendo mal.',
  54: 'Acércate hoy a quien te hace bien. No hace falta motivo ni plan.',
  55: 'Hoy sostén la esperanza aunque no tengas pruebas todavía. Un día más.',
  56: 'Si hoy alguien se acerca, dale una oportunidad real antes de decidir.',
  57: 'Hoy deja que empiece algo, aunque no sepas todavía adónde va.',
  58: 'Si hoy te comparas con alguien, corta ahí. Esa cuenta nunca cierra.',
  59: 'Hoy resigna algo chico por algo que te importa más. Elige a conciencia.',
  60: 'Dedícale hoy tiempo a lo que estás criando: un hijo, un proyecto, una amistad.',
  61: 'Hoy lee, escucha o mira algo que te deje mejor de lo que te encontró.',
  62: 'Hoy usa el sentido común antes que la teoría. Suele tener razón.',
  63: 'Hoy pon tu cabeza donde de verdad hace falta, y no en lo que grita más fuerte.',
  64: 'Hoy hazle caso al cuerpo: si te está pidiendo algo, escúchalo antes de racionalizarlo.',
  65: 'Hoy sé ambicioso con lo que te importa y desprendido con lo que no.',
  66: 'Empuja hoy eso que vienes empujando. Está más cerca de lo que parece.',
  67: 'Hoy fíjate si alguien está usando lo que le das. Mira con calma, sin acusar.',
  68: 'Hoy toma una decisión chica tú solo, sin consultar. Para recordar cómo se hace.',
  69: 'Hoy dile que no a algo que sabes que te va a pesar mañana.',
  70: 'Si hoy el clima está pesado, no lo hagas tuyo. Es de otro.',
  71: 'Hoy suelta un rencor viejo. No hace falta perdonar a nadie de frente: alcanza con dejarlo.',
  72: 'Revisa hoy con quién estás contando. Que sea con quien de verdad está.',
  73: 'Hoy no fuerces lo que se demora. Aprovecha para preparar el terreno.',
  74: 'Si hoy la ansiedad aprieta, haz una sola cosa a la vez. Después la siguiente.',
  75: 'Hoy baja el orgullo y pide eso que necesitas. Nadie va a adivinarlo.',
  76: 'Si hoy hay ruido con alguien, no busques ganar. Busca que se termine.',
  77: 'Hoy no le creas a quien te dice lo que quieres oír. Fíjate qué hace, no qué dice.',
  78: 'Hoy pregúntate quién sale ganando con lo que estás por decidir. Que la respuesta te incluya.',
};
