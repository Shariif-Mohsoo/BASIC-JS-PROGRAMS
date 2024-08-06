/*
    Spread expands an iterable (array,string,etc.) into a list of
    arguments.
    SYNTAX => ...ITERABLE_ITEM'S_NAME
    WE CAN DO SPREAD IN ==>
    1 FUNCTION CALLS
    2 ARRAY LITERALS
    3 OBJECT LITERALS
*/
const array = ["Mohsin", "Ali", "Imran", "Hassan"];
// function printArrayValues(array) {
//   for (let idx in array) {
//     console.log(idx, array[idx]);
//   }
// }
// console.log(array);
const printArrayOfLengthFour = function (name1, name2, name3, name4) {
  console.log("A => ", name1);
  console.log("B => ", name2);
  console.log("C => ", name3);
  console.log("D => ", name4);
};
const colors = ["#000", "#eee", "#333", "#fff"];
printArrayOfLengthFour(...array);
console.log("\n");
printArrayOfLengthFour(...colors);
//2nd example
console.log("\n");
const Array = [9, 3, 4, 5, 1, 0];
console.log(Array);
// console.log(Math.max(Array));
// console.log(Math.min(Array));
console.log(Math.max(...Array));
console.log(Math.min(...Array));
