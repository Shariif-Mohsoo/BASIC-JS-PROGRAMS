//array
const names = ["Mohsin", 1, "Imran", 234, "Hashir", 22.2, "Ali"];
const typeOfNumber = typeof 1;
for (let name of names) {
  if (typeof name !== typeOf(Number)) {
    console.log(`Name: ${name}`);
  } else {
    console.log("Number : " + name);
  }
}
