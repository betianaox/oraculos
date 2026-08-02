import type { ImageSourcePropType } from 'react-native';

/**
 * Contrato de un ORACULO. Cada oraculo se describe a si mismo en su
 * `modulo.ts`, y el registro central (registry.ts) los junta en una lista
 * ordenada. El carrusel, el header, el footer y las rutas se construyen
 * iterando esa lista: agregar un oraculo nuevo = crear la carpeta + una linea
 * en el registro.
 */
export interface OraculoModulo {
  /** id estable, en minusculas, sin espacios. Ej: 'tarot'. */
  id: string;

  /**
   * Clave i18n del nombre visible (se muestra en Cinzel).
   * Ej: 'oraculos.tarot.nombre'. El texto real vive en src/i18n/<idioma>.json.
   */
  nombreKey: string;

  /** Color de acento del oraculo. Tinta el fondo de su seccion y detalles. */
  acento: string;

  /**
   * Imagen del domo central del carrusel. Opcional en la Etapa 1: si falta,
   * se dibuja un placeholder. Se enchufa con require(...) cuando esten los assets.
   */
  domo?: ImageSourcePropType;

  /**
   * Fondo al que transiciona el carrusel al centrar este oraculo. Opcional en
   * la Etapa 1: si falta, se usa un degrade neutro derivado del `acento`.
   */
  fondo?: ImageSourcePropType;

  // --- Etapa 2 en adelante (todavia no se usa) ---
  // tirada?: React.ComponentType;        // tirada PROPIA del oraculo
  // cargarSignificados?: (idioma) => ... // significados perezosos por idioma
}
