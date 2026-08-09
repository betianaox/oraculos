import type { CodigoIdioma } from '@/i18n/idiomas';
import type { AnalisisPregunta, Tema, Tono } from '@/pregunta/tipos';
import { paqueteBuzios } from './content/paquete';
import type { BancoBuzios } from './content/es/bancos';
import type { CaidaBuzios } from './tirada';

/**
 * Arma los parrafos de la consulta a partir de la caida.
 *
 * Es una consulta SIMBOLICA de los significados de los odus. NO reproduce el
 * jogo de buzios, que es un ritual sagrado que realizan personas iniciadas.
 *
 * El NUCLEO es determinista y no se toca: el significado del odu y el matiz de
 * la orientacion salen tal cual estan escritos, sin parafrasear ni ampliar. No
 * agregamos interpretacion propia sobre un corpus religioso.
 *
 * Lo que aporta este archivo es el envoltorio: presentar el odu sin formato de
 * ficha, retomar de que trata la pregunta y reconocer lo que la persona conto.
 * Este oraculo NUNCA usa IA, asi que esto es todo lo que va a leer: por eso se
 * aprovecha cada dato del analisis en vez de descartarlo.
 */
export function lecturaBuzios(
  caida: CaidaBuzios,
  tema: Tema,
  analisis: AnalisisPregunta,
  idioma: CodigoIdioma,
): string[] {
  const { odus, banco } = paqueteBuzios(idioma);
  const odu = odus[caida.odu];
  if (!odu) return [];

  const { modo, tono } = analisis;
  const parrafos: string[] = [];

  // Si se reconocio de que trata la pregunta, se prefiere esa apertura: decir
  // "preguntas si vuelve" habla de lo suyo; la comun habla del oraculo.
  const porIntencion = analisis.intencion
    ? banco.aperturasIntencion?.[analisis.intencion]
    : undefined;
  const pool =
    porIntencion && porIntencion.length > 0
      ? porIntencion
      : porTono(banco.aperturas[modo], tono);

  parrafos.push(
    elegir(pool)
      .replace('{tema}', elegir(banco.temas[tema]))
      .replace('{odu}', odu.nombre)
      .replace('{num}', String(caida.abiertos1)),
  );

  parrafos.push(odu.significado[tema]);

  // Una sola frase de eco: primero un tercero (lo mas personal), si no, la
  // marca temporal fuerte.
  const eco = elegirEco(analisis, banco);
  if (eco) parrafos.push(eco);

  parrafos.push(
    elegir(banco.orientaciones[caida.orientacion]).replace(
      '{abiertos}',
      String(caida.abiertos2),
    ),
  );
  parrafos.push(odu.orientacion[caida.orientacion]);
  parrafos.push(elegir(porTono(banco.cierres[modo], tono)));

  return parrafos;
}

function elegirEco(analisis: AnalisisPregunta, banco: BancoBuzios): string {
  if (analisis.mencionaTercero && banco.ecoTercero.length > 0) {
    return elegir(banco.ecoTercero);
  }
  if (analisis.tiempo !== 'presente') return elegir(banco.ecoTiempo[analisis.tiempo]);
  return '';
}

function elegir<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

// Sub-pool del tono pedido; si esta vacio cae a 'neutro', que siempre existe.
function porTono(pool: Record<Tono, string[]>, tono: Tono): string[] {
  const del = pool[tono];
  return del && del.length > 0 ? del : pool.neutro;
}
