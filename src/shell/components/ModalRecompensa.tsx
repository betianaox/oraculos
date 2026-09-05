import { useEffect, useRef } from 'react';
import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useT } from '@/i18n';
import { colores, espaciado, radios } from '../theme/tokens';
import { fuente } from '../theme/fuentes';
import { hexAlfa } from '../color';
import { useAnuncioRecompensado } from '../anuncios/useAnuncioRecompensado';

/**
 * Ofrece un video recompensado de AdMob a cambio de algo (desbloquear un bloque
 * de la wiki, sumar una gema). Solo entrega la recompensa por `onReward`, que
 * el hook dispara al cerrarse el anuncio si el usuario lo miro entero: si lo
 * corta antes, no pasa nada.
 *
 * El modal se cierra ANTES de mostrar el anuncio (el anuncio se pinta encima de
 * todo), asi que quien lo use tiene que tener listo el dato de la recompensa
 * desde antes: `onReward` llega despues del cierre.
 */
export function ModalRecompensa({
  visible,
  onClose,
  onReward,
  titulo,
  recompensa,
}: {
  visible: boolean;
  onClose: () => void;
  onReward: () => void;
  /** Si no se pasa, se usa el texto generico traducido. */
  titulo?: string;
  recompensa?: string;
}) {
  const t = useT();
  const { estado, listo, simulado, mostrar, recargar } = useAnuncioRecompensado();

  // Si se abre el modal justo cuando no hay anuncio (fallo de red, sin relleno),
  // se reintenta la carga: si no, quedaria trabado hasta salir de la pantalla.
  // Un solo reintento por apertura, para no quedar pidiendo anuncios en bucle.
  const reintentado = useRef(false);
  useEffect(() => {
    if (!visible) {
      reintentado.current = false;
      return;
    }
    if (estado === 'sinAnuncio' && !reintentado.current) {
      reintentado.current = true;
      recargar();
    }
  }, [visible, estado, recargar]);

  const verVideo = () => {
    if (!listo) return;
    // El anuncio se pinta encima de todo: primero se cierra el modal y despues
    // se muestra. La recompensa llega al cerrarse el anuncio.
    onClose();
    mostrar(onReward);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={estilos.fondo}>
        <View style={estilos.tarjeta}>
          <MaterialCommunityIcons name="eye-outline" size={54} color="#e9c46a" />
          <Text style={estilos.titulo}>{titulo ?? t('recompensa.titulo')}</Text>
          <Text style={estilos.nota}>
            {simulado
              ? t('recompensa.dev')
              : estado === 'sinAnuncio'
                ? t('recompensa.sinVideo')
                : t('recompensa.instruccion')}
          </Text>

          <Pressable
            style={({ pressed }) => [
              estilos.boton,
              !listo && estilos.botonApagado,
              pressed && listo && { opacity: 0.85 },
            ]}
            onPress={verVideo}
            disabled={!listo}
          >
            {/* Girando mientras se pide el anuncio: el texto solo no alcanzaba
                para que se entienda que algo esta pasando. */}
            {estado === 'cargando' ? (
              <ActivityIndicator size="small" color={colores.fondo} />
            ) : (
              <MaterialCommunityIcons name="play-circle-outline" size={18} color={colores.fondo} />
            )}
            <Text style={estilos.botonTexto}>
              {estado === 'cargando'
                ? t('recompensa.preparando')
                : (recompensa ?? t('recompensa.verVideo'))}
            </Text>
          </Pressable>

          <Pressable onPress={onClose} hitSlop={10} style={estilos.cerrar}>
            <Text style={estilos.cerrarTexto}>{t('recompensa.ahoraNo')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: espaciado.xl,
  },
  tarjeta: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: colores.superficie,
    borderRadius: radios.lg,
    borderWidth: 1,
    borderColor: hexAlfa('#AFD2FF', 0.35),
    alignItems: 'center',
    paddingVertical: espaciado.xxl,
    paddingHorizontal: espaciado.xl,
    gap: espaciado.md,
  },
  titulo: {
    color: colores.texto,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fuente('subtituloMedium'),
  },
  nota: {
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fuente('ui'),
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    marginTop: espaciado.xs,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.xxl,
    borderRadius: radios.pill,
    backgroundColor: '#e9c46a',
  },
  botonApagado: {
    opacity: 0.4,
  },
  botonTexto: {
    color: colores.fondo,
    fontSize: 15,
    fontFamily: fuente('uiSemiBold'),
  },
  cerrar: {
    marginTop: espaciado.xs,
  },
  cerrarTexto: {
    color: colores.textoTenue,
    fontSize: 13,
    fontFamily: fuente('ui'),
  },
});
