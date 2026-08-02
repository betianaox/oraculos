import type { CodigoIdioma } from '@/i18n/idiomas';

// Idioma "concreto" del contenido de Tarot. Se alinea con los idiomas de
// Oraculos (es/en/pt/it/fr); el contenido cae a espanol donde falte traduccion.
export type IdiomaConcreto = CodigoIdioma;

// NOTA (Fase 2): acá vivirá el PaqueteContenido del motor de lecturas de tarot
// (fragmentos por carta × posición × tema, aperturas, conectores, consejos),
// análogo al de Runas pero con el modelo de las 78 cartas. Por ahora solo se
// necesita el tipo de idioma para la UI.
