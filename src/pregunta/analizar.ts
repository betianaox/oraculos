import type { CodigoIdioma } from '@/i18n/idiomas';
import { obtenerDeteccion, type BancoDeteccion } from './bancos';
import type {
  AnalisisPregunta,
  Intencion,
  Modo,
  Senal,
  Tema,
  Tiempo,
  Tono,
} from './tipos';

const DIACRITICOS = /[̀-ͯ]/g;

export function normalizar(texto: string): string {
  const sinTildes = texto.toLowerCase().normalize('NFD').replace(DIACRITICOS, '');
  // Bordes con espacios para matchear palabras sueltas, no substrings de otras.
  return ` ${sinTildes} `;
}

function contieneAlguna(textoNormalizado: string, marcas: string[]): boolean {
  return marcas.some((marca) => textoNormalizado.includes(normalizar(marca).trim()));
}

export function clasificarTema(pregunta: string, idioma: CodigoIdioma): Tema {
  const texto = normalizar(pregunta);
  const banco = obtenerDeteccion(idioma).tema;
  let mejorTema: Tema = 'general';
  let mejorPuntaje = 0;

  for (const [tema, palabras] of Object.entries(banco)) {
    const puntaje = palabras.filter((p) => texto.includes(normalizar(p).trim())).length;
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejorTema = tema as Tema;
    }
  }
  return mejorTema;
}

export function clasificarModo(pregunta: string, idioma: CodigoIdioma): Modo {
  const texto = normalizar(pregunta);
  const marcas = obtenerDeteccion(idioma).modoCerrada;
  return marcas.some((m) => texto.includes(normalizar(m).trim())) ? 'cerrada' : 'abierta';
}

// Piso liviano de validez: no detecta gibberish (imposible sin un modelo), solo
// descarta lo evidente para no dejar enviar con un caracter suelto.
function esInvalida(textoCrudo: string): boolean {
  const texto = textoCrudo.trim();
  if (texto.length < 3) return true;
  const soloLetras = texto.replace(/[^a-záéíóúñüàèìòùâêîôûäëïöüçãõ]/gi, '');
  if (soloLetras.length < 3) return true; // "??", "1 2", "...ok"
  const sinEspacios = texto.replace(/\s/g, '').toLowerCase();
  if (new Set(sinEspacios).size === 1) return true; // "aaaa", "!!!!"
  return false;
}

export function analizarPregunta(pregunta: string, idioma: CodigoIdioma): AnalisisPregunta {
  const textoNormalizado = normalizar(pregunta);
  const banco = obtenerDeteccion(idioma);
  const temaTexto = clasificarTema(pregunta, idioma);
  const modo = clasificarModo(pregunta, idioma);

  // Preocupacion pesa mas que impulso ante una pregunta mixta.
  const tono: Tono = contieneAlguna(textoNormalizado, banco.preocupacion)
    ? 'preocupacion'
    : contieneAlguna(textoNormalizado, banco.impulso)
      ? 'impulso'
      : 'neutro';

  // Futuro pesa mas que pasado ante una pregunta mixta.
  const tiempo: Tiempo = contieneAlguna(textoNormalizado, banco.futuro)
    ? 'futuro'
    : contieneAlguna(textoNormalizado, banco.pasado)
      ? 'pasado'
      : 'presente';

  const mencionaTercero = contieneAlguna(textoNormalizado, banco.tercero);
  const intencion = detectarIntencion(textoNormalizado, banco);

  let senal: Senal;
  if (esInvalida(pregunta)) {
    senal = 'invalida';
  } else {
    const palabras = pregunta.trim().split(/\s+/).filter(Boolean);
    const traeSenal =
      palabras.length >= 4 ||
      temaTexto !== 'general' ||
      modo === 'cerrada' ||
      tono !== 'neutro' ||
      mencionaTercero;
    senal = traeSenal ? 'rica' : 'flaca';
  }

  return { senal, temaTexto, modo, tono, tiempo, mencionaTercero, intencion };
}

/**
 * De que trata la pregunta. Gana la intencion con mas coincidencias; si hay
 * empate, la primera del orden de abajo.
 *
 * Ese orden no es casual: va de lo mas especifico a lo mas generico. 'espera'
 * y 'decision' matchean con palabras muy comunes ("cuando", "debo") que
 * aparecen tambien en preguntas sobre otra cosa, asi que se prueban al final
 * para que no le ganen a una intencion mas concreta.
 */
const ORDEN: Intencion[] = [
  'retorno',
  'sentimiento',
  'ruptura',
  'comienzo',
  'decision',
  'espera',
];

function detectarIntencion(
  textoNormalizado: string,
  banco: BancoDeteccion,
): Intencion | null {
  let mejor: Intencion | null = null;
  let mejorPuntaje = 0;

  for (const intencion of ORDEN) {
    const marcas = banco.intenciones[intencion];
    if (!marcas) continue;
    const puntaje = marcas.filter((m) =>
      textoNormalizado.includes(normalizar(m).trim()),
    ).length;
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejor = intencion;
    }
  }
  return mejor;
}
