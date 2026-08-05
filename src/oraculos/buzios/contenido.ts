import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { ODUS_ES } from './content/es/odus';
import type { Odu } from './content/types';
import { MAZO_BUZIOS } from './mazo';

function oduDeId(id: string): Odu | undefined {
  return ODUS_ES[Number(id.replace('odu', ''))];
}

/**
 * Contenido de Buzios (Aprender + Consejo del dia). Por ahora solo en español.
 * Es una consulta simbolica de los odus; no es el jogo de buzios.
 */
export function crearContenidoBuzios(_idioma: CodigoIdioma): ContenidoOraculo {
  const nombre = (p: Pieza) => {
    const o = oduDeId(p.id);
    return o ? `${o.numero}. ${o.nombre}` : p.id;
  };

  const ficha = (p: Pieza): Ficha | null => {
    const o = oduDeId(p.id);
    if (!o) return null;
    return {
      datos: [{ etiqueta: 'Cauríes', valor: `${o.numero} abiertos` }],
      bloques: [
        { titulo: 'Claves', texto: o.palabrasClave.join(' · ') },
        { titulo: 'El momento', texto: o.significado.general },
        { titulo: 'En el amor', texto: o.significado.amor },
        { titulo: 'En el trabajo', texto: o.significado.trabajo },
        { titulo: 'En lo económico', texto: o.significado.dinero },
        { titulo: 'A favor (ire)', texto: o.orientacion.favorable },
        { titulo: 'Como desafío (osogbo)', texto: o.orientacion.desafio },
      ],
      voz: [o.nombre, o.significado.general].join('\n\n'),
    };
  };

  const consejo = (p: Pieza) => oduDeId(p.id)?.significado.general ?? '';

  return {
    reverso: 0,
    secciones: [{ id: 'odus', titulo: 'Los odus', piezas: MAZO_BUZIOS }],
    nombre,
    ficha,
    consejo,
    proximamente: 'Contenido próximamente',
    // El consejo del dia muestra un odu del dia directamente.
    consejoModo: 'directo',
    invierte: false,
  };
}
