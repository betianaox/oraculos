// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { Intencion, Modo, Tema, Tono } from '@/pregunta/tipos';
import type { Orientacion } from '../types';

// ─────────────────────────────────────────────────────────────────────────
// Tejido de la consulta de odus (español NEUTRO).
//
// PRUDENCIA, que acá importa más que en ningún otro oráculo: esto es una
// consulta SIMBÓLICA de los significados de los odus, no el jogo de buzios,
// que es un ritual sagrado que realizan personas iniciadas. Este banco NO
// interpreta, no invoca, no pide y no habla en nombre de nadie: solo presenta
// lo que ya está escrito y lo conecta con la pregunta.
//
// El significado del odu y el matiz de la orientación son contenido canónico y
// no se tocan desde acá.
//
// El nombre del odu se conserva —es la identidad de la respuesta— pero se evita
// el formato de ficha ("Cayeron 5 cauríes abiertos: habla el odu X").
// ─────────────────────────────────────────────────────────────────────────

export interface BancoBuzios {
  /** Presenta el odu. Admite {tema}, {odu} (nombre) y {num} (abiertos). */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  /**
   * Aperturas que retoman DE QUÉ trata la pregunta. Admiten {odu} y {num}.
   * Si no se reconoció intención, se usa la común.
   */
  aperturasIntencion?: Partial<Record<Intencion, string[]>>;
  /** Eco opcional: una sola frase, cuando se menciona a otra persona. */
  ecoTercero: string[];
  /** Eco opcional por marca temporal fuerte. */
  ecoTiempo: Record<'pasado' | 'futuro', string[]>;
  temas: Record<Tema, string[]>;
  /** Introduce el matiz de la segunda tirada. Admite {abiertos}. */
  orientaciones: Record<Orientacion, string[]>;
  /** Cierre según cómo se formuló la pregunta. */
  cierres: Record<Modo, Record<Tono, string[]>>;
}

export const BANCO_BUZIOS_PT: BancoBuzios = {
  aperturas: {
    cerrada: {
      neutro: [
        'Para o que você pergunta {tema}, com {num} buzios abertos fala {odu}.',
        'Diante da sua consulta {tema}, os {num} abertos trazem {odu}.',
        'O que responde {tema} chega pelas mãos de {odu} ({num} abertos).',
      ],
      preocupacion: [
        'Entendo a sua inquietação {tema}. Com {num} buzios abertos fala {odu}, e convém ler com calma.',
        'Para isso que te preocupa {tema}, os {num} abertos trazem {odu}.',
      ],
      impulso: [
        'Com essa vontade de avançar {tema}, os {num} abertos propõem uma pausa em {odu}.',
        'Antes de dar o passo {tema}, com {num} buzios abertos fala {odu}.',
      ],
    },
    abierta: {
      neutro: [
        'Para o que você quer compreender {tema}, com {num} buzios abertos fala {odu}.',
        'O que se abre diante da sua consulta {tema} chega com {odu} ({num} abertos).',
      ],
      preocupacion: [
        'Sem pressa: para isso que te pesa {tema}, os {num} abertos trazem {odu}.',
        'Respire. Com {num} buzios abertos, fala {odu}.',
      ],
      impulso: [
        'Detenha por um instante o impulso: os {num} abertos trazem {odu}.',
        'Tanta energia merece uma pausa. Com {num} buzios abertos, fala {odu}.',
      ],
    },
  },
  // Retoman de qué trata la pregunta. Ninguna afirma ni niega lo consultado:
  // reformulan y mueven la mirada a lo que el odu sí puede mostrar. Esta es una
  // consulta simbólica, no una adivinación: nada acá promete un desenlace.
  aperturasIntencion: {
    retorno: [
      'Você pergunta se volta. Os buzios não decidem retornos; com {num} abertos, fala {odu}, mostrando o que ficou aberto.',
      'Quer saber se a pessoa vai voltar. Com {num} abertos, responde {odu}: veja o que sustenta a distância hoje.',
    ],
    sentimiento: [
      'Pergunta o que essa pessoa sente, e isso só ela sabe. Com {num} abertos, {odu} fala do vínculo como ele está.',
      'Quer saber se te ama. Ninguém responde pelo outro; com {num} abertos, {odu} mostra o que circula entre vocês.',
    ],
    ruptura: [
      'Está pensando em terminar, e essa decisão é sua. Com {num} abertos, {odu} fala do que pesa de cada lado.',
      'Pergunta se deve deixar. Com {num} abertos, responde {odu}: veja o que está sendo sustentado.',
    ],
    decision: [
      'Pergunta o que te convém. Com {num} abertos, fala {odu} e organiza o que está em jogo.',
      'Você está entre dois caminhos. Com {num} abertos, responde {odu}.',
    ],
    comienzo: [
      'Pergunta se o que começa agora vai prosperar. Com {num} abertos, {odu} fala do terreno onde se planta.',
      'Você quer saber se vai dar certo. Com {num} abertos, responde {odu}.',
    ],
    espera: [
      'Você pergunta quando. Os buzios não marcam datas; com {num} abertos, {odu} mostra o que falta para amadurecer.',
      'Você quer saber quanto falta. Com {num} abertos, {odu} fala sobre o que está sendo gestado.',
    ],
  },
  // Una sola frase de eco, para que la lectura reconozca lo que la persona
  // contó. Antes se descartaban `mencionaTercero` y `tiempo`, que ya venían
  // detectados y no se usaban en ningún lado.
  ecoTercero: [
    'Em tudo isso, essa pessoa pesa mais do que parece.',
    'O vínculo com quem você menciona atravessa toda a queda.',
    'Esse alguém também faz parte do quadro.',
  ],
  ecoTiempo: {
    pasado: [
      'Parte disso olha para trás, para algo que ainda não se encerrou.',
      'Há um antes que continua operando na cena.',
    ],
    futuro: [
      'A pergunta empurra para frente, e é por aí que vai a resposta.',
      'Tudo isso se inclina para o que ainda não aconteceu.',
    ],
  },
  temas: {
    amor: ['sobre o amor', 'sobre esse vínculo', 'sobre o que você sente'],
    trabajo: ['sobre o trabalho', 'sobre sua trajetória profissional', 'sobre o que te ocupa no trabalho'],
    dinero: ['sobre o dinheiro', 'sobre o material', 'sobre suas finanças'],
    general: ['sobre o seu momento', 'sobre o que você está vivendo', 'sobre isso que você traz'],
  },
  orientaciones: {
    favorable: [
      'A segunda queda ({abiertos} abertos) inclina o assunto a favor, o que chamamos de ire:',
      'Com {abiertos} abertos, a segunda tiragem acompanha: o matiz é de ire, a favor.',
      'A orientação que a segunda queda ({abiertos} abertos) marca é favorável, ire:',
    ],
    desafio: [
      'A segunda queda ({abiertos} abertos) coloca isso como um desafio, o que chamamos de osogbo:',
      'Com {abiertos} abertos, a segunda tiragem alerta: o matiz é de osogbo, de desafio.',
      'A orientação que a segunda queda ({abiertos} abertos) marca é de desafio, osogbo:',
    ],
  },
  cierres: {
    cerrada: {
      neutro: [
        'Com isso em vista, decida sem apressar o desfecho.',
        'Deixe que esta leitura acomode sua próxima escolha.',
      ],
      preocupacion: [
        'Não carregue o final antes da hora: um passo de cada vez é o suficiente.',
        'O que você teme não está decidido; use este olhar para relaxar um pouco.',
      ],
      impulso: [
        'Boa energia, mas meça o salto com o que acabou de ler.',
        'Avance, sim, mas sem pular o que o odu pede para você observar.',
      ],
    },
    abierta: {
      neutro: [
        'Fique com o que mais ressoou em você e deixe isso trabalhar por alguns dias.',
        'Não é preciso resolver tudo hoje; basta ver com mais clareza.',
      ],
      preocupacion: [
        'Seja gentil consigo mesmo: compreender já é começar a colocar as coisas em ordem.',
        'Dê-se permissão para não ter todas as respostas ainda.',
      ],
      impulso: [
        'Antes de agir, deixe que esta reflexão decante.',
        'Seu impulso é valioso; oriente-o com o que acabou de ver.',
      ],
    },
  },
};
