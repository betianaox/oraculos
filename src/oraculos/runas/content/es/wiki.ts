import type { RunaId } from './types';

// Contenido de la Wiki: una ficha de aprendizaje por runa (palabras clave,
// significado derecho/invertido y simbolismo tradicional). A diferencia de
// los fragmentos de lectura (content/es/fragmentos/), esto no varía por tema
// ni se combina en frases — es la explicación de referencia que se lee en la
// pantalla de detalle. Solo existe en español por ahora (igual que el resto
// del contenido de idioma secundario, cae a español hasta que se traduzca).
export interface FichaWikiRuna {
  palabrasClave: {
    normal: string[];
    invertida: string[];
  };
  significado: {
    normal: string;
    invertida: string;
  };
  simbolismo: string;
}

export const WIKI_RUNAS: Record<RunaId, FichaWikiRuna> = {
  fehu: {
    palabrasClave: {
      normal: ['prosperidad', 'recursos', 'base sólida', 'abundancia'],
      invertida: ['escasez', 'apego', 'inseguridad material'],
    },
    significado: {
      normal:
        'Fehu habla de los recursos que ya tienes, aunque no siempre los valores del todo. ' +
        'Es la prosperidad que llega cuando se cuida y se pone en movimiento lo que ya está en ' +
        'marcha: una base sólida construida con lo disponible, no con lo que falta.',
      invertida:
        'Del revés, Fehu es el miedo a que falte, más allá de si realmente falta algo. Aparece ' +
        'la necesidad de retener, la dificultad de compartir por temor a quedarse con las manos ' +
        'vacías, o la inseguridad de no saber si lo que se da alguna vez vuelve.',
    },
    simbolismo:
      'Su nombre significa "ganado": en las culturas germánicas antiguas, el ganado era la forma ' +
      'de riqueza más directa y transportable. De ahí que Fehu abra el alfabeto rúnico como símbolo ' +
      'de recursos, prosperidad y movimiento de bienes.',
  },
  uruz: {
    palabrasClave: {
      normal: ['fuerza', 'vitalidad', 'impulso', 'coraje'],
      invertida: ['imposición', 'dureza', 'agotamiento'],
    },
    significado: {
      normal:
        'Uruz es la fuerza interior que tienes más presente de lo que crees: el impulso necesario ' +
        'para animarte a algo que vienes postergando, la vitalidad para encarar lo que se viene ' +
        'con más energía y sin pedir permiso.',
      invertida:
        'Invertida, Uruz puede señalar una energía que se impone en vez de acompañar, o el ' +
        'cansancio de sostener algo solo, sin pedir ayuda. También la dureza que aparece cuando en ' +
        'realidad hace falta ternura.',
    },
    simbolismo:
      'Representa al uro, un bovino salvaje ya extinto, símbolo de fuerza bruta y resistencia. A ' +
      'diferencia de Fehu (el ganado domesticado), Uruz habla de una fuerza indómita, propia, no ' +
      'gestionada por nadie más.',
  },
  thurisaz: {
    palabrasClave: {
      normal: ['límite', 'protección', 'defensa', 'pausa'],
      invertida: ['impulsividad', 'conflicto evitado', 'muro'],
    },
    significado: {
      normal:
        'Thurisaz marca un límite que conviene poner antes de que la situación se desborde. Es la ' +
        'pausa necesaria antes de reaccionar a algo que molestó, y la fuerza para defender algo que ' +
        'realmente importa.',
      invertida:
        'Del revés, habla de una reacción impulsiva que puede lastimar más de lo que protege, de un ' +
        'conflicto que se evita en vez de nombrarlo, o de un muro que termina alejando en vez de ' +
        'proteger.',
    },
    simbolismo:
      'Su nombre remite a la espina o al gigante (thurs): una fuerza defensiva, punzante, que puede ' +
      'proteger o herir según cómo se use. Su forma —una punta que sobresale— evoca justamente eso: ' +
      'un límite afilado.',
  },
  ansuz: {
    palabrasClave: {
      normal: ['comunicación', 'verdad', 'escucha', 'claridad'],
      invertida: ['malentendido', 'silencio', 'palabras hirientes'],
    },
    significado: {
      normal:
        'Ansuz trae una conversación honesta que viene postergándose: la claridad para decir lo que ' +
        'realmente se piensa, y la escucha genuina de lo que otro necesita decir.',
      invertida:
        'Invertida, señala un malentendido que crece por no aclararlo a tiempo, palabras dichas sin ' +
        'pensar que dejan marca, o un silencio que reemplaza algo que debería decirse.',
    },
    simbolismo:
      'Se asocia a la boca de un dios —tradicionalmente Odín— y por extensión al habla, el mensaje ' +
      'y la comunicación divina o inspirada. Es la runa de la palabra que transforma cuando se dice ' +
      'a tiempo.',
  },
  raidho: {
    palabrasClave: {
      normal: ['avance', 'movimiento', 'camino', 'progreso'],
      invertida: ['estancamiento', 'rumbo perdido', 'desgaste'],
    },
    significado: {
      normal:
        'Raidho es el avance hacia una nueva etapa, aunque sea de a poco: la disposición a moverte ' +
        'aunque el camino cambie en el trayecto, un recorrido que empieza a tomar forma.',
      invertida:
        'Del revés, aparece la sensación de estar detenido mientras todo parece avanzar, un rumbo ' +
        'que se fue perdiendo en el día a día, o el desgaste de ir en una dirección que ya no ' +
        'convence.',
    },
    simbolismo:
      'Significa "carro" o "cabalgata": el viaje físico como metáfora del viaje vital. Habla del ' +
      'movimiento correcto, ordenado, hacia un destino, más que de la prisa o el escape.',
  },
  kaunaz: {
    palabrasClave: {
      normal: ['inspiración', 'claridad', 'chispa', 'deseo'],
      invertida: ['apagón', 'desgano', 'rutina'],
    },
    significado: {
      normal:
        'Kenaz es una chispa de claridad o inspiración que merece atención: una forma distinta de ' +
        'mirar algo que se sentía trabado, el deseo que vuelve a encenderse con algo simple.',
      invertida:
        'Invertida, es la motivación que se apaga con la rutina, un interés que se enfría sin que lo ' +
        'notes del todo, la falta de ganas de intentar algo distinto por ahora.',
    },
    simbolismo:
      'Su nombre se traduce como "antorcha" o "llaga": la luz controlada que ilumina y da calor, ' +
      'frente al fuego salvaje. Representa el conocimiento y la creatividad que se manejan con ' +
      'intención.',
  },
  gebo: {
    palabrasClave: {
      normal: ['intercambio', 'generosidad', 'equilibrio', 'gratitud'],
      invertida: ['desequilibrio', 'desgaste', 'expectativa'],
    },
    significado: {
      normal:
        'Gebo es un intercambio parejo entre lo que se da y lo que se recibe: la generosidad que ' +
        'sostiene algo importante, un gesto que se agradece sin esperar nada a cambio.',
      invertida:
        'Del revés, señala una balanza que se inclina siempre para el mismo lado, el desgaste de dar ' +
        'más de lo que se recibe, o algo que en el fondo espera una devolución.',
    },
    simbolismo:
      'Significa "regalo". Su forma —una X— representa dos fuerzas que se encuentran en igualdad de ' +
      'condiciones: un intercambio sin jerarquía, la base de cualquier vínculo sano.',
  },
  wunju: {
    palabrasClave: {
      normal: ['alegría', 'bienestar', 'armonía', 'liviandad'],
      invertida: ['felicidad forzada', 'calma aparente', 'fingir'],
    },
    significado: {
      normal:
        'Wunjo trae una alegría simple que no necesita un motivo grande: un momento de bienestar ' +
        'después de una etapa difícil, la liviandad de disfrutar algo sin analizarlo de más.',
      invertida:
        'Invertida, puede ser una felicidad forzada para no incomodar a nadie, la calma aparente que ' +
        'tapa algo pendiente, o el esfuerzo de fingir que todo está bien.',
    },
    simbolismo:
      'Su nombre está emparentado con "wish" (deseo) y con la alegría del deseo cumplido. ' +
      'Tradicionalmente representa la armonía comunitaria y el gozo compartido, no solo el individual.',
  },
  hagalaz: {
    palabrasClave: {
      normal: ['cambio brusco', 'quiebre necesario', 'sacudón', 'orden'],
      invertida: ['ruptura repentina', 'desorden', 'dificultad de aceptar'],
    },
    significado: {
      normal:
        'Hagalaz es un cambio brusco que, aunque incómodo, abre lugar a algo nuevo: un quiebre ' +
        'necesario para soltar lo que ya no servía, un sacudón que ordena las prioridades.',
      invertida:
        'Del revés, es una ruptura que llega sin demasiado aviso, el desorden que deja un cambio ' +
        'inesperado, la dificultad de aceptar algo que se cortó de golpe.',
    },
    simbolismo:
      'Significa "granizo": una fuerza natural incontrolable que golpea y luego se derrite sin dejar ' +
      'rastro. Simboliza la disrupción que, pese a su violencia, es pasajera y termina despejando el ' +
      'terreno.',
  },
  naudiz: {
    palabrasClave: {
      normal: ['paciencia', 'perseverancia', 'necesidad', 'esfuerzo'],
      invertida: ['aguante por miedo', 'necesidad confundida', 'resistencia'],
    },
    significado: {
      normal:
        'Nauthiz habla de la paciencia necesaria en un momento de carencia: el esfuerzo que se ' +
        'sostiene aunque falten recursos, la perseverancia frente a un obstáculo concreto.',
      invertida:
        'Invertida, puede ser algo que se sostiene por miedo y no por convicción, una necesidad que ' +
        'se confunde con otra cosa, o aguantar algo que ya podría empezar a resolverse.',
    },
    simbolismo:
      'Su nombre significa "necesidad" o "restricción". Representa las limitaciones que, bien ' +
      'llevadas, templan el carácter: la runa de aprender a arreglárselas con lo que hay.',
  },
  isa: {
    palabrasClave: {
      normal: ['pausa', 'calma', 'espera', 'quietud'],
      invertida: ['distancia por miedo', 'indecisión', 'estancamiento'],
    },
    significado: {
      normal:
        'Isa es una pausa útil para pensar con la cabeza fría: el tiempo justo antes de dar un paso ' +
        'importante, la calma de esperar el momento adecuado.',
      invertida:
        'Del revés, es una distancia que se instala por miedo a avanzar, la indecisión que congela ' +
        'algo pendiente, el estancamiento de no animarse a moverse todavía.',
    },
    simbolismo:
      'Significa "hielo": una única línea recta, la quietud total. Representa la inmovilidad como ' +
      'estado —ni bueno ni malo en sí mismo— que puede ser reposo reparador o parálisis, según el ' +
      'contexto.',
  },
  jera: {
    palabrasClave: {
      normal: ['cosecha', 'recompensa', 'ciclo', 'constancia'],
      invertida: ['impaciencia', 'frustración', 'proceso cortado'],
    },
    significado: {
      normal:
        'Jera trae los frutos de un esfuerzo sostenido en el tiempo: una recompensa que llega cuando ' +
        'es el momento justo, el resultado de haber sido constante con algo.',
      invertida:
        'Invertida, señala la impaciencia de querer resultados antes de tiempo, la frustración de no ' +
        'ver todavía lo que se sembró, un proceso que se corta antes de dar sus frutos.',
    },
    simbolismo:
      'Significa "año" o "cosecha": el ciclo agrícola completo, de la siembra a la recolección. ' +
      'Recuerda que los procesos naturales tienen su propio tiempo, que no se puede apurar.',
  },
  eihwaz: {
    palabrasClave: {
      normal: ['resistencia', 'fortaleza', 'coraje', 'estabilidad'],
      invertida: ['rigidez', 'parálisis', 'resistencia al cambio'],
    },
    significado: {
      normal:
        'Eihwaz aporta más resistencia de la que sientes en este momento: una fortaleza que aparece ' +
        'justo cuando más se necesita, el coraje para atravesar algo difícil.',
      invertida:
        'Del revés, puede ser una rigidez que no deja lugar para ceder, un miedo que paraliza en vez ' +
        'de impulsar, la resistencia a cambiar algo que ya no funciona.',
    },
    simbolismo:
      'Representa al tejo, un árbol longevo y de madera muy dura, tradicionalmente asociado a la ' +
      'muerte y la continuidad de la vida a la vez. Simboliza una fortaleza que resiste el paso del ' +
      'tiempo.',
  },
  perthu: {
    palabrasClave: {
      normal: ['misterio', 'confianza', 'apertura', 'destino'],
      invertida: ['control', 'resistencia a soltar', 'incertidumbre incómoda'],
    },
    significado: {
      normal:
        'Perthro es una apertura a lo inesperado: la confianza en que las cosas se van a acomodar, ' +
        'un misterio que vale la pena dejar que se revele.',
      invertida:
        'Invertida, habla de la necesidad de controlar algo que no depende solo de ti, la resistencia ' +
        'a soltar y dejar que las cosas fluyan, la incomodidad de no saber cómo va a seguir algo.',
    },
    simbolismo:
      'Se asocia a un cubilete de dados o una copa de suerte: lo que está oculto y se revela al ' +
      'echarlo. Es la runa del azar, el destino y lo que todavía no se puede ver del todo.',
  },
  algiz: {
    palabrasClave: {
      normal: ['protección', 'instinto', 'intuición', 'límite sano'],
      invertida: ['guardia alta', 'desconfianza', 'defensas excesivas'],
    },
    significado: {
      normal:
        'Algiz es un instinto que sabe algo antes de que lo razones del todo: un cuidado sano que ' +
        'protege sin encerrar, una intuición que avisa cuándo poner un límite.',
      invertida:
        'Del revés, puede ser una guardia demasiado alta que aleja más de lo que protege, el miedo a ' +
        'bajar las defensas aunque haga falta, una desconfianza que pesa más de lo necesario.',
    },
    simbolismo:
      'Representa al alce o los cuernos levantados en posición de alerta y defensa. Su forma, con ' +
      'brazos hacia arriba, es un gesto universal de protección y también de conexión con algo mayor.',
  },
  sowulo: {
    palabrasClave: {
      normal: ['claridad', 'éxito', 'vitalidad', 'confianza'],
      invertida: ['optimismo forzado', 'verdad incómoda', 'fachada'],
    },
    significado: {
      normal:
        'Sowilo trae una claridad que vuelve después de una etapa confusa: la confianza de ir por ' +
        'buen camino, un logro que se siente compartido después de un esfuerzo sostenido.',
      invertida:
        'Invertida, puede ser un optimismo forzado que tapa algo sin resolver, la dificultad de ' +
        'aceptar una verdad incómoda, mostrar entusiasmo de cara afuera mientras algo interno no ' +
        'cierra.',
    },
    simbolismo:
      'Significa "sol". La única runa que jamás se considera del todo negativa incluso invertida, ' +
      'porque el sol siempre vuelve a salir: representa la vitalidad, el éxito y la fuerza vital que ' +
      'no se apaga.',
  },
  teiwaz: {
    palabrasClave: {
      normal: ['coraje', 'justicia', 'honestidad', 'compromiso'],
      invertida: ['desequilibrio', 'desgaste', 'esfuerzo desparejo'],
    },
    significado: {
      normal:
        'Tiwaz aporta el coraje de sostener algo aunque sea difícil: la honestidad incluso cuando ' +
        'cuesta decirla, un compromiso que se defiende con convicción.',
      invertida:
        'Del revés, señala un esfuerzo que solo hace una de las partes involucradas, la cuenta ' +
        'silenciosa de quién cede más, el desgaste de insistir en algo que ya no es parejo.',
    },
    simbolismo:
      'Lleva el nombre del dios Tyr, asociado a la justicia y al sacrificio (según el mito, perdió ' +
      'una mano para mantener su palabra). Representa la honestidad que cuesta algo, pero que vale la ' +
      'pena sostener.',
  },
  berkana: {
    palabrasClave: {
      normal: ['comienzo', 'crecimiento', 'renovación', 'cuidado'],
      invertida: ['miedo a lo nuevo', 'postergación', 'crecimiento frenado'],
    },
    significado: {
      normal:
        'Berkano es un comienzo fresco, aunque sea chico: un crecimiento que se nota después de una ' +
        'etapa de cambios, algo listo para dar un paso más.',
      invertida:
        'Invertida, puede ser un crecimiento que se frena por miedo a lo nuevo, las ganas de empezar ' +
        'de nuevo sin animarse todavía, un comienzo que se posterga una y otra vez.',
    },
    simbolismo:
      'Representa al abedul, uno de los primeros árboles en crecer sobre tierra devastada. Simboliza ' +
      'la renovación, la maternidad y el cuidado que hace posible un comienzo.',
  },
  ehwaz: {
    palabrasClave: {
      normal: ['cooperación', 'confianza mutua', 'avance conjunto', 'movimiento'],
      invertida: ['desacople', 'confianza a reparar', 'carga desigual'],
    },
    significado: {
      normal:
        'Ehwaz habla de lo que avanza mejor cuando se hace de a dos: una confianza mutua que sostiene ' +
        'decisiones importantes, el avance hacia un mismo objetivo compartido.',
      invertida:
        'Del revés, señala una sola persona sosteniendo algo que debería ser de a dos, una confianza ' +
        'que necesita repararse después de algo puntual, el desacople entre lo que cada uno espera ' +
        'del otro.',
    },
    simbolismo:
      'Representa al caballo, símbolo del vínculo de cooperación entre el animal y su jinete: dos ' +
      'voluntades distintas que avanzan como una sola cuando confían entre sí.',
  },
  mannaz: {
    palabrasClave: {
      normal: ['comunidad', 'apoyo', 'cooperación', 'conexión'],
      invertida: ['aislamiento', 'dificultad para pedir ayuda', 'encierro'],
    },
    significado: {
      normal:
        'Mannaz es el apoyo de las personas que tienes cerca: una conexión real basada en la ' +
        'cooperación, el sostén de una comunidad, aunque sea chica.',
      invertida:
        'Invertida, puede ser el aislamiento de resolver todo sin pedir ayuda, la dificultad de ' +
        'apoyarte en otros cuando hace falta, una tendencia a cerrarte sobre ti mismo.',
    },
    simbolismo:
      'Significa "ser humano". Representa a la persona en su dimensión social: nadie se sostiene ' +
      'solo, y esta runa recuerda el valor de la comunidad y la interdependencia.',
  },
  laguz: {
    palabrasClave: {
      normal: ['intuición', 'emoción', 'fluidez', 'sabiduría interior'],
      invertida: ['desborde emocional', 'confusión', 'intensidad sin claridad'],
    },
    significado: {
      normal:
        'Laguz es una intuición que sabe más de lo que la razón admite: una emoción que conviene ' +
        'seguir de cerca, la sabiduría de confiar en lo que el instinto dice.',
      invertida:
        'Del revés, puede ser una emoción intensa que nubla la claridad, el desborde de sentir todo a ' +
        'la vez, confundir intensidad con certeza.',
    },
    simbolismo:
      'Significa "agua": el elemento que fluye, se adapta y no se puede sostener con las manos. ' +
      'Representa el mundo emocional e intuitivo, tan real como el racional aunque menos tangible.',
  },
  ingwaz: {
    palabrasClave: {
      normal: ['potencial', 'gestación', 'maduración', 'paciencia'],
      invertida: ['impaciencia', 'forzar el proceso', 'ansiedad'],
    },
    significado: {
      normal:
        'Ingwaz es algo que se está gestando y todavía necesita su tiempo: un potencial que conviene ' +
        'dejar madurar antes de actuar, una semilla que ya está puesta y va a dar sus frutos.',
      invertida:
        'Invertida, señala la impaciencia de querer forzar algo que no está listo, las ganas de ' +
        'acelerar un proceso que pide calma, la ansiedad de no saber esperar el momento justo.',
    },
    simbolismo:
      'Lleva el nombre del dios Ing, asociado a la fertilidad y la tierra. Su forma cerrada, como una ' +
      'semilla, representa el potencial contenido que todavía no se liberó.',
  },
  dagaz: {
    palabrasClave: {
      normal: ['punto de inflexión', 'claridad', 'transformación', 'despertar'],
      invertida: ['resistencia al cambio', 'aferrarse al pasado', 'negación'],
    },
    significado: {
      normal:
        'Dagaz es un punto de inflexión que cambia la forma de ver algo: una claridad que llega ' +
        'después de una etapa confusa, un comienzo que se nota casi de un día para el otro.',
      invertida:
        'Del revés, puede ser la resistencia a soltar cómo eran antes las cosas, la dificultad de ' +
        'aceptar que algo ya cambió, aferrarse a una versión de algo que ya no está.',
    },
    simbolismo:
      'Significa "día" o "amanecer": el momento exacto en que la oscuridad se vuelve luz. Representa ' +
      'la transformación total y positiva, el antes y el después bien marcados.',
  },
  othala: {
    palabrasClave: {
      normal: ['herencia', 'valores', 'raíces', 'pertenencia'],
      invertida: ['patrones heredados', 'expectativa ajena', 'apego al pasado'],
    },
    significado: {
      normal:
        'Othala habla de los valores que sostienen las decisiones importantes: una raíz que le da ' +
        'sentido a lo que viene, el respeto por de dónde vienes.',
      invertida:
        'Invertida, puede señalar patrones que se repiten sin darse cuenta, una expectativa heredada ' +
        'que pesa más de lo necesario, la dificultad de soltar una forma vieja de hacer las cosas.',
    },
    simbolismo:
      'Significa "hogar ancestral" o "patrimonio". Cierra el alfabeto rúnico como símbolo de lo que se ' +
      'hereda —bienes, valores, identidad— y de cómo eso sigue moldeando el presente.',
  },
};
