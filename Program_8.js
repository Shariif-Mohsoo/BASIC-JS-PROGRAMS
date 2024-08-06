/*
 * write js program to check whether the given array of integers is
 * sorted in ascending order or not.
 */

const checkArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(checkArray([1, 2, 4, 5, 6]));
console.log(checkArray([1, 2, 4, 5, 6, 0]));
