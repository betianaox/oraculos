import type { FragmentosDeTema } from '../../types';

// Tema "dinero". Mismas reglas que content/fragmentos/amor.ts: fragmentos
// cortos componibles, vocabulario variado, sin asumir un nivel de ingresos
// o situación económica específica.
export const dinero: FragmentosDeTema = {
  fehu: {
    normal: [
      'la prosperidad que llega cuando el dinero se administra con cuidado',
      'una entrada de dinero que conviene aprovechar bien',
      'los recursos que rinden más cuando se ordenan con calma',
    ],
    invertida: [
      'el miedo a que no alcance, más allá de si realmente falta',
      'un gasto que se hizo por ansiedad y no por necesidad',
      'la inseguridad de no saber si lo que entra alcanza',
    ],
  },
  uruz: {
    normal: [
      'la fuerza para tomar una decisión financiera que venías postergando',
      'el impulso para animarte a una inversión pensada con cuidado',
      'la energía para ordenar de una vez las finanzas',
    ],
    invertida: [
      'el desgaste de forzar un gasto que en el fondo no convence',
      'una decisión de dinero tomada con más impulso que análisis',
      'el cansancio de sostener una carga financiera exigente',
    ],
  },
  thurisaz: {
    normal: [
      'el límite necesario frente a un gasto que no corresponde',
      'la pausa antes de decidir algo importante con la plata',
      'la firmeza para decir que no a un pedido de dinero',
    ],
    invertida: [
      'un gasto impulsivo que después pesa más de lo esperado',
      'la dificultad de poner un límite claro con el dinero',
      'una discusión de plata que se evita en vez de hablarla',
    ],
  },
  ansuz: {
    normal: [
      'una conversación pendiente sobre dinero que conviene tener',
      'la claridad para explicar una decisión financiera',
      'la información que falta antes de decidir algo importante',
    ],
    invertida: [
      'un malentendido sobre un gasto o una deuda compartida',
      'algo que no se dijo a tiempo sobre un tema de plata',
      'una cifra mal entendida que conviene aclarar pronto',
    ],
  },
  raidho: {
    normal: [
      'el avance hacia una meta financiera concreta',
      'un plan de ahorro que empieza a mostrar resultados',
      'el progreso, aunque lento, hacia algo económico que importa',
    ],
    invertida: [
      'la sensación de no avanzar económicamente pese al esfuerzo',
      'un objetivo financiero que se fue perdiendo de vista',
      'el desgaste de un plan de ahorro que no logra sostenerse',
    ],
  },
  kaunaz: {
    normal: [
      'una idea creativa para generar un ingreso extra',
      'una forma distinta de resolver un problema económico',
      'la inspiración para reorganizar las finanzas de otra manera',
    ],
    invertida: [
      'la falta de ganas de ponerse a ordenar el tema plata',
      'una idea de negocio que se enfrió antes de intentarla',
      'el desánimo frente a un problema económico que se repite',
    ],
  },
  gebo: {
    normal: [
      'un intercambio de dinero parejo, sin que nadie quede en desventaja',
      'la generosidad económica sin perder de vista el propio equilibrio',
      'un préstamo o regalo que se agradece sin generar deuda emocional',
    ],
    invertida: [
      'un préstamo que se dio sin condiciones claras',
      'el desgaste de prestar dinero que no vuelve',
      'una dinámica económica donde siempre pone el mismo lado',
    ],
  },
  wunju: {
    normal: [
      'el disfrute de gastar en algo que realmente vale la pena',
      'la tranquilidad de cerrar el mes sin sobresaltos',
      'la satisfacción de haber alcanzado una meta de ahorro',
    ],
    invertida: [
      'la culpa de haberte dado un gusto que en realidad necesitabas',
      'la dificultad de disfrutar el dinero por miedo a que falte después',
      'una alegría de gastar que después se convierte en preocupación',
    ],
  },
  hagalaz: {
    normal: [
      'un cambio económico brusco que, aunque incómodo, ordena algo importante',
      'un gasto inesperado que reordena las prioridades',
      'una ruptura financiera que abre paso a un manejo más honesto',
    ],
    invertida: [
      'un imprevisto económico que llega sin demasiado aviso',
      'la dificultad de aceptar una pérdida de dinero repentina',
      'el desorden que deja un gasto que no estaba planeado',
    ],
  },
  naudiz: {
    normal: [
      'la paciencia necesaria mientras se resuelve una carencia económica',
      'el esfuerzo sostenido de ajustar el gasto durante un tiempo',
      'la perseverancia frente a una deuda que se está pagando de a poco',
    ],
    invertida: [
      'una decisión de dinero tomada desde el miedo y no desde el plan',
      'la necesidad urgente que nubla una decisión financiera importante',
      'aguantar una carencia que ya podría empezar a resolverse',
    ],
  },
  isa: {
    normal: [
      'la pausa antes de una decisión financiera importante',
      'el freno oportuno antes de un gasto grande',
      'la calma de esperar el momento justo para invertir',
    ],
    invertida: [
      'una situación económica que se siente congelada por ahora',
      'la indecisión frente a qué hacer con un dinero disponible',
      'el estancamiento de un ahorro que no logra crecer',
    ],
  },
  jera: {
    normal: [
      'los resultados de un esfuerzo de ahorro sostenido en el tiempo',
      'una meta financiera que por fin se empieza a ver de cerca',
      'el fruto de haber sido constante con el manejo del dinero',
    ],
    invertida: [
      'la impaciencia por ver crecer un ahorro que recién empieza',
      'la frustración de no ver todavía el resultado de un esfuerzo económico',
      'un plan financiero que necesita más tiempo del que se le dio',
    ],
  },
  eihwaz: {
    normal: [
      'la resistencia para sostener un plan financiero exigente',
      'la fortaleza para atravesar un momento económico difícil',
      'el coraje para tomar una decisión financiera que da vértigo',
    ],
    invertida: [
      'la rigidez de no querer cambiar un hábito de gasto que no funciona',
      'la resistencia a pedir ayuda con un tema económico complicado',
      'el desgaste de insistir en un plan que no está rindiendo',
    ],
  },
  perthu: {
    normal: [
      'la confianza en que una situación económica incierta se va a acomodar',
      'la apertura a una oportunidad financiera inesperada',
      'lo desconocido de una inversión que todavía no da certezas',
    ],
    invertida: [
      'la necesidad de controlar un resultado financiero que no depende solo de ti',
      'la ansiedad de no saber cómo va a salir una inversión',
      'la dificultad de esperar sin desesperarse por saber cómo termina',
    ],
  },
  algiz: {
    normal: [
      'el instinto que avisa cuándo un trato económico no es conveniente',
      'un límite necesario frente a un pedido de dinero incómodo',
      'la intuición para detectar una oportunidad financiera genuina',
    ],
    invertida: [
      'una desconfianza excesiva que impide aprovechar una buena oportunidad',
      'la dificultad de pedir ayuda económica por orgullo',
      'una guardia tan alta con el dinero que genera más tensión que cuidado',
    ],
  },
  sowulo: {
    normal: [
      'la claridad sobre qué hacer con el dinero disponible',
      'un alivio económico después de un periodo ajustado',
      'la confianza de que las cuentas están más ordenadas que antes',
    ],
    invertida: [
      'un optimismo económico forzado que tapa un problema real',
      'la dificultad de aceptar que las cuentas no están cerrando',
      'mostrar tranquilidad económica de cara afuera mientras por dentro hay dudas',
    ],
  },
  teiwaz: {
    normal: [
      'la honestidad para reconocer un error financiero y corregirlo',
      'el coraje de negociar algo que sabes que es justo',
      'un compromiso económico que se sostiene con convicción',
    ],
    invertida: [
      'un esfuerzo económico que recae siempre del mismo lado',
      'la cuenta silenciosa de quién pone más en un gasto compartido',
      'el desgaste de ceder siempre en una negociación de dinero',
    ],
  },
  berkana: {
    normal: [
      'un comienzo económico fresco: un ingreso nuevo, un plan distinto',
      'el crecimiento financiero que se nota después de ordenar las cosas',
      'la fertilidad de un proyecto listo para generar ingresos',
    ],
    invertida: [
      'el miedo a empezar un plan financiero nuevo',
      'un comienzo económico que se posterga por inseguridad',
      'las ganas de ordenar las finanzas sin animarse todavía',
    ],
  },
  ehwaz: {
    normal: [
      'un acuerdo económico que avanza mejor de a dos',
      'la confianza mutua necesaria para compartir gastos o inversiones',
      'el avance de un plan financiero que se sostiene en equipo',
    ],
    invertida: [
      'una sola persona sosteniendo un gasto compartido',
      'la confianza financiera que necesita repararse después de algo puntual',
      'el desacople entre lo que cada uno aporta a una meta común',
    ],
  },
  mannaz: {
    normal: [
      'el apoyo de otros para resolver un problema económico',
      'una red de contactos que puede facilitar una oportunidad financiera',
      'la cooperación económica por sobre la comparación',
    ],
    invertida: [
      'el aislamiento de resolver un problema de dinero sin pedir ayuda',
      'la dificultad de hablar de plata con las personas cercanas',
      'la vergüenza de compartir una dificultad económica real',
    ],
  },
  laguz: {
    normal: [
      'la intuición sobre qué decisión de dinero conviene tomar',
      'una corazonada sobre una oportunidad financiera que vale la pena seguir',
      'la sabiduría de escuchar lo que el instinto dice sobre un gasto',
    ],
    invertida: [
      'una ansiedad económica que nubla la claridad para decidir',
      'el desborde de sentir que las cuentas se acumulan todas juntas',
      'confundir el estrés financiero con no tener capacidad para resolverlo',
    ],
  },
  ingwaz: {
    normal: [
      'un ingreso que se está gestando y todavía necesita su tiempo',
      'un plan financiero que conviene dejar madurar antes de ejecutarlo',
      'una inversión que ya está puesta y va a dar sus frutos',
    ],
    invertida: [
      'la impaciencia de querer resultados financieros antes de tiempo',
      'las ganas de acelerar un ingreso que todavía necesita su proceso',
      'la ansiedad de no saber esperar el momento justo para invertir',
    ],
  },
  dagaz: {
    normal: [
      'un punto de inflexión que cambia la forma de ver el dinero',
      'la claridad que llega después de una etapa económica confusa',
      'un cambio financiero que se nota casi de un día para el otro',
    ],
    invertida: [
      'la resistencia a soltar una forma vieja de manejar el dinero',
      'la dificultad de aceptar que la situación económica ya cambió',
      'aferrarse a un plan financiero que ya no tiene sentido',
    ],
  },
  othala: {
    normal: [
      'una base económica heredada que hoy sostiene decisiones actuales',
      'un aprendizaje financiero del pasado que vuelve a ser útil',
      'el respeto por el esfuerzo económico de quienes vinieron antes',
    ],
    invertida: [
      'una forma de manejar el dinero heredada que ya no representa a quien eres hoy',
      'la dificultad de soltar patrones económicos familiares',
      'una expectativa financiera ajena que pesa más de lo necesario',
    ],
  },
};
