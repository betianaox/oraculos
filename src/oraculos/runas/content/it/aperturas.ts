import type { Tema, Tono } from '../types';

// Frase di apertura in italiano, prima della frase combinata delle tre rune.
// Neutra di proposito, senza metafore. Stesso registro dello spagnolo.
// Italiano neutro (tu). Stringhe con virgolette doppie per gli apostrofi.
// Diviso per TONO; 'neutro' è il fallback.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      "Questa stesa riflette un aspetto del momento che sta attraversando la tua vita affettiva.",
      "Le rune indicano una tendenza legata all'amore in questo momento.",
      "Questa combinazione offre uno sguardo sul piano sentimentale.",
      "La stesa riflette aspetti che possono influenzare la tua vita amorosa.",
      "Queste tre rune descrivono l'energia che circonda l'amore in questo momento.",
      "Questa lettura si concentra sullo stato attuale della tua vita sentimentale.",
      "Le rune offrono una lettura del momento emotivo che stai vivendo.",
      "La lettura mette a fuoco ciò che oggi pesa di più nell'amore.",
    ],
    preocupacion: [
      "Questa stesa guarda con calma ciò che oggi ti inquieta nell'amore.",
      "Le rune rispondono con serenità a ciò che porti dentro sul piano affettivo.",
      "Questa lettura si sofferma su ciò che oggi ti preoccupa nel sentimentale.",
      "Queste rune accolgono con cura ciò che ti lascia nel dubbio nell'amore.",
    ],
    impulso: [
      "Questa stesa accompagna la voglia con cui stai guardando all'amore.",
      "Le rune leggono lo slancio che porti sul piano affettivo.",
      "Questa lettura accoglie l'entusiasmo che hai oggi nel sentimentale.",
      "Queste rune raccolgono l'energia con cui arrivi al piano affettivo.",
    ],
  },
  trabajo: {
    neutro: [
      "Questa stesa riflette un aspetto del momento che sta attraversando la tua vita professionale.",
      "Le rune indicano una tendenza legata al lavoro in questo momento.",
      "Questa combinazione offre uno sguardo sul piano professionale.",
      "La stesa riflette aspetti che possono influenzare la tua situazione lavorativa.",
      "Queste tre rune descrivono l'energia che circonda il tuo lavoro in questo momento.",
      "Questa lettura si concentra sullo stato attuale della tua vita professionale.",
      "Le rune offrono una lettura del momento lavorativo che stai vivendo.",
      "La lettura mette a fuoco ciò che oggi pesa di più nel lavoro.",
    ],
    preocupacion: [
      "Questa stesa guarda con calma ciò che oggi ti inquieta nel lavoro.",
      "Le rune rispondono con serenità a ciò che porti dentro riguardo al lavoro.",
    ],
    impulso: [
      "Questa stesa accompagna la voglia con cui stai affrontando il lavoro.",
      "Le rune leggono lo slancio che porti sul piano professionale.",
    ],
  },
  dinero: {
    neutro: [
      "Questa stesa riflette un aspetto del momento che stanno attraversando le tue finanze.",
      "Le rune indicano una tendenza legata al denaro in questo momento.",
      "Questa combinazione offre uno sguardo sul piano finanziario.",
      "La stesa riflette aspetti che possono influenzare le tue finanze.",
      "Queste tre rune descrivono l'energia che circonda il denaro in questo momento.",
      "Questa lettura si concentra sullo stato attuale delle tue finanze.",
      "Le rune offrono una lettura del momento finanziario che stai vivendo.",
      "La lettura mette a fuoco ciò che oggi pesa di più nel denaro.",
    ],
    preocupacion: [
      "Questa stesa guarda con calma ciò che oggi ti inquieta riguardo al denaro.",
      "Le rune rispondono con serenità a ciò che porti dentro sul piano finanziario.",
    ],
    impulso: [
      "Questa stesa accompagna la voglia con cui stai guardando alle tue finanze.",
      "Le rune leggono lo slancio che porti nei tuoi progetti di denaro.",
    ],
  },
  general: {
    neutro: [
      "Questa stesa riflette un aspetto del momento che stai attraversando.",
      "Le rune indicano una tendenza legata a ciò che stai vivendo.",
      "Questa combinazione offre uno sguardo sulla situazione attuale.",
      "La stesa riflette aspetti che possono influenzare questo momento.",
      "Queste tre rune descrivono l'energia che circonda questo momento.",
      "Questa lettura si concentra sullo stato attuale della situazione.",
      "Le rune offrono una lettura di ciò che stai vivendo.",
      "La lettura mette a fuoco ciò che oggi pesa di più.",
    ],
    preocupacion: [
      "Questa stesa guarda con calma ciò che oggi ti inquieta.",
      "Le rune rispondono con serenità a ciò che porti dentro.",
    ],
    impulso: [
      "Questa stesa accompagna la voglia con cui stai guardando a questo momento.",
      "Le rune leggono lo slancio che porti con te.",
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    "Questa è stata la risposta delle rune alla tua domanda.",
    "La stesa riflette il messaggio legato alla tua domanda.",
    "Queste rune mostrano la lettura che corrisponde alla tua consultazione.",
    "La combinazione uscita risponde al tema che hai posto.",
    "È questo che indicano le rune per la domanda che hai fatto.",
    "La lettura si costruisce a partire da questa combinazione di rune.",
    "Questa stesa riassume il messaggio legato alla tua consultazione.",
    "Le rune hanno risposto nel modo seguente.",
    "L'esito della tua consultazione ha preso forma in questa combinazione.",
    "Questa è la lettura che nasce dalla stesa che hai fatto.",
  ],
  preocupacion: [
    "È questo che rispondono le rune, e lo dicono senza drammi.",
    "Le rune rispondono alla tua domanda con calma.",
    "La stesa risponde a ciò che hai chiesto senza esagerare.",
    "È questo che mostrano le rune, letto con serenità.",
  ],
  impulso: [
    "Le rune hanno risposto alla tua domanda, e c'è di che rallegrarsi.",
    "È questo che portano le rune per ciò che hai chiesto.",
    "La stesa risponde alla tua domanda con buona energia.",
    "È questo che le rune restituiscono alla tua domanda.",
  ],
};
