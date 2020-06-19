const hs = require('hash-switch')

module.exports = function stroke (state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = '/* STROKE */\n'
  const sm = hs({
    'visited': visited,
    'hover': hover,
    'active': active,
    'disabled': disabled
  }, handler)

  function handler (a, n) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = `${n}${i}`
      output += `.s-${variable}${query}{stroke:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function visited (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'v' + i
      output += `.c-${variable}${query}:visited{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'h' + i
      output += `.s-${variable}${query}:hover{stroke:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'a' + i
      output += `.s-${variable}${query}:active{stroke:var(--${variable});}/* ${color.label} */\n`
      output += `.s-${variable}${query}.active{stroke:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'd' + i
      output += `.s-${variable}${query}:disabled{stroke:var(--${variable});}/* ${color.label} */\n`
    })
  }

  return output
}
