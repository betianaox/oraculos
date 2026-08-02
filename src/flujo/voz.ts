import { create } from 'zustand';
import type { CodigoIdioma } from '@/i18n/idiomas';

// expo-speech es modulo nativo: se carga defensivo para que la app funcione
// (con el TTS inactivo) si todavia no esta en el build local.
const Speech: typeof import('expo-speech') | null = (() => {
  try {
    return require('expo-speech') as typeof import('expo-speech');
  } catch {
    return null;
  }
})();

const VOZ: Record<CodigoIdioma, string> = {
  es: 'es-ES',
  en: 'en-US',
  pt: 'pt-BR',
  it: 'it-IT',
  fr: 'fr-FR',
};

interface VozState {
  hablando: boolean;
  /** Rutas donde el audio puede seguir sonando (ej. Tirada + Lectura). */
  rutas: string[];
  hablar: (texto: string, idioma: CodigoIdioma, rutas: string[]) => void;
  parar: () => void;
  /** Se llama al cambiar de pantalla: corta si la ruta no esta permitida. */
  alCambiarRuta: (ruta: string | undefined) => void;
}

/**
 * Controlador GLOBAL de voz (TTS). Único para toda la app, así el audio de la
 * lectura sigue sonando entre Tirada y Lectura y se corta solo al salir de ese
 * grupo de rutas (o al presionar stop).
 */
export const useVoz = create<VozState>((set, get) => ({
  hablando: false,
  rutas: [],
  hablar: (texto, idioma, rutas) => {
    if (!Speech) return;
    Speech.stop();
    set({ hablando: true, rutas });
    Speech.speak(texto, {
      language: VOZ[idioma],
      onDone: () => set({ hablando: false }),
      onStopped: () => set({ hablando: false }),
      onError: () => set({ hablando: false }),
    });
  },
  parar: () => {
    Speech?.stop();
    set({ hablando: false });
  },
  alCambiarRuta: (ruta) => {
    const { hablando, rutas } = get();
    if (hablando && (!ruta || !rutas.includes(ruta))) {
      get().parar();
    }
  },
}));

/** Rutas del flujo de lectura: el audio sigue sonando entre estas dos. */
export const RUTAS_LECTURA = ['Tirada', 'Lectura'];
