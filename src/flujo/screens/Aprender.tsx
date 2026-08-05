import { useMemo, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import type { Pieza } from '@/flujo/pieza';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { claveWiki, useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { ModalRecompensa } from '@/shell/components/ModalRecompensa';
import { colores, espaciado } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { BannerVideo } from '../components/BannerVideo';
import { CartaImagen, RATIO_PIEZA } from '../components/CartaImagen';

type Props = NativeStackScreenProps<RootStackParamList, 'Aprender'>;

const COLUMNAS = 3;
const PADDING = 20;
const GAP = 12;
const PREVIEW = 2; // piezas visibles por seccion antes de desbloquear

/** Lo que se pide desbloquear: un bloque (seccionId) o la wiki entera (null). */
type Pedido = { seccionId: string | null; titulo: string };

/**
 * Aprender COMPARTIDO: la biblioteca de piezas del oraculo, por seccion. Muestra
 * las primeras PREVIEW de cada seccion; el resto queda dado vuelta (se ve el
 * dorso, del mismo tamaño que el frente) hasta que el usuario mira un video.
 *
 * Cada seccion tiene su propio banner debajo del titulo: en los oraculos de un
 * solo bloque (runas, buzios) destraba la wiki entera; en los de varios
 * bloques (I Ching, los mazos) destraba solo ese bloque.
 */
export function AprenderScreen({ navigation, route }: Props) {
  const { oraculoId } = route.params;
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const desbloqueos = useApp((s) => s.wikiDesbloqueada);
  const desbloquearWiki = useApp((s) => s.desbloquearWiki);
  const { width } = useWindowDimensions();
  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;
  const contenido = useMemo(() => oraculo?.contenido?.(idioma), [oraculo, idioma]);

  // Que se desbloquea al terminar el video: null = la wiki entera, o el id del
  // bloque que se toco (el banner y cualquier carta tapada de ese bloque piden
  // lo mismo: el bloque COMPLETO). Va tambien en un ref porque la recompensa
  // llega despues de cerrar el modal, cuando `pedido` ya volvio a null.
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const pedidoRef = useRef<Pedido | null>(null);

  const pedirVideo = (p: Pedido) => {
    pedidoRef.current = p;
    setPedido(p);
  };

  const anchoItem = Math.floor((width - PADDING * 2 - GAP * (COLUMNAS - 1)) / COLUMNAS);
  const secciones = contenido?.secciones ?? [];
  const porBloques = secciones.length > 1;
  // El flag "oraculo entero" solo aplica a los oraculos de un solo bloque: si
  // uno paso a tener bloques (I Ching), un desbloqueo viejo de "todo" no debe
  // seguir abriendo los bloques nuevos, cada uno se desbloquea por separado.
  const todaDesbloqueada = !porBloques && !!desbloqueos[oraculoId];

  const abierta = (seccionId: string) =>
    todaDesbloqueada || (porBloques && !!desbloqueos[claveWiki(oraculoId, seccionId)]);

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
        {contenido?.intro ? <Text style={estilos.intro}>{contenido.intro}</Text> : null}

        {secciones.map((seccion, i) => {
          const abierto = abierta(seccion.id);
          const bloqueado = !abierto && seccion.piezas.length > PREVIEW;
          // El nombre de la familia ("Arcanos menores") se escribe una sola vez,
          // arriba de la primera de sus series; las demas quedan de subtitulo.
          const abreGrupo = !!seccion.grupo && seccion.grupo !== secciones[i - 1]?.grupo;
          return (
            <View key={seccion.id} style={seccion.grupo && !abreGrupo ? estilos.serie : estilos.seccion}>
              {abreGrupo ? <Text style={estilos.seccionTitulo}>{seccion.grupo}</Text> : null}
              {/* Las series de una familia no llevan titulo propio: el rango ya
                  lo dice el banner que las desbloquea. */}
              {seccion.grupo ? null : <Text style={estilos.seccionTitulo}>{seccion.titulo}</Text>}

              {/* Cada bloque se destraba con su propio video, debajo del titulo. */}
              {bloqueado ? (
                <View style={estilos.bannerBloque}>
                  <BannerVideo
                    texto={
                      porBloques
                        ? `Mira un video para desbloquear ${seccion.titulo}`
                        : 'Mira un video para desbloquear'
                    }
                    onPress={() =>
                      pedirVideo({
                        seccionId: porBloques ? seccion.id : null,
                        titulo: porBloques ? seccion.titulo : nombre,
                      })
                    }
                  />
                </View>
              ) : null}

              <View style={estilos.grilla}>
                {seccion.piezas.map((pieza, idx) => {
                  const tapada = !abierto && idx >= PREVIEW;
                  return (
                    <Pressable
                      key={pieza.id}
                      style={[estilos.item, { width: anchoItem }]}
                      onPress={() =>
                        tapada
                          ? pedirVideo({
                              seccionId: porBloques ? seccion.id : null,
                              titulo: porBloques ? seccion.titulo : nombre,
                            })
                          : navigation.navigate('AprenderDetalle', { oraculoId, piezaId: pieza.id })
                      }
                    >
                      {tapada ? (
                        <CartaDorso
                          pieza={pieza}
                          width={anchoItem}
                          reverso={contenido?.reverso ?? 0}
                        />
                      ) : (
                        <CartaImagen pieza={pieza} width={anchoItem} radio={8} />
                      )}
                      <Text style={estilos.itemNombre} numberOfLines={2}>
                        {tapada ? '???' : contenido!.nombre(pieza)}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>

      <ModalRecompensa
        visible={!!pedido}
        onClose={() => setPedido(null)}
        titulo={pedido ? `Desbloquear ${pedido.titulo}` : 'Desbloquear'}
        recompensa="Ver el video"
        onReward={() => {
          const p = pedidoRef.current;
          if (!p) return;
          pedidoRef.current = null;
          // Desbloquea el BLOQUE entero (o toda la wiki si es de un solo bloque).
          desbloquearWiki(oraculoId, p.seccionId ?? undefined);
        }}
      />
    </View>
  );
}

/**
 * Pieza todavia no desbloqueada: la misma miniatura que de frente, pero dada
 * vuelta. Usa el dorso propio de la pieza (runas) o el del oraculo; si no hay
 * arte de dorso (I Ching, Buzios, que se dibujan) cae a una placa neutra.
 */
function CartaDorso({
  pieza,
  width,
  reverso,
}: {
  pieza: Pieza;
  width: number;
  reverso: number;
}) {
  const height = width * (pieza.ratio ?? RATIO_PIEZA);
  const dorso = pieza.dorso ?? reverso;
  const dimensiones = { width, height, borderRadius: 8 };

  if (dorso) {
    return <Image source={dorso} style={dimensiones} resizeMode="cover" />;
  }

  return (
    <View style={[estilos.placa, dimensiones]}>
      <MaterialCommunityIcons
        name="eye-outline"
        size={Math.round(width * 0.3)}
        color="rgba(233,196,106,0.55)"
      />
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
  intro: {
    color: 'rgba(230,232,239,0.6)',
    fontSize: 13,
    lineHeight: 19,
    fontStyle: 'italic',
    marginTop: espaciado.md,
    fontFamily: fuente('ui'),
  },
  bannerBloque: {
    marginBottom: espaciado.lg,
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
  // Serie dentro de una familia: va mas pegada a la anterior que un bloque nuevo.
  serie: {
    marginTop: espaciado.lg,
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
  placa: {
    backgroundColor: colores.superficie,
    borderWidth: 1.5,
    borderColor: 'rgba(175,210,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
