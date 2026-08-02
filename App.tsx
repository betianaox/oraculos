import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme, type Theme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Navegacion } from '@/navigation';
import { mapaFuentes } from '@/shell/theme/fuentes';
import { colores } from '@/shell/theme/tokens';

SplashScreen.preventAutoHideAsync().catch(() => {});

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

  if (!fuentesListas) return null;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colores.fondo }} onLayout={onLayout}>
        <StatusBar style="light" />
        <NavigationContainer theme={tema}>
          <Navegacion />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
