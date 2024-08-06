const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feysia",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];
// console.log(results[1].country);
const [diamond, gold, silver] = results;
console.log(diamond, gold, silver);
//directly extracting the key values
// const [{ first }, { last }, { country }] = results;
// console.log(first, last, country);
//use this approach
const [, silverMedilist] = results;
const { first, last, country } = silverMedilist;
console.log(first, last, country);
