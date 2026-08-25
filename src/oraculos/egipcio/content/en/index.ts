import type { BancoFragmentos } from '../fragmentos';
import { FRAGMENTOS_GENERAL_EN } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_EN } from './fragmentos/generalMenores';
import { FRAGMENTOS_AMOR_EN } from './fragmentos/amor';
import { FRAGMENTOS_AMOR_MENORES_EN } from './fragmentos/amorMenores';
import { FRAGMENTOS_TRABAJO_EN } from './fragmentos/trabajo';
import { FRAGMENTOS_TRABAJO_MENORES_EN } from './fragmentos/trabajoMenores';
import { FRAGMENTOS_DINERO_EN } from './fragmentos/dinero';
import { FRAGMENTOS_DINERO_MENORES_EN } from './fragmentos/dineroMenores';

// English fragment bank for the Egyptian Tarot, already merged (Majors 1..22 +
// Minors 23..78 in each topic). This is what the resolver in lectura.ts eats.
//
// Complete for the 78 cards across the four topics, which is what lets English
// be registered in content/idiomaLectura.ts.
export const FRAGMENTOS_EGIPCIO_EN: BancoFragmentos = {
  general: { ...FRAGMENTOS_GENERAL_EN, ...FRAGMENTOS_GENERAL_MENORES_EN },
  amor: { ...FRAGMENTOS_AMOR_EN, ...FRAGMENTOS_AMOR_MENORES_EN },
  trabajo: { ...FRAGMENTOS_TRABAJO_EN, ...FRAGMENTOS_TRABAJO_MENORES_EN },
  dinero: { ...FRAGMENTOS_DINERO_EN, ...FRAGMENTOS_DINERO_MENORES_EN },
};
