/*
    FIND, RETURN'S THE VALUE OF THE FIRST ELEMENT IN THE ARRAY
    THAT SATISFIES THE PROVIDING TESTING FUNCTION.
    It only give us the first match.
*/
const array = ["ali", "imran", "hassan", "ahsan"];
// const val = array.find(element);
// function element(ele) {
//   const returnValue = ele.includes("ali");
//   return returnValue;
// }
// console.log(val);
// const name = array.find((n) => n.includes("a"));
// console.log(typeof name);
// console.log(typeof array);
//2nd example
const movies = [
  "Big Bang",
  "Doom 1",
  "Doom 2",
  "Doom 3",
  "Tiger Zinda ha",
  "Ishq",
];
// const movie = movies.find(checkMovie);
// function checkMovie(movie) {
//   return movie.includes("Big");
// }
// const newMovie = movies.find((movie) => movie.includes("Big"));
// console.log(newMovie);

//3th example
const books = [
  {
    title: "Mr Chips",
    rating: 4.5,
  },
  {
    title: "Calculas",
    rating: 4.8,
  },
  {
    title: "Applied Physics",
    rating: 4.5,
  },
];
// const book = books.find()
// const book = () => {
//   for (let i in books) {
//     if (books[i].title.includes("Mr")) {
//       console.log(books[i]);
//       return books[i];
//     }
//   }
// };
// console.log(book());
//2nd method
// const newBook = books.find((book) => book.title.includes("Mr"));
// console.log(newBook);
/*
    FIRST WRITE THE GIVEN TASK ON THE REGISTER AND THEN COMPILE IT
    FIND THE BOOK WHICH HAAS RATING MORE THAN 4.3
*/
const highRateBook = books.find((b) => b.rating > 4.3);
console.log(highRateBook);
console.log("\n\n");
const highRateBooks = books.map((b) => {
  if (b.rating > 4.3) {
    return b;
  }
});
highRateBooks.forEach((highRate) => console.log(highRate));
