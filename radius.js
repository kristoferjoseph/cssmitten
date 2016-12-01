var radii = require('./radii').concat()

module.exports = function radius(query) {
  query = query || ''
  query? query = `-${query}`: ''
  var output = `%radius-100${query}{border-radius:100%;}\n`
  radii.forEach(function(r) {
    output += `%radius${query}{border-radius:${r}px;}\n`
  })

  return output
}
