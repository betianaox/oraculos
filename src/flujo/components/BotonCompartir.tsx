import { useState } from 'react';
import { ActivityIndicator, type View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colores } from '@/shell/theme/tokens';
import { compartirTarjeta } from '../compartir';
import { BotonIcono } from './BotonIcono';

/**
 * Comparte la tarjeta de la lectura (ver `TarjetaLectura`).
 *
 * Se bloquea mientras saca la foto. La captura tarda poco, pero lo suficiente
 * como para que se pueda tocar dos veces y se abran dos menús de compartir
 * encima; y el que quede segundo tapa al primero sin que se entienda por qué.
 */
export function BotonCompartir({
  tarjeta,
  oraculoId,
  etiqueta,
  disabled = false,
}: {
  tarjeta: React.RefObject<View | null>;
  /** De que oraculo es: sale en el nombre del archivo que se comparte. */
  oraculoId: string;
  etiqueta: string;
  disabled?: boolean;
}) {
  const [ocupado, setOcupado] = useState(false);

  const compartir = async () => {
    setOcupado(true);
    try {
      await compartirTarjeta(tarjeta, oraculoId, etiqueta);
    } catch {
      // Si la captura o el menú fallan no hay nada que hacer ni nada que
      // contar: no se compartió, y la lectura sigue en pantalla intacta.
    } finally {
      setOcupado(false);
    }
  };

  return (
    <BotonIcono
      disabled={disabled || ocupado}
      accessibilityLabel={etiqueta}
      onPress={() => void compartir()}
    >
      {ocupado ? (
        <ActivityIndicator color={colores.texto} />
      ) : (
        <MaterialCommunityIcons name="share-variant" size={24} color={colores.texto} />
      )}
    </BotonIcono>
  );
}
