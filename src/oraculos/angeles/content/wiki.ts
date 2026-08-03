// Wiki del oraculo de Angeles (español). Base de conocimiento reescrita con voz
// propia a partir del mazo de referencia: registro MISTICO (a diferencia del
// tono didactico del Tarot), para que los dos oraculos suenen distintos ahora
// que conviven en el quiosco.
//
// Por numero de carta (1..78, mismo orden que el mazo y las imagenes). Cada
// ficha completa lo que el angel trae; los campos que el mazo no da (signo,
// regente, combinaciones, incluso el reverso en las que "no tienen") se omiten:
// no se inventan atribuciones.

export interface FichaAngel {
  nombre: string;
  /** Coro / familia a la que pertenece la carta. Ej: 'Serafines · Primer Coro'. */
  grupo: string;
  /** Signo zodiacal, solo si el mazo lo asigna. */
  signo?: string;
  /** Astro regente, solo si el mazo lo asigna. */
  regente?: string;
  /** Palabras clave, para leer la carta de un vistazo. */
  claves: {
    derecho: string[];
    /** Algunas cartas 'no tienen' revés: se omite. */
    invertido?: string[];
  };
  /** Quien es el angel: su naturaleza y el mensaje que porta (registro mistico). */
  presencia: string;
  /** Significado cuando la carta cae derecha. */
  derecho: string;
  /** Significado invertido, solo si la carta lo tiene. */
  invertido?: string;
  /** Lecturas que solo aparecen junto a otras cartas, solo si el mazo las da. */
  encuentros?: string;
}

// Secciones de la grilla Aprender: agrupan las 78 cartas por familia (los 9
// Coros, Arcángeles, representativos y negativos), como el Tarot las agrupa por
// Mayores y palos. Cada sección toma un rango contiguo de números de carta.
export const SECCIONES_ANGELES_ES: { id: string; titulo: string; desde: number; hasta: number }[] = [
  { id: 'serafines', titulo: 'Serafines', desde: 1, hasta: 3 },
  { id: 'querubines', titulo: 'Querubines', desde: 4, hasta: 6 },
  { id: 'tronos', titulo: 'Tronos', desde: 7, hasta: 9 },
  { id: 'dominaciones', titulo: 'Dominaciones', desde: 10, hasta: 12 },
  { id: 'virtudes', titulo: 'Virtudes', desde: 13, hasta: 15 },
  { id: 'potestades', titulo: 'Potestades', desde: 16, hasta: 18 },
  { id: 'principados', titulo: 'Principados', desde: 19, hasta: 21 },
  { id: 'mensajeros', titulo: 'Mensajeros', desde: 22, hasta: 24 },
  { id: 'noveno-coro', titulo: 'Noveno Coro', desde: 25, hasta: 27 },
  { id: 'arcangeles', titulo: 'Arcángeles', desde: 28, hasta: 37 },
  { id: 'representativos', titulo: 'Ángeles representativos', desde: 38, hasta: 66 },
  { id: 'negativos', titulo: 'Ángeles negativos', desde: 67, hasta: 78 },
];

// Rotulos de la ficha en español. El resto de los idiomas cae a español hasta
// que se traduzcan (mismo criterio que Runas).
export const ETIQUETAS_ANGELES_ES = {
  coro: 'Coro',
  signo: 'Signo',
  regente: 'Regente',
  claves: 'Palabras clave',
  presencia: 'Su presencia',
  derecho: 'Al derecho',
  invertido: 'Al revés',
  encuentros: 'Junto a otras cartas',
};

export const WIKI_ANGELES_ES: Record<number, FichaAngel> = {
  // ── Serafines · Primer Coro ──────────────────────────────────────────────
  1: {
    nombre: 'Serafín del Amor Puro',
    grupo: 'Serafines · Primer Coro',
    claves: {
      derecho: ['amor incondicional', 'entrega', 'bondad', 'familia'],
      invertido: ['desengaño', 'corazón cerrado', 'miedo a sentir'],
    },
    presencia:
      'Los serafines arden en el círculo más cercano a lo divino: son el fuego ' +
      'que rodea la fuente y no se consume. El Serafín del Amor Puro lleva esa ' +
      'llama al plano de los afectos. No es el amor que pide, sino el que da; el ' +
      'que sostiene a los propios y se derrama, sin cálculo, sobre todo lo que ' +
      'vive. Cuando aparece, algo en tu vida está siendo mirado por ese amor que ' +
      'no espera nada a cambio.',
    derecho:
      'Derecha, la carta habla de un cariño limpio y elevado: el amor a la ' +
      'familia y a la humanidad, los sentimientos que no buscan provecho. ' +
      'Anuncia —o describe— a alguien de corazón generoso, que hace el bien por ' +
      'el simple gusto de hacerlo. Es señal de vínculos sanos, de entrega ' +
      'sincera y de una bondad que abriga a quien la recibe.',
    invertido:
      'Invertida, la llama se repliega hacia adentro. Puede señalar un ' +
      'desengaño que enfrió el corazón, o el miedo a mostrar lo que se siente: ' +
      'un amor verdadero que no se anima a decirse y se guarda hasta doler. La ' +
      'carta invita a bajar esa guardia antes de que el silencio se vuelva ' +
      'distancia.',
  },
  2: {
    nombre: 'Serafín Sanador',
    grupo: 'Serafines · Primer Coro',
    claves: {
      derecho: ['curación', 'tratamiento eficaz', 'alivio', 'medicina'],
      invertido: ['remedio que no obra', 'demora en sanar'],
    },
    presencia:
      'De la misma hoguera divina desciende el Serafín Sanador, que acerca su ' +
      'fuego a la herida para cerrarla. Es la mano que cura y la ciencia que ' +
      'acierta: la figura del médico, del remedio justo, de la salud que vuelve.',
    derecho:
      'Derecha, promete una solución eficaz a una dolencia: el tratamiento ' +
      'obra, el cuerpo responde, la mejoría llega. Suele señalar a la persona ' +
      'que cura —el médico, el terapeuta— o al camino correcto para recuperar ' +
      'la salud.',
    invertido:
      'Invertida, avisa que el remedio elegido no está dando fruto. El ' +
      'tratamiento no alcanza o no es el adecuado: conviene revisar el rumbo y ' +
      'buscar otra mano.',
  },
  3: {
    nombre: 'Serafín Cantor',
    grupo: 'Serafines · Primer Coro',
    claves: {
      derecho: ['arte', 'creatividad', 'inspiración', 'don'],
      invertido: ['tristeza', 'sequía creativa', 'desánimo'],
    },
    presencia:
      'El Serafín Cantor es la voz del coro celestial: el que convierte el ' +
      'fuego en música. Encarna al artista, al alma dotada de un don creativo ' +
      'que necesita expresarse para estar en paz.',
    derecho:
      'Derecha, revela a una persona muy creativa, con talento y sensibilidad ' +
      'para el arte. Anuncia inspiración y buenos frutos de lo que se crea.',
    invertido:
      'Invertida, describe un estado de tristeza y de inspiración apagada: la ' +
      'fuente se secó por un tiempo y cuesta volver a cantar.',
    encuentros:
      'Junto al Ángel del Amor augura un buen futuro y puede anunciar la ' +
      'proximidad de un embarazo.',
  },
  // ── Querubines · Segundo Coro ────────────────────────────────────────────
  4: {
    nombre: 'Querubín Kerub, Ángel Mediador',
    grupo: 'Querubines · Segundo Coro',
    claves: {
      derecho: ['consejo', 'mediación', 'acuerdo', 'sabiduría'],
      invertido: ['falta de apoyo', 'desamparo'],
    },
    presencia:
      'Los querubines guardan el conocimiento y la puerta de lo sagrado. Kerub, ' +
      'el Mediador, tiende puentes: es la voz serena que aconseja y reconcilia ' +
      'a las partes enfrentadas.',
    derecho:
      'Derecha, señala a la persona consejera y conciliadora, la que ayuda a ' +
      'encontrar el punto medio y a destrabar un conflicto con palabras justas.',
    invertido:
      'Invertida, habla de falta de apoyo justo cuando más se necesita: una ' +
      'situación delicada que se enfrenta en soledad.',
  },
  5: {
    nombre: 'Querubín Karibu, Ángel Guardián',
    grupo: 'Querubines · Segundo Coro',
    claves: {
      derecho: ['protección', 'principios', 'justicia', 'firmeza'],
      invertido: ['intolerancia', 'rigidez'],
    },
    presencia:
      'Karibu es el centinela que custodia lo que importa. Encarna a la persona ' +
      'de principios firmes, ligada a la ley y a lo justo, que protege con ' +
      'autoridad a quienes tiene a cargo.',
    derecho:
      'Derecha, representa a alguien con peso —a menudo con poder judicial o de ' +
      'mando—, protector y recto, que sostiene sus valores sin claudicar.',
    invertido:
      'Invertida, esa firmeza se endurece de más: conservadurismo, rigidez, ' +
      'intolerancia con lo que piensa distinto.',
  },
  6: {
    nombre: 'Querubín Longevo, Custodio del Árbol de la Vida',
    grupo: 'Querubines · Segundo Coro',
    signo: 'Virgo',
    claves: {
      derecho: ['experiencia', 'sabiduría', 'madurez', 'consejo'],
      invertido: ['ideas equivocadas', 'poca fiabilidad'],
    },
    presencia:
      'El Custodio del Árbol de la Vida vela por la raíz de lo que existe. Es ' +
      'la figura del anciano sabio: mucha vida vivida, mucho aprendido, un ' +
      'conocimiento que solo dan los años.',
    derecho:
      'Derecha, representa a la persona de gran experiencia y hondura, cuyo ' +
      'consejo vale porque nace de lo recorrido. Se asocia al signo de Virgo.',
    invertido:
      'Invertida, esa sabiduría se tuerce: ideas equivocadas, criterios poco ' +
      'confiables, alguien en quien no conviene apoyarse.',
  },
  // ── Tronos · Tercer Coro ─────────────────────────────────────────────────
  7: {
    nombre: 'Trono Masculino y Femenino',
    grupo: 'Tronos · Tercer Coro',
    claves: {
      derecho: ['ideas firmes', 'temple', 'dominio de las pasiones'],
      invertido: ['proyectos que no cuajan', 'ideas erradas'],
    },
    presencia:
      'Los tronos sostienen la voluntad divina como asiento de lo estable. ' +
      'Esta carta encarna la mente de ideas fijas, la persona que no se deja ' +
      'arrastrar por el impulso y mantiene su rumbo.',
    derecho:
      'Derecha, describe a quien piensa con firmeza y, en el amor, no se deja ' +
      'llevar por las pasiones: prima la cabeza sobre el arrebato.',
    invertido:
      'Invertida, esa fijeza estorba: dificultades para concretar proyectos, ' +
      'ideas equivocadas. Puede señalar un falso embarazo.',
  },
  8: {
    nombre: 'Tronos Creativos',
    grupo: 'Tronos · Tercer Coro',
    signo: 'Géminis',
    claves: {
      derecho: ['creatividad', 'ideas grandes', 'innovación'],
      invertido: ['bloqueo', 'proyectos paralizados'],
    },
    presencia:
      'Los Tronos Creativos son el asiento donde nacen las grandes ideas: la ' +
      'mente que inventa y renueva, siempre un paso adelante de lo conocido.',
    derecho:
      'Derecha, representa a la persona creativa e innovadora, de mente fértil ' +
      'y visión propia. Corresponde al signo de Géminis.',
    invertido:
      'Invertida, la fuente se apaga: falta de creatividad, proyectos que se ' +
      'estancan y no arrancan.',
  },
  9: {
    nombre: 'Tronos, los Extranjeros',
    grupo: 'Tronos · Tercer Coro',
    signo: 'Acuario',
    claves: {
      derecho: ['cambios', 'ideas nuevas', 'fuerza mental'],
      invertido: ['mente confusa', 'evasión'],
    },
    presencia:
      'Vienen de lejos y traen lo nuevo. Los Extranjeros encarnan el cambio, ' +
      'las ideas que rompen lo establecido y el poder de la mente para ' +
      'transformar la realidad.',
    derecho:
      'Derecha, anuncia cambios, ideas frescas y la fuerza del pensamiento. ' +
      'Puede señalar a alguien que llega de lejos para instalarse aquí. ' +
      'Corresponde al signo de Acuario.',
    invertido:
      'Invertida, esa fuerza mental se enturbia: confusión, y el riesgo de ' +
      'buscar en la evasión —incluso en las drogas— lo que no se encuentra.',
  },
  // ── Dominaciones · Cuarto Coro ───────────────────────────────────────────
  10: {
    nombre: 'Dominación Yahriel, el Ángel Gobernante',
    grupo: 'Dominaciones · Cuarto Coro',
    claves: {
      derecho: ['liderazgo', 'mando', 'autoridad'],
      invertido: ['tiranía', 'abuso de poder'],
    },
    presencia:
      'Las dominaciones ordenan el gobierno del cielo. Yahriel es la mano que ' +
      'conduce: la capacidad de liderar y de poner orden en lo que dirige.',
    derecho:
      'Derecha, representa a quien es capaz de liderar —una situación, una ' +
      'empresa, un país— con mando natural y sentido de conducción.',
    invertido:
      'Invertida, el mando se corrompe: tiranía, poder ejercido sobre los demás ' +
      'sin medida.',
  },
  11: {
    nombre: 'Dominación Chasmal, el que habla con pasión',
    grupo: 'Dominaciones · Cuarto Coro',
    claves: {
      derecho: ['pasión', 'ímpetu', 'entusiasmo'],
      invertido: ['exaltación', 'reacción desmedida'],
    },
    presencia:
      'Chasmal habla con fuego en la voz. Encarna a la persona apasionada e ' +
      'impulsiva, que se entrega a lo que siente con todo el cuerpo.',
    derecho:
      'Derecha, describe el temperamento ardiente y espontáneo, capaz de ' +
      'contagiar su entusiasmo.',
    invertido:
      'Invertida, la pasión se desborda: reacciones exaltadas, un carácter que ' +
      'pierde los estribos con facilidad.',
  },
  12: {
    nombre: 'Dominación Zadkiel, el Ángel Misericordioso',
    grupo: 'Dominaciones · Cuarto Coro',
    claves: {
      derecho: ['sensibilidad', 'nobleza', 'voluntad'],
      invertido: ['egoísmo', 'engaño', 'deslealtad'],
    },
    presencia:
      'Zadkiel derrama la misericordia. Es el alma sensible y voluntariosa, de ' +
      'sentimientos nobles, que acompaña sin pedir nada.',
    derecho:
      'Derecha, representa a la persona de buen corazón y firme voluntad, buena ' +
      'compañera en el camino.',
    invertido:
      'Invertida, se vuelve su contrario: egoísmo, engaño, mala compañía en ' +
      'quien no se puede confiar.',
  },
  // ── Virtudes · Quinto Coro ───────────────────────────────────────────────
  13: {
    nombre: 'Virtud Miguel, el Ángel Refulgente',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['nobleza', 'altruismo', 'ayuda extraordinaria'],
    },
    presencia:
      'Las virtudes obran los milagros y sostienen el ánimo. Miguel Refulgente ' +
      'brilla como el alma noble y altruista: una ayuda que llega cuando ' +
      'parecía imposible.',
    derecho:
      'Derecha, representa a una persona de gran corazón, generosa, que aparece ' +
      'como un auxilio extraordinario. Es una de las cartas más luminosas del ' +
      'mazo: no tiene lectura invertida, porque su bien no se invierte.',
  },
  14: {
    nombre: 'Virtud Tarshsis, el Ángel que custodió a Cristo',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['protección familiar', 'amparo', 'cuidado'],
    },
    presencia:
      'Tarshsis es el guardián que veló por lo más sagrado. Encarna la ' +
      'protección de la familia: el que cuida de los suyos y los mantiene a ' +
      'salvo.',
    derecho:
      'Derecha, habla de amparo y cuidado en el hogar, de alguien que vela por ' +
      'los suyos. Como Miguel, no tiene lectura invertida: su protección no se ' +
      'da vuelta.',
  },
  15: {
    nombre: 'Virtud Bariel, el que infunde coraje',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['coraje', 'valentía', 'decisión'],
      invertido: ['indecisión', 'temor'],
    },
    presencia:
      'Bariel presta su fuego a los que dudan. Es el valor que se necesita para ' +
      'tomar las decisiones difíciles, el temple ante lo que asusta.',
    derecho:
      'Derecha, representa el coraje: la persona que se anima a decidir aun ' +
      'cuando el camino da miedo.',
    invertido:
      'Invertida, ese valor falta: indecisión, parálisis ante lo que hay que ' +
      'resolver.',
  },
  // ── Potestades · Sexto Coro ──────────────────────────────────────────────
  16: {
    nombre: 'Potestad Camael, el Ángel de la Dualidad',
    grupo: 'Potestades · Sexto Coro',
    regente: 'Urano',
    claves: {
      derecho: ['equilibrio', 'reconciliación', 'ambigüedad'],
      invertido: ['deshonestidad', 'dobleces'],
    },
    presencia:
      'Las potestades contienen las fuerzas del caos. Camael sostiene la ' +
      'balanza entre los opuestos: es el equilibrio y la reconciliación, pero ' +
      'también la ambigüedad de quien se vale de cualquier medio para su fin. ' +
      'Lo rige Urano.',
    derecho:
      'Derecha, representa la búsqueda del equilibrio y la reconciliación entre ' +
      'partes; su cara sombría es la ambigüedad, el fin que justifica los ' +
      'medios.',
    invertido:
      'Invertida, gana esa cara turbia: una persona poco honesta, de dobleces.',
  },
  17: {
    nombre: 'Potestad Kemuel, mediador entre el bien y el mal',
    grupo: 'Potestades · Sexto Coro',
    claves: {
      derecho: ['equilibrio moral', 'ayuda', 'discernimiento'],
      invertido: ['soberbia', 'no acepta consejo'],
    },
    presencia:
      'Kemuel se para en la frontera entre lo correcto y lo incorrecto y busca ' +
      'el punto justo. Encarna a quien trata de ayudar a los demás sin perder ' +
      'el norte moral.',
    derecho:
      'Derecha, representa a la persona que busca el equilibrio entre el bien y ' +
      'el mal y se ofrece a ayudar.',
    invertido:
      'Invertida, se cree por encima de todo prejuicio y no escucha el consejo ' +
      'ajeno: cae en la soberbia.',
  },
  18: {
    nombre: 'Potestad Sensiner',
    grupo: 'Potestades · Sexto Coro',
    regente: 'Saturno',
    claves: {
      derecho: ['abatimiento', 'malos hábitos', 'errores'],
      invertido: ['pérdidas morales', 'pérdidas materiales'],
    },
    presencia:
      'Sensiner es la potestad de la sombra interior. Encarna a la persona ' +
      'abatida, presa de malos hábitos, propensa a equivocarse. Lo rige Saturno.',
    derecho:
      'Derecha, describe un ánimo depresivo y una facilidad para el error que ' +
      'nacen de hábitos que hacen daño.',
    invertido:
      'Invertida, todo se agrava: pérdidas tanto morales como materiales.',
  },
  // ── Principados · Séptimo Coro ───────────────────────────────────────────
  19: {
    nombre: 'Principado Anael, de la Creación y la Sensualidad',
    grupo: 'Principados · Séptimo Coro',
    signo: 'Capricornio',
    regente: 'Saturno',
    claves: {
      derecho: ['poder', 'belleza', 'liderazgo', 'seducción'],
      invertido: ['soberbia', 'egoísmo', 'riesgo de enfermedad'],
    },
    presencia:
      'Los principados guían a los pueblos y a los que mandan. Anael reúne ' +
      'poder, belleza y magnetismo: el liderazgo que atrae y el éxito con el ' +
      'sexo opuesto. Rige Saturno; corresponde a Capricornio.',
    derecho:
      'Derecha, habla de poder personal, belleza física, capacidad de conducir ' +
      'y de seducir. Todo lo que brilla y se hace notar.',
    invertido:
      'Invertida, ese brillo se envanece: egoísmo, soberbia, y un riesgo de ' +
      'enfermedad que conviene atender.',
  },
  20: {
    nombre: 'Principado Hamiel, que transportó a Enoc al Cielo',
    grupo: 'Principados · Séptimo Coro',
    signo: 'Virgo',
    claves: {
      derecho: ['guía espiritual', 'inteligencia', 'sabiduría'],
      invertido: ['confusión', 'desamparo espiritual'],
    },
    presencia:
      'Hamiel condujo a Enoc hasta el cielo: es el guía que eleva. Encarna al ' +
      'consejero espiritual, la inteligencia unida a la sabiduría. Corresponde ' +
      'al signo de Virgo.',
    derecho:
      'Derecha, representa al maestro o consejero del alma, la mente lúcida que ' +
      'orienta con hondura.',
    invertido:
      'Invertida, falta esa luz: confusión y ausencia de guía espiritual.',
    encuentros:
      'Junto a Lucifer o a Rimmon puede advertir la posibilidad de una ' +
      'enfermedad grave.',
  },
  21: {
    nombre: 'Principado Cervill, que ayudó a David contra Goliat',
    grupo: 'Principados · Séptimo Coro',
    claves: {
      derecho: ['amistad', 'apoyo', 'comprensión'],
      invertido: ['soledad', 'sentirse solo'],
    },
    presencia:
      'Cervill dio fuerzas al pequeño frente al gigante. Es el amigo que ' +
      'aparece en la hora difícil: la ayuda y la comprensión cuando la batalla ' +
      'parece perdida.',
    derecho:
      'Derecha, representa la amistad verdadera, el apoyo y el entendimiento en ' +
      'los momentos duros.',
    invertido:
      'Invertida, ese sostén se ausenta: un hondo sentimiento de soledad.',
  },
  // ── Mensajeros · Octavo Coro ─────────────────────────────────────────────
  22: {
    nombre: 'Dobiel, mensajero de decretos divinos',
    grupo: 'Mensajeros · Octavo Coro',
    claves: {
      derecho: ['comunicación', 'mensaje', 'comprensión'],
      invertido: ['crisis', 'confusión de sentimientos'],
    },
    presencia:
      'Los mensajeros llevan la palabra del cielo a la tierra. Dobiel trae los ' +
      'decretos divinos: es la persona comprensiva que todo lo transmite a ' +
      'través del lenguaje.',
    derecho:
      'Derecha, anuncia un mensaje con cosas interesantes y a alguien que sabe ' +
      'ponerlo en palabras y hacerse entender.',
    invertido:
      'Invertida, el mensaje se enreda: crisis y confusión en los sentimientos.',
  },
  23: {
    nombre: 'Ángel Renueco, Mensajero',
    grupo: 'Mensajeros · Octavo Coro',
    claves: {
      derecho: ['legado', 'fin de una etapa', 'nuevo comienzo'],
    },
    presencia:
      'Renueco anuncia el relevo. Es el mensajero de los ciclos: lo que termina ' +
      'para que algo nuevo empiece, el legado que se recibe al cerrar una ' +
      'puerta.',
    derecho:
      'Derecha, representa un legado y el fin de una etapa que da paso a otra. ' +
      'No tiene lectura invertida: el ciclo sigue su curso igual.',
  },
  24: {
    nombre: 'Ángel Sariel, Mensajero',
    grupo: 'Mensajeros · Octavo Coro',
    claves: {
      derecho: ['revelación', 'nuevos ideales', 'herencia'],
      invertido: ['falta de comunicación', 'silencio'],
    },
    presencia:
      'Sariel Mensajero descorre velos. Trae el descubrimiento de nuevos ' +
      'ideales y la revelación de lo que estaba oculto.',
    derecho:
      'Derecha, anuncia el hallazgo de un rumbo nuevo o la resolución de un ' +
      'enigma; puede señalar una herencia.',
    invertido:
      'Invertida, se corta el hilo: falta de comunicación, mensajes que no ' +
      'llegan.',
  },
  // ── Noveno Coro ──────────────────────────────────────────────────────────
  25: {
    nombre: 'Médico Zagzagel, el Ángel médico',
    grupo: 'Noveno Coro',
    claves: {
      derecho: ['curación', 'tratamiento acertado', 'salud'],
      invertido: ['recaída', 'tratamiento fallido'],
    },
    presencia:
      'Zagzagel es la sabiduría que sana. Encarna la curación y el acierto del ' +
      'tratamiento: la salud que se recupera cuando la mano es la correcta.',
    derecho:
      'Derecha, es señal favorable: la curación llega y el tratamiento da ' +
      'resultado.',
    invertido:
      'Invertida, todo lo contrario: el remedio no obra y la salud no responde.',
  },
  26: {
    nombre: 'Uriel, encargado de las llaves',
    grupo: 'Noveno Coro',
    claves: {
      derecho: ['arrepentimiento', 'escarmiento', 'aprendizaje'],
    },
    presencia:
      'Uriel guarda las llaves y es serafín y querubín a la vez. Es el Ángel ' +
      'del Arrepentimiento: el que muestra el precio de los errores y el ' +
      'esfuerzo que cuesta enmendarlos.',
    derecho:
      'Simboliza los escarmientos que hay que sufrir por lo hecho y los apuros ' +
      'que hay que soportar para salir adelante. No es un castigo, sino una ' +
      'lección: la puerta se abre después de aprender.',
  },
  27: {
    nombre: 'Custodio de las Ciudades',
    grupo: 'Noveno Coro',
    claves: {
      derecho: ['protección', 'cuidado', 'resguardo'],
      invertido: ['desprotección', 'exposición'],
    },
    presencia:
      'Vela los portones de las ciudades: es el guardián de los umbrales, el ' +
      'que cuida lo que está dentro de sus muros.',
    derecho:
      'Derecha, habla de protección y cuidado: alguien o algo resguarda tu ' +
      'situación.',
    invertido:
      'Invertida, esos muros caen: quedar sin ninguna protección, a la ' +
      'intemperie.',
  },
  // ── Los Arcángeles ───────────────────────────────────────────────────────
  28: {
    nombre: 'Arcángel Miguel',
    grupo: 'Arcángeles',
    claves: {
      derecho: ['justicia', 'cambios importantes', 'verdad'],
      invertido: ['injusticia', 'retrasos'],
    },
    presencia:
      'Miguel, «el semejante a Dios», es el príncipe de las milicias celestes, ' +
      'el que empuña la espada de la justicia. Su carta marca los grandes ' +
      'giros de la vida, los que reordenan lo torcido.',
    derecho:
      'Derecha, representa la justicia que se hace y los cambios importantes ' +
      'que llegan para poner cada cosa en su lugar.',
    invertido:
      'Invertida, la balanza se tuerce: injusticias y retrasos para alcanzar ' +
      'lo que se busca.',
  },
  29: {
    nombre: 'Arcángel Gabriel',
    grupo: 'Arcángeles',
    regente: 'Neptuno',
    claves: {
      derecho: ['subconsciente', 'intuición', 'viajes', 'discreción'],
      invertido: ['desconfianza', 'confusión'],
    },
    presencia:
      'Gabriel, el gran anunciador, gobierna el mundo de lo oculto y el ' +
      'subconsciente. Habita la dualidad de lo bueno y lo malo, lo visible y lo ' +
      'secreto. Lo rige Neptuno.',
    derecho:
      'Derecha, habla del mundo interior y los sueños, la afición por los ' +
      'viajes y la buena memoria. Situaciones comprometidas que se resuelven ' +
      'con discreción; todo lo ligado al misterio.',
    invertido:
      'Invertida, falta el piso: desconfianza, pérdida de esperanza y ' +
      'confusión a la hora de decidir.',
  },
  30: {
    nombre: 'Arcángel Haniel',
    grupo: 'Arcángeles',
    signo: 'Libra',
    claves: {
      derecho: ['amor', 'armonía', 'abundancia', 'fecundidad'],
      invertido: ['frivolidad', 'apatía', 'esterilidad'],
    },
    presencia:
      'Haniel reúne todo lo bello de la vida. Es la gracia de Venus hecha ' +
      'arcángel: amor, armonía, éxito, fecundidad, abundancia y creatividad. ' +
      'Corresponde al signo de Libra.',
    derecho:
      'Derecha, promete lo bueno en todos sus planos: afectos plenos, ' +
      'prosperidad y creación fértil.',
    invertido:
      'Invertida, todo se vuelve superficie: frivolidad, apatía por las cosas, ' +
      'esterilidad.',
  },
  31: {
    nombre: 'Arcángel Rafael',
    grupo: 'Arcángeles',
    signo: 'Leo',
    regente: 'Sol',
    claves: {
      derecho: ['fuerza', 'brillo', 'liderazgo', 'nobleza'],
      invertido: ['egolatría', 'desencanto amoroso'],
    },
    presencia:
      'Rafael, «medicina de Dios», irradia fuerza y brillo personal. Es el alma ' +
      'noble que nace para sobresalir y ser admirada, regida por el corazón. Se ' +
      'asocia a Leo y lo rige el Sol.',
    derecho:
      'Derecha, representa a alguien noble y luminoso, con don de mando y deseo ' +
      'de destacar.',
    invertido:
      'Invertida, ese brillo se vuelve ego: una persona ególatra que siempre ' +
      'quiere salirse con la suya, y desencanto en el amor.',
    encuentros:
      'Junto a Lucifer, ambas derechas, anuncia una sexualidad plena y feliz; ' +
      'si alguna sale invertida, no durará. Junto al Ángel del Juicio, riqueza ' +
      'y amistades importantes.',
  },
  32: {
    nombre: 'Arcángel Sariel',
    grupo: 'Arcángeles',
    signo: 'Piscis',
    claves: {
      derecho: ['mandato', 'conducción', 'mensaje justo', 'sanación'],
    },
    presencia:
      'Sariel lleva el mandato de Dios y responde por la suerte de los ángeles ' +
      'que quiebran la ley. Conocido también como sanador, es guía y guardián ' +
      'del orden. Representa al signo de Piscis.',
    derecho:
      'Representa a quien lleva el control de la vida de otros —un sacerdote, un ' +
      'líder—, y también un mensaje que llega en el momento justo. Según las ' +
      'cartas que lo acompañen, anuncia la sanación del alma o de las ' +
      'emociones.',
  },
  33: {
    nombre: 'Arcángel Ragüel',
    grupo: 'Arcángeles',
    claves: {
      derecho: ['consejo', 'equilibrio', 'alta moral', 'ayuda de los astros'],
      invertido: ['falta de ética', 'desequilibrio emocional'],
    },
    presencia:
      'Ragüel, ángel de la Tierra y guardián del segundo cielo, es «el vengador ' +
      'de los astros», el que llevó a Enoc a lo alto. Encarna a la persona ' +
      'equilibrada y de alta moral, siempre dispuesta a ayudar.',
    derecho:
      'Derecha, representa a quien aconseja y sostiene a los demás, y también ' +
      'la ayuda que llega desde los astros.',
    invertido:
      'Invertida, se pierde el eje: falta de ética y desequilibrio en las ' +
      'emociones.',
  },
  34: {
    nombre: 'Arcángel Remiel',
    grupo: 'Arcángeles',
    claves: {
      derecho: ['dominio', 'triunfo', 'revelación'],
      invertido: ['tropiezos', 'futuro incierto'],
    },
    presencia:
      'Remiel es «la misericordia de Dios», el que conduce a las almas al ' +
      'Juicio Final. Encarna el dominio de sí y el espíritu triunfador.',
    derecho:
      'Derecha, habla de dominio y victoria, y puede traer la revelación de ' +
      'algo oculto o un mensaje importante.',
    invertido:
      'Invertida, el camino se traba: tropiezos y un futuro incierto.',
  },
  35: {
    nombre: 'Arcángel Raziel',
    grupo: 'Arcángeles',
    claves: {
      derecho: ['misterios', 'elevación espiritual', 'conocimiento'],
      invertido: ['peligro', 'traición', 'desconfianza'],
    },
    presencia:
      'Raziel guarda los secretos supremos: es el ángel de las regiones ' +
      'ocultas y jefe de los Tronos, el que enseñó a Adán el saber de lo ' +
      'terrenal y lo celeste.',
    derecho:
      'Derecha, significa elevación espiritual y sintonía con el cosmos: estar ' +
      'en línea con un orden mayor.',
    invertido:
      'Invertida, se abre la sombra: peligro, traición, falta de confianza.',
  },
  36: {
    nombre: 'Arcángel Metatrón',
    grupo: 'Arcángeles',
    claves: {
      derecho: ['vínculo con lo divino', 'grandeza', 'escritura', 'genio'],
      invertido: ['abuso de poder', 'egocentrismo'],
    },
    presencia:
      'Metatrón, «el escriba celestial», es el vínculo directo entre Dios y la ' +
      'humanidad. Encarna la fuerza y la grandeza, y la palabra que queda ' +
      'escrita.',
    derecho:
      'Derecha, anuncia la aparición de un escrito importante y el momento en ' +
      'que despierta el genio que llevamos dentro; puede señalar a un escritor.',
    invertido:
      'Invertida, la grandeza se pervierte: abuso de poder, egocentrismo.',
  },
  37: {
    nombre: 'Arcángel Amiel',
    grupo: 'Arcángeles',
    signo: 'Tauro',
    claves: {
      derecho: ['lo nuevo', 'cambios', 'viajes'],
      invertido: ['temor a lo desconocido', 'retraimiento'],
    },
    presencia:
      'Amiel abre las puertas de lo inexplorado. Encarna lo nuevo, los cambios ' +
      'hacia lo poco conocido y los viajes. Representa al signo de Tauro.',
    derecho:
      'Derecha, invita a cruzar el umbral: cambios, descubrimientos, caminos ' +
      'que se abren.',
    invertido:
      'Invertida, gana el miedo: temor a lo desconocido, retraimiento ante lo ' +
      'nuevo.',
  },
  // ── Ángeles representativos ──────────────────────────────────────────────
  38: {
    nombre: 'Ángeles de la Muerte',
    grupo: 'Ángeles representativos',
    signo: 'Escorpio',
    claves: {
      derecho: ['cambio brusco', 'ruptura', 'transformación'],
      invertido: ['pérdida', 'fracaso'],
    },
    presencia:
      'No hablan tanto del fin como del umbral: los Ángeles de la Muerte marcan ' +
      'el cambio brusco, lo que se corta de raíz para que otra cosa nazca. ' +
      'Representan al signo de Escorpio.',
    derecho:
      'Derecha, anuncia un cambio radical; en la pareja, una ruptura. También ' +
      'puede señalar una intervención quirúrgica. Rara vez es literal: casi ' +
      'siempre es una transformación necesaria.',
    invertido:
      'Invertida, pesa la pérdida y el fracaso; según la carta que acompañe, ' +
      'puede apuntar a una muerte física.',
    encuentros:
      'Con Mastema y Carniveau, magia negra. Con Abadón, enfermedades sexuales ' +
      'o cancerosas. Con Kemuel, la paralización de una situación, sucesos ' +
      'inesperados y pérdidas.',
  },
  39: {
    nombre: 'Ángeles de la Batalla',
    grupo: 'Ángeles representativos',
    regente: 'Marte',
    claves: {
      derecho: ['conflicto', 'traición', 'enemigos'],
    },
    presencia:
      'Traen el fragor de Marte. Los Ángeles de la Batalla son el infortunio y ' +
      'la pelea: los enemigos, las traiciones, el terreno en disputa.',
    derecho:
      'Representan las peleas, las traiciones y los adversarios que se cruzan en ' +
      'el camino. No tienen lectura invertida: la batalla es la batalla.',
  },
  40: {
    nombre: 'Hada del Amor',
    grupo: 'Ángeles representativos',
    regente: 'Venus',
    claves: {
      derecho: ['llegada del amor', 'pareja estable', 'seguridad'],
      invertido: ['frustración', 'soledad', 'separación'],
    },
    presencia:
      'Con su varita, el Hada del Amor bendice los vínculos. Es la promesa de ' +
      'Venus: el amor que llega o la seguridad, si ya llegó.',
    derecho:
      'Derecha, anuncia la llegada del amor y una pareja feliz y estable.',
    invertido:
      'Invertida, el hechizo se rompe: frustración en el amor, soledad, ' +
      'separación.',
  },
  41: {
    nombre: 'Hada de la Abundancia',
    grupo: 'Ángeles representativos',
    regente: 'Sol',
    claves: {
      derecho: ['prosperidad', 'suerte material', 'holgura'],
      invertido: ['logro con esfuerzo', 'trabajo cuesta arriba'],
    },
    presencia:
      'El Hada de la Abundancia derrama la luz del Sol sobre lo material. ' +
      'Encarna la buena posición económica y la suerte en los bienes.',
    derecho:
      'Derecha, representa holgura y fortuna en lo material: las cosas rinden y ' +
      'alcanzan.',
    invertido:
      'Invertida, lo deseado igual llega, pero a fuerza de esfuerzo: nada cae ' +
      'del cielo.',
  },
  42: {
    nombre: 'Hada del Nacimiento',
    grupo: 'Ángeles representativos',
    regente: 'Luna',
    claves: {
      derecho: ['nacimiento', 'buen augurio', 'nueva vida'],
      invertido: ['problemas', 'interrupción'],
    },
    presencia:
      'Bajo el influjo de la Luna, el Hada del Nacimiento anuncia la llegada de ' +
      'un niño y toca con su varita para que todo salga bien.',
    derecho:
      'Derecha, augura el nacimiento de un hijo y un camino protegido hacia esa ' +
      'llegada.',
    invertido:
      'Invertida, aparecen problemas: variaciones o una interrupción en el ' +
      'proceso.',
  },
  43: {
    nombre: 'Gnomo del Trabajo',
    grupo: 'Ángeles representativos',
    signo: 'Tauro',
    claves: {
      derecho: ['recompensa', 'nuevo empleo', 'ascenso'],
      invertido: ['problemas laborales', 'trabas'],
    },
    presencia:
      'El Gnomo del Trabajo premia el esfuerzo hecho con las manos. ' +
      'Representa los buenos resultados que llegan cuando se ha trabajado de ' +
      'firme. Se asocia a Tauro.',
    derecho:
      'Derecha, anuncia frutos del esfuerzo: un nuevo trabajo o un aumento de ' +
      'sueldo.',
    invertido:
      'Invertida, señala problemas en el trabajo.',
  },
  44: {
    nombre: 'Gnomo Revoltoso',
    grupo: 'Ángeles representativos',
    signo: 'Sagitario',
    claves: {
      derecho: ['diversión', 'aficiones', 'travesuras'],
    },
    presencia:
      'El Gnomo Revoltoso es el espíritu juguetón de Sagitario. Según dónde ' +
      'caiga, representa las diversiones y aficiones… o los líos en los que se ' +
      'mete el consultante.',
    derecho:
      'Habla de aficiones y entretenimientos, o de los enredos que uno mismo se ' +
      'busca. Se lee por la casa en la que aparece.',
  },
  45: {
    nombre: 'Fantasmita de los Celos',
    grupo: 'Ángeles representativos',
    signo: 'Géminis',
    claves: {
      derecho: ['celos', 'inseguridad', 'angustia'],
      invertido: ['sospecha con fundamento'],
    },
    presencia:
      'El Fantasmita de los Celos ronda el corazón inseguro. Encarna los celos ' +
      'y la angustia a la que pueden arrastrar. Corresponde a Géminis.',
    derecho:
      'Derecha, señala celos e inseguridades que carcomen y roban la paz.',
    invertido:
      'Invertida, esas sospechas pueden tener fundamento real: algo de lo ' +
      'temido es cierto.',
  },
  46: {
    nombre: 'Ángel Cupido',
    grupo: 'Ángeles representativos',
    signo: 'Géminis',
    claves: {
      derecho: ['amor', 'pasión', 'unión', 'matrimonio'],
      invertido: ['separación', 'infidelidad'],
    },
    presencia:
      'Cupido tensa el arco del deseo. Es el amor en el plano físico, el ' +
      'equilibrio apasionado entre dos: la carta de la unión y el matrimonio.',
    derecho:
      'Derecha, representa el amor correspondido, el apasionamiento y la unión ' +
      'que se sella.',
    invertido:
      'Invertida, se quiebra: separación, frustración amorosa, infidelidad.',
  },
  47: {
    nombre: 'Anciano de los Días',
    grupo: 'Ángeles representativos',
    signo: 'Virgo',
    claves: {
      derecho: ['sentido común', 'serenidad', 'previsión'],
      invertido: ['ideas equivocadas', 'confusión'],
    },
    presencia:
      'El Anciano de los Días es la voz de la prudencia. Encarna el sentido ' +
      'común y la serenidad necesarios para resolver bien. Corresponde a Virgo.',
    derecho:
      'Derecha, aconseja calma y previsión antes de decidir; en salud, señala ' +
      'que se encuentra la solución al problema.',
    invertido:
      'Invertida, falta esa luz: ideas equivocadas, incomprensión, oscuridad.',
  },
  48: {
    nombre: 'El Paraíso',
    grupo: 'Ángeles representativos',
    claves: {
      derecho: ['paz', 'alegría', 'realización', 'buena salud'],
      invertido: ['planes anulados', 'soledad', 'fracaso'],
    },
    presencia:
      'El Paraíso es el jardín del alma en calma. Representa la paz del ' +
      'espíritu, la alegría y los buenos augurios.',
    derecho:
      'Derecha, promete relaciones felices, realización, altruismo y buena ' +
      'salud; para un artista, el logro en su arte.',
    invertido:
      'Invertida, se cierra el jardín: planes anulados, futuro sombrío, ' +
      'soledad, fracasos.',
  },
  49: {
    nombre: 'Ángel del Juicio',
    grupo: 'Ángeles representativos',
    signo: 'Escorpio',
    regente: 'Plutón',
    claves: {
      derecho: ['conciencia', 'nueva etapa', 'estabilidad'],
      invertido: ['juicios equivocados', 'ceguera'],
    },
    presencia:
      'El Ángel del Juicio despierta la conciencia cósmica. Marca el comienzo ' +
      'de una etapa nueva en el plano mental, como quien reúne y ordena todo lo ' +
      'aprendido. Lo rige Plutón; representa a Escorpio.',
    derecho:
      'Derecha, habla de recopilar y comprender, de estabilidad tanto en lo ' +
      'bueno como en lo malo: ver el conjunto con claridad.',
    invertido:
      'Invertida, no se logra leer los hechos: juicios equivocados, ' +
      'conclusiones erradas.',
  },
  50: {
    nombre: 'Ángel Solar',
    grupo: 'Ángeles representativos',
    signo: 'Leo',
    claves: {
      derecho: ['éxito', 'luz', 'salud', 'belleza'],
      invertido: ['soledad', 'planes anulados'],
    },
    presencia:
      'El Ángel Solar es la plenitud de la luz. Representa la paz del espíritu, ' +
      'el éxito y la claridad. Corresponde al signo de Leo.',
    derecho:
      'Derecha, promete relaciones felices, sinceridad, grandes sentimientos, ' +
      'salud excelente y belleza física.',
    invertido:
      'Invertida, el sol se apaga: soledad, planes anulados, futuro sombrío.',
  },
  51: {
    nombre: 'Ángel Lunar',
    grupo: 'Ángeles representativos',
    signo: 'Cáncer',
    claves: {
      derecho: ['imaginación', 'inspiración', 'sensibilidad nerviosa'],
      invertido: ['espejismos', 'pasividad', 'dudas'],
    },
    presencia:
      'El Ángel Lunar habita la marea de la imaginación. Inspira, pero también ' +
      'confunde; ilumina el alma y agita los nervios. Representa a Cáncer.',
    derecho:
      'Derecha, es espíritu inspirado en lo mental; en el trabajo advierte ' +
      'malas influencias y quimeras; en la salud, desorden del sistema nervioso.',
    invertido:
      'Invertida, gana la niebla: espejismos, pasividad, dudas.',
  },
  52: {
    nombre: 'Ángel de la Enfermedad',
    grupo: 'Ángeles representativos',
    regente: 'Saturno',
    claves: {
      derecho: ['bajón', 'falta de salud', 'esfuerzo por sanar'],
      invertido: ['desgano', 'falta de motivación'],
    },
    presencia:
      'El Ángel de la Enfermedad trae el peso de Saturno sobre el cuerpo y el ' +
      'ánimo. Habla del decaimiento, pero también de que con voluntad se supera.',
    derecho:
      'Derecha, señala depresión, poca energía y salud floja, que con esfuerzo ' +
      'y buena disposición se pueden remontar.',
    invertido:
      'Invertida, falta la fuerza para salir: desgano y ausencia de motivación ' +
      'para superar la mala racha.',
  },
  53: {
    nombre: 'Ángel de la Justicia',
    grupo: 'Ángeles representativos',
    signo: 'Libra',
    claves: {
      derecho: ['equilibrio', 'consejo acertado', 'balance'],
      invertido: ['indecisión', 'pérdida', 'desorden'],
    },
    presencia:
      'El Ángel de la Justicia sostiene la balanza de Libra. Representa el ' +
      'equilibrio en la vida y los consejos que dan en el blanco.',
    derecho:
      'Derecha, habla de equilibrio y buen criterio; en la pareja puede ' +
      'anunciar un divorcio resuelto con justicia; en salud, un estado ' +
      'equilibrado.',
    invertido:
      'Invertida, la balanza se desnivela: indecisión, desorden, pérdida, y el ' +
      'riesgo de ser víctima de alguien astuto.',
  },
  54: {
    nombre: 'El Ogim de las Aguas',
    grupo: 'Ángeles representativos',
    signo: 'Escorpio',
    claves: {
      derecho: ['sensibilidad', 'protección espiritual', 'amistad'],
      invertido: ['depresión', 'protección que se aleja'],
    },
    presencia:
      'El Ogim de las Aguas es el espíritu de una mujer de signo de agua: ' +
      'equilibrada, sensible, comprensiva. Ofrece amistad y amparo espiritual. ' +
      'Corresponde a Escorpio.',
    derecho:
      'Derecha, representa esa presencia protectora y comprensiva, una amistad ' +
      'que cuida el alma.',
    invertido:
      'Invertida, la protección se retira y asoma la depresión.',
  },
  55: {
    nombre: 'Ángel Star',
    grupo: 'Ángeles representativos',
    signo: 'Acuario',
    claves: {
      derecho: ['esperanza', 'inspiración', 'armonía'],
      invertido: ['ilusiones frustradas', 'decepción'],
    },
    presencia:
      'El Ángel Star es la estrella que guía. Encarna el espíritu lleno de ' +
      'esperanza y la inspiración que muestra qué hacer. Representa a Acuario.',
    derecho:
      'Derecha, habla de esperanza, equilibrio, orden y armonía al obrar, e ' +
      'inspiración en el arte.',
    invertido:
      'Invertida, la estrella se nubla: esperanzas insatisfechas, decepción, ' +
      'oportunidades que no llegan.',
  },
  56: {
    nombre: 'Ángel del Amor Masculino',
    grupo: 'Ángeles representativos',
    signo: 'Escorpio',
    claves: {
      derecho: ['amor que llega', 'pretendiente', 'propuesta'],
      invertido: ['decepción', 'amor acabado'],
    },
    presencia:
      'El Ángel del Amor Masculino anuncia al que llega: el pretendiente, la ' +
      'petición de matrimonio. Representa al signo de Escorpio.',
    derecho:
      'Derecha, es el amor que se acerca y se declara; puede traer una ' +
      'propuesta formal.',
    invertido:
      'Invertida, decepción: un amor terminado, un hombre desilusionado.',
  },
  57: {
    nombre: 'Ángel del Amor Femenino',
    grupo: 'Ángeles representativos',
    signo: 'Piscis',
    claves: {
      derecho: ['mujer enamorada', 'inicio de relación', 'matrimonio'],
      invertido: ['amor no correspondido', 'decepción'],
    },
    presencia:
      'El Ángel del Amor Femenino es la mujer enamorada, el comienzo de un ' +
      'vínculo con futuro. Representa a Piscis.',
    derecho:
      'Derecha, anuncia el inicio de una relación y la posibilidad de ' +
      'matrimonio.',
    invertido:
      'Invertida, el amor no encuentra eco: decepción, sentimiento no ' +
      'correspondido.',
  },
  58: {
    nombre: 'Ángel de la Envidia',
    grupo: 'Ángeles representativos',
    signo: 'Acuario',
    claves: {
      derecho: ['envidia', 'celos', 'despecho'],
      invertido: ['envidia acentuada'],
    },
    presencia:
      'El Ángel de la Envidia enrarece el aire alrededor. Encarna a la persona ' +
      'maliciosa, movida por los celos y el despecho. Representa a Acuario.',
    derecho:
      'Derecha, señala envidia y celos que enferman el ánimo: depresión y ' +
      'rencor.',
    invertido:
      'Invertida, todo se agrava: esos rasgos se acentúan aún más.',
  },
  59: {
    nombre: 'Ángel del Sacrificio',
    grupo: 'Ángeles representativos',
    regente: 'Neptuno',
    claves: {
      derecho: ['renuncia', 'transición', 'indecisión afectiva'],
      invertido: ['éxito desigual', 'logro sin satisfacción'],
    },
    presencia:
      'El Ángel del Sacrificio pide soltar para pasar. Bajo el influjo de ' +
      'Neptuno, marca un tiempo de renuncia y transición, sobre todo en lo ' +
      'afectivo.',
    derecho:
      'Derecha, habla de vacilación e indecisión en los sentimientos, proyectos ' +
      'que se frenan, dejadez; en salud, posibles problemas circulatorios. Es ' +
      'un paréntesis antes de seguir.',
    invertido:
      'Invertida, hay posibilidad de éxito, aunque desigual: llega, pero no ' +
      'trae la satisfacción esperada, menos aún en lo sentimental.',
  },
  60: {
    nombre: 'Ángel de los Hijos',
    grupo: 'Ángeles representativos',
    signo: 'Cáncer',
    claves: {
      derecho: ['hijos', 'buena salud', 'descendencia'],
      invertido: ['consultar al médico', 'atención'],
    },
    presencia:
      'El Ángel de los Hijos habla de la descendencia del consultante: los ' +
      'hijos que ya están o los que podrían llegar. Representa a Cáncer.',
    derecho:
      'Derecha, alude a los hijos con buena salud; se lee según las cartas que ' +
      'la acompañan y la casa donde cae.',
    invertido:
      'Invertida, conviene prestar atención a la salud y consultar al médico.',
  },
  61: {
    nombre: 'Ángel de la Ascensión',
    grupo: 'Ángeles representativos',
    claves: {
      derecho: ['elevación espiritual', 'sabiduría', 'evolución'],
      invertido: ['sordera espiritual', 'negatividad'],
    },
    presencia:
      'El Ángel de la Ascensión impulsa hacia lo alto. Encarna el deseo de ' +
      'elevarse, la sabiduría y la evolución del alma.',
    derecho:
      'Derecha, habla de crecimiento espiritual, sentimientos positivos y un ' +
      'camino de evolución.',
    invertido:
      'Invertida, se desoye esa llamada: sentimientos negativos, negarse a ' +
      'subir.',
  },
  62: {
    nombre: 'Ángel del Trono Masculino',
    grupo: 'Ángeles representativos',
    regente: 'Venus',
    claves: {
      derecho: ['sentido común', 'esperanza', 'equilibrio', 'belleza'],
      invertido: ['enredos', 'conflictos', 'demoras'],
    },
    presencia:
      'El Ángel del Trono Masculino representa a la mujer de conocimientos ' +
      'prácticos, con sentido común para resolver. Es carta de esperanza y ' +
      'equilibrio; suele señalar a la mujer casada. Rige Venus.',
    derecho:
      'Derecha, habla de criterio, belleza física y estabilidad: alguien firme ' +
      'y equilibrado en quien apoyarse.',
    invertido:
      'Invertida, aparecen enredos y conflictos, y demoras en resolver los ' +
      'problemas.',
  },
  63: {
    nombre: 'Ángel del Trono Femenino',
    grupo: 'Ángeles representativos',
    signo: 'Aries',
    claves: {
      derecho: ['inteligencia', 'paz', 'poder material', 'autoridad'],
      invertido: ['desorden', 'pérdida de autoridad'],
    },
    presencia:
      'El Ángel del Trono Femenino gobierna con la mente. Representa el control ' +
      'espiritual mediante la inteligencia y el equilibrio, y también el poder ' +
      'material y la autoridad. Corresponde a Aries.',
    derecho:
      'Derecha, habla de paz, armonía, bienes y mando sereno; en salud, ' +
      'equilibrio.',
    invertido:
      'Invertida, todo lo contrario: desorden y autoridad que se resquebraja.',
  },
  64: {
    nombre: 'Grigori Sexual',
    grupo: 'Ángeles representativos',
    signo: 'Tauro',
    claves: {
      derecho: ['deseo', 'pasión', 'aventura', 'atractivo'],
      invertido: ['vacío', 'soledad tras el impulso'],
    },
    presencia:
      'Los grigori son los vigilantes que miraron demasiado a la tierra. El ' +
      'Grigori Sexual encarna el éxito conseguido por la belleza física: el ' +
      'deseo, la pasión, la aventura pasajera. Corresponde a Tauro.',
    derecho:
      'Derecha, representa el magnetismo y la pasión que abren puertas, la ' +
      'aventura que enciende.',
    invertido:
      'Invertida, dejarse arrastrar por esas pasiones deja vacío y soledad ' +
      'cuando el fuego se apaga.',
  },
  65: {
    nombre: 'Grigori del Poder Material',
    grupo: 'Ángeles representativos',
    signo: 'Aries',
    claves: {
      derecho: ['ambición', 'suerte material', 'astucia'],
      invertido: ['mala administración', 'pérdidas'],
    },
    presencia:
      'El Grigori del Poder Material encarna a la persona ambiciosa y ' +
      'calculadora, que busca sacar provecho de cada situación. Corresponde a ' +
      'Aries.',
    derecho:
      'Derecha, habla de suerte en lo material lograda con astucia y empuje.',
    invertido:
      'Invertida, la codicia se vuelve en contra: problemas materiales por ' +
      'errores en la administración.',
  },
  66: {
    nombre: 'Grigori del Poder y la Fuerza',
    grupo: 'Ángeles representativos',
    signo: 'Leo',
    claves: {
      derecho: ['éxito', 'tenacidad', 'negocios', 'energía'],
      invertido: ['apatía', 'pasividad'],
    },
    presencia:
      'El Grigori del Poder y la Fuerza logra por empuje y tenacidad. Derrocha ' +
      'actividad y no se detiene. Corresponde a Leo.',
    derecho:
      'Derecha, anuncia éxitos alcanzados con fuerza y constancia, negocios ' +
      'favorables y buena salud; en los sentimientos, más efusivo que afectuoso.',
    invertido:
      'Invertida, se apaga el motor: apatía, falta de actividad, pasividad.',
  },
  // ── Ángeles negativos, al mando de Lucifer ───────────────────────────────
  67: {
    nombre: 'Lucifer',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Capricornio',
    claves: {
      derecho: ['poder ilícito', 'lujuria', 'egoísmo'],
      invertido: ['todo agravado', 'desprecio por los demás'],
    },
    presencia:
      'Lucifer, el que cayó, capitanea a los ángeles negativos. Representa el ' +
      'poder de lo material y los éxitos conseguidos de forma ilegal y de corta ' +
      'duración. Corresponde a Capricornio.',
    derecho:
      'Derecha, habla de lujuria, egoísmo, deseo puramente sexual y de logros ' +
      'que brillan pero no duran; puede señalar hijos nacidos fuera del ' +
      'matrimonio.',
    invertido:
      'Invertida, todo empeora, porque la base ya es mala: alguien que no ' +
      'respeta a los demás, desobediencia, exceso.',
    encuentros:
      'Junto al Ángel de la Muerte, impotencia o problemas sexuales. Junto al ' +
      'Ángel de los Hijos, que estos son ilegítimos.',
  },
  68: {
    nombre: 'Abadón, el Príncipe de las Langostas',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Sagitario',
    claves: {
      derecho: ['dejarse llevar', 'inseguridad', 'trabas'],
      invertido: ['intento de superación'],
    },
    presencia:
      'Abadón, señor del abismo, encarna a la persona que se deja arrastrar por ' +
      'la corriente. Corresponde a Sagitario.',
    derecho:
      'Derecha, habla de dificultades para resolver, de inseguridad y de dejar ' +
      'que las cosas pasen sin tomar las riendas.',
    invertido:
      'Invertida, asoma un intento de superación: la voluntad de remontar.',
  },
  69: {
    nombre: 'Samuel, el Ángel de la Tentación',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Aries',
    claves: {
      derecho: ['vicios', 'tentación', 'noche'],
      invertido: ['alejarse de la tentación'],
    },
    presencia:
      'Samuel susurra al oído lo que conviene no oír. Encarna a la persona de ' +
      'muchos vicios, atraída por la noche y por las pasiones difíciles de ' +
      'rechazar. Corresponde a Aries.',
    derecho:
      'Derecha, habla de tentaciones y excesos, de las salidas nocturnas y del ' +
      'deseo que arrastra.',
    invertido:
      'Invertida, el esfuerzo por apartarse de esas tentaciones.',
  },
  70: {
    nombre: 'Mastema, el Ángel Hechicero',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Virgo',
    claves: {
      derecho: ['hostilidad', 'adversidad', 'hechizo'],
      invertido: ['magia negra', 'locura'],
    },
    presencia:
      'Mastema es el que hace magia. Su carta conviene leerla mirando lo que ' +
      'sale a su derecha y a su izquierda, porque de eso depende su sentido. ' +
      'Corresponde a Virgo.',
    derecho:
      'Sola, representa hostilidad y adversidad: un clima en contra.',
    invertido:
      'Invertida, se oscurece del todo: magia negra, mal uso de los poderes ' +
      'mentales, locura.',
  },
  71: {
    nombre: 'Carniveau, el Príncipe de los Lobos',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Cáncer',
    claves: {
      derecho: ['magia negra', 'odio', 'inestabilidad'],
      invertido: ['logros efímeros', 'deterioro de salud'],
    },
    presencia:
      'Carniveau conduce la jauría. Representa las magias negras y a la persona ' +
      'de carácter inestable, marcada por el odio y la promiscuidad. ' +
      'Corresponde a Cáncer.',
    derecho:
      'Derecha, habla de hostilidad profunda, inestabilidad y vínculos ' +
      'desordenados.',
    invertido:
      'Invertida, logros sobre lo material pero de corta vida; en salud, ' +
      'deterioro e infecciones.',
  },
  72: {
    nombre: 'Mammón, el Ángel de la Avaricia y la Codicia',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    claves: {
      derecho: ['avaricia', 'codicia', 'estafa'],
      invertido: ['resultados que no llegan', 'víctima de sí mismo'],
    },
    presencia:
      'Mammón es el hambre que nunca se sacia. Encarna la avaricia y la codicia, ' +
      'la tentación del dinero y de lo valioso.',
    derecho:
      'Derecha, señala la codicia y al estafador, a quien todo lo mide en ' +
      'ganancia.',
    invertido:
      'Invertida, esa avidez no da fruto: no consigue lo que busca, víctima de ' +
      'sus propias tentaciones.',
  },
  73: {
    nombre: 'Kemuel, el que impide la entrega del Torá a Moisés',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    regente: 'Marte',
    claves: {
      derecho: ['adversidad', 'retrasos', 'malas intenciones'],
      invertido: ['se logra, pero más tarde'],
    },
    presencia:
      'Kemuel es el que traba el paso. Representa la adversidad, los retrasos y ' +
      'las condiciones que se interponen, a veces por la mala intención de ' +
      'otros hacia el consultante. Lo rige Marte.',
    derecho:
      'Derecha, habla de sucesos inesperados que demoran los objetivos y, en ' +
      'salud, de estancamiento.',
    invertido:
      'Invertida, todo se conseguirá igual, aunque lleve más tiempo del ' +
      'deseado.',
  },
  74: {
    nombre: 'Adramelech, el Ángel Rey del Fuego',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    claves: {
      derecho: ['ansiedad', 'angustia', 'salud delicada'],
      invertido: ['angustia extrema', 'enfermedad mental'],
    },
    presencia:
      'Adramelech reina sobre el fuego que consume por dentro. Encarna la ' +
      'ansiedad, la angustia y la alteración del ánimo.',
    derecho:
      'Derecha, habla de inquietud y desasosiego; en salud, un estado delicado ' +
      'que implica sufrimiento.',
    invertido:
      'Invertida, todo se acentúa, hasta rozar la enfermedad mental.',
  },
  75: {
    nombre: 'Dubbiel, el Ángel del Orgullo',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    claves: {
      derecho: ['orgullo', 'soberbia', 'amor propio herido'],
      invertido: ['vencer el orgullo'],
    },
    presencia:
      'Dubbiel endurece el pecho con orgullo. Encarna el amor propio tan ' +
      'acentuado que no deja salir los sentimientos nobles.',
    derecho:
      'Derecha, habla de soberbia y orgullo que aíslan; en salud, mala ' +
      'circulación y endurecimiento de las arterias.',
    invertido:
      'Invertida, la señal es buena: es capaz de vencer esos sentimientos ' +
      'negativos.',
  },
  76: {
    nombre: 'Rimmon, el Ángel del Rayo y las Tormentas',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Libra',
    claves: {
      derecho: ['ruptura', 'peleas', 'accidentes'],
      invertido: ['rupturas pasajeras', 'accidentes leves'],
    },
    presencia:
      'Rimmon descarga el rayo. Representa la ruptura, las peleas y las ' +
      'frustraciones en el amor o entre amigos, y los accidentes. Corresponde a ' +
      'Libra.',
    derecho:
      'Derecha, anuncia quiebres, choques y golpes de la fortuna.',
    invertido:
      'Invertida, la tormenta amaina: rupturas pasajeras, accidentes leves.',
  },
  77: {
    nombre: 'Moloch, el que sacrifica a los niños en la hoguera',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Sagitario',
    claves: {
      derecho: ['mentira', 'maltrato', 'corrupción'],
    },
    presencia:
      'Moloch es la crueldad sin escrúpulos. Representa la mentira, los malos ' +
      'tratos y la astucia puesta al servicio del daño. Corresponde a ' +
      'Sagitario.',
    derecho:
      'Habla de engaño, maltrato, corrupción y de una persona sin escrúpulos; ' +
      'puede aludir a un aborto. No tiene lectura invertida: su sombra es plena.',
  },
  78: {
    nombre: 'Malchi Dael',
    grupo: 'Ángeles negativos · al mando de Lucifer',
    signo: 'Aries',
    regente: 'Marte',
    claves: {
      derecho: ['manipulación', 'seducción sin escrúpulos', 'hechizo'],
      invertido: ['objetivos fallidos', 'depresión'],
    },
    presencia:
      'Malchi Dael no repara en medios para conseguir amor o favores del sexo ' +
      'contrario, incluso valiéndose de la magia negra. Corresponde a Aries y ' +
      'lo rige Marte.',
    derecho:
      'Derecha, habla de estratagemas y manipulación para obtener lo que se ' +
      'desea del otro.',
    invertido:
      'Invertida, esas artimañas fracasan y no alcanzan su objetivo, dejando ' +
      'depresión a cambio.',
  },
};
