import type { CodigoIdioma } from '@/i18n/idiomas';
import type { BaseHexagramas } from './types';
import { HEXAGRAMAS_ES } from './es/hexagramas';
import { TEXTOS_ES } from './es/textos';

// ─────────────────────────────────────────────────────────────────────────
// Contenido del I Ching por idioma.
//
// Hoy solo existe el español, y el oraculo se ofrece unicamente en ese idioma
// (ver `idiomas` en modulo.ts): sus 64 hexagramas con dictamen, imagen,
// significado por tema y 384 lineas cambiantes son el 62% de todo el material
// de la app, y traducirlos no entra en el presupuesto por ahora.
//
// Aun asi se arma con la misma forma que Runas, Buzios, Egipcio y Angeles. No
// es ceremonia: si algun dia se traduce, alcanza con crear la carpeta del
// idioma, sumar una linea a PAQUETES y agregar el codigo a `idiomas` en el
// modulo. Sin eso habria que reescribir contenido.ts entero, que es
// justamente el trabajo que este esquema evita.
// ─────────────────────────────────────────────────────────────────────────

export interface TextosIching {
  seccionHexagramas: string;
  grupoHexagramas: string;
  /** Titulo de un bloque de hexagramas: "1 a 16". */
  serie: (desde: number, hasta: number) => string;
  trigramaSuperior: string;
  trigramaInferior: string;
  nombreAlterno: string;
  claves: string;
  dictamen: string;
  imagen: string;
  elMomento: string;
  enAmor: string;
  enTrabajo: string;
  enDinero: string;
  proximamente: string;
  /** Rotulo de cada una de las 6 lineas, de abajo hacia arriba. */
  lineas: Record<number, string>;
  conLineasCambiantes: string;
  lanzandoMonedas: string;
  sinLineasCambiantes: string;
}

export interface PaqueteIching {
  hexagramas: BaseHexagramas;
  textos: TextosIching;
}

const es: PaqueteIching = { hexagramas: HEXAGRAMAS_ES, textos: TEXTOS_ES };

// Por ahora solo español. El oraculo tampoco se ofrece en otros idiomas.
const PAQUETES: Partial<Record<CodigoIdioma, PaqueteIching>> = { es };

export function paqueteIching(idioma: CodigoIdioma): PaqueteIching {
  return PAQUETES[idioma] ?? es;
}
