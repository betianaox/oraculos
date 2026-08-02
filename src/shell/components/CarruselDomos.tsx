import { useRef, useState } from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { ORACULOS } from '@/oraculos/registry';
import type { OraculoModulo } from '@/oraculos/tipos';
import { calcularLayout } from '../layout';
import { colores, espaciado } from '../theme/tokens';
import { Domo } from './Domo';

interface Props {
  scrollX: Animated.Value;
  /** Toque en el domo centrado -> ir a la pregunta de ese oraculo. */
  onSelect: (oraculo: OraculoModulo) => void;
  /** Cambio del oraculo centrado (para que el footer actue sobre el). */
  onIndexChange: (index: number) => void;
}

export function CarruselDomos({ scrollX, onSelect, onIndexChange }: Props) {
  const { width } = useWindowDimensions();
  const { itemWidth, spacing, stride, side } = calcularLayout(width);
  const [activo, setActivo] = useState(0);

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })
  ).current;

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / stride);
    const acotado = Math.max(0, Math.min(index, ORACULOS.length - 1));
    setActivo(acotado);
    onIndexChange(acotado);
  };

  return (
    <View>
      <Animated.FlatList
        data={ORACULOS}
        keyExtractor={(o) => o.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={stride}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: side - spacing / 2 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumEnd}
        renderItem={({ item, index }) => (
          <Domo
            oraculo={item}
            index={index}
            scrollX={scrollX}
            stride={stride}
            itemWidth={itemWidth}
            spacing={spacing}
            onPress={() => onSelect(item)}
          />
        )}
      />

      <View style={estilos.puntos}>
        {ORACULOS.map((o, i) => (
          <View key={o.id} style={[estilos.punto, i === activo && estilos.puntoActivo]} />
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  puntos: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: espaciado.sm,
    marginTop: espaciado.xl,
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colores.borde,
  },
  puntoActivo: {
    backgroundColor: colores.texto,
    width: 22,
  },
});
