import type { TextosBuzios } from '../paquete';

// Rotulos de la ficha de Buzios en español. Antes estaban escritos dentro de
// contenido.ts, donde no habia forma de traducirlos.
export const TEXTOS_ES: TextosBuzios = {
  seccionOdus: 'Los odus',
  cauries: 'Cauríes',
  abiertos: (n) => `${n} abiertos`,
  claves: 'Claves',
  elMomento: 'El momento',
  enAmor: 'En el amor',
  enTrabajo: 'En el trabajo',
  enDinero: 'En lo económico',
  aFavor: 'A favor (ire)',
  comoDesafio: 'Como desafío (osogbo)',
  proximamente: 'Contenido próximamente',
  primeraTirada: 'Primera tirada…',
  segundaTirada: 'Segunda tirada…',
};
