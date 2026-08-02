import type { RunaId } from './types';

// Nombre mostrado en pantalla — puede diferir del id interno (que sigue el
// nombre del archivo en assets/runas/) porque acá usamos la forma más
// habitual del nombre, la misma que ya está en runas.txt.
export const nombres: Record<RunaId, string> = {
  fehu: 'Fehu',
  uruz: 'Uruz',
  thurisaz: 'Thurisaz',
  ansuz: 'Ansuz',
  raidho: 'Raidho',
  kaunaz: 'Kenaz',
  gebo: 'Gebo',
  wunju: 'Wunjo',
  hagalaz: 'Hagalaz',
  naudiz: 'Nauthiz',
  isa: 'Isa',
  jera: 'Jera',
  eihwaz: 'Eihwaz',
  perthu: 'Perthro',
  algiz: 'Algiz',
  sowulo: 'Sowilo',
  teiwaz: 'Tiwaz',
  berkana: 'Berkano',
  ehwaz: 'Ehwaz',
  mannaz: 'Mannaz',
  laguz: 'Laguz',
  ingwaz: 'Ingwaz',
  dagaz: 'Dagaz',
  othala: 'Othala',
};
