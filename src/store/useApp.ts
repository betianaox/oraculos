import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IDIOMA_POR_DEFECTO, type CodigoIdioma } from '@/i18n/idiomas';

/**
 * Estado global de la app. Solo vive aca lo que es transversal de verdad:
 *   - gemas: se ven en el header en todas las pantallas.
 *   - idioma: define en que idioma se leen la UI y (mas adelante) los significados.
 *
 * Se persiste en AsyncStorage. El oraculo centrado en el carrusel NO esta aca:
 * es estado local de la pantalla de inicio.
 */
interface EstadoApp {
  gemas: number;
  idioma: CodigoIdioma;
  hidratado: boolean;

  setIdioma: (idioma: CodigoIdioma) => void;
  sumarGemas: (n: number) => void;
  gastarGemas: (n: number) => boolean;
}

const GEMAS_INICIALES = 3;

export const useApp = create<EstadoApp>()(
  persist(
    (set, get) => ({
      gemas: GEMAS_INICIALES,
      idioma: IDIOMA_POR_DEFECTO,
      hidratado: false,

      setIdioma: (idioma) => set({ idioma }),
      sumarGemas: (n) => set({ gemas: get().gemas + n }),
      gastarGemas: (n) => {
        if (get().gemas < n) return false;
        set({ gemas: get().gemas - n });
        return true;
      },
    }),
    {
      name: 'oraculos-app',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ gemas: s.gemas, idioma: s.idioma }),
      onRehydrateStorage: () => (state) => {
        // Marca cuando terminó de leer del disco, para no parpadear valores.
        if (state) state.hidratado = true;
      },
    }
  )
);
