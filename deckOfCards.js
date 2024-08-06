/*
    Write a getCard() function which returns a random playing card objet,like:
    {
        value:'k'
        suit:'club'
    }
    pick a random value from :
    ------A,2,3,4,5,6,7,8,9,10,J,Q,K  
    pick a random suit from:
    -----club,heart,diamond,spade
    //return both in an object
*/
function pick(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}
function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K",
  ];
  const suits = ["HEART", "DIAMOND", "CLUB", "SPADE"];
  return { value: pick(values), suit: pick(suits) };
}
const getObject = getCard();
//using for in loop
for (let key in getObject) {
  console.log(`${key}: ${getObject[key]}`);
}
