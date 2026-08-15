import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Posicion } from './pieza';

// Fecha del dispositivo YYYY-MM-DD (hora local), como clave de "dia calendario".
function fechaDeHoy(): string {
  const ahora = new Date();
  const anio = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');
  return `${anio}-${mes}-${dia}`;
}

function clave(oraculoId: string): string {
  return `oraculos:consejoDelDia:${oraculoId}`;
}

export interface ConsejoGuardado {
  piezaId: string;
  posicion: Posicion;
  /**
   * Sorteo del día, para que el consejo no cambie al volver a abrir la pantalla.
   *
   * Los oráculos que tienen varias redacciones por pieza —Runas tiene ocho—
   * elegían una al azar en cada render. La carta quedaba fija todo el día, pero
   * el texto cambiaba si salías y volvías a entrar, justo abajo de un cartel que
   * dice "vuelve mañana". Ahora el número se sortea una vez y se guarda; cada
   * oráculo lo usa como índice (con módulo, así sirve aunque los pools tengan
   * distinto largo en cada idioma).
   *
   * Se guarda el NÚMERO y no el texto a propósito: si la persona cambia de
   * idioma a mitad del día, el consejo se vuelve a resolver en la lengua nueva
   * pero cae en la misma ranura, así que sigue diciendo lo mismo.
   */
  variante: number;
}

interface Registro extends ConsejoGuardado {
  fecha: string;
}

/**
 * Pieza, posicion y variante del consejo de hoy si ya fue elegido, o null si
 * todavia se puede elegir. Anti-atraso de reloj. Por oraculo.
 */
export async function consejoDeHoy(oraculoId: string): Promise<ConsejoGuardado | null> {
  const hoy = fechaDeHoy();
  const guardado = await AsyncStorage.getItem(clave(oraculoId));
  if (guardado) {
    const estado: Registro = JSON.parse(guardado);
    if (estado.fecha === hoy || hoy < estado.fecha) {
      return {
        piezaId: estado.piezaId,
        posicion: estado.posicion ?? 'normal',
        // Los registros guardados antes de que existiera la variante no la
        // traen; con 0 el consejo queda estable igual.
        variante: estado.variante ?? 0,
      };
    }
  }
  return null;
}

/** Sorteo del día. Grande y sin sentido propio: es solo una ranura. */
export function sortearVariante(): number {
  return Math.floor(Math.random() * 1_000_000);
}

/** Fija pieza, posicion y variante del consejo de hoy (quemado hasta manana). */
export async function guardarConsejo(
  oraculoId: string,
  piezaId: string,
  posicion: Posicion,
  variante: number
): Promise<void> {
  await AsyncStorage.setItem(
    clave(oraculoId),
    JSON.stringify({ fecha: fechaDeHoy(), piezaId, posicion, variante })
  );
}
