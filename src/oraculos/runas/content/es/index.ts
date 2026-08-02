import type { PaqueteContenido } from '../paquete';
import { aperturasAbiertas, aperturasCerradas } from './aperturas';
import { conectores } from './conectores';
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
  verbosIndividual: ['trae', 'aporta', 'señala', 'suma', 'indica', 'muestra'],
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  conectores,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
};
