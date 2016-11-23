module.exports = function typeface(base, name) {
  var output =
`html {font-size: ${base};}
body {
  font-family: '${name}', sans-serif;
  font-weight: normal;
}`
  return output
}
