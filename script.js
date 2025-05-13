const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

if (registrationForm) {
  registrationForm.addEventListener('submit', (event) => {
    let isValid = true;

    // Required field check for Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Name is required.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Invalid email format.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Password rules (min 8 characters)
    if (!passwordInput.value) {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

    // Confirm password check
    if (confirmPasswordInput) {
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
      } else {
        confirmPasswordError.textContent = '';
      }
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    } else {
      alert('Form submitted successfully!'); // Replace with your actual submission logic
    }
  });

  // Bonus: Real-time feedback while typing (for email)
  emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() && !emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Invalid email format.';
    } else if (emailError.textContent === 'Invalid email format.') {
      emailError.textContent = '';
    }
  });

  // Bonus: Real-time feedback while typing (for password length)
  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
    } else if (passwordError.textContent.includes('at least 8')) {
      passwordError.textContent = '';
    }
  });

  // Bonus: Real-time feedback while typing (for confirm password)
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', () => {
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
      } else {
        confirmPasswordError.textContent = '';
      }
    });
  }
}