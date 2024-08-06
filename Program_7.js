/**
 * write js program to find the number of even digits in an array.
 */
const evenDigits = (array) =>
  array.filter((element) => element % 2 === 0).length;
console.log(evenDigits([1, 2, 3, 4, 5, 6]));
/**
 * write js program to find array of even values up to a
 * given number and also give length of number
 */
const evenCount = (num) => {
  let count = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      count.push(i);
    }
  }
  return count;
};
console.log(evenDigits(evenCount(6)));
console.log(evenCount(8));
