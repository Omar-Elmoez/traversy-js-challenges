function findMaxNumber(arr) {
  // =================== Solution 1 ===================
  // return Math.max(...arr);

  // =================== Solution 2 ===================
  const maxNumber = arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr
  })

  return maxNumber
}

module.exports = findMaxNumber;
