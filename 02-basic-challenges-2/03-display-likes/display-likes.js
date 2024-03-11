function displayLikes(arr) {
  const numberOfPeople = arr.length;
  switch (numberOfPeople) {
    case 1:
      return `${arr[0]} likes this`;

    case 2:
      return `${arr[0]} and ${arr[1]} like this`;

    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;

    default:
      if (numberOfPeople > 3) {
        return `${arr[0]}, ${arr[1]} and ${
          numberOfPeople - 2
        } others like this`;
      } else {
        return "no one likes this";
      }
  }
}

module.exports = displayLikes;
