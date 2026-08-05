import { useRef, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { ORACULOS } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { Footer, type SeccionFooter } from '@/shell/components/Footer';
import { CarruselDomos } from '@/shell/components/CarruselDomos';
import { Fondo } from '@/shell/components/Fondo';
import { calcularLayout } from '@/shell/layout';
import { colores } from '@/shell/theme/tokens';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;

/**
 * Pantalla de inicio: el quiosco. Header fijo arriba, carrusel de domos al
 * centro (desliza y cambia el fondo), footer abajo. El domo lleva a la pregunta
 * del oraculo; el footer actua sobre el oraculo centrado.
 */
export function InicioScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const { stride } = calcularLayout(width);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activo, setActivo] = useState(0);
  const t = useT();

  const abrirSeccion = (seccion: SeccionFooter) => {
    const oraculo = ORACULOS[activo];
    // Aprender y Consejo tienen pantalla propia si el oraculo tiene contenido.
    if (seccion === 'wiki' && oraculo.contenido) {
      navigation.navigate('Aprender', { oraculoId: oraculo.id });
      return;
    }
    if (seccion === 'consejo' && oraculo.contenido) {
      navigation.navigate('ConsejoDelDia', { oraculoId: oraculo.id });
      return;
    }
    navigation.navigate('Oraculo', { oraculoId: oraculo.id, seccion });
  };

  return (
    <View style={estilos.contenedor}>
      <Fondo scrollX={scrollX} stride={stride} />

      <Header accion="config" onAccion={() => navigation.navigate('Ajustes')} titulo={t('app.nombre')} />

      <View style={estilos.centro}>
        <CarruselDomos
          scrollX={scrollX}
          onSelect={(oraculo) =>
            navigation.navigate('Oraculo', { oraculoId: oraculo.id, seccion: 'pregunta' })
          }
          onIndexChange={setActivo}
        />
      </View>

      <Footer onSelect={abrirSeccion} scrollX={scrollX} stride={stride} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
  },
});
