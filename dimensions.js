module.exports = function dimensions(query) {
  query = query ? query = `-${query}` : ''

  var output =`
.w-100${query}{width:100%;}
.h-100${query}{height:100%;}
.vw-100${query}{width:100vw;}
.vh-100${query}{height:100vh;}`

  return output
}
