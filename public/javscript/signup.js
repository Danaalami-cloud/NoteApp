function showSignInCard(event) {
    event.preventDefault();
    document.location.replace('/login');
    /* document.getElementById('signup').style.display = "block";
    document.getElementById('signIn').style.display = "none"; */
}

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/calandar');
      } else {
        alert(response.statusText);
      }
    }
};

document
  .querySelector('.signUpButton')
  .addEventListener('click', signupFormHandler);

document
.querySelector('.backToLoginBtn')
.addEventListener('click', showSignInCard);
