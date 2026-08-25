import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { useCarrusel } from '@/shell/carrusel';
import { Header } from '@/shell/components/Header';
import { Footer, type SeccionFooter } from '@/shell/components/Footer';
import { CarruselDomos } from '@/shell/components/CarruselDomos';
import { Fondo } from '@/shell/components/Fondo';
import { Bienvenida } from '@/shell/components/Bienvenida';
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
  const idioma = useApp((s) => s.idioma);
  const { listaLoop } = useCarrusel();

  /**
   * EL SALUDO DE LA PRIMERA VEZ vive aca y no en App.tsx: necesita `navigation`
   * para llevar a la Ayuda, y el inicio es la primera pantalla que se ve igual.
   *
   * `hidratado` es la condicion y no un default: mientras el store todavia no
   * leyo el disco, `saludoVisto` es false para todo el mundo, y sin esperar el
   * saludo aparecería un instante en cada arranque a quien ya lo cerro hace
   * meses.
   */
  const hidratado = useApp((s) => s.hidratado);
  const saludoVisto = useApp((s) => s.saludoVisto);
  const marcarSaludoVisto = useApp((s) => s.marcarSaludoVisto);

  /** Las dos salidas lo dan por visto: la que entra a la Ayuda y la que se va. */
  const cerrarSaludo = (irAAyuda: boolean) => {
    marcarSaludoVisto();
    if (irAAyuda) navigation.navigate('Ayuda');
  };

  // Al cambiar el idioma cambia la lista de oraculos (el I Ching solo esta en
  // espanol). El carrusel vuelve solo al primero; aca se acompaña ese reinicio
  // para que el footer no quede apuntando al oraculo que estaba antes.
  useEffect(() => {
    setActivo(0);
  }, [idioma]);

  const abrirSeccion = (seccion: SeccionFooter) => {
    const oraculo = listaLoop[activo];
    if (!oraculo) return;
    // Aprender y Consejo tienen pantalla propia si el oraculo tiene contenido.
    if (seccion === 'wiki' && oraculo.contenido) {
      navigation.navigate('Aprender', { oraculoId: oraculo.id });
      return;
    }
    if (seccion === 'consejo' && oraculo.contenido) {
      navigation.navigate('ConsejoDelDia', { oraculoId: oraculo.id });
      return;
    }
    // El Reto deriva sus preguntas de la wiki, asi que necesita `contenido`.
    if (seccion === 'quiz' && oraculo.contenido) {
      navigation.navigate('Reto', { oraculoId: oraculo.id });
      return;
    }
    navigation.navigate('Oraculo', { oraculoId: oraculo.id, seccion });
  };

  return (
    <View style={estilos.contenedor}>
      <Fondo scrollX={scrollX} stride={stride} />

      <Header accion="ayuda" onAccion={() => navigation.navigate('Ayuda')} titulo={t('app.nombre')} />

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

      {/* Ultimo del arbol, para que quede por encima del carrusel y del footer. */}
      <Bienvenida
        visible={hidratado && !saludoVisto}
        onAyuda={() => cerrarSaludo(true)}
        onCerrar={() => cerrarSaludo(false)}
      />
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
