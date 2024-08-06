//LET'S SEE AN AWESOME EXAMPLE OF AN OBJECT..........
const annoyer = {
  phrases: ["LOL", "AWESOME", "HI", "HELLO KIND LANDY", "WTF", "W8"],
  getPhrase() {
    const idx = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[idx];
  },
  start() {
    this.id = setInterval(() => console.log(this.getPhrase()), 3000);
  },
  stop() {
    clearInterval(this.id);
    console.log("Story Ends");
  },
};
annoyer.start();
console.log(annoyer);
annoyer.stop();

// /////setInterval()
// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }
// clearInterval(intervalID);
