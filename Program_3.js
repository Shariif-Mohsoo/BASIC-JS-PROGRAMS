/*
    WRITE THE JAVASCRIPT PROGRAM TO EXTRACT THE FIRST HALF OF A STRING OF EVEN LENGTH.
*/
const prompt = require("prompt-sync")();
const str = prompt("Enter String => ");
const getFirstHalfString = (string) =>
  string.length % 2 === 0 ? string.slice(0, string.length / 2) : string;
//2nd approach
const firstHalf = (string) => string.slice(0, string.length / 2);
console.log(firstHalf(str));
console.log(getFirstHalfString(str));
