import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { Pieza, Posicion } from '../pieza';
import { CartaImagen, RATIO_PIEZA } from './CartaImagen';

/**
 * Envuelve la vista normal de una pieza y, al tocarla, abre un visor a pantalla
 * completa lo mas grande que entre. Mantiene la orientacion (invertida).
 */
export function CartaAmpliable({
  pieza,
  posicion = 'normal',
  children,
}: {
  pieza: Pieza;
  posicion?: Posicion;
  children: ReactNode;
}) {
  const [abierta, setAbierta] = useState(false);
  const { width, height } = useWindowDimensions();
  const invertida = posicion === 'invertida';
  const anchoMax = Math.floor(Math.min(width * 0.94, (height * 0.86) / RATIO_PIEZA));

  return (
    <>
      <Pressable onPress={() => setAbierta(true)}>
        {children}
        <View style={estilos.lupaCapa} pointerEvents="none">
          <View style={estilos.lupaBoton}>
            <MaterialCommunityIcons name="magnify-plus-outline" size={20} color="#fff" />
          </View>
        </View>
      </Pressable>

      <Modal
        visible={abierta}
        transparent
        animationType="fade"
        onRequestClose={() => setAbierta(false)}
        statusBarTranslucent
      >
        <Pressable style={estilos.fondo} onPress={() => setAbierta(false)}>
          <View style={invertida ? estilos.invertida : undefined}>
            <CartaImagen pieza={pieza} width={anchoMax} radio={16} />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  invertida: {
    transform: [{ rotate: '180deg' }],
  },
  lupaCapa: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lupaBoton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
