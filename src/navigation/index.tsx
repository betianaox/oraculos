import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './tipos';
import { InicioScreen } from '@/screens/Inicio';
import { AyudaScreen } from '@/screens/Ayuda';
import { OraculoScreen } from '@/screens/Oraculo';
import { TiradaScreen } from '@/flujo/screens/Tirada';
import { TiradaIchingScreen } from '@/oraculos/iching/screens/TiradaIching';
import { TiradaBuziosScreen } from '@/oraculos/buzios/screens/TiradaBuzios';
import { LecturaScreen } from '@/flujo/screens/Lectura';
import { AprenderScreen } from '@/flujo/screens/Aprender';
import { AprenderDetalleScreen } from '@/flujo/screens/AprenderDetalle';
import { ConsejoDelDiaScreen } from '@/flujo/screens/ConsejoDelDia';
import { RetoScreen } from '@/quiz/screens/Reto';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navegacion() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Oraculo" component={OraculoScreen} />
      <Stack.Screen name="Tirada" component={TiradaScreen} />
      <Stack.Screen name="TiradaIching" component={TiradaIchingScreen} />
      <Stack.Screen name="TiradaBuzios" component={TiradaBuziosScreen} />
      <Stack.Screen name="Lectura" component={LecturaScreen} />
      <Stack.Screen name="Aprender" component={AprenderScreen} />
      <Stack.Screen name="AprenderDetalle" component={AprenderDetalleScreen} />
      <Stack.Screen name="ConsejoDelDia" component={ConsejoDelDiaScreen} />
      <Stack.Screen name="Reto" component={RetoScreen} />
      <Stack.Screen
        name="Ayuda"
        component={AyudaScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}
