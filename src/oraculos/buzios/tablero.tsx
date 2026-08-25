import { Image, View } from 'react-native';

/**
 * El paño de Búzios: los dieciséis cauries repartidos dentro del círculo.
 *
 * Vive fuera de la pantalla de tirada porque lo dibujan dos: la pantalla, donde
 * cada cauri cae con su animación, y la tarjeta que se comparte, donde ya están
 * todos quietos. Lo que comparten es DÓNDE va cada uno: si el reparto y las
 * medidas estuvieran escritos dos veces, la foto mostraría una caída que no es
 * la que se vio en pantalla, y esa es justamente la que se quiere compartir.
 */

const BASE = require('../../../assets/oraculos/buzios/caracoles/base.webp');
const ABIERTO = require('../../../assets/oraculos/buzios/caracoles/abierto.webp');
const CERRADO = require('../../../assets/oraculos/buzios/caracoles/cerrado.webp');

export const CANT = 16; // dieciseis cauries
const RATIO_CAURI = 444 / 317; // alto/ancho del arte del cauri

const RADIO_FRAC = 0.4; // radio del circulo util dentro de la base (fraccion de S)
const CAURI_W_FRAC = 0.11; // ancho del cauri (fraccion de S)
const COLL_FRAC = 0.55; // radio de colision del cauri (fraccion de su ancho)
const MAX_OVERLAP = 0.08; // superposicion maxima tolerada entre cauries (8%)

/** Posición de un cauri, en unidades normalizadas (radio del círculo = 1). */
export type Pos = { x: number; y: number; rot: number; esc: number };

/**
 * Reparte los 16 cauries dentro del circulo evitando que se pisen (trabaja en
 * unidades normalizadas, el radio del circulo = 1). Devuelve solo posiciones y
 * rotacion; la cara (abierto/cerrado) la define la tirada.
 */
export function repartirPosiciones(): Pos[] {
  const rNorm = (COLL_FRAC * CAURI_W_FRAC) / RADIO_FRAC;
  const usable = 1 - rNorm;
  const minDist = 2 * rNorm * (1 - MAX_OVERLAP);
  const puestos: Pos[] = [];

  for (let i = 0; i < CANT; i++) {
    let elegido: { x: number; y: number } | null = null;
    let mejorDist = -1;

    for (let intento = 0; intento < 50; intento++) {
      const r = usable * Math.sqrt(Math.random());
      const a = Math.random() * Math.PI * 2;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;

      let cercano = Infinity;
      for (const q of puestos) {
        const d = Math.hypot(px - q.x, py - q.y);
        if (d < cercano) cercano = d;
      }
      if (cercano >= minDist) {
        elegido = { x: px, y: py };
        break;
      }
      if (cercano > mejorDist) {
        mejorDist = cercano;
        elegido = { x: px, y: py };
      }
    }

    puestos.push({
      x: elegido!.x,
      y: elegido!.y,
      rot: Math.floor(Math.random() * 360),
      // Escala minima al azar (±8%) para que no se vean todos identicos.
      esc: 0.92 + Math.random() * 0.16,
    });
  }
  return puestos;
}

/** Medidas del paño para un lado `S`: todo sale de ahí. */
export function medidasBuzios(S: number) {
  const cauriW = Math.max(16, Math.round(S * CAURI_W_FRAC));
  return { radioColoca: S * RADIO_FRAC, cauriW, cauriH: cauriW * RATIO_CAURI };
}

/** Dónde queda un cauri dentro del paño, en píxeles y ya centrado. */
export function ubicarCauri(p: Pos, S: number) {
  const { radioColoca, cauriW, cauriH } = medidasBuzios(S);
  const w = cauriW * p.esc;
  const h = cauriH * p.esc;
  return {
    left: S / 2 + p.x * radioColoca - w / 2,
    top: S / 2 + p.y * radioColoca - h / 2,
    width: w,
    height: h,
  };
}

/** El arte de un cauri según haya caído abierto o cerrado. */
export const caraCauri = (abierto: boolean) => (abierto ? ABIERTO : CERRADO);

export const BASE_BUZIOS = BASE;

/**
 * El paño quieto, sin animación: es lo que va en la tarjeta que se comparte.
 * La pantalla de tirada dibuja lo mismo, pero con cada cauri cayendo.
 */
export function TableroBuzios({ S, pos, caras }: { S: number; pos: Pos[]; caras: boolean[] }) {
  if (S <= 0) return null;
  return (
    <View style={{ width: S, height: S }}>
      <Image source={BASE} style={{ width: S, height: S }} resizeMode="contain" />
      {pos.map((p, i) => (
        <Image
          key={i}
          source={caraCauri(!!caras[i])}
          resizeMode="contain"
          style={{ position: 'absolute', ...ubicarCauri(p, S), transform: [{ rotate: `${p.rot}deg` }] }}
        />
      ))}
    </View>
  );
}
