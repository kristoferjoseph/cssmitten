var colors = require('./colors')
module.exports = function background(query) {
  var output = ''
  Object.keys(colors)
    .map(
      function(color, i) {
        output +=
`.background${i+1}${query}{background-color:var(--${color});}
.background${i+1}-hover${query}:hover,
.background${i+1}-hover${query}:focus{background-color:var(--${color});}
.background${i+1}-active${query}:active{background-color:var(--${color});}
`
      }
    )

  return output
}
