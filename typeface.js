module.exports = function typeface (state) {
  state = state || {}
  var config = state.config || {}
  var base = config.base || 16
  var ratio = config.ratio || 1.333
  var font = config.font || '-apple-system, BlinkMacSystemFont, sans-serif'
  return `/* TYPEFACE */
html {font-size: ${base}px;}
body {
  font-family: ${font};
  font-weight: normal;
  line-height: ${ratio};
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
}
