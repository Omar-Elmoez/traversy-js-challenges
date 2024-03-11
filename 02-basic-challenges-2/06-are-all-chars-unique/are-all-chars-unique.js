function areAllCharactersUnique(str) {
  const uniqueStr = Array.from(new Set(str.split(''))).join('')
  return str === uniqueStr;
}

module.exports = areAllCharactersUnique;
