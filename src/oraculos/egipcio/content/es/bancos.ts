import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo del Tarot Egipcio para la cruz de 5 (español NEUTRO). Mismo
// esqueleto que Tarot y Ángeles, pero registro propio —arena, arcanos, piedra,
// el Nilo— para que los tres oráculos no suenen iguales. Acompaña, no dicta.
//
// Acá NO se nombran cartas: la persona las tiene delante.
//
// ⚠️ PARTICULARIDAD DE ESTE BANCO: los fragmentos de Egipcio pueden venir en
// TRES formas, no dos. Además de sintagmas nominales ("intuición y atracción")
// llegan CLÁUSULAS CON VERBO, porque los significados invertidos se recortan de
// un texto largo ("el poder no encuentra cauce"). Por eso casi todas las
// plantillas de acá usan dos puntos o coma: es lo único que acepta las tres
// formas sin romperse. NO escribas "se apoya en {frag}" ni "es {frag}".
export const BANCOS_EGIPCIO_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Las cartas del Nilo ordenan así lo que preguntas {tema}.',
        'Ante tu consulta {tema}, los arcanos se acomodan de este modo.',
        'Esto es lo que se despliega {tema}.',
      ],
      preocupacion: [
        'Respira hondo: los arcanos no sentencian {tema}, solo alumbran.',
        'Hay inquietud en lo que preguntas {tema}; mira con calma lo que la arena acomoda.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, conviene primero mirar el conjunto.',
        'Antes de dar el paso, esto es lo que los arcanos ponen a la vista {tema}.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres comprender {tema}, se abre este espejo.',
        'Los arcanos te invitan a mirar {tema} desde estas cinco caras.',
      ],
      preocupacion: [
        'Sin prisa: lo que hoy te pesa {tema} queda acomodado para que puedas verlo.',
        'Los arcanos acompañan tu desasosiego {tema} con esta mirada.',
      ],
      impulso: [
        'Detén un instante el impulso; hay una reflexión para hacer {tema}.',
        'Tanta energía merece una pausa: mira lo que los arcanos iluminan {tema}.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre lo que te ocupa en lo laboral'],
    dinero: ['sobre el dinero', 'sobre lo material', 'sobre tus cuentas'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  situacion: [
    'Alrededor del asunto: {frag1}. Y en el centro: {frag2}.',
    'La arena muestra primero esto: {frag1}. Y en el eje: {frag2}.',
    'Rodeando la escena: {frag1}. Sosteniéndolo todo: {frag2}.',
    'Lo que asoma al borde: {frag1}. Lo que late en el medio: {frag2}.',
  ],
  tension: [
    'Por un lado: {frag1}. Por el otro: {frag3}. Y en el medio, lo que manda: {frag2}.',
    'A un costado tira esto: {frag1}. Al otro: {frag3}. El eje, sin embargo, es otro: {frag2}.',
    'Los extremos hablan: {frag1}, y también {frag3}. Pero el centro pesa más: {frag2}.',
    'Un brazo trae: {frag1}. El opuesto: {frag3}. Y entre ambos se impone: {frag2}.',
  ],
  cabeza: [
    'En lo alto, lo que ocupa tu mente: {frag}.',
    'Arriba de todo pesa esto: {frag}.',
    'En el plano de lo que se piensa: {frag}.',
    'Lo que das vueltas en la cabeza: {frag}.',
  ],
  // La única pieza que se lee mirando hacia adelante. Matiz anticipatorio, pero
  // siempre en clave de tendencia, nunca como un hecho consumado.
  paso: [
    'Y en la base, lo que se perfila: {frag}.',
    'Lo que viene se anuncia en esta dirección: {frag}.',
    'Si nada se fuerza, lo próximo se insinúa así: {frag}.',
    'En el horizonte cercano ya se asoma esto: {frag}.',
    'Todo apunta a que lo siguiente traiga esto: {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con eso a la vista, decide sin apurar el desenlace.',
        'Deja que estas señales acomoden tu próxima elección.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: un paso a la vez alcanza.',
        'Lo que temes no está grabado en piedra; usa esta mirada para soltar un poco.',
      ],
      impulso: [
        'Buena energía, pero mide el salto con lo que mostró el centro.',
        'Avanza, sí, pero sin saltarte lo que se te pide mirar.',
      ],
    },
    abierta: {
      neutro: [
        'Quédate con lo que más te resonó y déjalo trabajar unos días.',
        'No hace falta resolver todo hoy; alcanza con ver con más claridad.',
      ],
      preocupacion: [
        'Sé amable contigo: comprender ya es empezar a ordenar.',
        'Date permiso para no tener todas las respuestas todavía.',
      ],
      impulso: [
        'Antes de actuar, deja que esta reflexión decante.',
        'Tu empuje es valioso; oriéntalo con lo que acabas de ver.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, la otra persona pesa más de lo que parece.',
    'El vínculo con quien mencionas tiñe cada rincón de la lectura.',
    'Esa persona también forma parte del cuadro.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que todavía no cerró.',
      'Hay un antes que sigue operando en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y la respuesta va en esa dirección.',
      'Todo esto se inclina hacia lo que aún no ocurre.',
    ],
  },
};
