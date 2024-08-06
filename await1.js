/*
*   We can only use the await keyword inside of functions declared
    with async.
*   await will pause the execution of the function, waiting for a
    promise to be resolved
*/
// const fetchPlanets = () => {
//   return fetch("https://swapi.dev/api/planets/");
// };
fetchPlanets()
  .then((res) => {
    console.log(res.json());
  })
  .catch((err) => {
    console.log(err);
  });

async function fetchPlanets() {
  return await fetch("https://swapi.dev/api/planets/");
}
