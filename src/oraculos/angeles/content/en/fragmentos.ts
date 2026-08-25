import type { Tema } from '@/pregunta/tipos';
import type { FragmentosDeTemaAngel } from '../tiposFragmentos';
import { FRAGMENTOS_GENERAL_ANGELES_EN } from './fragmentos/general';
import { FRAGMENTOS_AMOR_ANGELES_EN } from './fragmentos/amor';
import { FRAGMENTOS_TRABAJO_ANGELES_EN } from './fragmentos/trabajo';
import { FRAGMENTOS_DINERO_ANGELES_EN } from './fragmentos/dinero';

// English fragment bank for the Angels oracle, gathered by topic.
//
// Unlike Tarot, the angelic deck is not built around topics: each angel has one
// meaning and that is that. Here it is reframed toward love, work, money and
// the moment in general, leaning on the facets the deck itself suggests. Three
// variants per position; the eight cards without a reverse omit 'invertida' and
// the engine uses their upright reading.
export const FRAGMENTOS_ANGELES_EN: Partial<Record<Tema, FragmentosDeTemaAngel>> = {
  amor: FRAGMENTOS_AMOR_ANGELES_EN,
  trabajo: FRAGMENTOS_TRABAJO_ANGELES_EN,
  dinero: FRAGMENTOS_DINERO_ANGELES_EN,
  general: FRAGMENTOS_GENERAL_ANGELES_EN,
};
