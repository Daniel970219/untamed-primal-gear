// ===============================
// SHOP PAGE - LOAD PRODUCTS FROM ADMIN
// ===============================

// Get products from localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

// Get product grid
const productGrid = document.getElementById("shop-product-grid");

if (products.length === 0) {
  productGrid.innerHTML = "<p style='text-align:center;'>No products available yet.</p>";
} else {
  products.forEach(product => {
    const card = document.createElement("a");
    card.href = `product.html?id=${product.id}`;
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    card.innerHTML = `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">R${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}
