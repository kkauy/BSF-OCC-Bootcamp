// cart.js
let cartItems = [];

const addToCart = (products) => {
    cartItems.push(products);
};

const getCartItems = () => {
    return cartItems;
};

module.exports = {
    addToCart, 
    getCartItems
}; 
// module.exports is used to make the functions available outside the module.
// In this case we are making "addToCart" and "getCartItems" functions available outside the module.

