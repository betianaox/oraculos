import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo de Ángeles para la cruz de 5 (español). Mismo esqueleto que el
// de Tarot, pero registro MÍSTICO (coro celestial, mensajeros, guardianes), para
// que los dos oráculos suenen distintos. Acompaña, no dicta. Otros idiomas caen
// a español hasta traducirse.
export const BANCOS_ANGELES_ES: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Los ángeles ordenan así la respuesta a tu pregunta.',
        'El coro celestial dispone las señales de este modo.',
        'Ante tu consulta, la cruz de ángeles se abre así.',
      ],
      preocupacion: [
        'Aquietá el corazón: los ángeles no abandonan a quien pregunta.',
        'Hay guardianes en esto; mirá lo que la cruz revela.',
      ],
      impulso: [
        'Antes de lanzarte, escuchá lo que los mensajeros traen.',
        'Tu ímpetu tiene alas; dejá que la cruz lo oriente.',
      ],
    },
    abierta: {
      neutro: [
        'La cruz de ángeles abre este espejo del alma.',
        'Los mensajeros te invitan a mirar desde estas cinco luces.',
      ],
      preocupacion: [
        'Respirá hondo: esto es una guía, no una sentencia.',
        'Los ángeles acompañan tu desasosiego con esta mirada.',
      ],
      impulso: [
        'Frená el vuelo un instante; el coro propone esta reflexión.',
        'Tanta fuerza merece una pausa: mirá lo que la cruz ilumina.',
      ],
    },
  },
  centro: [
    'en el corazón de la cruz',
    'en el centro, como llama principal',
    'en el eje, sosteniendo a las demás',
    'en el medio, marcando el tono del mensaje',
  ],
  verbos: ['anuncia', 'trae', 'susurra', 'revela', 'señala', 'porta'],
  conectores: [
    'Leídas juntas, {frag2} es la llama central, y a su lado {frag1} y {frag3} se entrelazan hasta hallar su equilibrio.',
    'En la cruz, {frag1} prepara el terreno, {frag2} concentra el mensaje y {frag3} muestra hacia dónde inclina la balanza celeste.',
    'Lo que asoma como {frag1} gira en torno a {frag2}, y {frag3} le da su resplandor final.',
    'Entre {frag1} y {frag3}, lo que de verdad guía es {frag2}: ahí habla el ángel principal.',
  ],
  cabeza: [
    'En tu pensamiento pesa {nombre}: {frag}.',
    'Lo que ocupa tu mente lo nombra {nombre}, {frag}.',
    'Arriba, {nombre} muestra eso que das vueltas —tuyo o de aquella persona—: {frag}.',
    'En el plano de lo que se piensa aparece {nombre}: {frag}.',
  ],
  paso: [
    'El paso siguiente lo bendice {nombre}: {frag}.',
    'Hacia adelante, {nombre} abre {frag}.',
    'Como próximo movimiento, {nombre} anuncia {frag}.',
    'Lo que viene se apoya en {nombre}: {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Con esta guía, decidí sin apurar al cielo.',
        'Dejá que los mensajeros acomoden tu próximo paso.',
      ],
      preocupacion: [
        'No cargues el desenlace: los ángeles caminan a tu lado.',
        'Lo que temés no está sellado; confiá y soltá un poco.',
      ],
      impulso: [
        'Buena fuerza; medí el salto con lo que mostró el centro.',
        'Avanzá, pero sin saltear lo que la cruz te pide ver.',
      ],
    },
    abierta: {
      neutro: [
        'Quedate con la señal que más te resonó y dejala trabajar.',
        'No hace falta resolver hoy; alcanza con ver con más luz.',
      ],
      preocupacion: [
        'Sé amable con vos: escuchar ya es empezar a sanar.',
        'Permitite no tener todas las respuestas todavía.',
      ],
      impulso: [
        'Antes de actuar, dejá que el mensaje decante.',
        'Tu empuje es un don; orientalo con lo que viste.',
      ],
    },
  },
  ecoTercero: [
    'En todo esto, esa persona pesa más de lo que parece.',
    'El vínculo con quien nombrás tiñe cada carta de la cruz.',
    'Ese alguien también forma parte del mensaje.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que aún no cerró.',
      'Hay un antes que todavía respira en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y el coro responde en esa dirección.',
      'Todo se inclina hacia lo que aún no llega.',
    ],
  },
};
