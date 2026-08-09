import type { CodigoIdioma } from '@/i18n/idiomas';
import type { BaseCartas } from './types';
import { CARTAS_EN } from './en/cartas';
import { NUMEROLOGIA_EN } from './en/numerologia';
import { TEXTOS_EN } from './en/textos';
import { CARTAS_ES } from './es/cartas';
import { NUMEROLOGIA_ES } from './es/numerologia';
import { TEXTOS_ES } from './es/textos';
import { CARTAS_PT } from './pt/cartas';
import { NUMEROLOGIA_PT } from './pt/numerologia';
import { TEXTOS_PT } from './pt/textos';

// ─────────────────────────────────────────────────────────────────────────
// Contenido del Tarot Egipcio por idioma.
//
// Mismo esquema que Runas y Buzios: cada idioma expone un paquete con esta
// forma, y lo que no este traducido cae a español para que la app nunca quede
// sin texto.
// ─────────────────────────────────────────────────────────────────────────

export interface TextosEgipcio {
  arcanosMayores: string;
  arcanosMenores: string;
  /** Titulo de una serie de menores: "23 a 36". */
  serie: (desde: number, hasta: number) => string;
  arcano: string;
  mayor: string;
  menor: string;
  numeroCorto: string;
  esencia: string;
  derecha: string;
  invertida: string;
  correspondencias: string;
  /** "Número 4: la estabilidad". */
  numeroNumerologia: (n: number, texto: string) => string;
  letraHebrea: (letra: string) => string;
  proximamente: string;
}

export interface PaqueteEgipcio {
  cartas: BaseCartas;
  numerologia: Record<number, string>;
  textos: TextosEgipcio;
}

const es: PaqueteEgipcio = {
  cartas: CARTAS_ES,
  numerologia: NUMEROLOGIA_ES,
  textos: TEXTOS_ES,
};
const en: PaqueteEgipcio = {
  cartas: CARTAS_EN,
  numerologia: NUMEROLOGIA_EN,
  textos: TEXTOS_EN,
};
const pt: PaqueteEgipcio = {
  cartas: CARTAS_PT,
  numerologia: NUMEROLOGIA_PT,
  textos: TEXTOS_PT,
};

const PAQUETES: Partial<Record<CodigoIdioma, PaqueteEgipcio>> = { es, en, pt };

export function paqueteEgipcio(idioma: CodigoIdioma): PaqueteEgipcio {
  return PAQUETES[idioma] ?? es;
}
