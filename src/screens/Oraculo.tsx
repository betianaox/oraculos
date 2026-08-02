import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';
import { hexAlfa } from '@/shell/color';

type Props = NativeStackScreenProps<RootStackParamList, 'Oraculo'>;

/**
 * Destino de la Etapa 1: la pantalla de cada seccion de un oraculo todavia es un
 * placeholder. Solo confirma que la navegacion cae en el oraculo y la seccion
 * correctos, con el fondo tenido por el acento de ese oraculo. La logica real
 * (pregunta, tirada propia, wiki, quiz) llega en las etapas siguientes.
 */
export function OraculoScreen({ route, navigation }: Props) {
  const { oraculoId, seccion } = route.params;
  const t = useT();
  const oraculo = oraculoPorId(oraculoId);

  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombre} />

      <View style={estilos.centro}>
        <View style={[estilos.sello, { borderColor: hexAlfa(acento, 0.5) }]}>
          <Text style={estilos.seccion}>{t(`secciones.${seccion}`)}</Text>
        </View>
        <Text style={estilos.nota}>Etapa 1 · placeholder</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: espaciado.md,
  },
  sello: {
    paddingHorizontal: espaciado.xxl,
    paddingVertical: espaciado.lg,
    borderRadius: radios.lg,
    borderWidth: 1,
    backgroundColor: colores.superficie,
  },
  seccion: {
    color: colores.texto,
    fontSize: 22,
    letterSpacing: 1,
    fontFamily: fuente('subtituloMedium'),
  },
  nota: {
    color: colores.textoTenue,
    fontSize: 13,
    fontFamily: fuente('ui'),
  },
});
