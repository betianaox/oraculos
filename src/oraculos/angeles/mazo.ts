import type { Pieza } from '@/flujo/pieza';
import { IMAGENES_ANGELES } from './imagenes';

// Mazo de Angeles: 78 cartas numeradas (el 00 es el reverso, no se tira).
export const MAZO_ANGELES: Pieza[] = Object.entries(IMAGENES_ANGELES).map(([n, img]) => ({
  id: `angel-${n.padStart(2, '0')}`,
  numero: Number(n),
  imagen: img,
}));
