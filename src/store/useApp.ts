import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IDIOMA_POR_DEFECTO, type CodigoIdioma } from '@/i18n/idiomas';

/**
 * Estado global de la app. Solo vive aca lo que es transversal de verdad:
 *   - gemas: se ven en el header en todas las pantallas. Cada tirada cuesta 1.
 *   - idioma: define en que idioma se leen la UI y los significados.
 *   - wikiDesbloqueada: que partes de la wiki destrabo el usuario HOY. La clave
 *     es el oraculo ("tarot") cuando la wiki se destraba entera (oraculos de un
 *     solo bloque: runas, iching, buzios) o "oraculo:bloque" ("tarot:copas")
 *     cuando se destraba bloque por bloque (los mazos). Se vacia al cambiar el
 *     dia: el video da acceso por esa jornada.
 *   - ultimoDia: para rellenar las gemas al cambiar el dia.
 *
 * Se persiste en AsyncStorage. El oraculo centrado en el carrusel NO esta aca:
 * es estado local de la pantalla de inicio.
 */
interface EstadoApp {
  gemas: number;
  idioma: CodigoIdioma;
  hidratado: boolean;
  ultimoDia: string;
  wikiDesbloqueada: Record<string, boolean>;
  /**
   * Mejor racha del Reto, por oraculo ("tarot" -> 23). Es lo unico que guarda
   * esa seccion, y va por oraculo porque tu marca en Tarot no dice nada de lo
   * que sabes de Runas.
   */
  mejorPuntaje: Record<string, number>;

  setIdioma: (idioma: CodigoIdioma) => void;
  sumarGemas: (n: number) => void;
  gastarGemas: (n: number) => boolean;
  /** Rellena las gemas al minimo diario si cambio el dia (no baja si hay mas). */
  chequearDia: () => void;
  /**
   * Marca como desbloqueada la wiki de un oraculo (tras mirar el video), o solo
   * uno de sus bloques si se pasa `seccionId`.
   */
  desbloquearWiki: (oraculoId: string, seccionId?: string) => void;
  /** Guarda la racha si supera la mejor. Devuelve true si hubo record nuevo. */
  registrarPuntaje: (oraculoId: string, puntaje: number) => boolean;
}

/** Clave de desbloqueo de un bloque de la wiki. */
export function claveWiki(oraculoId: string, seccionId?: string): string {
  return seccionId ? `${oraculoId}:${seccionId}` : oraculoId;
}

const GEMAS_DIARIAS = 3;

// Fecha del dispositivo, sin hora. (Cuando haya backend, esto va contra el reloj
// del servidor para que no se haga trampa cambiando la hora del telefono.)
function hoyKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export const useApp = create<EstadoApp>()(
  persist(
    (set, get) => ({
      gemas: GEMAS_DIARIAS,
      idioma: IDIOMA_POR_DEFECTO,
      hidratado: false,
      ultimoDia: '',
      wikiDesbloqueada: {},
      mejorPuntaje: {},

      setIdioma: (idioma) => set({ idioma }),
      sumarGemas: (n) => set({ gemas: get().gemas + n }),
      gastarGemas: (n) => {
        if (get().gemas < n) return false;
        set({ gemas: get().gemas - n });
        return true;
      },
      chequearDia: () => {
        const hoy = hoyKey();
        if (get().ultimoDia !== hoy) {
          set({
            ultimoDia: hoy,
            gemas: Math.max(get().gemas, GEMAS_DIARIAS),
            // El acceso a la wiki es POR DIA, no para siempre: al cambiar el
            // dia los bloques vuelven a trabarse y hay que mirar un video de
            // nuevo. El puntaje del Reto NO se toca: eso es un logro, no un
            // permiso, y borrarlo seria castigar a quien mas juega.
            wikiDesbloqueada: {},
          });
        }
      },
      desbloquearWiki: (oraculoId, seccionId) =>
        set({
          wikiDesbloqueada: {
            ...get().wikiDesbloqueada,
            [claveWiki(oraculoId, seccionId)]: true,
          },
        }),
      registrarPuntaje: (oraculoId, puntaje) => {
        const previo = get().mejorPuntaje[oraculoId] ?? 0;
        if (puntaje <= previo) return false;
        set({ mejorPuntaje: { ...get().mejorPuntaje, [oraculoId]: puntaje } });
        return true;
      },
    }),
    {
      name: 'oraculos-app',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        gemas: s.gemas,
        idioma: s.idioma,
        ultimoDia: s.ultimoDia,
        wikiDesbloqueada: s.wikiDesbloqueada,
        mejorPuntaje: s.mejorPuntaje,
      }),
      onRehydrateStorage: () => (state) => {
        // Al terminar de leer del disco: marca hidratado y rellena gemas del dia.
        if (state) {
          state.hidratado = true;
          state.chequearDia();
        }
      },
    }
  )
);
