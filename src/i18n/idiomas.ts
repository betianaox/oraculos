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
  { codigo: 'es', etiqueta: 'Espanol' },
  { codigo: 'en', etiqueta: 'English' },
  { codigo: 'pt', etiqueta: 'Portugues' },
] as const;

export type CodigoIdioma = (typeof IDIOMAS)[number]['codigo'];

export const IDIOMA_POR_DEFECTO: CodigoIdioma = 'es';

export function esIdiomaSoportado(codigo: string): codigo is CodigoIdioma {
  return IDIOMAS.some((i) => i.codigo === codigo);
}
