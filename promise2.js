const giveYouBike = () => {
  return new Promise((resolve, reject) => {
    let bikePrice = Math.floor(Math.random() * 100000 + 1);
    let affordAbleCost = 60000;
    if (bikePrice <= affordAbleCost) {
      resolve(bikePrice);
    } else {
      reject(bikePrice);
    }
  });
};
giveYouBike()
  .then((message) => {
    console.log("Bike's price is " + message);
    console.log("Promise is full filled");
  })
  .catch((message) => {
    console.log("Bike's price is " + message);
    console.log("Promise is not full filled");
  });
