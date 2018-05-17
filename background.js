module.exports = function background (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = `
.bg-none{background-color:none;}
`
  var variable
  var primary = colors.primary || []
  var hover = colors.hover || []
  var active = colors.active || []
  var disabled = colors.disabled || []

  primary.forEach(function (color, i) {
    variable = 'p' + i
    output += `.bg-${variable}${query}{background-color:var(--${variable});}\n`
  })

  hover.forEach(function (color, i) {
    variable = 'h' + i
    output += `.bg-${variable}${query}:hover{background-color:var(--${variable});}\n`
  })

  active.forEach(function (color, i) {
    variable = 'a' + i
    output += `.bg-${variable}${query}:active{background-color:var(--${variable});}\n`
    output += `.bg-${variable}${query}.active{background-color:var(--${variable});}\n`
  })

  disabled.forEach(function (color, i) {
    variable = 'd' + i
    output += `.bg-${variable}${query}:disabled{background-color:var(--${variable});}\n`
  })

  return output
}
