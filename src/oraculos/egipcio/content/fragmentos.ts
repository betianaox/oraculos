import type { Tema } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// Tipos del banco de fragmentos de Egipcio.
//
// Un fragmento es una CLÁUSULA CORTA que entra dentro de una oración de la
// lectura, no una definición de la carta. Van en dos formas —sintagma nominal
// ("una promesa que se demora") e infinitivo ("plantarse por lo que vale")— y
// las plantillas de es/bancos.ts aceptan las dos.
//
// Tres variantes por carta y posición: es el mínimo para que la misma carta no
// suene igual en dos lecturas seguidas. El motor además nunca repite dentro de
// una misma lectura (ver flujo/sinRepetir.ts).
// ─────────────────────────────────────────────────────────────────────────

export type Posicion = 'normal' | 'invertida';

/** Las tres variantes de una carta en una posición. */
export type Variantes = [string, string, string];

/** Fragmentos de un tema, indexados por número de carta (1..78). */
export type FragmentosDeTema = Record<number, Record<Posicion, Variantes>>;

/** El banco completo: un mapa por tema. Parcial mientras se escribe. */
export type BancoFragmentos = Partial<Record<Tema, FragmentosDeTema>>;
