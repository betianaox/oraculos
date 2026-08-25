import type { Tema, Tono } from '../types';

// Frase de apertura, antes de la oración combinada de las 3 runas. Es el puente
// entre la pregunta y la interpretación.
//
// Español neutro, sin voseo (igual que el resto del contenido de la app).
//
// ── CÓMO SE ESCRIBE ACÁ ──────────────────────────────────────────────────
// Se probó la app con gente y volvieron dos quejas: frases que se repetían y
// lenguaje que no se entendía. Estas aperturas eran parte del segundo problema,
// por un motivo concreto: hablaban DEL ORÁCULO y no de la persona. "Esta
// combinación aporta una mirada sobre el plano profesional" es una ficha
// técnica; quien pregunta si le renuevan el contrato no se reconoce ahí.
//
// Reglas, entonces:
//
// 1. HABLARLE A LA PERSONA, no describir la tirada. El sujeto de la frase es
//    ella y su asunto, no "esta lectura" ni "estas runas". Palabras de la vida
//    diaria. Prohibidas las de informe: plano (como en "el plano afectivo"),
//    aspecto, tendencia, interpretación, situación económica, proceso.
// 2. MÍSTICO SOBRIO. Una imagen por frase como mucho —piedra, fuego, camino,
//    hilo— y nunca dos seguidas. Sin arcaísmos ni solemnidad.
//
// Las mismas reglas están en los bancos de Tarot, Ángeles y Egipcio, y en el
// prompt del servidor (imagostack/lib/oraculo/prompt.ts), para que la lectura
// de la IA y esta hablen igual.
//
// "Abierta" sí nombra el terreno (amor/trabajo/dinero) porque la pregunta fue
// reflexiva y conviene situarla. "Cerrada" no lo necesita —la pregunta ya fue
// concreta ("¿me conviene…?", "¿va a…?")— y por eso ese pool es tema-agnóstico.
//
// Cada pool está dividido por TONO (preocupacion/impulso/neutro). 'neutro'
// es el fallback: si un tono quedara vacío, armarLectura cae a 'neutro'.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      'Esto es lo que hay para mostrarte sobre el amor.',
      'Vamos a mirar con calma cómo está eso que sientes.',
      'Las piedras se detienen en lo que hoy pesa en el amor.',
      'Miremos qué está pasando de verdad con ese vínculo.',
      'Sobre lo que preguntas del corazón, esto es lo que se ve.',
      'Hay algo del amor que hoy se deja ver mejor que otros días.',
      'Esto es lo que aparece cuando preguntas por ese vínculo.',
      'Lo que sientes también tiene su forma, y hoy se ve así.',
    ],
    preocupacion: [
      'Miremos con calma eso que hoy te inquieta en el amor.',
      'Sé que lo del corazón te viene pesando. Vamos despacio.',
      'Lo que te preocupa de ese vínculo se mira mejor sin apuro.',
      'Estas piedras toman con cuidado la duda que traes en el amor.',
    ],
    impulso: [
      'Traes ganas, y en el amor eso también se lee.',
      'Vamos con ese impulso que traes en lo del corazón.',
      'Con todo ese entusiasmo, hay algo que conviene mirar antes.',
      'Esa energía con la que llegas al amor también dice lo suyo.',
    ],
  },
  trabajo: {
    neutro: [
      'Esto es lo que hay para mostrarte sobre el trabajo.',
      'Vamos a mirar con calma cómo viene lo laboral.',
      'Las piedras se detienen en lo que hoy pesa en tu trabajo.',
      'Miremos qué está pasando de verdad con eso del trabajo.',
      'Sobre lo que preguntas de tu camino laboral, esto es lo que se ve.',
      'Hay algo del trabajo que hoy se deja ver mejor que otros días.',
      'Esto es lo que aparece cuando preguntas por lo laboral.',
      'Lo que traes del trabajo también tiene su forma, y hoy se ve así.',
    ],
    preocupacion: [
      'Miremos con calma eso que hoy te inquieta del trabajo.',
      'Sé que lo laboral te viene pesando. Vamos despacio.',
      'Lo que te preocupa del trabajo se mira mejor sin apuro.',
      'Estas piedras toman con cuidado la tensión que traes del trabajo.',
    ],
    impulso: [
      'Traes ganas, y en el trabajo eso también se lee.',
      'Vamos con ese impulso que traes en lo laboral.',
      'Con todo ese entusiasmo por lo que viene, hay algo que mirar antes.',
      'Esa energía con la que encaras el trabajo también dice lo suyo.',
    ],
  },
  dinero: {
    neutro: [
      'Esto es lo que hay para mostrarte sobre el dinero.',
      'Vamos a mirar con calma cómo vienen las cuentas.',
      'Las piedras se detienen en lo que hoy pesa con la plata.',
      'Miremos qué está pasando de verdad con eso del dinero.',
      'Sobre lo que preguntas de lo material, esto es lo que se ve.',
      'Hay algo del dinero que hoy se deja ver mejor que otros días.',
      'Esto es lo que aparece cuando preguntas por lo económico.',
      'Lo que traes de las cuentas también tiene su forma, y hoy se ve así.',
    ],
    preocupacion: [
      'Miremos con calma eso que hoy te inquieta con el dinero.',
      'Sé que las cuentas te vienen pesando. Vamos despacio.',
      'Lo que te preocupa de la plata se mira mejor sin apuro.',
      'Estas piedras toman con cuidado la tensión que traes por el dinero.',
    ],
    impulso: [
      'Traes ganas, y con el dinero eso también se lee.',
      'Vamos con ese impulso que traes en lo económico.',
      'Con todo ese entusiasmo por lo que planeas, hay algo que mirar antes.',
      'Esa energía con la que encaras las cuentas también dice lo suyo.',
    ],
  },
  general: {
    neutro: [
      'Esto es lo que hay para mostrarte sobre este momento.',
      'Vamos a mirar con calma lo que estás viviendo.',
      'Las piedras se detienen en lo que hoy pesa más.',
      'Miremos qué está pasando de verdad con esto que traes.',
      'Sobre lo que preguntas, esto es lo que se ve.',
      'Hay algo de tu momento que hoy se deja ver mejor que otros días.',
      'Esto es lo que aparece cuando preguntas por tu presente.',
      'Lo que estás atravesando también tiene su forma, y hoy se ve así.',
    ],
    preocupacion: [
      'Miremos con calma eso que hoy te inquieta.',
      'Sé que esto te viene pesando. Vamos despacio.',
      'Lo que te preocupa se mira mejor sin apuro.',
      'Estas piedras toman con cuidado la duda que traes.',
    ],
    impulso: [
      'Traes ganas, y eso también se lee.',
      'Vamos con ese impulso que traes.',
      'Con todo ese entusiasmo, hay algo que conviene mirar antes.',
      'Esa energía con la que encaras lo que viene también dice lo suyo.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    'Esto es lo que responden las runas a lo que preguntaste.',
    'Vamos con tu pregunta. Esto es lo que se ve.',
    'Para lo que preguntas, esto es lo que hay.',
    'Las piedras contestan, y contestan así.',
    'Esto es lo que aparece para tu pregunta.',
    'Miremos tu pregunta con lo que salió.',
    'Lo que preguntaste tiene esta respuesta.',
    'Acá está lo que las runas traen para eso que quieres saber.',
    'Esto es lo que se ordena alrededor de tu pregunta.',
    'Para lo que quieres saber, esto es lo que se enciende.',
  ],
  preocupacion: [
    'Esto es lo que responden las runas, y lo dicen sin dramatismo.',
    'Las piedras contestan a tu pregunta con calma.',
    'Responden a lo que preguntaste sin cargar las tintas.',
    'Esto es lo que aparece, leído con serenidad.',
  ],
  impulso: [
    'Las runas contestaron, y hay con qué entusiasmarse.',
    'Esto es lo que traen para lo que preguntaste.',
    'Responden a tu pregunta con buena energía.',
    'Esto es lo que las piedras devuelven a lo que quieres saber.',
  ],
};
