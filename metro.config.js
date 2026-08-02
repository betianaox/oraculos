const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// package exports desactivado: con `true` Metro no resuelve las fuentes .ttf de
// @expo/vector-icons (Unable to resolve MaterialCommunityIcons.ttf). La
// resolucion clasica que usan los iconos anda bien. (Igual que en Tarot/Runas.)
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
