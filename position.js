module.exports = function position (query) {
  return `/* POSITION */
.p-static${query}{position:static;}
.p-absolute${query}{position:absolute;}
.p-relative${query}{position:relative;}
.p-fixed${query}{position:fixed;}
`
}
