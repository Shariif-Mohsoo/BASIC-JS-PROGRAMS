/*
    WRITE JAVASCRIPT PROGRAM TO CONCAT TWO STRINGS EXCEPT THEIR FIRST CHARACTERS.
*/
const prompt = require("prompt-sync")();
const str1 = prompt("Enter string => ");
const str2 = prompt("Enter string => ");
const getNewString = (string1, string2) =>
  string1.slice(1).concat(string2.slice(1));
console.log(getNewString(str1, str2));
