import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';

/**
 * Invitacion a mirar un video para desbloquear contenido. Es una placa de borde
 * punteado (se lee como "todavia no esta abierto") con el ojo del que mira.
 * Se usa arriba de la wiki entera (runas, iching, buzios) o debajo del titulo
 * de cada bloque (los mazos).
 */
export function BannerVideo({ texto, onPress }: { texto: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.banner, pressed && { opacity: 0.75 }]}
    >
      <View style={estilos.iconoCaja}>
        <MaterialCommunityIcons name="eye-outline" size={18} color="#e9c46a" />
      </View>
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.lg,
    borderRadius: radios.md,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: hexAlfa('#e9c46a', 0.55),
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
  iconoCaja: {
    width: 26,
    height: 26,
    borderRadius: radios.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hexAlfa('#e9c46a', 0.14),
  },
  texto: {
    flex: 1,
    color: colores.texto,
    fontSize: 14,
    fontFamily: fuente('uiMedium'),
  },
});
