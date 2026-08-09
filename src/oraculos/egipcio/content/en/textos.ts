// Traducido al inglés desde el original en español con scripts/traducir.js.
import type { TextosEgipcio } from '../paquete';

// Rotulos de la ficha del Tarot Egipcio en español. Antes vivian sueltos en
// contenido.ts, donde no habia forma de traducirlos.
export const TEXTOS_EN: TextosEgipcio = {
  arcanosMayores: 'Major Arcana',
  arcanosMenores: 'Minor Arcana',
  serie: (desde, hasta) => `${desde} to ${hasta}`,
  arcano: 'Arcana',
  mayor: 'Major',
  menor: 'Minor',
  numeroCorto: 'No.',
  esencia: 'Essence',
  derecha: 'Upright',
  invertida: 'Reversed',
  correspondencias: 'Correspondences',
  numeroNumerologia: (n, texto) => `Number ${n}: ${texto}`,
  letraHebrea: (letra) => `Hebrew letter ${letra}`,
  proximamente: 'Content coming soon',
};
