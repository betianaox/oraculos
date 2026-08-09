import { useEffect, useMemo, useState } from 'react';
import type { PiezaTirada } from './pieza';
import type { OraculoModulo } from '@/oraculos/tipos';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import type { CodigoIdioma } from '@/i18n/idiomas';
import { PARRAFOS_DEMO } from './demo';
import { hayProveedor, pedirLecturaIA } from '@/ia';

// ─────────────────────────────────────────────────────────────────────────
// De dónde sale la lectura que se muestra.
//
// El motor propio contesta siempre y al instante: es la respuesta garantizada.
// En paralelo se le pide una a la IA, que escribe más natural. Si llega a
// tiempo, reemplaza a la otra; si no llega, o falla, o la cuota se agotó, nadie
// se entera. El usuario nunca ve un error ni una pantalla vacía.
//
// "A tiempo" significa: antes de que la persona pase a leer. Quien llama fija
// esa ventana, porque depende de la pantalla: si la lectura no se muestra
// todavía, se puede esperar tranquilo.
// ─────────────────────────────────────────────────────────────────────────

export type FuenteLectura = 'ia' | 'propio' | 'demo';

interface Opciones {
  oraculo?: OraculoModulo;
  tirada: PiezaTirada[];
  tema: Tema;
  analisis: AnalisisPregunta;
  idioma: CodigoIdioma;
  pregunta: string;
  /** Cuánto tiene la IA para contestar antes de que se descarte su respuesta. */
  ventanaMs: number;
}

export function useLectura(opciones: Opciones): {
  parrafos: string[];
  fuente: FuenteLectura;
  /** Sigue esperando a la IA. Quien llama decide si retiene la pantalla. */
  pendiente: boolean;
} {
  const { oraculo, tirada, tema, analisis, idioma, pregunta, ventanaMs } = opciones;

  const propios = useMemo(
    () => oraculo?.lectura?.(tirada, tema, analisis, idioma) ?? [],
    [oraculo, tirada, tema, analisis, idioma],
  );

  const [deIA, setDeIA] = useState<string[] | null>(null);
  const [pendiente, setPendiente] = useState(false);

  // Se pide una sola vez, al montar: la tirada ya está echada y no cambia
  // mientras la pantalla vive.
  useEffect(() => {
    if (!oraculo || !hayProveedor()) return;

    const piezas = oraculo.material?.(tirada, tema, analisis, idioma);
    if (!piezas || piezas.length === 0) return;

    let vigente = true;
    setPendiente(true);
    pedirLecturaIA(
      { oraculoId: oraculo.id, pregunta, tema, analisis, piezas, idioma },
      ventanaMs,
    )
      .then((parrafos) => {
        // Si la pantalla ya se fue, descartamos la respuesta en silencio.
        if (!vigente) return;
        if (parrafos) setDeIA(parrafos);
        setPendiente(false);
      })
      .catch(() => {
        // `pedirLecturaIA` ya absorbe sus errores; esto es solo por las dudas.
        if (vigente) setPendiente(false);
      });

    return () => {
      vigente = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (deIA) return { parrafos: deIA, fuente: 'ia', pendiente };
  if (propios.length > 0) return { parrafos: propios, fuente: 'propio', pendiente };
  return { parrafos: PARRAFOS_DEMO, fuente: 'demo', pendiente };
}
