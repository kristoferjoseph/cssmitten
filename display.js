module.exports = function display(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output =
`.none${query}{display:none;}
.block${query}{display:block;}
.inline-block${query}{display:block;}
.flex${query}{display:flex;}
.inline-flex${query}{display:inline-flex;}`

  return output
}
