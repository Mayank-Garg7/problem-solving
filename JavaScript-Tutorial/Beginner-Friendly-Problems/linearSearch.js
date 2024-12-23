// This program implements linear search to find an element in an array
let arr = [10, 20, 30, 40, 50];  // Change the array here
let target = 30;  // Change the target number here
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        console.log(target + " found at index " + i);
        break;
    }
}

if (!found) {
    console.log(target + " not found in the array");
}
