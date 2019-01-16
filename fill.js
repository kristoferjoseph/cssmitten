const pseudo = require('./pseudo')

module.exports = function fill (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = `
/* FILL */
.f-none{fill:none;}
`
  function template (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.fill-${variable}${query}${selector}{fill:var(--${variable});}/* ${color.label} */`
  }

  output += pseudo({colors, template})
  return output
}
