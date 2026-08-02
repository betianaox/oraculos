import type { Modo, Tema, Tono } from '../types';

// Consiglio di chiusura, combinato. Diviso per modo (aperta/chiusa) e, dentro
// ognuno, per TONO. 'neutro' è il fallback. Italiano neutro (tu), senza
// marcare il genere di chi consulta. Virgolette doppie per gli apostrofi.
export const consejos: Partial<Record<Tema, Record<Modo, Record<Tono, string[]>>>> = {
  amor: {
    abierta: {
      neutro: [
        "Il consiglio è semplice: presta attenzione a ciò che già sai ma non hai ancora avuto il coraggio di dire.",
        "Lasciare il controllo aiuta più che cercare di gestire tutto: lascia che questo segua il proprio ritmo.",
        "L'equilibrio tra dare e ricevere conta, che ci sia già una relazione o no.",
        "Prima di agire, prenditi un momento per ascoltare ciò che senti davvero.",
      ],
      preocupacion: [
        "Non devi risolvere tutto oggi, basta non perderti nel processo.",
        "Tratta questo con la stessa pazienza che avresti con qualcuno a cui tieni.",
        "Allenta la pressione su te stesso: sentire dei dubbi non è sbagliare.",
      ],
      impulso: [
        "Fai spazio a quell'entusiasmo, ma lascia che anche l'altro segua il suo ritmo.",
        "La voglia va bene, sostienila senza bruciare le tappe.",
        "Usa quello slancio per avvicinarti, non per forzare una definizione.",
      ],
    },
    cerrada: {
      neutro: [
        "Vale la pena fare un passo concreto invece di rimuginare nella testa.",
        "Parla di ciò che continui a rimandare — non si risolverà da solo.",
        "Scegli con cura dove mettere il tuo tempo e la tua energia.",
        "Mostrare ciò che senti, senza troppi filtri, può essere proprio ciò che serve ora.",
      ],
      preocupacion: [
        "Un passo piccolo e fermo calma più che rimuginare su ciò che temi.",
        "Prima di decidere, allenta l'ansia: la risposta si vede meglio nella calma.",
        "Non ti serve avere tutto risolto per fare il primo passo.",
      ],
      impulso: [
        "Se lo slancio è genuino, un passo concreto ora ha senso.",
        "Usa la voglia per agire, non solo per immaginare.",
        "Muoviti con quella voglia, lasciando spazio alla risposta dell'altro.",
      ],
    },
  },
  trabajo: {
    abierta: {
      neutro: [
        "Il consiglio è semplice: presta attenzione a ciò che già sai ma non hai ancora affrontato.",
        "Lasciare il controllo aiuta più che cercare di gestire tutto: lascia che il processo segua il suo ritmo.",
        "L'equilibrio tra sforzo e riposo conta, anche se la pressione dice il contrario.",
        "Prima di agire, prenditi un momento per pensare a ciò che ti serve davvero dal lavoro.",
      ],
      preocupacion: [
        "Non caricarti tutto in una volta, una cosa alla volta è comunque avanzare.",
        "Allenta un po' la pressione: da lì pensi più lucido.",
        "Ciò che oggi ti sovraccarica si sistema meglio a pezzi che tutto insieme.",
      ],
      impulso: [
        "Incanala quello slancio in un primo passo concreto e sostenibile.",
        "La voglia aiuta, che non ti faccia saltare le tappe intermedie.",
        "Usa l'energia per organizzare il piano, non solo per iniziare.",
      ],
    },
    cerrada: {
      neutro: [
        "Vale la pena fare un passo concreto invece di rimuginare nella testa.",
        "Parla con chi di dovere di ciò che continui a rimandare — non si risolverà da solo.",
        "Scegli con cura dove mettere il tuo tempo e la tua energia sul lavoro.",
        "Mostrare ciò di cui hai bisogno, senza troppi filtri, può essere proprio ciò che serve ora.",
      ],
      preocupacion: [
        "Prima di decidere, metti in ordine i dati: la scelta pesa meno a mente fredda.",
        "Un passo misurato calma più che affrettare un'uscita per paura.",
        "Non decidere per la stanchezza, concediti un momento prima di risolvere.",
      ],
      impulso: [
        "Se l'opportunità è reale, fai il passo invece di limitarti a entusiasmarti.",
        "Trasforma la voglia in un passo concreto e verificabile.",
        "Buon momento per andare avanti, sempre con un piano dietro.",
      ],
    },
  },
  dinero: {
    abierta: {
      neutro: [
        "Il consiglio è semplice: presta attenzione a ciò che già sai ma non hai ancora risolto.",
        "Lasciare il controllo aiuta più che cercare di gestire tutto: lascia che il piano segua il suo ritmo.",
        "L'equilibrio tra risparmiare e goderti le cose conta, anche se l'ansia dice il contrario.",
        "Prima di agire, prenditi un momento per pensare a ciò che ti serve davvero risolvere.",
      ],
      preocupacion: [
        "Un numero chiaro spaventa meno di un conto che preferisci non guardare.",
        "Separa l'urgente dall'importante: non tutto pesa uguale oggi.",
        "Passo dopo passo: le finanze si calmano quando le guardi da vicino.",
      ],
      impulso: [
        "Buon momento per muovere qualcosa, purché tu tenga un margine di sicurezza.",
        "Che l'entusiasmo non si mangi la pianificazione: entusiasmati con un piano.",
        "Usa la voglia per organizzare e progettare, non solo per spendere.",
      ],
    },
    cerrada: {
      neutro: [
        "Vale la pena fare un passo concreto invece di rimuginare nella testa.",
        "Parla della questione di denaro che continui a rimandare — non si risolverà da sola.",
        "Scegli con cura dove mettere le tue risorse adesso.",
        "Mostrare la tua situazione reale, senza troppi filtri, può essere proprio ciò che serve ora.",
      ],
      preocupacion: [
        "Prima di decidere, guarda il numero reale: da vicino spaventa quasi sempre meno.",
        "Un passo piccolo e sicuro sistema più di una mossa affrettata.",
        "Non risolvere le finanze per lo spavento, prima i dati.",
      ],
      impulso: [
        "Se i conti tornano, vai avanti, se no, aspetta senza perdere lo slancio.",
        "Usa la voglia per organizzarti, non solo per spendere.",
        "Muoviti con quello slancio, tenendo un margine per sicurezza.",
      ],
    },
  },
  general: {
    abierta: {
      neutro: [
        "Il consiglio è semplice: presta attenzione a ciò che già sai ma non hai ancora affrontato.",
        "Lasciare il controllo aiuta più che cercare di gestire tutto: lascia che questo segua il proprio ritmo.",
        "L'equilibrio conta più della pressione, anche se è difficile ricordarlo.",
        "Prima di agire, prenditi un momento per ascoltare ciò di cui hai davvero bisogno.",
      ],
      preocupacion: [
        "Non devi risolvere tutto oggi, basta fare un passo alla volta.",
        "Trattati con un po' della pazienza che avresti con un'altra persona.",
        "Ciò che oggi ti pesa si allenta quando smetti di pretendere di averlo risolto.",
      ],
      impulso: [
        "Fai spazio a quello slancio, ma appoggialo su un primo passo concreto.",
        "La voglia è un buon segno, sostienila senza affrettare il processo.",
        "Usa l'energia per iniziare da qualcosa di piccolo e reale.",
      ],
    },
    cerrada: {
      neutro: [
        "Vale la pena fare un passo concreto invece di rimuginare nella testa.",
        "Parla di ciò che continui a rimandare — non si risolverà da solo.",
        "Scegli con cura dove mettere il tuo tempo e la tua energia.",
        "Mostrare ciò che senti, senza troppi filtri, può essere proprio ciò che serve ora.",
      ],
      preocupacion: [
        "Un passo piccolo e fermo calma più che rimuginare su ciò che temi.",
        "Prima di decidere, abbassa un po' i toni: nella calma si vede meglio.",
        "Non ti serve una certezza totale per fare il primo passo.",
      ],
      impulso: [
        "Se lo slancio è genuino, un passo concreto ora ha senso.",
        "Usa la voglia per agire, non solo per immaginare.",
        "Buon momento per muoverti, con un piano minimo dietro.",
      ],
    },
  },
};
