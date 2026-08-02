import type { EspecieTirada, Pieza, PiezaTirada, Posicion } from '@/flujo/pieza';

function elegirPosicion(pieza: Pieza): Posicion {
  if (pieza.simetrica) return 'normal';
  return Math.random() < 0.5 ? 'normal' : 'invertida';
}

/** 3 runas sin repetir, orientacion normal/invertida al azar (salvo simetricas). */
function tirarTresRunas(mazo: Pieza[]): PiezaTirada[] {
  const disponibles = [...mazo];
  const elegidas: PiezaTirada[] = [];
  for (let i = 0; i < 3; i++) {
    const indice = Math.floor(Math.random() * disponibles.length);
    const [pieza] = disponibles.splice(indice, 1);
    elegidas.push({ pieza, posicion: elegirPosicion(pieza) });
  }
  return elegidas;
}

// Tres runas en fila (una al lado de la otra), con efecto de sorteo.
export const TIRADA_RUNAS: EspecieTirada = {
  disposicion: 'fila',
  tirar: tirarTresRunas,
  sorteo: true,
};
