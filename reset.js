module.exports = function reset() {
  var output =
`*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  background: inherit;
  border: inherit;
  box-sizing: border-box;
}
*:focus {outline: none;}
button {user-select: none;}
img {max-width: 100%;}
svg {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
select,
textarea,
button,
input {font-family: inherit;}`

  return output
}
