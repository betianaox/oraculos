// ─────────────────────────────────────────────────────────────────────────
// Garantía de no repetición, compartida por todos los motores de lectura.
//
// Por qué existe: se probó la app con gente y volvió que algunas lecturas
// repetían oraciones —en un caso, la misma tres veces—. La causa era estructural
// y no de contenido: los motores piden varias veces un fragmento a la misma
// pieza y confiaban en que el sorteo devolviera una variante distinta. Cuando
// una pieza cae al último escalón de su fallback tiene UN solo texto posible, y
// entonces la repetición no es improbable: es segura.
//
// La regla ahora es que ningún texto se dice dos veces en la misma lectura, y se
// cumple por construcción. Cuando no hay material nuevo, el motor acorta la
// oración; nunca repite.
// ─────────────────────────────────────────────────────────────────────────

/**
 * Clave de comparación: dos textos que sólo difieren en mayúsculas, acentos o
 * puntuación cuentan como el mismo. Es a propósito estricto —preferimos acortar
 * una lectura de más que dejar pasar un eco.
 */
export function clave(texto: string): string {
  return texto
    .toLowerCase()
    .replace(/[áàä]/g, 'a')
    .replace(/[éèë]/g, 'e')
    .replace(/[íìï]/g, 'i')
    .replace(/[óòö]/g, 'o')
    .replace(/[úùü]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Cuántas veces se le pide a un oráculo una variante antes de dar por hecho que
// no tiene ninguna nueva. Los pools reales van de 1 a 4 textos: con 12 tiros, si
// existe una variante libre, sale.
const INTENTOS = 12;

/**
 * Pide un texto que todavía no se haya dicho en esta lectura, sorteando hasta
 * `INTENTOS` veces. `null` si no hay nada nuevo que aportar (pool de un solo
 * texto ya usado, o dos piezas distintas que caen al mismo escalón de
 * fallback). Quien llama tiene que saber seguir sin ese texto: nunca se
 * devuelve un repetido.
 */
export function tomarNuevo(sortear: () => string, usados: Set<string>): string | null {
  for (let i = 0; i < INTENTOS; i++) {
    const texto = sortear();
    if (!texto) return null;
    const k = clave(texto);
    if (!usados.has(k)) {
      usados.add(k);
      return texto;
    }
  }
  return null;
}

// Corta un párrafo en oraciones sin perder nada: cada trozo se queda con su
// signo de cierre. (Sin lookbehind, que en Hermes no conviene dar por sentado.)
function oraciones(parrafo: string): string[] {
  return parrafo.match(/[^.!?]+[.!?]*/g) ?? [parrafo];
}

/**
 * Red de seguridad final: saca cualquier oración que ya haya aparecido antes en
 * la lectura. Los motores ya evitan repetir FRAGMENTOS; esto cubre el caso de
 * que dos bancos distintos —una apertura y un consejo, por ejemplo— terminen
 * diciendo lo mismo. Si un párrafo queda vacío, se descarta.
 */
export function sinEcos(parrafos: string[]): string[] {
  const vistas = new Set<string>();
  return parrafos
    .map((parrafo) =>
      oraciones(parrafo)
        .filter((oracion) => {
          const k = clave(oracion);
          if (k.length === 0) return false;
          if (vistas.has(k)) return false;
          vistas.add(k);
          return true;
        })
        .map((oracion) => oracion.trim())
        .join(' '),
    )
    .filter((parrafo) => parrafo.length > 0);
}
