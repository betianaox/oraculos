// El tipo vive un nivel más arriba porque no depende del idioma: lo comparten
// los bancos de español, inglés y portugués. Este archivo queda como puerta de
// entrada para los archivos en español, que ya lo importaban desde acá.
export type { FragmentosDeTemaAngel } from '../../tiposFragmentos';
