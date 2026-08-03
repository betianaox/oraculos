import type { PiezaTirada } from './pieza';
import type { AnalisisPregunta, Modo, Tono } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// Motor COMPARTIDO de la cruz de 5. Lo usan Tarot, Ángeles y —cuando llegue—
// Egipcio: los tres tiran en cruz, pero cada uno trae su propia estructura de
// definiciones (nombres, fragmentos, bancos). Este archivo solo sabe ARMAR los
// tres párrafos; el contenido lo pone cada oráculo por medio de `FuentesCruz`.
//
// Disposición de la cruz (orden de reparto 1→2→3→4→5):
//        [4]            4 = lo que la persona tiene en la cabeza
//   [1] [2] [3]         1·2·3 = la situación; 2 es el corazón (la más fuerte)
//        [5]            5 = el paso siguiente / futuro inmediato
//
// Forma de la lectura (acordada con la usuaria):
//   P1 — nombra las tres del renglón y da algo de su significado (2 al centro).
//   P2 — integra esas tres SIN nombrarlas, entrelazando significados.
//   P3 — suma la 4 (la cabeza) y la 5 (el paso siguiente), y cierra con consejo.
// ─────────────────────────────────────────────────────────────────────────

// Banco conectivo de un oráculo (el "tejido" entre las cartas). Cada campo trae
// varias variantes para que dos lecturas no suenen iguales.
export interface BancosCruz {
  /** Frase de apertura de P1, según cómo se formuló la pregunta. Oración completa. */
  aperturas: Record<Modo, Record<Tono, string[]>>;
  /** Cómo se marca la carta central en P1 (ej. "en el corazón de la tirada"). */
  centro: string[];
  /** Verbo que une nombre y fragmento en P1: "{nombre} {verbo} {frag}". */
  verbos: string[];
  /** Plantillas de P2 con {frag1}{frag2}{frag3}; entrelazan sin nombrar cartas. */
  conectores: string[];
  /** Plantillas para la carta 4 (cabeza), con {nombre} y {frag}. */
  cabeza: string[];
  /** Plantillas para la carta 5 (paso siguiente), con {nombre} y {frag}. */
  paso: string[];
  /** Consejo de cierre de P3, según modo y tono. */
  consejos: Record<Modo, Record<Tono, string[]>>;
  /** Eco opcional (una sola frase): mención de un tercero. */
  ecoTercero: string[];
  /** Eco opcional por marca temporal fuerte. */
  ecoTiempo: Record<'pasado' | 'futuro', string[]>;
}

// Lo que cada oráculo aporta al motor: cómo nombrar y cómo resolver el texto de
// una carta tirada (con su propia escalera de fallback), más su banco conectivo.
export interface FuentesCruz {
  nombre: (p: PiezaTirada) => string;
  // Devuelve una cláusula corta para la carta en su posición. Se llama más de
  // una vez por carta (P1 y P2): si hay varias variantes, conviene que rote,
  // para que el mismo naipe no repita la misma frase.
  fragmento: (p: PiezaTirada) => string;
  bancos: BancosCruz;
}

function elegir<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

function mezclar<T>(lista: readonly T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
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
 * cartas (la pantalla cae entonces al demo). `fuentes` trae todo lo específico
 * del oráculo; este motor no sabe si es Tarot o Ángeles.
 */
export function armarCruz(
  tirada: PiezaTirada[],
  analisis: AnalisisPregunta,
  fuentes: FuentesCruz,
): string[] {
  if (tirada.length < 5) return [];
  const { modo, tono } = analisis;
  const b = fuentes.bancos;
  const { nombre, fragmento } = fuentes;
  const [c1, c2, c3, c4, c5] = tirada;

  // ── P1: nombra el renglón (2 al centro) ──────────────────────────────────
  const verbos = mezclar(b.verbos);
  const apertura = elegir(porTono(b.aperturas[modo], tono));
  const centro = elegir(b.centro);
  const p1 =
    `${apertura} ${nombre(c1)} ${verbos[0]} ${fragmento(c1)}; ` +
    `${centro}, ${nombre(c2)} ${verbos[1] ?? verbos[0]} ${fragmento(c2)}; ` +
    `y ${nombre(c3)} ${verbos[2] ?? verbos[0]} ${fragmento(c3)}.`;

  // ── P2: integra el renglón sin nombrar ───────────────────────────────────
  const conector = elegir(b.conectores)
    .replace('{frag1}', fragmento(c1))
    .replace('{frag2}', fragmento(c2))
    .replace('{frag3}', fragmento(c3));
  const eco = elegirEco(analisis, b);
  const p2 = [conector, eco].filter((x) => x.length > 0).join(' ');

  // ── P3: la cabeza (4), el paso siguiente (5) y el consejo ────────────────
  const cabeza = elegir(b.cabeza)
    .replace('{nombre}', nombre(c4))
    .replace('{frag}', fragmento(c4));
  const paso = elegir(b.paso)
    .replace('{nombre}', nombre(c5))
    .replace('{frag}', fragmento(c5));
  const consejo = elegir(porTono(b.consejos[modo], tono));
  const p3 = `${cabeza} ${paso} ${consejo}`;

  return [p1, p2, p3];
}
