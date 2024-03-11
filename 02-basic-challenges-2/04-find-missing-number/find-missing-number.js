function findMissingNumber(arr) {

  if (!arr) return undefined;

  const limit = arr.length + 1;
  const sum = limit * (limit + 1) / 2;

  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

  return sum - arrSum;
}

module.exports = findMissingNumber;
