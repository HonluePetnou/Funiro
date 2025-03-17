// Get elements
const cartButton = document.querySelector('.ri-shopping-cart-line');
const cartDialog = document.getElementById('cartDialog');
const closeCartButton = document.getElementById('closeCartButton');

// Function to toggle cart dialog visibility
function toggleCartDialog() {
  cartDialog.style.display = cartDialog.style.display === 'none' || cartDialog.style.display === '' ? 'flex' : 'none';
}

// Show cart dialog when cart icon is clicked
cartButton.addEventListener('click', toggleCartDialog);

// Hide cart dialog when close button is clicked
closeCartButton.addEventListener('click', toggleCartDialog);

// Existing function to add products to the cart
function addToCart(productName, productPrice, productUrl) {
  const product = { name: productName, price: productPrice, image: productUrl };
  cart.push(product);
  displayCart();
  toggleCartDialog(); // Show the cart dialog when a product is added
}

// Cart array to store added products
let cart = [];

// Function to handle adding products to the cart
function addToCart(productName, productPrice, url) {
  const product = { name: productName, price: productPrice , image: url};
  cart.push(product);
  displayCart();
}

// Function to display cart contents
function displayCart() {
  const cartContent = document.querySelector('.cart-dialog-content');
  cartContent.innerHTML = ''; // Clear previous content

  cart.forEach((product, index) => {
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="cart-item-details">
        <h5>${product.name}</h5>
      </div>
      <div class="cart-item-price">${product.price}</div>
      <button class="remove-button" onclick="removeFromCart(${index})"><i class="ri-close-large-line"></i></button>
    `;
    cartContent.appendChild(item);
  });
}

// Function to remove item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productImage = productCard.querySelector('img').src;
    const productName = productCard.querySelector('.details h4').innerText;
    const productPrice = productCard.querySelector('.details span').innerText.replace('$', '');
    addToCart(productName, productPrice, productImage);
  });
});
