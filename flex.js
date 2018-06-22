module.exports = function flex (query) {
  return `/* FLEX */
.fd-r${query}{flex-direction: row;}
.fd-rr${query}{flex-direction: row-reverse;}
.fd-c${query}{flex-direction: column;}
.fd-cr${query}{flex-direction: column-reverse;}
.fd-i${query}{flex-direction: inherit;}
.ai-s${query}{align-items:flex-start;}
.ai-e${query}{align-items:flex-end;}
.ai-c${query}{align-items:center;}
.jc-s${query}{justify-content: flex-start;}
.jc-e${query}{justify-content: flex-end;}
.jc-a${query}{justify-content:space-around;}
.jc-b${query}{justify-content:space-between;}
.jc-c${query}{justify-content:center;}
.fg-0${query}{flex-grow:0;}
.fg-1${query}{flex-grow:1;}
.fw-w${query}{flex-wrap: wrap;}
.fw-wr${query}{flex-wrap: wrap-reverse;}
.fw-nw${query}{flex-wrap: nowrap;}
`
}
