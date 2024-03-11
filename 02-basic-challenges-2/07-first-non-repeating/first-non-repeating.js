function findFirstNonRepeatingCharacter(str) {
  const uniqueLetters = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (uniqueLetters[char]) {
      uniqueLetters[char] = false;
    } else {
      uniqueLetters[char] = true;
    }
  }

  let first_non_repeating_letter = null;
  for (const key of str) {
    if (uniqueLetters[key] === true) {
      first_non_repeating_letter = key;
      break;
    }
  }

  return first_non_repeating_letter;
}

module.exports = findFirstNonRepeatingCharacter;
