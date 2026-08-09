// Analisis de la pregunta. Es COMPARTIDO por todos los oraculos: la persona
// escribe igual para cualquiera, se detecta lo mismo (tema, tono, tiempo, etc.)
// y despues cada motor de oraculo hace lo suyo con ese resultado.

// Ejes tematicos de una consulta.
export type Tema = 'amor' | 'trabajo' | 'dinero' | 'general';

// cerrada = busca un resultado o si/no ("va a volver?"). abierta = busca
// reflexion ("que necesito ver de esto?").
export type Modo = 'cerrada' | 'abierta';

// Tono con el que la persona formulo la pregunta (su estado, no el del oraculo).
export type Tono = 'preocupacion' | 'impulso' | 'neutro';

// Orientacion temporal de la consulta.
export type Tiempo = 'pasado' | 'presente' | 'futuro';

// Cuanta "senal" trae la pregunta escrita:
//  - invalida: ruido de teclado o vacio (bloquea el envio).
//  - flaca:    valida pero muy escueta (deja seguir, pero avisa antes).
//  - rica:     trae tema, tono, mencion de alguien o suficientes palabras.
export type Senal = 'invalida' | 'flaca' | 'rica';

/**
 * Que esta preguntando, en concreto. Es lo unico que le dice al motor DE QUE
 * habla la pregunta y no solo como fue formulada.
 *
 * El resto del analisis (modo, tono, tiempo) describe la actitud de quien
 * pregunta; esto describe el asunto. Con eso la lectura puede abrir diciendo
 * "preguntas si va a volver" en vez de un generico "para lo que preguntas
 * sobre el amor", que es lo que mas la acerca a como responde la IA.
 *
 * Deliberadamente corta: seis intenciones que cubren la mayoria de las
 * consultas reales. Si no se reconoce ninguna, no pasa nada y se usa la
 * apertura generica.
 */
export type Intencion =
  /** Si alguien vuelve, llama, aparece. */
  | 'retorno'
  /** Que siente la otra persona. */
  | 'sentimiento'
  /** Si conviene cortar, irse, terminar algo. */
  | 'ruptura'
  /** Entre dos caminos: que conviene, que decidir. */
  | 'decision'
  /** Si algo nuevo va a empezar o prosperar. */
  | 'comienzo'
  /** Cuando va a pasar algo que se espera. */
  | 'espera';

export interface AnalisisPregunta {
  senal: Senal;
  temaTexto: Tema; // tema detectado SOLO del texto (independiente del chip)
  modo: Modo;
  tono: Tono;
  tiempo: Tiempo;
  mencionaTercero: boolean;
  /** De que trata la pregunta. `null` si no se reconocio ninguna. */
  intencion: Intencion | null;
}
