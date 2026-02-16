let arr = [1, 2, 3, 4, 5];

// using every() to check if all elements in the array satisfy a condition
// that will return true if all elements in the array satisfy the condition, and false if at least one element does not satisfy the condition   
console.log(arr.every(num => num > 0)); // Output: true
console.log(arr.every(num => num > 3)); // Output: false (since not all elements are greater than 3)
