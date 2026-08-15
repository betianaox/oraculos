import type { Tema } from '@/pregunta/tipos';

// ─────────────────────────────────────────────────────────────────────────
// ENCUADRE POR TEMA para los fragmentos de Egipcio.
//
// Por qué existe. Tarot y Ángeles tienen bancos de fragmentos escritos tema por
// tema: la misma carta dice una cosa en una pregunta de amor y otra en una de
// trabajo. Egipcio no los tiene todavía —sus fragmentos salen de las `claves`
// de la ficha— y por eso su lectura llegaba en abstracto: alguien preguntaba si
// le renuevan el contrato y leía "sabiduría y previsión", dos palabras que no
// se pueden atar a nada.
//
// Esto es el puente barato hasta que se escriba ese banco: no cambia QUÉ dice
// cada carta, pero lo ancla al asunto por el que se preguntó. "Sabiduría y
// previsión" pasa a ser "sabiduría y previsión en lo que estás haciendo", y ahí
// la persona sí reconoce su pregunta.
//
// Reglas de escritura (las mismas que en es/bancos.ts): claro antes que
// elevado, y místico sobrio. Los encuadres son de una pieza corta y van SIEMPRE
// detrás del fragmento, así que no pueden pedirle una forma determinada: tienen
// que funcionar tanto tras un sintagma nominal ("sabiduría y previsión") como
// tras una cláusula con verbo ("el poder no encuentra cauce").
//
// `''` = sin encuadre, el fragmento va solo. Está en todos los pools a
// propósito: si cada una de las cinco cartas arrastrara su coletilla, el
// párrafo se volvería un sonsonete. Con una de cada tres alcanza para situar.
// ─────────────────────────────────────────────────────────────────────────

export const ENCUADRES_ES: Record<Tema, string[]> = {
  amor: ['', '', 'en ese vínculo', 'en lo que sientes', 'entre ustedes dos'],
  trabajo: ['', '', 'en lo que estás haciendo', 'en el trabajo', 'en tu día a día laboral'],
  dinero: ['', '', 'con la plata', 'en las cuentas', 'en lo que tienes que resolver'],
  general: ['', '', 'en este momento tuyo', 'en lo que estás viviendo', 'en esto que traes'],
};
