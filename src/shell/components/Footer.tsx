import { Animated, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Path, Stop } from 'react-native-svg';
import { useT } from '@/i18n';
import { useCarrusel } from '../carrusel';
import { colores, espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';

export type SeccionFooter = 'consejo' | 'wiki' | 'quiz';

interface Props {
  onSelect: (seccion: SeccionFooter) => void;
  /** Desplazamiento del carrusel: tiñe la pill del footer con el acento del oraculo. */
  scrollX: Animated.Value;
  /** Paso entre domos (mismo valor que el carrusel y el fondo). */
  stride: number;
}

const ITEMS: { seccion: SeccionFooter; icono: keyof typeof Ionicons.glyphMap }[] = [
  { seccion: 'consejo', icono: 'bulb-outline' },
  { seccion: 'wiki', icono: 'book-outline' },
  { seccion: 'quiz', icono: 'school-outline' },
];

// Geometria de la consola: plataforma elevada en el centro.
const TECHO = 22; // y del borde superior de la plataforma
const HOMBRO = 66; // y del borde superior de las barras laterales
const TRANS = 40; // ancho de la curva que sube de la barra a la plataforma
const CUERPO = 28; // alto de la barra por debajo del hombro (antes del safe area)
const LADO = 0.05; // barra lateral plana visible a cada lado (fraccion del ancho)

function armarPaths(W: number, altoTotal: number) {
  const jorobaLeft = Math.round(W * LADO);
  const jorobaRight = Math.round(W * (1 - LADO));
  const plataformaLeft = jorobaLeft + TRANS;
  const plataformaRight = jorobaRight - TRANS;
  const cx = TRANS * 0.5;

  // Borde superior (abierto), para el trazo.
  const arriba =
    `M 0 ${HOMBRO} ` +
    `L ${jorobaLeft} ${HOMBRO} ` +
    `C ${jorobaLeft + cx} ${HOMBRO} ${plataformaLeft - cx} ${TECHO} ${plataformaLeft} ${TECHO} ` +
    `L ${plataformaRight} ${TECHO} ` +
    `C ${plataformaRight + cx} ${TECHO} ${jorobaRight - cx} ${HOMBRO} ${jorobaRight} ${HOMBRO} ` +
    `L ${W} ${HOMBRO}`;

  // Relleno: el borde superior + bajar a los bordes inferiores.
  const relleno = `${arriba} L ${W} ${altoTotal} L 0 ${altoTotal} Z`;

  return { arriba, relleno, plataformaLeft, plataformaRight };
}

/**
 * Footer de la pantalla de inicio: consola con plataforma central elevada, misma
 * chapa metalica semitransparente y borde con glow que el panel del nombre. El
 * borde va de cian (izquierda) a celeste (arriba) a dorado (derecha). Los 3
 * botones (Consejo/Wiki/Quiz) van apoyados sobre la plataforma.
 */
export function Footer({ onSelect, scrollX, stride }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();
  const { listaLoop } = useCarrusel();

  const altoTotal = HOMBRO + CUERPO + insets.bottom;
  const { arriba, relleno, plataformaLeft, plataformaRight } = armarPaths(width, altoTotal);

  return (
    <View style={{ height: altoTotal }}>
      {/* Chapa metalica (base, da la textura/degrade) */}
      <Svg width={width} height={altoTotal} style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <SvgLinearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#53627e" />
            <Stop offset="0.45" stopColor="#46536e" />
            <Stop offset="1" stopColor="#566989" />
          </SvgLinearGradient>
        </Defs>
        <Path d={relleno} fill="url(#metal)" fillOpacity={0.6} />
      </Svg>

      {/* Fondo del footer teñido con el acento del oraculo centrado (el borde
          celeste no se tiñe). Se cruzan por opacidad segun el scroll del carrusel. */}
      {listaLoop.map((oraculo, i) => {
        const opacidad = scrollX.interpolate({
          inputRange: [(i - 1) * stride, i * stride, (i + 1) * stride],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`${oraculo.id}-${i}`}
            style={[StyleSheet.absoluteFill, { opacity: opacidad }]}
            pointerEvents="none"
          >
            <Svg width={width} height={altoTotal}>
              <Path d={relleno} fill={oraculo.acento} fillOpacity={0.2} />
            </Svg>
          </Animated.View>
        );
      })}

      {/* Borde celeste (encima, no se tiñe) */}
      <Svg width={width} height={altoTotal} style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          {/* Borde: celeste (como el panel) que brilla casi blanco al centro. */}
          <SvgLinearGradient id="borde" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#AFD2FF" stopOpacity="0.75" />
            <Stop offset="0.44" stopColor="#AFD2FF" stopOpacity="0.85" />
            <Stop offset="0.5" stopColor="#EAF6FF" stopOpacity="1" />
            <Stop offset="0.56" stopColor="#AFD2FF" stopOpacity="0.85" />
            <Stop offset="1" stopColor="#AFD2FF" stopOpacity="0.75" />
          </SvgLinearGradient>
        </Defs>
        {/* Glow del borde (trazo ancho y tenue) */}
        <Path d={arriba} stroke="url(#borde)" strokeWidth={6} strokeOpacity={0.3} strokeLinecap="round" fill="none" />
        {/* Borde nitido con destello al centro */}
        <Path d={arriba} stroke="url(#borde)" strokeWidth={2} strokeLinecap="round" fill="none" />
      </Svg>

      {/* Botones, apoyados sobre la plataforma */}
      <View
        style={[
          estilos.botones,
          {
            left: plataformaLeft,
            width: plataformaRight - plataformaLeft,
            top: TECHO,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {ITEMS.map(({ seccion, icono }) => (
          <Pressable
            key={seccion}
            onPress={() => onSelect(seccion)}
            style={({ pressed }) => [estilos.item, pressed && estilos.itemPresionado]}
            accessibilityRole="button"
            accessibilityLabel={t(`footer.${seccion}`)}
          >
            <Ionicons name={icono} size={22} color={colores.texto} />
            <Text style={estilos.etiqueta}>{t(`footer.${seccion}`)}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  botones: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: espaciado.sm,
    paddingVertical: espaciado.xs,
    borderRadius: 12,
  },
  itemPresionado: {
    opacity: 0.6,
  },
  etiqueta: {
    color: colores.textoSuave,
    fontSize: 10,
    letterSpacing: 0.4,
    fontFamily: fuente('uiMedium'),
  },
});
