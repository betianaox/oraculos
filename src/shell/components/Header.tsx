import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ContadorGemas } from './ContadorGemas';
import { colores, espaciado } from '../theme/tokens';
import { fuente } from '../theme/fuentes';

type AccionHeader = 'config' | 'cerrar';

interface Props {
  /** Que muestra el boton de la derecha: engranaje (inicio) o X (oraculo). */
  accion: AccionHeader;
  onAccion: () => void;
  /** Titulo centrado opcional (se muestra en Cinzel). */
  titulo?: string;
}

/**
 * Header fijo, comun a toda la app: gemas a la izquierda, accion a la derecha.
 * En la pantalla de inicio la accion es el engranaje de Ajustes; en un oraculo
 * es la X para cerrar y volver.
 */
export function Header({ accion, onAccion, titulo }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.contenedor, { paddingTop: insets.top + espaciado.sm }]}>
      <ContadorGemas />

      {titulo ? (
        <Text style={estilos.titulo} numberOfLines={1}>
          {titulo}
        </Text>
      ) : (
        <View style={estilos.tituloVacio} />
      )}

      <Pressable
        onPress={onAccion}
        hitSlop={10}
        style={({ pressed }) => [estilos.boton, pressed && estilos.botonPresionado]}
        accessibilityRole="button"
        accessibilityLabel={accion === 'config' ? 'Ajustes' : 'Cerrar'}
      >
        <Ionicons
          name={accion === 'config' ? 'settings-outline' : 'close'}
          size={22}
          color={colores.texto}
        />
      </Pressable>
    </View>
  );
}

const LADO = 44;

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: espaciado.lg,
    paddingBottom: espaciado.md,
  },
  titulo: {
    flex: 1,
    textAlign: 'center',
    color: colores.texto,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: fuente('tituloBold'),
    fontWeight: '700',
  },
  tituloVacio: {
    flex: 1,
  },
  boton: {
    width: LADO,
    height: LADO,
    borderRadius: LADO / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPresionado: {
    backgroundColor: colores.superficie,
  },
});
