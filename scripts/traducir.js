/**
 * ─────────────────────────────────────────────────────────────────────────
 * TRADUCTOR DE ARCHIVOS DE CONTENIDO
 * ─────────────────────────────────────────────────────────────────────────
 * Traduce un archivo .ts de contenido a otro idioma SIN tocar el codigo.
 *
 * La idea clave: no se le pide al modelo que devuelva TypeScript. Eso siempre
 * termina con el modelo "mejorando" la estructura, renombrando exports o
 * comiendose una coma. En vez de eso:
 *
 *   1. Se parsea el archivo con el compilador de TypeScript (ya esta instalado).
 *   2. Se recorre el AST y se juntan SOLO los literales de texto que hay que
 *      traducir, con su posicion exacta en el archivo.
 *   3. Se traducen en tandas, como una lista.
 *   4. Se reemplazan por posicion, de atras hacia adelante, sobre el texto
 *      original.
 *
 * Asi el codigo que sale es, byte a byte, el mismo que entro salvo por el
 * contenido de las comillas. Es imposible que rompa la estructura.
 *
 * USO:
 *   node scripts/traducir.js <archivo> <idioma> [--salida <ruta>] [--limite N]
 *
 * EJEMPLOS:
 *   node scripts/traducir.js src/oraculos/buzios/content/es/textos.ts pt
 *   node scripts/traducir.js src/oraculos/buzios/content/es/odus.ts en --limite 10
 *
 * Necesita GEMINI_API_KEY (o EXPO_PUBLIC_GEMINI_API_KEY) en el entorno o en
 * .env.local.
 */
const fs = require('fs');
const path = require('path');

const ts = require(path.join(process.cwd(), 'node_modules', 'typescript'));

const IDIOMAS = {
  en: 'inglés',
  pt: 'portugués de Brasil',
  it: 'italiano',
  fr: 'francés',
};

/**
 * Cuantos textos se mandan por pedido.
 *
 * Con tandas grandes el modelo junta dos textos cortos en uno y devuelve menos
 * de los que se mandaron, y hay que partir y reintentar. Doce es el punto
 * donde eso casi no pasa sin disparar demasiados pedidos por minuto.
 */
const POR_TANDA = 12;

/**
 * Memoria de lo ya traducido, para poder cortar y retomar.
 *
 * Antes el archivo se escribia recien al final: si fallaba en la tanda 56 de
 * 57, se perdia todo y habia que pagar la cuota de nuevo. Ahora cada tanda se
 * guarda apenas vuelve, indexada por el texto original, asi que volver a
 * correr el mismo comando retoma donde iba y lo ya hecho sale gratis.
 */
const CACHE = path.join(process.cwd(), '.traduccion-cache.json');

/**
 * Pausa entre pedidos. El nivel gratuito de Gemini permite unos 15 por minuto:
 * sin este freno, un archivo largo dispara una rafaga, empieza a recibir 429 y
 * termina dejando textos sin traducir. Mejor tardar un poco mas y que salga
 * completo de una.
 */
const PAUSA_MS = 4500;

const MODELO = process.env.GEMINI_MODEL ?? 'gemini-3.1-flash-lite';

/**
 * Propiedades cuyo valor NUNCA se traduce: son identificadores internos, no
 * texto que alguien lee. Traducir un `id: 'mayores'` rompe la app en silencio.
 */
const NO_TRADUCIR = new Set(['id', 'slug', 'src', 'key', 'ruta', 'icon', 'icono']);

// ── Extraccion ───────────────────────────────────────────────────────────

/**
 * Devuelve los literales de texto traducibles, con su rango en el archivo.
 * Se saltean los nombres de propiedad (las claves de los objetos), los imports
 * y los valores de las propiedades de `NO_TRADUCIR`.
 */
/**
 * Arma un programa con la configuracion real del proyecto (hace falta el
 * tsconfig por los alias tipo "@/..."), para poder preguntarle al verificador
 * de tipos que se espera en cada lugar.
 */
function abrirPrograma(archivo) {
  const ruta = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.json');
  let opciones = { target: ts.ScriptTarget.Latest, allowJs: false };
  if (ruta) {
    const leido = ts.readConfigFile(ruta, ts.sys.readFile);
    opciones = ts.parseJsonConfigFileContent(leido.config, ts.sys, path.dirname(ruta)).options;
  }
  const programa = ts.createProgram([archivo], opciones);
  return { programa, checker: programa.getTypeChecker() };
}

/**
 * ¿El lugar donde vive este texto espera un valor de una lista cerrada?
 *
 * Es la diferencia entre `derecho: 'La capacidad de...'` (texto que alguien
 * lee) y `arcano: 'mayor'` (un valor del tipo 'mayor' | 'menor'). El segundo
 * NO se traduce: "major" no es una traduccion, es otro valor que no existe y
 * rompe la logica que compara con 'mayor'.
 *
 * Se le pregunta al verificador en vez de mantener una lista de propiedades
 * prohibidas, que siempre se queda corta cuando aparece contenido nuevo.
 */
function esValorDelCodigo(checker, nodo) {
  const tipo = checker.getContextualType(nodo);
  if (!tipo) return false;
  if (tipo.isStringLiteral()) return true;
  if (tipo.isUnion()) return tipo.types.every((t) => t.isStringLiteral());
  return false;
}

function extraer(codigo, archivo) {
  const { programa, checker } = abrirPrograma(archivo);
  const fuente = programa.getSourceFile(archivo)
    ?? ts.createSourceFile(archivo, codigo, ts.ScriptTarget.Latest, true);
  const encontrados = [];

  const agregar = (inicio, fin, texto, tipo) => {
    if (/\p{L}/u.test(texto)) encontrados.push({ inicio, fin, texto, tipo });
  };

  const visitar = (nodo) => {
    if (ts.isStringLiteral(nodo) || ts.isNoSubstitutionTemplateLiteral(nodo)) {
      if (traducible(nodo) && !esValorDelCodigo(checker, nodo)) {
        // +1 y -1 para quedarse con el contenido, sin las comillas
        agregar(nodo.getStart(fuente) + 1, nodo.getEnd() - 1, nodo.text, 'comilla');
      }
    } else if (ts.isTemplateExpression(nodo)) {
      // Template con variables adentro: `${n} abiertos`. El texto NO es un
      // literal suelto sino los pedazos entre las variables, y cada pedazo hay
      // que traducirlo por separado. Sin esto quedaban en español y era mudo:
      // el archivo compilaba igual.
      //
      // Delimitadores: la cabeza abre con ` y cierra con ${ (2 caracteres);
      // los del medio abren con } y cierran con ${; la cola abre con } y
      // cierra con ` (1 caracter).
      agregar(nodo.head.getStart(fuente) + 1, nodo.head.getEnd() - 2, nodo.head.text, 'template');
      for (const span of nodo.templateSpans) {
        const lit = span.literal;
        const finReal = ts.isTemplateTail(lit) ? lit.getEnd() - 1 : lit.getEnd() - 2;
        agregar(lit.getStart(fuente) + 1, finReal, lit.text, 'template');
      }
    }
    ts.forEachChild(nodo, visitar);
  };

  visitar(fuente);
  return encontrados;
}

function traducible(nodo) {
  const padre = nodo.parent;
  if (!padre) return false;

  // Rutas de import/export: nunca.
  if (ts.isImportDeclaration(padre) || ts.isExportDeclaration(padre)) return false;

  // Clave de un objeto ({ 'mayor-01': {...} }): es un identificador.
  if (ts.isPropertyAssignment(padre) && padre.name === nodo) return false;

  // Literal en posicion de TIPO: Record<'pasado' | 'futuro', string[]>. No es
  // texto, es parte de la firma, y traducirlo rompe el tipo. El verificador de
  // tipos no lo atrapa porque estos literales no tienen "tipo contextual": son
  // el tipo.
  if (ts.isLiteralTypeNode(padre)) return false;

  // Valor de una propiedad marcada como no traducible.
  if (ts.isPropertyAssignment(padre) && padre.name) {
    const nombre = padre.name.getText();
    if (NO_TRADUCIR.has(nombre.replace(/['"]/g, ''))) return false;
  }

  return true;
}

// ── Traduccion ───────────────────────────────────────────────────────────

function clave() {
  const directa = process.env.GEMINI_API_KEY ?? process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  if (directa) return directa;

  // Comodidad: si no esta en el entorno, se busca en .env.local
  const env = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(env)) {
    const m = fs
      .readFileSync(env, 'utf8')
      .match(/^(?:EXPO_PUBLIC_)?GEMINI_API_KEY=(.+)$/m);
    if (m) return m[1].trim();
  }
  return null;
}

function instrucciones(idioma) {
  return [
    `Traduces contenido de una app de oráculos del español al ${IDIOMAS[idioma]}.`,
    '',
    '# Reglas',
    '- Devuelves EXCLUSIVAMENTE un array JSON de strings, del mismo largo y en',
    '  el mismo orden que el que recibes. Sin explicaciones, sin markdown.',
    '- Traduces el sentido, no palabra por palabra. Tiene que sonar escrito en',
    `  ${IDIOMAS[idioma]}, no traducido.`,
    '- Respetas el registro: es una voz reflexiva y cálida, que acompaña y no',
    '  sentencia. Nunca adivinatoria.',
    '- Mantienes el largo aproximado de cada texto. Es contenido que entra en',
    '  pantallas de teléfono.',
    '- NO traduces los nombres propios de las piezas: los arcanos, las runas,',
    '  los ángeles y los odus conservan el nombre con el que se los conoce en',
    `  ${IDIOMAS[idioma]} si existe, y si no, se dejan igual.`,
    '- Conservas EXACTAMENTE los marcadores entre llaves ({frag1}, {nombre},',
    '  {tema}...) y cualquier signo de puntuación estructural.',
    '- Si un texto ya está en el idioma destino o no tiene nada que traducir,',
    '  lo devuelves igual.',
  ].join('\n');
}

async function traducirTanda(textos, idioma, apiKey) {
  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/' +
    `${MODELO}:generateContent`;

  const respuesta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: instrucciones(idioma) }] },
      contents: [{ role: 'user', parts: [{ text: JSON.stringify(textos, null, 1) }] }],
      generationConfig: {
        // Baja: se busca fidelidad, no creatividad.
        temperature: 0.2,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text().catch(() => '');
    const error = new Error(`Gemini respondió ${respuesta.status}: ${detalle.slice(0, 200)}`);
    // 429 = demasiados pedidos por minuto (el nivel gratuito permite pocos).
    // 503 = saturado. Los dos se arreglan esperando, NO partiendo la tanda:
    // partir genera mas pedidos y hunde mas la cuota.
    error.esperar = respuesta.status === 429 || respuesta.status === 503;
    throw error;
  }

  const cuerpo = await respuesta.json();
  const crudo = (cuerpo?.candidates?.[0]?.content?.parts ?? [])
    .map((p) => p.text ?? '')
    .join('');

  let salida;
  try {
    salida = JSON.parse(crudo);
  } catch {
    throw new Error(`La respuesta no era JSON:\n${crudo.slice(0, 300)}`);
  }

  if (!Array.isArray(salida) || salida.length !== textos.length) {
    throw new Error(
      `Volvieron ${Array.isArray(salida) ? salida.length : '?'} textos y se mandaron ${textos.length}`,
    );
  }
  return salida;
}

/**
 * Traduce una tanda aguantando que el modelo devuelva de mas o de menos, que
 * pasa cada tanto: junta dos textos cortos en uno, o se saltea alguno.
 *
 * En vez de tirar el archivo entero a la basura, parte la tanda al medio y
 * reintenta. Con tandas de a uno el modelo no tiene con que confundirse; si
 * aun asi falla, se deja el texto original en español y se avisa, que es
 * preferible a dejar un hueco.
 */
const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Memoria de traducciones ──────────────────────────────────────────────

function leerCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE, 'utf8'));
  } catch {
    return {};
  }
}

function guardarCache(cache) {
  fs.writeFileSync(CACHE, JSON.stringify(cache), 'utf8');
}

/** La clave incluye el idioma: el mismo texto se traduce distinto a cada uno. */
const claveCache = (idioma, texto) => `${idioma} ${texto}`;

async function traducirConReintento(textos, idioma, apiKey, sinTraducir, intento = 0) {
  try {
    return await traducirTanda(textos, idioma, apiKey);
  } catch (e) {
    // Problema de cuota: no es culpa de la tanda. Se espera y se reintenta lo
    // mismo, cada vez un poco mas.
    if (e.esperar && intento < 5) {
      const espera = 20000 * (intento + 1);
      process.stdout.write(`(cuota, espero ${espera / 1000}s) `);
      await dormir(espera);
      return traducirConReintento(textos, idioma, apiKey, sinTraducir, intento + 1);
    }

    if (textos.length === 1) {
      sinTraducir.push(textos[0]);
      return textos;
    }

    // Recien aca se parte: el modelo contesto, pero devolvio otra cantidad.
    const mitad = Math.ceil(textos.length / 2);
    process.stdout.write(`(se parte en ${mitad}+${textos.length - mitad}) `);
    const a = await traducirConReintento(textos.slice(0, mitad), idioma, apiKey, sinTraducir);
    const b = await traducirConReintento(textos.slice(mitad), idioma, apiKey, sinTraducir);
    return [...a, ...b];
  }
}

// ── Principal ────────────────────────────────────────────────────────────

async function main() {
  const [archivo, idioma] = process.argv.slice(2);
  const flag = (n) => {
    const i = process.argv.indexOf(n);
    return i > -1 ? process.argv[i + 1] : null;
  };

  if (!archivo || !idioma || !IDIOMAS[idioma]) {
    console.error('uso: node scripts/traducir.js <archivo> <idioma> [--salida <ruta>] [--limite N]');
    console.error('idiomas:', Object.keys(IDIOMAS).join(', '));
    process.exit(1);
  }

  const apiKey = clave();
  if (!apiKey) {
    console.error('Falta GEMINI_API_KEY (en el entorno o en .env.local)');
    process.exit(1);
  }

  const codigo = fs.readFileSync(archivo, 'utf8');
  let piezas = extraer(codigo, archivo);

  const limite = flag('--limite');
  if (limite) piezas = piezas.slice(0, Number(limite));

  console.log(`${piezas.length} textos para traducir al ${IDIOMAS[idioma]}`);
  if (piezas.length === 0) return;

  const cache = leerCache();
  const yaEstaban = piezas.filter((p) => claveCache(idioma, p.texto) in cache).length;
  if (yaEstaban > 0) {
    console.log(`  ${yaEstaban} ya estaban traducidos de una corrida anterior`);
  }

  const sinTraducir = [];
  for (let i = 0; i < piezas.length; i += POR_TANDA) {
    const tanda = piezas.slice(i, i + POR_TANDA);
    const faltan = tanda.filter((p) => !(claveCache(idioma, p.texto) in cache));

    if (faltan.length === 0) continue;

    process.stdout.write(`  ${i + 1}-${i + tanda.length} de ${piezas.length}... `);
    const salida = await traducirConReintento(
      faltan.map((p) => p.texto),
      idioma,
      apiKey,
      sinTraducir,
    );

    // Se guarda apenas vuelve, no al final: si se corta acá, lo que ya salio
    // queda hecho y la proxima corrida arranca de este punto.
    faltan.forEach((p, j) => {
      cache[claveCache(idioma, p.texto)] = salida[j];
    });
    guardarCache(cache);

    console.log('ok');
    if (i + POR_TANDA < piezas.length) await dormir(PAUSA_MS);
  }

  const traducidos = piezas.map((p) => cache[claveCache(idioma, p.texto)] ?? p.texto);

  // De atras hacia adelante: si se reemplazara de adelante, cada cambio correria
  // las posiciones de todos los siguientes.
  let resultado = codigo;
  for (let i = piezas.length - 1; i >= 0; i--) {
    const p = piezas[i];
    const nuevo = escapar(conMismosBordes(p.texto, traducidos[i]), p, codigo);
    resultado = resultado.slice(0, p.inicio) + nuevo + resultado.slice(p.fin);
  }

  // Los exports llevan el idioma en el nombre (TEXTOS_ES, ODUS_ES). Si no se
  // renombran, el paquete del idioma nuevo importaria algo que dice ES.
  const SUF = idioma.toUpperCase();
  resultado = resultado.replace(/\b([A-Z][A-Z0-9_]*)_ES\b/g, `$1_${SUF}`);

  // Una linea arriba de todo diciendo de donde salio el archivo. Es dato, no
  // promesa: cuando algo suene raro en este idioma, explica por que y por
  // donde arreglarlo.
  resultado =
    `// Traducido al ${IDIOMAS[idioma]} desde el original en español con scripts/traducir.js.\n` +
    resultado;

  // Se acepta la ruta con / o con \: en Windows la consola pasa una cosa y
  // path.sep dice otra.
  const salida = flag('--salida') ?? archivo.replace(/[\\/]es[\\/]/, `/${idioma}/`);
  if (salida === archivo) {
    console.error('La salida coincide con la entrada. Pasá --salida.');
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(salida), { recursive: true });
  fs.writeFileSync(salida, resultado, 'utf8');
  console.log(`\nescrito: ${salida}`);
  if (sinTraducir.length > 0) {
    console.log(`\n⚠ ${sinTraducir.length} textos quedaron en español (fallaron aun de a uno):`);
    for (const t of sinTraducir.slice(0, 10)) console.log(`   "${t.slice(0, 70)}"`);
  }
  console.log('Revisalo y corré `npx tsc --noEmit` antes de darlo por bueno.');
}

/**
 * Devuelve la traduccion con los MISMOS espacios de los bordes que tenia el
 * original.
 *
 * Los textos largos del contenido estan partidos en varias lineas y unidos con
 * `+`, y el corte suele caer en medio de una frase: por eso el original termina
 * con un espacio. El modelo devuelve el texto recortado, y sin esto quedaban
 * dos palabras pegadas al concatenar ("no se podever el camino"). Es invisible
 * en el codigo y salta recien en pantalla.
 */
function conMismosBordes(original, traducido) {
  const adelante = original.match(/^\s*/)[0];
  const atras = original.match(/\s*$/)[0];
  return adelante + traducido.trim() + atras;
}

/** Escapa lo minimo para no romper el delimitador que ya usaba el archivo. */
function escapar(texto, pieza, codigo) {
  const base = texto.replace(/\\/g, '\\\\');

  // Dentro de un template hay que cuidar la comilla invertida y el ${, que
  // abriria una interpolacion que nadie pidio.
  if (pieza.tipo === 'template') {
    return base.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  }

  const comilla = codigo[pieza.inicio - 1];
  if (comilla === "'") return base.replace(/'/g, "\\'");
  if (comilla === '"') return base.replace(/"/g, '\\"');
  if (comilla === '`') return base.replace(/`/g, '\\`');
  return base;
}

main().catch((e) => {
  console.error('\n' + e.message);
  // exitCode y no process.exit(): cortar de golpe con pedidos de red todavia
  // abiertos hace que libuv reviente con un assert en Windows, y el error real
  // queda tapado por el ruido.
  process.exitCode = 1;
});
