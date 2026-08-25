import type { Tema } from '@/pregunta/tipos';

// Coletillas de enquadre em português para os fragmentos do Egípcio.
//
// Só disparam no último degrau do fallback, quando uma carta não tem fragmento
// escrito para nenhum tema e a leitura precisa cair nas palavras-chave da ficha.
// Com o banco completo (78 cartas × 4 temas) isso não deveria acontecer nunca;
// ficam como rede de segurança, e porque duas palavras soltas ("sabedoria e
// previsão") não dizem nada a quem pergunta se o contrato vai ser renovado.
//
// `''` = sem enquadre, o fragmento vai sozinho. Está em todos os pools de
// propósito: se as cinco cartas arrastassem a coletilha, o parágrafo viraria um
// bordão. Uma em cada três já basta para situar.
export const ENCUADRES_PT: Record<Tema, string[]> = {
  amor: ['', '', 'nesse vínculo', 'no que você sente', 'entre vocês dois'],
  trabajo: ['', '', 'no que você está fazendo', 'no trabalho', 'no seu dia a dia de trabalho'],
  dinero: ['', '', 'com a grana', 'nas contas', 'no que você tem que resolver'],
  general: ['', '', 'neste momento seu', 'no que você está vivendo', 'nisso que você traz'],
};
