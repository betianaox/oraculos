import type { PaqueteContenido } from '../paquete';
import { aperturasIntencion } from './intenciones';
import { WIKI_RUNAS_ES } from './wiki';
import { aperturasAbiertas, aperturasCerradas } from './aperturas';
import { cierre, situacion } from './conectores';
import { consejoDelDia } from './consejoDelDia';
import { consejos } from './consejos';
import { ecoTercero, ecoTiempo } from './eco';
import { amor } from './fragmentos/amor';
import { dinero } from './fragmentos/dinero';
import { general } from './fragmentos/general';
import { trabajo } from './fragmentos/trabajo';

// Paquete de contenido en español. Es el idioma de referencia y el fallback
// del resto mientras no estén traducidos.
export const paqueteEs: PaqueteContenido = {
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  aperturasIntencion,
  situacion,
  cierre,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
  wiki: WIKI_RUNAS_ES,
};
