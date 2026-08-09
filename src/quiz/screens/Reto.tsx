import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { oraculoPorId } from '@/oraculos/registry';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';
import { hexAlfa } from '@/shell/color';
import { CartaImagen } from '@/flujo/components/CartaImagen';
import { CartaAmpliable } from '@/flujo/components/CartaAmpliable';
import { armarMazoQuiz, generarPregunta } from '../generador';
import type { Pregunta } from '../tipos';

type Props = NativeStackScreenProps<RootStackParamList, 'Reto'>;

/** Techo de la barra. La misma meta para todos los oraculos. */
const TOPE = 100;

/** Cuanto queda visible la devolucion antes de pasar a la siguiente. */
const PAUSA_MS = 900;

type Fase = 'inicio' | 'jugando' | 'fin';

/**
 * El Reto. Preguntas derivadas de la wiki del oraculo, sin contenido propio.
 *
 * Se juega a supervivencia: cada acierto suma, el primer error termina. Lo
 * unico que se guarda es la mejor racha, por oraculo.
 *
 * Pregunta sobre TODO el mazo, incluido lo que la wiki tiene bloqueado: quien
 * quiera llegar lejos va a querer ir a estudiar, que es justo la idea.
 */
export function RetoScreen({ navigation, route }: Props) {
  const { oraculoId } = route.params;
  const t = useT();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const idioma = useApp((s) => s.idioma);
  const mejorPuntaje = useApp((s) => s.mejorPuntaje);
  const registrarPuntaje = useApp((s) => s.registrarPuntaje);

  const oraculo = oraculoPorId(oraculoId);
  const acento = oraculo?.acento ?? colores.cromo;
  const nombre = oraculo ? t(oraculo.nombreKey) : oraculoId;

  const contenido = useMemo(() => oraculo?.contenido?.(idioma), [oraculo, idioma]);
  const mazo = useMemo(() => (contenido ? armarMazoQuiz(contenido) : []), [contenido]);

  const textos = useMemo(
    () => ({
      imagenANombre: t('quiz.pregImagen'),
      nombreAClave: t('quiz.pregClave'),
      claveANombre: t('quiz.pregNombre'),
    }),
    [t],
  );

  const [fase, setFase] = useState<Fase>('inicio');
  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  const [racha, setRacha] = useState(0);
  const [elegida, setElegida] = useState<number | null>(null);
  const [huboRecord, setHuboRecord] = useState(false);
  // Las piezas ya preguntadas en esta partida, para no repetir mientras quede
  // material. En un ref porque no se dibuja: cambiarlo no tiene que re-renderizar.
  const usadas = useRef<Set<string>>(new Set());

  const record = mejorPuntaje[oraculoId] ?? 0;

  const siguiente = useCallback(() => {
    const p = generarPregunta(mazo, textos, usadas.current);
    if (!p) {
      setFase('fin');
      return;
    }
    usadas.current.add(p.pieza.id);
    setPregunta(p);
    setElegida(null);
  }, [mazo, textos]);

  const empezar = () => {
    usadas.current = new Set();
    setRacha(0);
    setHuboRecord(false);
    setFase('jugando');
    const p = generarPregunta(mazo, textos, usadas.current);
    if (!p) {
      setFase('fin');
      return;
    }
    usadas.current.add(p.pieza.id);
    setPregunta(p);
    setElegida(null);
  };

  const responder = (indice: number) => {
    if (elegida !== null || !pregunta) return;
    setElegida(indice);

    const acerto = pregunta.opciones[indice].correcta;
    if (acerto) {
      const nueva = racha + 1;
      setRacha(nueva);
      // La devolucion queda un momento a la vista antes de la proxima.
      setTimeout(siguiente, PAUSA_MS);
      return;
    }

    // Primer error: se termina. Se guarda la marca si supera la anterior.
    setHuboRecord(registrarPuntaje(oraculoId, racha));
    setTimeout(() => setFase('fin'), PAUSA_MS);
  };

  // Chica a proposito: con las cuatro opciones debajo, una carta grande empuja
  // los botones fuera de pantalla. Quien quiera verla bien la toca y se abre a
  // pantalla completa.
  const anchoImagen = Math.min(width * 0.3, 140);
  const sinContenido = mazo.length < 4;

  return (
    <View style={estilos.contenedor}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.28), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={nombre} />

      <ScrollView
        contentContainerStyle={[estilos.scroll, { paddingBottom: insets.bottom + espaciado.xl }]}
        showsVerticalScrollIndicator={false}
      >
        <Barra actual={racha} record={record} acento={acento} />

        {sinContenido ? (
          <Text style={estilos.aviso}>{t('quiz.sinContenido')}</Text>
        ) : fase === 'jugando' && pregunta ? (
          <>
            <Text style={estilos.enunciado}>{pregunta.enunciado}</Text>

            {/* Imagen y nombre no se excluyen: cuando se pregunta por el
                significado van los dos, que es lo que mejor ensena. */}
            {pregunta.conImagen && (
              <View style={estilos.centro}>
                <CartaAmpliable pieza={pregunta.pieza} posicion="normal">
                  <CartaImagen
                    pieza={pregunta.pieza}
                    width={anchoImagen}
                    radio={8}
                    posicion="normal"
                  />
                </CartaAmpliable>
              </View>
            )}

            {pregunta.destacado && (
              <Text style={[estilos.destacado, { color: acento }]}>{pregunta.destacado}</Text>
            )}

            <View style={estilos.opciones}>
              {pregunta.opciones.map((opcion, i) => (
                <Pressable
                  key={i}
                  onPress={() => responder(i)}
                  disabled={elegida !== null}
                  style={[
                    estilos.opcion,
                    { borderColor: hexAlfa(acento, 0.35) },
                    elegida !== null && opcion.correcta && estilos.opcionBien,
                    elegida === i && !opcion.correcta && estilos.opcionMal,
                  ]}
                >
                  <Text style={estilos.opcionTexto}>{opcion.texto}</Text>
                </Pressable>
              ))}
            </View>
          </>
        ) : (
          <View style={estilos.centro}>
            {fase === 'fin' && (
              <>
                <Text style={estilos.granRacha}>{racha}</Text>
                <Text style={estilos.etiqueta}>{t('quiz.racha')}</Text>
                {huboRecord && (
                  <Text style={[estilos.record, { color: acento }]}>{t('quiz.nuevoRecord')}</Text>
                )}
              </>
            )}

            <Pressable
              onPress={empezar}
              style={({ pressed }) => [
                estilos.boton,
                { borderColor: hexAlfa(acento, 0.9) },
                pressed && { opacity: 0.85 },
              ]}
            >
              <Text style={estilos.botonTexto}>
                {fase === 'fin' ? t('quiz.jugarDeNuevo') : t('quiz.empezar')}
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

/**
 * Barra de progreso con el record en fantasma detras y la racha actual encima.
 * Ver la marca propia ahi adelante es lo que empuja a seguir una mas.
 */
function Barra({
  actual,
  record,
  acento,
}: {
  actual: number;
  record: number;
  acento: string;
}) {
  const t = useT();
  // El tipo literal es lo que espera el ancho de una View en React Native.
  const pct = (n: number): `${number}%` => `${Math.min(100, (n / TOPE) * 100)}%`;

  return (
    <View style={estilos.barraCaja}>
      <View style={estilos.barraFila}>
        <Text style={estilos.barraTexto}>
          {actual} / {TOPE}
        </Text>
        <Text style={estilos.barraTexto}>
          {t('quiz.record')}: {record}
        </Text>
      </View>

      <View style={estilos.barraFondo}>
        {/* Fantasma: hasta donde llego la mejor marca. */}
        <View
          style={[estilos.barraRecord, { width: pct(record), backgroundColor: hexAlfa(acento, 0.35) }]}
        />
        {/* Encima, la racha de esta partida. */}
        <View style={[estilos.barraActual, { width: pct(actual), backgroundColor: acento }]} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: espaciado.xxl,
    paddingTop: espaciado.lg,
    gap: espaciado.xl,
  },
  centro: { alignItems: 'center', gap: espaciado.md },

  barraCaja: { gap: espaciado.sm },
  barraFila: { flexDirection: 'row', justifyContent: 'space-between' },
  barraTexto: {
    color: colores.textoSuave,
    fontSize: 13,
    fontFamily: fuente('ui'),
  },
  barraFondo: {
    height: 10,
    borderRadius: radios.pill,
    backgroundColor: 'rgba(255,255,255,0.10)',
    overflow: 'hidden',
  },
  // Las dos se anclan a la izquierda y crecen a lo ancho; la actual se dibuja
  // despues, asi queda encima del fantasma.
  barraRecord: { position: 'absolute', left: 0, top: 0, bottom: 0 },
  barraActual: { position: 'absolute', left: 0, top: 0, bottom: 0 },

  enunciado: {
    color: colores.texto,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fuente('subtituloMedium'),
  },
  destacado: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fuente('subtituloMedium'),
  },
  opciones: { gap: espaciado.md },
  opcion: {
    borderWidth: 1,
    borderRadius: radios.md,
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingVertical: espaciado.lg,
    paddingHorizontal: espaciado.lg,
  },
  opcionBien: { backgroundColor: 'rgba(90,190,120,0.28)', borderColor: '#5ABE78' },
  opcionMal: { backgroundColor: 'rgba(210,90,90,0.28)', borderColor: '#D25A5A' },
  opcionTexto: {
    color: colores.texto,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },

  granRacha: {
    color: colores.texto,
    fontSize: 64,
    // Inter y no Cormorant: la tipografia de titulos usa cifras de estilo
    // antiguo, donde el 1 es un trazo corto que se lee como un I romano y el
    // resto de los numeros baila de altura. Para un numero grande y solo,
    // hacen falta cifras normales.
    fontFamily: fuente('uiSemiBold'),
  },
  etiqueta: {
    color: colores.textoSuave,
    fontSize: 14,
    fontFamily: fuente('ui'),
  },
  record: { fontSize: 16, fontFamily: fuente('uiSemiBold') },
  aviso: {
    color: colores.textoSuave,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },
  boton: {
    marginTop: espaciado.lg,
    borderWidth: 1.5,
    borderRadius: radios.pill,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.xxl,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  botonTexto: {
    color: colores.texto,
    fontSize: 16,
    fontFamily: fuente('uiSemiBold'),
  },
});
