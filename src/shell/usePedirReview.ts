import { useCallback } from 'react';
import * as StoreReview from 'expo-store-review';
import { useApp } from '@/store/useApp';
import { hayQuePedirReview } from './review';

/**
 * PIDE LA VALORACION SI TOCA, Y CASI NUNCA TOCA.
 *
 * Devuelve una funcion para llamar en el momento adecuado: al SALIR de una
 * lectura, no al abrirla. Terminar de leer y que aparezca un cartel encima es
 * interrumpir justo el momento que la persona vino a buscar; al salir ya vio lo
 * que queria y esta volviendo, que es el hueco donde una pregunta no pisa nada.
 *
 * Nada de esto avisa si el dialogo se llego a mostrar: Google tiene su propia
 * cuota y decide solo, sin contarselo a la app. Por eso el hito se marca como
 * pedido igual, se haya visto o no — insistir hasta "acertar" es exactamente lo
 * que vuelve molesta a una app.
 */
export function usePedirReview(): () => Promise<void> {
  const preguntas = useApp((s) => s.preguntas);
  const ultimo = useApp((s) => s.ultimoPedidoReview);
  const marcar = useApp((s) => s.marcarPedidoReview);

  return useCallback(async () => {
    if (!hayQuePedirReview(preguntas, ultimo)) return;

    marcar(preguntas);

    // Si el telefono no lo soporta —una version vieja de Play Services, un
    // dispositivo sin Play— no pasa nada: no hay nada que ofrecerle y no se le
    // inventa un cartel propio.
    if (!(await StoreReview.hasAction())) return;
    await StoreReview.requestReview().catch(() => {});
  }, [preguntas, ultimo, marcar]);
}
