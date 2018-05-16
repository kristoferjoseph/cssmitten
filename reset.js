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
*:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--p0) inset}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--p3);
  opacity: 0;
}`
}
