let arr = [1, 2, 3, 4, 5];
// using flat() to flatten a nested array
// that will return a new array with all sub-array elements concatenated into it recursively up to the specified depth, and it will not modify the original array
let nestedArr = [1, 2, [3, 4], [5, [6, 7]]];
let flatArr = nestedArr.flat(2); 
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 7]