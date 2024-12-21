// This program checks if a string is a palindrome
let str = "madam";  // Change the string here
let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}
