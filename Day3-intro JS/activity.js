// shopping cart
// create variables pf the price of each item and quantity of items in the cart
let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;

// a customer bought 2 shirts , a pair of shoes, 1 pants and 3 sunglasses. 
// they also have a 10% discount on the total
// store the total price of the items in the cart
//log the cart variable in the console(e.g total = $ ?)

let total = shirt + shoes + pants + sunglasses;
console.log("The total cost of the purchase" + total);

// apply the 10% discount on the total price
let discount = total * 0.9;
console.log("After applying the 10% discount" + discount);
// calculate how much change is due from the customer
let change = 100 - discount;
console.log("The amount of change due from the customer" + change);
