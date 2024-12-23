// This program counts the number of vowels in a string
let str = "Hello World";  // Change the string here
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
        count++;
    }
}

console.log("Number of vowels in the string: " + count);
