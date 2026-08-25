import { RATIO_PIEZA } from './components/CartaImagen';

/**
 * Geometría de una tirada de piezas (la cruz de cinco o la fila).
 *
 * Vive suelta y no adentro de la pantalla de Tirada porque la usan dos: la
 * pantalla, que la resuelve contra el área que le queda libre, y la tarjeta que
 * se comparte, que la resuelve contra el recuadro de la foto. Es la misma
 * cuenta con distinta caja, y tenerla escrita dos veces era garantía de que la
 * tarjeta se fuera desacomodando cada vez que se tocara la pantalla.
 */

export interface Medidas {
  /** Ancho de cada pieza. 0 si el área es tan chica que no entra nada. */
  cartaW: number;
  /** Alto de cada pieza, ya con el ratio del arte aplicado. */
  cartaH: number;
  /** Separación entre piezas. */
  gap: number;
}

export interface OpcionesTablero {
  disposicion: 'cruz' | 'fila';
  /** Cuántas piezas hay (solo importa en 'fila'; la cruz siempre es 3x3). */
  n: number;
  /** Relación alto/ancho del arte (cartas ~1.8, runas ~1). */
  ratio?: number;
  ancho: number;
  alto: number;
  /** Margen horizontal y vertical que se le deja al área. */
  aire?: number;
  respiro?: number;
  /**
   * Separación entre piezas en disposición 'fila'. La pantalla la saca del
   * ancho de la ventana (3%) y no del área, para que las runas se vean igual de
   * separadas sin importar cuánto alto le quede libre a la tirada.
   */
  gapFila?: number;
}

export function medirTablero({
  disposicion,
  n,
  ratio = RATIO_PIEZA,
  ancho,
  alto,
  aire = 16,
  respiro = 14,
  gapFila,
}: OpcionesTablero): Medidas {
  const anchoDisp = ancho - aire * 2;
  const altoDisp = alto - respiro * 2;

  let cartaW: number;
  let gap: number;

  if (disposicion === 'fila') {
    gap = gapFila ?? Math.round(ancho * 0.03);
    const porAncho = (anchoDisp - gap * (n - 1)) / n;
    const porAlto = altoDisp / ratio;
    cartaW = Math.floor(Math.min(porAncho, porAlto));
  } else {
    // La cruz ocupa una grilla de 3x3 aunque solo cinco casilleros tengan pieza.
    gap = Math.round(ancho * 0.022);
    const porAncho = (anchoDisp - gap * 2) / 3;
    const porAlto = (altoDisp - gap * 2) / (3 * ratio);
    cartaW = Math.floor(Math.min(porAncho, porAlto));
  }

  // Un área muy chica da negativo, y un ancho negativo no rompe pero dibuja
  // basura. Cero es lo que quien la use puede detectar y no dibujar nada.
  if (!Number.isFinite(cartaW) || cartaW < 1) return { cartaW: 0, cartaH: 0, gap: 0 };

  return { cartaW, cartaH: cartaW * ratio, gap };
}
