module.exports = function overflow(query) {
  query = query || ''
  query? query = `-${query}`: ''

   var output =
 `.scroll${query}{overflow:scroll;-webkit-overflow-scrolling: touch;}
.hidden${query}{overflow:hidden;}
.visible${query}{overflow:visibile;}
.scroll-x${query}{overflow-x:scroll;-webkit-overflow-scrolling: touch;}
.hidden-x${query}{overflow-x:hidden;}
.visible-x${query}{overflow-x:visibile;}
.scroll-y${query}{overflow-y:scroll;-webkit-overflow-scrolling: touch;}
.hidden-y${query}{overflow-y:hidden;}
.visible-y${query}{overflow-y:visibile;}`

  return output
}
