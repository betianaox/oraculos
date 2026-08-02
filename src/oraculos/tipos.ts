import type { ImageSourcePropType } from 'react-native';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { Pieza } from '@/flujo/pieza';
import type { ContenidoOraculo } from '@/flujo/contenido';

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

  /**
   * Mazo del oraculo: las piezas que se tiran (cartas, runas...). Si esta
   * presente, la pregunta lleva al flujo de tirada+lectura compartido. Si falta,
   * el oraculo todavia no tiene motor y cae al placeholder.
   */
  mazo?: Pieza[];

  /**
   * Contenido del oraculo (Aprender + Consejo del dia) en el idioma dado. Si
   * esta presente, se habilitan esas secciones. Si falta, caen al placeholder.
   */
  contenido?: (idioma: CodigoIdioma) => ContenidoOraculo;

  /**
   * Icono del oraculo. Se muestra arriba de la pantalla de pregunta (que es
   * igual para todos) para reforzar en que oraculo esta el usuario.
   */
  icono?: ImageSourcePropType;

  // --- Etapa 2 en adelante (todavia no se usa) ---
  // tirada?: React.ComponentType;        // tirada PROPIA del oraculo
  // cargarSignificados?: (idioma) => ... // significados perezosos por idioma
}
