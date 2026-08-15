// Conselho do dia do Tarô Egípcio, em português: um por carta.
//
// POR QUE EXISTE: até agora este oráculo devolvia `carta.derecho`, que é a ficha
// enciclopédica da Wiki. "Capacidade de dirigir o próprio poder para o que se
// precisa e alcançar resultados. Destreza, astúcia e vontade firme…" descreve a
// carta; não diz nada a quem a tirou. Eram parágrafos de até 179 caracteres
// onde cabia uma frase.
//
// ── COMO SE ESCREVE UM CONSELHO ──────────────────────────────────────────
// As duas regras de sempre (ver pt/bancos.ts) —claro antes de elevado, místico
// sóbrio— mais a própria daqui:
//
//   UM CONSELHO DIZ À PESSOA O QUE FAZER HOJE. Não o que a carta significa. Se
//   a frase se lê bem sem ninguém do outro lado, está mal escrita.
//
// Português neutro (você). Segunda pessoa, começam falando do dia, e cabem em
// duas linhas.
export const CONSEJOS_EGIPCIO_PT: Record<number, string> = {
  1: 'Hoje use o que você sabe fazer em vez de só ter guardado. Comece pelo menor pedaço.',
  2: 'Hoje escute antes de responder. O que você precisa saber já foi dito baixinho.',
  3: 'Regue hoje algo que você plantou faz tempo e deixou de olhar.',
  4: 'Ponha hoje uma regra clara onde há bagunça. Nem que seja uma só.',
  5: 'Hoje faça pelo caminho de sempre. Não é dia de improvisar.',
  6: 'Hoje escolha com o coração, mas escolha. Ficar no meio não é neutro.',
  7: 'Empurre hoje aquilo que você vem empurrando. Está prestes a ceder.',
  8: 'Hoje reclame o que é seu, ou devolva o que não é. Uma das duas.',
  9: 'Se afaste hoje um tempo do barulho. A resposta aparece no silêncio.',
  10: 'Hoje aproveite o que aparecer sem analisar tanto. A boa fase não espera.',
  11: 'Hoje sustente a sua posição sem levantar a voz. A calma convence mais.',
  12: 'Solte hoje algo para ganhar clareza. Escolha você o quê, antes que a vida escolha.',
  13: 'Hoje dê um fecho a algo que já terminou. Nomear já basta.',
  14: 'Hoje vá devagar. O que se apressa agora tem que ser refeito depois.',
  15: 'Olhe hoje de frente o que te tem preso. Só olhar já afrouxa.',
  16: 'Se hoje algo cair, não corra para escorar. Veja antes se valia a pena.',
  17: 'Hoje confie um pouco mais do que te sai naturalmente. Um dia.',
  18: 'Hoje não assine nem prometa nada que você não possa rever amanhã.',
  19: 'Aproveite hoje o que está dando certo, em voz alta e sem culpa.',
  20: 'Hoje faça as contas com o vivido e se perdoe uma. A que mais pesa.',
  21: 'Hoje se dê por satisfeito com algo. Já está pronto, mesmo sem você ter comemorado.',
  22: 'Dê hoje o primeiro passo sem ter tudo resolvido. O caminho se vê andando.',
  23: 'Hoje faça bem uma coisa pequena, sem ninguém ver. Basta isso.',
  24: 'Deixe hoje o seu lugar em ordem antes de ir. Amanhã você agradece.',
  25: 'Mude hoje algo do seu percurso, nem que seja a volta para casa.',
  26: 'Hoje aproveite o que de bom aparecer sem perguntar de onde saiu.',
  27: 'Algo hoje não vai ser o que parece. Olhe duas vezes antes de acreditar.',
  28: 'Hoje siga procurando mesmo sem ver a saída. Ainda não é hora de desistir.',
  29: 'Hoje não faça nada que não seja necessário. Descansar também resolve.',
  30: 'Hoje negocie em vez de aceitar o primeiro. Perguntar não custa nada.',
  31: 'Hoje espere com paciência o que prometeram. Pressionar só atrasa.',
  32: 'Dê hoje algo sem fazer conta. Volta por outro lado.',
  33: 'Hoje entre em acordo com alguém em algo pequeno. O grande vem depois.',
  34: 'Hoje diga sim ao novo, mesmo com um pouco de medo.',
  35: 'Hoje siga de pé mesmo com o ânimo baixo. Já basta.',
  36: 'Hoje lute por algo que valha. E só por isso.',
  37: 'Hoje mostre o que você sabe fazer. Guardar não melhora.',
  38: 'Hoje jogue limpo, mesmo podendo ganhar de outro jeito.',
  39: 'Diga hoje uma verdade que você vinha desviando. Com cuidado, mas diga.',
  40: 'Hoje dê ouvidos àquele palpite. Ele vem avisando faz dias.',
  41: 'Hoje fale com a sua família daquilo que vocês evitam. Comece pelo mais fácil.',
  42: 'Insista hoje mais uma vez. É provável que seja a que cede.',
  43: 'Hoje se permita se iludir com algo, mesmo que depois não dê certo.',
  44: 'Hoje escreva o plano que está na sua cabeça. Escrito ocupa menos.',
  45: 'Hoje recomece algo que você dava por perdido.',
  46: 'Hoje cuide do que você construiu. Não precisa crescer todos os dias.',
  47: 'Hoje espere o melhor mas prepare o outro. As duas coisas juntas.',
  48: 'Hoje vá atrás dessa meta com a cabeça fria. Você está mais perto do que acha.',
  49: 'Hoje você tem dois caminhos. Escolha o que consegue sustentar, não o que brilha.',
  50: 'Hoje diga a alguém que você entendeu. Aparece pouco e vale muito.',
  51: 'Hoje peça conselho a quem não tem nada a ganhar com a sua decisão.',
  52: 'Guarde hoje algo por via das dúvidas: tempo, dinheiro, energia.',
  53: 'Hoje aguente sem devolver o golpe. A resposta pode esperar.',
  54: 'Hoje se meta a fundo em algo até entender de verdade.',
  55: 'Hoje fique em silêncio um tempo. Nem tudo pede resposta.',
  56: 'Hoje saia atrás do que você quer. Ninguém vai trazer.',
  57: 'Hoje tem alguém jogando o próprio jogo. Não leve para o pessoal.',
  58: 'Hoje tenha claro para que você faz o que faz. Se o motivo não aparecer, revise.',
  59: 'Hoje compartilhe uma notícia que alguém está esperando.',
  60: 'Hoje avance um passo, nem que seja pequeno. Vale igual.',
  61: 'Hoje passe um tempo com você mesmo, sem tela e sem barulho.',
  62: 'Hoje ponha panos frios onde há briga. Mesmo não sendo a sua briga.',
  63: 'Hoje se aproxime de alguém de verdade, não por obrigação.',
  64: 'Hoje entenda alguém mesmo sem concordar. Não precisa ceder.',
  65: 'Hoje se deixe ajudar por quem sabe mais. Não é uma dívida.',
  66: 'Hoje está tudo bem duvidar. Não decida ainda.',
  67: 'Hoje procure um amigo. Sem motivo e sem plano.',
  68: 'Hoje ponha algo onde depois renda: tempo, atenção ou dinheiro.',
  69: 'Hoje saia para agarrar o que aparecer. A sorte não bate duas vezes.',
  70: 'Hoje estenda a mão. Alguém precisa mais do que diz.',
  71: 'Hoje afrouxe um pouco o que você segura. Não vai embora.',
  72: 'Hoje tire da sua vida algo que sobra. Uma coisa concreta.',
  73: 'Hoje dê ouvidos ao corpo antes da cabeça.',
  74: 'Hoje dê sem esperar que volte. Volta, mas por outro lado.',
  75: 'Hoje reparta o que há sem mesquinhar. Dá.',
  76: 'Hoje agradeça algo em voz alta. Depois siga com o dia.',
  77: 'Hoje vai dar confusão. Mesmo assim algo bom vai sair dali.',
  78: 'Hoje recomece com o que você aprendeu. As cicatrizes também são vantagem.',
};
