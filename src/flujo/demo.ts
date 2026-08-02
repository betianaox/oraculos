// Texto de muestra para calibrar la forma de la lectura y probar el TTS antes
// de conectar el motor de lecturas real (paso siguiente). Es generico: sirve
// para cualquier oraculo hasta que cada motor arme su propia lectura.
export const PARRAFOS_DEMO = [
  'Primer párrafo: la lectura de las tres piezas del renglón, nombrando cada ' +
    'una la primera vez y relacionando sus significados con la pregunta.',
  'Segundo párrafo: integra esas tres piezas —cómo se combinan y qué dicen ' +
    'juntas—, ya sin repetir los nombres.',
  'Tercer párrafo: suma la pieza de arriba —lo que la persona tiene en la ' +
    'cabeza— y la de abajo —el próximo movimiento, el futuro cercano—. Cuando ' +
    'conectemos el motor, todo esto se arma solo a partir de las cinco piezas y ' +
    'del análisis de la pregunta.',
];

// Lo que se lee en voz alta: solo la respuesta, con pausa entre bloques.
export const TEXTO_DEMO = PARRAFOS_DEMO.join('\n\n');
