import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import type { Pieza, Posicion } from '../pieza';
import { CartaImagen, RATIO_PIEZA } from './CartaImagen';

/**
 * Envuelve la vista normal de una pieza y, al tocarla, abre un visor a pantalla
 * completa lo mas grande que entre. Mantiene la orientacion (invertida) usando
 * el arte propio o la rotacion, segun la pieza.
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
  const ratio = pieza.ratio ?? RATIO_PIEZA;
  // Agrandado a ~80% de la pantalla.
  const anchoMax = Math.floor(Math.min(width * 0.8, (height * 0.8) / ratio));

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
          <CartaImagen pieza={pieza} width={anchoMax} radio={16} posicion={posicion} />
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
