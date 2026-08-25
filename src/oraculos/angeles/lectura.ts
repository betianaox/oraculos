import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { materialCruz } from '@/flujo/materialCruz';
import { combinacionPresente } from './content/combinaciones';
import { paqueteLecturaAngeles } from './content/idiomaLectura';

// Cláusula corta para la carta en su posición. Escalera de fallback:
//   1. Fragmento del tema consultado (amor/trabajo/dinero/general).
//   2. Fragmento del tema 'general' (misma carta, encuadre neutro).
//   3. Dos palabras clave de la ficha unidas (último recurso).
//   4. Significado de la Wiki (red final, no debería llegar acá).
// Las cartas "sin revés" caen a su lectura derecha en cualquier escalón.
//
// Los escalones 3 y 4 quedaron prácticamente muertos desde que existe el banco
// 'general' completo, y mejor así: eran los que devolvían "confusión y ideas
// equivocadas", dos palabras pegadas con una "y" que no le dicen nada a nadie.
function fragmentoAngel(p: PiezaTirada, tema: Tema, idioma: CodigoIdioma): string {
  const { fragmentos, wiki } = paqueteLecturaAngeles(idioma);
  const ficha = wiki[p.pieza.numero];
  if (!ficha) return '';

  const elegirDe = (t: Tema): string | null => {
    const porTema = fragmentos[t]?.[p.pieza.numero];
    if (!porTema) return null;
    const arr =
      p.posicion === 'invertida' && porTema.invertida ? porTema.invertida : porTema.normal;
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const delTema = elegirDe(tema);
  if (delTema) return delTema;

  if (tema !== 'general') {
    const general = elegirDe('general');
    if (general) return general;
  }

  const claves =
    p.posicion === 'invertida' && ficha.claves.invertido
      ? ficha.claves.invertido
      : ficha.claves.derecho;
  if (!claves || claves.length === 0) {
    return p.posicion === 'invertida' && ficha.invertido ? ficha.invertido : ficha.derecho;
  }
  if (claves.length === 1) return claves[0];
  // Sin barajar: antes se mezclaban y la misma carta devolvía "confusión y
  // ideas equivocadas" una vez y "ideas equivocadas y confusión" la otra. Para
  // quien lee es la misma frase dos veces, pero el motor no la reconocía como
  // repetida porque el texto difería. Con el orden fijo, el motor detecta el
  // duplicado y acorta la oración en vez de decirlo de nuevo.
  return `${claves[0]} y ${claves[1]}`;
}

/**
 * Cómo nombrar y cómo resolver el texto de cada ángel. Lo comparten el motor
 * propio y el material que se le manda a la IA, así las dos lecturas salen del
 * mismo contenido.
 *
 * El `idioma` decide de qué paquete sale todo (ver content/idiomaLectura.ts).
 * Antes estaba cableado a español y la lectura salía en español aunque la app
 * estuviera en inglés.
 */
function fuentesAngeles(tema: Tema, idioma: CodigoIdioma): FuentesCruz {
  const { bancos, wiki } = paqueteLecturaAngeles(idioma);

  // Conviene el nombre corto: los ángeles negativos y algunos coros traen un
  // epíteto tras la coma ("Rimmon, el Ángel del Rayo...") que pesa dentro de la
  // frase. El nombre completo vive en la Wiki.
  const nombre = (p: PiezaTirada) => {
    const completo = wiki[p.pieza.numero]?.nombre ?? `Carta ${p.pieza.numero}`;
    return completo.split(',')[0];
  };

  return {
    nombre,
    fragmento: (p) => fragmentoAngel(p, tema, idioma),
    bancos,
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
  idioma: CodigoIdioma,
): string[] {
  const parrafos = armarCruz(tirada, tema, analisis, fuentesAngeles(tema, idioma));
  if (parrafos.length === 0) return parrafos;

  // Gracia propia de Ángeles: si hay una combinación declarada entre las cartas,
  // se suma como una señal al final del cierre. El texto sale del paquete del
  // idioma; antes estaba en español fijo y se pegaba igual a una lectura en
  // inglés.
  const clave = combinacionPresente(tirada.map((t) => t.pieza.numero));
  const { notasCombinacion, prefijoCombinacion } = paqueteLecturaAngeles(idioma);
  const nota = clave ? notasCombinacion[clave] : '';
  if (nota) {
    const ultimo = parrafos.length - 1;
    parrafos[ultimo] = `${parrafos[ultimo]} ${prefijoCombinacion} ${nota}`;
  }
  return parrafos;
}

/** Las mismas 5 cartas, sin redactar, para que la IA escriba la lectura. */
export function materialAngeles(
  tirada: PiezaTirada[],
  tema: Tema,
  _analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): PiezaMaterial[] {
  return materialCruz(tirada, fuentesAngeles(tema, idioma));
}
