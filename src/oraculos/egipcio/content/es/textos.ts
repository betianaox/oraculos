import type { TextosEgipcio } from '../paquete';

// Rotulos de la ficha del Tarot Egipcio en español. Antes vivian sueltos en
// contenido.ts, donde no habia forma de traducirlos.
export const TEXTOS_ES: TextosEgipcio = {
  arcanosMayores: 'Arcanos mayores',
  arcanosMenores: 'Arcanos menores',
  serie: (desde, hasta) => `${desde} a ${hasta}`,
  arcano: 'Arcano',
  mayor: 'Mayor',
  menor: 'Menor',
  numeroCorto: 'N°',
  esencia: 'Esencia',
  derecha: 'Derecha',
  invertida: 'Invertida',
  correspondencias: 'Correspondencias',
  numeroNumerologia: (n, texto) => `Número ${n}: ${texto}`,
  letraHebrea: (letra) => `Letra hebrea ${letra}`,
  proximamente: 'Contenido próximamente',
};
