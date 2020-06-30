const Scale = require('./scale')
const rems = require('./rems')

module.exports = function grid(state={}) {
  let config = state.config || {}
  let grid = config.grid || {}
  let query = state.label || ''
  let output = `
/* GRID */
`
  let scale = Scale(config)
  let l = scale.length
  let half = Math.floor(l * 0.5)
  let step = half
  for (let i=0; i<scale.length; i++) {
    let s = step--
    value = scale[i]
    output += `.gap${step}${query}{gap:${rems({config, value})};}
`
  }

  return output
}
