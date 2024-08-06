/*
    The String.fromCharCode() static method returns a string created 
    from the specified sequence of UTF-16 code units.
    ----->String.fromCharCode(65,66,67);//'ABC'
    The charCodeAt() method of string values return an integer between 0 and
    65535.
    --->IT RETURN US THE ASCII CODE OF THE TARGETED CHARACTER.
    "ABC".charCodeAt(0);//65
    "abc".charCodeAt(0);//97
*/
const prompt = require("prompt-sync")();
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index
  )}`
);

/*
Example =>
    Write js program to replace every character in the given string with its
    following (nextCharacter).
    let str = 'abc';
    output => 'bcd'
*/
const str = prompt("Enter the string => ");
const upDateStr = str.split("").map(upDate).join("");
function upDate(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}
console.log(upDateStr);
