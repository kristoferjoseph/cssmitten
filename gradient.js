module.exports = function gradient (state) {
  state = state || {}
  var config = state.config
  var gradients = config.gradients || []
  var output = `
/* GRADIENT */
`
  function template (entry, i) {
    var label = entry.label
    var type = entry.type
    var direction = entry.direction
    direction = direction ? direction + ', ' : ''
    var stops = entry.stops.join(', ')
    return `.background-image-gradient-${i}{background-image:${type}-gradient(${direction}${stops});}/* ${label} */`
  }

  output += gradients.map(template).join('\n')
  return output
}
