let cart = {};

function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = { quantity: 1, totalPrice: productPrice };
    }

    updateCartDisplay();

    alert(`${productName} added to cart!`);
}

function updateCartDisplay() {
    let totalItems = 0;
    for (const product in cart) {
        totalItems += cart[product].quantity;
    }

    document.getElementById('cart-count').textContent = totalItems;
}