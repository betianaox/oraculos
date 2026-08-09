// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { RunaId } from '../types';

// Contenido de la Wiki: una ficha de aprendizaje por runa (palabras clave,
// significado derecho/invertido y simbolismo tradicional). A diferencia de
// los fragmentos de lectura (content/es/fragmentos/), esto no varía por tema
// ni se combina en frases — es la explicación de referencia que se lee en la
// pantalla de detalle. Solo existe en español por ahora (igual que el resto
// del contenido de idioma secundario, cae a español hasta que se traduzca).
export interface FichaWikiRuna {
  palabrasClave: {
    normal: string[];
    invertida: string[];
  };
  significado: {
    normal: string;
    invertida: string;
  };
  simbolismo: string;
}

export const WIKI_RUNAS_PT: Record<RunaId, FichaWikiRuna> = {
  fehu: {
    palabrasClave: {
      normal: ['prosperidade', 'recursos', 'base sólida', 'abundância'],
      invertida: ['escassez', 'apego', 'insegurança material'],
    },
    significado: {
      normal:
        'Fehu fala dos recursos que você já tem, embora nem sempre os valorize por completo. ' +
        'É a prosperidade que chega quando se cuida e se coloca em movimento o que já está em ' +
        'marcha: uma base sólida construída com o disponível, não com o que falta.',
      invertida:
        'Invertida, Fehu é o medo de que falte, independentemente de faltar algo de fato. Surge ' +
        'a necessidade de reter, a dificuldade de compartilhar por receio de ficar de mãos ' +
        'vazias, ou a insegurança de não saber se o que se dá um dia retorna.',
    },
    simbolismo:
      'Seu nome significa "gado": nas culturas germânicas antigas, o gado era a forma ' +
      'de riqueza mais direta e transportável. Por isso, Fehu abre o alfabeto rúnico como símbolo ' +
      'de recursos, prosperidade e movimento de bens.',
  },
  uruz: {
    palabrasClave: {
      normal: ['força', 'vitalidade', 'impulso', 'coragem'],
      invertida: ['imposição', 'rigidez', 'esgotamento'],
    },
    significado: {
      normal:
        'Uruz é a força interior que você tem mais presente do que imagina: o impulso necessário ' +
        'para te encorajar a algo que você vem adiando, a vitalidade para encarar o que vem por aí ' +
        'com mais energia e sem pedir permissão.',
      invertida:
        'Invertida, Uruz pode indicar uma energia que se impõe em vez de acompanhar, ou o ' +
        'cansaço de sustentar algo sozinho, sem pedir ajuda. Também a dureza que aparece quando na ' +
        'verdade faz falta ternura.',
    },
    simbolismo:
      'Representa o auroque, um bovino selvagem já extinto, símbolo de força bruta e resistência. A ' +
      'diferença de Fehu (o gado domesticado), Uruz fala de uma força indômita, própria, não ' +
      'gerenciada por ninguém mais.',
  },
  thurisaz: {
    palabrasClave: {
      normal: ['limite', 'proteção', 'defesa', 'pausa'],
      invertida: ['impulsividade', 'conflito evitado', 'muro'],
    },
    significado: {
      normal:
        'Thurisaz marca um limite que convém estabelecer antes que a situação saia do controle. É a ' +
        'pausa necessária antes de reagir a algo que incomodou, e a força para defender algo que ' +
        'realmente importa.',
      invertida:
        'Invertida, fala de uma reação impulsiva que pode machucar mais do que proteger, de um ' +
        'conflito que é evitado em vez de ser nomeado, ou de um muro que acaba afastando em vez de ' +
        'proteger.',
    },
    simbolismo:
      'Seu nome remete ao espinho ou ao gigante (thurs): uma força defensiva, cortante, que pode ' +
      'proteger ou ferir dependendo de como é usada. Sua forma —uma ponta que sobressai— evoca justamente isso: ' +
      'um limite afiado.',
  },
  ansuz: {
    palabrasClave: {
      normal: ['comunicação', 'verdade', 'escuta', 'clareza'],
      invertida: ['mal-entendido', 'silêncio', 'palavras que ferem'],
    },
    significado: {
      normal:
        'Ansuz traz uma conversa honesta que vem sendo adiada: a clareza para dizer o que ' +
        'realmente se pensa, e a escuta genuína do que o outro precisa dizer.',
      invertida:
        'Invertida, aponta um mal-entendido que cresce por não ser esclarecido a tempo, palavras ditas sem ' +
        'pensar que deixam marcas, ou um silêncio que substitui algo que deveria ser dito.',
    },
    simbolismo:
      'Associa-se à boca de um deus — tradicionalmente Odin — e, por extensão, à fala, à mensagem ' +
      'e a comunicação divina ou inspirada. É a runa da palavra que transforma quando dita ' +
      'no momento certo.',
  },
  raidho: {
    palabrasClave: {
      normal: ['avanço', 'movimento', 'caminho', 'progresso'],
      invertida: ['estagnação', 'rumo perdido', 'desgaste'],
    },
    significado: {
      normal:
        'Raidho é o avanço para uma nova etapa, ainda que aos poucos: a disposição para se mover ' +
        'mesmo que o caminho mude no trajeto, um percurso que começa a tomar forma.',
      invertida:
        'Invertida, aparece a sensação de estar parado enquanto tudo parece avançar, um rumo ' +
        'que se perdeu no dia a dia, ou o desgaste de seguir em uma direção que já não ' +
        'convence.',
    },
    simbolismo:
      'Significa "carro" ou "cavalgada": a viagem física como metáfora da jornada da vida. Fala do ' +
      'movimento correto, ordenado, rumo a um destino, mais do que da pressa ou da fuga.',
  },
  kaunaz: {
    palabrasClave: {
      normal: ['inspiração', 'clareza', 'faísca', 'desejo'],
      invertida: ['apagão', 'desânimo', 'rotina'],
    },
    significado: {
      normal:
        'Kenaz é uma faísca de clareza ou inspiração que merece atenção: uma forma diferente de ' +
        'olhar algo que parecia travado, o desejo que volta a se acender com algo simples.',
      invertida:
        'Invertida, é a motivação que se apaga com a rotina, um interesse que esfria sem que você ' +
        'note totalmente, a falta de vontade de tentar algo diferente por agora.',
    },
    simbolismo:
      'Seu nome se traduz como "tocha" ou "chaga": a luz controlada que ilumina e aquece, ' +
      'diante do fogo selvagem. Representa o conhecimento e a criatividade que são geridos com ' +
      'intenção.',
  },
  gebo: {
    palabrasClave: {
      normal: ['troca', 'generosidade', 'equilíbrio', 'gratidão'],
      invertida: ['desequilíbrio', 'desgaste', 'expectativa'],
    },
    significado: {
      normal:
        'Gebo é uma troca equilibrada entre o que se dá e o que se recebe: a generosidade que ' +
        'sustenta algo importante, um gesto que se agradece sem esperar nada em troca.',
      invertida:
        'Invertida, aponta para uma balança que pende sempre para o mesmo lado, o desgaste de dar ' +
        'mais do que se recebe, ou algo que, no fundo, espera um retorno.',
    },
    simbolismo:
      'Significa "presente". Sua forma —um X— representa duas forças que se encontram em igualdade de ' +
      'condições: uma troca sem hierarquia, a base de qualquer vínculo saudável.',
  },
  wunju: {
    palabrasClave: {
      normal: ['alegria', 'bem-estar', 'harmonia', 'leveza'],
      invertida: ['felicidade forçada', 'calmaria aparente', 'fingir'],
    },
    significado: {
      normal:
        'Wunjo traz uma alegria simples que não precisa de um grande motivo: um momento de bem-estar ' +
        'após uma fase difícil, a leveza de aproveitar algo sem analisar demais.',
      invertida:
        'Invertida, pode ser uma felicidade forçada para não incomodar ninguém, a calmaria aparente que ' +
        'esconde algo pendente, ou o esforço de fingir que tudo está bem.',
    },
    simbolismo:
      'Seu nome está relacionado a "wish" (desejo) e à alegria do desejo realizado. ' +
      'Tradicionalmente representa a harmonia comunitária e o prazer compartilhado, não apenas o individual.',
  },
  hagalaz: {
    palabrasClave: {
      normal: ['mudança brusca', 'ruptura necessária', 'sacudida', 'ordem'],
      invertida: ['ruptura repentina', 'desordem', 'dificuldade de aceitação'],
    },
    significado: {
      normal:
        'Hagalaz é uma mudança brusca que, embora desconfortável, abre espaço para algo novo: um rompimento ' +
        'necessário para soltar o que já não servia, um sacolejo que coloca as prioridades em ordem.',
      invertida:
        'Invertida, é uma ruptura que chega sem muito aviso, a desordem deixada por uma mudança ' +
        'inesperada, a dificuldade de aceitar algo que foi cortado de repente.',
    },
    simbolismo:
      'Significa "granizo": uma força natural incontrolável que atinge e depois derrete sem deixar ' +
      'rastros. Simboliza a disrupção que, apesar da sua violência, é passageira e acaba limpando o ' +
      'terreno.',
  },
  naudiz: {
    palabrasClave: {
      normal: ['paciência', 'perseverança', 'necessidade', 'esforço'],
      invertida: ['resistir por medo', 'necessidade confundida', 'resistência'],
    },
    significado: {
      normal:
        'Nauthiz fala da paciência necessária em um momento de carência: o esforço que se ' +
        'sustenta mesmo faltando recursos, a perseverança diante de um obstáculo concreto.',
      invertida:
        'Invertida, pode ser algo que se sustenta por medo e não por convicção, uma necessidade que ' +
        'se confunde com outra coisa, ou aguentar algo que já poderia começar a se resolver.',
    },
    simbolismo:
      'Seu nome significa "necessidade" ou "restrição". Representa as limitações que, bem ' +
      'levadas, temperam o caráter: a runa de aprender a se virar com o que se tem.',
  },
  isa: {
    palabrasClave: {
      normal: ['pausa', 'calma', 'espera', 'quietude'],
      invertida: ['distância por medo', 'indecisão', 'estagnação'],
    },
    significado: {
      normal:
        'Isa é uma pausa útil para pensar com a cabeça fria: o tempo certo antes de dar um passo ' +
        'importante, a calma de esperar o momento adequado.',
      invertida:
        'Invertida, é uma distância que se instala por medo de avançar, a indecisão que congela ' +
        'algo pendente, a estagnação de não se animar a mover ainda.',
    },
    simbolismo:
      'Significa "gelo": uma única linha reta, a quietude total. Representa a imobilidade como ' +
      'estado —nem bom nem mau em si mesmo— que pode ser repouso reparador ou paralisia, segundo o ' +
      'contexto.',
  },
  jera: {
    palabrasClave: {
      normal: ['colheita', 'recompensa', 'ciclo', 'constância'],
      invertida: ['impaciência', 'frustração', 'processo interrompido'],
    },
    significado: {
      normal:
        'Jera traz os frutos de um esforço sustentado ao longo do tempo: uma recompensa que chega quando ' +
        'é o momento certo, o resultado de ter sido constante com algo.',
      invertida:
        'Invertida, aponta a impaciência de querer resultados antes da hora, a frustração de não ' +
        'ver ainda o que foi semeado, um processo que é interrompido antes de dar seus frutos.',
    },
    simbolismo:
      'Significa "ano" ou "colheita": o ciclo agrícola completo, da sementeira à colheita. ' +
      'Lembre-se de que os processos naturais têm seu próprio tempo, que não pode ser apressado.',
  },
  eihwaz: {
    palabrasClave: {
      normal: ['resistência', 'fortaleza', 'coragem', 'estabilidade'],
      invertida: ['rigidez', 'paralisia', 'resistência à mudança'],
    },
    significado: {
      normal:
        'Eihwaz traz mais resistência do que você sente neste momento: uma fortaleza que surge ' +
        'justo quando mais é necessária, a coragem para atravessar algo difícil.',
      invertida:
        'Invertida, pode ser uma rigidez que não deixa espaço para ceder, um medo que paralisa em vez ' +
        'de impulsionar, a resistência em mudar algo que já não funciona.',
    },
    simbolismo:
      'Representa o teixo, uma árvore longeva e de madeira muito dura, tradicionalmente associada à ' +
      'morte e à continuidade da vida ao mesmo tempo. Simboliza uma fortaleza que resiste à passagem do ' +
      'tempo.',
  },
  perthu: {
    palabrasClave: {
      normal: ['mistério', 'autoconfiança', 'abertura', 'destino'],
      invertida: ['controle', 'resistência em deixar ir', 'incerteza desconfortável'],
    },
    significado: {
      normal:
        'Perthro é uma abertura ao inesperado: a confiança de que as coisas vão se ajeitar, ' +
        'um mistério que vale a pena deixar que se revele.',
      invertida:
        'Invertida, fala da necessidade de controlar algo que não depende apenas de você, a resistência ' +
        'em soltar e deixar que as coisas fluam, o desconforto de não saber como algo vai seguir.',
    },
    simbolismo:
      'Associa-se a um copo de dados ou uma taça da sorte: o que está oculto e se revela ao ' +
      'lançá-lo. É a runa do acaso, do destino e do que ainda não se pode ver por completo.',
  },
  algiz: {
    palabrasClave: {
      normal: ['proteção', 'instinto', 'intuição', 'limite saudável'],
      invertida: ['guarda alta', 'desconfiança', 'defesas excessivas'],
    },
    significado: {
      normal:
        'Algiz é um instinto que sabe algo antes de que você raciocine por completo: um cuidado saudável que ' +
        'protege sem prender, uma intuição que avisa quando colocar um limite.',
      invertida:
        'Invertida, pode ser uma guarda alta demais que afasta mais do que protege, o medo de ' +
        'baixar as defesas mesmo quando necessário, uma desconfiança que pesa mais do que deveria.',
    },
    simbolismo:
      'Representa o alce ou os chifres levantados em posição de alerta e defesa. Sua forma, com ' +
      'braços para cima, é um gesto universal de proteção e também de conexão com algo maior.',
  },
  sowulo: {
    palabrasClave: {
      normal: ['clareza', 'sucesso', 'vitalidade', 'autoconfiança'],
      invertida: ['otimismo forçado', 'verdade desconfortável', 'fachada'],
    },
    significado: {
      normal:
        'Sowilo traz uma clareza que retorna após uma fase confusa: a confiança de estar no ' +
        'caminho certo, uma conquista que se sente compartilhada após um esforço constante.',
      invertida:
        'Invertida, pode ser um otimismo forçado que esconde algo mal resolvido, a dificuldade de ' +
        'aceitar uma verdade incômoda, mostrar entusiasmo para fora enquanto algo interno não ' +
        'se fecha.',
    },
    simbolismo:
      'Significa "sol". A única runa que jamais é considerada totalmente negativa mesmo invertida, ' +
      'porque o sol sempre volta a brilhar: representa a vitalidade, o sucesso e a força vital que ' +
      'não se apaga.',
  },
  teiwaz: {
    palabrasClave: {
      normal: ['coragem', 'justiça', 'honestidade', 'compromisso'],
      invertida: ['desequilíbrio', 'desgaste', 'esforço desigual'],
    },
    significado: {
      normal:
        'Tiwaz traz a coragem de sustentar algo mesmo que seja difícil: a honestidade, ainda que ' +
        'custe dizer, um compromisso defendido com convicção.',
      invertida:
        'Invertida, aponta um esforço feito por apenas uma das partes, a conta ' +
        'silenciosa de quem cede mais, o desgaste de insistir em algo que já não é equilibrado.',
    },
    simbolismo:
      'Leva o nome do deus Tyr, associado à justiça e ao sacrifício (segundo o mito, perdeu ' +
      'uma mão para manter sua palavra). Representa a honestidade que custa algo, mas que vale a ' +
      'pena sustentar.',
  },
  berkana: {
    palabrasClave: {
      normal: ['começo', 'crescimento', 'renovação', 'cuidado'],
      invertida: ['medo do novo', 'procrastinação', 'crescimento estagnado'],
    },
    significado: {
      normal:
        'Berkano é um recomeço, ainda que pequeno: um crescimento que se nota após uma ' +
        'etapa de mudanças, algo pronto para dar um passo adiante.',
      invertida:
        'Invertida, pode ser um crescimento que trava pelo medo do novo, a vontade de começar ' +
        'de novo sem se animar ainda, um início que se adia uma e outra vez.',
    },
    simbolismo:
      'Representa a bétula, uma das primeiras árvores a crescer em terra devastada. Simboliza ' +
      'a renovação, a maternidade e o cuidado que torna possível um começo.',
  },
  ehwaz: {
    palabrasClave: {
      normal: ['cooperação', 'confiança mútua', 'avanço conjunto', 'movimento'],
      invertida: ['desalinhamento', 'confiança a reparar', 'carga desigual'],
    },
    significado: {
      normal:
        'Ehwaz fala sobre o que flui melhor quando feito a dois: uma confiança mútua que sustenta ' +
        'decisões importantes, o avanço em direção a um mesmo objetivo compartilhado.',
      invertida:
        'Invertida, aponta uma só pessoa sustentando algo que deveria ser de dois, uma confiança ' +
        'que precisa ser reparada após algo pontual, o desalinhamento entre o que cada um espera ' +
        'do outro.',
    },
    simbolismo:
      'Representa o cavalo, símbolo do vínculo de cooperação entre o animal e seu cavaleiro: duas ' +
      'vontades distintas que avançam como uma só quando confiam um no outro.',
  },
  mannaz: {
    palabrasClave: {
      normal: ['comunidade', 'apoio', 'cooperação', 'conexão'],
      invertida: ['isolamento', 'dificuldade em pedir ajuda', 'isolamento'],
    },
    significado: {
      normal:
        'Mannaz é o apoio das pessoas que você tem por perto: uma conexão real baseada na ' +
        'cooperação, o suporte de uma comunidade, ainda que pequena.',
      invertida:
        'Invertida, pode ser o isolamento de resolver tudo sem pedir ajuda, a dificuldade de ' +
        'apoiar-se nos outros quando necessário, uma tendência a se fechar em si mesmo.',
    },
    simbolismo:
      'Significa "ser humano". Representa a pessoa em sua dimensão social: ninguém se sustenta ' +
      'sozinho, e esta runa lembra o valor da comunidade e da interdependência.',
  },
  laguz: {
    palabrasClave: {
      normal: ['intuição', 'emoção', 'fluidez', 'sabedoria interior'],
      invertida: ['transbordamento emocional', 'confusão', 'intensidade sem clareza'],
    },
    significado: {
      normal:
        'Laguz é uma intuição que sabe mais do que a razão admite: uma emoção que convém ' +
        'seguir de perto, a sabedoria de confiar no que o instinto diz.',
      invertida:
        'Invertida, pode ser uma emoção intensa que nubla a clareza, o transbordar de sentir tudo ao ' +
        'mesmo tempo, confundir intensidade com certeza.',
    },
    simbolismo:
      'Significa "água": o elemento que flui, se adapta e não pode ser contido pelas mãos. ' +
      'Representa o mundo emocional e intuitivo, tão real quanto o racional, embora menos tangível.',
  },
  ingwaz: {
    palabrasClave: {
      normal: ['potencial', 'gestação', 'amadurecimento', 'paciência'],
      invertida: ['impaciência', 'forçar o processo', 'ansiedade'],
    },
    significado: {
      normal:
        'Ingwaz é algo que está sendo gestado e ainda precisa do seu tempo: um potencial que convém ' +
        'deixe amadurecer antes de agir, uma semente que já foi plantada e dará seus frutos.',
      invertida:
        'Invertida, aponta a impaciência de querer forçar algo que não está pronto, a vontade de ' +
        'acelerar um processo que pede calma, a ansiedade de não saber esperar o momento certo.',
    },
    simbolismo:
      'Leva o nome do deus Ing, associado à fertilidade e à terra. Sua forma fechada, como uma ' +
      'semente, representa o potencial contido que ainda não se libertou.',
  },
  dagaz: {
    palabrasClave: {
      normal: ['ponto de virada', 'clareza', 'transformação', 'despertar'],
      invertida: ['resistência à mudança', 'apegar-se ao passado', 'negação'],
    },
    significado: {
      normal:
        'Dagaz é um ponto de virada que muda a forma de ver algo: uma clareza que chega ' +
        'depois de uma fase confusa, um começo que se nota quase de um dia para o outro.',
      invertida:
        'Invertida, pode ser a resistência em soltar como as coisas eram antes, a dificuldade de ' +
        'aceitar que algo já mudou, apegar-se a uma versão de algo que já não existe.',
    },
    simbolismo:
      'Significa "dia" ou "amanhecer": o momento exato em que a escuridão vira luz. Representa ' +
      'a transformação total e positiva, o antes e o depois bem marcados.',
  },
  othala: {
    palabrasClave: {
      normal: ['herança', 'valores', 'raízes', 'pertencimento'],
      invertida: ['padrões herdados', 'expectativa alheia', 'apego ao passado'],
    },
    significado: {
      normal:
        'Othala fala dos valores que sustentam as decisões importantes: uma raiz que dá ' +
        'sentido ao que vem, o respeito por suas origens.',
      invertida:
        'Invertida, pode indicar padrões que se repetem sem perceber, uma expectativa herdada ' +
        'que pesa mais do que o necessário, a dificuldade de soltar uma forma antiga de fazer as coisas.',
    },
    simbolismo:
      'Significa "lar ancestral" ou "patrimônio". Fecha o alfabeto rúnico como símbolo do que se ' +
      'herda —bens, valores, identidade— e de como isso continua moldando o presente.',
  },
};
