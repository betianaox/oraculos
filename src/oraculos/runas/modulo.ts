import type { OraculoModulo } from '../tipos';
import { MAZO_RUNAS } from './mazo';
import { TIRADA_RUNAS } from './tirada';
import { lecturaRunas } from './lectura';
import { crearContenidoRunas } from './contenido';

const runas: OraculoModulo = {
  id: 'runas',
  nombreKey: 'oraculos.runas.nombre',
  acento: '#7E68B4', // violeta
  domo: require('../../../assets/oraculos/runas/domo.webp'),
  fondo: require('../../../assets/oraculos/runas/fondo.webp'),
  icono: require('../../../assets/oraculos/runas/icono.webp'),
  mazo: MAZO_RUNAS,
  tirada: TIRADA_RUNAS,
  lectura: lecturaRunas,
  contenido: crearContenidoRunas,
};

export default runas;
