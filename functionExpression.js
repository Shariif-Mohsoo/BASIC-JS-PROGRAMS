const prompt = require("prompt-sync")();
// function add(x, y) {
//   return x + y;
// }
// function add(x) {
//   return x + x;
// }
// console.log(add(2));
// console.log(add(2, 3));
//**************************((Function Expression))
const sum = function (x, y) {
  return x + y;
};
console.log(sum(2, 3));
const product = function multiply(x, y) {
  return x * y;
};
// console.log(multiply(2, 2));//this will throw an error
console.log(product(2, 2));
/*
NOTE:
    The function expression is also an another way of defining the function.
    Whenever you are invoking the function (function expression), must invoke
    through the variable function in which you store it , otherwise it will 
    throw an error.
*/
//===========Write program to check the format of extension (.txt,.html,.py,.js);
// const Extension = prompt("Enter the file extension format => ");
// const checkExtensionFormat = (extension) => {
//   if (extension.charAt(0) === ".") {
//     console.log(`${extension} correct format`);
//   } else {
//     console.log(`${extension} incorrect format`);
//   }
// };
// checkExtensionFormat(Extension);
//=======Write a javascript program to get the extension of the file only, ignore the name.
const fileName = prompt("Enter the name of your name => ");
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension(fileName));
