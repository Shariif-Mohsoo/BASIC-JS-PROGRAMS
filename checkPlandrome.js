/*Here we will check the number enter by the user is palindrome or not */
const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter Any Number"));
const testCopy = number;
//using the arrow number
const checkNumber = (num) => {
  let reverseCopy = 0;
  for (; num; ) {
    let rem = num % 10;
    reverseCopy = reverseCopy * 10 + rem;
    num = parseInt(num / 10);
  }
  if (testCopy === reverseCopy) {
    console.log(`${testCopy} is palindrome ${reverseCopy}`);
  } else {
    console.log(`${testCopy} is not palindrome ${reverseCopy}`);
  }
};
checkNumber(number);
