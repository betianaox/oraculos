import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Tarot para la cruz de 5 (español). Es el "tejido" entre las
// cartas: aperturas, verbos, conectores, frases para la cabeza y el paso, y
// consejos. Voz reflexiva y didáctica, nunca adivinatoria: acompaña, no dicta.
// Otros idiomas caen a español hasta traducirse.
export const BANCOS_TAROT_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntás, la cruz ordena así el panorama.',
        'Ante tu pregunta, las cartas trazan este recorrido.',
        'Esto es lo que la tirada tiene para mostrarte.',
      ],
      preocupacion: [
        'Entiendo la inquietud; mirá con calma lo que la cruz acomoda.',
        'No estás sin señales: la tirada pone las piezas de este modo.',
      ],
      impulso: [
        'Con esas ganas de avanzar, la cruz te pide primero ver el conjunto.',
        'Antes de lanzarte, esto es lo que las cartas ponen sobre la mesa.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que querés ver, la cruz abre este espejo.',
        'La tirada te invita a mirar la situación desde estas cinco caras.',
      ],
      preocupacion: [
        'Respirá: la cruz no dicta un destino, ofrece una mirada para tu desasosiego.',
        'Sin prisa, la tirada acomoda lo que hoy te pesa para verlo mejor.',
      ],
      impulso: [
        'Frená un momento el impulso; la tirada propone esta reflexión.',
        'Tanta energía merece una pausa: mirá lo que la cruz ilumina.',
      ],
    },
  },
  centro: [
    'en el corazón de la tirada',
    'en el centro de la cruz, sosteniendo todo',
    'en el eje, como el asunto principal',
    'en el medio, marcando el pulso de la cuestión',
  ],
  verbos: ['habla de', 'trae', 'señala', 'pone sobre la mesa', 'apunta a', 'deja ver'],
  conectores: [
    'Leídas juntas, {frag2} se vuelve el eje, y a su alrededor {frag1} y {frag3} tiran cada uno de su lado hasta buscar un equilibrio.',
    'En el cruce, {frag1} prepara el terreno, {frag2} concentra lo esencial y {frag3} muestra hacia dónde se inclina la balanza.',
    'Lo que asoma como {frag1} se ordena en torno a {frag2}, y {frag3} le da su color final.',
    'Entre {frag1} y {frag3}, lo que de verdad manda es {frag2}: ahí está el nudo de todo.',
  ],
  cabeza: [
    'En tu cabeza pesa {nombre}: {frag}.',
    'Lo que hoy te ocupa la mente lo dice {nombre}, {frag}.',
    'Arriba, {nombre} muestra eso que das vueltas: {frag}.',
    'En el plano de lo que se piensa —tuyo o de la persona por la que preguntás— aparece {nombre}: {frag}.',
  ],
  paso: [
    'El paso siguiente lo marca {nombre}: {frag}.',
    'Hacia adelante, {nombre} abre {frag}.',
    'Como próximo movimiento, {nombre} señala {frag}.',
    'Lo que viene se apoya en {nombre}: {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con eso a la vista, decidí sin apurar el resultado.',
        'Dejá que estas señales acomoden tu próxima elección.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: un paso a la vez alcanza.',
        'Lo que temés no está escrito; usá esta mirada para soltar un poco.',
      ],
      impulso: [
        'Buena energía, pero medí el salto con lo que mostró el centro.',
        'Avanzá, sí, pero sin saltearte lo que la cruz te pide mirar.',
      ],
    },
    abierta: {
      neutro: [
        'Quedate con lo que más te resonó y dejalo trabajar unos días.',
        'No hace falta resolver todo hoy; alcanza con ver más claro.',
      ],
      preocupacion: [
        'Sé amable con vos: entender ya es empezar a sanar.',
        'Date permiso para no tener todas las respuestas todavía.',
      ],
      impulso: [
        'Antes de actuar, dejá que esta reflexión decante.',
        'Tu empuje es valioso; orientalo con lo que acabás de ver.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, la otra persona pesa más de lo que parece.',
    'El vínculo con quien mencionás tiñe cada carta de la cruz.',
    'Esa persona también forma parte del cuadro.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que todavía no cerró.',
      'Hay un antes que sigue operando en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y la cruz responde en esa dirección.',
      'Todo esto se inclina hacia lo que aún no pasó.',
    ],
  },
};
