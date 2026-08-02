import type { OraculoModulo } from '../tipos';
import { MAZO_TAROT } from './mazo';
import { crearContenidoTarot } from './contenido';

const tarot: OraculoModulo = {
  id: 'tarot',
  nombreKey: 'oraculos.tarot.nombre',
  acento: '#5C86C4', // azul
  domo: require('../../../assets/oraculos/tarot/domo.webp'),
  fondo: require('../../../assets/oraculos/tarot/fondo.webp'),
  icono: require('../../../assets/oraculos/tarot/icono.webp'),
  mazo: MAZO_TAROT,
  contenido: crearContenidoTarot,
};

export default tarot;
