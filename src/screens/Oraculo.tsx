import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { PantallaPregunta, type DatosPregunta } from '@/shell/components/PantallaPregunta';
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
  const [enviado, setEnviado] = useState<DatosPregunta | null>(null);

  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const esPregunta = seccion === 'pregunta' && !!oraculo;

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombre} />

      <View style={estilos.cuerpo}>
        {esPregunta && oraculo ? (
          enviado ? (
            <View style={estilos.centro}>
              <View style={[estilos.sello, { borderColor: hexAlfa(acento, 0.5) }]}>
                <Text style={estilos.seccion}>{nombre}</Text>
              </View>
              <Text style={estilos.nota}>Próxima etapa: tirada propia del oráculo</Text>
              <Text style={estilos.dato}>"{enviado.pregunta}"</Text>
              <Text style={estilos.dato}>
                tema: {enviado.tema} · señal: {enviado.analisis.senal} · modo: {enviado.analisis.modo}
              </Text>
              <Text style={estilos.dato}>
                tono: {enviado.analisis.tono} · tiempo: {enviado.analisis.tiempo} · tercero:{' '}
                {enviado.analisis.mencionaTercero ? 'sí' : 'no'}
              </Text>
              <Pressable onPress={() => setEnviado(null)} style={estilos.reiniciar}>
                <Text style={estilos.reiniciarTexto}>Nueva pregunta</Text>
              </Pressable>
            </View>
          ) : (
            <PantallaPregunta
              oraculo={oraculo}
              onEnviar={(datos) => {
                // Si el oraculo tiene mazo, va al flujo de tirada+lectura.
                if (oraculo.mazo) {
                  navigation.navigate('Tirada', {
                    oraculoId,
                    pregunta: datos.pregunta,
                    tema: datos.tema,
                  });
                } else {
                  setEnviado(datos);
                }
              }}
            />
          )
        ) : (
          <View style={estilos.centro}>
            <View style={[estilos.sello, { borderColor: hexAlfa(acento, 0.5) }]}>
              <Text style={estilos.seccion}>{t(`secciones.${seccion}`)}</Text>
            </View>
            <Text style={estilos.nota}>Etapa 1 · placeholder</Text>
          </View>
        )}
      </View>
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
  nota: {
    color: colores.textoTenue,
    fontSize: 13,
    fontFamily: fuente('ui'),
  },
  dato: {
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },
  reiniciar: {
    marginTop: espaciado.lg,
    paddingHorizontal: espaciado.xl,
    paddingVertical: espaciado.md,
    borderRadius: radios.md,
    borderWidth: 1,
    borderColor: hexAlfa('#9ad8ff', 0.5),
  },
  reiniciarTexto: {
    color: colores.texto,
    fontSize: 15,
    fontFamily: fuente('uiMedium'),
  },
});
