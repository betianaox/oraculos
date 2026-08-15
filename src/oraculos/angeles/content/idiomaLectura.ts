import type { CodigoIdioma } from '@/i18n/idiomas';
import type { Tema } from '@/pregunta/tipos';
import type { BancosCruz } from '@/flujo/motorCruz';
import type { FragmentosDeTemaAngel } from './es/fragmentos/tipos';
import type { FichaAngel } from './es/wiki';
import { FRAGMENTOS_ANGELES_ES } from './es/fragmentos';
import { BANCOS_ANGELES_ES } from './es/bancos';
import { WIKI_ANGELES_ES } from './es/wiki';

// ─────────────────────────────────────────────────────────────────────────
// De qué idioma sale el TEXTO DE LA LECTURA de Ángeles.
//
// Mismo criterio que en Tarot (ver tarot/content/idiomaLectura.ts, donde está
// el comentario largo): TODO O NADA. Un idioma entra acá solo cuando tiene el
// banco completo —las 78 cartas en los cuatro temas, más el banco conectivo—,
// porque una lectura mitad traducida se lee como una app rota y no como una
// traducción a medias.
//
// Hasta que existió este archivo, `lecturaAngeles` recibía el idioma y no lo
// usaba: leía siempre el banco español.
// ─────────────────────────────────────────────────────────────────────────

export interface PaqueteLecturaAngeles {
  fragmentos: Partial<Record<Tema, FragmentosDeTemaAngel>>;
  bancos: BancosCruz;
  /** Para el nombre del ángel y como última red del fallback. */
  wiki: Record<number, FichaAngel>;
}

const es: PaqueteLecturaAngeles = {
  fragmentos: FRAGMENTOS_ANGELES_ES,
  bancos: BANCOS_ANGELES_ES,
  wiki: WIKI_ANGELES_ES,
};

// Solo español por ahora. Hay Wiki en inglés y portugués (content/en, content/pt)
// pero no banco de lectura, así que esos idiomas leen en español por ahora.
const PAQUETES: Partial<Record<CodigoIdioma, PaqueteLecturaAngeles>> = { es };

export function paqueteLecturaAngeles(idioma: CodigoIdioma): PaqueteLecturaAngeles {
  return PAQUETES[idioma] ?? es;
}
