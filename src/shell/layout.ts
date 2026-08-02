/**
 * Geometria del carrusel de domos. La comparten el Carrusel (para el snap y la
 * animacion) y el Fondo (para el cross-fade), asi que se calcula en un solo
 * lugar a partir del ancho de pantalla.
 */
export interface LayoutCarrusel {
  itemWidth: number;
  spacing: number;
  stride: number; // paso entre domos (itemWidth + spacing)
  side: number; // padding lateral para que el domo activo quede centrado
}

export function calcularLayout(ancho: number): LayoutCarrusel {
  const itemWidth = Math.round(ancho * 0.62);
  const spacing = -30;
  const stride = itemWidth + spacing;
  const side = Math.round((ancho - itemWidth) / 2);
  return { itemWidth, spacing, stride, side };
}
