module.exports = function position(query) {
  query = query ? query = `-${query}` : ''
  return `/* POSITION */
.static${query}{position:static;}
.absolute${query}{position:absolute;}
.relative${query}{position:relative;}
.fixed${query}{position:fixed;}`
}
