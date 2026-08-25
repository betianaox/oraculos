import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { materialCruz } from '@/flujo/materialCruz';
import { paqueteLecturaEgipcio } from './content/idiomaLectura';
import type { BaseCartas } from './content/types';

function cartaDeId(cartas: BaseCartas, id: string) {
  return cartas[Number(id.replace('carta', ''))];
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

/**
 * Último recurso, cuando una carta no tiene fragmento escrito para ningún tema:
 *   - derecha:   dos claves de la ficha unidas ("intuición y atracción").
 *   - invertida: el significado invertido recortado.
 *
 * Con el banco completo (78 cartas × 4 temas) esto ya no debería dispararse
 * nunca. Se deja igual para que agregar una carta nueva no rompa la lectura, y
 * porque es la única red si algún día el banco queda a medias en otro idioma.
 */
function desdeLaFicha(p: PiezaTirada, cartas: BaseCartas): string {
  const carta = cartaDeId(cartas, p.pieza.id);
  if (!carta) return '';

  if (p.posicion === 'invertida') return recorte(carta.invertido);

  const claves = carta.claves;
  if (!claves || claves.length === 0) return recorte(carta.derecho);
  if (claves.length === 1) return claves[0];
  const [a, b] = mezclar(claves);
  return `${a} y ${b}`;
}

/**
 * La cláusula para una carta en su posición. Escalera de fallback, la misma que
 * usa Tarot:
 *   1. Fragmento del tema consultado (lo mejor: la carta hablando de amor,
 *      trabajo o dinero según lo que se preguntó).
 *   2. Fragmento del tema 'general' (misma carta, encuadre neutro).
 *   3. Las claves de la ficha de la Wiki (último recurso, ver arriba).
 *
 * Cuando cae al escalón 3 —que ya no debería pasar— se le suma un encuadre que
 * al menos ate esas palabras sueltas al asunto por el que se preguntó: "sabiduría
 * y previsión" a secas no le dice nada a quien pregunta si le renuevan el
 * contrato.
 */
function fragmentoEgipcio(p: PiezaTirada, tema: Tema, idioma: CodigoIdioma): string {
  const { fragmentos, cartas, encuadres } = paqueteLecturaEgipcio(idioma);
  const numero = Number(p.pieza.id.replace('carta', ''));

  const delTema = fragmentos[tema]?.[numero]?.[p.posicion];
  if (delTema && delTema.length > 0) {
    return delTema[Math.floor(Math.random() * delTema.length)];
  }

  const general = fragmentos.general?.[numero]?.[p.posicion];
  if (general && general.length > 0) {
    return general[Math.floor(Math.random() * general.length)];
  }

  const ficha = desdeLaFicha(p, cartas);
  if (!ficha) return '';
  const pool = encuadres[tema];
  const encuadre = pool[Math.floor(Math.random() * pool.length)];
  return encuadre ? `${ficha} ${encuadre}` : ficha;
}

/**
 * El `idioma` decide de qué paquete sale todo (ver content/idiomaLectura.ts).
 * Antes estaba cableado a español y la lectura salía en español aunque la app
 * estuviera en inglés.
 */
function fuentesEgipcio(tema: Tema, idioma: CodigoIdioma): FuentesCruz {
  const { bancos, cartas } = paqueteLecturaEgipcio(idioma);
  return {
    nombre: (p) => cartaDeId(cartas, p.pieza.id)?.nombre ?? '',
    fragmento: (p) => fragmentoEgipcio(p, tema, idioma),
    bancos,
  };
}

/**
 * Motor de lectura del Tarot Egipcio: de las 5 cartas de la cruz + el análisis
 * de la pregunta a los tres párrafos, con el armador compartido
 * (flujo/motorCruz) y registro propio. Antes tenía un motor aparte que
 * enumeraba "posición — nombre — significado" y abría siempre con la misma
 * frase; ahora comparte forma y variación con Tarot y Ángeles, y también su
 * banco de fragmentos por tema (content/es/index.ts), que es lo que hace que la
 * misma carta diga una cosa en una pregunta de amor y otra en una de trabajo.
 */
export function lecturaEgipcio(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): string[] {
  return armarCruz(tirada, tema, analisis, fuentesEgipcio(tema, idioma));
}

/** Las mismas 5 cartas, sin redactar, para que la IA escriba la lectura. */
export function materialEgipcio(
  tirada: PiezaTirada[],
  tema: Tema,
  _analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): PiezaMaterial[] {
  return materialCruz(tirada, fuentesEgipcio(tema, idioma));
}
