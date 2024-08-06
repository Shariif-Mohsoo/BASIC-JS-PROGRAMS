//take two numbers form the user and check which one is nearest to 100
const prompt = require("prompt-sync")();
const firstNumber = parseFloat(prompt("Enter first number => "));
const secondNumber = parseFloat(prompt("Enter second number => "));
//1st approach
const max = (n1, n2) => {
  if (n1 <= 100 && n2 <= 100) return Math.max(n1, n2);
  else console.log("Not Valid Input");
};
const output = max(firstNumber, secondNumber);
console.log(output, " is nearest to 100");
//2nd approach
// const nearestToHundred = (n1, n2) => (100 - n1 < 100 - n2 ? n1 : n2);
// console.log(nearestToHundred(firstNumber, secondNumber));
