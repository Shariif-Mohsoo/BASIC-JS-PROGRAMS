/*
    *---------------------------REDUCE-----------------------------* 
    Reduce will execute the reducer function on each element of 
    the array, resulting in a single value.
    SYNTAX==>
    array.reduce((accumulator,currentVal)=>{},initialVal);
*/
//write program to find out the largest and smallest element in an array
// const array = [23, 32, 12, 21, 34, 43];
// const sum = array.reduce((sum, currentVal) => sum + currentVal);
// console.log(sum);
// const largest = array.reduce((large, currentVal) => {
//   if (large > currentVal) return large;
//   else return currentVal;
// });
// console.log(largest);
// const smallest = array.reduce((small, currentVal) => {
//   if (small < currentVal) return small;
//   return currentVal;
// });
// console.log(smallest);
// //count votes
// const votes = [
//   "PTI",
//   "PTI",
//   "PTI",
//   "PML",
//   "PML",
//   "PPP",
//   "PPP",
//   "PML",
//   "PPP",
//   "PTI",
//   "PTI",
//   "PTI",
// ];
// const result = votes.reduce((acc, currentVal) => {
//   if (acc[currentVal]) {
//     acc[currentVal]++;
//   } else {
//     acc[currentVal] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);
const books = [
  {
    title: "LORD OF THE FLIES",
    rating: 1.67,
  },
  {
    title: "Applied Physics",
    rating: 2.5,
  },
  {
    title: "Calculas",
    rating: 3.7,
  },
  {
    title: "OOP",
    rating: 3.98,
  },
  {
    title: "Programming Fundamental",
    rating: 3.99,
  },
];
//write program to create the object where you store 2 stars on same place,up to so on books at same place.
let arrangeStock = books.reduce((acc, currentVal) => {
  const key = Math.floor(currentVal.rating);
  if (acc[key]) {
    acc[key].push(currentVal);
  } else {
    acc[key] = [];
    acc[key].push(currentVal);
  }
  return acc;
}, {});
//in shorter way
arrangeStock = books.reduce((groupBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupBooks[key]) groupBooks[key] = [];
  groupBooks[key].push(book);
  return groupBooks;
}, {});
console.log(arrangeStock);
