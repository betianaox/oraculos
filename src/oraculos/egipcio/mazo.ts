import type { Pieza } from '@/flujo/pieza';
import { CARTAS_ES } from './content/es/cartas';
import { CARTAS_IMG } from './imagenes';

// Cartas ~1.8 (480x860), como el resto de los tarots. La invertida se muestra
// rotando 180 la imagen (el dorso comun va en contenido.reverso).
const RATIO_CARTA = 860 / 480;

/** Mazo del Tarot Egipcio: una pieza por cada carta con contenido escrito. */
export const MAZO_EGIPCIO: Pieza[] = Object.values(CARTAS_ES)
  .sort((a, b) => a.numero - b.numero)
  .map((c): Pieza => ({
    id: `carta${c.numero}`,
    numero: c.numero,
    imagen: CARTAS_IMG[c.numero],
    ratio: RATIO_CARTA,
  }));
