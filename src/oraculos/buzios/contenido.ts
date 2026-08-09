import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { paqueteBuzios } from './content/paquete';
import type { Odu } from './content/types';
import { MAZO_BUZIOS } from './mazo';

/**
 * Contenido de Buzios (Aprender + Consejo del dia) armado en el idioma activo.
 * Lo que no este traducido cae a español (ver content/paquete.ts).
 *
 * Es una consulta simbolica de los odus; no es el jogo de buzios, que es un
 * ritual sagrado que realizan personas iniciadas.
 */
export function crearContenidoBuzios(idioma: CodigoIdioma): ContenidoOraculo {
  const { odus, textos } = paqueteBuzios(idioma);

  const oduDeId = (id: string): Odu | undefined => odus[Number(id.replace('odu', ''))];

  const nombre = (p: Pieza) => {
    const o = oduDeId(p.id);
    return o ? `${o.numero}. ${o.nombre}` : p.id;
  };

  const ficha = (p: Pieza): Ficha | null => {
    const o = oduDeId(p.id);
    if (!o) return null;
    return {
      datos: [{ etiqueta: textos.cauries, valor: textos.abiertos(o.numero) }],
      bloques: [
        { titulo: textos.claves, texto: o.palabrasClave.join(' · ') },
        { titulo: textos.elMomento, texto: o.significado.general },
        { titulo: textos.enAmor, texto: o.significado.amor },
        { titulo: textos.enTrabajo, texto: o.significado.trabajo },
        { titulo: textos.enDinero, texto: o.significado.dinero },
        { titulo: textos.aFavor, texto: o.orientacion.favorable },
        { titulo: textos.comoDesafio, texto: o.orientacion.desafio },
      ],
      voz: [o.nombre, o.significado.general].join('\n\n'),
    };
  };

  const consejo = (p: Pieza) => oduDeId(p.id)?.significado.general ?? '';

  return {
    reverso: 0,
    secciones: [{ id: 'odus', titulo: textos.seccionOdus, piezas: MAZO_BUZIOS }],
    nombre,
    ficha,
    // Para el Reto: las claves del odu.
    quiz: (p) => {
      const o = oduDeId(p.id);
      return o ? { claves: o.palabrasClave } : null;
    },
    // La marca del odu dibuja cuantos cauries cayeron abiertos, que es
    // justamente su numero: contar los puntos da la respuesta.
    quizArteDelata: true,
    consejo,
    proximamente: textos.proximamente,
    // El consejo del dia muestra un odu del dia directamente.
    consejoModo: 'directo',
    invierte: false,
  };
}
