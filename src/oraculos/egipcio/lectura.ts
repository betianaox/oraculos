import type { CodigoIdioma } from '@/i18n/idiomas';
import type { PiezaTirada } from '@/flujo/pieza';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import { CARTAS_ES } from './content/es/cartas';

// Rol de cada posicion de la cruz de 5 (indices 0..4 tal como los reparte el
// flujo compartido). El significado de cada carta se toma segun salga derecha o
// invertida.
const ROLES = [
  'Lo que se acerca',
  'El corazón del asunto',
  'Lo que se aleja',
  'Lo que influye desde lo alto',
  'La base de todo',
];

// Orden narrativo de lectura: centro, lo alto, la base, lo que llega, lo que se va.
const ORDEN = [1, 3, 4, 0, 2];

function cartaDeId(id: string) {
  return CARTAS_ES[Number(id.replace('carta', ''))];
}

/**
 * Arma la lectura ensamblando el significado de cada carta de la cruz segun su
 * posicion (derecha/invertida). Deterministica: sale del texto escrito.
 */
export function lecturaEgipcio(
  tirada: PiezaTirada[],
  _tema: Tema,
  _analisis: AnalisisPregunta,
  _idioma: CodigoIdioma
): string[] {
  const parrafos: string[] = [
    'Las cartas se disponen en cruz para tu consulta. Esto revela cada posición:',
  ];

  for (const i of ORDEN) {
    const pt = tirada[i];
    if (!pt) continue;
    const c = cartaDeId(pt.pieza.id);
    if (!c) continue;
    const inv = pt.posicion === 'invertida';
    const sentido = inv ? c.invertido : c.derecho;
    parrafos.push(`${ROLES[i]} — ${c.nombre}${inv ? ' (invertida)' : ''}. ${sentido}`);
  }

  return parrafos;
}
