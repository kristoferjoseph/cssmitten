module.exports = function position(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`%static${query}{position:static;}
%absolute${query}{position:absolute;}
%relative${query}{position:relative;}
%fixed${query}{position:fixed;}
%top0${query}{top:0;}
%right0${query}{right:0;}
%bottom0${query}{bottom:0;}
%left0${query}{left:0;}`

  return output
}
