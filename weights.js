module.exports = function (query) {
  return `/* WEIGHTS */
.fw-light${query}{font-weight:200;}
.fw-book${query}{font-weight:300;}
.fw-normal${query}{font-weight:400;}
.fw-medium${query}{font-weight:500;}
.fw-bold${query}{font-weight:700;}
`
}
