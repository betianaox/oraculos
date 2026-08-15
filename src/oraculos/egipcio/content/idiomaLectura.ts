import type { CodigoIdioma } from '@/i18n/idiomas';
import type { Tema } from '@/pregunta/tipos';
import type { BancosCruz } from '@/flujo/motorCruz';
import type { BancoFragmentos } from './fragmentos';
import type { BaseCartas } from './types';
import { FRAGMENTOS_EGIPCIO_ES } from './es';
import { BANCOS_EGIPCIO_ES } from './es/bancos';
import { CARTAS_ES } from './es/cartas';
import { ENCUADRES_ES } from './es/encuadres';

// ─────────────────────────────────────────────────────────────────────────
// De qué idioma sale el TEXTO DE LA LECTURA del Tarot Egipcio.
//
// Mismo criterio que en Tarot (ver tarot/content/idiomaLectura.ts, donde está
// el comentario largo): TODO O NADA. Un idioma entra acá solo cuando tiene el
// banco completo —las 78 cartas en los cuatro temas, más el banco conectivo—,
// porque una lectura mitad traducida se lee como una app rota.
//
// Hasta que existió este archivo, `lecturaEgipcio` recibía el idioma y no lo
// usaba: leía siempre el banco español.
// ─────────────────────────────────────────────────────────────────────────

export interface PaqueteLecturaEgipcio {
  fragmentos: BancoFragmentos;
  bancos: BancosCruz;
  /** Fichas: para el nombre de la carta y como última red del fallback. */
  cartas: BaseCartas;
  /** Coletillas que atan un fragmento de la ficha al tema consultado. */
  encuadres: Record<Tema, string[]>;
}

const es: PaqueteLecturaEgipcio = {
  fragmentos: FRAGMENTOS_EGIPCIO_ES,
  bancos: BANCOS_EGIPCIO_ES,
  cartas: CARTAS_ES,
  encuadres: ENCUADRES_ES,
};

// Solo español por ahora. Hay fichas de carta en inglés y portugués
// (content/en, content/pt) pero no banco de lectura.
const PAQUETES: Partial<Record<CodigoIdioma, PaqueteLecturaEgipcio>> = { es };

export function paqueteLecturaEgipcio(idioma: CodigoIdioma): PaqueteLecturaEgipcio {
  return PAQUETES[idioma] ?? es;
}
