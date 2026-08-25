import type { FuentesLectura } from '../../lib/resolverCarta';
import { FRAGMENTOS_GENERAL_PT } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_PT } from './fragmentos/menores';
import { FRAGMENTOS_AMOR_PT } from './fragmentos/amor';
import { FRAGMENTOS_AMOR_MENORES_PT } from './fragmentos/amorMenores';
import { FRAGMENTOS_TRABAJO_PT } from './fragmentos/trabajo';
import { FRAGMENTOS_TRABAJO_MENORES_PT } from './fragmentos/trabajoMenores';
import { FRAGMENTOS_DINERO_PT } from './fragmentos/dinero';
import { FRAGMENTOS_DINERO_MENORES_PT } from './fragmentos/dineroMenores';
import { GENERICO_PT } from './generico';
import { WIKI_MAYORES_PT } from './wiki/mayores';
import { WIKI_MENORES_PT } from './wiki/menores';

// Pacote de conteúdo em português para o motor de leitura: as três fontes de
// que o resolvedor precisa, com Maiores e Menores já fundidos em cada tema.
//
// Completo para as 78 cartas nos quatro temas, que é o que permite registrar o
// português em content/idiomaLectura.ts. Antes disto, uma leitura em português
// caía no pacote em espanhol e a pessoa via os nomes das cartas traduzidos e os
// três parágrafos em espanhol.
export const FUENTES_PT: FuentesLectura = {
  fragmentos: {
    general: { ...FRAGMENTOS_GENERAL_PT, ...FRAGMENTOS_GENERAL_MENORES_PT },
    amor: { ...FRAGMENTOS_AMOR_PT, ...FRAGMENTOS_AMOR_MENORES_PT },
    trabajo: { ...FRAGMENTOS_TRABAJO_PT, ...FRAGMENTOS_TRABAJO_MENORES_PT },
    dinero: { ...FRAGMENTOS_DINERO_PT, ...FRAGMENTOS_DINERO_MENORES_PT },
  },
  wiki: {
    ...WIKI_MAYORES_PT,
    ...WIKI_MENORES_PT,
  },
  generico: GENERICO_PT,
};
