import { useApp } from '@/store/useApp';
import { IDIOMA_POR_DEFECTO, type CodigoIdioma } from './idiomas';
import es from './es.json';
import en from './en.json';
import pt from './pt.json';
import it from './it.json';
import fr from './fr.json';

type Diccionario = Record<string, unknown>;

const DICCIONARIOS: Record<CodigoIdioma, Diccionario> = { es, en, pt, it, fr };

/** Resuelve una clave con puntos ("footer.consejo") dentro de un diccionario. */
function resolver(dic: Diccionario, clave: string): string | undefined {
  const valor = clave.split('.').reduce<unknown>((acc, parte) => {
    if (acc && typeof acc === 'object' && parte in (acc as object)) {
      return (acc as Record<string, unknown>)[parte];
    }
    return undefined;
  }, dic);
  return typeof valor === 'string' ? valor : undefined;
}

/**
 * Traduce una clave para un idioma dado. Si falta, cae al espanol y, si tampoco
 * esta, devuelve la propia clave (asi se ve que falta una traduccion).
 */
export function traducir(clave: string, idioma: CodigoIdioma): string {
  return (
    resolver(DICCIONARIOS[idioma], clave) ??
    resolver(DICCIONARIOS[IDIOMA_POR_DEFECTO], clave) ??
    clave
  );
}

/**
 * Hook de traduccion reactivo al idioma del store. Uso: `const t = useT();`
 * y despues `t('footer.consejo')`.
 */
export function useT(): (clave: string) => string {
  const idioma = useApp((s) => s.idioma);
  return (clave: string) => traducir(clave, idioma);
}
