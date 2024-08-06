/*
    A pangram is the sentence that contains every letter of the alphabet, like:
    The quick brown fox jumps over the lazy dog.
    Write a function called isPangram, which checks to see if a given 
    sentence contains every letter of the alphabet. Make sure you ignore 
    string casing!
    isPangram("The five boxing wizards jump quickly")//true
    isPangram("The five boxing wizards jump quick")//false
*/
const prompt = require("prompt-sync")();
const characters = "abcdefghijklmnopqrstuvwxyz";
function isPangram(sentence) {
  let Sentence = sentence.toLowerCase();
  for (let char of characters) {
    if (Sentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
const sentence = prompt("Enter the sentence but pangram => ");
const isTrue = isPangram(sentence);
if (isTrue) {
  console.log(`${sentence}\n\tyou entered correct sentence`);
} else {
  console.log(`${sentence}\n\tyou entered incorrect sentence`);
}
