import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Image,
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

const TEMAS: Tema[] = ['general', 'amor', 'trabajo', 'dinero'];
const COSTO = 1;

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
      contentContainerStyle={estilos.scroll}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
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
        style={[estilos.input, { borderColor: hexAlfa(acento, 0.3) }]}
        placeholder={t('pregunta.placeholder')}
        placeholderTextColor={colores.textoTenue}
        value={pregunta}
        onChangeText={setPregunta}
        multiline
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

      <OverlaySinGemas
        visible={sinGemas}
        acento={acento}
        onVerVideo={() => {
          // TODO(AdMob): reemplazar por un video con recompensa. Por ahora,
          // para poder probar, simplemente suma una gema.
          sumarGemas(1);
          setSinGemas(false);
        }}
        onCerrar={() => setSinGemas(false)}
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
                <Text style={estilos.cardBotonTexto} numberOfLines={1} adjustsFontSizeToFit>
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

function OverlaySinGemas({
  visible,
  acento,
  onVerVideo,
  onCerrar,
}: {
  visible: boolean;
  acento: string;
  onVerVideo: () => void;
  onCerrar: () => void;
}) {
  const t = useT();
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={estilos.overlay}>
        <View style={[estilos.card, { borderColor: hexAlfa(acento, 0.5) }]}>
          <Text style={estilos.cardTitulo}>{t('pregunta.sinGemasTitulo')}</Text>
          <Text style={estilos.cardTexto}>{t('pregunta.sinGemasTexto')}</Text>

          <Pressable
            onPress={onVerVideo}
            style={({ pressed }) => [
              estilos.botonVideo,
              { backgroundColor: hexAlfa(acento, 0.25), borderColor: hexAlfa(acento, 0.9) },
              pressed && { opacity: 0.75 },
            ]}
          >
            <Ionicons name="videocam" size={20} color={colores.texto} />
            <Text style={estilos.botonVideoTexto}>{t('pregunta.verVideo')}</Text>
          </Pressable>

          <Pressable onPress={onCerrar} hitSlop={10} style={estilos.enlace}>
            <Text style={estilos.enlaceTexto}>{t('pregunta.ahoraNo')}</Text>
          </Pressable>
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
    justifyContent: 'center',
    gap: espaciado.sm,
  },
  chip: {
    flex: 1,
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
    fontFamily: fuente('uiMedium'),
  },
  botonVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: espaciado.sm,
    marginTop: espaciado.sm,
    paddingVertical: espaciado.lg,
    paddingHorizontal: espaciado.xl,
    borderRadius: radios.md,
    borderWidth: 1,
  },
  botonVideoTexto: {
    color: colores.texto,
    fontSize: 16,
    fontFamily: fuente('uiSemiBold'),
  },
  enlace: {
    alignSelf: 'center',
    marginTop: espaciado.md,
    paddingVertical: espaciado.xs,
  },
  enlaceTexto: {
    color: colores.textoSuave,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: fuente('ui'),
  },
});
