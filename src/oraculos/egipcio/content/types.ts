// Tarot Egipcio: 78 cartas (22 arcanos mayores 1..22 + 56 menores 23..78, cada
// menor distinta, sin palos). Los significados son REDACCION PROPIA: parafrasean
// el sentido del folleto sin copiarlo literal.

export type Arcano = 'mayor' | 'menor';

export interface Carta {
  numero: number; // 1..78 (mismo numero del arte y del folleto)
  nombre: string;
  arcano: Arcano;
  claves: string[]; // 3-4 palabras clave (posicion derecha)
  derecho: string; // significado en posicion normal
  invertido: string; // significado en posicion invertida
  // Solo mayores: la esencia ("representa el espiritu...") reescrita.
  esencia?: string;
  // Datos para la ficha de la wiki (reescritos). La letra hebrea es solo de mayores.
  astro?: string;
  hebrea?: string;
  numerologia: number; // el "Numero X" (1..9) del folleto
}

export type BaseCartas = Record<number, Carta>;
