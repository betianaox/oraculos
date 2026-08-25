import type { CodigoIdioma } from '@/i18n/idiomas';
import { traducir } from '@/i18n';
import type { ContenidoOraculo, Ficha } from '@/flujo/contenido';
import type { Pieza, Posicion } from '@/flujo/pieza';
import { obtenerContenido } from './content';
import { obtenerTextos } from './content/textos';
import { nombres } from './content/nombres';
import type { RunaId } from './content/types';
import { MAZO_RUNAS } from './mazo';

/** Contenido de Runas (Aprender + Consejo del dia) en el idioma activo. */
export function crearContenidoRunas(idioma: CodigoIdioma): ContenidoOraculo {
  const tt = obtenerTextos(idioma);
  const paquete = obtenerContenido(idioma);
  const consejos = paquete.consejoDelDia;
  // La wiki sale del paquete del idioma activo, igual que el resto.
  const wiki = paquete.wiki;

  const nombre = (p: Pieza) => nombres[p.id as RunaId];

  const ficha = (p: Pieza): Ficha => {
    const f = wiki[p.id as RunaId];
    return {
      datos: [],
      bloques: [
        {
          titulo: tt.wiki.palabrasClave,
          chips: [
            { etiqueta: tt.wiki.derecho, valor: f.palabrasClave.normal.join(' · ') },
            { etiqueta: tt.wiki.invertido, valor: f.palabrasClave.invertida.join(' · ') },
          ],
        },
        { titulo: tt.wiki.derecho, texto: f.significado.normal },
        { titulo: tt.wiki.invertido, texto: f.significado.invertida },
        { titulo: tt.wiki.simbolismo, texto: f.simbolismo },
      ],
      voz: [
        nombres[p.id as RunaId],
        `${tt.wiki.derecho}. ${f.significado.normal}`,
        `${tt.wiki.invertido}. ${f.significado.invertida}`,
        `${tt.wiki.simbolismo}. ${f.simbolismo}`,
      ].join('\n\n'),
    };
  };

  // Ocho redacciones por runa y posición. La elección sale del sorteo del día
  // (`variante`) y no de un azar nuevo en cada render: antes el texto cambiaba
  // cada vez que se volvía a abrir la pantalla, debajo de un "vuelve mañana".
  const consejo = (p: Pieza, posicion: Posicion, variante: number) => {
    const variantes = consejos[p.id as RunaId]?.[posicion] ?? [];
    return variantes.length > 0 ? variantes[variante % variantes.length] : '';
  };

  return {
    reverso: MAZO_RUNAS[0].dorso ?? 0,
    secciones: [{ id: 'runas', titulo: traducir('oraculos.runas.nombre', idioma), piezas: MAZO_RUNAS }],
    nombre,
    ficha,
    // Para el Reto: las palabras clave de la runa derecha.
    quiz: (p) => {
      const f = wiki[p.id as RunaId];
      return f ? { claves: f.palabrasClave.normal } : null;
    },
    consejo,
    proximamente: tt.wiki.proximamente,
    // Elegir 1 de 3 dadas vuelta y voltear (como las cartas). Cada runa muestra
    // su propio dorso. Nunca sale invertida.
    consejoModo: 'elegir',
    invierte: false,
  };
}
