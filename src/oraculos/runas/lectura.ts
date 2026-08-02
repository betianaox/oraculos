import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import { armarLectura, type RunaTirada } from './armarLectura';
import type { RunaId } from './content/types';

/** Motor de lectura de Runas: de las 3 runas tiradas + el analisis a los parrafos. */
export function lecturaRunas(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  idioma: CodigoIdioma
): string[] {
  const runas = tirada.slice(0, 3).map(
    (t): RunaTirada => ({ id: t.pieza.id as RunaId, posicion: t.posicion })
  ) as [RunaTirada, RunaTirada, RunaTirada];

  const resultado = armarLectura(runas, tema, analisis, idioma);
  if (!resultado) return [];
  return [resultado.parrafoIndividual, resultado.parrafoIntegrador];
}
