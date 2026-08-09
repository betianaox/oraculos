import type { AnalisisPregunta, Modo, Tema, Tono } from '@/pregunta/tipos';
import { HEXAGRAMAS_ES } from './content/es/hexagramas';
import { BANCO_ICHING_ES, ORDINALES } from './content/es/bancos';
import { numeroDeLineas } from './secuencia';
import type { TiradaIching } from './tirada';

/**
 * Arma los parrafos de la lectura a partir de la tirada.
 *
 * El NUCLEO es determinista y asi debe ser: sale un hexagrama y ese hexagrama
 * dice lo que dice. El dictamen, el significado por tema y los textos de las
 * lineas son contenido canonico y no se tocan ni se parafrasean: no agregamos
 * interpretacion propia sobre un corpus con siglos de comentario encima.
 *
 * Lo que si varia es el envoltorio —como se presenta y como se conecta con lo
 * que la persona pregunto—, para que no suene a ficha de enciclopedia.
 *
 * Estructura tradicional, que se respeta:
 *   hexagrama principal -> lineas en movimiento -> hexagrama resultante.
 */
export function lecturaIching(
  tirada: TiradaIching,
  tema: Tema,
  analisis: AnalisisPregunta,
): string[] {
  const b = BANCO_ICHING_ES;
  const { modo, tono } = analisis;
  const parrafos: string[] = [];

  const numPrim = numeroDeLineas(tirada.lineas);
  const hexPrim = HEXAGRAMAS_ES[numPrim];

  // Hoy los 64 estan escritos, asi que esto no deberia pasar nunca. Es una red
  // por si un error de contenido deja un hueco: mejor decirlo con honestidad
  // que tirar la pantalla entera.
  if (!hexPrim) {
    return [
      `Tu consulta responde con el hexagrama ${numPrim}, cuyo texto todavia no ` +
        `esta disponible.`,
    ];
  }

  // Sin ficha del hexagrama: se presenta dentro de una frase que ya esta
  // hablando de la consulta.
  // Si se reconocio de que trata la pregunta, se prefiere esa apertura: decir
  // "preguntas si vuelve" habla de lo suyo; la comun habla del oraculo.
  const porIntencion = analisis.intencion
    ? b.aperturasIntencion?.[analisis.intencion]
    : undefined;
  const poolApertura =
    porIntencion && porIntencion.length > 0
      ? porIntencion
      : porTono(b.aperturas[modo], tono);

  parrafos.push(
    elegir(poolApertura)
      .replace('{tema}', elegir(b.temas[tema]))
      .replace('{hex}', hexPrim.nombre)
      .replace('{num}', String(hexPrim.numero)),
  );

  parrafos.push(hexPrim.dictamen);

  // Una frase de eco: primero un tercero (lo mas personal), si no, la marca
  // temporal fuerte.
  const eco = analisis.mencionaTercero
    ? elegir(b.ecoTercero)
    : analisis.tiempo !== 'presente'
      ? elegir(b.ecoTiempo[analisis.tiempo])
      : '';
  if (eco) parrafos.push(eco);
  parrafos.push(hexPrim.significado[tema]);

  const posicionesCambio = tirada.cambiantes
    .map((c, i) => (c ? i : -1))
    .filter((i) => i >= 0);

  if (posicionesCambio.length > 0) {
    parrafos.push(elegir(b.transicionLineas));
    // Las plantillas rotan para que varias lineas seguidas no arranquen igual.
    const formas = mezclar(b.lineaSuelta);
    posicionesCambio.forEach((i, orden) => {
      // i es 0-based abajo->arriba; lineasCambiantes esta en orden de posicion.
      parrafos.push(
        formas[orden % formas.length]
          .replace('{pos}', ORDINALES[i])
          .replace('{texto}', hexPrim.lineasCambiantes[i].texto),
      );
    });
  }

  if (tirada.resultante) {
    const numRes = numeroDeLineas(tirada.resultante);
    const hexRes = HEXAGRAMAS_ES[numRes];
    if (hexRes) {
      parrafos.push(
        elegir(b.haciaResultante)
          .replace('{hex}', hexRes.nombre)
          .replace('{num}', String(hexRes.numero)),
      );
      parrafos.push(hexRes.significado[tema]);
    }
  } else {
    parrafos.push(elegir(b.sinCambios));
  }

  parrafos.push(elegir(porTono(b.cierres[modo], tono)));

  return parrafos;
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

// Sub-pool del tono pedido; si esta vacio cae a 'neutro', que siempre existe.
function porTono(pool: Record<Tono, string[]>, tono: Tono): string[] {
  const del = pool[tono];
  return del && del.length > 0 ? del : pool.neutro;
}
