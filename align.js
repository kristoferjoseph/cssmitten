module.exports = function align(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`.text-inherit${query}{text-align:inherit;}
.text-center${query}{text-align:center;}
.text-left${query}{text-align:left;}
.text-right${query}{text-align:right;}`

  return output
}
