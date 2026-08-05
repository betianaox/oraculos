import type { Tema } from '@/pregunta/tipos';
import { ODUS_ES } from './content/es/odus';
import type { CaidaBuzios } from './tirada';

/**
 * Arma los parrafos de la consulta a partir de la caida. Es deterministica: sale
 * del significado escrito del odu, matizado por el tema de la pregunta y por la
 * orientacion de la segunda tirada.
 */
export function lecturaBuzios(caida: CaidaBuzios, tema: Tema): string[] {
  const odu = ODUS_ES[caida.odu];
  const parrafos: string[] = [];

  parrafos.push(`Cayeron ${caida.abiertos1} cauríes abiertos: habla el odu ${odu.nombre}.`);
  parrafos.push(odu.significado[tema]);

  const etiqueta =
    caida.orientacion === 'favorable' ? 'a favor (ire)' : 'como desafío (osogbo)';
  parrafos.push(
    `La segunda tirada (${caida.abiertos2} abiertos) marca una orientación ${etiqueta}:`
  );
  parrafos.push(odu.orientacion[caida.orientacion]);

  return parrafos;
}
