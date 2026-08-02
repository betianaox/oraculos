import type { Modo, Tema, Tono } from '../types';

// Conselho de fechamento, combinado. Dividido por modo (aberta/fechada) e, em
// cada um, por TOM. 'neutro' é o fallback. Português neutro (você), sem marcar
// gênero de quem consulta.
export const consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>> = {
  amor: {
    abierta: {
      neutro: [
        'O conselho é simples: preste atenção no que você já sabe mas ainda não teve coragem de dizer.',
        'Soltar o controle ajuda mais do que tentar administrar tudo: deixe isto seguir seu próprio ritmo.',
        'O equilíbrio entre dar e receber importa, havendo ou não uma relação ainda.',
        'Antes de agir, reserve um momento para escutar o que você realmente sente.',
      ],
      preocupacion: [
        'Você não precisa resolver tudo hoje, basta não se perder no processo.',
        'Trate isto com a mesma paciência que teria com alguém de quem você gosta.',
        'Alivie a cobrança consigo: sentir dúvida não é fazer algo errado.',
      ],
      impulso: [
        'Dê espaço para esse entusiasmo, mas deixe o outro marcar o ritmo dele também.',
        'A vontade é boa, sustente-a sem queimar etapas.',
        'Use esse impulso para se aproximar, não para forçar uma definição.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale a pena dar um passo concreto em vez de ficar remoendo na cabeça.',
        'Converse aquilo que vem sendo adiado — não vai se resolver sozinho.',
        'Escolha com cuidado onde colocar seu tempo e sua energia.',
        'Mostrar o que você sente, sem tanto filtro, pode ser justamente o que falta agora.',
      ],
      preocupacion: [
        'Um passo pequeno e firme acalma mais do que remoer o que você teme.',
        'Antes de decidir, alivie a ansiedade: a resposta fica mais clara na calma.',
        'Você não precisa ter tudo resolvido para dar o primeiro passo.',
      ],
      impulso: [
        'Se o impulso é genuíno, um passo concreto agora faz sentido.',
        'Use a vontade para agir, não só para imaginar.',
        'Mova-se com essa vontade, deixando espaço para a resposta do outro.',
      ],
    },
  },
  trabajo: {
    abierta: {
      neutro: [
        'O conselho é simples: preste atenção no que você já sabe mas ainda não encarou.',
        'Soltar o controle ajuda mais do que tentar administrar tudo: deixe o processo seguir seu ritmo.',
        'O equilíbrio entre esforço e descanso importa, mesmo que a cobrança diga o contrário.',
        'Antes de agir, reserve um momento para pensar o que você realmente precisa do trabalho.',
      ],
      preocupacion: [
        'Não carregue tudo de uma vez, uma coisa de cada vez também é avançar.',
        'Alivie a cobrança um pouco: a partir daí você pensa mais claro.',
        'O que hoje te sobrecarrega se organiza melhor por partes do que de uma vez.',
      ],
      impulso: [
        'Canalize esse impulso num primeiro passo concreto e sustentável.',
        'A vontade ajuda, que ela não te faça pular as etapas do meio.',
        'Use a energia para organizar o plano, não só para começar.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale a pena dar um passo concreto em vez de ficar remoendo na cabeça.',
        'Converse com quem for preciso aquilo que vem sendo adiado — não vai se resolver sozinho.',
        'Escolha com cuidado onde colocar seu tempo e sua energia no trabalho.',
        'Mostrar o que você precisa, sem tanto filtro, pode ser justamente o que falta agora.',
      ],
      preocupacion: [
        'Antes de definir, organize os dados: a decisão pesa menos com a cabeça fria.',
        'Um passo medido acalma mais do que apressar uma saída por medo.',
        'Não decida pelo cansaço, dê um tempo a si antes de resolver.',
      ],
      impulso: [
        'Se a oportunidade é real, dê o passo em vez de só se empolgar.',
        'Transforme a vontade num passo concreto e verificável.',
        'Bom momento para avançar, sempre com um plano por trás.',
      ],
    },
  },
  dinero: {
    abierta: {
      neutro: [
        'O conselho é simples: preste atenção no que você já sabe mas ainda não resolveu.',
        'Soltar o controle ajuda mais do que tentar administrar tudo: deixe o plano seguir seu ritmo.',
        'O equilíbrio entre poupar e aproveitar importa, mesmo que a ansiedade diga o contrário.',
        'Antes de agir, reserve um momento para pensar o que você realmente precisa resolver.',
      ],
      preocupacion: [
        'Um número claro assusta menos do que uma conta que você prefere não olhar.',
        'Separe o urgente do importante: nem tudo pesa igual hoje.',
        'Passo a passo: o financeiro se acalma quando você olha de perto.',
      ],
      impulso: [
        'Bom momento para mover algo, desde que você mantenha uma margem de segurança.',
        'Que o entusiasmo não coma o planejamento: se empolgue com um plano.',
        'Use a vontade para organizar e projetar, não só para gastar.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale a pena dar um passo concreto em vez de ficar remoendo na cabeça.',
        'Converse sobre a questão de dinheiro que vem sendo adiada — não vai se resolver sozinha.',
        'Escolha com cuidado onde colocar seus recursos agora.',
        'Mostrar sua situação real, sem tanto filtro, pode ser justamente o que falta agora.',
      ],
      preocupacion: [
        'Antes de decidir, olhe o número real: quase sempre assusta menos de perto.',
        'Um passo pequeno e seguro organiza mais do que uma jogada apressada.',
        'Não resolva o financeiro pelo susto, primeiro os dados.',
      ],
      impulso: [
        'Se as contas fecham, avance, se não, espere sem perder o impulso.',
        'Use a vontade para organizar, não só para gastar.',
        'Mova-se com esse impulso, mantendo uma margem por via das dúvidas.',
      ],
    },
  },
  general: {
    abierta: {
      neutro: [
        'O conselho é simples: preste atenção no que você já sabe mas ainda não encarou.',
        'Soltar o controle ajuda mais do que tentar administrar tudo: deixe isto seguir seu próprio ritmo.',
        'O equilíbrio importa mais do que a cobrança, mesmo que seja difícil lembrar.',
        'Antes de agir, reserve um momento para escutar o que você realmente precisa.',
      ],
      preocupacion: [
        'Você não precisa resolver tudo hoje, basta dar um passo de cada vez.',
        'Trate-se com um pouco da paciência que teria com outra pessoa.',
        'O que hoje te pesa se alivia quando você para de se cobrar tê-lo resolvido.',
      ],
      impulso: [
        'Dê espaço para esse impulso, mas apoie-o num primeiro passo concreto.',
        'A vontade é bom sinal, sustente-a sem apressar o processo.',
        'Use a energia para começar por algo pequeno e real.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale a pena dar um passo concreto em vez de ficar remoendo na cabeça.',
        'Converse aquilo que vem sendo adiado — não vai se resolver sozinho.',
        'Escolha com cuidado onde colocar seu tempo e sua energia.',
        'Mostrar o que você sente, sem tanto filtro, pode ser justamente o que falta agora.',
      ],
      preocupacion: [
        'Um passo pequeno e firme acalma mais do que remoer o que você teme.',
        'Antes de decidir, diminua um pouco o ritmo: na calma se vê melhor.',
        'Você não precisa de certeza total para dar o primeiro passo.',
      ],
      impulso: [
        'Se o impulso é genuíno, um passo concreto agora faz sentido.',
        'Use a vontade para agir, não só para imaginar.',
        'Bom momento para se mover, com um plano mínimo por trás.',
      ],
    },
  },
};
