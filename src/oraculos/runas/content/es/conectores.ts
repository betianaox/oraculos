// Plantillas que arman UNA sola oración combinando las 3 runas de la
// tirada, en el orden en que salieron (sin roles fijos de pasado/presente/
// futuro). Son genéricas: sirven para cualquier tema, porque el contenido
// específico ya viene puesto en los fragmentos.
//
// Placeholders: {runa1} {runa2} {runa3} = nombres de runa (ver nombres.ts)
//               {frag1} {frag2} {frag3} = fragmentos de content/fragmentos/<tema>.ts
export const conectores: string[] = [
  '{runa1} trae {frag1}, {runa2} suma {frag2}, y {runa3} cierra la escena con {frag3}.',
  'Entre {runa1} y {runa2} aparece {frag1} junto con {frag2}, mientras {runa3} agrega {frag3}.',
  '{runa1} señala {frag1}, a eso se le suma, de la mano de {runa2}, {frag2}, y {runa3} termina de mostrar {frag3}.',
  'La combinación de {runa1}, {runa2} y {runa3} habla de {frag1}, de {frag2} y, sobre todo, de {frag3}.',
  'Primero aparece {frag1} de la mano de {runa1}, después {frag2} gracias a {runa2}, y todo se completa con {frag3} que trae {runa3}.',
  '{runa1} aporta {frag1}, y esa energía se entrelaza con {frag2} de {runa2} y con {frag3} de {runa3}.',
];
