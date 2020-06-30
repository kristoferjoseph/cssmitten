module.exports = function typeface(state={}) {
  let config = state.config || {}
  let base = config.base || 16
  return `
/* TYPEFACE */
html {font-size: ${base}px;}
body {
  font-weight: normal;
  line-height: 1.5;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
}
