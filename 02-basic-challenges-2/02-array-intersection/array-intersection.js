function arrayIntersection(arr1, arr2) {
  // ==================== Solution 1 ====================
  // return arr1.filter(item => arr2.includes(item)) || [];

  // ==================== Solution 2 ====================
  const set1 = new Set(arr1);
  const intersection = [];

  for (let num of set1) {
    if (arr2.includes(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

module.exports = arrayIntersection;
