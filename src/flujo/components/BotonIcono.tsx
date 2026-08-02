import type { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

/** Boton circular con un icono, en el lenguaje de Oraculos (borde celeste). */
export function BotonIcono({
  children,
  onPress,
  accessibilityLabel,
}: {
  children: ReactNode;
  onPress: () => void;
  accessibilityLabel: string;
}) {
  return (
    <Pressable
      style={({ pressed }) => [estilos.boton, pressed && estilos.press]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
    >
      {children}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  boton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
    borderColor: 'rgba(175,210,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    opacity: 0.7,
  },
});
