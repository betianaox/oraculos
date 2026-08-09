import type { CodigoIdioma } from '@/i18n/idiomas';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// CONTRATO DE LA LECTURA POR IA
// ─────────────────────────────────────────────────────────────────────────
// La idea de fondo: la IA no conoce ningún oráculo. Cada oráculo ya sabe
// resolver qué significa cada pieza en su posición (su propia escalera de
// fallback), así que arma el MATERIAL y lo entrega ya masticado. La IA solo
// lo convierte en prosa.
//
// Eso tiene dos consecuencias buenas:
//   1. El contenido vive en un solo lugar (este repo), no duplicado afuera.
//   2. El mismo material alimenta a los dos motores. Si la IA no responde,
//      ese material va al motor de plantillas y sale una lectura igual de
//      válida, solo que con otra voz.
// ─────────────────────────────────────────────────────────────────────────

/** Una pieza de la tirada, ya resuelta por su oráculo. */
export interface PiezaMaterial {
  /** Nombre visible: "El Loco", "Miguel", "Fehu". */
  nombre: string;
  /**
   * Qué representa esta posición, en palabras. Lo escribe cada oráculo, para
   * que la IA no tenga que saber cómo tira cada uno. Ej: "el corazón de la
   * tirada", "el paso siguiente".
   */
  rol: string;
  invertida: boolean;
  /** El significado ya resuelto para esta pieza en esta posición y tema. */
  significado: string;
}

/** Todo lo que hace falta para redactar una lectura, sin saber de oráculos. */
export interface MaterialLectura {
  oraculoId: string;
  /** La pregunta tal como la escribió la persona. */
  pregunta: string;
  tema: Tema;
  analisis: AnalisisPregunta;
  piezas: PiezaMaterial[];
  idioma: CodigoIdioma;
}

/**
 * La IA está apagada mientras no haya a dónde pedirle. No es un error: es el
 * estado normal en un build sin configurar, y el motor propio responde igual.
 */
export class IADeshabilitada extends Error {
  constructor() {
    super('No hay proveedor de IA configurado');
    this.name = 'IADeshabilitada';
  }
}
