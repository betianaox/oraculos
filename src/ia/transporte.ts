import { USA_IA } from './config';
import { IADeshabilitada, type MaterialLectura } from './tipos';

// ─────────────────────────────────────────────────────────────────────────
// TRANSPORTE
// ─────────────────────────────────────────────────────────────────────────
// El único archivo que sabe CÓMO se pide la lectura. Cambiar de proveedor o de
// servidor es reescribir esto y nada más.
//
// La app NO habla con Gemini. Le habla a un endpoint propio que guarda la
// clave, porque todo lo que se compila en el APK se puede extraer del binario:
// una clave acá adentro es una clave publicada.
//
// Ese endpoint también arma el prompt. Si el prompt viajara desde acá, el
// servidor sería un generador de texto libre pagado con nuestra cuenta, y
// ningún token lo evitaría: un pedido legítimo también podría llevarlo. Por eso
// desde la app solo salen DATOS: piezas, roles, significados y la pregunta.
// ─────────────────────────────────────────────────────────────────────────

const URL_API = process.env.EXPO_PUBLIC_ORACULO_API_URL;

/**
 * ¿Hay a quién pedirle? Es el único portón: con la IA apagada o sin URL
 * configurada da `false`, y arriba ni siquiera se arma el material.
 */
export function hayProveedor(): boolean {
  return USA_IA && !!URL_API;
}

/**
 * Pide la lectura y devuelve los párrafos, o `null` si el servidor decidió no
 * dar ninguna.
 *
 * El endpoint responde 204 sin cuerpo ante cualquier problema —cuota agotada,
 * límite de uso, respuesta del modelo inservible—, así que acá no hace falta
 * distinguir un caso de otro: todos terminan en el motor propio.
 */
export async function generar(
  material: MaterialLectura,
  senal: AbortSignal,
): Promise<string[] | null> {
  if (!hayProveedor()) throw new IADeshabilitada();

  const respuesta = await fetch(URL_API!, {
    method: 'POST',
    signal: senal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      oraculoId: material.oraculoId,
      pregunta: material.pregunta,
      tema: material.tema,
      idioma: material.idioma,
      analisis: {
        modo: material.analisis.modo,
        tono: material.analisis.tono,
        tiempo: material.analisis.tiempo,
        mencionaTercero: material.analisis.mencionaTercero,
      },
      piezas: material.piezas,
    }),
  });

  // 204 = "no hay lectura", que es una respuesta válida y esperable.
  if (respuesta.status === 204) return null;

  if (!respuesta.ok) {
    throw new Error(`El servidor respondió ${respuesta.status}`);
  }

  const cuerpo = await respuesta.json();
  const parrafos = cuerpo?.parrafos;
  if (!Array.isArray(parrafos) || parrafos.length === 0) return null;
  if (parrafos.some((p: unknown) => typeof p !== 'string')) return null;

  return parrafos as string[];
}
