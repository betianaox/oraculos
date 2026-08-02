// Permite importar imagenes con sintaxis `import` y tiparlas como el numero que
// Metro/React Native devuelve para un asset.
declare module '*.webp' {
  const value: number;
  export default value;
}
declare module '*.png' {
  const value: number;
  export default value;
}
declare module '*.jpg' {
  const value: number;
  export default value;
}
