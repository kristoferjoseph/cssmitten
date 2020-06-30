const Scale = require('./scale')
const sds = require('./sides')

module.exports = function sided(state={}) {
  let config = state.config
  let template = state.template
  let scale = Scale(config)
  let l = scale.length
  let half = Math.floor(l * 0.5)
  let step = half
  let sides = Object.keys(sds)
  let output = ''
  let value
  let side
  for (let i=0; i < l; i++) {
    var s = step--
    value = scale[i]
    output += template('', s, '', value)
    output += sides && sides.map(
      label => {
        side = sds[label]
        return template(label, s, side, value)
      }
    ).join('')
  }
  return output
}
