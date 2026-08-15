import type { CodigoIdioma } from '@/i18n/idiomas';
import type { BancosCruz } from '@/flujo/motorCruz';
import type { FuentesLectura } from '../lib/resolverCarta';
import { FUENTES_ES } from './es';
import { BANCOS_TAROT_ES } from './es/bancos';
import { FUENTES_EN } from './en';
import { BANCOS_TAROT_EN } from './en/bancos';

// ─────────────────────────────────────────────────────────────────────────
// De qué idioma sale el TEXTO DE LA LECTURA.
//
// Ojo, esto es distinto de `idiomaCartas.ts`, que resuelve nombres, fichas de
// Wiki y consejo del día. Acá se resuelve lo que se lee en la tirada: los
// fragmentos de cada carta y el tejido que los une.
//
// Hasta que existió este archivo, `lecturaTarot` recibía el idioma y no lo
// usaba: leía siempre `FUENTES_ES` y `BANCOS_TAROT_ES`. En la práctica, alguien
// con la app en inglés veía los nombres de las cartas traducidos y los tres
// párrafos en español. Lo mismo pasaba en Ángeles y Egipcio.
//
// ── TODO O NADA ──────────────────────────────────────────────────────────
// Un idioma entra acá SOLO cuando tiene su banco completo: los fragmentos de
// las 78 cartas en los cuatro temas MÁS el banco conectivo. No se mezcla.
//
// El motivo es el mismo por el que italiano y francés salieron de la lista de
// idiomas (ver i18n/idiomas.ts): una lectura mitad en inglés y mitad en español
// no se lee como una traducción incompleta, se lee como una app rota. Es peor
// que estar entero en español, que al menos es coherente.
//
// Por eso el fallback es al paquete ESPAÑOL COMPLETO, nunca campo por campo.
// Cuando se termine de traducir un idioma, se agrega una línea a PAQUETES y ese
// idioma pasa a leer en su lengua de una vez.
// ─────────────────────────────────────────────────────────────────────────

export interface PaqueteLectura {
  /** Fragmentos por carta, tema y posición, con su escalera de fallback. */
  fuentes: FuentesLectura;
  /** El tejido entre las cartas: aperturas, situación, tensión, consejos. */
  bancos: BancosCruz;
}

const es: PaqueteLectura = {
  fuentes: FUENTES_ES,
  bancos: BANCOS_TAROT_ES,
};

const en: PaqueteLectura = {
  fuentes: FUENTES_EN,
  bancos: BANCOS_TAROT_EN,
};

// Portugués todavía no: tiene traducidos los nombres y la Wiki (ver
// idiomaCartas.ts) pero no el banco de lectura, así que cae a español entero.
const PAQUETES: Partial<Record<CodigoIdioma, PaqueteLectura>> = { es, en };

export function paqueteLectura(idioma: CodigoIdioma): PaqueteLectura {
  return PAQUETES[idioma] ?? es;
}

/** Qué idiomas leen de verdad en su lengua. Para diagnóstico y para tests. */
export function idiomasConLectura(): CodigoIdioma[] {
  return Object.keys(PAQUETES) as CodigoIdioma[];
}
