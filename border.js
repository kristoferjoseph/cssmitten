const hs = require('hash-switch')
const radius = require('./radius')

module.exports = function border(state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  const widths = (config.borders &&
    config.borders.widths || [1])
  widths.unshift(0)
  let output = `
/* BORDER */
.border-solid${query}{border-style:solid;}
.border-dashed${query}{border-style:dashed;}
.border-dotted${query}{border-style:dotted;}
.border-double${query}{border-style:double;}
.border-none${query}{border-style:none;}
.border-t-none${query}{border-top:none;}
.border-r-none${query}{border-right:none;}
.border-b-none${query}{border-bottom:none;}
.border-l-none${query}{border-left:none;}
`
  widths.map(function (w, i) {
    output += `
.border${i}${query}{border-width:${w}px;}
.border-t${i}${query}{border-top-width:${w}px;}
.border-r${i}${query}{border-right-width:${w}px;}
.border-b${i}${query}{border-bottom-width:${w}px;}
.border-l${i}${query}{border-left-width:${w}px;}`
  })

  const sm = hs({
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
    a.forEach((color, i) => {
        let variable = `${n}${i}`
        output += `.border-${variable}${query}{border-color:var(--${variable});}/* ${color.label} */`
      })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'h' + i
      output += `.border-${variable}${query}:hover{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'a' + i
      output += `.border-${variable}${query}:active{border-color:var(--${variable});}/* ${color.label} */\n`
      output += `.border-${variable}${query}.active{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'd' + i
      output += `.border-${variable}${query}:disabled{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  output += '\n'
  output += radius({config, query})
  return output
}
