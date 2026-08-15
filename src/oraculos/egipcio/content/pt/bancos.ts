import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo em português para a cruz de cinco cartas do Tarô Egípcio.
// Mesmo esqueleto do de Tarô e Anjos, mas com voz própria — areia, pedra, o rio
// — para que os três oráculos não soem iguais. Português neutro (você).
//
// Aqui as cartas NÃO são nomeadas: a pessoa as tem na frente.
//
// ── COMO SE ESCREVE AQUI ─────────────────────────────────────────────────
// As mesmas duas regras do banco de Tarô (ver tarot/content/pt/bancos.ts) e do
// prompt do servidor:
//
// 1. CLARO ANTES DE ELEVADO. Palavras do dia a dia. Proibido o vocabulário de
//    relatório: otimizar, gerir, processo, estrutura, dinâmica, potencial,
//    recursos, consolidar, "o plano afetivo".
// 2. MÍSTICO SÓBRIO. Uma imagem por frase — areia, pedra, rio, caminho — e o
//    resto em palavras simples. O cenário egípcio se usa com conta-gotas: se
//    cada frase nomeia o Nilo, deixa de significar alguma coisa.
//
// ⚠️ PARTICULARIDADE DESTE BANCO: os fragmentos do Egípcio podem vir em TRÊS
// formas, não duas. Além de sintagmas nominais ("intuição e atração") chegam
// ORAÇÕES COM VERBO, porque os significados invertidos são recortados de um
// texto longo ("o poder não encontra caminho"). Por isso quase todos os modelos
// daqui usam dois-pontos ou vírgula: é a única coisa que aceita as três formas
// sem quebrar. NÃO escreva "se apoia em {frag}" nem "é {frag}".
export const BANCOS_EGIPCIO_PT: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para o que você pergunta {tema}, isto é o que se desdobra.',
        'Vamos à sua pergunta {tema}. As cartas organizam assim.',
        'Isto é o que há para te mostrar {tema}.',
        'Vamos ao que você pergunta {tema}, por partes.',
      ],
      preocupacion: [
        'Respire fundo: aqui ninguém sentencia {tema}, só se ilumina.',
        'Há inquietação no que você pergunta {tema}. Olhe com calma o que a areia acomoda.',
        'Sei que isso pesa {tema}. Vamos devagar com o que aparece.',
      ],
      impulso: [
        'Com essa vontade de avançar {tema}, convém olhar o conjunto primeiro.',
        'Antes de dar o passo, isto é o que fica à vista {tema}.',
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
        'Sem pressa: o que hoje te pesa {tema} fica acomodado para você poder ver.',
        'Nada disso está gravado em pedra {tema}: é um olhar para o que te tira o sono.',
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
  // Retomam DO QUE trata a pergunta, com a voz do oráculo. Nenhuma afirma nem
  // nega o que se perguntou: reformulam e movem o olhar para o que as cartas
  // podem de fato mostrar.
  aperturasIntencion: {
    retorno: [
      'Você pergunta se volta. Uma carta não decide isso, mas o que ficou aberto entre vocês aparece.',
      'Você quer saber se vai voltar. Ninguém promete isso; o que aparece é como está o vínculo.',
      'A pergunta é sobre um retorno. Olhe primeiro o que sustenta a distância hoje.',
    ],
    sentimiento: [
      'Você pergunta o que essa pessoa sente, e só ela sabe. O que se fala aqui é do vínculo como está.',
      'Você quer saber se te ama. Ninguém responde por outro, mas aparece o que se joga entre os dois.',
      'A pergunta aponta para o coração do outro. O que se desdobra é o laço, não a decisão dele.',
    ],
    ruptura: [
      'Você está pensando em cortar, e isso quem decide é você. Aqui aparece o que pesa de cada lado.',
      'Você pergunta se deve deixar. Antes de decidir, olhe o que está sendo sustentado.',
      'A pergunta é se vai embora. Aparece o que te segura e o que te empurra.',
    ],
    decision: [
      'Você pergunta o que te convém. Ninguém escolhe por você, mas fica organizado o que está em jogo.',
      'Você está entre dois caminhos. Olhe o que cai de cada lado antes de decidir.',
      'A pergunta é o que fazer. Isto é o que fica à vista.',
    ],
    comienzo: [
      'Você pergunta se isso que começa vai prosperar. O que se desdobra mostra com o que começa.',
      'Você quer saber se dá certo. Aparece a terra onde isso se planta.',
      'A pergunta olha para o que está por começar. Isto é o que traz.',
    ],
    espera: [
      'Você pergunta quando. Datas não se leem na pedra, mas o que falta para isso amadurecer, sim.',
      'Você quer saber quanto falta. Não há datas aqui; o que está se cozinhando, sim.',
      'A pergunta é sobre o momento. Olhe o que ainda tem que se acomodar.',
    ],
  },
  situacion: {
    dos: [
      'Ao redor do assunto: {frag1}. E no centro: {frag2}.',
      'A areia mostra primeiro isto: {frag1}. E no eixo: {frag2}.',
      'Cercando a cena: {frag1}. Sustentando tudo: {frag2}.',
      'O que aparece na borda: {frag1}. O que pulsa no meio: {frag2}.',
      'De um lado aparece isto: {frag1}. E bem no meio: {frag2}.',
      'O que se vê de cara: {frag1}. O que manda de verdade: {frag2}.',
    ],
    una: [
      'No centro de tudo há algo claro: {frag}.',
      'O que sustenta a cena: {frag}.',
      'Bem no meio pulsa isto: {frag}.',
      'Se for para ficar com uma coisa só, é esta: {frag}.',
    ],
  },
  // Menos dois-pontos que antes: quatro seguidos num parágrafo se leem como uma
  // lista, não como uma leitura. Ficam só onde fazem falta para caber um
  // fragmento com verbo.
  tension: {
    tres: [
      'De um lado puxa {frag1}, e do outro {frag3}; no meio manda {frag2}.',
      'De um lado se vê {frag1}, do outro {frag3}. Mas o eixo é outro: {frag2}.',
      'Os extremos falam de {frag1} e de {frag3}. O centro, por outro lado, pesa mais: {frag2}.',
      'Há algo que abre o caminho, {frag1}, e algo que estreita, {frag3}; entre os dois se impõe {frag2}.',
      'Uma parte se apoia em {frag1} e outra empurra para {frag3}; no meio fica {frag2}.',
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
      'Na sombra do assunto fica isto: {frag3}.',
    ],
  },
  cabeza: [
    'Lá em cima, o que te ocupa a mente: {frag}.',
    'Acima de tudo pesa isto: {frag}.',
    'O que se pensa, mesmo sem dizer: {frag}.',
    'O que você fica remoendo na cabeça: {frag}.',
    'O que não te deixa dormir tem a ver com isto: {frag}.',
  ],
  // A única carta lida olhando para frente. Um matiz antecipatório, mas sempre
  // como tendência, nunca como fato consumado.
  paso: [
    'E na base, o que se desenha: {frag}.',
    'O que vem se anuncia nesta direção: {frag}.',
    'Se nada for forçado, o próximo se insinua assim: {frag}.',
    'No horizonte próximo já se anuncia isto: {frag}.',
    'Tudo indica que o que vem a seguir traga isto: {frag}.',
    'O caminho que se abre daqui vai em direção a isto: {frag}.',
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
        'O que você teme não está gravado em pedra. Use este olhar para soltar um pouco.',
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
        'Seja gentil consigo: entender já é começar a organizar.',
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
