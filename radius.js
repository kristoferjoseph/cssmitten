var radii = require('./radii')
module.exports = function radius (query) {
  var output = '/* RADIUS */\n'
  output += `.br-100${query}{border-radius:100%;}\n`
  radii.map(function (r, i) {
    output += `.br${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
