import type { OraculoModulo } from '../tipos';
import { MAZO_ICHING } from './mazo';
import { crearContenidoIChing } from './contenido';

const iching: OraculoModulo = {
  id: 'iching',
  // Solo espanol: su contenido todavia no esta traducido y una consulta en
  // otro idioma saldria entera en espanol. Ver `idiomas` en OraculoModulo.
  idiomas: ['es'],
  nombreKey: 'oraculos.iching.nombre',
  acento: '#CB9A3C', // dorado ambar
  domo: require('../../../assets/oraculos/iching/domo.webp'),
  fondo: require('../../../assets/oraculos/iching/fondo.webp'),
  icono: require('../../../assets/oraculos/iching/icono.webp'),
  mazo: MAZO_ICHING, // solo para la wiki (Aprender + Consejo del dia)
  contenido: crearContenidoIChing,
  tiradaPropia: true, // la tirada de monedas es propia; no usa el flujo compartido
};

export default iching;
