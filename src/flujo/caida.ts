import type { ReactNode } from 'react';

/**
 * ───────────────────────────────────────────────────────────────────────────
 * LA CAIDA, PARA PODER COMPARTIRLA
 * ───────────────────────────────────────────────────────────────────────────
 * La tarjeta que se comparte muestra la caida (la cruz de cartas, las runas,
 * los cauries, el hexagrama) y esa caida se arma en la pantalla de tirada, que
 * ya no existe cuando se llega a Lectura.
 *
 * NO VIAJA COMO PARAMETRO DE NAVEGACION, y no es por comodidad: React
 * Navigation exige params serializables, y una `Pieza` del I Ching trae una
 * funcion `dibujo` que traza el hexagrama con Views. Meterla en los params
 * dispara la advertencia de estado no serializable y rompe la restauracion del
 * stack.
 *
 * Y TAMPOCO VIAJAN LOS DATOS, viaja el DIBUJO. Los tres oraculos con tirada
 * propia dibujan cosas que no tienen nada que ver entre si —cinco cartas en
 * cruz, dieciseis cauries repartidos en un circulo sin pisarse, seis lineas de
 * un hexagrama—, asi que un tipo de dato comun seria la union de tres cosas
 * distintas y la tarjeta tendria que saber dibujar las tres. En vez de eso cada
 * pantalla de tirada deja registrado como se dibuja LA SUYA, a un tamano que le
 * pasan, y la tarjeta solo la invoca.
 *
 * La funcion que se guarda tiene que ser estatica: sin animaciones, sin estado
 * y sin toques. Se la llama despues de que su pantalla se desmonto, con la
 * caida ya terminada; una animacion ahi no tendria quien la corra y saldria
 * congelada a mitad de camino en la foto.
 */
export type DibujarCaida = (medidas: { ancho: number; alto: number }) => ReactNode;

interface Registro {
  oraculoId: string;
  pregunta: string;
  dibujar: DibujarCaida;
}

let actual: Registro | null = null;

/**
 * La pantalla de tirada deja acá cómo dibujar lo que salió, junto con de qué
 * consulta es.
 */
export function guardarCaida(oraculoId: string, pregunta: string, dibujar: DibujarCaida): void {
  actual = { oraculoId, pregunta, dibujar };
}

/**
 * Cómo dibujar la caída DE ESTA CONSULTA, o `null` si la guardada es de otra.
 *
 * VA ATADA A SU CONSULTA A PROPOSITO. Si Android mató la app en segundo plano y
 * al volver restauró la pantalla de Lectura, acá puede no haber nada —y
 * entonces no se ofrece compartir— pero también puede haber quedado la caída de
 * una consulta anterior. Ese segundo caso es el peligroso: sin comparar, la
 * tarjeta mostraría una tirada que no es la que se está leyendo, y saldría
 * perfecta, sin ningún síntoma de estar mal. Comparando, en el peor caso no se
 * puede compartir; que es lo que corresponde, porque el dibujo no está.
 */
export function caidaActual(oraculoId: string, pregunta: string): DibujarCaida | null {
  if (!actual || actual.oraculoId !== oraculoId || actual.pregunta !== pregunta) return null;
  return actual.dibujar;
}
