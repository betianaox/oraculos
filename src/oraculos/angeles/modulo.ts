import type { OraculoModulo } from '../tipos';
import { MAZO_ANGELES } from './mazo';
import { crearContenidoAngeles } from './contenido';
import { lecturaAngeles } from './lectura';

const angeles: OraculoModulo = {
  id: 'angeles',
  nombreKey: 'oraculos.angeles.nombre',
  acento: '#5BA69B', // verde-agua apagado
  domo: require('../../../assets/oraculos/angeles/domo.webp'),
  fondo: require('../../../assets/oraculos/angeles/fondo.webp'),
  icono: require('../../../assets/oraculos/angeles/icono.webp'),
  mazo: MAZO_ANGELES,
  // Tira en cruz de 5 (default del flujo) y arma su lectura mística propia.
  lectura: lecturaAngeles,
  contenido: crearContenidoAngeles,
};

export default angeles;
