const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace 'YOUR_FIREBASE_DATABASE_URL' with your actual Firebase database URL
  const databaseUrl = 'https://your-firebase-database-url.firebaseio.com/users.json';

  fetch(databaseUrl)
    .then(response => response.json())
    .then(data => {
      const user = data[username];
      if (user && user.password === password) {
        // Successful authentication
        messageElement.textContent = 'Login successful! Redirecting to dashboard...';
        // Redirect to the dashboard or perform other actions
        window.location.href = 'dashboard.html'; // Replace with your actual dashboard URL
      } else {
        // Failed authentication
        messageElement.textContent = 'Invalid username or password.';
      }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      messageElement.textContent = 'An error occurred. Please try again later.';
    });
});