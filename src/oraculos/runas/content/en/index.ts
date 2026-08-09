import type { PaqueteContenido } from '../paquete';
import { aperturasIntencion } from './intenciones';
import { WIKI_RUNAS_EN } from './wiki';
import { aperturasAbiertas, aperturasCerradas } from './aperturas';
import { cierre, situacion } from './conectores';
import { consejoDelDia } from './consejoDelDia';
import { consejos } from './consejos';
import { ecoTercero, ecoTiempo } from './eco';
import { amor } from './fragmentos/amor';
import { dinero } from './fragmentos/dinero';
import { general } from './fragmentos/general';
import { trabajo } from './fragmentos/trabajo';

// English content pack.
export const paqueteEn: PaqueteContenido = {
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
  wiki: WIKI_RUNAS_EN,
};
