const pseudo = require('./pseudo')

module.exports = function stroke (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = `
/* STROKE */
`

  function template (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.stroke-${variable}${query}${selector}{stroke:var(--${variable});}/* ${color.label} */`
  }

  output += pseudo({colors, template})
  return output
}
