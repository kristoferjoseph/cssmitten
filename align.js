module.exports = function align(query) {
  return `/* ALIGN */
.ta-i${query}{text-align:inherit;}
.ta-c${query}{text-align:center;}
.ta-l${query}{text-align:left;}
.ta-r${query}{text-align:right;}`
}
