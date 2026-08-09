import type { TextosIching } from '../paquete';

// Rotulos de la ficha del I Ching en español. Antes vivian sueltos en
// contenido.ts, donde no habia forma de traducirlos.
//
// El I Ching se ofrece SOLO en español por ahora (ver `idiomas` en su modulo),
// asi que este es el unico paquete que existe. Se arma igual que el de los
// demas oraculos a proposito: si algun dia se traduce, es agregar la carpeta
// del idioma y una linea, sin tocar nada mas.
export const TEXTOS_ES: TextosIching = {
  seccionHexagramas: 'Hexagramas',
  grupoHexagramas: 'Hexagramas',
  serie: (desde, hasta) => `${desde} a ${hasta}`,
  trigramaSuperior: 'Superior',
  trigramaInferior: 'Inferior',
  nombreAlterno: 'Nombre',
  claves: 'Claves',
  dictamen: 'El Dictamen',
  imagen: 'La Imagen',
  elMomento: 'El momento',
  enAmor: 'En el amor',
  enTrabajo: 'En el trabajo',
  enDinero: 'En lo económico',
  proximamente: 'Contenido próximamente',
  /** Las 6 lineas del hexagrama, de abajo hacia arriba. */
  lineas: {
    1: 'Línea 1 · inferior',
    2: 'Línea 2',
    3: 'Línea 3',
    4: 'Línea 4',
    5: 'Línea 5',
    6: 'Línea 6 · superior',
  },
  lanzandoMonedas: 'Lanzando las monedas…',
  conLineasCambiantes: 'con líneas cambiantes',
  sinLineasCambiantes: 'sin líneas cambiantes',
};
