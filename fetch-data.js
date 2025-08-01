// Define async function to fetch user data and display it
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // Check if response is ok (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse JSON data
        const users = await response.json();

        // Clear loading text
        dataContainer.innerHTML = '';

        // Create ul element to hold user list
        const userList = document.createElement('ul');

        // Loop through users and create li for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear container and show error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
