import { useApp } from '@/store/useApp';
import { IDIOMA_POR_DEFECTO, type CodigoIdioma } from './idiomas';
import es from './es.json';
import en from './en.json';
import pt from './pt.json';

type Diccionario = Record<string, unknown>;

// it.json y fr.json siguen en el repo, pero no se cargan: esos idiomas no se
// ofrecen hasta que el contenido de los oraculos este traducido (ver idiomas.ts).
const DICCIONARIOS: Record<CodigoIdioma, Diccionario> = { es, en, pt };

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

/** Valores para rellenar los {marcadores} de un texto. */
export type Vars = Record<string, string | number>;

/**
 * Traduce una clave para un idioma dado. Si falta, cae al espanol y, si tampoco
 * esta, devuelve la propia clave (asi se ve que falta una traduccion).
 *
 * `vars` reemplaza los marcadores entre llaves: t('aprender.abrir', { seccion:
 * 'Copas' }). Van con marcador y no partiendo la frase en pedazos porque el
 * orden de las palabras cambia con el idioma, y una frase armada por
 * concatenacion solo funciona en el idioma en que se penso.
 */
export function traducir(clave: string, idioma: CodigoIdioma, vars?: Vars): string {
  const texto =
    resolver(DICCIONARIOS[idioma], clave) ??
    resolver(DICCIONARIOS[IDIOMA_POR_DEFECTO], clave) ??
    clave;

  if (!vars) return texto;
  return texto.replace(/\{(\w+)\}/g, (marcador, nombre) =>
    nombre in vars ? String(vars[nombre]) : marcador,
  );
}

/**
 * Hook de traduccion reactivo al idioma del store. Uso: `const t = useT();`
 * y despues `t('footer.consejo')` o `t('aprender.abrir', { seccion: 'Copas' })`.
 */
export function useT(): (clave: string, vars?: Vars) => string {
  const idioma = useApp((s) => s.idioma);
  return (clave: string, vars?: Vars) => traducir(clave, idioma, vars);
}
