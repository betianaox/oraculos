import { familias, type RolFuente } from './tokens';

/**
 * Carga de fuentes.
 *
 * ---------------------------------------------------------------------------
 * PARA ACTIVAR LAS FUENTES (cuando pongas las .ttf en assets/fonts/):
 *   1. Descomenta el bloque `mapaFuentes` de abajo con los nombres de archivo
 *      exactos que dejes en assets/fonts/.
 *   2. Poné FUENTES_ACTIVAS = true.
 * Nada mas: App.tsx ya usa `mapaFuentes`, y `fuente()` empieza a devolver el
 * nombre de familia real en vez de la fuente del sistema.
 * ---------------------------------------------------------------------------
 */
export const FUENTES_ACTIVAS = true;

export const mapaFuentes: Record<string, number> = {
  [familias.titulo]: require('../../../assets/fonts/Cinzel-Regular.ttf'),
  [familias.tituloBold]: require('../../../assets/fonts/Cinzel-Bold.ttf'),
  [familias.subtitulo]: require('../../../assets/fonts/CormorantGaramond-Regular.ttf'),
  [familias.subtituloMedium]: require('../../../assets/fonts/CormorantGaramond-Medium.ttf'),
  [familias.ui]: require('../../../assets/fonts/Inter-Regular.ttf'),
  [familias.uiMedium]: require('../../../assets/fonts/Inter-Medium.ttf'),
  [familias.uiSemiBold]: require('../../../assets/fonts/Inter-SemiBold.ttf'),
};

/**
 * Devuelve el `fontFamily` para un rol tipografico, o `undefined` (fuente del
 * sistema) mientras las fuentes no esten activas. Usar siempre esto en los
 * estilos en vez de escribir el nombre de la familia a mano.
 */
export function fuente(rol: RolFuente): string | undefined {
  return FUENTES_ACTIVAS ? familias[rol] : undefined;
}
