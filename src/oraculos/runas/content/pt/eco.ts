import type { Tiempo } from '../types';

// Frase de "eco": uma oração curta e autônoma que reconhece um elemento
// detectado na pergunta (uma pessoa mencionada ou uma orientação temporal).
// No máximo uma por leitura; a menção a um terceiro tem prioridade sobre o tempo.

export const ecoTercero: string[] = [
  'Nesta consulta há outra pessoa envolvida.',
  'A presença de outra pessoa pesa no que você está perguntando.',
  'Há um vínculo com outra pessoa no centro disto.',
];

export const ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]> = {
  pasado: [
    'Boa parte disto ainda olha para trás.',
    'Algo do que já aconteceu segue presente na pergunta.',
    'O que você deixou para trás ainda tem peso aqui.',
  ],
  futuro: [
    'O foco está no que ainda não chegou.',
    'Isto se projeta para o que está por vir.',
    'A pergunta aponta para o que está à frente.',
  ],
};
