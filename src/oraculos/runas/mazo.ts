import type { Pieza } from '@/flujo/pieza';
import { RUNAS_IMG } from './imagenes';

// Orden del Futhark antiguo (24 runas). El numero es solo el orden.
const ORDEN = [
  'fehu', 'uruz', 'thurisaz', 'ansuz', 'raidho', 'kaunaz', 'gebo', 'wunju',
  'hagalaz', 'naudiz', 'isa', 'jera', 'eihwaz', 'perthu', 'algiz', 'sowulo',
  'teiwaz', 'berkana', 'ehwaz', 'mannaz', 'laguz', 'ingwaz', 'dagaz', 'othala',
];

// Runas simetricas: rotadas se ven iguales y no tienen lectura invertida en la
// tradicion del futhark. Siempre salen normales.
const SIMETRICAS = ['gebo', 'ingwaz', 'dagaz', 'isa'];

// Runas ~cuadradas (360x350).
const RATIO_RUNA = 350 / 360;

export const MAZO_RUNAS: Pieza[] = ORDEN.map((id, i) => ({
  id,
  numero: i + 1,
  imagen: RUNAS_IMG[id].normal,
  dorso: RUNAS_IMG[id].invertida, // el "-r" es el dorso de la piedra
  simetrica: SIMETRICAS.includes(id),
  ratio: RATIO_RUNA,
}));
