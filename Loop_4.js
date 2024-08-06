const target = Math.floor(Math.random() * 11);
let guess = Math.floor(Math.random() * 11);
while (target !== guess) {
  guess = Math.floor(Math.random() * 11);
  if (target === guess) {
    console.log("\t\t\tHurry, Congrats! Dear you meet our expectation's");
    console.log("Your Guess => ", guess);
    console.log("Target ==> ", target);
    break;
  }
}
