/**
 * Sistema de diseno NEUTRO de la carcaza.
 *
 * Es deliberadamente sobrio: estructura, espaciado y jerarquia tipografica.
 * El color de cada seccion lo aporta el `acento` de cada oraculo (ver
 * src/oraculos/<x>/modulo.ts). La paleta visual "de verdad" la define Betiana
 * arriba de esta base; aca solo vive el esqueleto.
 */

export const colores = {
  // Fondo base y superficies (tema oscuro, neutro azul-grisaceo)
  fondo: '#0E0F14',
  superficie: '#1A1C24',
  superficieAlta: '#22252F',
  borde: '#2C2F3A',
  bordeSuave: '#20232C',

  // Texto
  texto: '#E6E8EF',
  textoSuave: '#9AA0AE',
  textoTenue: '#6B7180',

  // Cromo neutro (lo que no pertenece a ningun oraculo)
  cromo: '#8A8FA3',

  // Utilidad
  gema: '#C9B27A', // dorado tenue del contador (neutro, no chillon)
  overlay: 'rgba(0,0,0,0.45)',
} as const;

export const espaciado = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radios = {
  sm: 8,
  md: 12,
  lg: 18,
  pill: 999,
} as const;

/**
 * Tipografias del proyecto:
 *   - Cinzel            -> titulos ("Tarot", "Runas", "I Ching"...)
 *   - Cormorant Garamond -> subtitulos / descripciones
 *   - Inter             -> texto de interfaz
 *
 * Se activan cuando las .ttf esten en assets/fonts y se carguen en App.tsx
 * (ver src/shell/theme/fuentes.ts). Mientras tanto `fuente()` devuelve
 * undefined y cae en la fuente del sistema, para que la app corra sin assets.
 */
export const familias = {
  titulo: 'Cinzel',
  tituloBold: 'Cinzel-Bold',
  subtitulo: 'Cormorant',
  subtituloMedium: 'Cormorant-Medium',
  ui: 'Inter',
  uiMedium: 'Inter-Medium',
  uiSemiBold: 'Inter-SemiBold',
} as const;

export type RolFuente = keyof typeof familias;
