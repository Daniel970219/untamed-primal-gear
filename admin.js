/* ===============================
   ADMIN DASHBOARD SYSTEM
=============================== */

window.products = JSON.parse(localStorage.getItem("products")) || [];
window.categories = JSON.parse(localStorage.getItem("categories")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const productList = document.getElementById("admin-products");
const categoryList = document.getElementById("admin-categories");
const ordersDiv = document.getElementById("admin-orders");

let editIndex = null;

/* ===============================
   PRODUCT RENDER
=============================== */

window.renderProducts = function () {

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
        Price: R${product.price}<br>
        ${product.featured ? "⭐ Best Seller" : ""}
      </div>

      <div>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;

    productList.appendChild(div);
  });
};

/* ===============================
   ADD / UPDATE PRODUCT
=============================== */

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

  const productData = {
    id: editIndex !== null ? products[editIndex].id : Date.now(),
    name,
    price: Number(price),
    image,
    description,
    category,
    featured
  };

  if (editIndex !== null) {
    products[editIndex] = productData;
    editIndex = null;
  } else {
    products.push(productData);
  }

  localStorage.setItem("products", JSON.stringify(products));

  clearProductForm();
  renderProducts();
};

window.editProduct = function (index) {

  const p = products[index];

  document.getElementById("product-name").value = p.name;
  document.getElementById("product-price").value = p.price;
  document.getElementById("product-image").value = p.image;
  document.getElementById("product-description").value = p.description;
  document.getElementById("product-category").value = p.category;
  document.getElementById("product-featured").checked = p.featured;

  editIndex = index;
};

window.deleteProduct = function (index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
};

function clearProductForm() {

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-featured").checked = false;
};

/* ===============================
   CATEGORY MANAGEMENT
=============================== */

window.renderCategories = function () {

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
  dropdown.innerHTML = "";

  categories.forEach(cat => {

    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;

    dropdown.appendChild(opt);
  });
};

/* ===============================
   ORDERS PANEL
=============================== */

window.renderOrders = function () {

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
