import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import { armarCruz, type FuentesCruz } from '@/flujo/motorCruz';
import { paqueteCartas } from './content/idiomaCartas';
import { FUENTES_ES } from './content/es';
import { resolverTextoLectura } from './lib/resolverCarta';
import { nombreDeCarta } from './lib/nombreCarta';
import { CARTA_POR_ID } from './content/cartas/meta';
import { BANCOS_TAROT_ES } from './content/es/bancos';
import type { CartaId } from './content/types';

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
  const { nombres, wiki } = paqueteCartas(idioma);

  const nombre = (p: PiezaTirada) =>
    nombreDeCarta(
      CARTA_POR_ID[p.pieza.id as CartaId],
      nombres,
      wiki[p.pieza.id as CartaId]?.nombre,
    );

  const fragmento = (p: PiezaTirada) =>
    resolverTextoLectura(FUENTES_ES, p.pieza.id as CartaId, tema, p.posicion);

  const fuentes: FuentesCruz = { nombre, fragmento, bancos: BANCOS_TAROT_ES };
  return armarCruz(tirada, analisis, fuentes);
}
