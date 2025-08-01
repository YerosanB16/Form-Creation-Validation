document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const feedbackDiv = document.getElementById('feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;
    let messages = [];

    // Username validation
    if (username === '') {
      isValid = false;
      messages.push('Username is required.');
    }

    // Password validation
    if (password.length < 6) {
      isValid = false;
      messages.push('Password must be at least 6 characters.');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      messages.push('Enter a valid email address.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // red
    }
  });
});
