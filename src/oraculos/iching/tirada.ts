import type { Linea, LineasHexagrama } from './content/types';

// La cara con la inscripcion (4 caracteres) vale 3 = yang; el reverso (2
// caracteres) vale 2 = yin. Es convencion: lo unico que importa es que sea
// consistente. Se tiran 3 monedas por linea, seis veces.
export type CaraMoneda = 'cara' | 'cruz';

export interface LineaTirada {
  valor: Linea; // 0 = yin, 1 = yang (ya resuelto)
  cambiante: boolean; // salio 6 (yin viejo) o 9 (yang viejo)
  monedas: [CaraMoneda, CaraMoneda, CaraMoneda]; // lo que cayo, para mostrarlo
}

export interface TiradaIching {
  lineas: LineasHexagrama; // hexagrama primario (abajo->arriba)
  cambiantes: boolean[]; // 6 · cuales lineas estan en movimiento
  detalle: LineaTirada[]; // 6 · en orden de tirada (abajo->arriba)
  // Hexagrama al que evoluciona si hubo lineas cambiantes; null si no hubo.
  resultante: LineasHexagrama | null;
}

const tirarMoneda = (rnd: () => number): CaraMoneda => (rnd() < 0.5 ? 'cara' : 'cruz');
const valorMoneda = (m: CaraMoneda) => (m === 'cara' ? 3 : 2);

/**
 * Una tirada completa de I Ching por el metodo de las tres monedas.
 * `rnd` se inyecta para poder testear de forma determinista.
 */
export function tirarHexagrama(rnd: () => number = Math.random): TiradaIching {
  const detalle: LineaTirada[] = [];
  const lineas: Linea[] = [];
  const cambiantes: boolean[] = [];

  for (let i = 0; i < 6; i++) {
    const monedas: [CaraMoneda, CaraMoneda, CaraMoneda] = [
      tirarMoneda(rnd),
      tirarMoneda(rnd),
      tirarMoneda(rnd),
    ];
    const suma = monedas.reduce((s, m) => s + valorMoneda(m), 0); // 6..9
    const valor: Linea = suma === 7 || suma === 9 ? 1 : 0; // impar = yang
    const cambiante = suma === 6 || suma === 9; // viejos = en movimiento
    detalle.push({ valor, cambiante, monedas });
    lineas.push(valor);
    cambiantes.push(cambiante);
  }

  const primario = lineas as LineasHexagrama;
  const hayCambio = cambiantes.some(Boolean);
  const resultante = hayCambio
    ? (lineas.map((v, i) => (cambiantes[i] ? ((v ? 0 : 1) as Linea) : v)) as LineasHexagrama)
    : null;

  return { lineas: primario, cambiantes, detalle, resultante };
}
