// Tejido entre las runas y la persona.
//
// Acá NO se nombran las runas: la persona las ve en pantalla, y lo que espera
// leer es qué dicen sobre lo que preguntó, no la definición de cada una.
//
// Placeholders: {frag1} {frag2} {frag3} = fragmentos de fragmentos/<tema>.ts
//
// OJO: los fragmentos son cláusulas cortas de forma variable. Las plantillas
// usan dos puntos o coma para aceptarlas todas sin romperse.

/** Cierre del primer párrafo: la situación, con las dos primeras runas. */
export const situacion: string[] = [
  'De fondo se mueve algo: {frag1}. Y junto a eso, {frag2}.',
  'Lo que rodea el asunto: {frag1}. Sosteniéndolo, {frag2}.',
  'Primero asoma esto: {frag1}. Y detrás, {frag2}.',
  'Hay dos cosas en juego: {frag1}, y también {frag2}.',
  'Lo que se ve de entrada: {frag1}. Lo que late debajo: {frag2}.',
];

/**
 * Segundo párrafo: la tercera runa, la única que mira hacia adelante. Matiz
 * anticipatorio pero en clave de tendencia, nunca como un hecho consumado.
 */
export const cierre: string[] = [
  'Y hacia adelante se perfila esto: {frag3}.',
  'Lo que viene apunta en esta dirección: {frag3}.',
  'Si nada se fuerza, lo próximo se insinúa así: {frag3}.',
  'En el horizonte cercano ya se asoma {frag3}.',
  'Todo apunta a que lo siguiente traiga {frag3}.',
];
