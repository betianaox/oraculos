// O tecido entre as runas e a pessoa.
//
// Aqui as runas NÃO são nomeadas: a pessoa as vê na tela, e o que espera ler é
// o que elas dizem sobre a sua pergunta, não a definição de cada uma.
//
// Placeholders: {frag1} {frag2} {frag3} = fragmentos de fragmentos/<tema>.ts
//
// ATENÇÃO: os fragmentos são orações curtas de forma variável. Estes modelos
// usam dois-pontos ou vírgula para aceitar todas sem quebrar a frase.

/** Fecha o primeiro parágrafo: a situação, com as duas primeiras runas. */
export const situacion: string[] = [
  'No fundo algo se move: {frag1}. E junto disso, {frag2}.',
  'O que cerca o assunto: {frag1}. Sustentando tudo, {frag2}.',
  'Primeiro aparece isto: {frag1}. E atrás, {frag2}.',
  'Há duas coisas em jogo: {frag1}, e também {frag2}.',
  'O que se vê de cara: {frag1}. O que pulsa embaixo: {frag2}.',
];

/**
 * Segundo parágrafo: a terceira runa, a única que olha para frente. Com um
 * matiz antecipatório, sempre como tendência, nunca como fato consumado.
 */
export const cierre: string[] = [
  'E adiante se desenha isto: {frag3}.',
  'O que vem aponta nesta direção: {frag3}.',
  'Se nada for forçado, o próximo se insinua assim: {frag3}.',
  'No horizonte próximo já se anuncia {frag3}.',
  'Tudo indica que o que vem a seguir traga {frag3}.',
];
