import type { SeccionFooter } from '@/shell/components/Footer';
import type { Tema } from '@/pregunta/tipos';
import type { PiezaTirada } from '@/flujo/pieza';

/** Seccion dentro de un oraculo. 'pregunta' es el destino principal del domo. */
export type SeccionOraculo = 'pregunta' | SeccionFooter;

export type RootStackParamList = {
  Inicio: undefined;
  Ajustes: undefined;
  Oraculo: { oraculoId: string; seccion: SeccionOraculo };
  // Flujo de lectura COMPARTIDO: cualquier oraculo con `mazo` lo usa.
  Tirada: { oraculoId: string; pregunta: string; tema: Tema };
  Lectura: { oraculoId: string; pregunta: string; tirada: PiezaTirada[] };
  // Aprender (ex-Wiki). Por ahora Tarot.
  Aprender: { oraculoId: string };
  AprenderDetalle: { oraculoId: string; cartaId: string };
  // Consejo del dia. Por ahora Tarot.
  ConsejoDelDia: { oraculoId: string };
};
