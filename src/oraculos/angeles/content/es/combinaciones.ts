// Notas de las combinaciones de Ángeles en español. Los pares viven en
// content/combinaciones.ts; acá solo el texto de cada uno.
//
// Las notas NO nombran las cartas, igual que el resto de la lectura: la persona
// las tiene delante y lo que espera leer es qué dicen sobre su caso. Se redactan
// para engancharse después de "Una señal especial: ", así que empiezan en
// minúscula.
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
export const NOTAS_COMBINACIONES_ES: Record<string, string> = {
  '3-56': 'hay un cruce que habla de algo fértil por venir, de algo que empieza y promete.',
  '3-57': 'algo se cruza acá para anunciar una etapa fértil, de las que dan fruto.',
  '20-67': 'aparece un pedido suave de que te cuides un poco más de lo que venís haciendo.',
  '20-76': 'hay un cruce que pide bajar un cambio y cuidarte, sin dramatizar nada.',
  '31-67': 'hay un cruce que habla de una pasión intensa; que perdure dependerá de cómo siga el conjunto.',
  '31-49': 'algo se cruza acá anunciando una buena racha y gente que suma.',
  '38-67': 'hay algo de la intimidad que pide cuidado y no conviene apurar.',
  '38-68': 'aparece un llamado a tratarte mejor, con el descanso que venís postergando.',
  '38-70': 'se enciende una señal de que alguien alrededor no está jugando limpio.',
  '38-73': 'este cruce señala algo que se frena y se demora más de lo esperado.',
};

/** Cómo se introduce la nota dentro del último párrafo. */
export const PREFIJO_COMBINACION_ES = 'Una señal especial:';
