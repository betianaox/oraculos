// Modelos que montam UMA oração combinando as três runas, na ordem em que
// saíram. Genéricos: o significado específico já vem nos fragmentos.
//
// Marcadores: {runa1} {runa2} {runa3} = nomes das runas (ver nombres.ts)
//             {frag1} {frag2} {frag3} = fragmentos de content/pt/fragmentos/<tema>.ts
export const conectores: string[] = [
  '{runa1} traz {frag1}, {runa2} soma {frag2}, e {runa3} fecha a cena com {frag3}.',
  'Entre {runa1} e {runa2}, {frag1} aparece junto com {frag2}, enquanto {runa3} acrescenta {frag3}.',
  '{runa1} aponta para {frag1}, a isso se soma, por meio de {runa2}, {frag2}, e {runa3} termina mostrando {frag3}.',
  'A combinação de {runa1}, {runa2} e {runa3} fala de {frag1}, de {frag2} e, sobretudo, de {frag3}.',
  'Primeiro vem {frag1} por meio de {runa1}, depois {frag2} graças a {runa2}, e tudo se completa com {frag3}, que {runa3} traz.',
  '{runa1} contribui com {frag1}, e essa energia se entrelaça com {frag2} de {runa2} e com {frag3} de {runa3}.',
];
