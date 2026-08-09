import type { AnalisisPregunta, Modo, Tema, Tono } from '@/pregunta/tipos';
import { ODUS_ES } from './content/es/odus';
import { BANCO_BUZIOS_ES } from './content/es/bancos';
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
 * Lo unico que aporta este archivo es el envoltorio: presentar el odu sin
 * formato de ficha y conectar la lectura con como se formulo la pregunta.
 */
export function lecturaBuzios(
  caida: CaidaBuzios,
  tema: Tema,
  analisis: AnalisisPregunta,
): string[] {
  const odu = ODUS_ES[caida.odu];
  if (!odu) return [];

  const b = BANCO_BUZIOS_ES;
  const { modo, tono } = analisis;
  const parrafos: string[] = [];

  parrafos.push(
    elegir(porTono(b.aperturas[modo], tono))
      .replace('{tema}', elegir(b.temas[tema]))
      .replace('{odu}', odu.nombre)
      .replace('{num}', String(caida.abiertos1)),
  );

  parrafos.push(odu.significado[tema]);

  parrafos.push(
    elegir(b.orientaciones[caida.orientacion]).replace(
      '{abiertos}',
      String(caida.abiertos2),
    ),
  );
  parrafos.push(odu.orientacion[caida.orientacion]);

  parrafos.push(elegir(porTono(b.cierres[modo], tono)));

  return parrafos;
}

function elegir<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

// Sub-pool del tono pedido; si esta vacio cae a 'neutro', que siempre existe.
function porTono(pool: Record<Tono, string[]>, tono: Tono): string[] {
  const del = pool[tono];
  return del && del.length > 0 ? del : pool.neutro;
}
