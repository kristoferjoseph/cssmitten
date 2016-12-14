var colors = require('./colors')

module.exports = function border(query) {
  var output = ''
  Object.keys(colors)
    .map(
      function(color, i) {
        output +=
`.border${i+1}${query}{border-color:var(--${color});}
.border${i+1}-hover${query}:hover,
.border${i+1}-hover${query}:focus{border-color:var(--${color});}
.bordere${i+1}-active${query}:active{border-color:var(--${color});}
`
      }
    )
  return output
}
