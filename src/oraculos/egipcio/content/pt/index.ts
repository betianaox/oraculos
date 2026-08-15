import type { BancoFragmentos } from '../fragmentos';
import { FRAGMENTOS_GENERAL_PT } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_PT } from './fragmentos/generalMenores';
import { FRAGMENTOS_AMOR_PT } from './fragmentos/amor';
import { FRAGMENTOS_AMOR_MENORES_PT } from './fragmentos/amorMenores';
import { FRAGMENTOS_TRABAJO_PT } from './fragmentos/trabajo';
import { FRAGMENTOS_TRABAJO_MENORES_PT } from './fragmentos/trabajoMenores';
import { FRAGMENTOS_DINERO_PT } from './fragmentos/dinero';
import { FRAGMENTOS_DINERO_MENORES_PT } from './fragmentos/dineroMenores';

// Banco de fragmentos do Tarô Egípcio em português, já fundido (Maiores 1..22 +
// Menores 23..78 em cada tema). É o que o resolvedor de lectura.ts consome.
//
// Completo para as 78 cartas nos quatro temas, que é o que permite registrar o
// português em content/idiomaLectura.ts.
export const FRAGMENTOS_EGIPCIO_PT: BancoFragmentos = {
  general: { ...FRAGMENTOS_GENERAL_PT, ...FRAGMENTOS_GENERAL_MENORES_PT },
  amor: { ...FRAGMENTOS_AMOR_PT, ...FRAGMENTOS_AMOR_MENORES_PT },
  trabajo: { ...FRAGMENTOS_TRABAJO_PT, ...FRAGMENTOS_TRABAJO_MENORES_PT },
  dinero: { ...FRAGMENTOS_DINERO_PT, ...FRAGMENTOS_DINERO_MENORES_PT },
};
