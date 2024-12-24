// this program is for operators in JAVASCRIPT 

// Prompt user for input
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

// ---------------------------------------------------------------------------------------------------------------------------------

// Arithmetic Operators
// 1. Addition
let sum = num1 + num2;
console.log("Addition of two given numbers is: " + sum);

// 2. Subtraction
let difference = num1 - num2;
console.log("Subtraction of two given numbers is: " + difference);

// 3. Multiplication
let product = num1 * num2;
console.log("Multiplication of two given numbers is: " + product);

// 4. Division
let quotient = num1 / num2;
console.log("Division of two given numbers is: " + quotient);

// 5. Modulus
let remainder = num1 % num2;
console.log("Remainder of two given numbers is: " + remainder);

// 6. Exponentiation
let power = Math.pow(num1, num2);
console.log("Exponentiation of two given numbers is: " + power);

// ---------------------------------------------------------------------------------------------------------------------------------

// Assignment Operators
// 1. Equal to operator
num1 = num2;
console.log("Value of num1 after using equal to operator is: " + num1);

// 2. Plus equal to operator
num1 += num2;
console.log("Value of num1 after using plus equal to operator is: " + num1);

// 3. Minus equal to operator
num1 -= num2;
console.log("Value of num1 after using minus equal to operator is: " + num1);

// 4. Multiply equal to operator
num1 *= num2;
console.log("Value of num1 after using multiply equal to operator is: " + num1);

