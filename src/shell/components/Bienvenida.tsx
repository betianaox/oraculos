import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useT } from '@/i18n';
import { colores, espaciado, radios } from '@/shell/theme/tokens';
import { hexAlfa } from '@/shell/color';
import { fuente } from '@/shell/theme/fuentes';

/** El domo del Tarot: el primero del carrusel y el que hace de cara de la app. */
const DOMO = require('../../../assets/oraculos/tarot/domo.webp');

/**
 * EL SALUDO DE LA PRIMERA VEZ, Y ES CHICO A PROPOSITO.
 *
 * No es un tutorial ni una pantalla: es un dialogo encima del inicio, para que
 * la primera impresion siga siendo la app y no un manual. Se evaluo un recorrido
 * a pantalla completa y se descarto — quien acaba de instalar quiere ver el
 * quiosco, no leer instrucciones sobre algo que todavia no vio.
 *
 * Dice DOS cosas y ninguna mas:
 *
 * 1. Que se puede hacer: consultar, mirar el consejo del dia, aprender a leer.
 * 2. Donde esta la Ayuda, que es lo unico que hace falta saber para arrancar.
 *
 * LO QUE NO DICE ES LA ADVERTENCIA, y esa fue una correccion. Estaba abriendo
 * con "aca no se adivina el futuro": cierto, pero quien instala esta app la
 * instala con ganas de que le adivinen el futuro, y leer eso en la primera
 * pantalla es enterarse de que uno se equivoco de app. La advertencia va
 * completa en Ayuda, con su titulo propio y sin letra chica. Una cosa es que
 * este; otra es recibir a alguien con ella en la puerta.
 *
 * Las dos salidas lo dan por visto: la que entra a la Ayuda y la que se va. El
 * flag se escribe al CERRARLO y no al abrirlo, asi que si la app muere mientras
 * esta en pantalla, la proxima vez se vuelve a ofrecer en lugar de perderse.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * Y TIENE QUE PARECERSE A LA APP.
 * ───────────────────────────────────────────────────────────────────────────
 * La primera version era una tarjeta gris con borde fino: correcta en cualquier
 * app y equivocada en ESTA. Lo primero que ve alguien que instala Oraculos no
 * puede ser un dialogo de sistema — la app es vidrio, metal, oro y nebulosa, y
 * el saludo aparece ANTES que todo eso, asi que si el saludo es sobrio la app
 * arranca pareciendo sobria.
 *
 * Ahora lleva el domo, el degrade dorado del cromo y el titulo en Cinzel: las
 * tres cosas que hacen que se lea como parte del quiosco y no como algo que
 * Android le puso encima.
 */
export function Bienvenida({
  visible,
  onAyuda,
  onCerrar,
}: {
  visible: boolean;
  onAyuda: () => void;
  onCerrar: () => void;
}) {
  const t = useT();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCerrar}>
      <View style={estilos.fondo}>
        <View style={estilos.tarjeta}>
          {/* El mismo degrade que la Ayuda, para que las dos piezas nuevas se
              lean como una sola cosa. */}
          <LinearGradient
            colors={[hexAlfa(colores.gema, 0.16), colores.superficie]}
            style={StyleSheet.absoluteFill}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />

          {/* El domo, que es la imagen que la app usa para decir "esto es un
              oraculo". Recortado arriba a proposito: se asoma, no se explica. */}
          <View style={estilos.domoCaja}>
            <Image source={DOMO} style={estilos.domo} resizeMode="contain" />
          </View>

          <Text style={estilos.titulo}>{t('bienvenida.titulo')}</Text>
          <Text style={estilos.texto}>{t('bienvenida.texto')}</Text>

          <View style={estilos.acciones}>
            <Pressable
              onPress={onCerrar}
              style={({ pressed }) => [estilos.boton, estilos.secundario, pressed && estilos.presionado]}
              accessibilityRole="button"
            >
              <Text style={estilos.secundarioTexto}>{t('bienvenida.cerrar')}</Text>
            </Pressable>

            <Pressable
              onPress={onAyuda}
              style={({ pressed }) => [estilos.boton, estilos.principal, pressed && estilos.presionado]}
              accessibilityRole="button"
            >
              <Text style={estilos.principalTexto}>{t('bienvenida.ayuda')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  /** El velo detras del dialogo, mas oscuro que el `overlay` comun: aca hay que
      apagar una nebulosa entera para que la tarjeta se despegue. */
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: espaciado.xl,
  },
  tarjeta: {
    width: '100%',
    maxWidth: 360,
    paddingHorizontal: espaciado.xl,
    paddingTop: espaciado.lg,
    paddingBottom: espaciado.xl,
    gap: espaciado.sm,
    borderRadius: radios.md,
    borderWidth: 1,
    /** Borde dorado tenue, como el resto del cromo de la app. */
    borderColor: hexAlfa(colores.gema, 0.35),
    backgroundColor: colores.superficie,
    overflow: 'hidden',
  },
  domoCaja: {
    alignItems: 'center',
    marginBottom: espaciado.xs,
  },
  domo: {
    width: 116,
    height: 116,
  },
  /**
   * EL MISMO TRATAMIENTO QUE EL NOMBRE DEL ORACULO EN EL DOMO (ver
   * `PanelNombre`): Cinzel bold, el dorado de la casa y una sombra proyectada
   * corta. Ojo, es SOMBRA y no glow — el resplandor es del cromo (el titulo del
   * header, el borde de las chapas) y lo dorado de esta app se levanta con
   * profundidad, no con luz. Copiar el efecto equivocado se nota aunque no se
   * sepa por que.
   */
  titulo: {
    textAlign: 'center',
    color: '#e9c46a',
    fontSize: 20,
    letterSpacing: 1.5,
    fontFamily: fuente('tituloBold'),
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    /* Aire propio arriba y abajo: la sombra necesita lugar para leerse, y sin
       esto el titulo quedaba apretado entre el domo y el parrafo. */
    paddingTop: espaciado.sm,
    paddingBottom: espaciado.md,
  },
  texto: {
    textAlign: 'center',
    color: colores.textoSuave,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fuente('ui'),
  },
  acciones: {
    flexDirection: 'row',
    gap: espaciado.sm,
    marginTop: espaciado.lg,
  },
  boton: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radios.sm,
  },
  presionado: {
    opacity: 0.75,
  },
  secundario: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colores.borde,
    backgroundColor: hexAlfa(colores.superficieAlta, 0.9),
  },
  secundarioTexto: {
    color: colores.textoSuave,
    fontSize: 15,
    fontFamily: fuente('uiMedium'),
  },
  /**
   * EL DORADO DE LOS TITULOS, que es el mismo que ya usa el boton de
   * `ModalRecompensa`. No es el de la gemita del header (`colores.gema`,
   * #C9B27A): ese tiene 42% de saturacion y llenando un boton entero se lee
   * como amarillo palido en vez de oro — funciona en una pastilla de 20 puntos,
   * no en un area grande. El problema era la saturacion, no la luz.
   *
   * El texto oscuro encima queda en 11.46 de contraste.
   */
  principal: {
    backgroundColor: '#e9c46a',
  },
  principalTexto: {
    /* Sobre el dorado, texto oscuro: es un color claro y no cambia nunca. */
    color: colores.fondo,
    fontSize: 15,
    fontFamily: fuente('uiMedium'),
  },
});
