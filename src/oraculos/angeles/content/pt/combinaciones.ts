// Notas das combinações de Anjos em português. Os pares vivem em
// content/combinaciones.ts; aqui só o texto de cada um.
//
// As notas NÃO nomeiam as cartas, como o resto da leitura: a pessoa as tem na
// frente e o que espera ler é o que dizem sobre o caso dela. São escritas para
// engatar depois de "Um sinal especial: ", então começam em minúscula.
//
// ── O QUE UMA NOTA NÃO PODE DIZER ────────────────────────────────────────
// O baralho original traz várias combinações que não se usam como estão:
//
//   · SAÚDE. Fica de fora do app por risco legal, e um aviso do tipo "preste
//     atenção à saúde" é justamente o que um oráculo não pode fazer: alarmar
//     sem poder sustentar nada. Essas notas são reenquadradas para o cuidado
//     consigo, que é o que se quer dizer.
//   · GRAVIDEZ. "Anuncia a chegada de uma gravidez" é uma previsão concreta
//     sobre o corpo de uma pessoa. Não se faz.
//   · JUÍZOS SOBRE A VIDA DE NINGUÉM. O baralho traz uma nota sobre "filhos
//     nascidos fora do casamento"; foi retirada, sem substituição.
export const NOTAS_COMBINACIONES_PT: Record<string, string> = {
  '3-56': 'há um cruzamento que fala de algo fértil por vir, de algo que começa e promete.',
  '3-57': 'algo se cruza aqui para anunciar uma etapa fértil, das que dão fruto.',
  '20-67': 'aparece um pedido suave de que você se cuide um pouco mais do que vem fazendo.',
  '20-76': 'há um cruzamento que pede para baixar a bola e se cuidar, sem dramatizar nada.',
  '31-67': 'há um cruzamento que fala de uma paixão intensa; se dura ou não vai depender de como segue o conjunto.',
  '31-49': 'algo se cruza aqui anunciando uma boa fase e gente que soma.',
  '38-67': 'há algo da intimidade que pede cuidado e não convém apressar.',
  '38-68': 'aparece um chamado a se tratar melhor, com o descanso que você vem adiando.',
  '38-70': 'acende um sinal de que alguém em volta não está jogando limpo.',
  '38-73': 'este cruzamento aponta para algo que trava e demora mais do que o esperado.',
};

/** Como a nota é introduzida dentro do último parágrafo. */
export const PREFIJO_COMBINACION_PT = 'Um sinal especial:';
