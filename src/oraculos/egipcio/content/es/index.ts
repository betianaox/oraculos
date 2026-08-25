import type { BancoFragmentos } from '../fragmentos';
import { FRAGMENTOS_GENERAL_ES } from './fragmentos/general';
import { FRAGMENTOS_GENERAL_MENORES_ES } from './fragmentos/generalMenores';
import { FRAGMENTOS_AMOR_ES } from './fragmentos/amor';
import { FRAGMENTOS_AMOR_MENORES_ES } from './fragmentos/amorMenores';
import { FRAGMENTOS_TRABAJO_ES } from './fragmentos/trabajo';
import { FRAGMENTOS_TRABAJO_MENORES_ES } from './fragmentos/trabajoMenores';
import { FRAGMENTOS_DINERO_ES } from './fragmentos/dinero';
import { FRAGMENTOS_DINERO_MENORES_ES } from './fragmentos/dineroMenores';

// Banco de fragmentos de Egipcio en español, ya fusionado (mayores 1..22 +
// menores 23..78 en cada tema). Es lo que consume el resolver de lectura.ts.
//
// Antes de que esto existiera, Egipcio armaba sus lecturas con las palabras
// clave de la ficha de la Wiki ("sabiduría y previsión") e ignoraba por completo
// el tema de la pregunta: alguien preguntaba por su trabajo y leía dos palabras
// sueltas que no podía atar a nada. Con el banco, cada carta dice una cosa
// distinta según se pregunte por amor, trabajo o dinero, igual que en Tarot.
export const FRAGMENTOS_EGIPCIO_ES: BancoFragmentos = {
  general: { ...FRAGMENTOS_GENERAL_ES, ...FRAGMENTOS_GENERAL_MENORES_ES },
  amor: { ...FRAGMENTOS_AMOR_ES, ...FRAGMENTOS_AMOR_MENORES_ES },
  trabajo: { ...FRAGMENTOS_TRABAJO_ES, ...FRAGMENTOS_TRABAJO_MENORES_ES },
  dinero: { ...FRAGMENTOS_DINERO_ES, ...FRAGMENTOS_DINERO_MENORES_ES },
};
