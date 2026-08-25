import { forwardRef } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { OraculoModulo } from '@/oraculos/tipos';
import { colores } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';
import { caidaActual } from '../caida';

/**
 * ───────────────────────────────────────────────────────────────────────────
 * LA TARJETA QUE SE COMPARTE
 * ───────────────────────────────────────────────────────────────────────────
 * Una foto de la consulta: la pregunta, la caída, el arranque de la lectura y
 * abajo la invitación a bajar la app.
 *
 * MIDE SIEMPRE LO MISMO, en puntos, y no se adapta a la pantalla. Es lo
 * contrario de lo que hace el resto de la app, y es a propósito: esto no lo va
 * a ver quien tiene el teléfono, lo va a ver quien reciba la imagen. Si el
 * tamaño saliera de la pantalla de origen, la misma consulta daría una foto
 * distinta en cada teléfono. La resolución real sí depende del dispositivo: la
 * captura sale a la densidad de la pantalla, así que en un teléfono común estos
 * 360 puntos terminan siendo unos 1080 píxeles.
 *
 * ES 9:16 Y NO CUADRADA. Vertical alta es la forma de las historias, que es
 * donde una imagen así se manda, y de paso le deja a la caída casi el doble de
 * alto: las cartas se ven grandes, que es lo que se está compartiendo.
 *
 * EL TEXTO VA RECORTADO A PROPOSITO, Y SE NOTA. Tres renglones y puntos
 * suspensivos, con la invitación abajo. Una lectura entera no entra en una
 * imagen legible, y si entrara tampoco convendría: lo que se comparte es la
 * caída, y el texto cortado es lo que hace que quien la vea quiera abrirla.
 */

/** Lado de la tarjeta, en puntos. 9:16, la forma de una historia. */
export const ANCHO_TARJETA = 360;
export const ALTO_TARJETA = 640;

// ── El alto se reparte a mano, y ninguna parte se estira sola ───────────────
// Todo tiene alto FIJO menos la caída, que se queda con lo que sobra. Si en
// cambio se dejaba que cada parte ocupara lo que necesita, una pregunta de tres
// renglones empujaba al resto y el bloque de lectura terminaba cortado a la
// mitad de un renglón: no truncado con puntos suspensivos —que es lo que se
// quiere— sino tajeado por la mitad de las letras.
// ── Y ojo con el alto de los bloques de texto ──────────────────────────────
// Android le suma a cada Text un relleno propio arriba y abajo (el famoso
// includeFontPadding), asi que un Text de tres renglones NO mide tres veces el
// lineHeight: mide un poco mas. Fijandole el alto exacto, el ultimo renglon
// queda cortado por la mitad de las letras.
//
// Se apaga ese relleno (abajo, en cada estilo) y ademas se dejan 2 puntos de
// juego, porque el alto real depende de la fuente y de la escala de letra del
// sistema. Los 2 puntos salen de la caida, que es la unica que se estira.
const PADDING = 18;
const HOLGURA = 2;
const ALTO_PREGUNTA = 26 * 3 + HOLGURA; // tres renglones de 26
const ALTO_LECTURA = 18 * 3 + HOLGURA; // tres renglones de 18
const ALTO_MARCA = 24; // el alto de la moneda, que es lo mas alto de la fila
const ALTO_CTA = 15 + HOLGURA;

// Aire entre bloques. El pie va apretado contra si mismo y separado de la
// caida: se lee como una sola firma abajo y no como cuatro cosas sueltas.
const AIRE_PREGUNTA = 14;
const AIRE_PIE = 16;
const AIRE_SEPARADOR = 12;
const AIRE_LECTURA = 16;
const AIRE_CTA = 6;

/** Lo que le queda a la caída: unos 378 puntos, casi el doble que antes. */
const ALTO_CAIDA =
  ALTO_TARJETA -
  PADDING * 2 -
  ALTO_PREGUNTA -
  AIRE_PREGUNTA -
  AIRE_PIE -
  1 - // el separador
  AIRE_SEPARADOR -
  ALTO_LECTURA -
  AIRE_LECTURA -
  ALTO_MARCA -
  AIRE_CTA -
  ALTO_CTA;

const ANCHO_CAIDA = ANCHO_TARJETA - PADDING * 2;

interface Props {
  oraculo: OraculoModulo | undefined;
  pregunta: string;
  parrafos: string[];
  /** Nombre de la app, ya traducido: el de la firma y el de la invitación. */
  marca: string;
  /**
   * La invitación de abajo, ya traducida. NO NOMBRA A LA APP: el nombre está
   * justo arriba, en la firma, y repetirlo dos renglones seguidos se lee como
   * un error. Dice para qué bajarla y dónde, que es lo que falta.
   */
  invitacion: string;
}

export const TarjetaLectura = forwardRef<View, Props>(function TarjetaLectura(
  { oraculo, pregunta, parrafos, marca, invitacion },
  ref
) {
  const acento = oraculo?.acento ?? colores.cromo;
  const dibujarCaida = caidaActual(oraculo?.id ?? 'lectura', pregunta);

  return (
    <View ref={ref} collapsable={false} style={estilos.tarjeta}>
      <LinearGradient
        colors={[hexAlfa(acento, 0.34), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.92 }}
      />

      <Text style={estilos.pregunta} numberOfLines={3}>
        {pregunta}
      </Text>

      <View style={estilos.caida}>
        {dibujarCaida?.({ ancho: ANCHO_CAIDA, alto: ALTO_CAIDA })}
      </View>

      <View style={estilos.pie}>
        <View style={estilos.separador} />

        <Text style={estilos.lectura} numberOfLines={3} ellipsizeMode="tail">
          {parrafos.join(' ')}
        </Text>

        <View style={estilos.marca}>
          <Text style={estilos.marcaTexto}>{marca}</Text>
          {oraculo?.icono ? (
            <Image source={oraculo.icono} style={estilos.moneda} resizeMode="contain" />
          ) : null}
        </View>

        <Text style={estilos.cta} numberOfLines={1}>
          {invitacion}
        </Text>
      </View>
    </View>
  );
});

const estilos = StyleSheet.create({
  tarjeta: {
    width: ANCHO_TARJETA,
    height: ALTO_TARJETA,
    padding: PADDING,
    // SIN ESQUINAS REDONDEADAS. La imagen no se ve dentro de un marco: se ve
    // sola, y una esquina redondeada contra el fondo de otra app queda como un
    // recorte mal hecho.
    backgroundColor: colores.fondo,
    overflow: 'hidden',
  },
  pregunta: {
    // SIN ALTO FIJO, a diferencia del resto. Reservarle los tres renglones
    // siempre dejaba un hueco muerto debajo del titulo cuando la pregunta
    // ocupaba uno solo, que es el caso normal. Midiendo lo que ocupa, ese aire
    // se lo queda la caida, que es la unica que se estira.
    //
    // El presupuesto de la caida se sigue calculando con los tres renglones
    // (ver ALTO_CAIDA): es el peor caso, y asi la caida se dibuja del mismo
    // tamano en todas las tarjetas en vez de agrandarse con las preguntas
    // cortas. Con una pregunta corta, el sobrante queda como aire repartido
    // arriba y abajo de la tirada, que es donde no molesta.
    marginBottom: AIRE_PREGUNTA,
    color: colores.texto,
    fontSize: 21,
    lineHeight: 26,
    textAlign: 'center',
    includeFontPadding: false,
    fontFamily: fuente('subtituloMedium'),
  },
  caida: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pie: {
    marginTop: AIRE_PIE,
    alignItems: 'center',
  },
  separador: {
    width: '38%',
    height: 1,
    marginBottom: AIRE_SEPARADOR,
    backgroundColor: hexAlfa(colores.texto, 0.22),
  },
  lectura: {
    height: ALTO_LECTURA,
    marginBottom: AIRE_LECTURA,
    alignSelf: 'stretch',
    color: hexAlfa(colores.texto, 0.8),
    fontSize: 12.5,
    lineHeight: 18,
    textAlign: 'center',
    includeFontPadding: false,
    fontFamily: fuente('ui'),
  },
  marca: {
    height: ALTO_MARCA,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  marcaTexto: {
    color: colores.texto,
    fontSize: 13,
    letterSpacing: 1.8,
    fontFamily: fuente('titulo'),
  },
  moneda: {
    width: ALTO_MARCA,
    height: ALTO_MARCA,
  },
  cta: {
    height: ALTO_CTA,
    marginTop: AIRE_CTA,
    color: hexAlfa(colores.texto, 0.55),
    fontSize: 10.5,
    lineHeight: 15,
    textAlign: 'center',
    includeFontPadding: false,
    fontFamily: fuente('ui'),
  },
});
