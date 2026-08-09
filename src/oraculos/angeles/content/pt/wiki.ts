// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
// Wiki del oraculo de Angeles (español). Base de conocimiento reescrita con voz
// propia a partir del mazo de referencia: registro MISTICO (a diferencia del
// tono didactico del Tarot), para que los dos oraculos suenen distintos ahora
// que conviven en el quiosco.
//
// Por numero de carta (1..78, mismo orden que el mazo y las imagenes). Cada
// ficha completa lo que el angel trae; los campos que el mazo no da (signo,
// regente, combinaciones, incluso el reverso en las que "no tienen") se omiten:
// no se inventan atribuciones.

export interface FichaAngel {
  nombre: string;
  /** Coro / familia a la que pertenece la carta. Ej: 'Serafines · Primer Coro'. */
  grupo: string;
  /** Signo zodiacal, solo si el mazo lo asigna. */
  signo?: string;
  /** Astro regente, solo si el mazo lo asigna. */
  regente?: string;
  /** Palabras clave, para leer la carta de un vistazo. */
  claves: {
    derecho: string[];
    /** Algunas cartas 'no tienen' revés: se omite. */
    invertido?: string[];
  };
  /** Quien es el angel: su naturaleza y el mensaje que porta (registro mistico). */
  presencia: string;
  /** Significado cuando la carta cae derecha. */
  derecho: string;
  /** Significado invertido, solo si la carta lo tiene. */
  invertido?: string;
  /** Lecturas que solo aparecen junto a otras cartas, solo si el mazo las da. */
  encuentros?: string;
}

// Secciones de la grilla Aprender: agrupan las 78 cartas por familia, como el
// Tarot las agrupa por Mayores y palos. Cada sección toma un rango contiguo de
// números de carta.
//
// Son POCAS y GRANDES a proposito: cada seccion se desbloquea con un video, asi
// que los nueve Coros (de 3 cartas cada uno) van juntos en un solo bloque. El
// coro al que pertenece cada angel igual se lee en su ficha ("Coro").
export const SECCIONES_ANGELES_PT: { id: string; titulo: string; desde: number; hasta: number }[] = [
  { id: 'coros', titulo: 'Os nove Coros', desde: 1, hasta: 27 },
  { id: 'arcangeles', titulo: 'Arcanjos', desde: 28, hasta: 37 },
  { id: 'representativos', titulo: 'Anjos representativos', desde: 38, hasta: 66 },
  { id: 'negativos', titulo: 'Anjos negativos', desde: 67, hasta: 78 },
];

// Rotulos de la ficha en español. El resto de los idiomas cae a español hasta
// que se traduzcan (mismo criterio que Runas).
export const ETIQUETAS_ANGELES_PT = {
  coro: 'Coro',
  signo: 'Signo',
  regente: 'Regente',
  claves: 'Palavras-chave',
  presencia: 'Sua presença',
  derecho: 'Na posição normal',
  invertido: 'Na posição invertida',
  encuentros: 'Junto a outras cartas',
};

export const WIKI_ANGELES_PT: Record<number, FichaAngel> = {
  // ── Serafines · Primer Coro ──────────────────────────────────────────────
  1: {
    nombre: 'Serafim do Amor Puro',
    grupo: 'Serafins · Primeiro Coro',
    claves: {
      derecho: ['amor incondicional', 'entrega', 'bondade', 'família'],
      invertido: ['desilusão', 'coração fechado', 'medo de sentir'],
    },
    presencia:
      'Os serafins ardem no círculo mais próximo ao divino: são o fogo ' +
      'que rodeia a fonte e não se consome. O Serafim do Amor Puro leva essa ' +
      'chama ao plano dos afetos. Não é o amor que pede, mas o que dá; o ' +
      'que sustenta os seus e se derrama, sem cálculo, sobre tudo o que ' +
      'viva. Quando aparece, algo em sua vida está sendo olhado por esse amor que ' +
      'não espera nada em troca.',
    derecho:
      'Na posição normal, a carta fala de um carinho puro e elevado: o amor à ' +
      'família e à humanidade, os sentimentos que não buscam proveito. ' +
      'Anuncia — ou descreve — alguém de coração generoso, que faz o bem pelo ' +
      'simples prazer de fazê-lo. É sinal de vínculos saudáveis, de entrega ' +
      'sincera e de uma bondade que abriga quem a recebe.',
    invertido:
      'Invertida, a chama se recolhe para dentro. Pode indicar um ' +
      'desengano que esfriou o coração, ou o medo de mostrar o que se sente: ' +
      'um amor verdadeiro que não se anima a dizer-se e se guarda até doer. A ' +
      'carta convida a baixar essa guarda antes que o silêncio se torne ' +
      'distância.',
  },
  2: {
    nombre: 'Serafim Curador',
    grupo: 'Serafins · Primeiro Coro',
    claves: {
      derecho: ['cura', 'tratamento eficaz', 'alívio', 'medicina'],
      invertido: ['remédio que não faz efeito', 'demora para sarar'],
    },
    presencia:
      'Da mesma fogueira divina desce o Serafim Curador, que aproxima seu ' +
      'fogo à ferida para fechá-la. É a mão que cura e a ciência que ' +
      'acerta: a figura do médico, do remédio certo, da saúde que retorna.',
    derecho:
      'Na posição normal, promete uma solução eficaz para uma dor: o tratamento ' +
      'funciona, o corpo responde, a melhora chega. Costuma indicar a pessoa ' +
      'que cura —o médico, o terapeuta— ou o caminho certo para recuperar ' +
      'a saúde.',
    invertido:
      'Invertida, avisa que o remédio escolhido não está dando frutos. O ' +
      'tratamento não alcança o objetivo ou não é o adequado: convém revisar o rumo e ' +
      'buscar outra ajuda.',
  },
  3: {
    nombre: 'Serafim Cantor',
    grupo: 'Serafins · Primeiro Coro',
    claves: {
      derecho: ['arte', 'criatividade', 'inspiração', 'dom'],
      invertido: ['tristeza', 'bloqueio criativo', 'desânimo'],
    },
    presencia:
      'O Serafim Cantor é a voz do coro celestial: aquele que converte o ' +
      'fogo em música. Encarna o artista, a alma dotada de um dom criativo ' +
      'que precisa se expressar para encontrar a paz.',
    derecho:
      'Na posição normal, revela uma pessoa muito criativa, com talento e sensibilidade ' +
      'para a arte. Anuncia inspiração e bons frutos do que se cria.',
    invertido:
      'Invertida, descreve um estado de tristeza e de inspiração apagada: a ' +
      'fonte secou por um tempo e é difícil voltar a cantar.',
    encuentros:
      'Junto ao Anjo do Amor, augura um bom futuro e pode anunciar a ' +
      'proximidade de uma gravidez.',
  },
  // ── Querubines · Segundo Coro ────────────────────────────────────────────
  4: {
    nombre: 'Querubim Kerub, Anjo Mediador',
    grupo: 'Querubins · Segundo Coro',
    claves: {
      derecho: ['conselho', 'mediação', 'acordo', 'sabedoria'],
      invertido: ['falta de apoio', 'desamparo'],
    },
    presencia:
      'Os querubins guardam o conhecimento e a porta do sagrado. Kerub, ' +
      'o Mediador, constrói pontes: é a voz serena que aconselha e reconcilia ' +
      'as partes em conflito.',
    derecho:
      'Na posição normal, aponta para a pessoa conselheira e conciliadora, aquela que ajuda a ' +
      'encontrar o ponto de equilíbrio e a destravar um conflito com palavras justas.',
    invertido:
      'Invertida, fala de falta de apoio justamente quando mais se precisa: uma ' +
      'situação delicada que se enfrenta em solidão.',
  },
  5: {
    nombre: 'Querubim Karibu, Anjo Guardião',
    grupo: 'Querubins · Segundo Coro',
    claves: {
      derecho: ['proteção', 'princípios', 'justiça', 'firmeza'],
      invertido: ['intolerância', 'rigidez'],
    },
    presencia:
      'Karibu é o sentinela que custodia o que importa. Encarna a pessoa ' +
      'de princípios firmes, ligada à lei e ao que é justo, que protege com ' +
      'autoridade aqueles que estão sob seus cuidados.',
    derecho:
      'Na posição normal, representa alguém com peso — muitas vezes com poder judicial ou de ' +
      'mando—, protetor e íntegro, que sustenta seus valores sem vacilar.',
    invertido:
      'Invertida, essa firmeza se torna excessiva: conservadorismo, rigidez, ' +
      'intolerância com quem pensa diferente.',
  },
  6: {
    nombre: 'Querubim Longevo, Guardião da Árvore da Vida',
    grupo: 'Querubins · Segundo Coro',
    signo: 'Virgem',
    claves: {
      derecho: ['experiência', 'sabedoria', 'maturidade', 'conselho'],
      invertido: ['ideias equivocadas', 'pouca confiabilidade'],
    },
    presencia:
      'O Guardião da Árvore da Vida zela pela raiz do que existe. É ' +
      'a figura do ancião sábio: muita vida vivida, muito aprendizado, um ' +
      'conhecimento que só os anos trazem.',
    derecho:
      'Na posição normal, representa a pessoa de grande experiência e profundidade, cujo ' +
      'conselho vale porque nasce da vivência. Associa-se ao signo de Virgem.',
    invertido:
      'Invertida, essa sabedoria se distorce: ideias equivocadas, critérios pouco ' +
      'confiáveis, alguém em quem não convém se apoiar.',
  },
  // ── Tronos · Tercer Coro ─────────────────────────────────────────────────
  7: {
    nombre: 'Trono Masculino e Feminino',
    grupo: 'Tronos · Terceiro Coro',
    claves: {
      derecho: ['ideias firmes', 'tempero', 'domínio das paixões'],
      invertido: ['projetos que não se concretizam', 'ideias erradas'],
    },
    presencia:
      'Os Tronos sustentam a vontade divina como assento do que é estável. ' +
      'Esta carta encarna a mente de ideias fixas, a pessoa que não se deixa ' +
      'arrastar pelo impulso e mantém o seu rumo.',
    derecho:
      'Na posição normal, descreve quem pensa com firmeza e, no amor, não se deixa ' +
      'levar pelas paixões: a razão prevalece sobre o arrebatamento.',
    invertido:
      'Invertida, essa rigidez atrapalha: dificuldades para concretizar projetos, ' +
      'ideias equivocadas. Pode indicar uma falsa gravidez.',
  },
  8: {
    nombre: 'Tronos Criativos',
    grupo: 'Tronos · Terceiro Coro',
    signo: 'Gêmeos',
    claves: {
      derecho: ['criatividade', 'ideias grandiosas', 'inovação'],
      invertido: ['bloqueio', 'projetos paralisados'],
    },
    presencia:
      'Os Tronos Criativos são o assento onde nascem as grandes ideias: a ' +
      'mente que inventa e renova, sempre um passo à frente do conhecido.',
    derecho:
      'Na posição normal, representa a pessoa criativa e inovadora, de mente fértil ' +
      'e visão própria. Corresponde ao signo de Gêmeos.',
    invertido:
      'Invertida, a fonte se apaga: falta de criatividade, projetos que ' +
      'estagnam e não deslancham.',
  },
  9: {
    nombre: 'Tronos, os Estrangeiros',
    grupo: 'Tronos · Terceiro Coro',
    signo: 'Aquário',
    claves: {
      derecho: ['mudanças', 'ideias novas', 'força mental'],
      invertido: ['mente confusa', 'evasão'],
    },
    presencia:
      'Vêm de longe e trazem o novo. Os Estrangeiros encarnam a mudança, ' +
      'as ideias que rompem o estabelecido e o poder da mente para ' +
      'transformar a realidade.',
    derecho:
      'Na posição normal, anuncia mudanças, ideias frescas e a força do pensamento. ' +
      'Pode indicar alguém que chega de longe para se instalar aqui. ' +
      'Corresponde ao signo de Aquário.',
    invertido:
      'Invertida, essa força mental se turva: confusão e o risco de ' +
      'buscar na evasão —inclusive nas drogas— o que não se encontra.',
  },
  // ── Dominaciones · Cuarto Coro ───────────────────────────────────────────
  10: {
    nombre: 'Dominação Yahriel, o Anjo Regente',
    grupo: 'Dominações · Quarto Coro',
    claves: {
      derecho: ['liderança', 'comando', 'autoridade'],
      invertido: ['tirania', 'abuso de poder'],
    },
    presencia:
      'As dominações ordenam o governo do céu. Yahriel é a mão que ' +
      'conduz: a capacidade de liderar e de colocar ordem no que dirige.',
    derecho:
      'Na posição normal, representa quem é capaz de liderar —uma situação, uma ' +
      'empresa, um país— com comando natural e senso de direção.',
    invertido:
      'Invertida, o comando se corrompe: tirania, poder exercido sobre os outros ' +
      'sem medida.',
  },
  11: {
    nombre: 'Dominação Chasmal, aquele que fala com paixão',
    grupo: 'Dominações · Quarto Coro',
    claves: {
      derecho: ['paixão', 'ímpeto', 'entusiasmo'],
      invertido: ['exaltação', 'reação desmedida'],
    },
    presencia:
      'Chasmal fala com fogo na voz. Encarna a pessoa apaixonada e ' +
      'impulsiva, que se entrega ao que sente com todo o corpo.',
    derecho:
      'Na posição normal, descreve o temperamento ardente e espontâneo, capaz de ' +
      'contagiar seu entusiasmo.',
    invertido:
      'Invertida, a paixão transborda: reações exaltadas, um caráter que ' +
      'perde as estribeiras com facilidade.',
  },
  12: {
    nombre: 'Dominação Zadkiel, o Anjo Misericordioso',
    grupo: 'Dominações · Quarto Coro',
    claves: {
      derecho: ['sensibilidade', 'nobreza', 'vontade'],
      invertido: ['egoísmo', 'engano', 'deslealdade'],
    },
    presencia:
      'Zadkiel derrama a misericórdia. É a alma sensível e voluntariosa, de ' +
      'sentimentos nobres, que acompanha sem pedir nada.',
    derecho:
      'Na posição normal, representa a pessoa de bom coração e firme vontade, boa ' +
      'companheira na jornada.',
    invertido:
      'Invertida, torna-se o seu oposto: egoísmo, engano, má companhia em ' +
      'quem não se pode confiar.',
  },
  // ── Virtudes · Quinto Coro ───────────────────────────────────────────────
  13: {
    nombre: 'Virtude Miguel, o Anjo Refulgente',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['nobreza', 'altruísmo', 'ajuda extraordinária'],
    },
    presencia:
      'As virtudes operam milagres e sustentam o ânimo. Miguel Refulgente ' +
      'brilha como a alma nobre e altruísta: uma ajuda que chega quando ' +
      'parecia impossível.',
    derecho:
      'Na posição normal, representa uma pessoa de grande coração, generosa, que aparece ' +
      'como um auxílio extraordinário. É uma das cartas mais luminosas do ' +
      'baralho: não tem leitura invertida, pois o seu bem não se inverte.',
  },
  14: {
    nombre: 'Virtude Tarshsis, o Anjo que guardou Cristo',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['proteção familiar', 'amparo', 'cuidado'],
    },
    presencia:
      'Tarshsis é o guardião que velou pelo que é mais sagrado. Encarna a ' +
      'proteção da família: aquele que cuida dos seus e os mantém em ' +
      'segurança.',
    derecho:
      'Na posição normal, fala de amparo e cuidado no lar, de alguém que vela por ' +
      'os seus. Como Miguel, não tem leitura invertida: a sua proteção não se ' +
      'volta contra ninguém.',
  },
  15: {
    nombre: 'Virtude Bariel, aquele que infunde coragem',
    grupo: 'Virtudes · Quinto Coro',
    claves: {
      derecho: ['coragem', 'valentia', 'decisão'],
      invertido: ['indecisão', 'medo'],
    },
    presencia:
      'Bariel empresta seu fogo aos que duvidam. É o valor necessário para ' +
      'tomar decisões difíceis, a têmpera diante do que assusta.',
    derecho:
      'Na posição normal, representa a coragem: a pessoa que se anima a decidir mesmo ' +
      'quando o caminho dá medo.',
    invertido:
      'Invertida, esse valor falta: indecisão, paralisia diante do que precisa ' +
      'ser resolvido.',
  },
  // ── Potestades · Sexto Coro ──────────────────────────────────────────────
  16: {
    nombre: 'Potestade Camael, o Anjo da Dualidade',
    grupo: 'Potestades · Sexto Coro',
    regente: 'Urano',
    claves: {
      derecho: ['equilíbrio', 'reconciliação', 'ambiguidade'],
      invertido: ['desonestidade', 'duplicidade'],
    },
    presencia:
      'As potestades contêm as forças do caos. Camael sustenta a ' +
      'balança entre os opostos: é o equilíbrio e a reconciliação, mas ' +
      'também a ambiguidade de quem se vale de qualquer meio para seu fim. ' +
      'É regido por Urano.',
    derecho:
      'Na posição normal, representa a busca pelo equilíbrio e a reconciliação entre ' +
      'partes; seu lado sombrio é a ambiguidade, o fim que justifica os ' +
      'meios.',
    invertido:
      'Invertida, ganha esse lado turvo: uma pessoa pouco honesta, de segundas intenções.',
  },
  17: {
    nombre: 'Potestade Kemuel, mediador entre o bem e o mal',
    grupo: 'Potestades · Sexto Coro',
    claves: {
      derecho: ['equilíbrio moral', 'ajuda', 'discernimento'],
      invertido: ['soberba', 'não aceita conselhos'],
    },
    presencia:
      'Kemuel se posiciona na fronteira entre o certo e o errado e busca ' +
      'o ponto de equilíbrio. Encarna quem tenta ajudar os outros sem perder ' +
      'o norte moral.',
    derecho:
      'Na posição normal, representa a pessoa que busca o equilíbrio entre o bem e ' +
      'o mal e se oferece para ajudar.',
    invertido:
      'Invertida, acredita estar acima de qualquer julgamento e não ouve conselhos ' +
      'alheios: cai na soberba.',
  },
  18: {
    nombre: 'Potestade Sensiner',
    grupo: 'Potestades · Sexto Coro',
    regente: 'Saturno',
    claves: {
      derecho: ['abatimento', 'maus hábitos', 'erros'],
      invertido: ['perdas morais', 'perdas materiais'],
    },
    presencia:
      'Sensiner é a potestade da sombra interior. Encarna a pessoa ' +
      'abatida, presa de maus hábitos, propensa a errar. É regida por Saturno.',
    derecho:
      'Na posição normal, descreve um ânimo depressivo e uma facilidade para o erro que ' +
      'nascem de hábitos que fazem mal.',
    invertido:
      'Invertida, tudo se agrava: perdas tanto morais quanto materiais.',
  },
  // ── Principados · Séptimo Coro ───────────────────────────────────────────
  19: {
    nombre: 'Principado Anael, da Criação e da Sensualidade',
    grupo: 'Principados · Sétimo Coro',
    signo: 'Capricórnio',
    regente: 'Saturno',
    claves: {
      derecho: ['poder', 'beleza', 'liderança', 'sedução'],
      invertido: ['soberba', 'egoísmo', 'risco de doença'],
    },
    presencia:
      'Os principados guiam os povos e aqueles que comandam. Anael reúne ' +
      'poder, beleza e magnetismo: a liderança que atrai e o sucesso com o ' +
      'sexo oposto. É regido por Saturno; corresponde a Capricórnio.',
    derecho:
      'Na posição normal, fala de poder pessoal, beleza física, capacidade de conduzir ' +
      'e de seduzir. Tudo o que brilha e se faz notar.',
    invertido:
      'Invertida, esse brilho se torna vaidade: egoísmo, soberba e um risco de ' +
      'doença que convém cuidar.',
  },
  20: {
    nombre: 'Principado Hamiel, que transportou Enoque ao Céu',
    grupo: 'Principados · Sétimo Coro',
    signo: 'Virgem',
    claves: {
      derecho: ['guia espiritual', 'inteligência', 'sabedoria'],
      invertido: ['confusão', 'desamparo espiritual'],
    },
    presencia:
      'Hamiel conduziu Enoque até o céu: é o guia que eleva. Encarna o ' +
      'conselheiro espiritual, a inteligência unida à sabedoria. Corresponde ' +
      'ao signo de Virgem.',
    derecho:
      'Na posição normal, representa o mestre ou conselheiro da alma, a mente lúcida que ' +
      'orienta com profundidade.',
    invertido:
      'Invertida, falta essa luz: confusão e ausência de guia espiritual.',
    encuentros:
      'Junto a Lúcifer ou a Rimmon pode advertir sobre a possibilidade de uma ' +
      'doença grave.',
  },
  21: {
    nombre: 'Principado Cervill, que ajudou Davi contra Golias',
    grupo: 'Principados · Sétimo Coro',
    claves: {
      derecho: ['amizade', 'apoio', 'compreensão'],
      invertido: ['solidão', 'sentir-se só'],
    },
    presencia:
      'Cervill deu forças ao pequeno diante do gigante. É o amigo que ' +
      'aparece na hora difícil: a ajuda e a compreensão quando a batalha ' +
      'parece perdida.',
    derecho:
      'Na posição normal, representa a amizade verdadeira, o apoio e a compreensão nos ' +
      'momentos difíceis.',
    invertido:
      'Invertida, esse suporte se ausenta: um profundo sentimento de solidão.',
  },
  // ── Mensajeros · Octavo Coro ─────────────────────────────────────────────
  22: {
    nombre: 'Dobiel, mensageiro de decretos divinos',
    grupo: 'Mensageiros · Oitavo Coro',
    claves: {
      derecho: ['comunicação', 'mensagem', 'compreensão'],
      invertido: ['crise', 'confusão de sentimentos'],
    },
    presencia:
      'Os mensageiros levam a palavra do céu à terra. Dobiel traz os ' +
      'decretos divinos: é a pessoa compreensiva que transmite tudo ' +
      'através da linguagem.',
    derecho:
      'Na posição normal, anuncia uma mensagem com coisas interessantes e alguém que sabe ' +
      'colocá-la em palavras e se fazer entender.',
    invertido:
      'Invertida, a mensagem se enrola: crise e confusão nos sentimentos.',
  },
  23: {
    nombre: 'Anjo Renueco, Mensageiro',
    grupo: 'Mensageiros · Oitavo Coro',
    claves: {
      derecho: ['legado', 'fim de uma etapa', 'novo começo'],
    },
    presencia:
      'Renueco anuncia a sucessão. É o mensageiro dos ciclos: o que termina ' +
      'para que algo novo comece, o legado que se recebe ao fechar uma ' +
      'porta.',
    derecho:
      'Na posição normal, representa um legado e o fim de uma etapa que dá lugar a outra. ' +
      'Não possui leitura invertida: o ciclo segue seu curso da mesma forma.',
  },
  24: {
    nombre: 'Anjo Sariel, Mensageiro',
    grupo: 'Mensageiros · Oitavo Coro',
    claves: {
      derecho: ['revelação', 'novos ideais', 'herança'],
      invertido: ['falta de comunicação', 'silêncio'],
    },
    presencia:
      'Sariel Mensageiro retira véus. Traz a descoberta de novos ' +
      'ideais e a revelação do que estava oculto.',
    derecho:
      'Na posição normal, anuncia o encontro de um novo rumo ou a resolução de um ' +
      'enigma; pode indicar uma herança.',
    invertido:
      'Invertida, o fio se corta: falta de comunicação, mensagens que não ' +
      'chegam.',
  },
  // ── Noveno Coro ──────────────────────────────────────────────────────────
  25: {
    nombre: 'Médico Zagzagel, o Anjo médico',
    grupo: 'Nono Coro',
    claves: {
      derecho: ['cura', 'tratamento acertado', 'saúde'],
      invertido: ['recaída', 'tratamento falho'],
    },
    presencia:
      'Zagzagel é a sabedoria que cura. Encarna a cura e o acerto do ' +
      'tratamento: a saúde que se recupera quando a mão é a correta.',
    derecho:
      'Na posição normal, é um sinal favorável: a cura chega e o tratamento dá ' +
      'resultado.',
    invertido:
      'Invertida, tudo ao contrário: o remédio não faz efeito e a saúde não responde.',
  },
  26: {
    nombre: 'Uriel, encarregado das chaves',
    grupo: 'Nono Coro',
    claves: {
      derecho: ['arrependimento', 'lição', 'aprendizado'],
    },
    presencia:
      'Uriel guarda as chaves e é serafim e querubim ao mesmo tempo. É o Anjo ' +
      'do Arrependimento: aquele que mostra o preço dos erros e o ' +
      'esforço que custa repará-los.',
    derecho:
      'Simboliza as lições que precisamos sofrer pelo que fizemos e as dificuldades ' +
      'que precisamos suportar para seguir em frente. Não é um castigo, mas uma ' +
      'lição: a porta se abre depois de aprender.',
  },
  27: {
    nombre: 'Custódio das Cidades',
    grupo: 'Nono Coro',
    claves: {
      derecho: ['proteção', 'cuidado', 'resguardo'],
      invertido: ['desproteção', 'exposição'],
    },
    presencia:
      'Vela os portões das cidades: é o guardião dos umbrais, aquele ' +
      'que cuida do que está dentro de seus muros.',
    derecho:
      'Direita, fala de proteção e cuidado: alguém ou algo resguarda sua ' +
      'situação.',
    invertido:
      'Invertida, esses muros caem: ficar sem nenhuma proteção, ao ' +
      'relento.',
  },
  // ── Los Arcángeles ───────────────────────────────────────────────────────
  28: {
    nombre: 'Arcanjo Miguel',
    grupo: 'Arcanjos',
    claves: {
      derecho: ['justiça', 'mudanças importantes', 'verdade'],
      invertido: ['injustiça', 'atrasos'],
    },
    presencia:
      'Miguel, «o semelhante a Deus», é o príncipe das milícias celestes, ' +
      'aquele que empunha a espada da justiça. Sua carta marca as grandes ' +
      'reviravoltas da vida, aquelas que reordenam o que estava torto.',
    derecho:
      'Na posição normal, representa a justiça sendo feita e as mudanças ' +
      'importantes que chegam para colocar cada coisa em seu lugar.',
    invertido:
      'Invertida, a balança se desequilibra: injustiças e atrasos para ' +
      'alcançar o que se busca.',
  },
  29: {
    nombre: 'Arcanjo Gabriel',
    grupo: 'Arcanjos',
    regente: 'Netuno',
    claves: {
      derecho: ['subconsciente', 'intuição', 'viagens', 'discrição'],
      invertido: ['desconfiança', 'confusão'],
    },
    presencia:
      'Gabriel, o grande anunciador, governa o mundo do oculto e do ' +
      'subconsciente. Habita a dualidade do bem e do mal, do visível e do ' +
      'segredo. Regido por Netuno.',
    derecho:
      'Na posição normal, fala do mundo interior e dos sonhos, do gosto por ' +
      'viagens e da boa memória. Situações delicadas que se resolvem ' +
      'com discrição; tudo o que está ligado ao mistério.',
    invertido:
      'Invertida, falta chão: desconfiança, perda de esperança e ' +
      'confusão na hora de decidir.',
  },
  30: {
    nombre: 'Arcanjo Haniel',
    grupo: 'Arcanjos',
    signo: 'Libra',
    claves: {
      derecho: ['amor', 'harmonia', 'abundância', 'fecundidade'],
      invertido: ['frivolidade', 'apatia', 'esterilidade'],
    },
    presencia:
      'Haniel reúne tudo o que há de belo na vida. É a graça de Vênus feita ' +
      'arcanjo: amor, harmonia, sucesso, fecundidade, abundância e criatividade. ' +
      'Corresponde ao signo de Libra.',
    derecho:
      'Na posição normal, promete o que é bom em todos os planos: afetos plenos, ' +
      'prosperidade e criação fértil.',
    invertido:
      'Invertida, tudo se torna superficial: frivolidade, apatia pelas coisas, ' +
      'esterilidade.',
  },
  31: {
    nombre: 'Arcanjo Rafael',
    grupo: 'Arcanjos',
    signo: 'Leão',
    regente: 'Sol',
    claves: {
      derecho: ['força', 'brilho', 'liderança', 'nobreza'],
      invertido: ['egolatria', 'desencanto amoroso'],
    },
    presencia:
      'Rafael, «medicina de Deus», irradia força e brilho pessoal. É a alma ' +
      'nobre que nasce para se destacar e ser admirada, regida pelo coração. Se ' +
      'associa a Leão e é regida pelo Sol.',
    derecho:
      'Na posição normal, representa alguém nobre e luminoso, com dom de comando e desejo ' +
      'de se destacar.',
    invertido:
      'Invertida, esse brilho se torna ego: uma pessoa ególatra que sempre ' +
      'quer fazer a sua vontade, e desencanto no amor.',
    encuentros:
      'Junto a Lúcifer, ambos na posição normal, anuncia uma sexualidade plena e feliz; ' +
      'se algum sair invertido, não durará. Junto ao Anjo do Julgamento, riqueza ' +
      'e amizades importantes.',
  },
  32: {
    nombre: 'Arcanjo Sariel',
    grupo: 'Arcanjos',
    signo: 'Peixes',
    claves: {
      derecho: ['mandato', 'condução', 'mensagem justa', 'cura'],
    },
    presencia:
      'Sariel carrega o mandato de Deus e responde pela sorte dos anjos ' +
      'que quebram a lei. Conhecido também como curador, é guia e guardião ' +
      'da ordem. Representa o signo de Peixes.',
    derecho:
      'Representa quem detém o controle da vida de outros —um sacerdote, um ' +
      'líder—, e também uma mensagem que chega no momento certo. Segundo as ' +
      'cartas que o acompanhem, anuncia a cura da alma ou das ' +
      'emoções.',
  },
  33: {
    nombre: 'Arcanjo Raguel',
    grupo: 'Arcanjos',
    claves: {
      derecho: ['conselho', 'equilíbrio', 'alta moral', 'ajuda dos astros'],
      invertido: ['falta de ética', 'desequilíbrio emocional'],
    },
    presencia:
      'Raguel, anjo da Terra e guardião do segundo céu, é «o vingador ' +
      'dos astros», aquele que levou Enoque ao alto. Encarna a pessoa ' +
      'equilibrada e de alta moral, sempre disposta a ajudar.',
    derecho:
      'Direita, representa quem aconselha e sustenta os demais, e também ' +
      'a ajuda que chega dos astros.',
    invertido:
      'Invertida, perde-se o eixo: falta de ética e desequilíbrio nas ' +
      'emoções.',
  },
  34: {
    nombre: 'Arcanjo Remiel',
    grupo: 'Arcanjos',
    claves: {
      derecho: ['domínio', 'triunfo', 'revelação'],
      invertido: ['obstáculos', 'futuro incerto'],
    },
    presencia:
      'Remiel é «a misericórdia de Deus», aquele que conduz as almas ao ' +
      'Juízo Final. Encarna o domínio de si e o espírito triunfador.',
    derecho:
      'Na posição normal, fala de domínio e vitória, e pode trazer a revelação de ' +
      'algo oculto ou uma mensagem importante.',
    invertido:
      'Invertida, o caminho se trava: obstáculos e um futuro incerto.',
  },
  35: {
    nombre: 'Arcanjo Raziel',
    grupo: 'Arcanjos',
    claves: {
      derecho: ['mistérios', 'elevação espiritual', 'conhecimento'],
      invertido: ['perigo', 'traição', 'desconfiança'],
    },
    presencia:
      'Raziel guarda os segredos supremos: é o anjo das regiões ' +
      'ocultas e chefe dos Tronos, aquele que ensinou a Adão o saber do ' +
      'terreno e do celeste.',
    derecho:
      'Na posição normal, significa elevação espiritual e sintonia com o cosmos: estar ' +
      'em linha com uma ordem maior.',
    invertido:
      'Invertida, abre-se a sombra: perigo, traição, falta de confiança.',
  },
  36: {
    nombre: 'Arcanjo Metatron',
    grupo: 'Arcanjos',
    claves: {
      derecho: ['vínculo com o divino', 'grandeza', 'escrita', 'gênio'],
      invertido: ['abuso de poder', 'egocentrismo'],
    },
    presencia:
      'Metatron, «o escriba celestial», é o vínculo direto entre Deus e a ' +
      'humanidade. Encarna a força e a grandeza, e a palavra que fica ' +
      'escrita.',
    derecho:
      'Na posição normal, anuncia o surgimento de um escrito importante e o momento em ' +
      'que desperta o gênio que levamos dentro; pode indicar um escritor.',
    invertido:
      'Invertida, a grandeza se perverte: abuso de poder, egocentrismo.',
  },
  37: {
    nombre: 'Arcanjo Amiel',
    grupo: 'Arcanjos',
    signo: 'Touro',
    claves: {
      derecho: ['o novo', 'mudanças', 'viagens'],
      invertido: ['medo do desconhecido', 'retraimento'],
    },
    presencia:
      'Amiel abre as portas do inexplorado. Encarna o novo, as mudanças ' +
      'rumo ao pouco conhecido e as viagens. Representa o signo de Touro.',
    derecho:
      'Na posição normal, convida a cruzar o umbral: mudanças, descobertas, caminhos ' +
      'que se abrem.',
    invertido:
      'Invertida, o medo vence: temor ao desconhecido, retraimento diante do ' +
      'novo.',
  },
  // ── Ángeles representativos ──────────────────────────────────────────────
  38: {
    nombre: 'Anjos da Morte',
    grupo: 'Anjos representativos',
    signo: 'Escorpião',
    claves: {
      derecho: ['mudança brusca', 'ruptura', 'transformação'],
      invertido: ['perda', 'fracasso'],
    },
    presencia:
      'Não falam tanto do fim, mas do limiar: os Anjos da Morte marcam ' +
      'a mudança brusca, o que é cortado pela raiz para que outra coisa nasça. ' +
      'Representam o signo de Escorpião.',
    derecho:
      'Na posição normal, anuncia uma mudança radical; no relacionamento, uma ruptura. Também ' +
      'pode indicar uma intervenção cirúrgica. Raramente é literal: quase ' +
      'sempre é uma transformação necessária.',
    invertido:
      'Invertida, pesa a perda e o fracasso; dependendo da carta que a acompanhe, ' +
      'pode apontar para uma morte física.',
    encuentros:
      'Com Mastema e Carniveau, magia negra. Com Abadón, doenças sexuais ' +
      'ou cancerígenas. Com Kemuel, a paralisação de uma situação, eventos ' +
      'inesperados e perdas.',
  },
  39: {
    nombre: 'Anjos da Batalha',
    grupo: 'Anjos representativos',
    regente: 'Marte',
    claves: {
      derecho: ['conflito', 'traição', 'inimigos'],
    },
    presencia:
      'Trazem o fragor de Marte. Os Anjos da Batalha são o infortúnio e ' +
      'a briga: os inimigos, as traições, o terreno em disputa.',
    derecho:
      'Representam as brigas, as traições e os adversários que cruzam o ' +
      'caminho. Não têm leitura invertida: a batalha é a batalha.',
  },
  40: {
    nombre: 'Fada do Amor',
    grupo: 'Anjos representativos',
    regente: 'Vênus',
    claves: {
      derecho: ['chegada do amor', 'casal estável', 'segurança'],
      invertido: ['frustração', 'solidão', 'separação'],
    },
    presencia:
      'Com sua varinha, a Fada do Amor abençoa os vínculos. É a promessa de ' +
      'Vênus: o amor que chega ou a segurança, se já chegou.',
    derecho:
      'Direita, anuncia a chegada do amor e um casal feliz e estável.',
    invertido:
      'Invertida, o encanto se quebra: frustração no amor, solidão, ' +
      'separação.',
  },
  41: {
    nombre: 'Fada da Abundância',
    grupo: 'Anjos representativos',
    regente: 'Sol',
    claves: {
      derecho: ['prosperidade', 'sorte material', 'folga'],
      invertido: ['conquista com esforço', 'trabalho árduo'],
    },
    presencia:
      'A Fada da Abundância derrama a luz do Sol sobre o material. ' +
      'Representa uma boa posição econômica e sorte nos bens.',
    derecho:
      'Na posição normal, representa folga e fortuna no material: as coisas rendem e ' +
      'são suficientes.',
    invertido:
      'Invertida, o que se deseja chega, mas à custa de esforço: nada cai ' +
      'do céu.',
  },
  42: {
    nombre: 'Fada do Nascimento',
    grupo: 'Anjos representativos',
    regente: 'Lua',
    claves: {
      derecho: ['nascimento', 'bom presságio', 'nova vida'],
      invertido: ['problemas', 'interrupção'],
    },
    presencia:
      'Sob a influência da Lua, a Fada do Nascimento anuncia a chegada de ' +
      'uma criança e toca com sua varinha para que tudo corra bem.',
    derecho:
      'Na posição normal, augura o nascimento de um filho e um caminho protegido para essa ' +
      'chegada.',
    invertido:
      'Invertida, surgem problemas: variações ou uma interrupção no ' +
      'processo.',
  },
  43: {
    nombre: 'Gnomo do Trabalho',
    grupo: 'Anjos representativos',
    signo: 'Touro',
    claves: {
      derecho: ['recompensa', 'novo emprego', 'promoção'],
      invertido: ['problemas profissionais', 'obstáculos'],
    },
    presencia:
      'O Gnomo do Trabalho premia o esforço feito com as mãos. ' +
      'Representa os bons resultados que chegam quando se trabalhou com ' +
      'firmeza. Está associado a Touro.',
    derecho:
      'Na posição normal, anuncia frutos do esforço: um novo trabalho ou um aumento de ' +
      'salário.',
    invertido:
      'Invertido, aponta problemas no trabalho.',
  },
  44: {
    nombre: 'Gnomo Travesso',
    grupo: 'Anjos representativos',
    signo: 'Sagitário',
    claves: {
      derecho: ['diversão', 'hobbies', 'travessuras'],
    },
    presencia:
      'O Gnomo Travesso é o espírito brincalhão de Sagitário. Dependendo de onde ' +
      'caia, representa as diversões e hobbies… ou as confusões em que o ' +
      'consulente se mete.',
    derecho:
      'Fala de hobbies e entretenimentos, ou das enrascadas que a própria pessoa ' +
      'busca. É lido conforme a casa em que aparece.',
  },
  45: {
    nombre: 'Fantasminha do Ciúme',
    grupo: 'Anjos representativos',
    signo: 'Gêmeos',
    claves: {
      derecho: ['ciúmes', 'insegurança', 'angústia'],
      invertido: ['suspeita com fundamento'],
    },
    presencia:
      'O Fantasminha do Ciúme ronda o coração inseguro. Encarna o ciúme ' +
      'e a angústia aos quais pode arrastar. Corresponde a Gêmeos.',
    derecho:
      'Na posição normal, aponta ciúmes e inseguranças que corroem e roubam a paz.',
    invertido:
      'Invertida, essas suspeitas podem ter fundamento real: algo do que ' +
      'se teme é verdade.',
  },
  46: {
    nombre: 'Anjo Cupido',
    grupo: 'Anjos representativos',
    signo: 'Gêmeos',
    claves: {
      derecho: ['amor', 'paixão', 'união', 'casamento'],
      invertido: ['separação', 'infidelidade'],
    },
    presencia:
      'Cupido tenciona o arco do desejo. É o amor no plano físico, o ' +
      'equilíbrio apaixonado entre dois: a carta da união e do casamento.',
    derecho:
      'Na posição normal, representa o amor correspondido, a paixão e a união ' +
      'que se sela.',
    invertido:
      'Invertida, rompe-se: separação, frustração amorosa, infidelidade.',
  },
  47: {
    nombre: 'Ancião dos Dias',
    grupo: 'Anjos representativos',
    signo: 'Virgem',
    claves: {
      derecho: ['senso comum', 'serenidade', 'previsão'],
      invertido: ['ideias equivocadas', 'confusão'],
    },
    presencia:
      'O Ancião dos Dias é a voz da prudência. Encarna o senso ' +
      'comum e a serenidade necessários para resolver bem. Corresponde a Virgem.',
    derecho:
      'Na posição normal, aconselha calma e previsão antes de decidir; na saúde, indica ' +
      'que a solução para o problema será encontrada.',
    invertido:
      'Invertida, falta essa luz: ideias equivocadas, incompreensão, escuridão.',
  },
  48: {
    nombre: 'O Paraíso',
    grupo: 'Anjos representativos',
    claves: {
      derecho: ['paz', 'alegria', 'realização', 'boa saúde'],
      invertido: ['planos anulados', 'solidão', 'fracasso'],
    },
    presencia:
      'O Paraíso é o jardim da alma em calma. Representa a paz do ' +
      'espírito, a alegria e os bons presságios.',
    derecho:
      'Na posição normal, promete relações felizes, realização, altruísmo e boa ' +
      'saúde; para um artista, o sucesso em sua arte.',
    invertido:
      'Invertida, o jardim se fecha: planos anulados, futuro sombrio, ' +
      'solidão, fracassos.',
  },
  49: {
    nombre: 'Anjo do Julgamento',
    grupo: 'Anjos representativos',
    signo: 'Escorpião',
    regente: 'Plutão',
    claves: {
      derecho: ['consciência', 'nova etapa', 'estabilidade'],
      invertido: ['julgamentos equivocados', 'cegueira'],
    },
    presencia:
      'O Anjo do Julgamento desperta a consciência cósmica. Marca o início ' +
      'de uma nova etapa no plano mental, como quem reúne e ordena tudo o que ' +
      'aprendeu. É regido por Plutão; representa Escorpião.',
    derecho:
      'Na posição normal, fala de recopilar e compreender, de estabilidade tanto ' +
      'no bom quanto no ruim: ver o conjunto com clareza.',
    invertido:
      'Invertida, não se consegue ler os fatos: julgamentos equivocados, ' +
      'conclusões erradas.',
  },
  50: {
    nombre: 'Anjo Solar',
    grupo: 'Anjos representativos',
    signo: 'Leão',
    claves: {
      derecho: ['sucesso', 'luz', 'saúde', 'beleza'],
      invertido: ['solidão', 'planos cancelados'],
    },
    presencia:
      'O Anjo Solar é a plenitude da luz. Representa a paz do espírito, ' +
      'o sucesso e a clareza. Corresponde ao signo de Leão.',
    derecho:
      'Na posição normal, promete relações felizes, sinceridade, grandes sentimentos, ' +
      'saúde excelente e beleza física.',
    invertido:
      'Invertido, o sol se apaga: solidão, planos cancelados, futuro sombrio.',
  },
  51: {
    nombre: 'Anjo Lunar',
    grupo: 'Anjos representativos',
    signo: 'Câncer',
    claves: {
      derecho: ['imaginação', 'inspiração', 'sensibilidade nervosa'],
      invertido: ['miragens', 'passividade', 'dúvidas'],
    },
    presencia:
      'O Anjo Lunar habita a maré da imaginação. Inspira, mas também ' +
      'confunde; ilumina a alma e agita os nervos. Representa Câncer.',
    derecho:
      'Na posição normal, é espírito inspirado no mental; no trabalho alerta ' +
      'más influências e quimeras; na saúde, desordem do sistema nervoso.',
    invertido:
      'Invertido, a névoa vence: miragens, passividade, dúvidas.',
  },
  52: {
    nombre: 'Anjo da Doença',
    grupo: 'Anjos representativos',
    regente: 'Saturno',
    claves: {
      derecho: ['desânimo', 'falta de saúde', 'esforço para curar'],
      invertido: ['desânimo', 'falta de motivação'],
    },
    presencia:
      'O Anjo da Doença traz o peso de Saturno sobre o corpo e o ' +
      'ânimo. Fala do declínio, mas também de que com vontade se supera.',
    derecho:
      'Na posição normal, indica depressão, pouca energia e saúde frágil, que com esforço ' +
      'e boa disposição podem ser superadas.',
    invertido:
      'Invertida, falta a força para sair: desânimo e ausência de motivação ' +
      'para superar a má fase.',
  },
  53: {
    nombre: 'Anjo da Justiça',
    grupo: 'Anjos representativos',
    signo: 'Libra',
    claves: {
      derecho: ['equilíbrio', 'conselho certeiro', 'balanço'],
      invertido: ['indecisão', 'perda', 'desordem'],
    },
    presencia:
      'O Anjo da Justiça sustenta a balança de Libra. Representa o ' +
      'equilíbrio na vida e os conselhos que acertam em cheio.',
    derecho:
      'Na posição normal, fala de equilíbrio e bom critério; no relacionamento pode ' +
      'anunciar um divórcio resolvido com justiça; na saúde, um estado ' +
      'equilibrado.',
    invertido:
      'Invertida, a balança se desnivela: indecisão, desordem, perda, e o ' +
      'risco de ser vítima de alguém astuto.',
  },
  54: {
    nombre: 'O Ogim das Águas',
    grupo: 'Anjos representativos',
    signo: 'Escorpião',
    claves: {
      derecho: ['sensibilidade', 'proteção espiritual', 'amizade'],
      invertido: ['depressão', 'proteção que se afasta'],
    },
    presencia:
      'O Ogim das Águas é o espírito de uma mulher de signo de água: ' +
      'equilibrada, sensível, compreensiva. Oferece amizade e amparo espiritual. ' +
      'Corresponde a Escorpião.',
    derecho:
      'Na posição normal, representa essa presença protetora e compreensiva, uma amizade ' +
      'que cuida da alma.',
    invertido:
      'Invertida, a proteção se retira e surge a depressão.',
  },
  55: {
    nombre: 'Anjo Star',
    grupo: 'Anjos representativos',
    signo: 'Aquário',
    claves: {
      derecho: ['esperança', 'inspiração', 'harmonia'],
      invertido: ['ilusões frustradas', 'decepção'],
    },
    presencia:
      'O Anjo Star é a estrela que guia. Encarna o espírito cheio de ' +
      'esperança e a inspiração que mostra o caminho. Representa Aquário.',
    derecho:
      'Na posição normal, fala de esperança, equilíbrio, ordem e harmonia ao agir, e ' +
      'inspiração na arte.',
    invertido:
      'Invertida, a estrela se nubla: esperanças não atendidas, decepção, ' +
      'oportunidades que não chegam.',
  },
  56: {
    nombre: 'Anjo do Amor Masculino',
    grupo: 'Anjos representativos',
    signo: 'Escorpião',
    claves: {
      derecho: ['amor que chega', 'pretendente', 'proposta'],
      invertido: ['decepção', 'amor acabado'],
    },
    presencia:
      'O Anjo do Amor Masculino anuncia quem chega: o pretendente, o ' +
      'pedido de casamento. Representa o signo de Escorpião.',
    derecho:
      'Na posição normal, é o amor que se aproxima e se declara; pode trazer uma ' +
      'proposta formal.',
    invertido:
      'Invertida, decepção: um amor terminado, um homem desiludido.',
  },
  57: {
    nombre: 'Anjo do Amor Feminino',
    grupo: 'Anjos representativos',
    signo: 'Peixes',
    claves: {
      derecho: ['mulher apaixonada', 'início de relacionamento', 'casamento'],
      invertido: ['amor não correspondido', 'decepção'],
    },
    presencia:
      'O Anjo do Amor Feminino é a mulher apaixonada, o começo de um ' +
      'vínculo com o futuro. Representa Peixes.',
    derecho:
      'Na posição normal, anuncia o início de um relacionamento e a possibilidade de ' +
      'casamento.',
    invertido:
      'Invertida, o amor não encontra eco: decepção, sentimento não ' +
      'correspondido.',
  },
  58: {
    nombre: 'Anjo da Inveja',
    grupo: 'Anjos representativos',
    signo: 'Aquário',
    claves: {
      derecho: ['inveja', 'ciúmes', 'despeito'],
      invertido: ['inveja acentuada'],
    },
    presencia:
      'O Anjo da Inveja torna o ar pesado ao redor. Encarna a pessoa ' +
      'maliciosa, movida por ciúmes e despeito. Representa Aquário.',
    derecho:
      'Na posição normal, aponta inveja e ciúmes que adoecem o ânimo: depressão e ' +
      'ressentimento.',
    invertido:
      'Invertida, tudo se agrava: esses traços se acentuam ainda mais.',
  },
  59: {
    nombre: 'Anjo do Sacrifício',
    grupo: 'Anjos representativos',
    regente: 'Netuno',
    claves: {
      derecho: ['renúncia', 'transição', 'indecisão afetiva'],
      invertido: ['sucesso desigual', 'conquista sem satisfação'],
    },
    presencia:
      'O Anjo do Sacrifício pede para soltar e seguir em frente. Sob a influência de ' +
      'Netuno, marca um tempo de renúncia e transição, especialmente no ' +
      'campo afetivo.',
    derecho:
      'Na posição normal, fala de hesitação e indecisão nos sentimentos, projetos ' +
      'que estagnam, desleixo; na saúde, possíveis problemas circulatórios. É ' +
      'um parêntese antes de continuar.',
    invertido:
      'Invertida, há possibilidade de sucesso, embora desigual: chega, mas não ' +
      'traz a satisfação esperada, menos ainda no lado sentimental.',
  },
  60: {
    nombre: 'Anjo dos Filhos',
    grupo: 'Anjos representativos',
    signo: 'Câncer',
    claves: {
      derecho: ['filhos', 'boa saúde', 'descendência'],
      invertido: ['consultar o médico', 'atenção'],
    },
    presencia:
      'O Anjo dos Filhos fala da descendência do consulente: os ' +
      'filhos que já estão ou os que poderiam chegar. Representa Câncer.',
    derecho:
      'Na posição normal, alude aos filhos com boa saúde; deve ser lido conforme as cartas que ' +
      'a acompanham e a casa onde cai.',
    invertido:
      'Invertida, convém prestar atenção à saúde e consultar o médico.',
  },
  61: {
    nombre: 'Anjo da Ascensão',
    grupo: 'Anjos representativos',
    claves: {
      derecho: ['elevação espiritual', 'sabedoria', 'evolução'],
      invertido: ['surdez espiritual', 'negatividade'],
    },
    presencia:
      'O Anjo da Ascensão impulsiona para o alto. Encarna o desejo de ' +
      'elevar-se, a sabedoria e a evolução da alma.',
    derecho:
      'Na posição normal, fala de crescimento espiritual, sentimentos positivos e um ' +
      'caminho de evolução.',
    invertido:
      'Invertida, esse chamado é ignorado: sentimentos negativos, recusa em ' +
      'subir.',
  },
  62: {
    nombre: 'Anjo do Trono Masculino',
    grupo: 'Anjos representativos',
    regente: 'Vênus',
    claves: {
      derecho: ['senso comum', 'esperança', 'equilíbrio', 'beleza'],
      invertido: ['complicações', 'conflitos', 'atrasos'],
    },
    presencia:
      'O Anjo do Trono Masculino representa a mulher de conhecimentos ' +
      'práticos, com senso comum para resolver. É uma carta de esperança e ' +
      'equilíbrio; costuma indicar a mulher casada. Rege Vênus.',
    derecho:
      'Na posição normal, fala de critério, beleza física e estabilidade: alguém firme ' +
      'e equilibrado em quem se apoiar.',
    invertido:
      'Invertida, surgem complicações e conflitos, e atrasos na resolução dos ' +
      'problemas.',
  },
  63: {
    nombre: 'Anjo do Trono Feminino',
    grupo: 'Anjos representativos',
    signo: 'Áries',
    claves: {
      derecho: ['inteligência', 'paz', 'poder material', 'autoridade'],
      invertido: ['desordem', 'perda de autoridade'],
    },
    presencia:
      'O Anjo do Trono Feminino governa com a mente. Representa o controle ' +
      'espiritual através da inteligência e do equilíbrio, além do poder ' +
      'material e da autoridade. Corresponde a Áries.',
    derecho:
      'Na posição normal, fala de paz, harmonia, bens e comando sereno; na saúde, ' +
      'equilíbrio.',
    invertido:
      'Invertida, o oposto: desordem e autoridade que se desfaz.',
  },
  64: {
    nombre: 'Grigori Sexual',
    grupo: 'Anjos representativos',
    signo: 'Touro',
    claves: {
      derecho: ['desejo', 'paixão', 'aventura', 'atrativo'],
      invertido: ['vazio', 'solidão após o impulso'],
    },
    presencia:
      'Os Grigori são os vigilantes que olharam demais para a terra. O ' +
      'Grigori Sexual encarna o sucesso alcançado pela beleza física: o ' +
      'desejo, a paixão, a aventura passageira. Corresponde a Touro.',
    derecho:
      'Na posição normal, representa o magnetismo e a paixão que abrem portas, a ' +
      'aventura que incendeia.',
    invertido:
      'Invertida, deixar-se arrastar por essas paixões deixa vazio e solidão ' +
      'quando o fogo se apaga.',
  },
  65: {
    nombre: 'Grigori do Poder Material',
    grupo: 'Anjos representativos',
    signo: 'Áries',
    claves: {
      derecho: ['ambição', 'sorte material', 'astúcia'],
      invertido: ['má administração', 'perdas'],
    },
    presencia:
      'O Grigori do Poder Material encarna a pessoa ambiciosa e ' +
      'calculista, que busca tirar proveito de cada situação. Corresponde a ' +
      'Áries.',
    derecho:
      'Na posição normal, fala de sorte no material alcançada com astúcia e impulso.',
    invertido:
      'Invertida, a ganância se volta contra si: problemas materiais por ' +
      'erros na administração.',
  },
  66: {
    nombre: 'Grigori do Poder e da Força',
    grupo: 'Anjos representativos',
    signo: 'Leão',
    claves: {
      derecho: ['sucesso', 'tenacidade', 'negócios', 'energia'],
      invertido: ['apatia', 'passividade'],
    },
    presencia:
      'O Grigori do Poder e da Força conquista pelo impulso e pela tenacidade. Transborda ' +
      'atividade e não para. Corresponde a Leão.',
    derecho:
      'Na posição normal, anuncia sucessos alcançados com força e constância, negócios ' +
      'favoráveis e boa saúde; nos sentimentos, mais efusivo do que afetuoso.',
    invertido:
      'Invertida, o motor se apaga: apatia, falta de atividade, passividade.',
  },
  // ── Ángeles negativos, al mando de Lucifer ───────────────────────────────
  67: {
    nombre: 'Lúcifer',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Capricórnio',
    claves: {
      derecho: ['poder ilícito', 'luxúria', 'egoísmo'],
      invertido: ['tudo agravado', 'desprezo pelos outros'],
    },
    presencia:
      'Lúcifer, o que caiu, lidera os anjos negativos. Representa o ' +
      'poder do material e os sucessos conseguidos de forma ilegal e de curta ' +
      'duração. Corresponde a Capricórnio.',
    derecho:
      'Na posição normal, fala de luxúria, egoísmo, desejo puramente sexual e de conquistas ' +
      'que brilham, mas não duram; pode indicar filhos nascidos fora do ' +
      'casamento.',
    invertido:
      'Invertida, tudo piora, porque a base já é ruim: alguém que não ' +
      'respeite os outros, desobediência, excesso.',
    encuentros:
      'Junto ao Anjo da Morte, impotência ou problemas sexuais. Junto ao ' +
      'Anjo dos Filhos, que estes são ilegítimos.',
  },
  68: {
    nombre: 'Abadom, o Príncipe dos Gafanhotos',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Sagitário',
    claves: {
      derecho: ['deixar-se levar', 'insegurança', 'obstáculos'],
      invertido: ['tentativa de superação'],
    },
    presencia:
      'Abadom, senhor do abismo, encarna a pessoa que se deixa arrastar pela ' +
      'correnteza. Corresponde a Sagitário.',
    derecho:
      'Direita, fala de dificuldades para resolver, de insegurança e de deixar ' +
      'que as coisas aconteçam sem tomar as rédeas.',
    invertido:
      'Invertida, surge uma tentativa de superação: a vontade de dar a volta por cima.',
  },
  69: {
    nombre: 'Samuel, o Anjo da Tentação',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Áries',
    claves: {
      derecho: ['vícios', 'tentação', 'noite'],
      invertido: ['afastar-se da tentação'],
    },
    presencia:
      'Samuel sussurra ao ouvido o que convém não ouvir. Encarna a pessoa de ' +
      'muitos vícios, atraída pela noite e por paixões difíceis de ' +
      'rejeitar. Corresponde a Áries.',
    derecho:
      'Na posição normal, fala de tentações e excessos, das saídas noturnas e do ' +
      'desejo que nos arrasta.',
    invertido:
      'Invertida, o esforço para se afastar dessas tentações.',
  },
  70: {
    nombre: 'Mastema, o Anjo Feiticeiro',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Virgem',
    claves: {
      derecho: ['hostilidade', 'adversidade', 'feitiço'],
      invertido: ['magia negra', 'loucura'],
    },
    presencia:
      'Mastema é aquele que faz magia. Sua carta deve ser lida observando o que ' +
      'sai à sua direita e à sua esquerda, pois disso depende o seu sentido. ' +
      'Corresponde a Virgem.',
    derecho:
      'Sozinha, representa hostilidade e adversidade: um clima contrário.',
    invertido:
      'Invertida, torna-se ainda mais sombria: magia negra, mau uso dos poderes ' +
      'mentais, loucura.',
  },
  71: {
    nombre: 'Carniveau, o Príncipe dos Lobos',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Câncer',
    claves: {
      derecho: ['magia negra', 'ódio', 'instabilidade'],
      invertido: ['conquistas efêmeras', 'deterioração da saúde'],
    },
    presencia:
      'Carniveau lidera a matilha. Representa as magias negras e a pessoa ' +
      'de caráter instável, marcada pelo ódio e pela promiscuidade. ' +
      'Corresponde a Câncer.',
    derecho:
      'Na posição normal, fala de hostilidade profunda, instabilidade e vínculos ' +
      'desordenados.',
    invertido:
      'Invertida, conquistas materiais de curta duração; na saúde, ' +
      'deterioração e infecções.',
  },
  72: {
    nombre: 'Mammón, o Anjo da Avareza e da Ganância',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    claves: {
      derecho: ['avareza', 'ganância', 'golpe'],
      invertido: ['resultados que não chegam', 'vítima de si mesmo'],
    },
    presencia:
      'Mammón é a fome que nunca se sacia. Encarna a avareza e a ganância, ' +
      'a tentação do dinheiro e do que é valioso.',
    derecho:
      'Na posição normal, aponta a ganância e o golpista, aquele que mede tudo ' +
      'em lucro.',
    invertido:
      'Invertida, essa avidez não dá frutos: não consegue o que busca, vítima de ' +
      'suas próprias tentações.',
  },
  73: {
    nombre: 'Kemuel, aquele que impediu a entrega da Torá a Moisés',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    regente: 'Marte',
    claves: {
      derecho: ['adversidade', 'atrasos', 'más intenções'],
      invertido: ['consegue-se, mas mais tarde'],
    },
    presencia:
      'Kemuel é quem bloqueia o caminho. Representa a adversidade, os atrasos e ' +
      'as condições que se interpõem, às vezes pela má intenção de ' +
      'outros em relação ao consulente. É regido por Marte.',
    derecho:
      'Na posição normal, fala de eventos inesperados que atrasam os objetivos e, na ' +
      'saúde, de estagnação.',
    invertido:
      'Invertida, tudo será alcançado da mesma forma, ainda que leve mais tempo do ' +
      'que o desejado.',
  },
  74: {
    nombre: 'Adramelech, o Anjo Rei do Fogo',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    claves: {
      derecho: ['ansiedade', 'angústia', 'saúde delicada'],
      invertido: ['angústia extrema', 'doença mental'],
    },
    presencia:
      'Adramelech reina sobre o fogo que consome por dentro. Encarna a ' +
      'ansiedade, a angústia e a alteração do ânimo.',
    derecho:
      'Na posição normal, fala de inquietação e desassossego; na saúde, um estado delicado ' +
      'que implica sofrimento.',
    invertido:
      'Invertida, tudo se acentua, chegando a roçar a doença mental.',
  },
  75: {
    nombre: 'Dubbiel, o Anjo do Orgulho',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    claves: {
      derecho: ['orgulho', 'soberba', 'amor-próprio ferido'],
      invertido: ['vencer o orgulho'],
    },
    presencia:
      'Dubbiel endurece o peito com orgulho. Encarna o amor-próprio tão ' +
      'acentuado que não deixa sair os sentimentos nobres.',
    derecho:
      'Na posição normal, fala de soberba e orgulho que isolam; na saúde, má ' +
      'circulação e endurecimento das artérias.',
    invertido:
      'Invertida, o sinal é bom: é capaz de vencer esses sentimentos ' +
      'negativos.',
  },
  76: {
    nombre: 'Rimmon, o Anjo do Raio e das Tempestades',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Libra',
    claves: {
      derecho: ['ruptura', 'brigas', 'acidentes'],
      invertido: ['rupturas passageiras', 'acidentes leves'],
    },
    presencia:
      'Rimmon descarrega o raio. Representa a ruptura, as brigas e as ' +
      'frustrações no amor ou entre amigos, e os acidentes. Corresponde a ' +
      'Libra.',
    derecho:
      'Na posição normal, anuncia quebras, choques e golpes da fortuna.',
    invertido:
      'Invertida, a tempestade acalma: rupturas passageiras, acidentes leves.',
  },
  77: {
    nombre: 'Moloch, aquele que sacrifica as crianças na fogueira',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Sagitário',
    claves: {
      derecho: ['mentira', 'maus-tratos', 'corrupção'],
    },
    presencia:
      'Moloch é a crueldade sem escrúpulos. Representa a mentira, os maus ' +
      'tratos e a astúcia a serviço do dano. Corresponde a ' +
      'Sagitário.',
    derecho:
      'Fala de engano, maus-tratos, corrupção e de uma pessoa sem escrúpulos; ' +
      'pode aludir a um aborto. Não tem leitura invertida: sua sombra é plena.',
  },
  78: {
    nombre: 'Malchi Dael',
    grupo: 'Anjos negativos · sob o comando de Lúcifer',
    signo: 'Áries',
    regente: 'Marte',
    claves: {
      derecho: ['manipulação', 'sedução sem escrúpulos', 'feitiço'],
      invertido: ['objetivos fracassados', 'depressão'],
    },
    presencia:
      'Malchi Dael não mede esforços para conseguir amor ou favores do sexo ' +
      'oposto, inclusive valendo-se de magia negra. Corresponde a Áries e ' +
      'é regido por Marte.',
    derecho:
      'Na posição normal, fala de estratagemas e manipulação para obter o que se ' +
      'deseja do outro.',
    invertido:
      'Invertida, essas artimanhas fracassam e não alcançam seu objetivo, deixando ' +
      'depressão como resultado.',
  },
};
