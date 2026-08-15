import type { FuentesLectura } from '../../lib/resolverCarta';
import { FRAGMENTOS_GENERAL_EN } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_EN } from './fragmentos/menores';
import { FRAGMENTOS_AMOR_EN } from './fragmentos/amor';
import { FRAGMENTOS_AMOR_MENORES_EN } from './fragmentos/amorMenores';
import { FRAGMENTOS_TRABAJO_EN } from './fragmentos/trabajo';
import { FRAGMENTOS_TRABAJO_MENORES_EN } from './fragmentos/trabajoMenores';
import { FRAGMENTOS_DINERO_EN } from './fragmentos/dinero';
import { FRAGMENTOS_DINERO_MENORES_EN } from './fragmentos/dineroMenores';
import { GENERICO_EN } from './generico';
import { WIKI_MAYORES_EN } from './wiki/mayores';
import { WIKI_MENORES_EN } from './wiki/menores';

// English content pack for the reading engine: the three sources the resolver
// needs, with Majors and Minors already merged in each topic.
//
// Complete for the 78 cards across the four topics, which is what lets English
// be registered in content/idiomaLectura.ts. Before this existed, an English
// reading fell back to the Spanish pack and the person got card names in
// English and three paragraphs in Spanish.
export const FUENTES_EN: FuentesLectura = {
  fragmentos: {
    general: { ...FRAGMENTOS_GENERAL_EN, ...FRAGMENTOS_GENERAL_MENORES_EN },
    amor: { ...FRAGMENTOS_AMOR_EN, ...FRAGMENTOS_AMOR_MENORES_EN },
    trabajo: { ...FRAGMENTOS_TRABAJO_EN, ...FRAGMENTOS_TRABAJO_MENORES_EN },
    dinero: { ...FRAGMENTOS_DINERO_EN, ...FRAGMENTOS_DINERO_MENORES_EN },
  },
  wiki: {
    ...WIKI_MAYORES_EN,
    ...WIKI_MENORES_EN,
  },
  generico: GENERICO_EN,
};
