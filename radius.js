var radii = require('./radii').concat()

module.exports = function radius(query) {
  var output = `.radius-100${query}{border-radius:100%;}\n`
  radii.forEach(function(r, i) {
    output += `.radius${i}${query}{border-radius:${r}px;}\n`
  })

  return output
}
