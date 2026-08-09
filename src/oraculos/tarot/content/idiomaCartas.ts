import type { IdiomaConcreto } from './paquete';
import type { CartaId, NombresPack, WikiPorCarta } from './types';
import { CONSEJOS_EN, CONSEJO_GENERICO_EN } from './en/consejos';
import { NOMBRES_EN } from './en/nombres';
import { WIKI_MAYORES_EN } from './en/wiki/mayores';
import { WIKI_MENORES_EN } from './en/wiki/menores';
import { CONSEJOS_ES, CONSEJO_GENERICO_ES } from './es/consejos';
import { NOMBRES_ES } from './es/nombres';
import { WIKI_MAYORES_ES } from './es/wiki/mayores';
import { WIKI_MENORES_ES } from './es/wiki/menores';
import { CONSEJOS_PT, CONSEJO_GENERICO_PT } from './pt/consejos';
import { NOMBRES_PT } from './pt/nombres';
import { WIKI_MAYORES_PT } from './pt/wiki/mayores';
import { WIKI_MENORES_PT } from './pt/wiki/menores';

// Todo el contenido de cartas que depende de idioma, para la Wiki y el Consejo
// del día: nombres, fichas y consejos. El motor de lecturas usa su propio
// ensamblado (content/es/index.ts).
export interface PaqueteCartas {
  nombres: NombresPack;
  wiki: WikiPorCarta;
  // Consejo del día por carta (parcial); las que falten usan consejoGenerico.
  consejos: Partial<Record<CartaId, string>>;
  consejoGenerico: string;
}

const es: PaqueteCartas = {
  nombres: NOMBRES_ES,
  wiki: { ...WIKI_MAYORES_ES, ...WIKI_MENORES_ES },
  consejos: CONSEJOS_ES,
  consejoGenerico: CONSEJO_GENERICO_ES,
};

const en: PaqueteCartas = {
  nombres: NOMBRES_EN,
  wiki: { ...WIKI_MAYORES_EN, ...WIKI_MENORES_EN },
  consejos: CONSEJOS_EN,
  consejoGenerico: CONSEJO_GENERICO_EN,
};

const pt: PaqueteCartas = {
  nombres: NOMBRES_PT,
  wiki: { ...WIKI_MAYORES_PT, ...WIKI_MENORES_PT },
  consejos: CONSEJOS_PT,
  consejoGenerico: CONSEJO_GENERICO_PT,
};

const PAQUETES: Partial<Record<IdiomaConcreto, PaqueteCartas>> = { es, en, pt };

export function paqueteCartas(idioma: IdiomaConcreto): PaqueteCartas {
  return PAQUETES[idioma] ?? es;
}
