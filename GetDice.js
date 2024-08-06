//here we will see the dice roller with the help of function
const prompt = require("prompt-sync")();
var guess = 0;
function diceRoller() {
  let roll = Math.floor(Math.random() * 6 + 1);
  return roll;
}
let is_true = true;
let diceValue;
while (is_true) {
  guess = parseInt(prompt("Enter the number you want in your dice throw ==> "));
  diceValue = diceRoller();
  if (guess === diceValue) {
    console.log("Your dice's number is achieved");
    is_true = false;
  } else {
    let choice = parseInt(prompt("To continue Press 1 else 0 => "));
    if (choice === 1) {
      is_true = true;
    } else {
      is_true = false;
    }
  }
}
console.log(`You Entered ${guess}\nDice's Number => ${diceValue}`);
