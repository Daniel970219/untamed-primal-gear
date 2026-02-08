// ===============================
// CART SYSTEM (ADMIN PRODUCTS)
// ===============================

// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
updateCartCount();

// Add to cart buttons (on homepage)
document.querySelectorAll(".product-card button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // prevent link navigation
    addToCartFromHome(index);
  });
});

// Load admin products
const products = JSON.parse(localStorage.getItem("products")) || [];

// Add product to cart (from home page)
function addToCartFromHome(index) {
  const product = products[index];
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product.name + " added to cart");
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = count;
}
