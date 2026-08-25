import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import {
  IDIOMA_POR_DEFECTO,
  esIdiomaSoportado,
  type CodigoIdioma,
} from '@/i18n/idiomas';

/**
 * Idioma con el que arranca la app la PRIMERA vez que se abre.
 *
 * Hasta ahora era español fijo para todo el mundo: alguien en Brasil o en
 * Estados Unidos instalaba la app y la veía en español hasta que descubría
 * Ajustes. `expo-localization` ya estaba instalado y declarado en app.json,
 * pero no se usaba en ningún lado.
 *
 * Solo pesa en la primera apertura. Después manda lo que haya en disco, sea
 * porque la persona eligió en Ajustes o porque esto ya resolvió una vez: el
 * idioma del dispositivo no vuelve a opinar. Es a propósito — a quien eligió
 * inglés en un teléfono en portugués no se le pisa la elección en cada arranque.
 *
 * Si el dispositivo está en un idioma que no ofrecemos, cae a español.
 */
function idiomaDelDispositivo(): CodigoIdioma {
  try {
    for (const local of getLocales()) {
      const codigo = local.languageCode?.toLowerCase();
      // languageCode viene sin región ('pt' y no 'pt-BR'), que es justo lo que
      // usamos como código de idioma.
      if (codigo && esIdiomaSoportado(codigo)) return codigo;
    }
  } catch {
    // getLocales() no debería fallar, pero si el sistema devuelve algo raro
    // preferimos arrancar en español antes que romper el arranque de la app.
  }
  return IDIOMA_POR_DEFECTO;
}

/**
 * Estado global de la app. Solo vive aca lo que es transversal de verdad:
 *   - gemas: se ven en el header en todas las pantallas. Cada tirada cuesta 1.
 *   - idioma: define en que idioma se leen la UI y los significados. La primera
 *     vez sale del dispositivo (ver idiomaDelDispositivo); despues, de disco.
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

  /**
   * Cuantas preguntas se hicieron EN TOTAL, desde siempre. Solo sube.
   *
   * No sirven las gemas para esto: se gastan y se rellenan solas cada dia, asi
   * que el numero de gemas no dice nada sobre cuanto se uso la app. Esto es lo
   * unico que lo dice, y existe para una sola cosa: saber cuando pedir la
   * valoracion (ver `shell/review.ts`).
   */
  preguntas: number;
  /** En que numero de preguntas se pidio la valoracion por ultima vez. */
  ultimoPedidoReview: number;
  /**
   * Si ya se mostro el saludo de la primera vez.
   *
   * Se escribe al CERRARLO, no al abrirlo: si la app muere con el saludo
   * abierto, la proxima vez se vuelve a ofrecer en lugar de perderse.
   */
  saludoVisto: boolean;

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
  /** Suma una pregunta al total y devuelve el numero nuevo. */
  registrarPregunta: () => number;
  /** Anota que ya se pidio la valoracion en este numero de preguntas. */
  marcarPedidoReview: (n: number) => void;
  marcarSaludoVisto: () => void;
  /** Solo para `__DEV__`: vuelve a mostrar el saludo de la primera vez. */
  reiniciarSaludo: () => void;
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
      // Valor inicial, que solo se usa si no hay nada guardado (primera
      // apertura). Lo que persist lea del disco lo pisa, así que la elección de
      // la persona siempre gana. Ver idiomaDelDispositivo().
      idioma: idiomaDelDispositivo(),
      hidratado: false,
      ultimoDia: '',
      wikiDesbloqueada: {},
      mejorPuntaje: {},
      preguntas: 0,
      ultimoPedidoReview: 0,
      saludoVisto: false,

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
      registrarPregunta: () => {
        const n = get().preguntas + 1;
        set({ preguntas: n });
        return n;
      },
      marcarPedidoReview: (n) => set({ ultimoPedidoReview: n }),
      marcarSaludoVisto: () => set({ saludoVisto: true }),
      reiniciarSaludo: () => set({ saludoVisto: false }),
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
        preguntas: s.preguntas,
        ultimoPedidoReview: s.ultimoPedidoReview,
        saludoVisto: s.saludoVisto,
      }),
      onRehydrateStorage: () => (state, error) => {
        // Al terminar de leer del disco: rellena las gemas del dia.
        if (state) state.chequearDia();

        // ─────────────────────────────────────────────────────────────────
        // `setState` Y NO `state.hidratado = true`
        // ─────────────────────────────────────────────────────────────────
        // El `state` que llega aca ES el objeto de estado, asi que mutarlo
        // "funciona" en el sentido de que el valor queda cambiado. Pero NO
        // AVISA A NADIE: quien lo este mirando con un selector no se entera y
        // no se vuelve a dibujar. Persist ya hizo su `set` (con la bandera
        // todavia en false) antes de llamar a esto.
        //
        // Andaba de casualidad. El `chequearDia()` de arriba hace su propio
        // `set` cuando cambia el dia, y ese aviso arrastraba la mutacion; pero
        // si el dia es el mismo, `chequearDia` no toca nada y no avisa nadie.
        // O sea: fallaba en la SEGUNDA apertura del dia y andaba en la primera,
        // que es la peor forma de fallar que hay.
        //
        // Y desde que App.tsx espera esta bandera para dibujar, ese caso ya no
        // seria un detalle: seria la app en el splash para siempre.
        //
        // Se levanta igual si la lectura fallo (ahi no llega `state`): se
        // arranca con los valores por defecto, que es lo mismo que le pasa a
        // quien abre la app por primera vez. Quedarse trabado es peor.
        void error;
        useApp.setState({ hidratado: true });
      },
    }
  )
);
