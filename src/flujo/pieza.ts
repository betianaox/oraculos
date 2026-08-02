// Una "pieza" es la unidad que se tira: una carta de tarot, una carta de
// angeles, una runa, etc. Es lo minimo que el flujo compartido (tirada +
// lectura) necesita para mostrarla. Cada oraculo aporta su mazo de piezas.

export interface Pieza {
  id: string;
  numero: number;
  imagen: number | null; // require(...) del webp, o null -> placeholder
}

export type Posicion = 'normal' | 'invertida';

export interface PiezaTirada {
  pieza: Pieza;
  posicion: Posicion;
}

// Las invertidas salen menos seguido, para que no aparezcan demasiadas juntas.
const PROB_INVERTIDA = 0.15;

/**
 * Reparte 5 piezas de la cruz: unicas y en orden de slot (0=pos1 … 4=pos5).
 * `aleatorio` se inyecta para poder testear de forma determinista.
 */
export function tirarCruz(mazo: Pieza[], aleatorio: () => number = Math.random): PiezaTirada[] {
  const piezas = [...mazo];
  // Fisher-Yates parcial: mezcla solo lo necesario para sacar 5 unicas.
  for (let i = 0; i < 5; i++) {
    const j = i + Math.floor(aleatorio() * (piezas.length - i));
    [piezas[i], piezas[j]] = [piezas[j], piezas[i]];
  }
  return piezas.slice(0, 5).map((pieza): PiezaTirada => ({
    pieza,
    posicion: aleatorio() < PROB_INVERTIDA ? 'invertida' : 'normal',
  }));
}
