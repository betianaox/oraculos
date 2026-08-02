import type { CodigoIdioma } from '@/i18n/idiomas';
import type { ContenidoOraculo } from '@/flujo/contenido';
import { traducir } from '@/i18n';
import { MAZO_ANGELES } from './mazo';
import { REVERSO_ANGELES } from './imagenes';

/**
 * Contenido de Angeles. Por ahora sin fichas ni consejos por carta (cae a
 * "proximamente" y a un consejo generico); cuando llegue el contenido de las
 * cartas de angeles, se completa aca sin tocar las pantallas.
 */
export function crearContenidoAngeles(idioma: CodigoIdioma): ContenidoOraculo {
  return {
    reverso: REVERSO_ANGELES,
    secciones: [
      { id: 'cartas', titulo: traducir('aprender.seccionCartas', idioma), piezas: MAZO_ANGELES },
    ],
    nombre: (p) => `${traducir('aprender.carta', idioma)} ${p.numero}`,
    consejo: () => traducir('aprender.consejoGenerico', idioma),
    proximamente: traducir('aprender.proximamente', idioma),
  };
}
