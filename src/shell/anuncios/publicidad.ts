type ModuloAds = typeof import('react-native-google-mobile-ads');

/**
 * Acceso al SDK de AdMob. Se carga con require y no con import estatico porque
 * es un modulo NATIVO: en Expo Go o en web no existe, y un import arriba de
 * todo tiraria la app entera al abrirla. Asi, si no esta, la app corre igual y
 * `adsDisponible` queda en false.
 */
let modulo: ModuloAds | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  modulo = require('react-native-google-mobile-ads') as ModuloAds;
} catch (e) {
  modulo = null;
  // Casi siempre es "estas corriendo un binario sin el modulo nativo" (Expo Go,
  // o un dev build viejo de antes de instalar AdMob): hay que volver a compilar
  // con `npm run android`, recargar el JS no alcanza.
  console.warn('[ads] AdMob no esta disponible en este binario:', e);
}

export const ads = modulo;
export const adsDisponible = modulo !== null;

/**
 * Unidad de anuncio recompensado.
 *
 * Usamos SIEMPRE el ID de test de Google, tambien en builds de release, para
 * poder probar en dispositivos reales sin arriesgar la cuenta de AdMob por
 * trafico invalido (tocar nuestros propios anuncios).
 *
 * TODO (ANTES DE PUBLICAR EN PLAY), y son DOS cosas:
 *
 *   1. Crear la unidad recompensada real de Oraculos y usarla en produccion,
 *      condicionada por una variable de build.
 *   2. Darle a la app su propio androidAppId de AdMob en `app.json`: el que hay
 *      hoy es EL DE TAROT.
 *
 * Ninguna de las dos avisa cuando falla. Publicado asi, el video se ve, la gema
 * se suma y todo "anda" — pero son anuncios de prueba, o sea cero ingresos, y
 * los eventos se le imputan a otra app.
 */
export const AD_UNIT_ID_RECOMPENSADO = modulo?.TestIds.REWARDED ?? '';

// El SDK se inicializa una sola vez por sesion, la primera vez que alguien
// pide un anuncio.
let iniciado = false;
export function iniciarAds(): void {
  if (!modulo || iniciado) return;
  iniciado = true;
  modulo.default().initialize();
}
