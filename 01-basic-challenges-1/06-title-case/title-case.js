function titleCase(str) {
  // =================== Solution 1 ===================
  const words = str.toLowerCase().split(" ");

  const capitalWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalWords.join(" ");

  // =================== Solution 2 ===================
  // return str.replace(/\b\w/g, (match) => match.toUpperCase()); 
  // just the first letter, doesn't change any other letter
}

module.exports = titleCase;
