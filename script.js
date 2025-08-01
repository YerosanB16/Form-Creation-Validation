const form = document.getElementById('registrationForm');
const feedbackDiv = document.getElementById('feedback');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();

  let isValid = true;
  let messages = [];

  // ✅ Username validation
  if (username === '') {
    isValid = false;
    messages.push('Username is required.');
  }

  // ✅ Password validation
  if (password.length < 6) {
    isValid = false;
    messages.push('Password must be at least 6 characters long.');
  }

  // ✅ Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    messages.push('Please enter a valid email address.');
  }

  // ✅ Display feedback
  feedbackDiv.style.display = 'block';

  if (isValid) {
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745'; // ✅ Green color
  } else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545'; // ✅ Red color (IMPORTANT to include this)
  }
});
