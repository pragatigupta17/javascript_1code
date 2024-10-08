function calculateGST() {
    
    const amount = parseInt(document.getElementById("amount").value);
    const gstRate = parseInt(document.getElementById("gstRate").value);

    if (isNaN(amount) || isNaN(gstRate) || amount <= 0 || gstRate <= 0) {
        alert("Please enter valid numbers for amount and GST rate.");
        return;
    }

    // Calculate SGST and CGST
    const totalGstRate = gstRate / 100;
    const totalGstAmount = amount * totalGstRate;
    const sgstAmount = totalGstAmount / 2;
    const cgstAmount = totalGstAmount / 2;
    const totalAmountWithGst = amount + totalGstAmount;

    // Display the calculated values
    document.getElementById("displayAmount").innerText = amount.toFixed(2);
    document.getElementById("sgstAmount").innerText = sgstAmount.toFixed(2);
    document.getElementById("cgstAmount").innerText = cgstAmount.toFixed(2);
    document.getElementById("totalGstAmount").innerText = totalGstAmount.toFixed(2);
    document.getElementById("totalAmountWithGst").innerText = totalAmountWithGst.toFixed(2);
}

