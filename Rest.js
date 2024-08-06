/*
    THE OLD WAY TO CAPTURE THE ARGUMENTS, WHEN WE DON'T HAVE ANY
    IDEA ABOUT ARGUMENTS IS ((arguments));
    ARGUMENTS ARE SEEM LIKE AN ARRAY, BUT THEY ARE N'T.
    =============================================================
    REST IS SAME LIKE A SPREAD, BUT IT'S NOT. 
    REST PARAMS COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL 
    ARRAY.
    SYNTAX
    function name(...params)
    {
        console.log(params);
    }
    => IT IS USEFUL WHERE WE DON'T HAVE ANY IDEA ABOUT THE
    NUMBER OF PARAMS
    => IT COLLECTS THE REMAINING ARGUMENTS.
    => REST PARAMS MUST BE THE LAST PARAMS.
*/
const array = [1, 2, 4, 5, 6];
function sum() {
  console.log(arguments);
  const array = [...arguments];
  return array.reduce((sum, currentVal) => sum + currentVal);
}
console.log(sum(...array));
//2nd case arrow functions
/*
// IN THE CASE OF ARROW FUNCTIONS, ARGUMENTS DOESN'T WORK
    const display = () => console.log(arguments);
    display(1, 23);
*/
//EXAMPLE FOR REST............................
console.log("\n");
function product(...nums) {
  console.log(nums);
  const mul = nums.reduce(
    (calculatedProduct, currentVal) => calculatedProduct * currentVal
  );
  return mul;
}
//we are spreading here
console.log(product(...array));
//EXAMPLE FOR REST............................
console.log("\n");
const personsInfo = (firstName, lastName, ...qualities) => {
  console.log(`firstName: ${firstName}`);
  console.log(`lastName: ${lastName}`);
  console.log("Qualities");
  for (let key in qualities) {
    console.log(key, qualities[key]);
  }
};
personsInfo("Muhammad", "Mohsin", "Introvert", "Simple", "Stay Alone Lover");
