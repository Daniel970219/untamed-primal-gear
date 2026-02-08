// ===============================
// PRODUCT DETAIL (FROM ADMIN DATA)
// ===============================

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Load products from admin storage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Find product
const product = products.find(p => String(p.id) === String(productId));

if (!product) {
  document.body.innerHTML = `
    <p style="text-align:center; padding:50px;">
      Product not found.
    </p>
  `;
} else {
  // Populate page
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-description").textContent = product.description || "";
  document.getElementById("product-price").textContent = `R${product.price}`;
}

// ===============================
// ADD TO CART (ADMIN PRODUCT)
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("add-to-cart-btn").addEventListener("click", () => {
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
  alert(product.name + " added to cart");
});
