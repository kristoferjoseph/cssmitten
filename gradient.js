module.exports = function gradient(state={}) {
  let config = state.config
  let gradients = config.gradient || []
  let output = `
  /* GRADIENT */`

  gradients.forEach(function (entry, i) {
    let label = entry.label
    let type = entry.type
    let direction = entry.direction
      ? entry.direction + ', '
      : ''
    let stops = entry.stops.join(', ')
    output += `.bg-image${i}{background-image:${type}-gradient(${direction}${stops});}/* ${label} */\n`
  })

  return output
}
