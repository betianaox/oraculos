import type { FragmentosDeTema } from '../../types';

// Tema "geral" — o que o classificador usa quando a pergunta não se encaixa
// claramente em amor/trabalho/dinheiro. De propósito mais neutro: serve para
// qualquer área da vida e não supõe nenhum contexto específico.
export const general: FragmentosDeTema = {
  fehu: {
    normal: [
      'os recursos que você já tem e talvez não esteja valorizando por completo',
      'uma base sólida que se constrói cuidando do que já funciona',
      'a prosperidade que chega quando se organiza o que já está em andamento',
    ],
    invertida: [
      'o medo de que falte, para além de se realmente falta algo',
      'uma necessidade de reter que trava o que poderia fluir',
      'a insegurança de não saber se o que você dá volta de alguma forma',
    ],
  },
  uruz: {
    normal: [
      'uma força interior que você tem mais à mão do que imagina',
      'o impulso necessário para se animar a algo que vem adiando',
      'a vitalidade para encarar o que vem com mais energia',
    ],
    invertida: [
      'o cansaço de sustentar algo sem pedir ajuda',
      'uma energia que se impõe em vez de acompanhar',
      'a dureza que aparece quando na verdade falta ternura',
    ],
  },
  thurisaz: {
    normal: [
      'um limite que convém pôr antes de a situação transbordar',
      'a pausa necessária antes de reagir a algo que incomodou',
      'a força para defender algo que realmente importa',
    ],
    invertida: [
      'uma reação impulsiva que pode machucar mais do que proteger',
      'um conflito que se evita em vez de nomear',
      'um muro que afasta em vez de proteger',
    ],
  },
  ansuz: {
    normal: [
      'uma conversa honesta que vem sendo adiada',
      'a clareza para dizer o que realmente se pensa',
      'a escuta genuína do que alguém precisa dizer',
    ],
    invertida: [
      'um mal-entendido que cresce por não ser esclarecido a tempo',
      'palavras ditas sem pensar que deixam marca',
      'um silêncio que substitui algo que deveria ser dito',
    ],
  },
  raidho: {
    normal: [
      'um avanço rumo a uma nova etapa, ainda que aos poucos',
      'a disposição de se mover, mesmo que o caminho mude no percurso',
      'um percurso que começa a tomar forma',
    ],
    invertida: [
      'a sensação de estar parado enquanto tudo parece avançar',
      'um rumo que foi se perdendo no dia a dia',
      'o desgaste de ir numa direção que já não convence',
    ],
  },
  kaunaz: {
    normal: [
      'uma faísca de clareza ou inspiração que merece atenção',
      'uma forma diferente de olhar algo que parecia travado',
      'o desejo que volta a se acender com algo simples',
    ],
    invertida: [
      'uma motivação que se apaga com a rotina',
      'um interesse que esfria sem você perceber por completo',
      'a falta de vontade de tentar algo diferente por ora',
    ],
  },
  gebo: {
    normal: [
      'uma troca equilibrada entre o que se dá e o que se recebe',
      'a generosidade que sustenta algo importante',
      'um gesto que se agradece sem esperar nada em troca',
    ],
    invertida: [
      'uma balança que pende sempre para o mesmo lado',
      'o desgaste de dar mais do que se recebe',
      'algo que, no fundo, espera uma retribuição',
    ],
  },
  wunju: {
    normal: [
      'uma alegria simples que não precisa de um grande motivo',
      'um momento de bem-estar depois de uma etapa difícil',
      'a leveza de curtir algo sem analisar demais',
    ],
    invertida: [
      'uma felicidade forçada para não incomodar ninguém',
      'a calma aparente que encobre algo pendente',
      'o esforço de fingir que está tudo bem',
    ],
  },
  hagalaz: {
    normal: [
      'uma mudança brusca que, embora incômoda, abre espaço para algo novo',
      'uma ruptura necessária para soltar o que já não servia',
      'um abalo que organiza as prioridades',
    ],
    invertida: [
      'um rompimento que chega sem muito aviso',
      'a desordem que uma mudança inesperada deixa',
      'a dificuldade de aceitar algo que se cortou de repente',
    ],
  },
  naudiz: {
    normal: [
      'a paciência necessária num momento de carência',
      'o esforço que se mantém mesmo faltando recursos',
      'a perseverança diante de um obstáculo concreto',
    ],
    invertida: [
      'algo que se sustenta por medo, não por convicção',
      'uma necessidade que se confunde com outra coisa',
      'aguentar algo que já poderia começar a se resolver',
    ],
  },
  isa: {
    normal: [
      'uma pausa útil para pensar com a cabeça fria',
      'o tempo certo antes de dar um passo importante',
      'a calma de esperar o momento adequado',
    ],
    invertida: [
      'uma distância que se instala por medo de avançar',
      'a indecisão que congela algo pendente',
      'a estagnação de não se animar a se mover ainda',
    ],
  },
  jera: {
    normal: [
      'os frutos de um esforço sustentado ao longo do tempo',
      'uma recompensa que chega na hora certa',
      'o resultado de ter sido constante com algo',
    ],
    invertida: [
      'a impaciência de querer resultados antes do tempo',
      'a frustração de ainda não ver o que se semeou',
      'um processo que se corta antes de dar frutos',
    ],
  },
  eihwaz: {
    normal: [
      'mais resistência do que você sente neste momento',
      'uma força que aparece justo quando mais se precisa',
      'a coragem de atravessar algo difícil',
    ],
    invertida: [
      'uma rigidez que não deixa espaço para ceder',
      'um medo que paralisa em vez de impulsionar',
      'a resistência a mudar algo que já não funciona',
    ],
  },
  perthu: {
    normal: [
      'uma abertura para o inesperado',
      'a confiança de que as coisas vão se ajeitar',
      'um mistério que vale a pena deixar se revelar',
    ],
    invertida: [
      'a necessidade de controlar algo que não depende só de você',
      'a resistência a soltar e deixar as coisas fluírem',
      'o incômodo de não saber como algo vai seguir',
    ],
  },
  algiz: {
    normal: [
      'um instinto que sabe algo antes de você raciocinar por completo',
      'um cuidado saudável que protege sem prender',
      'uma intuição que avisa quando pôr um limite',
    ],
    invertida: [
      'uma guarda alta demais que afasta mais do que protege',
      'o medo de baixar as defesas mesmo quando é preciso',
      'uma desconfiança que pesa mais do que deveria',
    ],
  },
  sowulo: {
    normal: [
      'uma clareza que volta depois de uma etapa confusa',
      'a confiança de ir por um bom caminho',
      'uma conquista que se sente compartilhada depois de um esforço sustentado',
    ],
    invertida: [
      'um otimismo forçado que encobre algo por resolver',
      'a dificuldade de aceitar uma verdade incômoda',
      'mostrar entusiasmo por fora enquanto algo interno não fecha',
    ],
  },
  teiwaz: {
    normal: [
      'a coragem de sustentar algo mesmo sendo difícil',
      'a honestidade mesmo quando custa dizê-la',
      'um compromisso que se defende com convicção',
    ],
    invertida: [
      'um esforço que só uma das partes envolvidas faz',
      'a conta silenciosa de quem cede mais',
      'o desgaste de insistir em algo que já não é parelho',
    ],
  },
  berkana: {
    normal: [
      'um começo novo, ainda que pequeno',
      'um crescimento que se nota depois de uma fase de mudanças',
      'algo pronto para dar mais um passo',
    ],
    invertida: [
      'um crescimento que trava por medo do novo',
      'a vontade de recomeçar sem se animar ainda',
      'um começo que se adia uma vez e outra',
    ],
  },
  ehwaz: {
    normal: [
      'o que avança melhor quando é feito a dois',
      'uma confiança mútua que sustenta decisões importantes',
      'o avanço rumo a um mesmo objetivo compartilhado',
    ],
    invertida: [
      'uma só pessoa sustentando algo que deveria ser a dois',
      'uma confiança que precisa ser reparada depois de algo pontual',
      'o descompasso entre o que cada um espera do outro',
    ],
  },
  mannaz: {
    normal: [
      'o apoio das pessoas que você tem por perto',
      'uma conexão real baseada na cooperação',
      'o amparo de uma comunidade, ainda que pequena',
    ],
    invertida: [
      'o isolamento de resolver tudo sem pedir ajuda',
      'a dificuldade de se apoiar nos outros quando é preciso',
      'uma tendência a se fechar em si mesmo',
    ],
  },
  laguz: {
    normal: [
      'uma intuição que sabe mais do que a razão admite',
      'uma emoção que convém acompanhar de perto',
      'a sabedoria de confiar no que o instinto diz',
    ],
    invertida: [
      'uma emoção intensa que embaça a clareza',
      'o transbordamento de sentir tudo ao mesmo tempo',
      'confundir intensidade com certeza',
    ],
  },
  ingwaz: {
    normal: [
      'algo que está se gestando e ainda precisa do seu tempo',
      'um potencial que convém deixar amadurecer antes de agir',
      'uma semente já plantada que vai dar frutos',
    ],
    invertida: [
      'a impaciência de querer forçar algo que não está pronto',
      'a vontade de acelerar um processo que pede calma',
      'a ansiedade de não saber esperar o momento certo',
    ],
  },
  dagaz: {
    normal: [
      'um ponto de virada que muda a forma de ver algo',
      'uma clareza que chega depois de uma etapa confusa',
      'um começo que se nota quase de um dia para o outro',
    ],
    invertida: [
      'a resistência a soltar como as coisas eram antes',
      'a dificuldade de aceitar que algo já mudou',
      'se apegar a uma versão de algo que já não existe',
    ],
  },
  othala: {
    normal: [
      'os valores que sustentam as decisões importantes',
      'uma raiz que dá sentido ao que vem',
      'o respeito por de onde você vem',
    ],
    invertida: [
      'padrões que se repetem sem perceber',
      'uma expectativa herdada que pesa mais do que deveria',
      'a dificuldade de soltar uma forma antiga de fazer as coisas',
    ],
  },
};
