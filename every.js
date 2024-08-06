/*
    --->    EVERY
    EVERY, TESTS WHETHER ALL ELEMENTS IN THE ARRAY PASS THE 
    PROVIDED FUNCTION. IT RETURNS A BOOLEAN VALUE.
    --->    SOME
    Similar to every, but returns true if ANY of the array elements
    pass the test function.
    AT LEAST ONE ELEMENT IN THE ARRAY PASS THE TEST, THEN IT WILL RETURN
    TRUE.
*/
//1st Method
const words = ["Dog", "dig", "log", "lig", "fog", "fig"];
console.log(words);
const findDemand = words.find((w) => w.toLowerCase().includes("d"));
console.log(findDemand);
words[2] = "loog";
const isTrue = words.every((word) => word.length === 3);
const isFalse = words.every((word) => word.length === 4);
console.log(isFalse);
console.log(isTrue);
//2nd Method
const isTrueLength = words.some((word) => word.length > 3);
console.log(isTrueLength);
