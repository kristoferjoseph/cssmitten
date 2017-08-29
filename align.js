module.exports = function align(query) {
  query = query ? query = `-${query}` : ''

  var output =`
.ta-inherit${query}{text-align:inherit;}
.ta-center${query}{text-align:center;}
.ta-left${query}{text-align:left;}
.ta-right${query}{text-align:right;}`

  return output
}
