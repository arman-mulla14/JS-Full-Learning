function Roll(){
let data = document.getElementById("num").value; 

let result = document.getElementById("data"); 

let count = data; 

for(let i = 0 ; i<= 10; i++){
result.textContent= (i*count); 

}
}