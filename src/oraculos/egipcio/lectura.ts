import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { materialCruz } from '@/flujo/materialCruz';
import { CARTAS_ES } from './content/es/cartas';
import { BANCOS_EGIPCIO_ES } from './content/es/bancos';

function cartaDeId(id: string) {
  return CARTAS_ES[Number(id.replace('carta', ''))];
}

function mezclar<T>(lista: readonly T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Los significados de Egipcio se escribieron para la ficha de la Wiki: son
 * párrafos de dos o tres oraciones y no entran dentro de una frase. Se recorta
 * hasta el primer corte fuerte, que casi siempre deja una cláusula corta y
 * legible ("El poder no encuentra cauce: voluntad débil…" → "el poder no
 * encuentra cauce").
 *
 * Es una heurística sobre texto que no fue pensado para esto: si alguna carta
 * queda floja, la solución de fondo es escribirle claves invertidas propias.
 */
function recorte(texto: string): string {
  let trozo = texto.split(/[:.;]/)[0].trim();
  if (trozo.length > 80) trozo = trozo.split(',')[0].trim();
  return trozo.charAt(0).toLowerCase() + trozo.slice(1);
}

// Cláusula corta para la carta en su posición:
//   - derecha:   dos claves unidas ("intuición y atracción").
//   - invertida: el significado invertido recortado (no hay claves propias).
function fragmentoEgipcio(p: PiezaTirada): string {
  const carta = cartaDeId(p.pieza.id);
  if (!carta) return '';

  if (p.posicion === 'invertida') return recorte(carta.invertido);

  const claves = carta.claves;
  if (!claves || claves.length === 0) return recorte(carta.derecho);
  if (claves.length === 1) return claves[0];
  const [a, b] = mezclar(claves);
  return `${a} y ${b}`;
}

function fuentesEgipcio(): FuentesCruz {
  return {
    nombre: (p) => cartaDeId(p.pieza.id)?.nombre ?? '',
    fragmento: fragmentoEgipcio,
    bancos: BANCOS_EGIPCIO_ES,
  };
}

/**
 * Motor de lectura del Tarot Egipcio: de las 5 cartas de la cruz + el análisis
 * de la pregunta a los tres párrafos, con el armador compartido
 * (flujo/motorCruz) y registro propio. Antes tenía un motor aparte que
 * enumeraba "posición — nombre — significado" y abría siempre con la misma
 * frase; ahora comparte forma y variación con Tarot y Ángeles.
 */
export function lecturaEgipcio(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  _idioma: CodigoIdioma,
): string[] {
  return armarCruz(tirada, tema, analisis, fuentesEgipcio());
}

/** Las mismas 5 cartas, sin redactar, para que la IA escriba la lectura. */
export function materialEgipcio(
  tirada: PiezaTirada[],
  _tema: Tema,
  _analisis: AnalisisPregunta,
  _idioma: CodigoIdioma,
): PiezaMaterial[] {
  return materialCruz(tirada, fuentesEgipcio());
}
