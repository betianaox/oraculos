import type { PiezaTirada } from './pieza';
import type { AnalisisPregunta, Intencion, Modo, Tema, Tono } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// Motor COMPARTIDO de la cruz de 5. Lo usan Tarot, Ángeles y —cuando llegue—
// Egipcio: los tres tiran en cruz, pero cada uno trae su propia estructura de
// definiciones (fragmentos, bancos). Este archivo solo sabe ARMAR los tres
// párrafos; el contenido lo pone cada oráculo por medio de `FuentesCruz`.
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
// ─────────────────────────────────────────────────────────────────────────

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
  /** Cierre de P1 con {frag1} y {frag2}: planta la situación y su centro. */
  situacion: string[];
  /** P2 con {frag1}{frag2}{frag3}: el tira y afloje, con el centro mandando. */
  tension: string[];
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
  // Devuelve una cláusula corta para la pieza en su posición. Se llama más de
  // una vez por pieza: si hay varias variantes, conviene que rote, para que la
  // misma carta no repita la misma frase dentro de la lectura.
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
  const situacion = elegir(b.situacion)
    .replace('{frag1}', fragmento(c1))
    .replace('{frag2}', fragmento(c2));
  const p1 = `${apertura} ${situacion}`;

  // ── P2: la tensión entre los extremos, con el centro mandando ────────────
  const tension = elegir(b.tension)
    .replace('{frag1}', fragmento(c1))
    .replace('{frag2}', fragmento(c2))
    .replace('{frag3}', fragmento(c3));
  const eco = elegirEco(analisis, b);
  const p2 = [tension, eco].filter((x) => x.length > 0).join(' ');

  // ── P3: la cabeza, el paso siguiente y el consejo ────────────────────────
  const cabeza = elegir(b.cabeza).replace('{frag}', fragmento(c4));
  const paso = elegir(b.paso).replace('{frag}', fragmento(c5));
  const consejo = elegir(porTono(b.consejos[modo], tono));
  const p3 = `${cabeza} ${paso} ${consejo}`;

  return [p1, p2, p3];
}
