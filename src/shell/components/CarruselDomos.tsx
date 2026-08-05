import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from 'react-native';
import type { OraculoModulo } from '@/oraculos/tipos';
import { calcularLayout } from '../layout';
import { INICIO, LISTA_LOOP, aLogico, recentrar } from '../carrusel';
import { Domo } from './Domo';

interface Props {
  scrollX: Animated.Value;
  /** Toque en el domo centrado -> ir a la pregunta de ese oraculo. */
  onSelect: (oraculo: OraculoModulo) => void;
  /** Cambio del oraculo centrado, en indice logico 0..N-1 (para el footer). */
  onIndexChange: (index: number) => void;
}

export function CarruselDomos({ scrollX, onSelect, onIndexChange }: Props) {
  const { width } = useWindowDimensions();
  const { itemWidth, spacing, stride, side } = calcularLayout(width);
  const lista = useRef<FlatList<OraculoModulo>>(null);
  // Indice (en la lista repetida) del domo centrado: solo ese anima particulas.
  const [centrado, setCentrado] = useState(INICIO);

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
    onIndexChange(aLogico(raw));

    // Si quedo en una copia de los extremos, salta a la del medio (invisible).
    const destino = recentrar(raw);
    if (destino !== raw) {
      lista.current?.scrollToOffset({ offset: destino * stride, animated: false });
    }
    setCentrado(destino);
  };

  // El View contenedor se ajusta al alto de los domos (si se devuelve la lista
  // suelta, se estira a lo alto y los domos quedan pegados arriba).
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
            activo={index === centrado}
            onPress={() => onSelect(item as OraculoModulo)}
          />
        )}
      />
    </View>
  );
}
