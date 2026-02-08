// ===============================
// ADMIN LOGIN
// ===============================

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  const ADMIN_EMAIL = "dvanrooyen1@hotmail.com";
  const ADMIN_PASSWORD = "Gatvol@2022";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html";
  } else {
    error.textContent = "Invalid admin credentials.";
    error.style.color = "red";
  }
}
