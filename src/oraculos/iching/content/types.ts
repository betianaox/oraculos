// MOLDE del I Ching. Un hexagrama NO es una pieza que se roba de un mazo: se
// arma con 6 lineas binarias que salen de tirar 3 monedas seis veces. Por eso
// este oraculo no usa el tipo `Pieza` para tirar (si lo usa, mas adelante, para
// listar los 64 en la wiki). El contenido canonico de cada hexagrama vive aca.

// Una linea vale yin o yang. Uso 0/1 en vez de strings para que el patron de un
// hexagrama sea un numero binario legible y facil de derivar en trigramas.
export type Linea = 0 | 1; // 0 = yin (partida ▬ ▬) · 1 = yang (continua ▬▬▬)

// Las 6 lineas, SIEMPRE de abajo hacia arriba: [0] = linea inferior (la que se
// tira primero) ... [5] = linea superior (la ultima). Es el orden en que se lee
// un hexagrama, y el orden en que la animacion de monedas lo construye.
export type LineasHexagrama = [Linea, Linea, Linea, Linea, Linea, Linea];

// Los 8 trigramas. NO se guardan en cada hexagrama: se derivan de `lineas`
// (inferior = lineas[0..2], superior = lineas[3..5]). Guardar solo las 6 lineas
// evita que el dato quede inconsistente consigo mismo.
export type TrigramaId =
  | 'cielo'    // ☰ 111
  | 'tierra'   // ☷ 000
  | 'trueno'   // ☳ 100  (yang abajo)
  | 'agua'     // ☵ 010
  | 'montana'  // ☶ 001  (yang arriba)
  | 'viento'   // ☴ 011
  | 'fuego'    // ☲ 101
  | 'lago';    // ☱ 110

// El tema lo detecta src/pregunta a partir de la pregunta del usuario. Aca solo
// se declara para tipar el significado por tema. Igual que en Runas/Tarot.
export type Tema = 'amor' | 'trabajo' | 'dinero' | 'general';

// El texto de UNA de las 6 lineas cuando sale "cambiante" (un 6 o un 9 en la
// tirada de monedas). Son las 384 piezas de contenido mas caras del oraculo:
// 64 hexagramas x 6 lineas. Solo se muestra la(s) linea(s) que efectivamente
// cambiaron en esa consulta.
export interface LineaCambiante {
  // 1..6 de abajo hacia arriba (1 = inferior). Es redundante con el indice del
  // array, pero lo dejo explicito para no equivocarse al escribir las 384.
  posicion: 1 | 2 | 3 | 4 | 5 | 6;
  // Que significa que JUSTO esta linea este en movimiento. Es el matiz fino:
  // el aspecto puntual de la situacion que esta cambiando.
  texto: string;
}

export interface Hexagrama {
  // 1..64 en la secuencia King Wen (la numeracion tradicional, la que usan los
  // libros). Es la clave estable del hexagrama.
  numero: number;

  // El patron canonico (abajo->arriba). De aca se derivan nombre visible de los
  // trigramas, el dibujo de las lineas y el hexagrama resultante al cambiar.
  lineas: LineasHexagrama;

  // Redaccion propia. Nombre corto y evocador. Ej: "Lo Creativo".
  nombre: string;

  // Transliteracion del nombre chino, decorativa. Ej: "Qian". Opcional.
  nombreAlterno?: string;

  // 3 a 5 etiquetas para los chips de la ficha y para dar tono a la apertura.
  palabrasClave: string[];

  // "El Dictamen": el nucleo del significado del hexagrama. Un parrafo.
  dictamen: string;

  // "La Imagen": la metafora tradicional (ej "el cielo en movimiento") + el
  // consejo de accion que se desprende. Un parrafo.
  imagen: string;

  // Lectura general del hexagrama, matizada por el tema de la pregunta.
  // El tinte fino (preocupacion/impulso, apertura y cierre) NO va aca: sale de
  // un banco compartido, como en Runas. Aca va el significado del hexagrama.
  significado: Record<Tema, string>;

  // Las 6 lineas, de abajo hacia arriba. Siempre 6, aunque en una consulta se
  // muestren 0, 1 o varias segun cuales salieron cambiantes.
  lineasCambiantes: [
    LineaCambiante, LineaCambiante, LineaCambiante,
    LineaCambiante, LineaCambiante, LineaCambiante,
  ];
}

// La base completa: los 64, indexados por numero King Wen para buscarlos rapido
// tanto por su numero como por el patron de lineas resultante de la tirada.
export type BaseHexagramas = Record<number, Hexagrama>;
