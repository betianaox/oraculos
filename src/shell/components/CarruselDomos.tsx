import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import type { OraculoModulo } from '@/oraculos/tipos';
import { calcularLayout } from '../layout';
import { INICIO, LISTA_LOOP, N, aLogico, recentrar } from '../carrusel';
import { colores, espaciado } from '../theme/tokens';
import { Domo } from './Domo';

interface Props {
  scrollX: Animated.Value;
  /** Toque en el domo centrado -> ir a la pregunta de ese oraculo. */
  onSelect: (oraculo: OraculoModulo) => void;
  /** Cambio del oraculo centrado, en indice logico 0..N-1 (para el footer). */
  onIndexChange: (index: number) => void;
}

// Puntos de navegacion: las bolitas quedan fijas y el marcador se desplaza.
const PUNTO = 7;
const GAP = 9;
const PASO = PUNTO + GAP;

export function CarruselDomos({ scrollX, onSelect, onIndexChange }: Props) {
  const { width } = useWindowDimensions();
  const { itemWidth, spacing, stride, side } = calcularLayout(width);
  const [activo, setActivo] = useState(0);
  const lista = useRef<FlatList<OraculoModulo>>(null);

  // El marcador se desliza hasta la bolita del oraculo activo.
  const marcador = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(marcador, {
      toValue: activo * PASO,
      useNativeDriver: true,
      speed: 14,
      bounciness: 6,
    }).start();
  }, [activo, marcador]);

  // Arranca en la copia del medio, con Tarot centrado.
  useEffect(() => {
    const offset = INICIO * stride;
    lista.current?.scrollToOffset({ offset, animated: false });
    scrollX.setValue(offset);
  }, [stride, scrollX]);

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })
  ).current;

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const raw = Math.round(e.nativeEvent.contentOffset.x / stride);
    setActivo(aLogico(raw));
    onIndexChange(aLogico(raw));

    // Si quedo en una copia de los extremos, salta a la del medio (invisible).
    const destino = recentrar(raw);
    if (destino !== raw) {
      lista.current?.scrollToOffset({ offset: destino * stride, animated: false });
    }
  };

  return (
    <View>
      <Animated.FlatList
        ref={lista as never}
        data={LISTA_LOOP}
        keyExtractor={(o, i) => `${(o as OraculoModulo).id}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={stride}
        decelerationRate="fast"
        initialNumToRender={LISTA_LOOP.length}
        contentContainerStyle={{ paddingHorizontal: side - spacing / 2 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumEnd}
        renderItem={({ item, index }) => (
          <Domo
            oraculo={item as OraculoModulo}
            index={index}
            scrollX={scrollX}
            stride={stride}
            itemWidth={itemWidth}
            spacing={spacing}
            onPress={() => onSelect(item as OraculoModulo)}
          />
        )}
      />

      <View style={estilos.puntos}>
        <View style={estilos.puntosFila}>
          {Array.from({ length: N }).map((_, i) => (
            <View key={i} style={estilos.punto} />
          ))}
          <Animated.View
            style={[estilos.marcador, { transform: [{ translateX: marcador }, { scale: 1.35 }] }]}
          />
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  puntos: {
    marginTop: espaciado.xl,
    alignItems: 'center',
  },
  puntosFila: {
    flexDirection: 'row',
    position: 'relative',
  },
  punto: {
    width: PUNTO,
    height: PUNTO,
    borderRadius: PUNTO / 2,
    marginHorizontal: GAP / 2,
    backgroundColor: 'rgba(230,232,239,0.45)',
  },
  marcador: {
    position: 'absolute',
    left: GAP / 2,
    top: 0,
    width: PUNTO,
    height: PUNTO,
    borderRadius: PUNTO / 2,
    backgroundColor: colores.texto,
  },
});
