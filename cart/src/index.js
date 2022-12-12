import faker from "faker";

let cartItems = "";
console.log(faker.random);
for (let i = 0; i < 1; i++) {
  cartItems += `<div> You have ${faker.random.number()} items.</div>`;
}

document.querySelector("#cart-items").innerHTML = cartItems;
