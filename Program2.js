/*
    WRITE A JAVASCRIPT PROGRAM TO CREATE A NEW STRING FROM A GIVEN STRING 
    TAKING THE FIRST THREE CHARACTERS AND THE LAST 3 CHARACTERS OF A STRING 
    AND CONCAT(+) THEM. THE LENGTH MUST BE GREATER OR EQUAL TO THREE, IF NOT
    RETURN THE ORIGINAL ONE(STRING). 
*/
const prompt = require("prompt-sync")();
const str = prompt("Enter String => ");
const createString = (string) => {
  if (string.length >= 3) {
    return string.slice(0, 3) + string.slice(-3);
  } else {
    return string;
  }
};
console.log(createString(str));
// console.error(checkString(str));
