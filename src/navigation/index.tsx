import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './tipos';
import { InicioScreen } from '@/screens/Inicio';
import { AjustesScreen } from '@/screens/Ajustes';
import { OraculoScreen } from '@/screens/Oraculo';
import { TiradaScreen } from '@/flujo/screens/Tirada';
import { LecturaScreen } from '@/flujo/screens/Lectura';
import { AprenderScreen } from '@/oraculos/tarot/screens/Aprender';
import { AprenderDetalleScreen } from '@/oraculos/tarot/screens/AprenderDetalle';
import { ConsejoDelDiaScreen } from '@/oraculos/tarot/screens/ConsejoDelDia';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navegacion() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Oraculo" component={OraculoScreen} />
      <Stack.Screen name="Tirada" component={TiradaScreen} />
      <Stack.Screen name="Lectura" component={LecturaScreen} />
      <Stack.Screen name="Aprender" component={AprenderScreen} />
      <Stack.Screen name="AprenderDetalle" component={AprenderDetalleScreen} />
      <Stack.Screen name="ConsejoDelDia" component={ConsejoDelDiaScreen} />
      <Stack.Screen
        name="Ajustes"
        component={AjustesScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}
