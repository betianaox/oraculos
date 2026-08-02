// Una "pieza" es la unidad que se tira: una carta de tarot, una carta de
// angeles, una runa, etc. Es lo minimo que el flujo compartido (tirada +
// lectura) necesita para mostrarla. Cada oraculo aporta su mazo de piezas.

export interface Pieza {
  id: string;
  numero: number;
  imagen: number | null; // require(...) del webp (frente), o null -> placeholder
  // Dorso propio de la pieza (runas: el arte "-r"), para usar como reverso en
  // el sorteo, el consejo o la wiki. La invertida NO usa esto: se rota 180.
  dorso?: number;
  // Nunca sale invertida (runas simetricas: gebo, ingwaz, dagaz, isa).
  simetrica?: boolean;
  // Relacion alto/ancho del arte (cartas ~1.8; runas ~1). Default: RATIO_PIEZA.
  ratio?: number;
}

export type Posicion = 'normal' | 'invertida';

export interface PiezaTirada {
  pieza: Pieza;
  posicion: Posicion;
}

/**
 * Como tira un oraculo: la disposicion (cruz de 5, columna de 3...) y su sorteo
 * propio. Si el oraculo no la define, se usa la cruz de 5 por defecto.
 */
export interface EspecieTirada {
  disposicion: 'cruz' | 'fila';
  tirar: (mazo: Pieza[]) => PiezaTirada[];
  /** Efecto de sorteo: las piezas titilan al azar y se revelan una por una. */
  sorteo?: boolean;
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

/** Tres piezas distintas al azar, para ofrecer a elegir en el Consejo del dia. */
export function tresAlAzar(mazo: Pieza[], aleatorio: () => number = Math.random): Pieza[] {
  const piezas = [...mazo];
  for (let i = 0; i < 3; i++) {
    const j = i + Math.floor(aleatorio() * (piezas.length - i));
    [piezas[i], piezas[j]] = [piezas[j], piezas[i]];
  }
  return piezas.slice(0, 3);
}
