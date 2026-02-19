let arr = [1, 2, 3, 4, 5];
//using Array.from() to create a new array from an array-like or iterable object
// that will create a new array from an array-like or iterable object, and it will return a new array without modifying the original array
let newArr = Array.from(arr);
console.log(newArr); // Output: [1, 2, 3, 4, 5]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array is not modified)