import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { IDIOMAS } from '@/i18n/idiomas';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';

type Props = NativeStackScreenProps<RootStackParamList, 'Ajustes'>;

export function AjustesScreen({ navigation }: Props) {
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const setIdioma = useApp((s) => s.setIdioma);

  return (
    <View style={estilos.contenedor}>
      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={t('ajustes.titulo')} />

      <View style={estilos.cuerpo}>
        <Text style={estilos.rotulo}>{t('ajustes.idioma')}</Text>

        <View style={estilos.grupo}>
          {IDIOMAS.map((item, i) => {
            const seleccionado = item.codigo === idioma;
            return (
              <Pressable
                key={item.codigo}
                onPress={() => setIdioma(item.codigo)}
                style={({ pressed }) => [
                  estilos.fila,
                  i > 0 && estilos.filaBorde,
                  pressed && estilos.filaPresionada,
                ]}
              >
                <Text style={estilos.idiomaTexto}>{item.etiqueta}</Text>
                {seleccionado && (
                  <Ionicons name="checkmark" size={20} color={colores.gema} />
                )}
              </Pressable>
            );
          })}
        </View>
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
    paddingHorizontal: espaciado.lg,
    paddingTop: espaciado.lg,
    gap: espaciado.md,
  },
  rotulo: {
    color: colores.textoSuave,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: fuente('uiMedium'),
  },
  grupo: {
    borderRadius: radios.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colores.borde,
    backgroundColor: colores.superficie,
    overflow: 'hidden',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: espaciado.lg,
    paddingVertical: espaciado.lg,
  },
  filaBorde: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colores.bordeSuave,
  },
  filaPresionada: {
    backgroundColor: colores.superficieAlta,
  },
  idiomaTexto: {
    color: colores.texto,
    fontSize: 16,
    fontFamily: fuente('ui'),
  },
});
