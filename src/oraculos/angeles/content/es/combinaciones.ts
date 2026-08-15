// Combinaciones del mazo de Ángeles: pares de cartas que, al salir juntas en la
// tirada, agregan un matiz propio a la lectura (la gracia distintiva de este
// oráculo frente al Tarot). Se detectan por número de carta, sin importar la
// posición. Solo las que el mazo declara de forma clara.
//
// Las notas NO nombran las cartas, igual que el resto de la lectura: la persona
// las tiene delante y lo que espera leer es qué dicen sobre su caso. Se redactan
// para engancharse después de "Una señal especial: ", así que empiezan en
// minúscula y no repiten esa idea.
//
// ── QUÉ NO PUEDE DECIR UNA NOTA ──────────────────────────────────────────
// El mazo original trae varias combinaciones que acá no se usan tal cual:
//
//   · SALUD. Queda afuera de la app por riesgo legal, y un aviso del tipo
//     "presta atención a la salud" es justamente lo que no puede hacer un
//     oráculo: alarma sin poder sostener nada. Esas notas se reencuadran al
//     cuidado de uno mismo, que es lo que se quiere decir.
//   · EMBARAZOS. "Anuncia la llegada de un embarazo" es una predicción concreta
//     sobre el cuerpo de una persona. No se hace.
//   · JUICIOS SOBRE LA VIDA DE NADIE. El mazo trae una nota sobre "hijos nacidos
//     fuera del matrimonio"; está sacada, no se reemplaza.
//
// Registro: claro antes que elevado, místico sobrio (ver es/bancos.ts).
export interface Combinacion {
  a: number;
  b: number;
  nota: string;
}

export const COMBINACIONES_ANGELES: Combinacion[] = [
  {
    a: 3,
    b: 56,
    nota: 'hay un cruce que habla de algo fértil por venir, de algo que empieza y promete.',
  },
  {
    a: 3,
    b: 57,
    nota: 'algo se cruza acá para anunciar una etapa fértil, de las que dan fruto.',
  },
  {
    a: 20,
    b: 67,
    nota: 'aparece un pedido suave de que te cuides un poco más de lo que venís haciendo.',
  },
  {
    a: 20,
    b: 76,
    nota: 'hay un cruce que pide bajar un cambio y cuidarte, sin dramatizar nada.',
  },
  {
    a: 31,
    b: 67,
    nota: 'hay un cruce que habla de una pasión intensa; que perdure dependerá de cómo siga el conjunto.',
  },
  {
    a: 31,
    b: 49,
    nota: 'algo se cruza acá anunciando una buena racha y gente que suma.',
  },
  {
    a: 38,
    b: 67,
    nota: 'hay algo de la intimidad que pide cuidado y no conviene apurar.',
  },
  {
    a: 38,
    b: 68,
    nota: 'aparece un llamado a tratarte mejor, con el descanso que venís postergando.',
  },
  {
    a: 38,
    b: 70,
    nota: 'se enciende una señal de que alguien alrededor no está jugando limpio.',
  },
  {
    a: 38,
    b: 73,
    nota: 'este cruce señala algo que se frena y se demora más de lo esperado.',
  },
];

/**
 * Devuelve la nota de la primera combinación presente entre los números
 * tirados, o '' si no hay ninguna. Se limita a una para no recargar la lectura.
 */
export function combinacionPresente(numeros: number[]): string {
  const set = new Set(numeros);
  for (const c of COMBINACIONES_ANGELES) {
    if (set.has(c.a) && set.has(c.b)) return c.nota;
  }
  return '';
}
