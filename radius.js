module.exports = function radius (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var radii = config.radii
  var output = `
/* RADIUS */
.radius-none${query}{border-radius:0;}
.radius-100${query}{border-radius:100%;}
.radius-pill${query}{border-radius:9999px;}
.radius-tr-none${query}{border-top-right-radius:0;}
.radius-br-none${query}{border-bottom-right-radius:0;}
.radius-tl-none${query}{border-top-left-radius:0;}
.radius-bl-none${query}{border-bottom-left-radius:0;}
`

  radii.map(function (r, i) {
    output += `.radius${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
