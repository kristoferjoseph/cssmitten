module.exports = function flex(query) {
  var output =
`.items-center${query}{align-items:center;}
.justify-center${query}{justify-content:center;}
.justify-around${query}{justify-content:space-around;}
.justify-between${query}{justify-content:space-between;}
.grow0${query}{flex-grow:0;}
.grow1${query}{flex-grow:1;}`

  return output
}
