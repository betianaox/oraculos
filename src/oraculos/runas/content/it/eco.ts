import type { Tiempo } from '../types';

// Frase di "eco": una frase breve e autonoma che riconosce un elemento
// rilevato nella domanda (una persona menzionata o un orientamento temporale).
// Al massimo una per lettura; la menzione di un terzo ha la priorità sul tempo.

export const ecoTercero: string[] = [
  "In questa consultazione c'è un'altra persona in gioco.",
  "La presenza di qualcun altro pesa su ciò che stai chiedendo.",
  "C'è un legame con un'altra persona al centro di questo.",
];

export const ecoTiempo: Record<Exclude<Tiempo, 'presente'>, string[]> = {
  pasado: [
    "Buona parte di questo guarda ancora al passato.",
    "Qualcosa di ciò che è già successo è ancora presente nella domanda.",
    "Ciò che ti sei lasciato alle spalle pesa ancora qui.",
  ],
  futuro: [
    "Lo sguardo è su ciò che non è ancora arrivato.",
    "Questo si proietta verso ciò che deve venire.",
    "La domanda punta a ciò che sta davanti.",
  ],
};
