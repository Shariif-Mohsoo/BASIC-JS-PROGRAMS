//write a function to find the average from an array
function calculateAverage(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  return sum / array.length;
}
let avg = calculateAverage([75, 76, 80, 95, 100]);
console.log(`Average => ${avg}`);
avg = calculateAverage([0, 50]);
console.log(`Average => ${avg}`);
