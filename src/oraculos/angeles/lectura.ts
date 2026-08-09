import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { materialCruz } from '@/flujo/materialCruz';
import { WIKI_ANGELES_ES } from './content/es/wiki';
import { BANCOS_ANGELES_ES } from './content/es/bancos';
import { combinacionPresente } from './content/es/combinaciones';
import { FRAGMENTOS_ANGELES_ES } from './content/es/fragmentos';

function mezclar<T>(lista: readonly T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Cláusula corta para la carta en su posición. Escalera de fallback:
//   1. Fragmento del tema consultado (amor/trabajo/dinero), si existe.
//   2. Dos palabras clave al azar unidas (registro neutro del ángel).
//   3. Significado de la Wiki (último recurso).
// Las cartas "sin revés" caen a su lectura derecha en cualquier escalón.
function fragmentoAngel(p: PiezaTirada, tema: Tema): string {
  const ficha = WIKI_ANGELES_ES[p.pieza.numero];
  if (!ficha) return '';

  const porTema = FRAGMENTOS_ANGELES_ES[tema]?.[p.pieza.numero];
  if (porTema) {
    const arr =
      p.posicion === 'invertida' && porTema.invertida ? porTema.invertida : porTema.normal;
    if (arr && arr.length > 0) return arr[Math.floor(Math.random() * arr.length)];
  }

  const claves =
    p.posicion === 'invertida' && ficha.claves.invertido
      ? ficha.claves.invertido
      : ficha.claves.derecho;
  if (!claves || claves.length === 0) {
    return p.posicion === 'invertida' && ficha.invertido ? ficha.invertido : ficha.derecho;
  }
  if (claves.length === 1) return claves[0];
  const [a, b] = mezclar(claves);
  return `${a} y ${b}`;
}

/**
 * Cómo nombrar y cómo resolver el texto de cada ángel. Lo comparten el motor
 * propio y el material que se le manda a la IA, así las dos lecturas salen del
 * mismo contenido.
 */
function fuentesAngeles(tema: Tema): FuentesCruz {
  // Conviene el nombre corto: los ángeles negativos y algunos coros traen un
  // epíteto tras la coma ("Rimmon, el Ángel del Rayo...") que pesa dentro de la
  // frase. El nombre completo vive en la Wiki.
  const nombre = (p: PiezaTirada) => {
    const completo = WIKI_ANGELES_ES[p.pieza.numero]?.nombre ?? `Carta ${p.pieza.numero}`;
    return completo.split(',')[0];
  };

  return {
    nombre,
    fragmento: (p) => fragmentoAngel(p, tema),
    bancos: BANCOS_ANGELES_ES,
  };
}

/**
 * Motor de lectura de Ángeles: de las 5 cartas de la cruz + el análisis a los
 * tres párrafos, con el armador compartido (flujo/motorCruz) y registro
 * místico. Suma, como gracia propia del oráculo, la nota de una combinación si
 * dos cartas relacionadas caen juntas. El `tema` reencuadra cada ángel hacia
 * amor/trabajo/dinero cuando hay fragmento; si no, cae a su lectura neutra.
 */
export function lecturaAngeles(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  _idioma: CodigoIdioma,
): string[] {
  const parrafos = armarCruz(tirada, tema, analisis, fuentesAngeles(tema));
  if (parrafos.length === 0) return parrafos;

  // Gracia propia de Ángeles: si hay una combinación declarada entre las cartas,
  // se suma como una señal al final del cierre.
  const nota = combinacionPresente(tirada.map((t) => t.pieza.numero));
  if (nota) {
    parrafos[parrafos.length - 1] = `${parrafos[parrafos.length - 1]} Una señal especial: ${nota}`;
  }
  return parrafos;
}

/** Las mismas 5 cartas, sin redactar, para que la IA escriba la lectura. */
export function materialAngeles(
  tirada: PiezaTirada[],
  tema: Tema,
  _analisis: AnalisisPregunta,
  _idioma: CodigoIdioma,
): PiezaMaterial[] {
  return materialCruz(tirada, fuentesAngeles(tema));
}
