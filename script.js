/* ===============================
   HOMEPAGE — BEST SELLERS
=============================== */

const grid = document.getElementById("best-seller-grid");

const products = JSON.parse(localStorage.getItem("products")) || [];

function renderBestSellers() {
  if (!grid) return;

  grid.innerHTML = "";

  const featured = products.filter(p => p.featured);

  if (featured.length === 0) {
    grid.innerHTML = "<p>No best sellers yet.</p>";
    return;
  }

  featured.forEach(product => {
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
          <p class="price">R${product.price}</p>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

renderBestSellers();
