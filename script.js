// Simulated user data (for demonstration purposes)
const users = [];

// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the simulated data
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // If the user is found, redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Event listener for the sign-up link
document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    const username = prompt("Enter a username:");
    const password = prompt("Enter a password:");

    if (username && password) {
        // Save user data to the simulated users array
        users.push({ username, password });
        alert('Sign up successful! You can now log in.');
    }
});

// Function to load recordings (this would be replaced with actual data fetching in a real app)
function loadRecordings() {
    const recordingsList = document.querySelector('.recordings-list');
    for (let i = 1; i <= 7; i++) {
        const recordingItem = document.createElement('div');
        recordingItem.className = 'recording-item';
        recordingItem.innerHTML = `<h3>Recording ${i}</h3><video controls><source src="recording${i}.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
        recordingsList.appendChild(recordingItem);
    }
}

// Call loadRecordings on dashboard page load
if (document.title === 'Dashboard') {
    loadRecordings();
}