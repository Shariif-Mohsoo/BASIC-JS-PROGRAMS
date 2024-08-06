/*
    SPREAD IN ARRAY LITERALS
        IT CREATE A NEW ARRAY USING AN EXISTING ARRAY. 
        SPREADS THE ELEMENTS FROM ONE ARRAY INTO A NEW ARRAY.
*/
const numbers = [1, 2, 3, 5, 4, 6];
const greyColors = ["#eee", "#999", "#333", "#777"];
const combo = [...numbers, ...greyColors];
combo.forEach((element, idx) => console.log(`${idx + 1} => ${element}`));
const newCombo = numbers.concat(greyColors);
console.log(newCombo);
//2nd example
const name = [..."mohsin"];
console.log(name);
const nameCopy = name.join("");
const originalName = nameCopy.replace(
  nameCopy.charAt(0),
  nameCopy.charAt(0).toUpperCase()
);
console.log(originalName);
