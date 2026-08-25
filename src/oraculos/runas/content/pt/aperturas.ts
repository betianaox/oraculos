import type { Tema, Tono } from '../types';

// Frase de abertura em português, antes da oração combinada das três runas.
// É a ponte entre a pergunta e a leitura. Português neutro (você).
//
// ── COMO SE ESCREVE AQUI ─────────────────────────────────────────────────
// Os testadores apontaram dois problemas no pacote em espanhol, e este era uma
// tradução direta dele, então tinha os dois. Estas regras são a correção, e são
// de conteúdo, não de estilo:
//
// 1. FALAR COM A PESSOA, não descrever a tirada. O sujeito da frase é ela e o
//    assunto dela, nunca "esta leitura" nem "estas runas". Palavras do dia a
//    dia. Proibido o vocabulário de relatório: "aspecto", "tendência",
//    "fatores", "o lado afetivo/profissional/financeiro", "estado atual",
//    "processo". "Esta combinação oferece um olhar sobre o lado profissional" é
//    uma ficha técnica; quem pergunta se o contrato será renovado não se
//    reconhece ali.
// 2. MÍSTICO SÓBRIO. No máximo uma imagem por frase — pedra, fogo, caminho,
//    fio — e nunca duas seguidas. Sem arcaísmos nem solenidade.
//
// As mesmas regras estão no pacote em espanhol (es/aperturas.ts), nos bancos de
// Tarô, Anjos e Egípcio, e no prompt do servidor, para que a leitura da IA e
// esta falem igual.
//
// "Aberta" nomeia o terreno (amor/trabalho/dinheiro) porque a pergunta foi
// reflexiva; "fechada" não precisa, e por isso esse pool é agnóstico de tema.
// Cada pool é dividido por TOM; 'neutro' é o fallback.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      'Isto é o que há para te mostrar sobre o amor.',
      'Vamos olhar com calma como está isso que você sente.',
      'As pedras se detêm no que hoje pesa mais no amor.',
      'Vamos ver o que está acontecendo de verdade com esse vínculo.',
      'Sobre o que você pergunta do coração, isto é o que aparece.',
      'Tem algo do amor que hoje se deixa ver melhor que em outros dias.',
      'Isto é o que aparece quando você pergunta por essa pessoa.',
      'O que você sente também tem sua forma, e hoje ela é esta.',
    ],
    preocupacion: [
      'Vamos olhar com calma o que hoje te inquieta no amor.',
      'Sei que as coisas do coração vêm pesando. Vamos devagar.',
      'O que te preocupa nesse vínculo se enxerga melhor sem pressa.',
      'Estas pedras acolhem com cuidado a dúvida que você traz no amor.',
    ],
    impulso: [
      'Você vem com vontade, e no amor isso também se lê.',
      'Vamos com esse impulso que você traz nas coisas do coração.',
      'Com todo esse entusiasmo, tem algo que convém olhar antes.',
      'Essa energia com que você chega ao amor também diz o seu.',
    ],
  },
  trabajo: {
    neutro: [
      'Isto é o que há para te mostrar sobre o trabalho.',
      'Vamos olhar com calma como vai o trabalho.',
      'As pedras se detêm no que hoje pesa mais no seu trabalho.',
      'Vamos ver o que está acontecendo de verdade nesse assunto do trabalho.',
      'Sobre o caminho que você pergunta, isto é o que aparece.',
      'Tem algo do trabalho que hoje se deixa ver melhor que em outros dias.',
      'Isto é o que aparece quando você pergunta pelo seu emprego.',
      'O que você traz do trabalho também tem sua forma, e hoje ela é esta.',
    ],
    preocupacion: [
      'Vamos olhar com calma o que hoje te inquieta no trabalho.',
      'Sei que o trabalho vem pesando. Vamos devagar.',
      'O que te preocupa no emprego se enxerga melhor sem pressa.',
      'Estas pedras acolhem com cuidado a tensão que você traz do trabalho.',
    ],
    impulso: [
      'Você vem com vontade, e no trabalho isso também se lê.',
      'Vamos com esse impulso que você traz no trabalho.',
      'Com todo esse entusiasmo pelo que vem, tem algo para olhar antes.',
      'Essa energia com que você encara o trabalho também diz o seu.',
    ],
  },
  dinero: {
    neutro: [
      'Isto é o que há para te mostrar sobre o dinheiro.',
      'Vamos olhar com calma como estão as contas.',
      'As pedras se detêm no que hoje pesa mais com a grana.',
      'Vamos ver o que está acontecendo de verdade nesse assunto do dinheiro.',
      'Sobre o que você pergunta do lado material, isto é o que aparece.',
      'Tem algo do dinheiro que hoje se deixa ver melhor que em outros dias.',
      'Isto é o que aparece quando você pergunta pelas contas.',
      'O que você traz das contas também tem sua forma, e hoje ela é esta.',
    ],
    preocupacion: [
      'Vamos olhar com calma o que hoje te inquieta com o dinheiro.',
      'Sei que as contas vêm pesando. Vamos devagar.',
      'O que te preocupa com a grana se enxerga melhor sem pressa.',
      'Estas pedras acolhem com cuidado a tensão que o dinheiro te traz.',
    ],
    impulso: [
      'Você vem com vontade, e com o dinheiro isso também se lê.',
      'Vamos com esse impulso que você traz nas contas.',
      'Com todo esse entusiasmo pelo que você planeja, tem algo para olhar antes.',
      'Essa energia com que você encara as contas também diz o seu.',
    ],
  },
  general: {
    neutro: [
      'Isto é o que há para te mostrar sobre este momento.',
      'Vamos olhar com calma o que você está vivendo.',
      'As pedras se detêm no que hoje pesa mais.',
      'Vamos ver o que está acontecendo de verdade com isso que você traz.',
      'Sobre o que você pergunta, isto é o que aparece.',
      'Tem algo do seu momento que hoje se deixa ver melhor que em outros dias.',
      'Isto é o que aparece quando você pergunta pelo seu presente.',
      'O que você está atravessando também tem sua forma, e hoje ela é esta.',
    ],
    preocupacion: [
      'Vamos olhar com calma o que hoje te inquieta.',
      'Sei que isso vem pesando. Vamos devagar.',
      'O que te preocupa se enxerga melhor sem pressa.',
      'Estas pedras acolhem com cuidado a dúvida que você traz.',
    ],
    impulso: [
      'Você vem com vontade, e isso também se lê.',
      'Vamos com esse impulso que você traz.',
      'Com todo esse entusiasmo, tem algo que convém olhar antes.',
      'Essa energia com que você encara o que vem também diz o seu.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    'Isto é o que as runas respondem ao que você perguntou.',
    'Vamos à sua pergunta. Isto é o que aparece.',
    'Para o que você pergunta, isto é o que há.',
    'As pedras respondem, e respondem assim.',
    'Isto é o que aparece para a sua pergunta.',
    'Vamos olhar sua pergunta com o que saiu.',
    'O que você perguntou tem esta resposta.',
    'Aqui está o que as runas trazem para o que você quer saber.',
    'Isto é o que se organiza em torno da sua pergunta.',
    'Para o que você quer saber, isto é o que se acende.',
  ],
  preocupacion: [
    'Isto é o que as runas respondem, e dizem sem drama.',
    'As pedras respondem à sua pergunta com calma.',
    'Respondem ao que você perguntou sem carregar nas tintas.',
    'Isto é o que aparece, lido com serenidade.',
  ],
  impulso: [
    'As runas responderam, e há com o que se entusiasmar.',
    'Isto é o que trazem para o que você perguntou.',
    'Respondem à sua pergunta com boa energia.',
    'Isto é o que as pedras devolvem ao que você quer saber.',
  ],
};
