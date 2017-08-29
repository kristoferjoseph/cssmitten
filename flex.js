module.exports = function flex(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`.ai-c${query}{align-items:center;}
.jc-a${query}{justify-content:space-around;}
.jc-b${query}{justify-content:space-between;}
.jc-c${query}{justify-content:center;}
.fg-0${query}{flex-grow:0;}
.fg-1${query}{flex-grow:1;}`

  return output
}
