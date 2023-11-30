// Create a shopping cart using browser storage in JavaScript

// Initialize the shopping cart
let cart = [];

// Add item to the cart
function addToCart(item) {
    itemName = document.getElementById(item + 'Name').innerText;
    itemPrice = document.getElementById(item + 'Price').innerText;
    itemQuantity = document.getElementById(item + 'Quant').value;
    fullItem = {item,itemName,itemPrice,itemQuantity};
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

function clearCart(){
  cart = [];
  localStorage.removeItem('shoppingCart');
}

// Initialize the cart when the page loads
window.onload = function () {
  loadCart();
}



function ticketWcart(){
    const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    const encodedData = encodeURIComponent(JSON.stringify(cartItems));
    const url = "tickets/new?data=" + encodedData;
    window.location.href = "/tickets";
}



// const myObject = { key1: 'value1', key2: 'value2' };

// // Convert the JavaScript object to a JSON string
// const jsonString = JSON.stringify(myObject);

// // Encode the JSON string to make it URL-safe
// const encodedObject = encodeURIComponent(jsonString);

// // Append it to a URL as a query parameter
// const url = `/some-route?data=${encodedObject}`;

// // Now 'url' contains the object encoded as a query parameter
// console.log(url);




