const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-form input[name="email"]');
const passwordInput = document.querySelector('.login-form input[name="password"]');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (email === '' || password === '') {
    alert('Toate câmpurile trebuie completate!');
    return;
  }
  
  const formData = {
    email,
    password,
  };
  
  console.log(formData);
  
  loginForm.reset();
});