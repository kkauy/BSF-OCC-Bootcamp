//order.js
const calculateTotal = (cartItems) => {
    let total = 0;
    for (const item of cartItems) {
            total += item.price;
            console.log(total);
    }
    return total;
};

module.exports = calculateTotal;
//calling the function in another file