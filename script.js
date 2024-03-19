// For the title
const title = document.querySelector('#title');
// For reg form
const regForm = document.querySelector('.regForm');

// For reg form fields
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

// For login form
const logForm = document.querySelector('.logForm');

// For login form fields
const username = document.getElementById('username');
const password = document.getElementById('password');

// For username and passwords
const usernameAndPasswords = {};

// For getting the date and time today
const time = new Date().toLocaleString();

// Function to check if a username already exists
function checkIfUserExists(username, usernameAndPasswords) {
  if (usernameAndPasswords.hasOwnProperty(username)) {
    return true;
  }
}

// Function to validate username and passwords stored
function validateUserNameAndPassword(username, password, usernameAndPasswords) {
  if (usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] === password) {
    return true;
  }
}

// Function to validate password strength with notifications
function validatePassword(password) {
  // Check password length (minimum 8 characters)
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // Check for presence of only integers (all digits)
  if (/^\d+$/.test(password)) {
    alert("Password must not consist only of numbers.");
    return false;
  }

  // Check for combination of uppercase and lowercase characters
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  if (!hasUppercase || !hasLowercase) {
    alert("Password must contain a combination of uppercase and lowercase letters.");
    return false;
  }

  // Password meets all requirements
  return true;
}

regForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validate if one of the fields are empty
  if (usernameReg.value.length === 0 || passwordReg.value.length === 0) {
    alert("Fill out all the forms first");
  } else {
    // Validate password strength with notifications
    if (!validatePassword(passwordReg.value)) {
      return; // Prevent further processing if password is invalid
    }

    // Check if username already exists
    if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
      alert('Username is already taken');
    } else {
      // Username and password are valid, proceed with registration
      usernameAndPasswords[usernameReg.value] = passwordReg.value;
      console.log(usernameAndPasswords);

      // Display the login form and get rid of the registration form on the page
      logForm.style.display = "block";
      regForm.style.display = "none";
    }
  }
});

logForm.addEventListener('submit', function (e) {
  // ... (rest of login functionality remains the same)
});