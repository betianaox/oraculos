import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './tipos';
import { InicioScreen } from '@/screens/Inicio';
import { AjustesScreen } from '@/screens/Ajustes';
import { OraculoScreen } from '@/screens/Oraculo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navegacion() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Oraculo" component={OraculoScreen} />
      <Stack.Screen
        name="Ajustes"
        component={AjustesScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}
