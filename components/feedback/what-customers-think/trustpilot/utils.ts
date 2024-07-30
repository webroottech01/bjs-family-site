export const createStarRatingArray = (input: number) => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (input >= i + 1) {
      arr.push(1);
    } else if (input > i) {
      arr.push(input - i);
    } else {
      arr.push(0);
    }
  }
  return arr;
};
