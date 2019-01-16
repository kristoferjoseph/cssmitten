module.exports = function color (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = '\n/* COLOR */\n'
  let primary = colors.primary || []
  let hover = colors.hover || []
  let active = colors.active || []
  let visited = colors.visited || []
  let disabled = colors.disabled || []
  var classes = []

  function format (selector, variable, color, i) {
    selector = selector || ''
    variable = variable || ''
    variable = variable + i
    return `.color-${variable}${query}${selector}{color:var(--${variable});}/* ${color.label} */`
  }

  classes = classes.concat(
    primary.map(format.bind(null, '', '')),
    primary.map(format.bind(null, ':link', '')),
    hover.map(format.bind(null, '.hover', 'hover')),
    hover.map(format.bind(null, ':hover', 'hover')),
    active.map(format.bind(null, '.active', 'active')),
    active.map(format.bind(null, ':active', 'active')),
    visited.map(format.bind(null, '.visited', 'visited')),
    visited.map(format.bind(null, ':visited', 'visited')),
    disabled.map(format.bind(null, '.disabled', 'disabled')),
    disabled.map(format.bind(null, ':disabled', 'disabled'))
  )

  output += classes.join('\n')
  return output
}
