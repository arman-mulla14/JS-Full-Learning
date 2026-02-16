

let arr = [1, 2, 3, 4, 5];

// using map() to create a new array by applying a function to each element of the original array
// that will return a new array with the results of calling a provided function on every element in the calling array

let dd = arr.map(arr => arr * 2); 
console.log(dd); 

dd.forEach(dd=>{
    console.log(dd); 
})