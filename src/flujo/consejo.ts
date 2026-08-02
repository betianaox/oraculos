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
}

interface Registro extends ConsejoGuardado {
  fecha: string;
}

/**
 * Pieza (y posicion) del consejo de hoy si ya fue elegida, o null si todavia se
 * puede elegir. Anti-atraso de reloj. Por oraculo.
 */
export async function consejoDeHoy(oraculoId: string): Promise<ConsejoGuardado | null> {
  const hoy = fechaDeHoy();
  const guardado = await AsyncStorage.getItem(clave(oraculoId));
  if (guardado) {
    const estado: Registro = JSON.parse(guardado);
    if (estado.fecha === hoy || hoy < estado.fecha) {
      return { piezaId: estado.piezaId, posicion: estado.posicion ?? 'normal' };
    }
  }
  return null;
}

/** Fija la pieza (y posicion) del consejo de hoy (quemada hasta manana). */
export async function guardarConsejo(
  oraculoId: string,
  piezaId: string,
  posicion: Posicion
): Promise<void> {
  await AsyncStorage.setItem(
    clave(oraculoId),
    JSON.stringify({ fecha: fechaDeHoy(), piezaId, posicion })
  );
}
