/*
    FILTER CREATE'S THE NEW ARRAY WITH ALL THE ELEMENTS THAT PASS THE
    TEST IMPLEMENT BY THE PROVIDED FUNCTION
*/
//1st example
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter((number) => number % 2 !== 0);
// const evens = nums.filter(evenNumbers);
// function evenNumbers(num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// }
// console.log(evens);
// console.log(odds);
//2nd example
const books = [
  {
    title: "Stats & Prob",
    rating: 4.5,
  },
  {
    title: "Financial Accounting",
    rating: 4.6,
  },
  {
    title: "Object Orientied Programming",
    rating: 4.99,
  },
  {
    title: "Digital Logic Design",
    rating: 4.33,
  },
  {
    title: "Programming Fundamental",
    rating: 4.9999,
  },
  {
    title: "Calculas",
    rating: 4.76,
  },
];
//filter out the books that have rating more than 4.5
// const goodBooks = books.filter(highRatedBooks);
// function highRatedBooks(book) {
//   if (book.rating > 4.5) {
//     return book;
//   }
// }
// goodBooks.forEach((book) => console.log(book));
//2nd method
// const excellentBooks = books.filter((book) => {
//   return book.rating > 4.6;
// });
// excellentBooks.forEach((book) => console.log(book));
//3rd method
const extraOrdinaryBooks = books.filter((b) => b.rating > 4.91);
extraOrdinaryBooks.forEach((book) => console.log(book));
