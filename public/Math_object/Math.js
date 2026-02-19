console.log("Hello World");

let x  = 3.14; 
let y = 2; 
let z = 1; 


z = Math.round(x); // --> Rounds the number to nearest integer
console.log(z);

z = Math.floor(x); // --> Gives Min of the number
console.log(z);

z = Math.ceil(x);// -->  Gives MAx of the number
console.log(z); 


z =Math.trunc(x); // --> removes the decimal part
console.log(z);

z = Math.pow(x, y); // -->  x raised to the power of y
console.log(z);


z = Math.sqrt(x); // --> square root of x
console.log(z);

z = Math.abs(-x); // --> absolute value of x
console.log(z);


z = Math.sign(-x); // --> returns -1 for negative , 1 for positive and 0 for zero
console.log(z);

z = Math.sin(x); // --> returns sine of x (x in radians)    
console.log(z);

z = Math.cos(x); // --> returns cosine of x (x in radians)
console.log(z);

z = Math.tan(x); // --> returns tangent of x (x in radians)
console.log(z);

z = Math.log(x); // --> returns natural logarithm of x
console.log(z);

let max = Math.max(x,y,z) // --> returns the maximum of x,y,z
console.log(max);

let min = Math.min(x,y,z) // --> returns the minimum of x,y,z
console.log(min);