/* ===============================
   ADMIN DASHBOARD SYSTEM
=============================== */

window.products = JSON.parse(localStorage.getItem("products")) || [];
window.categories = JSON.parse(localStorage.getItem("categories")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const productList = document.getElementById("admin-products");
const categoryList = document.getElementById("admin-categories");
const ordersDiv = document.getElementById("admin-orders");

/* ===============================
   PRODUCTS
=============================== */

window.renderProducts = function () {
  if (!productList) return;

  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>No products added yet.</p>";
    return;
  }

  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <div>
        <strong>${product.name}</strong><br>
        Category: ${product.category || "None"}<br>
        R${product.price}<br>
        ${product.featured ? "⭐ Best Seller" : ""}
      </div>

      <button onclick="deleteProduct(${index})">Delete</button>
    `;

    productList.appendChild(div);
  });
};

window.addProduct = function () {
  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value.trim();
  const description = document.getElementById("product-description").value.trim();
  const category = document.getElementById("product-category").value;
  const featured = document.getElementById("product-featured").checked;

  if (!name || !price || !image) {
    alert("Fill required fields");
    return;
  }

  products.push({
    id: Date.now(),
    name,
    price: Number(price),
    image,
    description,
    category,
    featured
  });

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-featured").checked = false;

  renderProducts();
};

window.deleteProduct = function (index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
};

/* ===============================
   CATEGORIES
=============================== */

window.renderCategories = function () {
  if (!categoryList) return;

  categoryList.innerHTML = "";

  categories.forEach((cat, index) => {
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <span>${cat}</span>
      <button onclick="deleteCategory(${index})">Delete</button>
    `;

    categoryList.appendChild(div);
  });

  updateDropdown();
};

window.addCategory = function () {
  const input = document.getElementById("new-category");
  const value = input.value.trim();

  if (!value || categories.includes(value)) return;

  categories.push(value);
  localStorage.setItem("categories", JSON.stringify(categories));

  input.value = "";
  renderCategories();
};

window.deleteCategory = function (index) {
  categories.splice(index, 1);
  localStorage.setItem("categories", JSON.stringify(categories));
  renderCategories();
};

function updateDropdown() {
  const dropdown = document.getElementById("product-category");
  if (!dropdown) return;

  dropdown.innerHTML = "";

  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    dropdown.appendChild(opt);
  });
}

/* ===============================
   ORDERS
=============================== */

window.renderOrders = function () {
  if (!ordersDiv) return;

  ordersDiv.innerHTML = "";

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <div>
        <strong>Order #${order.id}</strong><br>
        ${order.customer.name}<br>
        Total: R${order.total}
      </div>
    `;

    ordersDiv.appendChild(div);
  });
};

/* ===============================
   LOGOUT
=============================== */

window.logout = function () {
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
};

/* ===============================
   INIT
=============================== */

renderProducts();
renderCategories();
renderOrders();
