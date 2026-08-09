import type { Intencion } from '@/pregunta/tipos';

// Aperturas que retoman DE QUÉ trata la pregunta, en el registro de Runas:
// más seco y terrenal que el de Tarot, sin florituras.
//
// Ninguna afirma ni niega lo consultado. Reformulan la pregunta y mueven la
// mirada hacia lo que la tirada sí puede mostrar: si "¿vuelve?" se contestara
// con un sí, la app estaría prometiendo algo que no puede saber.
export const aperturasIntencion: Partial<Record<Intencion, string[]>> = {
  retorno: [
    'Preguntas si vuelve. Las runas no deciden eso, pero muestran qué quedó abierto.',
    'Quieres saber si va a volver. Mira primero qué sostiene hoy la distancia.',
    'La pregunta es por un regreso. Esto es lo que hay en el terreno.',
  ],
  sentimiento: [
    'Preguntas qué siente esa persona, y eso solo lo sabe ella. Las runas hablan del vínculo tal como está.',
    'Quieres saber si te quiere. Nadie responde por otro; acá aparece qué se juega entre los dos.',
    'La pregunta apunta al sentir del otro. Lo que se lee es el lazo, no su decisión.',
  ],
  ruptura: [
    'Estás pensando en cortar, y esa decisión es tuya. Las runas acercan lo que pesa de cada lado.',
    'Preguntas si dejarlo. Antes de decidir, mira qué se está sosteniendo.',
    'La pregunta es si irte. Aparece lo que te retiene y lo que te empuja.',
  ],
  decision: [
    'Preguntas qué te conviene. Las runas no eligen por ti, pero ordenan lo que está en juego.',
    'Estás entre dos caminos. Esto es lo que cae de cada lado.',
    'La pregunta es qué hacer. Mira lo que queda a la vista.',
  ],
  comienzo: [
    'Preguntas si esto que empieza va a prosperar. Las runas muestran con qué arranca.',
    'Quieres saber si sale bien. Aparece el terreno donde se planta.',
    'La pregunta mira a lo que está por empezar. Esto es lo que trae.',
  ],
  espera: [
    'Preguntas cuándo. Los tiempos no se leen acá, pero sí qué falta para que eso madure.',
    'Quieres saber cuánto falta. No hay fechas en las runas; sí lo que se está gestando.',
    'La pregunta es por el momento. Mira qué tiene que acomodarse todavía.',
  ],
};
