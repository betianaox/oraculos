import type { CodigoIdioma } from '@/i18n/idiomas';
import type { BaseOdus } from './types';
import { ODUS_EN } from './en/odus';
import { TEXTOS_EN } from './en/textos';
import { ODUS_ES } from './es/odus';
import { TEXTOS_ES } from './es/textos';
import { ODUS_PT } from './pt/odus';
import { TEXTOS_PT } from './pt/textos';

// ─────────────────────────────────────────────────────────────────────────
// Contenido de Buzios por idioma.
//
// Mismo esquema que Runas: cada idioma expone un paquete con esta forma y el
// resto de la app pide el del idioma activo, sin saber en cual esta. Lo que
// todavia no este traducido cae a español, asi la app nunca queda sin texto.
//
// Se separan dos cosas que se traducen distinto:
//   odus    el contenido en si (significados, orientaciones). Es lo caro.
//   textos  los rotulos de la ficha ("Claves", "En el amor"). Es "chrome",
//           son cuatro frases y se traducen en cinco minutos.
// ─────────────────────────────────────────────────────────────────────────

export interface TextosBuzios {
  seccionOdus: string;
  cauries: string;
  /** Se completa con el numero: "5 abiertos". */
  abiertos: (n: number) => string;
  claves: string;
  elMomento: string;
  enAmor: string;
  enTrabajo: string;
  enDinero: string;
  aFavor: string;
  comoDesafio: string;
  proximamente: string;
}

export interface PaqueteBuzios {
  odus: BaseOdus;
  textos: TextosBuzios;
}

const es: PaqueteBuzios = { odus: ODUS_ES, textos: TEXTOS_ES };
const en: PaqueteBuzios = { odus: ODUS_EN, textos: TEXTOS_EN };
const pt: PaqueteBuzios = { odus: ODUS_PT, textos: TEXTOS_PT };

const PAQUETES: Partial<Record<CodigoIdioma, PaqueteBuzios>> = { es, en, pt };

export function paqueteBuzios(idioma: CodigoIdioma): PaqueteBuzios {
  return PAQUETES[idioma] ?? es;
}
