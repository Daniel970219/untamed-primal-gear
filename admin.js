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
        Category: ${product.category}<br>
        R${product.price}
      </div>
      <button onclick="deleteProduct(${index})">Delete</button>
    `;

    productList.appendChild(div);
  });
}

function addProduct() {

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;
  const description = document.getElementById("product-description").value;
  const category = document.getElementById("product-category").value;

  if (!name || !price || !image || !category) {
    alert("Fill all fields");
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
  document.getElementById("product-category").value = "";

  renderProducts();
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "admin-login.html";
}

renderProducts();
