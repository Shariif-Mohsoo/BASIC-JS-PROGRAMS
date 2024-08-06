const numbers = [1, 8, 4, 2, 3, 0, 7];
for (let i = 0; i < numbers.length - 2; i++) {
  for (let j = i; j < numbers.length - 1; j++) {
    if (numbers[i] > numbers[j]) {
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log("After arranging the data of array in assending order");
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
