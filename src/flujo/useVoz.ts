import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import type { CodigoIdioma } from '@/i18n/idiomas';
import { useApp } from '@/store/useApp';

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

/**
 * Lee un texto en voz alta con el TTS del sistema (offline) y lo CORTA al salir
 * de la pantalla, salga como salga (boton, gesto, back de Android).
 */
export function useVoz(texto: string) {
  const idioma = useApp((s) => s.idioma);
  const [hablando, setHablando] = useState(false);

  const alternar = () => {
    if (!Speech) return;
    if (hablando) {
      Speech.stop();
      setHablando(false);
      return;
    }
    setHablando(true);
    Speech.speak(texto, {
      language: VOZ[idioma],
      onDone: () => setHablando(false),
      onStopped: () => setHablando(false),
      onError: () => setHablando(false),
    });
  };

  useFocusEffect(
    useCallback(
      () => () => {
        Speech?.stop();
      },
      []
    )
  );

  return { hablando, alternar };
}
