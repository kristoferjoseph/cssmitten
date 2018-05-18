module.exports = function typeface (state) {
  state = state || {}
  var config = state.config || {}
  var base = config.base || 16
  return `/* TYPEFACE */
html {font-size: ${base};}
body {
  font-weight: normal;
  line-height: 1.333;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
}
