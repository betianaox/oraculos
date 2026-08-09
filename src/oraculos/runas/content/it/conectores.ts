// Il tessuto tra le rune e la persona.
//
// Qui le rune NON vengono nominate: la persona le vede sullo schermo, e quello
// che si aspetta di leggere è cosa dicono sulla sua domanda, non la
// definizione di ciascuna.
//
// Placeholders: {frag1} {frag2} {frag3} = frammenti di fragmentos/<tema>.ts
//
// ATTENZIONE: i frammenti sono frasi brevi di forma variabile. Questi modelli
// usano i due punti o la virgola per accoglierle tutte senza rompersi.

/** Chiude il primo paragrafo: la situazione, con le prime due rune. */
export const situacion: string[] = [
  'Sotto si muove qualcosa: {frag1}. E accanto a questo, {frag2}.',
  'Ciò che circonda la questione: {frag1}. A sostenere tutto, {frag2}.',
  'Per prima cosa affiora questo: {frag1}. E dietro, {frag2}.',
  'Ci sono due cose in gioco: {frag1}, e anche {frag2}.',
  'Quello che si vede subito: {frag1}. Quello che pulsa sotto: {frag2}.',
];

/**
 * Secondo paragrafo: la terza runa, l'unica che guarda avanti. Con una sfumatura
 * di anticipazione, sempre come tendenza, mai come fatto compiuto.
 */
export const cierre: string[] = [
  'E più avanti si delinea questo: {frag3}.',
  'Ciò che arriva punta in questa direzione: {frag3}.',
  'Se nulla viene forzato, il prossimo passo si intuisce così: {frag3}.',
  "All'orizzonte vicino si intravede già {frag3}.",
  'Tutto lascia pensare che quello che viene porti {frag3}.',
];
