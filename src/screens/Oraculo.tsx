import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { PantallaPregunta, type DatosPregunta } from '@/shell/components/PantallaPregunta';
import { ModalRecompensa } from '@/shell/components/ModalRecompensa';
import { useApp } from '@/store/useApp';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';
import { hexAlfa } from '@/shell/color';

type Props = NativeStackScreenProps<RootStackParamList, 'Oraculo'>;

/**
 * Pantalla de un oraculo. La seccion `pregunta` usa el componente COMPARTIDO
 * PantallaPregunta; al consultar, por ahora se muestra el analisis (para
 * verificar la deteccion) donde despues enganchara la tirada propia del oraculo.
 * Las otras secciones (consejo/wiki/quiz/tirada) siguen como placeholder.
 */
export function OraculoScreen({ route, navigation }: Props) {
  const { oraculoId, seccion } = route.params;
  const t = useT();
  const oraculo = oraculoPorId(oraculoId);

  const gemas = useApp((s) => s.gemas);
  const sumarGemas = useApp((s) => s.sumarGemas);
  const [mostrarVideo, setMostrarVideo] = useState(false);
  const [pendiente, setPendiente] = useState<DatosPregunta | null>(null);

  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const esPregunta = seccion === 'pregunta' && !!oraculo;

  // Lleva a la tirada del oraculo (compartida o propia). La gema se descuenta en
  // la propia pantalla de tirada.
  const irATirada = (datos: DatosPregunta) => {
    if (oraculo?.mazo && !oraculo.tiradaPropia) {
      navigation.navigate('Tirada', { oraculoId, pregunta: datos.pregunta, tema: datos.tema, analisis: datos.analisis });
    } else if (oraculo?.id === 'iching') {
      navigation.navigate('TiradaIching', { oraculoId, pregunta: datos.pregunta, tema: datos.tema, analisis: datos.analisis });
    } else if (oraculo?.id === 'buzios') {
      navigation.navigate('TiradaBuzios', { oraculoId, pregunta: datos.pregunta, tema: datos.tema, analisis: datos.analisis });
    }
    // No hay rama final: los seis oraculos tienen mazo o tirada propia. Antes
    // habia una pantalla de volcado con el analisis de la pregunta, que era
    // andamiaje de desarrollo y ya no se alcanzaba nunca.
  };

  // Al consultar: si hay al menos una gema, va a la tirada; si no, se ofrece el
  // video para sumar una y despues seguir.
  const consultar = (datos: DatosPregunta) => {
    if (gemas >= 1) {
      irATirada(datos);
    } else {
      setPendiente(datos);
      setMostrarVideo(true);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.popToTop()} titulo={nombre} />

      <View style={estilos.cuerpo}>
        {esPregunta && oraculo ? (
          <PantallaPregunta oraculo={oraculo} onEnviar={consultar} />
        ) : (
          // Red por si se llega con una seccion que no es la pregunta. Hoy no
          // pasa —el footer manda cada seccion a su pantalla propia— pero deja
          // algo con sentido en vez de una pantalla en blanco.
          <View style={estilos.centro}>
            <View style={[estilos.sello, { borderColor: hexAlfa(acento, 0.5) }]}>
              <Text style={estilos.seccion}>{t(`secciones.${seccion}`)}</Text>
            </View>
          </View>
        )}
      </View>

      <ModalRecompensa
        visible={mostrarVideo}
        onClose={() => setMostrarVideo(false)}
        titulo={t('pregunta.sinGemasTitulo')}
        recompensa={t('pregunta.verVideo')}
        onReward={() => {
          sumarGemas(1);
          const datos = pendiente;
          setPendiente(null);
          if (datos) irATirada(datos);
        }}
      />
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
  },
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: espaciado.md,
    paddingHorizontal: espaciado.xl,
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
});
