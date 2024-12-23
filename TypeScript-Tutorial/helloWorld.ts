// Import readline module
import * as readline from 'readline';

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello World!");

rl.question("Enter your full name: ", (name) => {
    console.log(`Your name is: ${name}`);
    rl.close(); // Close the interface
});
