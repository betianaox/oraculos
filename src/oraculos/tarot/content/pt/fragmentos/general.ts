import type { FragmentosDeTema } from '../../types';

// Fragmentos do tema 'general' em português para os 22 Arcanos Maiores. É o
// degrau de fallback: se uma carta não tem fragmento de amor/trabalho/dinheiro,
// a leitura usa estes.
//
// Registro (ver pt/bancos.ts): claro antes de elevado, místico sóbrio. Palavras
// do dia a dia; nada de otimizar, gerir, processo, estrutura, potencial,
// recursos. No máximo uma imagem por oração.
//
// Forma: orações curtas que entram DENTRO de uma frase ("No fundo algo se move:
// {frag}"), nunca definições da carta. Três variantes por posição.
export const FRAGMENTOS_GENERAL_PT: FragmentosDeTema = {
  'mayor-00': {
    normal: [
      'um começo que pede confiança mais que certezas',
      'o impulso de dar o primeiro passo mesmo sem ver o caminho inteiro',
      'uma folha em branco onde escolher sem arrastar o velho',
    ],
    invertida: [
      'olhar tanto para o abismo que você não sai do lugar',
      'um salto dado sem olhar, que convém rever',
      'vontade de não arriscar disfarçada de prudência',
    ],
  },
  'mayor-01': {
    normal: [
      'a vontade e as ferramentas certas para virar a ideia em ato',
      'o poder de usar o que você sabe em vez de só ter',
      'um foco capaz de juntar tudo num propósito só',
    ],
    invertida: [
      'talento que se desperdiça, ou palavra que promete demais',
      'a habilidade posta a manipular em vez de criar',
      'a dúvida que paralisa com tudo à mão',
    ],
  },
  'mayor-02': {
    normal: [
      'um saber que chega pela intuição, antes da razão',
      'a resposta que aparece no silêncio, não na pressa',
      'um mistério que pede escutar para dentro',
    ],
    invertida: [
      'uma voz interior que você está abafando',
      'um segredo que age por baixo da superfície',
      'a intuição encoberta pelo barulho',
    ],
  },
  'mayor-03': {
    normal: [
      'a vida que transborda e dá fruto',
      'um cuidado que faz crescer o que toca',
      'a fartura que se aproveita sem culpa',
    ],
    invertida: [
      'um jeito de criar que parou de fluir',
      'um cuidado que sufoca, ou o próprio deixado de lado',
      'dar tanto que você se esquece de si',
    ],
  },
  'mayor-04': {
    normal: [
      'a ordem que sustenta e a mão firme no comando',
      'chão firme para construir',
      'as paredes que protegem o que você já construiu',
    ],
    invertida: [
      'um controle que sufoca e uma rigidez sem nuance',
      'teimosia que não admite outro olhar',
      'tudo solto e sem rumo, sem nada que sustente',
    ],
  },
  'mayor-05': {
    normal: [
      'a orientação do que foi aprendido e testado',
      'o valor de pertencer a algo maior',
      'regras compartilhadas que dão sustento',
    ],
    invertida: [
      'um dogma que não deixa pensar',
      'convenções que já não significam nada',
      'a vontade sadia de buscar a própria verdade fora do molde',
    ],
  },
  'mayor-06': {
    normal: [
      'uma escolha feita a partir do que você valoriza de verdade',
      'a união que fica harmônica quando se escolhe com o coração',
      'algo que junta o que parecia separado',
    ],
    invertida: [
      'uma decisão que você vem evitando',
      'valores que se chocam dentro de você',
      'escolher por medo ou pressão em vez de convicção',
    ],
  },
  'mayor-07': {
    normal: [
      'o avanço que se ganha com vontade e foco',
      'forças opostas alinhadas para a mesma meta',
      'as rédeas tomadas com disciplina',
    ],
    invertida: [
      'forças puxando para direções diferentes',
      'impulso sem direção que não chega a lugar nenhum',
      'querer avançar à força onde cabe ceder',
    ],
  },
  'mayor-08': {
    normal: [
      'a suavidade que doma o indomável',
      'a firmeza que segura sem apertar',
      'coragem serena diante do que assusta',
    ],
    invertida: [
      'a força virada dureza',
      'ceder ao impulso em vez da firmeza',
      'duvidar da própria capacidade de sustentar',
    ],
  },
  'mayor-09': {
    normal: [
      'o recolhimento que busca clareza para dentro',
      'a sabedoria de ter caminhado em silêncio',
      'uma luz que a gente mesmo carrega para o próximo passo',
    ],
    invertida: [
      'um recolhimento que virou trancamento',
      'fuga disfarçada de busca',
      'recusar a orientação de que se precisa',
    ],
  },
  'mayor-10': {
    normal: [
      'uma virada do destino que muda o de sempre',
      'ciclos que se cumprem e pedem para fluir',
      'uma oportunidade que convém aproveitar enquanto dura',
    ],
    invertida: [
      'uma fase que parece virar contra você',
      'resistir a uma mudança inevitável',
      'a sensação de estar à mercê do que acontece',
    ],
  },
  'mayor-11': {
    normal: [
      'a verdade pesada sem paixão',
      'consequências que correspondem ao que foi feito',
      'uma decisão tomada com clareza e honestidade',
    ],
    invertida: [
      'uma balança que pende para o injusto',
      'escapar da responsabilidade do que você provocou',
      'carregar culpa que é de outro',
    ],
  },
  'mayor-12': {
    normal: [
      'uma pausa que muda o olhar por completo',
      'soltar o controle para ver diferente',
      'a entrega que, parada, também faz avançar',
    ],
    invertida: [
      'uma espera que virou atolamento',
      'resistir a soltar o que tem que ser solto',
      'sacrifícios que não levam a nada',
    ],
  },
  'mayor-13': {
    normal: [
      'um fim que abre caminho para algo novo',
      'deixar morrer o que já cumpriu seu ciclo',
      'a renovação que só chega depois do fechamento',
    ],
    invertida: [
      'se agarrar ao que já terminou',
      'temer tanto a mudança que a dor se estende',
      'uma transformação que pede passagem e encontra resistência',
    ],
  },
  'mayor-14': {
    normal: [
      'o ponto médio que mistura na medida certa',
      'combinar com paciência o que parecia não encaixar',
      'a calma de não ir nem demais nem de menos',
    ],
    invertida: [
      'a medida perdida, um excesso em algum lado',
      'a impaciência que estraga o que ia bem',
      'partes suas que não terminam de se entender',
    ],
  },
  'mayor-15': {
    normal: [
      'as correntes que a gente mesmo coloca',
      'um apego ou um desejo que escraviza mesmo parecendo escolhido',
      'a sombra que preferimos não olhar',
    ],
    invertida: [
      'perceber o que escraviza e começar a soltar',
      'afrouxar um laço que parecia impossível',
      'retomar o controle sobre um vínculo ou um hábito',
    ],
  },
  'mayor-16': {
    normal: [
      'o desabamento súbito do que estava mal construído',
      'uma verdade que estoura e liberta',
      'o que se sustentava com alfinetes cai e deixa chão firme',
    ],
    invertida: [
      'uma crise que se vê chegando e se evita',
      'se agarrar ao que já não se sustenta',
      'um abalo interno que ainda não estourou',
    ],
  },
  'mayor-17': {
    normal: [
      'uma esperança que volta depois da tempestade',
      'a fé de que as coisas podem sarar',
      'uma orientação suave que acalma e aponta',
    ],
    invertida: [
      'a luz que por um tempo se apagou',
      'fé perdida e ânimo no chão',
      'perder o contato com o que antes inspirava',
    ],
  },
  'mayor-18': {
    normal: [
      'um terreno incerto onde as coisas não são o que parecem',
      'medos e ilusões misturados com a intuição',
      'andar devagar, confiando no instinto',
    ],
    invertida: [
      'a névoa que começa a levantar',
      'um engano que se esclarece',
      'a confusão no ponto mais denso, bem antes de clarear',
    ],
  },
  'mayor-19': {
    normal: [
      'a alegria clara que ilumina sem sombras',
      'sucesso e verdade em plena luz',
      'uma felicidade simples e sem dobras',
    ],
    invertida: [
      'um entusiasmo que custa a acender',
      'uma alegria adiada que segue ali, encoberta um tempo',
      'um ânimo que vale a pena recuperar',
    ],
  },
  'mayor-20': {
    normal: [
      'um despertar que chama a olhar a própria vida',
      'renascer depois de um balanço honesto',
      'se perdoar e dar o passo para algo mais pleno',
    ],
    invertida: [
      'uma autocrítica que não perdoa',
      'um chamado que você não escuta',
      'ficar preso num passado que pede fechamento',
    ],
  },
  'mayor-21': {
    normal: [
      'um ciclo que se completa em plenitude',
      'a sensação de estar inteiro e em harmonia',
      'a recompensa do caminho e a porta de um novo',
    ],
    invertida: [
      'um fechamento perto mas ainda incompleto',
      'uma meta a que falta um último passo',
      'algo que você ainda não terminou de digerir',
    ],
  },
};
