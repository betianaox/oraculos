import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '@/store/useApp';
import { colores, espaciado, radios } from '../theme/tokens';
import { fuente } from '../theme/fuentes';

/** Pastilla con el contador de gemas. Vive a la izquierda del header. */
export function ContadorGemas() {
  const gemas = useApp((s) => s.gemas);

  return (
    <View style={estilos.pastilla}>
      <Ionicons name="diamond-outline" size={16} color={colores.gema} />
      {/* Sin escalado tipografico: la pastilla vive en la banda del header,
          que tiene alto fijo y comparte fila con el boton de accion. Con la
          fuente del sistema en grande el numero se desbordaba del espacio.
          Es un numero de una o dos cifras al lado de su icono, asi que no se
          pierde legibilidad; el resto de la app si acompaña el ajuste del
          dispositivo. */}
      <Text style={estilos.numero} allowFontScaling={false}>
        {gemas}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  pastilla: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.xs,
    paddingHorizontal: espaciado.md,
    paddingVertical: espaciado.xs + 2,
    borderRadius: radios.pill,
    backgroundColor: colores.superficie,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colores.borde,
  },
  numero: {
    color: colores.texto,
    fontSize: 15,
    fontFamily: fuente('uiSemiBold'),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
