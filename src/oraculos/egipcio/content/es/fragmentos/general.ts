import type { FragmentosDeTema } from '../../fragmentos';

// Fragmentos del tema 'general' para los 22 Arcanos Mayores del Tarot Egipcio.
// Es el escalón de fallback: si una carta no tiene fragmento de amor/trabajo/
// dinero, la lectura usa el de acá.
//
// Registro (el mismo de todo el oráculo, ver es/bancos.ts): claro antes que
// elevado, y místico sobrio. Palabras de la vida diaria; nada de optimizar,
// gestionar, proceso, estructura, potencial ni "el plano tal". Una imagen por
// cláusula como mucho.
//
// Forma: cláusulas cortas que entran DENTRO de una oración ("De fondo se mueve
// algo: {frag}"), nunca definiciones de la carta. Tres variantes por posición.
export const FRAGMENTOS_GENERAL_ES: FragmentosDeTema = {
  // 1 · El Mago
  1: {
    normal: [
      'tener con qué y saber usarlo',
      'la mano firme de quien sabe lo que hace',
      'poner a trabajar algo que hasta ahora solo tenías guardado',
    ],
    invertida: [
      'saber cómo pero no animarse a empezar',
      'una habilidad que se usa para el lado equivocado',
      'dar vueltas sin decidir, con todo a mano',
    ],
  },
  // 2 · La Suma Sacerdotisa
  2: {
    normal: [
      'una calma que ve más lejos de lo que se dice',
      'saber algo por dentro antes de poder explicarlo',
      'la paciencia de quien ya vio esto antes',
    ],
    invertida: [
      'quedarse en la superficie de algo que pide fondo',
      'el orgullo que confunde lo que parece con lo que es',
      'creer que entendiste sin haber mirado bien',
    ],
  },
  // 3 · La Emperatriz
  3: {
    normal: [
      'algo que da fruto y se nota',
      'un terreno fértil, donde lo que se planta crece',
      'la capacidad de cuidar y hacer crecer lo tuyo',
    ],
    invertida: [
      'algo que no termina de cuajar por más que lo riegues',
      'ganas de crear que no encuentran dónde',
      'un descuido que deja marchitar lo que estaba vivo',
    ],
  },
  // 4 · El Emperador
  4: {
    normal: [
      'un piso firme sobre el que apoyarse',
      'poner orden y sostenerlo',
      'alguien que ordena y protege, o esa parte tuya que lo hace',
    ],
    invertida: [
      'una firmeza que se volvió rigidez',
      'depender de otro para lo que podrías sostener solo',
      'una autoridad que se está cayendo a pedazos',
    ],
  },
  // 5 · El Hierofante
  5: {
    normal: [
      'apoyarse en lo de siempre, que por algo funciona',
      'un consejo de alguien con más camino andado',
      'la prudencia de no salirse del molde todavía',
    ],
    invertida: [
      'romper el molde y hacerlo a tu manera',
      'la incomodidad de no encajar donde deberías',
      'perder pie cuando lo de siempre deja de servir',
    ],
  },
  // 6 · La Indecisión
  6: {
    normal: [
      'una elección del corazón que no se puede delegar',
      'un afecto sincero, de los que piden hacerse cargo',
      'estar entre lo que te eleva y lo que te ata',
    ],
    invertida: [
      'un capricho que se disfraza de amor',
      'alguien de afuera que se metió en el medio',
      'decidir por antojo lo que pedía criterio',
    ],
  },
  // 7 · El Carro
  7: {
    normal: [
      'ganar terreno después de venir empujando',
      'salir adelante de algo que parecía trabado',
      'un envión que abre camino',
    ],
    invertida: [
      'un empuje que se estrella contra su propio límite',
      'algo que se buscó mucho y no salió',
      'ir a los tumbos por querer llegar primero',
    ],
  },
  // 8 · La Justicia
  8: {
    normal: [
      'recibir lo que corresponde, ni más ni menos',
      'algo que por fin se acomoda del lado justo',
      'la balanza que se endereza sola',
    ],
    invertida: [
      'un reparto que no fue parejo',
      'pagar más de lo que te tocaba',
      'un juicio duro, de otros o tuyo, que pesa de más',
    ],
  },
  // 9 · El Ermitaño
  9: {
    normal: [
      'apartarse un poco para ver mejor',
      'una luz chica pero suficiente para el próximo paso',
      'el consejo de alguien que no habla de más',
    ],
    invertida: [
      'un encierro que confunde en vez de aclarar',
      'un consejo apurado que salió caro',
      'estar solo en algo que no se resuelve solo',
    ],
  },
  // 10 · La Rueda de la Fortuna
  10: {
    normal: [
      'un giro que llega sin haberlo buscado',
      'una racha que cambia para bien',
      'la rueda que gira justo cuando ya no esperabas',
    ],
    invertida: [
      'una racha que se dio vuelta',
      'un revés que no dependía de vos',
      'los mismos días repitiéndose sin que cambie nada',
    ],
  },
  // 11 · La Fuerza
  11: {
    normal: [
      'aguantar de pie sin perder la calma',
      'una convicción que no se negocia',
      'el temple que domina lo que parecía más fuerte',
    ],
    invertida: [
      'usar la fuerza para imponerse y no para sostener',
      'la energía que se apagó justo en la prueba',
      'ceder en algo que sabías que no había que ceder',
    ],
  },
  // 12 · El Apostolado
  12: {
    normal: [
      'soltar algo hoy para ganar claridad después',
      'una pausa obligada que igual sirve',
      'quedarse quieto mientras se acomoda lo de adentro',
    ],
    invertida: [
      'no querer soltar nada, ni lo que ya pesa',
      'quedarse en lo cómodo por no pagar el precio',
      'una promesa que se hizo para no tener que moverse',
    ],
  },
  // 13 · La Muerte
  13: {
    normal: [
      'un final que duele y abre paso',
      'algo que se termina de raíz, quieras o no',
      'dejar atrás lo que ya cumplió su tiempo',
    ],
    invertida: [
      'aferrarse a algo que ya terminó',
      'un cambio que se viene demorando de más',
      'la quietud de quedarse donde ya no pasa nada',
    ],
  },
  // 14 · La Templanza
  14: {
    normal: [
      'ir despacio y llegar entero',
      'juntar dos cosas que parecían no combinar',
      'una calma que ordena todo lo demás',
    ],
    invertida: [
      'el apuro que rompe lo que venía bien',
      'dos partes que no terminan de entenderse',
      'perder la paciencia justo antes de tiempo',
    ],
  },
  // 15 · El Mal
  15: {
    normal: [
      'una atadura que en parte elegiste',
      'algo que te tiene agarrado y cuesta nombrar',
      'una culpa que se cobra sola',
    ],
    invertida: [
      'aflojar una cadena que parecía imposible',
      'salir de algo que te tenía atrapado',
      'la tregua después de mucho encierro',
    ],
  },
  // 16 · La Fragilidad
  16: {
    normal: [
      'un derrumbe de golpe, sin aviso',
      'algo firme que resultó no serlo tanto',
      'un sacudón que rompe y deja el terreno limpio',
    ],
    invertida: [
      'un derrumbe que se viene postergando',
      'una tensión que se estira y no termina de estallar',
      'la rutina que aprieta despacio',
    ],
  },
  // 17 · La Esperanza
  17: {
    normal: [
      'una luz chica que alcanza para seguir',
      'las ganas que vuelven después de un tiempo largo',
      'confiar de nuevo en que esto puede salir bien',
    ],
    invertida: [
      'la luz que se apagó cuando dejaste de creer',
      'una espera que se hizo demasiado larga',
      'esperar poco para que no duela',
    ],
  },
  // 18 · La Luna
  18: {
    normal: [
      'algo que no se ve del todo y conviene mirar dos veces',
      'una corazonada que no conviene ignorar',
      'una promesa que suena mejor de lo que es',
    ],
    invertida: [
      'la niebla que empieza a levantarse',
      'bajar a tierra algo que venías imaginando de más',
      'un engaño chico que sale a la luz',
    ],
  },
  // 19 · El Sol
  19: {
    normal: [
      'días buenos, de los que se disfrutan sin culpa',
      'algo que sale bien y encima se comparte',
      'la claridad de estar en el lugar correcto',
    ],
    invertida: [
      'la alegría que quedó opaca sin motivo claro',
      'un plan que se cayó y dejó el día gris',
      'estar rodeado y aun así sentirse solo',
    ],
  },
  // 20 · El Juicio Final
  20: {
    normal: [
      'hacer cuentas con lo vivido y quedar en paz',
      'algo que por fin se reconoce',
      'un despertar, de esos que cambian cómo mirás todo',
    ],
    invertida: [
      'miedo a cerrar una etapa que ya se cerró',
      'una cuenta pendiente que cuesta aceptar',
      'demorar un final para no tener que despedirse',
    ],
  },
  // 21 · La Transmutación
  21: {
    normal: [
      'la recompensa de algo que llevó años',
      'un círculo que por fin se cierra',
      'llegar y poder quedarse tranquilo',
    ],
    invertida: [
      'no poder cerrar del todo lo que venías construyendo',
      'quedarse a un paso, con la obra a medias',
      'el miedo justo antes de dar el último paso',
    ],
  },
  // 22 · El Loco
  22: {
    normal: [
      'las ganas de largarse sin tenerlo todo resuelto',
      'una decisión grande tomada con el cuerpo',
      'el primer paso de algo que recién arranca',
    ],
    invertida: [
      'lanzarse sin mirar dónde se cae',
      'no animarse al paso que ya sabés que toca',
      'las ganas repartidas en tantas cosas que no alcanzan para ninguna',
    ],
  },
};
