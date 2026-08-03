import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Mayores en español. El Loco fijó el tono — reflexivo y
// didáctico (enseña a leer la imagen), nunca adivinatorio, en línea con el
// disclaimer de la app. El resto sigue ese molde.
export const WIKI_MAYORES_ES: WikiPorCarta = {
  'mayor-00': {
    nombre: 'El Loco',
    palabrasClave: {
      normal: ['comienzos', 'libertad', 'espontaneidad', 'fe', 'aventura'],
      invertida: ['imprudencia', 'miedo al cambio', 'dispersión', 'ingenuidad'],
    },
    significado: {
      normal:
        'El Loco marca el instante antes del primer paso: un comienzo que se ' +
        'anima sin garantías, con más confianza que certezas. Invita a soltar ' +
        'el equipaje viejo y a caminar con curiosidad, aceptando que no se puede ' +
        'ver el camino entero antes de empezar.',
      invertida:
        'Del revés, El Loco habla del salto dado sin mirar —o del salto que no ' +
        'te atreves a dar—. Puede señalar dispersión, entusiasmo que no aterriza, ' +
        'o el miedo que se disfraza de prudencia para no arriesgar nada.',
    },
    simbolismo:
      'Mira el precipicio a sus pies: no lo ve, o no le importa. La rosa blanca ' +
      'en su mano es la pureza de la intención; el perro que salta a su lado, el ' +
      'instinto que lo acompaña y lo advierte. El sol de fondo alumbra un viaje ' +
      'que recién arranca.',
  },
  'mayor-01': {
    nombre: 'El Mago',
    palabrasClave: {
      normal: ['voluntad', 'poder personal', 'recursos', 'iniciativa', 'foco'],
      invertida: ['manipulación', 'talento desperdiciado', 'engaño', 'inseguridad'],
    },
    significado: {
      normal:
        'El Mago es la certeza de que tienes lo necesario para empezar. Reúne ' +
        'la voluntad y los recursos, y los concentra en un solo propósito: ' +
        'convertir la idea en acto. Habla del momento en que decides usar lo que ' +
        'sabes en lugar de solo tenerlo.',
      invertida:
        'Del revés, esa fuerza se tuerce o se dispersa: talento que no se ' +
        'aprovecha, palabra que promete más de lo que cumple, o el uso de la ' +
        'habilidad para manipular. También puede ser la duda que te paraliza ' +
        'teniendo todo a mano.',
    },
    simbolismo:
      'Una mano señala el cielo y la otra la tierra: canaliza lo de arriba ' +
      'hacia abajo. Sobre su mesa están los cuatro palos —copa, espada, oro y ' +
      'basto—, todas las herramientas disponibles. El lemniscato sobre su ' +
      'cabeza es el potencial sin fin.',
  },
  'mayor-02': {
    nombre: 'La Sacerdotisa',
    palabrasClave: {
      normal: ['intuición', 'misterio', 'saber interior', 'silencio', 'lo oculto'],
      invertida: ['secretos', 'desconexión', 'ignorar la intuición', 'confusión'],
    },
    significado: {
      normal:
        'La Sacerdotisa custodia lo que no se dice con palabras. Invita a ' +
        'callar y escuchar hacia adentro: la respuesta ya está, pero se revela ' +
        'en el silencio, no en la prisa. Es el saber que llega por intuición, ' +
        'antes que por razón.',
      invertida:
        'Del revés, algo se te oculta —o te ocultas a ti mismo—. Puede señalar ' +
        'que estás desoyendo tu voz interior, tapándola con ruido, o que hay un ' +
        'secreto operando bajo la superficie.',
    },
    simbolismo:
      'Se sienta entre dos columnas, una clara y otra oscura: el umbral entre ' +
      'lo consciente y lo que no lo es. Un velo con granadas cubre lo que hay ' +
      'detrás. La luna a sus pies y el rollo en su regazo hablan de un ' +
      'conocimiento que no se muestra entero.',
  },
  'mayor-03': {
    nombre: 'La Emperatriz',
    palabrasClave: {
      normal: ['abundancia', 'fertilidad', 'cuidado', 'creación', 'naturaleza'],
      invertida: ['bloqueo creativo', 'descuido', 'dependencia', 'estancamiento'],
    },
    significado: {
      normal:
        'La Emperatriz es la vida que se derrama y da fruto. Habla de crear, ' +
        'nutrir y dejar madurar: un proyecto, un vínculo, un cuerpo. Invita a ' +
        'cuidar lo que crece con paciencia y a disfrutar de lo sensorial sin ' +
        'culpa.',
      invertida:
        'Del revés, la fuente se traba: creatividad que no fluye, un cuidado ' +
        'que se vuelve asfixiante o, al contrario, un descuido de lo propio. ' +
        'Puede señalar dar tanto a los demás que te olvidas de ti.',
    },
    simbolismo:
      'Reclina en un trono entre cojines, rodeada de un campo de trigo maduro ' +
      'y un bosque frondoso: todo a su alrededor da fruto. La corona de doce ' +
      'estrellas y el cetro hablan de un poder que crea antes que impone.',
  },
  'mayor-04': {
    nombre: 'El Emperador',
    palabrasClave: {
      normal: ['estructura', 'autoridad', 'estabilidad', 'límites', 'orden'],
      invertida: ['rigidez', 'control excesivo', 'terquedad', 'autoritarismo'],
    },
    significado: {
      normal:
        'El Emperador es el orden que sostiene. Habla de poner estructura, ' +
        'asumir el mando de la propia vida y construir sobre bases firmes. Donde ' +
        'la Emperatriz crea, él protege y ordena lo creado con reglas claras.',
      invertida:
        'Del revés, la firmeza se endurece: control que ahoga, rigidez que no ' +
        'admite matices, terquedad. También puede ser la falta de estructura ' +
        '—todo suelto, sin dirección— o una autoridad que se ejerce mal.',
    },
    simbolismo:
      'Se sienta en un trono de piedra tallado con cabezas de carnero, símbolo ' +
      'de Aries y de la voluntad. Detrás, montañas áridas: lo que se sostiene ' +
      'por sí mismo. La armadura bajo su túnica recuerda que su calma está ' +
      'siempre lista para defender.',
  },
  'mayor-05': {
    nombre: 'El Hierofante',
    palabrasClave: {
      normal: ['tradición', 'enseñanza', 'creencias', 'pertenencia', 'guía'],
      invertida: ['dogma', 'rebeldía', 'convención vacía', 'buscar el propio camino'],
    },
    significado: {
      normal:
        'El Hierofante es el puente hacia lo aprendido de otros: la tradición, ' +
        'la institución, el maestro que transmite un saber probado. Habla de ' +
        'buscar guía en lo establecido, de pertenecer a algo mayor y de ' +
        'honrar reglas compartidas.',
      invertida:
        'Del revés, la tradición pesa de más: dogma que no deja pensar, ' +
        'convenciones que ya no significan nada. También es la señal sana de ' +
        'romper el molde y buscar tu propia verdad fuera del camino trazado.',
    },
    simbolismo:
      'Bendice desde un trono entre dos columnas, con dos figuras a sus pies: ' +
      'la enseñanza pasa de uno a muchos. Las llaves cruzadas abren lo sagrado; ' +
      'la triple corona y el cetro marcan una autoridad que viene de la ' +
      'institución, no de sí mismo.',
  },
  'mayor-06': {
    nombre: 'Los Enamorados',
    palabrasClave: {
      normal: ['unión', 'elección', 'valores', 'armonía', 'vínculo'],
      invertida: ['desequilibrio', 'duda', 'valores en conflicto', 'ruptura'],
    },
    significado: {
      normal:
        'Los Enamorados hablan de unión, pero sobre todo de elección. Es el ' +
        'momento de decidir desde lo que de verdad valoras: un vínculo, un ' +
        'camino, un compromiso. Cuando eliges alineado con tu corazón, algo se ' +
        'integra y se vuelve armónico.',
      invertida:
        'Del revés, la balanza se desnivela: una decisión que evitas, valores ' +
        'que chocan, un vínculo en desequilibrio. Puede señalar tentación, dudas ' +
        'o elegir por miedo o presión en vez de por convicción.',
    },
    simbolismo:
      'Un ángel bendice a dos figuras desde lo alto: la elección se hace bajo ' +
      'una mirada mayor. Detrás de ella, el árbol del conocimiento; detrás de ' +
      'él, el árbol de las llamas del deseo. Entre ambos, hay que escoger con ' +
      'la cabeza y el corazón a la vez.',
  },
  'mayor-07': {
    nombre: 'El Carro',
    palabrasClave: {
      normal: ['voluntad', 'triunfo', 'control', 'dirección', 'empuje'],
      invertida: ['descontrol', 'dispersión', 'obstáculos', 'agresividad'],
    },
    significado: {
      normal:
        'El Carro es el avance que se gana con voluntad. Habla de tomar las ' +
        'riendas, alinear fuerzas opuestas hacia una misma meta y sostener el ' +
        'rumbo con disciplina. La victoria llega no por suerte, sino por empuje ' +
        'y foco.',
      invertida:
        'Del revés, las riendas se sueltan: fuerzas que tiran en direcciones ' +
        'distintas, impulso sin dirección, obstáculos que frenan. Puede ser ' +
        'querer avanzar a la fuerza donde hace falta ceder o replantear.',
    },
    simbolismo:
      'Un auriga conduce de pie un carro tirado por dos esfinges, una blanca y ' +
      'una negra: los opuestos avanzan solo si él los domina con la mente, ' +
      'porque no lleva riendas. El dosel de estrellas y la coraza hablan de una ' +
      'voluntad protegida y en marcha.',
  },
  'mayor-08': {
    nombre: 'La Fuerza',
    palabrasClave: {
      normal: ['coraje sereno', 'paciencia', 'dominio interior', 'compasión', 'temple'],
      invertida: ['duda', 'impulso', 'dureza', 'fuerza mal usada'],
    },
    significado: {
      normal:
        'La Fuerza no es la del músculo, sino la de la suavidad que domestica. ' +
        'Habla de manejar lo indómito —el miedo, la rabia, el deseo— con ' +
        'paciencia y ternura en lugar de violencia. El verdadero temple sostiene ' +
        'sin apretar.',
      invertida:
        'Del revés, esa serenidad falta: la fuerza se vuelve dureza o, al ' +
        'contrario, se cede al impulso. Puede señalar dudar de la propia ' +
        'capacidad, o intentar imponer por la fuerza lo que solo se logra con ' +
        'calma.',
    },
    simbolismo:
      'Una mujer cierra con dulzura las fauces de un león, sin miedo y sin ' +
      'violencia. El lemniscato sobre su cabeza, como en El Mago, es el poder ' +
      'infinito; aquí ese poder es interior. Las flores en su cintura recuerdan ' +
      'que la firmeza puede ser amable.',
  },
  'mayor-09': {
    nombre: 'El Ermitaño',
    palabrasClave: {
      normal: ['introspección', 'búsqueda', 'soledad elegida', 'sabiduría', 'guía interior'],
      invertida: ['aislamiento', 'evasión', 'soledad no querida', 'rechazo del consejo'],
    },
    significado: {
      normal:
        'El Ermitaño se aparta para ver con claridad. Habla de retirarse un ' +
        'tiempo del ruido para encontrar respuestas dentro, y de la sabiduría ' +
        'que da haber caminado en silencio. La luz que buscas la llevas tú ' +
        'mismo.',
      invertida:
        'Del revés, el retiro se vuelve encierro: aislamiento que aleja de todo, ' +
        'evasión disfrazada de búsqueda, o una soledad que ya no nutre. También ' +
        'puede ser negarte a pedir o a recibir la guía que necesitas.',
    },
    simbolismo:
      'Solo en la cima de una montaña, sostiene un farol con una estrella ' +
      'dentro: la luz del saber que alumbra apenas el paso siguiente. El bastón ' +
      'lo sostiene en la subida; el manto gris lo vuelve casi invisible, ' +
      'apartado del mundo por elección.',
  },
  'mayor-10': {
    nombre: 'La Rueda de la Fortuna',
    palabrasClave: {
      normal: ['ciclos', 'cambio', 'destino', 'giro', 'oportunidad'],
      invertida: ['mala racha', 'resistencia al cambio', 'sentirse a merced', 'atasco'],
    },
    significado: {
      normal:
        'La Rueda gira y todo cambia: lo que estaba abajo sube, lo que estaba ' +
        'arriba baja. Habla de un giro del destino, de ciclos que se cumplen y ' +
        'de aceptar que hay fuerzas mayores en juego. Cuando la suerte cambia a ' +
        'favor, conviene aprovecharla.',
      invertida:
        'Del revés, la rueda parece girar en contra: mala racha, ciclos que se ' +
        'repiten, la sensación de estar a merced de lo que pasa. También puede ' +
        'ser resistirse a un cambio inevitable en vez de fluir con él.',
    },
    simbolismo:
      'Una gran rueda gira en el cielo, rodeada de criaturas que suben y bajan ' +
      'con ella. En las esquinas, cuatro figuras aladas leen: lo que cambia se ' +
      'entiende mejor desde lo que permanece. Las letras del centro recuerdan ' +
      'que el giro obedece a una ley.',
  },
  'mayor-11': {
    nombre: 'La Justicia',
    palabrasClave: {
      normal: ['equidad', 'verdad', 'causa y efecto', 'responsabilidad', 'claridad'],
      invertida: ['injusticia', 'evadir la culpa', 'desequilibrio', 'deshonestidad'],
    },
    significado: {
      normal:
        'La Justicia pesa los hechos sin apasionarse. Habla de verdad, de ' +
        'consecuencias que corresponden a lo hecho y de asumir la propia parte ' +
        'con honestidad. Es el momento de decidir con claridad y de que cada ' +
        'cosa reciba lo que le toca.',
      invertida:
        'Del revés, la balanza se tuerce: injusticia, decisiones parciales, o ' +
        'esquivar la responsabilidad de lo que uno provocó. Puede señalar ' +
        'engañarse sobre los propios actos o cargar con culpas ajenas.',
    },
    simbolismo:
      'Sentada entre dos columnas, sostiene una espada erguida en una mano y ' +
      'una balanza en la otra: la razón que corta y el equilibrio que mide. A ' +
      'diferencia de otras figuras, mira de frente, con los ojos abiertos: ' +
      'juzga lo que ve, no lo que imagina.',
  },
  'mayor-12': {
    nombre: 'El Colgado',
    palabrasClave: {
      normal: ['pausa', 'entrega', 'otra mirada', 'sacrificio', 'suspensión'],
      invertida: ['estancamiento', 'resistencia', 'sacrificio inútil', 'demora'],
    },
    significado: {
      normal:
        'El Colgado detiene la acción para cambiar la mirada. Habla de soltar el ' +
        'control, aceptar una pausa y ver la situación al revés de como venías ' +
        'mirándola. A veces avanzar es, justamente, quedarse quieto un tiempo.',
      invertida:
        'Del revés, la pausa se vuelve atasco: resistirse a soltar, esperar sin ' +
        'que nada se mueva, o hacer sacrificios que no llevan a nada. Puede ' +
        'señalar aferrarse a una postura cuando toca rendirse y mirar distinto.',
    },
    simbolismo:
      'Cuelga cabeza abajo de un árbol vivo, atado por un pie, con las manos ' +
      'ocultas y el otro pie libre: eligió estar así. Su rostro está en calma y ' +
      'un halo lo ilumina: la suspensión no es castigo, es revelación. El mundo ' +
      'se ve distinto puesto del revés.',
  },
  'mayor-13': {
    nombre: 'La Muerte',
    palabrasClave: {
      normal: ['final', 'transformación', 'cierre', 'renovación', 'soltar'],
      invertida: ['resistencia al cambio', 'estancamiento', 'aferrarse', 'miedo al final'],
    },
    significado: {
      normal:
        'La Muerte casi nunca es literal: es el final que abre paso a lo nuevo. ' +
        'Habla de cerrar una etapa, dejar morir lo que ya cumplió su ciclo y ' +
        'permitir que algo distinto nazca. Duele soltar, pero sin ese cierre no ' +
        'hay renovación.',
      invertida:
        'Del revés, el proceso se traba: aferrarse a lo que ya terminó, temer ' +
        'tanto el cambio que se prolonga la agonía. Puede señalar una ' +
        'transformación que pide paso y a la que te resistes con todas tus ' +
        'fuerzas.',
    },
    simbolismo:
      'Un esqueleto con armadura avanza sobre un caballo blanco, portando una ' +
      'bandera con una rosa: lo que barre también anuncia belleza nueva. Ante ' +
      'él, reyes y niños caen por igual. Al fondo, el sol se alza entre dos ' +
      'columnas: cada final es también un amanecer.',
  },
  'mayor-14': {
    nombre: 'La Templanza',
    palabrasClave: {
      normal: ['equilibrio', 'mesura', 'síntesis', 'paciencia', 'armonía'],
      invertida: ['exceso', 'impaciencia', 'desequilibrio', 'desarmonía'],
    },
    significado: {
      normal:
        'La Templanza mezcla en su justa medida. Habla de encontrar el punto ' +
        'medio, combinar lo que parecía incompatible y avanzar con paciencia y ' +
        'moderación. Es la calma que resulta de no ir ni de más ni de menos.',
      invertida:
        'Del revés, se pierde la medida: exceso en algún terreno, impaciencia ' +
        'que arruina el proceso, o elementos que no logran integrarse. Puede ' +
        'señalar una vida sin equilibrio, tironeada entre extremos.',
    },
    simbolismo:
      'Un ángel vierte agua entre dos copas sin derramar una gota: el flujo ' +
      'constante que mezcla sin perder. Tiene un pie en tierra y otro en el ' +
      'agua —lo material y lo emocional—, y un sendero lleva al fondo hacia una ' +
      'luz: el equilibrio es también un camino.',
  },
  'mayor-15': {
    nombre: 'El Diablo',
    palabrasClave: {
      normal: ['apego', 'deseo', 'ataduras', 'sombra', 'materialismo'],
      invertida: ['liberación', 'romper cadenas', 'recuperar el control', 'toma de conciencia'],
    },
    significado: {
      normal:
        'El Diablo muestra las cadenas que uno mismo se pone: apegos, hábitos, ' +
        'deseos que esclavizan. Habla de lo que te ata aunque creas elegirlo, de ' +
        'la sombra que preferimos no mirar. Reconocer la atadura es el primer ' +
        'paso para soltarla.',
      invertida:
        'Del revés, se afloja la cadena: tomar conciencia de lo que te esclaviza ' +
        'y empezar a liberarte, recuperar el control sobre un deseo o un ' +
        'vínculo. Es la salida del pozo, aunque cueste el primer tirón.',
    },
    simbolismo:
      'Una figura demoníaca domina a dos seres encadenados a su pedestal. Pero ' +
      'mira las cadenas: son holgadas, podrían quitárselas por encima de la ' +
      'cabeza. La atadura es más elegida que impuesta. La antorcha invertida ' +
      'alumbra hacia abajo, hacia lo material.',
  },
  'mayor-16': {
    nombre: 'La Torre',
    palabrasClave: {
      normal: ['ruptura súbita', 'revelación', 'derrumbe', 'liberación', 'verdad'],
      invertida: ['crisis evitada', 'miedo al cambio', 'derrumbe postergado', 'resistencia'],
    },
    significado: {
      normal:
        'La Torre es el derrumbe repentino de lo que estaba mal construido. ' +
        'Habla de una verdad que estalla, de estructuras falsas que caen de ' +
        'golpe. Es doloroso, pero libera: lo que se cae no se sostenía, y sobre ' +
        'el suelo despejado se puede construir mejor.',
      invertida:
        'Del revés, el derrumbe se resiste o se posterga: una crisis que se ve ' +
        'venir y se evita, un cambio necesario al que uno se aferra. Puede ser ' +
        'un sacudón interno que aún no estalla hacia afuera.',
    },
    simbolismo:
      'Un rayo parte una torre en lo alto de un risco y arranca la corona de su ' +
      'cima; dos figuras caen al vacío. El fuego y las llamas que escapan por ' +
      'las ventanas son la verdad que ya no cabe adentro. Lo falso arde para ' +
      'que quede solo la roca.',
  },
  'mayor-17': {
    nombre: 'La Estrella',
    palabrasClave: {
      normal: ['esperanza', 'fe', 'inspiración', 'serenidad', 'renovación'],
      invertida: ['desánimo', 'fe perdida', 'desconexión', 'pesimismo'],
    },
    significado: {
      normal:
        'La Estrella llega después de la tormenta de la Torre, como una calma ' +
        'luminosa. Habla de esperanza renovada, de fe en que las cosas pueden ' +
        'sanar y de una guía suave que orienta. Es el momento de curarse y ' +
        'volver a confiar.',
      invertida:
        'Del revés, la luz se apaga: desánimo, fe perdida, la sensación de que ' +
        'no vale la pena confiar. Puede señalar desconexión de lo que te ' +
        'inspiraba o un pesimismo que nubla las señales buenas.',
    },
    simbolismo:
      'Desnuda junto a un estanque, una mujer vierte agua en la tierra y en el ' +
      'agua: se muestra sin defensas, en paz. Sobre ella brilla una gran ' +
      'estrella rodeada de siete menores. El pájaro en el árbol y la quietud ' +
      'del paisaje hablan de una serenidad recuperada.',
  },
  'mayor-18': {
    nombre: 'La Luna',
    palabrasClave: {
      normal: ['ilusión', 'miedos', 'intuición', 'incertidumbre', 'sueños'],
      invertida: ['claridad que vuelve', 'miedos que se disipan', 'verdad revelada', 'confusión que cede'],
    },
    significado: {
      normal:
        'La Luna alumbra un paisaje incierto, donde las cosas no son lo que ' +
        'parecen. Habla de miedos, ilusiones y señales confusas, pero también ' +
        'de la intuición que sabe moverse en la penumbra. No es momento de ' +
        'certezas: es momento de andar despacio y confiar en el instinto.',
      invertida:
        'Del revés, la niebla empieza a levantarse: miedos que se disipan, un ' +
        'engaño que se aclara, la verdad que asoma tras la confusión. También ' +
        'puede ser el desconcierto en su punto más denso, justo antes de ' +
        'aclarar.',
    },
    simbolismo:
      'La luna vierte gotas sobre un sendero que se pierde entre dos torres. Un ' +
      'perro y un lobo le aúllan —lo domesticado y lo salvaje del miedo—, y un ' +
      'cangrejo emerge del agua, del inconsciente. El camino existe, pero se ' +
      'recorre casi a ciegas.',
  },
  'mayor-19': {
    nombre: 'El Sol',
    palabrasClave: {
      normal: ['alegría', 'claridad', 'éxito', 'vitalidad', 'verdad'],
      invertida: ['optimismo nublado', 'entusiasmo apagado', 'demora en brillar', 'desánimo pasajero'],
    },
    significado: {
      normal:
        'El Sol lo ilumina todo sin sombras: es la carta de la alegría clara y ' +
        'la vitalidad. Habla de éxito, de verdad que se muestra a plena luz y ' +
        'de una felicidad sencilla y sin dobleces. Después de la Luna, por fin ' +
        'se ve con nitidez.',
      invertida:
        'Del revés, el sol no se apaga, pero se nubla un poco: entusiasmo que ' +
        'cuesta encender, una alegría postergada, un optimismo que hay que ' +
        'recuperar. Suele ser algo pasajero: la luz sigue ahí, tapada un rato.',
    },
    simbolismo:
      'Un sol enorme, con rostro sereno, irradia sobre un niño desnudo montado ' +
      'en un caballo blanco: la inocencia que no teme mostrarse. Los girasoles ' +
      'sobre el muro giran hacia la luz. Todo es abierto, cálido y sin secretos.',
  },
  'mayor-20': {
    nombre: 'El Juicio',
    palabrasClave: {
      normal: ['despertar', 'llamado', 'renacer', 'balance', 'perdón'],
      invertida: ['autocrítica dura', 'llamado ignorado', 'duda', 'quedarse en el pasado'],
    },
    significado: {
      normal:
        'El Juicio es un despertar: el llamado a mirar la propia vida con ' +
        'perspectiva y responder a algo mayor. Habla de renacer tras un balance ' +
        'honesto, de perdonarse y perdonar, y de dar el paso hacia una versión ' +
        'más plena de uno mismo.',
      invertida:
        'Del revés, el llamado se desoye o se vuelve en contra: autocrítica que ' +
        'no perdona, dudas para dar el paso, o quedarse atrapado en un pasado ' +
        'que pide cierre. Puede señalar que evitas una decisión que ya sabes ' +
        'cuál es.',
    },
    simbolismo:
      'Un ángel toca la trompeta desde las nubes y, abajo, figuras se alzan de ' +
      'sus tumbas con los brazos abiertos: responden al llamado sin miedo. Las ' +
      'aguas y las montañas al fondo hablan de un fin de ciclo; lo que renace ' +
      'lo hace ya renovado.',
  },
  'mayor-21': {
    nombre: 'El Mundo',
    palabrasClave: {
      normal: ['plenitud', 'logro', 'integración', 'cierre feliz', 'totalidad'],
      invertida: ['cierre pendiente', 'meta a medias', 'demora', 'falta de integración'],
    },
    significado: {
      normal:
        'El Mundo cierra el viaje de los Arcanos con plenitud. Habla de un ciclo ' +
        'completado, de una meta alcanzada y de la sensación de estar entero y ' +
        'en armonía con lo que te rodea. Es la recompensa del camino recorrido y, ' +
        'a la vez, el umbral hacia uno nuevo.',
      invertida:
        'Del revés, el cierre está cerca pero incompleto: una meta a la que le ' +
        'falta un paso, un ciclo que no terminas de integrar, una demora sobre ' +
        'el final. Invita a atar el último cabo antes de celebrar.',
    },
    simbolismo:
      'Una figura danza dentro de una corona de laurel, sostiene dos varas y ' +
      'está rodeada, en las esquinas, por las mismas cuatro criaturas de la ' +
      'Rueda: el todo se cierra sobre sí mismo. La guirnalda ovalada es un ' +
      'portal: terminar es también volver a empezar.',
  },
};
