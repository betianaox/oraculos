// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { WikiPorCarta } from '../../types';

// Wiki de los Arcanos Mayores en español. El Loco fijó el tono — reflexivo y
// didáctico (enseña a leer la imagen), nunca adivinatorio, en línea con el
// disclaimer de la app. El resto sigue ese molde.
export const WIKI_MAYORES_PT: WikiPorCarta = {
  'mayor-00': {
    nombre: 'O Louco',
    palabrasClave: {
      normal: ['começos', 'liberdade', 'espontaneidade', 'fé', 'aventura'],
      invertida: ['imprudência', 'medo da mudança', 'dispersão', 'ingenuidade'],
    },
    significado: {
      normal:
        'O Louco marca o instante antes do primeiro passo: um começo que se ' +
        'anima sem garantias, com mais confiança do que certezas. Convida a soltar ' +
        'a bagagem velha e caminhar com curiosidade, aceitando que não se pode ' +
        'ver o caminho inteiro antes de começar.',
      invertida:
        'Invertido, O Louco fala do salto dado sem olhar —ou do salto que você ' +
        'não se atreve a dar—. Pode indicar dispersão, entusiasmo que não se concretiza, ' +
        'ou o medo que se disfarça de prudência para não arriscar nada.',
    },
    simbolismo:
      'Olha o precipício a seus pés: não o vê, ou não se importa. A rosa branca ' +
      'em sua mão é a pureza da intenção; o cão que salta ao seu lado, o ' +
      'instinto que o acompanha e o alerta. O sol ao fundo ilumina uma jornada ' +
      'que acaba de começar.',
  },
  'mayor-01': {
    nombre: 'O Mago',
    palabrasClave: {
      normal: ['vontade', 'poder pessoal', 'recursos', 'iniciativa', 'foco'],
      invertida: ['manipulação', 'talento desperdiçado', 'engano', 'insegurança'],
    },
    significado: {
      normal:
        'O Mago é a certeza de que você tem o necessário para começar. Reúne ' +
        'a vontade e os recursos, e os concentra em um só propósito: ' +
        'converter a ideia em ato. Fala do momento em que você decide usar o que ' +
        'sabe em vez de apenas ter.',
      invertida:
        'Invertido, essa força se distorce ou se dispersa: talento que não se ' +
        'aproveite, palavra que promete mais do que cumpre, ou o uso da ' +
        'habilidade para manipular. Também pode ser a dúvida que te paralisa ' +
        'tendo tudo à mão.',
    },
    simbolismo:
      'Uma mão aponta para o céu e a outra para a terra: canaliza o que vem de cima ' +
      'para baixo. Sobre sua mesa estão os quatro naipes — copas, espadas, ouros e ' +
      'paus —, todas as ferramentas disponíveis. O lemniscata sobre sua ' +
      'cabeça é o potencial sem fim.',
  },
  'mayor-02': {
    nombre: 'A Sacerdotisa',
    palabrasClave: {
      normal: ['intuição', 'mistério', 'saber interior', 'silêncio', 'o oculto'],
      invertida: ['segredos', 'desconexão', 'ignorar a intuição', 'confusão'],
    },
    significado: {
      normal:
        'A Sacerdotisa guarda o que não é dito com palavras. Ela convida a ' +
        'calar e ouvir o que vem de dentro: a resposta já existe, mas se revela ' +
        'no silêncio, não na pressa. É o saber que chega pela intuição, ' +
        'antes mesmo da razão.',
      invertida:
        'Invertida, algo está oculto — ou você está escondendo de si mesmo. Pode indicar ' +
        'que você está ignorando sua voz interior, abafando-a com ruído, ou que há um ' +
        'segredo operando sob a superfície.',
    },
    simbolismo:
      'Ela se senta entre duas colunas, uma clara e outra escura: o limiar entre ' +
      'o consciente e o que não o é. Um véu com romãs cobre o que há ' +
      'atrás. A lua a seus pés e o pergaminho em seu colo falam de um ' +
      'conhecimento que não se mostra por inteiro.',
  },
  'mayor-03': {
    nombre: 'A Imperatriz',
    palabrasClave: {
      normal: ['abundância', 'fertilidade', 'cuidado', 'criação', 'natureza'],
      invertida: ['bloqueio criativo', 'descuido', 'dependência', 'estagnação'],
    },
    significado: {
      normal:
        'A Imperatriz é a vida que transborda e dá frutos. Fala de criar, ' +
        'nutrir e deixar amadurecer: um projeto, um vínculo, um corpo. Convida a ' +
        'cuidar do que cresce com paciência e a desfrutar do sensorial sem ' +
        'culpa.',
      invertida:
        'Invertida, a fonte se bloqueia: criatividade que não flui, um cuidado ' +
        'que se torna sufocante ou, ao contrário, um descuido de si mesmo. ' +
        'Pode indicar dar tanto aos outros que você se esquece de si.',
    },
    simbolismo:
      'Recosta-se em um trono entre almofadas, rodeada por um campo de trigo maduro ' +
      'e uma floresta frondosa: tudo ao seu redor dá frutos. A coroa de doze ' +
      'estrelas e o cetro falam de um poder que cria antes de impor.',
  },
  'mayor-04': {
    nombre: 'O Imperador',
    palabrasClave: {
      normal: ['estrutura', 'autoridade', 'estabilidade', 'limites', 'ordem'],
      invertida: ['rigidez', 'controle excessivo', 'teimosia', 'autoritarismo'],
    },
    significado: {
      normal:
        'O Imperador é a ordem que sustenta. Fala sobre criar estrutura, ' +
        'assumir o comando da própria vida e construir sobre bases firmes. Onde ' +
        'A Imperatriz cria, ele protege e ordena o que foi criado com regras claras.',
      invertida:
        'Invertida, a firmeza se torna rigidez: controle que sufoca, uma postura que não ' +
        'admite nuances, teimosia. Também pode indicar a falta de estrutura. ' +
        '—tudo solto, sem direção— ou uma autoridade exercida de forma errada.',
    },
    simbolismo:
      'Ele se senta em um trono de pedra esculpido com cabeças de carneiro, símbolo ' +
      'de Áries e da vontade. Atrás, montanhas áridas: aquilo que se sustenta ' +
      'por si mesmo. A armadura sob sua túnica lembra que sua calma está ' +
      'sempre pronta para defender.',
  },
  'mayor-05': {
    nombre: 'O Hierofante',
    palabrasClave: {
      normal: ['tradição', 'ensinamento', 'crenças', 'pertencimento', 'guia'],
      invertida: ['dogma', 'rebeldia', 'convenção vazia', 'buscar o próprio caminho'],
    },
    significado: {
      normal:
        'O Hierofante é a ponte para o que aprendemos com os outros: a tradição, ' +
        'a instituição, o mestre que transmite um saber comprovado. Fala de ' +
        'buscar guia no que já está estabelecido, de pertencer a algo maior e de ' +
        'honrar regras compartilhadas.',
      invertida:
        'Invertido, a tradição pesa demais: dogma que impede o pensamento, ' +
        'convenções que já não significam nada. Também é o sinal saudável de ' +
        'romper o molde e buscar sua própria verdade fora do caminho traçado.',
    },
    simbolismo:
      'Abençoa de um trono entre duas colunas, com duas figuras aos seus pés: ' +
      'o ensinamento passa de um para muitos. As chaves cruzadas abrem o sagrado; ' +
      'a coroa tripla e o cetro marcam uma autoridade que vem da ' +
      'instituição, não de si mesmo.',
  },
  'mayor-06': {
    nombre: 'Os Enamorados',
    palabrasClave: {
      normal: ['união', 'escolha', 'valores', 'harmonia', 'vínculo'],
      invertida: ['desequilíbrio', 'dúvida', 'valores em conflito', 'ruptura'],
    },
    significado: {
      normal:
        'Os Enamorados falam de união, mas acima de tudo de escolha. É o ' +
        'momento de decidir a partir do que você realmente valoriza: um vínculo, um ' +
        'caminho, um compromisso. Quando você escolhe alinhado ao seu coração, algo se ' +
        'integra e se torna harmônico.',
      invertida:
        'Invertida, a balança se desnivela: uma decisão que você evita, valores ' +
        'que se chocam, um vínculo em desequilíbrio. Pode indicar tentação, dúvidas ' +
        'ou escolher por medo ou pressão em vez de por convicção.',
    },
    simbolismo:
      'Um anjo abençoa duas figuras lá do alto: a escolha é feita sob ' +
      'um olhar maior. Atrás dela, a árvore do conhecimento; atrás de ' +
      'ele, a árvore das chamas do desejo. Entre ambos, é preciso escolher com ' +
      'a cabeça e o coração ao mesmo tempo.',
  },
  'mayor-07': {
    nombre: 'O Carro',
    palabrasClave: {
      normal: ['vontade', 'triunfo', 'controle', 'direção', 'impulso'],
      invertida: ['descontrole', 'dispersão', 'obstáculos', 'agressividade'],
    },
    significado: {
      normal:
        'O Carro é o avanço conquistado com vontade. Fala sobre assumir as ' +
        'rédeas, alinhar forças opostas em direção a uma meta e manter o ' +
        'rumo com disciplina. A vitória chega não pela sorte, mas pelo esforço ' +
        'e foco.',
      invertida:
        'Invertido, as rédeas se soltam: forças que puxam em direções ' +
        'distintas, impulso sem direção, obstáculos que travam. Pode ser ' +
        'querer avançar à força onde é preciso ceder ou repensar.',
    },
    simbolismo:
      'Um auriga conduz de pé um carro puxado por duas esfinges, uma branca e ' +
      'uma negra: os opostos avançam só se ele os domina com a mente, ' +
      'pois não usa rédeas. O dossel de estrelas e a couraça falam de uma ' +
      'vontade protegida e em movimento.',
  },
  'mayor-08': {
    nombre: 'A Força',
    palabrasClave: {
      normal: ['coragem serena', 'paciência', 'domínio interior', 'compaixão', 'equilíbrio'],
      invertida: ['dúvida', 'impulso', 'rigidez', 'força mal empregada'],
    },
    significado: {
      normal:
        'A Força não é a do músculo, mas a da suavidade que domestica. ' +
        'Fala de lidar com o indomável —o medo, a raiva, o desejo— com ' +
        'paciência e ternura em vez de violência. O verdadeiro equilíbrio sustenta ' +
        'sem apertar.',
      invertida:
        'Invertida, essa serenidade falta: a força se torna dureza ou, ao ' +
        'contrário, cede-se ao impulso. Pode indicar dúvida sobre a própria ' +
        'capacidade, ou tentar impor pela força o que só se conquista com ' +
        'calma.',
    },
    simbolismo:
      'Uma mulher fecha com doçura as fauces de um leão, sem medo e sem ' +
      'violência. O lemniscata sobre sua cabeça, como em O Mago, é o poder ' +
      'infinito; aqui esse poder é interior. As flores em sua cintura lembram ' +
      'que a firmeza pode ser gentil.',
  },
  'mayor-09': {
    nombre: 'O Eremita',
    palabrasClave: {
      normal: ['introspecção', 'busca', 'solidão escolhida', 'sabedoria', 'guia interior'],
      invertida: ['isolamento', 'evasão', 'solidão indesejada', 'rejeição de conselhos'],
    },
    significado: {
      normal:
        'O Eremita se afasta para ver com clareza. Fala de retirar-se um ' +
        'tempo do ruído para encontrar respostas dentro, e da sabedoria ' +
        'que vem de ter caminhado em silêncio. A luz que você busca você mesmo ' +
        'carrega.',
      invertida:
        'Invertido, o retiro se torna confinamento: isolamento que afasta de tudo, ' +
        'fuga disfarçada de busca, ou uma solidão que já não nutre. Também ' +
        'pode ser negar-se a pedir ou a receber a orientação que você precisa.',
    },
    simbolismo:
      'Sozinho no topo de uma montanha, segura uma lanterna com uma estrela ' +
      'dentro: a luz do saber que ilumina apenas o passo seguinte. O cajado ' +
      'o apoia na subida; o manto cinza o torna quase invisível, ' +
      'afastado do mundo por escolha.',
  },
  'mayor-10': {
    nombre: 'A Roda da Fortuna',
    palabrasClave: {
      normal: ['ciclos', 'mudança', 'destino', 'giro', 'oportunidade'],
      invertida: ['má fase', 'resistência à mudança', 'sentir-se à mercê', 'estagnação'],
    },
    significado: {
      normal:
        'A Roda gira e tudo muda: o que estava embaixo sobe, o que estava ' +
        'em cima desce. Fala de uma virada do destino, de ciclos que se completam e ' +
        'de aceitar que há forças maiores em jogo. Quando a sorte muda a ' +
        'favor, convém aproveitá-la.',
      invertida:
        'Invertida, a roda parece girar contra: má fase, ciclos que se ' +
        'repetem, a sensação de estar à mercê do que acontece. Também pode ' +
        'ser resistir a uma mudança inevitável em vez de fluir com ela.',
    },
    simbolismo:
      'Uma grande roda gira no céu, rodeada de criaturas que sobem e descem ' +
      'com ela. Nos cantos, quatro figuras aladas leem: o que muda se ' +
      'entende melhor a partir do que permanece. As letras do centro lembram ' +
      'que o giro obedece a uma lei.',
  },
  'mayor-11': {
    nombre: 'A Justiça',
    palabrasClave: {
      normal: ['equidade', 'verdade', 'causa e efeito', 'responsabilidade', 'clareza'],
      invertida: ['injustiça', 'evitar a culpa', 'desequilíbrio', 'desonestidade'],
    },
    significado: {
      normal:
        'A Justiça pesa os fatos sem se deixar levar pela emoção. Fala de verdade, de ' +
        'consequências que correspondem ao que foi feito e de assumir a própria parte ' +
        'com honestidade. É o momento de decidir com clareza e de que cada ' +
        'coisa receba o que lhe cabe.',
      invertida:
        'Invertida, a balança se desequilibra: injustiça, decisões parciais ou ' +
        'evitar a responsabilidade pelo que se provocou. Pode indicar ' +
        'enganar-se sobre os próprios atos ou carregar culpas alheias.',
    },
    simbolismo:
      'Sentada entre duas colunas, segura uma espada erguida em uma mão e ' +
      'uma balança na outra: a razão que corta e o equilíbrio que mede. Diferente ' +
      'de outras figuras, olha de frente, com os olhos abertos: ' +
      'julga o que vê, não o que imagina.',
  },
  'mayor-12': {
    nombre: 'O Pendurado',
    palabrasClave: {
      normal: ['pausa', 'entrega', 'outro olhar', 'sacrifício', 'suspensão'],
      invertida: ['estagnação', 'resistência', 'sacrifício inútil', 'demora'],
    },
    significado: {
      normal:
        'O Pendurado interrompe a ação para mudar o olhar. Fala sobre soltar o ' +
        'controle, aceitar uma pausa e ver a situação de um ângulo diferente do habitual ' +
        'olhando para ela. Às vezes, avançar é, justamente, ficar parado por um tempo.',
      invertida:
        'Invertida, a pausa vira estagnação: resistir a soltar, esperar sem ' +
        'que nada se mova, ou fazer sacrifícios que não levam a lugar algum. Pode ' +
        'indicar apego a uma postura quando é hora de se render e olhar diferente.',
    },
    simbolismo:
      'Pendurado de cabeça para baixo em uma árvore viva, preso por um pé, com as mãos ' +
      'escondidas e o outro pé livre: ele escolheu estar assim. Seu rosto está calmo e ' +
      'um halo o ilumina: a suspensão não é castigo, é revelação. O mundo ' +
      'é visto de forma diferente quando está de cabeça para baixo.',
  },
  'mayor-13': {
    nombre: 'A Morte',
    palabrasClave: {
      normal: ['fim', 'transformação', 'encerramento', 'renovação', 'soltar'],
      invertida: ['resistência à mudança', 'estagnação', 'apegar-se', 'medo do fim'],
    },
    significado: {
      normal:
        'A Morte quase nunca é literal: é o fim que abre caminho para o novo. ' +
        'Fala sobre encerrar uma etapa, deixar morrer o que já cumpriu seu ciclo e ' +
        'permitir que algo diferente nasça. Dói soltar, mas sem esse fechamento não ' +
        'há renovação.',
      invertida:
        'Invertida, o processo trava: apegar-se ao que já terminou, temer ' +
        'tanto a mudança que se prolonga a agonia. Pode indicar uma ' +
        'transformação que pede passagem e à qual você resiste com todas as suas ' +
        'forças.',
    },
    simbolismo:
      'Um esqueleto com armadura avança em um cavalo branco, carregando uma ' +
      'bandeira com uma rosa: o que varre também anuncia uma nova beleza. Diante ' +
      'dele, reis e crianças caem da mesma forma. Ao fundo, o sol nasce entre duas ' +
      'colunas: cada fim é também um amanhecer.',
  },
  'mayor-14': {
    nombre: 'A Temperança',
    palabrasClave: {
      normal: ['equilíbrio', 'moderação', 'síntese', 'paciência', 'harmonia'],
      invertida: ['excesso', 'impaciência', 'desequilíbrio', 'desarmonia'],
    },
    significado: {
      normal:
        'A Temperança mistura na medida certa. Fala de encontrar o ponto ' +
        'de equilíbrio, combinar o que parecia incompatível e avançar com paciência e ' +
        'moderação. É a calma que resulta de não ir nem de mais nem de menos.',
      invertida:
        'Invertida, perde-se a medida: excesso em algum terreno, impaciência ' +
        'que arruína o processo, ou elementos que não conseguem se integrar. Pode ' +
        'indicar uma vida sem equilíbrio, puxada entre extremos.',
    },
    simbolismo:
      'Um anjo verte água entre duas taças sem derramar uma gota: o fluxo ' +
      'constante que mistura sem perder. Tem um pé na terra e outro no ' +
      'água —o material e o emocional—, e uma trilha leva ao fundo em direção a uma ' +
      'luz: o equilíbrio também é um caminho.',
  },
  'mayor-15': {
    nombre: 'O Diabo',
    palabrasClave: {
      normal: ['apego', 'desejo', 'amarras', 'sombra', 'materialismo'],
      invertida: ['libertação', 'romper correntes', 'recuperar o controle', 'tomada de consciência'],
    },
    significado: {
      normal:
        'O Diabo mostra as correntes que nós mesmos criamos: apegos, hábitos, ' +
        'desejos que escravizam. Fala do que te prende mesmo quando achas que escolheste, da ' +
        'sombra que preferimos não olhar. Reconhecer a amarra é o primeiro ' +
        'passo para soltá-la.',
      invertida:
        'Invertida, a corrente se afrouxa: tomar consciência do que te escraviza ' +
        'e começar a se libertar, retomar o controle sobre um desejo ou um ' +
        'vínculo. É a saída do poço, ainda que o primeiro esforço custe.',
    },
    simbolismo:
      'Uma figura demoníaca domina dois seres acorrentados ao seu pedestal. Mas ' +
      'olhe para as correntes: estão frouxas, poderiam retirá-las passando pela ' +
      'cabeça. O vínculo é mais uma escolha do que uma imposição. A tocha invertida ' +
      'ilumina para baixo, em direção ao material.',
  },
  'mayor-16': {
    nombre: 'A Torre',
    palabrasClave: {
      normal: ['ruptura súbita', 'revelação', 'desmoronamento', 'libertação', 'verdade'],
      invertida: ['crise evitada', 'medo da mudança', 'desmoronamento adiado', 'resistência'],
    },
    significado: {
      normal:
        'A Torre é o desmoronamento repentino do que estava mal construído. ' +
        'Fala de uma verdade que explode, de estruturas falsas que caem de ' +
        'golpe. É doloroso, mas liberta: o que cai não se sustentava, e sobre ' +
        'é mais fácil construir sobre um terreno limpo.',
      invertida:
        'Invertida, a queda é resistida ou adiada: uma crise que se vê ' +
        'chegar e se evita, uma mudança necessária à qual se apega. Pode ser ' +
        'um abalo interno que ainda não explodiu para fora.',
    },
    simbolismo:
      'Um raio parte uma torre no alto de um penhasco e arranca a coroa do seu ' +
      'topo; duas figuras caem no vazio. O fogo e as chamas que escapam pelas ' +
      'janelas são a verdade que já não cabe dentro. O falso queima para ' +
      'que reste apenas a rocha.',
  },
  'mayor-17': {
    nombre: 'A Estrela',
    palabrasClave: {
      normal: ['esperança', 'fé', 'inspiração', 'serenidade', 'renovação'],
      invertida: ['desânimo', 'fé perdida', 'desconexão', 'pessimismo'],
    },
    significado: {
      normal:
        'A Estrela chega após a tempestade da Torre, como uma calma ' +
        'luminosa. Fala de esperança renovada, de fé em que as coisas podem ' +
        'sarar e de um guia suave que orienta. É o momento de curar-se e ' +
        'voltar a confiar.',
      invertida:
        'Invertida, a luz se apaga: desânimo, fé perdida, a sensação de que ' +
        'não vale a pena confiar. Pode indicar desconexão do que te ' +
        'inspirava um pessimismo que nubla os bons sinais.',
    },
    simbolismo:
      'Nua junto a um lago, uma mulher verte água na terra e na ' +
      'água: mostra-se sem defesas, em paz. Sobre ela brilha uma grande ' +
      'estrela rodeada por sete menores. O pássaro na árvore e a quietude ' +
      'da paisagem falam de uma serenidade recuperada.',
  },
  'mayor-18': {
    nombre: 'A Lua',
    palabrasClave: {
      normal: ['ilusão', 'medos', 'intuição', 'incerteza', 'sonhos'],
      invertida: ['clareza que retorna', 'medos que se dissipam', 'verdade revelada', 'confusão que cede'],
    },
    significado: {
      normal:
        'A Lua ilumina uma paisagem incerta, onde as coisas não são o que ' +
        'parecem. Fala de medos, ilusões e sinais confusos, mas também ' +
        'da intuição que sabe se mover na penumbra. Não é momento de ' +
        'certezas: é momento de andar devagar e confiar no instinto.',
      invertida:
        'Invertida, a névoa começa a se dissipar: medos que se vão, um ' +
        'engano que se esclarece, a verdade que surge após a confusão. Também ' +
        'pode ser o desconforto em seu ponto mais denso, logo antes de ' +
        'clarear.',
    },
    simbolismo:
      'A lua verte gotas sobre um caminho que se perde entre duas torres. Um ' +
      'um cão e um lobo uivam —o domesticado e o selvagem do medo—, e um ' +
      'caranguejo emerge da água, do inconsciente. O caminho existe, mas é ' +
      'percorrido quase às cegas.',
  },
  'mayor-19': {
    nombre: 'O Sol',
    palabrasClave: {
      normal: ['alegria', 'clareza', 'sucesso', 'vitalidade', 'verdade'],
      invertida: ['otimismo nublado', 'entusiasmo apagado', 'demora em brilhar', 'desânimo passageiro'],
    },
    significado: {
      normal:
        'O Sol ilumina tudo sem sombras: é a carta da alegria clara e ' +
        'da vitalidade. Fala de sucesso, da verdade que se mostra à luz do dia e ' +
        'de uma felicidade simples e sem segundas intenções. Depois da Lua, enfim ' +
        'tudo se vê com nitidez.',
      invertida:
        'Invertido, o sol não se apaga, mas fica um pouco nublado: entusiasmo que ' +
        'custa a despertar, uma alegria adiada, um otimismo que precisa ser ' +
        'recuperado. Geralmente é algo passageiro: a luz continua lá, apenas oculta.',
    },
    simbolismo:
      'Um sol enorme, com rosto sereno, irradia sobre uma criança nua montada ' +
      'em um cavalo branco: a inocência que não teme se mostrar. Os girassóis ' +
      'sobre o muro giram em direção à luz. Tudo é aberto, caloroso e sem segredos.',
  },
  'mayor-20': {
    nombre: 'O Julgamento',
    palabrasClave: {
      normal: ['despertar', 'chamado', 'renascer', 'equilíbrio', 'perdão'],
      invertida: ['autocrítica severa', 'chamado ignorado', 'dúvida', 'ficar no passado'],
    },
    significado: {
      normal:
        'O Julgamento é um despertar: o chamado para olhar a própria vida com ' +
        'perspectiva e responder a algo maior. Fala de renascer após um balanço ' +
        'honesto, de perdoar a si mesmo e aos outros, e de dar o passo rumo a uma versão ' +
        'mais plena de si mesma.',
      invertida:
        'Invertida, o chamado é ignorado ou se volta contra você: autocrítica que ' +
        'não perdoa, dúvidas para dar o passo, ou ficar preso em um passado ' +
        'que pede um encerramento. Pode indicar que você evita uma decisão que já sabe ' +
        'qual é.',
    },
    simbolismo:
      'Um anjo toca a trombeta das nuvens e, abaixo, figuras se levantam de ' +
      'seus túmulos com os braços abertos: respondem ao chamado sem medo. As ' +
      'águas e as montanhas ao fundo falam de um fim de ciclo; o que renasce ' +
      'o faz já renovado.',
  },
  'mayor-21': {
    nombre: 'O Mundo',
    palabrasClave: {
      normal: ['plenitude', 'conquista', 'integração', 'final feliz', 'totalidade'],
      invertida: ['fechamento pendente', 'meta pela metade', 'demora', 'falta de integração'],
    },
    significado: {
      normal:
        'O Mundo encerra a jornada dos Arcanos com plenitude. Fala de um ciclo ' +
        'completado, de uma meta alcançada e da sensação de estar inteiro e ' +
        'em harmonia com o que te rodeia. É a recompensa do caminho percorrido e, ' +
        'ao mesmo tempo, o limiar para um novo.',
      invertida:
        'Invertido, o fechamento está perto, mas incompleto: uma meta à qual falta ' +
        'falta um passo, um ciclo que você ainda não integrou, uma demora perto ' +
        'do fim. Convida a amarrar a última ponta antes de celebrar.',
    },
    simbolismo:
      'Uma figura dança dentro de uma coroa de louros, segura dois bastões e ' +
      'está rodeada, nos cantos, pelas mesmas quatro criaturas da ' +
      'Roda: o todo se fecha sobre si mesmo. A guirlanda oval é um ' +
      'portal: terminar é também recomeçar.',
  },
};
