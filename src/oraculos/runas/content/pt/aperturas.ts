import type { Tema, Tono } from '../types';

// Frase de abertura em português, antes da oração combinada das três runas.
// Neutra de propósito, sem metáforas — funciona como ponte para a leitura, não
// como uma frase memorável. Mesmo registro e estrutura do pacote em espanhol.
// Português neutro (você). Dividido por TOM; 'neutro' é o fallback.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      'Esta tirada reflete um aspecto do momento que sua vida afetiva está atravessando.',
      'As runas apontam para uma tendência ligada ao amor neste momento.',
      'Esta combinação oferece um olhar sobre o lado sentimental.',
      'A tirada reflete aspectos que podem estar influenciando sua vida amorosa.',
      'Estas três runas descrevem a energia que envolve o amor neste momento.',
      'Esta leitura se concentra no estado atual da sua vida sentimental.',
      'As runas oferecem uma leitura do momento emocional que você está vivendo.',
      'A leitura foca no que hoje tem mais peso no amor.',
    ],
    preocupacion: [
      'Esta tirada olha com calma para o que hoje te inquieta no amor.',
      'As runas respondem com serenidade ao que você vem carregando no afetivo.',
      'Esta leitura se detém no que hoje te preocupa no lado sentimental.',
      'Estas runas acolhem com cuidado o que te deixa em dúvida no amor.',
    ],
    impulso: [
      'Esta tirada acompanha a vontade com que você está olhando para o amor.',
      'As runas leem o impulso que você traz no afetivo.',
      'Esta leitura acolhe o entusiasmo que você tem hoje no sentimental.',
      'Estas runas recolhem a energia com que você chega ao lado afetivo.',
    ],
  },
  trabajo: {
    neutro: [
      'Esta tirada reflete um aspecto do momento que sua vida profissional está atravessando.',
      'As runas apontam para uma tendência ligada ao trabalho neste momento.',
      'Esta combinação oferece um olhar sobre o lado profissional.',
      'A tirada reflete aspectos que podem estar influenciando sua situação no trabalho.',
      'Estas três runas descrevem a energia que envolve seu trabalho neste momento.',
      'Esta leitura se concentra no estado atual da sua vida profissional.',
      'As runas oferecem uma leitura do momento profissional que você está vivendo.',
      'A leitura foca no que hoje tem mais peso no trabalho.',
    ],
    preocupacion: [
      'Esta tirada olha com calma para o que hoje te inquieta no trabalho.',
      'As runas respondem com serenidade ao que você vem carregando no trabalho.',
    ],
    impulso: [
      'Esta tirada acompanha a vontade com que você está encarando o trabalho.',
      'As runas leem o impulso que você traz no lado profissional.',
    ],
  },
  dinero: {
    neutro: [
      'Esta tirada reflete um aspecto do momento que suas finanças estão atravessando.',
      'As runas apontam para uma tendência ligada ao dinheiro neste momento.',
      'Esta combinação oferece um olhar sobre o lado financeiro.',
      'A tirada reflete aspectos que podem estar influenciando suas finanças.',
      'Estas três runas descrevem a energia que envolve o dinheiro neste momento.',
      'Esta leitura se concentra no estado atual das suas finanças.',
      'As runas oferecem uma leitura do momento financeiro que você está vivendo.',
      'A leitura foca no que hoje tem mais peso no dinheiro.',
    ],
    preocupacion: [
      'Esta tirada olha com calma para o que hoje te inquieta com o dinheiro.',
      'As runas respondem com serenidade ao que você vem carregando no financeiro.',
    ],
    impulso: [
      'Esta tirada acompanha a vontade com que você está olhando para as finanças.',
      'As runas leem o impulso que você traz nos seus planos de dinheiro.',
    ],
  },
  general: {
    neutro: [
      'Esta tirada reflete um aspecto do momento que você está atravessando.',
      'As runas apontam para uma tendência ligada ao que você está vivendo.',
      'Esta combinação oferece um olhar sobre a situação atual.',
      'A tirada reflete aspectos que podem estar influenciando este momento.',
      'Estas três runas descrevem a energia que envolve este momento.',
      'Esta leitura se concentra no estado atual da situação.',
      'As runas oferecem uma leitura do que você está vivendo.',
      'A leitura foca no que hoje tem mais peso.',
    ],
    preocupacion: [
      'Esta tirada olha com calma para o que hoje te inquieta.',
      'As runas respondem com serenidade ao que você vem carregando.',
    ],
    impulso: [
      'Esta tirada acompanha a vontade com que você está olhando para este momento.',
      'As runas leem o impulso que você traz.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    'Esta foi a resposta das runas à sua pergunta.',
    'A tirada reflete a mensagem ligada à sua pergunta.',
    'Estas runas mostram a leitura que corresponde à sua consulta.',
    'A combinação que saiu responde ao tema que você levantou.',
    'Isto é o que as runas indicam para a pergunta que você fez.',
    'A leitura se constrói a partir desta combinação de runas.',
    'Esta tirada resume a mensagem ligada à sua consulta.',
    'As runas responderam da seguinte forma.',
    'O resultado da sua consulta tomou forma nesta combinação.',
    'Esta é a leitura que surge da tirada que você fez.',
  ],
  preocupacion: [
    'É isto o que as runas respondem, e dizem sem drama.',
    'As runas respondem à sua consulta com calma.',
    'A tirada responde ao que você perguntou sem exagerar.',
    'É isto o que as runas mostram, lido com serenidade.',
  ],
  impulso: [
    'As runas responderam à sua consulta, e há motivo para se animar.',
    'É isto o que as runas trazem para o que você perguntou.',
    'A tirada responde à sua consulta com boa energia.',
    'É isto o que as runas devolvem à sua pergunta.',
  ],
};
