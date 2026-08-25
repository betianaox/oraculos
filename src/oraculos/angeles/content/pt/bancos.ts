import type { BancosCruz } from '@/flujo/motorCruz';

// Banco conectivo em português para a cruz de cinco cartas de Anjos. Mesmo
// esqueleto do de Tarô, mas com voz própria (mensageiros, guardiões, luz), para
// que os dois oráculos não soem iguais. Português neutro (você).
//
// Aqui os anjos NÃO são nomeados. A pessoa vê as cartas; o que ela espera ler é
// o que dizem sobre a pergunta dela, não a ficha de cada uma.
//
// ── COMO SE ESCREVE AQUI ─────────────────────────────────────────────────
// As mesmas duas regras do banco de Tarô (ver tarot/content/pt/bancos.ts) e do
// prompt do servidor:
//
// 1. CLARO ANTES DE ELEVADO. Palavras do dia a dia. Proibido o vocabulário de
//    relatório: otimizar, gerir, processo, estrutura, dinâmica, potencial,
//    recursos, consolidar, "o plano afetivo".
// 2. MÍSTICO SÓBRIO. Este é o oráculo que mais puxa para o celestial, e por
//    isso é o que mais fácil fica pomposo. Um toque por frase — uma luz, um
//    guardião, um sinal — e o resto em palavras simples. Sem arcaísmos, sem "o
//    coro celestial determina".
export const BANCOS_ANGELES_PT: BancosCruz = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para o que você pergunta {tema}, isto é o que os anjos trazem.',
        'Vamos à sua pergunta {tema}. A mensagem se organiza assim.',
        'Isto é o que há para te mostrar {tema}.',
        'Vamos ao que você pergunta {tema}, devagar.',
      ],
      preocupacion: [
        'Aquiete o coração: você não está nisso sozinho {tema}.',
        'Tem quem cuide de você nisso. Olhe com calma o que se revela {tema}.',
        'Sei que isso pesa {tema}. Vamos devagar com o que aparece.',
      ],
      impulso: [
        'Antes de se lançar, escute o que os mensageiros trazem {tema}.',
        'A sua vontade tem asas; deixe a mensagem apontar a direção {tema}.',
        'Com toda essa garra {tema}, convém ver o conjunto primeiro.',
      ],
    },
    abierta: {
      neutro: [
        'Para o que você quer entender {tema}, este espelho se abre.',
        'Há cinco luzes acesas para olhar {tema}.',
        'Vamos olhar isso com calma {tema}.',
        'Isto é o que se ilumina quando você pergunta {tema}.',
      ],
      preocupacion: [
        'Respire fundo. Isto é uma orientação {tema}, não uma sentença.',
        'Sem pressa: o que hoje te pesa {tema} fica acomodado para você poder ver.',
        'Vamos baixar um tom {tema}. O que inquieta se enxerga melhor devagar.',
      ],
      impulso: [
        'Segure o voo um momento; tem algo para pensar {tema}.',
        'Tanta força merece uma pausa: olhe o que se ilumina {tema}.',
        'Antes de se mexer {tema}, deixe a mensagem assentar.',
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
  // nega o que se perguntou: reformulam e movem o olhar para o que a mensagem
  // pode de fato mostrar. Os anjos acompanham, não sentenciam.
  aperturasIntencion: {
    retorno: [
      'Você pergunta se volta. Ninguém assina um retorno, mas o que ficou aberto entre vocês aparece.',
      'Você quer saber se vai voltar. Isso não está na mão de mais ninguém além de vocês dois; o que aparece é como está o vínculo.',
      'A pergunta é sobre um retorno. Escute primeiro o que sustenta a distância hoje.',
    ],
    sentimiento: [
      'Você pergunta o que essa pessoa sente, e o coração dela é dela. O que se fala aqui é do que circula entre vocês.',
      'Você quer saber se te ama. Ninguém responde por outro, mas a mensagem mostra o laço como está.',
      'A pergunta aponta para o sentir do outro. O que se ilumina é o vínculo, não a decisão dele.',
    ],
    ruptura: [
      'Você está pensando em cortar, e isso quem escolhe é você. Aqui aparece o que pesa de cada lado.',
      'Você pergunta se deve deixar. Antes de decidir, escute o que está sendo sustentado.',
      'A pergunta é se vai embora. Aparece o que te segura e o que te empurra.',
    ],
    decision: [
      'Você pergunta o que te convém. Ninguém escolhe por você, mas fica organizado o que está em jogo.',
      'Você está entre dois caminhos. Olhe o que se acende de cada lado.',
      'A pergunta é o que fazer. Isto é o que os mensageiros põem à vista.',
    ],
    comienzo: [
      'Você pergunta se isso que começa vai prosperar. A mensagem mostra com o que começa.',
      'Você quer saber se dá certo. Aparece a terra onde isso se planta.',
      'A pergunta olha para o que está por começar. Isto é o que traz.',
    ],
    espera: [
      'Você pergunta quando. Datas não se anunciam, mas o que falta para isso amadurecer, sim.',
      'Você quer saber quanto falta. Ninguém marca o dia; o que está se cozinhando, sim.',
      'A pergunta é sobre o momento. Olhe o que ainda tem que se acomodar.',
    ],
  },
  // ATENÇÃO ao escrever estes modelos: os fragmentos vêm em duas formas —
  // sintagma nominal ("um desentendimento com um colega") e infinitivo ("se
  // plantar pelo que você sente")— então o espaço precisa aceitar as duas.
  situacion: {
    dos: [
      'No fundo algo se move: {frag1}. E no centro, {frag2}.',
      'Ao redor da cena: {frag1}. Sustentando tudo, {frag2}.',
      'Primeiro se anuncia isto: {frag1}. Mas a luz principal é outra: {frag2}.',
      'O que cerca a mensagem é {frag1}, e no centro dela arde {frag2}.',
      'De um lado aparece {frag1}, e bem no meio, {frag2}.',
      'O que se vê de cara: {frag1}. O que manda de verdade: {frag2}.',
    ],
    una: [
      'No centro de tudo há algo claro: {frag}.',
      'O que sustenta a cena é {frag}.',
      'Bem no meio arde isto: {frag}.',
      'Se for para ficar com um sinal só, é este: {frag}.',
    ],
  },
  // ATENÇÃO com os sujeitos: aqui não se nomeiam os anjos, então "um" ou "outro"
  // não se referem a nada. Tudo se apoia no fragmento em si.
  tension: {
    tres: [
      'De um lado puxa {frag1}; do outro, {frag3}. E no meio guia {frag2}: aí está o nó.',
      'Entre {frag1} e {frag3} se joga o equilíbrio, mas o que inclina a balança é {frag2}.',
      'O que aparece como {frag1} gira em torno de {frag2}, e o brilho final vem de {frag3}.',
      'Há algo que prepara o terreno, {frag1}, e algo que agita, {frag3}; no meio fica {frag2}.',
      'Duas coisas se cruzam, {frag1} e {frag2}, e acima das duas se estende {frag3}.',
      'Uma parte sua se apoia em {frag1} e outra empurra para {frag3}; no meio, {frag2} é o que decide.',
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
    'No seu pensamento pesa {frag}.',
    'O que hoje te ocupa a mente é {frag}.',
    'Lá em cima, no que você fica remoendo — seu ou daquela pessoa —, aparece {frag}.',
    'O que se pensa, mesmo sem dizer, é {frag}.',
    'O que não te deixa dormir tem a ver com {frag}.',
  ],
  // A única carta lida olhando para frente. Um matiz antecipatório, sempre como
  // tendência. Nunca uma promessa: os mensageiros anunciam um caminho, não um
  // desfecho.
  paso: [
    'E adiante se desenha isto: {frag}.',
    'O que vem se anuncia nesta direção: {frag}.',
    'Se nada for forçado, o próximo se insinua assim: {frag}.',
    'No horizonte próximo já se anuncia {frag}.',
    'Tudo indica que o que vem a seguir traga {frag}.',
    'O caminho que se abre daqui vai em direção a {frag}.',
  ],
  consejos: {
    cerrada: {
      neutro: [
        'Com isto à vista, decida sem apressar o final.',
        'Deixe a mensagem assentar antes do seu próximo passo.',
        'Você já tem com o que decidir. Leve o tempo que precisar.',
      ],
      preocupacion: [
        'Não carregue o final antes da hora: tem quem caminhe ao seu lado.',
        'O que você teme não está selado. Confie e solte um pouco.',
        'Um passo de cada vez basta. Hoje não precisa mais.',
      ],
      impulso: [
        'Boa força; meça o salto com o que o centro mostrou.',
        'Avance, mas sem pular o que estão te pedindo para ver.',
        'A vontade basta para começar; para sustentar, olhe o que está em cima.',
      ],
    },
    abierta: {
      neutro: [
        'Fique com o sinal que mais ressoou e deixe trabalhar alguns dias.',
        'Não precisa resolver tudo hoje; ver com mais luz já basta.',
        'Deixe isso assentar. O que importa volta sozinho.',
      ],
      preocupacion: [
        'Seja gentil consigo: escutar já é começar a curar.',
        'Se permita não ter todas as respostas ainda.',
        'O que dói também vai se acomodando, mesmo que hoje não pareça.',
      ],
      impulso: [
        'Antes de agir, deixe a mensagem assentar.',
        'A sua vontade é um dom; oriente com o que você acabou de ver.',
        'Guarde um pouco desse fogo para depois. Vai fazer falta.',
      ],
    },
  },
  ecoTercero: [
    'Em tudo isso, essa pessoa pesa mais do que parece.',
    'O vínculo com quem você nomeia tinge cada canto da mensagem.',
    'Esse alguém também faz parte do quadro.',
    'O que o outro faz também está puxando esse fio.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte disso olha para trás, para algo que ainda não fechou.',
      'Há um antes que ainda respira na cena.',
      'Algo do antigo ainda tem raiz aqui.',
    ],
    futuro: [
      'A pergunta empurra para frente, e a resposta vai nessa direção.',
      'Tudo se inclina para o que ainda não chegou.',
      'O olhar está posto mais adiante, e é para lá que aponta o que vem.',
    ],
  },
};
