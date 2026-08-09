import { obtenerContenido } from './content';
import type { IdiomaConcreto } from './content/paquete';
import type { Modo, Posicion, RunaId, Tema, Tono } from './content/types';
import type { AnalisisPregunta } from '@/pregunta/tipos';

export interface RunaTirada {
  id: RunaId;
  posicion: Posicion;
}

function elegirAlAzar<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

// Elige del sub-pool del tono pedido; si está vacío o no existe, cae a 'neutro'.
// 'neutro' siempre tiene contenido, así que esto nunca devuelve una lista vacía
// mientras el pool base exista.
function porTono(pool: Record<Tono, string[]>, tono: Tono): string[] {
  const delTono = pool[tono];
  return delTono && delTono.length > 0 ? delTono : pool.neutro;
}


// Frase de eco opcional (máximo una): prioriza la mención de un tercero por
// ser lo más personal; si no hay, usa la marca temporal fuerte. '' si no
// corresponde ninguna.
function elegirEco(
  analisis: AnalisisPregunta,
  ecoTercero: string[],
  ecoTiempo: Record<'pasado' | 'futuro', string[]>,
): string {
  if (analisis.mencionaTercero) {
    return elegirAlAzar(ecoTercero);
  }
  if (analisis.tiempo !== 'presente') {
    return elegirAlAzar(ecoTiempo[analisis.tiempo]);
  }
  return '';
}

export interface Lectura {
  tema: Tema;
  modo: Modo;
  runas: [RunaTirada, RunaTirada, RunaTirada];
  parrafoIndividual: string;
  parrafoIntegrador: string;
}

// null = todavía no hay contenido escrito para ese tema.
// El `tema` sale del chip (qué banco de significados usar); el `analisis`
// aporta cómo la persona formuló la pregunta (modo/tono/tiempo/tercero), que
// es lo que dirige qué apertura, consejo y eco la acompañan; el `idioma`
// decide de qué paquete de contenido salen todas las piezas.
export function armarLectura(
  runas: [RunaTirada, RunaTirada, RunaTirada],
  tema: Tema,
  analisis: AnalisisPregunta,
  idioma: IdiomaConcreto,
): Lectura | null {
  const { modo, tono } = analisis;
  const contenido = obtenerContenido(idioma);
  const fragmentosDelTema = contenido.fragmentos[tema];
  const poolAperturas =
    modo === 'abierta' ? contenido.aperturasAbiertas[tema] : contenido.aperturasCerradas;
  const poolConsejos = contenido.consejos[tema]?.[modo];

  if (!fragmentosDelTema || !poolAperturas || !poolConsejos) {
    return null;
  }

  const aperturasDisponibles = porTono(poolAperturas, tono);
  const consejosDisponibles = porTono(poolConsejos, tono);

  // Una variante por runa: cada una aporta a un solo lugar de la lectura, así
  // que ya no hace falta elegir dos textos distintos para la misma runa.
  const frags = runas.map((runa) =>
    elegirAlAzar(fragmentosDelTema[runa.id][runa.posicion]),
  ) as [string, string, string];

  // P1: la apertura conecta con la pregunta y las dos primeras runas plantan
  // la situación. Sin nombrarlas.
  //
  // Si se reconoció de qué trata la pregunta y hay texto escrito para eso, se
  // prefiere: nombrar el asunto ("preguntas si va a volver") pega mucho más
  // que nombrar el tema. Si no, la apertura común de siempre.
  const porIntencion = analisis.intencion
    ? contenido.aperturasIntencion?.[analisis.intencion]
    : undefined;
  const apertura = elegirAlAzar(
    porIntencion && porIntencion.length > 0 ? porIntencion : aperturasDisponibles,
  );
  const situacion = elegirAlAzar(contenido.situacion)
    .replace('{frag1}', frags[0])
    .replace('{frag2}', frags[1]);
  const parrafoIndividual = [apertura, situacion].filter((p) => p.length > 0).join(' ');

  // P2: el eco personal, la tercera runa mirando hacia adelante y el consejo.
  const eco = elegirEco(analisis, contenido.ecoTercero, contenido.ecoTiempo);
  const cierre = elegirAlAzar(contenido.cierre).replace('{frag3}', frags[2]);
  const consejo = elegirAlAzar(consejosDisponibles);
  const parrafoIntegrador = [eco, cierre, consejo]
    .filter((parte) => parte.length > 0)
    .join(' ');

  return {
    tema,
    modo,
    runas,
    parrafoIndividual,
    parrafoIntegrador,
  };
}
