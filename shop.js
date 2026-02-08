const products = JSON.parse(localStorage.getItem("products")) || [];

const productGrid = document.getElementById("shop-product-grid");
const filter = document.getElementById("category-filter");

function renderProducts(category = "all") {

  productGrid.innerHTML = "";

  let filtered = products;

  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {

    const card = document.createElement("a");
    card.href = `product.html?id=${product.id}`;
    card.style.textDecoration = "none";
    card.style.color = "inherit";

    card.innerHTML = `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p class="price">R${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

filter.addEventListener("change", e => {
  renderProducts(e.target.value);
});

renderProducts();
