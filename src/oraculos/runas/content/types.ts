export type Tema = 'amor' | 'trabajo' | 'dinero' | 'general';

// cerrada = la pregunta busca un resultado o un sí/no ("¿va a volver?",
// "¿me conviene?"). abierta = busca reflexión ("¿qué necesito ver de esto?").
// Se detecta por patrones de la pregunta, no cambia el contenido de las
// runas — solo qué apertura/consejo se elige para acompañarlas.
export type Modo = 'cerrada' | 'abierta';

// Tono con el que la persona formuló la pregunta. Es su estado, no el de la
// runa: por eso tiñe las piezas que le hablan a ella (aperturas, consejos,
// eco), nunca los fragmentos que describen el significado de cada runa.
// 'neutro' es el default y el fallback cuando no hay contenido específico.
export type Tono = 'preocupacion' | 'impulso' | 'neutro';

// Orientación temporal de la consulta: hacia atrás ("mi ex", "lo que pasó"),
// hacia adelante ("va a", "conviene") o sin marca temporal fuerte.
export type Tiempo = 'pasado' | 'presente' | 'futuro';

export type Posicion = 'normal' | 'invertida';

export type RunaId =
  | 'fehu'
  | 'uruz'
  | 'thurisaz'
  | 'ansuz'
  | 'raidho'
  | 'kaunaz'
  | 'gebo'
  | 'wunju'
  | 'hagalaz'
  | 'naudiz'
  | 'isa'
  | 'jera'
  | 'eihwaz'
  | 'perthu'
  | 'algiz'
  | 'sowulo'
  | 'teiwaz'
  | 'berkana'
  | 'ehwaz'
  | 'mannaz'
  | 'laguz'
  | 'ingwaz'
  | 'dagaz'
  | 'othala';

// Cláusula corta (noun phrase) pensada para encajar después de un verbo
// como "trae" / "aporta" / "señala" en las plantillas de conector.
// Ej: "la runa X trae {fragmento}" -> "...trae la certeza de que el vínculo crece con paciencia".
export type Fragmento = string;

export type FragmentosPorTema = Record<Tema, [Fragmento, Fragmento, Fragmento]>;

export type FragmentosPorPosicion = Record<Posicion, FragmentosPorTema>;

export type BaseDeFragmentos = Record<RunaId, FragmentosPorPosicion>;

// Contenido de un solo tema (así se arma cada archivo en content/fragmentos/,
// uno por tema, y después se combinan en la base completa).
export type FragmentosDeTema = Record<RunaId, Record<Posicion, [Fragmento, Fragmento, Fragmento]>>;
