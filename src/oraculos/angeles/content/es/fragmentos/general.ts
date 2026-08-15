// Fragmentos del tema 'general' del oráculo de Ángeles (español), las 78 cartas.
//
// POR QUÉ EXISTE: Ángeles tenía escritos amor, trabajo y dinero, pero no
// general. Cuando alguien preguntaba por su momento —el tema más elegido— la
// lectura caía a las palabras clave de la ficha y salía "confusión y ideas
// equivocadas" o "traición y enemigos": dos palabras sueltas, sin nada a lo que
// agarrarse, que es exactamente lo que reprocharon los testers. Con esto, cada
// carta dice una frase que se puede leer.
//
// Registro (el mismo de todo el oráculo, ver es/bancos.ts): claro antes que
// elevado, místico sobrio. Cláusulas cortas que entran DENTRO de una oración,
// nunca definiciones de la carta.
//
// SALUD: el mazo trae varias cartas de curación, enfermedad y "buena salud".
// La salud queda afuera de la app por riesgo legal, así que acá esas cartas se
// leen por el lado del ánimo, el descanso y el cuidado de uno mismo. Nunca se
// anuncia ni se insinúa una enfermedad, una mejoría ni un embarazo.
//
// LAS OCHO SIN REVÉS (13, 14, 23, 26, 32, 39, 44, 77): el mazo declara que no
// tienen lectura invertida, así que acá no se les inventa una. El motor usa su
// lectura derecha cuando salen del revés.

import type { FragmentosDeTemaAngel } from './tipos';

export const FRAGMENTOS_GENERAL_ANGELES_ES: FragmentosDeTemaAngel = {
  1: {
    normal: ['un cariño que no pide nada a cambio', 'la gente que te quiere bien', 'dar sin llevar la cuenta'],
    invertida: ['un cariño que se enfrió', 'cerrarse por miedo a que duela', 'dar de más y quedarse vacío'],
  },
  2: {
    normal: ['algo que empieza a aliviarse', 'una herida que va cerrando', 'el cuidado que necesitabas y llegó'],
    invertida: ['un alivio que se demora', 'algo que no termina de cerrar', 'seguir cargando lo que ya podría soltarse'],
  },
  3: {
    normal: ['una idea que pide salir', 'algo hecho con las manos y con ganas', 'la inspiración que aparece sin avisar'],
    invertida: ['las ganas de crear que no encuentran dónde', 'un impulso que se apagó antes de tiempo', 'quedarse sin nada que decir'],
  },
  4: {
    normal: ['una charla que acomoda las cosas', 'alguien que media y baja la tensión', 'un acuerdo que deja a los dos conformes'],
    invertida: ['una conversación que no llega', 'un consejo que enredó más de lo que aclaró', 'nadie poniendo paños fríos'],
  },
  5: {
    normal: ['alguien que te cuida las espaldas', 'plantarse por lo que está bien', 'la firmeza de no negociar ciertas cosas'],
    invertida: ['una firmeza que se volvió intolerancia', 'quedarse sin quien te respalde', 'principios usados para lastimar'],
  },
  6: {
    normal: ['la calma de quien ya vio pasar esto', 'una experiencia que ahora sirve', 'saber esperar el momento'],
    invertida: ['una idea equivocada que se sostiene hace rato', 'la terquedad de no aprender lo obvio', 'confiar en algo viejo que ya no sirve'],
  },
  7: {
    normal: ['tener claro qué querés y no soltarlo', 'no dejarse llevar por el arrebato', 'el temple de sostener la posición'],
    invertida: ['dejarse llevar por el impulso del momento', 'una convicción que se cae al primer empujón', 'ceder en lo que no había que ceder'],
  },
  8: {
    normal: ['una idea grande que recién empieza', 'ver algo que otros no vieron', 'ganas de hacerlo distinto'],
    invertida: ['una idea grande que se quedó en idea', 'querer innovar sin tener con qué', 'ideas que no llegan a nada concreto'],
  },
  9: {
    normal: ['un cambio que ya se está gestando', 'una manera nueva de mirar lo mismo', 'la cabeza funcionando a full'],
    invertida: ['un cambio que asusta y se frena', 'demasiadas vueltas para algo simple', 'la cabeza que no para y no resuelve'],
  },
  10: {
    normal: ['tomar el mando de algo tuyo', 'alguien que ordena y todos siguen', 'hacerse cargo de verdad'],
    invertida: ['un mando que se ejerce mal', 'querer controlar lo que no te toca', 'perder autoridad sobre lo propio'],
  },
  11: {
    normal: ['unas ganas que se contagian', 'ponerle el cuerpo a algo', 'un entusiasmo que empuja a todos'],
    invertida: ['un entusiasmo que se apagó de golpe', 'ponerle fuego a lo que pedía calma', 'quedarse sin combustible a mitad de camino'],
  },
  12: {
    normal: ['una sensibilidad que se nota y suma', 'nobleza para hacer las cosas', 'la voluntad de sostener lo que empezaste'],
    invertida: ['tomarse todo demasiado a pecho', 'una nobleza que otros aprovechan', 'quedarse sin voluntad justo ahora'],
  },
  13: {
    normal: ['una ayuda que llega cuando parecía imposible', 'alguien que hace más de lo que le toca', 'un gesto noble sin explicación'],
  },
  14: {
    normal: ['la familia cuidando lo suyo', 'estar a resguardo', 'alguien que te cubre sin que lo pidas'],
  },
  15: {
    normal: ['animarse a algo que da miedo', 'una decisión tomada de frente', 'el coraje de bancar la consecuencia'],
    invertida: ['no animarse justo cuando toca', 'un coraje que se fue en palabras', 'decidir y arrepentirse enseguida'],
  },
  16: {
    normal: ['dos partes que vuelven a hablarse', 'un punto medio que a nadie deja mal', 'algo que se acomoda solo'],
    invertida: ['una ambigüedad que ya cansa', 'quedar en el medio sin definir nada', 'una reconciliación a medias'],
  },
  17: {
    normal: ['distinguir bien lo que está bien de lo que conviene', 'una mano que llega en el momento justo', 'saber medir'],
    invertida: ['confundir lo que conviene con lo que corresponde', 'una ayuda que nunca apareció', 'perder el criterio en el apuro'],
  },
  18: {
    normal: ['una costumbre que hace daño de a poco', 'un desánimo que viene de arrastre', 'errores que se repiten'],
    invertida: ['empezar a salir de un mal hábito', 'levantar cabeza después de un tiempo largo', 'darse cuenta del error a tiempo'],
  },
  19: {
    normal: ['un brillo propio que se nota', 'la capacidad de convencer a cualquiera', 'algo tuyo que atrae sin esfuerzo'],
    invertida: ['usar el encanto para conseguir algo', 'un brillo que tapa lo que no está', 'querer gustar a costa de lo tuyo'],
  },
  20: {
    normal: ['una guía que aparece justo a tiempo', 'entender algo que venías dando vueltas', 'la calma de quien sabe'],
    invertida: ['perder el norte por un rato', 'un consejo espiritual que no aterriza', 'saber mucho y no aplicar nada'],
  },
  21: {
    normal: ['un amigo que está sin pedir nada', 'sentirse comprendido', 'gente que suma alrededor'],
    invertida: ['un apoyo que falló cuando hacía falta', 'sentir que nadie te entiende del todo', 'una amistad que se enfrió'],
  },
  22: {
    normal: ['una noticia que llega y ordena', 'poder decir por fin lo que pensabas', 'entenderse sin vueltas'],
    invertida: ['un mensaje que se malinterpretó', 'algo que no se dijo a tiempo', 'hablar mucho y no comunicar nada'],
  },
  23: {
    normal: ['una etapa que se cierra y otra que empieza', 'algo que te queda de lo que pasó', 'un relevo que ya estaba anunciado'],
  },
  24: {
    normal: ['algo que se revela y cambia el panorama', 'ideales nuevos que empujan', 'recibir algo que venía de atrás'],
    invertida: ['una revelación que llegó tarde', 'ideales que se cayeron solos', 'algo que se esperaba y no llegó'],
  },
  25: {
    normal: ['una mejora que se empieza a notar', 'el cuidado que estabas necesitando', 'algo que empieza a repararse'],
    invertida: ['una recuperación que va más lenta de lo esperado', 'descuidarse justo cuando había que cuidarse', 'un alivio que todavía no llega'],
  },
  26: {
    normal: ['aprender de un error que salió caro', 'el precio de algo que se hizo mal', 'darse cuenta a tiempo de lo que costó'],
  },
  27: {
    normal: ['estar más cuidado de lo que creés', 'alguien vigilando que nada se rompa', 'un resguardo que se nota'],
    invertida: ['bajar la guardia justo ahora', 'quedar más expuesto de lo que conviene', 'una protección que se aflojó'],
  },
  28: {
    normal: ['una verdad que sale y ordena todo', 'un cambio importante que ya empezó', 'que las cosas se pongan en su lugar'],
    invertida: ['una verdad que se sigue tapando', 'un cambio que se resiste', 'una injusticia que todavía no se corrige'],
  },
  29: {
    normal: ['una corazonada que conviene escuchar', 'algo que sabés sin poder explicarlo', 'guardarse la información por ahora'],
    invertida: ['ignorar lo que la intuición viene marcando', 'un secreto que pesa', 'confundir el miedo con una corazonada'],
  },
  30: {
    normal: ['una época generosa, de las que se agradecen', 'armonía en lo de todos los días', 'algo que da fruto sin forzarlo'],
    invertida: ['una armonía que se rompió', 'la abundancia que se dispersó sin darte cuenta', 'algo que no termina de dar fruto'],
  },
  31: {
    normal: ['una fuerza que se nota al entrar a un lugar', 'liderar sin tener que imponerse', 'un brillo que arrastra a otros'],
    invertida: ['una fuerza que se usó para aplastar', 'quedarse sin brillo por cansancio', 'liderar sin que nadie quiera seguirte'],
  },
  32: {
    normal: ['una orden clara que ordena todo', 'alguien que conduce con criterio', 'un mensaje justo, sin vueltas'],
  },
  33: {
    normal: ['un consejo que equilibra', 'hacer las cosas como corresponde', 'una ayuda que llega de arriba'],
    invertida: ['un consejo que desequilibró más', 'perder el eje moral en el apuro', 'quedarse sin quien te oriente'],
  },
  34: {
    normal: ['ganar algo que costó', 'dominar una situación que te dominaba', 'algo que por fin se revela'],
    invertida: ['un triunfo que se escapó de las manos', 'perder el control de algo tuyo', 'una revelación que decepcionó'],
  },
  35: {
    normal: ['algo que se entiende recién ahora', 'un saber que no se enseña', 'una búsqueda que empieza a dar respuestas'],
    invertida: ['una búsqueda que no lleva a ningún lado', 'perderse en vueltas sin salida', 'saber mucho y entender poco'],
  },
  36: {
    normal: ['algo grande que te excede y te empuja', 'un talento que se nota', 'estar conectado con algo más'],
    invertida: ['sentirse chico frente a algo grande', 'un talento que no encuentra su lugar', 'perder la conexión con lo que te sostenía'],
  },
  37: {
    normal: ['algo nuevo que entra y mueve todo', 'un viaje o un cambio de aire', 'ganas de que algo cambie'],
    invertida: ['un cambio que se frenó', 'lo nuevo que asusta más de lo que atrae', 'moverse por moverse'],
  },
  38: {
    normal: ['un corte de golpe, sin aviso', 'algo que termina de raíz', 'un cambio que no se negocia'],
    invertida: ['un final que se viene demorando', 'aferrarse a algo que ya terminó', 'un cambio a medias que no cierra'],
  },
  39: {
    normal: ['un terreno en disputa', 'alguien jugando en contra', 'una pelea que ya está declarada'],
  },
  40: {
    normal: ['un amor que llega', 'algo estable que se está formando', 'la seguridad de sentirse elegido'],
    invertida: ['un amor que se demora', 'una estabilidad que todavía no se siente', 'dudar de un lugar que ya es tuyo'],
  },
  41: {
    normal: ['una holgura que se disfruta', 'una racha próspera', 'que alcance y sobre'],
    invertida: ['una holgura que duró poco', 'gastar la buena racha sin aprovecharla', 'que alcance justo y nada más'],
  },
  42: {
    normal: ['algo que nace y cambia todo', 'un comienzo con buen augurio', 'una vida nueva empezando'],
    invertida: ['un comienzo que se demora', 'algo que quiere nacer y no encuentra el momento', 'un arranque que costó más de lo previsto'],
  },
  43: {
    normal: ['una recompensa que llega', 'un lugar nuevo donde probarse', 'subir un escalón'],
    invertida: ['una recompensa que no llegó', 'un ascenso que se lo dieron a otro', 'esperar un reconocimiento que no viene'],
  },
  44: {
    normal: ['algo que se hace por gusto y nada más', 'un rato de diversión bien merecido', 'meterse en un lío por curiosidad'],
  },
  45: {
    normal: ['unos celos que no se dicen', 'una inseguridad que aprieta', 'la angustia de sentir que se te escapa'],
    invertida: ['soltar unos celos que ya cansaban', 'entender que la inseguridad era tuya', 'una angustia que empieza a aflojar'],
  },
  46: {
    normal: ['una unión que se formaliza', 'una pasión que se convierte en algo', 'estar con alguien de verdad'],
    invertida: ['una unión que se enfrió', 'una pasión sin nada detrás', 'un compromiso que no termina de darse'],
  },
  47: {
    normal: ['el sentido común mandando', 'ver venir algo y prepararse', 'la serenidad de no apurarse'],
    invertida: ['perder el sentido común en el apuro', 'no ver venir algo que estaba a la vista', 'decidir sin pensar'],
  },
  48: {
    normal: ['una paz que se ganó', 'días buenos, de los que se disfrutan', 'sentirse entero'],
    invertida: ['una paz que se rompió', 'estar bien y no poder disfrutarlo', 'algo que empaña un buen momento'],
  },
  49: {
    normal: ['darse cuenta de algo que cambia el rumbo', 'una etapa nueva que empieza firme', 'llegar a un lugar estable'],
    invertida: ['una etapa que no termina de arrancar', 'la conciencia que llega tarde', 'una estabilidad que se tambalea'],
  },
  50: {
    normal: ['un momento luminoso, de los que se recuerdan', 'algo que sale bien y se ve', 'estar en tu mejor forma'],
    invertida: ['una luz que se apagó por un rato', 'un logro que quedó opaco', 'sentirse menos de lo que se es'],
  },
  51: {
    normal: ['una imaginación que trabaja de más', 'sensibilidad a flor de piel', 'una inspiración que viene de noche'],
    invertida: ['los nervios ganándole a la razón', 'imaginar cosas que no pasaron', 'una sensibilidad que hoy pesa'],
  },
  52: {
    normal: ['un desgaste que se viene notando', 'el ánimo por el piso', 'el esfuerzo de levantarse igual'],
    invertida: ['empezar a recuperar el ánimo', 'un cansancio que empieza a ceder', 'salir de a poco de un bajón'],
  },
  53: {
    normal: ['un consejo que da en el clavo', 'que las cuentas queden parejas', 'un balance justo'],
    invertida: ['un consejo que salió mal', 'una balanza que no se empareja', 'quedar en desventaja sin motivo'],
  },
  54: {
    normal: ['una sensibilidad que protege', 'un afecto que cuida de lejos', 'alguien velando por lo tuyo'],
    invertida: ['una sensibilidad que hoy expone de más', 'sentirse desprotegido', 'una amistad que no estuvo'],
  },
  55: {
    normal: ['una esperanza que se sostiene', 'algo que inspira y da ganas', 'una armonía que se está armando'],
    invertida: ['una esperanza que se fue apagando', 'perder la inspiración', 'una armonía que no llega'],
  },
  56: {
    normal: ['un amor que se acerca', 'alguien que da el primer paso', 'una propuesta que llega'],
    invertida: ['un acercamiento que se enfrió', 'una propuesta que no terminó de hacerse', 'alguien que se corre justo cuando avanzabas'],
  },
  57: {
    normal: ['el comienzo de algo con alguien', 'estar enamorado y que se note', 'una relación que arranca en serio'],
    invertida: ['un comienzo que no termina de arrancar', 'un enamoramiento que se apagó solo', 'algo que quedó en la nada'],
  },
  58: {
    normal: ['envidia alrededor, aunque no se diga', 'alguien que no celebra lo tuyo', 'un despecho que se nota'],
    invertida: ['dejar de compararse', 'soltar un rencor que solo te pesaba a vos', 'entender que la envidia no era tuya'],
  },
  59: {
    normal: ['resignar algo por otra cosa', 'una transición incómoda pero necesaria', 'no saber todavía qué elegir'],
    invertida: ['no querer resignar nada', 'una transición que se estiró de más', 'una indecisión que ya hace daño'],
  },
  60: {
    normal: ['los hijos, o lo que se cuida como tal', 'algo tuyo que crece y te sobrevive', 'lo que dejás plantado'],
    invertida: ['una preocupación por los que dependen de vos', 'algo que cuidás y no responde', 'sentir que no alcanzás para todos'],
  },
  61: {
    normal: ['entender algo más grande que vos', 'una evolución que se siente', 'estar en otro lugar que hace un año'],
    invertida: ['un crecimiento que se frenó', 'quedarse en el mismo lugar de siempre', 'buscar arriba lo que estaba al lado'],
  },
  62: {
    normal: ['el equilibrio de quien no se altera', 'esperanza con los pies en la tierra', 'algo que se ve bien y además está bien'],
    invertida: ['un equilibrio que se rompió', 'esperar sin fundamento', 'quedarse con la forma y perder el fondo'],
  },
  63: {
    normal: ['la inteligencia puesta donde hace falta', 'una paz que se sostiene con criterio', 'tener con qué y saber usarlo'],
    invertida: ['la inteligencia usada para imponerse', 'una paz aparente que no lo es', 'poder que pesa más de lo que ayuda'],
  },
  64: {
    normal: ['un deseo que no se disimula', 'una atracción fuerte', 'ganas de aventura'],
    invertida: ['un deseo que se apagó', 'una aventura que salió cara', 'confundir atracción con otra cosa'],
  },
  65: {
    normal: ['una ambición que empuja', 'olfato para donde está lo bueno', 'la astucia de moverse a tiempo'],
    invertida: ['una ambición que se comió el resto', 'una astucia usada para el lado equivocado', 'querer de más y perder lo que había'],
  },
  66: {
    normal: ['energía de sobra para lo que venga', 'tenacidad que termina rindiendo', 'algo que prospera de verdad'],
    invertida: ['quedarse sin energía a mitad de camino', 'insistir donde ya no rinde', 'un negocio que no termina de arrancar'],
  },
  67: {
    normal: ['un poder que se usa para lo propio nomás', 'alguien que solo mira su parte', 'un deseo que atropella todo'],
    invertida: ['un abuso que empieza a caerse', 'ver de frente el egoísmo de alguien', 'salir de la órbita de quien te usaba'],
  },
  68: {
    normal: ['dejarse llevar por lo que venga', 'trabas que aparecen una atrás de otra', 'una inseguridad que frena'],
    invertida: ['empezar a retomar las riendas', 'una traba que por fin cede', 'animarse después de mucho dudar'],
  },
  69: {
    normal: ['una tentación que ronda', 'una costumbre que hace daño', 'algo que se hace de noche y se lamenta de día'],
    invertida: ['soltar una costumbre que pesaba', 'resistir una tentación', 'salir de algo que te estaba comiendo'],
  },
  70: {
    normal: ['una hostilidad que se siente en el aire', 'alguien que juega en contra sin decirlo', 'un clima adverso'],
    invertida: ['una hostilidad que empieza a bajar', 'entender de dónde venía el ataque', 'salir de un clima que enfermaba el ánimo'],
  },
  71: {
    normal: ['un odio que no se justifica', 'un clima inestable que no deja asentarse', 'alguien deseando que te vaya mal'],
    invertida: ['una inestabilidad que empieza a calmarse', 'soltar un rencor viejo', 'alejarse de quien te hacía mal'],
  },
  72: {
    normal: ['una avaricia que se nota', 'alguien que quiere sacar ventaja', 'un negocio que no es limpio'],
    invertida: ['descubrir a tiempo una jugada torcida', 'soltar un apego que salía caro', 'salir de un trato que no cerraba'],
  },
  73: {
    normal: ['una demora que no depende de vos', 'alguien con malas intenciones cerca', 'un camino que se traba'],
    invertida: ['una demora que empieza a destrabarse', 'ver venir la mala intención', 'un obstáculo que por fin cede'],
  },
  74: {
    normal: ['una ansiedad que no afloja', 'los nervios metidos en todo', 'una preocupación que desgasta'],
    invertida: ['una ansiedad que empieza a bajar', 'volver a dormir tranquilo', 'sacarse un peso de encima'],
  },
  75: {
    normal: ['un orgullo que no deja ceder', 'el amor propio herido', 'una soberbia que aleja gente'],
    invertida: ['bajar el orgullo y arreglar algo', 'reconocer un error', 'una herida al amor propio que empieza a cerrar'],
  },
  76: {
    normal: ['una ruptura que llega de golpe', 'peleas que ya son costumbre', 'algo que se rompe sin aviso'],
    invertida: ['una pelea que empieza a apagarse', 'algo roto que se puede arreglar', 'una tregua después de mucho ruido'],
  },
  77: {
    normal: ['una mentira que hace daño', 'alguien que usa la astucia para lastimar', 'un maltrato que se disfraza de otra cosa'],
  },
  78: {
    normal: ['alguien que manipula sin que se note', 'una seducción con segunda intención', 'que te lleven a donde no querías ir'],
    invertida: ['darse cuenta de que te estaban manejando', 'salir del hechizo de alguien', 'recuperar la decisión sobre lo propio'],
  },
};
