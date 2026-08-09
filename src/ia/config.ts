/**
 * ─────────────────────────────────────────────────────────────────────────
 * INTERRUPTOR GENERAL DE LA IA
 * ─────────────────────────────────────────────────────────────────────────
 * Ponerlo en `false` apaga la IA por completo: no se pide nada, no se arma
 * material y todos los oráculos responden con su motor propio. La app sigue
 * funcionando igual, solo cambia quién redacta.
 *
 * Está pensado para dos momentos:
 *   • Probar el motor propio sin tocar más nada.
 *   • Un deploy de urgencia si la IA falla, se vuelve cara o hay que sacarla
 *     rápido por lo que sea. Se cambia esta línea y listo.
 *
 * También se puede forzar desde el entorno, sin tocar el código, poniendo
 * EXPO_PUBLIC_USA_IA=false en el .env.local. El código manda: si acá dice
 * `false`, la variable de entorno no lo puede volver a encender.
 *
 * Ojo que esto no es lo único que hace falta: sin EXPO_PUBLIC_ORACULO_API_URL
 * no hay a quién pedirle, y la IA queda apagada aunque este interruptor esté
 * en `true`.
 */
const ENCENDIDA = true;

export const USA_IA =
  ENCENDIDA && process.env.EXPO_PUBLIC_USA_IA !== 'false';
