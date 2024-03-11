function countOccurrences(str, char) {
  // ===================== Solution 1 =====================
  // let count = 0;
  // const strArr = str.split('');
  // strArr.forEach(item => {
  //   if (item === char) {
  //     count++;
  //   }
  // })
  // return count;
 
  // ===================== Solution 2 =====================
  // const result = str.split('').reduce((count, item) => {
  //   if (item === char) {
  //     count++;
  //   }
  //   return count;
  // }, 0)

  // return result;

  // ===================== Solution 3 =====================
  return str.split(char).length - 1;

  // ===================== Solution 4 =====================
  // return str.split('').filter(item => item === char).length;
}

module.exports = countOccurrences;
