// Get form and input elements
const form = document.querySelector(".signin");
const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".ConfirmPassword");
const termsCheckbox = document.querySelector("input[type='checkbox']");
const submitButton = document.querySelector(".valide");
const error = document.querySelector(".error-message");
const errorParent = document.querySelector(".error");
const errorAction = document.querySelector(".error-action");

// Toggle password visibility
document.querySelectorAll(".ri-eye-line").forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const passwordField = passwordInput;
    const passwordField1 = confirmPasswordInput;

    if (passwordField.type === "password" && passwordField1.type === "password") {
      passwordField.type = "text";
      passwordField1.type = "text";
      eyeIcon.classList.add("ri-eye-close-line");
      eyeIcon.classList.remove("ri-eye-line");
    } else {
        passwordField.type = "password";
        passwordField1.type = "password";
        eyeIcon.classList.remove("ri-eye-close-line");
        eyeIcon.classList.add("ri-eye-line");
    }
  });
});

// Form validation
form.addEventListener("submit", (event) => {
  let isValid = true;
  errorParent.style.display = "block";

  // Validate username (at least 3 characters)
  if (usernameInput.value.trim().length < 3) {
    error.innerHTML += "Username must be at least 3 characters long.<br/>";
    isValid = false;
  }

  // Validate email (basic email regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    error.innerHTML += "Please enter a valid email address.<br/>";
    isValid = false;
  }

  // Validate password (at least 6 characters)
  if (passwordInput.value.trim().length < 6) {
    error.innerHTML += "Password must be at least 6 characters long.<br/>";
    isValid = false;
  }

  // Confirm password match
  if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    error.innerHTML += "Passwords do not match.<br/>";
    isValid = false;
  }

  // Check if terms and conditions are accepted
  if (!termsCheckbox.checked) {
    error.innerHTML += "You must accept the terms and conditions. <br/>";
    isValid = false;
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
  }
});
errorAction.addEventListener("click", () => {
    errorParent.style.display = "none";
    error.innerHTML = '';
})


const redirectButton = document.getElementById("redirectButton");

// Add a click event listener
submitButton.addEventListener("click", () => {
  // Redirect to the desired URL
  window.location.href = "../choice/index.html";
});
document.querySelector('.validate').addEventListener("click", () => {
  // Redirect to the desired URL
  window.location.href = "../choice/index.html";
});
