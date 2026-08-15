import type { CartaId } from '../types';

// Conselho do dia por carta (português), as 78.
//
// POR QUE ESTAVA PELA METADE: durante muito tempo havia duas cartas escritas —O
// Louco e O Sol— e as outras 76 caíam no genérico. Ou seja, em 97% dos dias o
// app dizia "reserve um momento para olhar esta carta com calma", qualquer que
// fosse a carta escolhida. O mesmo buraco existia nos três idiomas.
//
// ── COMO SE ESCREVE UM CONSELHO ──────────────────────────────────────────
// As duas regras de sempre (ver pt/bancos.ts) —claro antes de elevado, místico
// sóbrio— mais a própria daqui:
//
//   UM CONSELHO DIZ À PESSOA O QUE FAZER HOJE. Não o que a carta significa. Se
//   a frase se lê bem sem ninguém do outro lado, está mal escrita.
//
// Português neutro (você). Segunda pessoa, começam falando do dia, e cabem em
// duas linhas.
export const CONSEJOS_PT: Partial<Record<CartaId, string>> = {
  // ── Arcanos Maiores ──────────────────────────────────────────────────────
  'mayor-00': 'Dê hoje aquele primeiro passo que você vem adiando. Não precisa ver o caminho inteiro.',
  'mayor-01': 'Hoje use o que você sabe fazer em vez de só ter. Comece pelo menor pedaço.',
  'mayor-02': 'Hoje escute para dentro antes de perguntar para fora. Você já sabe mais do que acha.',
  'mayor-03': 'Cuide hoje de algo que está crescendo. Um pouco de atenção rende mais que um empurrão.',
  'mayor-04': 'Ponha hoje ordem numa coisa só. Escolha a que mais desarruma o resto.',
  'mayor-05': 'Hoje pergunte a quem já passou por isso. Nem tudo precisa ser aprendido sozinho.',
  'mayor-06': 'Hoje escolha de verdade. Ficar no meio também é uma decisão, e a pior.',
  'mayor-07': 'Empurre hoje numa direção só. A força repartida não move nada.',
  'mayor-08': 'Hoje resolva com calma o que te dá vontade de resolver aos gritos.',
  'mayor-09': 'Se afaste hoje um tempo do barulho. A resposta aparece quando você baixa o volume.',
  'mayor-10': 'Hoje aproveite o que aparecer sem analisar tanto. A roda não espera.',
  'mayor-11': 'Hoje assuma a sua parte. Nem mais nem menos que a sua.',
  'mayor-12': 'Hoje não force. Ficar parado também é avançar quando é hora de esperar.',
  'mayor-13': 'Hoje dê um fecho a algo que já terminou. Nomear já basta.',
  'mayor-14': 'Hoje procure o meio-termo. Nem demais nem de menos, no que for.',
  'mayor-15': 'Olhe hoje de frente o que te tem preso. Só olhar já afrouxa.',
  'mayor-16': 'Se hoje algo cair, não corra para escorar. Veja antes se valia a pena.',
  'mayor-17': 'Hoje confie um pouco mais do que te sai naturalmente. Um dia.',
  'mayor-18': 'Hoje não decida com o que você imagina. Espere ter o dado.',
  'mayor-19': 'Aproveite hoje o simples e em voz alta. É um dia para comemorar sem pressa.',
  'mayor-20': 'Hoje faça as contas com o vivido e se perdoe uma. A que mais pesa.',
  'mayor-21': 'Hoje se dê por satisfeito com algo. Já está pronto, mesmo sem você ter comemorado.',
  // ── Paus ─────────────────────────────────────────────────────────────────
  'bastos-as': 'Acenda hoje aquilo que você tem vontade de fazer. Um fósforo basta.',
  'bastos-dos': 'Hoje olhe um pouco mais longe antes de se mexer. Decida o rumo, não o passo.',
  'bastos-tres': 'Hoje espere com confiança o que você semeou. Já está a caminho.',
  'bastos-cuatro': 'Hoje comemore algo com os seus. Não precisa ser grande.',
  'bastos-cinco': 'Se hoje houver bagunça, ponha ordem em vez de somar barulho.',
  'bastos-seis': 'Hoje mostre o que você conquistou. Guardar não faz ficar maior.',
  'bastos-siete': 'Hoje defenda a sua posição. Não precisa convencer todo mundo, só se sustentar.',
  'bastos-ocho': 'Mande hoje aquela mensagem que você vem adiando. Depois as coisas aceleram sozinhas.',
  'bastos-nueve': 'Hoje aguente mais um pouco. Você está mais perto do fim do que sente.',
  'bastos-diez': 'Solte hoje uma carga que não era sua. Comece pela mais óbvia.',
  'bastos-sota': 'Hoje experimente algo novo sem se comprometer. Só para ver o que acontece.',
  'bastos-caballo': 'Hoje se jogue, mas olhe onde cai. As duas coisas juntas.',
  'bastos-reina': 'Hoje sustente o seu com calor e firmeza. Dá para ser as duas coisas.',
  'bastos-rey': 'Hoje lidere pelo exemplo. Alguém está olhando como você faz.',
  // ── Copas ────────────────────────────────────────────────────────────────
  'copas-as': 'Hoje abra o coração um pouquinho. Não precisa ser de par em par.',
  'copas-dos': 'Hoje encontre alguém de verdade. Sem tela no meio.',
  'copas-tres': 'Hoje brinde com os seus por algo. Nem que seja pequeno.',
  'copas-cuatro': 'Hoje levante o olhar. Você está passando batido por algo que tem à mão.',
  'copas-cinco': 'Hoje olhe o que ficou de pé, não só o que caiu.',
  'copas-seis': 'Hoje ligue para alguém de antes. A ternura antiga também serve.',
  'copas-siete': 'Hoje descarte duas das opções que ficam rondando. Fique com uma.',
  'copas-ocho': 'Hoje se deixe levar por aquilo que te chama, mesmo sem conseguir explicar.',
  'copas-nueve': 'Hoje se dê um gosto que você já ganhou. Sem justificar.',
  'copas-diez': 'Hoje diga aos seus o quanto valem. Com essas palavras.',
  'copas-sota': 'Hoje dê ouvidos a essa emoção nova. Ainda não precisa entender.',
  'copas-caballo': 'Hoje proponha aquilo que você vinha imaginando. O pior final é um não.',
  'copas-reina': 'Hoje escute alguém sem querer consertar nada.',
  'copas-rey': 'Hoje sinta tudo o que tiver que sentir, e mesmo assim decida com a cabeça.',
  // ── Espadas ──────────────────────────────────────────────────────────────
  'espadas-as': 'Hoje diga a verdade de uma vez. Corta mais rápido do que dói.',
  'espadas-dos': 'Hoje tire a venda. Escolher às cegas não é escolher.',
  'espadas-tres': 'Hoje deixe doer o que dói. Tapar só faz durar mais.',
  'espadas-cuatro': 'Hoje pare. Sério: não faça nada que possa esperar até amanhã.',
  'espadas-cinco': 'Hoje não tente ganhar a discussão. Veja quanto custa ganhar.',
  'espadas-seis': 'Hoje se afaste um pouco do que te desgasta. Não precisa explicar por quê.',
  'espadas-siete': 'Hoje faça de frente, mesmo o atalho sendo mais cômodo.',
  'espadas-ocho': 'Hoje veja qual limite você mesmo se pôs. Costuma haver uma porta aberta.',
  'espadas-nueve': 'Se hoje o medo apertar, escreva. No papel sempre é menor.',
  'espadas-diez': 'Hoje aceite que você tocou o fundo. Daí só se sobe.',
  'espadas-sota': 'Hoje pergunte em vez de supor. Uma pergunta te poupa uma semana.',
  'espadas-caballo': 'Hoje vá de frente, mas conte até três antes de falar.',
  'espadas-reina': 'Hoje seja claro sem ser afiado. Dá para dizer tudo sem cortar ninguém.',
  'espadas-rey': 'Hoje decida pela regra, não pelo humor do dia.',
  // ── Ouros ────────────────────────────────────────────────────────────────
  'oros-as': 'Hoje dê o primeiro passo concreto daquela ideia. Um só, mas real.',
  'oros-dos': 'Hoje largue uma das coisas com que você faz malabares. Não cabem todas.',
  'oros-tres': 'Hoje peça ajuda ou dê. Isso não se faz sozinho.',
  'oros-cuatro': 'Hoje cuide do que você tem, mas não aperte tanto.',
  'oros-cinco': 'Se hoje faltar algo, peça. Tem mais ajuda por perto do que você vê.',
  'oros-seis': 'Hoje veja se você está dando e recebendo parelho. Ajuste o lado que falha.',
  'oros-siete': 'Hoje tenha paciência com o que você semeou. Ainda está amadurecendo.',
  'oros-ocho': 'Hoje faça bem, não rápido. Praticar hoje aparece em um mês.',
  'oros-nueve': 'Hoje aproveite o que você conquistou por conta própria. Você mereceu.',
  'oros-diez': 'Hoje pense longe. O que você decidir agora vai durar mais que hoje.',
  'oros-sota': 'Hoje aprenda algo novo, nem que sejam dez minutos.',
  'oros-caballo': 'Hoje avance um passo, mesmo sendo chato. Os chatos são os que chegam.',
  'oros-reina': 'Hoje cuide do seu com os pés no chão. E cuide de você também.',
  'oros-rey': 'Hoje compartilhe algo do que te sobra. Você tem mais do que acha.',
};

// Último recurso, para uma carta que ainda não tenha o conselho escrito. Com as
// 78 completas não deveria disparar nunca.
export const CONSEJO_GENERICO_PT =
  'Reserve um momento para olhar esta carta com calma e se perguntar o que ela está te mostrando hoje.';
