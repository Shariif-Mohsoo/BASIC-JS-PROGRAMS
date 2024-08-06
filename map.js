/*
    MAP IS ALSO AN BUILD IN ARRAY BACK METHOD WHICH
    ACCEPTS THE CALL BACK AND THEN RETURN THE COPY
    OF THAT ARRAY.
*/
const texts = ["lol", "omg", "rofl"];
const newTexts = texts.map(transformToUpperCase);
function transformToUpperCase(element) {
  return element.toUpperCase();
}
newTexts.forEach((element, idx) => {
  console.log(`Element at idx ${idx} is ${element}`);
});
/*
    CREATE AN ARRAY WHICH HAVE FOUR PARAMETERS OF STRINGS
    WHAT EVER YOU WANT AND THEN MAP THEM TO CREATE NEW ARRAY
    WITH TEXT TRANSFORM UPPERCASE , AND ALSO SEPARATED BY (.);
    EXAMPLE =>
    ARRAY ['lol'];
    output => L.O.L;
*/
const array = ["asap", "byob", "rsvp", "diy"];
const newCopy = array.map(transformEachElement);
function transformEachElement(element) {
  return element.toUpperCase().split("").join(".");
}
newCopy.forEach((element) => console.log(element));
