import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { materialCruz } from '@/flujo/materialCruz';
import { paqueteCartas } from './content/idiomaCartas';
import { paqueteLectura } from './content/idiomaLectura';
import { resolverTextoLectura } from './lib/resolverCarta';
import { nombreDeCarta } from './lib/nombreCarta';
import { CARTA_POR_ID } from './content/cartas/meta';
import type { CartaId } from './content/types';

/**
 * Cómo nombrar y cómo resolver el texto de cada carta. Lo comparten los dos
 * caminos —el motor propio y el material que se le manda a la IA—, y esa es la
 * gracia: las dos lecturas salen del mismo contenido, así que dicen lo mismo
 * aunque suenen distinto.
 *
 * El `idioma` decide de qué paquete sale TODO: los nombres y la Wiki
 * (idiomaCartas) y también los fragmentos y el tejido (idiomaLectura). Antes
 * esto último estaba cableado a español y la lectura salía en español aunque la
 * app estuviera en inglés.
 */
function fuentesTarot(tema: Tema, idioma: CodigoIdioma): FuentesCruz {
  const { nombres, wiki } = paqueteCartas(idioma);
  const { fuentes, bancos } = paqueteLectura(idioma);

  const nombre = (p: PiezaTirada) =>
    nombreDeCarta(
      CARTA_POR_ID[p.pieza.id as CartaId],
      nombres,
      wiki[p.pieza.id as CartaId]?.nombre,
    );

  const fragmento = (p: PiezaTirada) =>
    resolverTextoLectura(fuentes, p.pieza.id as CartaId, tema, p.posicion);

  return { nombre, fragmento, bancos };
}

/**
 * Motor de lectura de Tarot: de las 5 cartas de la cruz + el análisis de la
 * pregunta a los tres párrafos. Reusa el armador compartido de la cruz
 * (flujo/motorCruz) y la escalera de fallback de resolverCarta, así cada carta
 * dice algo aunque todavía no tenga fragmentos escritos (cae a la Wiki).
 * El contenido conectivo (bancos) es español hasta que se traduzca.
 */
export function lecturaTarot(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): string[] {
  return armarCruz(tirada, tema, analisis, fuentesTarot(tema, idioma));
}

/** Las mismas 5 cartas, sin redactar, para que la IA escriba la lectura. */
export function materialTarot(
  tirada: PiezaTirada[],
  tema: Tema,
  _analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): PiezaMaterial[] {
  return materialCruz(tirada, fuentesTarot(tema, idioma));
}
