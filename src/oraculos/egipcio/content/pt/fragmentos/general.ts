import type { FragmentosDeTema } from '../../fragmentos';

// Fragmentos do tema 'general' em português para os 22 Arcanos Maiores do Tarô
// Egípcio. É o degrau de fallback: se uma carta não tem fragmento de
// amor/trabalho/dinheiro, a leitura usa estes.
//
// Registro (ver pt/bancos.ts): claro antes de elevado, místico sóbrio. Palavras
// do dia a dia; nada de otimizar, gerir, processo, estrutura, potencial,
// recursos. No máximo uma imagem por oração.
export const FRAGMENTOS_GENERAL_PT: FragmentosDeTema = {
  // 1 · O Mago
  1: {
    normal: [
      'ter com o quê e saber usar',
      'a mão firme de quem sabe o que está fazendo',
      'pôr para funcionar algo que até agora só estava guardado',
    ],
    invertida: [
      'saber como e não se animar a começar',
      'uma habilidade usada para o lado errado',
      'dar voltas sem decidir, com tudo à mão',
    ],
  },
  // 2 · A Suma Sacerdotisa
  2: {
    normal: [
      'uma calma que enxerga mais longe do que diz',
      'saber algo por dentro antes de conseguir explicar',
      'a paciência de quem já viu isso antes',
    ],
    invertida: [
      'ficar na superfície de algo que pede fundo',
      'o orgulho que confunde o que parece com o que é',
      'achar que entendeu sem ter olhado direito',
    ],
  },
  // 3 · A Imperatriz
  3: {
    normal: [
      'algo que dá fruto e se nota',
      'um terreno fértil, onde o que se planta cresce',
      'saber cuidar e fazer crescer o que é seu',
    ],
    invertida: [
      'algo que não pega por mais que você regue',
      'vontade de criar que não acha onde',
      'um descuido que deixa murchar o que estava vivo',
    ],
  },
  // 4 · O Imperador
  4: {
    normal: [
      'um chão firme onde se apoiar',
      'pôr ordem e sustentar',
      'alguém que organiza e protege, ou essa parte sua que faz isso',
    ],
    invertida: [
      'uma firmeza que virou rigidez',
      'depender de outro para o que você poderia sustentar sozinho',
      'uma autoridade que está caindo aos pedaços',
    ],
  },
  // 5 · O Hierofante
  5: {
    normal: [
      'se apoiar no de sempre, que por algo funciona',
      'um conselho de quem tem mais estrada',
      'a prudência de não sair do molde ainda',
    ],
    invertida: [
      'quebrar o molde e fazer do seu jeito',
      'o incômodo de não se encaixar onde deveria',
      'perder o pé quando o de sempre deixa de servir',
    ],
  },
  // 6 · A Indecisão
  6: {
    normal: [
      'uma escolha do coração que não dá para delegar',
      'um afeto sincero, dos que pedem que você assuma',
      'estar entre o que te eleva e o que te amarra',
    ],
    invertida: [
      'um capricho disfarçado de amor',
      'alguém de fora que se meteu no meio',
      'decidir por vontade o que pedia critério',
    ],
  },
  // 7 · O Carro
  7: {
    normal: [
      'ganhar terreno depois de vir empurrando',
      'sair de algo que parecia travado',
      'um envio que abre caminho',
    ],
    invertida: [
      'um empurrão que bate no próprio limite',
      'algo muito buscado que não saiu',
      'ir aos trancos por querer chegar primeiro',
    ],
  },
  // 8 · A Justiça
  8: {
    normal: [
      'receber o que é devido, nem mais nem menos',
      'algo que enfim se acomoda do lado justo',
      'a balança que se endireita sozinha',
    ],
    invertida: [
      'uma divisão que não foi parelha',
      'pagar mais do que te cabia',
      'um julgamento duro, de outros ou seu, que pesa demais',
    ],
  },
  // 9 · O Eremita
  9: {
    normal: [
      'se afastar um pouco para ver melhor',
      'uma luz pequena mas suficiente para o próximo passo',
      'o conselho de alguém que não fala demais',
    ],
    invertida: [
      'um recolhimento que confunde em vez de esclarecer',
      'um conselho apressado que saiu caro',
      'estar sozinho em algo que não se resolve sozinho',
    ],
  },
  // 10 · A Roda da Fortuna
  10: {
    normal: [
      'uma virada que chega sem ter sido buscada',
      'uma fase que muda para melhor',
      'a roda que gira bem quando você já não esperava',
    ],
    invertida: [
      'uma fase que se virou',
      'um revés que não dependia de você',
      'os mesmos dias se repetindo sem que nada mude',
    ],
  },
  // 11 · A Força
  11: {
    normal: [
      'aguentar de pé sem perder a calma',
      'uma convicção que não se negocia',
      'a firmeza que domina o que parecia mais forte',
    ],
    invertida: [
      'usar a força para se impor e não para sustentar',
      'a energia que se apagou bem na hora da prova',
      'ceder em algo que você sabia que não podia ceder',
    ],
  },
  // 12 · O Apostolado
  12: {
    normal: [
      'soltar algo hoje para ganhar clareza depois',
      'uma pausa forçada que serve mesmo assim',
      'ficar quieto enquanto o de dentro se acomoda',
    ],
    invertida: [
      'não querer soltar nada, nem o que já pesa',
      'ficar no cômodo para não pagar o preço',
      'uma promessa feita para não ter que se mexer',
    ],
  },
  // 13 · A Morte
  13: {
    normal: [
      'um fim que dói e abre caminho',
      'algo que termina pela raiz, queira ou não',
      'deixar para trás o que já cumpriu seu tempo',
    ],
    invertida: [
      'se agarrar a algo que já terminou',
      'uma mudança que vem sendo adiada demais',
      'a quietude de ficar onde já não acontece nada',
    ],
  },
  // 14 · A Temperança
  14: {
    normal: [
      'ir devagar e chegar inteiro',
      'juntar duas coisas que pareciam não combinar',
      'uma calma que organiza todo o resto',
    ],
    invertida: [
      'a pressa que quebra o que ia bem',
      'duas partes que não terminam de se entender',
      'perder a paciência bem antes da hora',
    ],
  },
  // 15 · O Mal
  15: {
    normal: [
      'uma amarra que em parte você escolheu',
      'algo que te tem preso e custa nomear',
      'uma culpa que se cobra sozinha',
    ],
    invertida: [
      'afrouxar uma corrente que parecia impossível',
      'sair de algo que te tinha preso',
      'a trégua depois de muito trancamento',
    ],
  },
  // 16 · A Fragilidade
  16: {
    normal: [
      'um desabamento de uma vez, sem aviso',
      'algo firme que acabou não sendo tanto',
      'um abalo que quebra e deixa o terreno limpo',
    ],
    invertida: [
      'um desabamento que vem sendo adiado',
      'uma tensão que se estica e não termina de estourar',
      'a rotina que aperta devagar',
    ],
  },
  // 17 · A Esperança
  17: {
    normal: [
      'uma luz pequena que basta para seguir',
      'a vontade que volta depois de um tempo longo',
      'confiar de novo que isso pode dar certo',
    ],
    invertida: [
      'a luz que se apagou quando você deixou de acreditar',
      'uma espera que ficou longa demais',
      'esperar pouco para não doer',
    ],
  },
  // 18 · A Lua
  18: {
    normal: [
      'algo que não se vê de todo e convém olhar duas vezes',
      'um palpite que não convém ignorar',
      'uma promessa que soa melhor do que é',
    ],
    invertida: [
      'a névoa que começa a levantar',
      'trazer para o chão algo que você vinha imaginando maior',
      'um engano pequeno que vem à tona',
    ],
  },
  // 19 · O Sol
  19: {
    normal: [
      'dias bons, dos que se aproveita sem culpa',
      'algo que dá certo e ainda por cima se compartilha',
      'a clareza de estar no lugar certo',
    ],
    invertida: [
      'a alegria que ficou opaca sem motivo claro',
      'um plano que caiu e deixou o dia cinza',
      'estar cercado e ainda assim se sentir sozinho',
    ],
  },
  // 20 · O Juízo Final
  20: {
    normal: [
      'fazer as contas com o vivido e ficar em paz',
      'algo que enfim é reconhecido',
      'um despertar, desses que mudam como você olha tudo',
    ],
    invertida: [
      'medo de fechar uma etapa que já está fechada',
      'uma conta pendente que custa aceitar',
      'adiar um fim para não ter que se despedir',
    ],
  },
  // 21 · A Transmutação
  21: {
    normal: [
      'a recompensa de algo que levou anos',
      'um círculo que enfim se fecha',
      'chegar e poder ficar tranquilo',
    ],
    invertida: [
      'não conseguir fechar de todo o que você vinha construindo',
      'ficar a um passo, com a obra pela metade',
      'o medo bem antes do último passo',
    ],
  },
  // 22 · O Louco
  22: {
    normal: [
      'a vontade de se lançar sem ter tudo resolvido',
      'uma decisão grande tomada com o corpo',
      'o primeiro passo de algo que está começando',
    ],
    invertida: [
      'se lançar sem olhar onde cai',
      'não se animar ao passo que você já sabe que é a hora',
      'a vontade repartida em tantas coisas que não basta para nenhuma',
    ],
  },
};
