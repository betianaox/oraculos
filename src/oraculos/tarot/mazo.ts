import type { Pieza } from '@/flujo/pieza';
import { CARTAS } from './content/cartas/meta';

// Mazo de Tarot: las 78 cartas. La estructura rica (arcano/palo/wiki) vive en el
// contenido; para la tirada solo hace falta id, numero e imagen.
export const MAZO_TAROT: Pieza[] = CARTAS.map((c) => ({
  id: c.id,
  numero: c.numero,
  imagen: c.imagen,
}));
