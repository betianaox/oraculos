// Traducido al portugués de Brasil desde el original en español con scripts/traducir.js.
import type { CartaId } from '../types';

// Consejo del día por carta (español). Parcial: se completa carta por carta,
// como las fichas de la Wiki. Las que falten caen al genérico (ver más abajo),
// así la pantalla nunca queda sin nada que decir.
//
// Tono: un consejo breve, cálido y accionable para hoy — habla de tú en español
// NEUTRO (nada de voseo), reflexivo, nunca adivinatorio.
export const CONSEJOS_PT: Partial<Record<CartaId, string>> = {
  'mayor-00': 'Anime-se a dar aquele primeiro passo que você vem adiando. Não precisa ver o caminho inteiro: basta começar com curiosidade e confiança.',
  'mayor-19': 'Deixe que as coisas se mostrem à plena luz. Hoje é um bom dia para celebrar o simples e compartilhar sua energia sem pressa.',
};

// Último recurso, para una carta que todavía no tiene su consejo escrito.
export const CONSEJO_GENERICO_PT =
  'Tire um momento para olhar esta carta com calma e se perguntar o que ela está lhe mostrando hoje.';
