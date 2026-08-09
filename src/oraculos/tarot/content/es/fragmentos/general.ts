import type { FragmentosDeTema } from '../../types';

// Fragmentos del tema 'general' en español (Capa 3). Cláusulas cortas pensadas
// para encajar tras un conector o un verbo: "la carta {verbo} {fragmento}".
// Tres variantes por posición para que la misma carta no suene siempre igual.
//
// El tema 'general' es también el escalón de fallback: si una carta no tiene
// fragmentos de amor/trabajo/dinero, la tirada usa los de acá (ver resolverCarta).
// Los 22 Mayores están completos; los Menores caen al significado de la Wiki
// hasta que se escriban sus fragmentos.
export const FRAGMENTOS_GENERAL_ES: FragmentosDeTema = {
  'mayor-00': {
    normal: [
      'un comienzo que pide confianza más que certezas',
      'el impulso de dar el primer paso aunque no se vea el camino entero',
      'una hoja en blanco donde elegir sin arrastrar lo viejo',
    ],
    invertida: [
      'el freno de mirar tanto el abismo que no se arranca',
      'un salto dado sin mirar que conviene revisar',
      'ganas de no arriesgar disfrazadas de prudencia',
    ],
  },
  'mayor-01': {
    normal: [
      'la voluntad y las herramientas justas para volver acto la idea',
      'el poder de usar lo que sabes en vez de solo tenerlo',
      'un foco capaz de concentrar todo en un propósito',
    ],
    invertida: [
      'talento que se desperdicia o palabra que promete de más',
      'la habilidad puesta a manipular en vez de a crear',
      'la duda que paraliza teniendo todo a mano',
    ],
  },
  'mayor-02': {
    normal: [
      'un saber que llega por intuición, antes que por razón',
      'la respuesta que aparece en el silencio, no en la prisa',
      'un misterio que pide escuchar hacia adentro',
    ],
    invertida: [
      'una voz interior que estás desoyendo',
      'un secreto que opera bajo la superficie',
      'la intuición tapada por el ruido',
    ],
  },
  'mayor-03': {
    normal: [
      'la vida que se derrama y da fruto',
      'un cuidado que hace crecer lo que toca',
      'la abundancia que se disfruta sin culpa',
    ],
    invertida: [
      'una creatividad que no fluye',
      'un cuidado que se vuelve asfixiante, o el descuido de lo propio',
      'dar tanto que uno se olvida de sí',
    ],
  },
  'mayor-04': {
    normal: [
      'el orden que sostiene y la mano firme al mando',
      'bases firmes sobre las que construir',
      'la estructura que protege lo que se creó',
    ],
    invertida: [
      'un control que ahoga y una rigidez sin matices',
      'terquedad que no admite otra mirada',
      'la falta de estructura, todo suelto y sin rumbo',
    ],
  },
  'mayor-05': {
    normal: [
      'la guía de lo aprendido y probado',
      'el valor de pertenecer a algo mayor',
      'reglas compartidas que dan sostén',
    ],
    invertida: [
      'un dogma que no deja pensar',
      'convenciones que ya no significan nada',
      'las ganas sanas de buscar la propia verdad fuera del molde',
    ],
  },
  'mayor-06': {
    normal: [
      'una elección hecha desde lo que de verdad valoras',
      'la unión que se vuelve armónica al elegir con el corazón',
      'un vínculo que integra lo que parecía separado',
    ],
    invertida: [
      'una decisión que estás evitando',
      'valores que chocan dentro tuyo',
      'elegir por miedo o presión en vez de por convicción',
    ],
  },
  'mayor-07': {
    normal: [
      'el avance que se gana con voluntad y foco',
      'fuerzas opuestas alineadas hacia una misma meta',
      'las riendas tomadas con disciplina',
    ],
    invertida: [
      'fuerzas que tiran en direcciones distintas',
      'impulso sin dirección que no llega a ningún lado',
      'querer avanzar a la fuerza donde toca ceder',
    ],
  },
  'mayor-08': {
    normal: [
      'la suavidad que domestica lo indómito',
      'el temple que sostiene sin apretar',
      'coraje sereno frente a lo que asusta',
    ],
    invertida: [
      'la fuerza vuelta dureza',
      'ceder al impulso en vez de al temple',
      'dudar de la propia capacidad de sostener',
    ],
  },
  'mayor-09': {
    normal: [
      'el retiro que busca claridad hacia adentro',
      'la sabiduría de haber caminado en silencio',
      'una luz que uno mismo lleva para el paso siguiente',
    ],
    invertida: [
      'un retiro que se volvió encierro',
      'evasión disfrazada de búsqueda',
      'negarse a la guía que se necesita',
    ],
  },
  'mayor-10': {
    normal: [
      'un giro del destino que cambia lo de siempre',
      'ciclos que se cumplen y piden fluir',
      'una oportunidad que conviene aprovechar mientras dura',
    ],
    invertida: [
      'una racha que parece girar en contra',
      'resistirse a un cambio inevitable',
      'la sensación de estar a merced de lo que pasa',
    ],
  },
  'mayor-11': {
    normal: [
      'la verdad que se pesa sin apasionarse',
      'consecuencias que corresponden a lo hecho',
      'una decisión tomada con claridad y honestidad',
    ],
    invertida: [
      'una balanza que se tuerce hacia lo injusto',
      'esquivar la responsabilidad de lo que uno provocó',
      'cargar con culpas ajenas',
    ],
  },
  'mayor-12': {
    normal: [
      'una pausa que cambia por completo la mirada',
      'soltar el control para ver distinto',
      'la entrega que, quieta, también hace avanzar',
    ],
    invertida: [
      'una espera que se volvió atasco',
      'resistirse a soltar lo que hay que soltar',
      'sacrificios que no llevan a nada',
    ],
  },
  'mayor-13': {
    normal: [
      'un final que abre paso a algo nuevo',
      'dejar morir lo que ya cumplió su ciclo',
      'la renovación que solo llega tras el cierre',
    ],
    invertida: [
      'aferrarse a lo que ya terminó',
      'temer tanto el cambio que se prolonga la agonía',
      'una transformación que pide paso y encuentra resistencia',
    ],
  },
  'mayor-14': {
    normal: [
      'el punto medio que mezcla en su justa medida',
      'combinar con paciencia lo que parecía incompatible',
      'la calma de no ir ni de más ni de menos',
    ],
    invertida: [
      'la medida perdida, un exceso en algún lado',
      'la impaciencia que arruina el proceso',
      'partes que no logran integrarse',
    ],
  },
  'mayor-15': {
    normal: [
      'las cadenas que uno mismo se pone',
      'un apego o un deseo que esclaviza aunque parezca elegido',
      'la sombra que preferimos no mirar',
    ],
    invertida: [
      'tomar conciencia de lo que esclaviza y empezar a soltarlo',
      'aflojar una atadura que se creía imposible',
      'recuperar el control sobre un vínculo o un hábito',
    ],
  },
  'mayor-16': {
    normal: [
      'el derrumbe súbito de lo que estaba mal construido',
      'una verdad que estalla y libera',
      'estructuras falsas que caen para dejar suelo firme',
    ],
    invertida: [
      'una crisis que se ve venir y se evita',
      'aferrarse a lo que ya no se sostiene',
      'un sacudón interno que todavía no estalla',
    ],
  },
  'mayor-17': {
    normal: [
      'una esperanza que vuelve después de la tormenta',
      'la fe en que las cosas pueden sanar',
      'una guía suave que orienta y serena',
    ],
    invertida: [
      'la luz que por un rato se apagó',
      'fe perdida y desánimo',
      'desconexión de lo que antes inspiraba',
    ],
  },
  'mayor-18': {
    normal: [
      'un terreno incierto donde las cosas no son lo que parecen',
      'miedos e ilusiones mezclados con la intuición',
      'andar despacio, confiando en el instinto',
    ],
    invertida: [
      'la niebla que empieza a levantarse',
      'un engaño que se aclara',
      'la confusión en su punto más denso, justo antes de aclarar',
    ],
  },
  'mayor-19': {
    normal: [
      'la alegría clara que ilumina sin sombras',
      'éxito y verdad a plena luz',
      'una felicidad sencilla y sin dobleces',
    ],
    invertida: [
      'un entusiasmo que cuesta encender',
      'una alegría postergada que sigue ahí, tapada un rato',
      'optimismo que hay que recuperar',
    ],
  },
  'mayor-20': {
    normal: [
      'un despertar que llama a mirar la propia vida',
      'renacer tras un balance honesto',
      'perdonarse y dar el paso hacia algo más pleno',
    ],
    invertida: [
      'una autocrítica que no perdona',
      'un llamado que se desoye',
      'quedarse atrapado en un pasado que pide cierre',
    ],
  },
  'mayor-21': {
    normal: [
      'un ciclo que se completa con plenitud',
      'la sensación de estar entero y en armonía',
      'la recompensa del camino y el umbral de uno nuevo',
    ],
    invertida: [
      'un cierre cercano pero todavía incompleto',
      'una meta a la que le falta un último paso',
      'algo que no terminas de integrar',
    ],
  },
};
