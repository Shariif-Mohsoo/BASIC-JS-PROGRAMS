const prompt = require("prompt-sync")();
//write a function where you will take the two input from and perform arthimatic operations on them.
function add(x, y) {
  return x + y;
}
const subtract = function (x, y) {
  return x * y;
};
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  if (y < 0 || y > 0) {
    return x / y;
  } else {
    return NaN;
  }
}
//array of functions;
const functionNames = [add, subtract, multiply, divide];
const num1 = parseFloat(prompt("Enter the first number  => "));
const num2 = parseFloat(prompt("Enter the second number => "));
//using for in loop
// for (let idx in functionNames) {
// //   console.log(idx);
//   console.log(functionNames[idx](num1, num2));
// }
//using for of loop
for (let func of functionNames) {
  console.log(func(num1, num2));
}
let num = add;
console.log(num(2, 2));
/*
    WE CAN ALSO STORE THE FUNCTION IN THE VARIABLE OR IN OBJECT KEY WHERE EVER YOU WANT
    SYNTAX => let variableName = functionName;
    For an object:
    SYNTAX => const objectName = { keyName: functionName};
*/
