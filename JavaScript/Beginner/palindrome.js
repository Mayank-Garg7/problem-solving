// This program checks if a string is a palindrome
let str = prompt("Enter a string to check if it's a palindrome:");
let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}
