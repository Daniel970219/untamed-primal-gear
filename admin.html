// ===============================
// ADMIN DASHBOARD SYSTEM
// Products + Categories + Orders
// ===============================

/* ===============================
   PRODUCTS
=============================== */

window.products = JSON.parse(localStorage.getItem("products")) || [];

const productList = document.getElementById("admin-products");

// Render products
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
        R${product.price}
      </div>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;

    productList.appendChild(div);
  });
};

// Add product
window.addProduct = function () {
  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value.trim();
  const description = document.getElementById("product-description").value.trim();
  const category = document.getElementById("product-category")?.value || "";

  if (!name || !price || !image) {
    alert("Fill all required fields");
    return;
  }

  products.push({
    id: Date.now(),
    name,
    price: Number(price),
    image,
    description,
    category
  });

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";

  renderProducts();
};

// Delete product
window.deleteProduct = function (index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
};

/* ===============================
   CATEGORY MANAGEMENT
=============================== */

window.categories = JSON.parse(localStorage.getItem("categories")) || [];

const categoryList = document.getElementById("admin-categories");

// Render categories
window.renderCategories = function () {
  if (!categoryList) return;

  categoryList.innerHTML = "";

  if (categories.length === 0) {
    categoryList.innerHTML = "<p>No categories yet.</p>";
    updateCategoryDropdown();
    return;
  }

  categories.forEach((cat, index) => {
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <span>${cat}</span>
      <button onclick="deleteCategory(${index})">Delete</button>
    `;

    categoryList.appendChild(div);
  });

  updateCategoryDropdown();
};

// Add category
window.addCategory = function () {
  const input = document.getElementById("new-category");
  if (!input) return;

  const value = input.value.trim();

  if (!value) {
    alert("Enter category name");
    return;
  }

  if (categories.includes(value)) {
    alert("Category already exists");
    return;
  }

  categories.push(value);
  localStorage.setItem("categories", JSON.stringify(categories));

  input.value = "";
  renderCategories();
};

// Delete category
window.deleteCategory = function (index) {
  categories.splice(index, 1);
  localStorage.setItem("categories", JSON.stringify(categories));
  renderCategories();
};

// Update dropdown
function updateCategoryDropdown() {
  const dropdown = document.getElementById("product-category");
  if (!dropdown) return;

  dropdown.innerHTML = "";

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    dropdown.appendChild(option);
  });
}

/* ===============================
   ORDERS PANEL
=============================== */

const orders = JSON.parse(localStorage.getItem("orders")) || [];
const ordersDiv = document.getElementById("admin-orders");

window.renderOrders = function () {
  if (!ordersDiv) return;

  ordersDiv.innerHTML = "";

  if (orders.length === 0) {
    ordersDiv.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <div>
        <strong>Order #${order.id}</strong><br>
        ${order.customer.name}<br>
        ${order.customer.email}<br>
        Total: R${order.total}<br>
        Status: ${order.status}<br>
        ${order.date}
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
   INIT RENDER
=============================== */

renderProducts();
renderCategories();
renderOrders();
