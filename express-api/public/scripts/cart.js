// Create a shopping cart using browser storage in JavaScript

// Initialize the shopping cart
let cart = [];

// Add item to the cart
function addToCart(item) {
    quantity = document.getElementById(item + 'Q').value;
    fullItem = {item,quantity}
    cart.push(fullItem);
    console.log(fullItem);
    saveCart();
}

// Remove item from the cart
function removeFromCart(item) {
  cart = cart.filter((cartItem) => cartItem !== item);
  saveCart();
}

// Save the cart to browser storage
function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Load the cart from browser storage
function loadCart() {
  const storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

// Initialize the cart when the page loads
window.onload = function () {
  loadCart();
};

// Example usage
// addToCart('Product 1');
// addToCart('Product 2');
// removeFromCart('Product 1');