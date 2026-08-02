/**
 * Idiomas soportados. Con estos cinco cubrimos gran parte de America y Europa.
 * El orden es el que se muestra en Ajustes.
 */
export const IDIOMAS = [
  { codigo: 'es', etiqueta: 'Espanol' },
  { codigo: 'en', etiqueta: 'English' },
  { codigo: 'pt', etiqueta: 'Portugues' },
  { codigo: 'it', etiqueta: 'Italiano' },
  { codigo: 'fr', etiqueta: 'Francais' },
] as const;

export type CodigoIdioma = (typeof IDIOMAS)[number]['codigo'];

export const IDIOMA_POR_DEFECTO: CodigoIdioma = 'es';

export function esIdiomaSoportado(codigo: string): codigo is CodigoIdioma {
  return IDIOMAS.some((i) => i.codigo === codigo);
}
