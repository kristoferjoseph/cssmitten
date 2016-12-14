module.exports = function weight(query) {
  var output =
`.light${query}{font-weight:100;}
.book${query}{font-weight:200;}
.normal${query}{font-weight:300;}
.medium${query}{font-weight:400;}
.bold${query}{font-weight:700;}`

  return output
}
