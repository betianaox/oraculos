import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useApp } from '@/store/useApp';
import { colores } from '@/shell/theme/tokens';
import { useVoz } from '../voz';
import { BotonIcono } from './BotonIcono';

/**
 * Boton de parlante que lee un texto en voz alta. Usa el controlador global:
 * `rutas` son las pantallas donde el audio puede seguir sonando (ej. Tirada +
 * Lectura). Al salir de esas rutas o al presionar stop, se corta.
 */
export function BotonVoz({ texto, rutas }: { texto: string; rutas: string[] }) {
  const hablando = useVoz((s) => s.hablando);
  const hablar = useVoz((s) => s.hablar);
  const parar = useVoz((s) => s.parar);
  const idioma = useApp((s) => s.idioma);

  return (
    <BotonIcono
      accessibilityLabel={hablando ? 'Detener' : 'Escuchar'}
      onPress={() => (hablando ? parar() : hablar(texto, idioma, rutas))}
    >
      <MaterialCommunityIcons
        name={hablando ? 'stop' : 'volume-high'}
        size={26}
        color={colores.texto}
      />
    </BotonIcono>
  );
}
