import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo, Ficha, Chip, Bloque } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import { traducir } from '@/i18n';
import { MAZO_ANGELES } from './mazo';
import { REVERSO_ANGELES } from './imagenes';
import { paqueteAngeles } from './content/paquete';

/**
 * Contenido de Angeles armado en el idioma activo. Registro mistico (distinto
 * del didactico del Tarot). Se llena carta por carta en content/<idioma>/wiki.ts;
 * las que todavia no tienen ficha caen a "proximamente" y a un consejo
 * generico, sin tocar las pantallas. Lo que no este traducido cae a español
 * (ver content/paquete.ts).
 */
export function crearContenidoAngeles(idioma: CodigoIdioma): ContenidoOraculo {
  const { wiki, etiquetas: et, secciones: SECCIONES_ANGELES_ES } = paqueteAngeles(idioma);

  const nombre = (p: Pieza) =>
    wiki[p.numero]?.nombre ?? `${traducir('aprender.carta', idioma)} ${p.numero}`;

  const ficha = (p: Pieza): Ficha | null => {
    const f = wiki[p.numero];
    if (!f) return null;

    const datos: Chip[] = [{ etiqueta: et.coro, valor: f.grupo }];
    if (f.signo) datos.push({ etiqueta: et.signo, valor: f.signo });
    if (f.regente) datos.push({ etiqueta: et.regente, valor: f.regente });

    const claves: Chip[] = [{ etiqueta: et.derecho, valor: f.claves.derecho.join(' · ') }];
    if (f.claves.invertido) {
      claves.push({ etiqueta: et.invertido, valor: f.claves.invertido.join(' · ') });
    }

    const bloques: Bloque[] = [
      { titulo: et.claves, chips: claves },
      { titulo: et.presencia, texto: f.presencia },
      { titulo: et.derecho, texto: f.derecho },
    ];
    if (f.invertido) bloques.push({ titulo: et.invertido, texto: f.invertido });
    if (f.encuentros) bloques.push({ titulo: et.encuentros, texto: f.encuentros });

    const voz = [
      f.nombre,
      `${et.presencia}. ${f.presencia}`,
      `${et.derecho}. ${f.derecho}`,
      f.invertido ? `${et.invertido}. ${f.invertido}` : '',
      f.encuentros ? `${et.encuentros}. ${f.encuentros}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');

    return { datos, bloques, voz };
  };

  const secciones = SECCIONES_ANGELES_ES.map((s) => ({
    id: s.id,
    titulo: s.titulo,
    piezas: MAZO_ANGELES.filter((p) => p.numero >= s.desde && p.numero <= s.hasta),
  }));

  return {
    reverso: REVERSO_ANGELES,
    secciones,
    nombre,
    ficha,
    // Para el Reto: las claves del angel derecho.
    quiz: (p) => {
      const f = wiki[p.numero];
      return f ? { claves: f.claves.derecho } : null;
    },
    consejo: () => traducir('aprender.consejoGenerico', idioma),
    proximamente: traducir('aprender.proximamente', idioma),
  };
}
