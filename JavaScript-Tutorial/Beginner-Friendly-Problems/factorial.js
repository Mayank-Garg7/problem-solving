// This program calculates the factorial of a given number
let num = parseInt(prompt("Enter a number to find its factorial:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial of " + num + " is: " + factorial);
