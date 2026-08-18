import Constants from 'expo-constants';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/tipos';
import { IDIOMAS } from '@/i18n/idiomas';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { oraculosDe } from '@/oraculos/registry';
import { Header } from '@/shell/components/Header';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';

type Props = NativeStackScreenProps<RootStackParamList, 'Ayuda'>;

/**
 * AYUDA Y AJUSTES, EN LA MISMA PANTALLA.
 *
 * Antes eran dos cosas: una ruedita en el inicio que abria Ajustes —donde solo
 * se elegia el idioma— y ninguna ayuda en ningun lado. Ahora es una sola puerta
 * detras del `?`, porque son la misma pregunta: "no entiendo algo, ¿donde miro?".
 * Separarlas obliga a adivinar en cual de las dos esta lo que uno busca.
 *
 * El orden de los bloques es el orden en que le sirven a alguien que abre esto:
 * primero QUE hay (los oraculos), despues QUE se puede hacer, despues la
 * advertencia, y al final lo que casi nadie toca (idioma, enlaces).
 *
 * LO QUE SE PUEDE HACER SE DICE UNA SOLA VEZ, no oraculo por oraculo. Las cuatro
 * secciones son las mismas en los seis: repetirlas seis veces alargaria la
 * pantalla sin agregar nada, y ademas envejeceria mal — el dia que haya ocho
 * oraculos habria ocho copias del mismo parrafo.
 */
export function AyudaScreen({ navigation }: Props) {
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const setIdioma = useApp((s) => s.setIdioma);
  const reiniciarSaludo = useApp((s) => s.reiniciarSaludo);
  const insets = useSafeAreaInsets();

  /* Los que se ofrecen EN ESTE IDIOMA, no los seis: el I Ching solo esta en
     castellano, y listar aca uno que el carrusel no muestra es prometer algo
     que la app no tiene. */
  const oraculos = oraculosDe(idioma);

  const abrir = (url: string) => {
    void Linking.openURL(url).catch(() => {});
  };

  /** La politica vive en el sitio, y en el idioma de la app. */
  const urlPrivacidad = `https://imagostack.com${idioma === 'es' ? '' : `/${idioma}`}/apps/oraculos/privacidad`;

  const version = Constants.expoConfig?.version ?? '';

  return (
    <View style={estilos.contenedor}>
      {/* EL MISMO DEGRADADO QUE EL RESTO DE LAS PANTALLAS. Estaba en negro plano y
          por eso se veia como otra app: aca todo se apoya en una nebulosa o en un
          degrade del acento, y el header —que es una chapa metalica con glow—
          flotaba sobre la nada. Va en el dorado del cromo y no en el acento de un
          oraculo, porque esta pantalla no es de ninguno: es de la app. */}
      <LinearGradient
        colors={[hexAlfa(colores.gema, 0.22), colores.fondo]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.65 }}
      />

      <Header accion="cerrar" onAccion={() => navigation.goBack()} titulo={t('ayuda.titulo')} />

      <ScrollView
        contentContainerStyle={[estilos.cuerpo, { paddingBottom: insets.bottom + espaciado.xxl }]}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Que hay ─────────────────────────────────────────────────────── */}
        <Text style={estilos.rotulo}>{t('ayuda.oraculos')}</Text>
        <View style={[estilos.grupo, estilos.grilla]}>
          {/**
           * UNA FILA POR ORACULO, CON SU ICONO Y SIN SUBTITULO.
           *
           * Tenia el subtitulo debajo del nombre y un puntito de color al lado, y
           * las seis filas se comian la pantalla entera: lo que la persona vino a
           * buscar —que se puede HACER— quedaba abajo del pliegue, y lo primero
           * que veia era una lista de frases poeticas que ya lee en el carrusel.
           *
           * Este bloque contesta una sola pregunta: "¿que hay adentro?". Seis
           * nombres. El icono es el que cada oraculo ya tiene dibujado, asi que se
           * reconocen sin leer y ademas la pantalla deja de ser texto plano.
           */}
          {oraculos.map((o) => (
            <View key={o.id} style={estilos.celdaOraculo}>
              <Image source={o.icono} style={estilos.iconoOraculo} resizeMode="contain" />
              <Text style={estilos.nombreOraculo} numberOfLines={1}>
                {t(o.nombreKey)}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Que se puede hacer ──────────────────────────────────────────── */}
        <Text style={[estilos.rotulo, estilos.rotuloSuelto]}>{t('ayuda.enCadaUno')}</Text>
        <View style={estilos.grupo}>
          {(
            [
              ['chatbubble-ellipses-outline', 'preguntar'],
              ['volume-high', 'escuchar'],
              ['bulb-outline', 'consejo'],
              ['book-outline', 'aprender'],
              ['school-outline', 'reto'],
            ] as const
          ).map(([icono, clave], i) => (
            <View key={clave} style={[estilos.fila, i > 0 && estilos.filaBorde]}>
              {/* LOS MISMOS ICONOS QUE EL FOOTER, uno por uno: quien lea esto y
                  despues mire abajo reconoce el boton sin traducir nada. Los tres
                  ultimos salen de `Footer.tsx`; el primero no tiene boton propio
                  —a preguntar se entra tocando el domo— asi que es el unico que
                  se eligio aca, y se eligio el que no compite con ninguno. */}
              {/* El parlante es de MaterialCommunityIcons y no de Ionicons porque
                  ES EL MISMO ICONO que dibuja `BotonVoz`: quien lo lea aca lo va a
                  reconocer despues sobre la lectura sin tener que deducirlo. */}
              {icono === 'volume-high' ? (
                <MaterialCommunityIcons
                  name="volume-high"
                  size={20}
                  color={colores.gema}
                  style={estilos.icono}
                />
              ) : (
                <Ionicons name={icono} size={20} color={colores.gema} style={estilos.icono} />
              )}
              <View style={estilos.filaTexto}>
                <Text style={estilos.filaTitulo}>{t(`ayuda.${clave}`)}</Text>
                <Text style={estilos.filaSub}>{t(`ayuda.${clave}Detalle`)}</Text>
              </View>
            </View>
          ))}
        </View>

        {/**
         * ── Las gemas ────────────────────────────────────────────────────────
         *
         * BLOQUE PROPIO Y NO UN SEXTO ITEM DE LA LISTA DE ARRIBA. Esa lista se
         * titula "en cada uno puedes", y las gemas no son algo que se haga
         * adentro de un oraculo: son la economia de la app entera, la misma para
         * los seis. Meterlas ahi obligaria a cambiar el titulo por uno mas vago.
         *
         * Y es lo unico de la app que la persona necesita que le expliquen. Todo
         * lo demas se descubre tocando; el contador del header, en cambio, baja
         * solo y sin decir por que ni cuando vuelve a subir — que es exactamente
         * el momento en que alguien piensa que la app se rompio, o que hay que
         * pagar.
         */}
        <Text style={[estilos.rotulo, estilos.rotuloSuelto]}>{t('ayuda.gemasTitulo')}</Text>
        <View style={[estilos.grupo, estilos.aviso, estilos.gemas]}>
          <Ionicons
            name="diamond-outline"
            size={20}
            color={colores.gema}
            style={[estilos.icono, estilos.iconoGema]}
          />
          <View style={estilos.filaTexto}>
            <Text style={estilos.filaTitulo}>{t('ayuda.gemas')}</Text>
            <Text style={estilos.filaSub}>{t('ayuda.gemasVideo')}</Text>
          </View>
        </View>

        {/* ── La advertencia ──────────────────────────────────────────────── */}
        {/**
         * NO ES LETRA CHICA Y NO VA AL FINAL.
         *
         * Va antes de los ajustes y con el mismo peso que todo lo demas, porque
         * es lo unico de esta pantalla que alguien tiene DERECHO a saber, no
         * solo interes en saber. Escondido abajo en gris cumpliria la forma y no
         * el fondo.
         *
         * Dice las dos cosas: lo que la app ES —entretenimiento y aprendizaje— y
         * lo que no. Solo lo segundo suena a descargo de abogado; solo lo primero
         * no alcanza.
         */}
        <Text style={[estilos.rotulo, estilos.rotuloSuelto]}>{t('ayuda.disclaimerTitulo')}</Text>
        <View style={[estilos.grupo, estilos.aviso]}>
          <Text style={estilos.avisoTexto}>{t('ayuda.disclaimer')}</Text>
        </View>

        {/* ── Ajustes ─────────────────────────────────────────────────────── */}
        <Text style={[estilos.rotulo, estilos.rotuloSuelto]}>{t('ajustes.idioma')}</Text>
        <View style={estilos.grupo}>
          {IDIOMAS.map((item, i) => {
            const seleccionado = item.codigo === idioma;
            return (
              <Pressable
                key={item.codigo}
                onPress={() => setIdioma(item.codigo)}
                style={({ pressed }) => [
                  estilos.fila,
                  i > 0 && estilos.filaBorde,
                  pressed && estilos.filaPresionada,
                ]}
                accessibilityRole="button"
              >
                <Text style={estilos.filaTitulo}>{item.etiqueta}</Text>
                {seleccionado && <Ionicons name="checkmark" size={20} color={colores.gema} />}
              </Pressable>
            );
          })}
        </View>

        {/* ── Los enlaces ─────────────────────────────────────────────────── */}
        <View style={[estilos.grupo, estilos.grupoSuelto]}>
          {(
            [
              ['star-outline', 'valorar', () => abrir(URL_PLAY)],
              ['shield-checkmark-outline', 'privacidad', () => abrir(urlPrivacidad)],
              ['mail-outline', 'contacto', () => abrir(`mailto:${CORREO}`)],
            ] as const
          ).map(([icono, clave, alTocar], i) => (
            <Pressable
              key={clave}
              onPress={alTocar}
              style={({ pressed }) => [
                estilos.fila,
                i > 0 && estilos.filaBorde,
                pressed && estilos.filaPresionada,
              ]}
              accessibilityRole="button"
            >
              <Ionicons name={icono} size={20} color={colores.cromo} style={estilos.icono} />
              <Text style={[estilos.filaTitulo, estilos.enlace]}>{t(`ayuda.${clave}`)}</Text>
              <Ionicons name="open-outline" size={16} color={colores.textoTenue} />
            </Pressable>
          ))}
        </View>

        <Text style={estilos.version}>{t('ayuda.version', { v: version })}</Text>

        {/* Herramienta de desarrollo: `__DEV__` es false en el build de
            produccion, asi que este boton no existe alli. Deja la app como la ve
            alguien que la acaba de instalar. */}
        {__DEV__ && (
          <Pressable
            onPress={() => {
              reiniciarSaludo();
              navigation.goBack();
            }}
            style={estilos.dev}
          >
            <Text style={estilos.devTexto}>{t('ayuda.verSaludo')}</Text>
          </Pressable>
        )}
      </ScrollView>

      {/**
       * EL DEGRADE DEL PIE, QUE HACE DOS COSAS A LA VEZ.
       *
       * La primera es tapar el choque: la barra de Android es transparente, asi
       * que el texto que todavia no se scrolleo le pasa POR DETRAS y se lee
       * mezclado con los tres botones del sistema. Cortarlo con un borde duro
       * quedaria peor; desvanecerlo lo saca de la vista sin que se note el corte.
       *
       * La segunda sale gratis y vale igual: un texto que se desvanece en el
       * borde inferior es la senal universal de que la pantalla sigue. Sin eso,
       * quien llega al limite de lo que se ve no tiene forma de saber si abajo
       * hay algo mas.
       *
       * Va DESPUES del ScrollView para quedar encima, y no recibe toques
       * (`pointerEvents`) — si no, se comeria el scroll de la ultima franja.
       */}
      <LinearGradient
        /* Sin `locations`: el desvanecido reparte todo el alto y llega al negro
           recien abajo del todo. Se probo forzarlo antes —al 70% y al 85%— y las
           dos veces quedo pesado: tapaba de mas y se comia texto que todavia se
           tenia que leer. Suave es mejor que solido. */
        colors={['transparent', colores.fondo]}
        style={[estilos.velo, { height: insets.bottom + 72 }]}
        pointerEvents="none"
      />
    </View>
  );
}

/** La ficha en Google Play, armada con el paquete que declara la app. */
const URL_PLAY = 'https://play.google.com/store/apps/details?id=com.imagostack.oraculos';
const CORREO = 'support@imagostack.com';

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  cuerpo: {
    paddingHorizontal: espaciado.lg,
    paddingTop: espaciado.lg,
    paddingBottom: espaciado.xxxl,
    gap: espaciado.md,
  },
  /**
   * EN CINZEL Y EN DORADO, como titula el resto de la app.
   *
   * Salian en Inter gris —la tipografia de los cuerpos de texto— y por eso se
   * leian como una app de formularios metida adentro de un quiosco de domos. El
   * dorado es el mismo de los titulos de `Aprender`.
   */
  rotulo: {
    color: '#e9c46a',
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fuente('tituloBold'),
  },
  /** Los rotulos que no son el primero necesitan aire arriba, no solo el `gap`. */
  rotuloSuelto: {
    marginTop: espaciado.md,
  },
  grupo: {
    borderRadius: radios.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colores.borde,
    backgroundColor: colores.superficie,
    overflow: 'hidden',
  },
  grupoSuelto: {
    marginTop: espaciado.xl,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.md,
    paddingHorizontal: espaciado.lg,
    paddingVertical: espaciado.md,
  },
  filaBorde: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colores.bordeSuave,
  },
  filaPresionada: {
    backgroundColor: colores.superficieAlta,
  },
  /** El texto se lleva el espacio que sobra; el icono y el check no se mueven. */
  filaTexto: {
    flex: 1,
    gap: 2,
  },
  filaTitulo: {
    flex: 1,
    color: colores.texto,
    fontSize: 16,
    fontFamily: fuente('ui'),
  },
  filaSub: {
    color: colores.textoSuave,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fuente('ui'),
  },
  /** Ancho fijo para que los titulos arranquen todos en la misma columna. */
  icono: {
    width: 22,
    textAlign: 'center',
  },
  /**
   * DOS COLUMNAS, NO SEIS FILAS.
   *
   * En una sola columna los seis oraculos ocupaban la pantalla entera y "en cada
   * uno puedes" —que es lo que la persona vino a buscar— arrancaba abajo del
   * pliegue. Este bloque solo contesta "¿que hay adentro?", asi que no necesita
   * el ancho: necesita terminar rapido. En dos columnas mide la mitad y los dos
   * bloques entran juntos en la primera pantalla.
   *
   * flexWrap, y no una grilla de dos fijas: el dia que haya un septimo oraculo
   * cae solo en el renglon siguiente sin tocar nada. Y ojo, la lista se filtra
   * por idioma (el I Ching solo esta en castellano), asi que la cantidad ya
   * cambia hoy segun donde se mire.
   */
  grilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: espaciado.xs,
  },
  celdaOraculo: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: espaciado.sm,
    paddingHorizontal: espaciado.md,
    paddingVertical: espaciado.sm,
  },
  iconoOraculo: {
    width: 30,
    height: 30,
  },
  /** Cede antes que el icono: con nombre largo se corta el texto, no la moneda. */
  nombreOraculo: {
    flexShrink: 1,
    color: colores.texto,
    fontSize: 15,
    fontFamily: fuente('ui'),
  },
  aviso: {
    padding: espaciado.lg,
  },
  /**
   * El diamante al costado. La fila se alinea arriba —`flex-start`— porque el
   * texto tiene dos parrafos y centrarlo dejaria el icono flotando en el medio;
   * el `marginTop` de abajo es lo que lo baja hasta el renglon del titulo.
   */
  gemas: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: espaciado.md,
  },
  avisoTexto: {
    color: colores.texto,
    fontSize: 14.5,
    lineHeight: 22,
    fontFamily: fuente('ui'),
  },
  enlace: {
    flex: 1,
  },
  version: {
    marginTop: espaciado.lg,
    textAlign: 'center',
    color: colores.textoTenue,
    fontSize: 12,
    fontFamily: fuente('ui'),
  },
  /** El alto lo pone quien lo dibuja: depende del inset de cada telefono. */
  velo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  /**
   * Baja el diamante. Sin esto quedaba pegado al tope de la caja de texto, que
   * arranca bastante mas arriba que las letras — incluye el espacio de los
   * acentos y las colas— y el ojo alinea con el trazo, no con la caja.
   *
   * El numero salio de mirarlo, no de una cuenta: la geometria daba 5 y a ojo
   * seguia alto, porque el titulo ocupa dos renglones y el icono tiene que
   * pesar contra el bloque entero, no contra la primera linea.
   */
  iconoGema: {
    marginTop: 13,
  },
  dev: {
    marginTop: espaciado.md,
    alignSelf: 'center',
    paddingVertical: espaciado.sm,
    paddingHorizontal: espaciado.md,
  },
  devTexto: {
    color: colores.textoTenue,
    fontSize: 12,
    fontFamily: fuente('ui'),
  },
});
