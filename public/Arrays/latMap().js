let arr  = [1, 2, 3, 4, 5];
// using latMap() to create a new array by applying a function to each element of the original array
// that will return a new array containing the results of applying the function to each element of the original array, and it will not modify the original array
let newArr = arr.map(x => x * 2);
console.log(newArr); // Output: [2, 4, 6, 8, 10]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array is not modified)