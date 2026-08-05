import type { Pieza } from '@/flujo/pieza';
import { HEXAGRAMAS_ES } from './content/es/hexagramas';
import { CartaHexagrama } from './components/HexagramaLineas';

// El hexagrama se dibuja en un recuadro ~cuadrado.
const RATIO_HEX = 1;

/**
 * Piezas del I Ching para la WIKI: un hexagrama por cada uno que tenga
 * contenido escrito. No hay imagen: cada pieza se dibuja con sus 6 lineas.
 * (La tirada del I Ching es propia y no usa este mazo para sortear.)
 */
export const MAZO_ICHING: Pieza[] = Object.values(HEXAGRAMAS_ES)
  .sort((a, b) => a.numero - b.numero)
  .map((h): Pieza => ({
    id: `hex${h.numero}`,
    numero: h.numero,
    imagen: null,
    ratio: RATIO_HEX,
    dibujo: ({ width, height }) => (
      <CartaHexagrama lineas={h.lineas} width={width} height={height} />
    ),
  }));
