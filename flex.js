module.exports = function flex(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`.items-center${query}{align-items:center;}
.justify-center${query}{justify-content:center;}
.space-around${query}{justify-content:space-around;}
.space-between${query}{justify-content:space-between;}
.grow0${query}{flex-grow:0;}
.grow1${query}{flex-grow:1;}`

  return output
}
