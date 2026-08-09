import type { OraculoModulo } from '../tipos';
import { MAZO_TAROT } from './mazo';
import { crearContenidoTarot } from './contenido';
import { lecturaTarot, materialTarot } from './lectura';

const tarot: OraculoModulo = {
  id: 'tarot',
  nombreKey: 'oraculos.tarot.nombre',
  acento: '#5C86C4', // azul
  domo: require('../../../assets/oraculos/tarot/domo.webp'),
  fondo: require('../../../assets/oraculos/tarot/fondo.webp'),
  icono: require('../../../assets/oraculos/tarot/icono.webp'),
  mazo: MAZO_TAROT,
  // Tira en cruz de 5 (default del flujo) y arma su lectura con el motor propio.
  lectura: lecturaTarot,
  // Y el mismo contenido en crudo, por si la IA puede redactarla mejor.
  material: materialTarot,
  contenido: crearContenidoTarot,
};

export default tarot;
