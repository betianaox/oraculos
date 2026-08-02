import type { FragmentosDeTema } from '../../types';

// Piloto — tema "amor". Cada fragmento es una frase corta pensada para
// encajar después de un verbo como "trae" / "aporta" / "señala" en los
// conectores (ej: "Fehu trae la generosidad como cimiento..."). La versión
// invertida es el mismo símbolo visto desde su costado bloqueado o
// defensivo, no un significado "malo" — la lectura sigue siendo constructiva.
//
// El vocabulario para nombrar "lo que hay entre las dos personas" se varía
// a propósito (relación, pareja, "esto", "lo que sea que esté pasando"...)
// para que la oración combinada no repita siempre la misma palabra — pero
// sin asumir que ya existe una relación armada: mucha gente consulta por
// algo que todavía no pasó, un interés no correspondido o alguien que ni
// conoció. Evitar frases tipo "lo que construyeron juntos" o "esta historia"
// que solo tienen sentido si ya hay un vínculo en marcha.
export const amor: FragmentosDeTema = {
  fehu: {
    normal: [
      'la generosidad como cimiento para que esto crezca',
      'recursos afectivos que rinden más cuando se comparten',
      'la prosperidad que llega cuando el cariño se pone en movimiento',
    ],
    invertida: [
      'el miedo a dar de más y quedarse con las manos vacías',
      'una tacañería emocional que frena lo que podría fluir',
      'la inseguridad de no saber si lo que se da vuelve',
    ],
  },
  uruz: {
    normal: [
      'la vitalidad para animarse a dar el primer paso',
      'una fuerza interior que ayuda a sostener esto en los momentos difíciles',
      'el coraje para mostrarse tal cual se es',
    ],
    invertida: [
      'una energía que se impone en vez de acompañar',
      'el cansancio de sostener todo sin pedir ayuda',
      'la dureza que reemplaza a la ternura cuando hace falta',
    ],
  },
  thurisaz: {
    normal: [
      'límites sanos que protegen sin cerrar la puerta',
      'la pausa necesaria antes de reaccionar en una discusión',
      'la fuerza para defender lo que de verdad importa acá',
    ],
    invertida: [
      'una reacción impulsiva que lastima más de lo que protege',
      'un muro que aleja en vez de resguardar',
      'el conflicto que se evita en lugar de conversarlo',
    ],
  },
  ansuz: {
    normal: [
      'una conversación honesta que estaba pendiente',
      'la claridad para decir lo que realmente se siente',
      'la escucha genuina de lo que el otro necesita',
    ],
    invertida: [
      'un malentendido que crece por no hablarlo a tiempo',
      'palabras dichas sin pensar que dejan marca',
      'el silencio que reemplaza a lo que debería decirse',
    ],
  },
  raidho: {
    normal: [
      'esto avanzando hacia una nueva etapa',
      'la disposición a dejar que esto crezca, aunque el camino cambie',
      'un recorrido que empieza a tomar forma',
    ],
    invertida: [
      'la sensación de estar detenidos mientras el otro avanza',
      'un rumbo que se fue perdiendo en el día a día',
      'el desgaste de caminar en direcciones distintas',
    ],
  },
  kaunaz: {
    normal: [
      'la chispa que renueva las ganas de estar juntos',
      'una forma creativa de sorprender al otro',
      'el deseo que vuelve a encenderse con pequeños gestos',
    ],
    invertida: [
      'una llama que se apaga con la rutina',
      'el interés que se enfría sin que nadie lo note',
      'la falta de ganas de intentar algo distinto',
    ],
  },
  gebo: {
    normal: [
      'un intercambio parejo entre lo que se da y se recibe',
      'la generosidad mutua como base de lo que sea que esté pasando',
      'el gesto que se agradece sin esperar nada a cambio',
    ],
    invertida: [
      'una balanza que se inclina siempre para el mismo lado',
      'el desgaste de dar mucho más de lo que se recibe',
      'un regalo que en el fondo espera algo a cambio',
    ],
  },
  wunju: {
    normal: [
      'la alegría compartida después de un momento difícil',
      'una liviandad que vuelve después de la tormenta',
      'el bienestar de sentirse en armonía con el otro',
    ],
    invertida: [
      'una felicidad forzada para evitar hablar de lo que duele',
      'la calma aparente que tapa un tema pendiente',
      'el esfuerzo de fingir que todo está bien',
    ],
  },
  hagalaz: {
    normal: [
      'una crisis que termina abriendo paso a algo más honesto',
      'el quiebre necesario para soltar lo que ya no servía',
      'un sacudón que ordena las prioridades en el amor',
    ],
    invertida: [
      'una ruptura que llega sin demasiado aviso',
      'el desorden que deja un cambio brusco e inesperado',
      'la dificultad de aceptar algo que se cortó de golpe',
    ],
  },
  naudiz: {
    normal: [
      'la paciencia para sostener esto en un momento de carencia',
      'el esfuerzo que se sigue poniendo aunque falten recursos',
      'la perseverancia frente a un obstáculo concreto',
    ],
    invertida: [
      'quedarse por miedo a estar solo, no por deseo',
      'la necesidad que se confunde con el amor',
      'aguantar una carencia que ya debería resolverse',
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
      'la indecisión que congela una decisión pendiente',
      'el estancamiento de no animarse a moverse',
    ],
  },
  jera: {
    normal: [
      'los frutos de un esfuerzo sostenido en el tiempo',
      'una recompensa que llega cuando es el momento justo',
      'el resultado de haber sido constante con esto',
    ],
    invertida: [
      'la impaciencia de querer resultados antes de tiempo',
      'la frustración de no ver todavía lo que se sembró',
      'un ciclo que se corta antes de dar sus frutos',
    ],
  },
  eihwaz: {
    normal: [
      'la resistencia para atravesar una etapa difícil',
      'el miedo al compromiso transformado en un paso adelante',
      'la fortaleza que aparece justo cuando más se necesita',
    ],
    invertida: [
      'una rigidez que no deja lugar para ceder',
      'el miedo que paraliza en vez de impulsar',
      'la resistencia a cambiar algo que ya no funciona',
    ],
  },
  perthu: {
    normal: [
      'la apertura a lo inesperado que trae esto',
      'la confianza en cómo se van a acomodar las cosas',
      'un misterio que vale la pena dejar que se revele',
    ],
    invertida: [
      'la necesidad de controlar algo que no depende de una sola persona',
      'la resistencia a soltar y dejar que las cosas fluyan',
      'la incomodidad de no saber cómo va a seguir esto',
    ],
  },
  algiz: {
    normal: [
      'el instinto que indica en quién confiar',
      'un cuidado sano que protege sin encerrar',
      'la intuición que avisa cuándo poner un límite',
    ],
    invertida: [
      'una guardia demasiado alta que no deja acercarse a nadie',
      'el miedo a bajar las defensas aunque haga falta',
      'una desconfianza que aleja más de lo que protege',
    ],
  },
  sowulo: {
    normal: [
      'la claridad que vuelve después de una etapa confusa',
      'la confianza de saber bien qué se quiere en el amor',
      'una sensación de haber remado para el mismo lado',
    ],
    invertida: [
      'un optimismo forzado que tapa algo que falta resolver',
      'la dificultad de aceptar una verdad incómoda',
      'brillar de cara afuera mientras algo interno no cierra',
    ],
  },
  teiwaz: {
    normal: [
      'el coraje de sostener esto aunque sea difícil',
      'la honestidad incluso cuando cuesta decir lo que se siente',
      'un compromiso que se defiende con convicción',
    ],
    invertida: [
      'un sacrificio que solo hace una de las dos partes',
      'la cuenta silenciosa de quién cede más',
      'el desgaste de insistir en algo que ya no es parejo',
    ],
  },
  berkana: {
    normal: [
      'un comienzo fresco',
      'el crecimiento que se nota después de una etapa de cambios',
      'la fertilidad de algo que está listo para dar un paso más',
    ],
    invertida: [
      'un crecimiento que se frena por miedo a lo nuevo',
      'las ganas de volver a empezar sin animarse todavía',
      'un comienzo que se posterga una y otra vez',
    ],
  },
  ehwaz: {
    normal: [
      'el trabajo en equipo que lleva esto hacia adelante',
      'una confianza mutua que sostiene las decisiones importantes',
      'el avance de a dos hacia el mismo objetivo',
    ],
    invertida: [
      'una sola persona tirando mientras la otra frena',
      'la confianza que necesita repararse después de algo puntual',
      'el desacople entre lo que cada uno espera del otro',
    ],
  },
  mannaz: {
    normal: [
      'el apoyo genuino de las personas alrededor',
      'una conexión real basada en la cooperación mutua',
      'el sostén de una comunidad que acompaña en el amor',
    ],
    invertida: [
      'el aislamiento de resolver todo sin pedir ayuda',
      'la dificultad de apoyarse en el otro cuando hace falta',
      'un aislamiento que se cierra sobre sí mismo, sin dejar entrar a nadie más',
    ],
  },
  laguz: {
    normal: [
      'la intuición como guía para lo que se siente',
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
      'un punto de inflexión que cambia la forma de ver esto',
      'la claridad que llega después de una etapa confusa',
      'un nuevo comienzo que se nota casi de un día para el otro',
    ],
    invertida: [
      'la resistencia a soltar cómo eran antes las cosas',
      'la dificultad de aceptar que algo ya cambió',
      'aferrarse a una versión de esto que ya no está',
    ],
  },
  othala: {
    normal: [
      'los valores que pesan a la hora de elegir a alguien',
      'las raíces familiares que influyen en cómo se vive el amor',
      'el respeto por de dónde viene cada uno',
    ],
    invertida: [
      'patrones familiares que se repiten sin darse cuenta',
      'expectativas heredadas que pesan a la hora de vincularse',
      'la dificultad de soltar una forma vieja de vincularse',
    ],
  },
};
