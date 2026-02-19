
let arr = [1, 3, 4, 5, 6, 7];
// using filter() to create a new array with all elements that satisfy a condition
// that will return a new array with all elements that satisfy the condition, and an empty array if no elements satisfy the condition

let even = arr.filter(arr => arr % 2 ==0); 
console.log(even); // Output: [4, 6]