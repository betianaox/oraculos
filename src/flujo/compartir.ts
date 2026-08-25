import type { RefObject } from 'react';
import type { View } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 * ───────────────────────────────────────────────────────────────────────────
 * EL NOMBRE DEL ARCHIVO
 * ───────────────────────────────────────────────────────────────────────────
 * `captureRef` deja la foto en un temporal que se llama
 * `ReactNative-snapshot-image8412034.png`, y ese nombre viaja: es el que ve
 * quien la recibe y el que le queda en la galería. Dice de qué librería está
 * hecha la app, que es exactamente lo que no importa.
 *
 * Por eso la foto se muda a un nombre propio antes de mandarla. Y se muda (no
 * se copia) para no dejar dos archivos por cada vez que se comparte.
 *
 * `react-native-view-shot` tiene una opción `fileName`, pero en Android la usa
 * como PREFIJO de `File.createTempFile`, que le pega dígitos al azar atrás:
 * daría `Oraculos-Tarot8412034.png`. Renombrar a mano es lo único que da el
 * nombre exacto.
 */
function nombreDeArchivo(oraculoId: string): string {
  // Sin acentos ni espacios: el nombre pasa por sistemas de archivos, por el
  // menú de compartir y por la app que lo reciba, y cualquiera de los tres
  // puede romperlo. `oraculoId` ya viene en minúsculas y sin espacios.
  const limpio = oraculoId.replace(/[^a-z0-9]/gi, '') || 'lectura';
  return `Oraculos-${limpio}.png`;
}

/**
 * Saca la foto de la tarjeta y abre el menú de compartir del sistema.
 *
 * SE COMPARTE UNA IMAGEN Y NO TEXTO. Lo que se quiere mandar es la caída, y una
 * caída no se cuenta con palabras. Como la imagen ya trae la pregunta, la
 * lectura y la invitación adentro, no hace falta acompañarla con nada: es más,
 * el menú del sistema con una sola imagen deja elegir cualquier destino,
 * mientras que texto + imagen juntos limita a las apps que aceptan las dos.
 *
 * Y NO SE ELIGE LA APP DE DESTINO desde acá. Se abre el menú del sistema y la
 * persona manda la foto adonde quiera: mensajes, redes, o guardarla. Eso además
 * evita el problema de siempre, que es que la app a la que apuntábamos no esté
 * instalada.
 *
 * Devuelve `false` si el dispositivo no sabe compartir (no pasa en Android, pero
 * pasa en un emulador pelado): no es un error y no hay que avisar nada.
 */
export async function compartirTarjeta(
  ref: RefObject<View | null>,
  oraculoId: string,
  titulo: string
): Promise<boolean> {
  if (!ref.current) return false;
  if (!(await Sharing.isAvailableAsync())) return false;

  // PNG y no JPG: el fondo es un degradé oscuro, y el JPG lo ensucia con
  // bandas. Pesa más, pero es una imagen sola que se manda una vez.
  const temporal = await captureRef(ref, { format: 'png', quality: 1 });

  const foto = new File(temporal);
  const destino = new File(Paths.cache, nombreDeArchivo(oraculoId));
  await foto.move(destino, { overwrite: true });

  await Sharing.shareAsync(destino.uri, {
    mimeType: 'image/png',
    dialogTitle: titulo,
    UTI: 'public.png',
  });
  return true;
}
