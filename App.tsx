import { useCallback, useEffect } from 'react';
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

  useEffect(() => {
    if (fuentesListas) SplashScreen.hideAsync().catch(() => {});
  }, [fuentesListas]);

  const onLayout = useCallback(() => {
    if (fuentesListas) SplashScreen.hideAsync().catch(() => {});
  }, [fuentesListas]);

  const navRef = useNavigationContainerRef<RootStackParamList>();

  if (!fuentesListas) return null;

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
