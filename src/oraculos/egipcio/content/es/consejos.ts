// Consejo del día del Tarot Egipcio, en español: uno por carta.
//
// POR QUÉ EXISTE: hasta ahora este oráculo devolvía `carta.derecho`, que es la
// ficha enciclopédica de la Wiki. "Capacidad de dirigir el propio poder hacia lo
// que se necesita y lograr resultados. Destreza, astucia y voluntad firme…"
// describe la carta; no le dice nada a quien la sacó. Eran párrafos de hasta 170
// caracteres donde tenía que haber una frase.
//
// ── CÓMO SE ESCRIBE UN CONSEJO ───────────────────────────────────────────
// Las dos reglas de siempre (ver es/bancos.ts) —claro antes que elevado,
// místico sobrio— más la propia de acá:
//
//   UN CONSEJO LE DICE A LA PERSONA QUÉ HACER HOY. No qué significa la carta.
//   Si la frase se puede leer sin que haya nadie del otro lado, está mal
//   escrita.
//
// Español NEUTRO, sin voseo. Segunda persona, arrancan hablando del día, y
// caben en dos renglones.
export const CONSEJOS_EGIPCIO_ES: Record<number, string> = {
  1: 'Hoy usa lo que sabes hacer en vez de solo tenerlo guardado. Empieza por lo más chico.',
  2: 'Hoy escucha antes de contestar. Lo que necesitas saber ya está dicho a media voz.',
  3: 'Riega hoy algo que plantaste hace tiempo y dejaste de mirar.',
  4: 'Pon hoy una regla clara donde hay desorden. Aunque sea una sola.',
  5: 'Hoy hazlo por el camino de siempre. No es el día de improvisar.',
  6: 'Hoy elige con el corazón, pero elige. Quedarte en el medio no es neutral.',
  7: 'Empuja hoy eso que venías empujando. Está a punto de ceder.',
  8: 'Hoy reclama lo que es tuyo, o devuelve lo que no lo es. Alguna de las dos.',
  9: 'Apártate hoy un rato del ruido. La respuesta aparece en el silencio.',
  10: 'Hoy aprovecha lo que se te presenta sin analizarlo tanto. La racha no espera.',
  11: 'Hoy sostén tu posición sin levantar la voz. La calma convence más.',
  12: 'Suelta hoy algo para ganar claridad. Elige tú qué, antes de que elija la vida.',
  13: 'Hoy dale un cierre a algo que ya terminó. Nombrarlo alcanza.',
  14: 'Hoy ve despacio. Lo que se apura ahora hay que rehacerlo después.',
  15: 'Mira hoy de frente eso que te tiene enganchado. Solo mirarlo ya afloja.',
  16: 'Si hoy algo se cae, no corras a apuntalarlo. Fíjate primero si valía la pena.',
  17: 'Hoy confía un poco más de lo que te sale. Un día.',
  18: 'Hoy no firmes ni prometas nada que no puedas revisar mañana.',
  19: 'Disfruta hoy de lo que está saliendo bien, en voz alta y sin culpa.',
  20: 'Hoy haz cuentas con lo vivido y perdónate una. La que más te pese.',
  21: 'Hoy date por satisfecho con algo. Ya está terminado, aunque no lo hayas celebrado.',
  22: 'Da hoy el primer paso sin tenerlo todo resuelto. El camino se ve andando.',
  23: 'Hoy haz bien una cosa pequeña, sin que nadie te vea. Alcanza con eso.',
  24: 'Deja hoy tu lugar en orden antes de irte. Mañana lo vas a agradecer.',
  25: 'Cambia hoy algo de tu recorrido, aunque sea la vuelta a casa.',
  26: 'Hoy aprovecha lo bueno que aparezca sin preguntarle de dónde salió.',
  27: 'Algo hoy no va a ser lo que parece. Mira dos veces antes de creer.',
  28: 'Hoy sigue buscando aunque no veas la salida. Todavía no es el momento de rendirse.',
  29: 'Hoy no hagas nada que no sea necesario. Descansar también resuelve.',
  30: 'Hoy negocia en vez de aceptar lo primero. Preguntar no cuesta nada.',
  31: 'Hoy espera con paciencia lo que prometieron. Presionar lo demora más.',
  32: 'Da hoy algo sin llevar la cuenta. Vuelve por otro lado.',
  33: 'Hoy ponte de acuerdo con alguien en algo chico. Lo grande viene después.',
  34: 'Hoy dile que sí a lo nuevo, aunque te dé algo de miedo.',
  35: 'Hoy sigue de pie aunque tengas el ánimo bajo. Con eso basta.',
  36: 'Hoy pelea por algo que valga. Y solo por eso.',
  37: 'Hoy muestra lo que sabes hacer. Guardarlo no lo mejora.',
  38: 'Hoy juega limpio, aunque puedas ganar de otro modo.',
  39: 'Di hoy una verdad que venías esquivando. Con cuidado, pero dila.',
  40: 'Hoy hazle caso a esa corazonada. Está avisando hace días.',
  41: 'Hoy habla con tu familia de eso que evitan. Empieza por el más fácil.',
  42: 'Insiste hoy una vez más. Es probable que sea la que cede.',
  43: 'Hoy permítete ilusionarte con algo, aunque después no salga.',
  44: 'Hoy escribe el plan que tienes en la cabeza. Escrito ocupa menos.',
  45: 'Hoy empieza de nuevo algo que dabas por perdido.',
  46: 'Hoy cuida lo que construiste. No hace falta que crezca todos los días.',
  47: 'Hoy espera lo mejor pero prepara lo otro. Las dos cosas juntas.',
  48: 'Hoy ve por esa meta con la cabeza fría. Estás más cerca de lo que crees.',
  49: 'Hoy tienes dos caminos. Elige el que puedas sostener, no el que brilla.',
  50: 'Hoy dile a alguien que lo entendiste. Se nota poco y vale mucho.',
  51: 'Hoy pide consejo a quien no tenga nada que ganar con tu decisión.',
  52: 'Guarda hoy algo por si acaso: tiempo, dinero, energía.',
  53: 'Hoy aguanta sin devolver el golpe. La respuesta puede esperar.',
  54: 'Hoy métete a fondo en algo hasta entenderlo de verdad.',
  55: 'Hoy quédate en silencio un rato. No todo pide respuesta.',
  56: 'Hoy sal a buscar eso que quieres. Nadie va a traerlo.',
  57: 'Hoy hay alguien jugando su propio juego. No te lo tomes personal.',
  58: 'Hoy ten claro para qué haces lo que haces. Si no aparece el motivo, revisa.',
  59: 'Hoy comparte una noticia que alguien está esperando.',
  60: 'Hoy avanza un paso, aunque sea chico. Sirve igual.',
  61: 'Hoy pasa un rato contigo mismo, sin pantalla ni ruido.',
  62: 'Hoy pon paños fríos donde hay pelea. Aunque no sea tu pelea.',
  63: 'Hoy acércate a alguien de verdad, no por compromiso.',
  64: 'Hoy entiende a alguien aunque no estés de acuerdo. No hace falta ceder.',
  65: 'Hoy déjate ayudar por quien sabe más. No es una deuda.',
  66: 'Hoy está bien dudar. No decidas todavía.',
  67: 'Hoy busca a un amigo. Sin motivo y sin plan.',
  68: 'Hoy pon algo donde después rinda: tiempo, atención o dinero.',
  69: 'Hoy sal a agarrar lo que aparezca. La suerte no toca dos veces.',
  70: 'Hoy tiende una mano. Alguien la necesita más de lo que dice.',
  71: 'Hoy afloja un poco lo que tienes agarrado. No se va a ir.',
  72: 'Hoy saca de tu vida algo que sobra. Una cosa concreta.',
  73: 'Hoy hazle caso al cuerpo antes que a la cabeza.',
  74: 'Hoy da sin esperar que vuelva. Vuelve, pero por otro lado.',
  75: 'Hoy reparte lo que hay sin mezquinar. Alcanza.',
  76: 'Hoy agradece algo en voz alta. Después sigue con el día.',
  77: 'Hoy va a haber lío. Igual algo bueno va a salir de ahí.',
  78: 'Hoy empieza de nuevo con lo que aprendiste. Las cicatrices también son ventaja.',
};
