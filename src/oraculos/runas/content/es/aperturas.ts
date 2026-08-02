import type { Tema, Tono } from '../types';

// Frase de apertura, antes de la oración combinada de las 3 runas.
// A propósito neutra, sin metáforas ni contrastes: tiene que funcionar
// como puente hacia la interpretación, no como un texto memorable — el
// objetivo es que a la segunda o tercera consulta no se note el molde.
//
// Español neutro, sin voseo (igual que el resto del contenido de la app).
//
// "Abierta" sí nombra el plano (afectivo/laboral/económico) porque la
// pregunta fue reflexiva y conviene situar el contexto. "Cerrada" no
// necesita nombrar el tema — la pregunta ya fue concreta ("¿me conviene…?",
// "¿va a…?") así que alcanza con referirse a "tu consulta", y por eso ese
// pool es tema-agnóstico.
//
// Cada pool está dividido por TONO (preocupacion/impulso/neutro). 'neutro'
// es el fallback: si un tono quedara vacío, armarLectura cae a 'neutro'.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      'Esta tirada muestra un aspecto del momento que está atravesando tu vida afectiva.',
      'Las runas señalan una tendencia relacionada con el amor en este momento.',
      'Esta combinación aporta una mirada sobre el plano sentimental.',
      'La tirada refleja aspectos que pueden estar influyendo en tu vida amorosa.',
      'Estas tres runas describen la energía que rodea al amor en este momento.',
      'Esta lectura se enfoca en el estado actual de tu vida sentimental.',
      'Las runas ofrecen una interpretación sobre el momento emocional que estás viviendo.',
      'La lectura pone el foco en aquello que hoy tiene más peso en el amor.',
    ],
    preocupacion: [
      'Esta tirada mira con calma eso que hoy te inquieta en el amor.',
      'Las runas responden con serenidad a lo que vienes cargando en lo afectivo.',
      'Esta lectura se detiene en lo que hoy te preocupa del plano sentimental.',
      'Estas runas toman con cuidado lo que te tiene en duda en el amor.',
    ],
    impulso: [
      'Esta tirada acompaña las ganas con las que estás mirando el amor.',
      'Las runas leen el impulso que traes en lo afectivo.',
      'Esta lectura toma el entusiasmo que hoy tienes en lo sentimental.',
      'Estas runas recogen la energía con la que llegas al plano afectivo.',
    ],
  },
  trabajo: {
    neutro: [
      'Esta tirada muestra un aspecto del momento que está atravesando tu vida laboral.',
      'Las runas señalan una tendencia relacionada con el trabajo en este momento.',
      'Esta combinación aporta una mirada sobre el plano profesional.',
      'La tirada refleja aspectos que pueden estar influyendo en tu situación laboral.',
      'Estas tres runas describen la energía que rodea tu trabajo en este momento.',
      'Esta lectura se enfoca en el estado actual de tu vida profesional.',
      'Las runas ofrecen una interpretación sobre el momento laboral que estás viviendo.',
      'La lectura pone el foco en aquello que hoy tiene más peso en el trabajo.',
    ],
    preocupacion: [
      'Esta tirada mira con calma eso que hoy te inquieta en lo laboral.',
      'Las runas responden con serenidad a lo que vienes cargando con el trabajo.',
      'Esta lectura se detiene en lo que hoy te preocupa de tu situación laboral.',
      'Estas runas toman con cuidado la tensión que traes del trabajo.',
    ],
    impulso: [
      'Esta tirada acompaña las ganas con las que estás encarando el trabajo.',
      'Las runas leen el impulso que traes en lo profesional.',
      'Esta lectura toma el entusiasmo con el que miras tu presente laboral.',
      'Estas runas recogen la energía con la que llegas a lo profesional.',
    ],
  },
  dinero: {
    neutro: [
      'Esta tirada muestra un aspecto del momento que está atravesando tu situación económica.',
      'Las runas señalan una tendencia relacionada con el dinero en este momento.',
      'Esta combinación aporta una mirada sobre el plano financiero.',
      'La tirada refleja aspectos que pueden estar influyendo en tu economía.',
      'Estas tres runas describen la energía que rodea al dinero en este momento.',
      'Esta lectura se enfoca en el estado actual de tus finanzas.',
      'Las runas ofrecen una interpretación sobre el momento económico que estás viviendo.',
      'La lectura pone el foco en aquello que hoy tiene más peso en lo económico.',
    ],
    preocupacion: [
      'Esta tirada mira con calma eso que hoy te inquieta con el dinero.',
      'Las runas responden con serenidad a lo que vienes cargando en lo económico.',
      'Esta lectura se detiene en lo que hoy te preocupa de tu economía.',
      'Estas runas toman con cuidado la tensión que traes por el dinero.',
    ],
    impulso: [
      'Esta tirada acompaña las ganas con las que estás mirando lo económico.',
      'Las runas leen el impulso que traes con tus proyectos de dinero.',
      'Esta lectura toma el entusiasmo con el que encaras tus planes económicos.',
      'Estas runas recogen la energía con la que llegas a lo financiero.',
    ],
  },
  general: {
    neutro: [
      'Esta tirada muestra un aspecto del momento que estás atravesando.',
      'Las runas señalan una tendencia relacionada con esto que estás viviendo.',
      'Esta combinación aporta una mirada sobre la situación actual.',
      'La tirada refleja aspectos que pueden estar influyendo en este momento.',
      'Estas tres runas describen la energía que rodea este momento.',
      'Esta lectura se enfoca en el estado actual de la situación.',
      'Las runas ofrecen una interpretación sobre lo que estás viviendo.',
      'La lectura pone el foco en aquello que hoy tiene más peso.',
    ],
    preocupacion: [
      'Esta tirada mira con calma eso que hoy te inquieta.',
      'Las runas responden con serenidad a lo que vienes cargando.',
      'Esta lectura se detiene en lo que hoy te preocupa.',
      'Estas runas toman con cuidado lo que te tiene en duda.',
    ],
    impulso: [
      'Esta tirada acompaña las ganas con las que estás mirando este momento.',
      'Las runas leen el impulso que traes.',
      'Esta lectura toma el entusiasmo con el que llegas a esta etapa.',
      'Estas runas recogen la energía con la que encaras lo que viene.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    'Esta fue la respuesta de las runas a tu consulta.',
    'La tirada refleja el mensaje asociado a tu pregunta.',
    'Estas runas muestran la interpretación correspondiente a tu consulta.',
    'La combinación obtenida responde al tema que planteaste.',
    'Esto es lo que indican las runas para la pregunta realizada.',
    'La lectura se construye a partir de esta combinación de runas.',
    'Esta tirada resume el mensaje relacionado con tu consulta.',
    'Las runas respondieron de la siguiente manera.',
    'El resultado de la consulta quedó representado en esta combinación.',
    'Esta es la interpretación que surge de la tirada realizada.',
  ],
  preocupacion: [
    'Esto es lo que responden las runas, y lo dicen sin dramatismo.',
    'Las runas contestan a tu consulta con calma.',
    'La tirada responde a lo que preguntaste sin cargar las tintas.',
    'Esto es lo que muestran las runas, leído con serenidad.',
  ],
  impulso: [
    'Las runas respondieron a tu consulta, y hay con qué entusiasmarse.',
    'Esto es lo que traen las runas para lo que preguntaste.',
    'La tirada responde a tu consulta con buena energía.',
    'Esto es lo que las runas devuelven a tu pregunta.',
  ],
};
