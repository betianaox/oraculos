import { useApp } from '@/store/useApp';
import { obtenerTextos, type Textos } from './content/textos';

/** Textos de UI de Tarot en el idioma activo (es/en/pt/it; fr cae a español). */
export function useTextosTarot(): Textos {
  return obtenerTextos(useApp((s) => s.idioma));
}
