let arr = [1, 2, 3, 4, 5];
// using slice() to create a new array by slicing a portion of the original array
// that will return a new array containing the sliced portion of the original array, and it will not modify the original array
let newArr = arr.slice(1, 4); 
console.log(newArr); // Output: [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array is not modified)
