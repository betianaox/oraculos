import { USA_IA } from './config';
import { generar, hayProveedor } from './transporte';
import type { MaterialLectura } from './tipos';

export type { MaterialLectura, PiezaMaterial } from './tipos';
export { USA_IA } from './config';
export { hayProveedor } from './transporte';

/**
 * Pide la lectura y la devuelve en párrafos, o `null` si no se pudo por el
 * motivo que sea: la IA está apagada, no hay red, tardó demasiado, o el
 * servidor decidió no dar ninguna.
 *
 * Nunca lanza. Quien llama solo necesita saber si tiene algo utilizable o si le
 * toca al motor propio.
 *
 * La validación de la respuesta —que sean tres párrafos, que no venga cortada—
 * vive en el servidor, junto al prompt. Acá llega una lectura buena o no llega
 * nada.
 */
export async function pedirLecturaIA(
  material: MaterialLectura,
  ventanaMs: number,
): Promise<string[] | null> {
  if (!hayProveedor()) {
    // Tres cosas distintas que se ven igual desde afuera, y conviene poder
    // separarlas al diagnosticar.
    if (__DEV__) {
      console.warn(
        USA_IA
          ? '[ia] sin proveedor: falta EXPO_PUBLIC_ORACULO_API_URL'
          : '[ia] apagada por configuración (USA_IA): responde el motor propio',
      );
    }
    return null;
  }

  const arranque = Date.now();
  if (__DEV__) console.warn('[ia] pidiendo lectura…');

  const controlador = new AbortController();
  // Si la lectura no llegó antes de que la persona pase a leerla, ya no sirve:
  // cambiar el texto delante de sus ojos es peor que no haberla pedido nunca.
  const corte = setTimeout(() => controlador.abort(), ventanaMs);

  try {
    const parrafos = await generar(material, controlador.signal);
    if (__DEV__) {
      console.warn(
        parrafos
          ? `[ia] contestó en ${Date.now() - arranque} ms`
          : `[ia] el servidor no dio lectura (${Date.now() - arranque} ms)`,
      );
    }
    return parrafos;
  } catch (error) {
    if (__DEV__) console.warn('[ia] se usa el motor propio:', error);
    return null;
  } finally {
    clearTimeout(corte);
  }
}
