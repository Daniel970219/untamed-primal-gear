// ===============================
// CHECKOUT → SAVE ORDER
// ===============================

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  document.getElementById("name").value = currentUser.name;
  document.getElementById("email").value = currentUser.email;
}


const itemsDiv = document.getElementById("checkout-items");
const totalDiv = document.getElementById("checkout-total");

let total = 0;

if (cart.length === 0) {
  itemsDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach(item => {
    const line = document.createElement("p");
    line.textContent = `${item.name} x ${item.quantity} — R${item.price * item.quantity}`;
    itemsDiv.appendChild(line);

    total += item.price * item.quantity;
  });

  totalDiv.textContent = `Total: R${total}`;
}

// PLACE ORDER
document.getElementById("payfast-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !phone || !address) {
    alert("Please fill in all customer details.");
    return;
  }

  const order = {
    id: Date.now(),
    customer: { name, email, phone, address },
    items: cart,
    total,
    status: "Pending",
    date: new Date().toLocaleString()
  };

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart
  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "index.html";
});
