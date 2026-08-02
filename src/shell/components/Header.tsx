import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Path, Stop } from 'react-native-svg';
import { ContadorGemas } from './ContadorGemas';
import { colores, espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';

type AccionHeader = 'config' | 'cerrar';

interface Props {
  /** Que muestra el boton de la derecha: engranaje (inicio) o X (oraculo). */
  accion: AccionHeader;
  onAccion: () => void;
  /** Titulo centrado opcional (se muestra en Cinzel). */
  titulo?: string;
}

// El header es el footer espejado: barras laterales pegadas al borde de arriba
// y una plataforma central que baja, con el titulo adentro.
const LADO = 0.05; // barra lateral plana a cada lado (fraccion del ancho)
const TRANS = 40; // ancho de la curva que baja de la barra a la plataforma

function armarPaths(W: number, borde: number, fondo: number) {
  const jorobaLeft = Math.round(W * LADO);
  const jorobaRight = Math.round(W * (1 - LADO));
  const plataformaLeft = jorobaLeft + TRANS;
  const plataformaRight = jorobaRight - TRANS;
  const cx = TRANS * 0.5;

  // Borde inferior (abierto), para el trazo: baja al centro y vuelve a subir.
  const abajo =
    `M 0 ${borde} ` +
    `L ${jorobaLeft} ${borde} ` +
    `C ${jorobaLeft + cx} ${borde} ${plataformaLeft - cx} ${fondo} ${plataformaLeft} ${fondo} ` +
    `L ${plataformaRight} ${fondo} ` +
    `C ${plataformaRight + cx} ${fondo} ${jorobaRight - cx} ${borde} ${jorobaRight} ${borde} ` +
    `L ${W} ${borde}`;

  // Relleno: el borde inferior + subir a las esquinas de arriba.
  const relleno = `${abajo} L ${W} 0 L 0 0 Z`;

  return { abajo, relleno };
}

/**
 * Header comun a toda la app: gemas a la izquierda, accion a la derecha
 * (engranaje en inicio, X en un oraculo) y el titulo centrado en la plataforma.
 * Es el footer espejado (plataforma que baja), con la misma chapa metalica
 * semitransparente y borde con glow cian -> celeste -> dorado.
 */
export function Header({ accion, onAccion, titulo }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const borde = insets.top + 38; // borde inferior de las barras laterales
  const fondo = insets.top + 58; // borde inferior de la plataforma central
  const altoTotal = fondo + 6;

  const { abajo, relleno } = armarPaths(width, borde, fondo);

  return (
    <View style={{ height: altoTotal }}>
      <Svg width={width} height={altoTotal} style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <SvgLinearGradient id="metalH" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#566989" />
            <Stop offset="0.55" stopColor="#46536e" />
            <Stop offset="1" stopColor="#53627e" />
          </SvgLinearGradient>
          {/* Borde: celeste (como el panel) que brilla casi blanco al centro. */}
          <SvgLinearGradient id="bordeH" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#AFD2FF" stopOpacity="0.75" />
            <Stop offset="0.44" stopColor="#AFD2FF" stopOpacity="0.85" />
            <Stop offset="0.5" stopColor="#EAF6FF" stopOpacity="1" />
            <Stop offset="0.56" stopColor="#AFD2FF" stopOpacity="0.85" />
            <Stop offset="1" stopColor="#AFD2FF" stopOpacity="0.75" />
          </SvgLinearGradient>
        </Defs>

        <Path d={relleno} fill="url(#metalH)" fillOpacity={0.6} />
        <Path d={abajo} stroke="url(#bordeH)" strokeWidth={6} strokeOpacity={0.25} strokeLinecap="round" fill="none" />
        <Path d={abajo} stroke="url(#bordeH)" strokeWidth={2} strokeLinecap="round" fill="none" />
      </Svg>

      {/* Iconos: gemas a la izquierda, accion a la derecha */}
      <View style={[estilos.iconos, { top: insets.top + 6 }]}>
        <ContadorGemas />
        <Pressable
          onPress={onAccion}
          hitSlop={10}
          style={({ pressed }) => [estilos.boton, pressed && estilos.botonPresionado]}
          accessibilityRole="button"
          accessibilityLabel={accion === 'config' ? 'Ajustes' : 'Cerrar'}
        >
          <Ionicons name={accion === 'config' ? 'settings-outline' : 'close'} size={22} color={colores.texto} />
        </Pressable>
      </View>

      {/* Titulo: misma banda y centro vertical que los iconos */}
      {titulo ? (
        <View style={[estilos.tituloCaja, { top: insets.top + 6 }]} pointerEvents="none">
          <Text style={estilos.titulo} numberOfLines={1}>
            {titulo}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const LADO_BOTON = 44;
const FILA_ALTO = 34;

const estilos = StyleSheet.create({
  iconos: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: FILA_ALTO,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
  },
  tituloCaja: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: FILA_ALTO,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: '#9ad8ff',
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: fuente('tituloBold'),
    textShadowColor: 'rgba(90,200,255,0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  boton: {
    width: LADO_BOTON,
    height: LADO_BOTON,
    borderRadius: LADO_BOTON / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPresionado: {
    backgroundColor: colores.superficie,
  },
});
