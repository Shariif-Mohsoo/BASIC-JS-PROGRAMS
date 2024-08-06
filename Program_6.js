/*
    WRITE JS PROGRAM TO A GIVEN STRING CONTAINS 2 TO 4 OCCURRENCES OF A SPECIFIED CHARACTER
*/
const prompt = require("prompt-sync")();
const str = prompt("Enter string => ").split("");
let specified = prompt("Enter the character => ");
let occurance = 0;
//1st
str.forEach((char) => {
  if (char === specified) occurance++;
});
if (occurance >= 2 && occurance <= 4) {
  console.log(`${specified} character is b/w 2 & 4`);
} else {
  console.log("Not passed the tast");
}
//2nd
const countChars = (str, ch) => {
  const array = str.filter((char) => char === ch);
  return array.length;
};
occurance = countChars(str, specified);
if (occurance >= 2 && occurance <= 4) {
  console.log(`${specified} character is b/w 2 & 4`);
} else {
  console.log("Not passed the tast");
}
