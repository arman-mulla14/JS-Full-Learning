function roll(){
let PI = 3.14; 
let circumference;


let radius = document.getElementById('value').value; 
radius = Number(radius);
    circumference = 2 * PI * radius; 

let result = document.getElementById('result'); 
result.textContent = `The circumference is ${circumference}`;

}