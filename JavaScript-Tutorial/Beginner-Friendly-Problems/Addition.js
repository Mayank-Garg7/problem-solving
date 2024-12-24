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

// 7. **= Exponentiation assignment
num1 **= num2;
console.log("Value of num1 after using exponentiation assignment operator is: " + num1);

// 8. Bitwise AND assignment operator 
num1 &= num2;
console.log("Value of num1 after using bitwise AND assignment operator is: " + num1);

// 9. Bitwise OR assignment operator
num1 |= num2;
console.log("Value of num1 after using bitwise OR assignment operator is: " + num1);

// 10. Bitwise XOR assignment operator
num1 ^= num2;
console.log("Value of num1 after using bitwise XOR assignment operator is: " + num1);

// 11. Bitwise left shift assignment operator
num1 <<= num2;
console.log("Value of num1 after using bitwise left shift assignment operator is: " + num1);

// 12. Bitwise right shift assignment operator
num1 >>= num2;
console.log("Value of num1 after using bitwise right shift assignment operator is: " + num1);

// 13. Bitwise unsigned right shift assignment operator
num1 >>>= num2;
console.log("Value of num1 after using bitwise unsigned right shift assignment operator is: " + num);


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

// 7. Strictly equal to 
let strictEqual = num1 === num2;
console.log("Is num1 strictly equal to num2 in both value and data type? " + strictEqual);

// 8. Strictly not equal to 
let strNotEqual = num1 !== num2;
console.log("Is num1 strictly not equal to num2 in both value and data type? " + strNotEqual);


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

// 7. Unsigned right shift 
let unsignedRightShift = num1 >>> 1; // Changed `>>` to `>>>` for unsigned right shift
console.log("Result of unsigned right shift (num1 >>> 1): " + unsignedRightShift);


// ---------------------------------------------------------------------------------------------------------------------------------
// String Operators
// 1. Concatenation
let greeting = "Hello, " + "World!";
console.log("String concatenation result: " + greeting);


// ---------------------------------------------------------------------------------------------------------------------------------
// Conditional (Ternary) Operator 
// 1. Ternary Operator 
let ternaryResult = (num1 > num2) ? "num1 is greater" : "num2 is greater";
console.log("Ternary operator result: " + ternaryResult);


// ---------------------------------------------------------------------------------------------------------------------------------
// Type Operators 
// 1. typeof Operator
let typeOfNum1 = typeof num1;
console.log("Type of num1 is: " + typeOfNum1);
// 2. instanceof Operator
let instanceOfNum1 = num1 instanceof Number;
console.log("Is num1 an instance of Number? " + instanceOfNum1);


// ---------------------------------------------------------------------------------------------------------------------------------
// Unary Operators 
// 1. Unary Plus
let unaryPlus = +num1;
console.log("Unary plus of num1 is: " + unaryPlus);
// 2. Unary Minus
let unaryMinus = -num1;
console.log("Unary minus of num1 is: " + unaryMinus);
// 3. Increment Operator
let num1Incremented = num1++;
console.log("Incremented value of num1 is: " + num1Incremented);
// 4. Decrement Operator
let num1Decrement = num1--;
console.log("Decrement value of num1 is: " + num1Decrement);


// ---------------------------------------------------------------------------------------------------------------------------------
// Comma Operator 
let commaOperator = (num1, num2) => num1 + num2;
console.log("Comma operator result: " + commaOperator(5, 10));


// ---------------------------------------------------------------------------------------------------------------------------------
// Spread and Rest Operators 
// 1. Spread Operator
let spreadOperator = [...num1, ...num2];
console.log("Spread operator result: " + spreadOperator);
// 2. Rest Operator
let restOperator = (...args) => args;
console.log("Rest operator result: " + restOperator(1, 2, 3, 4, 5));


// ---------------------------------------------------------------------------------------------------------------------------------

