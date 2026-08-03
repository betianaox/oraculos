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

// En Expo 57 (edge-to-edge) la barra de navegacion de Android es transparente y
// deja ver el fondo nativo de la ventana. Por defecto ese fondo es blanco en el
// build, asi que la barra se ve blanca (en Expo Go se veia oscura porque hereda
// otro fondo). Pintamos el root con el fondo de la app para que la barra quede
// del mismo tono oscuro, con el footer transparente encima.
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
