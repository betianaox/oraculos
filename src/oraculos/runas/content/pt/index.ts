import type { PaqueteContenido } from '../paquete';
import { WIKI_RUNAS_PT } from './wiki';
import { aperturasAbiertas, aperturasCerradas } from './aperturas';
import { cierre, situacion } from './conectores';
import { consejoDelDia } from './consejoDelDia';
import { consejos } from './consejos';
import { ecoTercero, ecoTiempo } from './eco';
import { amor } from './fragmentos/amor';
import { dinero } from './fragmentos/dinero';
import { general } from './fragmentos/general';
import { trabajo } from './fragmentos/trabajo';

// Pacote de conteúdo em português.
export const paquetePt: PaqueteContenido = {
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  situacion,
  cierre,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
  wiki: WIKI_RUNAS_PT,
};
