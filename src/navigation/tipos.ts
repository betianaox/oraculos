import type { SeccionFooter } from '@/shell/components/Footer';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';

/** Seccion dentro de un oraculo. 'pregunta' es el destino principal del domo. */
export type SeccionOraculo = 'pregunta' | SeccionFooter;

export type RootStackParamList = {
  Inicio: undefined;
  Ajustes: undefined;
  Oraculo: { oraculoId: string; seccion: SeccionOraculo };
  // Flujo de lectura COMPARTIDO: cualquier oraculo con `mazo` lo usa.
  Tirada: { oraculoId: string; pregunta: string; tema: Tema; analisis: AnalisisPregunta };
  // Tirada PROPIA del I Ching (monedas -> hexagrama). Termina en la Lectura compartida.
  TiradaIching: { oraculoId: string; pregunta: string; tema: Tema; analisis: AnalisisPregunta };
  // Tirada PROPIA de Buzios (16 cauries). Termina en la Lectura compartida.
  TiradaBuzios: { oraculoId: string; pregunta: string; tema: Tema; analisis: AnalisisPregunta };
  // La Tirada arma los parrafos (con el motor del oraculo o el demo) y los pasa.
  Lectura: { oraculoId: string; pregunta: string; parrafos: string[] };
  // Aprender (ex-Wiki) COMPARTIDO: cualquier oraculo con `contenido`.
  Aprender: { oraculoId: string };
  AprenderDetalle: { oraculoId: string; piezaId: string };
  // Consejo del dia COMPARTIDO.
  ConsejoDelDia: { oraculoId: string };
  // Reto COMPARTIDO: preguntas derivadas de la wiki del oraculo.
  Reto: { oraculoId: string };
};
