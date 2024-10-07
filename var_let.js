function varExample() {
    var x = 1; // Variable declared with var

    if (true) {
        var x = 2; // Same variable (redeclared within the same scope)
        console.log("Inside if-block (var):", x); // Output: 2
    }

    console.log("Outside if-block (var):", x); // Output: 2 (var has function scope)
}

// let example
function letExample() {
    let y = 1; // Variable declared with let

    if (true) {
        let y = 2; // New variable (block-scoped)
        console.log("Inside if-block (let):", y); // Output: 2
    }

    console.log("Outside if-block (let):", y); // Output: 1 (let has block scope)
}

// const example
function constExample() {
    const z = 1; // Variable declared with const

    console.log("Initial value (const):", z); // Output: 1

    // Uncommenting the following line would cause an error (TypeError)
    // z = 2;

    if (true) {
        const z = 2; // New variable (block-scoped)
        console.log("Inside if-block (const):", z); // Output: 2
    }

    console.log("Outside if-block (const):", z); // Output: 1 (const has block scope)
}

// Call the functions and check the output in the console
console.log("VAR EXAMPLE");
varExample();

console.log("LET EXAMPLE");
letExample();

console.log("CONST EXAMPLE");
constExample();