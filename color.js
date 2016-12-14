var colors = require('./colors')
module.exports = function color(query) {
  var output = ''
  Object.keys(colors)
    .map(
      function(color, i) {
        output +=
`.color${i}${query}{color:var(--${color});}
.color${i}-hover${query}:hover,
.color${i}-hover${query}:focus{color:var(--${color});}
.color${i}-active${query}:active{color:var(--${color});}
`
      }
    )

  return output
}
