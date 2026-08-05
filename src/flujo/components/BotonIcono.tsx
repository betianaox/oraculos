import type { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const METAL = ['#53627e', '#46536e', '#566989'] as const;

/**
 * Boton circular flotante, en el mismo lenguaje que el header/footer: chapa
 * metalica azulada semitransparente con borde celeste.
 */
export function BotonIcono({
  children,
  onPress,
  accessibilityLabel,
  disabled = false,
}: {
  children: ReactNode;
  onPress: () => void;
  accessibilityLabel: string;
  disabled?: boolean;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos.boton,
        disabled && estilos.deshabilitado,
        pressed && !disabled && estilos.press,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
    >
      <LinearGradient
        colors={[...METAL]}
        locations={[0, 0.45, 1]}
        style={[StyleSheet.absoluteFill, estilos.fondo]}
      />
      {children}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  boton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: 'rgba(175,210,255,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // Glow celeste tenue (solo iOS lee el color; en Android queda plano).
    shadowColor: 'rgba(120,180,255,0.6)',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  fondo: {
    opacity: 0.6,
  },
  press: {
    opacity: 0.8,
  },
  deshabilitado: {
    opacity: 0.35,
  },
});
