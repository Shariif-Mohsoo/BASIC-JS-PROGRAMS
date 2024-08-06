//Here we will see the arrays with object
const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 9.98,
    quantity: 1,
  },
  {
    product: "Rice",
    price: 340,
    quantity: "1 kg",
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];
//including new item details
shoppingCart[3] = { name: "Banana", price: 10, quantity: 12 };
for (let itemDetail of shoppingCart) {
  console.log(itemDetail);
}
