import type { Intencion, Modo, Tema, Tono } from '@/pregunta/tipos';
import type { Orientacion } from '../types';

// ─────────────────────────────────────────────────────────────────────────
// Tejido de la consulta de odus (español NEUTRO).
//
// PRUDENCIA, que acá importa más que en ningún otro oráculo: esto es una
// consulta SIMBÓLICA de los significados de los odus, no el jogo de búzios,
// que es un ritual sagrado que realizan personas iniciadas. Este banco NO
// interpreta, no invoca, no pide y no habla en nombre de nadie: solo presenta
// lo que ya está escrito y lo conecta con la pregunta.
//
// El significado del odu y el matiz de la orientación son contenido canónico y
// no se tocan desde acá.
//
// El nombre del odu se conserva —es la identidad de la respuesta— pero se evita
// el formato de ficha ("Cayeron 5 cauríes abiertos: habla el odu X").
// ─────────────────────────────────────────────────────────────────────────

export interface BancoBuzios {
  /** Presenta el odu. Admite {tema}, {odu} (nombre) y {num} (abiertos). */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  /**
   * Aperturas que retoman DE QUÉ trata la pregunta. Admiten {odu} y {num}.
   * Si no se reconoció intención, se usa la común.
   */
  aperturasIntencion?: Partial<Record<Intencion, string[]>>;
  /** Eco opcional: una sola frase, cuando se menciona a otra persona. */
  ecoTercero: string[];
  /** Eco opcional por marca temporal fuerte. */
  ecoTiempo: Record<'pasado' | 'futuro', string[]>;
  temas: Record<Tema, string[]>;
  /** Introduce el matiz de la segunda tirada. Admite {abiertos}. */
  orientaciones: Record<Orientacion, string[]>;
  /** Cierre según cómo se formuló la pregunta. */
  cierres: Record<Modo, Record<Tono, string[]>>;
}

export const BANCO_BUZIOS_ES: BancoBuzios = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para lo que preguntas {tema}, con {num} cauríes abiertos habla {odu}.',
        'Ante tu consulta {tema}, los {num} abiertos traen a {odu}.',
        'Lo que responde {tema} llega de la mano de {odu} ({num} abiertos).',
      ],
      preocupacion: [
        'Entiendo la inquietud {tema}. Con {num} cauríes abiertos habla {odu}, y conviene leerlo con calma.',
        'Para eso que te preocupa {tema}, los {num} abiertos traen a {odu}.',
      ],
      impulso: [
        'Con esas ganas de avanzar {tema}, los {num} abiertos proponen detenerse en {odu}.',
        'Antes de dar el paso {tema}, con {num} cauríes abiertos habla {odu}.',
      ],
    },
    abierta: {
      neutro: [
        'Para lo que quieres comprender {tema}, con {num} cauríes abiertos habla {odu}.',
        'Lo que se abre ante tu consulta {tema} llega con {odu} ({num} abiertos).',
      ],
      preocupacion: [
        'Sin prisa: para eso que te pesa {tema}, los {num} abiertos traen a {odu}.',
        'Respira. Con {num} cauríes abiertos habla {odu}.',
      ],
      impulso: [
        'Detén un instante el impulso: los {num} abiertos traen a {odu}.',
        'Tanta energía merece una pausa. Con {num} cauríes abiertos habla {odu}.',
      ],
    },
  },
  // Retoman de qué trata la pregunta. Ninguna afirma ni niega lo consultado:
  // reformulan y mueven la mirada a lo que el odu sí puede mostrar. Esta es una
  // consulta simbólica, no una adivinación: nada acá promete un desenlace.
  aperturasIntencion: {
    retorno: [
      'Preguntas si vuelve. Los cauríes no deciden regresos; con {num} abiertos habla {odu}, y muestra qué quedó abierto.',
      'Quieres saber si va a volver. Con {num} abiertos responde {odu}: mira qué sostiene hoy la distancia.',
    ],
    sentimiento: [
      'Preguntas qué siente esa persona, y eso solo lo sabe ella. Con {num} abiertos habla {odu} del vínculo tal como está.',
      'Quieres saber si te quiere. Nadie responde por otro; con {num} abiertos, {odu} muestra qué circula entre los dos.',
    ],
    ruptura: [
      'Estás pensando en cortar, y esa decisión es tuya. Con {num} abiertos habla {odu} de lo que pesa de cada lado.',
      'Preguntas si dejarlo. Con {num} abiertos responde {odu}: mira qué se está sosteniendo.',
    ],
    decision: [
      'Preguntas qué te conviene. Con {num} abiertos habla {odu}, y ordena lo que está en juego.',
      'Estás entre dos caminos. Con {num} abiertos responde {odu}.',
    ],
    comienzo: [
      'Preguntas si esto que empieza va a prosperar. Con {num} abiertos habla {odu} del terreno donde se planta.',
      'Quieres saber si sale bien. Con {num} abiertos responde {odu}.',
    ],
    espera: [
      'Preguntas cuándo. Los cauríes no marcan fechas; con {num} abiertos, {odu} muestra qué falta para que madure.',
      'Quieres saber cuánto falta. Con {num} abiertos habla {odu} de lo que se está gestando.',
    ],
  },
  // Una sola frase de eco, para que la lectura reconozca lo que la persona
  // contó. Antes se descartaban `mencionaTercero` y `tiempo`, que ya venían
  // detectados y no se usaban en ningún lado.
  ecoTercero: [
    'En todo esto, esa persona pesa más de lo que parece.',
    'El vínculo con quien mencionas atraviesa toda la caída.',
    'Ese alguien también forma parte del cuadro.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte de esto mira hacia atrás, a algo que todavía no cerró.',
      'Hay un antes que sigue operando en la escena.',
    ],
    futuro: [
      'La pregunta empuja hacia adelante, y por ahí va la respuesta.',
      'Todo esto se inclina hacia lo que aún no ocurre.',
    ],
  },
  temas: {
    amor: ['sobre el amor', 'sobre ese vínculo', 'sobre lo que sientes'],
    trabajo: ['sobre el trabajo', 'sobre tu camino laboral', 'sobre lo que te ocupa en lo laboral'],
    dinero: ['sobre el dinero', 'sobre lo material', 'sobre tus cuentas'],
    general: ['sobre tu momento', 'sobre lo que estás viviendo', 'sobre esto que traes'],
  },
  orientaciones: {
    favorable: [
      'La segunda caída ({abiertos} abiertos) inclina el asunto a favor, lo que se llama ire:',
      'Con {abiertos} abiertos, la segunda tirada acompaña: el matiz es de ire, a favor.',
      'La orientación que marca la segunda caída ({abiertos} abiertos) es favorable, ire:',
    ],
    desafio: [
      'La segunda caída ({abiertos} abiertos) lo plantea como desafío, lo que se llama osogbo:',
      'Con {abiertos} abiertos, la segunda tirada advierte: el matiz es de osogbo, de desafío.',
      'La orientación que marca la segunda caída ({abiertos} abiertos) es de desafío, osogbo:',
    ],
  },
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
        'Avanza, sí, pero sin saltarte lo que el odu te pide mirar.',
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
