 // Function to display user input in the h1 tag
 function displayInput() {
    // Get the value from the input field
    const userInput = document.getElementById("userInput").value;

    // Check if input is empty, and display a message
    if (userInput.trim() === "") {
        alert("Please enter some text to display.");
        return;
    }

    // Set the text of the h1 tag to the user input
    document.getElementById("output").innerText = userInput;
}