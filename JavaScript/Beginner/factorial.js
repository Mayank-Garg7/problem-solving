// This program calculates the factorial of a given number
let num = 5;  // Change the number here
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial of " + num + " is: " + factorial);