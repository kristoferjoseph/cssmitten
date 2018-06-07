module.exports = function reset (query) {
  return `/* RESET */
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}
*:focus {outline: none;}
a {text-decoration: none;}
li {list-style: none;}
button {user-select: none;}
img {max-width: 100%;}
svg {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
select,
textarea,
button,
input {font-family: inherit;}
`
}
