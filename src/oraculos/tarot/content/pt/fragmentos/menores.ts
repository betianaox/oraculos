import type { FragmentosDeTema } from '../../types';

// Fragmentos do tema 'general' em português para os 56 Arcanos Menores. São
// fundidos com os Maiores no mapa 'general' (ver pt/index.ts). É o degrau de
// fallback: se uma carta não tem fragmento de amor/trabalho/dinheiro, a tirada
// usa estes.
//
// Registro (ver pt/bancos.ts): claro antes de elevado, místico sóbrio. Orações
// curtas que entram dentro de uma frase, nunca definições da carta.
export const FRAGMENTOS_GENERAL_MENORES_PT: FragmentosDeTema = {
  // ── Paus ─────────────────────────────────────────────────────────────────
  'bastos-as': {
    normal: [
      'uma faísca que acende a vontade de fazer',
      'o impulso puro de algo novo pedindo para nascer',
      'o primeiro empurrão para uma ideia com fogo',
    ],
    invertida: [
      'uma faísca que não termina de pegar',
      'entusiasmo que esfria antes de começar',
      'um projeto que demora a decolar',
    ],
  },
  'bastos-dos': {
    normal: [
      'a hora de planejar e olhar longe',
      'decidir o rumo antes de se lançar',
      'uma conquista que abre a pergunta de para onde crescer',
    ],
    invertida: [
      'medo de sair do conhecido',
      'planos que não se concretizam',
      'ficar no seguro por temer o que é grande',
    ],
  },
  'bastos-tres': {
    normal: [
      'algo já em marcha que começa a render',
      'algo que cresce, e a confiança de ter começado bem',
      'olhar o horizonte esperando o que foi semeado',
    ],
    invertida: [
      'o esperado que demora a voltar',
      'planos que não voltam como se pensava',
      'expectativas que convém rever',
    ],
  },
  'bastos-cuatro': {
    normal: [
      'uma conquista que se compartilha e se comemora',
      'a alegria da casa e uma base estável',
      'uma soleira festiva, de portas abertas ao que é bom',
    ],
    invertida: [
      'uma comemoração que esfria ou fica para depois',
      'uma harmonia ainda frágil',
      'uma travessia entre uma etapa e outra',
    ],
  },
  'bastos-cinco': {
    normal: [
      'o atrito de muitos empurrando ao mesmo tempo',
      'competição e pequenos choques de ego',
      'uma bagunça que pede ordem',
    ],
    invertida: [
      'um choque evitado a tempo',
      'a tensão que baixa ou encontra acordo',
      'desviar de uma briga, para o bem ou para o mal',
    ],
  },
  'bastos-seis': {
    normal: [
      'um triunfo reconhecido e aplaudido',
      'o sucesso que se mostra e se comemora',
      'a confiança de ter conseguido',
    ],
    invertida: [
      'uma conquista que ninguém vê',
      'a queda do prestígio conquistado',
      'o ego que confunde aplauso com valor',
    ],
  },
  'bastos-siete': {
    normal: [
      'se plantar e defender o que é seu',
      'a coragem de sustentar a posição',
      'a vantagem da convicção diante da oposição',
    ],
    invertida: [
      'o cansaço de tanto defender',
      'vontade de ceder terreno',
      'se sentir em desvantagem',
    ],
  },
  'bastos-ocho': {
    normal: [
      'coisas que aceleram de repente',
      'notícias ou uma mensagem a caminho',
      'energia em pleno voo para o destino dela',
    ],
    invertida: [
      'um impulso que freia',
      'mensagens que não chegam',
      'ir rápido demais e perder o controle',
    ],
  },
  'bastos-nueve': {
    normal: [
      'seguir de pé depois de muitas batalhas',
      'a última reserva de forças',
      'perseverar quando você quase conseguiu',
    ],
    invertida: [
      'o cansaço ganhando a partida',
      'desconfiança que virou suspeita de todo mundo',
      'defender por inércia o que já não precisa',
    ],
  },
  'bastos-diez': {
    normal: [
      'o peso de tudo o que você assumiu',
      'uma carga que ficou excessiva',
      'uma conquista que custa carregar sozinho',
    ],
    invertida: [
      'aprender a soltar e delegar',
      'o colapso de quem não soltou a tempo',
      'largar o que não era sua obrigação carregar',
    ],
  },
  'bastos-sota': {
    normal: [
      'o espírito explorador que está começando',
      'curiosidade e vontade de experimentar',
      'uma notícia que acende um projeto',
    ],
    invertida: [
      'entusiasmo que se dispersa sem foco',
      'promessas que não se sustentam',
      'uma notícia que demora ou decepciona',
    ],
  },
  'bastos-caballo': {
    normal: [
      'energia lançada à ação',
      'aventura e coragem para se atirar',
      'vontade de encarar algo com paixão',
    ],
    invertida: [
      'um impulso que sai do controle',
      'decisões apressadas',
      'um projeto que perdeu o fogo',
    ],
  },
  'bastos-reina': {
    normal: [
      'segurança e calor que atraem',
      'um carisma que acende os outros',
      'sustentar os projetos com paixão e firmeza',
    ],
    invertida: [
      'insegurança tapada com exigência',
      'ciúme que embaça',
      'uma energia que se apagou',
    ],
  },
  'bastos-rey': {
    normal: [
      'o líder com visão que inspira',
      'conduzir com garra e convicção',
      'paixão transformada em direção',
    ],
    invertida: [
      'um comando que vira autoritário',
      'impaciência com quem não segue o ritmo',
      'decisões no calor do impulso',
    ],
  },
  // ── Copas ────────────────────────────────────────────────────────────────
  'copas-as': {
    normal: [
      'o coração que se abre',
      'o começo de um amor ou de uma etapa plena',
      'o sentir que transborda e quer se dar',
    ],
    invertida: [
      'emoções reprimidas',
      'um coração que se fecha por medo',
      'um vazio afetivo difícil de preencher',
    ],
  },
  'copas-dos': {
    normal: [
      'o encontro de dois que se escolhem',
      'atração mútua, dos dois lados',
      'um vínculo em que ambos dão e recebem',
    ],
    invertida: [
      'um vínculo que desnivela',
      'tensão entre dois',
      'uma união que esfria',
    ],
  },
  'copas-tres': {
    normal: [
      'o brinde entre amigos',
      'companhia e alegria compartilhada',
      'o apoio dos seus',
    ],
    invertida: [
      'uma festa que passa do ponto',
      'fofoca que embaça',
      'vontade de se afastar do barulho',
    ],
  },
  'copas-cuatro': {
    normal: [
      'o olhar enfadado que não vê o que tem',
      'desinteresse pelo que está sendo oferecido',
      'estar tão em si que se perde uma chance',
    ],
    invertida: [
      'o olhar que se levanta de novo',
      'aceitar o que é oferecido',
      'sair do torpor',
    ],
  },
  'copas-cinco': {
    normal: [
      'o luto pelo que se derramou',
      'o olhar fixo no que se perdeu',
      'uma tristeza que esquece o que ainda resta',
    ],
    invertida: [
      'o olhar que se volta para o que sobrou',
      'aceitação e perdão',
      'recolher o que não quebrou e seguir',
    ],
  },
  'copas-seis': {
    normal: [
      'a doçura da lembrança',
      'a ternura do simples e conhecido',
      'um reencontro, ou a inocência de antes',
    ],
    invertida: [
      'viver ancorado no passado',
      'idealizar o que já não está',
      'não conseguir soltar o que terminou',
    ],
  },
  'copas-siete': {
    normal: [
      'uma nuvem de possibilidades imaginadas',
      'muitas opções sedutoras',
      'distinguir o real do que só brilha',
    ],
    invertida: [
      'a névoa que se dissipa',
      'clareza para escolher',
      'descartar o que era só miragem',
    ],
  },
  'copas-ocho': {
    normal: [
      'a decisão de partir em busca de algo mais fundo',
      'deixar para trás o que já não preenche',
      'seguir um chamado interior',
    ],
    invertida: [
      'medo de soltar e partir',
      'ficar por inércia',
      'a dúvida entre ir e voltar',
    ],
  },
  'copas-nueve': {
    normal: [
      'o desejo realizado',
      'satisfação e bem-estar',
      'o gosto de aproveitar o que se conseguiu',
    ],
    invertida: [
      'uma satisfação vazia',
      'buscar no excesso o que não preenche',
      'um desejo que, realizado, não satisfaz',
    ],
  },
  'copas-diez': {
    normal: [
      'a plenitude do coração compartilhada',
      'felicidade em família e vínculos em harmonia',
      'a casa em paz',
    ],
    invertida: [
      'uma harmonia que começa a rachar',
      'tensões na família',
      'a distância entre o que se sonhou e o que é',
    ],
  },
  'copas-sota': {
    normal: [
      'uma mensagem afetuosa',
      'o despertar de uma sensibilidade nova',
      'uma notícia que emociona',
    ],
    invertida: [
      'sensibilidade à flor da pele',
      'imaturidade nas emoções',
      'uma notícia do coração que decepciona',
    ],
  },
  'copas-caballo': {
    normal: [
      'uma proposta do coração',
      'romance e idealismo',
      'um convite afetivo a caminho',
    ],
    invertida: [
      'promessas que não se cumprem',
      'ilusões sem sustento',
      'um encanto que é só aparência',
    ],
  },
  'copas-reina': {
    normal: [
      'uma empatia que acolhe os outros',
      'intuição e sensibilidade fundas',
      'acompanhar sem se perder',
    ],
    invertida: [
      'dependência afetiva',
      'carregar as emoções dos outros',
      'dar tanto que você se esvazia',
    ],
  },
  'copas-rey': {
    normal: [
      'sentir fundo sem se afogar',
      'serenidade e diplomacia',
      'aconselhar com o coração e a cabeça ao mesmo tempo',
    ],
    invertida: [
      'emoções tapadas que pressionam',
      'usar o afeto para conseguir o que quer',
      'uma frieza que nega o sentir',
    ],
  },
  // ── Espadas ──────────────────────────────────────────────────────────────
  'espadas-as': {
    normal: [
      'o corte da clareza',
      'uma verdade que se vê de uma vez',
      'uma ideia afiada que organiza o caos',
    ],
    invertida: [
      'confusão que não deixa ver',
      'a verdade usada para ferir',
      'ideias embaçadas',
    ],
  },
  'espadas-dos': {
    normal: [
      'uma decisão que se evita',
      'um equilíbrio tenso que não pode durar',
      'não querer olhar para não ter que escolher',
    ],
    invertida: [
      'a venda que enfim sai',
      'olhar a situação de frente',
      'a decisão adiada que enfim se toma',
    ],
  },
  'espadas-tres': {
    normal: [
      'a ferida no coração, sem rodeios',
      'dor, ruptura, desilusão',
      'uma verdade que dói e mesmo assim esclarece',
    ],
    invertida: [
      'a ferida que começa a fechar',
      'o perdão que chega',
      'soltar a mágoa que se carregava',
    ],
  },
  'espadas-cuatro': {
    normal: [
      'a trégua necessária',
      'descansar e repor forças',
      'um respiro depois da tempestade',
    ],
    invertida: [
      'um descanso que não chega',
      'voltar à carga antes da hora',
      'uma inquietação que não deixa parar',
    ],
  },
  'espadas-cinco': {
    normal: [
      'uma vitória de gosto amargo',
      'ganhar a qualquer custo',
      'um orgulho ferido que não valia o preço',
    ],
    invertida: [
      'soltar o orgulho',
      'buscar a reconciliação',
      'deixar para trás uma briga que já fez estrago',
    ],
  },
  'espadas-seis': {
    normal: [
      'a travessia para águas mais calmas',
      'se afastar do difícil para curar',
      'uma transição ou uma viagem que acalma',
    ],
    invertida: [
      'custa soltar o que ficou para trás',
      'carregar o peso do passado',
      'uma travessia que não termina de acontecer',
    ],
  },
  'espadas-siete': {
    normal: [
      'uma jogada silenciosa',
      'cálculo e astúcia',
      'conseguir algo por vias indiretas',
    ],
    invertida: [
      'um engano que vem à tona',
      'uma confissão',
      'devolver o que se pegou por atalho',
    ],
  },
  'espadas-ocho': {
    normal: [
      'se sentir preso, em boa parte pelos próprios medos',
      'limites que você mesmo se pôs',
      'uma paralisia que na verdade tem saída',
    ],
    invertida: [
      'ver que a saída estava ali',
      'se livrar da crença que paralisava',
      'recuperar o próprio poder',
    ],
  },
  'espadas-nueve': {
    normal: [
      'a angústia da madrugada',
      'preocupações que crescem no escuro',
      'um medo maior que o fato',
    ],
    invertida: [
      'a noite que começa a ceder',
      'criar coragem de pedir ajuda',
      'entender que o medo era desproporcional',
    ],
  },
  'espadas-diez': {
    normal: [
      'um fim que toca o fundo',
      'um fechamento doloroso, quase uma derrota',
      'o ponto mais baixo, de onde se volta a subir',
    ],
    invertida: [
      'a recuperação que começa',
      'o pior que já passou',
      'resistir a um fim que já chegou',
    ],
  },
  'espadas-sota': {
    normal: [
      'a mente desperta e curiosa',
      'ideias novas e palavra ágil',
      'alguém atento e perspicaz',
    ],
    invertida: [
      'palavras que cortam',
      'fofoca e desconfiança',
      'uma mente que analisa e não sente',
    ],
  },
  'espadas-caballo': {
    normal: [
      'avançar com a força de uma ideia',
      'ir de frente e dizer as coisas',
      'uma mente veloz lançada à ação',
    ],
    invertida: [
      'impulsividade que atropela',
      'agressividade na palavra',
      'decidir sem pensar nas consequências',
    ],
  },
  'espadas-reina': {
    normal: [
      'pensar com lucidez e falar a verdade',
      'independência e perspicácia',
      'não se deixar enganar',
    ],
    invertida: [
      'uma clareza que esfriou',
      'crítica que fere',
      'uma mente afiada fechada para o sentir',
    ],
  },
  'espadas-rey': {
    normal: [
      'governar pela razão e pela regra',
      'julgamento claro e justo',
      'cortar o justo, sem capricho',
    ],
    invertida: [
      'a razão virada fria ou injusta',
      'abuso de poder',
      'argumentos que manipulam em vez de esclarecer',
    ],
  },
  // ── Ouros ────────────────────────────────────────────────────────────────
  'oros-as': {
    normal: [
      'a semente da prosperidade',
      'uma oportunidade concreta e fértil',
      'um começo material com raízes',
    ],
    invertida: [
      'uma oportunidade que se deixa passar',
      'insegurança material',
      'planos que prometiam e não pegam',
    ],
  },
  'oros-dos': {
    normal: [
      'a arte de fazer malabares',
      'equilibrar várias coisas com jogo de cintura',
      'sustentar tudo enquanto se anda',
    ],
    invertida: [
      'os malabares que caem',
      'sobrecarga e desordem',
      'não dar conta de tudo e perder o ritmo',
    ],
  },
  'oros-tres': {
    normal: [
      'o ofício e o trabalho em equipe',
      'colaboração que soma talentos',
      'trazer o que você sabe para uma obra comum',
    ],
    invertida: [
      'ninguém puxando para o mesmo lado',
      'desacordos que travam',
      'trabalho feito pela metade',
    ],
  },
  'oros-cuatro': {
    normal: [
      'segurar o que é seu com firmeza',
      'segurança material e poupança',
      'prudência com o que se tem',
    ],
    invertida: [
      'ganância e apego que sufocam',
      'aprender a soltar e dividir',
      'mãos ocupadas demais de tanto agarrar',
    ],
  },
  'oros-cinco': {
    normal: [
      'o frio da falta',
      'se sentir de fora ou em apuros',
      'um abrigo perto que não se enxerga',
    ],
    invertida: [
      'a maré que vira',
      'a ajuda que aparece',
      'sair da falta e voltar a se aquecer',
    ],
  },
  'oros-seis': {
    normal: [
      'o fluxo justo de dar e receber',
      'generosidade e ajuda que chega',
      'o equilíbrio entre quem tem e quem precisa',
    ],
    invertida: [
      'ajuda com condições',
      'dívidas que amarram',
      'um dar e receber que não está parelho',
    ],
  },
  'oros-siete': {
    normal: [
      'a pausa para avaliar o que foi semeado',
      'paciência enquanto a colheita amadurece',
      'o trabalho que já começa a render',
    ],
    invertida: [
      'impaciência pelos resultados',
      'esforço posto onde não rende',
      'colheitas mais pobres do que se esperava',
    ],
  },
  'oros-ocho': {
    normal: [
      'o prazer do ofício feito com esmero',
      'melhorar à força de prática',
      'afinar o que você sabe fazer',
    ],
    invertida: [
      'trabalho mecânico e sem alma',
      'um perfeccionismo que paralisa',
      'fazer as coisas de qualquer jeito',
    ],
  },
  'oros-nueve': {
    normal: [
      'aproveitar o que se conquistou por mérito próprio',
      'independência e autossuficiência',
      'o gosto de estar bem e sozinho',
    ],
    invertida: [
      'depender dos outros',
      'uma solidão que pesa',
      'uma conquista à custa de todo o resto',
    ],
  },
  'oros-diez': {
    normal: [
      'a prosperidade que cria raízes',
      'estabilidade, família e legado',
      'a segurança que se constrói com o tempo',
    ],
    invertida: [
      'conflitos por dinheiro ou herança',
      'nada firme embaixo dos pés',
      'apego ao acumulado que embola os vínculos',
    ],
  },
  'oros-sota': {
    normal: [
      'o aluno aplicado da vida',
      'uma chance concreta de aprender',
      'o primeiro passo sério rumo a algo durável',
    ],
    invertida: [
      'o foco que se perde',
      'planos que não saem do papel',
      'uma oportunidade que se deixa escapar',
    ],
  },
  'oros-caballo': {
    normal: [
      'o mais metódico e confiável',
      'avançar passo a passo, sem pressa',
      'terminar o que se começa',
    ],
    invertida: [
      'a constância virada inércia',
      'a mesma coisa mês após mês, sem nada subir',
      'teimosia com um método que já não serve',
    ],
  },
  'oros-reina': {
    normal: [
      'cuidar do material com os pés no chão',
      'uma casa próspera que alimenta',
      'bom senso para administrar e cuidar ao mesmo tempo',
    ],
    invertida: [
      'esgotamento de atender a tudo',
      'se descuidar para sustentar os outros',
      'uma sede por coisas que nasce da insegurança',
    ],
  },
  'oros-rey': {
    normal: [
      'a maestria no material',
      'um sucesso consolidado e seguro',
      'a generosidade de quem já não teme pelo seu',
    ],
    invertida: [
      'prosperidade que azeda em ganância',
      'apego ao status e ao controle',
      'medir tudo em dinheiro',
    ],
  },
};
