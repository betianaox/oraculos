import type { Tema } from '@/pregunta/tipos';
import type { FragmentosDeTemaAngel } from './fragmentos/tipos';
import { FRAGMENTOS_GENERAL_ANGELES_ES } from './fragmentos/general';
import { FRAGMENTOS_AMOR_ANGELES_ES } from './fragmentos/amor';
import { FRAGMENTOS_TRABAJO_ANGELES_ES } from './fragmentos/trabajo';
import { FRAGMENTOS_DINERO_ANGELES_ES } from './fragmentos/dinero';

// Banco de fragmentos del oráculo de Ángeles (español), reunido por tema.
//
// A diferencia del Tarot, el mazo angélico no está pensado por temas: cada
// ángel tiene un significado y punto. Acá se lo reencuadra hacia amor, trabajo,
// dinero y el momento en general, apoyándose en las facetas que el propio mazo
// insinúa. Tres variantes por posición; las ocho cartas "sin revés" omiten
// 'invertida' y el motor usa su lectura derecha.
//
// Vivía todo en este archivo, que llegó a 890 líneas y donde muchas invertidas
// tenían una sola variante escrita en registro de ficha ("pérdidas materiales y
// morales"). Ahora hay un archivo por tema, con las 78 cartas completas.
//
// La escalera de fallback (ver lectura.ts) baja del tema consultado a 'general'
// y solo después a las palabras clave de la ficha. Ese último escalón quedó
// prácticamente muerto, y mejor así: era el que devolvía "confusión y ideas
// equivocadas", dos palabras pegadas con una "y" que no le dicen nada a nadie.
export const FRAGMENTOS_ANGELES_ES: Partial<Record<Tema, FragmentosDeTemaAngel>> = {
  amor: FRAGMENTOS_AMOR_ANGELES_ES,
  trabajo: FRAGMENTOS_TRABAJO_ANGELES_ES,
  dinero: FRAGMENTOS_DINERO_ANGELES_ES,
  general: FRAGMENTOS_GENERAL_ANGELES_ES,
};
