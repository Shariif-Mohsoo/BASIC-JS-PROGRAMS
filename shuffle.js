const array = [1, 2, 3, 4, 5, 6];
console.log(array);
//step_1:love over an array backwards.
for (let i = array.length - 1; i > 0; i--) {
  //step_2:pick index between 0 & i;
  let j = Math.floor(Math.random() * (i + 1));
  //swap older technique
  //   let temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  //step_3:swap new technique via destructuring
  //this is an algorithm called the (fisher yates shuffle) to shuffle an array..
  [array[i], array[j]] = [array[j], array[i]];
}
//step_4: continue until all the elements are visited and swapped
console.log(array);
