import type { Pieza } from '@/flujo/pieza';
import { ODUS_ES } from './content/es/odus';
import { CartaOdu } from './components/MarcaOdu';

// El odu se dibuja como grilla de 16 puntos (~cuadrado).
const RATIO_ODU = 1;

/**
 * Piezas de Buzios para la WIKI y el Consejo del dia: un odu por cada uno. No
 * hay imagen; cada odu se dibuja con su grilla de cauries abiertos/cerrados.
 * (La tirada es propia y no usa este mazo para sortear.)
 */
export const MAZO_BUZIOS: Pieza[] = Object.values(ODUS_ES)
  .sort((a, b) => a.numero - b.numero)
  .map((o): Pieza => ({
    id: `odu${o.numero}`,
    numero: o.numero,
    imagen: null,
    ratio: RATIO_ODU,
    dibujo: ({ width, height }) => <CartaOdu numero={o.numero} width={width} height={height} />,
  }));
