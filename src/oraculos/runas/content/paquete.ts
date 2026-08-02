import type { CodigoIdioma } from '@/i18n/idiomas';
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
  // Verbos para presentar cada runa en el párrafo individual ("Fehu trae ...").
  // Van acá y no en el motor porque dependen del idioma.
  verbosIndividual: string[];
  fragmentos: Partial<Record<Tema, FragmentosDeTema>>;
  aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>>;
  aperturasCerradas: Record<Tono, string[]>;
  conectores: string[];
  consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>>;
  ecoTercero: string[];
  ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]>;
  consejoDelDia: Record<RunaId, Record<Posicion, string[]>>;
}
