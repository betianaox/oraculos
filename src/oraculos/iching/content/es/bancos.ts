import type { Modo, Tema, Tono } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// Tejido del I Ching (español NEUTRO).
//
// El NÚCLEO de este oráculo es determinista y así debe ser: tiras las monedas,
// sale un hexagrama, y ese hexagrama dice lo que dice. El dictamen y el
// significado son texto canónico y no se tocan.
//
// Lo que aporta este banco es el envoltorio: cómo se presenta ese hexagrama y
// cómo se conecta con lo que la persona preguntó. Eso sí varía, y responde al
// modo y al tono de la consulta.
//
// A diferencia de los mazos, acá el NOMBRE del hexagrama se conserva: es la
// identidad de la respuesta, lo que la persona anota y busca. Lo que se evita
// es el formato de ficha ("Tu consulta responde con el hexagrama 12, X").
// ─────────────────────────────────────────────────────────────────────────

export interface BancoIching {
  /** Presenta el hexagrama. Admite {tema}, {hex} (nombre) y {num}. */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  temas: Record<Tema, string[]>;
  /** Anuncia que hay líneas en movimiento. */
  transicionLineas: string[];
  /** Cada línea cambiante. Admite {pos} (ordinal) y {texto}. */
  lineaSuelta: string[];
  /** Hacia dónde evoluciona. Admite {hex} y {num}. Matiz anticipatorio. */
  haciaResultante: string[];
  /** Cuando no hay líneas en movimiento. */
  sinCambios: string[];
  /** Cierre según cómo se formuló la pregunta. */
  cierres: Record<Modo, Record<Tono, string[]>>;
}

export const ORDINALES = [
  'primera',
  'segunda',
  'tercera',
  'cuarta',
  'quinta',
  'sexta',
] as const;

export const BANCO_ICHING_ES: BancoIching = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, las monedas dibujan {hex}, el hexagrama {num}.',
        'Ante tu consulta {tema}, lo que se traza es {hex} ({num}).',
        'Lo que responde {tema} es {hex}, hexagrama {num}.',
      ],
      preocupacion: [
        'Entiendo la inquietud {tema}. Las monedas dibujan {hex} ({num}), y conviene leerlo con calma.',
        'Para eso que te preocupa {tema}, lo que se traza es {hex}, el hexagrama {num}.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, las monedas proponen detenerse en {hex} ({num}).',
        'Antes de dar el paso {tema}, lo que se dibuja es {hex}, hexagrama {num}.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres comprender {tema}, se dibuja {hex}, el hexagrama {num}.',
        'Lo que se abre ante tu consulta {tema} es {hex} ({num}).',
      ],
      preocupacion: [
        'Sin prisa: para eso que te pesa {tema}, las monedas trazan {hex} ({num}).',
        'Respira. Lo que se dibuja {tema} es {hex}, el hexagrama {num}.',
      ],
      impulso: [
        'Detén un instante el impulso: lo que se traza {tema} es {hex} ({num}).',
        'Tanta energía merece una pausa. Se dibuja {hex}, el hexagrama {num}.',
      ],
    },
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre lo que te ocupa en lo laboral'],
    dinero: ['sobre el dinero', 'sobre lo material', 'sobre tus cuentas'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  transicionLineas: [
    'Pero no todo está quieto. Hay movimiento, y ahí está el matiz fino:',
    'Algo dentro de esta situación ya se está moviendo:',
    'Hay líneas en movimiento, que señalan qué es lo que está cambiando:',
  ],
  lineaSuelta: [
    'En la {pos} línea: {texto}',
    'Se mueve la {pos}: {texto}',
    'Y en la {pos}, {texto}',
  ],
  haciaResultante: [
    'Si eso que se mueve sigue su curso, la situación se perfila hacia {hex} ({num}):',
    'Todo apunta a que esto derive en {hex}, el hexagrama {num}:',
    'Hacia adelante, lo que se insinúa es {hex} ({num}):',
  ],
  sinCambios: [
    'No hay líneas en movimiento: por ahora la situación es estable, sin una transformación marcada a la vista.',
    'Nada se mueve todavía. La escena está asentada, y lo que viene se parece bastante a lo que hay.',
    'Sin líneas en movimiento, el cuadro se sostiene: no hay un giro asomando.',
  ],
  cierres: {
    cerrada: {
      neutro: [
        'Con eso a la vista, decide sin apurar el desenlace.',
        'Deja que esta lectura acomode tu próxima elección.',
      ],
      preocupacion: [
        'No cargues el final antes de tiempo: un paso a la vez alcanza.',
        'Lo que temes no está decidido; usa esta mirada para soltar un poco.',
      ],
      impulso: [
        'Buena energía, pero mide el salto con lo que acabas de leer.',
        'Avanza, sí, pero sin saltarte lo que el hexagrama te pide mirar.',
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
};
