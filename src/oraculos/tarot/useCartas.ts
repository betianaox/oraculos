import { useApp } from '@/store/useApp';
import { paqueteCartas, type PaqueteCartas } from './content/idiomaCartas';

/** Nombres + fichas Wiki + consejos de las cartas, en el idioma activo. */
export function useCartasTarot(): PaqueteCartas {
  return paqueteCartas(useApp((s) => s.idioma));
}
