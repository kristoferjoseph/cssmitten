module.exports = function typeface(base, name) {
  var output =
`body {
  font-family: '${name}', sans-serif;
  font-weight: normal;
}`
  return output
}
