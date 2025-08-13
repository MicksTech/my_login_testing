document.addEventListener('DOMContentLoaded', function () {
	// Your code here
    //document.getElementById('currentYear').innerText = new Date().getFullYear();


});

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    if (email === 'johndeo@gmail.com' && pass === '1234567') {
        alert('Logged in successfully');
        window.location.href = 'index.html';
    } else {
        alert('Wrong Credentials!');
        window.location.href = 'Login.html';
    }
}

var loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', login);
}