import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { paqueteIching } from './content/paquete';
import type { Hexagrama } from './content/types';
import { MAZO_ICHING } from './mazo';
import { NOMBRE_TRIGRAMA, trigramaInferior, trigramaSuperior } from './trigramas';

/**
 * Contenido del I Ching (Aprender + Consejo del dia) armado en el idioma
 * activo. Hoy solo existe el paquete español y el oraculo solo se ofrece en
 * español, pero pasa por el mismo selector que los demas (ver content/paquete.ts).
 */
export function crearContenidoIChing(idioma: CodigoIdioma): ContenidoOraculo {
  const { hexagramas, textos } = paqueteIching(idioma);

  const hexDeId = (id: string): Hexagrama | undefined =>
    hexagramas[Number(id.replace('hex', ''))];

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
        { etiqueta: textos.trigramaSuperior, valor: sup },
        { etiqueta: textos.trigramaInferior, valor: inf },
        ...(h.nombreAlterno ? [{ etiqueta: textos.nombreAlterno, valor: h.nombreAlterno }] : []),
      ],
      bloques: [
        { titulo: textos.claves, texto: h.palabrasClave.join(' · ') },
        { titulo: textos.dictamen, texto: h.dictamen },
        { titulo: textos.imagen, texto: h.imagen },
        { titulo: textos.elMomento, texto: h.significado.general },
        { titulo: textos.enAmor, texto: h.significado.amor },
        { titulo: textos.enTrabajo, texto: h.significado.trabajo },
        { titulo: textos.enDinero, texto: h.significado.dinero },
        ...h.lineasCambiantes.map((l) => ({
          titulo: textos.lineas[l.posicion],
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
      titulo: textos.serie(desde, hasta),
      grupo: textos.grupoHexagramas,
      piezas,
    });
  }

  return {
    reverso: 0,
    secciones,
    nombre,
    ficha,
    // Para el Reto: las claves del hexagrama.
    quiz: (p) => {
      const h = hexDeId(p.id);
      return h ? { claves: h.palabrasClave } : null;
    },
    consejo,
    proximamente: textos.proximamente,
    // El consejo del dia muestra un hexagrama del dia directamente (sin elegir
    // entre tres dadas vuelta, que no aplica al I Ching).
    consejoModo: 'directo',
    invierte: false,
  };
}
