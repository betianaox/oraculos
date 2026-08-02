import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colores } from '@/shell/theme/tokens';
import { useVoz } from '../useVoz';
import { BotonIcono } from './BotonIcono';

/** Boton de parlante que lee una lectura en voz alta (TTS del sistema). */
export function BotonVoz({ texto }: { texto: string }) {
  const { hablando, alternar } = useVoz(texto);
  return (
    <BotonIcono accessibilityLabel={hablando ? 'Detener' : 'Escuchar'} onPress={alternar}>
      <MaterialCommunityIcons
        name={hablando ? 'stop' : 'volume-high'}
        size={26}
        color={colores.texto}
      />
    </BotonIcono>
  );
}
