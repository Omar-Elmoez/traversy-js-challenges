function findMissingLetter(arr) {
  const codes = arr.map((letter) => letter.charCodeAt(0));

  let missingCode;
  for (let i = 0; i < codes.length; i++) {
    if (codes[i] + 1 !== codes[i+1]) {
      missingCode = codes[i] + 1;
      break;
    }
  }

  return String.fromCharCode(missingCode);
}

module.exports = findMissingLetter;
