// Function to bring the image to the front
function bringImageToFront() {
    document.querySelector(".hover-image").style.zIndex = 3; // Brings the image to the front
}

// Function to send the image back behind the division
function sendImageToBack() {
    document.querySelector(".hover-image").style.zIndex = 1; // Sends the image to the back
}
