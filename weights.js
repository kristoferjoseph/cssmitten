module.exports = function (query) {
  return `/* WEIGHTS */
.font-weight-100${query},
.font-weight-thin${query}{font-weight:100;}
.font-weight-200${query},
.font-weight-extra-light${query}{font-weight:200;}
.font-weight-300${query},
.font-weight-light${query}{font-weight:300;}
.font-weight-400${query},
.font-weight-normal${query}{font-weight:400;}
.font-weight-500${query},
.font-weight-medium${query}{font-weight:500;}
.font-weight-700${query},
.font-weight-bold${query}{font-weight:700;}
.font-weight-800${query},
.font-weight-extra-bold${query}{font-weight:800;}
.font-weight-900${query},
.font-weight-black${query}{font-weight:900;}
`
}
