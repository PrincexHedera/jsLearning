function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test the function
let number = 5;
let result = factorial(number);
console.log(`Factorial of ${number} is ${result}`);
