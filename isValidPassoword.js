/*
    Build isValid function that will take two arguments.
    1 userName.
    2 password.
    limits =>
    password must be greater than 8 characters.
    password must not contain any empty space.
    password doesn't contain user name.
*/
console.log("\t\t\tLimitations or rules for password");
console.log("\t\t->Password must be greater than 8 characters.");
console.log("\t\t->Password must not contain any empty space.");
console.log("\t\t->Password doesn't contain user name.");
const prompt = require("prompt-sync")();
function isValid(userName, password) {
  if (
    password.length >= 8 &&
    password.indexOf(" ") === -1 &&
    password.indexOf(userName) === -1
  ) {
    return true;
  } else {
    return false;
  }
}
const userName = prompt("Enter the user name => ");
const password = prompt("Enter the password => ");
const isTrue = isValid(userName.toLowerCase(), password.toLowerCase());
if (isTrue) {
  console.log(
    "Valid password",
    `\t UserName => ${userName}\n\t\tPassword => ${password}`
  );
} else {
  console.log(
    "Invalid password",
    `\t UserName => ${userName}\n\t\tPassword => ${password}`
  );
}
