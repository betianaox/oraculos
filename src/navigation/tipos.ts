import type { SeccionFooter } from '@/shell/components/Footer';

/** Seccion dentro de un oraculo. 'pregunta' es el destino principal del domo. */
export type SeccionOraculo = 'pregunta' | SeccionFooter;

export type RootStackParamList = {
  Inicio: undefined;
  Ajustes: undefined;
  Oraculo: { oraculoId: string; seccion: SeccionOraculo };
};
