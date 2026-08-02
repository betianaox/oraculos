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

export interface AnalisisPregunta {
  senal: Senal;
  temaTexto: Tema; // tema detectado SOLO del texto (independiente del chip)
  modo: Modo;
  tono: Tono;
  tiempo: Tiempo;
  mencionaTercero: boolean;
}
