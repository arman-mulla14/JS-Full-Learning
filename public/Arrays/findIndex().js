let arr = [1, 2, 3, 4, 5];

// findindex that will return the index of the first element in the array that satisfies the condition, and -1 if no elements satisfy the condition

let index = arr.findIndex(num => num > 13);
console.log(index); // Output: -1 (since no element is greater than 13)