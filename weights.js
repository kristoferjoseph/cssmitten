module.exports = function (query) {
  return `/* WEIGHTS */
.font-weight-200${query},
.font-weight-light${query}{font-weight:200;}
.font-weight-300${query},
.font-weight-book${query}{font-weight:300;}
.font-weight-400${query},
.font-weight-normal${query}{font-weight:400;}
.font-weight-500${query},
.font-weight-medium${query}{font-weight:500;}
.font-weight-700${query},
.font-weight-bold${query}{font-weight:700;}
`
}
