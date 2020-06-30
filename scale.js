const modularScale = require('modular-scale')

module.exports = function scale(config={}) {
  let base = config.base || 16
  let scale = config.scale || {}
  let ratio = scale.ratio || modularScale.ratios.perfectFourth
  let steps = scale.steps || 8
  let ms = modularScale({
    ratio: ratio,
    base: base
  })
  return ms.steps(steps)
}
