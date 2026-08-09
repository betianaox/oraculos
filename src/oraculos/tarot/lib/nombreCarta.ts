import type { CartaMeta, NombresPack } from '../content/types';

// Nombre visible de una carta en el idioma del pack. Prioriza el nombre de la
// ficha Wiki si existe; si no, lo deriva de la estructura para que cualquiera
// de las 78 tenga nombre aunque su ficha no esté escrita todavía.
export function nombreDeCarta(
  meta: CartaMeta,
  nombres: NombresPack,
  nombreFicha?: string,
): string {
  if (nombreFicha) {
    return nombreFicha;
  }
  if (meta.arcano === 'mayor') {
    return nombres.mayores[meta.numero] ?? `Arcano ${meta.numero}`;
  }
  // Menor: "Sota de Copas", "Page of Cups"... El conector lo pone el idioma.
  return nombres.menor(nombres.rangos[meta.rango!], nombres.palos[meta.palo!]);
}
