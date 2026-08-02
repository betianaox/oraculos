import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useT } from '@/i18n';
import { colores, espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';

export type SeccionFooter = 'consejo' | 'wiki' | 'quiz';

interface Props {
  onSelect: (seccion: SeccionFooter) => void;
}

const ITEMS: { seccion: SeccionFooter; icono: keyof typeof Ionicons.glyphMap }[] = [
  { seccion: 'consejo', icono: 'bulb-outline' },
  { seccion: 'wiki', icono: 'book-outline' },
  { seccion: 'quiz', icono: 'school-outline' },
];

/**
 * Footer de la pantalla de inicio. Actua sobre el oraculo centrado en el
 * carrusel: Consejo, Wiki y Quiz de ESE oraculo.
 */
export function Footer({ onSelect }: Props) {
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <View style={[estilos.contenedor, { paddingBottom: insets.bottom + espaciado.md }]}>
      {ITEMS.map(({ seccion, icono }) => (
        <Pressable
          key={seccion}
          onPress={() => onSelect(seccion)}
          style={({ pressed }) => [estilos.item, pressed && estilos.itemPresionado]}
          accessibilityRole="button"
        >
          <Ionicons name={icono} size={22} color={colores.textoSuave} />
          <Text style={estilos.etiqueta}>{t(`footer.${seccion}`)}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: espaciado.md,
    paddingHorizontal: espaciado.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colores.borde,
    backgroundColor: colores.fondo,
  },
  item: {
    alignItems: 'center',
    gap: espaciado.xs,
    paddingHorizontal: espaciado.lg,
    paddingVertical: espaciado.sm,
    borderRadius: 12,
  },
  itemPresionado: {
    backgroundColor: colores.superficie,
  },
  etiqueta: {
    color: colores.textoSuave,
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: fuente('uiMedium'),
    fontWeight: '500',
  },
});
