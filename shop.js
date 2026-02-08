/* ===============================
   SHOP PAGE — DYNAMIC PRODUCTS
=============================== */

const productGrid = document.getElementById("shop-product-grid");
const categoryFilter = document.getElementById("category-filter");

// Load data
const products = JSON.parse(localStorage.getItem("products")) || [];
const categories = JSON.parse(localStorage.getItem("categories")) || [];

/* ===============================
   CATEGORY DROPDOWN
=============================== */

function renderCategories() {
  categoryFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All Categories";
  categoryFilter.appendChild(allOption);

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

/* ===============================
   PRODUCT RENDER
=============================== */

function renderProducts(filter = "all") {
  productGrid.innerHTML = "";

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      "<p style='text-align:center;'>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
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
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

/* ===============================
   FILTER EVENT
=============================== */

categoryFilter.addEventListener("change", () => {
  renderProducts(categoryFilter.value);
});

/* ===============================
   INIT
=============================== */

renderCategories();
renderProducts();
