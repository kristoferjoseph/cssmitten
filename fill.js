var colors = require('./colors')
module.exports = function fill (query) {
  var output = `/* FILL */
.f-none{fill:none;}
`
  var variable
  var primary = colors.primary || []
  var hover = colors.hover || []
  var active = colors.active || []
  var disabled = colors.disabled || []

  primary.forEach(function (color, i) {
    variable = 'p' + i
    output += `.f-${variable}${query}{fill:var(--${variable});}/* ${color.label} */\n`
  })

  hover.forEach(function (color, i) {
    variable = 'h' + i
    output += `.f-${variable}${query}:hover{fill:var(--${variable});}/* ${color.label} */\n`
  })

  active.forEach(function (color, i) {
    variable = 'a' + i
    output += `.f-${variable}${query}:active{fill:var(--${variable});}/* ${color.label} */\n`
    output += `.f-${variable}${query}[active=active]{fill:var(--${variable});}/* ${color.label} */\n`
  })

  disabled.forEach(function (color, i) {
    variable = 'd' + i
    output += `.f-${variable}${query}:disabled{fill:var(--${variable});}/* ${color.label} */\n`
  })

  return output
}
