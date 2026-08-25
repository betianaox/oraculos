/**
 * Idiomas que la app OFRECE. El orden es el que se muestra en Ajustes.
 *
 * Solo se listan los que tienen contenido de verdad. Italiano y frances
 * estuvieron aca un tiempo, pero elegirlos dejaba la app entera en español
 * (los oraculos caen a español cuando falta traduccion), que es peor que no
 * ofrecerlos: se lee como una app rota, no como una app en varios idiomas.
 * Cuando se traduzcan, se agregan aca y vuelven a aparecer.
 */
export const IDIOMAS = [
  // Cada idioma se nombra en si mismo y bien escrito, acentos incluidos: quien
  // busca su idioma en esta lista lo reconoce por como se ve.
  { codigo: 'es', etiqueta: 'Español' },
  { codigo: 'en', etiqueta: 'English' },
  { codigo: 'pt', etiqueta: 'Português' },
] as const;

export type CodigoIdioma = (typeof IDIOMAS)[number]['codigo'];

export const IDIOMA_POR_DEFECTO: CodigoIdioma = 'es';

export function esIdiomaSoportado(codigo: string): codigo is CodigoIdioma {
  return IDIOMAS.some((i) => i.codigo === codigo);
}
