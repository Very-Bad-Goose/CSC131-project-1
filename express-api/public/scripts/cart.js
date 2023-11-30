// Create a shopping cart using browser storage in JavaScript

// Initialize the shopping cart
let cart = [];
let cartNumber = 0;

// Add item to the cart
function addToCart(item) {
    cartNumber += 1;
    document.getElementById("cartCounter").innerText = cartNumber;
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
  localStorage.setItem('shoppingCartCounter', cartNumber);
}

// Load the cart from browser storage
function loadCart() {
  const storedCartCounter = localStorage.getItem('shoppingCartCounter');
  const storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  if(storedCartCounter){
    cartNumber = storedCartCounter;
  }
  document.getElementById("cartCounter").innerText = cartNumber;
}

// Initialize the cart when the page loads
window.onload = function () {
  loadCart();
}

function clearCart(){
  cart = [];
  localStorage.removeItem('shoppingCart');
  localStorage.removeItem('shoppingCartCounter');
}
function clearCartRefresh(){
  cart = [];
  localStorage.removeItem('shoppingCart');
  localStorage.removeItem('shoppingCartCounter');
  location.reload();
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




