// This program checks if a number is even or odd
let number = prompt("Enter a number:"); // Take input from the user

// Convert the input to an integer
number = parseInt(number);

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}
