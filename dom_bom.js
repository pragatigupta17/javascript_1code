 // DOM Manipulation Example: Change the color of the text when the button is clicked
 document.getElementById('changeColorBtn').addEventListener('click', () => {
    // Accessing and modifying a DOM element (the paragraph text)
    const textElement = document.getElementById('text');
    textElement.style.color = textElement.style.color === 'blue' ? 'black' : 'blue';
});

// BOM Manipulation Example: Display browser information when the button is clicked
document.getElementById('showInfoBtn').addEventListener('click', () => {
    // Accessing BOM properties to get browser details
    const browserInfo = `
        Browser Code Name: ${navigator.appCodeName}<br>
        Browser Name: ${navigator.appName}<br>
        Browser Version: ${navigator.appVersion}<br>
        User-Agent: ${navigator.userAgent}<br>
        Platform: ${navigator.platform}<br>
        Language: ${navigator.language}
    `;

    // Display the browser information in the "info" div
    document.getElementById('info').innerHTML = browserInfo;
});