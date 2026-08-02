import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { colores, espaciado } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { CartaImagen } from '@/flujo/components/CartaImagen';
import { CARTAS } from '../content/cartas/meta';
import type { CartaMeta, Palo } from '../content/types';
import { nombreDeCarta } from '../lib/nombreCarta';
import { useCartasTarot } from '../useCartas';
import { useTextosTarot } from '../textos';

type Props = NativeStackScreenProps<RootStackParamList, 'Aprender'>;

const COLUMNAS = 3;
const PADDING = 20;
const GAP = 12;
const PALOS: Palo[] = ['bastos', 'copas', 'espadas', 'oros'];

/**
 * Aprender (ex-Wiki) de Tarot: las 78 cartas por seccion (Mayores + 4 palos).
 * Tocar una carta abre su detalle. (El candado por video llega con AdMob.)
 */
export function AprenderScreen({ navigation, route }: Props) {
  const { oraculoId } = route.params;
  const t = useT();
  const tt = useTextosTarot();
  const { width } = useWindowDimensions();
  const { nombres, wiki } = useCartasTarot();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const anchoItem = Math.floor((width - PADDING * 2 - GAP * (COLUMNAS - 1)) / COLUMNAS);

  const mayores = CARTAS.filter((c) => c.arcano === 'mayor');
  const secciones: { id: string; titulo: string; cartas: CartaMeta[] }[] = [
    { id: 'mayores', titulo: tt.wiki.arcanosMayores, cartas: mayores },
    ...PALOS.map((palo) => ({
      id: palo,
      titulo: nombres.palos[palo],
      cartas: CARTAS.filter((c) => c.palo === palo),
    })),
  ];

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
        {secciones.map((seccion) => (
          <View key={seccion.id} style={estilos.seccion}>
            <Text style={estilos.seccionTitulo}>{seccion.titulo}</Text>
            <View style={estilos.grilla}>
              {seccion.cartas.map((meta) => {
                const nom = nombreDeCarta(meta, nombres, wiki[meta.id]?.nombre);
                return (
                  <Pressable
                    key={meta.id}
                    style={[estilos.item, { width: anchoItem }]}
                    onPress={() =>
                      navigation.navigate('AprenderDetalle', { oraculoId, cartaId: meta.id })
                    }
                  >
                    <CartaImagen
                      pieza={{ id: meta.id, numero: meta.numero, imagen: meta.imagen }}
                      width={anchoItem}
                      radio={8}
                    />
                    <Text style={estilos.itemNombre} numberOfLines={2}>
                      {nom}
                    </Text>
                  </Pressable>
                );
              })}
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
