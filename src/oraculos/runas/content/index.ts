import { paqueteEn } from './en';
import { paqueteEs } from './es';
import { paquetePt } from './pt';
import type { IdiomaConcreto, PaqueteContenido } from './paquete';

// Selector de contenido por idioma. El paquete italiano sigue en ./it, pero no
// se enchufa: ese idioma no se ofrece hasta tener traducido el resto de los
// oraculos (ver i18n/idiomas.ts).
const paquetes: Partial<Record<IdiomaConcreto, PaqueteContenido>> = {
  es: paqueteEs,
  en: paqueteEn,
  pt: paquetePt,
};

export function obtenerContenido(idioma: IdiomaConcreto): PaqueteContenido {
  return paquetes[idioma] ?? paqueteEs;
}
