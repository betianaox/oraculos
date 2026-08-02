// Modelli che costruiscono UNA frase combinando le tre rune, nell'ordine in
// cui sono uscite. Generici: il significato specifico è già nei frammenti.
//
// Segnaposto: {runa1} {runa2} {runa3} = nomi delle rune (vedi nombres.ts)
//             {frag1} {frag2} {frag3} = frammenti di content/it/fragmentos/<tema>.ts
export const conectores: string[] = [
  "{runa1} porta {frag1}, {runa2} aggiunge {frag2}, e {runa3} chiude la scena con {frag3}.",
  "Tra {runa1} e {runa2}, {frag1} compare insieme a {frag2}, mentre {runa3} aggiunge {frag3}.",
  "{runa1} indica {frag1}, a questo si somma, tramite {runa2}, {frag2}, e {runa3} finisce col mostrare {frag3}.",
  "La combinazione di {runa1}, {runa2} e {runa3} parla di {frag1}, di {frag2} e, soprattutto, di {frag3}.",
  "Prima arriva {frag1} tramite {runa1}, poi {frag2} grazie a {runa2}, e tutto si completa con {frag3}, che {runa3} porta.",
  "{runa1} contribuisce con {frag1}, e quell'energia si intreccia con {frag2} di {runa2} e con {frag3} di {runa3}.",
];
