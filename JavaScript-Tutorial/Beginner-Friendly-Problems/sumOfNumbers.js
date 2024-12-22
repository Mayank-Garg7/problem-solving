<<<<<<< HEAD:JavaScript-Tutorial/Beginner-Friendly-Problems/sumOfNumbers.js
// This program calculates the sum of the first n natural numbers
let n = 5;  // Change the value of n
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of first " + n + " natural numbers is: " + sum);
=======
// This program calculates the sum of the first n natural numbers
let str = prompt("Enter a string to check if it's a palindrome:");
let reversedStr = str.split('').reverse().join('');

if (str.toLowerCase() === reversedStr.toLowerCase()) { // Case-insensitive comparison
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}

>>>>>>> 0d3cdaf83a7fbec585bfe35e98f3c7c5f6a8e278:JavaScript/Beginner/sumOfNumbers.js
