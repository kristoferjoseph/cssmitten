module.exports = function dimensions(query) {
  var output =
`.width-100${query}{width:100%;}
.height-100${query}{height:100%;}
.width-vp${query}{width:100vw;}
.height-vp${query}{height:100vh;}`

  return output
}
