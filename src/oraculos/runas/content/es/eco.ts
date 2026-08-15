import type { Tiempo } from '../types';

// Frase de "eco": una oración corta y autónoma que reconoce un elemento
// detectado en la pregunta (una persona mencionada, o una orientación
// temporal marcada). Se ubica entre la apertura y la oración combinada.
//
// Reglas de uso (en armarLectura):
//  - Se agrega COMO MÁXIMO una por lectura, para no recargar.
//  - Tiene prioridad la mención de un tercero (es lo más personal); si no
//    hay tercero pero sí una marca temporal fuerte, se usa la de tiempo.
//  - Son oraciones completas (empiezan en mayúscula, terminan en punto) para
//    encajar limpio antes de la oración de runas, que arranca con un nombre
//    propio de runa.

export const ecoTercero: string[] = [
  'Acá hay otra persona en juego, y pesa.',
  'Lo que hace el otro también tira de este hilo.',
  'Esa persona está en el centro de todo esto.',
];

export const ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]> = {
  pasado: [
    'Buena parte de esto todavía mira hacia atrás.',
    'Algo de lo que ya pasó sigue presente en la pregunta.',
    'Lo que dejaste atrás sigue teniendo peso aquí.',
  ],
  futuro: [
    'La mirada está puesta en lo que todavía no llega.',
    'Esto se inclina hacia lo que viene.',
    'La pregunta apunta a lo que está por delante.',
  ],
};
