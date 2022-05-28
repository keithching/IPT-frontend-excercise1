const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert('yay');
    clearForm();
  };
});

const nameInputDiv = document.getElementById('nameInput');
const emailInputDiv = document.getElementById('emailInput');
const passwordInputDiv = document.getElementById('passwordInput');
const passwordConfirmInputDiv = document.getElementById('passwordConfirmInput');

const validateForm = () => {
  let isValid = true;

  const nameErrorDiv = document.querySelector('.name.inputBlock > span');
  if (!nameInputDiv.validity.valid) {
    if (nameInputDiv.validity.valueMissing) nameErrorDiv.textContent = 'Please provide name';
    isValid = false;
  }
  else nameErrorDiv.textContent = '';

  const emailErrorDiv = document.querySelector('.email.inputBlock > span');
  if (!emailInputDiv.validity.valid) {
    if (emailInputDiv.validity.valueMissing) emailErrorDiv.textContent = 'Please provide email';
    else if (emailInputDiv.validity.typeMismatch) emailErrorDiv.textContent = 'Please provide correct format';
    isValid = false;
  }
  else emailErrorDiv.textContent = '';

  const passwordErrorDiv = document.querySelector('.password.inputBlock > span');
  if (!passwordInputDiv.validity.valid) {
    if (passwordInputDiv.validity.valueMissing) passwordErrorDiv.textContent = 'Please provide password';
    else if (passwordInputDiv.validity.tooShort || passwordInputDiv.validity.patternMismatch) passwordErrorDiv.textContent = '12 or more combination of uppercase and lowercase letters, numbers, and symbols';
    isValid = false;
  }
  else passwordErrorDiv.textContent = '';

  const passwordConfirmErrorDiv = document.querySelector('.passwordConfirm.inputBlock > span');
  if (!passwordConfirmInputDiv.validity.valid) {
    if (passwordConfirmInputDiv.validity.valueMissing) passwordConfirmErrorDiv.textContent = 'Please provide password confirmation';
    else if (passwordConfirmInputDiv.value !== passwordInputDiv.value) passwordConfirmErrorDiv.textContent = 'Please provide matching password confirmation';
    else if (passwordConfirmInputDiv.validity.tooShort || passwordConfirmInputDiv.validity.patternMismatch) passwordConfirmErrorDiv.textContent = '12 or more combination of uppercase and lowercase letters, numbers, and symbols';
    isValid = false;
  }
  else passwordConfirmErrorDiv.textContent = '';

  return isValid;
};

const clearForm = () => {
  nameInputDiv.value = '';
  emailInputDiv.value = '';
  passwordInputDiv.value = '';
  passwordConfirmInputDiv.value = '';
};