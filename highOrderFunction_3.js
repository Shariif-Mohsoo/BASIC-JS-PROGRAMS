/*
    QUIZ:
    Create a function (makeBetweenFunction) which will take
    two arguments one will be the min and next max, after this
    return the function which will take one argument, then check out
    that the value enter is less or greater than earlier passed arguments
    and then it will return true or false, based on that.
    Basically you are just checking the range, either the value 
    passed is between two earlier passed values or not.
*/
function makeBetweenFunction(min, max) {
  const checkRange = function (value) {
    const isTrue = value > min && value < max;
    return isTrue;
  };
  return checkRange;
}
const checkValueRange = makeBetweenFunction(0, 4);
console.log(checkValueRange(1));
console.log(checkValueRange(5));
console.log(checkValueRange(2));
console.log(checkValueRange(3));
console.log(checkValueRange(4));
