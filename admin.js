// ======================
// CATEGORY SYSTEM
// ======================

let categories =
  JSON.parse(localStorage.getItem("categories")) ||
  ["Apparel", "Supplements", "Gear"];

localStorage.setItem("categories", JSON.stringify(categories));

const categoryList = document.getElementById("category-list");
const categoryDropdown = document.getElementById("product-category");

function renderCategories() {

  categoryList.innerHTML = "";
  categoryDropdown.innerHTML = '<option value="">Select Category</option>';

  categories.forEach((cat, index) => {

    // dropdown
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryDropdown.appendChild(opt);

    // admin list
    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <strong>${cat}</strong>
      <button onclick="editCategory(${index})">Edit</button>
      <button onclick="deleteCategory(${index})">Delete</button>
    `;

    categoryList.appendChild(div);
  });

  localStorage.setItem("categories", JSON.stringify(categories));
}

function addCategory() {
  const input = document.getElementById("new-category");
  const name = input.value.trim();

  if (!name) return alert("Enter category name");

  categories.push(name);
  input.value = "";
  renderCategories();
}

function editCategory(index) {
  const newName = prompt("Rename category:", categories[index]);
  if (!newName) return;

  const oldName = categories[index];
  categories[index] = newName;

  // update product references
  products.forEach(p => {
    if (p.category === oldName) p.category = newName;
  });

  localStorage.setItem("products", JSON.stringify(products));
  renderCategories();
  renderProducts();
}

function deleteCategory(index) {

  const removed = categories[index];

  if (!confirm("Delete category?")) return;

  categories.splice(index, 1);

  // remove category from products
  products.forEach(p => {
    if (p.category === removed) p.category = "";
  });

  localStorage.setItem("products", JSON.stringify(products));

  renderCategories();
  renderProducts();
}

// ======================
// PRODUCT SYSTEM
// ======================

let products = JSON.parse(localStorage.getItem("products")) || [];

const productList = document.getElementById("admin-products");

function renderProducts() {

  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>No products yet.</p>";
    return;
  }

  products.forEach((product, index) => {

    const div = document.createElement("div");
    div.className = "admin-product";

    div.innerHTML = `
      <div>
        <strong>${product.name}</strong><br>
        ${product.category || "No category"}<br>
        R${product.price}
      </div>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;

    productList.appendChild(div);
  });

  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;
  const description = document.getElementById("product-description").value;
  const category = document.getElementById("product-category").value;

  if (!name || !price || !image) {
    return alert("Fill required fields");
  }

  products.push({
    id: Date.now(),
    name,
    price: Number(price),
    image,
    description,
    category
  });

  renderProducts();

  document
    .querySelect
