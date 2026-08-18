/**
 * CUANDO SE PIDE LA VALORACION.
 *
 * La primera vez a las 20 preguntas, y de ahi en adelante cada 400. Los dos
 * numeros salen de la misma idea: pedirla cuando la app ya demostro que sirve,
 * y no volver a molestar en mucho tiempo.
 *
 * 20 no es "temprano": es una persona que ya hizo veinte consultas y volvio
 * varios dias — las gemas se rellenan a diario, asi que veinte preguntas no
 * entran en una sola sesion. Preguntarle a alguien que abrio la app dos veces
 * es pedirle una opinion que todavia no tiene.
 *
 * 400 es, a proposito, un numero al que casi nadie llega. Una app que insiste
 * con las estrellas es una app que se desinstala; esto es una segunda
 * oportunidad para quien la usa muchisimo, no un recordatorio.
 *
 * Google tiene ademas su propia cuota y decide solo si muestra el dialogo, sin
 * avisarle a la app. Por eso el hito se marca como pedido aunque no se haya
 * visto: insistir hasta "acertar" es exactamente lo que vuelve molesta a una
 * app.
 */
export const PRIMERA = 20;
export const CADA = 400;

/** ¿Este numero de preguntas es uno de los hitos? */
export const esHitoDeReview = (n: number): boolean =>
  n === PRIMERA || (n >= CADA && n % CADA === 0);

/**
 * Igual que arriba, pero sin repetir el mismo hito dos veces.
 *
 * `ultimo` es el numero de preguntas en el que se pidio por ultima vez. Sin
 * esto, cerrar y volver a entrar en el mismo hito volveria a pedirla.
 */
export const hayQuePedirReview = (n: number, ultimo: number): boolean =>
  esHitoDeReview(n) && ultimo !== n;
