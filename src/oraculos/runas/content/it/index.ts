import type { PaqueteContenido } from '../paquete';
import { WIKI_RUNAS_ES } from '../es/wiki';
import { aperturasAbiertas, aperturasCerradas } from './aperturas';
import { cierre, situacion } from './conectores';
import { consejoDelDia } from './consejoDelDia';
import { consejos } from './consejos';
import { ecoTercero, ecoTiempo } from './eco';
import { amor } from './fragmentos/amor';
import { dinero } from './fragmentos/dinero';
import { general } from './fragmentos/general';
import { trabajo } from './fragmentos/trabajo';

// Pacchetto di contenuti in italiano.
export const paqueteIt: PaqueteContenido = {
  fragmentos: { amor, trabajo, dinero, general },
  aperturasAbiertas,
  aperturasCerradas,
  situacion,
  cierre,
  consejos,
  ecoTercero,
  ecoTiempo,
  consejoDelDia,
  // El italiano no se ofrece hoy (ver i18n/idiomas.ts) y su wiki nunca se
  // tradujo: cae a la española, como el resto del contenido que le falta.
  wiki: WIKI_RUNAS_ES,
};
