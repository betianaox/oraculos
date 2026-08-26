import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { OraculoModulo } from '@/oraculos/tipos';
import { useT } from '@/i18n';
import { useApp } from '@/store/useApp';
import { analizarPregunta } from '@/pregunta/analizar';
import type { AnalisisPregunta, Tema } from '@/pregunta/tipos';
import { colores, espaciado, radios } from '../theme/tokens';
import { fuente } from '../theme/fuentes';
import { hexAlfa } from '../color';
import { ModalRecompensa } from './ModalRecompensa';

const TEMAS: Tema[] = ['general', 'amor', 'trabajo', 'dinero'];
const COSTO = 1;

// Aire entre el final del input y el borde del teclado.
//
// Es generoso a proposito. El alto del teclado viene en coordenadas de
// PANTALLA, mientras que el area visible se mide sobre el scroll: con
// edge-to-edge esos dos sistemas no coinciden del todo (la barra de navegacion
// entra en el medio), asi que la cuenta se queda un poco corta y el input
// terminaba tapado apenas. Este margen absorbe esa diferencia y ademas deja
// que se vea algo debajo del cursor.
const RESPIRO_INPUT = 56;

export interface DatosPregunta {
  pregunta: string;
  tema: Tema;
  analisis: AnalisisPregunta;
}

interface Props {
  oraculo: OraculoModulo;
  /** El motor de cada oraculo engancha aca su tirada. La gema se consume alli. */
  onEnviar: (datos: DatosPregunta) => void;
}

/**
 * Pantalla de PREGUNTA compartida por todos los oraculos: la persona escribe
 * igual, se detecta lo mismo (tema con autoajuste, senal), y al consultar se le
 * pasa el analisis al motor del oraculo via `onEnviar`. Se tinta con el acento
 * del oraculo para que se sienta de su mundo.
 */
export function PantallaPregunta({ oraculo, onEnviar }: Props) {
  const t = useT();
  const idioma = useApp((s) => s.idioma);
  const gemas = useApp((s) => s.gemas);
  const sumarGemas = useApp((s) => s.sumarGemas);
  const acento = oraculo.acento;

  const [tema, setTema] = useState<Tema>('general');
  const [pregunta, setPregunta] = useState('');
  const [temaManual, setTemaManual] = useState(false);
  const [sinGemas, setSinGemas] = useState(false);
  const [avisoCorta, setAvisoCorta] = useState(false);

  // El teclado de Android tapa el input y no se ve lo que se escribe.
  //
  // Con edge-to-edge (el default de Expo en Android) la ventana NO se
  // redimensiona al abrirse el teclado: se superpone. Asi que ni
  // `adjustResize` ni `KeyboardAvoidingView` alcanzan. Hay que medir el
  // teclado y reservarle ese espacio al final del scroll, para que el
  // contenido pueda subir por encima de el.
  const scrollRef = useRef<ScrollView>(null);
  const [altoTeclado, setAltoTeclado] = useState(0);
  // Medidas, en refs y no en estado: solo se consultan dentro del listener, y
  // como estado dispararian renders de mas.
  const altoVista = useRef(0);
  const finDelInput = useRef(0);

  useEffect(() => {
    const alAbrir = Keyboard.addListener('keyboardDidShow', (e) => {
      const teclado = e.endCoordinates.height;
      const visible = altoVista.current - teclado;
      // Cuanto hay que subir para que el input entero quede por encima del
      // teclado, con un respiro. Se sube SOLO hasta ahi: el boton de consultar
      // queda deliberadamente fuera de la vista, porque tenerlo a mano con el
      // teclado abierto invita a tocarlo y se vuelve de la otra pantalla con el
      // scroll corrido.
      const subir = finDelInput.current + RESPIRO_INPUT - visible;

      // Si ya se ve entero, no se mueve nada. En una pantalla alta —una tablet,
      // por ejemplo— cualquier ajuste seria un salto gratuito.
      if (subir <= 0) return;

      setAltoTeclado(teclado);
      // El scroll va DESPUES de que el padding nuevo entre en layout: en el
      // mismo frame no hay a donde desplazarse todavia.
      setTimeout(() => scrollRef.current?.scrollTo({ y: subir, animated: true }), 120);
    });

    const alCerrar = Keyboard.addListener('keyboardDidHide', () => {
      setAltoTeclado(0);
      // Se devuelve la vista a su lugar: si no, la pantalla queda corrida hacia
      // arriba con el teclado ya cerrado.
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    });

    return () => {
      alAbrir.remove();
      alCerrar.remove();
    };
  }, []);

  /**
   * El enter baja el teclado en vez de meter un salto de linea.
   *
   * Una pregunta no necesita saltos, y el enter es el gesto natural para decir
   * "ya esta". NO envia: enviar cuesta una gema, y un enter sin querer no
   * puede gastarla. Bajar el teclado no cuesta nada y se deshace tocando la
   * caja otra vez.
   *
   * Se hace mirando el texto y no con onSubmitEditing porque la caja es
   * multilinea, y ahi ese evento no es parejo entre dispositivos: en Android
   * el enter mete el salto igual. Asi el salto se saca siempre, venga como
   * venga (incluido pegar un texto con saltos adentro).
   */
  const alEscribir = useCallback((texto: string) => {
    if (texto.includes('\n')) {
      setPregunta(texto.replace(/\n+/g, ' ').replace(/\s+$/, ''));
      Keyboard.dismiss();
      return;
    }
    setPregunta(texto);
  }, []);

  const analisis = useMemo(() => analizarPregunta(pregunta, idioma), [pregunta, idioma]);
  const valida = analisis.senal !== 'invalida';
  const hintCorta = pregunta.trim().length > 0 && analisis.senal === 'invalida';

  // Autoajuste del tema mientras la persona no lo haya tocado a mano.
  useEffect(() => {
    if (temaManual) return;
    if (analisis.temaTexto !== 'general' && analisis.temaTexto !== tema) {
      setTema(analisis.temaTexto);
    }
  }, [analisis.temaTexto, temaManual, tema]);

  // "Nueva pregunta": al recuperar foco (X de Tirada/Lectura), arranca en blanco.
  useFocusEffect(
    useCallback(() => {
      setPregunta('');
      setTema('general');
      setTemaManual(false);
    }, [])
  );

  const enviar = () => onEnviar({ pregunta: pregunta.trim(), tema, analisis });

  const onConsultar = () => {
    if (analisis.senal === 'invalida') return;
    if (gemas <= 0) {
      setSinGemas(true);
      return;
    }
    if (analisis.senal === 'flaca') {
      setAvisoCorta(true);
      return;
    }
    enviar();
  };

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={[estilos.scroll, { paddingBottom: espaciado.xl + altoTeclado }]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      onLayout={(e) => {
        altoVista.current = e.nativeEvent.layout.height;
      }}
    >
      {oraculo.icono ? (
        <Image source={oraculo.icono} style={estilos.icono} resizeMode="contain" />
      ) : null}

      <Text style={estilos.titulo}>{t('pregunta.titulo')}</Text>

      {/* Chips de topico */}
      <View style={estilos.chips}>
        {TEMAS.map((clave) => {
          const sel = clave === tema;
          return (
            <Pressable
              key={clave}
              onPress={() => {
                setTema(clave);
                setTemaManual(true);
              }}
              style={[
                estilos.chip,
                { borderColor: hexAlfa(acento, 0.35) },
                sel && { backgroundColor: hexAlfa(acento, 0.22), borderColor: hexAlfa(acento, 0.9) },
              ]}
            >
              <Text style={[estilos.chipTexto, sel && estilos.chipTextoSel]} numberOfLines={1}>
                {t(`pregunta.chips.${clave}`)}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Input */}
      <TextInput
        // Donde termina el input dentro del contenido: es la referencia para
        // saber cuanto subir cuando aparece el teclado.
        onLayout={(e) => {
          const { y, height } = e.nativeEvent.layout;
          finDelInput.current = y + height;
        }}
        style={[estilos.input, { borderColor: hexAlfa(acento, 0.3) }]}
        placeholder={t('pregunta.placeholder')}
        placeholderTextColor={colores.textoTenue}
        value={pregunta}
        onChangeText={alEscribir}
        multiline
        // En una caja multilinea el retorno mete un salto por defecto. Con esto
        // cierra el teclado en los dispositivos donde funciona; donde no, lo
        // resuelve `alEscribir`.
        submitBehavior="blurAndSubmit"
        textAlignVertical="top"
      />

      {hintCorta && <Text style={estilos.hint}>{t('pregunta.hintCorta')}</Text>}

      {/* Boton consultar */}
      <Pressable
        onPress={onConsultar}
        disabled={!valida}
        style={({ pressed }) => [
          estilos.boton,
          { borderColor: hexAlfa(acento, 0.9) },
          !valida && estilos.botonOff,
          pressed && valida && estilos.botonPress,
        ]}
      >
        <Text style={estilos.botonTexto} numberOfLines={1}>
          {t('pregunta.consultar')}
        </Text>
        <View style={estilos.pill}>
          <Ionicons name="diamond-outline" size={13} color={colores.gema} />
          <Text style={estilos.pillTexto}>{COSTO}</Text>
        </View>
      </Pressable>

      {/* Avisos */}
      <AvisoModal
        visible={avisoCorta}
        acento={acento}
        titulo={t('pregunta.avisoCortaTitulo')}
        texto={t('pregunta.avisoCortaTexto')}
        acciones={[
          { label: t('pregunta.escribirMas'), onPress: () => setAvisoCorta(false) },
          {
            label: t('pregunta.seguirIgual'),
            primario: true,
            onPress: () => {
              setAvisoCorta(false);
              enviar();
            },
          },
        ]}
      />

      <ModalRecompensa
        visible={sinGemas}
        onClose={() => setSinGemas(false)}
        titulo={t('pregunta.sinGemasTitulo')}
        recompensa={t('pregunta.verVideo')}
        onReward={() => sumarGemas(1)}
      />
    </ScrollView>
  );
}

interface AccionAviso {
  label: string;
  onPress: () => void;
  primario?: boolean;
}

function AvisoModal({
  visible,
  acento,
  titulo,
  texto,
  acciones,
}: {
  visible: boolean;
  acento: string;
  titulo: string;
  texto: string;
  acciones: AccionAviso[];
}) {
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={estilos.overlay}>
        <View style={[estilos.card, { borderColor: hexAlfa(acento, 0.5) }]}>
          <Text style={estilos.cardTitulo}>{titulo}</Text>
          <Text style={estilos.cardTexto}>{texto}</Text>
          <View style={estilos.cardAcciones}>
            {acciones.map((a) => (
              <Pressable
                key={a.label}
                onPress={a.onPress}
                style={({ pressed }) => [
                  estilos.cardBoton,
                  a.primario && { backgroundColor: hexAlfa(acento, 0.25), borderColor: hexAlfa(acento, 0.9) },
                  pressed && { opacity: 0.7 },
                ]}
              >
                {/* DOS RENGLONES, Y NUNCA ACHICAR LA LETRA. Antes esto tenia
                    `adjustsFontSizeToFit`, que cuando la etiqueta no entra en un
                    renglon le baja el cuerpo. Como los dos botones miden lo
                    mismo pero las etiquetas no, en portugues quedaba
                    "Escrever mais" grande al lado de "Consultar mesmo assim"
                    chiquito: dos botones que parecen de distinta jerarquia
                    cuando son pares. Dejandolo partir en dos renglones, la
                    letra es siempre la misma y lo que cambia es el alto, que
                    ademas es el mismo para los dos porque la fila los estira. */}
                <Text style={estilos.cardBotonTexto} numberOfLines={2}>
                  {a.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: espaciado.xxl,
    paddingTop: espaciado.lg,
    paddingBottom: espaciado.xl,
    gap: espaciado.xl,
  },
  icono: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  titulo: {
    color: colores.texto,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fuente('subtituloMedium'),
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: espaciado.sm,
  },
  chip: {
    flexBasis: '47%',
    flexGrow: 0,
    borderRadius: radios.pill,
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.md,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    alignItems: 'center',
  },
  chipTexto: {
    color: colores.textoSuave,
    fontSize: 13,
    fontFamily: fuente('uiMedium'),
  },
  chipTextoSel: {
    color: colores.texto,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: radios.md,
    borderWidth: 1,
    color: colores.texto,
    fontSize: 16,
    fontFamily: fuente('ui'),
    padding: espaciado.lg,
    minHeight: 140,
  },
  hint: {
    color: colores.textoSuave,
    fontSize: 13,
    textAlign: 'center',
    marginTop: -espaciado.md,
    fontFamily: fuente('ui'),
  },
  boton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: espaciado.md,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: radios.md,
    borderWidth: 1,
    paddingVertical: espaciado.lg,
    paddingHorizontal: espaciado.xxl,
  },
  botonOff: {
    opacity: 0.4,
  },
  botonPress: {
    opacity: 0.85,
  },
  botonTexto: {
    color: colores.texto,
    fontSize: 17,
    fontFamily: fuente('uiSemiBold'),
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: radios.pill,
    paddingVertical: 3,
    paddingHorizontal: espaciado.sm,
  },
  pillTexto: {
    color: colores.texto,
    fontSize: 14,
    fontFamily: fuente('uiSemiBold'),
  },
  overlay: {
    flex: 1,
    backgroundColor: colores.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    padding: espaciado.xl,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: colores.superficieAlta,
    borderRadius: radios.lg,
    borderWidth: 1,
    padding: espaciado.xl,
    gap: espaciado.md,
  },
  cardTitulo: {
    color: colores.texto,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fuente('uiSemiBold'),
  },
  cardTexto: {
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: fuente('ui'),
  },
  cardAcciones: {
    flexDirection: 'row',
    gap: espaciado.sm,
    marginTop: espaciado.sm,
  },
  cardBoton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: espaciado.md,
    paddingHorizontal: espaciado.md,
    borderRadius: radios.md,
    borderWidth: 1,
    borderColor: colores.borde,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  cardBotonTexto: {
    color: colores.texto,
    fontSize: 14,
    // Centrado: si la etiqueta se parte en dos renglones, el segundo tiene que
    // quedar centrado abajo del primero y no pegado a la izquierda.
    textAlign: 'center',
    fontFamily: fuente('uiMedium'),
  },
});
