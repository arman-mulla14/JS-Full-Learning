let arr = [1, 2, 3, 4, 5];

// using splice() to remove elements from the array
arr.splice(2,2,11);  // index, deleteCount, newValue

console.log(arr); // Output: [1, 2, 11, 5]

// what happeens 

// using splice() to add elements to the array
arr.splice(2, 0, 3, 4);
console.log(arr); // Output: [1, 2, 3, 4, 5]