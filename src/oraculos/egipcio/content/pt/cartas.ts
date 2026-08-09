// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { Carta, BaseCartas } from '../types';

// Significados en REDACCION PROPIA: parafrasean el sentido del folleto del Tarot
// Egipcio sin copiarlo literal. Español neutro, sin voseo.
// Por ahora: los 22 arcanos mayores (1..22). Los menores (23..78) se agregan luego.

const MAYORES: Carta[] = [
  {
    numero: 1,
    nombre: 'O Mago',
    arcano: 'mayor',
    esencia: 'O espírito criador.',
    claves: ['poder criativo', 'destreza', 'vontade', 'confiança'],
    derecho:
      'Capacidade de direcionar o próprio poder para o que é necessário e alcançar ' +
      'resultados. Destreza, astúcia e vontade firme; confiança em si mesmo e ' +
      'mão habilidosa para concretizar.',
    invertido:
      'O poder não encontra vazão: vontade fraca, indecisão e insegurança. A ' +
      'mesma habilidade, usada para fins tortos ou desperdiçada por falta de rumo.',
    astro: 'Sol em Leão: criatividade, espontaneidade e vocação para ajudar.',
    hebrea: 'Aleph: o princípio insondável da vida e da morte.',
    numerologia: 1,
  },
  {
    numero: 2,
    nombre: 'A Sacerdotisa',
    arcano: 'mayor',
    esencia: 'O mistério diante do desconhecido.',
    claves: ['sabedoria', 'intuição', 'serenidade', 'previsão'],
    derecho:
      'Sabedoria serena e bom senso; intuição aguçada e capacidade de ver além ' +
      'do evidente. Experiência e compreensão profunda das coisas.',
    invertido:
      'Conhecimento superficial, sem chegar ao fundo. Ignorância, egoísmo ou falso ' +
      'orgulho que confundem o aparente com o verdadeiro.',
    astro: 'Lua em Câncer: sensibilidade e mundo interior.',
    hebrea: 'Beth: a iluminação.',
    numerologia: 2,
  },
  {
    numero: 3,
    nombre: 'A Imperatriz',
    arcano: 'mayor',
    esencia: 'O espírito fecundo e intuitivo.',
    claves: ['fertilidade', 'abundância', 'progresso', 'senso prático'],
    derecho:
      'Fecundidade e abundância: projetos que dão frutos, progresso e criação ' +
      'material. A figura que nutre e sustenta, com intuição e senso prático ' +
      'para decidir.',
    invertido:
      'Esterilidade e inatividade: o que não vinga, perdas materiais, infidelidade ' +
      'ou estagnação. A energia criadora que não chega a se concretizar.',
    astro: 'Júpiter em Sagitário: otimismo e expansão.',
    hebrea: 'Guímel: dinamismo e movimento.',
    numerologia: 3,
  },
  {
    numero: 4,
    nombre: 'O Imperador',
    arcano: 'mayor',
    esencia: 'O espírito da autoridade.',
    claves: ['autoridade', 'estabilidade', 'controle', 'força'],
    derecho:
      'Autoridade e controle com base firme: capacidade, confiança e estabilidade para ' +
      'alcançar as metas. A figura que ordena, protege e sustenta com força.',
    invertido:
      'Imaturidade e dependência: falta de firmeza, não conseguir dominar as emoções ' +
      'mesquinhas, autoridade que desmorona ou se torna rigidez.',
    astro: 'Urano em Aquário: independência e inovação.',
    hebrea: 'Dáleth: o poder.',
    numerologia: 4,
  },
  {
    numero: 5,
    nombre: 'O Hierofante',
    arcano: 'mayor',
    esencia: 'O espírito do convencional.',
    claves: ['tradição', 'inspiração', 'prudência', 'ensino'],
    derecho:
      'Apego ao estabelecido e à tradição: ritual, ordem, bondade e prudência. ' +
      'Inspiração e guia dentro do conhecido, às vezes com timidez ou pouca abertura.',
    invertido:
      'Ruptura do convencional: originalidade e abertura ao novo. Também ' +
      'fragilidade, suscetibilidade ou dificuldade para sustentar-se no que é seu.',
    astro: 'Mercúrio em Virgem: análise e discernimento.',
    hebrea: 'He: a vida universal.',
    numerologia: 5,
  },
  {
    numero: 6,
    nombre: 'A Indecisão',
    arcano: 'mayor',
    esencia: 'O espírito diante da escolha do coração.',
    claves: ['amor', 'escolha', 'beleza', 'anseio'],
    derecho:
      'Amor responsável e sincero, altruísmo e beleza; talvez um idílio a caminho. ' +
      'A escolha entre o amor que eleva e o que prende, entre o que está dentro e o ' +
      'que está fora.',
    invertido:
      'Amor irresponsável: capricho, infidelidade, ruptura ou interferência de ' +
      'terceiros. Planos imprudentes movidos pela paixão mais do que pelo critério.',
    astro: 'Vênus em Touro: beleza e afeto.',
    hebrea: 'Vau: a lei natural.',
    numerologia: 6,
  },
  {
    numero: 7,
    nombre: 'O Carro',
    arcano: 'mayor',
    esencia: 'O espírito vitorioso.',
    claves: ['vitória', 'triunfo', 'superação', 'avanço'],
    derecho:
      'Vitória e reconhecimento: superar a adversidade, vencer os que se opunham ' +
      'e libertar-se da escassez. Impulso que avança e abre caminho.',
    invertido:
      'Derrota ou fracasso: desejos que não se cumprem, escassez e frustração. O impulso ' +
      'que se descontrola ou se choca contra seus próprios limites.',
    astro: 'Netuno em Peixes: sensibilidade e idealismo.',
    hebrea: 'Zayin: o triunfo que abre todas as possibilidades.',
    numerologia: 7,
  },
  {
    numero: 8,
    nombre: 'A Justiça',
    arcano: 'mayor',
    esencia: 'O espírito equilibrado.',
    claves: ['equidade', 'harmonia', 'honra', 'recompensa justa'],
    derecho:
      'Recompensa justa e equilíbrio: harmonia, equidade e honra. Boas intenções ' +
      'que dão frutos, e um bom desfecho no campo legal e econômico.',
    invertido:
      'Injustiça e desequilíbrio: ingratidão, julgamento severo ou abuso. Um desfecho ' +
      'torto, legal ou econômico, quando a balança se inclina demais.',
    astro: 'Saturno em Capricórnio: prudência e sacrifício.',
    hebrea: 'Jeth: o entendimento.',
    numerologia: 8,
  },
  {
    numero: 9,
    nombre: 'O Eremita',
    arcano: 'mayor',
    esencia: 'O espírito que guia.',
    claves: ['sabedoria', 'prudência', 'introspecção', 'conselho'],
    derecho:
      'Luz interior e bom conselho: prudência, sabedoria e precaução. A figura que ' +
      'se retira para compreender e guarda um saber que ilumina o caminho.',
    invertido:
      'Solidão e escuridão: julgamento errado, precipitação, conselhos imprudentes ou um ' +
      'isolamento que encerra em vez de esclarecer.',
    astro: 'Marte em Áries: impulso e luta.',
    hebrea: 'Teth: o impenetrável.',
    numerologia: 9,
  },
  {
    numero: 10,
    nombre: 'A Roda da Fortuna',
    arcano: 'mayor',
    esencia: 'O espírito diante do destino.',
    claves: ['giro favorável', 'sorte', 'mudança', 'ciclo'],
    derecho:
      'Um giro favorável do destino: sucesso, sorte inesperada e felicidade que chega ' +
      'sem buscá-la. Avanço e oportunidade que se abrem de repente.',
    invertido:
      'A roda que desce: fracasso, altos e baixos, monotonia ou reveses por causas ' +
      'imprevistas. O que se desvia quando o ciclo muda de signo.',
    astro: 'Plutão em Escorpião: finais e começos intensos.',
    hebrea: 'Iod: a compensação, a lei do retorno.',
    numerologia: 1,
  },
  {
    numero: 11,
    nombre: 'A Força',
    arcano: 'mayor',
    esencia: 'O espírito que domina e vence os obstáculos.',
    claves: ['força moral', 'coragem', 'determinação', 'domínio'],
    derecho:
      'Domínio de si mesmo e força moral: coragem, convicção, energia e ' +
      'determinação para vencer os obstáculos. A firmeza ética que conquista sem ' +
      'perder o equilíbrio.',
    invertido:
      'Fraqueza moral ou abuso de poder: mesquinharia, tirania, falta de fé. A força ' +
      'que se volta contra si mesma ou se apaga diante do desafio.',
    astro: 'Sol em Áries: força que ainda busca sua sabedoria.',
    hebrea: 'Kaph: a firmeza para enfrentar o que vier.',
    numerologia: 2,
  },
  {
    numero: 12,
    nombre: 'O Apostolado',
    arcano: 'mayor',
    esencia: 'O espírito que se sacrifica e renuncia.',
    claves: ['sacrifício', 'renúncia', 'pausa', 'reajuste'],
    derecho:
      'Renúncia e sacrifício: uma vida em suspenso, uma pausa para reajustar e ' +
      'melhorar. Aceitar entregar algo hoje para ganhar clareza e sentido depois.',
    invertido:
      'Sacrifício evitado ou inútil: egoísmo, arrogância, falta de entrega. Ficar ' +
      'na zona de conforto ou em falsas promessas em vez de soltar o que é preciso.',
    astro: 'Lua em Touro: tensão entre a lei e os costumes.',
    hebrea: 'Lámed: o sacrifício e o autocontrole.',
    numerologia: 3,
  },
  {
    numero: 13,
    nombre: 'A Morte',
    arcano: 'mayor',
    esencia: 'O espírito em renovação.',
    claves: ['transformação', 'final', 'mudança', 'renovação'],
    derecho:
      'Transformação profunda: o fim de uma etapa que, embora doa, abre caminho para ' +
      'algo novo. Uma mudança inevitável que renova pela raiz.',
    invertido:
      'Estagnação: apatia, imobilidade, mudanças que demoram. Apegar-se com ' +
      'critério rígido ao que já terminou seu ciclo.',
    astro: 'Mercúrio em Gêmeos: a água que cura e purifica.',
    numerologia: 4,
  },
  {
    numero: 14,
    nombre: 'A Temperança',
    arcano: 'mayor',
    esencia: 'O espírito que se modera e se adapta.',
    claves: ['moderação', 'paciência', 'harmonia', 'equilíbrio'],
    derecho:
      'Moderação e paciência: paz interior, boa administração e harmonia. A ' +
      'capacidade de combinar e adaptar, com confiança e bons presságios.',
    invertido:
      'Discórdia e impaciência: conflito, falta de adaptação, frustração. Quando ' +
      'as partes não se integram e o equilíbrio se rompe.',
    astro: 'Júpiter em Câncer: correspondência e proteção.',
    hebrea: 'Nun: o universal condensado no concreto.',
    numerologia: 5,
  },
  {
    numero: 15,
    nombre: 'O Mal',
    arcano: 'mayor',
    esencia: 'O espírito acorrentado.',
    claves: ['ataduras', 'apego material', 'culpa', 'libertação'],
    derecho:
      'Amarras, por vezes buscadas: escravidão ao material, culpa, violência ou ' +
      'autocastigo. A falta de rumo que se torna autodestruição.',
    invertido:
      'Libertar-se das correntes: curar, deixar o puramente físico pelo espiritual e ' +
      'superar obstáculos que pareciam impossíveis. A trégua após o confinamento.',
    astro: 'Netuno em Leão: vibração e encantamento.',
    hebrea: 'Sámej: a fertilidade em sua face oculta.',
    numerologia: 6,
  },
  {
    numero: 16,
    nombre: 'A Fragilidade',
    arcano: 'mayor',
    esencia: 'O espírito diante da catástrofe.',
    claves: ['mudança brusca', 'desmoronamento', 'ruptura', 'imprevisto'],
    derecho:
      'Uma mudança brusca e repentina: desmoronamento, ruptura, eventos inesperados. A ' +
      'perda súbita de dinheiro, de um vínculo ou de uma segurança que parecia firme.',
    invertido:
      'O desmoronamento latente: um perigo que se posterga, uma opressão que se prolonga, ' +
      'a rotina que aprisiona em vez de explodir.',
    astro: 'Mercúrio em Virgem: a mente posta à prova.',
    hebrea: 'Ayin: a vigilância e o passageiro.',
    numerologia: 7,
  },
  {
    numero: 17,
    nombre: 'A Esperança',
    arcano: 'mayor',
    esencia: 'O espírito cheio de esperança.',
    claves: ['fé', 'esperança', 'inspiração', 'otimismo'],
    derecho:
      'Fé e esperança: inspiração, boa saúde, amor espiritual e idealismo. ' +
      'Perspectivas brilhantes que renovam a vontade de seguir.',
    invertido:
      'Pessimismo e dúvida: obstinação, esperanças não cumpridas, decepção. A luz que ' +
      'se apaga quando se perde a fé.',
    astro: 'Saturno em Libra: a fé colocada à prova.',
    numerologia: 8,
  },
  {
    numero: 18,
    nombre: 'A Lua',
    arcano: 'mayor',
    esencia: 'O espírito imaginativo e inspirado.',
    claves: ['imaginação', 'intuição', 'cautela', 'engano'],
    derecho:
      'Imaginação, intuição e inspiração; mas também perigos que não se veem, ' +
      'enganos, falsas promessas ou calúnias. Um tempo que pede cautela.',
    invertido:
      'Ceticismo e atitude prática: rejeição do intuitivo, enganos menores, ' +
      'erros pequenos ou tirar proveito de alguém. A névoa que começa a dissipar.',
    astro: 'Urano em Escorpião: a totalidade e o oculto.',
    hebrea: 'Tzade: o magnetismo.',
    numerologia: 9,
  },
  {
    numero: 19,
    nombre: 'O Sol',
    arcano: 'mayor',
    esencia: 'O espírito em paz e feliz.',
    claves: ['felicidade', 'prosperidade', 'sucesso', 'alegria'],
    derecho:
      'Paz e felicidade: amor puro, prosperidade, sucesso e bons relacionamentos. Alegria, ' +
      'sinceridade e conquistas, especialmente no campo criativo.',
    invertido:
      'A luz que se nubla: infelicidade, solidão, falta de amizades, planos que ' +
      'fracassam ou uma possível ruptura. Brilha menos, mas não se apaga.',
    astro: 'Plutão em Sagitário: a geração universal.',
    hebrea: 'Qoph: a busca misteriosa.',
    numerologia: 1,
  },
  {
    numero: 20,
    nombre: 'O Julgamento',
    arcano: 'mayor',
    esencia: 'O espírito com consciência cósmica.',
    claves: ['reconhecimento', 'despertar', 'equilíbrio', 'transcender'],
    derecho:
      'Um despertar de consciência: reconhecimento, fé em algo além do visível, ' +
      'desejo de transcender. Uma falha ou desfecho favorável após um balanço.',
    invertido:
      'Medo e demora: temor aos finais, desgostos, perdas, falta de paz na ' +
      'etapa que se encerra. O equilíbrio que custa aceitar.',
    astro: 'Marte em Capricórnio: capacidade mental e impulso.',
    hebrea: 'Resh: a libertação.',
    numerologia: 2,
  },
  {
    numero: 21,
    nombre: 'A Transmutação',
    arcano: 'mayor',
    esencia: 'O espírito que deixa para trás o material.',
    claves: ['plenitude', 'realização', 'triunfo', 'encerramento'],
    derecho:
      'Plenitude e realização: triunfo, paz interior e sucesso após o esforço. A ' +
      'recompensa que coroa um trabalho longo e bem feito.',
    invertido:
      'A obra que não se completa: fracasso, estagnação, insegurança e medos. Não ' +
      'conseguir finalizar totalmente o que vinha sendo construído.',
    astro: 'Netuno em Aquário: o que ainda falta compreender.',
    hebrea: 'Shin: as mudanças cósmicas.',
    numerologia: 3,
  },
  {
    numero: 22,
    nombre: 'O Louco',
    arcano: 'mayor',
    esencia: 'O espírito encarnado, pronto para começar.',
    claves: ['impulso', 'entusiasmo', 'decisão', 'risco'],
    derecho:
      'Impulso e entusiasmo diante de uma decisão importante: paixão, vontade de se lançar, ' +
      'embora com um pouco de irreflexão ou frivolidade. O salto que inicia um caminho.',
    invertido:
      'A escolha equivocada: indecisão, apatia, dispersão. Lançar-se sem olhar, ou ' +
      'não ter coragem de dar o passo necessário.',
    astro: 'Vênus em Peixes: a razão e o respeito.',
    hebrea: 'Tau: a compreensão do todo.',
    numerologia: 4,
  },
];

const MENORES: Carta[] = [
  {
    numero: 23,
    nombre: 'O Lavrador',
    arcano: 'menor',
    claves: ['trabalho', 'inteligência', 'constância'],
    derecho:
      'Inteligência e experiência aplicadas ao trabalho constante: o esforço bem ' +
      'direcionado que traz resultados concretos.',
    invertido:
      'Uma contrariedade passageira: um tropeço breve que freia o avanço, mas é superado.',
    astro: 'Mercúrio: inteligência em ação.',
    numerologia: 5,
  },
  {
    numero: 24,
    nombre: 'A Laboriosidade',
    arcano: 'menor',
    claves: ['laboriosidade', 'ordem', 'dever'],
    derecho:
      'Laboriosidade e ordem: trabalho constante, economia bem administrada e ' +
      'cumprimento dos deveres.',
    invertido:
      'Um mal-estar interior, a consciência inquieta: algo pendente que não deixa ' +
      'ficar em paz.',
    astro: 'Vênus: dedicação e alegria.',
    numerologia: 6,
  },
  {
    numero: 25,
    nombre: 'O Viajante',
    arcano: 'menor',
    claves: ['viagem', 'aventura', 'mudança'],
    derecho:
      'Ânimo para enfrentar empresas arriscadas e sair vitorioso; o que vem de longe ' +
      'ou de terra estranha.',
    invertido:
      'Mudanças, trocas de trabalho ou de lugar, e algumas disputas no lar por ' +
      'tanta movimentação.',
    astro: 'Netuno: espírito viajante e aventureiro.',
    numerologia: 7,
  },
  {
    numero: 26,
    nombre: 'A Fortuna',
    arcano: 'menor',
    claves: ['surpresa', 'novidade', 'dinheiro'],
    derecho:
      'Surpresas agradáveis: ideias novas, um amor ou uma amizade que chega, um ganho ' +
      'de dinheiro.',
    invertido: 'Uma ameaça latente: algo que turva a boa fase e pede atenção.',
    astro: 'Saturno: prêmio e solução de um problema.',
    numerologia: 8,
  },
  {
    numero: 27,
    nombre: 'O Imprevisto',
    arcano: 'menor',
    claves: ['surpresa', 'descoberta', 'imprevisto'],
    derecho:
      'Um triunfo com nuances ou uma descoberta que chega tarde, mas chega: a surpresa ' +
      'que muda o rumo.',
    invertido:
      'Traição ou engano: uma surpresa desagradável, algo que não era o que parecia.',
    astro: 'Marte: conflito.',
    numerologia: 9,
  },
  {
    numero: 28,
    nombre: 'O Desespero',
    arcano: 'menor',
    claves: ['mistério', 'busca', 'adversidade'],
    derecho:
      'Um mistério a ser resolvido, e o saber necessário para alcançá-lo está ao seu alcance: ' +
      'a saída existe.',
    invertido:
      'Atrasos, problemas e adversidade: o caminho trava e a angústia aperta.',
    astro: 'Plutão: esquecer o passado.',
    numerologia: 1,
  },
  {
    numero: 29,
    nombre: 'A Tranquilidade',
    arcano: 'menor',
    claves: ['calma', 'recompensa', 'alegria'],
    derecho:
      'Alegria e calma: um negócio vantajoso, o trabalho duro que enfim é recompensado, ' +
      'sem sobressaltos.',
    invertido:
      'Remorso, indecisão e timidez; ou um excesso de conforto que adormece.',
    astro: 'Lua: passividade e reflexão.',
    numerologia: 2,
  },
  {
    numero: 30,
    nombre: 'O Comércio',
    arcano: 'menor',
    claves: ['troca', 'negócios', 'negociação'],
    derecho:
      'Assuntos de troca e trato com outros; cuidado com discussões que não ' +
      'levam a lugar nenhum.',
    invertido:
      'Sensibilidade nos vínculos comerciais: as relações e os acordos ganham ' +
      'destaque.',
    astro: 'Júpiter: conhecimento.',
    numerologia: 3,
  },
  {
    numero: 31,
    nombre: 'As Dificuldades',
    arcano: 'menor',
    claves: ['expectativa', 'promessas', 'demora'],
    derecho:
      'Expectativas e promessas no ar: algo prometido que ainda está por ' +
      'se concretizar.',
    invertido:
      'Problemas e obstáculos, às vezes por parte de pessoas de menor peso; restrições ' +
      'que causam demora.',
    astro: 'Urano: atrasos.',
    numerologia: 4,
  },
  {
    numero: 32,
    nombre: 'A Generosidade',
    arcano: 'menor',
    claves: ['generosidade', 'cooperação', 'altruísmo'],
    derecho:
      'Cooperação e altruísmo: dar e cumprir com as obrigações, repartir com ' +
      'inteligência.',
    invertido:
      'Egoísmo que leva ao fracasso: mesquinharia, litígios, não cumprir o que é devido.',
    astro: 'Mercúrio: repartir com inteligência.',
    numerologia: 5,
  },
  {
    numero: 33,
    nombre: 'Os Acordos',
    arcano: 'menor',
    claves: ['aliança', 'prosperidade', 'união'],
    derecho:
      'Uma aliança duradoura que traz prosperidade e progresso: acordos que se sustentam ' +
      'e unem.',
    invertido:
      'Perdas de dinheiro ou por documentos; um mau investimento ou um acordo que sai ' +
      'caro.',
    astro: 'Vênus: casamento e união.',
    numerologia: 6,
  },
  {
    numero: 34,
    nombre: 'A Mudança',
    arcano: 'menor',
    claves: ['mudança', 'novidade', 'encontro'],
    derecho:
      'Ideias frescas e um novo empreendimento; um encontro afortunado que abre caminhos.',
    invertido: 'Medo da mudança e tentações que desviam: o novo assusta e freia.',
    astro: 'Netuno: profundidade.',
    numerologia: 7,
  },
  {
    numero: 35,
    nombre: 'A Tristeza',
    arcano: 'menor',
    claves: ['fortaleza', 'imprevisto', 'melancolia'],
    derecho:
      'Fortaleza de espírito diante de um fato imprevisto: a integridade que sustenta no ' +
      'momento difícil.',
    invertido:
      'Tristeza, melancolia ou desânimo: uma pena que pesa sobre o ânimo.',
    astro: 'Saturno: pena moral.',
    numerologia: 8,
  },
  {
    numero: 36,
    nombre: 'A Guerra',
    arcano: 'menor',
    claves: ['começo', 'fortuna', 'conquista'],
    derecho:
      'Um começo com impulso: algo que nasce, uma fortuna próxima, negócios que ' +
      'prosperam pelo caminho da conquista.',
    invertido: 'Decadência: a força que se esgota, o que começa a declinar.',
    astro: 'Marte: conflito e conquista.',
    numerologia: 9,
  },
  {
    numero: 37,
    nombre: 'A Arte',
    arcano: 'menor',
    claves: ['amizade', 'engenho', 'reconhecimento'],
    derecho:
      'Amizade, ajuda e reconhecimento: o engenho e o talento que abrem portas e ' +
      'somam aliados.',
    invertido:
      'Talento distorcido: má fama, perversão do que é bom, o dom usado para o mal.',
    astro: 'Sol: amizade e prazer.',
    numerologia: 1,
  },
  {
    numero: 38,
    nombre: 'A Infidelidade',
    arcano: 'menor',
    claves: ['honradez', 'virtude', 'confiança'],
    derecho:
      'Pessoas decididas, sábias e honradas ao redor: virtude e confiança nos vínculos.',
    invertido:
      'Pessoas escandalosas ou corruptas: engano, infidelidade, confianças mal depositadas.',
    astro: 'Lua: infidelidade e engano.',
    numerologia: 2,
  },
  {
    numero: 39,
    nombre: 'A Herança',
    arcano: 'menor',
    claves: ['herança', 'celebração', 'verdade'],
    derecho:
      'Herança ou legado, papéis que se resolvem, celebrações: algo bom que se ' +
      'recebe.',
    invertido:
      'Deslealdade no afetivo, adultério; uma verdade incômoda que vem à tona.',
    astro: 'Júpiter: a verdade.',
    numerologia: 3,
  },
  {
    numero: 40,
    nombre: 'O Pressentimento',
    arcano: 'menor',
    claves: ['intuição', 'simpatia', 'atração'],
    derecho:
      'Um trabalho bem remunerado e o favor dos outros: simpatia e capacidade de ' +
      'atrair.',
    invertido: 'Um pressentimento sombrio: risco de ruína ou de perder um afeto.',
    astro: 'Urano: destruição.',
    numerologia: 4,
  },
  {
    numero: 41,
    nombre: 'A Angústia',
    arcano: 'menor',
    claves: ['família', 'afeto', 'tensão'],
    derecho:
      'Vida familiar e afetos de raiz: um amor de juventude, os laços que acompanham.',
    invertido:
      'Indignação e violência contida: a angústia que explode em raiva.',
    astro: 'Mercúrio: remorso.',
    numerologia: 5,
  },
  {
    numero: 42,
    nombre: 'A Constância',
    arcano: 'menor',
    claves: ['constância', 'triunfo', 'viagem'],
    derecho:
      'A constância que rende: vantagens, triunfos, até um romance inesperado ou uma ' +
      'viagem de negócios proveitosa.',
    invertido:
      'A insistência que se torna teimosa ou mal direcionada: presença que incomoda mais ' +
      'do que soma.',
    astro: 'Vênus: presença e insistência.',
    numerologia: 6,
  },
  {
    numero: 43,
    nombre: 'A Alucinação',
    arcano: 'menor',
    claves: ['alegria', 'ilusão', 'satisfação'],
    derecho:
      'Uma alegria inesperada e a satisfação do que foi alcançado, vivida com modéstia; ' +
      'um bom negócio.',
    invertido:
      'A ilusão que se quebra: ruptura, infidelidade, um desânimo que enturva.',
    astro: 'Netuno: doença e depressão.',
    numerologia: 7,
  },
  {
    numero: 44,
    nombre: 'O Pensamento',
    arcano: 'menor',
    claves: ['projeto', 'decisão', 'plano'],
    derecho:
      'Um projeto que ganha forma: a intenção se torna decisão e plano concreto.',
    invertido:
      'Conseguir o que se busca por meio de outra pessoa: o objetivo é alcançado, mas não ' +
      'por mãos próprias.',
    astro: 'Saturno: solução de problemas.',
    numerologia: 8,
  },
  {
    numero: 45,
    nombre: 'A Regeneração',
    arcano: 'menor',
    claves: ['renovação', 'vínculos', 'mudança'],
    derecho:
      'Os laços familiares influenciam o afetivo: parentes que pesam em um assunto ' +
      'do coração, para renová-lo.',
    invertido:
      'O fim de um relacionamento ou um abandono: um corte drástico que obriga a começar de ' +
      'novo.',
    astro: 'Marte: mudança drástica.',
    numerologia: 9,
  },
  {
    numero: 46,
    nombre: 'O Patrimônio',
    arcano: 'menor',
    claves: ['legado', 'patrimônio', 'união'],
    derecho:
      'Legado, doação ou uma união que consolida o patrimônio: colhe-se o que foi plantado.',
    invertido:
      'Um risco que vem de outra pessoa: cuidado com quem pode afetar ' +
      'o que é seu.',
    astro: 'Sol: colher o que foi plantado.',
    numerologia: 1,
  },
  {
    numero: 47,
    nombre: 'A Conjectura',
    arcano: 'menor',
    claves: ['esperança', 'amor', 'harmonia'],
    derecho:
      'Alegria se aproxima: um amor puro e duradouro, compreensão na família. Bons ' +
      'presságios.',
    invertido: 'Um presságio triste: uma desgraça próxima, aflições da alma.',
    astro: 'Lua: sonhos.',
    numerologia: 2,
  },
  {
    numero: 48,
    nombre: 'A Conquista',
    arcano: 'menor',
    claves: ['vitória', 'conquista', 'conhecimento'],
    derecho:
      'Vitória e consumação: alcança-se o que se buscava, com o conhecimento que o torna ' +
      'possível.',
    invertido:
      'Um amor impossível ou uma meta que escapa: o que se deseja permanece fora de alcance.',
    astro: 'Júpiter: o poder de conseguir o que se quer.',
    numerologia: 3,
  },
  {
    numero: 49,
    nombre: 'A Duplicidade',
    arcano: 'menor',
    claves: ['mudança', 'amizades', 'bifurcação'],
    derecho:
      'Uma mudança e novas amizades: caminhos que se abrem em outra direção.',
    invertido:
      'Competição no amor e altos e baixos: dois caminhos que puxam ao mesmo tempo e ' +
      'complicam.',
    astro: 'Urano: caminhos distintos.',
    numerologia: 4,
  },
  {
    numero: 50,
    nombre: 'A Compenetração',
    arcano: 'menor',
    claves: ['entendimento', 'sintonia', 'união'],
    derecho:
      'Entendimento profundo com o outro: sintonia, cumplicidade e união de objetivos. Dois ' +
      'que se compreendem quase sem palavras.',
    invertido:
      'Desencontro: a sintonia se perde, custa chegar a um acordo e a distância ' +
      'cresce.',
    astro: 'Vênus: entendimento e união.',
    numerologia: 5,
  },
  {
    numero: 51,
    nombre: 'O Aconselhamento',
    arcano: 'menor',
    claves: ['conselho', 'poder', 'cautela'],
    derecho:
      'Bom conselho e trato com gente influente: relação com pessoas de peso, sucesso ' +
      'em cargos de autoridade.',
    invertido:
      'Disputas e inimigos poderosos: um mau conselho ou uma influência danosa que ' +
      'complica.',
    astro: 'Vênus: segurança.',
    numerologia: 6,
  },
  {
    numero: 52,
    nombre: 'A Previsão',
    arcano: 'menor',
    claves: ['previsão', 'cautela', 'defesa'],
    derecho:
      'Prever e preparar-se diante do conflito: estar alerta e defender o que é seu com ' +
      'antecipação.',
    invertido:
      'Falsidade no trato e rancores ocultos: comportamentos que não são o que ' +
      'aparentam.',
    astro: 'Netuno: elegância.',
    numerologia: 7,
  },
  {
    numero: 53,
    nombre: 'A Vingança',
    arcano: 'menor',
    claves: ['cautela', 'conflito', 'prudência'],
    derecho:
      'Um chamado à cautela: convém cuidar-se e não dar passos em falso diante de um ' +
      'possível ataque.',
    invertido:
      'Críticas, mentiras e lutas: a incapacidade de resolver que deriva em ' +
      'ressentimento.',
    astro: 'Saturno: temor.',
    numerologia: 8,
  },
  {
    numero: 54,
    nombre: 'O Estudo',
    arcano: 'menor',
    claves: ['estudo', 'análise', 'investigação'],
    derecho:
      'Tempo de pensar, investigar e analisar a fundo: a mente voltada ao estudo ' +
      'antes de agir.',
    invertido:
      'Traição e calúnias de inimigos invisíveis: cuidado com o que se trama nas ' +
      'sombras.',
    astro: 'Marte: a observação do soldado.',
    numerologia: 9,
  },
  {
    numero: 55,
    nombre: 'O Arrependimento',
    arcano: 'menor',
    claves: ['recolhimento', 'timidez', 'reflexão'],
    derecho:
      'Recolhimento e reserva: uma etapa de retiro, timidez ou solidão escolhida para ' +
      'olhar para dentro.',
    invertido:
      'Perigos difusos e inimigos com poder; também um chamado ao espiritual diante ' +
      'à ameaça.',
    astro: 'Plutão: desafio.',
    numerologia: 1,
  },
  {
    numero: 56,
    nombre: 'A Busca',
    arcano: 'menor',
    claves: ['busca', 'ambição', 'sacrifício'],
    derecho:
      'Consegue-se o que se busca, mas a um custo: riquezas ou metas que exigem sacrifícios, ' +
      'até mesmo morais.',
    invertido:
      'Lamentações: o arrependimento pelo que custou ou pelo que não foi alcançado.',
    astro: 'Lua: distanciamento.',
    numerologia: 2,
  },
  {
    numero: 57,
    nombre: 'A Rivalidade',
    arcano: 'menor',
    claves: ['rivalidade', 'cautela', 'oposição'],
    derecho:
      'Assuntos delicados que pedem cautela: há competição ou rivalidade em jogo, é melhor ' +
      'agir com cuidado.',
    invertido:
      'Oposição e críticas abertas: rivais que atacam, um destino que parece jogar ' +
      'contra.',
    astro: 'Júpiter: ataques dos rivais.',
    numerologia: 3,
  },
  {
    numero: 58,
    nombre: 'A Recapacitação',
    arcano: 'menor',
    claves: ['propósito', 'sacrifício', 'estratégia'],
    derecho:
      'Vontade firme de conseguir algo e disposição ao sacrifício: recapacitar e traçar ' +
      'a estratégia.',
    invertido:
      'Sonhos que não se realizam, avisos de perigo e acusações: os planos saem dos trilhos.',
    astro: 'Urano: estratégia.',
    numerologia: 4,
  },
  {
    numero: 59,
    nombre: 'A Descoberta',
    arcano: 'menor',
    claves: ['notícias', 'viagens', 'descoberta'],
    derecho:
      'Permissões, viagens e mensagens: algo se destrava e chega uma notícia ou autorização esperada. ' +
      'esperada.',
    invertido:
      'Contradições e obstáculos; comunicações que vazam ou são mal interpretadas.',
    astro: 'Mercúrio: a descoberta.',
    numerologia: 5,
  },
  {
    numero: 60,
    nombre: 'O Progresso',
    arcano: 'menor',
    claves: ['progresso', 'aprendizado', 'evolução'],
    derecho:
      'Aprender e evoluir: um progresso genuíno, o crescimento que vem de assimilar ' +
      'a experiência.',
    invertido:
      'Um tropeço no caminho: acontecimentos tristes, má sorte, risco de ' +
      'retrocesso.',
    astro: 'Vênus: melhora.',
    numerologia: 6,
  },
  {
    numero: 61,
    nombre: 'A Solidão',
    arcano: 'menor',
    claves: ['prudência', 'recato', 'solidão'],
    derecho:
      'Prudência e recato: comportar-se com correção, cuidar dos recursos e do próprio ' +
      'espaço.',
    invertido: 'Isolamento, buscado ou imposto: a solidão que separa dos outros.',
    astro: 'Netuno: retraimento.',
    numerologia: 7,
  },
  {
    numero: 62,
    nombre: 'A Autoridade',
    arcano: 'menor',
    claves: ['mediação', 'autoridade', 'conciliação'],
    derecho:
      'A autoridade que concilia: um mediador amável que põe ordem e aproxima as ' +
      'partes.',
    invertido:
      'Rupturas e separações: a autoridade que divide, o ódio que rompe os laços.',
    astro: 'Saturno: autoridade.',
    numerologia: 8,
  },
  {
    numero: 63,
    nombre: 'A Comunhão',
    arcano: 'menor',
    claves: ['afinidade', 'união', 'afeto'],
    derecho:
      'Comunhão e afinidade: afeto, carinho e ajuda mútua; pessoas que compartilham os ' +
      'mesmos ideais.',
    invertido: 'Frieza afetiva: a união que esfria, pouca entrega entre as partes.',
    astro: 'Marte: união.',
    numerologia: 9,
  },
  {
    numero: 64,
    nombre: 'A Condescendência',
    arcano: 'menor',
    claves: ['compreensão', 'esforço', 'indulgência'],
    derecho:
      'Indulgência e compreensão que facilitam uma empresa difícil; também um bom ' +
      'momento no amor.',
    invertido:
      'Condescendência que se torna pressão ou cede demais: raiva, tensão por forçar a ' +
      'barra.',
    astro: 'Sol: condescendência.',
    numerologia: 1,
  },
  {
    numero: 65,
    nombre: 'O Aprendizado',
    arcano: 'menor',
    claves: ['aprendizado', 'proteção', 'progresso'],
    derecho:
      'Aprendizado e progresso sob o amparo de alguém com mais experiência ou recursos: ' +
      'avança-se com guia.',
    invertido:
      'Um declínio ou uma fase difícil passageira: a sorte se retira por um tempo.',
    astro: 'Lua: os ensinamentos.',
    numerologia: 2,
  },
  {
    numero: 66,
    nombre: 'A Perplexidade',
    arcano: 'menor',
    claves: ['apoio', 'dúvida', 'indecisão'],
    derecho:
      'Um apoio influente abre as portas para a prosperidade: alguém com peso ajuda a que ' +
      'as coisas fluam.',
    invertido:
      'Dúvida e paralisia: um assunto que trava e não se resolve, perplexidade diante dos ' +
      'passos a seguir.',
    astro: 'Júpiter: surpresas.',
    numerologia: 3,
  },
  {
    numero: 67,
    nombre: 'A Amizade',
    arcano: 'menor',
    claves: ['amizade', 'afeto', 'calma'],
    derecho:
      'Amizade e afetos sinceros: companhia, calma e placidez nos vínculos próximos.',
    invertido: 'Um deslize ou descuido que turva uma amizade e traz problemas.',
    astro: 'Urano: espiritualidade.',
    numerologia: 4,
  },
  {
    numero: 68,
    nombre: 'O Investimento',
    arcano: 'menor',
    claves: ['prosperidade', 'acerto', 'generosidade'],
    derecho:
      'Prosperidade material bem gerida: acerto, inteligência e generosidade que ' +
      'multiplicam o que se tem.',
    invertido:
      'Perdas e amizades interesseiras: o dinheiro que vai embora, ou os que se aproximam apenas ' +
      'por interesse.',
    astro: 'Mercúrio: prosperidade.',
    numerologia: 5,
  },
  {
    numero: 69,
    nombre: 'O Acaso',
    arcano: 'menor',
    claves: ['sorte', 'recompensa', 'oportunidade'],
    derecho:
      'A sorte joga a favor: uma recompensa, uma melhoria, uma mudança favorável ou um bom ' +
      'investimento.',
    invertido:
      'O que é bom demora: um negócio proveitoso que se atrasa, mas não se perde.',
    astro: 'Vênus: o acaso.',
    numerologia: 6,
  },
  {
    numero: 70,
    nombre: 'A Ajuda',
    arcano: 'menor',
    claves: ['ajuda', 'afeto', 'promessa'],
    derecho:
      'Ajuda e afeto que impulsionam: uma promessa que se cumpre e faz avançar.',
    invertido:
      'Esperanças que não se concretizam; ou um ganho que chega por uma via inesperada ou ' +
      'triste.',
    astro: 'Netuno: profundidade.',
    numerologia: 7,
  },
  {
    numero: 71,
    nombre: 'A Cobiça',
    arcano: 'menor',
    claves: ['cobiça', 'apego', 'conservar'],
    derecho:
      'Custa manter a posição ou o trabalho: o apego ao material aperta e exige ' +
      'cuidar do que foi conquistado.',
    invertido:
      'Avareza e arrependimento: o risco de perder por cobiça, ou um furto que ' +
      'espreita.',
    astro: 'Saturno: conservadorismo.',
    numerologia: 8,
  },
  {
    numero: 72,
    nombre: 'A Purificação',
    arcano: 'menor',
    claves: ['limpeza', 'renovação', 'boas novas'],
    derecho:
      'Purificação e renovação: uma boa aquisição, uma notícia agradável, a ' +
      'limpeza que deixa tudo claro.',
    invertido:
      'Tristeza antes da calma: a sorte chega, mas somente após um grande ' +
      'esforço.',
    astro: 'Marte: beleza.',
    numerologia: 9,
  },
  {
    numero: 73,
    nombre: 'O Amor e o Desejo',
    arcano: 'menor',
    claves: ['amor', 'paixão', 'desejo'],
    derecho:
      'Enamoramento e paixão: o desejo aceso e os bens esperados que chegam.',
    invertido:
      'Falsos amigos que provocam perdas e desordem: a paixão mal direcionada que ' +
      'desordena a vida.',
    astro: 'Sol: o enamoramento.',
    numerologia: 1,
  },
  {
    numero: 74,
    nombre: 'A Oferenda',
    arcano: 'menor',
    claves: ['entrega', 'equilíbrio', 'amor'],
    derecho:
      'Entrega e inspiração: dedicação equilibrada e amor que se oferece com ' +
      'generosidade.',
    invertido:
      'Inimizade ou desinteresse: a paixão que se apaga, a oferenda que não encontra ' +
      'resposta.',
    astro: 'Lua: começo, nascimento.',
    numerologia: 2,
  },
  {
    numero: 75,
    nombre: 'A Partilha',
    arcano: 'menor',
    claves: ['distribuição', 'ascensão', 'abundância'],
    derecho:
      'Uma distribuição favorável: ascensão, herança ou riquezas que se repartem e chegam às ' +
      'suas mãos.',
    invertido:
      'O que se reparte diminui: uma porção menor, algo pequeno ou uma distribuição que não ' +
      'satisfaz.',
    astro: 'Júpiter: a distribuição.',
    numerologia: 3,
  },
  {
    numero: 76,
    nombre: 'O Dispensador',
    arcano: 'menor',
    claves: ['abundância', 'reconhecimento', 'fortuna'],
    derecho:
      'Abundância que transborda: trabalho de sobra, reconhecimento, algo que nasce e ' +
      'prospera.',
    invertido: 'Um ânimo instável: o humor mutável que dispersa a boa fase.',
    astro: 'Urano: dar sorte.',
    numerologia: 4,
  },
  {
    numero: 77,
    nombre: 'O Desconcerto',
    arcano: 'menor',
    claves: ['boa sorte', 'confusão', 'imprevisto'],
    derecho:
      'Bons presságios: sinais de que a sorte acompanha, embora o panorama ainda não esteja ' +
      'totalmente claro.',
    invertido:
      'Confusão e indecisão: um problema imprevisto que desconcerta e trava as ' +
      'decisões.',
    astro: 'Mercúrio: a indecisão.',
    numerologia: 5,
  },
  {
    numero: 78,
    nombre: 'O Renascimento',
    arcano: 'menor',
    claves: ['renascer', 'plenitude', 'satisfação'],
    derecho:
      'Renascer: prazer, honestidade e fortuna; a satisfação de uma etapa que se coroa ' +
      'bem.',
    invertido:
      'A meta é alcançada, mas depois de muito sofrer: a conquista que chega com ' +
      'cicatrizes.',
    astro: 'Vênus: a razão de viver.',
    numerologia: 6,
  },
];

export const CARTAS_PT: BaseCartas = Object.fromEntries(
  [...MAYORES, ...MENORES].map((c) => [c.numero, c])
);
