// Function to calculate tax based on salary
function calculateTax() {
    const salary = parseFloat(document.getElementById("salary").value);
    let tax = 0;

    // Check if the salary is a valid number
    if (isNaN(salary) || salary < 0) {
        alert("Please enter a valid positive number for salary.");
        return;
    }

    // Calculate tax based on salary slabs
    if (salary < 300000) {
        tax = 0;
    } else if (salary >= 300000 && salary < 750000) {
        tax = salary * 0.10; // 10% tax
    } else if (salary >= 750000) {
        tax = salary * 0.20; // 20% tax
    }

    // Display the calculated tax
    document.getElementById("result").innerHTML = `
        <p>Your Annual Salary: ₹${salary.toLocaleString()}</p>
        <p>Tax to be Paid: ₹${tax.toLocaleString()}</p>
        <p>Total Salary After Tax: ₹${(salary - tax).toLocaleString()}</p>
    `;
}