// Get form and input elements
const form = document.querySelector(".signin");
const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".ConfirmPassword");
const termsCheckbox = document.querySelector("input[type='checkbox']");
const submitButton = document.querySelector(".valide");
const Validate = document.querySelector(".validate");
const error = document.querySelector(".error-message");
const errorParent = document.querySelector(".error");
const errorAction = document.querySelector(".error-action");

// Toggle password visibility
document.querySelectorAll(".ri-eye-line").forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const passwordFields = [passwordInput, confirmPasswordInput];
    passwordFields.forEach(field => {
      if (field.type === "password") {
        field.type = "text";
      } else {
        field.type = "password";
      }
    });

    eyeIcon.classList.toggle("ri-eye-line");
    eyeIcon.classList.toggle("ri-eye-close-line");
  });
});

// Form validation
form.addEventListener("submit", (event) => {
  let compteur = 0;  // Initialize compteur to 0
  let isValid = true;
  error.innerHTML = ''; // Clear previous errors
  errorParent.style.display = "block";

  // Validate username (at least 3 characters)
  if (usernameInput.value.trim().length < 3) {
    error.innerHTML += "Username must be at least 3 characters long.<br/>";
    isValid = false;
    compteur++;
  }

  // Validate email (basic email regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    error.innerHTML += "Please enter a valid email address.<br/>";
    isValid = false;
    compteur++;
  }

  // Validate password (at least 6 characters)
  if (passwordInput.value.trim().length < 6) {
    error.innerHTML += "Password must be at least 6 characters long.<br/>";
    isValid = false;
    compteur++;
  }

  // Confirm password match
  if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    error.innerHTML += "Passwords do not match.<br/>";
    isValid = false;
    compteur++;
  }

  // Check if terms and conditions are accepted
  if (!termsCheckbox.checked) {
    error.innerHTML += "You must accept the terms and conditions.<br/>";
    isValid = false;
    compteur++;
  }

  // If all checks pass, redirect; otherwise, prevent form submission
  if (compteur == 0) {
    errorParent.style.display = "none";
    console.log("Form submission");
    window.location.href = "form.html"; // Redirect on successful validation
  } else {
    console.log("Form submission 2");
    event.preventDefault(); // Prevent form submission on validation errors
  }
});


// Hide error message on close button click
errorAction.addEventListener("click", () => {
  errorParent.style.display = "none";
  error.innerHTML = '';
});

Validate.addEventListener("click", () => {
  window.location.href = "../Html/Home.html";
});
