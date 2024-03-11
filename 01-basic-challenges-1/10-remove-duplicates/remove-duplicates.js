function removeDuplicates(arr) {
  // ======================= Solution 1 =======================
  // return Array.from(new Set(arr));

  // ======================= Solution 2 =======================
  const uniqueArr = [];
  arr.forEach(item => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}

module.exports = removeDuplicates;
