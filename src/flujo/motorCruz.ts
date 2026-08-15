import type { PiezaTirada } from './pieza';
import type { AnalisisPregunta, Intencion, Modo, Tema, Tono } from '@/pregunta/tipos';
import { sinEcos, tomarNuevo } from './sinRepetir';

// ─────────────────────────────────────────────────────────────────────────
// Motor COMPARTIDO de la cruz de 5. Lo usan Tarot, Ángeles y Egipcio: los tres
// tiran en cruz, pero cada uno trae su propia estructura de definiciones
// (fragmentos, bancos). Este archivo solo sabe ARMAR los tres párrafos; el
// contenido lo pone cada oráculo por medio de `FuentesCruz`.
//
// Disposición de la cruz (orden de reparto 1→2→3→4→5):
//        [4]            4 = lo que la persona tiene en la cabeza
//   [1] [2] [3]         1·2·3 = la situación; 2 es el corazón (la más fuerte)
//        [5]            5 = el paso siguiente / futuro inmediato
//
// Forma de la lectura:
//   P1 — abre conectando con lo que se preguntó y planta la situación (1 y 2).
//   P2 — la tensión: cómo tiran 1 y 3 con 2 en el centro.
//   P3 — lo que ocupa la cabeza (4), el paso siguiente (5) y el consejo.
//
// REGLA DE ORO: acá NO se nombran las piezas. Decir "salió tal carta y
// significa tal cosa" convierte la lectura en un glosario; la persona ya ve
// las cartas en pantalla. Lo que se le devuelve es qué dicen sobre SU caso.
// Por eso los bancos trabajan con fragmentos y nunca con nombres.
//
// SEGUNDA REGLA: ninguna frase se repite dentro de una lectura. Antes esto se
// dejaba librado al azar —las piezas 1 y 2 hablan en P1 y otra vez en P2, y se
// confiaba en que el sorteo devolviera otra variante—, y fallaba seguido: si
// una carta cae al último escalón de su fallback tiene UN solo texto posible, y
// entonces la repetición es segura, no probable. Ahora el motor lleva registro
// de lo ya dicho (`usados`) y, cuando una pieza no tiene nada nuevo que aportar,
// se usa una plantilla más corta en vez de repetirla. Ver `Bloques`.
// ─────────────────────────────────────────────────────────────────────────

/**
 * Plantillas para un lugar de la lectura que puede quedarse con menos piezas de
 * las ideales. Cada oráculo escribe las tres formas y el motor elige según
 * cuántos fragmentos NUEVOS consiguió: repetir un texto ya dicho nunca es una
 * opción, así que cuando falta material se acorta la oración.
 */
export interface Bloques {
  /** Con los tres fragmentos: {frag1} {frag2} {frag3}. */
  tres: string[];
  /** Con dos: {fragA} (el que haya) y {frag3}. */
  dos: string[];
  /** Con uno solo: {frag3}. */
  una: string[];
}

/** Igual que `Bloques`, para la situación de P1, que como mucho usa dos. */
export interface BloquesSituacion {
  /** Con los dos: {frag1} {frag2}. */
  dos: string[];
  /** Con uno solo: {frag}. */
  una: string[];
}

// Banco conectivo de un oráculo (el "tejido" entre las piezas). Cada campo trae
// varias variantes para que dos lecturas no suenen iguales.
export interface BancosCruz {
  /**
   * Frase de apertura de P1, según cómo se formuló la pregunta. Puede llevar
   * `{tema}`, que se reemplaza con una de las frases de `temas`.
   */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  /** Cómo se nombra el asunto consultado: "sobre el trabajo", "sobre ese vínculo". */
  temas: Record<Tema, string[]>;
  /**
   * Aperturas que retoman DE QUÉ trata la pregunta, no sólo su tema.
   *
   * "Preguntas si va a volver" dice muchísimo más que "para lo que preguntas
   * sobre el amor", y es lo único que acerca esta lectura a la que escribe la
   * IA: hablarle a la persona de su pregunta y no del oráculo.
   *
   * Es opcional y parcial: si no se detectó intención, o no hay texto escrito
   * para la que se detectó, se usa la apertura común. Nunca se queda sin nada.
   */
  aperturasIntencion?: Partial<Record<Intencion, string[]>>;
  /** Cierre de P1: planta la situación y su centro. */
  situacion: BloquesSituacion;
  /** P2: el tira y afloje, con el centro mandando. */
  tension: Bloques;
  /** Lo que ocupa la cabeza (pieza 4), con {frag}. */
  cabeza: string[];
  /** El paso siguiente (pieza 5), con {frag}. */
  paso: string[];
  /** Consejo de cierre de P3, según modo y tono. */
  consejos: Record<Modo, Record<Tono, string[]>>;
  /** Eco opcional (una sola frase): mención de un tercero. */
  ecoTercero: string[];
  /** Eco opcional por marca temporal fuerte. */
  ecoTiempo: Record<'pasado' | 'futuro', string[]>;
}

// Lo que cada oráculo aporta: cómo nombrar y cómo resolver el texto de una
// pieza tirada (con su propia escalera de fallback), más su banco conectivo.
// `nombre` no lo usa este motor —la lectura no nombra piezas—, pero sí lo usa
// `materialCruz` para armar lo que se le manda a la IA.
export interface FuentesCruz {
  nombre: (p: PiezaTirada) => string;
  // Devuelve una cláusula corta para la pieza en su posición. El motor la llama
  // varias veces buscando variantes distintas, así que conviene que sortee
  // entre todas las que tenga; si sólo tiene una, el motor se da cuenta y no la
  // repite.
  fragmento: (p: PiezaTirada) => string;
  bancos: BancosCruz;
}

function elegir<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

// Sub-pool del tono pedido; si está vacío, cae a 'neutro' (que siempre existe).
function porTono(pool: Record<Tono, string[]>, tono: Tono): string[] {
  const del = pool[tono];
  return del && del.length > 0 ? del : pool.neutro;
}

// Una sola frase de eco (máx.): primero un tercero (lo más personal), si no, la
// marca temporal fuerte. '' cuando no corresponde ninguna.
function elegirEco(analisis: AnalisisPregunta, bancos: BancosCruz): string {
  if (analisis.mencionaTercero && bancos.ecoTercero.length > 0) {
    return elegir(bancos.ecoTercero);
  }
  if (analisis.tiempo !== 'presente') {
    return elegir(bancos.ecoTiempo[analisis.tiempo]);
  }
  return '';
}

/**
 * Arma los tres párrafos de una tirada en cruz. Devuelve [] si no llegan las 5
 * piezas (la pantalla cae entonces al demo). `fuentes` trae todo lo específico
 * del oráculo; este motor no sabe si es Tarot o Ángeles.
 */
export function armarCruz(
  tirada: PiezaTirada[],
  tema: Tema,
  analisis: AnalisisPregunta,
  fuentes: FuentesCruz,
): string[] {
  if (tirada.length < 5) return [];
  const { modo, tono } = analisis;
  const b = fuentes.bancos;
  const { fragmento } = fuentes;
  const [c1, c2, c3, c4, c5] = tirada;

  // Todo lo que se diga en esta lectura pasa por acá. Una vez usado un texto,
  // no vuelve.
  const usados = new Set<string>();
  const nuevo = (p: PiezaTirada) => tomarNuevo(() => fragmento(p), usados);

  // Primera vuelta, en orden de importancia para la lectura: el centro manda,
  // después los brazos, después cabeza y paso. Si dos piezas caen al mismo
  // texto de fallback, la que pierde es la menos importante.
  const f2 = nuevo(c2);
  const f1 = nuevo(c1);
  const f3 = nuevo(c3);
  const f4 = nuevo(c4);
  const f5 = nuevo(c5);

  // ── P1: conecta con la pregunta y planta la situación ────────────────────
  // Si se reconoció de qué trata la pregunta y hay texto escrito para eso, se
  // prefiere: nombrar el asunto ("preguntas si va a volver") pega mucho más
  // que nombrar el tema. Si no, la apertura común.
  const porIntencion = analisis.intencion
    ? b.aperturasIntencion?.[analisis.intencion]
    : undefined;
  const pool =
    porIntencion && porIntencion.length > 0
      ? porIntencion
      : porTono(b.aperturas[modo], tono);

  const apertura = elegir(pool).replace('{tema}', elegir(b.temas[tema]));

  // Con los dos fragmentos se planta la escena entera; con uno, se dice sólo
  // ese; con ninguno, P1 se queda en la apertura.
  let situacion = '';
  if (f1 && f2) {
    situacion = elegir(b.situacion.dos).replace('{frag1}', f1).replace('{frag2}', f2);
  } else if (f2 || f1) {
    situacion = elegir(b.situacion.una).replace('{frag}', (f2 ?? f1) as string);
  }
  const p1 = [apertura, situacion].filter((x) => x.length > 0).join(' ');

  // ── P2: la tensión entre los extremos, con el centro mandando ────────────
  // Las piezas 1 y 2 ya hablaron en P1: acá vuelven, pero SÓLO si tienen otra
  // variante para decir. Si no, la tensión se arma con lo que quede.
  const f1b = f1 ? nuevo(c1) : null;
  const f2b = f2 ? nuevo(c2) : null;
  const suelto = f1b ?? f2b;

  let tension = '';
  if (f1b && f2b && f3) {
    tension = elegir(b.tension.tres)
      .replace('{frag1}', f1b)
      .replace('{frag2}', f2b)
      .replace('{frag3}', f3);
  } else if (suelto && f3) {
    tension = elegir(b.tension.dos).replace('{fragA}', suelto).replace('{frag3}', f3);
  } else if (f3) {
    tension = elegir(b.tension.una).replace('{frag3}', f3);
  } else if (suelto) {
    tension = elegir(b.tension.una).replace('{frag3}', suelto);
  }

  const eco = elegirEco(analisis, b);
  const p2 = [tension, eco].filter((x) => x.length > 0).join(' ');

  // ── P3: la cabeza, el paso siguiente y el consejo ────────────────────────
  // Si una de las dos piezas no tenía texto propio, se cae su oración y el
  // párrafo sigue con las otras. El consejo siempre está.
  const cabeza = f4 ? elegir(b.cabeza).replace('{frag}', f4) : '';
  const paso = f5 ? elegir(b.paso).replace('{frag}', f5) : '';
  const consejo = elegir(porTono(b.consejos[modo], tono));
  const p3 = [cabeza, paso, consejo].filter((x) => x.length > 0).join(' ');

  return sinEcos([p1, p2, p3]);
}
