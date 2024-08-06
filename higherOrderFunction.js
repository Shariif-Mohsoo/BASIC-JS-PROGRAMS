/*
    HIGHER ORDER FUNCTION IS ALSO AN ANOTHER TYPE OF FUNCTION, 
    WHERE FUNCTIONS WILL OPERATE ON/WITH OTHER FUNCTIONS.
    THEY CAN:
    ---> ACCEPT OTHER FUNCTIONS AS ARGUMENTS
    ---> RETURN OTHER FUNCTIONS
*/
//LET'S SEE AN EXAMPLE
function cry() {
  console.log(`HE/SHE is crying`);
}
function happy(name) {
  console.log(`HE/SHE is happy`);
}
function pickOne(func1, func2) {
  const choice = Math.random(); //this will generate the random number between 0 && < 1 ! 1;
  choice >= 0.5 ? func1() : func2(); //here we used the ternary operator
}
pickOne(happy, cry);
