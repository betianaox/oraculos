import type { Modo, Tema, Tono } from '../types';

// Consejo de cierre, combinado (no por runa individual). Dividido por modo
// (abierta/cerrada) y, dentro de cada uno, por TONO. 'neutro' es el fallback:
// si un tono quedara vacío, armarLectura cae a 'neutro'. Acá el tono es lo que
// más se nota: a quien pregunta preocupado conviene aquietarlo, a quien viene
// con impulso, encauzarlo sin frenarlo.
//
// Español neutro, sin voseo, sin marcar género de quien consulta.
export const consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>> = {
  amor: {
    abierta: {
      neutro: [
        'El consejo es simple: presta atención a lo que ya sabes pero todavía no te animaste a decir.',
        'Soltar el control ayuda más que intentar manejarlo todo: deja que esto siga su propio ritmo.',
        'El equilibrio entre dar y recibir importa, haya o no una relación todavía.',
        'Antes de actuar, tómate un momento para escuchar lo que realmente sientes.',
      ],
      preocupacion: [
        'No hace falta resolver todo hoy, alcanza con no perderte en el intento.',
        'Trata esto con la misma paciencia que tendrías con alguien que quieres.',
        'Baja la exigencia contigo: sentir dudas no es hacer algo mal.',
      ],
      impulso: [
        'Dale lugar a ese entusiasmo, pero deja que el otro también marque su ritmo.',
        'Las ganas están bien, sostenlas sin quemar etapas.',
        'Usa ese impulso para acercarte, no para apurar una definición.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale la pena dar un paso concreto en vez de seguir dándole vueltas en la cabeza.',
        'Conversa eso que viene postergándose — no se va a resolver solo.',
        'Elige con cuidado dónde poner tu tiempo y tu energía.',
        'Mostrar lo que sientes, sin tanto filtro, puede ser justo lo que hace falta ahora.',
      ],
      preocupacion: [
        'Un paso pequeño y firme calma más que darle mil vueltas a lo que temes.',
        'Antes de decidir, baja la ansiedad: la respuesta se ve mejor en calma.',
        'No necesitas tenerlo todo resuelto para dar el primer paso.',
      ],
      impulso: [
        'Si el impulso es genuino, un paso concreto ahora tiene sentido.',
        'Aprovecha las ganas para hacer, no solo para imaginar.',
        'Muévete con esas ganas, pero dejando lugar a la respuesta del otro.',
      ],
    },
  },
  trabajo: {
    abierta: {
      neutro: [
        'El consejo es simple: presta atención a lo que ya sabes pero todavía no encaraste.',
        'Soltar el control ayuda más que intentar manejarlo todo: deja que el proceso siga su ritmo.',
        'El equilibrio entre esfuerzo y descanso importa, aunque la exigencia diga lo contrario.',
        'Antes de actuar, tómate un momento para pensar qué necesitas realmente del trabajo.',
      ],
      preocupacion: [
        'No cargues con todo de golpe, una cosa a la vez también es avanzar.',
        'Baja la exigencia un punto: desde ahí se piensa más claro.',
        'Lo que hoy te agobia se ordena mejor por partes que de una vez.',
      ],
      impulso: [
        'Encauza ese impulso en un primer paso concreto y sostenible.',
        'Las ganas ayudan, que no te hagan saltear los pasos del medio.',
        'Usa la energía para ordenar el plan, no solo para arrancar.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale la pena dar un paso concreto en vez de seguir dándole vueltas en la cabeza.',
        'Conversa eso que viene postergándose con quien corresponda — no se va a resolver solo.',
        'Elige con cuidado dónde poner tu tiempo y tu energía laboral.',
        'Mostrar lo que necesitas, sin tanto filtro, puede ser justo lo que hace falta ahora.',
      ],
      preocupacion: [
        'Antes de definir, ordena los datos: la decisión pesa menos con la cabeza fría.',
        'Un paso medido calma más que apurar una salida por miedo.',
        'No decidas desde el cansancio, date un rato antes de resolver.',
      ],
      impulso: [
        'Si la oportunidad es real, da el paso en vez de solo entusiasmarte.',
        'Convierte las ganas en un paso concreto y verificable.',
        'Buen momento para avanzar, siempre con un plan detrás.',
      ],
    },
  },
  dinero: {
    abierta: {
      neutro: [
        'El consejo es simple: presta atención a lo que ya sabes pero todavía no resolviste.',
        'Soltar el control ayuda más que intentar manejarlo todo: deja que el plan siga su ritmo.',
        'El equilibrio entre ahorrar y disfrutar importa, aunque la ansiedad diga lo contrario.',
        'Antes de actuar, tómate un momento para pensar qué necesitas realmente resolver.',
      ],
      preocupacion: [
        'Un número claro asusta menos que una cuenta que no quieres mirar.',
        'Ordena lo urgente y lo importante: no todo pesa lo mismo hoy.',
        'Paso a paso: lo económico se calma cuando lo ves de cerca.',
      ],
      impulso: [
        'Buen momento para mover algo, siempre que dejes un margen de seguridad.',
        'Que el entusiasmo no se coma la previsión: entusiásmate con un plan.',
        'Usa las ganas para ordenar y proyectar, no solo para gastar.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale la pena dar un paso concreto en vez de seguir dándole vueltas en la cabeza.',
        'Conversa eso que viene postergándose sobre el dinero — no se va a resolver solo.',
        'Elige con cuidado en qué poner tus recursos ahora.',
        'Mostrar tu situación real, sin tanto filtro, puede ser justo lo que hace falta ahora.',
      ],
      preocupacion: [
        'Antes de decidir, mira el número real: casi siempre asusta menos de lejos.',
        'Un paso pequeño y seguro ordena más que una jugada apurada.',
        'No resuelvas lo económico desde el susto, primero los datos.',
      ],
      impulso: [
        'Si la cuenta cierra, avanza, si no, espera sin perder el impulso.',
        'Aprovecha las ganas para ordenar, no solo para gastar.',
        'Muévete con ese impulso, pero dejando un margen por las dudas.',
      ],
    },
  },
  general: {
    abierta: {
      neutro: [
        'El consejo es simple: presta atención a lo que ya sabes pero todavía no encaraste.',
        'Soltar el control ayuda más que intentar manejarlo todo: deja que esto siga su propio ritmo.',
        'El equilibrio importa más que la exigencia, aunque cueste recordarlo.',
        'Antes de actuar, tómate un momento para escuchar lo que realmente necesitas.',
      ],
      preocupacion: [
        'No tienes que resolverlo todo hoy, alcanza con dar un paso a la vez.',
        'Trátate con un poco de la paciencia que tendrías con otra persona.',
        'Lo que hoy te pesa se afloja cuando dejas de exigirte tenerlo resuelto.',
      ],
      impulso: [
        'Dale lugar a ese impulso, pero apóyalo en un primer paso concreto.',
        'Las ganas son buena señal, sostenlas sin apurar el proceso.',
        'Usa la energía para empezar por algo pequeño y real.',
      ],
    },
    cerrada: {
      neutro: [
        'Vale la pena dar un paso concreto en vez de seguir dándole vueltas en la cabeza.',
        'Conversa eso que viene postergándose — no se va a resolver solo.',
        'Elige con cuidado dónde poner tu tiempo y tu energía.',
        'Mostrar lo que sientes, sin tanto filtro, puede ser justo lo que hace falta ahora.',
      ],
      preocupacion: [
        'Un paso pequeño y firme calma más que darle vueltas a lo que temes.',
        'Antes de decidir, baja un cambio: en calma se ve mejor.',
        'No hace falta certeza total para dar el primer paso.',
      ],
      impulso: [
        'Si el impulso es genuino, un paso concreto ahora tiene sentido.',
        'Usa las ganas para hacer, no solo para imaginar.',
        'Buen momento para moverte, con un plan mínimo detrás.',
      ],
    },
  },
};
