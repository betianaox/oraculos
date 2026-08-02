import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface Guardado {
  fecha: string;
  piezaId: string;
}

/**
 * Pieza del consejo de hoy si ya fue elegida (quemada), o null si todavia se
 * puede elegir. Anti-atraso de reloj: si el reloj retrocedio, sigue contando
 * como el mismo dia ya guardado. Por oraculo (cada uno tiene su consejo).
 */
export async function consejoDeHoy(oraculoId: string): Promise<string | null> {
  const hoy = fechaDeHoy();
  const guardado = await AsyncStorage.getItem(clave(oraculoId));
  if (guardado) {
    const estado: Guardado = JSON.parse(guardado);
    if (estado.fecha === hoy || hoy < estado.fecha) {
      return estado.piezaId;
    }
  }
  return null;
}

/** Fija la pieza elegida como el consejo de hoy (queda quemada hasta manana). */
export async function guardarConsejo(oraculoId: string, piezaId: string): Promise<void> {
  await AsyncStorage.setItem(clave(oraculoId), JSON.stringify({ fecha: fechaDeHoy(), piezaId }));
}
