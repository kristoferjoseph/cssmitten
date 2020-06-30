const Scale = require('./scale')
const rems = require('./rems')

module.exports = function grid(state={}) {
  let config = state.config || {}
  let grid = config.grid || {}
  let gridSteps = grid.steps || 12
  let gridHeights = grid.heights || []
  let query = state.label || ''
  let output = `
/* GRID */
.row-auto${query}{grid-row:auto;}
.col-auto${query}{grid-column:auto;}
`

  let sL = gridSteps.length || 0
  for (let i=0; i<gridSteps.length; i++) {
    output += `.col-${i}${query}{grid-template-columns:repeat(${i}, 1fr);}\n`
  }

  let gHL = gridHeights.length || 0
  for (let i=0; i<gHL; i++) {
    let value = gridHeights[i]
    output += `.row-auto-${value}${query}{grid-auto-rows:minmax(${rems({config, value})}, auto);}\n`
  }

  let scale = Scale(config)
  let l = scale.length
  let half = Math.floor(l * 0.5)
  let step = half
  for (let i=0; i<scale.length; i++) {
    let s = step--
    value = scale[i]
    output += `.gap${step}${query}{gap:${rems({config, value})};}\n`
    output += `.col-gap${step}${query}{column-gap:${rems({config, value})};}\n`
    output += `.row-gap${step}${query}{row-gap:${rems({config, value})};}\n`
  }

  return output
}
