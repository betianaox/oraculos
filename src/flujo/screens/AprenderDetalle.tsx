import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { CartaImagen, RATIO_PIEZA } from '../components/CartaImagen';
import { CartaAmpliable } from '../components/CartaAmpliable';
import { useVoz } from '../voz';
import type { Bloque, Chip } from '../contenido';

type Props = NativeStackScreenProps<RootStackParamList, 'AprenderDetalle'>;

export function AprenderDetalleScreen({ navigation, route }: Props) {
  const { oraculoId, piezaId } = route.params;
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombreOraculo = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const contenido = useMemo(() => oraculo?.contenido?.(idioma), [oraculo, idioma]);
  const pieza = oraculo?.mazo?.find((p) => p.id === piezaId);

  const nombre = pieza && contenido ? contenido.nombre(pieza) : '';
  const ficha = pieza && contenido?.ficha ? contenido.ficha(pieza) : null;
  const anchoCarta = Math.min(width * 0.5, 160);

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombreOraculo} />

      {pieza ? (
        <ScrollView contentContainerStyle={estilos.scroll} showsVerticalScrollIndicator={false}>
          <View style={estilos.cabecera}>
            <CartaAmpliable pieza={pieza}>
              <CartaImagen pieza={pieza} width={anchoCarta} radio={10} />
            </CartaAmpliable>
            <Text style={estilos.nombre}>{nombre}</Text>
            {ficha && ficha.voz ? <BotonEscuchar texto={ficha.voz} acento={acento} /> : null}
          </View>

          {ficha ? (
            <>
              {ficha.datos.length > 0 && (
                <View style={estilos.datos}>
                  {ficha.datos.map((d, i) => (
                    <View key={i} style={estilos.dato}>
                      <Text style={estilos.datoEtiqueta}>{d.etiqueta}</Text>
                      <Text style={estilos.datoValor}>{d.valor}</Text>
                    </View>
                  ))}
                </View>
              )}

              {ficha.bloques.length > 0
                ? ficha.bloques.map((bloque, i) => <BloqueFicha key={i} bloque={bloque} />)
                : <Text style={estilos.proximamente}>{contenido?.proximamente}</Text>}
            </>
          ) : (
            <Text style={estilos.proximamente}>{contenido?.proximamente}</Text>
          )}
        </ScrollView>
      ) : null}
    </View>
  );
}

function BloqueFicha({ bloque }: { bloque: Bloque }) {
  return (
    <View style={estilos.seccion}>
      <Text style={estilos.seccionTitulo}>{bloque.titulo}</Text>
      {bloque.texto ? <Text style={estilos.parrafo}>{bloque.texto}</Text> : null}
      {bloque.chips?.map((chip: Chip, i) => (
        <View key={i} style={estilos.chips}>
          <Text style={estilos.chipEtiqueta}>{chip.etiqueta}:</Text>
          <Text style={estilos.chipTexto}>{chip.valor}</Text>
        </View>
      ))}
    </View>
  );
}

function BotonEscuchar({ texto, acento }: { texto: string; acento: string }) {
  const hablando = useVoz((s) => s.hablando);
  const hablar = useVoz((s) => s.hablar);
  const parar = useVoz((s) => s.parar);
  const idioma = useApp((s) => s.idioma);
  const t = useT();
  return (
    <Pressable
      onPress={() => (hablando ? parar() : hablar(texto, idioma, ['AprenderDetalle']))}
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
  nombre: {
    color: colores.texto,
    fontSize: 26,
    textAlign: 'center',
    fontFamily: fuente('tituloBold'),
  },
  escuchar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    paddingVertical: espaciado.sm,
    paddingHorizontal: espaciado.xl,
    borderRadius: radios.pill,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  escucharTexto: {
    color: colores.texto,
    fontSize: 14,
    fontFamily: fuente('uiMedium'),
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
