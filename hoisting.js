console.log(animal);
var animal = "Dog";
//that above behavior is hoisting.
//but let and const can't be hoisted
// console.log(name);
// let name = "Ali";
// console.log(PI);
// const PI = 3.14;

//lets move to the function
displayAnimal();
function displayAnimal() {
  console.log(animal);
} //but function can be hoisted but function expression can't be hoisted
//build in function.
setTimeout(function displayAnimal() {
  console.log(animal);
}, 1000);
//it will invoke the function automatically according to the set time interval
//1000ms = 1s
