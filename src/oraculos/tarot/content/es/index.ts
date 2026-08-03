import type { FuentesLectura } from '../../lib/resolverCarta';
import { FRAGMENTOS_GENERAL_ES } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_ES } from './fragmentos/menores';
import { FRAGMENTOS_AMOR_ES } from './fragmentos/amor';
import { FRAGMENTOS_TRABAJO_ES } from './fragmentos/trabajo';
import { FRAGMENTOS_DINERO_ES } from './fragmentos/dinero';
import { GENERICO_ES } from './generico';
import { WIKI_MAYORES_ES } from './wiki/mayores';
import { WIKI_MENORES_ES } from './wiki/menores';

// Paquete de contenido en español: reúne las tres fuentes que el motor necesita.
// A medida que se sumen temas (amor/trabajo/dinero) y grupos de Wiki (menores,
// por palo), se agregan acá sin tocar el motor.
export const FUENTES_ES: FuentesLectura = {
  fragmentos: {
    general: { ...FRAGMENTOS_GENERAL_ES, ...FRAGMENTOS_GENERAL_MENORES_ES },
    amor: FRAGMENTOS_AMOR_ES,
    trabajo: FRAGMENTOS_TRABAJO_ES,
    dinero: FRAGMENTOS_DINERO_ES,
  },
  wiki: {
    ...WIKI_MAYORES_ES,
    ...WIKI_MENORES_ES,
  },
  generico: GENERICO_ES,
};
