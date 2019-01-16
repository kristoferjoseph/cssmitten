const pseudo = require('./pseudo')

module.exports = function background (state) {
  state = state || {}
  let query = state.query || ''
  let config = state.config
  let colors = config.colors
  let output = `
/* BACKGROUND */
.background-color-none{background-color:none;}
`

  function template (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.background-color-${variable}${query}${selector}{background-color:var(--${variable});}/* ${color.label} */`
  }

  output += pseudo({colors, template})
  return output
}
