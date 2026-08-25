import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { BotonVoz } from '../components/BotonVoz';
import { useCompartirLectura } from '../components/useCompartirLectura';
import { caidaActual } from '../caida';
import { SelectorFlujo } from '../components/SelectorFlujo';
import { RUTAS_LECTURA } from '../voz';
import { usePedirReview } from '@/shell/usePedirReview';

type Props = NativeStackScreenProps<RootStackParamList, 'Lectura'>;

/**
 * Lectura COMPARTIDA: pregunta arriba + bloque de texto con scroll. Por ahora el
 * texto es el demo generico; cada motor de oraculo lo reemplazara por su lectura
 * real armada a partir de la tirada y el analisis de la pregunta.
 */
export function LecturaScreen({ navigation, route }: Props) {
  const { oraculoId, pregunta, parrafos } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const pedirReview = usePedirReview();

  // Sin caida no hay nada que mostrar en la tarjeta mas que texto, y una foto
  // de texto no la comparte nadie. Pasa si Android mato la app en segundo plano
  // y restauro esta pantalla: ver `caida.ts`.
  const sePuedeCompartir = caidaActual(oraculoId, pregunta) !== null;
  const compartir = useCompartirLectura({ oraculo, pregunta, parrafos });

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header
        accion="cerrar"
        onAccion={() => {
          navigation.popTo('Oraculo', { oraculoId, seccion: 'pregunta' });
          // AL SALIR, no al entrar: la persona ya leyo lo que vino a leer.
          // Si toca el hito, aca no pisa nada (ver `usePedirReview`).
          void pedirReview();
        }}
        titulo={nombre}
      />

      <View style={[estilos.cuerpo, { paddingBottom: insets.bottom + espaciado.lg }]}>
        <Text style={estilos.pregunta} numberOfLines={3}>
          {pregunta}
        </Text>

        <View style={estilos.bloque}>
          <ScrollView
            contentContainerStyle={estilos.bloqueScroll}
            showsVerticalScrollIndicator
            persistentScrollbar
            indicatorStyle="white"
          >
            {parrafos.map((parrafo, i) => (
              <Text key={i} style={estilos.textoLectura}>
                {parrafo}
              </Text>
            ))}
          </ScrollView>
          <LinearGradient
            colors={['rgba(14,15,20,0)', 'rgba(14,15,20,0.6)']}
            style={estilos.degradeInferior}
            pointerEvents="none"
          />
        </View>

        <View style={estilos.pie}>
          <SelectorFlujo
            actual="lectura"
            onTirada={() => navigation.goBack()}
            onLectura={() => {}}
          />
          <BotonVoz texto={parrafos.join('\n\n')} rutas={RUTAS_LECTURA} />
          {sePuedeCompartir && compartir.boton}
        </View>
      </View>

      {sePuedeCompartir && compartir.tarjeta}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  cuerpo: {
    flex: 1,
    gap: espaciado.xl,
    paddingHorizontal: espaciado.lg,
    paddingTop: espaciado.md,
  },
  pregunta: {
    color: colores.texto,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: fuente('subtituloMedium'),
  },
  bloque: {
    flex: 1,
    borderWidth: 1,
    borderColor: hexAlfa('#AFD2FF', 0.35),
    borderRadius: radios.lg,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  bloqueScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: espaciado.xl,
    padding: espaciado.lg,
  },
  degradeInferior: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 28,
    borderBottomLeftRadius: radios.lg,
    borderBottomRightRadius: radios.lg,
  },
  textoLectura: {
    color: colores.texto,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
});
