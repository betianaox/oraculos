// Templates that build ONE combined sentence from the three runes, in the
// order they came out (no fixed past/present/future roles). Generic across
// topics: the specific meaning already lives in the fragments.
//
// Placeholders: {runa1} {runa2} {runa3} = rune names (see nombres.ts)
//               {frag1} {frag2} {frag3} = fragments from content/en/fragmentos/<tema>.ts
//
// Fragments are noun phrases, so the verbs (brings/adds/points to) live here.
export const conectores: string[] = [
  '{runa1} brings {frag1}, {runa2} adds {frag2}, and {runa3} closes the scene with {frag3}.',
  'Between {runa1} and {runa2}, {frag1} appears alongside {frag2}, while {runa3} adds {frag3}.',
  '{runa1} points to {frag1}, to that, through {runa2}, {frag2} is added, and {runa3} finishes by showing {frag3}.',
  'The combination of {runa1}, {runa2}, and {runa3} speaks of {frag1}, of {frag2}, and above all of {frag3}.',
  'First comes {frag1} through {runa1}, then {frag2} thanks to {runa2}, and it all rounds out with {frag3}, which {runa3} brings.',
  '{runa1} contributes {frag1}, and that energy interweaves with {frag2} from {runa2} and {frag3} from {runa3}.',
];
