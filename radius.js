module.exports = function radius (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var radii = config.radii
  var output = `
/* RADIUS */
.border-radius-none${query}{border-radius:0;}
.border-radius-100${query}{border-radius:100%;}
.border-radius-pill${query}{border-radius:9999px;}
.border-top-right-radius0${query}{border-top-right-radius:0;}
.border-bottom-right-radius0${query}{border-bottom-right-radius:0;}
.border-top-left-radius0${query}{border-top-left-radius:0;}
.border-bottom-left-radius0${query}{border-bottom-left-radius:0;}
`

  radii.map(function (r, i) {
    output += `.border-radius${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
