var modularScale = require('modular-scale')
var base = require('./base')
module.exports = (function scale () {
  var ratio = modularScale.ratios.perfectFourth
  var steps = 6
  var ms = modularScale({
    ratio: ratio,
    base: base
  })
  return ms.steps(steps)
}())
