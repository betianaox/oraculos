import type { PiezaTirada } from './pieza';
import type { FuentesCruz } from './motorCruz';
import type { PiezaMaterial } from '@/ia/tipos';

// Gemelo de `armarCruz`: en vez de redactar los párrafos, saca de la tirada la
// materia prima en crudo. Las dos funciones comen exactamente lo mismo
// (`FuentesCruz`), así que la lectura de la IA y la del motor propio se apoyan
// en el mismo contenido y no pueden contradecirse.
//
// Los roles están en palabras y no en códigos porque van derecho al prompt: la
// IA no sabe qué es una cruz de 5, se lo contamos acá.
const ROLES = [
  'la situación, en el brazo izquierdo',
  'el corazón de la tirada, la pieza más fuerte',
  'la situación, en el brazo derecho',
  'lo que la persona tiene en la cabeza',
  'el paso siguiente',
] as const;

/**
 * Devuelve las 5 piezas ya resueltas, o [] si no llegan las 5 (mismo criterio
 * que `armarCruz`: sin cruz completa no hay lectura).
 */
export function materialCruz(
  tirada: PiezaTirada[],
  fuentes: FuentesCruz,
): PiezaMaterial[] {
  if (tirada.length < 5) return [];

  return tirada.slice(0, 5).map((pieza, indice): PiezaMaterial => ({
    nombre: fuentes.nombre(pieza),
    rol: ROLES[indice],
    invertida: pieza.posicion === 'invertida',
    significado: fuentes.fragmento(pieza),
  }));
}
