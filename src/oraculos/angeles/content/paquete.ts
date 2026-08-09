import type { CodigoIdioma } from '@/i18n/idiomas';
import {
  ETIQUETAS_ANGELES_EN,
  SECCIONES_ANGELES_EN,
  WIKI_ANGELES_EN,
} from './en/wiki';
import {
  ETIQUETAS_ANGELES_ES,
  SECCIONES_ANGELES_ES,
  WIKI_ANGELES_ES,
  type FichaAngel,
} from './es/wiki';
import {
  ETIQUETAS_ANGELES_PT,
  SECCIONES_ANGELES_PT,
  WIKI_ANGELES_PT,
} from './pt/wiki';

// ─────────────────────────────────────────────────────────────────────────
// Contenido de Angeles por idioma.
//
// Mismo esquema que Runas, Buzios y Egipcio: cada idioma expone un paquete con
// esta forma y lo que no este traducido cae a español, asi la app nunca queda
// sin texto.
//
// Hasta ahora este oraculo tenia el contenido suelto en la raiz de content/,
// sin ninguna nocion de idioma: era el unico al que no habia donde meterle una
// traduccion.
// ─────────────────────────────────────────────────────────────────────────

export interface SeccionAngeles {
  id: string;
  titulo: string;
  desde: number;
  hasta: number;
}

export interface EtiquetasAngeles {
  coro: string;
  signo: string;
  regente: string;
  claves: string;
  presencia: string;
  derecho: string;
  invertido: string;
  encuentros: string;
}

export interface PaqueteAngeles {
  wiki: Record<number, FichaAngel>;
  etiquetas: EtiquetasAngeles;
  secciones: SeccionAngeles[];
}

const es: PaqueteAngeles = {
  wiki: WIKI_ANGELES_ES,
  etiquetas: ETIQUETAS_ANGELES_ES,
  secciones: SECCIONES_ANGELES_ES,
};
const en: PaqueteAngeles = {
  wiki: WIKI_ANGELES_EN,
  etiquetas: ETIQUETAS_ANGELES_EN,
  secciones: SECCIONES_ANGELES_EN,
};
const pt: PaqueteAngeles = {
  wiki: WIKI_ANGELES_PT,
  etiquetas: ETIQUETAS_ANGELES_PT,
  secciones: SECCIONES_ANGELES_PT,
};

const PAQUETES: Partial<Record<CodigoIdioma, PaqueteAngeles>> = { es, en, pt };

export function paqueteAngeles(idioma: CodigoIdioma): PaqueteAngeles {
  return PAQUETES[idioma] ?? es;
}
