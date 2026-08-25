import type { FragmentosDeTemaAngel } from '../../tiposFragmentos';

// Fragmentos do tema 'general' em português para as 78 cartas de Anjos.
//
// Registro (ver pt/bancos.ts): claro antes de elevado, místico sóbrio. Orações
// curtas que entram DENTRO de uma frase, nunca definições da carta.
//
// SAÚDE: o baralho traz várias cartas de cura, doença e "boa saúde". Saúde fica
// de fora do app por risco legal, então essas cartas são lidas aqui pelo lado do
// ânimo, do descanso e do cuidado consigo. Nunca se anuncia nem se insinua uma
// doença, uma melhora ou uma gravidez.
//
// AS OITO SEM REVERSO (13, 14, 23, 26, 32, 39, 44, 77): o baralho declara que
// não têm leitura invertida, então não se inventa uma. O motor usa a leitura
// direita delas quando saem do avesso.
export const FRAGMENTOS_GENERAL_ANGELES_PT: FragmentosDeTemaAngel = {
  1: {
    normal: ['um carinho que não pede nada em troca', 'as pessoas que te querem bem', 'dar sem fazer conta'],
    invertida: ['um carinho que esfriou', 'se fechar para não doer de novo', 'dar demais e ficar vazio'],
  },
  2: {
    normal: ['algo começando a aliviar', 'uma ferida que vai fechando', 'o cuidado de que você precisava, e chegou'],
    invertida: ['um alívio que demora', 'algo que não termina de fechar', 'seguir carregando o que já podia ser solto'],
  },
  3: {
    normal: ['uma ideia pedindo para sair', 'algo feito com as mãos e com vontade', 'a inspiração que aparece sem avisar'],
    invertida: ['vontade de criar sem onde', 'uma faísca que se apagou cedo demais', 'ficar sem nada para dizer'],
  },
  4: {
    normal: ['uma conversa que acomoda as coisas', 'alguém que medeia e baixa a tensão', 'um acordo que deixa os dois contentes'],
    invertida: ['uma conversa que não chega', 'um conselho que embolou mais do que esclareceu', 'ninguém pondo panos frios'],
  },
  5: {
    normal: ['alguém cuidando das suas costas', 'se plantar pelo que está certo', 'a firmeza de não negociar certas coisas'],
    invertida: ['uma firmeza que virou intolerância', 'ficar sem ninguém te apoiando', 'princípios usados para machucar'],
  },
  6: {
    normal: ['a calma de quem já viu isso passar', 'uma experiência que agora serve', 'saber esperar o momento'],
    invertida: ['uma ideia errada que se sustenta faz tempo', 'a teimosia de não aprender o óbvio', 'confiar em algo velho que já não serve'],
  },
  7: {
    normal: ['ter claro o que você quer e não soltar', 'não se deixar levar pelo arroubo', 'a firmeza de sustentar a posição'],
    invertida: ['se deixar levar pelo impulso do momento', 'uma convicção que cai no primeiro empurrão', 'ceder no que não devia'],
  },
  8: {
    normal: ['uma ideia grande que está começando', 'ver algo que os outros não viram', 'vontade de fazer diferente'],
    invertida: ['uma ideia grande que ficou só ideia', 'querer inovar sem ter com o quê', 'ideias que não viram nada'],
  },
  9: {
    normal: ['uma mudança já se gestando', 'um jeito novo de olhar a mesma coisa', 'a cabeça funcionando a todo vapor'],
    invertida: ['uma mudança que assusta e trava', 'voltas demais para algo simples', 'a cabeça que não para e não resolve'],
  },
  10: {
    normal: ['tomar o comando de algo seu', 'alguém que organiza e todos seguem', 'assumir de verdade'],
    invertida: ['um comando exercido mal', 'querer controlar o que não te cabe', 'perder autoridade sobre o que é seu'],
  },
  11: {
    normal: ['uma vontade que contagia', 'botar o corpo em alguma coisa', 'um entusiasmo que empurra todo mundo'],
    invertida: ['um entusiasmo que se apagou de uma vez', 'botar fogo no que pedia calma', 'ficar sem combustível no meio do caminho'],
  },
  12: {
    normal: ['uma sensibilidade que se nota e soma', 'fazer as coisas com bom coração', 'a vontade de sustentar o que você começou'],
    invertida: ['levar tudo a peito demais', 'uma bondade de que os outros se aproveitam', 'ficar sem vontade justo agora'],
  },
  13: {
    normal: ['uma ajuda que chega quando parecia impossível', 'alguém fazendo mais do que lhe cabe', 'um gesto nobre sem explicação'],
  },
  14: {
    normal: ['a família cuidando do que é seu', 'estar abrigado', 'alguém te cobrindo sem você pedir'],
  },
  15: {
    normal: ['se animar a algo que dá medo', 'uma decisão tomada de frente', 'a coragem de bancar a consequência'],
    invertida: ['não se animar justo quando é a hora', 'uma coragem que ficou nas palavras', 'decidir e se arrepender na hora'],
  },
  16: {
    normal: ['dois lados voltando a se falar', 'um meio-termo que não deixa ninguém mal', 'algo que se acomoda sozinho'],
    invertida: ['uma ambiguidade que já cansa', 'ficar no meio sem definir nada', 'uma reconciliação pela metade'],
  },
  17: {
    normal: ['distinguir o que é certo do que é conveniente', 'uma mão que chega na hora certa', 'saber medir'],
    invertida: ['confundir o que convém com o que é certo', 'uma ajuda que nunca apareceu', 'perder o critério na pressa'],
  },
  18: {
    normal: ['um hábito que faz mal aos poucos', 'um desânimo que vem de arrasto', 'erros que se repetem'],
    invertida: ['começar a sair de um mau hábito', 'levantar a cabeça depois de um tempo longo', 'perceber o erro a tempo'],
  },
  19: {
    normal: ['um brilho próprio que se nota', 'a capacidade de convencer qualquer um', 'algo seu que atrai sem esforço'],
    invertida: ['usar o charme para conseguir algo', 'um brilho que tapa o que não está', 'querer agradar às custas do que é seu'],
  },
  20: {
    normal: ['uma orientação que aparece bem na hora', 'entender algo que você vinha remoendo', 'a calma de quem sabe'],
    invertida: ['perder o norte por um tempo', 'uma orientação que não aterrissa', 'saber muito e aplicar nada'],
  },
  21: {
    normal: ['um amigo que está sem pedir nada', 'se sentir compreendido', 'gente que soma em volta'],
    invertida: ['um apoio que falhou quando fazia falta', 'sentir que ninguém te entende de todo', 'uma amizade que esfriou'],
  },
  22: {
    normal: ['uma notícia que chega e organiza', 'poder dizer enfim o que você pensava', 'se entender sem rodeios'],
    invertida: ['uma mensagem mal interpretada', 'algo que não se disse a tempo', 'falar muito e comunicar nada'],
  },
  23: {
    normal: ['uma etapa que fecha e outra que começa', 'algo que fica com você do que passou', 'uma passagem de bastão já anunciada'],
  },
  24: {
    normal: ['algo que se revela e muda o panorama', 'ideais novos que empurram', 'receber algo que vinha de antes'],
    invertida: ['uma revelação que chegou tarde', 'ideais que caíram sozinhos', 'algo esperado que não chegou'],
  },
  25: {
    normal: ['uma melhora que começa a se notar', 'o cuidado de que você estava precisando', 'algo começando a se consertar'],
    invertida: ['uma recuperação mais lenta do que se esperava', 'se descuidar justo quando era hora de cuidar', 'um alívio que ainda não chegou'],
  },
  26: {
    normal: ['aprender com um erro que saiu caro', 'o preço de algo mal feito', 'perceber a tempo o que aquilo custou'],
  },
  27: {
    normal: ['estar mais cuidado do que você acha', 'alguém vigiando para que nada quebre', 'um abrigo que se nota'],
    invertida: ['baixar a guarda justo agora', 'ficar mais exposto do que convém', 'uma proteção que afrouxou'],
  },
  28: {
    normal: ['uma verdade que sai e organiza tudo', 'uma mudança importante já em curso', 'as coisas indo para o lugar delas'],
    invertida: ['uma verdade que segue sendo tapada', 'uma mudança que encontra resistência', 'uma injustiça ainda não corrigida'],
  },
  29: {
    normal: ['um palpite que convém escutar', 'saber algo sem conseguir explicar', 'guardar a informação por ora'],
    invertida: ['ignorar o que a intuição vem marcando', 'um segredo que pesa', 'confundir o medo com um palpite'],
  },
  30: {
    normal: ['uma época generosa, das que se agradece', 'harmonia no dia a dia', 'algo que dá fruto sem forçar'],
    invertida: ['uma harmonia que se quebrou', 'a fartura que se dispersou sem você notar', 'algo que não termina de dar fruto'],
  },
  31: {
    normal: ['uma força que se nota ao entrar num lugar', 'liderar sem ter que se impor', 'um brilho que arrasta os outros'],
    invertida: ['uma força usada para esmagar', 'ficar sem brilho de cansaço', 'liderar sem ninguém querer seguir'],
  },
  32: {
    normal: ['uma ordem clara que organiza tudo', 'alguém que conduz com critério', 'uma mensagem justa, sem rodeios'],
  },
  33: {
    normal: ['um conselho que equilibra', 'fazer as coisas como devem ser feitas', 'uma ajuda que vem de cima'],
    invertida: ['um conselho que desequilibrou mais', 'perder o eixo na pressa', 'ficar sem quem te oriente'],
  },
  34: {
    normal: ['ganhar algo que custou', 'dominar uma situação que te dominava', 'algo que enfim se revela'],
    invertida: ['tropeços que deixam o futuro em dúvida', 'perder o controle de algo seu', 'uma revelação que decepcionou'],
  },
  35: {
    normal: ['algo que só agora se entende', 'um saber que não se ensina', 'uma busca começando a dar respostas'],
    invertida: ['uma busca que não leva a lugar nenhum', 'se perder em voltas sem saída', 'saber muito e entender pouco'],
  },
  36: {
    normal: ['algo grande que te excede e te empurra', 'um talento que se nota', 'estar conectado com algo maior'],
    invertida: ['se sentir pequeno diante de algo grande', 'um talento que não acha o seu lugar', 'perder a conexão com o que te sustentava'],
  },
  37: {
    normal: ['algo novo entrando e movendo tudo', 'uma viagem ou uma mudança de ares', 'vontade de que algo mude'],
    invertida: ['uma mudança que travou', 'o novo que assusta mais do que atrai', 'se mexer por se mexer'],
  },
  38: {
    normal: ['um corte de uma vez, sem aviso', 'algo que termina pela raiz', 'uma mudança que não se negocia'],
    invertida: ['um fim que vem sendo adiado', 'se agarrar a algo que já terminou', 'uma mudança pela metade que não fecha'],
  },
  39: {
    normal: ['um terreno em disputa', 'alguém jogando contra', 'uma briga já declarada'],
  },
  40: {
    normal: ['um amor que chega', 'algo estável se formando', 'a segurança de se sentir escolhido'],
    invertida: ['um amor que demora', 'uma estabilidade que ainda não se sente', 'duvidar de um lugar que já é seu'],
  },
  41: {
    normal: ['uma folga que se aproveita', 'uma boa fase no material', 'ter o bastante e sobrar'],
    invertida: ['uma folga que durou pouco', 'gastar a boa fase sem aproveitar', 'ter o justo e nada mais'],
  },
  42: {
    normal: ['algo que nasce e muda tudo', 'um começo com bons sinais', 'uma vida nova começando'],
    invertida: ['um começo que demora', 'algo que quer nascer e não acha o momento', 'um arranque que custou mais do que se previa'],
  },
  43: {
    normal: ['uma recompensa que chega', 'um lugar novo onde se provar', 'subir um degrau'],
    invertida: ['uma recompensa que não chegou', 'uma promoção que deram a outro', 'esperar um reconhecimento que não vem'],
  },
  44: {
    normal: ['algo feito por gosto e mais nada', 'um tempo de diversão bem merecido', 'se meter numa enrascada por curiosidade'],
  },
  45: {
    normal: ['um ciúme que não se diz', 'uma insegurança que aperta', 'a aflição de sentir que escapa'],
    invertida: ['soltar um ciúme que já cansava', 'entender que a insegurança era sua', 'uma aflição começando a afrouxar'],
  },
  46: {
    normal: ['uma união que se oficializa', 'uma paixão que vira alguma coisa', 'estar com alguém de verdade'],
    invertida: ['uma união que esfriou', 'uma paixão sem nada atrás', 'um compromisso que não termina de acontecer'],
  },
  47: {
    normal: ['o bom senso mandando', 'ver algo chegando e se preparar', 'a serenidade de não se apressar'],
    invertida: ['perder o bom senso na pressa', 'não ver chegar algo que estava à vista', 'decidir sem pensar'],
  },
  48: {
    normal: ['uma paz que se ganhou', 'dias bons, dos que se aproveita', 'se sentir inteiro'],
    invertida: ['uma paz que se quebrou', 'estar bem e não conseguir aproveitar', 'algo que embaça um bom momento'],
  },
  49: {
    normal: ['perceber algo que muda o rumo', 'uma etapa nova que começa firme', 'chegar a um lugar estável'],
    invertida: ['uma etapa que não termina de engrenar', 'a percepção que chega tarde', 'uma estabilidade que balança'],
  },
  50: {
    normal: ['um momento luminoso, dos que se lembra', 'algo que dá certo e se vê', 'estar na sua melhor forma'],
    invertida: ['uma luz que se apagou por um tempo', 'uma conquista que ficou encoberta', 'se sentir menos do que se é'],
  },
  51: {
    normal: ['uma imaginação que trabalha demais', 'sensibilidade à flor da pele', 'uma inspiração que vem de noite'],
    invertida: ['os nervos ganhando da razão', 'imaginar coisas que não aconteceram', 'uma sensibilidade que hoje pesa'],
  },
  52: {
    normal: ['um desgaste que você vem sentindo', 'o ânimo lá embaixo', 'o esforço de levantar mesmo assim'],
    invertida: ['começar a recuperar o ânimo', 'um cansaço que começa a ceder', 'sair aos poucos de uma fase baixa'],
  },
  53: {
    normal: ['um conselho que acerta em cheio', 'as contas ficando parelhas', 'um balanço justo'],
    invertida: ['um conselho que deu errado', 'uma balança que não empareja', 'sair perdendo sem motivo'],
  },
  54: {
    normal: ['uma sensibilidade que protege', 'um afeto que cuida de longe', 'alguém zelando pelo que é seu'],
    invertida: ['uma sensibilidade que hoje expõe demais', 'se sentir desprotegido', 'uma amizade que não esteve'],
  },
  55: {
    normal: ['uma esperança que se sustenta', 'algo que inspira e dá vontade', 'uma harmonia se formando'],
    invertida: ['uma esperança que foi se apagando', 'perder a inspiração', 'uma harmonia que não chega'],
  },
  56: {
    normal: ['um amor que se aproxima', 'alguém que dá o primeiro passo', 'uma proposta que chega'],
    invertida: ['uma aproximação que esfriou', 'uma proposta que não terminou de ser feita', 'alguém que recua bem quando você avançava'],
  },
  57: {
    normal: ['o começo de algo com alguém', 'estar apaixonado e isso se notar', 'uma relação que começa para valer'],
    invertida: ['um começo que não engrena', 'uma paixão que se apagou sozinha', 'algo que ficou em nada'],
  },
  58: {
    normal: ['inveja em volta, mesmo que não se diga', 'alguém que não comemora o seu', 'um despeito que se nota'],
    invertida: ['parar de se comparar', 'soltar um rancor que só pesava em você', 'entender que a inveja não era sua'],
  },
  59: {
    normal: ['abrir mão de algo por outra coisa', 'uma transição incômoda mas necessária', 'ainda não saber o que escolher'],
    invertida: ['não querer abrir mão de nada', 'uma transição que se esticou demais', 'uma indecisão que já faz mal'],
  },
  60: {
    normal: ['os filhos, ou o que você cuida como tal', 'algo seu que cresce e te sobrevive', 'o que você deixa plantado'],
    invertida: ['uma preocupação com quem depende de você', 'algo que você cuida e não responde', 'sentir que não dá conta de todos'],
  },
  61: {
    normal: ['entender algo maior que você', 'um crescimento que se sente', 'estar em outro lugar do que há um ano'],
    invertida: ['um crescimento que travou', 'ficar no mesmo lugar de sempre', 'buscar lá em cima o que estava do lado'],
  },
  62: {
    normal: ['o equilíbrio de quem não se altera', 'esperança com os pés no chão', 'algo que parece bom e também é'],
    invertida: ['um equilíbrio que se quebrou', 'esperar sem fundamento', 'ficar com a forma e perder o fundo'],
  },
  63: {
    normal: ['a inteligência posta onde faz falta', 'uma paz sustentada por critério', 'ter com o que e saber usar'],
    invertida: ['a inteligência usada para se impor', 'uma paz aparente que não é', 'poder que pesa mais do que ajuda'],
  },
  64: {
    normal: ['um desejo que não se disfarça', 'uma atração forte', 'vontade de aventura'],
    invertida: ['um desejo que se apagou', 'uma aventura que saiu cara', 'confundir atração com outra coisa'],
  },
  65: {
    normal: ['uma ambição que empurra', 'faro para onde está o bom', 'a astúcia de se mexer a tempo'],
    invertida: ['uma ambição que comeu o resto', 'uma astúcia usada para o lado errado', 'querer demais e perder o que havia'],
  },
  66: {
    normal: ['energia de sobra para o que vier', 'uma teimosia que acaba rendendo', 'algo que prospera de verdade'],
    invertida: ['ficar sem energia no meio do caminho', 'insistir onde já não rende', 'um negócio que não engrena'],
  },
  67: {
    normal: ['um poder usado só para o próprio', 'alguém que só olha a parte dele', 'um desejo que atropela tudo'],
    invertida: ['um abuso começando a cair', 'ver de frente o egoísmo de alguém', 'sair da órbita de quem te usava'],
  },
  68: {
    normal: ['se deixar levar pelo que vier', 'travas que aparecem uma atrás da outra', 'uma insegurança que freia'],
    invertida: ['começar a retomar as rédeas', 'uma trava que enfim cede', 'se animar depois de muito duvidar'],
  },
  69: {
    normal: ['uma tentação rondando', 'um hábito que faz mal', 'algo feito de noite e lamentado de dia'],
    invertida: ['soltar um hábito que pesava', 'resistir a uma tentação', 'sair de algo que estava te comendo'],
  },
  70: {
    normal: ['uma hostilidade que se sente no ar', 'alguém jogando contra sem dizer', 'um clima adverso'],
    invertida: ['uma hostilidade que começa a baixar', 'entender de onde vinha o ataque', 'sair de um clima que azedava o ânimo'],
  },
  71: {
    normal: ['um ódio que não se justifica', 'um clima instável que não deixa assentar', 'alguém torcendo para você se dar mal'],
    invertida: ['uma instabilidade que começa a acalmar', 'soltar um rancor antigo', 'se afastar de quem te fazia mal'],
  },
  72: {
    normal: ['uma ganância que se nota', 'alguém querendo tirar vantagem', 'um negócio que não é limpo'],
    invertida: ['descobrir a tempo uma jogada torta', 'soltar um apego que saía caro', 'sair de um acordo que não fechava'],
  },
  73: {
    normal: ['uma demora que não depende de você', 'alguém perto com más intenções', 'um caminho que trava'],
    invertida: ['uma demora que começa a destravar', 'ver chegar a má intenção', 'um obstáculo que enfim cede'],
  },
  74: {
    normal: ['uma ansiedade que não afrouxa', 'os nervos metidos em tudo', 'uma preocupação que desgasta'],
    invertida: ['uma ansiedade que começa a baixar', 'voltar a dormir tranquilo', 'tirar um peso das costas'],
  },
  75: {
    normal: ['um orgulho que não deixa ceder', 'o amor-próprio ferido', 'uma soberba que afasta as pessoas'],
    invertida: ['baixar o orgulho e consertar algo', 'reconhecer um erro', 'uma ferida no amor-próprio começando a fechar'],
  },
  76: {
    normal: ['uma ruptura que chega de uma vez', 'brigas que já viraram costume', 'algo que quebra sem aviso'],
    invertida: ['uma briga que começa a se apagar', 'algo quebrado que dá para consertar', 'uma trégua depois de muito barulho'],
  },
  77: {
    normal: ['uma mentira que faz mal', 'alguém que usa a astúcia para machucar', 'um maltrato disfarçado de outra coisa'],
  },
  78: {
    normal: ['alguém que manipula sem que se note', 'uma sedução com segunda intenção', 'te levarem para onde você não queria ir'],
    invertida: ['perceber que estavam te manejando', 'sair do feitiço de alguém', 'recuperar a decisão sobre o que é seu'],
  },
};
