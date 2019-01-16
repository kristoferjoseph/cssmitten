const pseudo = require('./pseudo')
const radius = require('./radius')

module.exports = function border (state) {
  state = state || {}
  let query = state.query || ''
  let config = state.config
  let colors = config.colors
  let output = `
/* BORDER */
.border-none${query}{border:none;}
.border-top-none${query}{border-top:none;}
.border-right-none${query}{border-right:none;}
.border-left-none${query}{border-left:none;}
.border${query}{border: 1px solid;}
.border-top${query}{border-top: 1px solid;}
.border-right${query}{border-right: 1px solid;}
.border-bottom${query}{border-bottom: 1px solid;}
.border-left${query}{border-left: 1px solid;}
`

  function template (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.border-color-${variable}${query}${selector}{background-color:var(--${variable});}`
  }

  output += pseudo({colors, template})
  output += radius(state)
  return output
}
