import type { Tema } from '@/pregunta/tipos';
import type { FragmentosDeTemaAngel } from '../tiposFragmentos';
import { FRAGMENTOS_GENERAL_ANGELES_PT } from './fragmentos/general';
import { FRAGMENTOS_AMOR_ANGELES_PT } from './fragmentos/amor';
import { FRAGMENTOS_TRABAJO_ANGELES_PT } from './fragmentos/trabajo';
import { FRAGMENTOS_DINERO_ANGELES_PT } from './fragmentos/dinero';

// Banco de fragmentos em português do oráculo de Anjos, reunido por tema.
//
// Diferente do Tarô, o baralho angélico não é pensado por temas: cada anjo tem
// um significado e pronto. Aqui ele é reenquadrado para amor, trabalho, dinheiro
// e o momento em geral, apoiado nas facetas que o próprio baralho insinua. Três
// variantes por posição; as oito cartas sem reverso omitem 'invertida' e o motor
// usa a leitura direita delas.
export const FRAGMENTOS_ANGELES_PT: Partial<Record<Tema, FragmentosDeTemaAngel>> = {
  amor: FRAGMENTOS_AMOR_ANGELES_PT,
  trabajo: FRAGMENTOS_TRABAJO_ANGELES_PT,
  dinero: FRAGMENTOS_DINERO_ANGELES_PT,
  general: FRAGMENTOS_GENERAL_ANGELES_PT,
};
