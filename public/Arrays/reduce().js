let arr = [1, 2, 3, 4, 5];
// using reduce() to reduce the array to a single value
// that will execute a reducer function on each element of the array, resulting in a single output value

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // Output: 15

// that will sum up all the elements in the array and return total sum of array 

let sum1 = arr.reduce((a , b)=> a + b ); 
console.log(sum1); 