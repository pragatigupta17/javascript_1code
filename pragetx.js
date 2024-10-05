// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
 }

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Attach open popup function to the button
document.querySelector('.open-popup-btn').addEventListener('click', openPopup);

// Button click event handlers for each header button
document.getElementById('partnerBtn').addEventListener('click', function() {
    alert("Apply to become a partner.");
});

document.getElementById('jobBtn').addEventListener('click', function() {
    alert("Check job opportunities.");
});

document.getElementById('projectBtn').addEventListener('click', function() {
    alert("Inquire about project collaboration.");
});

// Subscription form handling
function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert("Thank you for subscribing with: " + email);
        document.getElementById('email').value = ''; // Clear input field
        closePopup(); // Close popup after subscription
    } else {
        alert("Please enter a valid email.");
    }
}