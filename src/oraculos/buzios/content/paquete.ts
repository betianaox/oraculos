import type { CodigoIdioma } from '@/i18n/idiomas';
import type { BaseOdus } from './types';
import { BANCO_BUZIOS_EN } from './en/bancos';
import { ODUS_EN } from './en/odus';
import { TEXTOS_EN } from './en/textos';
import { BANCO_BUZIOS_ES, type BancoBuzios } from './es/bancos';
import { ODUS_ES } from './es/odus';
import { TEXTOS_ES } from './es/textos';
import { BANCO_BUZIOS_PT } from './pt/bancos';
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
  primeraTirada: string;
  segundaTirada: string;
}

export interface PaqueteBuzios {
  odus: BaseOdus;
  textos: TextosBuzios;
  /** Tejido de la lectura: aperturas, ecos, orientaciones y cierres. */
  banco: BancoBuzios;
}

const es: PaqueteBuzios = { odus: ODUS_ES, textos: TEXTOS_ES, banco: BANCO_BUZIOS_ES };
const en: PaqueteBuzios = { odus: ODUS_EN, textos: TEXTOS_EN, banco: BANCO_BUZIOS_EN };
const pt: PaqueteBuzios = { odus: ODUS_PT, textos: TEXTOS_PT, banco: BANCO_BUZIOS_PT };

const PAQUETES: Partial<Record<CodigoIdioma, PaqueteBuzios>> = { es, en, pt };

export function paqueteBuzios(idioma: CodigoIdioma): PaqueteBuzios {
  return PAQUETES[idioma] ?? es;
}
