import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { paqueteEgipcio } from './content/paquete';
import type { Carta } from './content/types';
import { MAZO_EGIPCIO } from './mazo';
import { DORSO_EGIPCIO } from './imagenes';

/**
 * Contenido del Tarot Egipcio (Aprender + Consejo del dia) armado en el idioma
 * activo. Lo que no este traducido cae a español (ver content/paquete.ts).
 */
export function crearContenidoEgipcio(idioma: CodigoIdioma): ContenidoOraculo {
  const { cartas, numerologia, textos } = paqueteEgipcio(idioma);

  const cartaDeId = (id: string): Carta | undefined => cartas[Number(id.replace('carta', ''))];

  const nombre = (p: Pieza) => {
    const c = cartaDeId(p.id);
    return c ? `${c.numero}. ${c.nombre}` : p.id;
  };

  const ficha = (p: Pieza): Ficha | null => {
    const c = cartaDeId(p.id);
    if (!c) return null;
    const correspondencias = [
      textos.numeroNumerologia(c.numerologia, numerologia[c.numerologia]),
      c.astro,
      c.hebrea ? textos.letraHebrea(c.hebrea) : undefined,
    ]
      .filter(Boolean)
      .join('\n');
    return {
      datos: [
        { etiqueta: textos.arcano, valor: c.arcano === 'mayor' ? textos.mayor : textos.menor },
        { etiqueta: textos.numeroCorto, valor: String(c.numero) },
      ],
      bloques: [
        ...(c.esencia ? [{ titulo: textos.esencia, texto: c.esencia }] : []),
        { titulo: textos.derecha, texto: c.derecho },
        { titulo: textos.invertida, texto: c.invertido },
        { titulo: textos.correspondencias, texto: correspondencias },
      ],
      voz: [c.nombre, c.derecho].join('\n\n'),
    };
  };

  // El consejo del dia nunca sale invertido (regla global), asi que siempre el derecho.
  const consejo = (p: Pieza) => cartaDeId(p.id)?.derecho ?? '';

  const mayores = MAZO_EGIPCIO.filter((p) => cartaDeId(p.id)?.arcano === 'mayor');
  const menores = MAZO_EGIPCIO.filter((p) => cartaDeId(p.id)?.arcano === 'menor');

  // Los 56 menores van en cuatro series de 14 (23-36, 37-50, 51-64, 65-78), como
  // los cuatro palos del Tarot: son los bloques que se desbloquean de a uno, y de
  // 56 cartas de una sola vez seria un bloque enorme. Este mazo no tiene palos,
  // asi que las series se nombran por su rango de numeros.
  const SERIES = 4;
  const porSerie = Math.ceil(menores.length / SERIES);
  const seriesMenores = Array.from({ length: SERIES }, (_, i) =>
    menores.slice(i * porSerie, (i + 1) * porSerie)
  )
    .filter((piezas) => piezas.length > 0)
    .map((piezas) => ({
      id: `menores-${piezas[0].numero}`,
      grupo: textos.arcanosMenores,
      titulo: textos.serie(piezas[0].numero, piezas[piezas.length - 1].numero),
      piezas,
    }));

  const secciones = [
    { id: 'mayores', titulo: textos.arcanosMayores, piezas: mayores },
    ...seriesMenores,
  ];

  return {
    reverso: DORSO_EGIPCIO,
    secciones,
    nombre,
    ficha,
    // Para el Reto: las claves de la carta derecha.
    quiz: (p) => {
      const c = cartaDeId(p.id);
      return c ? { claves: c.claves } : null;
    },
    consejo,
    proximamente: textos.proximamente,
    // Elegir 1 de 3 dadas vuelta y voltear (como el Tarot).
    consejoModo: 'elegir',
    invierte: false,
  };
}
