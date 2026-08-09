// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { Intencion } from '@/pregunta/tipos';

// Aperturas que retoman DE QUÉ trata la pregunta, en el registro de Runas:
// más seco y terrenal que el de Tarot, sin florituras.
//
// Ninguna afirma ni niega lo consultado. Reformulan la pregunta y mueven la
// mirada hacia lo que la tirada sí puede mostrar: si "¿vuelve?" se contestara
// con un sí, la app estaría prometiendo algo que no puede saber.
export const aperturasIntencion: Partial<Record<Intencion, string[]>> = {
  retorno: [
    'Você pergunta se ele volta. As runas não decidem isso, mas mostram o que ficou em aberto.',
    'Quer saber se ele vai voltar. Olhe primeiro o que sustenta a distância hoje.',
    'A pergunta é sobre um retorno. Isto é o que há no terreno.',
  ],
  sentimiento: [
    'Você pergunta o que essa pessoa sente, e isso só ela sabe. As runas falam do vínculo como ele está.',
    'Quer saber se ele te ama. Ninguém responde pelo outro; aqui aparece o que está em jogo entre vocês.',
    'A pergunta aponta para o sentir do outro. O que se lê é o laço, não a decisão dele.',
  ],
  ruptura: [
    'Você está pensando em terminar, e essa decisão é sua. As runas aproximam o que pesa de cada lado.',
    'Pergunta se deve deixá-lo. Antes de decidir, olhe o que está sendo sustentado.',
    'A pergunta é se deve ir embora. Aparece o que te retém e o que te impulsiona.',
  ],
  decision: [
    'Você pergunta o que é melhor para você. As runas não escolhem por ti, mas ordenam o que está em jogo.',
    'Você está entre dois caminhos. Isto é o que cai de cada lado.',
    'A pergunta é o que fazer. Olhe o que está à vista.',
  ],
  comienzo: [
    'Você pergunta se o que começa agora vai prosperar. As runas mostram como tudo se inicia.',
    'Você quer saber se vai dar certo. Aqui aparece o terreno onde a semente é plantada.',
    'A pergunta olha para o que está por começar. Isto é o que isso traz.',
  ],
  espera: [
    'Você pergunta quando. Os tempos não se leem aqui, mas sim o que falta para isso amadurecer.',
    'Você quer saber quanto falta. Não há datas nas runas; apenas o que está sendo gestado.',
    'A pergunta é sobre o momento. Veja o que ainda precisa se ajustar.',
  ],
};
