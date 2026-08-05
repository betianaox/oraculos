import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { CARTAS_ES } from './content/es/cartas';
import type { Carta } from './content/types';
import { NUMEROLOGIA } from './content/es/numerologia';
import { MAZO_EGIPCIO } from './mazo';
import { DORSO_EGIPCIO } from './imagenes';

function cartaDeId(id: string): Carta | undefined {
  return CARTAS_ES[Number(id.replace('carta', ''))];
}

/** Contenido del Tarot Egipcio (Aprender + Consejo del dia). Por ahora en español. */
export function crearContenidoEgipcio(_idioma: CodigoIdioma): ContenidoOraculo {
  const nombre = (p: Pieza) => {
    const c = cartaDeId(p.id);
    return c ? `${c.numero}. ${c.nombre}` : p.id;
  };

  const ficha = (p: Pieza): Ficha | null => {
    const c = cartaDeId(p.id);
    if (!c) return null;
    const correspondencias = [
      `Número ${c.numerologia}: ${NUMEROLOGIA[c.numerologia]}`,
      c.astro,
      c.hebrea ? `Letra hebrea ${c.hebrea}` : undefined,
    ]
      .filter(Boolean)
      .join('\n');
    return {
      datos: [
        { etiqueta: 'Arcano', valor: c.arcano === 'mayor' ? 'Mayor' : 'Menor' },
        { etiqueta: 'N°', valor: String(c.numero) },
      ],
      bloques: [
        ...(c.esencia ? [{ titulo: 'Esencia', texto: c.esencia }] : []),
        { titulo: 'Derecha', texto: c.derecho },
        { titulo: 'Invertida', texto: c.invertido },
        { titulo: 'Correspondencias', texto: correspondencias },
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
      grupo: 'Arcanos menores',
      titulo: `${piezas[0].numero} a ${piezas[piezas.length - 1].numero}`,
      piezas,
    }));

  const secciones = [
    { id: 'mayores', titulo: 'Arcanos mayores', piezas: mayores },
    ...seriesMenores,
  ];

  return {
    reverso: DORSO_EGIPCIO,
    secciones,
    nombre,
    ficha,
    consejo,
    proximamente: 'Contenido próximamente',
    // Elegir 1 de 3 dadas vuelta y voltear (como el Tarot).
    consejoModo: 'elegir',
    invierte: false,
  };
}
