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
import { useCarrusel } from '../carrusel';
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
  const { listaLoop, inicio, aLogico, recentrar } = useCarrusel();
  // Indice (en la lista repetida) del domo centrado: solo ese anima particulas.
  const [centrado, setCentrado] = useState(inicio);

  // ─────────────────────────────────────────────────────────────────────────
  // EL DOMO DE ADELANTE CHIQUITO
  // ─────────────────────────────────────────────────────────────────────────
  // Domo escala segun scrollX (0.7 en los costados, 1 en el centro). El carrusel
  // arranca scrolleado a la copia del medio, asi que si scrollX vale 0 el domo
  // centrado se dibuja a 0.7: chiquito, hasta que un scroll de verdad corrija el
  // valor. Por eso a veces se veia bien y a veces no.
  //
  // El arreglo va ACA, en el cuerpo del render y no en un efecto. scrollX lo
  // maneja el driver nativo, y el nodo nativo se crea copiando el valor que
  // tenga en JS en ese momento. Seteandolo antes del montaje, el nodo nace en la
  // posicion correcta; seteandolo despues (que es lo que se hacia) la escritura
  // desde JS le compite al driver y se pierde.
  const arrancado = useRef(false);
  if (!arrancado.current) {
    arrancado.current = true;
    scrollX.setValue(inicio * stride);
  }

  // Arranca en la copia del medio, con Tarot centrado. Tambien vuelve ahi si
  // cambia la cantidad de oraculos (al cambiar el idioma): el indice viejo
  // podria apuntar a una posicion que ya no existe.
  //
  // Aca NO se toca scrollX: el scrollToOffset emite su evento de scroll y el
  // driver nativo se actualiza solo, que es la unica forma de moverlo sin
  // desincronizarlo.
  useEffect(() => {
    lista.current?.scrollToOffset({ offset: inicio * stride, animated: false });
    setCentrado(inicio);
  }, [stride, inicio]);

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })
  ).current;

  /** Donde quedo parado el carrusel: fija el centrado y recentra el loop. */
  const asentar = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const raw = Math.round(e.nativeEvent.contentOffset.x / stride);
    onIndexChange(aLogico(raw));

    // Si quedo en una copia de los extremos, salta a la del medio (invisible).
    const destino = recentrar(raw);
    if (destino !== raw) {
      lista.current?.scrollToOffset({ offset: destino * stride, animated: false });
    }
    setCentrado(destino);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // EL DOMO CENTRADO SIN PARTICULAS
  // ─────────────────────────────────────────────────────────────────────────
  // `centrado` decide que domo anima, y salia solo de onMomentumScrollEnd. Pero
  // si se arrastra despacio y se suelta sin impulso, Android no tiene momentum
  // que terminar y ESE EVENTO NO SE DISPARA NUNCA: el domo queda centrado y
  // apagado, y el footer sigue nombrando al anterior.
  //
  // El final del arrastre trae la velocidad. Si es practicamente cero, ese
  // arrastre no va a tener momentum y hay que dar por asentado ahi mismo; si
  // trae impulso, se deja que siga y asienta el momentum como siempre.
  const onDragEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (Math.abs(e.nativeEvent.velocity?.x ?? 0) < 0.1) asentar(e);
  };

  // El View contenedor se ajusta al alto de los domos (si se devuelve la lista
  // suelta, se estira a lo alto y los domos quedan pegados arriba).
  return (
    <View>
      <Animated.FlatList
        ref={lista as never}
        data={listaLoop}
        keyExtractor={(o, i) => `${(o as OraculoModulo).id}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={stride}
        decelerationRate="fast"
        initialNumToRender={listaLoop.length}
        contentContainerStyle={{ paddingHorizontal: side - spacing / 2 }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onMomentumScrollEnd={asentar}
        onScrollEndDrag={onDragEnd}
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
