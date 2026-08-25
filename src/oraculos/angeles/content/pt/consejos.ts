// Conselho do dia dos Anjos, em português: um por carta.
//
// POR QUE EXISTE: até agora este oráculo devolvia SEMPRE o mesmo texto
// genérico, sem olhar que carta tinha saído. A pessoa escolhia entre três
// versos, via a animação da virada… e lia a mesma coisa de ontem e do mês
// passado. A escolha era pura encenação.
//
// ── COMO SE ESCREVE UM CONSELHO ──────────────────────────────────────────
// As duas regras de sempre (ver pt/bancos.ts) —claro antes de elevado, místico
// sóbrio— mais uma terceira que é própria daqui:
//
//   UM CONSELHO DIZ À PESSOA O QUE FAZER HOJE. Não o que a carta significa.
//   "O Serafim representa o amor incondicional" é uma ficha; "hoje dê a alguém
//   algo que não vão te devolver" é um conselho. Se a frase se lê bem sem
//   ninguém do outro lado, está mal escrita.
//
// Português neutro (você). Segunda pessoa, começam falando do dia, e cabem em
// duas linhas. As cartas duras do baralho —os anjos negativos— não são
// suavizadas, mas também não assustam: viram algo que dá para fazer hoje.
export const CONSEJOS_ANGELES_PT: Record<number, string> = {
  1: 'Dê hoje a alguém algo que não vão te devolver. Um tempo, uma mão, uma ligação.',
  2: 'Algo que você vem carregando pode começar a fechar hoje se você parar de mexer.',
  3: 'Faça hoje aquela coisa que você faz bem e que faz tempo não faz. Mesmo que não sirva para nada.',
  4: 'Hoje convém falar com quem tem os dois lados da história, antes de decidir.',
  5: 'Ponha hoje um limite que você vem adiando. Não precisa explicar três vezes.',
  6: 'Pergunte hoje para alguém que já passou por isso. Vai te poupar meses.',
  7: 'Hoje não decida na quente. O que você sentir às onze da noite, olhe amanhã.',
  8: 'Anote hoje aquela ideia que fica rondando, mesmo parecendo grande demais. Só anotar.',
  9: 'Experimente hoje olhar o mesmo assunto do lugar do outro. Muda mais do que parece.',
  10: 'Hoje assuma algo que você vem esperando que outro resolva.',
  11: 'Use hoje essa vontade para começar algo, não para contar.',
  12: 'Alguém perto de você precisa que você pergunte como está. Faça isso hoje.',
  13: 'Se hoje você puder ajudar alguém sem que a pessoa saiba, faça.',
  14: 'Ligue hoje para alguém da sua família. Mesmo sem motivo.',
  15: 'Hoje é um bom dia para dizer aquilo que você vem ensaiando faz semanas.',
  16: 'Se há algo pela metade com alguém, hoje convém destravar nem que seja com uma mensagem curta.',
  17: 'Antes de opinar hoje, escute o dobro do que você fala.',
  18: 'Corte hoje uma só coisa das que você sabe que te fazem mal. Uma.',
  19: 'Sua presença hoje pesa mais do que você acha. Use para abrir uma porta, não para aparecer.',
  20: 'Hoje convém consultar antes de resolver. Alguém vê algo que te escapa.',
  21: 'Escreva hoje para aquele amigo com quem você não fala faz tempo. Sem assunto.',
  22: 'Diga hoje o que você vinha calando, mas de um jeito que o outro consiga escutar.',
  23: 'Feche algo hoje. Um arquivo, uma conversa, uma etapa. O que vem precisa do lugar.',
  24: 'Algo que hoje parece um detalhe vai te explicar várias coisas. Preste atenção.',
  25: 'Hoje se cuide um pouco mais do que você vem fazendo. Dormir conta.',
  26: 'Se hoje você perceber um erro seu, não tape. Consertar cedo sai barato.',
  27: 'Hoje proteja o que você já construiu, mesmo não sendo o dia mais empolgante do ano.',
  28: 'Ponha hoje no lugar algo que você sabe que está torto. Mesmo sendo incômodo.',
  29: 'Hoje dê ouvidos ao palpite, ainda mais se ele vem avisando faz dias.',
  30: 'Aproveite hoje o que você tem sem procurar o defeito. É um dia para isso.',
  31: 'Hoje ponha a sua força a serviço de algo que não seja o seu próprio brilho.',
  32: 'Diga hoje as coisas claras e de uma vez. Os rodeios estão custando mais que a verdade.',
  33: 'Hoje faça o que é certo, não o que convém. A diferença aparece depois.',
  34: 'Hoje retome o controle de algo que você vem deixando te manejar.',
  35: 'Dedique hoje um tempo a entender algo que te intriga faz tempo.',
  36: 'Escreva hoje o que você está pensando. Fica mais claro fora do que dentro da cabeça.',
  37: 'Mude hoje uma rotina, mesmo pequena. O caminho de casa, o horário, a ordem.',
  38: 'Se hoje algo termina, deixe terminar. Esticar não melhora.',
  39: 'Hoje não entre numa briga que você não escolheu. Dá simplesmente para não ir.',
  40: 'Hoje abra uma porta que você vinha deixando fechada por via das dúvidas.',
  41: 'Aproveite hoje a boa fase para organizar, não só para gastar.',
  42: 'Comece algo hoje, nem que seja o primeiro passo mais pequeno que você imaginar.',
  43: 'Hoje peça o que é seu por direito. Não vai chegar sozinho.',
  44: 'Se dê hoje um tempo de algo que você faz só porque gosta. Sem culpa.',
  45: 'Se hoje bater ciúme, olhe o que falta em você antes de olhar o outro.',
  46: 'Hoje diga a alguém o que você sente, com as palavras simples.',
  47: 'Antes de se mexer hoje, se pergunte o que acontece se der errado. Depois decida igual.',
  48: 'Hoje não procure nada. Fique um tempo com o que já está bem.',
  49: 'Faça hoje um balanço honesto de onde você está. Sem se castigar e sem maquiar.',
  50: 'Mostre hoje o que você fez. Guardar não melhora.',
  51: 'Hoje separe o que você imaginou do que de fato aconteceu. Anote as duas colunas.',
  52: 'Hoje baixe a bola. O que não for feito hoje se faz amanhã.',
  53: 'Hoje reparta parelho: tempo, tarefa, dinheiro, o que for que você venha dividindo mal.',
  54: 'Se aproxime hoje de quem te faz bem. Sem motivo e sem plano.',
  55: 'Hoje sustente a esperança mesmo sem ter prova ainda. Mais um dia.',
  56: 'Se hoje alguém se aproximar, dê uma chance de verdade antes de decidir.',
  57: 'Hoje deixe algo começar, mesmo sem saber ainda para onde vai.',
  58: 'Se hoje você se comparar com alguém, pare aí. Essa conta nunca fecha.',
  59: 'Hoje abra mão de algo pequeno por algo que te importa mais. Escolha com consciência.',
  60: 'Dedique hoje tempo ao que você está criando: um filho, um projeto, uma amizade.',
  61: 'Hoje leia, escute ou veja algo que te deixe melhor do que te encontrou.',
  62: 'Hoje use o bom senso antes da teoria. Costuma ter razão.',
  63: 'Hoje ponha a cabeça onde de fato faz falta, e não no que grita mais alto.',
  64: 'Hoje dê ouvidos ao corpo: se ele está pedindo algo, escute antes de racionalizar.',
  65: 'Hoje seja ambicioso com o que te importa e desapegado com o que não.',
  66: 'Empurre hoje aquilo que você vem empurrando. Está mais perto do que parece.',
  67: 'Hoje repare se alguém está usando o que você dá. Olhe com calma, sem acusar.',
  68: 'Hoje tome uma decisão pequena sozinho, sem consultar. Para lembrar como se faz.',
  69: 'Hoje diga não a algo que você sabe que vai pesar amanhã.',
  70: 'Se hoje o clima estiver pesado, não faça dele o seu. É de outro.',
  71: 'Hoje solte um rancor antigo. Não precisa perdoar ninguém de frente: basta largar.',
  72: 'Revise hoje com quem você está contando. Que seja com quem de fato aparece.',
  73: 'Hoje não force o que demora. Aproveite para preparar o terreno.',
  74: 'Se hoje a ansiedade apertar, faça uma coisa de cada vez. Depois a seguinte.',
  75: 'Hoje baixe o orgulho e peça o que você precisa. Ninguém vai adivinhar.',
  76: 'Se hoje houver barulho com alguém, não tente ganhar. Tente que acabe.',
  77: 'Hoje não acredite em quem te diz o que você quer ouvir. Repare no que faz, não no que diz.',
  78: 'Hoje se pergunte quem sai ganhando com o que você está por decidir. Que a resposta te inclua.',
};
