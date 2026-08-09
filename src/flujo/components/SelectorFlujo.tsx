import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useT } from '@/i18n';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { fuente } from '@/shell/theme/fuentes';

type Paso = 'tirada' | 'lectura';

/**
 * Switch entre Tirada y Lectura: dos segmentos, el actual resaltado y el otro
 * atenuado (se ve que hay una opcion elegida y otra disponible). En el lenguaje
 * de la consola: chapa oscura + borde celeste.
 */
export function SelectorFlujo({
  actual,
  onTirada,
  onLectura,
  lecturaDisabled = false,
  interpretando = false,
}: {
  actual: Paso;
  onTirada: () => void;
  onLectura: () => void;
  // Deshabilita el segmento de Lectura (ej: hasta que termine la animacion).
  lecturaDisabled?: boolean;
  // La lectura se esta redactando todavia: el segmento muestra solo puntos, que
  // dicen "esperá" sin necesitar traduccion y sin anunciar lo que pasa detras.
  interpretando?: boolean;
}) {
  const t = useT();
  return (
    <View style={estilos.pill}>
      <Segmento
        activo={actual === 'tirada'}
        icono="cards-outline"
        label={t('flujo.tirada')}
        onPress={onTirada}
      />
      <View style={estilos.divisor} />
      <Segmento
        activo={actual === 'lectura'}
        icono="script-text-outline"
        label={interpretando ? '...' : t('flujo.lectura')}
        onPress={onLectura}
        deshabilitado={lecturaDisabled}
      />
    </View>
  );
}

function Segmento({
  activo,
  icono,
  label,
  onPress,
  deshabilitado = false,
}: {
  activo: boolean;
  icono: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  onPress: () => void;
  deshabilitado?: boolean;
}) {
  const color = activo ? colores.texto : colores.textoTenue;
  return (
    <Pressable
      onPress={onPress}
      disabled={activo || deshabilitado}
      style={({ pressed }) => [
        estilos.seg,
        activo && estilos.segActivo,
        deshabilitado && !activo && { opacity: 0.4 },
        pressed && !activo && !deshabilitado && { opacity: 0.7 },
      ]}
    >
      <MaterialCommunityIcons name={icono} size={20} color={color} />
      <Text style={[estilos.segTexto, { color }]}>{label}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 54,
    borderRadius: radios.pill,
    borderWidth: 1.5,
    borderColor: 'rgba(175,210,255,0.6)',
    backgroundColor: 'rgba(0,0,0,0.35)',
    overflow: 'hidden',
  },
  divisor: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(175,210,255,0.35)',
  },
  seg: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    paddingHorizontal: espaciado.lg,
  },
  segActivo: {
    backgroundColor: 'rgba(175,210,255,0.22)',
  },
  segTexto: {
    fontSize: 14,
    fontFamily: fuente('uiMedium'),
  },
});
