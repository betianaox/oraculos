/**
 * Repara los espacios de los bordes en los archivos ya traducidos.
 *
 * EL PROBLEMA: el contenido largo esta partido en varias lineas unidas con `+`,
 * y el corte cae en medio de una frase, asi que el fragmento original termina
 * con un espacio. El modelo devuelve el texto recortado, y al concatenar
 * quedaban dos palabras pegadas: "no se podever el camino". En el codigo no se
 * ve; salta recien en pantalla.
 *
 * LA REPARACION: para cada archivo traducido se toma el original en español,
 * se emparejan los literales uno a uno (misma estructura, mismo orden) y se le
 * devuelve a cada traduccion los espacios de los bordes que tenia el original.
 * No se le pregunta nada al modelo: cuesta cero cuota.
 *
 * USO: node scripts/reparar-espacios.js [--aplicar]
 * Sin --aplicar solo informa lo que haria.
 */
const fs = require('fs');
const path = require('path');
const ts = require(path.join(process.cwd(), 'node_modules', 'typescript'));

const APLICAR = process.argv.includes('--aplicar');
const IDIOMAS = ['en', 'pt'];

/** Literales traducibles con su posicion, en el mismo criterio que traducir.js. */
function literales(archivo) {
  const codigo = fs.readFileSync(archivo, 'utf8');
  const fuente = ts.createSourceFile(archivo, codigo, ts.ScriptTarget.Latest, true);
  const out = [];

  const visitar = (nodo) => {
    if (ts.isStringLiteral(nodo) || ts.isNoSubstitutionTemplateLiteral(nodo)) {
      const padre = nodo.parent;
      const esClave = padre && ts.isPropertyAssignment(padre) && padre.name === nodo;
      const esImport =
        padre && (ts.isImportDeclaration(padre) || ts.isExportDeclaration(padre));
      if (!esClave && !esImport && /\p{L}/u.test(nodo.text)) {
        out.push({
          inicio: nodo.getStart(fuente) + 1,
          fin: nodo.getEnd() - 1,
          texto: nodo.text,
        });
      }
    }
    ts.forEachChild(nodo, visitar);
  };

  visitar(fuente);
  return { codigo, literales: out };
}

function paresTraducidos(dir, acumulado = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) paresTraducidos(p, acumulado);
    else if (p.endsWith('.ts') && p.includes(`${path.sep}es${path.sep}`)) {
      for (const idioma of IDIOMAS) {
        const destino = p.replace(`${path.sep}es${path.sep}`, `${path.sep}${idioma}${path.sep}`);
        if (fs.existsSync(destino)) acumulado.push([p, destino]);
      }
    }
  }
  return acumulado;
}

let totalArreglados = 0;

for (const [origen, destino] of paresTraducidos('src/oraculos')) {
  const a = literales(origen);
  const b = literales(destino);

  // Si no coinciden en cantidad, el archivo no salio de este traductor (o
  // cambio el original despues). No se toca: emparejar a ciegas seria peor.
  if (a.literales.length !== b.literales.length) {
    console.log(`  se saltea (estructura distinta): ${destino}`);
    continue;
  }

  let codigo = b.codigo;
  let arreglados = 0;

  // De atras hacia adelante: cada cambio corre las posiciones siguientes.
  for (let i = b.literales.length - 1; i >= 0; i--) {
    const orig = a.literales[i].texto;
    const trad = b.literales[i];

    const adelante = orig.match(/^\s*/)[0];
    const atras = orig.match(/\s*$/)[0];
    const corregido = adelante + trad.texto.trim() + atras;
    if (corregido === trad.texto) continue;

    // Se escapa igual que en el archivo: se mira la comilla que ya estaba.
    const comilla = codigo[trad.inicio - 1];
    let valor = corregido.replace(/\\/g, '\\\\');
    if (comilla === "'") valor = valor.replace(/'/g, "\\'");
    else if (comilla === '"') valor = valor.replace(/"/g, '\\"');
    else if (comilla === '`') valor = valor.replace(/`/g, '\\`');

    codigo = codigo.slice(0, trad.inicio) + valor + codigo.slice(trad.fin);
    arreglados++;
  }

  if (arreglados === 0) continue;
  totalArreglados += arreglados;
  console.log(`  ${arreglados} arreglados en ${destino}`);
  if (APLICAR) fs.writeFileSync(destino, codigo, 'utf8');
}

console.log('---');
console.log(
  APLICAR
    ? `${totalArreglados} textos corregidos.`
    : `${totalArreglados} textos para corregir. Corré con --aplicar para escribirlos.`,
);
