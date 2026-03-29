document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the default way
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials and redirect without an alert
    if (username === 'admin' && password === '1234') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});