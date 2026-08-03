import type { FragmentosDeTema } from '../../types';

// Fragmentos del tema 'trabajo' para los 56 Arcanos Menores (español). Se
// fusionan con los Mayores en el mapa 'trabajo' (ver es/index.ts). Cada carta
// encuadrada en lo laboral; tres variantes por posición.
export const FRAGMENTOS_TRABAJO_MENORES_ES: FragmentosDeTema = {
  // ── Bastos ─────────────────────────────────────────────────────────────────
  'bastos-as': {
    normal: [
      'la chispa de un proyecto nuevo',
      'el impulso para arrancar algo',
      'una idea de trabajo que enciende',
    ],
    invertida: [
      'un proyecto que no despega',
      'entusiasmo laboral que se enfría',
      'una iniciativa que se demora',
    ],
  },
  'bastos-dos': {
    normal: [
      'planear el próximo paso profesional',
      'decidir el rumbo de un proyecto',
      'mirar el horizonte de la carrera',
    ],
    invertida: [
      'miedo a un cambio laboral grande',
      'planes de trabajo que no cuajan',
      'quedarse en lo seguro',
    ],
  },
  'bastos-tres': {
    normal: [
      'un proyecto en marcha que empieza a rendir',
      'expandir el negocio',
      'esperar los frutos del trabajo',
    ],
    invertida: [
      'resultados laborales que tardan',
      'un proyecto que no vuelve como se creía',
      'revisar las expectativas de trabajo',
    ],
  },
  'bastos-cuatro': {
    normal: [
      'celebrar un logro laboral en equipo',
      'una base estable en el trabajo',
      'un hito profesional compartido',
    ],
    invertida: [
      'un logro que no se festeja',
      'una estabilidad laboral frágil',
      'un tránsito entre proyectos',
    ],
  },
  'bastos-cinco': {
    normal: [
      'competencia y roces en el equipo',
      'choques de ego en el trabajo',
      'un ambiente laboral revuelto',
    ],
    invertida: [
      'un conflicto laboral que se calma',
      'la tensión del equipo que baja',
      'esquivar una disputa que convenía dar',
    ],
  },
  'bastos-seis': {
    normal: [
      'un triunfo laboral reconocido',
      'un ascenso o un reconocimiento',
      'el éxito que se hace notar',
    ],
    invertida: [
      'un logro que nadie ve',
      'perder el favor ganado',
      'confundir aplausos con mérito',
    ],
  },
  'bastos-siete': {
    normal: [
      'defender tu posición en el trabajo',
      'sostener un proyecto contra la corriente',
      'coraje frente a la competencia',
    ],
    invertida: [
      'cansancio de defender solo el proyecto',
      'ceder terreno laboral',
      'sentirse en desventaja',
    ],
  },
  'bastos-ocho': {
    normal: [
      'un proyecto que se acelera',
      'noticias o novedades laborales rápidas',
      'todo que se mueve de golpe',
    ],
    invertida: [
      'un trámite laboral que se traba',
      'novedades que no llegan',
      'ir demasiado rápido en el trabajo',
    ],
  },
  'bastos-nueve': {
    normal: [
      'seguir firme tras muchas trabas',
      'la última fuerza para terminar',
      'perseverar cerca de la meta',
    ],
    invertida: [
      'agotamiento laboral',
      'desconfianza en el equipo',
      'defender por inercia un puesto',
    ],
  },
  'bastos-diez': {
    normal: [
      'una sobrecarga de tareas',
      'responsabilidades que agobian',
      'un logro que cuesta cargar solo',
    ],
    invertida: [
      'delegar y soltar peso',
      'el colapso por no soltar',
      'sacarse de encima lo que no te toca',
    ],
  },
  'bastos-sota': {
    normal: [
      'un proyecto que recién nace',
      'curiosidad por aprender un oficio',
      'una noticia que enciende una idea',
    ],
    invertida: [
      'entusiasmo laboral sin foco',
      'promesas de trabajo que no se sostienen',
      'una novedad que decepciona',
    ],
  },
  'bastos-caballo': {
    normal: [
      'lanzarse con energía a un proyecto',
      'un cambio laboral con impulso',
      'ganas de encarar algo grande',
    ],
    invertida: [
      'decisiones laborales apresuradas',
      'un proyecto que perdió su fuego',
      'impulso sin dirección',
    ],
  },
  'bastos-reina': {
    normal: [
      'liderar con carisma y calor',
      'sostener un proyecto con firmeza',
      'una confianza que contagia al equipo',
    ],
    invertida: [
      'inseguridad tapada con exigencia',
      'rivalidades en el trabajo',
      'una energía que se apagó',
    ],
  },
  'bastos-rey': {
    normal: [
      'un liderazgo visionario',
      'conducir con empuje y convicción',
      'inspirar al equipo hacia una meta',
    ],
    invertida: [
      'un mando autoritario',
      'impaciencia con el equipo',
      'decisiones al calor del impulso',
    ],
  },
  // ── Copas ──────────────────────────────────────────────────────────────────
  'copas-as': {
    normal: [
      'ilusión por un trabajo que llena',
      'un comienzo laboral con entusiasmo',
      'encontrarle sentido a lo que hacés',
    ],
    invertida: [
      'desgano con el trabajo',
      'falta de ilusión laboral',
      'un vacío en la tarea',
    ],
  },
  'copas-dos': {
    normal: [
      'una buena sociedad o dupla laboral',
      'un acuerdo que beneficia a ambos',
      'buena química en el equipo',
    ],
    invertida: [
      'una sociedad que se desnivela',
      'tensión con un colega',
      'un acuerdo que se enfría',
    ],
  },
  'copas-tres': {
    normal: [
      'buen clima y compañerismo',
      'celebrar un logro con el equipo',
      'el apoyo de los colegas',
    ],
    invertida: [
      'chismes de oficina',
      'un festejo que tapa problemas',
      'ganas de aislarse del grupo',
    ],
  },
  'copas-cuatro': {
    normal: [
      'desinterés por el trabajo actual',
      'un hastío laboral',
      'no ver una oportunidad a mano',
    ],
    invertida: [
      'renovar el interés por la tarea',
      'aceptar una oferta laboral',
      'salir del letargo profesional',
    ],
  },
  'copas-cinco': {
    normal: [
      'la decepción por un proyecto perdido',
      'lamentar lo que no salió',
      'fijarse solo en el fracaso laboral',
    ],
    invertida: [
      'ver lo que del trabajo aún sirve',
      'aceptar y seguir',
      'rescatar lo que quedó en pie',
    ],
  },
  'copas-seis': {
    normal: [
      'la satisfacción de un oficio de siempre',
      'volver a un trabajo conocido',
      'la nostalgia de una etapa laboral',
    ],
    invertida: [
      'anclarse en cómo se hacía antes',
      'idealizar un trabajo pasado',
      'no adaptarse a lo nuevo',
    ],
  },
  'copas-siete': {
    normal: [
      'muchas opciones laborales que confunden',
      'soñar con un proyecto ideal',
      'elegir entre caminos profesionales',
    ],
    invertida: [
      'la niebla laboral que se aclara',
      'claridad para elegir un rumbo',
      'descartar una fantasía de trabajo',
    ],
  },
  'copas-ocho': {
    normal: [
      'dejar un trabajo que ya no llena',
      'buscar algo con más sentido',
      'seguir una vocación',
    ],
    invertida: [
      'miedo a dejar el empleo',
      'quedarse por inercia',
      'la duda entre irse y quedarse',
    ],
  },
  'copas-nueve': {
    normal: [
      'la satisfacción de un logro laboral',
      'disfrutar lo conseguido en el trabajo',
      'sentirse pleno con la tarea',
    ],
    invertida: [
      'un éxito laboral que no llena',
      'buscar un reconocimiento vacío',
      'un logro que no satisface',
    ],
  },
  'copas-diez': {
    normal: [
      'un equipo que se siente como familia',
      'plenitud y armonía en el trabajo',
      'un ambiente laboral en paz',
    ],
    invertida: [
      'un clima laboral que se resquebraja',
      'tensiones en el equipo',
      'la brecha entre el trabajo soñado y el real',
    ],
  },
  'copas-sota': {
    normal: [
      'una propuesta laboral que ilusiona',
      'el despertar de una vocación',
      'una idea creativa para el trabajo',
    ],
    invertida: [
      'susceptibilidad con las críticas',
      'inmadurez en lo profesional',
      'una oferta que decepciona',
    ],
  },
  'copas-caballo': {
    normal: [
      'una propuesta laboral atractiva',
      'seguir el corazón en la carrera',
      'alguien que ofrece una oportunidad',
    ],
    invertida: [
      'una oferta que no se cumple',
      'ilusiones laborales sin sustento',
      'una propuesta que era solo apariencia',
    ],
  },
  'copas-reina': {
    normal: [
      'un liderazgo empático',
      'cuidar el clima del equipo',
      'intuición para manejar a la gente',
    ],
    invertida: [
      'cargar con los problemas de todos',
      'involucrarse de más',
      'dar tanto que uno se agota',
    ],
  },
  'copas-rey': {
    normal: [
      'manejar el trabajo con calma y tacto',
      'equilibrio emocional bajo presión',
      'diplomacia con el equipo',
    ],
    invertida: [
      'emociones tapadas en el trabajo',
      'manipular al equipo',
      'una frialdad con la gente',
    ],
  },
  // ── Espadas ─────────────────────────────────────────────────────────────────
  'espadas-as': {
    normal: [
      'una idea clara que ordena el trabajo',
      'la verdad de una situación laboral',
      'un nuevo enfoque que corta el nudo',
    ],
    invertida: [
      'confusión sobre el rumbo',
      'una verdad que se usa para dañar',
      'ideas laborales nubladas',
    ],
  },
  'espadas-dos': {
    normal: [
      'una decisión laboral que se evita',
      'un equilibrio tenso en el trabajo',
      'no querer ver un problema',
    ],
    invertida: [
      'por fin ver la situación laboral',
      'tomar la decisión postergada',
      'quitarse la venda',
    ],
  },
  'espadas-tres': {
    normal: [
      'una mala noticia en el trabajo',
      'un desengaño profesional',
      'una verdad dura que aclara',
    ],
    invertida: [
      'empezar a superar un golpe laboral',
      'soltar un rencor de trabajo',
      'la herida profesional que cierra',
    ],
  },
  'espadas-cuatro': {
    normal: [
      'una pausa necesaria en el trabajo',
      'descansar de la presión',
      'reponer fuerzas antes de seguir',
    ],
    invertida: [
      'un descanso que no llega',
      'volver al ruedo sin estar listo',
      'un estrés que no afloja',
    ],
  },
  'espadas-cinco': {
    normal: [
      'ganar a costa de los demás en el trabajo',
      'un conflicto laboral con costo',
      'una victoria de gusto amargo',
    ],
    invertida: [
      'reconciliarse con un colega',
      'soltar el orgullo en el trabajo',
      'cerrar un conflicto laboral',
    ],
  },
  'espadas-seis': {
    normal: [
      'dejar atrás un trabajo difícil',
      'una transición hacia algo más calmo',
      'un cambio que alivia',
    ],
    invertida: [
      'cuesta soltar un empleo',
      'cargar el peso de un trabajo pasado',
      'una transición que se traba',
    ],
  },
  'espadas-siete': {
    normal: [
      'una jugada estratégica',
      'moverse con sigilo en el trabajo',
      'conseguir algo por vías indirectas',
    ],
    invertida: [
      'un engaño laboral que se descubre',
      'sincerar una jugada',
      'devolver lo que se tomó',
    ],
  },
  'espadas-ocho': {
    normal: [
      'sentirse atrapado en el trabajo por miedos propios',
      'límites laborales autoimpuestos',
      'un puesto que parece sin salida',
    ],
    invertida: [
      'ver la salida que había',
      'liberarse de una creencia limitante',
      'recuperar el poder sobre la carrera',
    ],
  },
  'espadas-nueve': {
    normal: [
      'angustia y estrés por el trabajo',
      'preocupaciones laborales que desvelan',
      'un miedo mayor que el problema real',
    ],
    invertida: [
      'la angustia laboral que cede',
      'pedir ayuda en el trabajo',
      'ver que el miedo era exagerado',
    ],
  },
  'espadas-diez': {
    normal: [
      'el final duro de una etapa laboral',
      'tocar fondo en el trabajo',
      'un cierre que se siente como traición',
    ],
    invertida: [
      'la recuperación tras un fracaso',
      'lo peor del trabajo ya pasó',
      'resistirse a un final laboral',
    ],
  },
  'espadas-sota': {
    normal: [
      'la mente despierta y curiosa en el trabajo',
      'estar atento a todo',
      'ideas ágiles y palabra rápida',
    ],
    invertida: [
      'palabras que hieren en la oficina',
      'chismes y suspicacia',
      'analizar todo sin actuar',
    ],
  },
  'espadas-caballo': {
    normal: [
      'ir de frente con una idea',
      'decidir rápido en el trabajo',
      'empuje mental lanzado a la acción',
    ],
    invertida: [
      'impulsividad que atropella',
      'decisiones sin pensar',
      'agresividad en el trato',
    ],
  },
  'espadas-reina': {
    normal: [
      'claridad y criterio en el trabajo',
      'independencia y objetividad',
      'no dejarse engañar',
    ],
    invertida: [
      'frialdad con el equipo',
      'crítica que hiere',
      'dureza sin empatía',
    ],
  },
  'espadas-rey': {
    normal: [
      'autoridad y juicio en el trabajo',
      'decisiones éticas y firmes',
      'cortar lo justo sin capricho',
    ],
    invertida: [
      'abuso de poder',
      'dureza sin compasión',
      'usar la razón para dominar',
    ],
  },
  // ── Oros ────────────────────────────────────────────────────────────────────
  'oros-as': {
    normal: [
      'una oportunidad laboral concreta',
      'la semilla de un buen negocio',
      'un comienzo material con futuro',
    ],
    invertida: [
      'una oportunidad que se deja pasar',
      'inseguridad en el trabajo',
      'un plan que no cuaja',
    ],
  },
  'oros-dos': {
    normal: [
      'hacer malabares con las tareas',
      'equilibrar varios frentes',
      'adaptarse con flexibilidad',
    ],
    invertida: [
      'una sobrecarga que desborda',
      'desorden en las tareas',
      'no llegar a todo',
    ],
  },
  'oros-tres': {
    normal: [
      'trabajo en equipo y buen oficio',
      'colaboración que suma talentos',
      'reconocimiento por lo bien hecho',
    ],
    invertida: [
      'falta de coordinación',
      'desacuerdos que traban',
      'trabajo hecho a medias',
    ],
  },
  'oros-cuatro': {
    normal: [
      'estabilidad y seguridad laboral',
      'cuidar el puesto conseguido',
      'administrar con prudencia',
    ],
    invertida: [
      'aferrarse a un puesto por miedo',
      'un control excesivo',
      'rigidez que traba el avance',
    ],
  },
  'oros-cinco': {
    normal: [
      'una dificultad económica o laboral',
      'sentirse afuera del trabajo',
      'una racha de escasez',
    ],
    invertida: [
      'la recuperación laboral',
      'la ayuda que aparece',
      'salir de la mala racha',
    ],
  },
  'oros-seis': {
    normal: [
      'un intercambio justo de esfuerzo y paga',
      'ayuda entre colegas',
      'equilibrio entre dar y recibir',
    ],
    invertida: [
      'un trato laboral desparejo',
      'favores con condiciones',
      'deudas que atan',
    ],
  },
  'oros-siete': {
    normal: [
      'evaluar lo que rinde el trabajo',
      'paciencia mientras madura un proyecto',
      'un esfuerzo que empieza a dar fruto',
    ],
    invertida: [
      'impaciencia por los resultados',
      'esfuerzo mal invertido',
      'un rinde más pobre de lo esperado',
    ],
  },
  'oros-ocho': {
    normal: [
      'dedicación y oficio bien hecho',
      'mejorar con la práctica',
      'esmero en la tarea',
    ],
    invertida: [
      'trabajo mecánico y sin alma',
      'perfeccionismo que paraliza',
      'hacer las cosas de cualquier modo',
    ],
  },
  'oros-nueve': {
    normal: [
      'la independencia lograda por mérito propio',
      'disfrutar del fruto del trabajo',
      'autosuficiencia profesional',
    ],
    invertida: [
      'dependencia laboral',
      'un logro a costa de todo',
      'gastar sin cuidar lo ganado',
    ],
  },
  'oros-diez': {
    normal: [
      'un trabajo estable y duradero',
      'prosperidad y legado',
      'seguridad construida con el tiempo',
    ],
    invertida: [
      'conflictos por dinero en el trabajo',
      'inestabilidad laboral',
      'apego a lo material que enreda',
    ],
  },
  'oros-sota': {
    normal: [
      'un aprendiz o un plan concreto',
      'ganas de formarse en un oficio',
      'el primer paso hacia algo durable',
    ],
    invertida: [
      'un plan que no pasa del papel',
      'falta de foco',
      'una oportunidad desperdiciada',
    ],
  },
  'oros-caballo': {
    normal: [
      'constancia y método en el trabajo',
      'avanzar paso a paso',
      'alguien confiable que cumple',
    ],
    invertida: [
      'monotonía y estancamiento',
      'pereza laboral',
      'terquedad con un método que no sirve',
    ],
  },
  'oros-reina': {
    normal: [
      'administrar con sensatez y cuidado',
      'un ambiente laboral próspero',
      'nutrir el trabajo con los pies en la tierra',
    ],
    invertida: [
      'agobio por atender todo',
      'descuidarse por el trabajo',
      'inseguridad detrás del control',
    ],
  },
  'oros-rey': {
    normal: [
      'maestría y éxito en el trabajo',
      'un liderazgo próspero y seguro',
      'manejo experto de los recursos',
    ],
    invertida: [
      'codicia o apego al estatus',
      'obstinación',
      'medir todo en dinero',
    ],
  },
};
