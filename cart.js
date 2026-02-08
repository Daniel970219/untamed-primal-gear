// ===============================
// CART PAGE (ADMIN PRODUCTS)
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

renderCart();

function renderCart() {
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p style='text-align:center;'>Your cart is empty.</p>";
    cartTotal.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        Qty: ${item.quantity}
      </div>
      <div>R${item.price * item.quantity}</div>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsDiv.appendChild(div);
  });

  cartTotal.textContent = `Total: R${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
