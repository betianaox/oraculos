import { useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DarkTheme,
  useNavigationContainerRef,
  type Theme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';
import { Navegacion } from '@/navigation';
import type { RootStackParamList } from '@/navigation/tipos';
import { useVoz } from '@/flujo/voz';
import { useApp } from '@/store/useApp';
import { mapaFuentes } from '@/shell/theme/fuentes';
import { colores } from '@/shell/theme/tokens';

SplashScreen.preventAutoHideAsync().catch(() => {});

// En Expo 57 (edge-to-edge) la barra de navegacion de Android es transparente.
// El "velo" (scrim) blanco que Android le pone a la barra de 3 botones se saca
// SOLO con el plugin expo-navigation-bar (enforceContrast:false + style:"light",
// en app.json: iconos claros porque el fondo detras es oscuro), que actua en el
// build/prebuild. El componente de runtime NO se usa: en Expo Go no puede
// desactivar el scrim y lo empeora. Este fondo oscuro queda detras de la barra
// transparente.
SystemUI.setBackgroundColorAsync(colores.fondo).catch(() => {});

const tema: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colores.fondo,
    card: colores.fondo,
    text: colores.texto,
    border: colores.borde,
    primary: colores.texto,
  },
};

export default function App() {
  // mapaFuentes esta vacio hasta que se activen las fuentes (assets/fonts):
  // useFonts({}) resuelve enseguida y la app corre con la fuente del sistema.
  const [fuentesListas] = useFonts(mapaFuentes);

  // NO ALCANZA CON LAS FUENTES. El idioma arranca en el del dispositivo y recien
  // al leer el disco aparece el que la persona eligio (ver useApp). Si se dibuja
  // antes, quien tiene el telefono en espanol pero eligio ingles ve un parpadeo:
  // la app aparece en espanol y se da vuelta sola un instante despues.
  //
  // Esperando las dos cosas, el splash tapa ese momento y la primera pantalla
  // que se ve ya esta en el idioma correcto.
  const hidratado = useApp((s) => s.hidratado);
  const listo = fuentesListas && hidratado;

  // ─────────────────────────────────────────────────────────────────────────
  // EL SPLASH SE SACA EN onLayout, Y EN NINGUN OTRO LADO
  // ─────────────────────────────────────────────────────────────────────────
  // Habia tambien un useEffect que lo sacaba, y ese sobraba de la peor manera:
  // un efecto corre cuando React termino de aplicar los cambios, que es ANTES
  // de que Android haya pintado el primer cuadro. Sacando el splash ahi queda
  // un instante sin splash y sin app todavia dibujada — el destello.
  //
  // onLayout avisa cuando la vista raiz ya esta medida y ubicada, o sea cuando
  // hay algo real abajo. Es el unico momento en que sacarlo no deja hueco.
  const onLayout = useCallback(() => {
    if (listo) SplashScreen.hideAsync().catch(() => {});
  }, [listo]);

  const navRef = useNavigationContainerRef<RootStackParamList>();

  if (!listo) return null;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colores.fondo }} onLayout={onLayout}>
        <StatusBar style="light" />
        <NavigationContainer
          ref={navRef}
          theme={tema}
          onStateChange={() => useVoz.getState().alCambiarRuta(navRef.getCurrentRoute()?.name)}
        >
          <Navegacion />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
