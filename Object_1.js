/* 
    WRITE A PROGRAM TO CREATE THE FUNCTION getCard(),which we return
    the object, having key value pair's {value:7,suit:'Heart'} like
    that, through the new syntax of object which is ===========>
    ====================((Shorthand Properties.))====================
    They are not supported in IE(browser).
*/
const getValue = (array) => {
  let idx = Math.floor(Math.random() * array.length);
  return array[idx];
};
const getSuit = (array) => {
  let idx = Math.floor(Math.random() * array.length);
  return array[idx];
};
const getCard = () => {
  const values = [..."A12345678910KQJ"];
  const suits = ["Heart", "Diamond", "Club", "Spade"];
  let value = getValue(values);
  let suit = getSuit(suits);
  return {
    value,
    suit,
  };
};
console.log(getCard());
// =======================================================================
/*
    CREATE A FUNCTION THAT RECEIVES AN ARRAY AS ARGUMENT AND
    RETURN THE MIN,MAX,AVERAGE AND SUM OF THAT ARRAY.
*/
const getData = (array) => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let sum = Math.round(
    array.reduce((accumulator, currentValue) => accumulator + currentValue)
  );
  let average = Math.round(sum / array.length);
  return {
    max,
    min,
    sum,
    average,
  };
};
const array = [1, 2, 4, 5, 4.3, 2.1, 9.0];
console.log(getData(array));
