// ===============================
// CUSTOMER AUTH SYSTEM
// ===============================

let users = JSON.parse(localStorage.getItem("users")) || [];

// REGISTER
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("register-msg");

  if (!name || !email || !password) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return;
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    msg.textContent = "Email already registered.";
    msg.style.color = "red";
    return;
  }

  users.push({
    id: Date.now(),
    name,
    email,
    password // ⚠️ plain text for now (backend will hash later)
  });

  localStorage.setItem("users", JSON.stringify(users));
  msg.textContent = "Account created! You can now log in.";
  msg.style.color = "lime";
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    msg.textContent = "Invalid login details.";
    msg.style.color = "red";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "checkout.html";
}

// LOGOUT
function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
