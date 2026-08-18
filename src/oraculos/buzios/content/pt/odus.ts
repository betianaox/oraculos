// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { Odu, BaseOdus } from '../types';

// Consulta SIMBOLICA de los 16 odus del dilogun, en redaccion propia y tono
// reflexivo (como el I Ching). El numero es la cantidad de cauries abiertos.
//
// QUE ES Y QUE NO ES: esto NO reproduce el jogo de buzios, que es un ritual
// sagrado del Candomble que realizan personas iniciadas. Es una lectura propia
// de los significados que circulan publicamente, escrita SIN la formacion de
// alguien de la casa. Por eso el tono acompaña y no dicta, no invoca a nadie,
// no prescribe ofrendas ni rituales, y no habla en nombre de ninguna tradicion.

const odu1: Odu = {
  numero: 1,
  nombre: 'Okana',
  palabrasClave: ['começos', 'individualidade', 'impulso', 'mudanças'],
  significado: {
    general:
      'Algo começa. É o um, o ponto de partida, e traz a energia do novo ' +
      'e da própria força. Mas também alerta sobre o excesso de orgulho, a ' +
      'impaciência e os choques: o que começa com soberba ou aos trancos, se ' +
      'torce. Dê o primeiro passo com firmeza, mas sem atropelar.',
    amor:
      'Um começo ou uma mudança no vínculo. Cuidado com o egoísmo e as ' +
      'discussões por querer se impor: o "eu" em excesso afasta. A firmeza serena aproxima; a ' +
      'soberba rompe.',
    trabajo:
      'Momento de iniciar algo por conta própria. A determinação ajuda, mas evite ' +
      'os enfrentamentos desnecessários e o querer fazer tudo sozinho. Começar bem ' +
      'é começar sem arrogância.',
    dinero:
      'Um novo movimento econômico se abre. Convém a iniciativa medida, não o ' +
      'arrebatamento. O que se começa com cabeça fria prospera; o impulsivo se perde.',
  },
  orientacion: {
    favorable:
      'Com humildade e firmeza, este começo abre caminho: é hora de dar o primeiro ' +
      'passo.',
    desafio:
      'O risco é a soberba e o choque. Baixe o ego e cuide das formas para que ' +
      'o começo não trave.',
  },
};

const odu2: Odu = {
  numero: 2,
  nombre: 'Eji Oko',
  palabrasClave: ['dualidade', 'dilema', 'dois caminhos', 'tensão'],
  significado: {
    general:
      'Falam o dois e a dualidade: há dois caminhos, duas forças ou duas pessoas em ' +
      'tensão. É momento de escolher com clareza e não ficar preso entre dois ' +
      'lados. Os conflitos entre pares —irmãos, sócios, iguais— pedem medida. ' +
      'Defina de que lado você está, sem se trair.',
    amor:
      'Uma situação a dois que pede definição: talvez uma dúvida entre dois, ou uma ' +
      'tensão com o parceiro. Evite ficar no meio; a clareza e a sinceridade ' +
      'destravam.',
    trabajo:
      'Um dilema entre duas opções ou uma tensão com um par. Escolha com critério e não ' +
      'alimente rivalidades. A indecisão custa mais do que errar.',
    dinero:
      'Dois caminhos ou dois gastos que competem. Convém priorizar e não dividir ' +
      'forças. Decidir a tempo evita perder por ambos os lados.',
  },
  orientacion: {
    favorable:
      'Se você escolher com clareza e sustentar sua decisão, a dualidade se resolve a ' +
      'seu favor.',
    desafio: 'O risco é a indecisão e o conflito entre iguais. Não fique no meio.',
  },
};

const odu3: Odu = {
  numero: 3,
  nombre: 'Ogunda',
  palabrasClave: ['trabalho', 'esforço', 'cortar', 'conflito'],
  significado: {
    general:
      'Fala a força do ferro e do trabalho: energia para abrir caminho, mas ' +
      'também risco de conflitos, cortes e decisões drásticas. É momento de ' +
      'se esforçar e de cortar o que não serve, evitando a violência ' +
      'e a impulsividade. O que se conquista, é conquistado com esforço.',
    amor:
      'Um vínculo com tensão ou que pede uma decisão firme, talvez cortar com o que ' +
      'faz mal. A honestidade direta resolve; a agressividade destrói.',
    trabajo:
      'Tempo de esforço árduo e de trabalho que rende com dedicação. Pode haver atritos ou ' +
      'uma decisão drástica a tomar. Corte o que não funciona, mas sem brigar ' +
      'demais.',
    dinero:
      'Conquista-se com esforço e trabalho, não de mão beijada. Pode ser preciso cortar um gasto ' +
      'ou uma sociedade que trava. A decisão firme protege.',
  },
  orientacion: {
    favorable:
      'O esforço firme abre caminho: é momento de trabalhar duro e cortar o que ' +
      'sobra.',
    desafio: 'O risco é o conflito e a impulsividade. Canalize a força no trabalho, não na briga.',
  },
};

const odu4: Odu = {
  numero: 4,
  nombre: 'Irosun',
  palabrasClave: ['fundamentos', 'profundidade', 'paciência', 'o oculto'],
  significado: {
    general:
      'Ninguém sabe o que há no fundo do mar: falam as coisas profundas, os ' +
      'alicerces e o que ainda não se vê. É tempo de paciência e de construir ' +
      'base, sem desesperar pelo que ainda não se mostra. Também pede atenção ao que ' +
      'se esconde sob a superfície.',
    amor:
      'Há algo profundo em jogo, talvez sentimentos ou assuntos que não estão totalmente ' +
      'à vista. Paciência e sinceridade para chegar ao fundo; nem tudo se resolve ' +
      'rápido.',
    trabajo:
      'Momento de assentar bases sólidas mais do que de resultados imediatos. O que se ' +
      'alicerça com paciência perdura. Atenção ao que não se vê totalmente no ' +
      'ambiente.',
    dinero:
      'Tempo de construir base e de paciência: os frutos são profundos, não ' +
      'imediatos. Cuidado com o que não está claro em um acordo.',
  },
  orientacion: {
    favorable: 'A paciência e os alicerces firmes dão frutos: o que é profundo joga a seu favor.',
    desafio: 'O risco é o desespero pelo que não se vê. Confie no processo e cuide do que está oculto.',
  },
};

const odu5: Odu = {
  numero: 5,
  nombre: 'Oshe',
  palabrasClave: ['amor', 'prosperidade', 'doçura', 'saúde'],
  significado: {
    general:
      'Falam o rio, o amor e a abundância: doçura, afeto e prosperidade. É um ' +
      'signo quente e fértil, mas também pede cuidado com a saúde e as emoções — o ' +
      'vital. Aproveite o que é bom sem descuidar do corpo nem do coração.',
    amor:
      'Signo de amor, doçura e bons momentos afetivos. É tempo de aproveitar e ' +
      'nutrir o vínculo. Cuidado para que a intensidade emocional não transborde.',
    trabajo:
      'Momento próspero e de bom fluxo, com reconhecimento possível. Cuide do ' +
      'desgaste emocional no caminho.',
    dinero:
      'Boa energia para a prosperidade e o dinheiro que flui. Administre com ' +
      'critério e sem excessos.',
  },
  orientacion: {
    favorable: 'O amor e a abundância fluem: é tempo de aproveitar e colher.',
    desafio: 'O risco está na saúde e nas emoções descontroladas. Cuide do corpo e do coração.',
  },
};

const odu6: Odu = {
  numero: 6,
  nombre: 'Obara',
  palabrasClave: ['a palavra', 'fortuna inesperada', 'prudência ao falar'],
  significado: {
    general:
      'Fala a boca e o poder da palavra: do nada pode surgir a fortuna, ' +
      'mas uma palavra a mais pode arruinar tudo. É tempo de cuidar do que se ' +
      'diz: não minta nem faça fofoca, e esteja atento a uma oportunidade que chega de ' +
      'surpresa. O rei não diz mentiras.',
    amor:
      'Cuide das palavras no vínculo: o que se diz tem peso, para o bem ou para o mal. ' +
      'A sinceridade constrói; a fofoca ou a mentira destroem.',
    trabajo:
      'Uma oportunidade pode surgir de onde não se espera. Cuide do que diz e das ' +
      'promessas que faz: sua palavra é o seu valor.',
    dinero:
      'Pode chegar uma fortuna inesperada, até do nada. Mas cuidado com os ' +
      'acordos verbais: que tudo fique claro.',
  },
  orientacion: {
    favorable: 'Uma oportunidade inesperada se abre: a palavra certa, no momento certo, traz fortuna.',
    desafio: 'O risco está na língua: uma mentira ou fofoca pode arruinar tudo. Meça o que diz.',
  },
};

const odu7: Odu = {
  numero: 7,
  nombre: 'Odi',
  palabrasClave: ['lar', 'intimidade', 'alicerces', 'confiança'],
  significado: {
    general:
      'Fala da origem e da intimidade: assuntos do lar, da família e do que é ' +
      'mais privado. É hora de cuidar dos alicerces afetivos e ser prudente com ' +
      'as confidências. O que se cava fundo pode ser refúgio ou armadilha.',
    amor:
      'Assuntos íntimos e profundos no vínculo ou no lar. Cuide da confiança e da ' +
      'privacidade; traições e fofocas causam muito dano aqui.',
    trabajo:
      'Momento de cuidar da base e do ambiente próximo de trabalho. Atenção a ' +
      'confidências mal colocadas e à deslealdade.',
    dinero:
      'Tempo de assegurar os alicerces econômicos, o lar, o básico. Cuidado ao ' +
      'confiar dinheiro ou segredos a quem não corresponde.',
  },
  orientacion: {
    favorable: 'Os alicerces do lar e a intimidade se firmam: é hora de construir refúgio.',
    desafio: 'O risco é a traição e a indiscrição. Cuide com quem compartilha sua intimidade.',
  },
};

const odu8: Odu = {
  numero: 8,
  nombre: 'Eji Ogbe',
  palabrasClave: ['clareza', 'cabeça', 'liderança', 'humildade'],
  significado: {
    general:
      'Fala a cabeça: a clareza, a sabedoria e a liderança. É um signo ' +
      'luminoso, de quem governa a vida com a mente erguida e fria. Mas alerta ' +
      'contra o orgulho e a soberba: a cabeça que se envaidece, cai. Pense ' +
      'com clareza e mantenha a humildade.',
    amor:
      'Momento de clareza no vínculo: pensar com a cabeça fria ajuda. Cuide do ' +
      'orgulho, que no amor esfria as coisas.',
    trabajo:
      'Bom momento para liderar e decidir com lucidez. O único cuidado é a ' +
      'soberba: dirija sem se sentir acima de todos.',
    dinero:
      'Clareza para organizar e decidir bem as finanças. A mente fria rende; a ' +
      'soberba faz perder.',
  },
  orientacion: {
    favorable: 'A clareza e o bom senso te colocam no topo: é hora de liderar com lucidez.',
    desafio: 'O risco é a soberba. Baixe o orgulho para não perder a cabeça.',
  },
};

const odu9: Odu = {
  numero: 9,
  nombre: 'Osa',
  palabrasClave: ['mudanças bruscas', 'vento', 'instabilidade', 'amizades'],
  significado: {
    general:
      'Fala o vento e a mudança repentina: giros bruscos e instabilidade. É um ' +
      'tempo agitado, onde o que é hoje muda amanhã. Alerta sobre as amizades —o ' +
      'o melhor amigo pode se tornar o pior— e sobre a impulsividade. Mantenha o centro ' +
      'em meio ao vendaval.',
    amor:
      'Momento instável ou de mudanças bruscas no vínculo. Cuide das reações ' +
      'impulsivas e das más influências externas. A calma sustenta o que o ' +
      'vento balança.',
    trabajo:
      'Mudanças repentinas ou um ambiente instável. Atenção às falsas amizades e aos ' +
      'giros inesperados. Mantenha a cabeça fria e não reaja no calor do momento.',
    dinero:
      'Época de instabilidade econômica ou mudanças súbitas. Não é momento de arriscar ' +
      'demais; cuide do que você tem diante das oscilações.',
  },
  orientacion: {
    favorable: 'A mudança, bem direcionada, renova: o vento pode te levar a um porto melhor.',
    desafio: 'O risco é a instabilidade e a traição próxima. Cuide das suas amizades e do seu centro.',
  },
};

const odu10: Odu = {
  numero: 10,
  nombre: 'Ofun',
  palabrasClave: ['o espiritual', 'o delicado', 'respeito aos mais velhos', 'cuidado'],
  significado: {
    general:
      'Fala um signo delicado e espiritual, ligado ao antigo e ao sagrado. Pede ' +
      'respeito pelos mais velhos, cuidado com a saúde e prudência com as palavras e ' +
      'os atos. É tempo de humildade e reverência, não de soberba.',
    amor:
      'Momento delicado que pede cuidado e respeito no vínculo. Evite as más ' +
      'palavras e os gestos hirientes; o respeito sustenta.',
    trabajo:
      'Tempo de prudência e respeito, sobretudo aos mais velhos ou aos que sabem ' +
      'mais. Não é momento de soberba nem de atalhos.',
    dinero:
      'Momento delicado no econômico: cuidado, prudência e nada de desperdícios. ' +
      'Respeitar o que se tem e não tentar a sorte.',
  },
  orientacion: {
    favorable: 'A humildade e o respeito trazem proteção: o espiritual acompanha.',
    desafio: 'O risco é a soberba e o descuido, na saúde e no trato. Cuide-se e respeite.',
  },
};

const odu11: Odu = {
  numero: 11,
  nombre: 'Owani',
  palabrasClave: ['esforço perdido', 'não desperdiçar', 'sair da escassez'],
  significado: {
    general:
      'Tirar água com peneira: fala do esforço que se perde e da energia mal ' +
      'invertida. Adverte sobre o desespero, o desperdício e as decisões ' +
      'tomadas a partir da carência. É tempo de não malgastar —recursos, forças, ' +
      'oportunidades— e de buscar saídas com a razão, não com angústia.',
    amor:
      'Cuidado com o esforço em um vínculo que não retribui, ou com agir a partir da ' +
      'necessidade. Não desperdice carinho onde não há reciprocidade.',
    trabajo:
      'Atenção ao esforço onde não há rendimento. Revise onde sua energia se esvai e não ' +
      'trabalhe em vão. Sair da escassez pede estratégia, não desespero.',
    dinero:
      'Cuidado com o desperdício e com as decisões tomadas pela carência. Não ' +
      'jogue recursos em um poço sem fundo; administre com sabedoria.',
  },
  orientacion: {
    favorable: 'Reencaminhar o esforço tira do poço: bem direcionada, a energia rende.',
    desafio: 'O risco é o desgaste inútil e o desespero. Não desperdice nem decida pelo medo.',
  },
};

const odu12: Odu = {
  numero: 12,
  nombre: 'Ejila Shebora',
  palabrasClave: ['fogo', 'justiça', 'força', 'retidão'],
  significado: {
    general:
      'Fala do fogo e da justiça: força, coragem e a energia de quem luta pelo ' +
      'que é correto. É um signo de vitória, mas apenas quando a causa é justa e não ' +
      'há abuso de poder. É hora de ter firmeza e defender o que é seu com retidão, ' +
      'sem se deixar levar pela raiva.',
    amor:
      'Momento de paixão e intensidade, mas também de possíveis confrontos. A ' +
      'firmeza justa aproxima; a explosão de raiva afasta. Defenda o vínculo sem ' +
      'queimá-lo.',
    trabajo:
      'Força e coragem para avançar e fazer valer o que é justo. Bom momento para ' +
      'se posicionar com retidão, sem abusar do poder nem brigar demais.',
    dinero:
      'Energia para defender e fazer crescer o que é seu com firmeza. A retidão nas ' +
      'relações traz vitória; o abuso, queda.',
  },
  orientacion: {
    favorable: 'Com retidão e coragem, a vitória é sua: é hora de se posicionar com firmeza.',
    desafio: 'O risco é a raiva e o abuso de força. Que o fogo aqueça, não queime.',
  },
};

const odu13: Odu = {
  numero: 13,
  nombre: 'Metanla',
  palabrasClave: ['saúde', 'cuidado', 'purificação', 'prudência'],
  significado: {
    general:
      'Signo delicado que fala da saúde e da necessidade de cuidado e ' +
      'purificação. É um momento sério, que pede prudência, atenção ao corpo e ' +
      'humildade. Não é hora de excessos nem de descuidos: é hora de se cuidar, ' +
      'curar e pedir orientação.',
    amor:
      'Momento delicado que pede para cuidar do vínculo com suavidade e sem excessos. A ' +
      'saúde e o bem-estar, próprios e do outro, vêm primeiro.',
    trabajo:
      'Tempo de prudência e de não forçar. Cuide da sua saúde e da sua energia acima da ' +
      'exigência profissional.',
    dinero:
      'Não é momento de riscos nem excessos. Cuidar do básico, da saúde e da ' +
      'A estabilidade vem antes de qualquer ganho.',
  },
  orientacion: {
    favorable: 'O cuidado e a purificação trazem alívio: cuidar da saúde abre o caminho.',
    desafio: 'O risco está na saúde e no descuido. É um signo sério: cuide-se e busque orientação.',
  },
};

const odu14: Odu = {
  numero: 14,
  nombre: 'Merinla',
  palabrasClave: ['cautela', 'engano', 'discernir', 'prudência'],
  significado: {
    general:
      'Signo que alerta sobre o engano e a dificuldade de distinguir o amigo do ' +
      'inimigo. É tempo de cautela, de não confiar cegamente e de observar bem antes ' +
      'de se entregar. Nem tudo o que parece amável o é; a prudência protege.',
    amor:
      'Cuidado com as aparências e as falsas intenções. Observe bem antes de ' +
      'confiar de todo o coração.',
    trabajo:
      'Atenção às falsas alianças e a quem se mostra amigo por interesse. ' +
      'Discerna bem com quem você se associa.',
    dinero:
      'Cuidado com os enganos e as promessas fáceis. Não confie recursos sem ' +
      'verificar; a cautela evita perdas.',
  },
  orientacion: {
    favorable: 'A cautela e o bom senso protegem: discernir bem te coloca a salvo.',
    desafio: 'O risco é o engano de quem parece amigo. Não confie cegamente.',
  },
};

const odu15: Odu = {
  numero: 15,
  nombre: 'Marunla',
  palabrasClave: ['momento sério', 'humildade', 'buscar orientação', 'prudência'],
  significado: {
    general:
      'Signo sério e de peso, que pede humildade, prudência e buscar a sabedoria e a ' +
      'guia de quem sabe mais. Não é momento de soberba nem de decisões ' +
      'apressadas, mas de recolher-se, cuidar e pedir conselho. O grande se atravessa ' +
      'com humildade.',
    amor:
      'Momento que pede seriedade e cuidado no vínculo, sem leviandade. A humildade ' +
      'e a busca por entendimento sustentam.',
    trabajo:
      'Tempo de prudência e de não se expor demais. Busque o conselho de quem tem ' +
      'mais experiência antes de grandes decisões.',
    dinero:
      'Não é momento de grandes movimentos nem de soberba. Prudência, humildade e ' +
      'conselho antes de arriscar.',
  },
  orientacion: {
    favorable: 'A humildade e o bom conselho abrem caminho no que é sério.',
    desafio: 'O risco é a soberba e a pressa. Recolha-se, cuide e peça guia.',
  },
};

const odu16: Odu = {
  numero: 16,
  nombre: 'Merindilogun',
  palabrasClave: ['plenitude', 'excesso', 'abundância', 'medida'],
  significado: {
    general:
      'Todos os buzios falam: é o signo da plenitude e da abundância total, ' +
      'mas também do excesso — de tudo demais. Traz a sabedoria completa do ' +
      'buzio e, ao mesmo tempo, adverte que o excesso transborda. É tempo de medida em ' +
      'meio à abundância e de humildade diante do que se recebe.',
    amor:
      'Momento intenso e pleno, com risco de excesso ou descontrole. A medida e a ' +
      'humildade sustentam o que a intensidade poderia quebrar.',
    trabajo:
      'Abundância de oportunidades ou de trabalho, talvez demais. Priorize e não ' +
      'tente abraçar tudo: o excesso transborda.',
    dinero:
      'Momento de abundância, mas com risco de excesso e desperdício. A medida ' +
      'transforme a abundância em algo duradouro.',
  },
  orientacion: {
    favorable: 'A abundância plena favorece, se recebida com medida e humildade.',
    desafio: 'O risco é o excesso: muito de tudo transborda. Modere e agradeça.',
  },
};

export const ODUS_PT: BaseOdus = {
  1: odu1,
  2: odu2,
  3: odu3,
  4: odu4,
  5: odu5,
  6: odu6,
  7: odu7,
  8: odu8,
  9: odu9,
  10: odu10,
  11: odu11,
  12: odu12,
  13: odu13,
  14: odu14,
  15: odu15,
  16: odu16,
};
