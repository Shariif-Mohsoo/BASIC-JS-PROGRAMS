const prompt = require("prompt-sync")();
if (true) {
  var animal = "Dog";
  console.log(animal);
}
console.log(animal);
//write program to create a function which will receive the array as the argument and return the double of each element in that array but not update that array
function doubleArray(array) {
  const newArray = [];
  for (let element of array) {
    let square = Math.pow(element, 2);
    newArray.push(square);
  }
  return newArray;
}
const array = [];
let isTrue = true;
while (isTrue) {
  const num = parseFloat(prompt("Enter the number in an array "));
  array.push(num);
  const choice = parseInt(prompt("To continue press 1 else 0 "));
  switch (choice) {
    case 0: {
      isTrue = false;
      console.log(choice);
      break;
    }
    case 1: {
      isTrue = true;
      console.log(choice);
      break;
    }
    default: {
      isTrue = false;
      console.log("default");
    }
  }
}
console.log(`The double of each element in array ==> ${doubleArray(array)}`); //this will print the entire array
