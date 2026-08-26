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

// Cuanto se espera, despues de soltar, antes de dar por sentado que no va a
// haber momentum. Tiene que alcanzar para que Android alcance a dispararlo si
// lo va a disparar, y ser corto como para que no se note.
const ESPERA_MS = 160;

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
  // Donde esta parado el carrusel, en JS: lo mantiene al dia el listener
  // de onScroll, mas abajo.
  const posicion = useRef(inicio * stride);

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
    posicion.current = inicio * stride;
    setCentrado(inicio);
  }, [stride, inicio]);

  // Donde esta parado el carrusel, en JS. El scroll lo maneja el driver nativo,
  // asi que JS no se entera de la posicion salvo que se la pida: el `listener`
  // de Animated.event corre ademas del driver y solo guarda el numero. No hace
  // nada mas —ni un setState— para no meter trabajo de JS en cada cuadro.
  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
      listener: (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        posicion.current = e.nativeEvent.contentOffset.x;
      },
    })
  ).current;

  /**
   * Donde quedo parado el carrusel: fija el centrado y recentra el loop.
   *
   * `alinear` es para el caso raro en que se suelta y no hay animacion de snap
   * que lo termine de acomodar: ahi hay que empujarlo al domo mas cercano, o
   * queda a mitad de camino entre dos. Cuando lo llama el momentum ya viene
   * asentado y no hace falta.
   */
  // Si el dedo ya esta apoyado de nuevo, el salto se saltea. Mover la lista
  // por codigo mientras alguien la esta tocando es pelearle al gesto, y gana
  // cualquiera de los dos: queda a mitad de camino. No pasa nada por no
  // recentrar esta vez —para eso esta el colchon de dos copias— y en la proxima
  // asentada se vuelve a evaluar.
  const tocando = useRef(false);
  const onDragBegin = () => {
    tocando.current = true;
  };

  const asentar = (x: number, alinear: boolean) => {
    const raw = Math.round(x / stride);
    onIndexChange(aLogico(raw));

    const destino = tocando.current ? raw : recentrar(raw);
    if (destino !== raw) {
      // Quedo en una copia de los extremos: salta a la del medio. Es el mismo
      // oraculo en la misma posicion, asi que el salto no se ve.
      lista.current?.scrollToOffset({ offset: destino * stride, animated: false });
    } else if (alinear && Math.abs(x - destino * stride) > 1) {
      lista.current?.scrollToOffset({ offset: destino * stride, animated: true });
    }
    setCentrado(destino);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // POR QUE NO SE ASIENTA APENAS SE LEVANTA EL DEDO
  // ─────────────────────────────────────────────────────────────────────────
  // Habia un onScrollEndDrag que, si la velocidad era casi cero, asentaba ahi
  // mismo. Rompia el carrusel, y de una forma que solo se ve en el borde del
  // loop: al soltar, el snap todavia esta en curso, asi que la posicion que se
  // lee NO es donde va a quedar. Se redondeaba al domo equivocado y, peor, el
  // salto del loop (que es un scrollToOffset) le cortaba el snap por la mitad;
  // el nativo terminaba el movimiento desde una posicion que ya no era la que
  // el creia y volvia a caer en el mismo domo.
  //
  // Ahora el final del arrastre no asienta: DEJA UN AVISO por si nadie mas lo
  // hace. Si arranca el momentum, ese aviso se cancela y asienta el momentum
  // como siempre. Si no arranca ninguno —que era el caso original, arrastrar
  // despacio y soltar sin impulso, donde Android no dispara nunca el evento de
  // fin de momentum— salta el aviso y asienta el, ya con todo quieto.
  //
  // La diferencia de fondo con lo anterior: aca nunca se toca la lista mientras
  // se esta moviendo.
  const aviso = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelarAviso = () => {
    if (aviso.current) clearTimeout(aviso.current);
    aviso.current = null;
  };
  useEffect(() => cancelarAviso, []);

  const onDragEnd = () => {
    tocando.current = false;
    cancelarAviso();
    aviso.current = setTimeout(() => {
      aviso.current = null;
      asentar(posicion.current, true);
    }, ESPERA_MS);
  };

  const onMomentumBegin = () => {
    cancelarAviso();
  };

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    cancelarAviso();
    asentar(e.nativeEvent.contentOffset.x, false);
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
        onScrollBeginDrag={onDragBegin}
        onMomentumScrollBegin={onMomentumBegin}
        onMomentumScrollEnd={onMomentumEnd}
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
