const hs = require('hash-switch')

module.exports = function background(state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = `
/* BACKGROUND */
.bg-fixed${query}{background-attachment:fixed;}
.bg-local${query}{background-attachment:local;}
.bg-scroll${query}{background-attachment:scroll;}
.bg-bottom${query}{background-position:bottom;}
.bg-center${query}{background-position:center;}
.bg-left${query}{background-position:left;}
.bg-left-bottom${query}{background-position:left bottom;}
.bg-left-top${query}{background-position:left top;}
.bg-right${query}{background-position:right;}
.bg-right-bottom${query}{background-position:right bottom;}
.bg-right-top${query}{background-position:right top;}
.bg-top${query}{background-position:top;}
.bg-repeat${query}{background-repeat:repeat;}
.bg-no-repeat${query}{background-repeat:no-repeat;}
.bg-repeat-x${query}{background-repeat:repeat-x;}
.bg-repeat-y${query}{background-repeat:repeat-y;}
.bg-repeat-round${query}{background-repeat:round;}
.bg-repeat-space${query}{background-repeat:space;}
.bg-auto${query}{background-size:auto;}
.bg-cover${query}{background-size:cover;}
.bg-contain${query}{background-size:contain;}
.bg-unset${query}{background-color:unset;}
`
  var sm = hs({
    'visited': visited,
    'hover': hover,
    'active': active,
    'disabled': disabled
  }, handler)

  Object.keys(colors)
    .forEach(k => sm(k, colors[k], k.charAt(0)
      .toLowerCase()
    )
  )

  function handler (a, n) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = `${n}${i}`
      output += `.bg-${variable}${query}{background-color:var(--${variable});}\n`
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
      output += `.bg-${variable}${query}:hover{background-color:var(--${variable});}\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'a' + i
      output += `.bg-${variable}${query}:active{background-color:var(--${variable});}\n`
      output += `.bg-${variable}${query}.active{background-color:var(--${variable});}\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'd' + i
      output += `.bg-${variable}${query}:disabled{background-color:var(--${variable});}\n`
    })
  }

  return output
}
