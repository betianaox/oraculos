# Assets — dónde va cada cosa

La carcaza corre **sin assets** (fuentes del sistema + degradés neutros). Apenas
dejes los archivos con estos nombres exactos, se activan sin tocar más nada.

## Fuentes → `assets/fonts/`

Dejá los `.ttf` con estos nombres:

```
Cinzel-Regular.ttf
Cinzel-Bold.ttf
CormorantGaramond-Regular.ttf
CormorantGaramond-Medium.ttf
Inter-Regular.ttf
Inter-Medium.ttf
Inter-SemiBold.ttf
```

Después, en `src/shell/theme/fuentes.ts`:
1. Descomentá el bloque `mapaFuentes`.
2. Poné `FUENTES_ACTIVAS = true`.

## Imágenes de oráculos → `assets/oraculos/<id>/`

Para cada oráculo (`tarot`, `runas`, `angeles`, `egipcio`, `iching`):

```
assets/oraculos/tarot/domo.webp     # el domo central del carrusel
assets/oraculos/tarot/fondo.webp    # el fondo al centrar ese oráculo
```

Después, en `src/oraculos/<id>/modulo.ts`, descomentá las líneas `domo:` y
`fondo:` de ese oráculo. El carrusel y el cross-fade los toman solos.

## Íconos de la app (opcional, para más adelante)

`icon.png`, `splash-icon.png`, `adaptive-icon.png` — cuando querés icono propio,
se referencian desde `app.json`. Por ahora usa los de Expo por defecto.
