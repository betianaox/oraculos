import type { OraculoModulo } from '../tipos';
import { MAZO_BUZIOS } from './mazo';
import { crearContenidoBuzios } from './contenido';

// Consulta simbolica de los odus (NO es el jogo de buzios, ritual sagrado que
// realizan personas iniciadas). Tirada propia: doble caida de 16 cauries.
const buzios: OraculoModulo = {
  id: 'buzios',
  nombreKey: 'oraculos.buzios.nombre',
  acento: '#8A909A', // gris plateado, un poco mas claro para que el degrade se note
  domo: require('../../../assets/oraculos/buzios/domo.webp'),
  fondo: require('../../../assets/oraculos/buzios/fondo.webp'),
  icono: require('../../../assets/oraculos/buzios/icono.webp'),
  mazo: MAZO_BUZIOS, // solo para la wiki (Aprender + Consejo del dia)
  contenido: crearContenidoBuzios,
  tiradaPropia: true, // la caida de cauries es propia; no usa el flujo compartido
};

export default buzios;
