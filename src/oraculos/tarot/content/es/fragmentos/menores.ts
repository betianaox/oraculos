import type { FragmentosDeTema } from '../../types';

// Fragmentos del tema 'general' para los 56 Arcanos Menores (español). Cláusulas
// cortas, tres variantes por posición, para encajar tras un verbo o conector.
// Se fusionan con los Mayores en el mapa 'general' (ver es/index.ts). Son el
// escalón de fallback: si una carta no tiene fragmentos de amor/trabajo/dinero,
// la tirada usa estos.
export const FRAGMENTOS_GENERAL_MENORES_ES: FragmentosDeTema = {
  // ── Bastos ───────────────────────────────────────────────────────────────
  'bastos-as': {
    normal: [
      'una chispa que enciende las ganas de hacer',
      'el impulso puro de algo nuevo que pide nacer',
      'el primer empujón hacia una idea con fuego',
    ],
    invertida: [
      'una chispa que no termina de prender',
      'entusiasmo que se enfría antes de arrancar',
      'un proyecto que se demora en despegar',
    ],
  },
  'bastos-dos': {
    normal: [
      'el momento de planear y mirar lejos',
      'decidir el rumbo antes de lanzarse',
      'un logro que abre la pregunta de hacia dónde crecer',
    ],
    invertida: [
      'miedo a salir de lo conocido',
      'planes que no se concretan',
      'quedarse en lo seguro por temor a lo grande',
    ],
  },
  'bastos-tres': {
    normal: [
      'un proyecto ya en marcha que empieza a rendir',
      'expansión y confianza en lo puesto en camino',
      'mirar el horizonte esperando lo sembrado',
    ],
    invertida: [
      'lo esperado que tarda en volver',
      'planes que no regresan como se creía',
      'expectativas que conviene revisar',
    ],
  },
  'bastos-cuatro': {
    normal: [
      'un logro que se comparte y se celebra',
      'la alegría del hogar y una base estable',
      'un umbral festivo, con puertas abiertas a lo bueno',
    ],
    invertida: [
      'una celebración que se enfría o se posterga',
      'una armonía todavía frágil',
      'un tránsito entre una etapa y otra',
    ],
  },
  'bastos-cinco': {
    normal: [
      'la fricción de muchos empujando a la vez',
      'competencia y pequeños choques de ego',
      'un barullo que pide orden',
    ],
    invertida: [
      'un choque que se evita a tiempo',
      'la tensión que baja o encuentra acuerdo',
      'esquivar una pelea, para bien o para mal',
    ],
  },
  'bastos-seis': {
    normal: [
      'un triunfo reconocido y aplaudido',
      'el éxito que se muestra y se celebra',
      'la confianza de haberlo conseguido',
    ],
    invertida: [
      'un logro que nadie ve',
      'la caída del favor ganado',
      'el ego que confunde aplausos con valor',
    ],
  },
  'bastos-siete': {
    normal: [
      'plantarse y defender lo propio',
      'el coraje de sostener la posición',
      'la ventaja de la convicción frente a la oposición',
    ],
    invertida: [
      'el cansancio de tanto defender',
      'ganas de ceder terreno',
      'sentirse en desventaja',
    ],
  },
  'bastos-ocho': {
    normal: [
      'cosas que se aceleran de golpe',
      'noticias o un mensaje en camino',
      'energía en pleno vuelo hacia su destino',
    ],
    invertida: [
      'un impulso que se frena',
      'mensajes que no llegan',
      'ir demasiado rápido y perder el control',
    ],
  },
  'bastos-nueve': {
    normal: [
      'seguir en pie tras muchas batallas',
      'la última reserva de fuerzas',
      'perseverar cuando ya casi lo lograste',
    ],
    invertida: [
      'el cansancio que gana la partida',
      'desconfianza que se vuelve paranoia',
      'defender por inercia lo que ya no hace falta',
    ],
  },
  'bastos-diez': {
    normal: [
      'el peso de todo lo asumido',
      'una carga que se volvió excesiva',
      'un logro que cuesta cargar solo',
    ],
    invertida: [
      'aprender a soltar y delegar',
      'el colapso de quien no soltó a tiempo',
      'liberarse de lo que no te tocaba llevar',
    ],
  },
  'bastos-sota': {
    normal: [
      'el espíritu explorador que recién empieza',
      'curiosidad y ganas de probar',
      'una noticia que enciende un proyecto',
    ],
    invertida: [
      'entusiasmo que se dispersa sin foco',
      'promesas que no se sostienen',
      'una noticia que se demora o decepciona',
    ],
  },
  'bastos-caballo': {
    normal: [
      'energía lanzada a la acción',
      'aventura y coraje para lanzarse',
      'ganas de encarar algo con pasión',
    ],
    invertida: [
      'un impulso que se descontrola',
      'decisiones apresuradas',
      'un proyecto que perdió su fuego',
    ],
  },
  'bastos-reina': {
    normal: [
      'seguridad y calor que atraen',
      'un carisma que enciende a los demás',
      'sostener los proyectos con pasión y firmeza',
    ],
    invertida: [
      'inseguridad tapada con exigencia',
      'celos que enturbian',
      'una energía que se apagó',
    ],
  },
  'bastos-rey': {
    normal: [
      'el líder visionario que inspira',
      'conducir con empuje y convicción',
      'pasión transformada en dirección',
    ],
    invertida: [
      'un mando que se vuelve autoritario',
      'impaciencia con quien no sigue el ritmo',
      'decisiones al calor del impulso',
    ],
  },
  // ── Copas ─────────────────────────────────────────────────────────────────
  'copas-as': {
    normal: [
      'el corazón que se abre',
      'el comienzo de un amor o una etapa plena',
      'el sentir que rebalsa y quiere darse',
    ],
    invertida: [
      'emociones reprimidas',
      'un corazón que se cierra por miedo',
      'un vacío afectivo que cuesta llenar',
    ],
  },
  'copas-dos': {
    normal: [
      'el encuentro de dos que se eligen',
      'atracción mutua y reciprocidad',
      'un vínculo donde ambos dan y reciben',
    ],
    invertida: [
      'un vínculo que se desnivela',
      'tensión entre dos',
      'una unión que se enfría',
    ],
  },
  'copas-tres': {
    normal: [
      'el brindis entre amigos',
      'comunidad y alegría compartida',
      'el apoyo de los tuyos',
    ],
    invertida: [
      'una fiesta que se pasa de rosca',
      'chismes que enturbian',
      'la necesidad de retirarse del bullicio',
    ],
  },
  'copas-cuatro': {
    normal: [
      'la mirada hastiada que no ve lo que tiene',
      'desinterés por lo que se ofrece',
      'estar tan en uno mismo que se pasa una oportunidad',
    ],
    invertida: [
      'la vista que se levanta',
      'aceptar lo que se ofrece',
      'salir del letargo',
    ],
  },
  'copas-cinco': {
    normal: [
      'el duelo por lo que se derramó',
      'la mirada fija en lo perdido',
      'una tristeza que olvida lo que aún queda',
    ],
    invertida: [
      'la mirada que gira hacia lo que resta',
      'aceptación y perdón',
      'recoger lo que no se rompió y seguir',
    ],
  },
  'copas-seis': {
    normal: [
      'la dulzura del recuerdo',
      'la ternura de lo simple y conocido',
      'un reencuentro o la inocencia de antes',
    ],
    invertida: [
      'vivir anclado en el pasado',
      'idealizar lo que ya no está',
      'no poder soltar lo que terminó',
    ],
  },
  'copas-siete': {
    normal: [
      'una nube de posibilidades imaginadas',
      'muchas opciones seductoras',
      'distinguir lo real de lo que solo brilla',
    ],
    invertida: [
      'la niebla que se disipa',
      'claridad para elegir',
      'descartar los espejismos',
    ],
  },
  'copas-ocho': {
    normal: [
      'la decisión de irse en busca de algo más hondo',
      'dejar atrás lo que ya no llena',
      'seguir un llamado interior',
    ],
    invertida: [
      'miedo a soltar y partir',
      'quedarse por inercia',
      'la duda entre irse y volver',
    ],
  },
  'copas-nueve': {
    normal: [
      'el deseo cumplido',
      'satisfacción y bienestar',
      'el gusto de disfrutar lo conseguido',
    ],
    invertida: [
      'una complacencia vacía',
      'buscar en el exceso lo que no llena',
      'un deseo que, cumplido, no satisface',
    ],
  },
  'copas-diez': {
    normal: [
      'la plenitud del corazón compartida',
      'felicidad familiar y vínculos armónicos',
      'el hogar en paz',
    ],
    invertida: [
      'una armonía que se resquebraja',
      'tensiones en la familia',
      'la distancia entre lo soñado y lo real',
    ],
  },
  'copas-sota': {
    normal: [
      'un mensaje afectivo o tierno',
      'el despertar de una sensibilidad nueva',
      'una noticia que emociona',
    ],
    invertida: [
      'susceptibilidad a flor de piel',
      'inmadurez emocional',
      'una noticia del corazón que decepciona',
    ],
  },
  'copas-caballo': {
    normal: [
      'una propuesta del corazón',
      'romance e idealismo',
      'una invitación afectiva en camino',
    ],
    invertida: [
      'promesas que no se cumplen',
      'ilusiones sin sustento',
      'un encanto que es solo apariencia',
    ],
  },
  'copas-reina': {
    normal: [
      'empatía que contiene a los demás',
      'intuición y sensibilidad honda',
      'acompañar sin perderse',
    ],
    invertida: [
      'dependencia afectiva',
      'cargar con las emociones ajenas',
      'dar tanto que uno se vacía',
    ],
  },
  'copas-rey': {
    normal: [
      'sentir hondo sin ahogarse',
      'serenidad y diplomacia',
      'aconsejar con el corazón y la cabeza a la vez',
    ],
    invertida: [
      'emociones tapadas que presionan',
      'manipulación afectiva',
      'una frialdad que niega el sentir',
    ],
  },
  // ── Espadas ───────────────────────────────────────────────────────────────
  'espadas-as': {
    normal: [
      'el corte de la claridad',
      'una verdad que se ve de golpe',
      'una idea filosa que ordena el caos',
    ],
    invertida: [
      'confusión que no deja ver',
      'la verdad usada para herir',
      'ideas nubladas',
    ],
  },
  'espadas-dos': {
    normal: [
      'una decisión que se evita',
      'un equilibrio tenso que no puede durar',
      'no querer mirar para no tener que elegir',
    ],
    invertida: [
      'la venda que por fin se quita',
      'ver la situación de frente',
      'la decisión postergada que se toma',
    ],
  },
  'espadas-tres': {
    normal: [
      'la herida del corazón sin rodeos',
      'dolor, ruptura, desengaño',
      'una verdad que, aunque duela, aclara',
    ],
    invertida: [
      'la herida que empieza a cerrar',
      'el perdón que llega',
      'liberar la pena que se cargaba',
    ],
  },
  'espadas-cuatro': {
    normal: [
      'la tregua necesaria',
      'descansar y reponer fuerzas',
      'un respiro tras la tormenta',
    ],
    invertida: [
      'un descanso que no llega',
      'volver a la carga antes de estar listo',
      'una inquietud que no deja parar',
    ],
  },
  'espadas-cinco': {
    normal: [
      'una victoria de gusto amargo',
      'ganar a costa de todo',
      'un orgullo herido que no valía el precio',
    ],
    invertida: [
      'soltar el orgullo',
      'buscar reconciliar',
      'dejar atrás una pelea que ya hizo daño',
    ],
  },
  'espadas-seis': {
    normal: [
      'el cruce hacia aguas más tranquilas',
      'alejarse de lo difícil para sanar',
      'una transición o un viaje que calma',
    ],
    invertida: [
      'cuesta soltar lo que quedó atrás',
      'cargar el peso del pasado',
      'una transición que no termina de darse',
    ],
  },
  'espadas-siete': {
    normal: [
      'una jugada sigilosa',
      'estrategia y astucia',
      'conseguir algo por vías indirectas',
    ],
    invertida: [
      'un engaño que sale a la luz',
      'una confesión',
      'devolver lo que se tomó por atajo',
    ],
  },
  'espadas-ocho': {
    normal: [
      'sentirse atrapado, en gran parte por miedos propios',
      'límites que uno mismo se puso',
      'una parálisis que en realidad tiene salida',
    ],
    invertida: [
      'ver que la salida estaba ahí',
      'liberarse de la creencia que paralizaba',
      'recuperar el propio poder',
    ],
  },
  'espadas-nueve': {
    normal: [
      'la angustia de la madrugada',
      'preocupaciones que crecen en la oscuridad',
      'un miedo más grande que el hecho',
    ],
    invertida: [
      'la noche que empieza a ceder',
      'animarse a pedir ayuda',
      'entender que el miedo era desproporcionado',
    ],
  },
  'espadas-diez': {
    normal: [
      'un final que toca fondo',
      'un cierre doloroso, casi una derrota',
      'el punto más bajo, desde el cual se vuelve a subir',
    ],
    invertida: [
      'la recuperación que empieza',
      'lo peor que ya pasó',
      'resistirse a un final que ya llegó',
    ],
  },
  'espadas-sota': {
    normal: [
      'la mente despierta y curiosa',
      'ideas nuevas y palabra ágil',
      'alguien vigilante y perspicaz',
    ],
    invertida: [
      'palabras que cortan',
      'chismes y suspicacia',
      'una mente que analiza y no siente',
    ],
  },
  'espadas-caballo': {
    normal: [
      'cargar hacia adelante con la fuerza de una idea',
      'ir de frente y decir las cosas',
      'una mente veloz lanzada a la acción',
    ],
    invertida: [
      'impulsividad que atropella',
      'agresividad en la palabra',
      'decidir sin pensar las consecuencias',
    ],
  },
  'espadas-reina': {
    normal: [
      'pensar con lucidez y hablar con la verdad',
      'independencia y perspicacia',
      'no dejarse engañar',
    ],
    invertida: [
      'una claridad que se enfría',
      'crítica que hiere',
      'una mente afilada cerrada al sentir',
    ],
  },
  'espadas-rey': {
    normal: [
      'gobernar con la razón y la ley',
      'juicio claro y ético',
      'cortar lo justo, sin capricho',
    ],
    invertida: [
      'la razón vuelta fría o injusta',
      'abuso de poder',
      'argumentos que manipulan en vez de aclarar',
    ],
  },
  // ── Oros ─────────────────────────────────────────────────────────────────
  'oros-as': {
    normal: [
      'la semilla de la prosperidad',
      'una oportunidad concreta y fértil',
      'un comienzo material con raíces',
    ],
    invertida: [
      'una oportunidad que se deja pasar',
      'inseguridad material',
      'planes que prometían y no cuajan',
    ],
  },
  'oros-dos': {
    normal: [
      'el arte de hacer malabares',
      'equilibrar varias cosas con flexibilidad',
      'sostener todo mientras uno se mueve',
    ],
    invertida: [
      'los malabares que se caen',
      'sobrecarga y desorden',
      'no llegar a todo y perder el ritmo',
    ],
  },
  'oros-tres': {
    normal: [
      'el oficio y el trabajo en equipo',
      'colaboración que suma talentos',
      'aportar lo que uno sabe a una obra común',
    ],
    invertida: [
      'falta de coordinación',
      'desacuerdos que traban',
      'trabajo hecho a medias',
    ],
  },
  'oros-cuatro': {
    normal: [
      'retener lo propio con firmeza',
      'seguridad material y ahorro',
      'prudencia con lo que se tiene',
    ],
    invertida: [
      'avaricia y apego que asfixian',
      'aprender a soltar y compartir',
      'manos demasiado ocupadas de tanto aferrar',
    ],
  },
  'oros-cinco': {
    normal: [
      'el frío de la carencia',
      'sentirse afuera o en apuros',
      'un refugio cercano que no se ve',
    ],
    invertida: [
      'la racha que cambia',
      'la ayuda que aparece',
      'salir de la carencia y volver a entrar en calor',
    ],
  },
  'oros-seis': {
    normal: [
      'el flujo justo de dar y recibir',
      'generosidad y ayuda que llega',
      'el equilibrio entre quien tiene y quien necesita',
    ],
    invertida: [
      'ayuda con condiciones',
      'deudas que atan',
      'un dar y recibir que no está parejo',
    ],
  },
  'oros-siete': {
    normal: [
      'la pausa para evaluar lo sembrado',
      'paciencia mientras madura la cosecha',
      'el trabajo que ya empieza a rendir',
    ],
    invertida: [
      'impaciencia por los resultados',
      'esfuerzo invertido donde no rinde',
      'cosechas más pobres de lo esperado',
    ],
  },
  'oros-ocho': {
    normal: [
      'el placer del oficio hecho con esmero',
      'mejorar a fuerza de práctica',
      'afinar lo que uno sabe hacer',
    ],
    invertida: [
      'trabajo mecánico y sin alma',
      'perfeccionismo que paraliza',
      'hacer las cosas de cualquier modo',
    ],
  },
  'oros-nueve': {
    normal: [
      'el disfrute de lo conseguido por mérito propio',
      'independencia y autosuficiencia',
      'el gusto de estar bien y a solas',
    ],
    invertida: [
      'dependencia de otros',
      'una soledad que pesa',
      'un logro a costa de todo lo demás',
    ],
  },
  'oros-diez': {
    normal: [
      'la prosperidad que echa raíces',
      'riqueza estable, familia y legado',
      'la seguridad que se construye con el tiempo',
    ],
    invertida: [
      'conflictos por dinero o herencias',
      'inestabilidad',
      'apego al patrimonio que enreda los vínculos',
    ],
  },
  'oros-sota': {
    normal: [
      'el estudiante aplicado de la vida',
      'una oportunidad concreta para aprender',
      'el primer paso serio hacia algo durable',
    ],
    invertida: [
      'el foco que se pierde',
      'planes que no pasan del papel',
      'una oportunidad que se deja escapar',
    ],
  },
  'oros-caballo': {
    normal: [
      'el más metódico y confiable',
      'avanzar paso a paso sin apuro',
      'terminar lo que se empieza',
    ],
    invertida: [
      'la constancia vuelta inercia',
      'monotonía y estancamiento',
      'terquedad con un método que ya no sirve',
    ],
  },
  'oros-reina': {
    normal: [
      'cuidar lo material con los pies en la tierra',
      'un hogar próspero que nutre',
      'sensatez para administrar y cuidar a la vez',
    ],
    invertida: [
      'agobio por atender todo',
      'descuidarse por sostener a los demás',
      'un materialismo que nace de la inseguridad',
    ],
  },
  'oros-rey': {
    normal: [
      'la maestría en lo material',
      'un éxito consolidado y seguro',
      'la generosidad de quien ya no teme por lo suyo',
    ],
    invertida: [
      'prosperidad que se agría en codicia',
      'apego al estatus y al control',
      'medir todo en dinero',
    ],
  },
};
