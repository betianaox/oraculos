import type { ImageSourcePropType } from 'react-native';
import type { CodigoIdioma } from '@/i18n/idiomas';
import type { Pieza, EspecieTirada, PiezaTirada } from '@/flujo/pieza';
import type { ContenidoOraculo } from '@/flujo/contenido';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { PiezaMaterial } from '@/ia/tipos';

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
   * Idiomas en los que el oraculo se OFRECE. Si falta, se ofrece en todos.
   *
   * Existe para el I Ching: su contenido (64 hexagramas, dictamenes y 384
   * lineas cambiantes) es el 62% de todo el material de la app y por ahora
   * solo esta en espanol. Mostrarlo en ingles o portugues significaria que la
   * consulta entera sale en otro idioma, y eso es peor que no ofrecerlo: en la
   * tienda se lee como una app a medio traducir. Cuando se traduzca, se agrega
   * el idioma aca y aparece solo.
   */
  idiomas?: CodigoIdioma[];

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

  /** Como tira este oraculo (disposicion + sorteo). Default: cruz de 5. */
  tirada?: EspecieTirada;

  /**
   * Motor de lectura: arma los parrafos a partir de las piezas tiradas, el tema
   * y el analisis de la pregunta. Si falta, la lectura muestra el demo.
   */
  lectura?: (
    tirada: PiezaTirada[],
    tema: Tema,
    analisis: AnalisisPregunta,
    idioma: CodigoIdioma
  ) => string[];

  /**
   * La misma tirada, pero en crudo: nombre, rol y significado de cada pieza,
   * sin redactar. Es lo que se le manda a la IA para que escriba la lectura en
   * lenguaje natural. Si falta, el oraculo simplemente no usa IA y responde
   * siempre con `lectura`.
   */
  material?: (
    tirada: PiezaTirada[],
    tema: Tema,
    analisis: AnalisisPregunta,
    idioma: CodigoIdioma
  ) => PiezaMaterial[];

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

  /**
   * El oraculo tiene su PROPIA pantalla de tirada y no usa el flujo compartido
   * (mazo + cruz de 5). Ej: el I Ching, que tira monedas y arma un hexagrama.
   * Con esto, tener `mazo` (que aca sirve solo para la wiki) no dispara la
   * tirada compartida al enviar la pregunta.
   */
  tiradaPropia?: boolean;

  // --- Etapa 2 en adelante (todavia no se usa) ---
  // tirada?: React.ComponentType;        // tirada PROPIA del oraculo
  // cargarSignificados?: (idioma) => ... // significados perezosos por idioma
}
