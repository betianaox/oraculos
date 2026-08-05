import type { Carta, BaseCartas } from '../types';

// Significados en REDACCION PROPIA: parafrasean el sentido del folleto del Tarot
// Egipcio sin copiarlo literal. Español neutro, sin voseo.
// Por ahora: los 22 arcanos mayores (1..22). Los menores (23..78) se agregan luego.

const MAYORES: Carta[] = [
  {
    numero: 1,
    nombre: 'El Mago',
    arcano: 'mayor',
    esencia: 'El espíritu creador.',
    claves: ['poder creador', 'destreza', 'voluntad', 'confianza'],
    derecho:
      'Capacidad de dirigir el propio poder hacia lo que se necesita y lograr ' +
      'resultados. Destreza, astucia y voluntad firme; confianza en uno mismo y ' +
      'mano hábil para concretar.',
    invertido:
      'El poder no encuentra cauce: voluntad débil, indecisión e inseguridad. La ' +
      'misma habilidad, usada para fines torcidos o desperdiciada por falta de rumbo.',
    astro: 'Sol en Leo: creatividad, espontaneidad y vocación de ayudar.',
    hebrea: 'Aleph: el principio insondable de la vida y la muerte.',
    numerologia: 1,
  },
  {
    numero: 2,
    nombre: 'La Suma Sacerdotisa',
    arcano: 'mayor',
    esencia: 'El misterio frente a lo desconocido.',
    claves: ['sabiduría', 'intuición', 'serenidad', 'previsión'],
    derecho:
      'Sabiduría serena y sentido común; intuición fina y capacidad de ver más allá ' +
      'de lo evidente. Experiencia y comprensión profunda de las cosas.',
    invertido:
      'Conocimiento superficial, sin llegar al fondo. Ignorancia, egoísmo o falso ' +
      'orgullo que confunden lo aparente con lo verdadero.',
    astro: 'Luna en Cáncer: sensibilidad y mundo interior.',
    hebrea: 'Beth: la iluminación.',
    numerologia: 2,
  },
  {
    numero: 3,
    nombre: 'La Emperatriz',
    arcano: 'mayor',
    esencia: 'El espíritu fecundo e intuitivo.',
    claves: ['fertilidad', 'abundancia', 'progreso', 'sentido práctico'],
    derecho:
      'Fecundidad y abundancia: proyectos que dan fruto, progreso y creación ' +
      'material. La figura que nutre y sostiene, con intuición y sentido práctico ' +
      'para decidir.',
    invertido:
      'Esterilidad e inactividad: lo que no cuaja, pérdidas materiales, infidelidad ' +
      'o estancamiento. La energía creadora que no llega a concretarse.',
    astro: 'Júpiter en Sagitario: optimismo y expansión.',
    hebrea: 'Guímel: dinamismo y movimiento.',
    numerologia: 3,
  },
  {
    numero: 4,
    nombre: 'El Emperador',
    arcano: 'mayor',
    esencia: 'El espíritu de la autoridad.',
    claves: ['autoridad', 'estabilidad', 'control', 'fuerza'],
    derecho:
      'Autoridad y control con base firme: capacidad, confianza y estabilidad para ' +
      'alcanzar las metas. La figura que ordena, protege y sostiene con fuerza.',
    invertido:
      'Inmadurez y dependencia: falta de firmeza, no poder dominar las emociones ' +
      'mezquinas, autoridad que se desmorona o se vuelve rigidez.',
    astro: 'Urano en Acuario: independencia e innovación.',
    hebrea: 'Dáleth: el poder.',
    numerologia: 4,
  },
  {
    numero: 5,
    nombre: 'El Hierofante',
    arcano: 'mayor',
    esencia: 'El espíritu de lo convencional.',
    claves: ['tradición', 'inspiración', 'prudencia', 'enseñanza'],
    derecho:
      'Apego a lo establecido y a la tradición: ritual, orden, bondad y prudencia. ' +
      'Inspiración y guía dentro de lo conocido, a veces con timidez o poca apertura.',
    invertido:
      'Ruptura de lo convencional: originalidad y apertura a lo nuevo. También ' +
      'fragilidad, susceptibilidad o dificultad para sostenerse en lo propio.',
    astro: 'Mercurio en Virgo: análisis y discernimiento.',
    hebrea: 'He: la vida universal.',
    numerologia: 5,
  },
  {
    numero: 6,
    nombre: 'La Indecisión',
    arcano: 'mayor',
    esencia: 'El espíritu ante la elección del corazón.',
    claves: ['amor', 'elección', 'belleza', 'anhelo'],
    derecho:
      'Amor responsable y sincero, altruismo y belleza; quizá un idilio en puerta. ' +
      'La elección entre el amor que eleva y el que ata, entre lo de adentro y lo de ' +
      'afuera.',
    invertido:
      'Amor irresponsable: capricho, infidelidad, ruptura o interferencia de ' +
      'terceros. Planes imprudentes movidos por la pasión más que por el criterio.',
    astro: 'Venus en Tauro: belleza y afecto.',
    hebrea: 'Vau: la ley natural.',
    numerologia: 6,
  },
  {
    numero: 7,
    nombre: 'El Carro',
    arcano: 'mayor',
    esencia: 'El espíritu victorioso.',
    claves: ['victoria', 'triunfo', 'superación', 'avance'],
    derecho:
      'Victoria y reconocimiento: superar la adversidad, vencer a los que se oponían ' +
      'y liberarse de la escasez. Empuje que avanza y se abre camino.',
    invertido:
      'Derrota o fracaso: deseos que no se cumplen, escasez y frustración. El impulso ' +
      'que se descontrola o se estrella contra sus propios límites.',
    astro: 'Neptuno en Piscis: sensibilidad e idealismo.',
    hebrea: 'Zayin: el triunfo que abre todas las posibilidades.',
    numerologia: 7,
  },
  {
    numero: 8,
    nombre: 'La Justicia',
    arcano: 'mayor',
    esencia: 'El espíritu equilibrado.',
    claves: ['equidad', 'armonía', 'honor', 'recompensa justa'],
    derecho:
      'Recompensa justa y equilibrio: armonía, equidad y honor. Buenas intenciones ' +
      'que dan su fruto, y un buen desenlace en lo legal y lo económico.',
    invertido:
      'Injusticia y desequilibrio: ingratitud, juicio severo o abuso. Un desenlace ' +
      'torcido, legal o económico, cuando la balanza se inclina de más.',
    astro: 'Saturno en Capricornio: prudencia y sacrificio.',
    hebrea: 'Jeth: el entendimiento.',
    numerologia: 8,
  },
  {
    numero: 9,
    nombre: 'El Ermitaño',
    arcano: 'mayor',
    esencia: 'El espíritu que guía.',
    claves: ['sabiduría', 'prudencia', 'introspección', 'consejo'],
    derecho:
      'Luz interior y buen consejo: prudencia, sabiduría y precaución. La figura que ' +
      'se retira a comprender y guarda un saber que ilumina el camino.',
    invertido:
      'Soledad y oscuridad: juicio errado, precipitación, consejos imprudentes o un ' +
      'aislamiento que encierra en vez de aclarar.',
    astro: 'Marte en Aries: impulso y lucha.',
    hebrea: 'Teth: lo impenetrable.',
    numerologia: 9,
  },
  {
    numero: 10,
    nombre: 'La Rueda de la Fortuna',
    arcano: 'mayor',
    esencia: 'El espíritu frente al destino.',
    claves: ['giro favorable', 'suerte', 'cambio', 'ciclo'],
    derecho:
      'Un giro favorable del destino: éxito, suerte inesperada y felicidad que llega ' +
      'sin buscarla. Avance y oportunidad que se abren de golpe.',
    invertido:
      'La rueda que baja: fracaso, altibajos, monotonía o reveses por causas ' +
      'imprevistas. Lo que se tuerce cuando el ciclo cambia de signo.',
    astro: 'Plutón en Escorpio: finales y comienzos intensos.',
    hebrea: 'Iod: la compensación, la ley del retorno.',
    numerologia: 1,
  },
  {
    numero: 11,
    nombre: 'La Fuerza',
    arcano: 'mayor',
    esencia: 'El espíritu que domina y vence los obstáculos.',
    claves: ['fuerza moral', 'valor', 'determinación', 'dominio'],
    derecho:
      'Dominio de uno mismo y fuerza moral: valor, convicción, energía y ' +
      'determinación para vencer los obstáculos. La firmeza ética que conquista sin ' +
      'perder el temple.',
    invertido:
      'Debilidad moral o abuso de poder: mezquindad, tiranía, falta de fe. La fuerza ' +
      'que se vuelve contra sí misma o se apaga ante la prueba.',
    astro: 'Sol en Aries: fuerza que todavía busca su sabiduría.',
    hebrea: 'Kaph: la firmeza para afrontar lo que venga.',
    numerologia: 2,
  },
  {
    numero: 12,
    nombre: 'El Apostolado',
    arcano: 'mayor',
    esencia: 'El espíritu que se sacrifica y renuncia.',
    claves: ['sacrificio', 'renuncia', 'pausa', 'reajuste'],
    derecho:
      'Renuncia y sacrificio: una vida en suspenso, una pausa para reajustar y ' +
      'mejorar. Aceptar entregar algo hoy para ganar claridad y sentido después.',
    invertido:
      'Sacrificio evitado o inútil: egoísmo, arrogancia, falta de entrega. Quedarse ' +
      'en la comodidad o en las falsas promesas en vez de soltar lo que toca.',
    astro: 'Luna en Tauro: tensión entre la ley y las costumbres.',
    hebrea: 'Lámed: el sacrificio y el autocontrol.',
    numerologia: 3,
  },
  {
    numero: 13,
    nombre: 'La Muerte',
    arcano: 'mayor',
    esencia: 'El espíritu en renovación.',
    claves: ['transformación', 'final', 'cambio', 'renovación'],
    derecho:
      'Transformación profunda: el final de una etapa que, aunque duela, abre paso a ' +
      'algo nuevo. Un cambio inevitable que renueva de raíz.',
    invertido:
      'Estancamiento: apatía, inmovilidad, cambios que se demoran. Aferrarse con ' +
      'criterio rígido a lo que ya terminó su ciclo.',
    astro: 'Mercurio en Géminis: el agua que sana y purifica.',
    numerologia: 4,
  },
  {
    numero: 14,
    nombre: 'La Templanza',
    arcano: 'mayor',
    esencia: 'El espíritu que se modera y adapta.',
    claves: ['moderación', 'paciencia', 'armonía', 'equilibrio'],
    derecho:
      'Moderación y paciencia: paz interior, buena administración y armonía. La ' +
      'capacidad de combinar y adaptar, con confianza y buenos presagios.',
    invertido:
      'Discordia e impaciencia: conflicto, falta de adaptación, frustración. Cuando ' +
      'las partes no se integran y el equilibrio se rompe.',
    astro: 'Júpiter en Cáncer: correspondencia y protección.',
    hebrea: 'Nun: lo universal condensado en lo concreto.',
    numerologia: 5,
  },
  {
    numero: 15,
    nombre: 'El Mal',
    arcano: 'mayor',
    esencia: 'El espíritu encadenado.',
    claves: ['ataduras', 'apego material', 'culpa', 'liberación'],
    derecho:
      'Ataduras, a veces buscadas: esclavitud a lo material, culpa, violencia o ' +
      'autocastigo. La falta de rumbo que se vuelve autodestrucción.',
    invertido:
      'Liberarse de las cadenas: sanar, dejar lo puramente físico por lo espiritual y ' +
      'superar trabas que parecían imposibles. La tregua después del encierro.',
    astro: 'Neptuno en Leo: vibración y encantamiento.',
    hebrea: 'Sámej: la fertilidad en su cara oculta.',
    numerologia: 6,
  },
  {
    numero: 16,
    nombre: 'La Fragilidad',
    arcano: 'mayor',
    esencia: 'El espíritu frente a la catástrofe.',
    claves: ['cambio brusco', 'derrumbe', 'ruptura', 'imprevisto'],
    derecho:
      'Un cambio brusco y repentino: derrumbe, ruptura, sucesos inesperados. La ' +
      'pérdida súbita de dinero, de un vínculo o de una seguridad que parecía firme.',
    invertido:
      'El derrumbe latente: un peligro que se posterga, una opresión que se prolonga, ' +
      'la rutina que aprisiona en vez de estallar.',
    astro: 'Mercurio en Virgo: la mente puesta a prueba.',
    hebrea: 'Ayin: la vigilancia y lo pasajero.',
    numerologia: 7,
  },
  {
    numero: 17,
    nombre: 'La Esperanza',
    arcano: 'mayor',
    esencia: 'El espíritu lleno de esperanza.',
    claves: ['fe', 'esperanza', 'inspiración', 'optimismo'],
    derecho:
      'Fe y esperanza: inspiración, buena salud, amor espiritual e idealismo. ' +
      'Perspectivas brillantes que renuevan las ganas de seguir.',
    invertido:
      'Pesimismo y duda: obstinación, esperanzas incumplidas, decepción. La luz que ' +
      'se apaga cuando se pierde la fe.',
    astro: 'Saturno en Libra: la fe puesta a prueba.',
    numerologia: 8,
  },
  {
    numero: 18,
    nombre: 'La Luna',
    arcano: 'mayor',
    esencia: 'El espíritu imaginativo e inspirado.',
    claves: ['imaginación', 'intuición', 'cautela', 'engaño'],
    derecho:
      'Imaginación, intuición e inspiración; pero también peligros que no se ven, ' +
      'engaños, falsas promesas o calumnias. Un tiempo que pide cautela.',
    invertido:
      'Escepticismo y actitud práctica: rechazo de lo intuitivo, engaños menores, ' +
      'errores pequeños o aprovecharse de alguien. La niebla que empieza a despejar.',
    astro: 'Urano en Escorpio: la totalidad y lo oculto.',
    hebrea: 'Tzade: el magnetismo.',
    numerologia: 9,
  },
  {
    numero: 19,
    nombre: 'El Sol',
    arcano: 'mayor',
    esencia: 'El espíritu en paz y feliz.',
    claves: ['felicidad', 'prosperidad', 'éxito', 'alegría'],
    derecho:
      'Paz y felicidad: amor puro, prosperidad, éxito y buenas relaciones. Alegría, ' +
      'sinceridad y logros, sobre todo en lo creativo.',
    invertido:
      'La luz que se nubla: infelicidad, soledad, falta de amistades, planes que se ' +
      'caen o una posible ruptura. Brilla menos, pero no se apaga.',
    astro: 'Plutón en Sagitario: la generación universal.',
    hebrea: 'Qoph: la búsqueda misteriosa.',
    numerologia: 1,
  },
  {
    numero: 20,
    nombre: 'El Juicio Final',
    arcano: 'mayor',
    esencia: 'El espíritu con conciencia cósmica.',
    claves: ['reconocimiento', 'despertar', 'balance', 'trascender'],
    derecho:
      'Un despertar de conciencia: reconocimiento, fe en algo más allá de lo visible, ' +
      'deseo de trascender. Un fallo o desenlace favorable tras un balance.',
    invertido:
      'Miedo y demora: temor a los finales, disgustos, pérdidas, falta de paz en la ' +
      'etapa que se cierra. El balance que cuesta aceptar.',
    astro: 'Marte en Capricornio: capacidad mental y empuje.',
    hebrea: 'Resh: la liberación.',
    numerologia: 2,
  },
  {
    numero: 21,
    nombre: 'La Transmutación',
    arcano: 'mayor',
    esencia: 'El espíritu que deja atrás lo material.',
    claves: ['plenitud', 'realización', 'triunfo', 'cierre'],
    derecho:
      'Plenitud y realización: triunfo, paz interior y éxito tras el esfuerzo. La ' +
      'recompensa que corona un trabajo largo y bien hecho.',
    invertido:
      'La obra que no se corona: fracaso, estancamiento, inseguridad y temores. No ' +
      'poder cerrar del todo lo que se venía construyendo.',
    astro: 'Neptuno en Acuario: lo que aún falta comprender.',
    hebrea: 'Shin: los cambios cósmicos.',
    numerologia: 3,
  },
  {
    numero: 22,
    nombre: 'El Loco',
    arcano: 'mayor',
    esencia: 'El espíritu encarnado, listo para empezar.',
    claves: ['impulso', 'entusiasmo', 'decisión', 'riesgo'],
    derecho:
      'Impulso y entusiasmo ante una decisión importante: pasión, ganas de lanzarse, ' +
      'aunque con algo de irreflexión o frivolidad. El salto que inicia un camino.',
    invertido:
      'La elección equivocada: indecisión, apatía, dispersión. Lanzarse sin mirar, o ' +
      'no animarse a dar el paso que toca.',
    astro: 'Venus en Piscis: la razón y el respeto.',
    hebrea: 'Tau: la comprensión del todo.',
    numerologia: 4,
  },
];

const MENORES: Carta[] = [
  {
    numero: 23,
    nombre: 'El Labrador',
    arcano: 'menor',
    claves: ['trabajo', 'inteligencia', 'constancia'],
    derecho:
      'Inteligencia y experiencia aplicadas al trabajo constante: el esfuerzo bien ' +
      'dirigido que da resultados concretos.',
    invertido:
      'Una contrariedad pasajera: un tropiezo breve que frena el avance, pero se supera.',
    astro: 'Mercurio: inteligencia en acción.',
    numerologia: 5,
  },
  {
    numero: 24,
    nombre: 'La Laboriosidad',
    arcano: 'menor',
    claves: ['laboriosidad', 'orden', 'deber'],
    derecho:
      'Laboriosidad y orden: trabajo constante, economía bien administrada y ' +
      'cumplimiento de los deberes.',
    invertido:
      'Un malestar interior, la conciencia intranquila: algo pendiente que no deja ' +
      'estar en paz.',
    astro: 'Venus: dedicación y alegría.',
    numerologia: 6,
  },
  {
    numero: 25,
    nombre: 'El Viajero',
    arcano: 'menor',
    claves: ['viaje', 'aventura', 'cambio'],
    derecho:
      'Ánimo para afrontar empresas arriesgadas y salir airoso; lo que viene de lejos ' +
      'o de tierra ajena.',
    invertido:
      'Mudanzas, cambios de trabajo o de lugar, y algunas disputas en el hogar por ' +
      'tanto movimiento.',
    astro: 'Neptuno: espíritu viajero y aventurero.',
    numerologia: 7,
  },
  {
    numero: 26,
    nombre: 'La Fortuna',
    arcano: 'menor',
    claves: ['sorpresa', 'novedad', 'dinero'],
    derecho:
      'Sorpresas agradables: ideas nuevas, un amor o una amistad que llega, un ingreso ' +
      'de dinero.',
    invertido: 'Una amenaza latente: algo que enturbia la buena racha y pide atención.',
    astro: 'Saturno: premio y solución de un problema.',
    numerologia: 8,
  },
  {
    numero: 27,
    nombre: 'Lo Imprevisto',
    arcano: 'menor',
    claves: ['sorpresa', 'hallazgo', 'imprevisto'],
    derecho:
      'Un triunfo con matices o un hallazgo que llega tarde pero llega: la sorpresa ' +
      'que cambia el rumbo.',
    invertido:
      'Traición o engaño: una sorpresa desagradable, algo que no era lo que parecía.',
    astro: 'Marte: conflicto.',
    numerologia: 9,
  },
  {
    numero: 28,
    nombre: 'La Desesperación',
    arcano: 'menor',
    claves: ['misterio', 'búsqueda', 'adversidad'],
    derecho:
      'Un misterio por resolver, y el saber necesario para lograrlo está a tu alcance: ' +
      'la salida existe.',
    invertido:
      'Retrasos, problemas y adversidad: el camino se traba y la angustia aprieta.',
    astro: 'Plutón: olvidar el pasado.',
    numerologia: 1,
  },
  {
    numero: 29,
    nombre: 'La Tranquilidad',
    arcano: 'menor',
    claves: ['calma', 'recompensa', 'alegría'],
    derecho:
      'Alegría y calma: un negocio ventajoso, el trabajo duro que al fin se recompensa, ' +
      'sin sobresaltos.',
    invertido:
      'Remordimiento, indecisión y timidez; o un exceso de comodidad que adormece.',
    astro: 'Luna: pasividad y reflexión.',
    numerologia: 2,
  },
  {
    numero: 30,
    nombre: 'El Comercio',
    arcano: 'menor',
    claves: ['intercambio', 'tratos', 'negociación'],
    derecho:
      'Asuntos de intercambio y trato con otros; cuidado con las discusiones que no ' +
      'llevan a ningún lado.',
    invertido:
      'Sensibilidad en los vínculos comerciales: las relaciones y los acuerdos toman ' +
      'el primer plano.',
    astro: 'Júpiter: conocimiento.',
    numerologia: 3,
  },
  {
    numero: 31,
    nombre: 'Las Dificultades',
    arcano: 'menor',
    claves: ['expectativa', 'promesas', 'demora'],
    derecho:
      'Expectativas y promesas en el aire: algo prometido que todavía está por ' +
      'concretarse.',
    invertido:
      'Problemas y trabas, a veces por parte de personas de menor peso; restricciones ' +
      'que demoran.',
    astro: 'Urano: tardanzas.',
    numerologia: 4,
  },
  {
    numero: 32,
    nombre: 'La Generosidad',
    arcano: 'menor',
    claves: ['generosidad', 'cooperación', 'altruismo'],
    derecho:
      'Cooperación y altruismo: dar y cumplir con las obligaciones, repartir con ' +
      'inteligencia.',
    invertido:
      'Egoísmo que lleva al fracaso: mezquindad, litigios, no cumplir lo que corresponde.',
    astro: 'Mercurio: repartir con inteligencia.',
    numerologia: 5,
  },
  {
    numero: 33,
    nombre: 'Los Acuerdos',
    arcano: 'menor',
    claves: ['alianza', 'prosperidad', 'unión'],
    derecho:
      'Una alianza duradera que trae prosperidad y progreso: acuerdos que se sostienen ' +
      'y unen.',
    invertido:
      'Pérdidas de dinero o por documentos; una mala inversión o un acuerdo que sale ' +
      'caro.',
    astro: 'Venus: matrimonio y unión.',
    numerologia: 6,
  },
  {
    numero: 34,
    nombre: 'El Cambio',
    arcano: 'menor',
    claves: ['cambio', 'novedad', 'encuentro'],
    derecho:
      'Ideas frescas y una nueva empresa; un encuentro afortunado que abre camino.',
    invertido: 'Miedo al cambio y tentaciones que desvían: lo nuevo asusta y frena.',
    astro: 'Neptuno: profundidad.',
    numerologia: 7,
  },
  {
    numero: 35,
    nombre: 'La Tristeza',
    arcano: 'menor',
    claves: ['fortaleza', 'imprevisto', 'melancolía'],
    derecho:
      'Fortaleza de espíritu ante un hecho imprevisto: la entereza que sostiene en el ' +
      'momento difícil.',
    invertido:
      'Tristeza, melancolía o desánimo: una pena que pesa sobre el ánimo.',
    astro: 'Saturno: pena moral.',
    numerologia: 8,
  },
  {
    numero: 36,
    nombre: 'La Guerra',
    arcano: 'menor',
    claves: ['comienzo', 'fortuna', 'conquista'],
    derecho:
      'Un comienzo con empuje: algo que nace, una fortuna cercana, negocios que ' +
      'prosperan por la vía de la conquista.',
    invertido: 'Decadencia: la fuerza que se agota, lo que empieza a declinar.',
    astro: 'Marte: conflicto y conquista.',
    numerologia: 9,
  },
  {
    numero: 37,
    nombre: 'El Arte',
    arcano: 'menor',
    claves: ['amistad', 'ingenio', 'reconocimiento'],
    derecho:
      'Amistad, ayuda y reconocimiento: el ingenio y el talento que abren puertas y ' +
      'suman aliados.',
    invertido:
      'Talento torcido: mala fama, perversión de lo bueno, el don usado para mal.',
    astro: 'Sol: amistad y placer.',
    numerologia: 1,
  },
  {
    numero: 38,
    nombre: 'La Infidelidad',
    arcano: 'menor',
    claves: ['honradez', 'virtud', 'confianza'],
    derecho:
      'Gente decidida, sabia y honrada alrededor: virtud y confianza en los vínculos.',
    invertido:
      'Personas escandalosas o corruptas: engaño, infidelidad, confianzas mal puestas.',
    astro: 'Luna: infidelidad y engaño.',
    numerologia: 2,
  },
  {
    numero: 39,
    nombre: 'La Herencia',
    arcano: 'menor',
    claves: ['herencia', 'celebración', 'verdad'],
    derecho:
      'Herencia o legado, papeles que se resuelven, celebraciones: algo bueno que se ' +
      'recibe.',
    invertido:
      'Deslealtad en lo afectivo, adulterio; una verdad incómoda que sale a la luz.',
    astro: 'Júpiter: la verdad.',
    numerologia: 3,
  },
  {
    numero: 40,
    nombre: 'El Presentimiento',
    arcano: 'menor',
    claves: ['intuición', 'simpatía', 'atracción'],
    derecho:
      'Un trabajo bien remunerado y el favor de los demás: simpatía y capacidad de ' +
      'atraer.',
    invertido: 'Un presentimiento oscuro: riesgo de ruina o de perder un afecto.',
    astro: 'Urano: destrucción.',
    numerologia: 4,
  },
  {
    numero: 41,
    nombre: 'La Angustia',
    arcano: 'menor',
    claves: ['familia', 'afecto', 'tensión'],
    derecho:
      'Vida de familia y afectos de raíz: un amor de juventud, los lazos que acompañan.',
    invertido:
      'Indignación y violencia contenida: la angustia que estalla en enojo.',
    astro: 'Mercurio: remordimiento.',
    numerologia: 5,
  },
  {
    numero: 42,
    nombre: 'La Constancia',
    arcano: 'menor',
    claves: ['constancia', 'triunfo', 'viaje'],
    derecho:
      'La constancia que rinde: ventajas, triunfos, hasta un amorío inesperado o un ' +
      'viaje de negocios provechoso.',
    invertido:
      'La insistencia que se vuelve terca o mal dirigida: presencia que incomoda más ' +
      'que suma.',
    astro: 'Venus: presencia e insistencia.',
    numerologia: 6,
  },
  {
    numero: 43,
    nombre: 'La Alucinación',
    arcano: 'menor',
    claves: ['alegría', 'ilusión', 'satisfacción'],
    derecho:
      'Una alegría no esperada y la satisfacción de lo logrado, vivida con modestia; ' +
      'un buen negocio.',
    invertido:
      'La ilusión que se rompe: ruptura, infidelidad, un desánimo que enturbia.',
    astro: 'Neptuno: enfermedad y depresión.',
    numerologia: 7,
  },
  {
    numero: 44,
    nombre: 'El Pensamiento',
    arcano: 'menor',
    claves: ['proyecto', 'decisión', 'plan'],
    derecho:
      'Un proyecto que toma forma: la intención se vuelve decisión y plan concreto.',
    invertido:
      'Conseguir lo buscado por medio de otra persona: el objetivo se alcanza, pero no ' +
      'por mano propia.',
    astro: 'Saturno: solución de problemas.',
    numerologia: 8,
  },
  {
    numero: 45,
    nombre: 'La Regeneración',
    arcano: 'menor',
    claves: ['renovación', 'vínculos', 'cambio'],
    derecho:
      'Los lazos familiares influyen en lo afectivo: parientes que pesan en un asunto ' +
      'del corazón, para renovarlo.',
    invertido:
      'El fin de una relación o un abandono: un corte drástico que obliga a empezar de ' +
      'nuevo.',
    astro: 'Marte: cambio drástico.',
    numerologia: 9,
  },
  {
    numero: 46,
    nombre: 'El Patrimonio',
    arcano: 'menor',
    claves: ['legado', 'patrimonio', 'unión'],
    derecho:
      'Legado, donación o una unión que consolida el patrimonio: se recoge lo sembrado.',
    invertido:
      'Un riesgo que llega por parte de otra persona: cuidado con quien puede afectar ' +
      'lo tuyo.',
    astro: 'Sol: recoger lo sembrado.',
    numerologia: 1,
  },
  {
    numero: 47,
    nombre: 'La Conjetura',
    arcano: 'menor',
    claves: ['esperanza', 'amor', 'armonía'],
    derecho:
      'Se avecina alegría: un amor puro y duradero, comprensión en la familia. Buenos ' +
      'presagios.',
    invertido: 'Un presagio triste: una desgracia cercana, aflicciones del alma.',
    astro: 'Luna: sueños.',
    numerologia: 2,
  },
  {
    numero: 48,
    nombre: 'El Logro',
    arcano: 'menor',
    claves: ['victoria', 'logro', 'conocimiento'],
    derecho:
      'Victoria y consumación: se alcanza lo buscado, con el conocimiento que lo hace ' +
      'posible.',
    invertido:
      'Un amor imposible o una meta que se escapa: lo deseado queda fuera de alcance.',
    astro: 'Júpiter: el poder de conseguir lo que se quiere.',
    numerologia: 3,
  },
  {
    numero: 49,
    nombre: 'La Duplicidad',
    arcano: 'menor',
    claves: ['cambio', 'amistades', 'bifurcación'],
    derecho:
      'Un traslado y nuevas amistades: caminos que se abren en otra dirección.',
    invertido:
      'Competencia en lo amoroso y altibajos: dos caminos que tiran a la vez y ' +
      'complican.',
    astro: 'Urano: caminos distintos.',
    numerologia: 4,
  },
  {
    numero: 50,
    nombre: 'La Compenetración',
    arcano: 'menor',
    claves: ['entendimiento', 'sintonía', 'unión'],
    derecho:
      'Entendimiento profundo con el otro: sintonía, complicidad y unión de miras. Dos ' +
      'que se comprenden casi sin palabras.',
    invertido:
      'Desencuentro: la sintonía se pierde, cuesta ponerse de acuerdo y la distancia ' +
      'crece.',
    astro: 'Venus: entendimiento y unión.',
    numerologia: 5,
  },
  {
    numero: 51,
    nombre: 'El Asesoramiento',
    arcano: 'menor',
    claves: ['consejo', 'poder', 'cautela'],
    derecho:
      'Buen consejo y trato con gente de peso: relación con personas influyentes, éxito ' +
      'en cargos de autoridad.',
    invertido:
      'Pleitos y enemigos poderosos: un mal consejo o una influencia dañina que ' +
      'complica.',
    astro: 'Venus: seguridad.',
    numerologia: 6,
  },
  {
    numero: 52,
    nombre: 'La Previsión',
    arcano: 'menor',
    claves: ['previsión', 'cautela', 'defensa'],
    derecho:
      'Prever y prepararse ante el conflicto: estar alerta y defender lo propio con ' +
      'anticipación.',
    invertido:
      'Falsedad en el trato y rencores ocultos: comportamientos que no son lo que ' +
      'aparentan.',
    astro: 'Neptuno: elegancia.',
    numerologia: 7,
  },
  {
    numero: 53,
    nombre: 'La Venganza',
    arcano: 'menor',
    claves: ['cautela', 'conflicto', 'prudencia'],
    derecho:
      'Un llamado a la cautela: conviene cuidarse y no dar pasos en falso ante un ' +
      'posible ataque.',
    invertido:
      'Críticas, mentiras y luchas: la incapacidad de resolver que deriva en ' +
      'resentimiento.',
    astro: 'Saturno: temor.',
    numerologia: 8,
  },
  {
    numero: 54,
    nombre: 'El Estudio',
    arcano: 'menor',
    claves: ['estudio', 'análisis', 'investigación'],
    derecho:
      'Tiempo de pensar, investigar y analizar a fondo: la mente puesta a estudiar ' +
      'antes de actuar.',
    invertido:
      'Traición y calumnias de enemigos que no se ven: cuidado con lo que se trama en ' +
      'las sombras.',
    astro: 'Marte: la observación del soldado.',
    numerologia: 9,
  },
  {
    numero: 55,
    nombre: 'El Arrepentimiento',
    arcano: 'menor',
    claves: ['recogimiento', 'timidez', 'reflexión'],
    derecho:
      'Recogimiento y reserva: una etapa de retiro, timidez o soledad elegida para ' +
      'mirar hacia adentro.',
    invertido:
      'Peligros difusos y enemigos con poder; también un llamado a lo espiritual frente ' +
      'a la amenaza.',
    astro: 'Plutón: desafío.',
    numerologia: 1,
  },
  {
    numero: 56,
    nombre: 'La Búsqueda',
    arcano: 'menor',
    claves: ['búsqueda', 'ambición', 'sacrificio'],
    derecho:
      'Se consigue lo buscado, pero a un costo: riquezas o metas que exigen sacrificios, ' +
      'incluso morales.',
    invertido:
      'Lamentaciones: el arrepentimiento por lo que costó o por lo que no se logró.',
    astro: 'Luna: distanciamiento.',
    numerologia: 2,
  },
  {
    numero: 57,
    nombre: 'La Rivalidad',
    arcano: 'menor',
    claves: ['rivalidad', 'cautela', 'oposición'],
    derecho:
      'Asuntos delicados que piden cautela: hay competencia o rivalidad en juego, mejor ' +
      'moverse con cuidado.',
    invertido:
      'Oposición y crítica abiertas: rivales que atacan, un destino que parece jugar en ' +
      'contra.',
    astro: 'Júpiter: ataques de los rivales.',
    numerologia: 3,
  },
  {
    numero: 58,
    nombre: 'La Recapacitación',
    arcano: 'menor',
    claves: ['propósito', 'sacrificio', 'estrategia'],
    derecho:
      'Ganas firmes de conseguir algo y disposición al sacrificio: recapacitar y trazar ' +
      'la estrategia.',
    invertido:
      'Sueños que no se cumplen, avisos de peligro y acusaciones: los planes se tuercen.',
    astro: 'Urano: estrategia.',
    numerologia: 4,
  },
  {
    numero: 59,
    nombre: 'El Descubrimiento',
    arcano: 'menor',
    claves: ['noticias', 'viajes', 'descubrimiento'],
    derecho:
      'Permisos, viajes y mensajes: algo se destraba y llega una noticia o autorización ' +
      'esperada.',
    invertido:
      'Contradicciones y trabas; comunicaciones que se filtran o se malinterpretan.',
    astro: 'Mercurio: el descubrimiento.',
    numerologia: 5,
  },
  {
    numero: 60,
    nombre: 'El Progreso',
    arcano: 'menor',
    claves: ['progreso', 'aprendizaje', 'evolución'],
    derecho:
      'Aprender y evolucionar: un progreso genuino, el crecimiento que viene de asimilar ' +
      'la experiencia.',
    invertido:
      'Un tropiezo en el camino: acontecimientos tristes, mala fortuna, riesgo de ' +
      'retroceso.',
    astro: 'Venus: mejora.',
    numerologia: 6,
  },
  {
    numero: 61,
    nombre: 'La Soledad',
    arcano: 'menor',
    claves: ['prudencia', 'recato', 'soledad'],
    derecho:
      'Prudencia y recato: comportarse con corrección, cuidar los recursos y el propio ' +
      'espacio.',
    invertido: 'Aislamiento, buscado o impuesto: la soledad que separa de los demás.',
    astro: 'Neptuno: retraimiento.',
    numerologia: 7,
  },
  {
    numero: 62,
    nombre: 'La Autoridad',
    arcano: 'menor',
    claves: ['mediación', 'autoridad', 'conciliación'],
    derecho:
      'La autoridad que concilia: un mediador amable que pone orden y acerca a las ' +
      'partes.',
    invertido:
      'Rupturas y separaciones: la autoridad que divide, el odio que rompe los lazos.',
    astro: 'Saturno: autoridad.',
    numerologia: 8,
  },
  {
    numero: 63,
    nombre: 'La Comunión',
    arcano: 'menor',
    claves: ['afinidad', 'unión', 'afecto'],
    derecho:
      'Comunión y afinidad: afecto, cariño y ayuda mutua; personas que comparten los ' +
      'mismos ideales.',
    invertido: 'Frialdad afectiva: la unión que se enfría, poca entrega entre las partes.',
    astro: 'Marte: unión.',
    numerologia: 9,
  },
  {
    numero: 64,
    nombre: 'La Condescendencia',
    arcano: 'menor',
    claves: ['comprensión', 'esfuerzo', 'indulgencia'],
    derecho:
      'Indulgencia y comprensión que allanan una empresa difícil; también un buen ' +
      'momento en lo amoroso.',
    invertido:
      'Condescendencia que se vuelve presión o cede de más: enojo, tensión por forzar la ' +
      'mano.',
    astro: 'Sol: condescendencia.',
    numerologia: 1,
  },
  {
    numero: 65,
    nombre: 'El Aprendizaje',
    arcano: 'menor',
    claves: ['aprendizaje', 'protección', 'progreso'],
    derecho:
      'Aprendizaje y progreso bajo el amparo de alguien con más recorrido o recursos: se ' +
      'avanza con guía.',
    invertido:
      'Un descenso o una mala racha pasajera: la suerte se retira por un tiempo.',
    astro: 'Luna: las enseñanzas.',
    numerologia: 2,
  },
  {
    numero: 66,
    nombre: 'La Perplejidad',
    arcano: 'menor',
    claves: ['apoyo', 'duda', 'indecisión'],
    derecho:
      'Un apoyo influyente abre la puerta a la prosperidad: alguien con peso ayuda a que ' +
      'las cosas fluyan.',
    invertido:
      'Duda y parálisis: un asunto que se traba y no se decide, perplejidad ante los ' +
      'pasos a seguir.',
    astro: 'Júpiter: sorpresas.',
    numerologia: 3,
  },
  {
    numero: 67,
    nombre: 'La Amistad',
    arcano: 'menor',
    claves: ['amistad', 'afecto', 'calma'],
    derecho:
      'Amistad y afectos sinceros: compañía, calma y placidez en los vínculos cercanos.',
    invertido: 'Un desliz o descuido que enturbia una amistad y trae problemas.',
    astro: 'Urano: espiritualidad.',
    numerologia: 4,
  },
  {
    numero: 68,
    nombre: 'La Inversión',
    arcano: 'menor',
    claves: ['prosperidad', 'acierto', 'generosidad'],
    derecho:
      'Prosperidad material bien manejada: acierto, inteligencia y generosidad que ' +
      'multiplican lo que se tiene.',
    invertido:
      'Pérdidas y amistades interesadas: el dinero que se va, o los que se acercan sólo ' +
      'por interés.',
    astro: 'Mercurio: prosperidad.',
    numerologia: 5,
  },
  {
    numero: 69,
    nombre: 'El Azar',
    arcano: 'menor',
    claves: ['suerte', 'recompensa', 'oportunidad'],
    derecho:
      'El azar juega a favor: una recompensa, una mejora, un cambio favorable o una buena ' +
      'inversión.',
    invertido:
      'Lo bueno se demora: un negocio provechoso que se retrasa, aunque no se pierde.',
    astro: 'Venus: la casualidad.',
    numerologia: 6,
  },
  {
    numero: 70,
    nombre: 'La Ayuda',
    arcano: 'menor',
    claves: ['ayuda', 'afecto', 'promesa'],
    derecho:
      'Ayuda y afecto que impulsan: una promesa que se cumple y hace avanzar.',
    invertido:
      'Esperanzas que no se cumplen; o una ganancia que llega por una vía inesperada o ' +
      'triste.',
    astro: 'Neptuno: profundidad.',
    numerologia: 7,
  },
  {
    numero: 71,
    nombre: 'La Codicia',
    arcano: 'menor',
    claves: ['codicia', 'apego', 'conservar'],
    derecho:
      'Cuesta sostener la posición o el trabajo: el apego a lo material aprieta y exige ' +
      'cuidar lo logrado.',
    invertido:
      'Avaricia y arrepentimiento: el riesgo de perder por codicia, o un hurto que ' +
      'acecha.',
    astro: 'Saturno: conservadurismo.',
    numerologia: 8,
  },
  {
    numero: 72,
    nombre: 'La Purificación',
    arcano: 'menor',
    claves: ['limpieza', 'renovación', 'buena nueva'],
    derecho:
      'Purificación y renovación: una buena adquisición, una noticia agradable, la ' +
      'limpieza que deja todo claro.',
    invertido:
      'Tristeza antes de la calma: la suerte llega, pero recién después de un gran ' +
      'esfuerzo.',
    astro: 'Marte: belleza.',
    numerologia: 9,
  },
  {
    numero: 73,
    nombre: 'El Amor y el Deseo',
    arcano: 'menor',
    claves: ['amor', 'pasión', 'deseo'],
    derecho:
      'Enamoramiento y pasión: el deseo encendido y los bienes esperados que llegan.',
    invertido:
      'Falsos amigos que provocan pérdidas y desorden: la pasión mal dirigida que ' +
      'desordena la vida.',
    astro: 'Sol: el enamoramiento.',
    numerologia: 1,
  },
  {
    numero: 74,
    nombre: 'La Ofrenda',
    arcano: 'menor',
    claves: ['entrega', 'equilibrio', 'amor'],
    derecho:
      'Entrega e inspiración: dedicación equilibrada y amor que se ofrece con ' +
      'generosidad.',
    invertido:
      'Enemistad o desinterés: la pasión que se apaga, la ofrenda que no encuentra ' +
      'respuesta.',
    astro: 'Luna: comienzo, nacimiento.',
    numerologia: 2,
  },
  {
    numero: 75,
    nombre: 'El Reparto',
    arcano: 'menor',
    claves: ['reparto', 'ascenso', 'abundancia'],
    derecho:
      'Un reparto favorable: ascenso, herencia o riquezas que se distribuyen y llegan a ' +
      'tus manos.',
    invertido:
      'Lo que se reparte se achica: una porción menor, algo pequeño o un reparto que no ' +
      'colma.',
    astro: 'Júpiter: el reparto.',
    numerologia: 3,
  },
  {
    numero: 76,
    nombre: 'El Dispensador',
    arcano: 'menor',
    claves: ['abundancia', 'reconocimiento', 'fortuna'],
    derecho:
      'Abundancia que se derrama: trabajo de sobra, reconocimiento, algo que nace y ' +
      'prospera.',
    invertido: 'Un ánimo inestable: el humor cambiante que dispersa la buena racha.',
    astro: 'Urano: dar suerte.',
    numerologia: 4,
  },
  {
    numero: 77,
    nombre: 'El Desconcierto',
    arcano: 'menor',
    claves: ['buena suerte', 'confusión', 'imprevisto'],
    derecho:
      'Buenos augurios: señales de que la suerte acompaña, aunque el panorama aún no esté ' +
      'del todo claro.',
    invertido:
      'Confusión e indecisión: un problema imprevisto que desconcierta y traba las ' +
      'decisiones.',
    astro: 'Mercurio: la indecisión.',
    numerologia: 5,
  },
  {
    numero: 78,
    nombre: 'El Renacimiento',
    arcano: 'menor',
    claves: ['renacer', 'plenitud', 'satisfacción'],
    derecho:
      'Renacer: placer, honradez y fortuna; la satisfacción de una etapa que se corona ' +
      'bien.',
    invertido:
      'Se alcanza la meta, pero después de mucho padecer: el logro que llega con ' +
      'cicatrices.',
    astro: 'Venus: la razón de vivir.',
    numerologia: 6,
  },
];

export const CARTAS_ES: BaseCartas = Object.fromEntries(
  [...MAYORES, ...MENORES].map((c) => [c.numero, c])
);
