import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaMaterial } from '@/ia/tipos';
import { armarLectura, type RunaTirada } from './armarLectura';
import { obtenerContenido } from './content';
import { nombres } from './content/nombres';
import type { RunaId } from './content/types';

// Qué representa cada posición de la tirada de 3. Va en palabras porque se lo
// pasamos tal cual a la IA, que no sabe cómo tira este oráculo.
const ROLES = [
  'lo que rodea la situación',
  'lo que la sostiene por debajo',
  'hacia dónde se perfila',
] as const;

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

/** Las mismas 3 runas, sin redactar, para que la IA escriba la lectura. */
export function materialRunas(
  tirada: PiezaTirada[],
  tema: Tema,
  _analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): PiezaMaterial[] {
  if (tirada.length < 3) return [];

  const fragmentos = obtenerContenido(idioma).fragmentos[tema];
  if (!fragmentos) return [];

  return tirada.slice(0, 3).map((t, indice): PiezaMaterial => {
    const id = t.pieza.id as RunaId;
    const variantes = fragmentos[id][t.posicion];
    return {
      nombre: nombres[id],
      rol: ROLES[indice],
      invertida: t.posicion === 'invertida',
      significado: variantes[Math.floor(Math.random() * variantes.length)],
    };
  });
}
