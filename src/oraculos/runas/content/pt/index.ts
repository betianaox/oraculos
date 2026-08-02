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

// Pacote de conteúdo em português.
export const paquetePt: PaqueteContenido = {
  verbosIndividual: ['traz', 'oferece', 'aponta para', 'soma', 'mostra', 'revela'],
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  conectores,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
};
