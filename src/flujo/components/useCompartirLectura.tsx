import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useT } from '@/i18n';
import type { OraculoModulo } from '@/oraculos/tipos';
import { BotonCompartir } from './BotonCompartir';
import { TarjetaLectura } from './TarjetaLectura';

/**
 * Arma las dos mitades de compartir: el botón, que va en el pie, y la tarjeta,
 * que va al final de la pantalla.
 *
 * SON DOS Y NO UNA porque la tarjeta no puede vivir adentro del pie. Para
 * fotografiar una vista Android la tiene que haber dibujado de verdad, y
 * cualquier contenedor de arriba con `overflow: hidden` la recorta y la foto
 * sale en blanco. Colgándola del contenedor raíz de la pantalla no hay nada que
 * la pueda recortar.
 *
 * Se usa igual en las cuatro pantallas que la ofrecen (las tres tiradas y la
 * lectura): `const { boton, tarjeta } = useCompartirLectura(...)`, el botón al
 * lado del de voz y la tarjeta como último hijo del contenedor.
 */
export function useCompartirLectura({
  oraculo,
  pregunta,
  parrafos,
  disabled = false,
}: {
  oraculo: OraculoModulo | undefined;
  pregunta: string;
  parrafos: string[];
  /** El botón espera: en la tirada, hasta que la caída termine de caer. */
  disabled?: boolean;
}) {
  const t = useT();
  const ref = useRef<View>(null);

  return {
    boton: (
      <BotonCompartir
        tarjeta={ref}
        oraculoId={oraculo?.id ?? 'lectura'}
        etiqueta={t('flujo.compartir')}
        disabled={disabled}
      />
    ),
    tarjeta: (
      <View style={estilos.fueraDePantalla} pointerEvents="none">
        <TarjetaLectura
          ref={ref}
          oraculo={oraculo}
          // El nombre se resuelve aca y no lo pasa quien llama: las cuatro
          // pantallas ya lo tenian calculado igual, y era la clase de dato que
          // se olvida de pasar en la quinta.
          nombre={oraculo ? t(oraculo.nombreKey) : ''}
          pregunta={pregunta}
          parrafos={parrafos}
          marca={t('app.nombre')}
        />
      </View>
    ),
  };
}

const estilos = StyleSheet.create({
  // Corrida fuera de la pantalla, pero montada y medida como cualquier otra
  // vista: escondida con `display: none` o con `opacity: 0` la foto sale en
  // blanco.
  fueraDePantalla: {
    position: 'absolute',
    top: 0,
    left: -2000,
  },
});
