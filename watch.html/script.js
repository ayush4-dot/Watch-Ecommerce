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
// Open popup and display content
function openPopup(title, price, description, image) {
    // Get the popup image element
    let popupImageElement = document.getElementById('popup-image');

    // Set the content for the popup dynamically
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-price').innerText = price;
    document.getElementById('popup-description').innerText = description;

    // Set the image source
    popupImageElement.src = image;

    // Display the popup with flex
    document.getElementById('popup').style.display = 'flex';
}

// Close popup
function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
}
 
function submitReview() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const reviewMessage = document.getElementById("review-message").value.trim();

    if (!rating) {
        alert("Please select a rating!");
        return;
    }

    if (!reviewMessage) {
        alert("Please write your review message!");
        return;
    }

    // Display a message indicating the review has been submitted
    alert("Your review is submitted!");

    // Clear the review form after submission
    rating.checked = false;
    document.getElementById("review-message").value = '';
}
 
