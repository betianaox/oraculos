// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Menores en español. Mismo tono que los Mayores: reflexivo
// y didáctico, enseña a leer la imagen, nunca adivinatorio. Cuatro palos de 14
// cartas: Bastos (fuego/acción), Copas (agua/emoción), Espadas (aire/mente) y
// Oros (tierra/materia).
export const WIKI_MENORES_PT: WikiPorCarta = {
  // ── Bastos · Fuego · acción, pasión, creatividad ─────────────────────────
  'bastos-as': {
    nombre: 'Ás de Paus',
    palabrasClave: {
      normal: ['faísca', 'inspiração', 'impulso', 'início criativo'],
      invertida: ['ideia que não engrena', 'desânimo', 'demora', 'fogo apagado'],
    },
    significado: {
      normal:
        'O Ás de Paus é a faísca inicial: uma ideia que acende a vontade ' +
        'de fazer. Marca o impulso puro, o momento em que algo novo pede ' +
        'para nascer e só espera que você coloque o seu corpo.',
      invertida:
        'Invertida, a faísca não acende: um entusiasmo que esfria, um projeto que demora ou custa a começar. ' +
        'Pode indicar dúvida justamente no momento em que seria necessário dar o passo decisivo. ' +
        'falta aquele primeiro empurrão.',
    },
    simbolismo:
      'Uma mão surge de uma nuvem e segura um bastão que reverdece: a energia ' +
      'bruta oferecida do alto. As folhas que brotam mostram que esse ' +
      'impulso já traz vida própria.',
  },
  'bastos-dos': {
    nombre: 'Dois de Paus',
    palabrasClave: {
      normal: ['planejamento', 'decisão', 'horizonte', 'primeiro passo'],
      invertida: ['medo do desconhecido', 'indecisão', 'ficar'],
    },
    significado: {
      normal:
        'O Dois de Paus é o momento de planejar e olhar longe. Já existe algo ' +
        'conquistado, mas surge a pergunta sobre para onde crescer. Convida a ' +
        'decidir o rumo antes de se lançar.',
      invertida:
        'Invertido, o horizonte causa vertigem: medo de sair do conhecido, ' +
        'planos que não se concretizam, ficar no seguro por medo do ' +
        'grande.',
    },
    simbolismo:
      'Uma figura segura um globo terrestre e olha o mar de cima de uma muralha, ' +
      'entre dois bastões: já conquistou algo e avalia o mundo por vir. A ' +
      'paisagem aberta é a possibilidade; a muralha, o seguro que seria preciso ' +
      'deixar.',
  },
  'bastos-tres': {
    nombre: 'Três de Paus',
    palabrasClave: {
      normal: ['expansão', 'visão', 'progresso', 'colher frutos'],
      invertida: ['demoras', 'planos travados', 'expectativa frustrada'],
    },
    significado: {
      normal:
        'O Três de Paus é o projeto já em curso: o que você semeou começa ' +
        'a se mover e agora se aguarda o retorno. Fala de expansão, de olhar ' +
        'para longe com confiança no que foi colocado em movimento.',
      invertida:
        'Invertido, o esperado tarda: atrasos, planos que não retornam como se ' +
        'acreditava, a frustração de ver o horizonte vazio. Pode ser hora de rever ' +
        'as expectativas.',
    },
    simbolismo:
      'De costas, uma figura contempla o mar do alto, com três ' +
      'bastões firmes ao seu lado: os barcos já zarparam. Olha para longe ' +
      'porque o que é seu já está em movimento e só resta esperar o retorno.',
  },
  'bastos-cuatro': {
    nombre: 'Quatro de Paus',
    palabrasClave: {
      normal: ['celebração', 'lar', 'estabilidade', 'conquista compartilhada'],
      invertida: ['festejo adiado', 'harmonia frágil', 'transição'],
    },
    significado: {
      normal:
        'O Quatro de Paus é o brinde pelo que foi conquistado. Fala de uma ' +
        'conquista compartilhada, da alegria do lar e de uma base estável ' +
        'onde descansar antes de seguir.',
      invertida:
        'Invertido, a celebração esfria ou é adiada: uma harmonia ainda ' +
        'frágil, um festejo que não se concretiza, um trânsito entre uma etapa ' +
        'e outra.',
    },
    simbolismo:
      'Quatro bastões sustentam uma guirlanda de flores, como um pórtico ' +
      'festivo; ao fundo, duas figuras celebram diante de um castelo. Tudo fala de ' +
      'um limiar alegre, de portas abertas para o que já foi alcançado.',
  },
  'bastos-cinco': {
    nombre: 'Cinco de Paus',
    palabrasClave: {
      normal: ['conflito', 'competição', 'atritos', 'desordem'],
      invertida: ['evitar o choque', 'tensão que diminui', 'acordo'],
    },
    significado: {
      normal:
        'O Cinco de Paus é a fricção de muitos empurrando ao mesmo tempo. Fala de ' +
        'competição, discussões e pequenos choques de egos mais barulhentos que ' +
        'graves. Geralmente pede ordem em meio à confusão.',
      invertida:
        'Invertido, o conflito diminui: evita-se o choque, a tensão baixa ou ' +
        'encontra-se um acordo. Também pode ser esquivar-se de uma briga que ' +
        'seria conveniente enfrentar.',
    },
    simbolismo:
      'Cinco figuras agitam seus bastões no que parece mais uma briga ' +
      'desordenada do que uma batalha real. Ninguém está ferido: é o caos das ' +
      'vontades que não se coordenam.',
  },
  'bastos-seis': {
    nombre: 'Seis de Paus',
    palabrasClave: {
      normal: ['vitória', 'reconhecimento', 'sucesso', 'liderança'],
      invertida: ['reconhecimento que falta', 'queda de prestígio', 'ego'],
    },
    significado: {
      normal:
        'O Seis de Paus é o triunfo reconhecido. Fala de sucesso público, de ' +
        'ser aplaudido por uma conquista e a confiança que vem de tê-la alcançado. ' +
        'A vitória aqui se mostra e é celebrada.',
      invertida:
        'Invertida, falta o reconhecimento: uma conquista que ninguém vê, a queda ' +
        'do favor ou o ego inflado que confunde aplausos com valor real.',
    },
    simbolismo:
      'Um cavaleiro avança coroado de louros sobre um cavalo branco, com a ' +
      'multidão ao redor e bastões no alto: o desfile do vencedor. O ' +
      'louro em seu bastão coroa o que foi alcançado.',
  },
  'bastos-siete': {
    nombre: 'Sete de Paus',
    palabrasClave: {
      normal: ['defesa', 'coragem', 'sustentar a posição', 'convicção'],
      invertida: ['esgotamento', 'ceder terreno', 'sentir-se sobrecarregado'],
    },
    significado: {
      normal:
        'O Sete de Paus é manter-se firme e defender o que é seu. Fala da coragem ' +
        'de sustentar uma posição diante da oposição, mesmo quando todos ' +
        'parecem vir contra você. Você tem a vantagem da altura: a convicção.',
      invertida:
        'Invertido, é difícil manter-se: esgotamento de tanto defender, vontade de ' +
        'ceder terreno, a sensação de estar em desvantagem. Pode pedir para escolher ' +
        'melhor quais batalhas enfrentar.',
    },
    simbolismo:
      'Uma figura no alto de uma colina repele com seu bastão outros seis que ' +
      'sobem lá de baixo: luta a partir de uma posição vantajosa. Seus sapatos ' +
      'desiguais revelam que se preparou às pressas, mas resiste.',
  },
  'bastos-ocho': {
    nombre: 'Oito de Paus',
    palabrasClave: {
      normal: ['rapidez', 'movimento', 'notícias', 'avanço veloz'],
      invertida: ['demoras', 'bloqueios', 'pressa mal gerida'],
    },
    significado: {
      normal:
        'O Oito de Paus é puro movimento: coisas que se aceleram, notícias ' +
        'que chegam, um processo que finalmente dispara. Fala de acontecimentos ' +
        'rápidos, às vezes de uma viagem ou uma mensagem a caminho.',
      invertida:
        'Invertido, o impulso é freado: demoras, mensagens que não chegam, um ' +
        'pressa que trava. Também pode ser ir rápido demais e perder o ' +
        'controle.',
    },
    simbolismo:
      'Oito de Paus voam em paralelo pelo ar, já em descida, sobre uma ' +
      'paisagem serena. Não há figuras: a carta é pura trajetória, energia em ' +
      'pleno voo rumo ao seu destino.',
  },
  'bastos-nueve': {
    nombre: 'Nove de Paus',
    palabrasClave: {
      normal: ['resistência', 'perseverança', 'última defesa', 'equilíbrio'],
      invertida: ['esgotamento', 'paranoia', 'baixar a guarda tarde demais'],
    },
    significado: {
      normal:
        'O Nove de Paus é aquele que permanece de pé após muitas batalhas. Cansado ' +
        'mas firme, guarda a última reserva de forças. Fala de perseverar ' +
        'quando você quase conseguiu, mesmo que doa.',
      invertida:
        'Invertido, o cansaço vence: esgotamento, desconfiança que se torna ' +
        'paranoia, defender por inércia uma posição que já não precisa ser ' +
        'defendida.',
    },
    simbolismo:
      'Uma figura enfaixada se apoia em um bastão e vigia os outros oito, ' +
      'fixados atrás como uma paliçada. Está ferido e alerta: espera um ' +
      'último ataque que talvez não chegue.',
  },
  'bastos-diez': {
    nombre: 'Dez de Paus',
    palabrasClave: {
      normal: ['carga', 'responsabilidade', 'esforço', 'excesso'],
      invertida: ['soltar o peso', 'delegar', 'colapso', 'libertação'],
    },
    significado: {
      normal:
        'O Dez de Paus é o peso de tudo o que foi assumido. Fala de uma carga que ' +
        'se tornou excessiva, de responsabilidades que carregamos quase sem ver ' +
        'o caminho. A conquista existe, mas custa carregá-la sozinho.',
      invertida:
        'Invertido, algo se solta: aprender a delegar e deixar o peso, ou então o ' +
        'colapso de quem não soltou a tempo. Em sua melhor face, é libertar-se de ' +
        'o que não era para você carregar.',
    },
    simbolismo:
      'Uma figura avança curvada sob dez bastões que mal consegue abraçar, ' +
      'bloqueando sua visão, rumo a um povoado próximo. A meta está à vista, ' +
      'mas o fardo a impede de enxergá-la.',
  },
  'bastos-sota': {
    nombre: 'Valete de Paus',
    palabrasClave: {
      normal: ['entusiasmo', 'exploração', 'curiosidade', 'notícia inspiradora'],
      invertida: ['inconstância', 'entusiasmo sem rumo', 'notícia demorada'],
    },
    significado: {
      normal:
        'O Valete de Paus é o espírito explorador que está apenas começando. Traz ' +
        'entusiasmo, curiosidade e vontade de experimentar. Pode anunciar uma notícia ' +
        'que acende um projeto ou alguém jovem de energia contagiante.',
      invertida:
        'Invertido, esse fogo se dispersa: entusiasmo sem foco, promessas que não ' +
        'se sustentam, uma notícia que demora ou decepciona.',
    },
    simbolismo:
      'Um jovem observa seu bastão florescido como quem olha uma ideia recém ' +
      'nascida, em um deserto de dunas. Suas roupas com salamandras —criatura do ' +
      'fogo— falam de uma energia que quer se expressar.',
  },
  'bastos-caballo': {
    nombre: 'Cavaleiro de Paus',
    palabrasClave: {
      normal: ['aventura', 'impulso', 'ação', 'paixão em movimento'],
      invertida: ['impulsividade', 'pressa', 'projeto que esfria'],
    },
    significado: {
      normal:
        'O Cavaleiro de Paus é a energia lançada à ação. Fala de ' +
        'aventura, mudança de cenário e coragem para se lançar. Quando aparece, ' +
        'há vontade de se mover e de encarar algo com paixão.',
      invertida:
        'Invertido, o impulso se descontrola: pressa, decisões precipitadas, ' +
        'arranques que não se sustentam. Também um projeto que perdeu seu fogo.',
    },
    simbolismo:
      'Um cavaleiro de armadura segura um cavalo empinado, pronto para partir, ' +
      'sobre uma paisagem árida. O movimento do animal é puro ímpeto; o ' +
      'bastão florescido, a causa que o impulsiona.',
  },
  'bastos-reina': {
    nombre: 'Rainha de Paus',
    palabrasClave: {
      normal: ['carisma', 'autoconfiança', 'calor humano', 'determinação'],
      invertida: ['insegurança', 'ciúmes', 'perder o brilho', 'exigência'],
    },
    significado: {
      normal:
        'A Rainha de Paus irradia segurança e calor. Fala de alguém ' +
        'carismático e decidido, que atrai pela energia e sustenta seus ' +
        'projetos com paixão e firmeza. Sabe inspirar os outros sem perder sua ' +
        'centro.',
      invertida:
        'Invertida, essa luz vacila: insegurança disfarçada de exigência, ciúmes ou ' +
        'uma energia que se apagou e já não contagia.',
    },
    simbolismo:
      'Sentada em um trono com leões e girassóis, segura um bastão florido ' +
      'e, a seus pés, um gato preto: olha de frente, dona do seu fogo e também ' +
      'do seu instinto. Tudo nela fala de calor com personalidade.',
  },
  'bastos-rey': {
    nombre: 'Rei de Paus',
    palabrasClave: {
      normal: ['liderança', 'visão', 'impulso maduro', 'carisma'],
      invertida: ['autoritarismo', 'impaciência', 'impulsividade', 'tirania'],
    },
    significado: {
      normal:
        'O Rei de Paus é o líder visionário. Fala de conduzir com garra e ' +
        'convicção, de inspirar outros rumo a um grande objetivo e da maturidade ' +
        'que sabe transformar a paixão em direção.',
      invertida:
        'Invertido, o comando se distorce: autoritarismo, impaciência com quem não ' +
        'segue seu ritmo, decisões tomadas no calor do impulso.',
    },
    simbolismo:
      'Sentado em um trono com salamandras e leões, segura seu bastão como um ' +
      'cetro vivo. Uma pequena salamandra a seus pés olha para ele: o fogo ' +
      'domesticado e colocado a serviço de uma visão.',
  },
  // ── Copas · Agua · emociones, vínculos, intuición ────────────────────────
  'copas-as': {
    nombre: 'Ás de Copas',
    palabrasClave: {
      normal: ['novo amor', 'abertura', 'plenitude emocional', 'compaixão'],
      invertida: ['coração fechado', 'emoção reprimida', 'vazio afetivo'],
    },
    significado: {
      normal:
        'O Ás de Copas é o coração que se abre. Fala do início de um amor, ' +
        'uma amizade ou uma fase emocional plena, do sentir que transborda e ' +
        'quer se entregar. É a fonte dos afetos se oferecendo por inteiro.',
      invertida:
        'Invertido, a taça vira ou se tampa: emoções reprimidas, um ' +
        'coração que se fecha por medo, um vazio afetivo difícil de preencher.',
    },
    simbolismo:
      'Uma mão oferece de uma nuvem uma taça transbordante, da qual caem cinco ' +
      'jatos de água; uma pomba desce com uma hóstia. Tudo transborda: é ' +
      'o amor em seu estado mais puro e generoso.',
  },
  'copas-dos': {
    nombre: 'Dois de Copas',
    palabrasClave: {
      normal: ['união', 'atração', 'parceria', 'reciprocidade'],
      invertida: ['desequilíbrio', 'ruptura', 'tensão no vínculo'],
    },
    significado: {
      normal:
        'O Dois de Copas é o encontro de dois que se escolhem. Fala de atração ' +
        'mútua, sociedade e reciprocidade: um vínculo onde ambos dão e recebem na ' +
        'mesma medida. É o brinde de uma conexão verdadeira.',
      invertida:
        'Invertida, o equilíbrio se perde: um vínculo que se desnivela, ' +
        'tensão entre dois, ou uma união que esfria ou se rompe.',
    },
    simbolismo:
      'Duas figuras trocam suas taças frente a frente. Sobre elas, o ' +
      'caduceu de duas serpentes e uma cabeça de leão alado: as paixões ' +
      'elevadas e equilibradas pelo encontro.',
  },
  'copas-tres': {
    nombre: 'Três de Copas',
    palabrasClave: {
      normal: ['celebração', 'amizade', 'comunidade', 'alegria compartilhada'],
      invertida: ['excesso', 'fofocas', 'isolar-se', 'terceiro elemento'],
    },
    significado: {
      normal:
        'O Três de Copas é o brinde entre amigos. Fala de celebração, ' +
        'comunidade e alegria compartilhada, do apoio dos seus e dos bons ' +
        'momentos que se festejam em grupo.',
      invertida:
        'Invertido, a festa passa do ponto: excessos, fofocas que atrapalham, ' +
        'um grupo que já não soma, ou a necessidade de se retirar do barulho.',
    },
    simbolismo:
      'Três figuras erguem suas taças em uma roda, entre frutos da colheita: a ' +
      'abundância é desfrutada acompanhada. O círculo que formam fala de ' +
      'pertencimento e celebração.',
  },
  'copas-cuatro': {
    nombre: 'Quatro de Copas',
    palabrasClave: {
      normal: ['apatia', 'desinteresse', 'contemplação', 'insatisfação'],
      invertida: ['despertar', 'aceitar a oportunidade', 'sair da letargia'],
    },
    significado: {
      normal:
        'O Quatro de Copas é o olhar cansado que não vê o que tem ' +
        'diante de si. Fala de apatia, de desinteresse pelo que é oferecido, de estar ' +
        'tão voltado para si mesmo que deixa passar uma oportunidade.',
      invertida:
        'Invertido, algo desperta: o olhar se levanta, aceita-se o que se ' +
        'ofereça, saia da letargia emocional para voltar a se interessar.',
    },
    simbolismo:
      'Uma figura sentada sob uma árvore, de braços cruzados, ignora uma taça ' +
      'que uma mão lhe estende de uma nuvem; à sua frente há outras três. Tão ' +
      'absorta está que não vê o presente ao seu alcance.',
  },
  'copas-cinco': {
    nombre: 'Cinco de Copas',
    palabrasClave: {
      normal: ['perda', 'luto', 'arrependimento', 'tristeza'],
      invertida: ['aceitação', 'perdão', 'voltar a olhar para o que resta'],
    },
    significado: {
      normal:
        'O Cinco de Copas é o luto pelo que foi derramado. Fala de perda, ' +
        'arrependimento e da tristeza que fixa o olhar no que se perdeu. Mas ' +
        'lembre-se de que nem tudo caiu: algo ainda permanece de pé atrás.',
      invertida:
        'Invertido, o olhar se volta para o que resta: aceitação, perdão, a ' +
        'decisão de recolher o que não se quebrou e seguir.',
    },
    simbolismo:
      'Uma figura de manto negro contempla três copas viradas e não vê as duas ' +
      'que seguem de pé às suas costas. Ao fundo, uma ponte cruza o rio rumo a um ' +
      'lar: o luto tem saída.',
  },
  'copas-seis': {
    nombre: 'Seis de Copas',
    palabrasClave: {
      normal: ['nostalgia', 'lembranças', 'inocência', 'reencontro'],
      invertida: ['viver no passado', 'idealizar', 'não deixar ir'],
    },
    significado: {
      normal:
        'O Seis de Copas é a doçura da lembrança. Fala de nostalgia, da ' +
        'inocência da infância, de um reencontro ou da ternura do que é ' +
        'simples e conhecido. Traz o calor do que foi bom.',
      invertida:
        'Invertido, a nostalgia aprisiona: viver ancorado no passado, idealizar ' +
        'o que já não está, não conseguir soltar o que terminou.',
    },
    simbolismo:
      'Em um pátio, uma figura maior oferece a uma menor uma taça cheia de ' +
      'flores: o gesto gentil de proteger e compartilhar. As cinco taças ' +
      'floridas ao redor falam de memórias que ainda perfumam.',
  },
  'copas-siete': {
    nombre: 'Sete de Copas',
    palabrasClave: {
      normal: ['fantasia', 'opções', 'ilusões', 'imaginação'],
      invertida: ['clareza', 'escolher', 'aterrissar', 'descartar miragens'],
    },
    significado: {
      normal:
        'O Sete de Copas é a nuvem de possibilidades imaginadas. Fala de ' +
        'muitas opções sedutoras, de fantasias e desejos que se misturam até ' +
        'confundir. Pede distinguir o que é real do que apenas brilha.',
      invertida:
        'Invertida, a névoa se dissipa: chega a clareza para escolher, os ' +
        'espelhismos são descartados e você aterrissa no que é concreto.',
    },
    simbolismo:
      'Uma figura na sombra contempla sete copas flutuando em uma nuvem, cada ' +
      'uma com algo distinto: um rosto, joias, uma coroa, um dragão. Nem tudo ' +
      'o que oferecem é um tesouro; algumas escondem uma armadilha.',
  },
  'copas-ocho': {
    nombre: 'Oito de Copas',
    palabrasClave: {
      normal: ['retirada', 'deixar para trás', 'busca de sentido', 'partir'],
      invertida: ['medo de ir embora', 'ficar por inércia', 'voltar'],
    },
    significado: {
      normal:
        'O Oito de Copas é a decisão de partir em busca de algo mais profundo. ' +
        'Fala sobre deixar para trás o que já não preenche, ainda que custe, para seguir um ' +
        'chamado interior. É uma partida madura, não uma fuga.',
      invertida:
        'Invertido, é difícil partir: medo de soltar, ficar por inércia no ' +
        'que não satisfaz, ou a dúvida entre ir embora e voltar.',
    },
    simbolismo:
      'Uma figura se afasta de costas em direção às montanhas, deixando oito copas ' +
      'ordenadas para trás, sob uma lua eclipsada. Vai à noite, rumo ao ' +
      'incerto, seguindo algo que só ela ouve.',
  },
  'copas-nueve': {
    nombre: 'Nove de Copas',
    palabrasClave: {
      normal: ['satisfação', 'desejo realizado', 'bem-estar', 'gratidão'],
      invertida: ['complacência', 'excesso', 'desejo insatisfeito'],
    },
    significado: {
      normal:
        'O Nove de Copas é a carta do desejo realizado. Fala de ' +
        'satisfação, bem-estar e do prazer de desfrutar o que foi conquistado. É ' +
        'sentir-se contente e grato pelo que se tem.',
      invertida:
        'Invertida, o prazer se distorce: complacência vazia, buscar no ' +
        'excesso o que não preenche, ou um desejo que, mesmo realizado, não satisfaz.',
    },
    simbolismo:
      'Uma figura satisfeita senta-se de braços cruzados diante de nove ' +
      'copas alinhadas sobre um estrado curvo: exibe sua bonança com orgulho. ' +
      'É a imagem de quem alcançou o que desejava.',
  },
  'copas-diez': {
    nombre: 'Dez de Copas',
    palabrasClave: {
      normal: ['felicidade', 'família', 'harmonia', 'plenitude emocional'],
      invertida: ['harmonia rompida', 'tensão familiar', 'ideal que não se concretiza'],
    },
    significado: {
      normal:
        'O Dez de Copas é a plenitude do coração compartilhada. Fala de ' +
        'felicidade familiar, vínculos harmônicos e a sensação de que o ' +
        'emocional está completo. É o lar em paz e o afeto que preenche.',
      invertida:
        'Invertida, essa harmonia se fragmenta: tensões na família, um ' +
        'ideal de felicidade que não se concretiza, a distância entre o sonhado e o ' +
        'real.',
    },
    simbolismo:
      'Um casal se abraça e ergue os braços para um arco-íris de dez copas, ' +
      'enquanto duas crianças brincam ao lado, diante de uma casa. Todo o quadro respira ' +
      'um bem-estar sereno e compartilhado.',
  },
  'copas-sota': {
    nombre: 'Valete de Copas',
    palabrasClave: {
      normal: ['ternura', 'mensagem afetiva', 'sensibilidade', 'criatividade'],
      invertida: ['imaturidade emocional', 'suscetibilidade', 'notícia decepcionante'],
    },
    significado: {
      normal:
        'O Pajem de Copas é o coração que se surpreende. Traz uma mensagem ' +
        'afetiva, uma proposta criativa ou o despertar de uma sensibilidade ' +
        'nova. Pode indicar alguém terno e sonhador, ou uma notícia que ' +
        'emociona.',
      invertida:
        'Invertido, essa sensibilidade se trava: suscetibilidade, imaturidade ' +
        'emocional, ou uma notícia do coração que decepciona.',
    },
    simbolismo:
      'Um jovem segura uma taça da qual surge, inusitado, um peixe: a ' +
      'imaginação que emerge do inconsciente. Seu gesto curioso fala de estar ' +
      'aberto ao que o sentir trouxer.',
  },
  'copas-caballo': {
    nombre: 'Cavaleiro de Copas',
    palabrasClave: {
      normal: ['romance', 'proposta', 'idealismo', 'seguir o coração'],
      invertida: ['ilusão vã', 'inconstância', 'promessa não cumprida'],
    },
    significado: {
      normal:
        'O Cavaleiro de Copas é aquele que chega com uma proposta do coração. ' +
        'Fala de romance, de idealismo e de seguir o sentir com elegância. ' +
        'Quando aparece, há um convite afetivo a caminho.',
      invertida:
        'Invertido, o romantismo se desfaz: promessas que não se cumprem, ' +
        'ilusões sem fundamento, um encanto que acaba sendo apenas aparência.',
    },
    simbolismo:
      'Um cavaleiro avança sereno, oferecendo sua taça como quem oferece um ' +
      'sentimento; seu cavalo segue o passo, sem pressa. É o mensageiro do amor, ' +
      'mais sonhador do que guerreiro.',
  },
  'copas-reina': {
    nombre: 'Rainha de Copas',
    palabrasClave: {
      normal: ['empatia', 'intuição', 'contenção', 'sensibilidade'],
      invertida: ['dependência', 'transbordamento emocional', 'dar demais'],
    },
    significado: {
      normal:
        'A Rainha de Copas sente profundamente e acolhe os outros. Fala de ' +
        'empatia, intuição e a capacidade de acompanhar sem se perder. É a ' +
        'maturidade emocional que compreende sem julgar.',
      invertida:
        'Invertida, o sentir transborda: dependência afetiva, carregar as ' +
        'emoções alheias, dar tanto que a pessoa se esvazia.',
    },
    simbolismo:
      'Sentada em um trono junto ao mar, contempla absorta uma taça fechada e ' +
      'ornamentada, a única do baralho com tampa: guarda um mundo interior rico. ' +
      'A água aos seus pés é o seu elemento, o do sentir.',
  },
  'copas-rey': {
    nombre: 'Rei de Copas',
    palabrasClave: {
      normal: ['equilíbrio emocional', 'serenidade', 'diplomacia', 'maturidade'],
      invertida: ['emoções reprimidas', 'manipulação afetiva', 'frieza'],
    },
    significado: {
      normal:
        'O Rei de Copas domina o mar do sentir sem se afogar nele. Fala de ' +
        'equilíbrio emocional, serenidade e diplomacia: sentir profundamente, mas ' +
        'manter a calma. É aquele que aconselha com o coração e a cabeça ao ' +
        'mesmo tempo.',
      invertida:
        'Invertido, esse equilíbrio se perde: emoções contidas que pressionam ' +
        'por dentro, manipulação afetiva ou uma frieza que nega o sentir.',
    },
    simbolismo:
      'Seu trono flutua sobre um mar agitado, mas ele permanece sereno com sua ' +
      'taça na mão: contém a maré sem se deixar arrastar. Um peixe e um ' +
      'barco ao redor lembram o elemento que ele governa.',
  },
  // ── Espadas · Aire · mente, verdad, conflicto ────────────────────────────
  'espadas-as': {
    nombre: 'Ás de Espadas',
    palabrasClave: {
      normal: ['clareza', 'verdade', 'ideia', 'novo enfoque'],
      invertida: ['confusão', 'ideia nublada', 'verdade usada para ferir'],
    },
    significado: {
      normal:
        'O Ás de Espadas é o corte da clareza. Fala de uma verdade que se ' +
        'vê de repente, uma ideia afiada que ordena o caos, um novo modo de ' +
        'pensar. É o momento em que a mente atravessa a névoa.',
      invertida:
        'Invertido, a lâmina não corta limpo: confusão, ideias nubladas, ou a ' +
        'verdade usada como arma para ferir em vez de esclarecer.',
    },
    simbolismo:
      'Uma mão surge de uma nuvem empunhando uma espada erguida, coroada de ' +
      'louro: a vitória da razão. Seu fio único corta o ar; nada se ' +
      'interpõe entre a mente e o que é verdadeiro.',
  },
  'espadas-dos': {
    nombre: 'Dois de Espadas',
    palabrasClave: {
      normal: ['bloqueio', 'decisão evitada', 'equilíbrio tenso', 'trégua'],
      invertida: ['sair do bloqueio', 'ver a verdade', 'decisão enfim'],
    },
    significado: {
      normal:
        'O Dois de Espadas é a decisão que se evita. Fala de um equilíbrio ' +
        'tenso, de não querer olhar para não ter que escolher, de uma trégua ' +
        'desconfortável que não pode durar. Cedo ou tarde é preciso tirar a venda.',
      invertida:
        'Invertido, algo se destrava: a venda cai, a situação é vista de ' +
        'frente e, finalmente, a decisão adiada é tomada.',
    },
    simbolismo:
      'Uma figura com os olhos vendados cruza duas espadas sobre o peito, ' +
      'sentada de costas para o mar sob a lua: não quer ver nem decidir. O ' +
      'equilíbrio dos braços é tão firme quanto frágil.',
  },
  'espadas-tres': {
    nombre: 'Três de Espadas',
    palabrasClave: {
      normal: ['dor', 'ruptura', 'mágoa', 'desilusão'],
      invertida: ['curar', 'perdoar', 'dor que abranda', 'liberar a mágoa'],
    },
    significado: {
      normal:
        'O Três de Espadas é a ferida do coração nomeada sem rodeios: dor, ' +
        'ruptura, desilusão. É a mágoa que atravessa, mas também a verdade ' +
        'que, embora doa, esclarece o que estava acontecendo.',
      invertida:
        'Invertido, a ferida começa a fechar: a dor abranda, chega o ' +
        'perdão, libera-se a mágoa que se vinha carregando.',
    },
    simbolismo:
      'Três espadas atravessam um coração vermelho sob um céu de chuva. A ' +
      'imagem é direta e sem adornos: a dor não se dissimula, mostra-se tal ' +
      'como é para conseguir soltar.',
  },
  'espadas-cuatro': {
    nombre: 'Quatro de Espadas',
    palabrasClave: {
      normal: ['descanso', 'recuperação', 'pausa', 'retiro'],
      invertida: ['esgotamento', 'retomar antes da hora', 'inquietude'],
    },
    significado: {
      normal:
        'O Quatro de Espadas é a trégua necessária. Fala de descansar, ' +
        'recuperar-se e dar à mente um respiro após a tempestade. Não é ' +
        'desistir: é repor as forças antes de voltar.',
      invertida:
        'Invertida, o descanso não chega ou é interrompido: um esgotamento que se ' +
        'arrasta, voltar à carga antes de estar pronto, uma inquietação que não ' +
        'permite parar.',
    },
    simbolismo:
      'Uma figura jaz como em repouso sobre um túmulo, com três espadas ' +
      'penduradas na parede e uma quarta sob seu corpo: retira-se para curar. ' +
      'A quietude é voluntária, uma pausa para recuperar o fôlego.',
  },
  'espadas-cinco': {
    nombre: 'Cinco de Espadas',
    palabrasClave: {
      normal: ['conflito', 'derrota', 'ganhar a qualquer custo', 'tensão'],
      invertida: ['reconciliação', 'deixar o orgulho de lado', 'fim do conflito'],
    },
    significado: {
      normal:
        'O Cinco de Espadas é a vitória que deixa um gosto amargo. Fala de um ' +
        'conflito onde alguém ganha a custo de tudo, de orgulho ferido e de ' +
        'batalhas que não valiam o preço. Pergunte-se se vale mais ter razão ou ' +
        'ter paz.',
      invertida:
        'Invertido, busca-se reparar: deixar o orgulho de lado, reconciliar-se, deixar ' +
        'para trás uma briga que já causou dano suficiente.',
    },
    simbolismo:
      'Uma figura recolhe as espadas com um sorriso sombrio, enquanto duas outras ' +
      'se afastam cabisbaixas: ganhou, mas ficou só. O céu revolto denuncia ' +
      'que ninguém saiu inteiro deste choque.',
  },
  'espadas-seis': {
    nombre: 'Seis de Espadas',
    palabrasClave: {
      normal: ['transição', 'afastar-se', 'viagem', 'águas mais calmas'],
      invertida: ['bagagem emocional', 'transição travada', 'não conseguir soltar'],
    },
    significado: {
      normal:
        'O Seis de Espadas é a travessia para águas mais tranquilas. Fala de ' +
        'afastar-se de uma situação difícil, de uma transição ou de uma viagem que ' +
        'leva do turbulento ao sereno. Não é fugir: é deixar para trás para ' +
        'curar.',
      invertida:
        'Invertido, a travessia trava: custa soltar o que ficou para trás, ' +
        'carrega o peso emocional do passado, a transição ainda não se completou.',
    },
    simbolismo:
      'Um barqueiro leva uma figura e uma criança por águas que estão agitadas ' +
      'de um lado e calmas do outro; as espadas estão fincadas no barco, não se ' +
      'desapegam totalmente. Avança-se em direção à margem serena.',
  },
  'espadas-siete': {
    nombre: 'Sete de Espadas',
    palabrasClave: {
      normal: ['estratégia', 'sigilo', 'astúcia', 'agir sozinho'],
      invertida: ['engano descoberto', 'confissão', 'devolver o que foi tomado'],
    },
    significado: {
      normal:
        'O Sete de Espadas é o movimento estratégico. Fala de astúcia, ' +
        'de alcançar algo por vias indiretas; em sua face sombria, de engano ' +
        'ou de agir pelas costas dos outros. Pede honestidade sobre seus ' +
        'próprios métodos.',
      invertida:
        'Invertido, o oculto vem à tona: um engano que é descoberto, uma ' +
        'confissão, a decisão de devolver o que foi tomado por atalho.',
    },
    simbolismo:
      'Uma figura escapa de um acampamento carregando cinco espadas e ' +
      'deixando duas para trás, olhando por cima do ombro: leva algo às ' +
      'escondidas. O sorriso nervoso denuncia o movimento.',
  },
  'espadas-ocho': {
    nombre: 'Oito de Espadas',
    palabrasClave: {
      normal: ['sentir-se preso', 'limites mentais', 'paralisia', 'vitimismo'],
      invertida: ['libertar-se', 'ver a saída', 'recuperar o poder'],
    },
    significado: {
      normal:
        'O Oito de Espadas é a prisão que, em grande parte, é mental. Fala de ' +
        'sentir-se preso, limitado, sem saída, quando muitas dessas grades ' +
        'foram colocadas pelos próprios medos. A venda pode ser retirada.',
      invertida:
        'Invertido, o nó se afrouxa: ver que a saída estava ali, ' +
        'libertar-se da crença que paralisava, recuperar o próprio poder.',
    },
    simbolismo:
      'Uma figura vendada e amarrada aparece rodeada por oito espadas fincadas ' +
      'na terra, sobre um barro que ainda permite passar. Mas olhe: as espadas não ' +
      'o círculo se fecha; há um caminho livre para trás.',
  },
  'espadas-nueve': {
    nombre: 'Nove de Espadas',
    palabrasClave: {
      normal: ['angústia', 'insônia', 'ansiedade', 'culpa'],
      invertida: ['sair da angústia', 'pedir ajuda', 'medo desproporcional'],
    },
    significado: {
      normal:
        'O Nove de Espadas é a angústia da madrugada. Fala de ' +
        'preocupações que crescem na escuridão, insônia, culpa e medos que ' +
        'à noite se tornam gigantes. Muitas vezes o fantasma é maior ' +
        'que o fato.',
      invertida:
        'Invertida, a noite começa a ceder: sair da angústia, pedir ' +
        'ajuda, entender que o medo era maior que a realidade.',
    },
    simbolismo:
      'Uma figura se levanta na cama e cobre o rosto, com nove ' +
      'espadas penduradas na parede escura atrás de si. É o desespero ' +
      'noturno; mas as espadas estão na parede, não cravadas no corpo.',
  },
  'espadas-diez': {
    nombre: 'Dez de Espadas',
    palabrasClave: {
      normal: ['final doloroso', 'tocar o fundo', 'encerramento', 'traição'],
      invertida: ['recuperação', 'o pior já passou', 'resistir ao fim'],
    },
    significado: {
      normal:
        'O Dez de Espadas é o fim que toca o fundo. Fala de um encerramento ' +
        'doloroso, às vezes sentido como traição ou derrota total. Mas é ' +
        'também o ponto mais baixo, de onde só se pode subir: atrás já ' +
        'amanhece.',
      invertida:
        'Invertido, começa a recuperação: o pior já passou, recolhe-se o que ' +
        'sobrou e se recompõe. Também pode ser resistir a aceitar um fim ' +
        'que já chegou.',
    },
    simbolismo:
      'Uma figura jaz de bruços com dez espadas cravadas nas costas, junto ' +
      'a uma água parada. Mas no horizonte desponta um sol dourado: por ' +
      'terrível que pareça, é o fundo, e do fundo se volta a subir.',
  },
  'espadas-sota': {
    nombre: 'Valete de Espadas',
    palabrasClave: {
      normal: ['curiosidade mental', 'vigilância', 'ideias novas', 'palavra ágil'],
      invertida: ['palavra cortante', 'fofoca', 'suspeita', 'tudo mente'],
    },
    significado: {
      normal:
        'O Valete de Espadas é a mente desperta e curiosa. Traz ideias novas, ' +
        'vontade de entender e uma palavra ágil. Pode indicar alguém vigilante ' +
        'e perspicaz, ou uma notícia que faz pensar.',
      invertida:
        'Invertida, essa agudeza corta: palavras ferinas, fofocas, desconfiança, ' +
        'uma mente que analisa tudo e não sente nada.',
    },
    simbolismo:
      'Um jovem ergue sua espada no alto sobre um terreno ventoso, atento a tudo ' +
      'o que se move: puro alerta mental. O vento que agita seu cabelo é o ' +
      'elemento do ar, o do pensamento.',
  },
  'espadas-caballo': {
    nombre: 'Cavaleiro de Espadas',
    palabrasClave: {
      normal: ['ímpeto mental', 'ir de frente', 'determinação', 'pressa'],
      invertida: ['impulsividade', 'agressividade', 'atropelo', 'ideias sem freio'],
    },
    significado: {
      normal:
        'O Cavaleiro de Espadas avança com a força de uma ideia. ' +
        'Fala de determinação, de ir direto ao ponto e dizer as coisas sem rodeios, ' +
        'de uma mente veloz lançada à ação. Corta rápido, para o bem e para ' +
        'o mal.',
      invertida:
        'Invertido, o ímpeto se torna atropelo: impulsividade, agressividade nas ' +
        'palavras, decisões tomadas sem pensar nas consequências.',
    },
    simbolismo:
      'Um cavaleiro galopa em fúria com a espada erguida, em meio a um ' +
      'céu tempestuoso e árvores dobradas pelo vento. É a carta de maior ' +
      'velocidade do baralho: a ideia que não espera por ninguém.',
  },
  'espadas-reina': {
    nombre: 'Rainha de Espadas',
    palabrasClave: {
      normal: ['clareza', 'independência', 'honestidade', 'perspicácia'],
      invertida: ['frieza', 'rigidez', 'crítica ferina', 'ressentimento'],
    },
    significado: {
      normal:
        'A Rainha de Espadas pensa com lucidez e fala com a verdade. Fala de ' +
        'independência, honestidade e perspicácia: alguém que não se deixa enganar ' +
        'e diz as coisas claramente, com a experiência de quem já viveu e aprendeu.',
      invertida:
        'Invertida, essa clareza se esfria: dureza, crítica que fere, ressentimento, ' +
        'uma mente afiada que se fecha ao sentir.',
    },
    simbolismo:
      'Sentada em seu trono entre nuvens, segura a espada erguida e estende a ' +
      'outra mão como quem convida a dizer a verdade. Seu perfil severo olha para ' +
      'frente: não teme o que possa ouvir.',
  },
  'espadas-rey': {
    nombre: 'Rei de Espadas',
    palabrasClave: {
      normal: ['autoridade intelectual', 'julgamento', 'ética', 'verdade'],
      invertida: ['frieza', 'abuso de poder', 'rigidez', 'manipulação'],
    },
    significado: {
      normal:
        'O Rei de Espadas governa com a razão e a lei. Fala de autoridade ' +
        'intelectual, de julgamento claro e de decisões tomadas com ética e ' +
        'objetividade. É aquele que corta o que é justo, sem se deixar levar pelo ' +
        'capricho.',
      invertida:
        'Invertido, a razão se torna fria ou injusta: abuso de poder, dureza ' +
        'sem compaixão, argumentos usados para manipular em vez de esclarecer.',
    },
    simbolismo:
      'Sentado de frente em seu trono, segura a espada reta, levemente ' +
      'inclinada: o equilíbrio entre a firmeza e a dúvida justa. As borboletas ' +
      'e anjos esculpidos falam de uma mente que aspira ao alto.',
  },
  // ── Oros · Tierra · trabajo, cuerpo, recursos ────────────────────────────
  'oros-as': {
    nombre: 'Ás de Ouros',
    palabrasClave: {
      normal: ['oportunidade', 'prosperidade', 'semente material', 'novo recurso'],
      invertida: ['oportunidade perdida', 'insegurança material', 'mau investimento'],
    },
    significado: {
      normal:
        'O Ás de Ouros é a semente da prosperidade. Fala do início de ' +
        'algo concreto e fértil: um trabalho, uma renda, um projeto material ' +
        'com futuro. É uma oportunidade tangível que se oferece para cultivar.',
      invertida:
        'Invertida, a semente não prospera: uma oportunidade que se deixa passar, ' +
        'insegurança material, planos que prometiam e não se concretizam.',
    },
    simbolismo:
      'Uma mão oferece, a partir de uma nuvem, uma grande moeda dourada sobre um jardim ' +
      'florido, com um arco de flores que dá para as montanhas. Tudo indica um ' +
      'começo abundante e com raízes no que é real.',
  },
  'oros-dos': {
    nombre: 'Dois de Ouros',
    palabrasClave: {
      normal: ['equilíbrio', 'malabarismos', 'adaptação', 'prioridades'],
      invertida: ['sobrecarga', 'desordem', 'perder o equilíbrio'],
    },
    significado: {
      normal:
        'O Dois de Ouros é a arte de fazer malabarismos. Fala sobre equilibrar ' +
        'várias coisas ao mesmo tempo — tempo, dinheiro, tarefas — com flexibilidade e bom ' +
        'humor. Tudo se sustenta enquanto você se mantiver em movimento.',
      invertida:
        'Invertido, os malabares caem: sobrecarga, desordem, a sensação de ' +
        'não dar conta de tudo e perder o ritmo.',
    },
    simbolismo:
      'Uma figura dança fazendo malabarismo com duas moedas unidas por um laço ' +
      'em forma de infinito, enquanto ao fundo dois barcos sobem e descem por ondas ' +
      'altas. O equilíbrio é dinâmico: sustenta-se dançando.',
  },
  'oros-tres': {
    nombre: 'Três de Ouros',
    palabrasClave: {
      normal: ['ofício', 'trabalho em equipe', 'colaboração', 'competição'],
      invertida: ['falta de coordenação', 'trabalho medíocre', 'desacordo'],
    },
    significado: {
      normal:
        'O Três de Ouros é o ofício reconhecido e o trabalho bem feito em ' +
        'equipe. Fala de colaboração, de somar talentos distintos a uma ' +
        'obra comum e da satisfação de contribuir com o que se sabe fazer.',
      invertida:
        'Invertido, a colaboração falha: falta de coordenação, desacordos, ' +
        'trabalho feito pela metade ou sem o compromisso de todos.',
    },
    simbolismo:
      'Um artesão trabalha em uma catedral enquanto duas figuras consultam seus ' +
      'planos: cada um contribui com o seu para uma obra maior. O diálogo entre mãos ' +
      'e projeto ergue o que ninguém faria sozinho.',
  },
  'oros-cuatro': {
    nombre: 'Quatro de Ouros',
    palabrasClave: {
      normal: ['segurança', 'poupança', 'controle', 'conservar'],
      invertida: ['ganância', 'soltar', 'apego excessivo', 'generosidade'],
    },
    significado: {
      normal:
        'O Quatro de Ouros é aquele que retém o que é seu com firmeza. Fala de ' +
        'segurança material, poupança e controle; na medida certa, prudência. ' +
        'Mas lembre-se de que se apegar demais também deixa as mãos ocupadas.',
      invertida:
        'Invertido, o punho se abre ou se fecha demais: ou ganância e apego ' +
        'que sufocam, ou o aprendizado de soltar e compartilhar.',
    },
    simbolismo:
      'Uma figura sentada abraça uma moeda contra o peito, segura outra sob a coroa e pisa em mais duas: não solta nada. ' +
      'A cidade ao fundo é aquilo que ' +
      'protege, mas também aquilo de que se isola.',
  },
  'oros-cinco': {
    nombre: 'Cinco de Ouros',
    palabrasClave: {
      normal: ['carência', 'dificuldade material', 'exclusão', 'preocupação'],
      invertida: ['recuperação', 'pedir ajuda', 'fim da má fase'],
    },
    significado: {
      normal:
        'O Cinco de Ouros é o frio da carência. Fala de dificuldade ' +
        'material, de se sentir excluído, deixado de lado ou em apuros. Mas também ' +
        'lembra que, às vezes, o refúgio está perto e não o vemos.',
      invertida:
        'Invertida, a maré muda: recuperação material, a ajuda que ' +
        'aparece, sair da escassez e voltar a sentir o calor.',
    },
    simbolismo:
      'Duas figuras pobres e com frio caminham pela neve diante de um vitral ' +
      'iluminado de uma igreja: o auxílio está a um passo, atrás do muro, e não ' +
      'o veem. A escassez também é não enxergar a porta.',
  },
  'oros-seis': {
    nombre: 'Seis de Ouros',
    palabrasClave: {
      normal: ['generosidade', 'dar e receber', 'ajuda', 'equidade'],
      invertida: ['dívida', 'dádiva com condições', 'desequilíbrio no dar'],
    },
    significado: {
      normal:
        'O Seis de Ouros é o fluxo justo de dar e receber. Fala de ' +
        'generosidade, de ajuda que chega ou que se oferece, do equilíbrio entre ' +
        'quem tem e quem precisa. Hoje você dá; amanhã, talvez, receba.',
      invertida:
        'Invertido, esse equilíbrio se torce: ajuda com condições, dívidas que ' +
        'prendem, um dar e receber que não está parelho ou esconde poder.',
    },
    simbolismo:
      'Um mercador segura uma balança e reparte moedas a dois mendigos ' +
      'ajoelhados: a equidade feita gesto. A balança lembra que dar bem é ' +
      'também medir com justiça.',
  },
  'oros-siete': {
    nombre: 'Sete de Ouros',
    palabrasClave: {
      normal: ['paciência', 'avaliar', 'colheita a caminho', 'investimento'],
      invertida: ['impaciência', 'esforço mal direcionado', 'resultados escassos'],
    },
    significado: {
      normal:
        'O Sete de Ouros é a pausa para avaliar o que foi semeado. Fala de ' +
        'paciência, de observar o que cresce e decidir se vale a pena continuar. Os ' +
        'frutos ainda não estão maduros, mas o trabalho já rende.',
      invertida:
        'Invertido, a espera desespera: impaciência por resultados, a suspeita ' +
        'de ter investido esforço onde não rende, colheitas mais pobres do que ' +
        'esperado.',
    },
    simbolismo:
      'Uma figura apoiada em sua enxada contempla um arbusto carregado de sete ' +
      'moedas: ela para para medir sua colheita. Ainda não colhe; avalia se o ' +
      'esforço está no caminho certo.',
  },
  'oros-ocho': {
    nombre: 'Oito de Ouros',
    palabrasClave: {
      normal: ['dedicação', 'ofício', 'aprendizado', 'esmero'],
      invertida: ['trabalho mecânico', 'perfeccionismo', 'desânimo', 'desleixo'],
    },
    significado: {
      normal:
        'O Oito de Ouros é o prazer do ofício feito com esmero. Fala de ' +
        'dedicação, de melhorar através da prática e da satisfação de ' +
        'aperfeiçoar o que se sabe fazer. O talento se refina com a repetição.',
      invertida:
        'Invertido, o ofício esfria: trabalho mecânico e sem alma, ' +
        'perfeccionismo que paralisa, ou desânimo que leva a fazer as coisas de ' +
        'qualquer jeito.',
    },
    simbolismo:
      'Um artesão cinzela com cuidado uma moeda após a outra, pendurando-as ' +
      'terminadas ao seu lado, afastado da vila que se vê ao fundo. Está ' +
      'absorto em sua tarefa: o mundo pode esperar, o ofício não.',
  },
  'oros-nueve': {
    nombre: 'Nove de Ouros',
    palabrasClave: {
      normal: ['independência', 'autossuficiência', 'prazer conquistado', 'refinamento'],
      invertida: ['dependência', 'solidão', 'gasto imprudente', 'conquista a qualquer custo'],
    },
    significado: {
      normal:
        'O Nove de Ouros é o desfrute sereno do que foi alcançado por mérito ' +
        'próprio. Fala de independência, autossuficiência e do gosto refinado de ' +
        'quem cultivou o seu próprio jardim. É estar bem, e a sós, sem que falte ' +
        'nada.',
      invertida:
        'Invertido, esse bem-estar se ressente: dependência de outros, solidão que ' +
        'peso, gastos imprudentes ou uma conquista alcançada ao custo de todo o resto.',
    },
    simbolismo:
      'Uma figura elegante caminha por um vinhedo carregado de moedas, com um falcão ' +
      'pousado e sereno em sua mão enluvada: domínio e prazer ao mesmo tempo. O ' +
      'jardim próspero é obra sua, e ela o desfruta sozinha.',
  },
  'oros-diez': {
    nombre: 'Dez de Ouros',
    palabrasClave: {
      normal: ['prosperidade', 'legado', 'família', 'riqueza estável'],
      invertida: ['conflito por dinheiro', 'instabilidade', 'apego ao patrimônio'],
    },
    significado: {
      normal:
        'O Dez de Ouros é a prosperidade que cria raízes e se herda. Fala de ' +
        'riqueza estável, família, legado e da segurança que se constrói ao ' +
        'longo do tempo. É o material em sua forma mais duradoura e ' +
        'compartilhada.',
      invertida:
        'Invertido, essa base se abala: conflitos por dinheiro ou heranças, ' +
        'instabilidade, apego ao patrimônio que atrapalha os vínculos.',
    },
    simbolismo:
      'Sob um arco, convivem três gerações —um ancião, um casal, uma ' +
      'criança— e dois cães, rodeados por dez moedas dispostas como uma árvore da ' +
      'vida. A riqueza aqui é linhagem e lar, não apenas ouro.',
  },
  'oros-sota': {
    nombre: 'Valete de Ouros',
    palabrasClave: {
      normal: ['estudo', 'plano concreto', 'nova oportunidade', 'aplicação'],
      invertida: ['distração', 'plano sem ação', 'oportunidade desperdiçada'],
    },
    significado: {
      normal:
        'O Pajem de Ouros é o estudante aplicado da vida. Traz uma ' +
        'oportunidade concreta, vontade de aprender um ofício ou de colocar as mãos em um ' +
        'plano real. É o primeiro passo sério rumo a algo material e duradouro.',
      invertida:
        'Invertido, esse foco se perde: distração, planos que não saem do ' +
        'papel, uma oportunidade concreta que se deixa escapar por falta de ' +
        'compromisso.',
    },
    simbolismo:
      'Um jovem contempla absorto uma moeda que segura com ambas as mãos, de ' +
      'pé em um campo verde e arado: estude com atenção o que tem entre ' +
      'as mãos. O terreno fértil promete frutos se você o cultivar.',
  },
  'oros-caballo': {
    nombre: 'Cavaleiro de Ouros',
    palabrasClave: {
      normal: ['constância', 'método', 'confiabilidade', 'trabalho paciente'],
      invertida: ['estagnação', 'monotonia', 'preguiça', 'teimosia'],
    },
    significado: {
      normal:
        'O Cavaleiro de Ouros é o mais metódico e confiável. Fala de constância, ' +
        'de avançar passo a passo, sem pressa mas sem pausa, da confiabilidade de ' +
        'quem termina o que começa. Não brilha pela velocidade, mas pela segurança.',
      invertida:
        'Invertida, a constância vira inércia: estagnação, monotonia, ' +
        'preguiça ou teimosia que insiste em um método que já não serve.',
    },
    simbolismo:
      'Diferente dos outros cavalos, este permanece quieto: o cavaleiro ' +
      'segura sua moeda e contempla o campo arado, sem pressa. A pausa é ' +
      'a chave: o trabalho firme não precisa galopar.',
  },
  'oros-reina': {
    nombre: 'Rainha de Ouros',
    palabrasClave: {
      normal: ['abundância prática', 'cuidado', 'sensatez', 'nutrir'],
      invertida: ['sobrecarga', 'descuido consigo mesma', 'materialismo', 'insegurança'],
    },
    significado: {
      normal:
        'A Rainha de Ouros cuida do material e dos seus com os pés no ' +
        'chão. Fala de abundância prática, de um lar próspero e da ' +
        'sensatez de quem sabe administrar e nutrir ao mesmo tempo. Gera bem-estar ' +
        'concreto ao seu redor.',
      invertida:
        'Invertida, esse cuidado se desequilibra: sobrecarga por atender a tudo, ' +
        'descuidar-se de si mesma para sustentar os outros, ou um materialismo que ' +
        'nasce da insegurança.',
    },
    simbolismo:
      'Sentada em um trono florido, segura sua moeda no colo como algo ' +
      'viva, rodeada por um jardim exuberante; um coelho aparece a seus pés, ' +
      'símbolo de fertilidade. Tudo nela nutre e dá frutos.',
  },
  'oros-rey': {
    nombre: 'Rei de Ouros',
    palabrasClave: {
      normal: ['sucesso material', 'segurança', 'maestria', 'generosidade próspera'],
      invertida: ['ganância', 'obstinação', 'apego ao status', 'rigidez'],
    },
    significado: {
      normal:
        'O Rei de Ouros é a maestria no material alcançada com o passar dos anos. ' +
        'Fala de sucesso consolidado, segurança, boa gestão dos recursos e da ' +
        'generosidade de quem já não teme pelo que é seu. É a abundância estável ' +
        'e confiável.',
      invertida:
        'Invertida, a prosperidade se torna amarga: ganância, obstinação, apego ao ' +
        'status e ao controle, rigidez de quem mede tudo em dinheiro.',
    },
    simbolismo:
      'Sentado em um trono esculpido com touros, entre vinhedos e com uma moeda na ' +
      'mão, sua armadura aparece sob o manto: prosperou e sabe defender o ' +
      'conquistado. A paisagem carregada de frutos é a prova de seu bom governo.',
  },
};
