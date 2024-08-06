/*
-----------------------Object Destructuring-------------------
    SYNTAX:
    const {keys}=object;
    HERE ORDER DOESN'T MATTER,BUT KEY NAME
    We can also we the rest operator here,like arrays
*/
const person = {};
person["first"] = "Muhammad";
person["last"] = "Mohsin";
person["country"] = "Pakistan";
person["title"] = "Introvert";
console.log(person);
// console.log(person["first"], person.last);
//Destructuring
const { first, last, ...other } = person;
console.log(first, last, other);
//making a variables and assigning values at key's to them
const {
  first: firstName,
  last: lastName,
  country: Nationality,
  ...Other
} = person;
console.log(firstName, lastName, Nationality, Other);
