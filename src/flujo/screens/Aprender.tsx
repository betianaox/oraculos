import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { CartaImagen } from '../components/CartaImagen';

type Props = NativeStackScreenProps<RootStackParamList, 'Aprender'>;

const COLUMNAS = 3;
const PADDING = 20;
const GAP = 12;

/**
 * Aprender COMPARTIDO: la biblioteca de piezas del oraculo, por seccion. La
 * arma cada oraculo (contenido); esta pantalla solo la renderiza.
 */
export function AprenderScreen({ navigation, route }: Props) {
  const { oraculoId } = route.params;
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const contenido = useMemo(() => oraculo?.contenido?.(idioma), [oraculo, idioma]);

  const anchoItem = Math.floor((width - PADDING * 2 - GAP * (COLUMNAS - 1)) / COLUMNAS);

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombre} />

      <ScrollView contentContainerStyle={estilos.scroll} showsVerticalScrollIndicator={false}>
        {contenido?.secciones.map((seccion) => (
          <View key={seccion.id} style={estilos.seccion}>
            <Text style={estilos.seccionTitulo}>{seccion.titulo}</Text>
            <View style={estilos.grilla}>
              {seccion.piezas.map((pieza) => (
                <Pressable
                  key={pieza.id}
                  style={[estilos.item, { width: anchoItem }]}
                  onPress={() =>
                    navigation.navigate('AprenderDetalle', { oraculoId, piezaId: pieza.id })
                  }
                >
                  <CartaImagen pieza={pieza} width={anchoItem} radio={8} />
                  <Text style={estilos.itemNombre} numberOfLines={2}>
                    {contenido.nombre(pieza)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  scroll: {
    paddingHorizontal: PADDING,
    paddingTop: espaciado.sm,
    paddingBottom: espaciado.xxl,
  },
  seccion: {
    marginTop: espaciado.xl,
  },
  seccionTitulo: {
    color: '#e9c46a',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: espaciado.md,
    fontFamily: fuente('uiSemiBold'),
  },
  grilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GAP,
  },
  item: {
    marginBottom: espaciado.xs,
  },
  itemNombre: {
    color: 'rgba(230,232,239,0.9)',
    fontSize: 13,
    textAlign: 'center',
    marginTop: espaciado.xs + 2,
    fontFamily: fuente('ui'),
  },
});
