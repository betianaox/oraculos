import { useCallback, useEffect, useRef, useState } from 'react';
import type { RewardedAd } from 'react-native-google-mobile-ads';
import { AD_UNIT_ID_RECOMPENSADO, ads, adsDisponible, iniciarAds } from './publicidad';

export type EstadoAnuncio = 'cargando' | 'listo' | 'sinAnuncio';

/**
 * Anuncio recompensado de AdMob (el mismo enganche que en Runas y Tarot).
 *
 * Pide el anuncio al SDK apenas se monta la pantalla que lo puede ofrecer, y
 * precarga el siguiente cuando se cierra. La recompensa se OTORGA AL CERRAR el
 * anuncio (si se gano), no al ganarla: EARNED_REWARD llega con el anuncio
 * todavia en pantalla, asi que el efecto (las cartas del bloque dandose vuelta)
 * quedaria tapado. Si el usuario corta el video antes de terminarlo, no
 * desbloquea nada.
 */
export function useAnuncioRecompensado() {
  const anuncioRef = useRef<RewardedAd | null>(null);
  const [estado, setEstado] = useState<EstadoAnuncio>(
    adsDisponible ? 'cargando' : 'sinAnuncio'
  );

  useEffect(() => {
    if (!ads) return;

    let anuncio: RewardedAd;
    try {
      iniciarAds();
      anuncio = ads.RewardedAd.createForAdRequest(AD_UNIT_ID_RECOMPENSADO);
    } catch (e) {
      // El SDK esta en el JS pero no en el binario nativo: hay que recompilar.
      console.warn('[ads] no se pudo crear el anuncio:', e);
      setEstado('sinAnuncio');
      return;
    }

    const { AdEventType, RewardedAdEventType } = ads;
    anuncioRef.current = anuncio;

    const cancelarCargado = anuncio.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setEstado('listo');
    });
    // Sin red, sin relleno o con la unidad mal configurada: se avisa y se deja
    // reintentar (no se reintenta solo en bucle, que gasta pedidos al SDK).
    const cancelarError = anuncio.addAdEventListener(AdEventType.ERROR, (error) => {
      console.warn('[ads] no se pudo cargar el anuncio:', error);
      setEstado('sinAnuncio');
    });
    // Al cerrarse, se precarga el siguiente para la proxima vez.
    const cancelarCerrado = anuncio.addAdEventListener(AdEventType.CLOSED, () => {
      setEstado('cargando');
      anuncio.load();
    });

    anuncio.load();

    return () => {
      cancelarCargado();
      cancelarError();
      cancelarCerrado();
      anuncioRef.current = null;
    };
  }, []);

  const recargar = useCallback(() => {
    const anuncio = anuncioRef.current;
    if (!anuncio) return;
    setEstado('cargando');
    anuncio.load();
  }, []);

  const mostrar = useCallback((onRecompensa: () => void) => {
    const anuncio = anuncioRef.current;
    if (!ads || !anuncio) return;
    const { AdEventType, RewardedAdEventType } = ads;

    let gano = false;
    const cancelarRecompensa = anuncio.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      () => {
        gano = true;
      }
    );
    const cancelarCerrado = anuncio.addAdEventListener(AdEventType.CLOSED, () => {
      cancelarRecompensa();
      cancelarCerrado();
      if (gano) onRecompensa();
    });

    anuncio.show();
  }, []);

  return { estado, listo: estado === 'listo', mostrar, recargar };
}
