module.exports = function Pseudo (state) {
  state = state || {}
  let colors = state.colors || {}
  let template = state.template || function () {}

  function classes (colors, template) {
    let primary = colors.primary || []
    let hover = colors.hover || []
    let active = colors.active || []
    let visited = colors.visited || []
    let disabled = colors.disabled || []
    return [].concat(
      primary.map(template.bind(null, '', '')),
      hover.map(template.bind(null, '.hover', 'hover')),
      hover.map(template.bind(null, ':hover', 'hover')),
      active.map(template.bind(null, '.active', 'active')),
      active.map(template.bind(null, ':active', 'active')),
      visited.map(template.bind(null, '.visited', 'visited')),
      visited.map(template.bind(null, ':visited', 'visited')),
      disabled.map(template.bind(null, '.disabled', 'disabled')),
      disabled.map(template.bind(null, ':disabled', 'disabled'))
    ).join('\n')
  }

  return classes(colors, template)
}
