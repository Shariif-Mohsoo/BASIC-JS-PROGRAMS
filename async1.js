/*
*   THE ASYNC IS A KEYWORD
*   ASYNC FUNCTIONS ALWAYS RETURN THE PROMISE.
*   IF THE FUNCTION RETURNS THE VALUE, THE PROMISE
    WILL BE RESOLVED WITH THAT VALUE.
*   IF THE FUNCTION THROWS AN EXCEPTION, THE PROMISE
    WILL BE REJECTED.
    HERE THERE IS NO NEED TO EXPLICITLY RETURN THE PROMISE. 
*/
async function greet() {
  return "Asslam o Alaikum!";
}
greet()
  .then((val) => {
    console.log(val);
  })
  .catch(() => {
    console.error("Rejected");
  });

/*
//lets see an example
//point to be noted async doesn't work with function expressions
async const div = () =>
{
    
}
*/

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("Both values must be numbers");
  else return x + y;
}
add(2, 2)
  .then((val) => {
    console.log(val);
  })
  .catch((val) => {
    console.log(val);
  });

add("2", 2)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
