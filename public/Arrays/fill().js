let arr = [1, 2, 3, 4, 5];
// using fill() to fill the elements of the array with a specified value
// that will fill the elements of the array with a specified value, and it will modify the original array
arr.fill(0,3); 
console.log(arr); // Output: [1, 2, 3, 0, 0]
// using fill() to fill a portion of the array with a specified value
arr.fill(1, 2, 4); 
console.log(arr); // Output: [1, 2, 1, 1, 0] (elements from index 2 to index 4 are filled with 1)