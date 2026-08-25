import type { Posicion } from '../types';

// Último degrau do fallback em português: texto seguro para uma carta que ainda
// não tem nada escrito. Nunca deixa a tirada sem nada a dizer.
//
// Com o banco completo (78 cartas × 4 temas) isto não deveria disparar nunca.
// Fica aqui para que acrescentar uma carta nova não quebre a leitura.
export const GENERICO_PT: Record<Posicion, string> = {
  normal: 'algo que te convida a parar e olhar com calma o que está te mostrando.',
  invertida: 'um matiz que pede uma olhada cuidadosa antes de tirar conclusões.',
};
