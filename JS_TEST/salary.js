function calculateTax() {
    const salary = parseInt(document.getElementById("salary").value);
    let tax = 0;


    if (isNaN(salary) || salary < 0) {
        alert("Please enter a valid positive number for salary.");
        return;
    }


    if (salary < 300000) {
        tax = 0;
    } else if (salary >= 300000 && salary < 750000) {
        tax = salary * 0.10; // 10% tax
    } else if (salary >= 750000) {
        tax = salary * 0.20; // 20% tax
    }


    document.getElementById("result").innerHTML = `
        <p>Your Annual Salary: ₹${salary.toLocaleString()}</p>
        <p>Tax to be Paid: ₹${tax.toLocaleString()}</p>
        <p>Total Salary After Tax: ₹${(salary - tax).toLocaleString()}</p>
    `;
}