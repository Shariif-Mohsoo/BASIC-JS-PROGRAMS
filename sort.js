/*
    ----------------------SORT -----------------------
    BASICALLY, BY_DEFAULT THE SORT BUILD IN METHOD
    OF ARRAY DOESN'T WORK CORRECTLY, BECAUSE IT CONVERTS
    THE ALL THE GIVEN NUMBERS INTO STRING AND THEN COMPARE
    THEM, WHICH WE DON'T WANT.
    TO MAKE THIS WORK, WE SIMPLE PASS THE CALL FUNCTION
    IN SORT METHOD, WHICH IS COMPARISON FUNCTION. 
    SYNTAX IS  ======>
    array.sort(compareFunc(a,b));
    IF  compareFunc(a,b) return less than 0
    -----> Sort a before b (assending order)
    IF compareFunc(a,b) return 0
    -----> Leave a and b unchanged with respect to each other.
    IF  compareFunc(a,b) return greater than 0.
    -----> Sort b before a. (descending order)
    NOTE ==> 
    IT WILL UPDATE THE ORIGINAL ARRAY.
*/
const numbers = [22, 3, 4, 34, 234, 43, 53, 12, 21];
const newNumbers = numbers.sort();
console.log(newNumbers);
const sortAssendingOrder = numbers.sort(func);
function func(a, b) {
  return a - b;
}
console.log(sortAssendingOrder);
const sortDesceningOrder = numbers.sort((a, b) => b - a);
console.log(sortDesceningOrder);
console.log(numbers);
