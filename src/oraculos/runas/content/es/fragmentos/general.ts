import type { FragmentosDeTema } from '../../types';

// Tema "general" — el que usa el clasificador cuando la pregunta no
// encaja claramente en amor/trabajo/dinero. A propósito más neutro:
// sirve para cualquier área de la vida, no asume ningún contexto puntual.
export const general: FragmentosDeTema = {
  fehu: {
    normal: [
      'los recursos que ya tienes y que quizás no estás valorando del todo',
      'una base sólida que se construye cuidando lo que ya funciona',
      'la prosperidad que llega cuando se ordena lo que ya está en marcha',
    ],
    invertida: [
      'el miedo a que falte, más allá de si realmente falta algo',
      'una necesidad de retener que frena lo que podría fluir',
      'la inseguridad de no saber si lo que das vuelve de alguna forma',
    ],
  },
  uruz: {
    normal: [
      'una fuerza interior que tienes más presente de lo que crees',
      'el impulso necesario para animarte a algo que vienes postergando',
      'la vitalidad para encarar lo que se viene con más energía',
    ],
    invertida: [
      'el cansancio de sostener algo sin pedir ayuda',
      'una energía que se impone en vez de acompañar',
      'la dureza que aparece cuando en realidad hace falta ternura',
    ],
  },
  thurisaz: {
    normal: [
      'un límite que conviene poner antes de que la situación se desborde',
      'la pausa necesaria antes de reaccionar a algo que molestó',
      'la fuerza para defender algo que realmente importa',
    ],
    invertida: [
      'una reacción impulsiva que puede lastimar más de lo que protege',
      'un conflicto que se evita en vez de nombrarlo',
      'un muro que aleja en vez de proteger',
    ],
  },
  ansuz: {
    normal: [
      'una conversación honesta que viene postergándose',
      'la claridad para decir lo que realmente se piensa',
      'la escucha genuina de lo que alguien necesita decir',
    ],
    invertida: [
      'un malentendido que crece por no aclararlo a tiempo',
      'palabras dichas sin pensar que dejan marca',
      'un silencio que reemplaza algo que debería decirse',
    ],
  },
  raidho: {
    normal: [
      'un avance hacia una nueva etapa, aunque sea de a poco',
      'la disposición a moverte, aunque el camino cambie en el trayecto',
      'un recorrido que empieza a tomar forma',
    ],
    invertida: [
      'la sensación de estar detenido mientras todo parece avanzar',
      'un rumbo que se fue perdiendo en el día a día',
      'el desgaste de ir en una dirección que ya no convence',
    ],
  },
  kaunaz: {
    normal: [
      'una chispa de claridad o inspiración que merece atención',
      'una forma distinta de mirar algo que se sentía trabado',
      'el deseo que vuelve a encenderse con algo simple',
    ],
    invertida: [
      'una motivación que se apaga con la rutina',
      'un interés que se enfría sin que lo notes del todo',
      'la falta de ganas de intentar algo distinto por ahora',
    ],
  },
  gebo: {
    normal: [
      'un intercambio parejo entre lo que se da y lo que se recibe',
      'la generosidad que sostiene algo importante',
      'un gesto que se agradece sin esperar nada a cambio',
    ],
    invertida: [
      'una balanza que se inclina siempre para el mismo lado',
      'el desgaste de dar más de lo que se recibe',
      'algo que en el fondo espera una devolución',
    ],
  },
  wunju: {
    normal: [
      'una alegría simple que no necesita un motivo grande',
      'un momento de bienestar después de una etapa difícil',
      'la liviandad de disfrutar algo sin analizarlo de más',
    ],
    invertida: [
      'una felicidad forzada para no incomodar a nadie',
      'la calma aparente que tapa algo pendiente',
      'el esfuerzo de fingir que todo está bien',
    ],
  },
  hagalaz: {
    normal: [
      'un cambio brusco que, aunque incómodo, abre lugar a algo nuevo',
      'un quiebre necesario para soltar lo que ya no servía',
      'un sacudón que ordena las prioridades',
    ],
    invertida: [
      'una ruptura que llega sin demasiado aviso',
      'el desorden que deja un cambio inesperado',
      'la dificultad de aceptar algo que se cortó de golpe',
    ],
  },
  naudiz: {
    normal: [
      'la paciencia necesaria en un momento de carencia',
      'el esfuerzo que se sostiene aunque falten recursos',
      'la perseverancia frente a un obstáculo concreto',
    ],
    invertida: [
      'algo que se sostiene por miedo, no por convicción',
      'una necesidad que se confunde con otra cosa',
      'aguantar algo que ya podría empezar a resolverse',
    ],
  },
  isa: {
    normal: [
      'una pausa útil para pensar con la cabeza fría',
      'el tiempo justo antes de dar un paso importante',
      'la calma de esperar el momento adecuado',
    ],
    invertida: [
      'una distancia que se instala por miedo a avanzar',
      'la indecisión que congela algo pendiente',
      'el estancamiento de no animarse a moverse todavía',
    ],
  },
  jera: {
    normal: [
      'los frutos de un esfuerzo sostenido en el tiempo',
      'una recompensa que llega cuando es el momento justo',
      'el resultado de haber sido constante con algo',
    ],
    invertida: [
      'la impaciencia de querer resultados antes de tiempo',
      'la frustración de no ver todavía lo que se sembró',
      'un proceso que se corta antes de dar sus frutos',
    ],
  },
  eihwaz: {
    normal: [
      'más resistencia de la que sientes en este momento',
      'una fortaleza que aparece justo cuando más se necesita',
      'el coraje para atravesar algo difícil',
    ],
    invertida: [
      'una rigidez que no deja lugar para ceder',
      'un miedo que paraliza en vez de impulsar',
      'la resistencia a cambiar algo que ya no funciona',
    ],
  },
  perthu: {
    normal: [
      'una apertura a lo inesperado',
      'la confianza en que las cosas se van a acomodar',
      'un misterio que vale la pena dejar que se revele',
    ],
    invertida: [
      'la necesidad de controlar algo que no depende solo de ti',
      'la resistencia a soltar y dejar que las cosas fluyan',
      'la incomodidad de no saber cómo va a seguir algo',
    ],
  },
  algiz: {
    normal: [
      'un instinto que sabe algo antes de que lo razones del todo',
      'un cuidado sano que protege sin encerrar',
      'una intuición que avisa cuándo poner un límite',
    ],
    invertida: [
      'una guardia demasiado alta que aleja más de lo que protege',
      'el miedo a bajar las defensas aunque haga falta',
      'una desconfianza que pesa más de lo necesario',
    ],
  },
  sowulo: {
    normal: [
      'una claridad que vuelve después de una etapa confusa',
      'la confianza de ir por buen camino',
      'un logro que se siente compartido después de un esfuerzo sostenido',
    ],
    invertida: [
      'un optimismo forzado que tapa algo sin resolver',
      'la dificultad de aceptar una verdad incómoda',
      'mostrar entusiasmo de cara afuera mientras algo interno no cierra',
    ],
  },
  teiwaz: {
    normal: [
      'el coraje de sostener algo aunque sea difícil',
      'la honestidad incluso cuando cuesta decirla',
      'un compromiso que se defiende con convicción',
    ],
    invertida: [
      'un esfuerzo que solo hace una de las partes involucradas',
      'la cuenta silenciosa de quién cede más',
      'el desgaste de insistir en algo que ya no es parejo',
    ],
  },
  berkana: {
    normal: [
      'un comienzo fresco, aunque sea chico',
      'un crecimiento que se nota después de una etapa de cambios',
      'algo listo para dar un paso más',
    ],
    invertida: [
      'un crecimiento que se frena por miedo a lo nuevo',
      'las ganas de empezar de nuevo sin animarse todavía',
      'un comienzo que se posterga una y otra vez',
    ],
  },
  ehwaz: {
    normal: [
      'lo que avanza mejor cuando se hace de a dos',
      'una confianza mutua que sostiene decisiones importantes',
      'el avance hacia un mismo objetivo compartido',
    ],
    invertida: [
      'una sola persona sosteniendo algo que debería ser de a dos',
      'una confianza que necesita repararse después de algo puntual',
      'el desacople entre lo que cada uno espera del otro',
    ],
  },
  mannaz: {
    normal: [
      'el apoyo de las personas que tienes cerca',
      'una conexión real basada en la cooperación',
      'el sostén de una comunidad, aunque sea chica',
    ],
    invertida: [
      'el aislamiento de resolver todo sin pedir ayuda',
      'la dificultad de apoyarte en otros cuando hace falta',
      'una tendencia a cerrarte sobre ti mismo',
    ],
  },
  laguz: {
    normal: [
      'una intuición que sabe más de lo que la razón admite',
      'una emoción que conviene seguir de cerca',
      'la sabiduría de confiar en lo que el instinto dice',
    ],
    invertida: [
      'una emoción intensa que nubla la claridad',
      'el desborde de sentir todo a la vez',
      'confundir intensidad con certeza',
    ],
  },
  ingwaz: {
    normal: [
      'algo que se está gestando y todavía necesita su tiempo',
      'un potencial que conviene dejar madurar antes de actuar',
      'una semilla que ya está puesta y va a dar sus frutos',
    ],
    invertida: [
      'la impaciencia de querer forzar algo que no está listo',
      'las ganas de acelerar un proceso que pide calma',
      'la ansiedad de no saber esperar el momento justo',
    ],
  },
  dagaz: {
    normal: [
      'un punto de inflexión que cambia la forma de ver algo',
      'una claridad que llega después de una etapa confusa',
      'un comienzo que se nota casi de un día para el otro',
    ],
    invertida: [
      'la resistencia a soltar cómo eran antes las cosas',
      'la dificultad de aceptar que algo ya cambió',
      'aferrarse a una versión de algo que ya no está',
    ],
  },
  othala: {
    normal: [
      'los valores que sostienen las decisiones importantes',
      'una raíz que le da sentido a lo que viene',
      'el respeto por de dónde vienes',
    ],
    invertida: [
      'patrones que se repiten sin darse cuenta',
      'una expectativa heredada que pesa más de lo necesario',
      'la dificultad de soltar una forma vieja de hacer las cosas',
    ],
  },
};
