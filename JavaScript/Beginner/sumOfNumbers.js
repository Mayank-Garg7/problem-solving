// This program calculates the sum of the first n natural numbers
let str = prompt("Enter a string to check if it's a palindrome:");
let reversedStr = str.split('').reverse().join('');

if (str.toLowerCase() === reversedStr.toLowerCase()) { // Case-insensitive comparison
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}

