import type { Tema } from '@/pregunta/tipos';

// Fragmentos por tema del oráculo de Ángeles (español). A diferencia del Tarot,
// el mazo angélico no está pensado por temas: cada ángel tiene un significado.
// Acá se lo reencuadra hacia amor / trabajo / dinero apoyándose en las facetas
// que el propio mazo insinúa (salud, sexualidad, bienes, vínculos...). Dos
// variantes por posición; las cartas "sin revés" omiten 'invertida' y el motor
// usa su lectura derecha. Si un ángel no tiene fragmento de un tema, cae a sus
// palabras clave (ver lectura.ts). El tema 'general' no vive acá: lo cubren las
// claves.

type FragmentosDeTemaAngel = Record<number, { normal: string[]; invertida?: string[] }>;

const amor: FragmentosDeTemaAngel = {
  1: {
    normal: ['un amor puro y sin cálculo', 'cariño de familia y entrega sincera'],
    invertida: ['un desengaño que enfrió el corazón', 'miedo a mostrar lo que se siente'],
  },
  2: {
    normal: ['sanar una herida del corazón', 'un vínculo que cura'],
    invertida: ['un remedio afectivo que no obra', 'una relación que no termina de sanar'],
  },
  3: {
    normal: ['un romance inspirado y creativo', 'ternura que se expresa con arte'],
    invertida: ['tristeza que apaga el amor', 'falta de inspiración en el vínculo'],
  },
  4: {
    normal: ['una mediación que reconcilia a la pareja', 'buen consejo para el vínculo'],
    invertida: ['falta de apoyo en un momento delicado del amor'],
  },
  5: {
    normal: ['un amor protector y de principios firmes', 'alguien que cuida el vínculo'],
    invertida: ['rigidez o intolerancia en la pareja'],
  },
  6: {
    normal: ['un amor maduro, con experiencia de vida', 'sabiduría para sostener el vínculo'],
    invertida: ['ideas equivocadas sobre la relación', 'poca confianza en el otro'],
  },
  7: {
    normal: ['un amor de convicciones firmes, no de arrebatos', 'no dejarse llevar por la pasión'],
    invertida: ['dificultad para concretar el vínculo', 'ideas equivocadas en el amor'],
  },
  8: {
    normal: ['una forma nueva y creativa de amar', 'ideas frescas para el vínculo'],
    invertida: ['un amor que se paraliza', 'falta de creatividad en la pareja'],
  },
  9: {
    normal: ['un amor que llega de lejos', 'un cambio grande en la vida afectiva'],
    invertida: ['confusión en el vínculo', 'una relación que se enturbia'],
  },
  10: {
    normal: ['tomar las riendas de la relación', 'un amor con conducción clara'],
    invertida: ['un trato dominante en la pareja'],
  },
  11: {
    normal: ['una pasión ardiente', 'entrega apasionada al otro'],
    invertida: ['reacciones exaltadas en la pareja'],
  },
  12: {
    normal: ['un amor sensible y noble', 'una compañía leal'],
    invertida: ['egoísmo o engaño en el vínculo'],
  },
  13: { normal: ['una ayuda extraordinaria en el amor', 'un corazón noble y altruista'] },
  14: { normal: ['la protección del amor familiar', 'alguien que vela por los suyos'] },
  15: {
    normal: ['el coraje de decidir en el amor', 'animarse a dar un paso difícil'],
    invertida: ['indecisión en el vínculo'],
  },
  16: {
    normal: ['reconciliación y equilibrio en la pareja', 'una ambigüedad afectiva a resolver'],
    invertida: ['una persona poco honesta en el amor'],
  },
  17: {
    normal: ['buscar el equilibrio justo en la relación', 'ayudar al otro sin perder el norte'],
    invertida: ['soberbia que no escucha a la pareja'],
  },
  18: {
    normal: ['un ánimo bajo que pesa en el vínculo', 'hábitos que dañan la relación'],
    invertida: ['pérdidas afectivas'],
  },
  19: {
    normal: ['magnetismo y éxito con el sexo opuesto', 'belleza y sensualidad que enamoran'],
    invertida: ['soberbia y egoísmo en el amor'],
  },
  20: {
    normal: ['una guía sabia para el corazón', 'un amor con hondura espiritual'],
    invertida: ['confusión y falta de guía en el vínculo'],
  },
  21: {
    normal: ['amistad y comprensión en la pareja', 'apoyo en un momento difícil del amor'],
    invertida: ['un hondo sentimiento de soledad afectiva'],
  },
  22: {
    normal: ['un mensaje que abre el diálogo en la pareja', 'comprensión que se dice con palabras'],
    invertida: ['crisis y confusión en los sentimientos'],
  },
  23: { normal: ['el fin de una etapa afectiva y el comienzo de otra', 'un legado del corazón'] },
  24: {
    normal: ['la revelación de un ideal amoroso', 'descubrir algo nuevo del vínculo'],
    invertida: ['falta de comunicación en la pareja'],
  },
  25: {
    normal: ['un vínculo que sana bien', 'la cura de una herida afectiva'],
    invertida: ['una relación que no logra sanar'],
  },
  26: { normal: ['aprender de los errores del corazón', 'un escarmiento afectivo que enseña'] },
  27: {
    normal: ['un amor que protege y cuida', 'sentirse resguardado en la pareja'],
    invertida: ['quedar sin amparo afectivo'],
  },
  28: {
    normal: ['justicia y un cambio importante en el amor', 'poner cada cosa en su lugar'],
    invertida: ['injusticias y demoras en el vínculo'],
  },
  29: {
    normal: ['un amor ligado a lo íntimo y lo secreto', 'algo afectivo que se resuelve con discreción'],
    invertida: ['desconfianza y confusión al decidir en el amor'],
  },
  30: {
    normal: ['amor, armonía y fecundidad plenos', 'un vínculo bello y fértil'],
    invertida: ['frivolidad y apatía en la pareja'],
  },
  31: {
    normal: ['un amor brillante y admirado', 'un magnetismo que atrae'],
    invertida: ['egolatría y desencanto amoroso'],
  },
  32: { normal: ['un mensaje afectivo en el momento justo', 'la sanación del corazón'] },
  33: {
    normal: ['consejos sabios para la pareja', 'equilibrio y alta moral en el amor'],
    invertida: ['desequilibrio en las emociones'],
  },
  34: {
    normal: ['dominio de sí y un vínculo que triunfa', 'la revelación de algo oculto en el amor'],
    invertida: ['tropiezos y un futuro afectivo incierto'],
  },
  35: {
    normal: ['un amor elevado, en sintonía profunda', 'misterios del corazón que se develan'],
    invertida: ['traición o desconfianza en el vínculo'],
  },
  36: {
    normal: ['un amor grande y trascendente', 'palabras que sellan el vínculo'],
    invertida: ['egocentrismo que daña la pareja'],
  },
  37: {
    normal: ['un amor nuevo hacia lo desconocido', 'un cambio que renueva el vínculo'],
    invertida: ['temor a lo nuevo en el amor'],
  },
  38: {
    normal: ['el fin abrupto de un vínculo', 'una transformación profunda en el amor'],
    invertida: ['una pérdida o separación dolorosa'],
  },
  39: { normal: ['peleas y traiciones en la pareja', 'enemigos del vínculo'] },
  40: {
    normal: ['la llegada de un amor feliz y estable', 'la seguridad de una pareja'],
    invertida: ['frustración, soledad o separación'],
  },
  41: {
    normal: ['un amor que llega en abundancia', 'buena fortuna afectiva'],
    invertida: ['un amor que cuesta esfuerzo conseguir'],
  },
  42: {
    normal: ['la llegada de un hijo al vínculo', 'un nuevo comienzo en la familia'],
    invertida: ['problemas o una interrupción en ese anhelo'],
  },
  43: {
    normal: ['un vínculo que rinde por el esfuerzo puesto', 'frutos de trabajar la relación'],
    invertida: ['problemas que trae el descuido del vínculo'],
  },
  44: { normal: ['diversiones compartidas o líos del corazón', 'juego o enredo amoroso según se dé'] },
  45: {
    normal: ['celos e inseguridades que angustian', 'miedo a perder al otro'],
    invertida: ['celos que resultan tener fundamento'],
  },
  46: {
    normal: ['amor apasionado y unión', 'la carta del matrimonio'],
    invertida: ['separación, infidelidad o frustración'],
  },
  47: {
    normal: ['serenidad y buen criterio en el amor', 'previsión antes de decidir en la pareja'],
    invertida: ['ideas equivocadas e incomprensión afectiva'],
  },
  48: {
    normal: ['paz y dicha en la relación', 'un vínculo pleno y armónico'],
    invertida: ['planes afectivos anulados y soledad'],
  },
  49: {
    normal: ['una nueva etapa consciente en el amor', 'estabilidad en el vínculo'],
    invertida: ['juicios equivocados sobre la pareja'],
  },
  50: {
    normal: ['un amor luminoso y sincero', 'felicidad y calidez plena'],
    invertida: ['soledad y planes afectivos anulados'],
  },
  51: {
    normal: ['un amor inspirado pero confuso', 'sensibilidad a flor de piel en la pareja'],
    invertida: ['espejismos y dudas afectivas'],
  },
  52: {
    normal: ['un ánimo bajo que afecta el vínculo', 'una relación que necesita cuidado'],
    invertida: ['falta de motivación para sostener el amor'],
  },
  53: {
    normal: ['equilibrio y consejos acertados en la pareja', 'un acuerdo justo, o un divorcio bien resuelto'],
    invertida: ['indecisión y desorden en el amor'],
  },
  54: {
    normal: ['una compañía sensible y protectora', 'amistad y amparo en el vínculo'],
    invertida: ['la protección afectiva que se aleja'],
  },
  55: {
    normal: ['esperanza y armonía en el amor', 'inspiración para el vínculo'],
    invertida: ['esperanzas afectivas insatisfechas'],
  },
  56: {
    normal: ['un pretendiente que se declara', 'una propuesta de amor'],
    invertida: ['decepción, un amor acabado'],
  },
  57: {
    normal: ['el inicio de una relación', 'una mujer enamorada, posible matrimonio'],
    invertida: ['un amor no correspondido'],
  },
  58: {
    normal: ['envidia y despecho que enturbian', 'malicia alrededor del vínculo'],
    invertida: ['esos celos que se acentúan aún más'],
  },
  59: {
    normal: ['sacrificios y una transición afectiva', 'renunciar o esperar en el amor'],
    invertida: ['un logro afectivo que no trae satisfacción'],
  },
  60: {
    normal: ['los hijos del vínculo, presentes o por venir', 'la familia que crece'],
    invertida: ['una preocupación por los hijos, para atender'],
  },
  61: {
    normal: ['un amor que eleva y hace crecer', 'evolución del vínculo'],
    invertida: ['no escuchar el llamado del corazón'],
  },
  62: {
    normal: ['una compañera equilibrada y de buen criterio', 'un vínculo estable, a menudo el matrimonio'],
    invertida: ['enredos y demoras en la pareja'],
  },
  63: {
    normal: ['un amor con equilibrio e inteligencia', 'armonía y autoridad serena en la pareja'],
    invertida: ['lo contrario: desorden en el vínculo'],
  },
  64: {
    normal: ['deseo y pasión, una aventura', 'una atracción física intensa'],
    invertida: ['pasiones que dejan vacío y soledad'],
  },
  65: {
    normal: ['un amor movido por el interés', 'buscar provecho en el vínculo'],
    invertida: ['problemas por poner lo material antes que el amor'],
  },
  66: {
    normal: ['un vínculo intenso, más efusivo que afectivo', 'conquistar por empuje'],
    invertida: ['apatía y pasividad en la pareja'],
  },
  67: {
    normal: ['lujuria y deseo puramente físico', 'un vínculo de corta duración'],
    invertida: ['egoísmo y falta de respeto al otro'],
  },
  68: {
    normal: ['dejarse llevar sin tomar las riendas del vínculo', 'inseguridad afectiva'],
    invertida: ['un intento de superarse en el amor'],
  },
  69: {
    normal: ['tentaciones difíciles de rechazar', 'una pasión nocturna'],
    invertida: ['alejarse de una tentación dañina'],
  },
  70: {
    normal: ['hostilidad o malas artes en el vínculo', 'un clima adverso en la pareja'],
    invertida: ['un mal uso de la voluntad sobre el otro'],
  },
  71: {
    normal: ['odio o promiscuidad que dañan', 'un carácter inestable en el amor'],
    invertida: ['logros afectivos de corta duración'],
  },
  72: {
    normal: ['un amor teñido por el interés', 'usar al otro para provecho'],
    invertida: ['no conseguir lo que se busca en el vínculo'],
  },
  73: {
    normal: ['trabas y demoras en el amor', 'malas intenciones de terceros'],
    invertida: ['un amor que llega, aunque tarde'],
  },
  74: {
    normal: ['ansiedad y angustia en el vínculo', 'un amor que hace sufrir'],
    invertida: ['una angustia afectiva extrema'],
  },
  75: {
    normal: ['orgullo que no deja expresar el cariño', 'soberbia en la pareja'],
    invertida: ['vencer el orgullo y abrirse'],
  },
  76: {
    normal: ['ruptura y peleas en el amor', 'frustraciones con la pareja'],
    invertida: ['rupturas pasajeras que se reparan'],
  },
  77: { normal: ['mentira o maltrato en el vínculo', 'una persona sin escrúpulos'] },
  78: {
    normal: ['manipular para conseguir amor', 'seducción sin escrúpulos'],
    invertida: ['no lograr el objetivo, dejando depresión'],
  },
};

const trabajo: FragmentosDeTemaAngel = {
  1: {
    normal: ['compañerismo sincero y buena voluntad', 'hacer el bien en el equipo sin interés'],
    invertida: ['desengaño con un colega', 'miedo a mostrar lo que pensás en el trabajo'],
  },
  2: {
    normal: ['una solución eficaz a un problema laboral', 'alguien que arregla lo que estaba mal'],
    invertida: ['una solución que no funciona', 'un arreglo que no alcanza'],
  },
  3: {
    normal: ['talento creativo en el trabajo', 'un aporte artístico u original'],
    invertida: ['falta de inspiración', 'desánimo que frena la creatividad'],
  },
  4: {
    normal: ['una mediación que destraba un conflicto', 'buen consejo en el equipo'],
    invertida: ['falta de apoyo en una situación delicada'],
  },
  5: {
    normal: ['autoridad protectora y de principios', 'alguien recto en un puesto de mando'],
    invertida: ['un jefe intolerante o conservador'],
  },
  6: {
    normal: ['experiencia y conocimiento que guían', 'un consejo que nace de lo recorrido'],
    invertida: ['ideas equivocadas', 'poca confiabilidad'],
  },
  7: {
    normal: ['ideas firmes, no dejarse llevar', 'constancia en los proyectos'],
    invertida: ['dificultad para concretar', 'ideas equivocadas'],
  },
  8: {
    normal: ['grandes ideas e innovación', 'una mente que inventa y renueva'],
    invertida: ['falta de creatividad', 'proyectos paralizados'],
  },
  9: {
    normal: ['cambios e ideas nuevas', 'alguien que viene de lejos a aportar'],
    invertida: ['mente confusa', 'evasión de responsabilidades'],
  },
  10: {
    normal: ['capacidad de liderar un proyecto o empresa', 'conducir con mando natural'],
    invertida: ['tiranía en el mando'],
  },
  11: {
    normal: ['pasión y empuje en el trabajo', 'un entusiasmo que contagia'],
    invertida: ['reacciones exaltadas en el equipo'],
  },
  12: {
    normal: ['sensibilidad y voluntad noble', 'un buen compañero de trabajo'],
    invertida: ['egoísmo o mala compañía'],
  },
  13: { normal: ['una ayuda extraordinaria en el trabajo', 'nobleza y altruismo en el equipo'] },
  14: { normal: ['proteger y velar por los del equipo', 'amparo en el trabajo'] },
  15: {
    normal: ['coraje para decidir en el trabajo', 'valentía ante un desafío'],
    invertida: ['indecisión laboral'],
  },
  16: {
    normal: ['equilibrio y reconciliación en el equipo', 'buscar el punto medio'],
    invertida: ['una persona poco honesta'],
  },
  17: {
    normal: ['buscar el equilibrio justo', 'ayudar a los demás en el trabajo'],
    invertida: ['soberbia que no escucha consejo'],
  },
  18: {
    normal: ['ánimo bajo y malos hábitos que traban', 'facilidad para el error'],
    invertida: ['pérdidas materiales y morales'],
  },
  19: {
    normal: ['liderazgo, éxito y magnetismo', 'poder y presencia en el trabajo'],
    invertida: ['soberbia y egoísmo'],
  },
  20: {
    normal: ['una guía sabia y experta', 'inteligencia que orienta el proyecto'],
    invertida: ['confusión, falta de guía'],
  },
  21: {
    normal: ['ayuda y comprensión de un colega', 'apoyo en un momento difícil'],
    invertida: ['sentirse solo ante el trabajo'],
  },
  22: {
    normal: ['un mensaje o comunicación clave', 'saber transmitir con palabras'],
    invertida: ['crisis y confusión'],
  },
  23: { normal: ['fin de una etapa laboral y comienzo de otra', 'un legado profesional'] },
  24: {
    normal: ['el descubrimiento de un ideal o rumbo', 'la revelación de una clave'],
    invertida: ['falta de comunicación en el equipo'],
  },
  25: {
    normal: ['la solución eficaz a un problema', 'algo que se arregla bien'],
    invertida: ['un arreglo que no prospera'],
  },
  26: { normal: ['aprender de los errores laborales', 'un escarmiento que enseña'] },
  27: {
    normal: ['protección y cuidado del proyecto', 'un resguardo laboral'],
    invertida: ['quedar sin respaldo'],
  },
  28: {
    normal: ['justicia y un cambio importante', 'poner orden en el trabajo'],
    invertida: ['injusticias y demoras'],
  },
  29: {
    normal: ['viajes, buena memoria y discreción', 'resolver algo comprometido con tacto'],
    invertida: ['confusión al decidir'],
  },
  30: {
    normal: ['éxito, armonía y creatividad', 'abundancia en el trabajo'],
    invertida: ['frivolidad y apatía', 'esterilidad de ideas'],
  },
  31: {
    normal: ['brillo personal y liderazgo', 'deseo de destacar y ser admirado'],
    invertida: ['egolatría, querer salirse con la suya'],
  },
  32: { normal: ['liderar o controlar un proceso', 'un mensaje en el momento justo'] },
  33: {
    normal: ['consejos y equilibrio en el equipo', 'alta moral en el trabajo'],
    invertida: ['falta de ética', 'desequilibrio'],
  },
  34: {
    normal: ['dominio y espíritu triunfador', 'la revelación de algo importante'],
    invertida: ['tropiezos, futuro incierto'],
  },
  35: {
    normal: ['conocimiento profundo, en línea con el objetivo', 'elevación en lo que se hace'],
    invertida: ['traición o desconfianza en el equipo'],
  },
  36: {
    normal: ['un escrito o proyecto importante', 'el genio que surge en el trabajo'],
    invertida: ['abuso de poder, egocentrismo'],
  },
  37: {
    normal: ['lo nuevo, cambios e innovación', 'un giro hacia lo inexplorado'],
    invertida: ['temor a lo nuevo, retraimiento'],
  },
  38: {
    normal: ['el fin de una etapa laboral', 'un cambio brusco de rumbo'],
    invertida: ['pérdida o fracaso de un proyecto'],
  },
  39: { normal: ['peleas y rivalidades en el trabajo', 'enemigos o traiciones'] },
  40: {
    normal: ['un buen clima y vínculos en el trabajo', 'la llegada de algo estable'],
    invertida: ['frustración o distancia con el equipo'],
  },
  41: {
    normal: ['buena posición y suerte material', 'prosperidad en el trabajo'],
    invertida: ['lograrlo a fuerza de esfuerzo'],
  },
  42: {
    normal: ['el nacimiento de un proyecto', 'algo nuevo que llega bien'],
    invertida: ['problemas o una interrupción'],
  },
  43: {
    normal: ['buenos resultados por el esfuerzo', 'un nuevo trabajo o un aumento'],
    invertida: ['problemas en el trabajo'],
  },
  44: { normal: ['aficiones o líos según dónde caiga', 'distracción o enredo laboral'] },
  45: {
    normal: ['rivalidad e inseguridad en el equipo', 'celos profesionales'],
    invertida: ['esas inseguridades con fundamento'],
  },
  46: {
    normal: ['una unión o sociedad que funciona', 'equilibrio entre dos socios'],
    invertida: ['una ruptura de sociedad'],
  },
  47: {
    normal: ['sentido común y previsión', 'serenidad para resolver'],
    invertida: ['ideas equivocadas, incomprensión'],
  },
  48: {
    normal: ['realización y logro en el trabajo', 'buenos augurios, éxito en lo que se hace'],
    invertida: ['planes anulados, fracasos'],
  },
  49: {
    normal: ['una nueva etapa mental, recopilar datos', 'estabilidad en el trabajo'],
    invertida: ['juicios equivocados'],
  },
  50: {
    normal: ['éxito, luz y reconocimiento', 'grandes logros'],
    invertida: ['planes anulados, futuro sombrío'],
  },
  51: {
    normal: ['espíritu inspirado pero con malas influencias', 'quimeras en el trabajo'],
    invertida: ['espejismos, pasividad'],
  },
  52: {
    normal: ['baja forma que se supera con esfuerzo', 'una mala racha laboral'],
    invertida: ['falta de motivación para remontar'],
  },
  53: {
    normal: ['equilibrio y consejos acertados', 'un acuerdo o contrato justo'],
    invertida: ['indecisión, desorden, pérdida'],
  },
  54: {
    normal: ['una colega sensible y protectora', 'apoyo y amistad en el trabajo'],
    invertida: ['ese apoyo que se aleja'],
  },
  55: {
    normal: ['esperanza e inspiración', 'orden y armonía al obrar'],
    invertida: ['esperanzas insatisfechas, decepción'],
  },
  56: {
    normal: ['una propuesta o alianza que llega', 'alguien que se acerca a colaborar'],
    invertida: ['una decepción, algo que se acaba'],
  },
  57: {
    normal: ['el inicio de una colaboración', 'una alianza con futuro'],
    invertida: ['algo que no se corresponde'],
  },
  58: {
    normal: ['envidia y despecho en el entorno', 'una persona maliciosa'],
    invertida: ['esos rasgos que se acentúan'],
  },
  59: {
    normal: ['sacrificio y transición', 'proyectos que se frenan un tiempo'],
    invertida: ['un logro desigual, sin satisfacción'],
  },
  60: {
    normal: ['un proyecto propio, como un hijo', 'algo que se cuida y crece'],
    invertida: ['algo que pide atención'],
  },
  61: {
    normal: ['crecimiento y evolución profesional', 'sabiduría que eleva'],
    invertida: ['no escuchar el llamado a crecer'],
  },
  62: {
    normal: ['sentido común y equilibrio', 'una persona práctica y confiable'],
    invertida: ['enredos y demoras'],
  },
  63: {
    normal: ['inteligencia, poder y autoridad', 'manejo sereno del mando'],
    invertida: ['desorden, autoridad que se resquebraja'],
  },
  64: {
    normal: ['éxito por la imagen y el atractivo', 'conseguir por seducción'],
    invertida: ['éxitos vacíos que dejan soledad'],
  },
  65: {
    normal: ['ambición y astucia para el provecho', 'suerte material'],
    invertida: ['problemas por mala administración'],
  },
  66: {
    normal: ['éxitos por empuje y tenacidad', 'negocios favorables, mucha actividad'],
    invertida: ['apatía y pasividad'],
  },
  67: {
    normal: ['éxitos rápidos por medios turbios', 'poder material de corta duración'],
    invertida: ['no respetar a los demás, exceso'],
  },
  68: {
    normal: ['dejarse llevar sin tomar las riendas', 'inseguridad para resolver'],
    invertida: ['un intento de superación'],
  },
  69: {
    normal: ['tentaciones y distracciones', 'vicios que restan al trabajo'],
    invertida: ['alejarse de lo que distrae'],
  },
  70: {
    normal: ['hostilidad y adversidad en el entorno', 'un clima en contra'],
    invertida: ['mal uso del poder, error de cálculo'],
  },
  71: {
    normal: ['un ambiente inestable y hostil', 'odio o rivalidad'],
    invertida: ['logros de corta duración'],
  },
  72: {
    normal: ['codicia que nubla el criterio', 'buscar solo la ganancia'],
    invertida: ['no obtener los resultados buscados'],
  },
  73: {
    normal: ['adversidad, retrasos y trabas', 'malas intenciones de otros'],
    invertida: ['se logra, aunque lleve más tiempo'],
  },
  74: {
    normal: ['ansiedad y presión', 'un trabajo que hace sufrir'],
    invertida: ['una angustia extrema'],
  },
  75: {
    normal: ['orgullo que no deja pedir ayuda', 'soberbia en el trabajo'],
    invertida: ['vencer el orgullo y colaborar'],
  },
  76: {
    normal: ['rupturas y frustraciones', 'choques o contratiempos'],
    invertida: ['contratiempos pasajeros'],
  },
  77: { normal: ['mentira, astucia y corrupción', 'alguien sin escrúpulos'] },
  78: {
    normal: ['manipular para conseguir favores', 'usar cualquier estratagema'],
    invertida: ['no lograr el objetivo, frustración'],
  },
};

const dinero: FragmentosDeTemaAngel = {
  1: {
    normal: ['generosidad y desprendimiento', 'dar sin cálculo'],
    invertida: ['un desengaño que cierra la mano'],
  },
  2: {
    normal: ['una solución eficaz a un apuro', 'algo que se resuelve bien'],
    invertida: ['un remedio económico que no obra'],
  },
  3: {
    normal: ['ingresos por un talento o el arte', 'ganar con creatividad'],
    invertida: ['una racha sin inspiración ni ingresos'],
  },
  4: {
    normal: ['un buen consejo financiero', 'una mediación en un tema de dinero'],
    invertida: ['falta de apoyo en un apuro'],
  },
  5: {
    normal: ['administrar con principios firmes', 'proteger el patrimonio'],
    invertida: ['rigidez o tacañería'],
  },
  6: {
    normal: ['experiencia que guía las finanzas', 'un consejo económico sabio'],
    invertida: ['ideas equivocadas con el dinero'],
  },
  7: {
    normal: ['criterio firme, no gastar por impulso', 'constancia en el ahorro'],
    invertida: ['dificultad para concretar una ganancia'],
  },
  8: {
    normal: ['ideas nuevas para generar', 'innovación que da rédito'],
    invertida: ['proyectos económicos paralizados'],
  },
  9: {
    normal: ['ingresos que vienen de lejos', 'un cambio en la fuente de dinero'],
    invertida: ['cuentas confusas'],
  },
  10: {
    normal: ['manejar bien un negocio', 'la conducción de los recursos'],
    invertida: ['un manejo abusivo del dinero'],
  },
  11: {
    normal: ['empuje para un negocio', 'pasión que impulsa la ganancia'],
    invertida: ['gastos impulsivos'],
  },
  12: {
    normal: ['generosidad noble con lo material', 'buena voluntad en lo económico'],
    invertida: ['dejarse engañar con el dinero'],
  },
  13: { normal: ['una ayuda material extraordinaria', 'una mano generosa'] },
  14: { normal: ['proteger el sustento de los suyos', 'amparo material a la familia'] },
  15: {
    normal: ['coraje para una decisión económica', 'animarse a una inversión difícil'],
    invertida: ['indecisión con el dinero'],
  },
  16: {
    normal: ['equilibrar las cuentas', 'reconciliar ingresos y gastos'],
    invertida: ['manejos poco honestos'],
  },
  17: {
    normal: ['buscar el equilibrio justo en un reparto', 'ayudar a otro con lo material'],
    invertida: ['no aceptar un buen consejo económico'],
  },
  18: {
    normal: ['malos hábitos que cuestan dinero', 'facilidad para perder'],
    invertida: ['pérdidas materiales'],
  },
  19: {
    normal: ['éxito y poder material', 'abundancia que atrae'],
    invertida: ['soberbia y despilfarro'],
  },
  20: {
    normal: ['un consejo experto para las finanzas', 'sabiduría con el dinero'],
    invertida: ['confusión y falta de guía'],
  },
  21: {
    normal: ['ayuda material de un amigo', 'apoyo en un apuro'],
    invertida: ['enfrentar la escasez en soledad'],
  },
  22: {
    normal: ['una noticia o mensaje sobre dinero', 'un trato que se cierra hablando'],
    invertida: ['confusión en un asunto de plata'],
  },
  23: { normal: ['un legado o herencia', 'fin de una etapa económica y otra nueva'] },
  24: {
    normal: ['una herencia o un descubrimiento', 'la revelación de una oportunidad'],
    invertida: ['falta de comunicación en un trato'],
  },
  25: {
    normal: ['la solución a un apuro económico', 'algo que se remedia'],
    invertida: ['un arreglo que no prospera'],
  },
  26: { normal: ['pagar el precio de un error', 'apuros que enseñan a administrar'] },
  27: {
    normal: ['resguardo del patrimonio', 'cuidar lo que se tiene'],
    invertida: ['quedar desprotegido económicamente'],
  },
  28: {
    normal: ['justicia en un tema de dinero', 'un cambio material importante'],
    invertida: ['injusticias y demoras en cobrar'],
  },
  29: {
    normal: ['un asunto de dinero resuelto con discreción', 'buena memoria para las cuentas'],
    invertida: ['confusión al decidir un gasto'],
  },
  30: {
    normal: ['abundancia de bienes', 'fecundidad y prosperidad'],
    invertida: ['frivolidad y esterilidad material'],
  },
  31: {
    normal: ['un brillo que atrae oportunidades', 'deseo de prosperar y destacar'],
    invertida: ['egoísmo que dilapida'],
  },
  32: { normal: ['controlar bien los recursos', 'una señal en el momento justo'] },
  33: {
    normal: ['equilibrio y buenos consejos con el dinero', 'ayuda de la buena fortuna'],
    invertida: ['desequilibrio en las cuentas'],
  },
  34: {
    normal: ['dominio y triunfo material', 'la revelación de una oportunidad'],
    invertida: ['tropiezos, futuro incierto'],
  },
  35: {
    normal: ['sintonía con lo que da prosperidad', 'un secreto que abre puertas'],
    invertida: ['una traición o pérdida de confianza'],
  },
  36: {
    normal: ['un contrato o escrito importante', 'grandeza en los negocios'],
    invertida: ['abuso de poder con el dinero'],
  },
  37: {
    normal: ['una oportunidad nueva e inexplorada', 'un cambio material'],
    invertida: ['temor a arriesgar en lo nuevo'],
  },
  38: {
    normal: ['el fin de una fuente de ingreso', 'un cambio brusco en lo material'],
    invertida: ['pérdida o fracaso económico'],
  },
  39: { normal: ['disputas por dinero', 'enemigos o traiciones materiales'] },
  40: {
    normal: ['prosperidad que llega con estabilidad', 'buena fortuna material'],
    invertida: ['frustración o pérdida de lo esperado'],
  },
  41: {
    normal: ['buena posición económica y suerte', 'prosperidad material'],
    invertida: ['conseguirlo con mucho esfuerzo'],
  },
  42: {
    normal: ['el nacimiento de un ingreso', 'algo material que llega bien'],
    invertida: ['problemas o una interrupción'],
  },
  43: {
    normal: ['ganancia por el esfuerzo', 'un aumento o un nuevo ingreso'],
    invertida: ['problemas económicos'],
  },
  44: { normal: ['gastos en diversiones o líos', 'plata que se va en distracciones'] },
  45: {
    normal: ['inseguridad y envidia por lo material', 'angustia por el dinero'],
    invertida: ['esas inseguridades con fundamento'],
  },
  46: {
    normal: ['una sociedad económica equilibrada', 'la unión de recursos'],
    invertida: ['la ruptura de un acuerdo material'],
  },
  47: {
    normal: ['previsión y prudencia con el dinero', 'sentido común para gastar'],
    invertida: ['ideas equivocadas, mal cálculo'],
  },
  48: {
    normal: ['realización y holgura material', 'buenos augurios económicos'],
    invertida: ['planes anulados, pérdidas'],
  },
  49: {
    normal: ['estabilidad material, en lo bueno y lo malo', 'ordenar las cuentas'],
    invertida: ['juicios equivocados con el dinero'],
  },
  50: {
    normal: ['éxito y prosperidad plena', 'luz sobre las finanzas'],
    invertida: ['planes anulados, futuro sombrío'],
  },
  51: {
    normal: ['imaginación que confunde las cuentas', 'malas influencias en lo material'],
    invertida: ['espejismos, decisiones dudosas'],
  },
  52: {
    normal: ['una baja material que se supera con esfuerzo', 'una mala racha económica'],
    invertida: ['falta de empuje para remontar'],
  },
  53: {
    normal: ['un acuerdo económico equilibrado', 'cuentas claras'],
    invertida: ['pérdida y desorden, o ser víctima de un astuto'],
  },
  54: {
    normal: ['protección y apoyo material', 'una ayuda sensible'],
    invertida: ['ese apoyo que se aleja'],
  },
  55: {
    normal: ['esperanza de mejora económica', 'orden y armonía con el dinero'],
    invertida: ['esperanzas materiales insatisfechas'],
  },
  56: {
    normal: ['una propuesta económica que llega', 'alguien que ofrece'],
    invertida: ['una decepción material'],
  },
  57: {
    normal: ['el inicio de algo material con futuro', 'una oportunidad que empieza'],
    invertida: ['algo que no se concreta'],
  },
  58: {
    normal: ['envidia por lo material ajeno', 'despecho por el dinero'],
    invertida: ['esos rasgos que se acentúan'],
  },
  59: {
    normal: ['renunciar a algo material por otra cosa', 'un período de transición económica'],
    invertida: ['una ganancia desigual, sin satisfacción'],
  },
  60: {
    normal: ['gastos o bienes ligados a los hijos', 'el sustento de la familia'],
    invertida: ['una preocupación material, para atender'],
  },
  61: {
    normal: ['crecer más allá de lo material', 'prosperidad con sentido'],
    invertida: ['no aprovechar una oportunidad de crecer'],
  },
  62: {
    normal: ['sentido práctico con el dinero', 'bienes y estabilidad'],
    invertida: ['enredos y demoras en las cuentas'],
  },
  63: {
    normal: ['poder material y autoridad', 'bienes bien administrados'],
    invertida: ['lo contrario: desorden material'],
  },
  64: {
    normal: ['ganar por la imagen o el atractivo', 'un éxito material pasajero'],
    invertida: ['dejarse llevar y quedar con las manos vacías'],
  },
  65: {
    normal: ['ambición y suerte en lo material', 'sacar provecho de cada situación'],
    invertida: ['problemas por mala administración'],
  },
  66: {
    normal: ['negocios favorables por tenacidad', 'éxitos materiales por empuje'],
    invertida: ['apatía y pasividad'],
  },
  67: {
    normal: ['ganancias rápidas y turbias', 'riqueza de corta duración'],
    invertida: ['exceso y falta de escrúpulos'],
  },
  68: {
    normal: ['dejarse llevar en las finanzas', 'inseguridad para decidir un gasto'],
    invertida: ['un intento de ordenarse'],
  },
  69: {
    normal: ['tentaciones de gasto', 'vicios que cuestan dinero'],
    invertida: ['alejarse de un gasto tentador'],
  },
  70: {
    normal: ['adversidad en lo material', 'un clima económico en contra'],
    invertida: ['mal cálculo, error de manejo'],
  },
  71: {
    normal: ['inestabilidad material', 'logros que se deshacen'],
    invertida: ['ganancias de corta duración'],
  },
  72: {
    normal: ['avaricia y codicia', 'la tentación del dinero fácil, un estafador'],
    invertida: ['no obtener lo buscado, víctima de la codicia'],
  },
  73: {
    normal: ['retrasos y trabas económicas', 'estancamiento en un cobro'],
    invertida: ['se consigue, aunque tarde'],
  },
  74: {
    normal: ['angustia por el dinero', 'una situación material que agobia'],
    invertida: ['una angustia económica extrema'],
  },
  75: {
    normal: ['orgullo que no deja pedir ayuda material', 'soberbia con el dinero'],
    invertida: ['dejar el orgullo y aceptar ayuda'],
  },
  76: {
    normal: ['una pérdida o gasto súbito', 'rupturas de acuerdos'],
    invertida: ['contratiempos económicos pasajeros'],
  },
  77: { normal: ['engaño y corrupción con el dinero', 'falta de escrúpulos'] },
  78: {
    normal: ['usar artimañas para conseguir dinero o favores', 'manipular por interés'],
    invertida: ['no lograrlo, quedando en apuros'],
  },
};

export const FRAGMENTOS_ANGELES_ES: Partial<Record<Tema, FragmentosDeTemaAngel>> = {
  amor,
  trabajo,
  dinero,
};
