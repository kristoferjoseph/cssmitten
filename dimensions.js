module.exports = function dimensions(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`%width-100${query}{width:100%;}
%height-100${query}{height:100%;}
%vp-width${query}{width:100vw;}
%vp-height${query}{height:100vh;}`

  return output
}
