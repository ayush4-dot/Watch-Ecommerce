let cart = {};

// Function to add product to cart
function addToCart(productName, productPrice) {
    // Ensure productPrice is a number
    productPrice = parseFloat(productPrice);

    if (!cart[productName]) {
        cart[productName] = { quantity: 0, totalPrice: 0 };
    }

    cart[productName].quantity += 1;
    cart[productName].totalPrice += productPrice;

    updateCartDisplay();

    alert(`${productName} added to cart!`);
}

// Function to update cart display count
function updateCartDisplay() {
    let totalItems = 0;
    for (const product in cart) {
        totalItems += cart[product].quantity;
    }

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    } else {
        console.warn("Cart count element not found!");
    }
}

// Function to open CV modal
function openCV(cvFile) {
    const cvModal = document.getElement
}

// Open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Close the popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  