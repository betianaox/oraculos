// Forma de un banco de fragmentos de Ángeles, indexado por número de carta
// (1..78).
//
// `invertida` es opcional porque el mazo declara ocho cartas SIN REVÉS —13, 14,
// 23, 26, 32, 39, 44 y 77—: no tienen lectura invertida y no se les inventa
// una. Cuando alguna de esas sale del revés, el motor usa su lectura derecha.
//
// El resto lleva tres variantes por posición, igual que Tarot y Egipcio. Antes
// muchas invertidas tenían una sola: el motor no repetía (acortaba la oración),
// pero la carta decía siempre lo mismo y se notaba a la segunda lectura.
export type FragmentosDeTemaAngel = Record<
  number,
  { normal: string[]; invertida?: string[] }
>;
