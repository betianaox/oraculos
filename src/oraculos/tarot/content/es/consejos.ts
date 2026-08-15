import type { CartaId } from '../types';

// Consejo del día por carta (español), las 78.
//
// POR QUÉ ESTABA A MEDIAS: durante mucho tiempo hubo dos cartas escritas —El
// Loco y El Sol— y las otras 76 caían al genérico. O sea que el 97% de los días
// la app decía "tómate un momento para mirar esta carta con calma", eligieras
// la carta que eligieras. El mismo hueco estaba en los tres idiomas.
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
export const CONSEJOS_ES: Partial<Record<CartaId, string>> = {
  // ── Arcanos Mayores ──────────────────────────────────────────────────────
  'mayor-00': 'Da hoy ese primer paso que vienes posponiendo. No hace falta ver el camino entero.',
  'mayor-01': 'Hoy usa lo que sabes hacer en vez de solo tenerlo. Empieza por lo más chico.',
  'mayor-02': 'Hoy escucha hacia adentro antes de preguntar afuera. Ya sabes más de lo que crees.',
  'mayor-03': 'Cuida hoy algo que está creciendo. Un poco de atención rinde más que un empujón.',
  'mayor-04': 'Pon hoy orden en una sola cosa. Elige la que más te desordena el resto.',
  'mayor-05': 'Hoy pregúntale a quien ya pasó por esto. No todo hay que aprenderlo solo.',
  'mayor-06': 'Hoy elige de verdad. Quedarte en el medio también es una decisión, y es la peor.',
  'mayor-07': 'Empuja hoy en una sola dirección. La fuerza repartida no mueve nada.',
  'mayor-08': 'Hoy resuelve con calma lo que te tienta resolver a los gritos.',
  'mayor-09': 'Apártate hoy un rato del ruido. La respuesta aparece cuando bajas el volumen.',
  'mayor-10': 'Hoy aprovecha lo que se presente sin analizarlo tanto. La rueda no espera.',
  'mayor-11': 'Hoy hazte cargo de tu parte. Ni más ni menos que la tuya.',
  'mayor-12': 'Hoy no fuerces. Quedarte quieto también es avanzar cuando toca esperar.',
  'mayor-13': 'Dale hoy un cierre a algo que ya terminó. Nombrarlo alcanza.',
  'mayor-14': 'Hoy busca el punto medio. Ni de más ni de menos, en lo que sea.',
  'mayor-15': 'Mira hoy de frente eso que te tiene enganchado. Solo mirarlo ya afloja.',
  'mayor-16': 'Si hoy algo se cae, no corras a apuntalarlo. Fíjate primero si valía la pena.',
  'mayor-17': 'Hoy confía un poco más de lo que te sale. Un día.',
  'mayor-18': 'Hoy no decidas con lo que imaginas. Espera a tener el dato.',
  'mayor-19': 'Disfruta hoy de lo simple y en voz alta. Es un día para celebrar sin apuro.',
  'mayor-20': 'Hoy haz cuentas con lo vivido y perdónate una. La que más te pese.',
  'mayor-21': 'Hoy date por satisfecho con algo. Ya está terminado, aunque no lo hayas festejado.',
  // ── Bastos ───────────────────────────────────────────────────────────────
  'bastos-as': 'Hoy enciende eso que tienes ganas de hacer. Con el primer fósforo alcanza.',
  'bastos-dos': 'Hoy mira un poco más lejos antes de moverte. Decide el rumbo, no el paso.',
  'bastos-tres': 'Hoy espera con confianza lo que sembraste. Ya está en camino.',
  'bastos-cuatro': 'Hoy celebra algo con los tuyos. No hace falta que sea grande.',
  'bastos-cinco': 'Si hoy hay barullo, pon orden en vez de sumar ruido.',
  'bastos-seis': 'Hoy muestra lo que lograste. Guardarlo no lo hace más grande.',
  'bastos-siete': 'Hoy defiende tu posición. No tienes que convencer a todos, solo sostenerte.',
  'bastos-ocho': 'Hoy manda ese mensaje que vienes demorando. Las cosas se aceleran solas después.',
  'bastos-nueve': 'Hoy aguanta un poco más. Estás más cerca del final de lo que sientes.',
  'bastos-diez': 'Suelta hoy una carga que no te tocaba. Empieza por la más obvia.',
  'bastos-sota': 'Hoy prueba algo nuevo sin comprometerte. Solo para ver qué pasa.',
  'bastos-caballo': 'Hoy lánzate, pero mira dónde caes. Las dos cosas juntas.',
  'bastos-reina': 'Hoy sostén lo tuyo con calor y firmeza. Se puede ser las dos cosas.',
  'bastos-rey': 'Hoy lidera con el ejemplo. Alguien está mirando cómo lo haces.',
  // ── Copas ────────────────────────────────────────────────────────────────
  'copas-as': 'Hoy abre el corazón un poquito. No hace falta que sea de par en par.',
  'copas-dos': 'Hoy encuéntrate con alguien de verdad. Sin pantalla en el medio.',
  'copas-tres': 'Hoy brinda con los tuyos por algo. Aunque sea chico.',
  'copas-cuatro': 'Hoy levanta la vista. Estás pasando por alto algo que tienes a mano.',
  'copas-cinco': 'Hoy mira lo que quedó en pie, no solo lo que se cayó.',
  'copas-seis': 'Hoy llama a alguien de antes. La ternura vieja también sirve.',
  'copas-siete': 'Hoy descarta dos opciones de las que te dan vueltas. Quédate con una.',
  'copas-ocho': 'Hoy déjate llevar por eso que sientes que te llama, aunque no puedas explicarlo.',
  'copas-nueve': 'Hoy date un gusto que ya te ganaste. Sin justificarlo.',
  'copas-diez': 'Hoy dile a los tuyos lo que valen. Con esas palabras.',
  'copas-sota': 'Hoy hazle caso a esa emoción nueva. Todavía no hace falta entenderla.',
  'copas-caballo': 'Hoy propón algo que venías imaginando. El peor final es un no.',
  'copas-reina': 'Hoy escucha a alguien sin querer arreglarle nada.',
  'copas-rey': 'Hoy siente todo lo que tengas que sentir, y aun así decide con la cabeza.',
  // ── Espadas ──────────────────────────────────────────────────────────────
  'espadas-as': 'Hoy di la verdad de una vez. Corta más rápido de lo que duele.',
  'espadas-dos': 'Hoy quítate la venda. Elegir a ciegas no es elegir.',
  'espadas-tres': 'Hoy deja que duela lo que duele. Taparlo lo alarga.',
  'espadas-cuatro': 'Hoy para. En serio: no hagas nada que pueda esperar a mañana.',
  'espadas-cinco': 'Hoy no busques ganar la discusión. Fíjate cuánto cuesta ganarla.',
  'espadas-seis': 'Hoy aléjate un poco de lo que te desgasta. No hace falta explicar por qué.',
  'espadas-siete': 'Hoy hazlo de frente, aunque el atajo sea más cómodo.',
  'espadas-ocho': 'Hoy fíjate qué límite te pusiste tú. Suele haber una puerta abierta.',
  'espadas-nueve': 'Si hoy el miedo aprieta, escríbelo. En papel siempre es más chico.',
  'espadas-diez': 'Hoy acepta que tocaste fondo. Desde ahí solo se sube.',
  'espadas-sota': 'Hoy pregunta en vez de suponer. Una pregunta te ahorra una semana.',
  'espadas-caballo': 'Hoy ve de frente, pero cuenta hasta tres antes de hablar.',
  'espadas-reina': 'Hoy sé claro sin ser filoso. Se puede decir todo sin cortar a nadie.',
  'espadas-rey': 'Hoy decide con la regla, no con el humor del día.',
  // ── Oros ─────────────────────────────────────────────────────────────────
  'oros-as': 'Hoy da el primer paso concreto de esa idea. Uno solo, pero real.',
  'oros-dos': 'Hoy suelta una de las cosas que estás haciendo malabares. No entran todas.',
  'oros-tres': 'Hoy pide ayuda o dala. Esto no se hace de a uno.',
  'oros-cuatro': 'Hoy cuida lo que tienes, pero no lo aprietes tanto.',
  'oros-cinco': 'Si hoy te falta algo, pídelo. Hay más ayuda cerca de la que ves.',
  'oros-seis': 'Hoy fíjate si estás dando y recibiendo parejo. Ajusta el lado que falle.',
  'oros-siete': 'Hoy ten paciencia con lo que sembraste. Todavía está madurando.',
  'oros-ocho': 'Hoy hazlo bien, no rápido. Practicar hoy se nota en un mes.',
  'oros-nueve': 'Hoy disfruta de lo que conseguiste por tu cuenta. Te lo ganaste.',
  'oros-diez': 'Hoy piensa en largo. Lo que decidas hoy va a durar más que hoy.',
  'oros-sota': 'Hoy aprende algo nuevo, aunque sea diez minutos.',
  'oros-caballo': 'Hoy avanza un paso, aunque sea aburrido. Los aburridos son los que llegan.',
  'oros-reina': 'Hoy cuida lo tuyo con los pies en la tierra. Y cuídate a ti también.',
  'oros-rey': 'Hoy comparte algo de lo que te sobra. Tienes más de lo que crees.',
};

// Último recurso, para una carta que todavía no tenga su consejo escrito. Con
// las 78 completas ya no debería dispararse nunca.
export const CONSEJO_GENERICO_ES =
  'Tómate un momento para mirar esta carta con calma y preguntarte qué te está mostrando hoy.';
