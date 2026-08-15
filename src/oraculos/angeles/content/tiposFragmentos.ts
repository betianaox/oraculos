// Forma de un banco de fragmentos de Ángeles, indexado por número de carta
// (1..78). No depende del idioma: la comparten español, inglés y portugués.
//
// `invertida` es opcional porque el mazo declara ocho cartas SIN REVÉS —13, 14,
// 23, 26, 32, 39, 44 y 77—: no tienen lectura invertida y no se les inventa
// una. Cuando alguna de esas sale del revés, el motor usa su lectura derecha.
//
// El resto lleva tres variantes por posición, igual que Tarot y Egipcio.
export type FragmentosDeTemaAngel = Record<
  number,
  { normal: string[]; invertida?: string[] }
>;

/** Las ocho cartas que el mazo declara sin lectura invertida. */
export const SIN_REVES = [13, 14, 23, 26, 32, 39, 44, 77] as const;
