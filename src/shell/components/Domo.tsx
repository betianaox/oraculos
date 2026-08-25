import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { OraculoModulo } from '@/oraculos/tipos';
import { useT } from '@/i18n';
import { espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';
import { hexAlfa } from '../color';
import { PanelNombre } from './PanelNombre';

interface Props {
  oraculo: OraculoModulo;
  index: number;
  scrollX: Animated.Value;
  stride: number;
  itemWidth: number;
  spacing: number;
  onPress: () => void;
  // Solo el domo centrado anima sus particulas (los demas ni las montan, para
  // no correr decenas de animaciones a la vez y trabar el scroll).
  activo?: boolean;
}

/**
 * Un domo del carrusel: nombre (Cinzel) arriba, el "domo" enmarcado (imagen o
 * placeholder) y el subtitulo (Cormorant) abajo. Crece y se enfoca cuando queda
 * centrado; se achica y atenua cuando esta al costado.
 */
export function Domo({ oraculo, index, scrollX, stride, itemWidth, spacing, onPress, activo = false }: Props) {
  const t = useT();

  const rango = [(index - 1) * stride, index * stride, (index + 1) * stride];
  const escala = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0.7, 1, 0.7],
    extrapolate: 'clamp',
  });
  const opacidad = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0.55, 1, 0.55],
    extrapolate: 'clamp',
  });

  // Foco: 1 cuando el domo esta centrado. Las particulas solo se ven en el activo.
  const foco = scrollX.interpolate({
    inputRange: rango,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        width: itemWidth,
        marginHorizontal: spacing / 2,
        opacity: opacidad,
        transform: [{ scale: escala }],
      }}
    >
      {/* Nombre del oraculo */}
      <PanelNombre nombre={t(oraculo.nombreKey)} />

      {/* Domo enmarcado */}
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [estilos.marco, pressed && estilos.marcoPress]}
        accessibilityRole="button"
        accessibilityLabel={t(oraculo.nombreKey)}
      >
        {({ pressed }) => (
          <>
            {/* Iluminacion sutil del color del oraculo al presionar */}
            {pressed && (
              <>
                <View style={[estilos.glow, { backgroundColor: hexAlfa(oraculo.acento, 0.2) }]} />
                <View style={[estilos.glowCentro, { backgroundColor: hexAlfa(oraculo.acento, 0.3) }]} />
              </>
            )}
            {oraculo.domo ? (
              <Image source={oraculo.domo} style={estilos.imagen} resizeMode="contain" />
            ) : (
              <View style={[estilos.placeholder, { backgroundColor: hexAlfa(oraculo.acento, 0.14) }]}>
                <View style={[estilos.placeholderAnillo, { borderColor: hexAlfa(oraculo.acento, 0.5) }]} />
              </View>
            )}

            {/* Particulas magicas que suben (solo en el domo centrado) */}
            {oraculo.domo && activo && <ParticulasDomo size={itemWidth} foco={foco} />}
          </>
        )}
      </Pressable>

      {/* Subtitulo */}
      <Text style={estilos.subtitulo} numberOfLines={2}>
        {t(`oraculos.${oraculo.id}.subtitulo`)}
      </Text>
    </Animated.View>
  );
}

const CANT_PART = 10; // particulas que suben en el domo activo

/**
 * Puntitos de luz que ascienden y se desvanecen dentro del domo, en loop. Cada
 * uno arranca con un desfase al azar para que no vayan sincronizados. La capa
 * entera se atenua con `foco`, asi solo se ven en el domo centrado.
 */
function ParticulasDomo({
  size,
  foco,
}: {
  size: number;
  foco: Animated.AnimatedInterpolation<number>;
}) {
  const particulas = useRef(
    Array.from({ length: CANT_PART }, () => ({
      val: new Animated.Value(0),
      leftPct: 12 + Math.random() * 76, // posicion horizontal dentro de la caja
      dim: 2 + Math.random() * 2.2, // tamaño del punto (mas chico)
      dur: 2200 + Math.random() * 1800, // duracion de la subida (mas rapida)
      delay: Math.random() * 2600, // desfase inicial
      drift: (Math.random() * 2 - 1) * 14, // leve deriva horizontal
    }))
  ).current;

  useEffect(() => {
    const anims = particulas.map((p) =>
      Animated.sequence([
        Animated.delay(p.delay),
        Animated.loop(
          Animated.timing(p.val, {
            toValue: 1,
            duration: p.dur,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ),
      ])
    );
    anims.forEach((a) => a.start());
    return () => anims.forEach((a) => a.stop());
  }, [particulas]);

  // Arrancan un poco por debajo del centro (por encima de la base del domo) y
  // suben hasta bien arriba.
  const startY = size * 0.16;
  const endY = -size * 0.5;

  return (
    <Animated.View style={[estilos.particulasWrap, { opacity: foco }]} pointerEvents="none">
      {particulas.map((p, i) => (
        <Animated.View
          key={i}
          style={{
            position: 'absolute',
            left: `${p.leftPct}%`,
            top: '50%',
            width: p.dim,
            height: p.dim,
            borderRadius: p.dim / 2,
            backgroundColor: 'rgba(255,255,255,0.9)',
            opacity: p.val.interpolate({
              inputRange: [0, 0.15, 0.7, 1],
              outputRange: [0, 1, 1, 0],
            }),
            transform: [
              { translateX: p.val.interpolate({ inputRange: [0, 1], outputRange: [0, p.drift] }) },
              { translateY: p.val.interpolate({ inputRange: [0, 1], outputRange: [startY, endY] }) },
            ],
          }}
        />
      ))}
    </Animated.View>
  );
}

const estilos = StyleSheet.create({
  particulasWrap: {
    position: 'absolute',
    top: '8%',
    left: '15%',
    right: '15%',
    bottom: '30%', // deja afuera la base del domo (las particulas no nacen ahi)
    borderRadius: 20,
    overflow: 'hidden',
  },
  marco: {
    aspectRatio: 1,
    backgroundColor: 'transparent',
  },
  marcoPress: {
    transform: [{ scale: 1.02 }],
  },
  glow: {
    position: 'absolute',
    top: '12%',
    left: '12%',
    right: '12%',
    bottom: '12%',
    borderRadius: 999,
  },
  glowCentro: {
    position: 'absolute',
    top: '28%',
    left: '28%',
    right: '28%',
    bottom: '28%',
    borderRadius: 999,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderAnillo: {
    width: '55%',
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 1.5,
  },
  subtitulo: {
    /* Pegado al domo, no a media distancia: el subtitulo es del domo que tiene
       arriba, no un texto suelto entre dos cosas. */
    marginTop: espaciado.xs,
    color: 'rgba(240,242,248,0.9)',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.3,
    fontFamily: fuente('subtitulo'),
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
});
