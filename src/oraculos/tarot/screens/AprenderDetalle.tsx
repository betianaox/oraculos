import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { CartaImagen } from '@/flujo/components/CartaImagen';
import { CartaAmpliable } from '@/flujo/components/CartaAmpliable';
import { useVoz } from '@/flujo/useVoz';
import { CARTA_POR_ID } from '../content/cartas/meta';
import type { CartaId } from '../content/types';
import { nombreDeCarta } from '../lib/nombreCarta';
import { useCartasTarot } from '../useCartas';
import { useTextosTarot } from '../textos';

type Props = NativeStackScreenProps<RootStackParamList, 'AprenderDetalle'>;

export function AprenderDetalleScreen({ navigation, route }: Props) {
  const { oraculoId, cartaId } = route.params;
  const t = useT();
  const tt = useTextosTarot();
  const { width } = useWindowDimensions();
  const { nombres, wiki } = useCartasTarot();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;

  const meta = CARTA_POR_ID[cartaId as CartaId];
  const ficha = wiki[meta.id];
  const nombre = nombreDeCarta(meta, nombres, ficha?.nombre);
  const pieza = { id: meta.id, numero: meta.numero, imagen: meta.imagen };

  const textoFicha = ficha
    ? [
        nombre,
        `${tt.wiki.derecho}. ${ficha.significado.normal}`,
        `${tt.wiki.invertido}. ${ficha.significado.invertida}`,
        `${tt.wiki.simbolismo}. ${ficha.simbolismo}`,
      ].join('\n\n')
    : '';

  const anchoCarta = Math.min(width * 0.5, 160);

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={t(oraculo!.nombreKey)} />

      <ScrollView contentContainerStyle={estilos.scroll} showsVerticalScrollIndicator={false}>
        <View style={estilos.cabecera}>
          <CartaAmpliable pieza={pieza}>
            <CartaImagen pieza={pieza} width={anchoCarta} radio={10} />
          </CartaAmpliable>
          <Text style={estilos.nombre}>{nombre}</Text>
          {ficha ? <BotonEscuchar texto={textoFicha} acento={acento} /> : null}
        </View>

        <View style={estilos.datos}>
          <Dato etiqueta={tt.wiki.numero} valor={String(meta.numero)} />
          {meta.elemento && <Dato etiqueta={tt.wiki.elemento} valor={nombres.elementos[meta.elemento]} />}
          {meta.palo && <Dato etiqueta="Palo" valor={nombres.palos[meta.palo]} />}
        </View>

        {ficha ? (
          <>
            <Seccion titulo={tt.wiki.palabrasClave}>
              <View style={estilos.chips}>
                <Text style={estilos.chipEtiqueta}>{tt.wiki.derecho}:</Text>
                <Text style={estilos.chipTexto}>{ficha.palabrasClave.normal.join(' · ')}</Text>
              </View>
              <View style={estilos.chips}>
                <Text style={estilos.chipEtiqueta}>{tt.wiki.invertido}:</Text>
                <Text style={estilos.chipTexto}>{ficha.palabrasClave.invertida.join(' · ')}</Text>
              </View>
            </Seccion>
            <Seccion titulo={tt.wiki.derecho}>
              <Text style={estilos.parrafo}>{ficha.significado.normal}</Text>
            </Seccion>
            <Seccion titulo={tt.wiki.invertido}>
              <Text style={estilos.parrafo}>{ficha.significado.invertida}</Text>
            </Seccion>
            <Seccion titulo={tt.wiki.simbolismo}>
              <Text style={estilos.parrafo}>{ficha.simbolismo}</Text>
            </Seccion>
          </>
        ) : (
          <Text style={estilos.proximamente}>{tt.wiki.proximamente}</Text>
        )}
      </ScrollView>
    </View>
  );
}

function BotonEscuchar({ texto, acento }: { texto: string; acento: string }) {
  const { hablando, alternar } = useVoz(texto);
  const t = useT();
  return (
    <Pressable
      onPress={alternar}
      style={({ pressed }) => [
        estilos.escuchar,
        { borderColor: hexAlfa(acento, 0.6) },
        pressed && { opacity: 0.7 },
      ]}
    >
      <MaterialCommunityIcons
        name={hablando ? 'stop' : 'volume-high'}
        size={18}
        color={colores.texto}
      />
      <Text style={estilos.escucharTexto}>
        {hablando ? t('flujo.detener') : t('flujo.escuchar')}
      </Text>
    </Pressable>
  );
}

function Dato({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos.dato}>
      <Text style={estilos.datoEtiqueta}>{etiqueta}</Text>
      <Text style={estilos.datoValor}>{valor}</Text>
    </View>
  );
}

function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View style={estilos.seccion}>
      <Text style={estilos.seccionTitulo}>{titulo}</Text>
      {children}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  scroll: {
    paddingHorizontal: espaciado.lg,
    paddingTop: espaciado.sm,
    paddingBottom: espaciado.xxl,
  },
  cabecera: {
    alignItems: 'center',
    gap: espaciado.md,
  },
  escuchar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    paddingVertical: espaciado.sm,
    paddingHorizontal: espaciado.lg,
    borderRadius: radios.pill,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  escucharTexto: {
    color: colores.texto,
    fontSize: 14,
    fontFamily: fuente('uiMedium'),
  },
  nombre: {
    color: colores.texto,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: fuente('tituloBold'),
  },
  datos: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: espaciado.xl,
    marginTop: espaciado.xl,
  },
  dato: {
    alignItems: 'center',
  },
  datoEtiqueta: {
    color: '#e9c46a',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontFamily: fuente('uiMedium'),
  },
  datoValor: {
    color: colores.texto,
    fontSize: 16,
    marginTop: 2,
    fontFamily: fuente('uiSemiBold'),
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
    marginBottom: espaciado.sm,
    fontFamily: fuente('uiSemiBold'),
  },
  parrafo: {
    color: 'rgba(230,232,239,0.85)',
    fontSize: 15,
    lineHeight: 23,
    fontFamily: fuente('ui'),
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: espaciado.xs + 2,
    gap: espaciado.xs + 2,
  },
  chipEtiqueta: {
    color: 'rgba(230,232,239,0.55)',
    fontSize: 14,
    fontFamily: fuente('uiSemiBold'),
  },
  chipTexto: {
    color: 'rgba(230,232,239,0.85)',
    fontSize: 14,
    flexShrink: 1,
    fontFamily: fuente('ui'),
  },
  proximamente: {
    color: 'rgba(230,232,239,0.55)',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: espaciado.xxxl,
    fontFamily: fuente('ui'),
  },
});
