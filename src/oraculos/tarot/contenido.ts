import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Chip, Ficha } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { paqueteCartas } from './content/idiomaCartas';
import { obtenerTextos } from './content/textos';
import { CARTAS, CARTA_POR_ID } from './content/cartas/meta';
import { DORSO } from './content/cartas/imagenes';
import { nombreDeCarta } from './lib/nombreCarta';
import type { CartaId, CartaMeta, Palo } from './content/types';

const PALOS: Palo[] = ['bastos', 'copas', 'espadas', 'oros'];

const aPieza = (m: CartaMeta): Pieza => ({ id: m.id, numero: m.numero, imagen: m.imagen });

/** Contenido de Tarot (Aprender + Consejo) armado en el idioma activo. */
export function crearContenidoTarot(idioma: CodigoIdioma): ContenidoOraculo {
  const { nombres, wiki, consejos, consejoGenerico } = paqueteCartas(idioma);
  const tt = obtenerTextos(idioma);

  const nombre = (p: Pieza) =>
    nombreDeCarta(CARTA_POR_ID[p.id as CartaId], nombres, wiki[p.id as CartaId]?.nombre);

  const mayores = CARTAS.filter((c) => c.arcano === 'mayor');
  const secciones = [
    { id: 'mayores', titulo: tt.wiki.arcanosMayores, piezas: mayores.map(aPieza) },
    ...PALOS.map((palo) => ({
      id: palo,
      titulo: nombres.palos[palo],
      piezas: CARTAS.filter((c) => c.palo === palo).map(aPieza),
    })),
  ];

  const ficha = (p: Pieza): Ficha => {
    const m = CARTA_POR_ID[p.id as CartaId];
    const f = wiki[p.id as CartaId];
    const datos: Chip[] = [{ etiqueta: tt.wiki.numero, valor: String(m.numero) }];
    if (m.elemento) datos.push({ etiqueta: tt.wiki.elemento, valor: nombres.elementos[m.elemento] });
    if (m.palo) datos.push({ etiqueta: 'Palo', valor: nombres.palos[m.palo] });

    if (!f) return { datos, bloques: [], voz: '' };

    return {
      datos,
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
        nombre(p),
        `${tt.wiki.derecho}. ${f.significado.normal}`,
        `${tt.wiki.invertido}. ${f.significado.invertida}`,
        `${tt.wiki.simbolismo}. ${f.simbolismo}`,
      ].join('\n\n'),
    };
  };

  // Para el Reto: las palabras clave de la carta derecha. Las invertidas se
  // dejan afuera a proposito, para no preguntar por dos caras de lo mismo.
  const quiz = (p: Pieza) => {
    const f = wiki[p.id as CartaId];
    return f ? { claves: f.palabrasClave.normal } : null;
  };

  return {
    reverso: DORSO,
    secciones,
    nombre,
    ficha,
    quiz,
    // Los mayores llevan el numeral romano pintado y los menores muestran
    // tantos simbolos como su numero: la carta se identifica sola.
    quizArteDelata: true,
    consejo: (p) => consejos[p.id as CartaId] ?? consejoGenerico,
    proximamente: tt.wiki.proximamente,
  };
}
