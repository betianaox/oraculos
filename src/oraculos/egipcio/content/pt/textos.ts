// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { TextosEgipcio } from '../paquete';

// Rotulos de la ficha del Tarot Egipcio en español. Antes vivian sueltos en
// contenido.ts, donde no habia forma de traducirlos.
export const TEXTOS_PT: TextosEgipcio = {
  arcanosMayores: 'Arcanos maiores',
  arcanosMenores: 'Arcanos menores',
  serie: (desde, hasta) => `${desde} a ${hasta}`,
  arcano: 'Arcano',
  mayor: 'Maior',
  menor: 'Menor',
  numeroCorto: 'N°',
  esencia: 'Essência',
  derecha: 'Direita',
  invertida: 'Invertida',
  correspondencias: 'Correspondências',
  numeroNumerologia: (n, texto) => `Número ${n}: ${texto}`,
  letraHebrea: (letra) => `Letra hebraica ${letra}`,
  proximamente: 'Conteúdo em breve',
};
