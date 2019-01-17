module.exports = function gradient (state) {
  state = state || {}
  var config = state.config
  var gradients = config.gradient || []
  var output = '\n/* GRADIENT */\n'

  gradients.forEach(function (entry, i) {
    var label = entry.label
    var type = entry.type
    var direction = entry.direction
    direction = direction ? direction + ', ' : ''
    var stops = entry.stops.join(', ')
    output += `.background-image-gradient-${i}{background-image:${type}-gradient(${direction}${stops});}/* ${label} */\n`
  })

  return output
}
