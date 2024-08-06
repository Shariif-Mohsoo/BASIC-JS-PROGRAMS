function greet() {
  console.log("HI");
}
function outer() {
  let movie = "Amadeus";
  greet();
  function inner() {
    greet();
    let movie = "The Shinning";
    let copyMovie = movie.replace(" ", "_"); //strings are im_muatable means the original one doesn't change.
    console.log(copyMovie.toUpperCase());
    function extraInner() {
      greet();
      console.log(copyMovie.split(""));
    }
    extraInner();
  }
  inner();
}
outer();
/*
    NOTE =>
        We can invoke the function only in this scope where we define them, except global function
*/
