//here we will see the second usage of
//higher order function which is (return function)
function addBy(num) {
  const added = function (val) {
    return val + num;
  };
  return added;
}
const number = addBy(2);
console.log(number(3));
function multiplyBy(num) {
  return function (val) {
    return val * num;
  };
}
const num = multiplyBy(2);
console.log(num(3));

function greet() {
  const Greet = function () {
    console.log("Hi");
    return "HI";
  };
  return Greet;
}
const Greet = greet();
console.log(Greet());
