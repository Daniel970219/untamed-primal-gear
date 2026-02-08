// ===============================
// ADMIN DASHBOARD LOGIC
// ===============================

// Load products
let products = JSON.parse(localStorage.getItem("products")) || [];

// Elements
const productList = document.getElementById("admin-products");

// Render products
function renderProducts() {
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
        R${product.price}
      </div>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;

    productList.appendChild(div);
  });
}

// Add product
function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;
  const description = document.getElementById("product-description").value;

  if (!name || !price || !image) {
    alert("Please fill in all required fields");
    return;
  }

  products.push({
    id: Date.now(),
    name,
    price: Number(price),
    image,
    description
  });

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";

  renderProducts();
}

// Delete product
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

// Initial render
renderProducts();
// ===============================
// ORDERS PANEL
// ===============================

const orders = JSON.parse(localStorage.getItem("orders")) || [];
const ordersDiv = document.getElementById("admin-orders");

function renderOrders() {
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
        ${order.customer.name} | ${order.customer.email}<br>
        Total: R${order.total}<br>
        Status: ${order.status}<br>
        Date: ${order.date}
      </div>
    `;

    ordersDiv.appendChild(div);
  });
}

renderOrders();

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}

