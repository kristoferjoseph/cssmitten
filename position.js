module.exports = function position (query) {
  return `
/* POSITION */
.position-static${query}{position:static;}
.position-absolute${query}{position:absolute;}
.position-relative${query}{position:relative;}
.position-fixed${query}{position:fixed;}
`
}
