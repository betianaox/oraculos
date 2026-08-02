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

// Pacchetto di contenuti in italiano.
export const paqueteIt: PaqueteContenido = {
  verbosIndividual: ['porta', 'offre', 'indica', 'aggiunge', 'mostra', 'rivela'],
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  conectores,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
};
