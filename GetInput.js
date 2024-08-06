const prompt = require("prompt-sync")(); //to include library
var c;
c = prompt("Enter Value => ");
var b = prompt("Enter Value => ");
console.log("You enter ", c);
console.log("You enter ", b);
console.log("Sum => ", c + b);
//By default the systems take the input as the string so you need to parse it first so you can use it
var a, d;
a = parseFloat(prompt("Enter Any Number => "));
d = parseFloat(prompt("Enter Any Number => "));
console.log(`${a} + ${d} => ${a + d}`);
