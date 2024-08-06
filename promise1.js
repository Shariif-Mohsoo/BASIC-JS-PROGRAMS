/*
 * A PROMISE IS AN OBJECT, WHICH REPRESENTS THE EVENTUALLY COMPLETION 
   OR FAILURE OF AN ASYNCHRONOUS OPERATION.
 */
//creating the promise
//it will take two call backs,one for resolve,one for reject
const willGetYouBike = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand >= 0.5) resolve();
  else reject();
});

willGetYouBike
  .then(() => {
    console.log("Promise is full filled ");
  })
  .catch(() => {
    console.log("Promise is not full filled");
  });
