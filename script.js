const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const container = document.querySelector('.container');

document.getElementById('switchToSignUp').addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

document.getElementById('switchToSignIn').addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign In form submitted!');
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up form submitted!');
});