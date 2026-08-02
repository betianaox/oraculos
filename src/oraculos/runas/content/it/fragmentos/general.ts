import type { FragmentosDeTema } from '../../types';

// Tema "generale" — quello che il classificatore usa quando la domanda non
// rientra chiaramente in amore/lavoro/denaro. Più neutro: vale per qualsiasi
// area della vita. Virgolette doppie per gli apostrofi.
export const general: FragmentosDeTema = {
  fehu: {
    normal: [
      "le risorse che hai già e che forse non stai valorizzando del tutto",
      "una base solida che si costruisce curando ciò che già funziona",
      "la prosperità che arriva quando si mette in ordine ciò che è già in corso",
    ],
    invertida: [
      "la paura che manchi, al di là del fatto che manchi davvero qualcosa",
      "un bisogno di trattenere che frena ciò che potrebbe scorrere",
      "l'insicurezza di non sapere se ciò che dai torna in qualche forma",
    ],
  },
  uruz: {
    normal: [
      "una forza interiore che hai più a portata di quanto pensi",
      "la spinta necessaria per farti coraggio a qualcosa che rimandi",
      "la vitalità di affrontare ciò che viene con più energia",
    ],
    invertida: [
      "la stanchezza di sostenere qualcosa senza chiedere aiuto",
      "un'energia che si impone invece di accompagnare",
      "la durezza che compare quando in realtà serve tenerezza",
    ],
  },
  thurisaz: {
    normal: [
      "un limite che conviene porre prima che la situazione trabocchi",
      "la pausa necessaria prima di reagire a qualcosa che ha dato fastidio",
      "la forza di difendere qualcosa che conta davvero",
    ],
    invertida: [
      "una reazione impulsiva che può ferire più di quanto protegga",
      "un conflitto che si evita invece di nominarlo",
      "un muro che allontana invece di proteggere",
    ],
  },
  ansuz: {
    normal: [
      "una conversazione onesta che continui a rimandare",
      "la chiarezza di dire ciò che si pensa davvero",
      "l'ascolto genuino di ciò che qualcuno ha bisogno di dire",
    ],
    invertida: [
      "un malinteso che cresce per non chiarirlo in tempo",
      "parole dette senza pensare che lasciano il segno",
      "un silenzio che sostituisce qualcosa che andrebbe detto",
    ],
  },
  raidho: {
    normal: [
      "un avanzare verso una nuova fase, anche se poco a poco",
      "la disponibilità a muoverti, anche se la strada cambia lungo il percorso",
      "un percorso che comincia a prendere forma",
    ],
    invertida: [
      "la sensazione di essere fermo mentre tutto sembra avanzare",
      "una rotta che si è persa nel quotidiano",
      "il logorio di andare in una direzione che non convince più",
    ],
  },
  kaunaz: {
    normal: [
      "una scintilla di chiarezza o ispirazione che merita attenzione",
      "un modo diverso di guardare qualcosa che sembrava bloccato",
      "il desiderio che si riaccende con qualcosa di semplice",
    ],
    invertida: [
      "una motivazione che si spegne con la routine",
      "un interesse che si raffredda senza che tu te ne accorga del tutto",
      "la mancanza di voglia di provare qualcosa di diverso per ora",
    ],
  },
  gebo: {
    normal: [
      "uno scambio equilibrato tra ciò che si dà e ciò che si riceve",
      "la generosità che sostiene qualcosa di importante",
      "un gesto che si apprezza senza aspettarsi nulla in cambio",
    ],
    invertida: [
      "una bilancia che pende sempre dallo stesso lato",
      "il logorio di dare più di quanto si riceve",
      "qualcosa che, in fondo, aspetta una contropartita",
    ],
  },
  wunju: {
    normal: [
      "una gioia semplice che non ha bisogno di un grande motivo",
      "un momento di benessere dopo una fase difficile",
      "la leggerezza di godersi qualcosa senza analizzarlo troppo",
    ],
    invertida: [
      "una felicità forzata per non mettere a disagio nessuno",
      "la calma apparente che copre qualcosa in sospeso",
      "lo sforzo di fingere che vada tutto bene",
    ],
  },
  hagalaz: {
    normal: [
      "un cambiamento brusco che, per quanto scomodo, apre spazio a qualcosa di nuovo",
      "una rottura necessaria per lasciare ciò che non serviva più",
      "una scossa che rimette in ordine le priorità",
    ],
    invertida: [
      "una rottura che arriva senza troppo preavviso",
      "il disordine che lascia un cambiamento inatteso",
      "la difficoltà di accettare qualcosa che si è interrotto di colpo",
    ],
  },
  naudiz: {
    normal: [
      "la pazienza necessaria in un momento di carenza",
      "lo sforzo che si mantiene anche mancando le risorse",
      "la perseveranza di fronte a un ostacolo concreto",
    ],
    invertida: [
      "qualcosa che si regge per paura, non per convinzione",
      "un bisogno che si confonde con altro",
      "sopportare qualcosa che potrebbe già iniziare a risolversi",
    ],
  },
  isa: {
    normal: [
      "una pausa utile per pensare a mente fredda",
      "il tempo giusto prima di fare un passo importante",
      "la calma di aspettare il momento adatto",
    ],
    invertida: [
      "una distanza che si installa per paura di andare avanti",
      "l'indecisione che congela qualcosa in sospeso",
      "lo stallo di non farsi ancora coraggio a muoversi",
    ],
  },
  jera: {
    normal: [
      "i frutti di uno sforzo mantenuto nel tempo",
      "una ricompensa che arriva al momento giusto",
      "il risultato di essere stati costanti con qualcosa",
    ],
    invertida: [
      "l'impazienza di volere risultati prima del tempo",
      "la frustrazione di non vedere ancora ciò che si è seminato",
      "un processo che si spezza prima di dare frutti",
    ],
  },
  eihwaz: {
    normal: [
      "più resistenza di quanta ne senti in questo momento",
      "una forza che compare proprio quando serve di più",
      "il coraggio di attraversare qualcosa di difficile",
    ],
    invertida: [
      "una rigidità che non lascia spazio per cedere",
      "una paura che paralizza invece di spingere",
      "la resistenza a cambiare qualcosa che non funziona più",
    ],
  },
  perthu: {
    normal: [
      "un'apertura all'inatteso",
      "la fiducia che le cose si sistemeranno",
      "un mistero che vale la pena lasciar rivelare",
    ],
    invertida: [
      "il bisogno di controllare qualcosa che non dipende solo da te",
      "la resistenza a lasciar andare e lasciar scorrere le cose",
      "il disagio di non sapere come proseguirà qualcosa",
    ],
  },
  algiz: {
    normal: [
      "un istinto che sa qualcosa prima che tu lo ragioni del tutto",
      "una cura sana che protegge senza rinchiudere",
      "un intuito che avverte quando porre un limite",
    ],
    invertida: [
      "una guardia troppo alta che allontana più di quanto protegga",
      "la paura di abbassare le difese anche quando servirebbe",
      "una diffidenza che pesa più del necessario",
    ],
  },
  sowulo: {
    normal: [
      "una chiarezza che torna dopo una fase confusa",
      "la sicurezza di andare sulla buona strada",
      "un traguardo che si sente condiviso dopo uno sforzo mantenuto",
    ],
    invertida: [
      "un ottimismo forzato che copre qualcosa da risolvere",
      "la difficoltà di accettare una verità scomoda",
      "mostrare entusiasmo all'esterno mentre qualcosa dentro non torna",
    ],
  },
  teiwaz: {
    normal: [
      "il coraggio di sostenere qualcosa anche se è difficile",
      "l'onestà anche quando costa dirla",
      "un impegno che si difende con convinzione",
    ],
    invertida: [
      "uno sforzo che fa una sola delle parti coinvolte",
      "il conto silenzioso di chi cede di più",
      "il logorio di insistere su qualcosa che non è più alla pari",
    ],
  },
  berkana: {
    normal: [
      "un inizio nuovo, anche se piccolo",
      "una crescita che si nota dopo una fase di cambiamenti",
      "qualcosa pronto a fare un passo in più",
    ],
    invertida: [
      "una crescita che si blocca per paura del nuovo",
      "la voglia di ricominciare senza ancora farsi coraggio",
      "un inizio che si rimanda una volta dopo l'altra",
    ],
  },
  ehwaz: {
    normal: [
      "ciò che avanza meglio quando si fa in due",
      "una fiducia reciproca che sostiene decisioni importanti",
      "l'avanzare verso uno stesso obiettivo condiviso",
    ],
    invertida: [
      "una sola persona che regge qualcosa che dovrebbe essere in due",
      "una fiducia che va riparata dopo qualcosa di puntuale",
      "il disallineamento tra ciò che ciascuno si aspetta dall'altro",
    ],
  },
  mannaz: {
    normal: [
      "il sostegno delle persone che hai vicino",
      "una connessione reale basata sulla cooperazione",
      "l'appoggio di una comunità, per quanto piccola",
    ],
    invertida: [
      "l'isolamento di risolvere tutto senza chiedere aiuto",
      "la difficoltà di appoggiarti agli altri quando serve",
      "una tendenza a chiuderti in te stesso",
    ],
  },
  laguz: {
    normal: [
      "un intuito che sa più di quanto la ragione ammetta",
      "un'emozione che conviene seguire da vicino",
      "la saggezza di fidarsi di ciò che dice l'istinto",
    ],
    invertida: [
      "un'emozione intensa che offusca la chiarezza",
      "il traboccare di sentire tutto insieme",
      "confondere l'intensità con la certezza",
    ],
  },
  ingwaz: {
    normal: [
      "qualcosa che sta maturando e ha ancora bisogno del suo tempo",
      "un potenziale che conviene lasciar maturare prima di agire",
      "un seme già piantato che darà i suoi frutti",
    ],
    invertida: [
      "l'impazienza di voler forzare qualcosa che non è pronto",
      "la voglia di accelerare un processo che chiede calma",
      "l'ansia di non saper aspettare il momento giusto",
    ],
  },
  dagaz: {
    normal: [
      "un punto di svolta che cambia il modo di vedere qualcosa",
      "una chiarezza che arriva dopo una fase confusa",
      "un inizio che si nota quasi da un giorno all'altro",
    ],
    invertida: [
      "la resistenza a lasciar andare com'erano prima le cose",
      "la difficoltà di accettare che qualcosa è già cambiato",
      "aggrapparsi a una versione di qualcosa che non c'è più",
    ],
  },
  othala: {
    normal: [
      "i valori che sostengono le decisioni importanti",
      "una radice che dà senso a ciò che viene",
      "il rispetto per la tua provenienza",
    ],
    invertida: [
      "schemi che si ripetono senza accorgersene",
      "un'aspettativa ereditata che pesa più del necessario",
      "la difficoltà di lasciar andare un vecchio modo di fare le cose",
    ],
  },
};
