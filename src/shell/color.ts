/** Convierte un hex (#RRGGBB) a rgba() con el alfa dado. */
export function hexAlfa(hex: string, alfa: number): string {
  const limpio = hex.replace('#', '');
  const r = parseInt(limpio.substring(0, 2), 16);
  const g = parseInt(limpio.substring(2, 4), 16);
  const b = parseInt(limpio.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alfa})`;
}
