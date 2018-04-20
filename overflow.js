module.exports = function overflow (query) {
  return `/* OVERFLOW */
.o-scroll${query}{overflow:scroll;-webkit-overflow-scrolling: touch;}
.o-hidden${query}{overflow:hidden;}
.o-scroll-x${query}{overflow-x:scroll;-webkit-overflow-scrolling: touch;}
.o-hidden-x${query}{overflow-x:hidden;}
.o-scroll-y${query}{overflow-y:scroll;-webkit-overflow-scrolling: touch;}
.o-hidden-y${query}{overflow-y:hidden;}
`
}
