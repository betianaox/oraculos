import type { ContenidoOraculo } from '@/flujo/contenido';
import type { Pieza } from '@/flujo/pieza';
import type { Molde, Opcion, Pregunta } from './tipos';

/** Una pieza lista para preguntar, con lo que hace falta ya resuelto. */
export interface PiezaQuiz {
  pieza: Pieza;
  /** De que bloque de la wiki viene. Se usa para elegir distractores creibles. */
  seccionId: string;
  nombre: string;
  claves: string[];
  /** Su arte deja ver cual es, asi que no se pregunta "cual es esta?". */
  arteDelata: boolean;
}

/** Enunciados, ya traducidos. El generador no sabe de idiomas. */
export interface TextosQuiz {
  imagenANombre: string;
  nombreAClave: string;
  claveANombre: string;
}

const OPCIONES = 4;

/**
 * Junta todas las piezas del oraculo que tienen datos para preguntar. Se arma
 * una vez por partida: recorrer las 78 cartas en cada pregunta seria tirar
 * trabajo a la basura.
 */
export function armarMazoQuiz(contenido: ContenidoOraculo): PiezaQuiz[] {
  if (!contenido.quiz) return [];

  const mazo: PiezaQuiz[] = [];
  for (const seccion of contenido.secciones) {
    for (const pieza of seccion.piezas) {
      const datos = contenido.quiz(pieza);
      if (!datos || datos.claves.length === 0) continue;
      mazo.push({
        pieza,
        seccionId: seccion.id,
        nombre: contenido.nombre(pieza),
        claves: datos.claves,
        arteDelata: contenido.quizArteDelata === true,
      });
    }
  }
  return mazo;
}

/**
 * Arma una pregunta. `usadas` trae los ids de las piezas que ya salieron en
 * esta partida, para no repetir mientras quede material sin usar.
 *
 * Devuelve null si el oraculo no tiene piezas suficientes para armar opciones.
 */
export function generarPregunta(
  mazo: PiezaQuiz[],
  textos: TextosQuiz,
  usadas: Set<string>,
): Pregunta | null {
  if (mazo.length < OPCIONES) return null;

  const disponibles = mazo.filter((p) => !usadas.has(p.pieza.id));
  // Si ya se pregunto por todas, se vuelve a empezar: es preferible repetir a
  // cortar la partida de alguien que viene con una racha larga.
  const candidatas = disponibles.length > 0 ? disponibles : mazo;
  const correcta = elegir(candidatas);

  const molde = elegirMolde(correcta);
  const distractores = elegirDistractores(mazo, correcta, molde);
  if (distractores.length < OPCIONES - 1) return null;

  switch (molde) {
    case 'imagenANombre':
      return {
        molde,
        pieza: correcta.pieza,
        enunciado: textos.imagenANombre,
        conImagen: true,
        opciones: mezclar([
          { texto: correcta.nombre, correcta: true },
          ...distractores.map((d) => ({ texto: d.nombre, correcta: false })),
        ]),
      };

    case 'nombreAClave':
      return {
        molde,
        pieza: correcta.pieza,
        enunciado: textos.nombreAClave,
        destacado: correcta.nombre,
        // Con imagen Y nombre: se pregunta por el significado, asi que mostrar
        // la pieza no regala nada y ademas ensena a asociar arte con nombre.
        conImagen: tieneArte(correcta),
        opciones: mezclar([
          { texto: resumirClaves(correcta.claves), correcta: true },
          ...distractores.map((d) => ({ texto: resumirClaves(d.claves), correcta: false })),
        ]),
      };

    case 'claveANombre': {
      // La clave elegida no puede pertenecer tambien a un distractor, o la
      // pregunta tendria dos respuestas validas.
      const clave = correcta.claves.find(
        (c) => !distractores.some((d) => tieneClave(d, c)),
      );
      if (!clave) return null;

      return {
        molde,
        pieza: correcta.pieza,
        enunciado: textos.claveANombre,
        destacado: clave,
        conImagen: false,
        opciones: mezclar([
          { texto: correcta.nombre, correcta: true },
          ...distractores.map((d) => ({ texto: d.nombre, correcta: false })),
        ]),
      };
    }
  }
}

/**
 * Tiene algo que mostrar: una imagen, o un dibujo propio (el I Ching traza sus
 * hexagramas y Buzios su marca de odu; no son archivos, se dibujan).
 */
function tieneArte(pieza: PiezaQuiz): boolean {
  return pieza.pieza.imagen != null || pieza.pieza.dibujo != null;
}

/**
 * Solo se pregunta "que pieza es esta" si hay algo que mirar Y si mirarlo no da
 * la respuesta servida.
 */
function elegirMolde(pieza: PiezaQuiz): Molde {
  const posibles: Molde[] = ['nombreAClave', 'claveANombre'];
  if (tieneArte(pieza) && !pieza.arteDelata) posibles.push('imagenANombre');
  return elegir(posibles);
}

/**
 * Tres piezas distintas de la correcta. Se prefieren las del mismo bloque —el
 * mismo palo, la misma serie— porque si no las opciones se descartan solas:
 * entre tres copas y un arcano mayor, el mayor canta.
 */
function elegirDistractores(
  mazo: PiezaQuiz[],
  correcta: PiezaQuiz,
  molde: Molde,
): PiezaQuiz[] {
  const otras = mazo.filter((p) => p.pieza.id !== correcta.pieza.id);

  // En las preguntas de clave, dos piezas con las mismas palabras clave darian
  // dos opciones identicas en pantalla.
  const validas =
    molde === 'nombreAClave'
      ? otras.filter((p) => resumirClaves(p.claves) !== resumirClaves(correcta.claves))
      : otras.filter((p) => p.nombre !== correcta.nombre);

  const mismoBloque = mezclar(validas.filter((p) => p.seccionId === correcta.seccionId));
  const resto = mezclar(validas.filter((p) => p.seccionId !== correcta.seccionId));

  return [...mismoBloque, ...resto].slice(0, OPCIONES - 1);
}

/** Dos o tres palabras clave alcanzan: la lista entera no entra en un boton. */
function resumirClaves(claves: string[]): string {
  return claves.slice(0, 3).join(' · ');
}

function tieneClave(pieza: PiezaQuiz, clave: string): boolean {
  return pieza.claves.some((c) => c.toLowerCase() === clave.toLowerCase());
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

export type { Opcion };
