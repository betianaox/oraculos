import type { OraculoModulo } from '../tipos';
import { MAZO_EGIPCIO } from './mazo';
import { lecturaEgipcio } from './lectura';
import { crearContenidoEgipcio } from './contenido';

const egipcio: OraculoModulo = {
  id: 'egipcio',
  nombreKey: 'oraculos.egipcio.nombre',
  acento: '#A63A2E', // rojizo
  domo: require('../../../assets/oraculos/egipcio/domo.webp'),
  fondo: require('../../../assets/oraculos/egipcio/fondo.webp'),
  icono: require('../../../assets/oraculos/egipcio/icono.webp'),
  mazo: MAZO_EGIPCIO,
  // Tira en cruz de 5 (default del flujo) y arma su lectura con el motor propio.
  lectura: lecturaEgipcio,
  contenido: crearContenidoEgipcio,
};

export default egipcio;
