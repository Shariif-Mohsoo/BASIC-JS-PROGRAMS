// OBJECT WITH METHODS
const prompt = require("prompt-sync")();
const num1 = parseFloat(prompt("Enter first number => "));
const num2 = parseFloat(prompt("Enter second number => "));
const calc = {
  add() {
    return num1 + num2;
  },
  mul: () => {
    return num1 * num2;
  },
  sub: function sub() {
    return num1 - num2;
  },
  divide: function divide() {
    return num1 / num2;
  },
};
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.divide());
