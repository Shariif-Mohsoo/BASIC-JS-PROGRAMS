/*
    WRITE JAVASCRIPT PROGRAM TO CREATE A NEW STRING 
    ADDING "New!" IN FRONT OF A STRING. IF THE GIVEN
    STRING BEGINS with "New!" already then return the 
    original string.
*/
const prompt = require("prompt-sync")();
const str = prompt("Enter any string => ");
//1st approach
let getNewString = (string) => {
  if (string.slice(0, 4).toLowerCase() === "new!") {
    return string;
  } else {
    string = string.split("");
    const newStr = "New! ".split("");
    return newStr.concat(string).join("");
  }
};
//2nd approach
getNewString = (string) => {
  if (string.slice(0, 4).toLowerCase() === "new!") {
    return string;
  } else {
    return "New! " + string;
  }
};
//3rd approach
getNewString = (string) => {
  if (string.toLowerCase().includes("new!")) {
    return string;
  } else {
    return "New! " + string;
  }
};
//4th approach
getNewString = (string) => {
  if (string.toLowerCase().indexOf("new!") !== -1) {
    return string;
  } else {
    return "New! " + string;
  }
};
//5th approach, using ternary operator
getNewString = (string) =>
  string.toLowerCase().indexOf("new!") === 0 ? string : `New! ${string}`;
console.log(getNewString(str));
