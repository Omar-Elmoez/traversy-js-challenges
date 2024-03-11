function isPalindrome(str) {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < formatedStr.length - 1; i++) {
    if (formatedStr[i] !== formatedStr[formatedStr.length - (i + 1)]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
