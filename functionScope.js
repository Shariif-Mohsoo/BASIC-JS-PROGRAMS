const prompt = require("prompt-sync")();
function getNumber() {
  var num = parseFloat(prompt("Enter any number => "));
  return num;
}
console.log(getNumber());
// console.log(num);
