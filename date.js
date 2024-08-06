// let date = new Date();
// console.log(`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`);
// console.log(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);
/*
    WRITE JAVASCRIPT PROGRAM TO GET THE CURRENT DAT.
    EXPECTED OUTPUT:
    MM--DD--YYYY
    MM/DD/YYYY
*/
const currentDate = (date = new Date()) => {
  const Date = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log(`${month}/${Date}/${year}`);
  console.log(`${month}-${Date}-${year}`);
};
currentDate(new Date());
