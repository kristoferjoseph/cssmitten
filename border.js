var radius = require('./radius')
module.exports = function border (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = `/* BORDER */
.b-none${query}{border:none;}
.b-t-none${query}{border-top:none;}
.b-r-none${query}{border-right:none;}
.b-b-none${query}{border-bottom:none;}
.b-l-none${query}{border-left:none;}
.b${query}{border: 1px solid;}
.b-t${query}{border-top: 1px solid;}
.b-r${query}{border-right: 1px solid;}
.b-b${query}{border-bottom: 1px solid;}
.b-l${query}{border-left: 1px solid;}
`
  var variable
  var primary = colors.primary || []
  var hover = colors.hover || []
  var active = colors.active || []
  var disabled = colors.disabled || []

  primary.forEach(function (color, i) {
    variable = 'p' + i
    output += `.b-${variable}${query}{border-color:var(--${variable});}/* ${color.label} */\n`
  })

  hover.forEach(function (color, i) {
    variable = 'h' + i
    output += `.b-${variable}${query}:hover{border-color:var(--${variable});}/* ${color.label} */\n`
  })

  active.forEach(function (color, i) {
    variable = 'a' + i
    output += `.b-${variable}${query}:active{border-color:var(--${variable});}/* ${color.label} */\n`
    output += `.b-${variable}${query}.active{border-color:var(--${variable});}/* ${color.label} */\n`
  })

  disabled.forEach(function (color, i) {
    variable = 'd' + i
    output += `.b-${variable}${query}:disabled{border-color:var(--${variable});}/* ${color.label} */\n`
  })

  output += '\n'
  output += radius({config, query})
  return output
}
