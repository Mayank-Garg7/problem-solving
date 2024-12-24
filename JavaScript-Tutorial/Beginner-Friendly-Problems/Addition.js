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

// 5. Divide equal to operator
num1 /= num2;
console.log("Value of num1 after using divide equal to operator is: " + num1);

// 6. Modulus equal to operator
num1 %= num2;
console.log("Value of num1 after using modulus equal to operator is: " + num1);

// ---------------------------------------------------------------------------------------------------------------------------------
// Comparison Operators
// 1. Equal to operator
let isEqual = num1 == num2;
console.log("Is num1 equal to num2? " + isEqual);

// 2. Not equal to operator
let isNotEqual = num1 != num2;
console.log("Is num1 not equal to num2? " + isNotEqual);

// 3. Greater than operator
let isGreaterThan = num1 > num2;
console.log("Is num1 greater than num2? " + isGreaterThan);

// 4. Less than operator
let isLessThan = num1 < num2;
console.log("Is num1 less than num2? " + isLessThan);

// 5. Greater than or equal to operator
let isGreaterThanOrEqualTo = num1 >= num2;
console.log("Is num1 greater than or equal to num2? " + isGreaterThanOrEqualTo);

// 6. Less than or equal to operator
let isLessThanOrEqualTo = num1 <= num2;
console.log("Is num1 less than or equal to num2? " + isLessThanOrEqualTo);

// ---------------------------------------------------------------------------------------------------------------------------------
// Logical Operators
// 1. Logical AND
let andResult = (num1 > 0) && (num2 > 0);
console.log("Are both num1 and num2 greater than 0? " + andResult);

// 2. Logical OR
let orResult = (num1 > 0) || (num2 > 0);
console.log("Is at least one of num1 or num2 greater than 0? " + orResult);

// 3. Logical NOT
let notResult = !(num1 > num2);
console.log("Is num1 not greater than num2? " + notResult);


// ---------------------------------------------------------------------------------------------------------------------------------
// Bitwise Operators
// 1. Bitwise AND
let bitwiseAnd = num1 & num2;
console.log("Bitwise AND of num1 and num2 is: " + bitwiseAnd);

// 2. Bitwise OR
let bitwiseOr = num1 | num2;
console.log("Bitwise OR of num1 and num2 is: " + bitwiseOr);

// 3. Bitwise XOR
let bitwiseXor = num1 ^ num2;
console.log("Bitwise XOR of num1 and num2 is: " + bitwiseXor);

// 4. Bitwise NOT
let bitwiseNot = ~num1;
console.log("Bitwise NOT of num1 is: " + bitwiseNot);

// 5. Left Shift
let leftShift = num1 << 1;
console.log("Left shift of num1 by 1 is: " + leftShift);

// 6. Right Shift
let rightShift = num1 >> 1;
console.log("Right shift of num1 by 1 is: " + rightShift);

