const pseudo = require('./pseudo')

module.exports = function color (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = '\n/* COLOR */\n'

  function template (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.color-${variable}${query}${selector}{color:var(--${variable});}/* ${color.label} */`
  }

  output += pseudo({colors, template})
  return output
}
