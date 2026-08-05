import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { HEXAGRAMAS_ES } from './content/es/hexagramas';
import type { Hexagrama } from './content/types';
import { MAZO_ICHING } from './mazo';
import { NOMBRE_TRIGRAMA, trigramaInferior, trigramaSuperior } from './trigramas';

const ETIQUETA_LINEA: Record<number, string> = {
  1: 'Línea 1 · inferior',
  2: 'Línea 2',
  3: 'Línea 3',
  4: 'Línea 4',
  5: 'Línea 5',
  6: 'Línea 6 · superior',
};

function hexDeId(id: string): Hexagrama | undefined {
  return HEXAGRAMAS_ES[Number(id.replace('hex', ''))];
}

/**
 * Contenido del I Ching (Aprender + Consejo del dia). Por ahora solo en
 * español; cuando haya traducciones se ramifica por `idioma`.
 */
export function crearContenidoIChing(_idioma: CodigoIdioma): ContenidoOraculo {
  const nombre = (p: Pieza) => {
    const h = hexDeId(p.id);
    return h ? `${h.numero}. ${h.nombre}` : p.id;
  };

  const ficha = (p: Pieza): Ficha | null => {
    const h = hexDeId(p.id);
    if (!h) return null;
    const sup = NOMBRE_TRIGRAMA[trigramaSuperior(h.lineas)];
    const inf = NOMBRE_TRIGRAMA[trigramaInferior(h.lineas)];
    return {
      datos: [
        { etiqueta: 'Superior', valor: sup },
        { etiqueta: 'Inferior', valor: inf },
        ...(h.nombreAlterno ? [{ etiqueta: 'Nombre', valor: h.nombreAlterno }] : []),
      ],
      bloques: [
        { titulo: 'Claves', texto: h.palabrasClave.join(' · ') },
        { titulo: 'El Dictamen', texto: h.dictamen },
        { titulo: 'La Imagen', texto: h.imagen },
        { titulo: 'El momento', texto: h.significado.general },
        { titulo: 'En el amor', texto: h.significado.amor },
        { titulo: 'En el trabajo', texto: h.significado.trabajo },
        { titulo: 'En lo económico', texto: h.significado.dinero },
        ...h.lineasCambiantes.map((l) => ({
          titulo: ETIQUETA_LINEA[l.posicion],
          texto: l.texto,
        })),
      ],
      voz: [h.nombre, h.dictamen, h.imagen, h.significado.general].join('\n\n'),
    };
  };

  const consejo = (p: Pieza) => hexDeId(p.id)?.dictamen ?? '';

  // 64 hexagramas partidos en 4 bloques de 16, cada uno con su propio video
  // de desbloqueo (como los palos del Tarot). Van agrupados bajo un solo
  // titulo ("Hexagramas") que se escribe una vez arriba del primero; el
  // titulo de cada bloque ("1 a 16"...) solo se usa en el texto del banner.
  const TAMANO_BLOQUE = 16;
  const secciones = [];
  for (let i = 0; i < MAZO_ICHING.length; i += TAMANO_BLOQUE) {
    const piezas = MAZO_ICHING.slice(i, i + TAMANO_BLOQUE);
    const desde = i + 1;
    const hasta = i + piezas.length;
    secciones.push({
      id: `bloque${desde}`,
      titulo: `${desde} a ${hasta}`,
      grupo: 'Hexagramas',
      piezas,
    });
  }

  return {
    reverso: 0,
    secciones,
    nombre,
    ficha,
    consejo,
    proximamente: 'Contenido próximamente',
    // El consejo del dia muestra un hexagrama del dia directamente (sin elegir
    // entre tres dadas vuelta, que no aplica al I Ching).
    consejoModo: 'directo',
    invierte: false,
  };
}
