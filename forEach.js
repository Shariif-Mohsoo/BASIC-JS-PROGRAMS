/*
    FOREACH IS A BUILD IN ARRAY'S METHOD,
    IT ACCEPTS THE ARRAY CALL BACK FUNCTION.
    IT CALL THE FUNCTION ONCE PER EACH 
    ELEMENT IN AN ARRAY.
    We can pass the element and also idx in for 
    each loop function.
*/
let array = [1, 2, 3, 4, 5, 6];
array.forEach(function checkNum(n) {
  console.log(n * n);
});
//Write program to check numbers in the array are primary or not
array = [2, 3, 5, 7, 11, 13, 17, 19];
array.forEach(checkElement);
function checkElement(num, idx) {
  let counter = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      counter++;
    }
  }
  if (counter === 1) {
    console.log(`The number => ${num} at index => ${idx} is Prime Number`);
  } else {
    console.log(`The number => ${num} at index => ${idx} is not Prime Number`);
  }
}
