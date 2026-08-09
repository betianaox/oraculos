import type { CodigoIdioma } from '@/i18n/idiomas';
import type { FichaWikiRuna } from './es/wiki';
import type {
  Modo,
  Posicion,
  RunaId,
  Tema,
  Tiempo,
  Tono,
  FragmentosDeTema,
} from './types';

// Idioma del contenido de Runas, alineado con los de Oraculos (fr cae a es).
export type IdiomaConcreto = CodigoIdioma;

// Todo el contenido dependiente de idioma, agrupado. Cada idioma expone un
// paquete con esta forma; el motor pide el paquete del idioma activo y arma la
// lectura sin saber en qué idioma está. Lo que NO depende de idioma (nombres
// de runa, imágenes) queda fuera, en content/nombres.ts e imagenes.ts.
export interface PaqueteContenido {
  fragmentos: Partial<Record<Tema, FragmentosDeTema>>;
  aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>>;
  aperturasCerradas: Record<Tono, string[]>;
  /**
   * Cierre del primer párrafo: teje las runas 1 y 2 con {frag1} y {frag2}.
   *
   * Acá NO se nombran las runas. Antes la lectura decía "Fehu trae X, Uruz
   * suma Y": la persona ya ve las runas en pantalla, y lo que espera leer es
   * qué dicen sobre lo que preguntó, no una definición de cada una.
   */
  situacion: string[];
  /**
   * Segundo párrafo: la runa 3 con {frag3}. Es la única que se lee mirando
   * hacia adelante, en clave de tendencia ("se perfila", "todo apunta a"),
   * nunca como un hecho consumado.
   */
  cierre: string[];
  consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>>;
  ecoTercero: string[];
  ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]>;
  consejoDelDia: Record<RunaId, Record<Posicion, string[]>>;
  /**
   * Fichas de la seccion Aprender. Vivian sueltas en content/wiki.ts, fuera de
   * las carpetas de idioma, y por eso eran las unicas que quedaban en español
   * aunque el resto del oraculo estuviera traducido.
   */
  wiki: Record<RunaId, FichaWikiRuna>;
}
