// Consulta SIMBOLICA de los significados de los odus (no es el jogo de buzios,
// que es un ritual sagrado que realizan personas iniciadas). Convencion de
// nombres: dilogun (yoruba/cubana).

export type Tema = 'amor' | 'trabajo' | 'dinero' | 'general';

// Orientacion que define la segunda tirada: a favor (ire) o como desafio (osogbo).
export type Orientacion = 'favorable' | 'desafio';

export interface Odu {
  // 1..16, segun la cantidad de cauries "abiertos" (boca arriba) que lo invocan.
  numero: number;
  nombre: string;
  palabrasClave: string[];
  // Significado del odu, matizado por el tema de la pregunta.
  significado: Record<Tema, string>;
  // Matiz segun la orientacion de la segunda tirada.
  orientacion: Record<Orientacion, string>;
}

export type BaseOdus = Record<number, Odu>;
