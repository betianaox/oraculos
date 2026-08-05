import type { Orientacion } from './content/types';

// Mecanica simbolica de la consulta: dos tiradas de 16 cauries.
//  - 1ra: la cantidad de cauries "abiertos" (boca arriba) invoca el odu (1..16).
//  - 2da: su cantidad de abiertos define la orientacion (a favor / desafio).
// NO reproduce el jogo de buzios: es un conteo simbolico para relacionar el
// significado del odu con la pregunta.

export interface CaidaBuzios {
  caras1: boolean[]; // 16 · true = abierto (primera tirada)
  abiertos1: number;
  odu: number; // 1..16
  caras2: boolean[]; // 16 · segunda tirada (orientacion)
  abiertos2: number;
  orientacion: Orientacion;
}

const tirar16 = (rnd: () => number): boolean[] =>
  Array.from({ length: 16 }, () => rnd() < 0.5);

/**
 * Una consulta completa. `rnd` se inyecta para poder testear de forma
 * determinista.
 */
export function tirarBuzios(rnd: () => number = Math.random): CaidaBuzios {
  const caras1 = tirar16(rnd);
  const abiertos1 = caras1.filter(Boolean).length;
  // 0 abiertos se pliega al 16 (los 16 cauries "cerrados" tambien hablan pleno).
  const odu = abiertos1 === 0 ? 16 : abiertos1;

  const caras2 = tirar16(rnd);
  const abiertos2 = caras2.filter(Boolean).length;
  const orientacion: Orientacion = abiertos2 >= 8 ? 'favorable' : 'desafio';

  return { caras1, abiertos1, odu, caras2, abiertos2, orientacion };
}
