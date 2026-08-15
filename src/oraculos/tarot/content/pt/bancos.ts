import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo em português para a cruz de cinco cartas. É o tecido entre as
// cartas: aberturas, situação, tensão, cabeça, próximo passo e conselho final.
// Português neutro (você).
//
// Aqui as cartas NÃO são nomeadas. A pessoa as tem na frente; o que ela espera
// ler é o que dizem sobre a pergunta dela, não a definição de cada uma.
//
// ── COMO SE ESCREVE AQUI ─────────────────────────────────────────────────
// Duas regras, vindas do banco em espanhol (es/bancos.ts), onde foram
// corrigidas depois de testar o app com gente de verdade. São regras de
// conteúdo, não de estilo:
//
// 1. CLARO ANTES DE ELEVADO. Quem pergunta se o contrato vai ser renovado tem
//    que reconhecer a própria pergunta na resposta. Palavras do dia a dia,
//    frases curtas, sujeito concreto. Proibido o vocabulário de relatório:
//    otimizar, gerir, processo, estrutura, dinâmica, potencial, recursos,
//    consolidar, "o plano afetivo/profissional". Se uma frase caberia numa
//    apresentação de trabalho, reescreva.
// 2. MÍSTICO SÓBRIO. A imagem antes do conceito: fogo, água, porta, caminho,
//    sombra, fio, semente, raiz. UMA imagem por frase e nunca duas seguidas; o
//    excesso deixa o texto pomposo, que é a outra forma de não se entender. Sem
//    arcaísmos, sem "os astros determinam".
//
// As mesmas regras estão no prompt do servidor (imagostack/lib/oraculo/prompt.ts)
// para que a leitura da IA e esta falem igual.
export const BANCOS_TAROT_PT: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para o que você pergunta {tema}, isto é o que aparece.',
        'Vamos à sua pergunta {tema}. As cartas organizam assim.',
        'Isto é o que há para te mostrar {tema}.',
        'Vamos ao que você pergunta {tema}, por partes.',
      ],
      preocupacion: [
        'Entendo a inquietação {tema}. Olhe com calma o que se acomoda aqui.',
        'Você não está às cegas {tema}: há sinais, e eles se organizam assim.',
        'Sei que isso pesa {tema}. Vamos devagar com o que aparece.',
      ],
      impulso: [
        'Com essa vontade de avançar {tema}, convém ver o conjunto primeiro.',
        'Antes de se lançar, olhe o que está sobre a mesa {tema}.',
        'A vontade está bem colocada {tema}, mas tem algo para ver antes.',
      ],
    },
    abierta: {
      neutro: [
        'Para o que você quer entender {tema}, este espelho se abre.',
        'Há cinco faces para olhar {tema}, e cada uma diz o seu.',
        'Vamos olhar isso com calma {tema}.',
        'Isto é o que se acende quando você pergunta {tema}.',
      ],
      preocupacion: [
        'Respire. Nada disso está escrito {tema}: é um olhar para o que te tira o sono.',
        'Sem pressa. O que hoje te pesa {tema} fica acomodado para você poder ver.',
        'Vamos baixar um tom {tema}. O que inquieta se enxerga melhor devagar.',
      ],
      impulso: [
        'Segure um momento a vontade; tem algo para pensar {tema}.',
        'Tanta energia merece uma pausa: olhe o que se acende {tema}.',
        'Antes de se mexer {tema}, deixe isso assentar.',
      ],
    },
  },
  temas: {
    amor: ['sobre o amor', 'sobre esse vínculo', 'sobre o que você sente', 'sobre essa pessoa'],
    trabajo: ['sobre o trabalho', 'sobre o seu caminho profissional', 'sobre isso que te ocupa no trabalho'],
    dinero: ['sobre o dinheiro', 'sobre o que te preocupa nas contas', 'sobre o lado material'],
    general: ['sobre o seu momento', 'sobre o que você está vivendo', 'sobre isso que você traz'],
  },
  // Retomam DO QUE trata a pergunta, não só o tema dela. Dizer "você pergunta se
  // ele volta" é falar da vida da pessoa; "para o que você pergunta sobre o
  // amor" é falar do oráculo.
  //
  // Nenhuma afirma nem nega o que se perguntou: reformulam a pergunta e movem o
  // olhar para o que a tirada pode de fato mostrar.
  aperturasIntencion: {
    retorno: [
      'Você pergunta se volta. Uma carta não decide isso, mas dá para ver o terreno onde essa volta cairia.',
      'Você quer saber se vai voltar. Ninguém assina essa resposta; o que dá para ver é o que ficou aberto entre vocês.',
      'A pergunta é se ele retorna. Olhe primeiro o que sustenta a distância hoje.',
    ],
    sentimiento: [
      'Você pergunta o que essa pessoa sente, e só ela sabe. O que aparece aqui é o vínculo como está.',
      'Você quer saber se te ama. Ninguém responde por outro, mas aparece o que se joga entre vocês dois.',
      'A pergunta aponta para o coração do outro. As cartas falam do que circula entre vocês.',
    ],
    ruptura: [
      'Você está pensando em cortar, e isso quem decide é você. Aqui aparece o que pesa de cada lado.',
      'Você pergunta se deve deixar. Antes de decidir, olhe o que está sendo sustentado.',
      'A pergunta é se vai embora. Isto mostra o que te segura e o que te empurra.',
    ],
    decision: [
      'Você pergunta o que te convém. Ninguém escolhe por você, mas aqui fica organizado o que está em jogo.',
      'Você está entre dois caminhos. Olhe o que cai de cada lado antes de decidir.',
      'A pergunta é o que fazer. Isto é o que está sobre a mesa.',
    ],
    comienzo: [
      'Você pergunta se isso que começa vai prosperar. Aqui dá para ver com o que começa.',
      'Você quer saber se dá certo. O que aparece é a terra onde isso se planta.',
      'A pergunta olha para o que está por começar. Isto é o que traz.',
    ],
    espera: [
      'Você pergunta quando. Datas não se leem em cartas, mas o que falta para isso amadurecer, sim.',
      'Você quer saber quanto falta. Ninguém marca o dia; o que está se cozinhando, sim.',
      'A pergunta é sobre o momento. Olhe o que ainda tem que se acomodar.',
    ],
  },
  // ATENÇÃO ao escrever estes modelos: os fragmentos vêm em duas formas —
  // sintagma nominal ("uma decisão que você evita") e infinitivo ("rever o que
  // você espera")— então o espaço precisa aceitar as duas. Funcionam: depois de
  // dois-pontos ou vírgula, depois de "é", "se apoia em", "passa por".
  situacion: {
    dos: [
      'No fundo algo se move: {frag1}. E no centro, {frag2}.',
      'Ao redor da cena: {frag1}. Sustentando tudo, {frag2}.',
      'Primeiro aparece isto: {frag1}. Mas o eixo verdadeiro é outro: {frag2}.',
      'O que cerca o assunto é {frag1}, e no centro pulsa {frag2}.',
      'De um lado aparece {frag1}, e bem no meio, {frag2}.',
      'O que se vê de cara: {frag1}. O que manda de verdade: {frag2}.',
    ],
    // Quando a outra carta não tem nada novo a dizer, se planta só uma.
    una: [
      'No centro de tudo há algo claro: {frag}.',
      'O que sustenta a cena é {frag}.',
      'Bem no meio pulsa isto: {frag}.',
      'Se for para ficar com uma coisa só, é esta: {frag}.',
    ],
  },
  // ATENÇÃO com os sujeitos: aqui não se nomeiam cartas, então "uma", "outra" ou
  // "a primeira" não se referem a nada. Tudo tem que se apoiar no fragmento em
  // si, nunca numa peça que o texto nunca menciona.
  tension: {
    tres: [
      'De um lado puxa {frag1}; do outro, {frag3}. E no meio manda {frag2}: aí está o nó.',
      'Entre {frag1} e {frag3} se joga o equilíbrio, mas o que decide é {frag2}.',
      'O que aparece como {frag1} se organiza em torno de {frag2}, e a cor final vem de {frag3}.',
      'Há algo que prepara o terreno, {frag1}, e algo que desarruma, {frag3}; no meio fica {frag2}.',
      'Duas coisas se cruzam, {frag1} e {frag2}, e acima das duas pesa {frag3}.',
      'Uma parte sua se apoia em {frag1} e outra empurra para {frag3}; no meio, {frag2} é o que inclina a balança.',
    ],
    dos: [
      'Embaixo há um puxa e afrouxa: de um lado {fragA}, do outro {frag3}.',
      'O que se move por baixo tem duas caras: {fragA} e, do outro lado, {frag3}.',
      'Ali se cruzam duas forças, {fragA} e {frag3}, e nenhuma cede de todo.',
      'Algo empurra desde {fragA} enquanto outra coisa puxa para {frag3}.',
    ],
    una: [
      'E tem algo mais, que não se vê de cara: {frag3}.',
      'Debaixo de tudo isso se move outra coisa: {frag3}.',
      'O que não está à vista é isto: {frag3}.',
      'Na sombra do assunto fica {frag3}.',
    ],
  },
  cabeza: [
    'O que fica dando voltas na sua cabeça é isto: {frag}.',
    'O que hoje te ocupa a mente é {frag}.',
    'Acima de tudo pesa {frag}.',
    'O que se pensa — seu ou da pessoa por quem você pergunta — é {frag}.',
    'O que não te deixa dormir tem a ver com {frag}.',
  ],
  // A única carta lida olhando para frente. Um matiz antecipatório, mas sempre
  // como tendência: "se desenha", "tudo indica". Nunca um fato consumado nem uma
  // promessa, que é onde um oráculo vira irresponsável.
  paso: [
    'E adiante se desenha isto: {frag}.',
    'O que vem aponta nesta direção: {frag}.',
    'Se nada for forçado, o próximo se insinua assim: {frag}.',
    'No horizonte próximo já se anuncia {frag}.',
    'Tudo indica que o que vem a seguir traga {frag}.',
    'O caminho que se abre daqui vai em direção a {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Com isso à vista, decida sem apressar o final.',
        'Deixe isso assentar antes da sua próxima escolha.',
        'Você já tem com o que decidir. Leve o tempo que precisar.',
      ],
      preocupacion: [
        'Não carregue o final antes da hora: um passo de cada vez basta.',
        'O que você teme não está escrito. Use este olhar para soltar um pouco.',
        'Hoje parece que você carrega isso sozinho, e não é bem assim. Um dia de cada vez.',
      ],
      impulso: [
        'Boa energia, mas meça o salto com o que o centro mostrou.',
        'Avance, sim, mas sem pular o que estão te pedindo para olhar.',
        'A vontade basta para começar; para sustentar, olhe o que está em cima.',
      ],
    },
    abierta: {
      neutro: [
        'Fique com o que mais ressoou e deixe trabalhar alguns dias.',
        'Não precisa resolver tudo hoje; ver mais claro já basta.',
        'Deixe isso assentar. O que importa volta sozinho.',
      ],
      preocupacion: [
        'Seja gentil consigo: entender já é começar a curar.',
        'Se permita não ter todas as respostas ainda.',
        'O que dói também vai se acomodando, mesmo que hoje não pareça.',
      ],
      impulso: [
        'Antes de agir, deixe isso assentar.',
        'A sua vontade vale muito; oriente com o que você acabou de ver.',
        'Guarde um pouco desse fogo para depois. Vai fazer falta.',
      ],
    },
  },
  ecoTercero: [
    'Em tudo isso, a outra pessoa pesa mais do que parece.',
    'O vínculo com quem você menciona tinge cada canto desta leitura.',
    'Essa pessoa também faz parte do quadro.',
    'O que o outro faz também está puxando esse fio.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte disso olha para trás, para algo que ainda não fechou.',
      'Há um antes que segue metido na cena.',
      'Algo do antigo ainda tem raiz aqui.',
    ],
    futuro: [
      'A pergunta empurra para frente, e a resposta vai nessa direção.',
      'Tudo isso se inclina para o que ainda não aconteceu.',
      'O olhar está posto mais adiante, e é para lá que aponta o que vem.',
    ],
  },
};
