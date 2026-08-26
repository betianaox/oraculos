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
 * De arriba abajo: la firma, una línea, la caída, otra línea, la pregunta, el
 * arranque de la lectura cortado, y la invitación.
 *
 * LAS DOS LINEAS SON LO QUE LA ORDENA. Encierran la caída, que es lo que se
 * quiere mostrar, y separan lo de arriba (de quién es esto) de lo de abajo (qué
 * dice). Sin ellas las partes flotaban juntas y no se veía dónde terminaba una
 * y empezaba la otra.
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
 * alto: las piezas se ven grandes, que es lo que se está compartiendo.
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
//
// Android le suma a cada Text un relleno propio arriba y abajo (el famoso
// includeFontPadding), así que un Text de tres renglones NO mide tres veces el
// lineHeight: mide un poco más. Se apaga ese relleno (abajo, en cada estilo) y
// además se dejan 2 puntos de juego, porque el alto real depende de la fuente.
const PADDING = 18;
const HOLGURA = 2;

const ALTO_FIRMA = 28;
const ALTO_PREGUNTA = 24 * 3 + HOLGURA; // tres renglones de 24
const ALTO_LECTURA = 18 * 3 + HOLGURA; // tres renglones de 18
// El badge de Google Play, en lugar de una frase escrita por nosotros. Viene
// traducido de fabrica —hay un archivo por idioma— y se reconoce de un vistazo,
// que es mas de lo que consigue cualquier frase a este tamano.
//
// NO SE RECOLOREA NI SE RECORTA: las reglas de marca de Google lo prohiben, y
// por eso tampoco se usa el triangulito suelto. Solo se escala, respetando su
// proporcion (839x258).
const BADGE_ANCHO = 120;
const BADGE_ALTO = Math.round(BADGE_ANCHO * (258 / 839));

// HAY UNA SOLA LINEA, Y VA ARRIBA. Cerraba la caida con otra abajo, y sobraba:
// la de arriba separa la firma de la tirada, que son dos cosas distintas, pero
// entre la tirada y la pregunta no hace falta un trazo para entender que una
// termino y empieza la otra — lo dice el cambio de dibujo a texto. Sacandola,
// ademas, ese espacio se puede usar para separarlas de verdad.
//
// Y la tirada va APRETADA CONTRA SU LINEA, con el aire repartido abajo, donde
// hay tres textos seguidos y el espacio entre ellos es lo unico que los
// distingue.
const AIRE_FIRMA = 8; // firma -> linea
const AIRE_LINEA = 14; // linea -> caida
const AIRE_PREGUNTA = 30; // caida -> pregunta
const AIRE_LECTURA = 20; // pregunta -> lectura
const AIRE_CTA = 16; // lectura -> badge

/**
 * Lo que le queda a la caída.
 *
 * Se calcula con la pregunta de TRES renglones, que es el peor caso, aunque la
 * pregunta no tenga alto fijo. Así la caída se dibuja del mismo tamaño en todas
 * las tarjetas en vez de agrandarse cuando la pregunta es corta; el sobrante
 * queda como aire alrededor de la tirada, que es donde no molesta.
 */
const ALTO_CAIDA =
  ALTO_TARJETA -
  PADDING * 2 -
  ALTO_FIRMA -
  AIRE_FIRMA -
  1 - // la unica linea
  AIRE_LINEA -
  AIRE_PREGUNTA -
  ALTO_PREGUNTA -
  AIRE_LECTURA -
  ALTO_LECTURA -
  AIRE_CTA -
  BADGE_ALTO;

const ANCHO_CAIDA = ANCHO_TARJETA - PADDING * 2;

// El icono de la app es el ADAPTATIVO de Android, y ese formato obliga a dejar
// una zona segura enorme alrededor del dibujo: la bola ocupa poco mas de la
// mitad del archivo. Puesto en una caja del tamano que se quiere ver, se veria
// diminuto. Por eso va en una caja mucho mas grande, con margenes negativos que
// le devuelven al renglon el alto que corresponde.
const DOMO = require('../../../assets/android-icon-foreground.png');

// OJO: POR AHORA SOLO ESTA EL DE INGLES. Google publica un archivo por idioma en
// play.google.com/intl/es-419/badges/ y hay que bajar el es-419 y el pt-BR; un
// badge en ingles abajo de una tarjeta en castellano se lee como armada con lo
// que habia. Cuando esten, esto elige por idioma en vez de ser uno solo.
const BADGE = require('../../../assets/googleplay/en-US.png');
const CAJA_DOMO = 46;
const DOMO_VISIBLE = 26;
const RECORTE_DOMO = (CAJA_DOMO - DOMO_VISIBLE) / 2;

interface Props {
  oraculo: OraculoModulo | undefined;
  /** Nombre del oráculo, ya traducido: va arriba a la derecha, con su moneda. */
  nombre: string;
  pregunta: string;
  parrafos: string[];
  /** Nombre de la app, ya traducido: la firma de arriba a la izquierda. */
  marca: string;
}

export const TarjetaLectura = forwardRef<View, Props>(function TarjetaLectura(
  { oraculo, nombre, pregunta, parrafos, marca },
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

      <View style={estilos.firma}>
        <View style={estilos.firmaLado}>
          <Image source={DOMO} style={estilos.domo} resizeMode="contain" />
          <Text style={estilos.marcaTexto}>{marca}</Text>
        </View>
        <View style={estilos.firmaLado}>
          <Text style={[estilos.oraculoTexto, { color: acento }]}>{nombre}</Text>
          {oraculo?.icono ? (
            <Image source={oraculo.icono} style={estilos.moneda} resizeMode="contain" />
          ) : null}
        </View>
      </View>

      <View style={[estilos.linea, { marginTop: AIRE_FIRMA }]} />

      <View style={estilos.caida}>{dibujarCaida?.({ ancho: ANCHO_CAIDA, alto: ALTO_CAIDA })}</View>

      <Text style={estilos.pregunta} numberOfLines={3}>
        {pregunta}
      </Text>

      <Text style={estilos.lectura} numberOfLines={3} ellipsizeMode="tail">
        {parrafos.join(' ')}
      </Text>

      <Image source={BADGE} style={estilos.badge} resizeMode="contain" />
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
  firma: {
    height: ALTO_FIRMA,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firmaLado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  // Los margenes negativos le sacan al renglon la zona segura del icono
  // adaptativo. El de la derecha se pasa a proposito unos puntos mas: el nombre
  // tiene que quedar tan pegado al domo como la moneda al nombre del oraculo del
  // otro lado, o la firma se ve desbalanceada.
  domo: {
    width: CAJA_DOMO,
    height: CAJA_DOMO,
    marginVertical: -RECORTE_DOMO,
    marginLeft: -RECORTE_DOMO,
    marginRight: -RECORTE_DOMO - 4,
  },
  marcaTexto: {
    color: colores.texto,
    fontSize: 14,
    letterSpacing: 1.8,
    includeFontPadding: false,
    fontFamily: fuente('titulo'),
  },
  // Del mismo cuerpo que la marca: son las dos mitades de la misma firma, y con
  // el nombre chiquito parecia una nota al pie de ORACULOS en vez de su par. Lo
  // que los distingue es el color, que ya es el del oraculo.
  oraculoTexto: {
    fontSize: 14,
    letterSpacing: 1.2,
    includeFontPadding: false,
    fontFamily: fuente('titulo'),
  },
  moneda: {
    width: 24,
    height: 24,
  },
  // De punta a punta del contenido: la tarjeta ya tiene su padding, y la linea
  // llega hasta donde llega todo lo demas.
  linea: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: hexAlfa(colores.texto, 0.22),
  },
  caida: {
    flex: 1,
    marginTop: AIRE_LINEA,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // SANS Y NO LA SERIF. En la app la pregunta va en Cormorant porque esta en
  // pantalla, grande y con aire alrededor. Aca convive con la lectura y con la
  // invitacion en un bloque apretado, y la serif a ese tamano se lee peor: se
  // afina y compite con la caida. La sans, un poco mas grande y con mas peso,
  // manda sin adornarse.
  pregunta: {
    marginTop: AIRE_PREGUNTA,
    color: colores.texto,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    includeFontPadding: false,
    fontFamily: fuente('uiMedium'),
  },
  lectura: {
    height: ALTO_LECTURA,
    marginTop: AIRE_LECTURA,
    alignSelf: 'stretch',
    color: hexAlfa(colores.texto, 0.8),
    fontSize: 12.5,
    lineHeight: 18,
    textAlign: 'center',
    includeFontPadding: false,
    fontFamily: fuente('ui'),
  },
  badge: {
    width: BADGE_ANCHO,
    height: BADGE_ALTO,
    marginTop: AIRE_CTA,
    alignSelf: 'center',
  },
});
