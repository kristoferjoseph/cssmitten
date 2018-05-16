var modularScale = require('modular-scale')
module.exports = function scale (config) {
  config = config || {}
  var base = config.base || 16
  var scale = config.scale || {}
  var ratio = scale.ratio || modularScale.ratios.perfectFourth
  var steps = scale.steps || 8
  var ms = modularScale({
    ratio: ratio,
    base: base
  })
  return ms.steps(steps)
}
